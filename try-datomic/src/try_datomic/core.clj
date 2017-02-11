(ns try-datomic.core
  (:require [clojure.core.async :refer (<!!)]
            [datomic.client :as client]))

(def conn
  (<!! (client/connect
         {:db-name "firstdb"
          :account-id client/PRO_ACCOUNT
          :secret "mysecret"
          :region "none"
          :endpoint "localhost:8998"
          :service "peer-server"
          :access-key "myaccesskey"})))

(defn make-idents
  [x]
  (mapv #(hash-map :db/ident %) x))

(def sizes [:small :medium :large :xlarge])
(make-idents sizes)

(def types [:shirt :pants :dress :hat])
(def colors [:red :green :blue :yellow])
(<!! (client/transact conn {:tx-data (make-idents sizes)}))
(<!! (client/transact conn {:tx-data (make-idents types)}))

(def schema-1
  [{:db/ident :inv/sku
    :db/valueType :db.type/string
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/color
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/size
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :inv/type
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}])
(<!! (client/transact conn {:tx-data schema-1}))

(def sample-data
  (->> (for [color colors size sizes type types]
         {:inv/color color
          :inv/size size
          :inv/type type})
       (map-indexed
         (fn [idx map]
           (assoc map :inv/sku (str "SKU-" idx))))
       vec))

(def order-schema
  [{:db/ident :order/items
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true}
   {:db/ident :item/id
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :item/count
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}])
(<!! (client/transact conn {:tx-data order-schema}))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(def add-order
  {:order/items
   [{:item/id [:inv/sku "SKU-25"]
     :item/count 10}
    {:item/id [:inv/sku "SKU-26"]
     :item/count 20}]})

(<!! (client/transact conn {:tx-data [add-order]}))