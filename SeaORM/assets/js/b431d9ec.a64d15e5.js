"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[93232],{48859:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(31308),r=(n(76687),n(48859));const o={},i="SeaORM Concepts",p={unversionedId:"introduction/sea-orm",id:"introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/docs/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/next/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/03-sea-orm.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705892762,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/SeaORM/docs/next/introduction/async"},next:{title:"Tutorial & Examples",permalink:"/SeaORM/docs/next/introduction/tutorial"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,r.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,r.kt)("p",null,"Each table corresponds to an ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#column"},(0,r.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#relation"},(0,r.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#primary-key"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,r.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,r.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure#model"},(0,r.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,r.kt)("p",null,"However, ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure#active-model"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,r.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseConnection"),". We do provide integration examples for web frameworks including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);