(ns sonic.events
  (:require
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
;dispatches an action based on which action button was pressed 
(defn actionDispatch
  "dispatches the given action event from button"
  [event]
  (fn [] (rf/dispatch [event])))

;dispatches :damageSystem with the targeted system and ship
(defn damageDispatch
  "dispatches the damage system event with parameters"
  [system type]
  (fn [] 
    (rf/dispatch [:damageSystem system type])))
   
;checks if system on ship is disabled (0HP)
(defn systemDisabled?
  [system type]
  (if (>= 0 (-> @(rf/subscribe [type])
                (:systems)
                (system)
                (get 0)))
    true
    false))

;initializes default db  
(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (println "initializing")
   db/default-db))

;prompts player for playerName value
(rf/reg-event-fx
  ::gameStart
  (fn [cofx effects]
    (println "start of game")
    (let [playerName (js/prompt "Enter your name:")]
      {:db (assoc (:db cofx) :playerName (if (or 
                                               (= playerName "")
                                               (= playerName nil))
                                            "Player"
                                            playerName))
       :dispatch [:playerPhase]})))

;sends an alert and disables main view
(rf/reg-event-db
  :gameEnd
  (fn [db [_ loser]]
    (println "end of game")
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
  
;calculates strength of shield charge
(defn calcShieldsStrength
  [shieldsSystemRank]
  (-> (diceRoll)
      (* shieldsSystemRank)
      (* 8)))

;rephases ship with increases shields
(defn chargeShields [ship]
  (let [shieldsSystem (-> ship
                        (:systems)
                        (:shields))
        shieldsCurrentValue (:shields ship)
        shieldsSystemRank (get shieldsSystem 1)
        shieldsMax (calcShieldsMax shieldsSystemRank)
        shieldsStrength (calcShieldsStrength shieldsSystemRank)
        newShields (+ shieldsCurrentValue shieldsStrength)]
    (assoc ship :shields (if (> newShields shieldsMax)
                           shieldsMax
                           newShields))))

;toggles firing mode for player to select target
(rf/reg-event-fx
  :actionFire
  (fn [cofx event]
    (println "player toggling firing mode")
    {:db (:db cofx)
     :dispatch [:toggleFiringMode]}))
    
;calls chargeShields on playerShip when corresponding button is pressed, 
;then ends player phase
(rf/reg-event-fx
  :actionChargeShields
  (fn [cofx events]
    (println "player charging shields")
    {:db (assoc (:db cofx) :playerShip (chargeShields @(rf/subscribe [:playerShip])))
     :dispatch [:changePhase]}))

;attempt to escape the battle 
;(does nothing right now)
(rf/reg-event-fx
  :actionFlee 
  (fn [cofx effects]
    (println "player fleeing")
    {:db (:db cofx)
     :dispatch [:changePhase]}))

;used with map to create a list of all active player systems
(defn playerSystemsActive?
  [systemtype]
  (let [ship @(rf/subscribe [:playerShip])
        system (systemtype (:systems ship))]
    (if (> (get system 0) 0)
      systemtype
      false)))

;calls chargeShields on enemyShip and updates value
(rf/reg-event-fx 
  :enemyChargeShields
  (fn [cofx events]
    (println "enemy charging shields")
    {:db (assoc (:db cofx) :enemyShip (chargeShields @(rf/subscribe [:enemyShip])))
     :dispatch [:changePhase]}))

;enemy chooses actions based on which systems are available
(defn enemyChooseAction
  [enemyShip playerShip]
  (println "enemy choosing action")
  (let [enemySystems (:systems enemyShip)
        enemyShields (:shields enemyShip)
        playerSystems (-> playerShip
                          (:systems)
                          (keys))
        playerActiveSystems (->> playerSystems
                                (map playerSystemsActive?)
                                (remove false?))]
    (if (false? (systemDisabled? :weapons :enemyShip))
      (do (println "enemy has decided to fire")
          [:damageSystem (rand-nth playerActiveSystems) :playerShip])
      (if (false? (systemDisabled? :shields :enemyShip))
        (do (println "enemy has decided to charge their shields") 
            [:enemyChargeShields])
        (do (println "enemy has decided to pass their phase")
            [:changePhase])))))
      
;toggles phase between player and enemy after each action
(rf/reg-event-fx
  :changePhase
  (fn [cofx effects]
    (println "changing phase")
    (let [phase @(rf/subscribe [:phase])]
      (if (= phase 0)
        {:db (assoc (:db cofx) :phase 1)
         :dispatch [:enemyPhase]}
        {:db (assoc (:db cofx) :phase 0)
         :dispatch [:playerPhase]}))))

;initiates enemy AI
(rf/reg-event-fx
  :enemyPhase
  (fn [cofx effects]
    (println "start of enemy phase")
    (let [playerShip @(rf/subscribe [:playerShip])
          enemyShip @(rf/subscribe [:enemyShip])]
      {:db (:db cofx)
       :dispatch (enemyChooseAction enemyShip playerShip)})))
          
(rf/reg-event-db
  :logHistory
  (fn [db _]
    (println "logging turn")
    (let [newHistory (-> @(rf/subscribe [:history])
                         (concat [db])
                         (vec))]
      (assoc db :history newHistory))))

;initiates player phase, 
;saves a copy of current state
(rf/reg-event-fx
  :playerPhase
  (fn [cofx effects]
    (let [newTurn (inc @(rf/subscribe [:turn]))]
      (println "start of player phase")
      {:db (assoc (:db cofx) :turn newTurn)
       :dispatch [:logHistory]})))

(rf/reg-event-fx
  ::rewindTurn
  (fn [cofx [_ turn]]
    {:db (-> @(rf/subscribe [:history])
             (get (- turn 1)))
     :dispatch [:logHistory]}))

;toggles firing mode when player pushes fire or ends their phase
(rf/reg-event-db
  :toggleFiringMode
  (fn [db _]
    (println "toggling firing mode")
    (let [firing? @(rf/subscribe [:firing?])]
      (if firing?
        (assoc db :firing? false)
        (assoc db :firing? true)))))

;formula for damage: randomfactor x weaponrank x 10dmg
(defn calcDamage
  [attackRank]
  (-> (diceRoll)
      (* attackRank)
      (* 10)))

;calculates new HP after taking damage, 
;triggers game over if necessary
(defn newHP
  [[defender attacker system]]
  (let [defenderHP (:HP defender)
        defenderShields (:shields defender)
        attackRank (-> attacker
                       (:systems)
                       (:weapons)
                       (get 1))
        attackDamage (calcDamage attackRank)
        HPDamage (if (> (- defenderShields attackDamage) 0)
                     0
                     (- attackDamage defenderShields))
        newHPVal (- defenderHP HPDamage)
        destroyed? (if (<= newHPVal 0)
                     true
                     false)]
    (if destroyed?
      (rf/dispatch [:gameEnd (if (= defender @(rf/subscribe [:playerShip]))
                               :playerShip
                               :enemyShip)]))
    [(assoc defender :HP (- defenderHP HPDamage)) 
     attacker system]))
         
;calculates new shield value
(defn newShields 
  [[defender attacker system]]
  (let [defenderShields (:shields defender)
        attackRank (-> attacker
                       (:systems)
                       (:weapons)
                       (get 1))
        attackDamage (calcDamage attackRank)
        shieldsDamage (if (> (- defenderShields attackDamage) 0)
                        attackDamage
                        defenderShields)]
    [(assoc defender :shields (- defenderShields shieldsDamage)) 
     attacker system]))

;calculates new system status if shields are down, 
;otherwise no system damage taken
(defn newSystemHP
  [[defender attacker system]]
  (let [defenderShields (:shields defender)]
    (if (<= defenderShields 0)
      (let [systemHP (-> defender
                         (:systems)
                         (system)
                         (get 0))
            attackRank (-> attacker
                           (:systems)
                           (:weapons)
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
         attacker system])
      [defender attacker system])))
    
;performs all the steps of damaging the ship 
;(and systems if necessary)
(rf/reg-event-fx
  :damageSystem
  (fn [cofx [_ system type]]
    (if (= type :enemyShip)
      (rf/dispatch [:toggleFiringMode]))
    (let [defender @(rf/subscribe [type])
          attacker (if (= type :playerShip)
                    @(rf/subscribe [:playerShip])
                    @(rf/subscribe [:enemyShip]))]
         (let [newDamagedShip (-> [defender attacker system] 
                                  (newHP)
                                  (newShields)
                                  (newSystemHP)
                                  (get 0))]
              {:db (assoc (:db cofx) type newDamagedShip)
               :dispatch [:changePhase]}))))
      
;test handler for trying new things and placeholding
(rf/reg-event-db
  :doNothing
  (fn [db _]
    (println "nothing")
    db))













