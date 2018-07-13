(ns sonic.db)

(def old-db
  {:playerSystems {:weapons [1 1]
                   :shields [1 1]
                   :engines [1 1]}
   :enemySystems {:weapons [1 1]
                  :shields [1 1]
                  :engines [1 1]}
   :playerHP 100
   :playerShields 100
   :enemyHP 100
   :enemyShields 100
   :turn 0
   :firing? false})

(def default-db 
  {:playerShip {:systems {:weapons [1 1]
                          :shields [1 1]
                          :engines [1 1]}
                :HP 100
                :shields 100}
   :enemyShip {:systems {:weapons [1 1]
                         :shields [1 1]
                         :engines [1 1]}
               :HP 100
               :shields 100}
   :turn 0
   :firing? false}) 
