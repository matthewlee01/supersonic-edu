(ns sonic.events
  (:require
   [re-frame.core :as rf]
   [sonic.db :as db]))
   

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
