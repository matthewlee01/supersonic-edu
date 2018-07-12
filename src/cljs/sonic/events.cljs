(ns sonic.events
  (:require
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
(defn actionDispatch
  [event]
  (fn [] (rf/dispatch [event])))

(defn damageDispatch
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
  :damageSystem
  (fn [cofx [_ system type]]
    (let [playerSystems @(rf/subscribe [:playerSystems])
          enemySystems @(rf/subscribe [:enemySystems])]
      {:db (:db cofx)
       :dispatch [:changeTurn]}))) 
      

(rf/reg-event-db
  :doNothing
  (fn [db _]
    (println "nothing")
    db))













