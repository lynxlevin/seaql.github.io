"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[59525],{48859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(76687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(31308),n=(r(76687),r(48859));const o={},i="Bakery Schema",c={unversionedId:"relation/bakery-schema",id:"version-0.11.x/relation/bakery-schema",title:"Bakery Schema",description:"Bakery Schema ERD",source:"@site/versioned_docs/version-0.11.x/06-relation/08-bakery-schema.md",sourceDirName:"06-relation",slug:"/relation/bakery-schema",permalink:"/SeaORM/docs/0.11.x/relation/bakery-schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/06-relation/08-bakery-schema.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1725513601,formattedLastUpdatedAt:"Sep 5, 2024",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Loader",permalink:"/SeaORM/docs/0.11.x/relation/data-loader"},next:{title:"Robust & Correct",permalink:"/SeaORM/docs/0.11.x/write-test/testing"}},s={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bakery-schema"},"Bakery Schema"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/tests/common/bakery_chain/bakery_chain_erd.svg",alt:"Bakery Schema ERD"})),(0,n.kt)("p",null,"For an example of a more complex schema with different data types and relations, you can reference the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/tests/common/bakery_chain"},"Bakery Schema")," of SeaORM's test suite."))}m.isMDXComponent=!0}}]);