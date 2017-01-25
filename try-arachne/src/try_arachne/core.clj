(ns try-arachne.core
  (:require [com.stuartsierra.component :as ssc]
            [arachne.log :as log]
            [arachne.core.dsl :as core.dsl]))

(defrecord Widget []
  ssc/Lifecycle
  (start [this]
    (log/info :msg "Hello! from Arachne!") this)
  (stop [this]
    (log/info :msg "Bye! from Arachne!") this))

(defn make-widget []
  "Return an (unstarted) instance of widget."
  (->Widget))

(defn hello-handler
  [req]
  {:status 200
   :body (str req)})

(defn greeter [name]
  (let [{:keys [name]} (get name :path-params)]
    {:status 200
     :body (if (empty? name)
             "Who is there!?"
             (str "Hello! " name "!"))}))
