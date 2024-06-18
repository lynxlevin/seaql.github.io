"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[42086],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(31308),o=(n(76687),n(48859));const r={},i="Connection Pool",l={unversionedId:"install-and-config/connection",id:"version-0.7.x/install-and-config/connection",title:"Connection Pool",description:"To obtain a database connection, use the Database interface:",source:"@site/versioned_docs/version-0.7.x/02-install-and-config/03-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/SeaORM/docs/0.7.x/install-and-config/connection",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/02-install-and-config/03-connection.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1718711178,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema Management",permalink:"/SeaORM/docs/0.7.x/install-and-config/schema"},next:{title:"Debug Log",permalink:"/SeaORM/docs/0.7.x/install-and-config/debug-log"}},s={},c=[{value:"Connect Options",id:"connect-options",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection-pool"},"Connection Pool"),(0,o.kt)("p",null,"To obtain a database connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/struct.Database.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql:"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres:")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite:"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,o.kt)("p",null,"Under the hood, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sqlx::Pool"))," is created and owned by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/enum.DatabaseConnection.html"},(0,o.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,o.kt)("p",null,"Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,o.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,o.kt)("h2",{id:"connect-options"},"Connect Options"),(0,o.kt)("p",null,"To configure the connection, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/struct.ConnectOptions.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true);\n\nlet db = Database::connect(opt).await?;\n')),(0,o.kt)("p",null,"To configure the underlying SQLite database use SQLite's ",(0,o.kt)("a",{parentName:"p",href:"https://www.sqlite.org/c3ref/open.html"},"URI Filenames"),". As an example, to open a database for read and write, creating the database if it is missing, we would specify ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite://data.db?mode=rwc"),"."))}d.isMDXComponent=!0}}]);