(ns sonic.db)

(def default-db 
  {:playerShip {:systems {:lasers [2 1]
                          :missiles [2 1]
                          :shields [2 1]
                          :repairBay [2 1]
                          :engines [2 1]}
                :HP 100
                :maxHP 100
                :shields 100
                :ammo 2}
   :enemyShip {:systems {:lasers [2 1]
                         :missiles [2 1]
                         :shields [2 1]
                         :repairBay [2 1]
                         :engines [2 1]}
               :HP 100
               :maxHP 100
               :shields 100
               :ammo 2}
   :turn 0
   :firing? false
   :firingType nil
   :repairing? false
   :playerName nil
   :gameOver? false
   :phase 0
   :history []
   :devMode true})
