(ns try-om.input-form
  (:require [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def state (atom {:username "" :password ""}))

(defn set-value [e]
  (swap! state assoc :value (.. e -target -value)))

(defn read
  [{:keys [state] :as env} key params]
  (if-let [[_ value] (find @state key)]
    {:value value}
    {:value :not-found}))

(defn mutate
  [{:keys [state] :as env} key params]
  (if (= `set-field key) ;; why symbol?
    {:value {:keys [:value]}
     :action #(swap! state assoc (:field params) (:value params))}
    {:value :not-found}))

(defui Input
  static om/IQuery
  (query [this]
    [:username :password])
  Object
  (render [this]
    (let [{:keys [username password]} (om/props this)]
      (dom/div nil
        (dom/label nil "Username ")
        (dom/input
          #js {:value username
               :onChange #(om/transact! this `[(set-field {:value ~(.. % -target -value)
                                                           :field :username})])})
        (dom/label nil "Password ")
        (dom/input
          #js {:value password
               :onChange #(om/transact! this `[(set-field {:value ~(.. % -target -value)
                                                           :field :password})])})))))

(def parser (om/parser {:read read
                        :mutate mutate}))

(def reconciler
  (om/reconciler {:state state
                  :parser parser}))

(om/add-root! reconciler
  Input
  (gdom/getElement "app"))