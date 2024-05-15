"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75983],{48859:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(31308),a=(r(76687),r(48859));const o={},i="Streaming",c={unversionedId:"advanced-query/streaming",id:"version-0.10.x/advanced-query/streaming",title:"Streaming",description:"Use async stream from futures crate on any Select for reducing memory allocation to improve efficiency.",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/07-streaming.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/streaming",permalink:"/SeaORM/docs/0.10.x/advanced-query/streaming",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/07-streaming.md",tags:[],version:"0.10.x",lastUpdatedBy:"lanouyang-fdtech",lastUpdatedAt:1715782037,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction",permalink:"/SeaORM/docs/0.10.x/advanced-query/transaction"},next:{title:"Custom Active Model",permalink:"/SeaORM/docs/0.10.x/advanced-query/custom-active-model"}},s={},l=[],u={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming"},"Streaming"),(0,a.kt)("p",null,"Use async stream from ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/futures"},"futures")," crate on any ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," for reducing memory allocation to improve efficiency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use futures::TryStreamExt;\n\n// Stream all fruits\nlet mut stream = Fruit::find().stream(db).await?;\n\nwhile let Some(item) = stream.try_next().await? {\n    let item: fruit::ActiveModel = item.into();\n    // do something with item\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Stream all fruits with name contains character "a"\nlet mut stream = Fruit::find()\n    .filter(fruit::Column::Name.contains("a"))\n    .order_by_asc(fruit::Column::Name)\n    .stream(db)\n    .await?;\n')),(0,a.kt)("p",null,"Note that the stream object will exclusively hold onto the connection until dropped, preventing the connection to be borrowed by others."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"{\n    let s1 = Fruit::find().stream(db).await?;\n    let s2 = Fruit::find().stream(db).await?;\n    let s3 = Fruit::find().stream(db).await?;\n    // 3 connections are held\n}\n// All streams are dropped and connections are returned to the connection pool\n")))}m.isMDXComponent=!0}}]);