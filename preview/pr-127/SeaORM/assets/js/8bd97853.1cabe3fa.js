"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[66566],{48859:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=m(n),u=r,d=g["".concat(p,".").concat(u)]||g[u]||c[u]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(31308),r=(n(76687),n(48859));const i={},o="Running Migration",l={unversionedId:"migration/running-migration",id:"version-0.6.x/migration/running-migration",title:"Running Migration",description:"After you have defined the migrations, you can apply or revert migrations in console or on application startup.",source:"@site/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",sourceDirName:"05-migration",slug:"/migration/running-migration",permalink:"/preview/pr-127/SeaORM/docs/0.6.x/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721788953,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Migration",permalink:"/preview/pr-127/SeaORM/docs/0.6.x/migration/writing-migration"},next:{title:"Select",permalink:"/preview/pr-127/SeaORM/docs/0.6.x/basic-crud/select"}},p={},m=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",level:2},{value:"Via <code>sea-orm-cli</code>",id:"via-sea-orm-cli",level:3},{value:"Via SeaSchema Migrator CLI",id:"via-seaschema-migrator-cli",level:3},{value:"Migrating Programmatically",id:"migrating-programmatically",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-migration"},"Running Migration"),(0,r.kt)("p",null,"After you have defined the migrations, you can apply or revert migrations in console or on application startup."),(0,r.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,r.kt)("p",null,"Running migration manually in console. You should set ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, follow the instruction ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli#configure-environment"},"here")," to configure it."),(0,r.kt)("p",null,"Supported commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init"),": Initialize migration directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"up"),": Apply all pending migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"up -n 10"),": Apply 10 pending migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"down"),": Rollback last applied migration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"down -n 10"),": Rollback last 10 applied migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": Check the status of all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fresh"),": Drop all tables from the database, then reapply all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh"),": Rollback all applied migrations, then reapply all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reset"),": Rollback all applied migrations")),(0,r.kt)("h3",{id:"via-sea-orm-cli"},"Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"sea-orm-cli")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run --manifest-path ./migration/Cargo.toml -- COMMAND")," under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND\n")),(0,r.kt)("p",null,"You can customize the manifest path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND -d ./other/migration/dir\n")),(0,r.kt)("h3",{id:"via-seaschema-migrator-cli"},"Via SeaSchema Migrator CLI"),(0,r.kt)("p",null,"Runs migrator CLI defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"migration/main.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd migration\n$ cargo run -- COMMAND\n")),(0,r.kt)("h2",{id:"migrating-programmatically"},"Migrating Programmatically"),(0,r.kt)("p",null,"Performs migration on application startup with ",(0,r.kt)("inlineCode",{parentName:"p"},"Migrator"),", given that it implements ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/migrator/trait.MigratorTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"MigratorTrait")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\n/// Apply all pending migrations\nMigrator::up(db, None).await?;\n\n/// Apply 10 pending migrations\nMigrator::up(db, Some(10)).await?;\n\n/// Rollback last applied migrations\nMigrator::down(db, None).await?;\n\n/// Rollback last 10 applied migrations\nMigrator::down(db, Some(10)).await?;\n\n/// Check the status of all migrations\nMigrator::status(db).await?;\n\n/// Drop all tables from the database, then reapply all migrations\nMigrator::fresh(db).await?;\n\n/// Rollback all applied migrations, then reapply all migrations\nMigrator::refresh(db).await?;\n\n/// Rollback all applied migrations\nMigrator::reset(db).await?;\n")))}c.isMDXComponent=!0}}]);