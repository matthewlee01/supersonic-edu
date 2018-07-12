(ns sonic.views
  (:require
   [re-frame.core :as rf]
   [sonic.subs :as subs]))
   

(defn main-panel 
  []
  (let [name "Matt"]
    [:div
     [:h1 "Hello from " name]
     [:button "This does nothing"]]))
     
