"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},i="SeaORM Concepts",p={unversionedId:"introduction/sea-orm",id:"version-0.12.x/introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/versioned_docs/version-0.12.x/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/01-introduction/03-sea-orm.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690985197,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/SeaORM/docs/introduction/async"},next:{title:"Tutorial & Examples",permalink:"/SeaORM/docs/introduction/tutorial"}},s={},l=[],c={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,n.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,n.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,n.kt)("p",null,"Each table corresponds to an ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/entity-structure#entity"},(0,n.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,n.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/entity-structure#column"},(0,n.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/entity-structure#relation"},(0,n.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/entity-structure#primary-key"},(0,n.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,n.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,n.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,n.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/expanded-entity-structure#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,n.kt)("p",null,"However, ",(0,n.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/generate-entity/expanded-entity-structure#active-model"},(0,n.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,n.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,n.kt)("inlineCode",{parentName:"p"},"DatabaseConnection"),". We do provide integration examples for web frameworks including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);