"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8160],{8859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(1308),a=(r(6687),r(8859));const i={},o="Configuring Features",s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuring Features",description:"Cargo",source:"@site/docs/02-getting-started/01-configuration.md",sourceDirName:"02-getting-started",slug:"/getting-started/configuration",permalink:"/SeaStreamer/docs/next/getting-started/configuration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/02-getting-started/01-configuration.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1710307576,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer Concepts",permalink:"/SeaStreamer/docs/next/introduction/sea-streamer"},next:{title:"SeaStreamer Architecture",permalink:"/SeaStreamer/docs/next/getting-started/architecture"}},l={},c=[{value:"Cargo",id:"cargo",level:2},{value:"BACKEND: <code>kafka</code>, <code>redis</code>, <code>file</code>, <code>stdio</code> &amp; <code>socket</code>",id:"backend-kafka-redis-file-stdio--socket",level:2},{value:"ASYNC_RUNTIME: <code>runtime-async-std</code> &amp; <code>runtime-tokio</code>",id:"async_runtime-runtime-async-std--runtime-tokio",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-features"},"Configuring Features"),(0,a.kt)("h2",{id:"cargo"},"Cargo"),(0,a.kt)("p",null,"First of all, please star our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo"),"! Your support is vital to the continued development of SeaStreamer."),(0,a.kt)("p",null,"Then, add ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-streamer = { version = "0.3", features = [ <BACKEND>, <ASYNC_RUNTIME> ] }\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer")," is a facade crate. If you don't enable any features, it will only export the types from ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer-types"),",\nwhich allows you to develop ",(0,a.kt)("em",{parentName:"p"},"pure crates")," using those traits and types, without pulling in any backend crates to the dependency tree."),(0,a.kt)("p",null,"All crates share the same major version. So ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer")," depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-streamer-socket"),"."),(0,a.kt)("h2",{id:"backend-kafka-redis-file-stdio--socket"},"BACKEND: ",(0,a.kt)("inlineCode",{parentName:"h2"},"kafka"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"redis"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"file"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"stdio")," & ",(0,a.kt)("inlineCode",{parentName:"h2"},"socket")),(0,a.kt)("p",null,"SeaStreamer currently supports four backends, Kafka, Redis, file and Stdio.\nEach has their own support crate, and they all implement the same set of abstract traits.\nIt's easy to distinguish the symbols between the crates, because they all start with a prefix."),(0,a.kt)("p",null,"However, those abstractions are static: you have to designate the concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"Streamer")," type compile-time.\nTo achieve ",(0,a.kt)("em",{parentName:"p"},"runtime-abstraction"),", you can enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," flag and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sea*")," types."),(0,a.kt)("p",null,"Here is a summary of the type names:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Trait"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Kafka"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Redis"),(0,a.kt)("th",{parentName:"tr",align:"center"},"File"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Stdio"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Socket"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Streamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RedisStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"FileStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioStreamer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaStreamer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Producer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RedisProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"FileProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioProducer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaProducer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Consumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RedisConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"FileConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioConsumer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaConsumer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Message"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RedisMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"FileMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaMessage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"KafkaConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RedisConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"FileConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdioConnectOptions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SeaConnectOptions")))),(0,a.kt)("h2",{id:"async_runtime-runtime-async-std--runtime-tokio"},"ASYNC_RUNTIME: ",(0,a.kt)("inlineCode",{parentName:"h2"},"runtime-async-std")," & ",(0,a.kt)("inlineCode",{parentName:"h2"},"runtime-tokio")),(0,a.kt)("p",null,"SeaStreamer currently supports two async runtimes, async-std & Tokio. Enable the one you need.\nThere are also some runtime-generic functions, exposed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," flag, to help you build applications supporting both runtimes."))}d.isMDXComponent=!0}}]);