"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,u=m["".concat(l,".").concat(k)]||m[k]||p[k]||s;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={},i="SeaStreamer Architecture",o={unversionedId:"getting-started/architecture",id:"getting-started/architecture",title:"SeaStreamer Architecture",description:"The architecture of sea-streamer is constructed by a number of sub-crates:",source:"@site/docs/02-getting-started/02-architecture.md",sourceDirName:"02-getting-started",slug:"/getting-started/architecture",permalink:"/SeaStreamer/docs/next/getting-started/architecture",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/02-getting-started/02-architecture.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690403431,formattedLastUpdatedAt:"Jul 26, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuring Features",permalink:"/SeaStreamer/docs/next/getting-started/configuration"},next:{title:"Example Processors",permalink:"/SeaStreamer/docs/next/getting-started/examples"}},l={},c=[{value:"<code>sea-streamer-types</code>: Traits &amp; Types",id:"sea-streamer-types-traits--types",level:3},{value:"<code>sea-streamer-socket</code>: Backend-agnostic Socket API",id:"sea-streamer-socket-backend-agnostic-socket-api",level:3},{value:"<code>sea-streamer-kafka</code>: Kafka / Redpanda Backend",id:"sea-streamer-kafka-kafka--redpanda-backend",level:3},{value:"<code>sea-streamer-redis</code>: Redis Backend",id:"sea-streamer-redis-redis-backend",level:3},{value:"<code>sea-streamer-stdio</code>: Standard I/O Backend",id:"sea-streamer-stdio-standard-io-backend",level:3},{value:"<code>sea-streamer-runtime</code>: Async runtime abstraction",id:"sea-streamer-runtime-async-runtime-abstraction",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seastreamer-architecture"},"SeaStreamer Architecture"),(0,n.kt)("p",null,"The architecture of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer"))," is constructed by a number of sub-crates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-types"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-types"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-socket"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-socket")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-kafka"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-redis"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-stdio"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-runtime"},(0,n.kt)("inlineCode",{parentName:"a"},"sea-streamer-runtime")))),(0,n.kt)("h3",{id:"sea-streamer-types-traits--types"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-types"),": Traits & Types"),(0,n.kt)("p",null,"This crate defines all the traits and types for the SeaStreamer API, but does not provide any implementation."),(0,n.kt)("h3",{id:"sea-streamer-socket-backend-agnostic-socket-api"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-socket"),": Backend-agnostic Socket API"),(0,n.kt)("p",null,"Akin to how SeaORM allows you to build applications for different databases, SeaStreamer allows you to build\nstream processors for different streaming servers."),(0,n.kt)("p",null,"While the ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-types")," crate provides a nice trait-based abstraction, this crates provides a concrete-type API,\nso that your program can stream from/to any SeaStreamer backend selected by the user ",(0,n.kt)("em",{parentName:"p"},"on runtime"),"."),(0,n.kt)("p",null,"This allows you to do neat things, like generating data locally and then stream them to Redis / Kafka. Or in the other\nway, sink data from server to work on them locally. All ",(0,n.kt)("em",{parentName:"p"},"without recompiling")," the stream processor."),(0,n.kt)("h3",{id:"sea-streamer-kafka-kafka--redpanda-backend"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-kafka"),": Kafka / Redpanda Backend"),(0,n.kt)("p",null,"This is the Kafka / Redpanda backend implementation for SeaStreamer.\nThis crate provides a comprehensive type system that makes working with Kafka easier and safer."),(0,n.kt)("p",null,"All API (many are sync) are properly wrapped as async. Methods are also marked ",(0,n.kt)("inlineCode",{parentName:"p"},"&mut")," to eliminate possible race conditions."),(0,n.kt)("p",null,"This crate depends on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/rdkafka"},(0,n.kt)("inlineCode",{parentName:"a"},"rdkafka")),",\nwhich in turn depends on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/librdkafka-sys"},"librdkafka-sys"),", which itself is a wrapper of\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/librdkafka/html/index.html"},"librdkafka"),"."),(0,n.kt)("h3",{id:"sea-streamer-redis-redis-backend"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-redis"),": Redis Backend"),(0,n.kt)("p",null,"This is the Redis backend implementation for SeaStreamer. This crate provides a high-level async API on top of Redis that makes working with Redis Streams fool-proof:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implements the familiar SeaStreamer abstract interface"),(0,n.kt)("li",{parentName:"ul"},"A comprehensive type system that guides/restricts you with the API"),(0,n.kt)("li",{parentName:"ul"},"High-level API, so you don't call XADD, XREAD or XACK anymore"),(0,n.kt)("li",{parentName:"ul"},"Mutex-free implementation: concurrency achieved by message passing")),(0,n.kt)("p",null,"This crate is built on top of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/redis"},(0,n.kt)("inlineCode",{parentName:"a"},"redis")),"."),(0,n.kt)("h3",{id:"sea-streamer-stdio-standard-io-backend"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-stdio"),": Standard I/O Backend"),(0,n.kt)("p",null,"This is the ",(0,n.kt)("inlineCode",{parentName:"p"},"stdio")," backend implementation for SeaStreamer. It is designed to be connected together with unix pipes,\nenabling great flexibility when developing stream processors or processing data locally."),(0,n.kt)("p",null,"You can connect processors together with pipes: ",(0,n.kt)("inlineCode",{parentName:"p"},"processor_a | processor_b"),"."),(0,n.kt)("h3",{id:"sea-streamer-runtime-async-runtime-abstraction"},(0,n.kt)("inlineCode",{parentName:"h3"},"sea-streamer-runtime"),": Async runtime abstraction"),(0,n.kt)("p",null,"This crate provides a small set of functions aligning the type signatures between ",(0,n.kt)("inlineCode",{parentName:"p"},"async-std")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"tokio"),",\nso that you can build applications generic to both runtimes."))}p.isMDXComponent=!0}}]);