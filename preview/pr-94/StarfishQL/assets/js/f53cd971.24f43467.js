"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,y=f["".concat(p,".").concat(h)]||f[h]||u[h]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Web API Layer",c={unversionedId:"architecture-of-graph-query-engine/web-api-layer",id:"architecture-of-graph-query-engine/web-api-layer",title:"Web API Layer",description:"The current implementation of the StarfishQL query engine handle requests with the rocket(crates.io) web framework.",source:"@site/docs/02-architecture-of-graph-query-engine/07-web-api-layer.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/web-api-layer",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-graph-query-engine/web-api-layer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/07-web-api-layer.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677061534,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Querying Graph Data",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data"},next:{title:"Overview",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-crates-io-crawler/overview"}},p={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-api-layer"},"Web API Layer"),(0,a.kt)("p",null,"The current implementation of the StarfishQL query engine handle requests with the ",(0,a.kt)("inlineCode",{parentName:"p"},"rocket"),"(",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/rocket"},"crates.io"),") web framework."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/schema"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/mutate"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"/query")," endpoints are exposed for the corresponding class of operations."),(0,a.kt)("p",null,"For all operations, the server follows the exact same workflow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Parse the body of the POST request."),(0,a.kt)("li",{parentName:"ol"},"According to metadata extracted from the body, invoke the corresponding functions in the Rust structs.")),(0,a.kt)("p",null,"As such, the web API layer is separated from the operations layer, which is in the interest of maintainability."))}u.isMDXComponent=!0}}]);