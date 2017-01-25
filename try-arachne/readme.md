## Running from the REPL

```Clojure
(require '[arachne.core :as arachne])
(require '[com.stuartsierra.component :as c])
(def cfg (arachne/config :myproj/app))
(def rt (arachne/runtime cfg :myproj/runtime))
(def started-rt (c/start rt))
```

Stop the runtime!
```Clojure
(c/stop started-rt)
```

## Running from shell

Noted that run accept two arguments: frist the app name second is the runtime
```Clojure
lein run :myproj/app :myproj/runtime
```