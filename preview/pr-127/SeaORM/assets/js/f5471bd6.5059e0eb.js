"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[72225],{48859:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(76687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=n,N=d["".concat(c,".").concat(k)]||d[k]||l[k]||p;return a?r.createElement(N,i(i({ref:t},m),{},{components:a})):r.createElement(N,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(31308),n=(a(76687),a(48859));const p={},i="Index",o={unversionedId:"index",id:"index",title:"Index",description:"Introduction",source:"@site/docs/01-index.md",sourceDirName:".",slug:"/index",permalink:"/preview/pr-127/SeaORM/docs/next/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-index.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721788953,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/preview/pr-127/SeaORM/docs/next/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],m={toc:s};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/introduction/orm"},"What is an ORM")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/introduction/async"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/introduction/sea-orm"},"SeaORM Concepts")),(0,n.kt)("p",{parentName:"li"},"1.4. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/introduction/tutorial"},"Tutorial & Examples")))),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migration"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/migration/setting-up-migration"},"Setting Up Migration")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/migration/writing-migration"},"Writing Migration")),(0,n.kt)("p",{parentName:"li"},"3.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/migration/running-migration"},"Running Migration")),(0,n.kt)("p",{parentName:"li"},"3.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/migration/seeding-data"},"Seeding Data"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/enumeration"},"Enumeration")),(0,n.kt)("p",{parentName:"li"},"4.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/newtype"},"New Type"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/basic-schema"},"Basic Schema")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"5.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"5.8 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"6.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"6.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"6.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/custom-join-condition"},"Custom Join Condition")),(0,n.kt)("p",{parentName:"li"},"6.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/data-loader"},"Data Loader")),(0,n.kt)("p",{parentName:"li"},"6.8 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"8.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"8.5 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/subquery"},"Sub Query")),(0,n.kt)("p",{parentName:"li"},"8.6 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"8.7 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"8.8 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/custom-active-model"},"Custom Active Model")),(0,n.kt)("p",{parentName:"li"},"8.9 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/advanced-query/error-handling"},"Error Handling"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Schema Statement"),(0,n.kt)("p",{parentName:"li"},"9.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/schema-statement/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"9.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/schema-statement/create-enum"},"Create Enum")),(0,n.kt)("p",{parentName:"li"},"9.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/schema-statement/create-index"},"Create Index"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seaography"),(0,n.kt)("p",{parentName:"li"},"10.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/seaography/seaography-intro"},"\ud83e\udded Seaography Intro")),(0,n.kt)("p",{parentName:"li"},"10.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/seaography/getting-started"},"Getting Started")),(0,n.kt)("p",{parentName:"li"},"10.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/seaography/looking-forward"},"Looking Forward"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"11.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"11.2 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"11.3 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/internal-design/diesel"},"Compare with Diesel")),(0,n.kt)("p",{parentName:"li"},"11.4 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/internal-design/architecture"},"Architecture"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What's Next"),(0,n.kt)("p",{parentName:"li"},"12.1 ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/whats-next/whats-next"},"What's Next")))))}l.isMDXComponent=!0}}]);