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
  (is (= 40 (events/calcLaserDamage 1 4)))
  (is (= 40 (events/calcShieldsStrength (-> db/default-db :playerShip :systems :shields second) 5)))
  (is (= 100 (-> (events/newHP [(:playerShip db/default-db)
                                (:enemyShip db/default-db)
                                :engines
                                40
                                :lasers])
                 (get 0)
                 (:HP))))
  (is (= 60 (-> (events/newShields [(:playerShip db/default-db)
                                    (:enemyShip db/default-db)
                                    :engines
                                    40
                                    :lasers])
                (get 0)
                (:shields))))
  (is (= [2 1] (-> (events/newSystemHP [(:playerShip db/default-db)
                                        (:enemyShip db/default-db)
                                        :engines
                                        40
                                        :lasers])
                (get 0)
                :systems
                :engines)))
  (is (= 100 (-> (events/chargeShields (:playerShip db/default-db) 10)
                (:shields))))
  (is (= 100 (events/calcShieldsMax 1)))
  (is (= :shields (events/playerSystemsActive? :shields))))


  

(deftest reducedShields
  "tests with reduced player health and shields"
  (let [sim-db {:playerShip {:systems {:weapons [2 1]
                                       :shields [2 1]
                                       :engines [2 1]}
                             :HP 50
                             :shields 50}
                :enemyShip {:systems {:weapons [2 1]
                                      :shields [2 1]
                                      :engines [2 1]}
                            :HP 50
                            :shields 50}}]
    (is (= 40 (events/calcShieldsStrength (-> sim-db :playerShip :systems :shields second) 5)))
    (is (= 40 (-> (events/newHP [(:playerShip sim-db)
                                 (:enemyShip sim-db)
                                 :weapons
                                 60
                                 :lasers])
                  (get 0)
                  (:HP))))
    (is (= 0 (-> (events/newShields [(:playerShip sim-db)
                                     (:enemyShip sim-db)
                                     :weapons
                                     60
                                     :lasers])
                (get 0)
                (:shields))))
    (is (= [2 1] (-> (events/newSystemHP [(:playerShip sim-db)
                                          (:enemyShip sim-db)
                                          :weapons
                                          60
                                          :lasers])
                     (get 0)
                     (:systems)
                     (:weapons))))
    (is (= 58 (-> (events/chargeShields (:playerShip sim-db) 1)
                (:shields))))))
  

(deftest depletedShields
  "tests with depleted player shields"
  (let [sim-db {:playerShip {:systems {:weapons [2 1]
                                       :shields [2 1]
                                       :engines [2 1]}
                             :HP 80
                             :shields 0}
                :enemyShip {:systems {:weapons [2 1]
                                      :shields [2 1]
                                      :engines [2 1]}
                            :HP 50
                            :shields 50}}]
    (is (= 20 (-> (events/newHP [(:playerShip sim-db)
                                 (:enemyShip sim-db)
                                 :weapons
                                 60
                                 :lasers])
                  (get 0)
                  (:HP))))
    (is (= 0 (-> (events/newShields [(:playerShip sim-db)
                                     (:enemyShip sim-db)
                                     :weapons
                                     60
                                     :lasers])
                 (get 0)
                 (:shields))))
    (is (= [1 1] (-> (events/newSystemHP [(:playerShip sim-db)
                                          (:enemyShip sim-db)
                                          :weapons
                                          60
                                          :lasers])
                     (get 0)
                     (:systems)
                     (:weapons))))
    (is (= 16 (-> (events/chargeShields (:playerShip sim-db) 2)
                  (:shields))))))







  


(run-tests)

