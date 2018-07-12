(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))
   
(defn actionButton
  [event text]
  (fn []
    [:button.action {:on-click (events/actionDispatch event)
                     :disabled (if (= @(rf/subscribe [:turn]) 0)
                                 false
                                 true)} text]))
                                 
(defn shipVitalityDisplay
  [value text]
  (fn []
    [:textarea.vitalityDisplay {:value (str text ": " value)
                                :readOnly true}]))
    
(defn main-panel 
  []
  (let [playerHP @(rf/subscribe [:playerHP])
        playerShields @(rf/subscribe [:playerShields])
        enemyHP @(rf/subscribe [:enemyHP])
        enemyShields @(rf/subscribe [:enemyShields])]
    [:div
     [:div.flexContainer
      [:div.ships
       [:div.playerShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay playerShields "Shields"]
         [shipVitalityDisplay playerHP "HP"]]
        [:button.playerSystem "Weapons"]
        [:button.playerSystem "Shields"]
        [:button.playerSystem "Engines"]]
       [:div.enemyShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay enemyShields "Shields"]
         [shipVitalityDisplay enemyHP "HP"]]
        [:button.enemySystem "Weapons"]
        [:button.enemySystem "Shields"]
        [:button.enemySystem "Engines"]]]
      [:div.actionBar
       [actionButton :actionFire "Fire"]
       [actionButton :actionChargeShields "Charge Shields"]
       [actionButton :actionFlee "Flee"]]]]))
      
     
