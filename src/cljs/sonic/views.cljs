(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(defn actionDisabled?
  [text requiredSystem]
  (if (or (and @(rf/subscribe [:firing?]) 
               (not= text "Fire Lasers")
               (= @(rf/subscribe [:firingType]) :lasers))
          (and @(rf/subscribe [:firing?])
               (not= text "Launch Missiles")
               (= @(rf/subscribe [:firingType]) :missiles))
          (= @(rf/subscribe [:phase]) 1)
          (events/systemDisabled? requiredSystem :playerShip)
          (and (= 0 (:ammo  @(rf/subscribe [:playerShip])))
               (= requiredSystem :missiles)))
      true
      false))

(defn actionButton
  [requiredSystem event text]
  (fn []
    [:button.action {:on-click (events/actionDispatch event)
                     :disabled (actionDisabled? text requiredSystem)} 
                    text]))
                                 
(defn shipVitalityDisplay
  [value text]
  [:textarea.vitalityDisplay {:value (str text ": " value)
                              :readOnly true}]) 
    
(defn systemButton
  [system type text]
  (let [firing? @(rf/subscribe [:firing?])
        ship @(rf/subscribe [type])
        ammo (:ammo ship)
        systemRank (-> ship
                       (:systems)
                       (system)
                       (get 1))
        systemHP (-> ship             
                     (:systems)
                     (system)
                     (get 0))
        shieldedStatus (if (> (:shields ship) 0)
                         "lightblue"
                         "orange")]
    [:button.system
     (if (= type :playerShip)
       {:disabled (or firing? 
                      (events/systemDisabled? system type))
        :style {:background-color shieldedStatus}}
       (if firing?
         {:on-click (events/damageDispatch system type @(rf/subscribe [:firingType]))
          :style {:background-color shieldedStatus}}
         {:on-click (fn [] (rf/dispatch [:doNothing]))
          :style {:background-color shieldedStatus}}))
     (if (= system :missiles)
        (str "Rank " systemRank " " text " (" systemHP " HP " ammo " Ammo)")
        (str "Rank " systemRank " " text " (" systemHP " HP)"))]))

(defn main-panel 
  []
  (let [playerHP (:HP @(rf/subscribe [:playerShip]))
        playerShields (:shields @(rf/subscribe [:playerShip]))
        enemyHP (:HP @(rf/subscribe [:enemyShip]))
        enemyShields (:shields @(rf/subscribe [:enemyShip]))
        enemySystems (:systems @(rf/subscribe [:enemyShip]))
        playerSystems (:systems @(rf/subscribe [:playerShip]))
        turn @(rf/subscribe [:turn])
        phase (if (= @(rf/subscribe [:phase]) 0)
               @(rf/subscribe [:playerName])
               "Enemy")
        firingMode (if (= @(rf/subscribe [:firing?]) false)
                     "Inactive"
                     "Active")
        gameOver? @(rf/subscribe [:gameOver?])]
    [:fieldset {:disabled gameOver?}
     [:div.flexContainer
      [:div.infoDisplayArea 
       [:textarea.infoDisplay {:value (if gameOver?
                                        "Game Over!"
                                        (str phase "'s Turn"))
                               :readOnly true
                               :style {:color (if (= @(rf/subscribe [:phase]) 0)
                                                "blue"
                                                "red")}}]
       [:textarea.infoDisplay {:value (str "Turn #: " turn)
                               :readOnly true}]]
       
      [:textarea.infoDisplay {:value (str "Firing Mode: " firingMode)
                              :readOnly true
                              :style {:color (if @(rf/subscribe [:firing?])
                                                "red"
                                                "green")}}]
      [:div.ships
       [:div.playerShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay playerShields "Shields"]
         [shipVitalityDisplay playerHP "HP"]]
        [systemButton :lasers :playerShip "Lasers"]
        [systemButton :missiles :playerShip "Missiles"]
        [systemButton :shields :playerShip "Shields"]
        [systemButton :engines :playerShip "Engines"]]
       [:div.enemyShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay enemyShields "Shields"]
         [shipVitalityDisplay enemyHP "HP"]]
        [systemButton :lasers :enemyShip "Lasers"]
        [systemButton :missiles :enemyShip "Missiles"]
        [systemButton :shields :enemyShip "Shields"]
        [systemButton :engines :enemyShip "Engines"]]]
      [:div.actionBar
       [actionButton :lasers :actionFire "Fire Lasers"]
       [actionButton :missiles :actionLaunch "Launch Missiles"]
       [actionButton :shields :actionChargeShields "Charge Shields"]
       [actionButton :engines :actionFlee "Flee"]]]]))
      
     
