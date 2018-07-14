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
    (js/prompt "Test Question" "Answer...")
    (rf/dispatch [:damageSystem system type])))

  
(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
  :actionFire
  (fn [cofx event]
    (println "fire")
    {:db (:db cofx)
     :dispatch [:toggleFiringMode]}))
    
(rf/reg-event-db
  :actionChargeShields
  (fn [db _]
    (println "shielding")
    db))

(rf/reg-event-db
  :actionFlee
  (fn [db _]
    (println "fleeing")
    db))

(rf/reg-event-db
  :changeTurn
  (fn [db _]
    (let [turn @(rf/subscribe [:turn])]
      (if (= turn 0)
        (assoc db :turn 1)
        (assoc db :turn 0)))))

(rf/reg-event-db
  :toggleFiringMode
  (fn [db _]
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
    (println "damaging ship")
    (let [defender @(rf/subscribe [type])
          attacker (if (= type :playerShip)
                    @(rf/subscribe [:playerShip])
                    @(rf/subscribe [:enemyShip]))]
         (let [newDamagedShip (-> [defender attacker system] 
                                  (newHP)
                                  (newShields)
                                  (newSystemHP)
                                  (get 0))]
              {:db (assoc (:db cofx) type newDamagedShip)}))))
      

(rf/reg-event-db
  :doNothing
  (fn [db _]
    (println "nothing")
    db))













