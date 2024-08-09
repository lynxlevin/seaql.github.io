"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[53816],{48859:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(76687);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),f=o,h=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(31308),o=(a(76687),a(48859));const n={},i="Tutorial & Examples",l={unversionedId:"introduction/tutorial",id:"version-0.9.x/introduction/tutorial",title:"Tutorial & Examples",description:"If you prefer step-by-step tutorials on how to use SeaORM, you can checkout our SeaORM Tutorials.",source:"@site/versioned_docs/version-0.9.x/01-introduction/04-tutorial.md",sourceDirName:"01-introduction",slug:"/introduction/tutorial",permalink:"/preview/pr-127/SeaORM/docs/0.9.x/introduction/tutorial",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/01-introduction/04-tutorial.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1723173973,formattedLastUpdatedAt:"Aug 9, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaORM Concepts",permalink:"/preview/pr-127/SeaORM/docs/0.9.x/introduction/sea-orm"},next:{title:"Database & Async Runtime",permalink:"/preview/pr-127/SeaORM/docs/0.9.x/install-and-config/database-and-async-runtime"}},s={},p=[],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial--examples"},"Tutorial & Examples"),(0,o.kt)("p",null,"If you prefer step-by-step tutorials on how to use SeaORM, you can checkout our ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorials"),"."),(0,o.kt)("p",null,"It's a good idea to have a grasp of the basic concepts first, so let's continue."),(0,o.kt)("p",null,"If you are so eager and want something grab-and-go, SeaQL maintains a set of official examples contributed by the community (we welcome more!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,o.kt)("p",null,"If you are building a web API that perform selecting nested relation extensively. Consider serving a GraphQL server instead. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"seaography"),' is a GraphQL framework for building GraphQL resolvers using SeaORM entities. With GraphQL resolver in place select above nested relation is straightforward and easy. Check "',(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/#query-data-via-graphql"},"Getting Started with Seaography"),'" to learn more.'),(0,o.kt)("p",null,"You can also check ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-cookbook/"},"SeaORM Cookbook")," for frequently asked questions and the best practice of SeaORM."))}u.isMDXComponent=!0}}]);