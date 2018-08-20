(ns sonic.db)

(def default-db
  {:playerShip {:systems {:lasers [2 1]
                          :missiles [2 1]
                          :shields [2 1]
                          :repairBay [2 1]
                          :engines [2 1]}
                :HP 100
                :maxHP 50
                :shields 100
                :ammo 2
                :colour "blue"}
   :enemyShip {:systems {:lasers [2 1]
                         :missiles [2 1]
                         :shields [2 1]
                         :repairBay [2 1]
                         :engines [2 1]}
               :HP 100
               :maxHP 50
               :shields 100
               :ammo 2
               :colour "red"}
   :turn 0
   :firing? false
   :firingType nil
   :repairing? false
   :playerName nil
   :gameOver? false
   :phase 0
   :history []
   :devMode true
   :upgradingSystems? false
   :upgradingShip? false
   :battleScore 0
   :totalScore 0
   :gameStats {
               :missilesFired 0
               :lasersFired 0
               :amountShielded 0
               :shieldsRecharged 0
               :HPLost 0
               :amountRepaired 0}

   :money 0})
