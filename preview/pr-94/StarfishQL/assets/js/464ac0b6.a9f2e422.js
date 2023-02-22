"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="Visualizing Dependency Graph",o={unversionedId:"install-and-config/visualizing-dependency-graph",id:"install-and-config/visualizing-dependency-graph",title:"Visualizing Dependency Graph",description:"With a populated database and a working query engine, it's time for some visualization.",source:"@site/docs/01-install-and-config/03-visualizing-dependency-graph.md",sourceDirName:"01-install-and-config",slug:"/install-and-config/visualizing-dependency-graph",permalink:"/preview/pr-94/StarfishQL/docs/install-and-config/visualizing-dependency-graph",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/01-install-and-config/03-visualizing-dependency-graph.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677061534,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Crawling crates.io Data",permalink:"/preview/pr-94/StarfishQL/docs/install-and-config/crawling-crates-io-data"},next:{title:"Overview",permalink:"/preview/pr-94/StarfishQL/docs/architecture-of-graph-query-engine/overview"}},p={},c=[{value:"Serve the application locally",id:"serve-the-application-locally",level:2},{value:"Bundle the application",id:"bundle-the-application",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"visualizing-dependency-graph"},"Visualizing Dependency Graph"),(0,a.kt)("p",null,"With a populated database and a working query engine, it's time for some visualization."),(0,a.kt)("h2",{id:"serve-the-application-locally"},"Serve the application locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/freeport/frontend\nnpm install\nnpm start\n")),(0,a.kt)("p",null,"The server will run at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),"."),(0,a.kt)("h2",{id:"bundle-the-application"},"Bundle the application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/freeport/frontend\nnpm run build\n")),(0,a.kt)("p",null,"The application will be bundled with ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack.js")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"starfish-ql/freeport/frontend/dist"),"."))}d.isMDXComponent=!0}}]);