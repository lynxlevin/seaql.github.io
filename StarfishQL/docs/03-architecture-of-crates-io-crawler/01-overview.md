# Overview

We need to obtain the crate data from [crates.io](https://crates.io) in order to insert them into the database.

The usual, trivial approaches might be directly scraping from their frontend website or sending HTTP requests to their API to *politely* ask for their resources. However, these approaches are **slow** (*it takes time for data to travel through the Internet*) and **possibly disruptive** (*there's only so much bandwidth*). In the case of crates.io, a better solution exists.

crates.io puts their data in a [public git repo](https://github.com/rust-lang/crates.io-index). Let's clone it and take a deeper dive.

```sh
# tree crates.io-index | less
crates.io-index
├── 1
│   ├── a
│   ├── b
│   ├── c
│   ├── d
│   ├── e
│   ├── f
...
├── se
...
│   ├── a-
│   │   ├── sea-canal
│   │   ├── sea-migrations
│   │   ├── sea-orm
│   │   ├── sea-orm-cli
│   │   ├── sea-orm-codegen
│   │   ├── sea-orm-macros
│   │   ├── sea-orm-rocket
│   │   ├── sea-orm-rocket-codegen
│   │   ├── sea-query
│   │   ├── sea-query-derive
│   │   ├── sea-schema
│   │   ├── sea-schema-derive
...
```

Apparently, the file structure of the repo is a (partial) prefix tree ([wiki](https://en.wikipedia.org/wiki/Trie)). All we care about is all the files at the deepest levels, each of which represents a single crate. For example, take a look at `se/a-/sea-orm`:

```json
{"name":"sea-orm","vers":"0.1.0","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.12.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.21","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-core","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-macros","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"1eb3d26aba7b281f174f580ab38cdc6eef34cad85628390339aa89dcd752c1dd","features":{"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"with-chrono":["chrono","sea-query/with-chrono"],"runtime-async-std":[],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"runtime-actix":[],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"with-json":["serde_json","sea-query/with-json"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"sqlx-json":["sqlx/json","with-json"],"mock":[],"macros":["sea-orm-macros"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"runtime-tokio":[],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"with-uuid":["uuid","sea-query/with-uuid"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"debug-print":[]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.1","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.12.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.21","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-core","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-macros","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"3cd6599f09116bfd821f0efeacde224d728f43f9239cb0218dd622e238146b08","features":{"macros":["sea-orm-macros"],"with-json":["serde_json","sea-query/with-json"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"with-chrono":["chrono","sea-query/with-chrono"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"debug-print":[],"mock":[],"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"with-uuid":["uuid","sea-query/with-uuid"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"runtime-async-std":[],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"runtime-actix":[],"runtime-tokio":[],"sqlx-json":["sqlx/json","with-json"],"sqlx-uuid":["sqlx/uuid","with-uuid"]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.2","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.1.1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.15","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.21","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-core","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-macros","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"3866c8ae90109677487be8763847ff1914d92592272994b95a6e389045f5fc7a","features":{"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"with-json":["serde_json","sea-query/with-json"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"debug-print":[],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"sqlx-json":["sqlx/json","with-json"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"runtime-tokio":[],"macros":["sea-orm-macros"],"mock":[],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"with-chrono":["chrono","sea-query/with-chrono"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"with-uuid":["uuid","sea-query/with-uuid"],"runtime-actix":[],"runtime-async-std":[],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.3","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.1.1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.15","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.21","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-core","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx-macros","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"3a687813af71b76317ce0b739a011d831c8700228e3410cf03ab1828e0b5e7e5","features":{"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"macros":["sea-orm-macros"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"with-chrono":["chrono","sea-query/with-chrono"],"debug-print":[],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"],"sqlx-json":["sqlx/json","with-json"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"with-uuid":["uuid","sea-query/with-uuid"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"with-json":["serde_json","sea-query/with-json"],"mock":[],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"runtime-actix":[],"runtime-async-std":[],"runtime-tokio":[],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"sqlx-chrono":["sqlx/chrono","with-chrono"]},"yanked":false,"links":null}
...
{"name":"sea-orm","vers":"0.5.0","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"async-trait","req":"^0.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"once_cell","req":"^1.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"ouroboros","req":"^0.14","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.5.0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.20.0","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.23","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"tracing","req":"^0.1","features":["log"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"url","req":"^2.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"pretty_assertions","req":"^0.7","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tracing-subscriber","req":"^0.3","features":["env-filter"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"5452736ac11d11f9dcf1980897d3a6302d78ee2bfcb928b0f9c03569f2e6b12c","features":{"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"],"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"runtime-actix":[],"macros":["sea-orm-macros"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"sqlx-json":["sqlx/json","with-json"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"with-json":["serde_json","sea-query/with-json","chrono/serde"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"runtime-async-std":[],"runtime-tokio":[],"mock":[],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"debug-print":[],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"with-uuid":["uuid","sea-query/with-uuid"],"with-chrono":["chrono","sea-query/with-chrono"]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.6.0","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"async-trait","req":"^0.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"once_cell","req":"^1.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"ouroboros","req":"^0.14","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.6.0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.21.0","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.23","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"tracing","req":"^0.1","features":["log"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"url","req":"^2.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes","tokio1"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"pretty_assertions","req":"^0.7","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tracing-subscriber","req":"^0.3","features":["env-filter"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"dd24380b48dacd3ed1c3d467c7b17ffa5818555a2c04066f4a0a9e17d830abc9","features":{"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"default":["macros","mock","with-json","with-chrono","with-rust_decimal","with-uuid"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid"],"with-json":["serde_json","sea-query/with-json","chrono/serde"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"with-chrono":["chrono","sea-query/with-chrono"],"debug-print":[],"macros":["sea-orm-macros"],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"runtime-tokio":[],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"sqlx-json":["sqlx/json","with-json"],"with-uuid":["uuid","sea-query/with-uuid"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"runtime-async-std":[],"mock":[],"runtime-actix":[]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.7.0","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"async-trait","req":"^0.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"once_cell","req":"^1.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"ouroboros","req":"^0.15","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.7.0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.23.0","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.23","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"time","req":"^0.2","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"tracing","req":"^0.1","features":["log"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"url","req":"^2.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes","tokio1"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"pretty_assertions","req":"^0.7","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tracing-subscriber","req":"^0.3","features":["env-filter"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"47cf9814f87c3c05b8013b368da62984e2bf9f31fc4d4d871257b4a00f073003","features":{"runtime-async-std":[],"sqlx-uuid":["sqlx/uuid","with-uuid"],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"with-uuid":["uuid","sea-query/with-uuid"],"sqlx-time":["sqlx/time","with-time"],"default":["macros","with-json","with-chrono","with-rust_decimal","with-uuid","with-time"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"debug-print":[],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"macros":["sea-orm-macros"],"runtime-actix":[],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"runtime-tokio":[],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid","sqlx-time"],"sqlx-json":["sqlx/json","with-json"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"with-json":["serde_json","sea-query/with-json","chrono/serde"],"with-time":["time","sea-query/with-time"],"with-chrono":["chrono","sea-query/with-chrono"],"mock":[],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"]},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.7.1","deps":[{"name":"async-stream","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"async-trait","req":"^0.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"chrono","req":"^0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"futures","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"futures-util","req":"^0.3","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"once_cell","req":"^1.8","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"ouroboros","req":"^0.15","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"rust_decimal","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-orm-macros","req":"^0.7.0","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-query","req":"^0.23.0","features":["thread-safe"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"sea-strum","req":"^0.23","features":["derive","sea-orm"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde","req":"^1.0","features":["derive"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"serde_json","req":"^1","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"sqlx","req":"^0.5","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"time","req":"^0.2","features":[],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"tracing","req":"^0.1","features":["log"],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"url","req":"^2.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"normal"},{"name":"uuid","req":"^0.8","features":["serde","v4"],"optional":true,"default_features":true,"target":null,"kind":"normal"},{"name":"actix-rt","req":"^2.2.0","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"async-std","req":"^1.9","features":["attributes","tokio1"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"maplit","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"pretty_assertions","req":"^0.7","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"rust_decimal_macros","req":"^1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol","req":"^1.2","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"smol-potat","req":"^1.1","features":[],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tokio","req":"^1.6","features":["full"],"optional":false,"default_features":true,"target":null,"kind":"dev"},{"name":"tracing-subscriber","req":"^0.3","features":["env-filter"],"optional":false,"default_features":true,"target":null,"kind":"dev"}],"cksum":"27dbb8a742003f8dbf2ba290d128134d4275a6b55fd02f4d728683b6b55ea9bf","features":{"with-json":["serde_json","sea-query/with-json","chrono/serde"],"with-chrono":["chrono","sea-query/with-chrono"],"runtime-actix-native-tls":["sqlx/runtime-actix-native-tls","runtime-actix"],"runtime-actix-rustls":["sqlx/runtime-actix-rustls","runtime-actix"],"runtime-async-std-rustls":["sqlx/runtime-async-std-rustls","runtime-async-std"],"sqlx-postgres":["sqlx-dep","sea-query/sqlx-postgres","sqlx/postgres"],"debug-print":[],"default":["macros","with-json","with-chrono","with-rust_decimal","with-uuid","with-time"],"runtime-async-std-native-tls":["sqlx/runtime-async-std-native-tls","runtime-async-std"],"runtime-tokio-rustls":["sqlx/runtime-tokio-rustls","runtime-tokio"],"sqlx-mysql":["sqlx-dep","sea-query/sqlx-mysql","sqlx/mysql"],"sqlx-json":["sqlx/json","with-json"],"runtime-tokio-native-tls":["sqlx/runtime-tokio-native-tls","runtime-tokio"],"runtime-async-std":[],"sqlx-dep":["sqlx-json","sqlx-chrono","sqlx-decimal","sqlx-uuid","sqlx-time"],"sqlx-chrono":["sqlx/chrono","with-chrono"],"sqlx-decimal":["sqlx/decimal","with-rust_decimal"],"sqlx-sqlite":["sqlx-dep","sea-query/sqlx-sqlite","sqlx/sqlite"],"sqlx-uuid":["sqlx/uuid","with-uuid"],"runtime-actix":[],"with-rust_decimal":["rust_decimal","sea-query/with-rust_decimal"],"sqlx-time":["sqlx/time","with-time"],"with-uuid":["uuid","sea-query/with-uuid"],"with-time":["time","sea-query/with-time"],"runtime-tokio":[],"mock":[],"sqlx-all":["sqlx-mysql","sqlx-postgres","sqlx-sqlite"],"macros":["sea-orm-macros"]},"yanked":false,"links":null}
```

The name, versions, and dependencies of the crate are all included in these files. Hence, the "crawler" is simply a file reader + parser.