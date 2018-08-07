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
    (is (= true (-> sim-db
                  (events/toggleRepairingMode nil)
                  (:repairing?))))
    (is (= true (and (> testRoll 0)
                     (< testRoll 7))))
    (is (= 40 (events/calcLaserDamage 1 4)))
    (is (= 80 (events/calcMissileDamage 2 8)))
    (is (= 115 (events/calcShieldsMax 2)))
    (is (= 120 (events/calcShieldsStrength 3 5)))
    (is (= 64 (events/calcRepairStrength 4 4)))
    (is (= [4 3] (events/createRepairedSystem 3)))))
  



(deftest fullShields
  "simulated attacks with full player shields - does not account for supercharged shields"
  (let [testRoll (events/diceRoll)
        sim-db db/default-db
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        laserAttackInit [playerShip enemyShip :engines 40 :lasers]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))]
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
               (get 0))))))


(deftest reducedShields
  "simulated attacks with reduced player health and shields"
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
        laserAttackInit [playerShip enemyShip :engines 40 :lasers]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))]
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
                   (:engines))))))


(deftest depletedShields
  "simulated attacks with depleted player shields"
  (let [sim-db {:playerShip {:systems {:lasers [2 1]
                                       :missiles [2 1]
                                       :shields [2 1]
                                       :repairBay [2 1]
                                       :engines [2 1]}
                             :HP 100
                             :ammo 2
                             :shields 0}
                :enemyShip {:systems {:lasers [2 1]
                                      :missiles [2 1]
                                      :shields [2 1]
                                      :repairBay [2 1]
                                      :engines [2 1]}
                            :HP 100
                            :shields 0
                            :ammo 2}}
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        laserAttackInit [playerShip enemyShip :engines 40 :lasers]
        laserAttackFinal (-> laserAttackInit
                           (events/newHP)
                           (events/newShields)
                           (events/newSystemHP))
        missileAttackInit [playerShip enemyShip :engines 40 :missiles]
        missileAttackFinal (-> missileAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))]
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
                   (:engines))))))



(deftest damagedShip
  "testing shielding and repairing functions on a damaged ship"
  (let [randomAmount (events/diceRoll)
        testShip {:systems {:lasers [1 1]
                              :engines [0 3]
                              :shields [2 1]
                              :repairBay [2 1]}
                    :HP 30
                    :maxHP 200
                    :shields 10
                    :ammo 5}
        newShip (-> [:engines testShip]
                  (events/restoreHP)
                  (events/restoreSystem)
                  (get 1)
                  (events/chargeShields randomAmount)
                  (events/consumeAmmo))
        newHP (:HP newShip)
        newAmmo (:ammo newShip)
        newShields (:shields newShip)
        newEngines (-> newShip :systems :engines)]
        

    ;checking HP
    (is (= true (and (>= newHP 34)
                     (<= newHP 54))))
    
    ;checking shields
    (is (= true (and (>= newShields 18)
                     (<= newShields 58))))

    ;checking ammo
    (is (= 4 newAmmo))

    ;checking engine system
    (is (= [4 3] newEngines))))



(deftest ammo
  "testing for ammo functions"
  (let [testShip {:systems {:lasers [1 1]}
                  :ammo 5}]

   (is (= 5 (-> testShip
              (events/refillAmmo 1)
              (:ammo))))

   (is (= 6 (-> testShip
              (events/refillAmmo 4)
              (:ammo))))

   (is (= 4 (-> testShip
              (events/consumeAmmo)
              (:ammo))))))




(run-tests)
