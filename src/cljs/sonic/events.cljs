(ns sonic.events
  (:require
   [sonic.core :as core]
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
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

;initializes default db  
(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (core/devLog "initializing")
   db/default-db))

;prompts player for playerName value
(rf/reg-event-fx
  ::gameStart
  (fn [cofx effects]
    (core/devLog "start of game")
    {:db (assoc (:db cofx) :playerName (if-let [playerName (js/prompt "Enter your name:")] 
                                          (if (= playerName "")
                                            "Player"
                                            playerName)
                                          "Player"))
     :dispatch [:playerPhase]}))

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

;calculates the maximum shields the ship can have
(defn calcShieldsMax
  [shieldsSystemRank]
  (-> shieldsSystemRank
      (- 1)
      (* 15)
      (+ 100)))

;selects a random number from 1-6
(defn diceRoll
  []
  (+ 1 (rand-int 6)))
  
;calculates strength of shield charge
(defn calcShieldsStrength
  [shieldsSystemRank amount]
  (-> amount
      (* shieldsSystemRank)
      (* 8)))

;formula for damage: randomfactor x weaponrank x 10dmg
(defn calcLaserDamage
  [attackRank diceRoll]
  (-> diceRoll
      (* attackRank)
      (* 10)))

(defn calcMissileDamage
  [attackRank diceRoll]
  (-> diceRoll
      (* attackRank)
      (* 5)))

(defn criticalHP?
  [attacker defender]
  (let [potentialDamage (-> attacker
                            (:systems)
                            (:missiles)
                            (get 1)
                            (calcMissileDamage 6))]
    (if (<= (:HP defender) potentialDamage)
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
    (if (and (criticalHP? playerShip enemyShip)
             (not= nil enemyTargetSystem)
             (false? (systemDisabled? :repairBay :enemyShip)))
      (do (core/devLog "enemy has decided to repair their ship")
          [:repairShip enemyTargetSystem :enemyShip])
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
                  [:gameEnd :enemyShip false]))))))))

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
  [ammo turn]
  (if (and (> 10 ammo)
           (= 0 (mod turn 2))) 
    (inc ammo)
    ammo))

;initiates enemy AI
(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (core/devLog "start of enemy phase")
    (let [playerShip (:playerShip (:db cofx))
          enemyShip (:enemyShip (:db cofx))
          turn (inc (:turn (:db cofx)))
          refilledAmmo (refillAmmo (:ammo enemyShip) turn)
          newEnemyShip (assoc enemyShip :ammo refilledAmmo)]
          
      {:db (assoc (:db cofx) :enemyShip newEnemyShip)
       :dispatch (enemyChooseAction newEnemyShip playerShip)})))
          
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
(defn playerPhase
  [cofx effects]
  (let [newTurn (inc (:turn (:db cofx)))
        playerShip (:playerShip (:db cofx))
        refilledAmmo (refillAmmo (:ammo playerShip) newTurn)
        newPlayerShip (assoc playerShip :ammo refilledAmmo)]
    (core/devLog "start of player phase")
    {:db (assoc (:db cofx) :turn newTurn :playerShip newPlayerShip)
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

(defn consumeAmmo
  [ship]
  (let [ammo (:ammo ship)
        nAmmo (- ammo 1)]
   (assoc ship :ammo nAmmo)))

;calculates new HP after taking damage, 
;triggers game over if necessary
(defn newHP
  [[defender attacker system damage firingType]]
  (let [defenderHP (:HP defender)
        defenderShields (:shields defender)
        HPDamage (if (= firingType :lasers)
                   (if (> defenderShields damage)
                     0
                     (- damage defenderShields))
                   damage)
        newHPVal (- defenderHP HPDamage)
        destroyed? (if (<= newHPVal 0)
                     true
                     false)]
    (if destroyed?
      (rf/dispatch [:gameEnd (if (= defender @(rf/subscribe [:playerShip]))
                               :playerShip
                               :enemyShip) true]))
    [(assoc defender :HP newHPVal) 
     attacker system damage firingType]))
         
;calculates new shield value
(defn newShields 
  [[defender attacker system damage firingType]]
  (let [defenderShields (:shields defender)
        shieldsDamage (if (= firingType :lasers)
                        (if (> (- defenderShields damage) 0)
                          damage
                          defenderShields)
                        0)]
    [(assoc defender :shields (- defenderShields shieldsDamage)) 
     attacker system damage firingType]))

;calculates new system status if shields are down, 
;otherwise no system damage taken
(defn newSystemHP
  [[defender attacker system damage firingType]]
  (let [defenderShields (:shields defender)
        shieldsSystemRank (-> defender
                              (:systems)
                              (:shields)
                              (get 1))
        shieldsMax (calcShieldsMax shieldsSystemRank)]
    (if (or (and (<= defenderShields 0)
                 (= firingType :lasers))
            (= firingType :missiles))
      (let [systemHP (-> defender
                         (:systems)
                         (system)
                         (get 0))
            attackRank (-> attacker
                           (:systems)
                           (:lasers)
                           (get 1))
            systemDamage (if (> (- systemHP attackRank) 0)
                           attackRank
                           systemHP)
            systemRank (-> defender
                           (:systems)
                           (system)
                           (get 1))
            newSystem [(- systemHP systemDamage) systemRank]       
            newSystemsMap (assoc (:systems defender) system newSystem)]
        [(assoc defender :systems newSystemsMap) 
         attacker system damage firingType])
      [defender attacker system damage firingType])))

(defn newAmmo 
  [[defender attacker system damage firingType]]
  (let [currentAmmo (:ammo attacker)]
    [defender (if (= firingType :missiles)
                (consumeAmmo attacker)
                attacker) system damage firingType]))

;performs all the steps of damaging the ship 
;(and systems if necessary)
(defn damageShip
  [cofx [_ system type firingType]]
  (if (= type :enemyShip)
    (rf/dispatch [:toggleFiringMode]))
  (let [defender (type (:db cofx))
        attackerType (if (= type :playerShip)
                      :enemyShip
                      :playerShip)
        attacker (if (= type :playerShip)
                  (:enemyShip (:db cofx))
                  (:playerShip (:db cofx)))
        attackRank (-> attacker
                       (:systems)
                       (firingType)
                       (get 1))
        diceRoll (diceRoll)
        damage (if (= firingType :lasers)
                 (calcLaserDamage attackRank diceRoll)
                 (calcMissileDamage attackRank diceRoll))]
       (core/devLog (str "target took " damage " damage"))
       (let [newShips (-> [defender attacker system damage firingType]
                          (newHP)
                          (newShields)
                          (newSystemHP)
                          (newAmmo))
             newDefenderType (get newShips 0)
             newAttackerType (get newShips 1)]
            {:db (assoc (:db cofx)
                    type newDefenderType
                    attackerType newAttackerType)
             :dispatch [:changePhase]})))

(rf/reg-event-fx
  :damageShip
  damageShip)

(defn calcRepairStrength
  [repairRank diceRoll]
  (-> repairRank
      (* diceRoll)
      (* 4)))
  
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






