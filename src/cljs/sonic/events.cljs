(ns sonic.events
  (:require
   [sonic.core :as core]
   [re-frame.core :as rf]
   [sonic.db :as db]))

(def BASE_SHIELD_MAX 100) ;starting maximum shield level

(def SHIELD_UPGRADE_MULIPLIER 15) ;amount that max shields increases per rank of shield systems

(def SHIELD_RECHARGE_MULTIPLIER 8) ;multiplier for shield recharge

(def LASER_DAMAGE_MULIPLIER 10) ;multiplier for laser attack

(def MISSILE_DAMAGE_MULTIPLIER 5) ;multiplier for missile attack

(def HP_GAIN 50) ;amount of max hp increased per stage

(def SUPERCHARGED_MULTIPLIER 1.5) ;damage multiplier for supercharged shield effect

(def SUPERCHARGE_THRESHOLD 0) ;threshold for supercharged shield effect

(def MAX_AMMO 10) ;ammo capacity for ship

(def AMMO_RECHARGE_RATE 2) ;number of turns per ammo refill

(def REPAIR_STRENGTH_MULTIPLIER 4) ;multiplier for repairing ship

(def ENEMY_COLOUR_LIST ["red" "orange" "green" "greenyellow" "lightslategray" "mediumvioletred" "orangered" "tomato" "springgreen" "magenta" "maroon" "orchid" "pink" "seagreen"])


;dispatches an action based on which action button was pressed
(defn actionDispatch
  [event]
  (fn [] (rf/dispatch [event])))

;dispatches :damageShip with the targeted system and ship
(defn damageDispatch
  [system type firingType]
  (fn [] (rf/dispatch [:damageShip system type firingType])))

;dispatches :repairShip with the targeted system and ship
(defn repairDispatch
  [system type]
  (fn [] (rf/dispatch [:repairShip system type])))

;checks if system on ship is disabled (0HP)
(defn systemDisabled?
  [system type]
  (if (or (>= 0 (-> @(rf/subscribe [type])
                    (:systems)
                    (system)
                    (get 0)))
          (and (= 0 (:ammo  @(rf/subscribe [type])))
               (= system :missiles)))
    true
    false))

;calculates the maximum shields the ship can have
(defn calcShieldsMax
  "calculates the maximum shield value given the rank of the ship's shield system"
  [shieldsSystemRank]
  (-> shieldsSystemRank
      (- 1)
      (* SHIELD_UPGRADE_MULIPLIER)
      (+ BASE_SHIELD_MAX)))

(defn randShipColour
  "creates a random hex colour code (no blue values) and sets ship to that colour"
  [ship]
  (let [randColour (rand-nth ENEMY_COLOUR_LIST)]
    (assoc ship :colour randColour)))

;initializes default db
(rf/reg-event-db
  ::initialize-db
  (fn [_ _]
    (core/devLog "initializing")
    db/default-db))

(defn systemReset
  "resets a system's HP based on its level"
  [systemStats]
  (vector (inc (get systemStats 1)) (get systemStats 1)))

(defn shipReset
  "resets a ship's HP, shields, ammo, systemHP's, and increases maxHP"
  [ship]
  (let [systemNames (keys (:systems ship))
        oldSystemStats (vals (:systems ship))
        newSystemStats (map systemReset oldSystemStats)
        newSystems (zipmap systemNames newSystemStats)
        newMaxHP (+ (:maxHP ship) HP_GAIN)
        newShields (-> newSystems :shields second calcShieldsMax)]
    (assoc ship :systems newSystems :maxHP newMaxHP :HP newMaxHP :shields newShields :ammo 2)))




;prompts player for playerName value
(rf/reg-event-fx
  ::gameStart
  (fn [cofx effects]
    (core/devLog "start of game")
    {:db (-> (assoc (:db cofx) :gameOver? false)
             (assoc :playerName (if-let [existingName (:playerName (:db cofx))]
                                  existingName
                                  (if-let [playerName (js/prompt "Enter your name:")]
                                   (if (= playerName "")
                                     "Player"
                                     playerName)
                                   "Player"))))
     :dispatch [:reset-db]}))

(defn reset-db
  "resets game state and applies HP buff using shipReset"
  [cofx _]
  (let [newPlayerShip (-> cofx :db :playerShip shipReset)
        newEnemyShip (-> cofx :db :enemyShip shipReset randShipColour)]
   {:db (assoc (:db cofx) :playerShip newPlayerShip :enemyShip newEnemyShip :gameOver? false :turn 0 :history [] :phase 0)
     :dispatch [:playerPhase]}))

(rf/reg-event-fx
  :reset-db
  reset-db)

;sends an alert and disables main view
(rf/reg-event-db
  :gameEnd
  (fn [db [_ loser gameOver?]]
    (core/devLog "end of battle")
    (let [loserName (if (= loser :playerShip)
                      (:playerName db)
                      "Enemy")
          gameOverMessage (str "Game Over! " loserName "'s ship was destroyed!")
          fleeMessage (str loserName " fled the battle!")]
      (do (js/alert (if gameOver?
                      gameOverMessage
                      fleeMessage))
          (assoc db :gameOver? true)))))




(defn shieldsSupercharged?
  "checks if a ship's current shields are above a threshold to activate the supercharged effect (2x damage multiplier)"
  [ship]
  (let [maxShields (-> ship
                     (:systems)
                     (:shields)
                     (get 1)
                     (calcShieldsMax))
        shipShields (:shields ship)
        threshold (- maxShields SUPERCHARGE_THRESHOLD)] ;threshold can be changed in future to balance power of supercharged effect
    (if (>= shipShields threshold)
      true
      false)))


;selects a random number from 1-6
(defn diceRoll
  []
  (+ 1 (rand-int 6)))

;calculates strength of shield charge
(defn calcShieldsStrength
  [shieldsSystemRank amount]
  (-> amount
      (* shieldsSystemRank)
      (* SHIELD_RECHARGE_MULTIPLIER)))

(defn calcAttackDamage
  "calculates the damage of an attack given the rank of the attacking system,
  the type of the attack, whether or not the attacker is supercharged, and a base multiplier"
  [attackRank attackType amount supercharged?]
  (* attackRank amount (if (= attackType :lasers)
                         LASER_DAMAGE_MULIPLIER
                         MISSILE_DAMAGE_MULTIPLIER) (if supercharged?
                                                      SUPERCHARGED_MULTIPLIER
                                                      1)))



;determines whether or not an attack of the specified type
;can potentially kill the target
;takes in attacker, defender, and firingType (:lasers or :missiles)
;returns true if target can be killed
(defn killRange?
  [attacker defender firingType]
  (let [vitality (if (= firingType :lasers)
                   (+ (:HP defender) (:shields defender))
                   (:HP defender))
        supercharged? (shieldsSupercharged? attacker)
        dmgFactor 6
        potentialDamage (-> attacker
                            (:systems)
                            (firingType)
                            (get 1)
                            (calcAttackDamage firingType dmgFactor (shieldsSupercharged? attacker)))]
    (if (>= potentialDamage vitality)
      true
      false)))

;returns ship with increased shields
(defn chargeShields [ship amount]
  (let [shieldsSystem (-> ship
                        (:systems)
                        (:shields))
        shieldsCurrentValue (:shields ship)
        shieldsSystemRank (get shieldsSystem 1)
        shieldsMax (calcShieldsMax shieldsSystemRank)
        shieldsStrength (calcShieldsStrength shieldsSystemRank amount)
        newShields (+ shieldsCurrentValue shieldsStrength)]
    (if @(rf/subscribe [:devMode])
      (println (str "shields boosted by " (- newShields shieldsCurrentValue))))
    (assoc ship :shields (if (> newShields shieldsMax)
                           shieldsMax
                           newShields))))

;toggles firing mode for player to select target
(rf/reg-event-fx
  :actionFire
  (fn [cofx event]
    (core/devLog "player toggling firing mode")
    {:db (:db cofx)
     :dispatch [:setFiringType :lasers]}))

(rf/reg-event-fx
  :actionLaunch
  (fn [cofx event]
    (core/devLog "player toggling launch mode")
    {:db (:db cofx)
     :dispatch [:setFiringType :missiles]}))

;calls chargeShields on playerShip when corresponding button is pressed,
;then ends player phase
(defn actionChargeShields
  [cofx events]
  (core/devLog "player charging shields")
  {:db (assoc (:db cofx) :playerShip (chargeShields @(rf/subscribe [:playerShip]) (diceRoll)))
   :dispatch [:changePhase]})

(rf/reg-event-fx
  :actionChargeShields
  actionChargeShields)

(defn actionRepairShip
  [cofx effects]
  {:db (:db cofx)
   :dispatch [:toggleRepairingMode]})

(rf/reg-event-fx
  :actionRepairShip
  actionRepairShip)

;attempt to escape the battle
(rf/reg-event-fx
  :actionFlee
  (fn [cofx effects]
    (core/devLog "player fleeing")
    {:db (:db cofx)
     :dispatch [:gameEnd :playerShip false]}))

;used with map to create a list of all active player systems
;takes in a key, returns the same key or false.
(defn playerSystemsActive?
  [systemType]
  (let [ship @(rf/subscribe [:playerShip])
        system (systemType (:systems ship))]
    (if (> (get system 0) 0)
      systemType
      false)))

;takes in a key from a vector, checks to see if it is damaged.
;if true, returns the key back. else, return false.
;used with map to create a vector of all damaged systems.
(defn enemySystemsDamaged?
  [systemType]
  (let [ship @(rf/subscribe [:enemyShip])
        system (systemType (:systems ship))]
    (if (-> (get system 0)
            (< (+ (get system 1) 1)))
      systemType
      false)))

;calls chargeShields on enemyShip and updates value
(rf/reg-event-fx
  :enemyChargeShields
  (fn [cofx events]
    (core/devLog "enemy charging shields")
    {:db (assoc (:db cofx) :enemyShip (chargeShields (:enemyShip (:db cofx)) (diceRoll)))
     :dispatch [:changePhase]}))

;holds priority list for enemy attacks and repairs
(def enemyPriorityList
  {:target [:lasers :missiles :shields :repairBay :engines]
   :repair [:missiles :lasers :shields :repairBay :engines]})

;selects a system target for enemy AI
;by filtering through priority list
(defn getTargetSystem
  [filterType]
  (get (->> (filterType enemyPriorityList)
            (map (if (= filterType :repair)
                   enemySystemsDamaged?
                   playerSystemsActive?))
            (remove false?)
            (vec)) 0))

;enemy chooses actions based on which systems are available
(defn enemyChooseAction
  [enemyShip playerShip]
  (core/devLog "enemy choosing action")
  (let [enemySystems (:systems enemyShip)
        enemyShields (:shields enemyShip)
        playerTargetSystem (getTargetSystem :target)
        enemyTargetSystem (getTargetSystem :repair)]
    (if (and (killRange? enemyShip playerShip :missiles)
             (false? (systemDisabled? :missiles :enemyShip)))
      (do (core/devLog "enemy has decided to launch missiles")
          [:damageShip playerTargetSystem :playerShip :missiles])
      (if (and (killRange? enemyShip playerShip :lasers)
               (false? (systemDisabled? :lasers :enemyShip)))
        (do (core/devLog "enemy has decided to fire lasers")
            [:damageShip playerTargetSystem :playerShip :lasers])
        (if (and (killRange? playerShip enemyShip :missiles)
                 (not= nil enemyTargetSystem)
                 (false? (systemDisabled? :repairBay :enemyShip)))
          (do (core/devLog "enemy has decided to repair their ship")
              [:repairShip enemyTargetSystem :enemyShip])
          (if (and (killRange? playerShip enemyShip :lasers)
                   (false? (systemDisabled? :shields :enemyShip)))
            (do (core/devLog "enemy has decided to charge their shields")
                [:enemyChargeShields])
            (if (and (>= (:shields playerShip) 100)
                     (false? (systemDisabled? :lasers :enemyShip)))
              (do (core/devLog "enemy has decided to fire lasers")
                  [:damageShip playerTargetSystem :playerShip :lasers])
              (if (false? (systemDisabled? :missiles :enemyShip))
                (do (core/devLog "enemy has decided to launch missiles")
                    [:damageShip playerTargetSystem :playerShip :missiles])
                (if (false? (systemDisabled? :lasers :enemyShip))
                  (do (core/devLog "enemy has decided to fire lasers")
                      [:damageShip playerTargetSystem :playerShip :lasers])
                  (if (and (false? (systemDisabled? :shields :enemyShip))
                           (< enemyShields (calcShieldsMax (get (:shields enemySystems) 1))))
                    (do (core/devLog "enemy has decided to charge their shields")
                        [:enemyChargeShields])
                    (if (false? (systemDisabled? :repairBay :enemyShip))
                      (do (core/devLog "enemy has decided to repair their ship")
                          [:repairShip enemyTargetSystem :enemyShip])
                      (do (core/devLog "enemy has decided to flee")
                          [:gameEnd :enemyShip false]))))))))))))

;toggles phase between player and enemy after each action
(defn changePhase
  [cofx effects]
  (if (false? (:gameOver? (:db cofx)))
    (do (core/devLog "changing phase")
        (if (zero? (:phase (:db cofx)))
          {:db (assoc (:db cofx) :phase 1)
           :dispatch [:enemyPhase]}
          {:db (assoc (:db cofx) :phase 0)
           :dispatch [:playerPhase]}))))

(rf/reg-event-fx
  :changePhase
  changePhase)


(defn refillAmmo
  "takes a ship and a turn number, adds 1 to ship's ammo if turn is divisible by two; returns new ship"
  [ship turn]
  (let [oldAmmo (:ammo ship)
        newAmmo (if (and (> MAX_AMMO oldAmmo)
                         (= 0 (mod turn AMMO_RECHARGE_RATE)))
                  (+ oldAmmo 1)
                  oldAmmo)]
       (assoc ship :ammo newAmmo)))

;initiates enemy AI
(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (core/devLog "start of enemy phase")
    (let [playerShip (:playerShip (:db cofx))
          enemyShip (:enemyShip (:db cofx))]
      {:db (:db cofx)
       :dispatch (enemyChooseAction enemyShip playerShip)})))

(rf/reg-event-db
  :logHistory
  (fn [db _]
    (core/devLog "logging turn")
    (let [newHistory (-> (:history db)
                         (concat [db])
                         (vec))]
      (assoc db :history newHistory))))

;initiates player phase,
;saves a copy of current state
;refills ammo for player and enemy
(defn playerPhase
  [cofx effects]
  (let [newTurn (inc (:turn (:db cofx)))
        playerShip (:playerShip (:db cofx))
        newPlayerShip (refillAmmo playerShip newTurn)
        enemyShip (:enemyShip (:db cofx))
        newEnemyShip (refillAmmo enemyShip newTurn)]
    (core/devLog "start of player phase")
    {:db (assoc (:db cofx) :turn newTurn :playerShip newPlayerShip :enemyShip newEnemyShip)
     :dispatch [:logHistory]}))

(rf/reg-event-fx
  :playerPhase
  playerPhase)

(rf/reg-event-fx
  ::rewindTurn
  (fn [cofx [_ turn]]
    (core/devLog (str "rewinding to turn " turn))
    {:db (-> (:history (:db cofx))
             (get (- turn 1)))
     :dispatch [:logHistory]}))

;sets firing mode
(defn setFiringType
  [cofx [_ firingType]]
  {:db (assoc (:db cofx) :firingType firingType)
   :dispatch [:toggleFiringMode]})

(rf/reg-event-fx
  :setFiringType
  setFiringType)

;toggles firing mode when player pushes fire or ends their phase
(defn toggleFiringMode [db _]
  (assoc db :firing? (if (:firing? db)
                       false
                       true)))

(rf/reg-event-db
  :toggleFiringMode
  toggleFiringMode)

(defn toggleRepairingMode [db _]
  (assoc db :repairing? (if (:repairing? db)
                          false
                          true)))

(rf/reg-event-db
  :toggleRepairingMode
  toggleRepairingMode)

;toggles :devMode between true and false
(defn toggleDevMode [db _]
  (assoc db :devMode (if (:devMode db)
                       false
                       true)))

(rf/reg-event-db
  ::toggleDevMode
  toggleDevMode)

;calculates new HP after taking damage,
;triggers game over if necessary


(defn newShieldsAndAmmo
  "calculates new shields for defender if laser type attack,
  calculates new ammo for attacker if missile type attack"
  [[defender attacker system damage firingType]]
  (let [newDefenderShields (- (:shields defender) damage)]
    (if (= firingType :lasers)
      (if (pos? newDefenderShields)
        ;returns 0 as new damage value if shields are able to absorb the attack
        [(assoc defender :shields newDefenderShields) attacker system 0 firingType]
        ;otherwise, returns unabsorbed damage as new damage value, which triggers newSystemHP and newHP
        [(assoc defender :shields 0) attacker system (- newDefenderShields) firingType])
      ;consumes ammo if firingType is :missiles
      [defender (consumeAmmo attacker) system damage firingType])))

(defn newSystemHP
  "calculates system damage if residual damage from newShieldsAndAmmo"
  [[defender attacker system damage firingType]]
  (let [newSystemHP (- (-> defender :systems system first)
                       (-> attacker :systems firingType second))]
    (if (pos? damage)
      (if (pos? newSystemHP)
        [(assoc-in defender [:systems system 0] newSystemHP) attacker damage]
        [(assoc-in defender [:systems system 0] 0) attacker damage])
      [defender attacker damage])))

(defn newHP
  "calculates HP damage if residual damage from newShieldsAndAmmo,
  dispatches :gameEnd if HP <= 0"
  [[defender attacker damage]]
  (let [newDefenderHP (- (:HP defender) damage)]
    (if (false? (pos? newDefenderHP))
      (rf/dispatch [:gameEnd (if (= 1 @(rf/subscribe [:phase]))
                                :playerShip
                                :enemyShip) true]))
    [(assoc defender :HP newDefenderHP) attacker]))

(defn consumeAmmo
  "reduces ship's ammo by 1; returns new ship"
  [ship]
  (let [oldAmmo (:ammo ship)]
    (assoc ship :ammo (- oldAmmo 1))))

;performs all the steps of damaging the ship
;(and systems if necessary)
(defn damageShip
  [cofx [_ system type firingType]]
  (if (= type :enemyShip)
    (rf/dispatch [:toggleFiringMode]))
  (let [defender (-> cofx :db type)
        attackerType (if (= type :playerShip)
                       :enemyShip
                       :playerShip)
        attacker (-> cofx :db attackerType)
        attackRank (get-in attacker [:systems firingType 1])
        damage (calcAttackDamage attackRank firingType (diceRoll) (shieldsSupercharged? attacker))
        devMsg (str (if (= type :playerShip) "player " "enemy ")
                    "took "
                    damage
                    " damage")]
       (core/devLog devMsg)
       (let [newShips (-> [defender attacker system damage firingType]
                          (newShieldsAndAmmo)
                          (newSystemHP)
                          (newHP))
             newDefender (first newShips)
             newAttacker (second newShips)]
            {:db (assoc (:db cofx)
                    type newDefender
                    attackerType newAttacker)
             :dispatch [:changePhase]})))

(rf/reg-event-fx
  :damageShip
  damageShip)

(defn calcRepairStrength
  [repairRank diceRoll]
  (-> repairRank
      (* diceRoll)
      (* REPAIR_STRENGTH_MULTIPLIER)))

(defn createRepairedSystem
  [systemRank]
  [(+ systemRank 1) systemRank])

(defn restoreHP
  [[system ship]]
  (let [repairRank (-> ship
                       (:systems)
                       (:repairBay)
                       (get 1))
        maxHP (:maxHP ship)
        repairStrength (calcRepairStrength repairRank (diceRoll))
        currentHP (:HP ship)
        newHP (if (>= (+ currentHP repairStrength) maxHP)
                maxHP
                (+ currentHP repairStrength))
        newShip (assoc ship :HP newHP)]
    [system newShip]))

(defn restoreSystem
  [[system ship]]
  (let [systemRank (-> ship
                       (:systems)
                       (system)
                       (get 1))
        newSystem (createRepairedSystem systemRank)
        newSystemsMap (assoc (:systems ship) system newSystem)
        newShip (assoc ship :systems newSystemsMap)]
    [system newShip]))

(defn repairShip
  [cofx [_ system type]]
  (if (= type :playerShip)
    (rf/dispatch [:toggleRepairingMode]))
  (let [ship (type (:db cofx))
        repairedShip (-> [system ship]
                         (restoreHP)
                         (restoreSystem)
                         (get 1))]
    {:db (assoc (:db cofx) type repairedShip)
     :dispatch [:changePhase]}))

(rf/reg-event-fx
  :repairShip
  repairShip)

(defn setSystemRank
  [db [_ ship system systemVec]]
  (let [targetShip (ship db)
        shipSystems (:systems targetShip)
        newSystemsMap (assoc shipSystems system systemVec)
        newShip (assoc targetShip :systems newSystemsMap)]
    (assoc db ship newShip)))

(rf/reg-event-db
  ::setSystemRank
  setSystemRank)

;test handler for trying new things and placeholding
(rf/reg-event-db
  :doNothing
  (fn [db _]
    (core/devLog "doing nothing")
    db))
