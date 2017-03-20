(ns transducer.core
  (:gen-class))

(reduce + (range 100))

(reduce conj [] (range 100))

(defn mapl [f coll]
  (reduce (fn [r x] (conj r (f x)))
          [] coll))

(mapl inc (range 10))

(defn filterl [pred coll]
  (reduce (fn [r x] (if (pred x) (conj r x) r))
          [] coll))

(filterl odd? (range 10))

;; one step above

;; map
(defn mapping [f]
  (fn [step]
    (fn [r x] (step r (f x)))))

(def inc-fn ((mapping inc) conj))
(inc-fn [] 1)

(((mapping inc) conj) [] 1)
(reduce ((mapping inc) conj) [] (range 10))

;; filter
(defn filtering [pred]
  (fn [step]
    (fn [r x] (if (pred x) (step r x) r))))

(((filtering odd?) conj) [] 1)
(reduce ((filtering odd?) conj) [] (range 10))

;; with + instead conj

(reduce ((mapping inc) +) (range 10))

(reduce ((filtering odd?) +) (range 10))

;; filter-and-map
(def filter-map-odd ((mapping inc) ((filtering odd?) conj)))
(reduce filter-map-odd [] (range 10))

;; comp

(def xform
  (comp
    (mapping inc)
    (filtering odd?)))

(reduce (xform conj) [] (range 10))

;; transducible

(sequence (map inc) (range 10))

(into [] (map inc) (range 10))

(transduce (map inc) [] (range 10))

;; my former question
(defn get-people [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(def st {:list/one
         [[:person/by-name "John"]
          [:person/by-name "Mary"]
          [:person/by-name "Bob"]],
         :list/two
         [[:person/by-name "Mary"]
          [:person/by-name "Gwen"]
          [:person/by-name "Jeff"]],
         :person/by-name
         {"John" {:name "John", :points 0},
          "Mary" {:name "Mary", :points 0, :age 27},
          "Bob" {:name "Bob", :points 0},
          "Gwen" {:name "Gwen", :points 0},
          "Jeff" {:name "Jeff", :points 0}}})

(into [] (map #(get-in st %)) (get st :list/one))