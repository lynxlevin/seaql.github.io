"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[42072],{48859:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(76687);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),f=o,h=c["".concat(m,".").concat(f)]||c[f]||u[f]||n;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(31308),o=(a(76687),a(48859));const n={},l="Tutorial & Examples",i={unversionedId:"introduction/tutorial",id:"introduction/tutorial",title:"Tutorial & Examples",description:"If you prefer a step-by-step tutorial on how to use SeaORM, you can check out our official SeaORM Tutorial. There are also some good tutorials written by the community!",source:"@site/docs/01-introduction/04-tutorial.md",sourceDirName:"01-introduction",slug:"/introduction/tutorial",permalink:"/SeaORM/docs/next/introduction/tutorial",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/04-tutorial.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1717256837,formattedLastUpdatedAt:"Jun 1, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/next/introduction/sea-orm"},next:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/next/install-and-config/database-and-async-runtime"}},m={},p=[],s={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial--examples"},"Tutorial & Examples"),(0,o.kt)("p",null,"If you prefer a step-by-step tutorial on how to use SeaORM, you can check out our official ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorial"),". There are also some good tutorials written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#learning-resources"},"the community"),"!"),(0,o.kt)("p",null,"You can also check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-cookbook/"},"SeaORM Cookbook")," for some frequently asked questions and recommended practices of using SeaORM."),(0,o.kt)("p",null,"If you are so eager and want something grab-and-go, SeaQL maintains a set of official examples contributed by the community (we welcome more!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/loco_example"},"Loco Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/loco_starter"},"Loco REST Starter Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/seaography_example"},"Seaography Example"))))}u.isMDXComponent=!0}}]);