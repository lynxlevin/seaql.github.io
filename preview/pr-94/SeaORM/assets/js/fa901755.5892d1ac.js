"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4951],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={},o="Seeding Data",s={unversionedId:"migration/seeding-data",id:"migration/seeding-data",title:"Seeding Data",description:"You can retrieve a DbConn from SchemaManager and perform data operations as needed, for example, to seed data.",source:"@site/docs/03-migration/04-seeding-data.md",sourceDirName:"03-migration",slug:"/migration/seeding-data",permalink:"/preview/pr-94/SeaORM/docs/next/migration/seeding-data",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/03-migration/04-seeding-data.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677061534,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Migration",permalink:"/preview/pr-94/SeaORM/docs/next/migration/running-migration"},next:{title:"Using sea-orm-cli",permalink:"/preview/pr-94/SeaORM/docs/next/generate-entity/sea-orm-cli"}},c={},l=[{value:"Seeding Data Transactionally",id:"seeding-data-transactionally",level:2}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seeding-data"},"Seeding Data"),(0,r.kt)("p",null,"You can retrieve a ",(0,r.kt)("inlineCode",{parentName:"p"},"DbConn")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaManager")," and perform data operations as needed, for example, to seed data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let db = manager.get_connection();\n\n        cake::ActiveModel {\n            name: Set("Cheesecake".to_owned()),\n            ..Default::default()\n        }\n        .insert(db)\n        .await?;\n\n        Ok(())\n    }\n}\n')),(0,r.kt)("p",null,"You could also write SeaQuery statement to seed the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let insert = Query::insert()\n            .into_table(Cake::Table)\n            .columns([Cake::Name])\n            .values_panic(["Tiramisu".into()])\n            .to_owned();\n\n        manager.exec_stmt(insert).await?;\n\n        Ok(())\n    }\n}\n\n/// Learn more at https://docs.rs/sea-query#iden\n#[derive(Iden)]\npub enum Cake {\n    Table,\n    Id,\n    Name,\n}\n')),(0,r.kt)("h2",{id:"seeding-data-transactionally"},"Seeding Data Transactionally"),(0,r.kt)("p",null,"Starts a transaction and execute SQL inside migration up and down."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::sea_orm::{entity::*, query::*};\n\n// ...\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // Get the connection and start a transaction\n        let db = manager.get_connection();\n        let transaction = db.begin().await?;\n\n        // Insert with the transaction connection\n        cake::ActiveModel {\n            name: Set("Cheesecake".to_owned()),\n            ..Default::default()\n        }\n        .insert(&transaction)\n        .await?;\n\n        // Commit it\n        transaction.commit().await?;\n\n        Ok(())\n    }\n}\n')))}m.isMDXComponent=!0}}]);