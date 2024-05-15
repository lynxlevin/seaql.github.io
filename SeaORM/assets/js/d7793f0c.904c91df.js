"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[61633],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(31308),a=(n(76687),n(48859));const o={},i="Async Programming",s={unversionedId:"introduction/async",id:"introduction/async",title:"Async Programming",description:"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind.",source:"@site/docs/01-introduction/02-async.md",sourceDirName:"01-introduction",slug:"/introduction/async",permalink:"/SeaORM/docs/next/introduction/async",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/02-async.md",tags:[],version:"current",lastUpdatedBy:"lanouyang-fdtech",lastUpdatedAt:1715782037,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is an ORM",permalink:"/SeaORM/docs/next/introduction/orm"},next:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/next/introduction/sea-orm"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async-programming"},"Async Programming"),(0,a.kt)("p",null,"Async programming in Rust is a recent development, only having been stabilized in Rust ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,a.kt)("inlineCode",{parentName:"a"},"1.39")),". The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind."),(0,a.kt)("p",null,"The first thing to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Future"))," trait. It's a placeholder for a function that will compute and return some value in the future. It's lazy, meaning ",(0,a.kt)("inlineCode",{parentName:"p"},".await")," must be called for any actual work to be done. ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," allows us to achieve concurrency with little programming effort, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,a.kt)("inlineCode",{parentName:"a"},"future::join_all"))," to execute multiple queries in parallel."),(0,a.kt)("p",null,"Second, ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," in Rust is ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/03_async_await/01_chapter.html"},"multi-threaded programming")," with syntactic sugar. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," may move between threads, so any variables used in async bodies must be able to travel between threads, i.e. ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/nomicon/send-and-sync.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Send")),"."),(0,a.kt)("p",null,"Third, there are multiple async runtimes in Rust. ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.kt)("inlineCode",{parentName:"a"},"async-std"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,a.kt)("inlineCode",{parentName:"a"},"tokio"))," are the two most widely used. SeaORM's underlying driver, ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},(0,a.kt)("inlineCode",{parentName:"a"},"SQLx")),", supports both."),(0,a.kt)("p",null,"Knowing these concepts is essential to get you up and running in async Rust."))}p.isMDXComponent=!0}}]);