"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9264],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>k});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=n,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||p;return t?a.createElement(u,i(i({ref:r},l),{},{components:t})):a.createElement(u,i({ref:r},l))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58292:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const p={},i="Index",o={unversionedId:"index",id:"version-0.10.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.10.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/pr-preview/pr-94/SeaORM/docs/0.10.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/01-index.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677056595,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/pr-preview/pr-94/SeaORM/docs/0.10.x/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],l={toc:s};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/introduction/orm"},"What is an ORM")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/introduction/async"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/introduction/sea-orm"},"SeaORM Concepts")),(0,n.kt)("p",{parentName:"li"},"1.4. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/introduction/tutorial"},"Tutorial & Examples")))),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migration"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/migration/setting-up-migration"},"Setting Up Migration")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/migration/writing-migration"},"Writing Migration")),(0,n.kt)("p",{parentName:"li"},"3.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/migration/running-migration"},"Running Migration")),(0,n.kt)("p",{parentName:"li"},"3.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/migration/seeding-data"},"Seeding Data"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"5.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"6.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"6.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"6.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/custom-join-condition"},"Custom Join Condition")),(0,n.kt)("p",{parentName:"li"},"6.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"8.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"8.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/subquery"},"Sub Query")),(0,n.kt)("p",{parentName:"li"},"8.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"8.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"8.8 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/custom-active-model"},"Custom Active Model")),(0,n.kt)("p",{parentName:"li"},"8.9 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/advanced-query/error-handling"},"Error Handling"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating SeaQuery Statement"),(0,n.kt)("p",{parentName:"li"},"9.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-sea-query-statement/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"9.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-sea-query-statement/create-enum"},"Create Enum")),(0,n.kt)("p",{parentName:"li"},"9.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/generate-sea-query-statement/create-index"},"Create Index"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"10.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"10.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"10.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/internal-design/diesel"},"Compare with Diesel")),(0,n.kt)("p",{parentName:"li"},"10.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-94/SeaORM/docs/0.10.x/internal-design/architecture"},"Architecture")))))}m.isMDXComponent=!0}}]);