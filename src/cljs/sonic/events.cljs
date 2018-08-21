(ns sonic.events
  (:require
   [sonic.core :as core]
   [re-frame.core :as rf]
   [sonic.db :as db]))

(def BASE_SHIELD_MAX 100) ;starting maximum shield level

(def SHIELD_UPGRADE_MULIPLIER 15) ;amount that max shields increases per rank of shield systems

(def SHIELD_RECHARGE_MULTIPLIER 8) ;multiplier for shield recharge

(def LASER_DAMAGE_MULIPLIER 10) ;multiplier for laser attack

(def REPAIR_DEFAULT :lasers) ;default repair target for enemy ai

(def AI_SYSTEM_STRENGTH_FACTOR 300) ;coefficient for ai formula

(def MEAN_DICEROLL 3.5) ;average roll for diceRoll, used for ai

(def SCORE_REDUCTION_FACTOR 500)

;provides a skeleton of actions for the enemy to choose from.
;:targetSystem gets updated to current values when this is used
(def ENEMY_ACTION_LIST
  [[:damageShip :targetSystem :playerShip :missiles MEAN_DICEROLL true]
   [:damageShip :targetSystem :playerShip :lasers MEAN_DICEROLL true]
   [:repairShip :targetSystem :enemyShip]
   [:enemyChargeShields MEAN_DICEROLL]])

;required system for each corresponding action
(def ENEMY_ACTION_PREREQ_LIST
  [:missiles
   :lasers
   :repairBay
   :shields])

;selects a random number from 1-6
(defn diceRoll
  []
  (+ 1 (rand-int 6)))

(defn getCurrentTime
  []
  (js.Date.))

(defn calcTimeDiff
  [time1 time2]
  (int (/ (- time1 time2) 1000)))

;creates a data structure to be used by the AI
;takes the form of [[action] score correspondingFunction prereqSystem]
(defn createOutcomesList
  [actionList functionList prereqList]
  (map #(vector %1 0 %2 %3) actionList functionList prereqList))

(def MISSILE_DAMAGE_MULTIPLIER 5) ;multiplier for missile attack

(def BASE_HP 50) ;used to calculated battles won and other things

(def HP_GAIN 50) ;amount of max hp increased per stage

(def SUPERCHARGED_MULTIPLIER 1.5) ;damage multiplier for supercharged shield effect

(def SUPERCHARGE_THRESHOLD 0) ;threshold for supercharged shield effect

(def MAX_AMMO 10) ;ammo capacity for ship

(def AMMO_RECHARGE_RATE 2) ;number of turns per ammo refill

(def REPAIR_STRENGTH_MULTIPLIER 4) ;multiplier for repairing ship

(def ENEMY_COLOUR_LIST ["red"
                        "orange"
                        "green"
                        "greenyellow"
                        "lightslategray"
                        "mediumvioletred"
                        "orangered"
                        "tomato"
                        "springgreen"
                        "magenta"
                        "maroon"
                        "orchid"
                        "pink"
                        "seagreen"])

;prints a message to console if devMode is on
(defn devLog
  [string]
  (if @(rf/subscribe [:devMode])
    (println string)))

;dispatches an action based on which action button was pressed
(defn actionDispatch
  [event]
  (fn [] (rf/dispatch [event])))

;dispatches :damageShip with the targeted system and ship
(defn damageDispatch
  [system type firingType]
  (fn [] (rf/dispatch [:damageShip system type firingType (diceRoll) false])))

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

;dispatches an upgradeSystem event when the button is pressed
;used in .views file
(defn upgradeSystemsDispatch
  [system ship cost]
  (fn [] (rf/dispatch [:buySystemUpgrade system ship cost])))

(defn buySystemUpgrade
  [cofx [_ system ship cost]]
  (let [db (:db cofx)]
    (rf/dispatch [:updateStats [:moneySpent] [cost]])
    {:db (assoc db :money (- (:money db) cost))
     :dispatch [:upgradeSystem system ship]}))

(rf/reg-event-fx
  :buySystemUpgrade
  buySystemUpgrade)

(defn changeScreen
  "changes :activeScreen to a new screen"
  [db [_ newScreen]]
  (assoc db :activeScreen newScreen))

(rf/reg-event-db
  ::changeScreen
  changeScreen)

;increases the rank of a system and returns a
;new sysvec with rank and corresponding HP (rank +1)
(defn incSystemRank
  [systemVector]
  (let [newRank (inc (second systemVector))]
    [(inc newRank) newRank]))

;takes a target system and target ship, update target ship with
;the target system 1 rank higher.
(defn upgradeSystem
  [cofx [_ system ship]]
  (devLog (str "upgrading " ship system))
  (let [systemsMap (get-in cofx [:db ship :systems])
        newSystemsMap (->> (incSystemRank (system systemsMap))
                           (assoc systemsMap system))]
    {:db (assoc-in (:db cofx) [ship :systems] newSystemsMap)
     :dispatch [::toggleVal :upgradingSystems?]}))

(rf/reg-event-fx
  :upgradeSystem
  upgradeSystem)

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
    (devLog "initializing")
    db/default-db))

(defn systemReset
  "resets a system's HP based on its level"
  [systemStats]
  (vector (inc (get systemStats 1)) (get systemStats 1)))

(defn shipReset
  "resets a ship's HP, shields, ammo, systemHP's, and increases maxHP"
  [ship HPgain]
  (let [systemNames (keys (:systems ship))
        oldSystemStats (vals (:systems ship))
        newSystemStats (map systemReset oldSystemStats)
        newSystems (zipmap systemNames newSystemStats)
        newMaxHP (+ (:maxHP ship) HPgain)
        newShields (-> newSystems :shields second calcShieldsMax)]
    (assoc ship :systems newSystems :maxHP newMaxHP :HP newMaxHP :shields newShields :ammo 2)))

;prompts player for playerName value
(rf/reg-event-fx
  ::gameStart
  (fn [cofx effects]
    (devLog "start of game")
    (rf/dispatch [::changeScreen :battle-screen])
    {:db (assoc (:db cofx) :gameOver? false
                           :playerName (if-let [existingName (:playerName (:db cofx))]
                                         existingName
                                         (if-let [playerName (js/prompt "Enter your name:")]
                                           (if (= playerName "")
                                             "Player"
                                             playerName)
                                           "Player"))
                           :startTime (or (-> cofx :db :startTime) (getCurrentTime)))
     :dispatch [:reset-db]}))

;sends an alert and disables main view
(rf/reg-event-db
  :gameEnd
  (fn [db [_ loser gameOver?]]
    (devLog "end of battle")
    (let [loserName (if (= loser :playerShip)
                      (:playerName db)
                      "Enemy")
          gameOverMessage (str "Game Over! " loserName "'s ship was destroyed!")
          fleeMessage (str loserName " fled the battle!")
          battleScore (:battleScore db)]
      (do (js/alert (if gameOver?
                      gameOverMessage
                      fleeMessage))
          (rf/dispatch [::changeScreen :management-screen])
          (rf/dispatch [:updateStats [:totalScore :enemiesDefeated :moneyGained :battleTime] (if (= loser :playerShip)
                                                                                               [0 0 0 (calcTimeDiff (getCurrentTime) (:startTime db))]
                                                                                               [battleScore 1 battleScore (calcTimeDiff (getCurrentTime) (:startTime db))])])
          (assoc db
                :playerShip (shipReset (:playerShip db) 0)
                :gameOver? true
                :startTime nil
                :money (if (= loser :enemyShip)
                         (+ battleScore (:money db))
                         (:money db))
                :playerDefeated? (if (= loser :playerShip)
                                   true
                                   false))))))

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
      (devLog (str "shields boosted by " (- newShields shieldsCurrentValue))))
    (assoc ship :shields (if (> newShields shieldsMax)
                           shieldsMax
                           newShields))))

;toggles firing mode for player to select target
(rf/reg-event-fx
  :actionFire
  (fn [cofx event]
    (devLog "player toggling firing mode")
    {:db (:db cofx)
     :dispatch [:setFiringType :lasers]}))

(rf/reg-event-fx
  :actionLaunch
  (fn [cofx event]
    (devLog "player toggling launch mode")
    {:db (:db cofx)
     :dispatch [:setFiringType :missiles]}))

;calls chargeShields on playerShip when corresponding button is pressed,
;then ends player phase
(defn actionChargeShields
  [cofx events]
  (devLog "player charging shields")
  {:db (assoc (:db cofx) :playerShip (chargeShields @(rf/subscribe [:playerShip]) (diceRoll)))
   :dispatch [:changePhase]})

(rf/reg-event-fx
  :actionChargeShields
  actionChargeShields)

(defn actionRepairShip
  [cofx effects]
  {:db (:db cofx)
   :dispatch [::toggleVal :repairing?]})

(rf/reg-event-fx
  :actionRepairShip
  actionRepairShip)

;attempt to escape the battle
(rf/reg-event-fx
  :actionFlee
  (fn [cofx effects]
    (devLog "player fleeing")
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
(defn enemyChargeShields
  [cofx [_ diceRoll]]
  (devLog "enemy charging shields")
  {:db (assoc (:db cofx) :enemyShip (chargeShields (:enemyShip (:db cofx)) diceRoll))
   :dispatch [:changePhase]})

(rf/reg-event-fx
  :enemyChargeShields
  enemyChargeShields)

;holds priority list for enemy attacks and repairs
(def enemyPriorityList
  {:target [:lasers :missiles :shields :repairBay :engines]
   :repair [:missiles :lasers :shields :repairBay :engines]})

;selects a system target for enemy AI
;by filtering through priority list
(defn getTargetSystem
  [filterType]
  (if-let [target (->> (filterType enemyPriorityList)
                       (map (if (= filterType :repair)
                              enemySystemsDamaged?
                              playerSystemsActive?))
                       (remove false?)
                       (first))]
    target
    REPAIR_DEFAULT))

;updates the default action with current values to replace placeholders
(defn updateAction
  [action]
  (let [[actionType] action]
    (case actionType
      :enemyChargeShields action
      :repairShip (assoc action 1 (getTargetSystem :repair))
      :damageShip (assoc action 1 (getTargetSystem :target)) true)))

;updates the default actionList value to current values
(defn getCurrentActionList
  [actionList]
  (map updateAction actionList))

;calculates the general strength of a ship based on several factors,
;takes a ship map and returns an integer
(defn calcShipStrength
  [ship]
  (let [{HP :HP
         shieldsCapacity :shields
         systems :systems} ship
        {:keys [lasers missiles shields repairBay engines]} systems
        superchargedFactor (if (shieldsSupercharged? ship)
                             SUPERCHARGED_MULTIPLIER
                             1)
        ;formula for calculating ship score:
        ;(sum of (syshp * sysrank * scorefactor)) + shieldscapacity * superchargedfactor * hp
        ;places high emphasis on having full shields, having at least 1 hp on all systems, and damaging player systems
        score (->> [lasers missiles missiles repairBay engines]
                   (map (fn [[hp rank]] (* hp rank AI_SYSTEM_STRENGTH_FACTOR)))
                   (reduce +)
                   (+ shieldsCapacity)
                   (* superchargedFactor)
                   (* HP))]
    (devLog score)
    score))

;calculates how good this outcome is based on how big of an
;advantage it gives the enemyShip
(defn calcOutcomeScore
  [db]
  (let [{:keys [playerShip enemyShip]} db
        score (-> (calcShipStrength enemyShip)
                  (- (calcShipStrength playerShip)))]
    (devLog (str "outcome score: " score))
    score))

;gets an outcome score by running calcOutcomeScore on a db
;generated by an enemy action handler
(defn genOutcomeScore
  [db [action score function]]
  [action (-> db
              (function action)
              (:db)
              (calcOutcomeScore)) function])

;takes the list of outcomes, generates and checks their scores against each other,
;returns the highest scoring outcome, or flees if no actions available
(defn chooseBestOutcome
  [db outcomeList]
  (if (empty? outcomeList)
    ;if there are no available actions, enemyShip will flee
    (if (systemDisabled? :engines :enemyShip)
      [:changePhase]
      [:gameEnd :enemyShip false])
    (->> outcomeList
         (map genOutcomeScore (repeat {:db db}))
         (reduce #(if (> (second %1) (second %2))
                    %1
                    %2))
         (first))))

;checks if outcome can be executed based on prereq system on enemy ship
(defn outcomeDisabled?
  [outcome]
  (-> (get outcome 3)
      (systemDisabled? :enemyShip)))

;returns the action handler which results in the most advantageous outcome
;for the enemy using the calcOutcomeScore formula
(defn enemyChooseAction
  [db actionList functionList prereqList]
  (let [;outcomes are data structures that contain all the necessary data
        ;to evaluate and return an outcome score
        outcomes (createOutcomesList
                   (getCurrentActionList actionList)
                   functionList
                   prereqList)
        ;chooses the best outcome of the possible actions the enemy can take
        chosenOutcome (chooseBestOutcome db (remove outcomeDisabled? outcomes))]
    (case (get chosenOutcome 0)
      :damageShip (assoc chosenOutcome 4 (diceRoll) 5 false)
      :enemyChargeShields (assoc chosenOutcome 1 (diceRoll))
      chosenOutcome)))

(defn calcScore
  [ship]
  (-> (calcShipStrength ship)
      (/ SCORE_REDUCTION_FACTOR)))

(defn reset-db
  "resets game state and applies HP buff using shipReset"
  [cofx _]
  (let [newPlayerShip (-> cofx
                          :db
                          :playerShip
                          (shipReset HP_GAIN))
        newEnemyShip (-> cofx
                         :db
                         :enemyShip
                         (shipReset HP_GAIN)
                         randShipColour)]
   {:db (assoc (:db cofx)
               :playerShip newPlayerShip
               :enemyShip newEnemyShip
               :gameOver? false
               :turn 0
               :history []
               :phase 0
               :battleScore (calcScore newEnemyShip)
               :upgradingSystems? false)
     :dispatch [:playerPhase]}))

(rf/reg-event-fx
  :reset-db
  reset-db)

;toggles phase between player and enemy after each action
(defn changePhase
  [cofx effects]
  (if (false? (:gameOver? (:db cofx)))
    (do (devLog "changing phase")
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

(rf/reg-event-db
  :logHistory
  (fn [db _]
    (devLog "logging turn")
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
    (devLog "start of player phase")
    {:db (assoc (:db cofx) :turn newTurn :playerShip newPlayerShip :enemyShip newEnemyShip)
     :dispatch [:logHistory]}))

(rf/reg-event-fx
  :playerPhase
  playerPhase)

(rf/reg-event-fx
  ::rewindTurn
  (fn [cofx [_ turn]]
    (devLog (str "rewinding to turn " turn))
    {:db (-> (:history (:db cofx))
             (get (- turn 1)))
     :dispatch [:logHistory]}))

;sets firing mode
(defn setFiringType
  [cofx [_ firingType]]
  {:db (assoc (:db cofx) :firingType firingType)
   :dispatch [::toggleVal :firing?]})

(rf/reg-event-fx
  :setFiringType
  setFiringType)

(defn toggleVal
 [db [_ value]]
 (assoc db value (if (value db)
                   false
                   true)))

(rf/reg-event-db
  ::toggleVal
  toggleVal)

;calculates new HP after taking damage,
;triggers game over if necessary

(defn consumeAmmo
  "reduces ship's ammo by 1; returns new ship"
  [ship]
  (let [oldAmmo (:ammo ship)]
    (assoc ship :ammo (- oldAmmo 1))))

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

;performs all the steps of damaging the ship
;(and systems if necessary)
(defn damageShip
  [cofx [_ system type firingType diceRoll simulation?]]
  (if (= type :enemyShip)
    (rf/dispatch [::toggleVal :firing?]))
  (let [attackerType (if (= type :playerShip)
                       :enemyShip
                       :playerShip)
        {{defender type {{[_ attackRank] firingType} :systems :as attacker} attackerType} :db} cofx
        damage (calcAttackDamage attackRank firingType diceRoll (shieldsSupercharged? attacker))
        devMsg (str (if (= type :playerShip) "player " "enemy ")
                    "took "
                    damage
                    " damage")
        [newDefender newAttacker] (-> [defender attacker system damage firingType]
                                      newShieldsAndAmmo
                                      newSystemHP
                                      newHP)
        [newStatNames statChanges] (if (= type :playerShip)
                                     [[:damageTaken] [damage]]
                                     (if (= firingType :missiles)
                                       [[:damageDealt :missilesFired] [damage 1]]
                                       [[:damageDealt :lasersFired] [damage 1]]))]
    (devLog devMsg)
    (if (false? simulation?) (rf/dispatch [:updateStats newStatNames statChanges]))
    {:db (assoc (:db cofx)
            type newDefender
            attackerType newAttacker)
     :dispatch [:changePhase]}))

(rf/reg-event-fx
  :damageShip
  damageShip)

(defn updateStats
  "takes a list of stats and corresponding changes to those stats, then updates :gameStats accordingly"
  [db [_ statNames changes]]
  (assoc db :gameStats (merge-with + @(rf/subscribe [:gameStats]) (zipmap statNames changes))))

(rf/reg-event-db
  :updateStats
  updateStats)

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
    (do (rf/dispatch [::toggleVal :repairing?])
        (rf/dispatch [:updateStats [:timesRepaired] [1]])))
  (devLog "repairing ship")
  (let [ship (type (:db cofx))
        repairedShip (-> [system ship]
                         (restoreHP)
                         (restoreSystem)
                         (get 1))]
    {:db (assoc (:db cofx) type repairedShip)
     :dispatch [:changePhase]}))

(def ENEMY_FUNCTION_LIST
 [damageShip
  damageShip
  repairShip
  enemyChargeShields])

;initiates enemy AI
(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (devLog "start of enemy phase")
    {:db (:db cofx)
     :dispatch (enemyChooseAction (:db cofx)
                                  ENEMY_ACTION_LIST
                                  ENEMY_FUNCTION_LIST
                                  ENEMY_ACTION_PREREQ_LIST)}))

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
    (devLog "doing nothing")
    db))
