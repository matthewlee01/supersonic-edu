(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

(def UPGRADE_COST_FACTOR 500)

(def VITALITY_BAR_WIDTH "185px")

(def VITALITY_BAR_HEIGHT "15px")

(def SAMPLE_QUESTION ["What is 2 + 2?" "4"])

(defn getShipColour
  [shipType]
  (:colour @(rf/subscribe [shipType])))

(defn getZ
  "returns 1 as z-value if inputed screen is the current screen,
  otherwise returns 0"
  [screen]
  (if (= screen @(rf/subscribe [:activeScreen]))
    1
    -1))

(defn getStatText
  "generates the text for a stat"
  [[label statName & endLabel]]
  (str label
       ": "
       (statName @(rf/subscribe [:gameStats]))
       (apply str endLabel)))

(defn statElement
  "generates the element for a stat"
  [statInfoVector]
  [:p.statsText (getStatText statInfoVector)])

(defn statsBlock
  "strings multiple stat elements together"
  [& statInfoVectors]
  (->> statInfoVectors
       (map statElement)
       (cons :div)
       (vec)))

(defn getPhaseName
  [phase]
  (if (= phase 0)
    @(rf/subscribe [:playerName])
    "Enemy"))

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
    [:button.action {:on-click (if (or (= text "Charge Shields")
                                       (= text "Flee"))
                                 (events/questionDispatch SAMPLE_QUESTION [event])
                                 (events/actionDispatch event))
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

(defn statusBar
  [currentVal maxVal colour width height]
  (let [percentVal (-> currentVal
                       (/ maxVal)
                       (* 100))]
   [:div {:style {:width width
                  :height height
                  :background-color "white"}}
    [:div {:style {:width (str percentVal "%")
                   :height "100%"
                   :background-color colour}}]]))

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
         {:on-click (events/questionDispatch SAMPLE_QUESTION [:repairShip system shipType])
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
         {:on-click (events/questionDispatch 
                      SAMPLE_QUESTION
                      [:damageShip 
                       system 
                       shipType 
                       @(rf/subscribe [:firingType]) 
                       (events/diceRoll) 
                       false])
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
  (str "You " (if @(rf/subscribe [:playerDefeated?])
                "were defeated by"
                "defeated")" an enemy with " (:maxHP @(rf/subscribe [:enemyShip])) " HP! "))

(defn pregame-screen
  []
  [:div.pregame {:style {:z-index (getZ :pregame-screen)}}
   [:img {:src "spacethefinalfronthere.jpg"
          :style {:width "1025px"
                  :height "600px"}}]
   [:button.pregameButton {:on-click (fn []
                                       (rf/dispatch [::events/initialize-db])
                                       (rf/dispatch [::events/gameStart]))}
    "Game Start"]
   [:a.helpButton {:href "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                   :target "_blank"
                   :on-click (fn [] (js/alert "lol ur bad"))}
    "Help"]
   [:button.pregameButton {:on-click (fn [] (rf/dispatch [::events/changeScreen :options-screen]))}
    "Options"]])

(defn options-screen
  []
  [:div.options {:style {:z-index (getZ :options-screen)}}
   "there are currently no options to change"
   [:button {:on-click (fn [] (rf/dispatch [::events/changeScreen :pregame-screen]))}
    "Return to Menu"]])

(defn management-screen
  []
  (let [playerShip @(rf/subscribe [:playerShip])
        playerDefeated? @(rf/subscribe [:playerDefeated?])]
    [:div.management {:style {:z-index (getZ :management-screen)}}
       [:div.manageShip
        [:div.shipDisplay
         [:div.playerShip {:style {:background-color (getShipColour :playerShip)}}
          [:div.vitalityStatusBars
            (statusBar
              (:shields playerShip)
              (events/calcShieldsMax (get-in playerShip [:systems :shields 1]))
              "teal"
              VITALITY_BAR_WIDTH
              VITALITY_BAR_HEIGHT)
            (statusBar
              (:HP playerShip)
              (:maxHP playerShip)
              "green"
              VITALITY_BAR_WIDTH
              VITALITY_BAR_HEIGHT)]

          [:div.vitalityDisplayArea
           [shipVitalityDisplay (:shields playerShip) "Shields"]
           [shipVitalityDisplay (:HP playerShip) "HP"]]
          [systemButton :lasers :playerShip "Lasers"]
          [systemButton :missiles :playerShip "Missiles"]
          [systemButton :shields :playerShip "Shields"]
          [systemButton :repairBay :playerShip "Repair Bay"]
          [systemButton :engines :playerShip "Engines"]]]
        [:div.upgradeUI
         [:button.upgradeShip {:on-click (fn [] (rf/dispatch [::events/toggleVal :upgradingSystems?]))
                               :disabled playerDefeated?}
          "Upgrade Systems"]
         [:textarea.moneyDisplay {:value (str "$" @(rf/subscribe [:money]))
                                  :readOnly true}]]]
       [:div.utility
        [:div.sitrep
         [:div.sitrepText
          [:h1 "Battle Report"]
          [:p (genEnemyReportMsg)]
          [:p (genTurnsMsg)]]]
        [:div.statsBox
         [:button {:on-click (fn [] (rf/dispatch [::events/changeScreen :stats-screen]))
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "View Statistics"]]
        [:div.menuButtons
         [:button {:on-click (fn [] (rf/dispatch [::events/gameStart]))
                   :disabled playerDefeated?
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "Next Battle"]
         [:button {:on-click (fn [] (rf/dispatch [::events/changeScreen :pregame-screen]))
                   :style {:font-size "35px"
                           :padding "5px 10px"}} "Restart Game"]]]]))

(defn stats-screen
  []
  [:div.stats {:style {:z-index (getZ :stats-screen)}}
   [:div.statsDiv
    [:h1 "Your Statistics"]
    (statsBlock
      ["Enemies defeated" :enemiesDefeated]
      ["Damage taken" :damageTaken]
      ["Damage dealt" :damageDealt]
      ["Missiles fired" :missilesFired]
      ["Lasers fired" :lasersFired]
      ["Score" :totalScore]
      ["Times repaired" :timesRepaired]
      ["Time spent in battle" :battleTime "s"]
      ["Money earned" :moneyGained]
      ["Money spent" :moneySpent])
    [:button {:on-click (fn [] (rf/dispatch [::events/changeScreen :management-screen]))
              :style {:font-size "35px"
                      :width "250px"
                      :height "100px"
                      :padding "5px 10px"}} "Return to Menu"]]])

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
         [:div.vitalityStatusBars
          (statusBar
            (:shields playerShip)
            (events/calcShieldsMax (get-in playerShip [:systems :shields 1]))
            "teal"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT)
          (statusBar
            (:HP playerShip)
            (:maxHP playerShip)
            "green"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT)]
         [:div.vitalityDisplayArea
          [shipVitalityDisplay (:shields playerShip) "Shields"]
          [shipVitalityDisplay (:HP playerShip) "HP"]]
         [systemButton :lasers :playerShip "Lasers"]
         [systemButton :missiles :playerShip "Missiles"]
         [systemButton :shields :playerShip "Shields"]
         [systemButton :repairBay :playerShip "Repair Bay"]
         [systemButton :engines :playerShip "Engines"]]
        [:div.enemyShip {:style {:background-color (getShipColour :enemyShip)}}
         [:div.vitalityStatusBars
          (statusBar
            (:shields enemyShip)
            (events/calcShieldsMax (get-in enemyShip [:systems :shields 1]))
            "teal"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT)
          (statusBar
            (:HP enemyShip)
            (:maxHP enemyShip)
            "green"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT)]
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
   (options-screen)
   (management-screen)
   (battle-screen)
   (stats-screen)])
