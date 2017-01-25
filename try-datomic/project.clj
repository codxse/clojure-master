(defproject try-datomic "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :creds :gpg}}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [com.datomic/datomic-pro $VERSION]])
