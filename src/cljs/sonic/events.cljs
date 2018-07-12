(ns sonic.events
  (:require
   [re-frame.core :as rf]
   [sonic.db :as db]))
   
(defn actionDispatch
  [event]
  (fn [] (rf/dispatch [event])))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-db
  :actionFire
  (fn [db _]
    (println "fire")
    db))
  
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
