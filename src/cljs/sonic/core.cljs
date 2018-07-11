(ns sonic.core
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [sonic.events :as events]
   [sonic.views :as views]
   [sonic.config :as config]))
   
(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (r/render [views/main-panel]
            (.getElementById js/document "app")))

(def foo 22)

(defn gamescreen
  []
  [:div [:p "hi"]])

(defn ^:export init []
  (rf/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

