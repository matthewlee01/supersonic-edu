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
             (< testRoll 7))))
  (is (= 40 (events/calcDamage 1 4)))
  (is (= 40 (events/calcShieldsStrength (-> db/default-db :playerShip :systems :shields second) 5)))
  (is (= 100 (-> (events/newHP [(:playerShip db/default-db)
                                (:enemyShip db/default-db)
                                 :weapons
                                  40])
                  (get 0)
                  (:HP))))
  (is (= 60 (-> (events/newShields [(:playerShip db/default-db)
                                    (:enemyShip db/default-db)
                                     :weapons
                                      40])
                (get 0)
                (:shields))))
  (is (= [2 1] (-> (events/newSystemHP [(:playerShip db/default-db)
                                        (:enemyShip db/default-db)
                                         :weapons
                                          40])
                (get 0)
                :systems
                :weapons)))
  (is (= 100 (-> (events/chargeShields (:playerShip db/default-db) 10)
                (:shields))))
  (is (= 100 (events/calcShieldsMax 1)))
  (is (= false (events/systemDisabled? :weapons :playerShip)))
  (is (= :shields (events/playerSystemsActive? :shields)))


  )

(run-tests)
