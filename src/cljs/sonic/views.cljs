(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]
   [sonic.events :as events]))

;the ceiling of possible numbers in math questions
(def MATH_NUMBER_MAX 13)

(def OPERATOR_STRINGS
  {+ "+"
   - "-"
   / "/"
   * "x"})

;the default number of terms in math questions
(def MATH_BASE_TERMS 2)

;the % at which the vitality bar should display the "full" colour
(def VIT_FULL_THRESHOLD 100)

;the % at which the vitality bar should switch to the "low" colour
(def VIT_LOW_THRESHOLD 50)

;the % at which the vitality bar should switch to the "critical colour"
(def VIT_CRITICAL_THRESHOLD 25)

(def UPGRADE_COST_FACTOR 1500)

(def VITALITY_BAR_WIDTH "185px")

(def VITALITY_BAR_HEIGHT "30px")

;generates the prompt for the question from the terms and the operator
;returns a string in the form of "What is 1 + 3 + 4...?"
(defn genMathQuestionString
  [terms operator]
  (str (->> (rest terms)
            (map #(str " " (OPERATOR_STRINGS operator) " " %))
            (vector "What is " (first terms))
            (flatten)
            (apply str)) "?"))

;generates the answer to the math question
(defn genMathQuestionAnswer
  [terms operator]
  (reduce operator terms))

;generates a random math question in the form of ["question" "answer"]
(defn genRandomMathQuestion
  [termCount operator]
  (let [terms (repeatedly termCount #(rand-int MATH_NUMBER_MAX))]
    [(genMathQuestionString terms operator)
     (str (genMathQuestionAnswer terms operator))]))

;states and their capitals for question creation
(def STATE_CAPITALS [["Alabama" "Montgomery"]
                     ["Alaska" "Juneau"]
                     ["Arizona" "Phoenix"]
                     ["Arkansas" "Little Rock"]
                     ["California" "Sacramento"]
                     ["Colorado" "Denver"]
                     ["Connecticut" "Hartford"]
                     ["Delaware" "Dover"]
                     ["Florida" "Tallahassee"]
                     ["Georgia" "Atlanta"]
                     ["Hawaii" "Honolulu"]
                     ["Idaho" "Boise"]
                     ["Illinois" "Springfield"]
                     ["Indiana" "Indianapolis"]
                     ["Iowa" "Des Moines"]
                     ["Kansas" "Topeka"]
                     ["Kentucky" "Frankfort"]
                     ["Louisiana" "Baton Rouge"]
                     ["Maine" "Augusta"]
                     ["Maryland" "Annapolis"]
                     ["Massachusetts" "Boston"]
                     ["Michigan" "Lansing"]
                     ["Minnesota" "St. Paul"]
                     ["Mississippi" "Jackson"]
                     ["Missouri" "Jefferson City"]
                     ["Montana" "Helena"]
                     ["Nebraska" "Lincoln"]
                     ["Nevada" "Carson City"]
                     ["New Hampshire" "Concord"]
                     ["New Jersey" "Trenton"]
                     ["New Mexico" "Santa Fe"]
                     ["New York" "Albany"]
                     ["North Carolina" "Raleigh"]
                     ["North Dakota" "Bismarck"]
                     ["Ohio" "Columbus"]
                     ["Oklahoma" "Oklahoma City"]
                     ["Oregon" "Salem"]
                     ["Pennsylvania" "Harrisburg"]
                     ["Rhode Island" "Providence"]
                     ["South Carolina" "Columbia"]
                     ["South Dakota" "Pierre"]
                     ["Tennessee" "Nashville"]
                     ["Texas" "Austin"]
                     ["Utah" "Salt Lake City"]
                     ["Vermont" "Montpelier"]
                     ["Virginia" "Richmond"]
                     ["Washington" "Olympia"]
                     ["West Virginia" "Charleston"]
                     ["Wisconsin" "Madison"]
                     ["Wyoming" "Cheyenne"]])

;prompts for the capital of a state
(defn genCapitalQuestion
  []
  (let [[state capital] (rand-nth STATE_CAPITALS)]
   [(str "What is the capital of " state "?") capital]))

;prompts for the state that corresponds to a capital
(defn genStateQuestion
  []
  (let [[state capital] (rand-nth STATE_CAPITALS)]
   [(str "What state is " capital " the capital of?") state]))

;generates a random question from the active question types
(defn genRandomQuestion
  []
  (rand-nth (concat (if (events/getOptionVal :mathQuestionsOn?) [(genRandomMathQuestion MATH_BASE_TERMS +)
                                                                 (genRandomMathQuestion MATH_BASE_TERMS *)
                                                                 (genRandomMathQuestion MATH_BASE_TERMS -)])
                    (if (events/getOptionVal :stateQuestionsOn?) [(genStateQuestion)])
                    (if (events/getOptionVal :capitalQuestionsOn?) [(genCapitalQuestion)]))))


;returns the :colour of the specified ship
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

;returns a name for the turn display based on the current phase
(defn getPhaseName
  [phase]
  (if (= phase 0)
    @(rf/subscribe [:playerName])
    "Enemy"))

;checks to see if there are any factors which would prevent an action from being executed
;returns true or false
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

;constructs an action button to be placed on the action bar
(defn actionButton
  [requiredSystem event text]
  (fn []
    [:button.action {:on-click (if (and (events/getOptionVal :questions?)
                                        (or (= text "Charge Shields")
                                            (= text "Flee")))
                                 (events/questionDispatch (genRandomQuestion)
                                                          [event])
                                 (events/actionDispatch event))
                     :disabled (actionDisabled? text requiredSystem)}
                    text]))

;calculates the cost to upgrade a system
(defn calcUpgradeCost
  [systemRank]
  (* UPGRADE_COST_FACTOR systemRank))

;determines whether or not the player can afford an upgrade
(defn canAffordUpgrade?
  [systemRank money]
  (if (>= money (calcUpgradeCost systemRank))
    true
    false))

;determines the colour of a vitality status bar
(defn getVitalityBarColour
  [percentVal fullColour highColour lowColour critColour]
  (if (>= percentVal VIT_FULL_THRESHOLD)
    fullColour
    (if (> percentVal VIT_LOW_THRESHOLD)
      highColour
      (if (> percentVal VIT_CRITICAL_THRESHOLD)
        lowColour
        critColour))))

;a progress bar to display the status of a % value
(defn statusBar
  [currentVal maxVal colour width height text]
  (let [percentVal (-> currentVal
                       (/ maxVal)
                       (* 100))]
   [:div {:style {:width width
                  :height height
                  :border "2px solid black"
                  :background-color "white"}}
    [:div {:style {:width (str percentVal "%")
                   :height "100%"
                   :background-color (if (= colour "hp-gradient")
                                       (getVitalityBarColour
                                         percentVal "green" "green" "yellow" "red")
                                       (if (= colour "shields-gradient")
                                         (getVitalityBarColour
                                           percentVal "blueviolet" "teal" "mediumaquamarine" "darkseagreen")
                                         colour))}}
     [:div.barText {:style {:width width
                            :height height}}
      (str text " " currentVal "/" maxVal)]]]))

;contains the system buttons for the ships and all corresponding logic
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
        questions? (events/getOptionVal :questions?)
        shieldedStatus (if (> (:shields ship) 0)
                         (if (events/shieldsSupercharged? ship)
                           "violet"
                           "lightblue")
                         "orange")]
    [:button.system
     (if (= shipType :playerShip)
       (if repairing?
         {:on-click (if questions?
                      (events/questionDispatch (genRandomQuestion)
                                               [:repairShip system shipType])
                      (events/repairDispatch system shipType))
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
         {:on-click
          (if questions?
            (events/questionDispatch
              (genRandomQuestion)
              [:damageShip
               system
               shipType
               @(rf/subscribe [:firingType])
               (events/diceRoll)])
            (events/damageDispatch
              system
              shipType
              @(rf/subscribe [:firingType])))
          :style {:background-color shieldedStatus}}
         (if repairing?
           {:disabled true}
           {:style {:background-color shieldedStatus}})))
     (if @(rf/subscribe [:gameOver?])
      (str "Rank " systemRank " " text " (Upgrade: $" (calcUpgradeCost systemRank)")")
      (if (= system :missiles)
       (str "Rank " systemRank " " text " (" systemHP " HP " ammo " Ammo)")
       (str "Rank " systemRank " " text " (" systemHP " HP)")))]))

;a textarea to display HP or shields
(defn shipVitalityDisplay
  [value text]
  [:textarea.vitalityDisplay {:value (str text ": " value)
                              :readOnly true}])

;generates a "turns lasted" msg for battle report
(defn genTurnsMsg
  []
  (str "Your previous battle lasted " @(rf/subscribe [:turn]) " turns! "))

;generates a message detailing how strong the previous enemy was
(defn genEnemyReportMsg
  []
  (str "You " (if @(rf/subscribe [:playerDefeated?])
                "were defeated by"
                "defeated")" an enemy with " (:maxHP @(rf/subscribe [:enemyShip])) " HP! "))

;a button to toggle and option in the option-screen
(defn optionButton
  [text option]
  (let [optionVal (events/getOptionVal option)]
    [:button.optionButton {:on-click (fn [] (rf/dispatch [::events/toggleOptionVal option]))
                           :style {:border "5px solid grey"
                                   :background-color (if optionVal
                                                       "lime"
                                                       "red")}}
     (str text ": " optionVal)]))

;screen that displays before the first battle
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
                   :target "_blank"}
    "Help"]
   [:button.pregameButton {:on-click (fn [] (rf/dispatch [::events/changeScreen :options-screen]))}
    "Options"]])

;screen that displays when the options button is clicked from pregame
(defn options-screen
  []
  [:div.options {:style {:z-index (getZ :options-screen)}}
   [:h1 {:style {:background-color "green"
                 :padding "30px 30px"}} "Options"]
   [:div.optionsButtonBox
    (optionButton "Dodging" :dodgeOn?)
    [:div {:style {:font-size "30px"
                   :font-family "sans-serif"}}
     (str "Questions: " (if (events/getOptionVal :questions?)
                          "on"
                          "off"))]
    (optionButton "Math Questions" :mathQuestionsOn?)
    (optionButton "State Questions" :stateQuestionsOn?)
    (optionButton "Capital Questions" :capitalQuestionsOn?)]
   [:button.optionsExitButton {:on-click (fn [] (rf/dispatch [::events/changeScreen :pregame-screen]))}
    "Return to Menu"]])

;screen that displays after each battle
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
              "shields-gradient"
              VITALITY_BAR_WIDTH
              VITALITY_BAR_HEIGHT
              "Shields:")
            (statusBar
              (:HP playerShip)
              (:maxHP playerShip)
              "hp-gradient"
              VITALITY_BAR_WIDTH
              VITALITY_BAR_HEIGHT
              "HP:")]
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
         [:button.statsButton {:on-click (fn [] (rf/dispatch [::events/changeScreen :stats-screen]))}
          "View Statistics"]]
        [:div.menuButtons
         [:button.menuButton
          {:on-click (fn [] (rf/dispatch [::events/gameStart]))
           :disabled playerDefeated?}
          "Next Battle"]
         [:button.menuButton
          {:on-click (fn [] (rf/dispatch [::events/changeScreen :pregame-screen]))}
          "Restart Game"]]]]))

;screen that displays when stats button is clicked from management
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
    [:button.statsButton {:on-click (fn [] (rf/dispatch [::events/changeScreen :management-screen]))} "Return to Menu"]]])

;screen where battles take place between ships
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
            "shields-gradient"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT
            "Shields:")
          (statusBar
            (:HP playerShip)
            (:maxHP playerShip)
            "hp-gradient"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT
            "HP:")]
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
            "shields-gradient"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT
            "Shields:")
          (statusBar
            (:HP enemyShip)
            (:maxHP enemyShip)
            "hp-gradient"
            VITALITY_BAR_WIDTH
            VITALITY_BAR_HEIGHT
            "HP:")]
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

;combines all the screens to and is rendered in core.cljs
(defn main-panel
  []
  [:div.mainPanel
   (pregame-screen)
   (options-screen)
   (management-screen)
   (battle-screen)
   (stats-screen)])
