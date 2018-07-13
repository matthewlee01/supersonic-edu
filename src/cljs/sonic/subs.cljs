(ns sonic.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
  :playerShip
  (fn [db _]
    (:playerShip db)))

(rf/reg-sub
  :enemyShip
  (fn [db _]
    (:enemyShip db)))

(rf/reg-sub
  :turn 
  (fn [db _]
    (:turn db)))

(rf/reg-sub
  :firing?
  (fn [db _]
    (:firing? db)))
