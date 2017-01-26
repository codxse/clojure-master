(ns try-spec.spec
  (:require [clojure.spec :as s]))

(s/def ::recipe (s/keys :req [::ingredients]
                        :opt [::steps]))

(s/def ::ingredients (s/* (s/cat :amount integer?
                                 :unit keyword?
                                 :name string?)))

(s/def ::steps (s/+ string?))