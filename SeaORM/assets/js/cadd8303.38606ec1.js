"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[49004],{48859:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(76687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(k,p(p({ref:t},c),{},{components:a})):r.createElement(k,p({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(31308),n=(a(76687),a(48859));const i={},p="Index",o={unversionedId:"index",id:"version-0.7.x/index",title:"Index",description:"SeaORM Tutorials",source:"@site/versioned_docs/version-0.7.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM/docs/0.7.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/01-index.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722851639,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/SeaORM/docs/0.7.x/introduction/orm"}},l={},s=[{value:"SeaORM Tutorials",id:"seaorm-tutorials",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"seaorm-tutorials"},"SeaORM Tutorials"),(0,n.kt)("p",null,"If you prefer step-by-step tutorials on how to use SeaORM. You can checkout ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorials"),"!"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/orm"},"What is an ORM"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/async"},"Async Programming in Rust"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/introduction/sea-orm"},"SeaORM Concepts")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"1.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"1.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/schema"},"Schema Management")),(0,n.kt)("p",{parentName:"li"},"1.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"1.4 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.4 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-enum"},"Create Enum")),(0,n.kt)("p",{parentName:"li"},"3.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/generate-database-schema/create-index"},"Create Index"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migration"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/setting-up-migration"},"Setting Up Migration")),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/writing-migration"},"Writing Migration")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/migration/running-migration"},"Running Migration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"5.7 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"6.4 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"6.5 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"6.6 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"8.4 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"8.5 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/subquery"},"Subquery")),(0,n.kt)("p",{parentName:"li"},"8.6 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"8.7 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"8.8 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"9.1 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"9.2 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"9.3 ",(0,n.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.7.x/internal-design/diesel"},"Compare with Diesel")))))}m.isMDXComponent=!0}}]);