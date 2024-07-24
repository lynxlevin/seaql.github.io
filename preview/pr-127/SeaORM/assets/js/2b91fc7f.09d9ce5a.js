"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75473],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(31308),a=(n(76687),n(48859));const o={},i="Seeding Data",s={unversionedId:"migration/seeding-data",id:"version-0.8.x/migration/seeding-data",title:"Seeding Data",description:"You can retrieve a DbConn from SchemaManager and perform data operations as needed, for example, to seed data.",source:"@site/versioned_docs/version-0.8.x/06-migration/04-seeding-data.md",sourceDirName:"06-migration",slug:"/migration/seeding-data",permalink:"/preview/pr-127/SeaORM/docs/0.8.x/migration/seeding-data",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/06-migration/04-seeding-data.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721788953,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Migration",permalink:"/preview/pr-127/SeaORM/docs/0.8.x/migration/running-migration"},next:{title:"One to One",permalink:"/preview/pr-127/SeaORM/docs/0.8.x/relation/one-to-one"}},c={},p=[],d={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seeding-data"},"Seeding Data"),(0,a.kt)("p",null,"You can retrieve a ",(0,a.kt)("inlineCode",{parentName:"p"},"DbConn")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaManager")," and perform data operations as needed, for example, to seed data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let db = manager.get_connection();\n\n        cake::ActiveModel {\n            name: Set("Cheesecake".to_owned()),\n            ..Default::default()\n        }\n        .insert(db)\n        .await?;\n\n        Ok(())\n    }\n}\n')))}l.isMDXComponent=!0}}]);