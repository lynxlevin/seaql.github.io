"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[31681],{48859:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(76687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||p;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=a(31308),n=(a(76687),a(48859));const p={},i="Index",o={unversionedId:"index",id:"version-0.4.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.4.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/preview/pr-123/SeaORM/docs/0.4.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/01-index.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1716207608,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",next:{title:"What is an ORM",permalink:"/preview/pr-123/SeaORM/docs/0.4.x/introduction/orm"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Learn More",id:"learn-more",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/introduction/orm"},"What is an ORM"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/introduction/async"},"Async Programming in Rust"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/introduction/sea-orm"},"SeaORM Concepts")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"1.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"1.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/install-and-config/schema"},"Schema Management")),(0,n.kt)("p",{parentName:"li"},"1.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"1.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-database-schema/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/generate-database-schema/create-enum"},"Create Enum"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"4.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"4.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"4.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"4.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"7.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"7.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/subquery"},"Subquery")),(0,n.kt)("p",{parentName:"li"},"7.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"7.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"7.8 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-123/SeaORM/docs/0.4.x/internal-design/diesel"},"Compare with Diesel")))))}m.isMDXComponent=!0}}]);