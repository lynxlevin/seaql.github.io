"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},o="Overview",c={unversionedId:"architecture-of-graph-visualization/overview",id:"architecture-of-graph-visualization/overview",title:"Overview",description:"The visualization is a force-directed graph (example on Observable), in which the crate nodes are laid out and connected with depends edges.",source:"@site/docs/04-architecture-of-graph-visualization/01-overview.md",sourceDirName:"04-architecture-of-graph-visualization",slug:"/architecture-of-graph-visualization/overview",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-graph-visualization/overview",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/04-architecture-of-graph-visualization/01-overview.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677061534,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-crates-io-crawler/overview"}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The visualization is a force-directed graph (",(0,i.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/force-directed-graph"},"example on Observable"),"), in which the ",(0,i.kt)("em",{parentName:"p"},"crate")," nodes are laid out and connected with ",(0,i.kt)("em",{parentName:"p"},"depends")," edges."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"d3-force")," module (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-force/tree/v3.0.0"},"repo"),") is used to simulate the interactions between the nodes, such as collision, charge, and positional forces."),(0,i.kt)("p",null,"The implementation of this part is not complicated, but involves lots of experimenting and tinkering. There could be improvements in the UX of interacting with the graph visualizations, but we think the current state is fine for now."))}u.isMDXComponent=!0}}]);