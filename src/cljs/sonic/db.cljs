(ns sonic.db)

(def default-db 
  {:playerShip {:systems {:weapons [1 1]
                          :shields [1 1]
                          :engines [1 1]}
                :HP 100
                :shields 50}
   :enemyShip {:systems {:weapons [1 1]
                         :shields [1 1]
                         :engines [1 1]}
               :HP 100
               :shields 50}
   :turn 0
   :firing? false}) 
