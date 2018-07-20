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

(rf/reg-sub
  :playerName
  (fn [db _]
    (:playerName db)))

(rf/reg-sub
  :gameOver?
  (fn [db _]
    (:gameOver? db)))

(rf/reg-sub
  :history
  (fn [db _]
    (:history db)))

(rf/reg-sub
  :phase
  (fn [db _]
    (:phase db)))

(rf/reg-sub
  :devMode
  (fn [db _]
    (:devMode db)))

