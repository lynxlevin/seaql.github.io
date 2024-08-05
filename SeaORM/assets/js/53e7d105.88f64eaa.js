"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[95063],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(31308),o=(n(76687),n(48859));const i={},r="Database Connection",l={unversionedId:"install-and-config/connection",id:"version-1.0.x/install-and-config/connection",title:"Database Connection",description:"To obtain a database connection, use the Database interface:",source:"@site/versioned_docs/version-1.0.x/02-install-and-config/02-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/SeaORM/docs/install-and-config/connection",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-1.0.x/02-install-and-config/02-connection.md",tags:[],version:"1.0.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722851639,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/install-and-config/database-and-async-runtime"},next:{title:"Debug Log",permalink:"/SeaORM/docs/install-and-config/debug-log"}},s={},c=[{value:"Connection String",id:"connection-string",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"Specify a schema",id:"specify-a-schema",level:4},{value:"SQLite",id:"sqlite",level:3},{value:"In memory",id:"in-memory",level:4},{value:"Create file if not exists",id:"create-file-if-not-exists",level:4},{value:"Read only",id:"read-only",level:4},{value:"Connect Options",id:"connect-options",level:2},{value:"Checking Connection is Valid",id:"checking-connection-is-valid",level:2},{value:"Closing Connection",id:"closing-connection",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-connection"},"Database Connection"),(0,o.kt)("p",null,"To obtain a database connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Database.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql:"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres:")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite:"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you can't get ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," to work, try putting in an IP address and port number, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:3306")," or even ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.x.x"),".")),(0,o.kt)("p",null,"Under the hood, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sqlx::Pool"))," is created and owned by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html"},(0,o.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,o.kt)("p",null,"Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,o.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,o.kt)("h2",{id:"connection-string"},"Connection String"),(0,o.kt)("p",null,"Here are some tips for database specific options:"),(0,o.kt)("h3",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"Can't think of any"),(0,o.kt)("h3",{id:"postgres"},"Postgres"),(0,o.kt)("h4",{id:"specify-a-schema"},"Specify a schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postgres://username:password@host/database?currentSchema=my_schema\n")),(0,o.kt)("h3",{id:"sqlite"},"SQLite"),(0,o.kt)("h4",{id:"in-memory"},"In memory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sqlite::memory:\n")),(0,o.kt)("h4",{id:"create-file-if-not-exists"},"Create file if not exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sqlite://path/to/db.sqlite?mode=rwc\n")),(0,o.kt)("h4",{id:"read-only"},"Read only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sqlite://path/to/db.sqlite?mode=ro\n")),(0,o.kt)("h2",{id:"connect-options"},"Connect Options"),(0,o.kt)("p",null,"To configure the connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database");\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .acquire_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true)\n    .sqlx_logging_level(log::LevelFilter::Info)\n    .set_schema_search_path("my_schema"); // Setting default PostgreSQL schema\n\nlet db = Database::connect(opt).await?;\n')),(0,o.kt)("h2",{id:"checking-connection-is-valid"},"Checking Connection is Valid"),(0,o.kt)("p",null,"Checks if a connection to the database is still valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"|db: DatabaseConnection| {\n    assert!(db.ping().await.is_ok());\n    db.clone().close().await;\n    assert!(matches!(db.ping().await, Err(DbErr::ConnectionAcquire)));\n}\n")),(0,o.kt)("h2",{id:"closing-connection"},"Closing Connection"),(0,o.kt)("p",null,"The connection will be automatically closed on drop. To close the connection explicitly, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let db = Database::connect(url).await?;\n\n// Closing connection here\ndb.close().await?;\n")))}d.isMDXComponent=!0}}]);