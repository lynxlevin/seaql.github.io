"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[878],{5641:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(1308),a=(n(6687),n(5641));const i={},o="Setting Up Migration",l={unversionedId:"migration/setting-up-migration",id:"migration/setting-up-migration",title:"Setting Up Migration",description:"Installing SeaORM X CLI",source:"@site/docs/03-migration/01-setting-up-migration.md",sourceDirName:"03-migration",slug:"/migration/setting-up-migration",permalink:"/preview/pr-119/SeaORM-X/docs/migration/setting-up-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/03-migration/01-setting-up-migration.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712054045,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Connection",permalink:"/preview/pr-119/SeaORM-X/docs/install-and-config/connection"},next:{title:"Running Migration",permalink:"/preview/pr-119/SeaORM-X/docs/migration/running-migration"}},s={},p=[{value:"Installing SeaORM X CLI",id:"installing-seaorm-x-cli",level:2},{value:"Workspace Structure",id:"workspace-structure",level:2},{value:"Migration Crate",id:"migration-crate",level:3},{value:"Entity Crate",id:"entity-crate",level:3},{value:"App Crate",id:"app-crate",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-migration"},"Setting Up Migration"),(0,a.kt)("h2",{id:"installing-seaorm-x-cli"},"Installing SeaORM X CLI"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cargo install --path "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-cli"\n')),(0,a.kt)("h2",{id:"workspace-structure"},"Workspace Structure"),(0,a.kt)("p",null,"It is recommended to structure your cargo workspace as follows to share SeaORM entities between the app crate and the migration crate. Checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm-x/tree/main/sea-orm-x/examples"},"integration examples")," for demonstration."),(0,a.kt)("h3",{id:"migration-crate"},"Migration Crate"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm-migration")," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.kt)("inlineCode",{parentName:"a"},"async-std"))," crate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="migration/Cargo.toml"',title:'"migration/Cargo.toml"'},'[dependencies]\nasync-std = { version = "1", features = ["attributes", "tokio1"] }\n\n[dependencies.sea-orm-migration]\nversion = "0.12"\npath = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration"\nfeatures = [\n  # Enable at least one `ASYNC_RUNTIME` and `DATABASE_DRIVER` feature if you want to run migration via CLI.\n  # View the list of supported features at https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime.\n  # e.g.\n  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` feature\n  # "sqlz-mssql",            # `DATABASE_DRIVER` feature\n]\n')),(0,a.kt)("h3",{id:"entity-crate"},"Entity Crate"),(0,a.kt)("p",null,"Specify SeaORM X dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="entity/Cargo.toml"',title:'"entity/Cargo.toml"'},'[dependencies]\nsea-orm-x = { version = "0.12", path = "<SEA_ORM_X_ROOT>/sea-orm-x" }\n')),(0,a.kt)("h3",{id:"app-crate"},"App Crate"),(0,a.kt)("p",null,"This is where the application logic goes."),(0,a.kt)("p",null,"Create a workspace that contains app, entity and migration crates and import the entity crate into the app crate."),(0,a.kt)("p",null,"If we want to bundle the migration utility as part of your app, you'd also want to import the migration crate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="./Cargo.toml"',title:'"./Cargo.toml"'},'[workspace]\nmembers = [".", "entity", "migration"]\n\n[dependencies]\nentity = { path = "entity" }\nmigration = { path = "migration" } # depends on your needs\n\n[dependencies]\nsea-orm-x = { version = "0.12", path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = [..] }\n')))}m.isMDXComponent=!0}}]);