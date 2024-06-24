"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3285],{8859:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(1308),n=(r(6687),r(8859));const o={},i="The Roadmap",s={unversionedId:"next/roadmap",id:"version-0.1.x/next/roadmap",title:"The Roadmap",description:"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our GitHub repo! Your support is vital to the continued development of SeaStreamer.",source:"@site/versioned_docs/version-0.1.x/05-next/01-roadmap.md",sourceDirName:"05-next",slug:"/next/roadmap",permalink:"/preview/pr-125/SeaStreamer/docs/0.1.x/next/roadmap",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/05-next/01-roadmap.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719218483,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intra Process",permalink:"/preview/pr-125/SeaStreamer/docs/0.1.x/processors/intra-process"},next:{title:"The Vision",permalink:"/preview/pr-125/SeaStreamer/docs/0.1.x/next/vision"}},l={},p=[{value:"<code>sea-streamer-file</code>: File Backend",id:"sea-streamer-file-file-backend",level:2},{value:"<code>sea-streamer-redis</code>: Redis Backend",id:"sea-streamer-redis-redis-backend",level:2},{value:"Your proposal",id:"your-proposal",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-roadmap"},"The Roadmap"),(0,n.kt)("p",null,"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo"),"! Your support is vital to the continued development of SeaStreamer."),(0,n.kt)("p",null,"Here are a few major components we plan to develop up next:"),(0,n.kt)("h2",{id:"sea-streamer-file-file-backend"},(0,n.kt)("inlineCode",{parentName:"h2"},"sea-streamer-file"),": File Backend"),(0,n.kt)("p",null,"This is very similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-stdio"),", but the difference is ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-stdio")," works in real-time, while ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-file")," works in real-time and replay. That means, ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-file")," has the ability to seek through a ",(0,n.kt)("inlineCode",{parentName:"p"},".ss")," (sea-stream) file and seek/rewind to a particular timestamp/offset."),(0,n.kt)("p",null,"In addition, ",(0,n.kt)("inlineCode",{parentName:"p"},"stdio")," can only work with UTF-8 text data, while ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," is able to work with binary data."),(0,n.kt)("p",null,"We might be able to commit consumer states into a local SQLite database, enabling transactional behavior."),(0,n.kt)("h2",{id:"sea-streamer-redis-redis-backend"},(0,n.kt)("inlineCode",{parentName:"h2"},"sea-streamer-redis"),": Redis Backend"),(0,n.kt)("p",null,"Redis Streams is a great alternative to Kafka. It would be nice if SeaStreamer can support Redis while delivering the same API, so that your stream processor can be multi-modal!"),(0,n.kt)("p",null,"We are aware of Redis having considerably different semantics from Kafka, but we will try to align their behavioural differences, most likely by implementing additional mechanism client-side."),(0,n.kt)("h2",{id:"your-proposal"},"Your proposal"),(0,n.kt)("p",null,"We welcome you to join our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"Discussions")," if you have thoughts and experience!"))}c.isMDXComponent=!0}}]);