(require '[arachne.core.dsl :as ac])
(require '[arachne.http.dsl :as h])
(require '[arachne.pedestal.dsl :as p])

(ac/component :myproj/widget-1 'try-arachne.core/make-widget)
(h/handler :myproj/hello 'try-arachne.core/hello-handler)
(p/server :myproj/server 8080
          (h/endpoint :get "/" :myproj/hello)
          (h/endpoint :get
                      "/g/:name"
                      (h/handler 'try-arachne.core/greeter)))

(ac/runtime :myproj/runtime [:myproj/server :myproj/widget-1])


