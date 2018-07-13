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
  (fn [] (rf/dispatch [:damageSystem system type])))
  
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

(rf/reg-event-fx
  :lowerHPTest
  (fn [cofx event]
    {:db (assoc (:db cofx) :enemyHP 50)
     :dispatch [:actionFire]}))

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

(rf/reg-event-fx
  :damageSystemOld
  (fn [cofx [_ system target]]
    (let [attackerSystems (if (= "player" target)
                            @(rf/subscribe [:enemySystems])
                            @(rf/subscribe [:playerSystems])) 
          defenderSystemsTag (if (= "player" target)
                               :playerSystems
                               :enemySystems)
          defenderSystems @(rf/subscribe [defenderSystemsTag])
          attackPower (get (:weapons attackerSystems) 1)
          vitalDamage (* 20 attackPower)
          systemHP (get (system defenderSystems) 0)
          defenderShieldsTag (if (= "player" target)
                               :playerShields
                               :enemyShields)
          defenderHPTag (if (= "player" target)
                          :playerHP
                          :enemyHP)
          defenderShields @(rf/subscribe [defenderShieldsTag])
          defenderHP @(rf/subscribe [defenderHPTag])
          HPDamage (if (> (- defenderShields vitalDamage) 0)
                     0
                     (- vitalDamage defenderShields))
          shieldDamage (if (> (- defenderShields vitalDamage) 0)
                         vitalDamage
                         defenderShields)] 

      (println "damaged" target "'s system for" (str attackPower))
      (println "damaged" target "'s ship for" (str vitalDamage))
      {:db (-> (:db cofx)
               (assoc defenderShieldsTag (- defenderShields shieldDamage))
               (assoc defenderHPTag (- defenderHP HPDamage))
               (assoc defenderSystemsTag (assoc defenderSystems system [(- systemHP attackPower)
                                                                        (get (system defenderSystems) 1)]))
               (assoc :firing? false))
       :dispatch [:changeTurn]})))

(defn newHP
  [[defender attacker]]
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
    [(assoc defender :HP (- defenderHP HPDamage)) attacker]))
         

(defn newShields 
  [[defender attacker]]
  (let [defenderShields (:shields defender)
        attackRank (-> attacker
                       (:systems)
                       (:weapons)
                       (get 1))
        attackDamage (* 20 attackRank)
        shieldsDamage (if (> (- defenderShields attackDamage) 0)
                        attackDamage
                        defenderShields)]
    [(assoc defender :shields (- defenderShields shieldsDamage)) attacker]))

(rf/reg-event-fx
  :damageSystem
  (fn [cofx [_ system type]]
    (println "damaging ship")
    (let [defender @(rf/subscribe [type])
          attacker (if (= type :playerShip)
                    @(rf/subscribe [:playerShip])
                    @(rf/subscribe [:enemyShip]))]
         (let [newDamagedShip (-> [defender attacker] 
                                  (newHP)
                                  (newShields)
                                  (get 0))]
              {:db (assoc (:db cofx) type newDamagedShip)}))))
      

(rf/reg-event-db
  :doNothing
  (fn [db _]
    (println "nothing")
    db))













