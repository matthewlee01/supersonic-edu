(ns sonic.events
  (:require
   [sonic.core :as core]
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
;dispatches an action based on which action button was pressed 
(defn actionDispatch
  "dispatches the given action event from button"
  [event]
  (fn [] (rf/dispatch [event])))

;dispatches :damageShip with the targeted system and ship
(defn damageDispatch
  "dispatches the damage system event with parameters"
  [system type firingType]
  (fn [] 
    (rf/dispatch [:damageShip system type firingType])))
   
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
    (let [playerName (js/prompt "Enter your name:")]
      {:db (assoc (:db cofx) :playerName (if (or 
                                               (= playerName "")
                                               (= playerName nil))
                                            "Player"
                                            playerName))
       :dispatch [:playerPhase]})))

;sends an alert and disables main view
(defn gameEnd [db [_ loser]]
  (core/devLog "end of game")
  (js/alert (str "Game Over! " (if (= loser :playerShip)
                                 @(rf/subscribe [:playerName])
                                 "Enemy") 
                 "'s ship was destroyed!"))
  (assoc db :gameOver? true))


(rf/reg-event-db
  :gameEnd
  (fn [db [_ loser]]
    (core/devLog "end of game")
    (js/alert (str "Game Over! " (if (= loser :playerShip)
                                   @(rf/subscribe [:playerName])
                                   "Enemy") 
                   "'s ship was destroyed!"))
    (assoc db :gameOver? true)))

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

(defn consumeAmmo
  [ship]
  (let [ammo (:ammo ship)
        nAmmo (- ammo 1)]
  (assoc ship :ammo nAmmo)))

(defn refillAmmo
  [ship]
  (let [ammo (:ammo ship)
        nAmmo (if (< 2 ammo) 
                  (+ ammo 1)
                  (ammo))]
  (assoc ship :ammo nAmmo)))

  
;calculates strength of shield charge
(defn calcShieldsStrength
  [shieldsSystemRank amount]
  (-> amount
      (* shieldsSystemRank)
      (* 8)))

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
    (core/devLog "missiles placeholder")
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

;attempt to escape the battle 
;(does nothing right now)
(rf/reg-event-fx
  :actionFlee 
  (fn [cofx effects]
    (core/devLog "player fleeing")
    {:db (:db cofx)
     :dispatch [:changePhase]}))

;used with map to create a list of all active player systems
(defn playerSystemsActive?
  [systemType]
  (let [ship (db/default-db :playerShip)
        system (systemType (:systems ship))]
    (if (> (get system 0) 0)
      systemType
      false)))

;calls chargeShields on enemyShip and updates value
(rf/reg-event-fx 
  :enemyChargeShields
  (fn [cofx events]
    (core/devLog "enemy charging shields")
    {:db (assoc (:db cofx) :enemyShip (chargeShields @(rf/subscribe [:enemyShip]) (diceRoll)))
     :dispatch [:changePhase]}))

;enemy chooses actions based on which systems are available
(defn enemyChooseAction
  [enemyShip playerShip]
  (core/devLog "enemy choosing action")
  (let [enemySystems (:systems enemyShip)
        enemyShields (:shields enemyShip)
        playerSystems (-> playerShip
                          (:systems)
                          (keys))
        playerActiveSystems (->> playerSystems
                                (map playerSystemsActive?)
                                (remove false?))]
    (if (false? (systemDisabled? :missiles :enemyShip))
      (do (core/devLog "enemy has decided to launch missiles")
          [:damageShip (rand-nth playerActiveSystems) :playerShip :missiles])
      (if (false? (systemDisabled? :lasers :enemyShip))
        (do (core/devLog "enemy has decided to fire")
            [:damageShip (rand-nth playerActiveSystems) :playerShip :lasers])
        (if (false? (systemDisabled? :shields :enemyShip))
          (do (core/devLog "enemy has decided to charge their shields") 
              [:enemyChargeShields])
          (do (core/devLog "enemy has decided to flee")
              [:gameEnd :enemyShip false]))))))

      
;toggles phase between player and enemy after each action
(rf/reg-event-fx
  :changePhase
  (fn [cofx effects]
    (if (= false @(rf/subscribe [:gameOver?]))
      (do
       (core/devLog "changing phase")
       (let [phase @(rf/subscribe [:phase])]
       (if (= phase 0)
        {:db (assoc (:db cofx) :phase 1)
         :dispatch [:enemyPhase]}
        {:db (assoc (:db cofx) :phase 0)
         :dispatch [:playerPhase]}))))))
      

;initiates enemy AI
(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (core/devLog "start of enemy phase")
    (let [playerShip @(rf/subscribe [:playerShip])
          enemyShip @(rf/subscribe [:enemyShip])]
      {:db (:db cofx)
       :dispatch (enemyChooseAction enemyShip playerShip)})))
          
(rf/reg-event-db
  :logHistory
  (fn [db _]
    (core/devLog "logging turn")
    (let [newHistory (-> @(rf/subscribe [:history])
                         (concat [db])
                         (vec))]
      (assoc db :history newHistory))))

;initiates player phase, 
;saves a copy of current state
(defn playerPhase
  [cofx effects]
  (let [newTurn (inc @(rf/subscribe [:turn]))]
    (core/devLog "start of player phase")
    {:db (assoc (:db cofx) :turn newTurn)
     :dispatch [:logHistory]}))

(rf/reg-event-fx
  :playerPhase
  playerPhase)

(rf/reg-event-fx
  ::rewindTurn
  (fn [cofx [_ turn]]
    (core/devLog (str "rewinding to turn " turn))
    {:db (-> @(rf/subscribe [:history])
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
  (let [firing? @(rf/subscribe [:firing?])]
    (if firing?
      (assoc db :firing? false)
      (assoc db :firing? true))))

(rf/reg-event-db
  :toggleFiringMode
  toggleFiringMode)
      
;toggles :devMode between true and false
(defn toggleDevMode [db _]
  (let [devMode @(rf/subscribe [:devMode])]
    (if devMode
      (assoc db :devMode false)
      (assoc db :devMode true))))

(rf/reg-event-db
  ::toggleDevMode
  toggleDevMode)


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

;calculates new HP after taking damage, 
;triggers game over if necessary
(defn newHP
  [[defender attacker system damage firingType]]
  (let [defenderHP (:HP defender)
        defenderShields (:shields defender)
        HPDamage (if (= firingType :lasers)
                   (if (> (- defenderShields damage) 0)
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
                               :enemyShip)]))
    [(assoc defender :HP (- defenderHP HPDamage)) 
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
  (let [defenderShields (:shields defender)]
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
    (if ;(and (< 0 currentAmmo)
             (= firingType :missiles);)
      [defender (consumeAmmo attacker) system damage firingType]
      [defender attacker system damage firingType])))

    
;performs all the steps of damaging the ship 
;(and systems if necessary)
(defn damageShip
  [cofx [_ system type firingType]]
  (if (= type :enemyShip)
    (rf/dispatch [:toggleFiringMode]))
  (let [defender @(rf/subscribe [type])
        attackerType (if (= type :playerShip)
                      :enemyShip
                      :playerShip)
        attacker (if (= type :playerShip)
                  @(rf/subscribe [:enemyShip])
                  @(rf/subscribe [:playerShip]))
        attackRank (-> attacker
                       (:systems)
                       (firingType)
                       (get 1))
        diceRoll (diceRoll)
        damage (if (= firingType :lasers)
                 (calcLaserDamage attackRank diceRoll)
                 (calcMissileDamage attackRank diceRoll))]
       (core/devLog (str "target took " damage " damage"))
       (let [newDamagedShip (-> [defender attacker system damage firingType]
                                (newHP)
                                (newShields)
                                (newSystemHP)
                                (newAmmo)
                                )]
            {:db (-> (:db cofx)
                     (assoc type (get newDamagedShip 0))
                     (assoc attackerType (get newDamagedShip 1)))
             :dispatch [:changePhase]})))


(rf/reg-event-fx
  :damageShip
  damageShip)

  ;test handler for trying new things and placeholding
(rf/reg-event-db
  :doNothing
  (fn [db _]
    (core/devLog "nothing")
    db))








