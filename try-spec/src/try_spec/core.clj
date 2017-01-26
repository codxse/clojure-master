(ns try-spec.core
  (:require [try-spec.spec :as spoc]))

(def ugly-tomato-sauce
  {:spoc/ingredients [250 :gr "tomato"
                      3 :clove "garlic"
                      5 :gr "paper"]
   :spoc/steps ["heat a pan"
                "throw everything in"
                "stir"]})
