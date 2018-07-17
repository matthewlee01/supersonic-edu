(ns sonic.events
  (:require
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
(defn actionDispatch
  "dispatches the given action event from button"
  [event]
  (fn [] (rf/dispatch [event])))

(defn damageDispatch
  "dispatches the damage system event with parameters"
  [system type]
  (fn [] 
    (rf/dispatch [:damageSystem system type])))

  
(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(defn chargeShields [ship]
  (let [shieldsSystem (-> ship
                        (:systems)
                        (:shields))
        shieldsCurrentValue (:shields ship)
        shieldsMax (+ 100 (* (- (get shieldsSystem 1) 1) 20))
        shieldsStrength (* (get shieldsSystem 1) 15)]
    (assoc ship :shields (if (> (+ shieldsCurrentValue shieldsStrength) shieldsMax)
                           shieldsMax
                           (+ shieldsCurrentValue shieldsStrength)))))

(rf/reg-event-fx
  :actionFire
  (fn [cofx event]
    (println "fire")
    {:db (:db cofx)
     :dispatch [:toggleFiringMode]}))
    
(rf/reg-event-fx
  :actionChargeShields
  (fn [cofx events]
    (println "shielding")
    {:db (assoc (:db cofx) :playerShip (chargeShields @(rf/subscribe [:playerShip])))
     :dispatch [:changeTurn]}))

(rf/reg-event-db 
  :actionFlee 
  (fn [db _]
    (println "fleeing")
    db))

(defn playerSystemsActive?
  [systemtype]
  (let [ship @(rf/subscribe [:playerShip])
        system (systemtype (:systems ship))]
    (if (> (get system 0) 0)
      systemtype
      false)))

(rf/reg-event-fx 
  :enemyChargeShields
  (fn [cofx events]
    (println "enemy charging shields")
    {:db (assoc (:db cofx) :enemyShip (chargeShields @(rf/subscribe [:enemyShip])))
     :dispatch [:changeTurn]}))

(defn enemyChooseAction
  [enemyShip playerShip]
  (println "enemy choosing target")
  (let [enemySystems (:systems enemyShip)
        enemyShields (:shields enemyShip)
        playerSystems (-> playerShip
                          (:systems)
                          (keys))
        playerActiveSystems (->> playerSystems
                                (map playerSystemsActive?)
                                (remove false?))]
    (if (> (get (:weapons enemySystems) 0) 0)
      [:damageSystem (rand-nth playerActiveSystems) :playerShip]
      (if (> (get (:shields enemySystems) 0) 0)
        [:enemyChargeShields]
        [:changeTurn]))))
      

(rf/reg-event-fx
  :changeTurn
  (fn [cofx effects]
    (println "changing turn")
    (let [turn @(rf/subscribe [:turn])]
      (if (= turn 0)
        {:db (assoc (:db cofx) :turn 1)
         :dispatch [:enemyTurn]}
        {:db (assoc (:db cofx) :turn 0)
         :dispatch [:playerTurn]}))))

(rf/reg-event-fx
  :enemyTurn
  (fn [cofx effects]
    (let [playerShip @(rf/subscribe [:playerShip])
          enemyShip @(rf/subscribe [:enemyShip])]
      {:db (:db cofx)
       :dispatch (enemyChooseAction enemyShip playerShip)})))
          
(rf/reg-event-fx
  :playerTurn
  (fn [cofx effects]
    {:db (:db cofx)}))

(rf/reg-event-db
  :toggleFiringMode
  (fn [db _]
    (println "toggling firing mode")
    (let [firing? @(rf/subscribe [:firing?])]
      (if firing?
        (assoc db :firing? false)
        (assoc db :firing? true)))))

(defn newHP
  [[defender attacker system]]
  (let [defenderHP (:HP defender)
        defenderShields (:shields defender)
        attackRank (-> attacker
                       (:systems)
                       (:weapons)
                       (get 1))
        attackDamage (* 20 attackRank)
        HPDamage (if (> (- defenderShields attackDamage) 0)
                     0
                     (- attackDamage defenderShields))]
    [(assoc defender :HP (- defenderHP HPDamage)) 
     attacker system]))
         

(defn newShields 
  [[defender attacker system]]
  (let [defenderShields (:shields defender)
        attackRank (-> attacker
                       (:systems)
                       (:weapons)
                       (get 1))
        attackDamage (* 20 attackRank)
        shieldsDamage (if (> (- defenderShields attackDamage) 0)
                        attackDamage
                        defenderShields)]
    [(assoc defender :shields (- defenderShields shieldsDamage)) 
     attacker system]))

(defn newSystemHP
  [[defender attacker system]]
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
                       (get 1))]
    [(assoc defender :systems (assoc (:systems defender) system [(- systemHP systemDamage) systemRank])) 
     attacker system]))
    
    
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
               :dispatch [:changeTurn]}))))
      

(rf/reg-event-db
  :doNothing
  (fn [db _]
    (println "nothing")
    db))













