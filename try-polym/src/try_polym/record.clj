(ns try-polym.record)

(defrecord RTreeNode [val l r])

(defn xconj [t v]
  (cond
    (nil? t) (RTreeNode. v nil nil)
    (< v (get t :val)) (RTreeNode. (get t :val) (xconj (:l t) v) (get t :r))
    :else (RTreeNode. (get t :val) (get t :l) (xconj (get t :r) v))))

(defn xseq [t]
  (when t
    (concat (xseq (get t :l)) [(get t :val) (xseq (get t :r))])))

(def simple-tree (reduce xconj nil [3 5 2 4 6]))