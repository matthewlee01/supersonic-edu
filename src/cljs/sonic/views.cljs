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
     (if (= type :playerShip)
       {:disabled firing?}
       (if firing?
         {:on-click (events/damageDispatch system type)}
         {:on-click (fn [] (rf/dispatch [:doNothing]))}))
     text]))

(defn main-panel 
  []
  (let [playerHP (:HP @(rf/subscribe [:playerShip]))
        playerShields (:shields @(rf/subscribe [:playerShip]))
        enemyHP (:HP @(rf/subscribe [:enemyShip]))
        enemyShields (:shields @(rf/subscribe [:enemyShip]))]
    [:div
     [:div.flexContainer
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
       [actionButton :actionFire "Fire"]
       [actionButton :actionChargeShields "Charge Shields"]
       [actionButton :actionFlee "Flee"]]]]))
      
     
