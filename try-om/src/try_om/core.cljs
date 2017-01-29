(ns try-om.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defui Title
  Object
  (render [this]
    (dom/h1 (clj->js {:className "Hello"}) (get (om/props this) :title))))

(def title (om/factory Title))

(js/ReactDOM.render
  (apply dom/div nil
    (map #(title {:react-key %
                  :title (str "Title-" %)})
         (range 30)))
  (gdom/getElement "app"))
