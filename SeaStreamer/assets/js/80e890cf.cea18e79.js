"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5944],{8859:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(1308),a=(r(6687),r(8859));const o={},i="Streamer",c={unversionedId:"streamer/streamer",id:"version-0.1.x/streamer/streamer",title:"Streamer",description:"The Streamer trait defines the common interface of streaming clients.",source:"@site/versioned_docs/version-0.1.x/03-streamer/01-streamer.md",sourceDirName:"03-streamer",slug:"/streamer/streamer",permalink:"/SeaStreamer/docs/0.1.x/streamer/streamer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/03-streamer/01-streamer.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705892762,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer Architecture",permalink:"/SeaStreamer/docs/0.1.x/configuration/architecture"},next:{title:"Producer",permalink:"/SeaStreamer/docs/0.1.x/streamer/producer"}},s={},l=[{value:"<code>ConnectOptions</code>",id:"connectoptions",level:2},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>connect</code>",id:"connect",level:2},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>create_producer</code>",id:"create_producer",level:2},{value:"<code>create_generic_producer</code>",id:"create_generic_producer",level:2},{value:"<code>create_consumer</code>",id:"create_consumer",level:2}],m={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streamer"},"Streamer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Streamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Streamer"))," trait defines the common interface of streaming clients."),(0,a.kt)("h2",{id:"connectoptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"ConnectOptions")),(0,a.kt)("h3",{id:"timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,a.kt)("p",null,"Set the default network timeout for all connections."),(0,a.kt)("h2",{id:"connect"},(0,a.kt)("inlineCode",{parentName:"h2"},"connect")),(0,a.kt)("p",null,"Establish a connection to the streaming server. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Streamer")," implementation does not have to maintain an open connection to the server."),(0,a.kt)("h2",{id:"disconnect"},(0,a.kt)("inlineCode",{parentName:"h2"},"disconnect")),(0,a.kt)("p",null,"Disconnect from the streaming server. The intention is to flush remaining messages and exit gracefully. You have to ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," this operation until it completes. Once you called this method, all producers and consumers created will become unusable."),(0,a.kt)("h2",{id:"create_producer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_producer")),(0,a.kt)("p",null,"Create a producer that streams to the specified stream."),(0,a.kt)("h2",{id:"create_generic_producer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_generic_producer")),(0,a.kt)("p",null,"Create a producer that can stream to any stream."),(0,a.kt)("h2",{id:"create_consumer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_consumer")),(0,a.kt)("p",null,"Create a consumer subscribing to the specified streams."))}d.isMDXComponent=!0}}]);