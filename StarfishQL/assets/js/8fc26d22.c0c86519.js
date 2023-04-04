"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[70],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,h=f["".concat(p,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="The Objective",s={unversionedId:"introduction/objective",id:"introduction/objective",title:"The Objective",description:"StarfishQL is a framework for providing a graph database and a graph query engine that interacts with it.",source:"@site/docs/00-introduction/02-objective.md",sourceDirName:"00-introduction",slug:"/introduction/objective",permalink:"/StarfishQL/docs/introduction/objective",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/00-introduction/02-objective.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1680601465,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is a Graph Query Engine",permalink:"/StarfishQL/docs/introduction/graph-query-engine"},next:{title:"StarfishQL Concepts",permalink:"/StarfishQL/docs/introduction/starfish-ql"}},p={},c=[{value:"Top-N Dependencies",id:"top-n-dependencies",level:2},{value:"Dependencies &amp; Dependents",id:"dependencies--dependents",level:2}],l={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-objective"},"The Objective"),(0,a.kt)("p",null,"StarfishQL is a framework for providing a ",(0,a.kt)("strong",{parentName:"p"},"graph database")," and a ",(0,a.kt)("strong",{parentName:"p"},"graph query engine")," that interacts with it."),(0,a.kt)("p",null,"Throughout this documentation, a concrete example (",(0,a.kt)("em",{parentName:"p"},"Freeport"),") involving the graph of crate dependency on ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io")," is used for illustration. With this example, you can see StarfishQL in action."),(0,a.kt)("p",null,"At the end of the day, we're interested in performing ",(0,a.kt)("strong",{parentName:"p"},"graph analysis"),", that is to extract meaningful information out of plain graph data. To achieve that, we believe that ",(0,a.kt)("strong",{parentName:"p"},"visualization")," is a crucial aid."),(0,a.kt)("p",null,"StarfishQL's query engine is designed to be able to incorporate different forms of visualization by using a flexible query language. However, the development of the project has been centred around the following, as showcased in our ",(0,a.kt)("a",{parentName:"p",href:"https://starfish-ql.sea-ql.org/"},"demo app"),"."),(0,a.kt)("h2",{id:"top-n-dependencies"},"Top-N Dependencies"),(0,a.kt)("p",null,"Bright image",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("p",null,"Traverse the graph in the normal direction starting from the N most connected nodes."),(0,a.kt)("h2",{id:"dependencies--dependents"},"Dependencies & Dependents"),(0,a.kt)("p",null,"Bright image",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,a.kt)("p",null,"Traverse the graph in both the normal and reversed directions starting from a root node."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},(0,a.kt)("img",{alt:"Top-N Dependencies showcase",src:n(6866).Z,width:"542",height:"382"}),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},(0,a.kt)("img",{alt:"Dependencies and Dependents showcase",src:n(7456).Z,width:"904",height:"302"}),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},6866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph_example-f0c2335b53f19505fa6903c25220d09b.png"},7456:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree_example-375970b5173e531afcd45d6caec0fbe6.png"}}]);