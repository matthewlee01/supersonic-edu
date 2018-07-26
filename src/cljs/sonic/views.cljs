(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(defn pickColour []
  "creates a random hex colour code (no blue values)"
  (str "#" (rand-nth ["5" "6" "7" "8" "9" "a" "b" "c" "d"])
    (rand-nth ["5" "6" "7" "8" "9" "a" "b" "c" "d"])
    (rand-nth ["5" "6" "7" "8" "9" "a" "b" "c" "d"])
    (rand-nth ["5" "6" "7" "8" "9" "a" "b" "c" "d"])
    "00"))

(defn actionDisabled?
  [text requiredSystem]
  (if (or (and @(rf/subscribe [:firing?]) 
               (not= text "Fire Lasers")
               (= @(rf/subscribe [:firingType]) :lasers))
          (and @(rf/subscribe [:firing?])
               (not= text "Launch Missiles")
               (= @(rf/subscribe [:firingType]) :missiles))
          (and @(rf/subscribe [:repairing?])
               (not= text "Repair Ship"))
          (= @(rf/subscribe [:phase]) 1)
          (events/systemDisabled? requiredSystem :playerShip))
      true
      false))

(defn actionButton
  [requiredSystem event text]
  (fn []
    [:button.action {:on-click (events/actionDispatch event)
                     :disabled (actionDisabled? text requiredSystem)} 
                    text]))
   
(defn systemButton
  [system type text]
  (let [firing? @(rf/subscribe [:firing?])
        repairing? @(rf/subscribe [:repairing?])
        ship @(rf/subscribe [type])
        ammo (:ammo ship)
        systemVec (-> ship
                      (:systems)
                      (system))
        systemRank (get systemVec 1)
        systemHP (get systemVec 0)             
        shieldedStatus (if (> (:shields ship) 0)
                         (if (events/shieldsSupercharged? @(rf/subscribe [type]))
                           "violet"
                           "lightblue")
                         "orange")]
    [:button.system
     (if (= type :playerShip)
       (if repairing?
         {:on-click (events/repairDispatch system type) 
          :style {:background-color shieldedStatus}}
         (if firing?
           {:disabled (or firing?
                          (events/systemDisabled? system type))}
           {:style {:background-color shieldedStatus}}))
       (if firing?
         {:on-click (events/damageDispatch system type @(rf/subscribe [:firingType]))
          :style {:background-color shieldedStatus}}
         (if repairing?
           {:disabled true}
           {:style {:background-color shieldedStatus}})))
     (if (= system :missiles)
        (str "Rank " systemRank " " text " (" systemHP " HP " ammo " Ammo)")
        (str "Rank " systemRank " " text " (" systemHP " HP)"))]))
                                 
(defn shipVitalityDisplay
  [value text]
  [:textarea.vitalityDisplay {:value (str text ": " value)
                              :readOnly true}]) 
 
(defn main-panel 
  []
  (let [playerHP (:HP @(rf/subscribe [:playerShip]))
        playerShields (:shields @(rf/subscribe [:playerShip]))
        enemyHP (:HP @(rf/subscribe [:enemyShip]))
        enemyShields (:shields @(rf/subscribe [:enemyShip]))
        enemySystems (:systems @(rf/subscribe [:enemyShip]))
        playerSystems (:systems @(rf/subscribe [:playerShip]))
        turn @(rf/subscribe [:turn])
        phase @(rf/subscribe [:phase])
        phaseName (if (= phase 0)
                   @(rf/subscribe [:playerName])
                   "Enemy")
        
        firing? @(rf/subscribe [:firing?])
        repairing? @(rf/subscribe [:repairing?])
        gameOver? @(rf/subscribe [:gameOver?])]
    [:fieldset {:disabled gameOver?}
     [:div.flexContainer
      [:div.infoDisplayArea 
       [:textarea.infoDisplay {:value (if gameOver?
                                        "Game End!"
                                        (str phaseName "'s Turn"))
                               :readOnly true
                               :style {:color (if (= phase 0)
                                                "blue"
                                                "red")}}]
       [:textarea.infoDisplay {:value (str "Turn #: " turn)
                               :readOnly true}]]
       
      [:textarea.infoDisplay {:value (if repairing?
                                       "Repairing Mode"
                                       (if firing?
                                         "Firing Mode"
                                         "Select an Action"))
                              :readOnly true
                              :style {:color (if repairing?
                                                "green"
                                                (if firing?
                                                  "red"
                                                  "black"))}}]
      [:div.ships
       [:div.playerShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay playerShields "Shields"]
         [shipVitalityDisplay playerHP "HP"]]
        [systemButton :lasers :playerShip "Lasers"]
        [systemButton :missiles :playerShip "Missiles"]
        [systemButton :shields :playerShip "Shields"]
        [systemButton :repairBay :playerShip "Repair Bay"]
        [systemButton :engines :playerShip "Engines"]]
       [:div.enemyShip {:style {:background-color (pickColour)}}
        [:div.vitalityDisplayArea
         [shipVitalityDisplay enemyShields "Shields"]
         [shipVitalityDisplay enemyHP "HP"]]
        [systemButton :lasers :enemyShip "Lasers"]
        [systemButton :missiles :enemyShip "Missiles"]
        [systemButton :shields :enemyShip "Shields"]
        [systemButton :repairBay :enemyShip "Repair Bay"]
        [systemButton :engines :enemyShip "Engines"]]]
      [:div.actionBar
       [actionButton :lasers :actionFire "Fire Lasers"]
       [actionButton :missiles :actionLaunch "Launch Missiles"]
       [actionButton :shields :actionChargeShields "Charge Shields"]
       [actionButton :repairBay :actionRepairShip "Repair Ship"]
       [actionButton :engines :actionFlee "Flee"]]]]))
      
     
