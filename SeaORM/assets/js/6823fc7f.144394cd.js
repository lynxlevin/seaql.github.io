"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[99820],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||i;return t?n.createElement(u,p(p({ref:a},l),{},{components:t})):n.createElement(u,p({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87568:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const i={},p="Index",o={unversionedId:"index",id:"version-0.8.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.8.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM/docs/0.8.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/01-index.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691131020,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/SeaORM/docs/0.8.x/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],l={toc:s};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index"},"Index"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduction"),(0,r.kt)("p",{parentName:"li"},"1.1. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/introduction/orm"},"What is an ORM")),(0,r.kt)("p",{parentName:"li"},"1.2. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/introduction/async"},"Async Programming in Rust")),(0,r.kt)("p",{parentName:"li"},"1.3. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/introduction/sea-orm"},"SeaORM Concepts")),(0,r.kt)("p",{parentName:"li"},"1.4. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/introduction/tutorial"},"Tutorial & Examples")))),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,r.kt)("p",{parentName:"li"},"2.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,r.kt)("p",{parentName:"li"},"2.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/install-and-config/schema"},"Schema Management")),(0,r.kt)("p",{parentName:"li"},"2.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/install-and-config/connection"},"Connection Pool")),(0,r.kt)("p",{parentName:"li"},"2.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/install-and-config/debug-log"},"Debug Log"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating Entities"),(0,r.kt)("p",{parentName:"li"},"3.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/sea-orm-cli"},"Using ",(0,r.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,r.kt)("p",{parentName:"li"},"3.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/entity-structure"},"Entity Structure")),(0,r.kt)("p",{parentName:"li"},"3.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,r.kt)("p",{parentName:"li"},"3.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-entity/enumeration"},"Enumeration"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,r.kt)("p",{parentName:"li"},"4.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-database-schema/create-table"},"Create Table")),(0,r.kt)("p",{parentName:"li"},"4.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-database-schema/create-enum"},"Create Enum")),(0,r.kt)("p",{parentName:"li"},"4.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/generate-database-schema/create-index"},"Create Index"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Basic CRUD"),(0,r.kt)("p",{parentName:"li"},"5.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,r.kt)("p",{parentName:"li"},"5.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,r.kt)("p",{parentName:"li"},"5.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,r.kt)("p",{parentName:"li"},"5.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/save"},"SAVE: insert or update")),(0,r.kt)("p",{parentName:"li"},"5.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,r.kt)("p",{parentName:"li"},"5.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/json"},"JSON")),(0,r.kt)("p",{parentName:"li"},"5.7 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,r.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Migration"),(0,r.kt)("p",{parentName:"li"},"6.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/migration/setting-up-migration"},"Setting Up Migration")),(0,r.kt)("p",{parentName:"li"},"6.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/migration/writing-migration"},"Writing Migration")),(0,r.kt)("p",{parentName:"li"},"6.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/migration/running-migration"},"Running Migration")),(0,r.kt)("p",{parentName:"li"},"6.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/migration/seeding-data"},"Seeding Data"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Relations"),(0,r.kt)("p",{parentName:"li"},"7.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/one-to-one"},"One to One")),(0,r.kt)("p",{parentName:"li"},"7.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/one-to-many"},"One to Many")),(0,r.kt)("p",{parentName:"li"},"7.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/many-to-many"},"Many to Many")),(0,r.kt)("p",{parentName:"li"},"7.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/chained-relations"},"Chained Relations")),(0,r.kt)("p",{parentName:"li"},"7.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/self-referencing"},"Self Referencing")),(0,r.kt)("p",{parentName:"li"},"7.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/relation/bakery-schema"},"Bakery Schema"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Writing Tests"),(0,r.kt)("p",{parentName:"li"},"8.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/write-test/testing"},"Robust & Correct")),(0,r.kt)("p",{parentName:"li"},"8.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/write-test/mock"},"Mock Interface")),(0,r.kt)("p",{parentName:"li"},"8.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/write-test/sqlite"},"Using SQLite"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Advanced Queries"),(0,r.kt)("p",{parentName:"li"},"9.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/custom-select"},"Custom select")),(0,r.kt)("p",{parentName:"li"},"9.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,r.kt)("p",{parentName:"li"},"9.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,r.kt)("p",{parentName:"li"},"9.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/custom-joins"},"Custom Joins")),(0,r.kt)("p",{parentName:"li"},"9.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/subquery"},"Sub Query")),(0,r.kt)("p",{parentName:"li"},"9.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/transaction"},"Transaction")),(0,r.kt)("p",{parentName:"li"},"9.7 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/streaming"},"Streaming")),(0,r.kt)("p",{parentName:"li"},"9.8 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Internal Design"),(0,r.kt)("p",{parentName:"li"},"10.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/internal-design/trait-and-type"},"Traits and Types")),(0,r.kt)("p",{parentName:"li"},"10.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/internal-design/derive-macro"},"Derive Macros")),(0,r.kt)("p",{parentName:"li"},"10.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.8.x/internal-design/diesel"},"Compare with Diesel")))))}m.isMDXComponent=!0}}]);