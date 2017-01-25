(ns try-polym.core
  (:require [try-polym.protocol :as p]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(p/fixo-push [31 4 5 2] 4/7)
