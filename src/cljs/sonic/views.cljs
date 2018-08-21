(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(def UPGRADE_COST_FACTOR 500)

(defn getShipColour
  [shipType]
  (:colour @(rf/subscribe [shipType])))

(defn screenActive?
  [screen]
  (= screen @(rf/subscribe [:activeScreen])))

(defn getZ
  [screen]
  (if (screenActive? screen)
    1
    -1))

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

(defn calcUpgradeCost
  [systemRank]
  (* UPGRADE_COST_FACTOR systemRank))

(defn canAffordUpgrade?
  [systemRank money]
  (if (>= money (calcUpgradeCost systemRank))
    true
    false))

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
             (if (canAffordUpgrade? systemRank @(rf/subscribe [:money]))
              {:on-click (events/upgradeSystemsDispatch system shipType (calcUpgradeCost systemRank))
               :style {:background-color "lightgreen"}}
              {:style {:background-color "grey"}})
             {:style {:background-color shieldedStatus}})))
       (if firing?
         {:on-click (events/damageDispatch system shipType @(rf/subscribe [:firingType]))
          :style {:background-color shieldedStatus}}
         (if repairing?
           {:disabled true}
           {:style {:background-color shieldedStatus}})))
     (if @(rf/subscribe [:gameOver?])
      (str "Rank " systemRank " " text " (Upgrade: $" (calcUpgradeCost systemRank)")")
      (if (= system :missiles)
       (str "Rank " systemRank " " text " (" systemHP " HP " ammo " Ammo)")
       (str "Rank " systemRank " " text " (" systemHP " HP)")))]))

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

(defn pregame-screen
  []
  [:div.pregame {:style {:z-index (getZ :pregame-screen)}}
   [:img {:src "spacethefinalfronthere.jpg"
          :style {:width "1000px"
                  :height "900px"}}]
   [:button.pregameButton {:on-click (fn [] 
                                       (rf/dispatch [::events/initialize-db])
                                       (rf/dispatch [::events/gameStart]))}
    "Game Start"]
   [:button.pregameButton {:on-click (fn [] (js/alert "lol ur bad"))}
    "Help"]])
                         

(defn management-screen
  []
  (let [playerShip @(rf/subscribe [:playerShip])]
    [:div.management {:style {:z-index (getZ :management-screen)}}
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
         [:textarea.moneyDisplay {:value (str "$" @(rf/subscribe [:money]))
                                  :readOnly true}]]]
       [:div.utility
        [:div.sitrep
         (str (genEnemyReportMsg)
              (genTurnsMsg))]
        [:div.stats
         ;this is a crude way to check battle # but it works right now and can be changed in the future
         [:p (str "Battles completed: " (calcBattlesWon (:HP playerShip) events/HP_GAIN events/BASE_HP))]
         [:p (str "Damage taken: " (:damageTaken @(rf/subscribe [:gameStats])))]
         [:p (str "Damage dealt: " (:damageDealt @(rf/subscribe [:gameStats])))]
         [:p (str "Missiles fired: " (:missilesFired @(rf/subscribe [:gameStats])))]
         [:p (str "Lasers fired: " (:lasersFired @(rf/subscribe [:gameStats])))]
         [:p (str "Score: " (:totalScore @(rf/subscribe [:gameStats])))]]

        [:div.menuButtons
         [:button {:on-click (fn [] (rf/dispatch [::events/gameStart]))
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "Next Battle"]
         [:button {:on-click (fn [] (rf/dispatch [::events/changeScreen :pregame-screen]))
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
    [:div.battle {:style {:z-index (getZ :battle-screen)}}
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
   (pregame-screen)
   (management-screen)
   (battle-screen)])
