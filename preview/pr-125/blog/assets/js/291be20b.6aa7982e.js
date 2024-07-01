"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[8853],{9680:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(1308),r=(n(6687),n(9680));const o={slug:"2024-07-01-graphql-support-with-loco-seaography",title:"Adding GraphQL Support to Loco with Seaography",author:"Billy Chan",author_title:"SeaQL Team",author_url:"https://github.com/billy1624",author_image_url:"https://avatars.githubusercontent.com/u/30400950?v=4",image:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM.png",tags:["news"]},l=void 0,i={permalink:"/preview/pr-125/blog/2024-07-01-graphql-support-with-loco-seaography",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-07-01-graphql-support-with-loco-seaography.md",source:"@site/blog/2024-07-01-graphql-support-with-loco-seaography.md",title:"Adding GraphQL Support to Loco with Seaography",description:"In this tutorial, we would add a GraphQL endpoint with Seaography based on our Loco starter application. Read our first tutorial of the series, Getting Started with Loco & SeaORM, if you haven't.",date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[{label:"news",permalink:"/preview/pr-125/blog/tags/news"}],readingTime:7.455,hasTruncateMarker:!1,authors:[{name:"Billy Chan",title:"SeaQL Team",url:"https://github.com/billy1624",imageURL:"https://avatars.githubusercontent.com/u/30400950?v=4"}],frontMatter:{slug:"2024-07-01-graphql-support-with-loco-seaography",title:"Adding GraphQL Support to Loco with Seaography",author:"Billy Chan",author_title:"SeaQL Team",author_url:"https://github.com/billy1624",author_image_url:"https://avatars.githubusercontent.com/u/30400950?v=4",image:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM.png",tags:["news"]},nextItem:{title:"Getting Started with Loco & SeaORM",permalink:"/preview/pr-125/blog/2024-05-28-getting-started-with-loco-seaorm"}},p={authorsImageUrls:[void 0]},s=[{value:"What is Seaography",id:"what-is-seaography",level:2},{value:"Adding Dependency",id:"adding-dependency",level:2},{value:"Setting up SeaORM Entities for Seaography",id:"setting-up-seaorm-entities-for-seaography",level:2},{value:"Implementing GraphQL Query Root",id:"implementing-graphql-query-root",level:2},{value:"Writing Loco Controller to Handle GraphQL Endpoint",id:"writing-loco-controller-to-handle-graphql-endpoint",level:2},{value:"Opening GraphQL Playground",id:"opening-graphql-playground",level:2},{value:"Creating Notes",id:"creating-notes",level:2},{value:"Querying Notes",id:"querying-notes",level:2},{value:"Adding User Authentication to GraphQL Endpoint",id:"adding-user-authentication-to-graphql-endpoint",level:2},{value:"Adding Authentication header to GraphQL Playground",id:"adding-authentication-header-to-graphql-playground",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"SQL Server Support",id:"sql-server-support",level:2}],u={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/blog/img/Loco%20x%20SeaORM.png"}),(0,r.kt)("p",null,"In this tutorial, we would add a GraphQL endpoint with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," based on our Loco starter application. Read our first tutorial of the series, ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2024-05-28-getting-started-with-loco-seaorm/"},"Getting Started with Loco & SeaORM"),", if you haven't."),(0,r.kt)("p",null,"The full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/loco_seaography"},"here"),"."),(0,r.kt)("h2",{id:"what-is-seaography"},"What is Seaography"),(0,r.kt)("p",null,"Seaography is a GraphQL framework for building GraphQL resolvers using SeaORM entities. It ships with a CLI tool that can generate ready-to-compile Rust GraphQL servers from existing MySQL, Postgres and SQLite databases."),(0,r.kt)("h2",{id:"adding-dependency"},"Adding Dependency"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," and add a few more dependencies: ",(0,r.kt)("inlineCode",{parentName:"p"},"seaography"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"async-graphql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"async-graphql-axum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy_static"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="loco_seaography/Cargo.toml"',title:'"loco_seaography/Cargo.toml"'},'seaography = { version = "1.0.0-rc.4", features = ["with-decimal", "with-chrono"] }\nasync-graphql = { version = "7.0", features = ["decimal", "chrono", "dataloader", "dynamic-schema"] }\nasync-graphql-axum = { version = "7.0" }\nlazy_static = { version = "1.4" }\ntower-service = { version = "0.3" }\n')),(0,r.kt)("h2",{id:"setting-up-seaorm-entities-for-seaography"},"Setting up SeaORM Entities for Seaography"),(0,r.kt)("p",null,"Seaography support relational query by defining ",(0,r.kt)("inlineCode",{parentName:"p"},"RelatedEntity")," to relate one entity with another."),(0,r.kt)("p",null,"You can do it manually, or with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sea-orm-cli generate entity -o src/models/_entities -u postgres://loco:loco@localhost:5432/loco_seaography_development --seaography\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_seaography/src/models/_entities/notes.rs"',title:'"loco_seaography/src/models/_entities/notes.rs"'},'use sea_orm::entity::prelude::*;\nuse serde::{Serialize, Deserialize};\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]\n#[sea_orm(table_name = "notes")]\npub struct Model {\n    pub created_at: DateTime,\n    pub updated_at: DateTime,\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub title: Option<String>,\n    pub content: Option<String>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::files::Entity")]\n    Files,\n}\n\nimpl Related<super::files::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Files.def()\n    }\n}\n\n+ // Defining `RelatedEntity` to relate one entity with another\n+ #[derive(Copy, Clone, Debug, EnumIter, DeriveRelatedEntity)]\n+ pub enum RelatedEntity {\n+     #[sea_orm(entity = "super::files::Entity")]\n+     Files,\n+ }\n')),(0,r.kt)("p",null,"We can see that a new enum ",(0,r.kt)("inlineCode",{parentName:"p"},"RelatedEntity")," is generated in the Entity files. This helps Seaography to locate the related Entities for making relational queries."),(0,r.kt)("h2",{id:"implementing-graphql-query-root"},"Implementing GraphQL Query Root"),(0,r.kt)("p",null,"We have finished setting up SeaORM entity for Seaography. Now, we implement the query root of Seaography where we bridge SeaORM and Async GraphQL with the help of Seaography."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_seaography/src/graphql/query_root.rs"',title:'"loco_seaography/src/graphql/query_root.rs"'},"use async_graphql::dynamic::*;\nuse sea_orm::DatabaseConnection;\nuse seaography::{Builder, BuilderContext};\n\nuse crate::models::_entities::*;\n\nlazy_static::lazy_static! { static ref CONTEXT: BuilderContext = BuilderContext::default(); }\n\npub fn schema(\n    database: DatabaseConnection,\n    depth: usize,\n    complexity: usize,\n) -> Result<Schema, SchemaError> {\n    // Builder of Seaography query root\n    let mut builder = Builder::new(&CONTEXT, database.clone());\n    // Register SeaORM entities\n    seaography::register_entities!(\n        builder,\n        // List all models we want to include in the GraphQL endpoint here\n        [files, notes, users]\n    );\n    // Configure async GraphQL limits\n    let schema = builder\n        .schema_builder()\n        // The depth is the number of nesting levels of the field\n        .limit_depth(depth)\n        // The complexity is the number of fields in the query\n        .limit_complexity(complexity);\n    // Finish up with including SeaORM database connection\n    schema.data(database).finish()\n}\n")),(0,r.kt)("h2",{id:"writing-loco-controller-to-handle-graphql-endpoint"},"Writing Loco Controller to Handle GraphQL Endpoint"),(0,r.kt)("p",null,"For convenience we use the build in GraphQL playground UI in ",(0,r.kt)("inlineCode",{parentName:"p"},"async-graphql")," to test the GraphQL endpoint. And handle the GraphQL request with ",(0,r.kt)("inlineCode",{parentName:"p"},"async_graphql_axum")," and Seaography."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_seaography/src/controllers/graphql.rs"',title:'"loco_seaography/src/controllers/graphql.rs"'},'use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};\nuse axum::{body::Body, extract::Request};\nuse loco_rs::prelude::*;\nuse tower_service::Service;\n\nuse crate::graphql::query_root;\n\n// GraphQL playground UI\nasync fn graphql_playground() -> Result<Response> {\n    // The `GraphQLPlaygroundConfig` take one parameter\n    // which is the URL of the GraphQL handler: `/api/graphql`\n    let res = playground_source(GraphQLPlaygroundConfig::new("/api/graphql"));\n\n    Ok(Response::new(res.into()))\n}\n\nasync fn graphql_handler(\n    State(ctx): State<AppContext>,\n    req: Request<Body>,\n) -> Result<Response> {\n    const DEPTH: usize = 10;\n    const COMPLEXITY: usize = 100;\n    // Construct the the GraphQL query root\n    let schema = query_root::schema(ctx.db.clone(), DEPTH, COMPLEXITY).unwrap();\n    // GraphQL handler\n    let mut graphql_handler = async_graphql_axum::GraphQL::new(schema);\n    // Execute GraphQL request and fetch the results\n    let res = graphql_handler.call(req).await.unwrap();\n\n    Ok(res)\n}\n\npub fn routes() -> Routes {\n    // Define route\n    Routes::new()\n        // We put all GraphQL route behind `graphql` prefix\n        .prefix("graphql")\n        // GraphQL playground page is a GET request\n        .add("/", get(graphql_playground))\n        // GraphQL handler is a POST request\n        .add("/", post(graphql_handler))\n}\n')),(0,r.kt)("h2",{id:"opening-graphql-playground"},"Opening GraphQL Playground"),(0,r.kt)("p",null,"Compile and run the Loco application, then visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/api/graphql"},"http://localhost:3000/api/graphql"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ cargo run start\n\n    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.60s\n     Running `target/debug/loco_seaography-cli start`\n2024-06-24T08:04:52.173924Z  INFO app: loco_rs::config: loading environment from selected_path="config/development.yaml" environment=development\n2024-06-24T08:04:52.180447Z  WARN app: loco_rs::boot: pretty backtraces are enabled (this is great for development but has a runtime cost for production. disable with `logger.pretty_backtrace` in your config yaml) environment=development\n2024-06-24T08:04:52.272392Z  INFO app: loco_rs::db: auto migrating environment=development\n2024-06-24T08:04:52.275198Z  INFO app: sea_orm_migration::migrator: Applying all pending migrations environment=development\n2024-06-24T08:04:52.280720Z  INFO app: sea_orm_migration::migrator: No pending migrations environment=development\n2024-06-24T08:04:52.281280Z  INFO app: loco_rs::boot: initializers loaded initializers="" environment=development\n2024-06-24T08:04:52.308827Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_ping environment=development\n2024-06-24T08:04:52.308936Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_health environment=development\n2024-06-24T08:04:52.309021Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes environment=development\n2024-06-24T08:04:52.309088Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes environment=development\n2024-06-24T08:04:52.309158Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes/:id environment=development\n2024-06-24T08:04:52.309234Z  INFO app: loco_rs::controller::app_routes: [DELETE] /api/notes/:id environment=development\n2024-06-24T08:04:52.309286Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes/:id environment=development\n2024-06-24T08:04:52.309334Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/register environment=development\n2024-06-24T08:04:52.309401Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/verify environment=development\n2024-06-24T08:04:52.309471Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/login environment=development\n2024-06-24T08:04:52.309572Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/forgot environment=development\n2024-06-24T08:04:52.309662Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/reset environment=development\n2024-06-24T08:04:52.309752Z  INFO app: loco_rs::controller::app_routes: [GET] /api/user/current environment=development\n2024-06-24T08:04:52.309827Z  INFO app: loco_rs::controller::app_routes: [POST] /api/files/upload/:notes_id environment=development\n2024-06-24T08:04:52.309910Z  INFO app: loco_rs::controller::app_routes: [GET] /api/files/list/:notes_id environment=development\n2024-06-24T08:04:52.309997Z  INFO app: loco_rs::controller::app_routes: [GET] /api/files/view/:files_id environment=development\n2024-06-24T08:04:52.310088Z  INFO app: loco_rs::controller::app_routes: [GET] /api/graphql environment=development\n2024-06-24T08:04:52.310172Z  INFO app: loco_rs::controller::app_routes: [POST] /api/graphql environment=development\n2024-06-24T08:04:52.310469Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding limit payload data="5mb" environment=development\n2024-06-24T08:04:52.310615Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding log trace id environment=development\n2024-06-24T08:04:52.310934Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding cors environment=development\n2024-06-24T08:04:52.311008Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding etag layer environment=development\n\n                      \u2584     \u2580\n                                 \u2580  \u2584\n                  \u2584       \u2580     \u2584  \u2584 \u2584\u2580\n                                    \u2584 \u2580\u2584\u2584\n                        \u2584     \u2580    \u2580  \u2580\u2584\u2580\u2588\u2584\n                                          \u2580\u2588\u2584\n\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584   \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2580\u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2580\u2580\u2580 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2584\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2584\u2584\u2584 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588  \u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2580\n   \u2580\u2580\u2580\u2588\u2588\u2584 \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2588\u2588\u2580\n       \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n                https://loco.rs\n\nenvironment: development\n   database: automigrate\n     logger: debug\ncompilation: debug\n      modes: server\n\nlistening on [::]:3000\n')),(0,r.kt)("h2",{id:"creating-notes"},"Creating Notes"),(0,r.kt)("p",null,"Create a new notes with the GraphQL mutator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  notesCreateOne(\n    data: {\n      id: 1\n      title: "Notes 001"\n      content: "Content 001"\n      createdAt: "2024-06-24 00:00:00"\n      updatedAt: "2024-06-24 00:00:00"\n    }\n  ) {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20create.png",alt:null})),(0,r.kt)("h2",{id:"querying-notes"},"Querying Notes"),(0,r.kt)("p",null,"Query notes with its related files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  notes {\n    nodes {\n      id\n      title\n      content\n      files {\n        nodes {\n          id\n          filePath\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20query.png",alt:null})),(0,r.kt)("h2",{id:"adding-user-authentication-to-graphql-endpoint"},"Adding User Authentication to GraphQL Endpoint"),(0,r.kt)("p",null,"Our GraphQL handler can be accessed without user authentication. Next, we want to only allow logged in user to access the GraphQL handler."),(0,r.kt)("p",null,"To do so, we add ",(0,r.kt)("inlineCode",{parentName:"p"},"_auth: auth::JWT")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql_handler")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_seaography/src/controllers/graphql.rs"',title:'"loco_seaography/src/controllers/graphql.rs"'},"async fn graphql_handler(\n+   _auth: auth::JWT,\n    State(ctx): State<AppContext>,\n    req: Request<Body>,\n) -> Result<Response> {\n    const DEPTH: usize = 10;\n    const COMPLEXITY: usize = 100;\n    // Construct the the GraphQL query root\n    let schema = query_root::schema(ctx.db.clone(), DEPTH, COMPLEXITY).unwrap();\n    // GraphQL handler\n    let mut graphql_handler = async_graphql_axum::GraphQL::new(schema);\n    // Execute GraphQL request and fetch the results\n    let res = graphql_handler.call(req).await.unwrap();\n\n    Ok(res)\n}\n")),(0,r.kt)("p",null,"Then, run the Loco application and visit the GraphQL playground again. You should see unauthorize error."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20unauthorize.png",alt:null})),(0,r.kt)("h2",{id:"adding-authentication-header-to-graphql-playground"},"Adding Authentication header to GraphQL Playground"),(0,r.kt)("p",null,"First, we generate a valid authorization token by logging in the user account with the corresponding email and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/auth/login\' \\\n--data-raw \'{\n    "email": "cwchan.billy@gmail.com",\n    "password": "password"\n}\'\n\n{\n    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIwN2NjMDk5Ni03YWYxLTQ5YmYtYmY2NC01OTg4ZjFhODM2OTkiLCJleHAiOjE3MTk4MjIzMzN9.CgKp_aE-DyAuBJIvFGJ6l68ooAlEiJGhjWeaetDtHrupaYDm0ldVxf24vj3fPgkCqZ_njv2129n2pSCzHOjaow",\n    "pid": "07cc0996-7af1-49bf-bf64-5988f1a83699",\n    "name": "Billy",\n    "is_verified": true\n}\n')),(0,r.kt)("p",null,"Go to the setting page of GraphQL playground. And add a new header under ",(0,r.kt)("inlineCode",{parentName:"p"},"request. globalHeaders"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20authorization.png",alt:null})),(0,r.kt)("p",null,"Then, we can access GraphQL handler as usual."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20Seaography%20query.png",alt:null})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Adding GraphQL support to Loco application is easy with the help of Seaography. It is an ergonomic library that turns SeaORM entities into GraphQL nodes and provides a set of utilities and combined with a code generator makes GraphQL API building a breeze."),(0,r.kt)("h2",{id:"sql-server-support"},"SQL Server Support"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/"},"SQL Server for SeaORM")," is now available as a closed beta. If you are interested`, please signup ",(0,r.kt)("a",{parentName:"p",href:"https://forms.office.com/r/1MuRPJmYBR"},"here"),"."),(0,r.kt)("p",null,"Migrating from ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-x")," is straightforward with two simple steps. First, update the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," dependency to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-x")," and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlz-mssql")," feature. Note that you might need to patch SeaORM dependency for the upstream dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = ["runtime-async-std-rustls", "sqlz-mssql"] }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n\n# Patch SeaORM dependency for the upstream dependencies\n[patch.crates-io]\nsea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x" }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n')),(0,r.kt)("p",null,"Second, update the connection string to connect to the MSSQL database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# If the schema is `dbo`, simply write:\nmssql://username:password@host/database\n\n# Or, specify the schema name by providing an extra `currentSchema` query param.\nmssql://username:password@host/database?currentSchema=my_schema\n\n# You can trust peer certificate by providing an extra trustCertificate query param.\nmssql://username:password@host/database?trustCertificate=true\n")),(0,r.kt)("p",null,"SeaORM X has full Loco support and integrate seamlessly with many web frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Actix"),(0,r.kt)("li",{parentName:"ul"},"Axum"),(0,r.kt)("li",{parentName:"ul"},"Async GraphQL"),(0,r.kt)("li",{parentName:"ul"},"jsonrpsee"),(0,r.kt)("li",{parentName:"ul"},"Loco"),(0,r.kt)("li",{parentName:"ul"},"Poem"),(0,r.kt)("li",{parentName:"ul"},"Salvo"),(0,r.kt)("li",{parentName:"ul"},"Tonic")),(0,r.kt)("p",null,"Happy Coding!"))}h.isMDXComponent=!0}}]);