"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[8029],{9680:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(1308),r=(n(6687),n(9680));const l={slug:"2024-05-28-getting-started-with-loco-seaorm",title:"Getting Started with Loco & SeaORM",author:"Billy Chan",author_title:"SeaQL Team",author_url:"https://github.com/billy1624",author_image_url:"https://avatars.githubusercontent.com/u/30400950?v=4",tags:["news"]},o=void 0,i={permalink:"/blog/2024-05-28-getting-started-with-loco-seaorm",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-05-28-getting-started-with-loco-seaorm.md",source:"@site/blog/2024-05-28-getting-started-with-loco-seaorm.md",title:"Getting Started with Loco & SeaORM",description:"In this tutorial, we would create a REST notepad backend starting from scratch and adding a new REST endpoint to handle file uploads in Loco.",date:"2024-05-28T00:00:00.000Z",formattedDate:"May 28, 2024",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:10.49,hasTruncateMarker:!1,authors:[{name:"Billy Chan",title:"SeaQL Team",url:"https://github.com/billy1624",imageURL:"https://avatars.githubusercontent.com/u/30400950?v=4"}],frontMatter:{slug:"2024-05-28-getting-started-with-loco-seaorm",title:"Getting Started with Loco & SeaORM",author:"Billy Chan",author_title:"SeaQL Team",author_url:"https://github.com/billy1624",author_image_url:"https://avatars.githubusercontent.com/u/30400950?v=4",tags:["news"]},nextItem:{title:"The rainbow bridge between sync and async Rust",permalink:"/blog/2024-05-20-async-rainbow-bridge"}},s={authorsImageUrls:[void 0]},p=[{value:"What is Loco?",id:"what-is-loco",level:2},{value:"REST API Starter Template",id:"rest-api-starter-template",level:2},{value:"User Management",id:"user-management",level:2},{value:"Registration",id:"registration",level:3},{value:"Login",id:"login",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Handling REST Requests",id:"handling-rest-requests",level:2},{value:"Create Notes",id:"create-notes",level:3},{value:"List Notes",id:"list-notes",level:3},{value:"Get Notes",id:"get-notes",level:3},{value:"Handling File Uploads",id:"handling-file-uploads",level:2},{value:"File Table Migration",id:"file-table-migration",level:3},{value:"File Model Definition",id:"file-model-definition",level:3},{value:"File Controller",id:"file-controller",level:3},{value:"Upload File",id:"upload-file",level:4},{value:"List File",id:"list-file",level:4},{value:"View File",id:"view-file",level:4},{value:"File Controller Routes",id:"file-controller-routes",level:4},{value:"Extra Rust Dependencies",id:"extra-rust-dependencies",level:4},{value:"SQL Server Support",id:"sql-server-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we would create a REST notepad backend starting from scratch and adding a new REST endpoint to handle file uploads in Loco."),(0,r.kt)("p",null,"The full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/loco_starter"},"here"),". The documentation of the REST API is available ",(0,r.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/34752358/2sA3QmEF5q"},"here"),"."),(0,r.kt)("h2",{id:"what-is-loco"},"What is Loco?"),(0,r.kt)("p",null,"Loco is a Rails inspired web framework for Rust. It includes almost every Rails feature with best-effort Rust ergonomics. It integrates seamlessly with SeaORM, offering a first-class development experience!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Controllers and routing via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tokio-rs/axum"},"axum")),(0,r.kt)("li",{parentName:"ul"},"Models, migration, and ActiveRecord via ",(0,r.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/SeaORM/"},"SeaORM")),(0,r.kt)("li",{parentName:"ul"},"Views via ",(0,r.kt)("a",{parentName:"li",href:"https://serde.rs/json.html"},"serde")),(0,r.kt)("li",{parentName:"ul"},"Seamless, Background jobs via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/film42/sidekiq-rs"},"sidekiq-rs"),", multi modal: in process, out of process, async via Tokio"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://loco.rs/blog/hello-world/"},"...and more"))),(0,r.kt)("h2",{id:"rest-api-starter-template"},"REST API Starter Template"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"loco-cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install loco-cli\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loco-cli")," provides three starter templates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SaaS Starter"),(0,r.kt)("li",{parentName:"ul"},"Rest API Starter"),(0,r.kt)("li",{parentName:"ul"},"Lightweight Service Starter")),(0,r.kt)("p",null,'For this tutorial, we want the "Rest API Starter" template:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ loco new\n\n\u2714  You are inside a git repository. Do you wish to continue? \xb7 Yes\n\u2714  App name? \xb7 loco_starter\n\u2714  What would you like to build? \xb7 Rest API (with DB and user auth)\n\n\ud83d\ude82 Loco app generated successfully in:\n/sea-orm/examples/loco_starter\n")),(0,r.kt)("p",null,"Next, we need to setup our PostgreSQL database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -d -p 5432:5432 -e POSTGRES_USER=loco -e POSTGRES_DB=loco_starter_development -e POSTGRES_PASSWORD="loco" postgres:15.3-alpine\n')),(0,r.kt)("p",null,"If you want to use MySQL or SQLite as the database. Please update the ",(0,r.kt)("inlineCode",{parentName:"p"},"database.uri")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"loco_starter/config/development.yaml"),". And enable the corresponding database backend feature flag of SeaORM in ",(0,r.kt)("inlineCode",{parentName:"p"},"loco_starter/Cargo.toml"),"."),(0,r.kt)("p",null,"Now, start our REST application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo loco start\n\n    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 42s\n     Running `target/debug/loco_starter-cli start`\n2024-05-20T06:56:42.724350Z  INFO app: loco_rs::config: loading environment from selected_path=\"config/development.yaml\" environment=development\n2024-05-20T06:56:42.740338Z  WARN app: loco_rs::boot: pretty backtraces are enabled (this is great for development but has a runtime cost for production. disable with `logger.pretty_backtrace` in your config yaml) environment=development\n2024-05-20T06:56:42.833747Z  INFO app: loco_rs::db: auto migrating environment=development\n2024-05-20T06:56:42.845983Z  INFO app: sea_orm_migration::migrator: Applying all pending migrations environment=development\n2024-05-20T06:56:42.850231Z  INFO app: sea_orm_migration::migrator: Applying migration 'm20220101_000001_users' environment=development\n2024-05-20T06:56:42.864095Z  INFO app: sea_orm_migration::migrator: Migration 'm20220101_000001_users' has been applied environment=development\n2024-05-20T06:56:42.865799Z  INFO app: sea_orm_migration::migrator: Applying migration 'm20231103_114510_notes' environment=development\n2024-05-20T06:56:42.873653Z  INFO app: sea_orm_migration::migrator: Migration 'm20231103_114510_notes' has been applied environment=development\n2024-05-20T06:56:42.875645Z  INFO app: loco_rs::boot: initializers loaded initializers=\"\" environment=development\n2024-05-20T06:56:42.906072Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_ping environment=development\n2024-05-20T06:56:42.906176Z  INFO app: loco_rs::controller::app_routes: [GET] /api/_health environment=development\n2024-05-20T06:56:42.906264Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes environment=development\n2024-05-20T06:56:42.906335Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes environment=development\n2024-05-20T06:56:42.906414Z  INFO app: loco_rs::controller::app_routes: [GET] /api/notes/:id environment=development\n2024-05-20T06:56:42.906501Z  INFO app: loco_rs::controller::app_routes: [DELETE] /api/notes/:id environment=development\n2024-05-20T06:56:42.906558Z  INFO app: loco_rs::controller::app_routes: [POST] /api/notes/:id environment=development\n2024-05-20T06:56:42.906609Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/register environment=development\n2024-05-20T06:56:42.906680Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/verify environment=development\n2024-05-20T06:56:42.906753Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/login environment=development\n2024-05-20T06:56:42.906838Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/forgot environment=development\n2024-05-20T06:56:42.906931Z  INFO app: loco_rs::controller::app_routes: [POST] /api/auth/reset environment=development\n2024-05-20T06:56:42.907012Z  INFO app: loco_rs::controller::app_routes: [GET] /api/user/current environment=development\n2024-05-20T06:56:42.907309Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding limit payload data=\"5mb\" environment=development\n2024-05-20T06:56:42.907440Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding log trace id environment=development\n2024-05-20T06:56:42.907714Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding cors environment=development\n2024-05-20T06:56:42.907788Z  INFO app: loco_rs::controller::app_routes: [Middleware] Adding etag layer environment=development\n\n                      \u2584     \u2580\n                                 \u2580  \u2584\n                  \u2584       \u2580     \u2584  \u2584 \u2584\u2580\n                                    \u2584 \u2580\u2584\u2584\n                        \u2584     \u2580    \u2580  \u2580\u2584\u2580\u2588\u2584\n                                          \u2580\u2588\u2584\n\u2584\u2584\u2584\u2584\u2584\u2584\u2584  \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584   \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2580\u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2580\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2580\u2580\u2580 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2584\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2584\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2584\u2584\u2584 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588  \u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2580\n   \u2580\u2580\u2580\u2588\u2588\u2584 \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2588\u2588\u2580\n       \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n                https://loco.rs\n\nenvironment: development\n   database: automigrate\n     logger: debug\ncompilation: debug\n      modes: server\n\nlistening on [::]:3000\n")),(0,r.kt)("p",null,"From the log messages printed above, we saw:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Database migrations have been applied"),(0,r.kt)("li",{parentName:"ul"},"All available REST API")),(0,r.kt)("p",null,"To check if the application listen for requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl --location 'http://localhost:3000/api/_ping'\n\n{\"ok\":true}\n")),(0,r.kt)("h2",{id:"user-management"},"User Management"),(0,r.kt)("p",null,"The starter template comes with a basic user management module."),(0,r.kt)("h3",{id:"registration"},"Registration"),(0,r.kt)("p",null,"It is a common practice to send a verification email to the provided email. However, that would requires a SMTP server and this is not the focus of this blog post. So, I will skip the email verification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_starter/src/controllers/auth.rs"',title:'"loco_starter/src/controllers/auth.rs"'},'#[debug_handler]\nasync fn register(\n    State(ctx): State<AppContext>,\n    Json(params): Json<RegisterParams>,\n) -> Result<Response> {\n    let res = users::Model::create_with_password(&ctx.db, &params).await;\n\n    let user = match res {\n        Ok(user) => user,\n        Err(err) => {\n            tracing::info!(\n                message = err.to_string(),\n                user_email = &params.email,\n                "could not register user",\n            );\n            return format::json(());\n        }\n    };\n\n+   // Skip email verification, all new registrations are considered verified\n+   let _user = user\n+       .into_active_model()\n+       .verified(&ctx.db)\n+       .await?;\n\n+   // Skip sending verification email as we don\'t have a mail server\n+   /*\n    let user = user\n        .into_active_model()\n        .set_email_verification_sent(&ctx.db)\n        .await?;\n\n    AuthMailer::send_welcome(&ctx, &user).await?;\n+   */\n\n    format::json(())\n}\n')),(0,r.kt)("p",null,"Compile and run the application, then register a new user account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/auth/register\' \\\n--data-raw \'{\n    "name": "Billy",\n    "email": "cwchan.billy@gmail.com",\n    "password": "password"\n}\'\n\nnull\n')),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,"You should see there is a new row of ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," in the database."),(0,r.kt)("p",null,"Next, we login the user account with the corresponding email and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/auth/login\' \\\n--data-raw \'{\n    "email": "cwchan.billy@gmail.com",\n    "password": "password"\n}\'\n\n{\n  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIxMWQwMWFmMy02ZmUyLTQ0ZjMtODlmMC1jMDJjZWMzOTc0MWQiLCJleHAiOjE3MTY3OTU3NjR9.i1OElxy33rkorkxk6QpTG1Kg4_Q8O0jqBJ2i82nltkcQYZsLmSSnrxtdtlfdvV0ccJ3hQA3JoY9L13cjz2uSCw",\n  "pid": "11d01af3-6fe2-44f3-89f0-c02cec39741d",\n  "name": "Billy",\n  "is_verified": true\n}\n')),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The JWT token above will be used in user authentication. You must set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header to access any REST endpoint that requires user login."),(0,r.kt)("p",null,"For example, fetching the user info of the current user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/user/current\' \\\n--header \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIxMWQwMWFmMy02ZmUyLTQ0ZjMtODlmMC1jMDJjZWMzOTc0MWQiLCJleHAiOjE3MTY3OTU3NjR9.i1OElxy33rkorkxk6QpTG1Kg4_Q8O0jqBJ2i82nltkcQYZsLmSSnrxtdtlfdvV0ccJ3hQA3JoY9L13cjz2uSCw\'\n\n{\n    "pid":"11d01af3-6fe2-44f3-89f0-c02cec39741d",\n    "name":"Billy",\n    "email":"cwchan.billy@gmail.com"\n}\n')),(0,r.kt)("h2",{id:"handling-rest-requests"},"Handling REST Requests"),(0,r.kt)("p",null,"The starter application comes with a notes controller for the ",(0,r.kt)("inlineCode",{parentName:"p"},"notes")," table."),(0,r.kt)("h3",{id:"create-notes"},"Create Notes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/notes\' \\\n--header \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIxMWQwMWFmMy02ZmUyLTQ0ZjMtODlmMC1jMDJjZWMzOTc0MWQiLCJleHAiOjE3MTY3OTU3NjR9.i1OElxy33rkorkxk6QpTG1Kg4_Q8O0jqBJ2i82nltkcQYZsLmSSnrxtdtlfdvV0ccJ3hQA3JoY9L13cjz2uSCw\' \\\n--data \'{\n    "title": "Getting Started with Loco & SeaORM",\n    "content": "In this tutorial, we would create an REST notepad backend starting from scratch and adding a new REST endpoint to handle file uploads."\n}\'\n\n{\n  "created_at": "2024-05-20T08:43:45.408449",\n  "updated_at": "2024-05-20T08:43:45.408449",\n  "id": 1,\n  "title": "Getting Started with Loco & SeaORM",\n  "content": "In this tutorial, we would create an REST notepad backend starting from scratch and adding a new REST endpoint to handle file uploads."\n}\n')),(0,r.kt)("h3",{id:"list-notes"},"List Notes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/notes\' \\\n--header \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIxMWQwMWFmMy02ZmUyLTQ0ZjMtODlmMC1jMDJjZWMzOTc0MWQiLCJleHAiOjE3MTY3OTU3NjR9.i1OElxy33rkorkxk6QpTG1Kg4_Q8O0jqBJ2i82nltkcQYZsLmSSnrxtdtlfdvV0ccJ3hQA3JoY9L13cjz2uSCw\'\n\n[\n  {\n    "created_at": "2024-05-20T08:43:45.408449",\n    "updated_at": "2024-05-20T08:43:45.408449",\n    "id": 1,\n    "title": "Getting Started with Loco & SeaORM",\n    "content": "In this tutorial, we would create an REST notepad backend starting from scratch and adding a new REST endpoint to handle file uploads."\n  },\n  {\n    "created_at": "2024-05-20T08:45:38.973130",\n    "updated_at": "2024-05-20T08:45:38.973130",\n    "id": 2,\n    "title": "Introducing SeaORM X",\n    "content": "SeaORM X is built on top of SeaORM with support for SQL Server"\n  }\n]\n')),(0,r.kt)("h3",{id:"get-notes"},"Get Notes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl --location \'http://localhost:3000/api/notes/2\' \\\n--header \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiIxMWQwMWFmMy02ZmUyLTQ0ZjMtODlmMC1jMDJjZWMzOTc0MWQiLCJleHAiOjE3MTY3OTU3NjR9.i1OElxy33rkorkxk6QpTG1Kg4_Q8O0jqBJ2i82nltkcQYZsLmSSnrxtdtlfdvV0ccJ3hQA3JoY9L13cjz2uSCw\'\n\n{\n  "created_at": "2024-05-20T08:45:38.973130",\n  "updated_at": "2024-05-20T08:45:38.973130",\n  "id": 2,\n  "title": "Introducing SeaORM X",\n  "content": "SeaORM X is built on top of SeaORM with support for SQL Server"\n}\n')),(0,r.kt)("h2",{id:"handling-file-uploads"},"Handling File Uploads"),(0,r.kt)("p",null,"Next, we will add a file upload feature where user can upload files that is related to the notes."),(0,r.kt)("h3",{id:"file-table-migration"},"File Table Migration"),(0,r.kt)("p",null,"Create a migration file for the new ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," table. Each row of ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," reference a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"notes")," in the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/migration/src/m20240520_173001_files.rs"',title:'"loco_starter/migration/src/m20240520_173001_files.rs"'},'use sea_orm_migration::{prelude::*, schema::*};\n\nuse super::m20231103_114510_notes::Notes;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table(\n                table_auto(Files::Table)\n                    .col(pk_auto(Files::Id))\n                    .col(integer(Files::NotesId))\n                    .col(string(Files::FilePath))\n                    .foreign_key(\n                        ForeignKey::create()\n                            .name("FK_files_notes_id")\n                            .from(Files::Table, Files::NotesId)\n                            .to(Notes::Table, Notes::Id),\n                    )\n                    .to_owned(),\n            )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table(Table::drop().table(Files::Table).to_owned())\n            .await\n    }\n}\n\n#[derive(DeriveIden)]\npub enum Files {\n    Table,\n    Id,\n    NotesId,\n    FilePath,\n}\n')),(0,r.kt)("p",null,"Then, we need to enable the new migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_starter/migration/src/lib.rs"',title:'"loco_starter/migration/src/lib.rs"'},"#![allow(elided_lifetimes_in_paths)]\n#![allow(clippy::wildcard_imports)]\npub use sea_orm_migration::prelude::*;\n\nmod m20220101_000001_users;\nmod m20231103_114510_notes;\n+ mod m20240520_173001_files;\n\npub struct Migrator;\n\n#[async_trait::async_trait]\nimpl MigratorTrait for Migrator {\n    fn migrations() -> Vec<Box<dyn MigrationTrait>> {\n        vec![\n            Box::new(m20220101_000001_users::Migration),\n            Box::new(m20231103_114510_notes::Migration),\n+           Box::new(m20240520_173001_files::Migration),\n        ]\n    }\n}\n\n")),(0,r.kt)("p",null,"Compile and start the application, it should run our new migration on startup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo loco start\n\n...\n2024-05-20T09:39:59.607525Z  INFO app: loco_rs::db: auto migrating environment=development\n2024-05-20T09:39:59.611997Z  INFO app: sea_orm_migration::migrator: Applying all pending migrations environment=development\n2024-05-20T09:39:59.621699Z  INFO app: sea_orm_migration::migrator: Applying migration 'm20240520_173001_files' environment=development\n2024-05-20T09:39:59.643886Z  INFO app: sea_orm_migration::migrator: Migration 'm20240520_173001_files' has been applied environment=development\n...\n")),(0,r.kt)("h3",{id:"file-model-definition"},"File Model Definition"),(0,r.kt)("p",null,"Define ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," entity model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/models/_entities/files.rs"',title:'"loco_starter/src/models/_entities/files.rs"'},'use sea_orm::entity::prelude::*;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]\n#[sea_orm(table_name = "files")]\npub struct Model {\n    pub created_at: DateTime,\n    pub updated_at: DateTime,\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub notes_id: i32,\n    pub file_path: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::notes::Entity",\n        from = "Column::NotesId",\n        to = "super::notes::Column::Id"\n    )]\n    Notes,\n}\n\nimpl Related<super::notes::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Notes.def()\n    }\n}\n')),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModelBehavior")," in the parent module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/models/files.rs"',title:'"loco_starter/src/models/files.rs"'},"use sea_orm::entity::prelude::*;\n\nuse super::_entities::files::ActiveModel;\n\nimpl ActiveModelBehavior for ActiveModel {\n    // extend activemodel below (keep comment for generators)\n}\n")),(0,r.kt)("h3",{id:"file-controller"},"File Controller"),(0,r.kt)("p",null,"Controller is where we handle the file uploading, listing and viewing."),(0,r.kt)("h4",{id:"upload-file"},"Upload File"),(0,r.kt)("p",null,"The following upload handler allows multiple files to be uploaded in a single POST request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/controllers/files.rs"',title:'"loco_starter/src/controllers/files.rs"'},'#[debug_handler]\npub async fn upload(\n    _auth: auth::JWT,\n    Path(notes_id): Path<i32>,\n    State(ctx): State<AppContext>,\n    mut multipart: Multipart,\n) -> Result<Response> {\n    // Collect all uploaded files\n    let mut files = Vec::new();\n\n    // Iterate all files in the POST body\n    while let Some(field) = multipart.next_field().await.map_err(|err| {\n        tracing::error!(error = ?err,"could not readd multipart");\n        Error::BadRequest("could not readd multipart".into())\n    })? {\n        // Get the file name\n        let file_name = match field.file_name() {\n            Some(file_name) => file_name.to_string(),\n            _ => return Err(Error::BadRequest("file name not found".into())),\n        };\n\n        // Get the file content as bytes\n        let content = field.bytes().await.map_err(|err| {\n            tracing::error!(error = ?err,"could not readd bytes");\n            Error::BadRequest("could not readd bytes".into())\n        })?;\n\n        // Create a folder to store the uploaded file\n        let now = chrono::offset::Local::now()\n            .format("%Y%m%d_%H%M%S")\n            .to_string();\n        let uuid = uuid::Uuid::new_v4().to_string();\n        let folder = format!("{now}_{uuid}");\n        let upload_folder = PathBuf::from(UPLOAD_DIR).join(&folder);\n        fs::create_dir_all(&upload_folder).await?;\n\n        // Write the file into the newly created folder\n        let path = upload_folder.join(file_name);\n        let mut f = fs::OpenOptions::new()\n            .create_new(true)\n            .write(true)\n            .open(&path)\n            .await?;\n        f.write_all(&content).await?;\n        f.flush().await?;\n\n        // Record the file upload in database\n        let file = files::ActiveModel {\n            notes_id: ActiveValue::Set(notes_id),\n            file_path: ActiveValue::Set(\n                path.strip_prefix(UPLOAD_DIR)\n                    .unwrap()\n                    .to_str()\n                    .unwrap()\n                    .to_string(),\n            ),\n            ..Default::default()\n        }\n        .insert(&ctx.db)\n        .await?;\n\n        files.push(file);\n    }\n\n    format::json(files)\n}\n')),(0,r.kt)("p",null,"Try uploading multiple files in a single POST request:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM%20upload%20file.png",alt:null})),(0,r.kt)("p",null,"All uploaded files are saved into the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploads")," directory:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM%20upload%20directory.png",alt:null})),(0,r.kt)("h4",{id:"list-file"},"List File"),(0,r.kt)("p",null,"List all ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," that are related to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"notes_id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/controllers/files.rs"',title:'"loco_starter/src/controllers/files.rs"'},"#[debug_handler]\npub async fn list(\n    _auth: auth::JWT,\n    Path(notes_id): Path<i32>,\n    State(ctx): State<AppContext>,\n) -> Result<Response> {\n    // Fetch all files uploaded for a specific notes\n    let files = files::Entity::find()\n        .filter(files::Column::NotesId.eq(notes_id))\n        .order_by_asc(files::Column::Id)\n        .all(&ctx.db)\n        .await?;\n\n    format::json(files)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM%20view%20file.png",alt:null})),(0,r.kt)("h4",{id:"view-file"},"View File"),(0,r.kt)("p",null,"View a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"files"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/controllers/files.rs"',title:'"loco_starter/src/controllers/files.rs"'},'#[debug_handler]\npub async fn view(\n    _auth: auth::JWT,\n    Path(files_id): Path<i32>,\n    State(ctx): State<AppContext>,\n) -> Result<Response> {\n    // Fetch the file info from database\n    let file = files::Entity::find_by_id(files_id)\n        .one(&ctx.db)\n        .await?\n        .expect("File not found");\n\n    // Stream the file\n    let file = fs::File::open(format!("{UPLOAD_DIR}/{}", file.file_path)).await?;\n    let stream = ReaderStream::new(file);\n    let body = Body::from_stream(stream);\n\n    Ok(format::render().response().body(body)?)\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/blog/img/Loco%20x%20SeaORM%20list%20file.png",alt:null})),(0,r.kt)("h4",{id:"file-controller-routes"},"File Controller Routes"),(0,r.kt)("p",null,"Add our newly defined files handler to the application routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="loco_starter/src/controllers/files.rs"',title:'"loco_starter/src/controllers/files.rs"'},'pub fn routes() -> Routes {\n    // Bind the routes\n    Routes::new()\n        .prefix("files")\n        .add("/upload/:notes_id", post(upload))\n        .add("/list/:notes_id", get(list))\n        .add("/view/:files_id", get(view))\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_starter/src/app.rs"',title:'"loco_starter/src/app.rs"'},'pub struct App;\n\n#[async_trait]\nimpl Hooks for App {\n    // ...\n\n    fn routes(_ctx: &AppContext) -> AppRoutes {\n        AppRoutes::with_default_routes()\n            .prefix("/api")\n            .add_route(controllers::notes::routes())\n            .add_route(controllers::auth::routes())\n            .add_route(controllers::user::routes())\n+           .add_route(controllers::files::routes())\n    }\n\n    // ...\n}\n')),(0,r.kt)("h4",{id:"extra-rust-dependencies"},"Extra Rust Dependencies"),(0,r.kt)("p",null,"Remember to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"axum")," and add ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio-util")," dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="loco_starter/Cargo.toml"',title:'"loco_starter/Cargo.toml"'},'- axum = "0.7.1"\n+ axum = { version = "0.7.1", features = ["multipart"] }\n\n+ tokio-util = "0.7.11"\n')),(0,r.kt)("h2",{id:"sql-server-support"},"SQL Server Support"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/"},"SQL Server for SeaORM")," is now available as a closed beta. If you are interested, please signup ",(0,r.kt)("a",{parentName:"p",href:"https://forms.office.com/r/1MuRPJmYBR"},"here"),"."),(0,r.kt)("p",null,"Migrating from ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-x")," is straightforward with two simple steps. First, update the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," dependency to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-x")," and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlz-mssql")," feature. Note that you might need to patch SeaORM dependency for the upstream dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = ["runtime-async-std-rustls", "sqlz-mssql"] }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n\n# Patch SeaORM dependency for the upstream dependencies\n[patch.crates-io]\nsea-orm = { path = "<SEA_ORM_X_ROOT>/sea-orm-x" }\nsea-orm-migration = { path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration" }\n')),(0,r.kt)("p",null,"Second, update the connection string to connect to the MSSQL database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# If the schema is `dbo`, simply write:\nmssql://username:password@host/database\n\n# Or, specify the schema name by providing an extra `currentSchema` query param.\nmssql://username:password@host/database?currentSchema=my_schema\n\n# You can trust peer certificate by providing an extra trustCertificate query param.\nmssql://username:password@host/database?trustCertificate=true\n")),(0,r.kt)("p",null,"SeaORM X has full Loco support and integrate seamlessly with many web frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Actix"),(0,r.kt)("li",{parentName:"ul"},"Axum"),(0,r.kt)("li",{parentName:"ul"},"Async GraphQL"),(0,r.kt)("li",{parentName:"ul"},"jsonrpsee"),(0,r.kt)("li",{parentName:"ul"},"Loco"),(0,r.kt)("li",{parentName:"ul"},"Poem"),(0,r.kt)("li",{parentName:"ul"},"Salvo"),(0,r.kt)("li",{parentName:"ul"},"Tonic")),(0,r.kt)("p",null,"Happy Coding!"))}u.isMDXComponent=!0}}]);