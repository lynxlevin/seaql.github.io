"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Connection Pool",l={unversionedId:"install-and-config/connection",id:"version-0.8.x/install-and-config/connection",title:"Connection Pool",description:"To obtain a database connection, use the Database interface:",source:"@site/versioned_docs/version-0.8.x/02-install-and-config/03-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/preview/pr-102/SeaORM/docs/0.8.x/install-and-config/connection",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/02-install-and-config/03-connection.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1690428025,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema Management",permalink:"/preview/pr-102/SeaORM/docs/0.8.x/install-and-config/schema"},next:{title:"Debug Log",permalink:"/preview/pr-102/SeaORM/docs/0.8.x/install-and-config/debug-log"}},c={},s=[{value:"Connect Options",id:"connect-options",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connection-pool"},"Connection Pool"),(0,a.kt)("p",null,"To obtain a database connection, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/struct.Database.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql:"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres:")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite:"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,a.kt)("p",null,"Under the hood, a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sqlx::Pool"))," is created and owned by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/enum.DatabaseConnection.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,a.kt)("p",null,"Each time you call ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,a.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,a.kt)("h2",{id:"connect-options"},"Connect Options"),(0,a.kt)("p",null,"To configure the connection, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/struct.ConnectOptions.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true);\n\nlet db = Database::connect(opt).await?;\n')))}u.isMDXComponent=!0}}]);