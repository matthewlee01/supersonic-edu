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

(deftest calc
  "test for functions that do simple calculations"
  (let [testRoll (events/diceRoll)
        sim-db db/default-db]
    (is (= true (-> sim-db
                  (events/toggleFiringMode nil)
                  (:firing?))))
    (is (= true (and (> testRoll 0)
                     (< testRoll 7))))
    (is (= 40 (events/calcLaserDamage 1 4)))
    (is (= 80 (events/calcMissileDamage 2 8)))
    (is (= 115 (events/calcShieldsMax 2)))
    (is (= 120 (events/calcShieldsStrength 3 5)))
    (is (= 10 (events/refillAmmo 10 8)))
    (is (= 10 (events/refillAmmo 9 8)))
    (is (= 5 (events/refillAmmo 4 8)))
    (is (= 5 (events/refillAmmo 5 5)))
    ))



(deftest fullShields
  "tests with full player shields using starting game state"
  (let [testRoll (events/diceRoll)
        sim-db db/default-db
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        laserAttackInit [playerShip enemyShip :engines 40 :laser]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP)
                           (events/newAmmo))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP)
                             (events/newAmmo))]
    ;--------laser attack calculations--------

    ;checks shields of defender   
    (is (= 60 (-> laserAttackFinal
                (get 0)
                (:shields))))
    ;checks HP of defender
    (is (= 100 (-> laserAttackFinal
                 (get 0)
                 (:HP))))
    ;checks targeted system of defender
    (is (= 2 (-> laserAttackFinal
                   (get 0)
                   (:systems)
                   (:engines)
                   (get 0))))
    ;checks for ammo consumption for attacker
    (is (= 2 (-> laserAttackFinal
               (get 1)
               (:ammo)))) 

    ;---------missile attack calculations------

    ;checks shields of defender   
    (is (= 100 (-> missileAttackFinal
                 (get 0)
                 (:shields))))
    ;checks HP of defender
    (is (= 60 (-> missileAttackFinal
                (get 0)
                (:HP))))
    ;checks systems of defender
    (is (= 1 (-> missileAttackFinal
                   (get 0)
                   (:systems)
                   (:engines)
                   (get 0))))
    ;checks for ammo consumption for attacker
    (is (= 1 (-> missileAttackFinal
               (get 1)
               (:ammo)))))) 




  

(deftest reducedShields
  "tests with reduced player health and shields"
  (let [sim-db {:playerShip {:systems {:lasers [2 1]
                                       :missiles [2 1]
                                       :shields [2 1]
                                       :repairBay [2 1]
                                       :engines [2 1]}
                             :HP 100
                             :maxHP 100
                             :ammo 2
                             :shields 20}
                :enemyShip {:systems {:lasers [2 1]
                                      :missiles [2 1]
                                      :shields [2 1]
                                      :repairBay [2 1]
                                      :engines [2 1]}
                            :HP 100
                            :maxHP 100
                            :ammo 2
                            :shields 20}}
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        laserAttackInit [playerShip enemyShip :engines 40 :laser]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP)
                           (events/newAmmo))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP)
                             (events/newAmmo))]
    ;--------laser attack calculations--------

    ;checks shields of defender   
    (is (= 0 (-> laserAttackFinal
                (get 0)
                (:shields))))
    ;checks HP of defender
    (is (= 80 (-> laserAttackFinal
                 (get 0)
                 (:HP))))
    ;checks targeted system of defender
    (is (= [1 1] (-> laserAttackFinal
                   (get 0)
                   (:systems)
                   (:engines))))
    ;checks for ammo consumption for attacker
    (is (= 2 (-> laserAttackFinal
               (get 1)
               (:ammo)))) 

    ;---------missile attack calculations------

    ;checks shields of defender   
    (is (= 20 (-> missileAttackFinal
                 (get 0)
                 (:shields))))
    ;checks HP of defender
    (is (= 60 (-> missileAttackFinal
                (get 0)
                (:HP))))
    ;checks systems of defender
    (is (= [1 1] (-> missileAttackFinal
                   (get 0)
                   (:systems)
                   (:engines))))
    ;checks for ammo consumption for attacker
    (is (= 1 (-> missileAttackFinal
               (get 1)
               (:ammo))))))
  
(deftest depletedShields
  "tests with depleted player shields"
  (let [sim-db {:playerShip {:systems {:weapons [2 1]
                                       :shields [2 1]
                                       :engines [2 1]}
                             :HP 100
                             :shields 0
                             :ammo 2}
                :enemyShip {:systems {:weapons [2 1]
                                      :shields [2 1]
                                      :engines [2 1]}
                            :HP 100
                            :shields 50
                            :ammo 2}}
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        laserAttackInit [playerShip enemyShip :engines 40 :laser]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP)
                           (events/newAmmo))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP)
                             (events/newAmmo))]
    ;--------laser attack calculations--------

    ;checks shields of defender   
    (is (= 0 (-> laserAttackFinal
                (get 0)
                (:shields))))
    ;checks HP of defender
    (is (= 60 (-> laserAttackFinal
                 (get 0)
                 (:HP))))
    ;checks targeted system of defender
    (is (= [1 1] (-> laserAttackFinal
                   (get 0)
                   (:systems)
                   (:engines))))
    ;checks for ammo consumption for attacker
    (is (= 1 (-> laserAttackFinal
               (get 1)
               (:ammo)))) 

    ;---------missile attack calculations------

    ;checks shields of defender   
    (is (= 0 (-> missileAttackFinal
                 (get 0)
                 (:shields))))
    ;checks HP of defender
    (is (= 60 (-> missileAttackFinal
                (get 0)
                (:HP))))
    ;checks systems of defender
    (is (= [1 1] (-> missileAttackFinal
                   (get 0)
                   (:systems)
                   (:engines))))
    ;checks for ammo consumption for attacker
    (is (= 2 (-> missileAttackFinal
               (get 1)
               (:ammo))))))




  


(run-tests)