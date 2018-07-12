(ns sonic.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
  :playerSystems
  (fn [db _]
    (:playerSystems db)))

(rf/reg-sub
  :enemySystems
  (fn [db _]
    (:enemySystems db)))

(rf/reg-sub 
  :playerHP
  (fn [db _]
    (:playerHP db)))

(rf/reg-sub 
  :playerShields
  (fn [db _]
    (:playerShields db)))

(rf/reg-sub
  :enemyHP
  (fn [db _]
    (:enemyHP db)))

(rf/reg-sub
  :enemyShields 
  (fn [db _]
    (:enemyShields db)))

(rf/reg-sub
  :turn 
  (fn [db _]
    (:turn db)))
