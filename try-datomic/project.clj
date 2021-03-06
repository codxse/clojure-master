(defproject try-datomic "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.2.395"]
                 [com.datomic/datomic-pro "0.9.5554"]
                 [com.datomic/clj-client "0.8.606"]]
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :creds :gpg}}
  :main ^:skip-aot try-datomic.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
