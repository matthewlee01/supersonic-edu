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

(def ENEMY_DIFFICULTY_LEVEL 2) ;how many phases the enemy looks ahead when deciding its move

;required system for each corresponding action
(def SYSTEMS_LIST
  [:missiles
   :lasers
   :repairBay
   :shields
   :engines])

;data required to build enemyShip
; :system [upgradeChance rank]
(def ENEMY_SHIP_TEMPLATES
  [{:lasers [90 1]
    :missiles [50 0]
    :repairBay [20 0]
    :shields [80 1]
    :engines [20 1]
    :HPfactor [60 2]}
   {:lasers [0 0]
    :missiles [95 1]
    :repairBay [40 0]
    :shields [20 0]
    :engines [50 1]
    :HPfactor [60 1]}
   {:lasers [20 1]
    :missiles [20 0]
    :repairBay [60 0]
    :shields [80 0]
    :engines [50 0]
    :HPfactor [70 2]}])

;selects a random number from 1-6
(defn diceRoll
  []
  (+ 1 (rand-int 6)))

;gets current time as a javascript Date object
(defn getCurrentTime
  []
  (js.Date.))

;calculates the difference, in seconds, between two times
(defn calcTimeDiff
  [time1 time2]
  (int (/ (- time1 time2) 1000)))

(def MISSILE_DAMAGE_MULTIPLIER 5) ;multiplier for missile attack

(def BASE_HP 50) ;used to calculated battles won and other things

(def HP_GAIN 50) ;amount of max hp increased per stage

(def SUPERCHARGED_MULTIPLIER 1.5) ;damage multiplier for supercharged shield effect

(def SUPERCHARGE_THRESHOLD 0) ;threshold for supercharged shield effect

(def MAX_AMMO 10) ;ammo capacity for ship

(def BASE_AMMO 2) ;starting ammo for ship

(def AMMO_RECHARGE_RATE 2) ;number of turns per ammo refill

(def REPAIR_STRENGTH_MULTIPLIER 4) ;multiplier for repairing ship

(def DODGE_DENOM 20) ;one engine level increases dodge chance by 1/DODGE_DENOM

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

;prompts the player with a question and returns true or false or nil
(defn passedQuestion?
  [[query answer]]
  (if-some [response (js/prompt query)]
    (= response answer)))

;asks the player a question and dispatches the requested event if they answer correctly
(rf/reg-event-fx
  ::questionPrompt
  (fn [cofx [_ question requestedEvent]]
    {:db (:db cofx)
     :dispatch (case (passedQuestion? question)
                 true requestedEvent
                 false [:changePhase]
                 nil [:doNothing])}))

(defn questionDispatch
  [question event]
  (fn [] (rf/dispatch [::questionPrompt question event])))

;dispatches an action based on which action button was pressed
(defn actionDispatch
  [event]
  (fn [] (rf/dispatch [event])))

;dispatches :damageShip with the targeted system and ship
(defn damageDispatch
  [system shipType firingType]
  (fn [] (rf/dispatch [:damageShip system shipType firingType (diceRoll)])))

;dispatches :repairShip with the targeted system and ship
(defn repairDispatch
  [system shipType]
  (fn [] (rf/dispatch [:repairShip system shipType (diceRoll)])))



(defn getOptionVal
  "gets value from :gameOptions"
  [optionName]
  (optionName @(rf/subscribe [:gameOptions])))

;dispatches an upgradeSystem event when the button is pressed
;used in .views file
(defn upgradeSystemsDispatch
  [system ship cost]
  (fn [] (rf/dispatch [:buySystemUpgrade system ship cost])))

(defn buySystemUpgrade
  [cofx [_ system shipType cost]]
  (let  [{money :money :as db} (:db cofx)]
    (rf/dispatch [:updateStats [:moneySpent] [cost]])
    {:db (assoc db :money (- money cost))
     :dispatch [:upgradeSystem system shipType]}))

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
  (fn [db _]
    (devLog (str "initializing"))
    (if-let [gameOptions (:gameOptions db)]
     (assoc db/default-db :gameOptions gameOptions)
     db/default-db)))

(defn systemReset
  "resets a system's HP based on its rank"
  [[_ systemRank]]
  [(inc systemRank) systemRank])

(defn fullSystemsReset
  "resets all of the systems, returns a new systems map"
  [oldSystemsMap]
  (zipmap (keys oldSystemsMap)
          (->> oldSystemsMap
               (vals)
               (map systemReset))))

(defn shipReset
  "resets a ship's HP, shields, ammo, systemHP's, and increases maxHP"
  [ship HPgain]
  (let [newSystems (-> ship
                       :systems
                       (fullSystemsReset))
        newMaxHP (+ (:maxHP ship) HPgain)
        newShields (-> newSystems
                       :shields
                       (second)
                       (calcShieldsMax))]
    (assoc ship :systems newSystems
                :maxHP newMaxHP
                :HP newMaxHP
                :shields newShields
                :ammo BASE_AMMO)))

;prompts player for playerName value
(defn namePrompt
  "prompts user for a name, returns nil if none is given or prompt is canceled"
  []
  (let [playerName (js/prompt "Enter your name:")]
    (if (and (not= playerName "") (not= playerName nil))
      playerName)))

(rf/reg-event-fx
  ::gameStart
  (fn [cofx effects]
    (devLog "start of game")
    (rf/dispatch [::changeScreen :battle-screen])
    {:db (assoc (:db cofx) :gameOver? false
                           :playerName (or (-> cofx :db :playerName)
                                           (namePrompt)
                                           "Player")
                           :startTime (or (-> cofx :db :startTime)
                                          (getCurrentTime)))
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
          {:keys [battleScore startTime]} db]
      (do (js/alert (if gameOver?
                      gameOverMessage
                      fleeMessage))
          (rf/dispatch [::changeScreen :management-screen])
          (rf/dispatch [:updateStats [:totalScore :enemiesDefeated :moneyGained :battleTime]
                        (if (= loser :playerShip)
                          [0 0 0 (calcTimeDiff (getCurrentTime) startTime)]
                          [battleScore 1 battleScore (calcTimeDiff (getCurrentTime) startTime)])])
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
                       :systems
                       :shields
                       (second)
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

(defn attackDodged?
  "given a ship, calculates whether or not it dodges an attack based on its engines rank"
  [ship]
  (let [[_ enginesRank] (-> ship :systems :engines)]
    (if (and (getOptionVal :dodgeOn?)
             (< (rand-int DODGE_DENOM) enginesRank))
      true
      false)))

(defn calcAttackDamage
  "calculates the damage of an attack given the attacking ship and the type of attack"
  [defender attacker attackType amount simulation?]
  (let [{[_ attackRank] attackType} (:systems attacker)]
    (* attackRank amount (if (= attackType :lasers)
                           LASER_DAMAGE_MULIPLIER
                           MISSILE_DAMAGE_MULTIPLIER) (if (shieldsSupercharged? attacker)
                                                        SUPERCHARGED_MULTIPLIER
                                                        1) (if (and (nil? simulation?)
                                                                    (attackDodged? defender))
                                                              (do (devLog "dodged!") 0)
                                                              1))))

;returns ship with increased shields
(defn increaseShields
  [ship amount simulation?]
  (let [{{[_ shieldsSystemRank] :shields} :systems shieldsCurrentValue :shields} ship
        shieldsMax (calcShieldsMax shieldsSystemRank)
        chargedShields (+ shieldsCurrentValue (calcShieldsStrength shieldsSystemRank amount))
        newShields (if (<= chargedShields shieldsMax)
                     chargedShields
                     shieldsMax)]
    (if (and @(rf/subscribe [:devMode])
             (nil? simulation?))
      (devLog (str "shields boosted by " (- newShields shieldsCurrentValue))))
    (assoc ship :shields newShields)))

;increases the rank of a system and returns a
;new sysvec with rank and corresponding HP (rank +1)
(defn incSystemRank
  [[_ systemRank]]
  (let [newRank (inc systemRank)]
    [(inc newRank) newRank]))

;takes a target system and target ship, update target ship with
;the target system 1 rank higher. Charges shields if necessary
(defn upgradeSystem
  [cofx [_ systemType shipType]]
  (devLog (str "upgrading " shipType " " systemType))
  (let [newShip (update-in (-> cofx :db shipType) [:systems systemType] incSystemRank)]
    {:db (assoc (:db cofx) shipType (if (= systemType :shields)
                                      (increaseShields newShip SHIELD_UPGRADE_MULIPLIER nil)
                                      newShip))
     :dispatch [::toggleVal :upgradingSystems?]}))

(rf/reg-event-fx
  :upgradeSystem
  upgradeSystem)

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

;checks if system on ship is disabled (0HP, or 0 Ammo for missiles)
(defn systemDisabled?
  [system shipType]
  (let [{{[systemHP _] system} :systems ammo :ammo} @(rf/subscribe [shipType])]
    (if (or (>= 0 systemHP)
            (and (= 0 ammo)
                 (= system :missiles)))
      true
      false)))

;used with map to create a list of all active player systems
;takes in a key, returns the same key or false.
(defn playerSystemsActive?
  [systemType]
  (let [[systemHP] (-> @(rf/subscribe [:playerShip]) :systems systemType)]
    (if (pos? systemHP)
      systemType
      false)))

;takes in a key from a vector, checks to see if it is damaged.
;if true, returns the key back. else, return false.
;used with map to create a vector of all damaged systems.
(defn enemySystemsDamaged?
  [systemType]
  (let [[systemHP systemRank] (-> @(rf/subscribe [:enemyShip]) :systems systemType)]
    (if (<= systemHP systemRank)
      systemType
      false)))

;calls chargeShields on playerShip when corresponding button is pressed,
;then ends player phase
(rf/reg-event-fx
  :actionChargeShields
  (fn [cofx event]
    {:db (:db cofx)
     :dispatch [:chargeShields :playerShip (diceRoll)]}))

;calls chargeShields on a ship and updates value
(defn chargeShields
  [cofx [_ shipType multiplier simulation?]]
  (if (nil? simulation?) (devLog (str shipType "charging shields")))
  {:db (update-in (:db cofx) [shipType] increaseShields multiplier true)
   :dispatch [:changePhase]})

(rf/reg-event-fx
  :chargeShields
  chargeShields)

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
    ;(devLog score)
    score))

(defn calcScore
  [ship]
  (-> (calcShipStrength ship)
      (/ SCORE_REDUCTION_FACTOR)))

;if the random roll is lower than the chance value of the stat
;its rank gets increased
(defn upgradeEnemySystem
  [randInt [statKey [statChance statRank]]]
  [statKey [statChance (if (> statChance randInt)
                         (inc statRank)
                         statRank)]])

;applies upgrades to a ship template recursively
;using upgradeEnemySystem
(defn updateShipTemplate
  [randInt recursions shipTemplate]
  (if (pos? recursions)
    (->> shipTemplate
         (map upgradeEnemySystem (repeat randInt))
         (into {})
         (recur (rand-int 100) (dec recursions)))
    shipTemplate))

;uses a shipTemplate to construct a ship data structure
(defn buildEnemyShip
  [shipTemplate]
  (let [{:keys [shields HPfactor]} shipTemplate
        newHP (* HP_GAIN (second HPfactor))]
    {:systems (fullSystemsReset (dissoc shipTemplate :HPfactor))
     :HP newHP
     :maxHP newHP
     :shields (calcShieldsMax (second shields))
     :ammo BASE_AMMO}))

;takes a random roll (0-99), a number of recursions, and a ship template
;returns a completed enemy ship, ready to be assoc'd into the db
(defn generateEnemyShip
  [randInt recursions shipTemplate]
  (->> shipTemplate
       (updateShipTemplate randInt recursions)
       (buildEnemyShip)))


(defn reset-db
  "resets game state and applies HP buff using shipReset"
  [cofx _]
  (let [newPlayerShip (-> cofx
                          :db
                          :playerShip
                          (shipReset HP_GAIN))
        newEnemyShip (->> ENEMY_SHIP_TEMPLATES
                          (rand-nth)
                          (generateEnemyShip (rand-int 100) (-> cofx :db :gameStats :enemiesDefeated))
                          (randShipColour))]
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
  [cofx [_ simulation?]]
  (if (false? (:gameOver? (:db cofx)))
    (do (if (nil? simulation?) (devLog "changing phase"))
        (if (zero? (:phase (:db cofx)))
          {:db (assoc (:db cofx)
                      :phase 1
                      :firing? false
                      :repairing? false)
           :dispatch [:enemyPhase]}
          {:db (assoc (:db cofx) :phase 0 :firing? false :repairing? false)
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
  (let [{:keys [playerShip enemyShip turn]} (:db cofx)
        newTurn (inc turn)
        newPlayerShip (refillAmmo playerShip newTurn)
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
 (update db value not))

(defn toggleOptionVal
 [db [_ option]]
 (update-in db [:gameOptions option] not))

(rf/reg-event-db
  ::toggleVal
  toggleVal)

(rf/reg-event-db
  ::toggleOptionVal
  toggleOptionVal)

;calculates new HP after taking damage,
;triggers game over if necessary

(defn consumeAmmo
  "reduces ship's ammo by 1; returns new ship"
  [ship]
  (assoc ship :ammo (dec (:ammo ship))))

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
    [(assoc defender :HP newDefenderHP) attacker]))

;performs all the steps of damaging the ship
;(and systems if necessary)
(defn damageShip
  [cofx [_ system shipType firingType multiplier simulation?]]
  (if (= shipType :enemyShip)
    (rf/dispatch [::toggleVal :firing?]))
  (let [attackerType (if (= shipType :playerShip)
                       :enemyShip
                       :playerShip)
        {defender shipType attacker attackerType} (:db cofx)
        damage (calcAttackDamage defender attacker firingType multiplier simulation?)
        devMsg (str (if (= shipType :playerShip) "player " "enemy ")
                    "took "
                    damage
                    " damage")
        [newDefender newAttacker] (-> [defender attacker system damage firingType]
                                      (newShieldsAndAmmo)
                                      (newSystemHP)
                                      (newHP))
        [newStatNames statChanges] (if (= shipType :playerShip)
                                     [[:damageTaken] [damage]]
                                     [[:damageDealt (if (= firingType :lasers)
                                                      :lasersFired
                                                      :missilesFired)] [damage 1]])]
    (if (nil? simulation?)
     (do (devLog devMsg)
         (rf/dispatch [:updateStats newStatNames statChanges])
         (if-not (pos? (:HP newDefender))
           (rf/dispatch [:gameEnd (if (= 1 @(rf/subscribe [:phase]))
                                      :playerShip
                                      :enemyShip) true]))))
   {:db (assoc (:db cofx)
           shipType newDefender
           attackerType newAttacker)
    :dispatch [:changePhase]}))

(rf/reg-event-fx
  :damageShip
  damageShip)

(defn updateStats
  "takes a list of stats and corresponding changes to those stats, then updates :gameStats accordingly"
  [db [_ statNames changes]]
  (update db :gameStats (partial merge-with +) (zipmap statNames changes)))

(rf/reg-event-db
  :updateStats
  updateStats)

(defn calcRepairStrength
  [repairRank multiplier]
  (* repairRank multiplier REPAIR_STRENGTH_MULTIPLIER))

(defn createRepairedSystem
  [[_ systemRank]]
  [(inc systemRank) systemRank])

(defn restoreHP
  [[ship systemType]]
  (let [{{[_ repairRank] :repairBay} :systems :keys [maxHP HP]} ship
        repairStrength (calcRepairStrength repairRank (diceRoll))
        newHP (if (>= (+ HP repairStrength) maxHP)
                maxHP
                (+ HP repairStrength))]
    [(assoc ship :HP newHP) systemType]))

(defn restoreSystem
  [[ship systemType]]
  [(update-in ship [:systems systemType] createRepairedSystem) systemType])

(defn repairShip
  [cofx [_ systemType shipType multiplier simulation?]]
  (if (and (= shipType :playerShip)
           (nil? simulation?))
    (do (rf/dispatch [::toggleVal :repairing?])
        (rf/dispatch [:updateStats [:timesRepaired] [1]])))
  (if (nil? simulation?) (devLog (str shipType " repairing ship")))
  (let [ship (-> cofx :db shipType)
        [repairedShip] (-> [ship systemType]
                           (restoreHP)
                           (restoreSystem))]
    {:db (assoc (:db cofx) shipType repairedShip)
     :dispatch [:changePhase]}))

;maps actions to corresponding functions
(def ACTION->FUNCTION
 {:damageShip damageShip
  :repairShip repairShip
  :chargeShields chargeShields})

;makes vector of form [action db' future] where future is empty
(defn genActionVector
  [cofx action]
  (let [function (ACTION->FUNCTION (first action))]
    [action
     (-> (function cofx action)
         (changePhase [nil true]))
     []]))

;checks if system on ship is disabled (0HP, or 0 Ammo for missiles)
(defn systemInactive?
  [system ship]
  (let [{{[systemHP _] system} :systems ammo :ammo} ship]
    (if (or (>= 0 systemHP)
            (and (= 0 ammo)
                 (= system :missiles)))
      true
      system)))

;maps systems to corresponding action templates
(def SYSTEM->ACTION
  {:missiles [:damageShip :targetSystem :defenderType :missiles MEAN_DICEROLL true]
   :lasers [:damageShip :targetSystem :defenderType :lasers MEAN_DICEROLL true]
   :repairBay [:repairShip :targetSystem :shipType MEAN_DICEROLL true]
   :shields [:chargeShields :shipType MEAN_DICEROLL true]
   :engines [:doNothing]})

;updates action templates by filling in all possible targets
(defn updateAction
 [shipType action]
 (let [[actionType] action]
   (case actionType
     :chargeShields (vector (assoc action 1 shipType))
     :damageShip (map #(assoc %2 1 %1 2 (if (= shipType :playerShip) :enemyShip :playerShip)) SYSTEMS_LIST (repeat action))
     :repairShip (map #(assoc %2 1 %1 2 shipType) SYSTEMS_LIST (repeat action))
     :doNothing [])))

;combines actions generated by updateAction into one collection
(defn updateActionList
 [shipType actionList]
 (->> actionList
      (map (partial updateAction shipType))
      (apply concat)))

 ;makes a list of possible actions for a ship
(defn getCurrentActionList
  [db shipType]
  (->> (map systemInactive? SYSTEMS_LIST (repeat (shipType db)))
       (remove true?)
       (map SYSTEM->ACTION)
       (updateActionList shipType)))

;makes array of all action vectors from the possible actions a ship can take
;[[action0 cofx0 future0] [action1 cofx1 future1] [action2 cofx2 future2] [action3 cofx3 future3] ...]
(defn makeActionArray
  [cofx shipType]
  (->> (getCurrentActionList (:db cofx) shipType)
       (map genActionVector (repeat cofx))))

;updates an action array by generating all possible next actions in future
(defn updateFuture
  [[action cofx future]]
  [action
   cofx
   (makeActionArray cofx (if (= (-> cofx :db :phase) 0)
                             :playerShip
                             :enemyShip))])

;creates a nested structure of all possible next steps+1 phases
(defn generateFutures
  [actionVector steps]
  (let [[newAction newCofx newFuture] (updateFuture actionVector)]
    [newAction newCofx (if (= steps 0)
                         newFuture
                         (mapv generateFutures newFuture (repeat (dec steps))))]))

;compares the strength of two ships and returns the difference in score
;more positive is better for :enemyShip, more negative is better for :playerShip
(defn calcActionScore
  [[_ cofx]]
  (let [{:keys [playerShip enemyShip]} (:db cofx)
        score (- (calcShipStrength enemyShip) (calcShipStrength playerShip))]
    ;(devLog (str "action score: " score))
    score))

;from a list of actions, compares their score to pick the best for either :playerShip or :enemyShip
;[[a1] [a2] [a3] [a4]] -> [[a*]]
(defn pickBestAction
 [actionList shipType]
 (into [] (reduce (fn [action1 action2]
                   (if ((if (= shipType :enemyShip) > <) (calcActionScore action1) (calcActionScore action2))
                     action1
                     action2)) actionList)))

;accesses nested data structure creasted by generateFutures to select the best action for either :playerShip or :enemyShip
(defn chooseAction
 [shipType [action cofx future]]
 (if (or (empty? future)
         (nil? future))
   [action cofx]
   [action (-> (partial chooseAction (if (= shipType :playerShip)
                                       :enemyShip
                                       :playerShip))
               (map future)
               (pickBestAction shipType)
               (second))]))

;compares the possible actions for a ship, and outputs the best dispatchable vector
(defn chooseActionFromList
 [shipType actionList]
 (-> #(let [choice (chooseAction shipType %)]
           (do (devLog (first choice))
               (devLog (calcActionScore choice))
               choice))
     (map actionList)
     (pickBestAction shipType)
     (first)))

;updates an dispatchable vector so that it can be dispatched by :enemyPhase event
(defn updateActionForDispatch
 [action]
 (case (first action)
  :damageShip (assoc action 4 (diceRoll) 5 nil)
  :chargeShields (assoc action 2 (diceRoll) 3 nil)
  :repairShip (assoc action 3 (diceRoll) 4 nil)
  nil [:changePhase]))

;uses generateFutures to generate a nested structure of all possible game states after ENEMY_DIFFICULTY_LEVEL + 1 phases
;uses chooseActionFromList to pick the most optimal one
(defn enemyChooseAction
 [cofx]
 (let [choice (->> (generateFutures [0 cofx 0] ENEMY_DIFFICULTY_LEVEL)
                   (last)
                   (chooseActionFromList :enemyShip))]
  (println (str "ENEMY ACTION:" choice))
  (updateActionForDispatch choice)))

(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (devLog "start of enemy phase")
    {:db (:db cofx)
     :dispatch (enemyChooseAction cofx)}))

;(def makeFutureArray
; [cofx steps]
; (loop [futureArray (updateFuture [nil cofx []]);
;        stepsTaken 0
;        shipType shipType]
;   (if (= 0 stepsTaken)
;     futureArray
;     (update-in (map)))))






;[enemyaction cofx [
;               [playeraction1 cofx []]
;               [playeraction2 cofx []]
;               [playeraction3 cofx []] ]]
;
;             |||||||||||||
;             VVVVVVVVVVVVV
;
;[enemyaction cofx [
;               [bestplayerAction cofx []]]
;
;
;
;
;
;
;
;
;
;
;
;
;


(rf/reg-event-fx
  :repairShip
  repairShip)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;obsolete functions
;(defn setSystemRank
;  [db [_ ship system systemVec]]
;  (let [targetShip (ship db)
;        shipSystems (:systems targetShip)
;        newSystemsMap (assoc shipSystems system systemVec)
;        newShip (assoc targetShip :systems newSystemsMap)]
;    (assoc db ship newShip)))
;
;(rf/reg-event-db
;  ;::setSystemRank
;  setSystemRank)

;determines whether or not an attack of the specified type
;can potentially kill the target
;takes in attacker, defender, and firingType (:lasers or :missiles)
;returns true if target can be killed
;(defn killRange?
;  [attacker defender firingType]
;  (let [vitality (if (= firingType :lasers)
;                   (+ (:HP defender) (:shields defender))
;                   (:HP defender))
;        dmgFactor 6
;        potentialDamage (-> attacker
;                            (:systems)
;                            (firingType)
;                            (get 1)
;                            (calcAttackDamage firingType dmgFactor (shieldsSupercharged? attacker)))]
;    (if (>= potentialDamage vitality)
;      true
;      false)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;test handler for trying new things and placeholding
(rf/reg-event-db
  :doNothing
  (fn [db _]
    (devLog "doing nothing")
    db))
