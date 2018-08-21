(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(defn getShipColour
  [shipType]
  (:colour @(rf/subscribe [shipType])))

(defn getPhaseName
  [phase]
  (if (= phase 0)
    @(rf/subscribe [:playerName])
    "Enemy"))

(defn calcBattlesWon
  [HP HPGain baseHP]
  (/ (- HP baseHP) HPGain))

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
  [system shipType text]
  (let [firing? @(rf/subscribe [:firing?])
        repairing? @(rf/subscribe [:repairing?])
        upgradingSystems? @(rf/subscribe [:upgradingSystems?])
        ship @(rf/subscribe [shipType])
        ammo (:ammo ship)
        systemVec (-> ship
                      (:systems)
                      (system))
        systemRank (get systemVec 1)
        systemHP (get systemVec 0)
        shieldedStatus (if (> (:shields ship) 0)
                         (if (events/shieldsSupercharged? ship)
                           "violet"
                           "lightblue")
                         "orange")]
    [:button.system
     (if (= shipType :playerShip)
       (if repairing?
         {:on-click (events/repairDispatch system shipType)
          :style {:background-color shieldedStatus}}
         (if firing?
           {:disabled (or firing?
                          (events/systemDisabled? system shipType))}
           (if upgradingSystems?
             {:on-click (events/upgradeSystemsDispatch system shipType)
              :style {:background-color "lightgreen"}}
             {:style {:background-color shieldedStatus}})))
       (if firing?
         {:on-click (events/damageDispatch system shipType @(rf/subscribe [:firingType]))
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

(defn genTurnsMsg
  []
  (str "Your previous battle lasted " @(rf/subscribe [:turn]) " turns! "))

(defn genEnemyReportMsg
  []
  (str "You defeated an enemy with " (:maxHP @(rf/subscribe [:enemyShip])) " HP! "))

(defn genBattlesWonMsg
  [HP HPGain baseHP]
  (str "Battles completed: " (calcBattlesWon HP HPGain baseHP) " "))
  
(defn management-screen
  []
  (let [playerShip @(rf/subscribe [:playerShip])]
    [:div.management {:style {:z-index (if @(rf/subscribe [:gameOver?])
                                          1
                                          -1)}}
       [:div.manageShip
        [:div.shipDisplay
         [:div.playerShip {:style {:background-color (getShipColour :playerShip)}}
            [:div.vitalityDisplayArea
             [shipVitalityDisplay (:shields playerShip) "Shields"]
             [shipVitalityDisplay (:HP playerShip) "HP"]]
            [systemButton :lasers :playerShip "Lasers"]
            [systemButton :missiles :playerShip "Missiles"]
            [systemButton :shields :playerShip "Shields"]
            [systemButton :repairBay :playerShip "Repair Bay"]
            [systemButton :engines :playerShip "Engines"]]]
        [:div.upgradeUI
         [:button.upgradeShip {:on-click (fn [] (rf/dispatch [::events/toggleVal :upgradingSystems?]))}
          "Upgrade Systems"]
         [:button.upgradeShip {:on-click (fn [] (rf/dispatch [::events/toggleVal :upgradingShip?]))}
          "Upgrade Ship"]]]
       [:div.utility
        [:div.sitrep
         (str "Your previous battle lasted " turn " turns! You defeated an enemy with " (:maxHP @(rf/subscribe [:enemyShip])) " HP!")]
        [:div.stats
         ;this is a crude way to check battle # but it works right now and can be changed in the future
         [:p (str "Battles completed: " (/ (- (:maxHP @(rf/subscribe [:playerShip])) 50) 50))]
         [:p (str "Damage taken: " (:damageTaken @(rf/subscribe [:gameStats])))]
         [:p (str "Damage dealt: " (:damageDealt @(rf/subscribe [:gameStats])))]
         [:p (str "Missiles fired: " (:missilesFired @(rf/subscribe [:gameStats])))]
         [:p (str "Lasers fired: " (:lasersFired @(rf/subscribe [:gameStats])))]
         [:p (str "Score: " (:totalScore @(rf/subscribe [:gameStats])))]]

        [:div.menuButtons
         [:button {:on-click (fn [] (rf/dispatch [::events/gameStart]))
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "Next Battle"]
         [:button {:on-click (fn []
                               (rf/dispatch [::events/initialize-db])
                               (rf/dispatch [::events/gameStart]))
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "Restart Game"]]]]))

(defn battle-screen
  []
  (let [gameOver? @(rf/subscribe [:gameOver?])
        phase @(rf/subscribe [:phase])
        repairing? @(rf/subscribe [:repairing?])
        firing? @(rf/subscribe [:firing?])
        playerShip @(rf/subscribe [:playerShip])
        enemyShip @(rf/subscribe [:enemyShip])] 
    [:div.battle
     [:fieldset {:disabled gameOver?
                 :style {:position "absolute"}}
      [:div.flexContainer
       [:div.infoDisplayArea
        [:textarea.infoDisplay {:value (if gameOver?
                                         "Game End!"
                                         (str (getPhaseName phase) "'s Turn"))
                                :readOnly true
                                :style {:color (if (= phase 0)
                                                 "blue"
                                                 "red")}}]
        [:textarea.infoDisplay {:value (str "Turn #: " @(rf/subscribe [:turn]))
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
        [:div.playerShip {:style {:background-color (getShipColour :playerShip)}}
         [:div.vitalityDisplayArea
          [shipVitalityDisplay (:shields playerShip) "Shields"]
          [shipVitalityDisplay (:HP playerShip) "HP"]]
         [systemButton :lasers :playerShip "Lasers"]
         [systemButton :missiles :playerShip "Missiles"]
         [systemButton :shields :playerShip "Shields"]
         [systemButton :repairBay :playerShip "Repair Bay"]
         [systemButton :engines :playerShip "Engines"]]
        [:div.enemyShip {:style {:background-color (getShipColour :enemyShip)}}
         [:div.vitalityDisplayArea
          [shipVitalityDisplay (:shields enemyShip) "Shields"]
          [shipVitalityDisplay (:HP enemyShip) "HP"]]
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
        [actionButton :engines :actionFlee "Flee"]]]]]))

(defn main-panel
  []
  [:div.mainPanel
   (management-screen)
   (battle-screen)])

     
