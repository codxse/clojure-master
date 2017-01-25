(ns try-polym.multimethod)

;; dispatch function, first will run this
;; to decide what method to use besed on
;; value which is returned
(defmulti
  animal-behavior
  (fn [animal]
    (get animal :animal-familly)))

;; method, after run dispatch function
;; one of this method will be used
;; baed on value
(defmethod animal-behavior :cat
  [animal]
  {:name (get animal :name)
   :familly (get animal :animal-familly)
   :behavior "Meow!"})

(defmethod animal-behavior :dog
  [animal]
  {:name (get animal :name)
   :familly (get animal :animal-familly)
   :behavior "Woof!"})

(defmethod animal-behavior :cow
  [animal]
  {:name (get animal :name)
   :familly (get animal :animal-familly)
   :behavior "Mooh!"})

;; call it!
(animal-behavior {:animal-familly :cat
                  :name "Garfield"})
(animal-behavior {:animal-familly :dog
                  :name "Guffy"})
(animal-behavior {:animal-familly :cow
                  :name "Dancow"})

;; if nil value
(defmethod animal-behavior nil
  [animal]
  {:name (get animal :name :unknown)
   :familly :unknown
   :behavior "?"})

;; call it!
(animal-behavior {})
(animal-behavior {:name "Alien"})

;; else value
;; if none of above value
(defmethod animal-behavior :default
  [animal]
  {:name (get animal :name)
   :familly (get animal :animal-familly)
   :behavior "~~~~~~~~~!"})

;; call it!
(animal-behavior {:animal-familly :bird
                  :name "Pigeon"})
(animal-behavior {:animal-familly :frog
                  :name "Kaeor"})