(ns sonic.db)

(def default-db 
  {:playerShip {:systems {:weapons [2 1]
                          :shields [2 1]
                          :engines [2 1]}
                :HP 100
                :shields 100}
   :enemyShip {:systems {:weapons [2 1]
                         :shields [2 1]
                         :engines [2 1]}
               :HP 100
               :shields 100}
   :turn 0
   :firing? false
   :playerName "Player"
   :gameOver? false
   :phase 0
   :history []}) 
