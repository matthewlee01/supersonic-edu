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
                                 (if (and @(rf/subscribe [:firing?]) (not= text "Fire"))
                                   true
                                   false)
                                 true)} text]))
                                 
(defn shipVitalityDisplay
  [value text]
  [:textarea.vitalityDisplay {:value (str text ": " value)
                              :readOnly true}]) 
    
(defn systemButton
  [system type text]
  (let [firing? @(rf/subscribe [:firing?])]
    [:button.system
     (if (= type "player")
       {:disabled firing?}
       (if firing?
         {:on-click (events/damageDispatch system type)}
         {:on-click (fn [] (rf/dispatch [:doNothing]))}))
     text]))

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
        [systemButton :weapons "player" "Weapons"]
        [systemButton :shields "player" "Shields"]
        [systemButton :engines "player" "Engines"]]
       [:div.enemyShip
        [:div.vitalityDisplayArea
         [shipVitalityDisplay enemyShields "Shields"]
         [shipVitalityDisplay enemyHP "HP"]]
        [systemButton :weapons "enemy" "Weapons"]
        [systemButton :shields "enemy" "Shields"]
        [systemButton :engines "enemy" "Engines"]]]
      [:div.actionBar
       [actionButton :actionFire "Fire"]
       [actionButton :actionChargeShields "Charge Shields"]
       [actionButton :actionFlee "Flee"]]]]))
      
     
