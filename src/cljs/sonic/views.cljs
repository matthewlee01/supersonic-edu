(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(defn actionDisabled?
  [text requiredSystem]
  (if (or (and @(rf/subscribe [:firing?]) (not= text "Fire")) 
          (= @(rf/subscribe [:turn]) 1)
          (events/systemDisabled? requiredSystem :playerShip))
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
        systemRank (-> @(rf/subscribe [type])
                       (:systems)
                       (system)
                       (get 1))
        systemHP (-> @(rf/subscribe [type])             
                     (:systems)
                     (system)
                     (get 0))]
    [:button.system
     (if (= type :playerShip)
       {:disabled (or firing? 
                      (events/systemDisabled? system type))}
       (if firing?
         {:on-click (events/damageDispatch system type)}
         {:on-click (fn [] (rf/dispatch [:doNothing]))}))
     (str "Rank " systemRank " " text " (" systemHP " HP)")]))

(defn main-panel 
  []
  (let [playerHP (:HP @(rf/subscribe [:playerShip]))
        playerShields (:shields @(rf/subscribe [:playerShip]))
        enemyHP (:HP @(rf/subscribe [:enemyShip]))
        enemyShields (:shields @(rf/subscribe [:enemyShip]))
        enemySystems (:systems @(rf/subscribe [:enemyShip]))
        playerSystems (:systems @(rf/subscribe [:playerShip]))
        turn (if (= @(rf/subscribe [:turn]) 0)
               @(rf/subscribe [:playerName])
               "Enemy")
        firingMode (if (= @(rf/subscribe [:firing?]) false)
                     "Inactive"
                     "Active")]
    [:fieldset {:disabled @(rf/subscribe [:gameOver?])}
     [:div.flexContainer
      [:div.infoDisplayArea 
       [:textarea.infoDisplay {:value (str turn "'s Turn")
                               :readOnly true
                               :style {:color (if (= @(rf/subscribe [:turn]) 0)
                                                "blue"
                                                "red")}}]
       [:textarea.infoDisplay {:value (str "Firing Mode: " firingMode)
                               :readOnly true
                               :style {:color (if @(rf/subscribe [:firing?])
                                                 "red"
                                                 "green")}}]]
      [:div.ships
       [:div.playerShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay playerShields "Shields"]
         [shipVitalityDisplay playerHP "HP"]]
        [systemButton :weapons :playerShip "Weapons"]
        [systemButton :shields :playerShip "Shields"]
        [systemButton :engines :playerShip "Engines"]]
       [:div.enemyShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay enemyShields "Shields"]
         [shipVitalityDisplay enemyHP "HP"]]
        [systemButton :weapons :enemyShip "Weapons"]
        [systemButton :shields :enemyShip "Shields"]
        [systemButton :engines :enemyShip "Engines"]]]
      [:div.actionBar
       [actionButton :weapons :actionFire "Fire"]
       [actionButton :shields :actionChargeShields "Charge Shields"]
       [actionButton :engines :actionFlee "Flee"]]]]))
      
     
