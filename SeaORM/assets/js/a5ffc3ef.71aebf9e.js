"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Database & Async Runtime",l={unversionedId:"install-and-config/database-and-async-runtime",id:"install-and-config/database-and-async-runtime",title:"Database & Async Runtime",description:"First of all, please star our GitHub repo! Your support is vital to the continued maintenance of SeaORM.",source:"@site/docs/02-install-and-config/01-database-and-async-runtime.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/database-and-async-runtime",permalink:"/SeaORM/docs/next/install-and-config/database-and-async-runtime",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/02-install-and-config/01-database-and-async-runtime.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1680601465,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial & Examples",permalink:"/SeaORM/docs/next/introduction/tutorial"},next:{title:"Connection Pool",permalink:"/SeaORM/docs/next/install-and-config/connection"}},s={},p=[{value:"DATABASE_DRIVER",id:"database_driver",level:2},{value:"ASYNC_RUNTIME",id:"async_runtime",level:2},{value:"Extra features",id:"extra-features",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database--async-runtime"},"Database & Async Runtime"),(0,r.kt)("p",null,"First of all, please star our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"GitHub repo"),"! Your support is vital to the continued maintenance of SeaORM."),(0,r.kt)("p",null,"Then, add ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { version = "^0", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }\n')),(0,r.kt)("p",null,"You must choose a ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_DRIVER")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"ASYNC_RUNTIME"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"macros")," is needed if you use SeaORM's generated entities (most likely)."),(0,r.kt)("h2",{id:"database_driver"},"DATABASE_DRIVER"),(0,r.kt)("p",null,"You can choose one or more from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-mysql")," - SQLx MySQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-postgres")," - SQLx PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-sqlite")," - SQLx SQLite")),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/crate/sqlx/latest/features"},"SQLx docs"),"."),(0,r.kt)("h2",{id:"async_runtime"},"ASYNC_RUNTIME"),(0,r.kt)("p",null,"You have to choose one from:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime-actix-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-async-std-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-tokio-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-actix-rustls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-async-std-rustls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-tokio-rustls")),(0,r.kt)("p",null,"Basically, they are in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-ASYNC_RUNTIME-TLS_LIB"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASYNC_RUNTIME")," can be ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/actix"},(0,r.kt)("inlineCode",{parentName:"a"},"actix")),", ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/async-std"},(0,r.kt)("inlineCode",{parentName:"a"},"async-std")),", or ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/tokio"},(0,r.kt)("inlineCode",{parentName:"a"},"tokio"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TLS_LIB")," can either be ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/native-tls"},(0,r.kt)("inlineCode",{parentName:"a"},"native-tls"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/rustls"},(0,r.kt)("inlineCode",{parentName:"a"},"rustls")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose the ASYNC_RUNTIME corresponding to your Rust web framework:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ASYNC_RUNTIME"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Web Framework"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"actix")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://actix.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"Actix")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"async-std")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tide"},(0,r.kt)("inlineCode",{parentName:"a"},"Tide")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tokio")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/axum"},(0,r.kt)("inlineCode",{parentName:"a"},"Axum")),", ",(0,r.kt)("a",{parentName:"td",href:"https://rocket.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"Rocket")),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/poem"},(0,r.kt)("inlineCode",{parentName:"a"},"Poem")))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"native-tls")," uses the platform's native security facilities, while ",(0,r.kt)("inlineCode",{parentName:"li"},"rustls")," is a pure Rust implementation.")),(0,r.kt)("h2",{id:"extra-features"},"Extra features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug-print")," - print every SQL statement to logger"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mock")," - mock interface for unit testing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"macros")," - procedural macros for your convenient"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-chrono")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/chrono"},(0,r.kt)("inlineCode",{parentName:"a"},"chrono"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-time")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/time"},(0,r.kt)("inlineCode",{parentName:"a"},"time"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-json")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/serde-json"},(0,r.kt)("inlineCode",{parentName:"a"},"serde-json"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-rust_decimal")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/rust_decimal"},(0,r.kt)("inlineCode",{parentName:"a"},"rust_decimal"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-bigdecimal")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/bigdecimal"},(0,r.kt)("inlineCode",{parentName:"a"},"bigdecimal"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with-uuid")," - support ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/uuid"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid"))," types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postgres-array")," - support array types in Postgres"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sea-orm-internal")," - opt-in unstable internal APIs (for accessing re-export SQLx types)")))}c.isMDXComponent=!0}}]);