(ns sonic.db)

(def default-db
  {:playerShip {:systems {:lasers [2 1]
                          :missiles [2 1]
                          :shields [2 1]
                          :repairBay [2 1]
                          :engines [2 1]}
                :HP 50
                :maxHP 50
                :shields 100
                :ammo 2
                :colour "blue"}
   :enemyShip {:systems {:lasers [2 1]
                         :missiles [2 1]
                         :shields [2 1]
                         :repairBay [2 1]
                         :engines [2 1]}
               :HP 50
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
   :playerDefeated? false
   :dodgeChance? false
   :phase 0
   :history []
   :devMode true
   :upgradingSystems? false
   :upgradingShip? false
   :battleScore 0
   :activeScreen :pregame-screen
   :gameStats {:totalScore 0
               :damageDealt 0
               :damageTaken 0
               :missilesFired 0
               :lasersFired 0
               :timesRepaired 0
               :enemiesDefeated 0
               :battleTime 0
               :moneyGained 0
               :moneySpent 0}
   :startTime nil
   :money 0})
