"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[20432],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(31308),a=(n(76687),n(48859));const o={},i="Streaming",c={unversionedId:"advanced-query/streaming",id:"version-0.4.x/advanced-query/streaming",title:"Streaming",description:"Use async stream on any Select for reducing memory allocation to improve efficiency.",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/07-streaming.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/streaming",permalink:"/SeaORM/docs/0.4.x/advanced-query/streaming",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/07-streaming.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705892762,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:7,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Transaction",permalink:"/SeaORM/docs/0.4.x/advanced-query/transaction"},next:{title:"Custom Active Model",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-active-model"}},l={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming"},"Streaming"),(0,a.kt)("p",null,"Use async stream on any ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," for reducing memory allocation to improve efficiency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Stream all fruits\nlet mut stream = Fruit::find().stream(db).await?;\n\nwhile let Some(item) = stream.try_next().await? {\n    let item: fruit::ActiveModel = item.into();\n    // do something with item\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Stream all fruits with name contains character "a"\nlet mut stream = Fruit::find()\n    .filter(fruit::Column::Name.contains("a"))\n    .order_by_asc(fruit::Column::Name)\n    .stream(db)\n    .await?;\n')),(0,a.kt)("p",null,"Note that the stream object will exclusively hold onto the connection until being dropped, preventing the connection to be borrowed by others."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"{\n    let s1 = Fruit::find().stream(db).await?;\n    let s2 = Fruit::find().stream(db).await?;\n    let s3 = Fruit::find().stream(db).await?;\n    // 3 connections are held\n}\n// All streams are dropped and connections are returned to the connection pool\n")))}d.isMDXComponent=!0}}]);