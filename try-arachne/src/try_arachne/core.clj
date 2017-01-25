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