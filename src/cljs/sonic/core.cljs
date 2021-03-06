(ns sonic.core
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [sonic.events :as events]
   [sonic.views :as views]
   [sonic.config :as config]
   [sonic.tests :as tests]
   [sonic.db :as db]))

(defn dev-setup
  []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root
  []
  (rf/clear-subscription-cache!)
  (r/render [views/main-panel]
            (.getElementById js/document "app")))

(defn rewind
  [turn]
  (rf/dispatch [::events/rewindTurn turn]))

(defn adjustSystem
  [ship system systemVec]
  (rf/dispatch [::events/setSystemRank ship system systemVec]))

(defn devMode
  []
  (rf/dispatch [::events/toggleVal :devMode]))

(defn ^:export init
  []
  (rf/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
