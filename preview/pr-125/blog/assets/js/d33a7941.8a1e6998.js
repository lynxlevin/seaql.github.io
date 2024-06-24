"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[8774],{9680:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var r=t(6687);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=n,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return t?r.createElement(g,l(l({ref:a},m),{},{components:t})):r.createElement(g,l({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7556:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(1308),n=(t(6687),t(9680));const o={slug:"2022-09-27-getting-started-with-seaography",title:"Getting Started with Seaography",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,i={permalink:"/preview/pr-125/blog/2022-09-27-getting-started-with-seaography",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-09-27-getting-started-with-seaography.md",source:"@site/blog/2022-09-27-getting-started-with-seaography.md",title:"Getting Started with Seaography",description:"Seaography is a GraphQL framework for building GraphQL resolvers using SeaORM. It ships with a CLI tool that can generate ready-to-compile Rust projects from existing MySQL, Postgres and SQLite databases.",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"news",permalink:"/preview/pr-125/blog/tags/news"}],readingTime:5.315,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-09-27-getting-started-with-seaography",title:"Getting Started with Seaography",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaQuery 0.27.0",permalink:"/preview/pr-125/blog/2022-10-31-whats-new-in-seaquery-0.27.0"},nextItem:{title:"Introducing Seaography \ud83e\udded",permalink:"/preview/pr-125/blog/2022-09-17-introducing-seaography"}},s={authorsImageUrls:[void 0]},p=[{value:"Extending a SeaORM project",id:"extending-a-seaorm-project",level:2},{value:"Generating a project from database",id:"generating-a-project-from-database",level:2},{value:"Checkout the example projects",id:"checkout-the-example-projects",level:2},{value:"Starting the GraphQL Server",id:"starting-the-graphql-server",level:2},{value:"Query Data via GraphQL",id:"query-data-via-graphql",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"People",id:"people",level:2}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," is a GraphQL framework for building GraphQL resolvers using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM"),". It ships with a CLI tool that can generate ready-to-compile Rust projects from existing MySQL, Postgres and SQLite databases."),(0,n.kt)("p",null,"The design and implementation of Seaography can be found on our ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-17-introducing-seaography/"},"release blog post")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/"},"documentation"),"."),(0,n.kt)("h2",{id:"extending-a-seaorm-project"},"Extending a SeaORM project"),(0,n.kt)("p",null,"Since Seaography is built on top of SeaORM, you can easily build a GraphQL server from a SeaORM project."),(0,n.kt)("p",null,"Start by adding Seaography and GraphQL dependencies to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=Cargo.toml",title:"Cargo.toml"},'[dependencies]\nsea-orm = { version = "^0.9", features = [ ... ] }\n+ seaography = { version = "^0.1", features = [ "with-decimal", "with-chrono" ] }\n+ async-graphql = { version = "4.0.10", features = ["decimal", "chrono", "dataloader"] }\n+ async-graphql-poem = { version = "4.0.10" }\n')),(0,n.kt)("p",null,"Then, derive a few macros on the SeaORM entities."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=src/entities/film_actor.rs",title:"src/entities/film_actor.rs"},'use sea_orm::entity::prelude::*;\n\n#[derive(\n    Clone,\n    Debug,\n    PartialEq,\n    DeriveEntityModel,\n+   async_graphql::SimpleObject,\n+   seaography::macros::Filter,\n)]\n+ #[graphql(complex)]\n+ #[graphql(name = "FilmActor")]\n#[sea_orm(table_name = "film_actor")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub actor_id: i32,\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub film_id: i32,\n    pub last_update: DateTimeUtc,\n}\n\n#[derive(\n    Copy,\n    Clone,\n    Debug,\n    EnumIter,\n    DeriveRelation,\n+   seaography::macros::RelationsCompact,\n)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::film::Entity",\n        from = "Column::FilmId",\n        to = "super::film::Column::FilmId",\n        on_update = "Cascade",\n        on_delete = "NoAction"\n    )]\n    Film,\n    #[sea_orm(\n        belongs_to = "super::actor::Entity",\n        from = "Column::ActorId",\n        to = "super::actor::Column::ActorId",\n        on_update = "Cascade",\n        on_delete = "NoAction"\n    )]\n    Actor,\n}\n')),(0,n.kt)("p",null,"We also need to define ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryRoot")," for the GraphQL server. This define the GraphQL schema."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/query_root.rs",title:"src/query_root.rs"},'#[derive(Debug, seaography::macros::QueryRoot)]\n#[seaography(entity = "crate::entities::actor")]\n#[seaography(entity = "crate::entities::film")]\n#[seaography(entity = "crate::entities::film_actor")]\npub struct QueryRoot;\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/lib.rs",title:"src/lib.rs"},"use sea_orm::prelude::*;\n\npub mod entities;\npub mod query_root;\n\npub use query_root::QueryRoot;\n\npub struct OrmDataloader {\n    pub db: DatabaseConnection,\n}\n")),(0,n.kt)("p",null,"Finally, create an executable to drive the GraphQL server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=src/main.rs",title:"src/main.rs"},'use async_graphql::{\n    dataloader::DataLoader,\n    http::{playground_source, GraphQLPlaygroundConfig},\n    EmptyMutation, EmptySubscription, Schema,\n};\nuse async_graphql_poem::GraphQL;\nuse poem::{handler, listener::TcpListener, web::Html, IntoResponse, Route, Server};\nuse sea_orm::Database;\nuse seaography_example_project::*;\n// ...\n\n#[handler]\nasync fn graphql_playground() -> impl IntoResponse {\n    Html(playground_source(GraphQLPlaygroundConfig::new("/")))\n}\n\n#[tokio::main]\nasync fn main() {\n    // ...\n\n    let database = Database::connect(db_url).await.unwrap();\n    let orm_dataloader: DataLoader<OrmDataloader> = DataLoader::new(\n        OrmDataloader { db: database.clone() },\n        tokio::spawn,\n    );\n\n    let schema = Schema::build(QueryRoot, EmptyMutation, EmptySubscription)\n        .data(database)\n        .data(orm_dataloader)\n        .finish();\n\n    let app = Route::new()\n        .at("/", get(graphql_playground)\n        .post(GraphQL::new(schema)));\n\n    Server::new(TcpListener::bind("0.0.0.0:8000"))\n        .run(app)\n        .await\n        .unwrap();\n}\n')),(0,n.kt)("h2",{id:"generating-a-project-from-database"},"Generating a project from database"),(0,n.kt)("p",null,"If all you have is a database schema, good news! You can setup a GraphQL server without writing a single line of code."),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"seaography-cli"),", it helps you generate SeaORM entities along with a full Rust project based on a database schema."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install seaography-cli\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"seaography-cli")," to generate code for the GraphQL server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# The command take three arguments\nseaography-cli <DATABASE_URL> <CRATE_NAME> <DESTINATION>\n\n# MySQL\nseaography-cli mysql://root:root@localhost/sakila seaography-mysql-example examples/mysql\n# PostgreSQL\nseaography-cli postgres://root:root@localhost/sakila seaography-postgres-example examples/postgres\n# SQLite\nseaography-cli sqlite://examples/sqlite/sakila.db seaography-sqlite-example examples/sqliteql\n")),(0,n.kt)("h2",{id:"checkout-the-example-projects"},"Checkout the example projects"),(0,n.kt)("p",null,"We have the following examples for you, alongside with the SQL scripts to initialize the database."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/mysql"},"MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/postgres"},"PostgreSQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/sqlite"},"SQLite"))),(0,n.kt)("p",null,"All examples provide a web-based GraphQL playground when running, so you can inspect the GraphQL schema and make queries. We also hosted a ",(0,n.kt)("a",{parentName:"p",href:"https://playground.sea-ql.org/seaography"},"demo GraphQL playground")," in case you can't wait to play with it."),(0,n.kt)("h2",{id:"starting-the-graphql-server"},"Starting the GraphQL Server"),(0,n.kt)("p",null,"Your GraphQL server is ready to launch! Go to the Rust project root then execute ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo run")," to spin it up."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo run\n\nPlayground: http://localhost:8000\n")),(0,n.kt)("p",null,"Visit the GraphQL playground at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/Seaography/img/playground_example_database.png",alt:"GraphQL Playground"})),(0,n.kt)("h2",{id:"query-data-via-graphql"},"Query Data via GraphQL"),(0,n.kt)("p",null,"Let say we want to get the first 3 films released on or after year 2006 sorted in ascending order of its title."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  film(\n    pagination: { limit: 3, page: 0 }\n    filters: { releaseYear: { gte: "2006" } }\n    orderBy: { title: ASC }\n  ) {\n    data {\n      filmId\n      title\n      description\n      releaseYear\n      filmActor {\n        actor {\n          actorId\n          firstName\n          lastName\n        }\n      }\n    }\n    pages\n    current\n  }\n}\n')),(0,n.kt)("p",null,"We got the following JSON result after running the GraphQL query."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "film": {\n      "data": [\n        {\n          "filmId": 1,\n          "title": "ACADEMY DINOSAUR",\n          "description": "An Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",\n          "releaseYear": "2006",\n          "filmActor": [\n            {\n              "actor": {\n                "actorId": 1,\n                "firstName": "PENELOPE",\n                "lastName": "GUINESS"\n              }\n            },\n            {\n              "actor": {\n                "actorId": 10,\n                "firstName": "CHRISTIAN",\n                "lastName": "GABLE"\n              }\n            },\n            // ...\n          ]\n        },\n        {\n          "filmId": 2,\n          "title": "ACE GOLDFINGER",\n          "description": "A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China",\n          "releaseYear": "2006",\n          "filmActor": [\n            // ...\n          ]\n        },\n        // ...\n      ],\n      "pages": 334,\n      "current": 0\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Behind the scene, the following SQL were queried:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "film"."film_id",\n       "film"."title",\n       "film"."description",\n       "film"."release_year",\n       "film"."language_id",\n       "film"."original_language_id",\n       "film"."rental_duration",\n       "film"."rental_rate",\n       "film"."length",\n       "film"."replacement_cost",\n       "film"."rating",\n       "film"."special_features",\n       "film"."last_update"\nFROM "film"\nWHERE "film"."release_year" >= \'2006\'\nORDER BY "film"."title" ASC\nLIMIT 3 OFFSET 0\n\nSELECT "film_actor"."actor_id", "film_actor"."film_id", "film_actor"."last_update"\nFROM "film_actor"\nWHERE "film_actor"."film_id" IN (1, 3, 2)\n\nSELECT "actor"."actor_id", "actor"."first_name", "actor"."last_name", "actor"."last_update"\nFROM "actor"\nWHERE "actor"."actor_id" IN (24, 162, 20, 160, 1, 188, 123, 30, 53, 40, 2, 64, 85, 198, 10, 19, 108, 90)\n')),(0,n.kt)("p",null,"Under the hood, Seaography uses ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/dataloader/index.html"},"async_graphql::dataloader")," in querying nested objects to tackle the N+1 problem."),(0,n.kt)("p",null,"To learn more, checkout the ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/docs/data-loader/"},"Seaography Documentation"),"."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Seaography is an ergonomic library that turns SeaORM entities into GraphQL nodes. It provides a set of utilities and combined with a code generator makes GraphQL API building a breeze."),(0,n.kt)("p",null,"However, Seaography is still a new-born. Like all other open-source projects developed by passionate Rust developers, you can contribute to it if you also find the concept interesting. With its addition to the SeaQL ecosystem, we are one step closer to the vision of Rust being the best tool for data engineering."),(0,n.kt)("h2",{id:"people"},"People"),(0,n.kt)("p",null,"Seaography is created by:"),(0,n.kt)("div",{className:"container"},(0,n.kt)("div",{className:"row"},(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/karatakis"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/7329022?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Panagiotis Karatakis"),"Summer of Code Contributor; developer of Seaography"))),(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Chris Tsang"),"Summer of Code Mentor; lead developer of SeaQL"))),(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Billy Chan"),"Summer of Code Mentor; core member of SeaQL"))))))}c.isMDXComponent=!0}}]);