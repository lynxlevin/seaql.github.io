"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[94878],{48859:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(31308),r=(n(76687),n(48859));const i={},o="Setting Up Migration",l={unversionedId:"migration/setting-up-migration",id:"migration/setting-up-migration",title:"Setting Up Migration",description:"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our SeaQL Community Survey? This is essential for the continued development and maintenance of SeaORM.",source:"@site/docs/03-migration/01-setting-up-migration.md",sourceDirName:"03-migration",slug:"/migration/setting-up-migration",permalink:"/preview/pr-127/SeaORM/docs/next/migration/setting-up-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/03-migration/01-setting-up-migration.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1723173973,formattedLastUpdatedAt:"Aug 9, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debug Log",permalink:"/preview/pr-127/SeaORM/docs/next/install-and-config/debug-log"},next:{title:"Writing Migration",permalink:"/preview/pr-127/SeaORM/docs/next/migration/writing-migration"}},s={},p=[{value:"Migration Table",id:"migration-table",level:2},{value:"Creating Migration Directory",id:"creating-migration-directory",level:2},{value:"Workspace Structure",id:"workspace-structure",level:2},{value:"Migration Crate",id:"migration-crate",level:3},{value:"Entity Crate",id:"entity-crate",level:3},{value:"App Crate",id:"app-crate",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-migration"},"Setting Up Migration"),(0,r.kt)("admonition",{title:"We need your help! \ud83d\udcdd",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"SeaQL Community Survey"),"? This is essential for the continued development and maintenance of SeaORM.")),(0,r.kt)("p",null,"If you are starting from a fresh database, it's better to version control your database schema. SeaORM ships with a migration tool, allowing you to write migrations in SeaQuery or SQL."),(0,r.kt)("p",null,"If you already have a database with tables and data, you can skip this chapter and move on to ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/sea-orm-cli"},"generating SeaORM entities"),"."),(0,r.kt)("h2",{id:"migration-table"},"Migration Table"),(0,r.kt)("p",null,"A table will be created in your database to keep track of the applied migrations. It will be created automatically when you run the migration."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"By default, it will be named `seaql_migrations`. You can also use a custom name for your migration table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[async_trait::async_trait]\nimpl MigratorTrait for Migrator {\n    // Override the name of migration table\n    fn migration_table_name() -> sea_orm::DynIden {\n        Alias::new("override_migration_table_name").into_iden()\n    }\n    ..\n}\n'))),(0,r.kt)("h2",{id:"creating-migration-directory"},"Creating Migration Directory"),(0,r.kt)("p",null,"First, install ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install sea-orm-cli@1.0.0-rc.5\n")),(0,r.kt)("admonition",{title:"SQL Server (MSSQL) backend",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The installation of ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with MSSQL support can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/docs/migration/setting-up-migration/"},"here"),".")),(0,r.kt)("p",null,"Then, setup the migration directory by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate init"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Setup the migration directory in `./migration`\n$ sea-orm-cli migrate init\nInitializing migration directory...\nCreating file `./migration/src/lib.rs`\nCreating file `./migration/src/m20220101_000001_create_table.rs`\nCreating file `./migration/src/main.rs`\nCreating file `./migration/Cargo.toml`\nCreating file `./migration/README.md`\nDone!\n\n# If you want to setup the migration directory in else where\n$ sea-orm-cli migrate init -d ./other/migration/dir\n")),(0,r.kt)("p",null,"You should have a migration directory with a structure like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"migration\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs                              # Migrator API, for integration\n    \u251c\u2500\u2500 m20220101_000001_create_table.rs    # A sample migration file\n    \u2514\u2500\u2500 main.rs                             # Migrator CLI, for running manually\n")),(0,r.kt)("p",null,"Note that if you setup the migration directory directly within a Git repository, a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file will also be created."),(0,r.kt)("h2",{id:"workspace-structure"},"Workspace Structure"),(0,r.kt)("p",null,"It is recommended to structure your cargo workspace as follows to share SeaORM entities between the app crate and the migration crate. Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples"},"integration examples")," for demonstration."),(0,r.kt)("h3",{id:"migration-crate"},"Migration Crate"),(0,r.kt)("p",null,"Import the ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/sea-orm-migration"},(0,r.kt)("inlineCode",{parentName:"a"},"sea-orm-migration"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,r.kt)("inlineCode",{parentName:"a"},"async-std"))," crate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="migration/Cargo.toml"',title:'"migration/Cargo.toml"'},'[dependencies]\nasync-std = { version = "1", features = ["attributes", "tokio1"] }\n\n[dependencies.sea-orm-migration]\nversion = "1.0.0-rc.5"\nfeatures = [\n  # Enable at least one `ASYNC_RUNTIME` and `DATABASE_DRIVER` feature if you want to run migration via CLI.\n  # View the list of supported features at https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime.\n  # e.g.\n  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` feature\n  # "sqlx-postgres",         # `DATABASE_DRIVER` feature\n]\n')),(0,r.kt)("p",null,"Let's write a migration. Detailed instructions in the next section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220120_000001_create_post_table.rs"',title:'"migration/src/m20220120_000001_create_post_table.rs"'},"use sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // Replace the sample below with your own migration scripts\n        todo!();\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // Replace the sample below with your own migration scripts\n        todo!();\n    }\n}\n")),(0,r.kt)("h3",{id:"entity-crate"},"Entity Crate"),(0,r.kt)("p",null,"Create an entity crate in your root workspace."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"You don't have SeaORM entities defined?"),(0,r.kt)("p",null,"You can create an entity crate without any entity files. Then, write the migration and run it to create tables in the database. Finally, ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-127/SeaORM/docs/next/generate-entity/sea-orm-cli"},"generate SeaORM entities")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," and output the entity files to ",(0,r.kt)("inlineCode",{parentName:"p"},"entity/src/entities")," folder."),(0,r.kt)("p",null,"After generating the entity files, you can re-export the generated entities by adding following lines in ",(0,r.kt)("inlineCode",{parentName:"p"},"entity/src/lib.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"mod entities;\npub use entities::*;\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entity\n\u251c\u2500\u2500 Cargo.toml      # Include SeaORM dependency\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs      # Re-export SeaORM and entities\n    \u2514\u2500\u2500 post.rs     # Define the `post` entity\n")),(0,r.kt)("p",null,"Specify SeaORM dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="entity/Cargo.toml"',title:'"entity/Cargo.toml"'},'[dependencies]\nsea-orm = { version = "1.0.0-rc.5" }\n')),(0,r.kt)("h3",{id:"app-crate"},"App Crate"),(0,r.kt)("p",null,"This is where the application logic goes."),(0,r.kt)("p",null,"Create a workspace that contains app, entity and migration crates and import the entity crate into the app crate."),(0,r.kt)("p",null,"If we want to bundle the migration utility as part of your app, you'd also want to import the migration crate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="./Cargo.toml"',title:'"./Cargo.toml"'},'[workspace]\nmembers = [".", "entity", "migration"]\n\n[dependencies]\nentity = { path = "entity" }\nmigration = { path = "migration" } # depends on your needs\n\n[dependencies]\nsea-orm = { version = "1.0.0-rc.5", features = [..] }\n')),(0,r.kt)("p",null,"In your app, you can then run the migrator on startup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\nlet connection = sea_orm::Database::connect(&database_url).await?;\nMigrator::up(&connection, None).await?;\n")))}c.isMDXComponent=!0}}]);