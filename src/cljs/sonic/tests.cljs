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
                     (< testRoll 7)))))
 (let [LASERS_RANK 1
       MISSILES_RANK 2
       SHIELDS_RANK 3
       REPAIR_RANK 4
       LASER_DAMAGE_ROLL 4
       MISSILE_DAMAGE_ROLL 8
       SHIELD_ROLL 5
       REPAIR_ROLL 4
       DAMAGED_SYSTEM_RANK 3

       EXPECTED_LASER_DAMAGE 40
       EXPECTED_MISSILE_DAMAGE 80
       EXPECTED_SHIELDS_MAX 130
       EXPECTED_SHIELD_STRENGTH 120
       EXPECTED_REPAIR_STRENGTH 64
       EXPECTED_REPAIRED_SYSTEM [4 3]]
   (is (= EXPECTED_LASER_DAMAGE (events/calcLaserDamage LASERS_RANK LASER_DAMAGE_ROLL)))
   (is (= EXPECTED_MISSILE_DAMAGE (events/calcMissileDamage MISSILES_RANK MISSILE_DAMAGE_ROLL)))
   (is (= EXPECTED_SHIELDS_MAX (events/calcShieldsMax SHIELDS_RANK)))
   (is (= EXPECTED_SHIELD_STRENGTH (events/calcShieldsStrength SHIELDS_RANK SHIELD_ROLL)))
   (is (= EXPECTED_REPAIR_STRENGTH (events/calcRepairStrength REPAIR_RANK REPAIR_ROLL)))
   (is (= EXPECTED_REPAIRED_SYSTEM (events/createRepairedSystem DAMAGED_SYSTEM_RANK)))))


(deftest fullShields
  "simulated attacks with full player shields - does not account for supercharged shields"
  (let [sim-db db/default-db
        playerShip (:playerShip sim-db)
        enemyShip (:enemyShip sim-db)
        DAMAGE 40
        TARGET_SYSTEM :engines
        laserAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :lasers]
        laserAttackFinal (-> laserAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))
        missileAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :missiles]
        missileAttackFinal (-> missileAttackInit
                               (events/newHP)
                               (events/newShields)
                               (events/newSystemHP))
        EXPECTED_HP_LASER 100
        EXPECTED_SHIELDS_LASER 60
        EXPECTED_SYSTEM_LASER [2 1]
        EXPECTED_HP_MISSILE 60
        EXPECTED_SHIELDS_MISSILE 100
        EXPECTED_SYSTEM_MISSILE [1 1]]
    ;--------laser attack calculations--------

    ;checks shields of defender
   (is (= EXPECTED_SHIELDS_LASER (-> laserAttackFinal
                                     (get 0)
                                     (:shields))))
     ;checks HP of defender
   (is (= EXPECTED_HP_LASER (-> laserAttackFinal
                                (get 0)
                                (:HP))))
    ;checks targeted system of defender
   (is (= EXPECTED_SYSTEM_LASER (-> laserAttackFinal
                                    (get 0)
                                    (:systems)
                                    (TARGET_SYSTEM))))

    ;---------missile attack calculations------

    ;checks shields of defender
   (is (= EXPECTED_SHIELDS_MISSILE (-> missileAttackFinal
                                       (get 0)
                                       (:shields))))
    ;checks HP of defender
   (is (= EXPECTED_HP_MISSILE (-> missileAttackFinal
                                  (get 0)
                                  (:HP))))
    ;checks systems of defender
   (is (= EXPECTED_SYSTEM_MISSILE (-> missileAttackFinal
                                      (get 0)
                                      (:systems)
                                      (TARGET_SYSTEM))))))


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
        DAMAGE 40
        TARGET_SYSTEM :engines
        laserAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :lasers]
        laserAttackFinal (-> laserAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))
        missileAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :missiles]
        missileAttackFinal (-> missileAttackInit
                               (events/newHP)
                               (events/newShields)
                               (events/newSystemHP))
        EXPECTED_HP_LASER 80
        EXPECTED_SHIELDS_LASER 0
        EXPECTED_SYSTEM_LASER [1 1]
        EXPECTED_HP_MISSILE 60
        EXPECTED_SHIELDS_MISSILE 20
        EXPECTED_SYSTEM_MISSILE [1 1]]
    ;--------laser attack calculations--------

    ;checks shields of defender
    (is (= EXPECTED_SHIELDS_LASER (-> laserAttackFinal
                                      (get 0)
                                      (:shields))))
     ;checks HP of defender
    (is (= EXPECTED_HP_LASER (-> laserAttackFinal
                                 (get 0)
                                 (:HP))))
    ;checks targeted system of defender
    (is (= EXPECTED_SYSTEM_LASER (-> laserAttackFinal
                                     (get 0)
                                     (:systems)
                                     (TARGET_SYSTEM))))

    ;---------missile attack calculations------

    ;checks shields of defender
    (is (= EXPECTED_SHIELDS_MISSILE (-> missileAttackFinal
                                        (get 0)
                                        (:shields))))
    ;checks HP of defender
    (is (= EXPECTED_HP_MISSILE (-> missileAttackFinal
                                   (get 0)
                                   (:HP))))
    ;checks systems of defender
    (is (= EXPECTED_SYSTEM_MISSILE (-> missileAttackFinal
                                       (get 0)
                                       (:systems)
                                       (TARGET_SYSTEM))))))


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
        DAMAGE 40
        TARGET_SYSTEM :engines
        laserAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :lasers]
        laserAttackFinal (-> laserAttackInit
                             (events/newHP)
                             (events/newShields)
                             (events/newSystemHP))
        missileAttackInit [playerShip enemyShip TARGET_SYSTEM DAMAGE :missiles]
        missileAttackFinal (-> missileAttackInit
                               (events/newHP)
                               (events/newShields)
                               (events/newSystemHP))
        EXPECTED_HP_LASER 60
        EXPECTED_SHIELDS_LASER 0
        EXPECTED_SYSTEM_LASER [1 1]
        EXPECTED_HP_MISSILE 60
        EXPECTED_SHIELDS_MISSILE 0
        EXPECTED_SYSTEM_MISSILE [1 1]]
    ;--------laser attack calculations--------

    ;checks shields of defender
    (is (= EXPECTED_SHIELDS_LASER (-> laserAttackFinal
                                      (get 0)
                                      (:shields))))
    ;checks HP of defender
    (is (= EXPECTED_HP_LASER (-> laserAttackFinal
                                 (get 0)
                                 (:HP))))
    ;checks targeted system of defender
    (is (= EXPECTED_SYSTEM_LASER (-> laserAttackFinal
                                     (get 0)
                                     (:systems)
                                     (TARGET_SYSTEM))))


    ;---------missile attack calculations------

    ;checks shields of defender
    (is (= EXPECTED_SHIELDS_MISSILE (-> missileAttackFinal
                                        (get 0)
                                        (:shields))))
    ;checks HP of defender
    (is (= EXPECTED_HP_MISSILE (-> missileAttackFinal
                                   (get 0)
                                   (:HP))))
    ;checks systems of defender
    (is (= EXPECTED_SYSTEM_MISSILE (-> missileAttackFinal
                                       (get 0)
                                       (:systems)
                                       (TARGET_SYSTEM))))))



(deftest damagedShip
  "testing shielding, repairing, and ammo consumption functions on a damaged ship"
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
                    (events/chargeShields randomAmount))
        newHP (:HP newShip)
        newAmmo (:ammo newShip)
        newShields (:shields newShip)
        newEngines (-> newShip :systems :engines)
        LOWER_BOUND_HP 34
        UPPER_BOUND_HP 54
        LOWER_BOUND_SHIELDS 18
        UPPER_BOUND_SHIELDS 58
        EXPECTED_SYSTEM [4 3]]


    ;checking HP
    (is (= true (and (>= newHP LOWER_BOUND_HP)
                     (<= newHP UPPER_BOUND_HP))))

    ;checking shields
    (is (= true (and (>= newShields LOWER_BOUND_SHIELDS)
                     (<= newShields UPPER_BOUND_SHIELDS))))

    ;checking engine system
    (is (= EXPECTED_SYSTEM newEngines))))



(deftest ammo
  "testing ammo functions"
  (let [testShip {:systems {:lasers [1 1]}
                  :ammo 5}
        EVEN_TURN 6
        ODD_TURN 5
        EXPECTED_AMMO_ODD_TURN 5
        EXPECTED_AMMO_EVEN_TURN 6
        EXPECTED_AMMO_CONSUMED 4]

    (is (= EXPECTED_AMMO_ODD_TURN (-> testShip
                                      (events/refillAmmo ODD_TURN)
                                      (:ammo))))

    (is (= EXPECTED_AMMO_EVEN_TURN (-> testShip
                                       (events/refillAmmo EVEN_TURN)
                                       (:ammo))))

    (is (= EXPECTED_AMMO_CONSUMED (-> testShip
                                      (events/consumeAmmo)
                                      (:ammo))))))




(run-tests)
