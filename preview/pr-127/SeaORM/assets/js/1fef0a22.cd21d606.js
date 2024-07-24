"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[88019],{48859:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(31308),o=(r(76687),r(48859));const n={},i="Tutorial & Examples",l={unversionedId:"introduction/tutorial",id:"version-0.11.x/introduction/tutorial",title:"Tutorial & Examples",description:"If you prefer a step-by-step tutorial on how to use SeaORM, you can check out our official SeaORM Tutorial. There are also some good tutorial written by the community!",source:"@site/versioned_docs/version-0.11.x/01-introduction/04-tutorial.md",sourceDirName:"01-introduction",slug:"/introduction/tutorial",permalink:"/preview/pr-127/SeaORM/docs/0.11.x/introduction/tutorial",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/01-introduction/04-tutorial.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721788953,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaORM Concepts",permalink:"/preview/pr-127/SeaORM/docs/0.11.x/introduction/sea-orm"},next:{title:"Database & Async Runtime",permalink:"/preview/pr-127/SeaORM/docs/0.11.x/install-and-config/database-and-async-runtime"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial--examples"},"Tutorial & Examples"),(0,o.kt)("p",null,"If you prefer a step-by-step tutorial on how to use SeaORM, you can check out our official ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorial"),". There are also some good tutorial written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#learning-resources"},"the community"),"!"),(0,o.kt)("p",null,"You can also check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-cookbook/"},"SeaORM Cookbook")," for some frequently asked questions and recommended practices of SeaORM."),(0,o.kt)("p",null,"If you are so eager and want something grab-and-go, SeaQL maintains a set of official examples contributed by the community (we welcome more!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,o.kt)("p",null,"If you are building a web API that queries nested relations extensively, consider building a GraphQL server. ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/Seaography/"},"Seaography"),' is a GraphQL framework for building GraphQL resolvers using SeaORM entities. Read "',(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/"},"Getting Started with Seaography"),'" to learn more.'))}u.isMDXComponent=!0}}]);