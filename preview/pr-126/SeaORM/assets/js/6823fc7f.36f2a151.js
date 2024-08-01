"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[99820],{48859:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var r=t(76687);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=n,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||p;return t?r.createElement(u,i(i({ref:a},l),{},{components:t})):r.createElement(u,i({ref:a},l))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27815:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=t(31308),n=(t(76687),t(48859));const p={},i="Index",o={unversionedId:"index",id:"version-0.8.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.8.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/preview/pr-126/SeaORM/docs/0.8.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/01-index.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722493025,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/preview/pr-126/SeaORM/docs/0.8.x/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],l={toc:s};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/introduction/orm"},"What is an ORM")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/introduction/async"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/introduction/sea-orm"},"SeaORM Concepts")),(0,n.kt)("p",{parentName:"li"},"1.4. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/introduction/tutorial"},"Tutorial & Examples")))),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/install-and-config/schema"},"Schema Management")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"2.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"3.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"3.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-database-schema/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-database-schema/create-enum"},"Create Enum")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/generate-database-schema/create-index"},"Create Index"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"5.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migration"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/migration/setting-up-migration"},"Setting Up Migration")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/migration/writing-migration"},"Writing Migration")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/migration/running-migration"},"Running Migration")),(0,n.kt)("p",{parentName:"li"},"6.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/migration/seeding-data"},"Seeding Data"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"7.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"7.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"7.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"9.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"9.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"9.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"9.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"9.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/subquery"},"Sub Query")),(0,n.kt)("p",{parentName:"li"},"9.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"9.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"9.8 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"10.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"10.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"10.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-126/SeaORM/docs/0.8.x/internal-design/diesel"},"Compare with Diesel")))))}m.isMDXComponent=!0}}]);