(ns try-polym.protocol
  (:require [try-polym.record :as r])
  (:import [try_polym.record RTreeNode]))

(defprotocol PFixo
  (fixo-push [fixo value])
  (fixo-pop [fixo])
  (fixo-seek [fixo]))

(extend-type RTreeNode
  PFixo
  (fixo-push [node value]
    (r/xconj node value)))

(r/xseq (fixo-push r/simple-tree 5/2))

(extend-type clojure.lang.IPersistentVector
  PFixo
  (fixo-push [vector value]
    (conj vector value)))

(fixo-push [31 4 5 2] 4/7)


