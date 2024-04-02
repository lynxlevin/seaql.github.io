"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[27300],{48859:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(76687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=m(a),u=r,d=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(31308),r=(a(76687),a(48859));const i={},o="Writing Migration",l={unversionedId:"migration/writing-migration",id:"version-0.10.x/migration/writing-migration",title:"Writing Migration",description:"Each migration contains two methods: up and down. The up method is used to alter the database schema, such as adding new tables, columns or indexes, while the down method revert the actions performed in the up method.",source:"@site/versioned_docs/version-0.10.x/03-migration/02-writing-migration.md",sourceDirName:"03-migration",slug:"/migration/writing-migration",permalink:"/preview/pr-118/SeaORM/docs/0.10.x/migration/writing-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/03-migration/02-writing-migration.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712040915,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Migration",permalink:"/preview/pr-118/SeaORM/docs/0.10.x/migration/setting-up-migration"},next:{title:"Running Migration",permalink:"/preview/pr-118/SeaORM/docs/0.10.x/migration/running-migration"}},s={},m=[{value:"Creating Migrations",id:"creating-migrations",level:2},{value:"Defining Migration",id:"defining-migration",level:2},{value:"SeaQuery",id:"seaquery",level:3},{value:"Schema Creation Methods",id:"schema-creation-methods",level:4},{value:"Schema Mutation Methods",id:"schema-mutation-methods",level:4},{value:"Schema Inspection Methods",id:"schema-inspection-methods",level:4},{value:"Raw SQL",id:"raw-sql",level:3},{value:"Schema first or Entity first?",id:"schema-first-or-entity-first",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-migration"},"Writing Migration"),(0,r.kt)("p",null,"Each migration contains two methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"down"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method is used to alter the database schema, such as adding new tables, columns or indexes, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method revert the actions performed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,r.kt)("h2",{id:"creating-migrations"},"Creating Migrations"),(0,r.kt)("p",null,"Generate a new migration file by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate generate")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sea-orm-cli migrate generate NAME_OF_MIGRATION [--universal-time]\n\n# E.g. to generate `migration/src/m20220101_000001_create_table.rs` shown below\nsea-orm-cli migrate generate create_table\nsea-orm-cli migrate generate create_table --universal-time  # generates filename in Utc time (recommended)\n")),(0,r.kt)("p",null,"Or you can create a migration file using the template below. Name the file according to the naming convention ",(0,r.kt)("inlineCode",{parentName:"p"},"mYYYYMMDD_HHMMSS_migration_name.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220101_000001_create_table.rs"',title:'"migration/src/m20220101_000001_create_table.rs"'},"use sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n")),(0,r.kt)("p",null,"Additionally, you have to include the new migration in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html#tymethod.migrations"},(0,r.kt)("inlineCode",{parentName:"a"},"MigratorTrait::migrations"))," method. Note that the migrations should be sorted in chronological order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/lib.rs"',title:'"migration/src/lib.rs"'},"pub use sea_orm_migration::*;\n\nmod m20220101_000001_create_table;\n\npub struct Migrator;\n\n#[async_trait::async_trait]\nimpl MigratorTrait for Migrator {\n    fn migrations() -> Vec<Box<dyn MigrationTrait>> {\n        vec![\n            Box::new(m20220101_000001_create_table::Migration),\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"defining-migration"},"Defining Migration"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/*/sea_orm_migration/manager/struct.SchemaManager.html"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaManager"))," for API reference."),(0,r.kt)("h3",{id:"seaquery"},"SeaQuery"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query#table-create"},"here")," to take a quick tour of SeaQuery's DDL statements."),(0,r.kt)("p",null,"You would need ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query#iden"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::Iden"))," to define identifiers that will be used in your migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Iden)]\nenum Post {\n    Table,\n    Id,\n    Title,\n    #[iden = "text"] // Renaming the identifier\n    Text,\n}\n\nassert_eq!(Post::Table.to_string(), "post");\nassert_eq!(Post::Id.to_string(), "id");\nassert_eq!(Post::Title.to_string(), "title");\nassert_eq!(Post::Text.to_string(), "text");\n')),(0,r.kt)("h4",{id:"schema-creation-methods"},"Schema Creation Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Table",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager\n    .create_table(\n        sea_query::Table::create()\n            .table(Post::Table)\n            .if_not_exists()\n            .col(\n                ColumnDef::new(Post::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key()\n            )\n            .col(ColumnDef::new(Post::Title).string().not_null())\n            .col(ColumnDef::new(Post::Text).string().not_null())\n            .to_owned()\n    )\n"))),(0,r.kt)("li",{parentName:"ul"},"Create Index",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_index(sea_query::Index::create())\n"))),(0,r.kt)("li",{parentName:"ul"},"Create Foreign Key",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_foreign_key(sea_query::ForeignKey::create())\n"))),(0,r.kt)("li",{parentName:"ul"},"Create Data Type (PostgreSQL only)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_type(sea_query::Type::create())\n")))),(0,r.kt)("h4",{id:"schema-mutation-methods"},"Schema Mutation Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use entity::post;\n\nmanager\n    .drop_table(\n        sea_query::Table::drop()\n            .table(Post::Table)\n            .to_owned()\n    )\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alter Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_table(sea_query::Table::alter())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rename Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.rename_table(sea_query::Table::rename())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Truncate Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.truncate_table(sea_query::Table::truncate())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Index"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_index(sea_query::Index::drop())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Foreign Key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_foreign_key(sea_query::ForeignKey::drop())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alter Data Type (PostgreSQL only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_type(sea_query::Type::alter())\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Data Type (PostgreSQL only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_type(sea_query::extension::postgres::Type())\n")))),(0,r.kt)("h4",{id:"schema-inspection-methods"},"Schema Inspection Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Has Table",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_table(table_name)\n"))),(0,r.kt)("li",{parentName:"ul"},"Has Column",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_column(table_name, column_name)\n")))),(0,r.kt)("h3",{id:"raw-sql"},"Raw SQL"),(0,r.kt)("p",null,"You can write migration files in raw SQL, but then you lost the multi-backend compatibility SeaQuery offers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220101_000001_create_table.rs"',title:'"migration/src/m20220101_000001_create_table.rs"'},'use sea_orm::Statement;\nuse sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let sql = r#"\n        CREATE TABLE `cake` (\n            `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,\n            `name` varchar(255) NOT NULL\n        )"#;\n        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());\n        manager.get_connection().execute(stmt).await.map(|_| ())\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let sql = "DROP TABLE `cake`";\n        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());\n        manager.get_connection().execute(stmt).await.map(|_| ())\n    }\n}\n')),(0,r.kt)("h2",{id:"schema-first-or-entity-first"},"Schema first or Entity first?"),(0,r.kt)("p",null,"In the grand scheme of things, we recommend a schema first approach: you write migrations first and then generate entities from a live database."),(0,r.kt)("p",null,"At times, you might want to use the ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-118/SeaORM/docs/0.10.x/generate-sea-query-statement/create-table"},(0,r.kt)("inlineCode",{parentName:"a"},"create_*_from_entity"))," methods to bootstrap your database with several hand written entity files."),(0,r.kt)("p",null,"That's perfectly fine if you intend to never change the entity schema. Or, you can keep the original entity and embed a copy in the migration file."))}c.isMDXComponent=!0}}]);