"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,u=d["".concat(c,".").concat(k)]||d[k]||l[k]||i;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},p="Index",o={unversionedId:"index",id:"index",title:"Index",description:"Introduction",source:"@site/docs/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM/docs/next/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-index.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1680601465,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/SeaORM/docs/next/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],m={toc:s};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index"},"Index"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduction"),(0,r.kt)("p",{parentName:"li"},"1.1. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/introduction/orm"},"What is an ORM")),(0,r.kt)("p",{parentName:"li"},"1.2. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/introduction/async"},"Async Programming in Rust")),(0,r.kt)("p",{parentName:"li"},"1.3. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/introduction/sea-orm"},"SeaORM Concepts")),(0,r.kt)("p",{parentName:"li"},"1.4. ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/introduction/tutorial"},"Tutorial & Examples")))),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,r.kt)("p",{parentName:"li"},"2.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,r.kt)("p",{parentName:"li"},"2.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/install-and-config/connection"},"Connection Pool")),(0,r.kt)("p",{parentName:"li"},"2.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/install-and-config/debug-log"},"Debug Log"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Migration"),(0,r.kt)("p",{parentName:"li"},"3.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/migration/setting-up-migration"},"Setting Up Migration")),(0,r.kt)("p",{parentName:"li"},"3.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/migration/writing-migration"},"Writing Migration")),(0,r.kt)("p",{parentName:"li"},"3.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/migration/running-migration"},"Running Migration")),(0,r.kt)("p",{parentName:"li"},"3.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/migration/seeding-data"},"Seeding Data"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating Entities"),(0,r.kt)("p",{parentName:"li"},"4.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/sea-orm-cli"},"Using ",(0,r.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,r.kt)("p",{parentName:"li"},"4.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure"},"Entity Structure")),(0,r.kt)("p",{parentName:"li"},"4.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,r.kt)("p",{parentName:"li"},"4.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/enumeration"},"Enumeration"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Basic CRUD"),(0,r.kt)("p",{parentName:"li"},"5.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/basic-schema"},"Basic Schema")),(0,r.kt)("p",{parentName:"li"},"5.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,r.kt)("p",{parentName:"li"},"5.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,r.kt)("p",{parentName:"li"},"5.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/update"},"UPDATE: find & save, update many")),(0,r.kt)("p",{parentName:"li"},"5.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/save"},"SAVE: insert or update")),(0,r.kt)("p",{parentName:"li"},"5.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/delete"},"DELETE: delete one & delete many")),(0,r.kt)("p",{parentName:"li"},"5.7 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/json"},"JSON")),(0,r.kt)("p",{parentName:"li"},"5.8 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/basic-crud/raw-sql"},"Raw SQL query")))),(0,r.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Relations"),(0,r.kt)("p",{parentName:"li"},"6.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/one-to-one"},"One to One")),(0,r.kt)("p",{parentName:"li"},"6.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/one-to-many"},"One to Many")),(0,r.kt)("p",{parentName:"li"},"6.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/many-to-many"},"Many to Many")),(0,r.kt)("p",{parentName:"li"},"6.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/chained-relations"},"Chained Relations")),(0,r.kt)("p",{parentName:"li"},"6.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/self-referencing"},"Self Referencing")),(0,r.kt)("p",{parentName:"li"},"6.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/custom-join-condition"},"Custom Join Condition")),(0,r.kt)("p",{parentName:"li"},"6.7 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/data-loader"},"Data Loader")),(0,r.kt)("p",{parentName:"li"},"6.8 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/bakery-schema"},"Bakery Schema"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Writing Tests"),(0,r.kt)("p",{parentName:"li"},"7.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/write-test/testing"},"Robust & Correct")),(0,r.kt)("p",{parentName:"li"},"7.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/write-test/mock"},"Mock Interface")),(0,r.kt)("p",{parentName:"li"},"7.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/write-test/sqlite"},"Using SQLite"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Advanced Queries"),(0,r.kt)("p",{parentName:"li"},"8.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/custom-select"},"Custom select")),(0,r.kt)("p",{parentName:"li"},"8.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/conditional-expression"},"Conditional expressions")),(0,r.kt)("p",{parentName:"li"},"8.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/aggregate-function"},"Aggregate functions")),(0,r.kt)("p",{parentName:"li"},"8.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/custom-joins"},"Custom Joins")),(0,r.kt)("p",{parentName:"li"},"8.5 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/subquery"},"Sub Query")),(0,r.kt)("p",{parentName:"li"},"8.6 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/transaction"},"Transaction")),(0,r.kt)("p",{parentName:"li"},"8.7 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/streaming"},"Streaming")),(0,r.kt)("p",{parentName:"li"},"8.8 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/custom-active-model"},"Custom Active Model")),(0,r.kt)("p",{parentName:"li"},"8.9 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/error-handling"},"Error Handling"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schema Statement"),(0,r.kt)("p",{parentName:"li"},"9.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/schema-statement/create-table"},"Create Table")),(0,r.kt)("p",{parentName:"li"},"9.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/schema-statement/create-enum"},"Create Enum")),(0,r.kt)("p",{parentName:"li"},"9.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/schema-statement/create-index"},"Create Index"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Internal Design"),(0,r.kt)("p",{parentName:"li"},"10.1 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/internal-design/trait-and-type"},"Traits and Types")),(0,r.kt)("p",{parentName:"li"},"10.2 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/internal-design/derive-macro"},"Derive Macros")),(0,r.kt)("p",{parentName:"li"},"10.3 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/internal-design/diesel"},"Compare with Diesel")),(0,r.kt)("p",{parentName:"li"},"10.4 ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/internal-design/architecture"},"Architecture")))))}l.isMDXComponent=!0}}]);