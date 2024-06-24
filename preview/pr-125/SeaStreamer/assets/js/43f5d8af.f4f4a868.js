"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2362],{8859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(1308),o=(r(6687),r(8859));const i={},a="The Vision",s={unversionedId:"whats-next/vision",id:"version-0.3.x/whats-next/vision",title:"The Vision",description:"We want to make Rust the best data engineering platform, with tools that span from development to production.",source:"@site/versioned_docs/version-0.3.x/05-whats-next/02-vision.md",sourceDirName:"05-whats-next",slug:"/whats-next/vision",permalink:"/preview/pr-125/SeaStreamer/docs/whats-next/vision",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.3.x/05-whats-next/02-vision.md",tags:[],version:"0.3.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719218483,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Roadmap",permalink:"/preview/pr-125/SeaStreamer/docs/whats-next/roadmap"}},l={},c=[{value:"The <code>sed</code> for streams",id:"the-sed-for-streams",level:2},{value:"Inter Process Communication",id:"inter-process-communication",level:2},{value:"Inter Host Communication",id:"inter-host-communication",level:2},{value:"Your idea",id:"your-idea",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-vision"},"The Vision"),(0,o.kt)("p",null,"We want to make Rust the best data engineering platform, with tools that span from development to production."),(0,o.kt)("p",null,"Below is just part of my imagination, hopefully we will be able to realize them ",(0,o.kt)("em",{parentName:"p"},"some day"),"!"),(0,o.kt)("h2",{id:"the-sed-for-streams"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"sed")," for streams"),(0,o.kt)("p",null,"Since we've talked about shells a lot, it will be great if we have an equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," that allow us to filter, transform and combine structured messages with a scripting language."),(0,o.kt)("h2",{id:"inter-process-communication"},"Inter Process Communication"),(0,o.kt)("p",null,"Right now pipe is the only mechanism for connecting processors together, which is copy-heavy. For some high-throughput scenario, sharded memory could fair better."),(0,o.kt)("h2",{id:"inter-host-communication"},"Inter Host Communication"),(0,o.kt)("p",null,"Right now the only way to connect across host is to rely on a streaming server. In a containerized environment, it might make sense to allow processors to communicate privately via TCP streams."),(0,o.kt)("h2",{id:"your-idea"},"Your idea"),(0,o.kt)("p",null,"We welcome you to join our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"Discussions")," if you have ideas or insights!"))}u.isMDXComponent=!0}}]);