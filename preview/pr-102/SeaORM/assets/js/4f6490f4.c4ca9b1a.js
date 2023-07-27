"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={},o="Compare with Diesel",s={unversionedId:"internal-design/diesel",id:"internal-design/diesel",title:"Compare with Diesel",description:"SeaORM and Diesel share the same goal: to offer you a complete solution in interfacing with databases.",source:"@site/docs/10-internal-design/03-diesel.md",sourceDirName:"10-internal-design",slug:"/internal-design/diesel",permalink:"/preview/pr-102/SeaORM/docs/next/internal-design/diesel",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/10-internal-design/03-diesel.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1690428025,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Derive Macros",permalink:"/preview/pr-102/SeaORM/docs/next/internal-design/derive-macro"},next:{title:"Architecture",permalink:"/preview/pr-102/SeaORM/docs/next/internal-design/architecture"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Programming paradigm",id:"programming-paradigm",level:2},{value:"Schema Builder",id:"schema-builder",level:2},{value:"Similarities",id:"similarities",level:2},{value:"Final words",id:"final-words",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compare-with-diesel"},"Compare with Diesel"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/diesel-rs/diesel"},"Diesel")," share the same goal: to offer you a complete solution in interfacing with databases."),(0,i.kt)("p",null,"Both SeaORM and Diesel work with MySQL, PostgreSQL, and SQLite, so you aren't constrained going with either. While Diesel allows third parties to implement custom backends, SeaORM does not."),(0,i.kt)("p",null,"There are also other things we chose to do differently."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"First off, perhaps the number one requested feature, async Rust support. While using async may not offer you better performance today, programming in async is an architectural decision you have to make early on. By choosing SeaORM, we together look forward to Rust's async ecosystem maturing."),(0,i.kt)("p",null,"Under the hood, SeaORM together with ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},"SQLx")," offers you a pure Rust technology stack. Diesel uses native drivers by default and it may take some effort for you to replace it with a pure Rust driver. Each side has their pros and cons, so it's up to your preference."),(0,i.kt)("p",null,"SeaORM has a modular design. If you don't like the idea of an ORM, you'll definitely still want to use ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/sea-query"},"SeaQuery"),", the underlying query builder. It is lightweight and can be easily integrated into any project. The SeaQuery API is also available to you when using SeaORM, so you receive the benefits of high-level abstraction while still having the power of a flexible query builder when you need it."),(0,i.kt)("h2",{id:"programming-paradigm"},"Programming paradigm"),(0,i.kt)("p",null,"In addition to the sync vs async foundation, the biggest distinction between Diesel and SeaORM is static vs dynamic."),(0,i.kt)("p",null,"Diesel provides an everything-compile-time API where types can be checked entirely statically. You can also do dynamic queries with Diesel, but you'd lose some of the benefits of compile-time type-checking."),(0,i.kt)("p",null,"SeaORM is dynamic, in which things are established at runtime. It offers more flexibility. While you lose some compile-time checkings, SeaORM helps you to prove correctness by testing instead."),(0,i.kt)("p",null,"Both libraries make heavy use of traits and generics, but SeaORM generates less types: each column in Diesel is a struct (each struct impl several traits), while each column in SeaORM is an enum variant (all columns of an entity together form one enum, which impl some traits)."),(0,i.kt)("p",null,"There are also no deeply nested generics in SeaORM (e.g.",(0,i.kt)("inlineCode",{parentName:"p"},"A<B<C<D<E>>>>"),")."),(0,i.kt)("h2",{id:"schema-builder"},"Schema Builder"),(0,i.kt)("p",null,"While in the Diesel ecosystem there are awesome libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://git.irde.st/spacekookie/barrel"},"barrel"),", SeaQL maintains the tools for schema building (SeaQuery) and management (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema"},"SeaSchema"),"). That means a familiar API and a unified experience."),(0,i.kt)("h2",{id:"similarities"},"Similarities"),(0,i.kt)("p",null,"Both Diesel and SeaORM are schema first, meaning it all starts from your existing database schema, instead of starting from your OOP classes."),(0,i.kt)("p",null,"Both Diesel and SeaORM are relational, meaning you can do complex joins with defined relations."),(0,i.kt)("h2",{id:"final-words"},"Final words"),(0,i.kt)("p",null,"Diesel is a well-established library in the Rust ecosystem. SeaORM is very new. Neither can replace the other. We hope that the Rust community will grow stronger together."))}d.isMDXComponent=!0}}]);