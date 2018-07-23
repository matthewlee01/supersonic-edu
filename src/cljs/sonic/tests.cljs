(ns sonic.tests
 (:require
  [reagent.core :as r]
  [re-frame.core :as rf]
  [sonic.events :as events]
  [sonic.views :as views]
  [sonic.config :as config]
  [sonic.db :as db]
  [sonic.core :as core]
  [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest events
  (is (= true (-> db/default-db
                  (events/toggleFiringMode nil)
                  (:firing?))))
  (let [testRoll (events/diceRoll)]
    (is (and (> testRoll 0)
             (< testRoll 7)))
    (is (= 40 (events/calcLaserDamage 1 4)))
    (is (= 60 (-> (events/newShields [(:playerShip db/default-db)
                                      (:enemyShip db/default-db)
                                      :weapons
                                      40
                                      :lasers])
                  (get 0)
                  (:shields))))))

(run-tests)
