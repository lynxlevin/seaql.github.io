"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[33202],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,_=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(_,s(s({ref:t},u),{},{components:n})):a.createElement(_,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=n(31308),r=(n(76687),n(48859));const i={},s="Create Enum",m={unversionedId:"generate-database-schema/create-enum",id:"version-0.7.x/generate-database-schema/create-enum",title:"Create Enum",description:"You can generate SQL statement to create database tables with enum columns via the Schema helper struct.",source:"@site/versioned_docs/version-0.7.x/04-generate-database-schema/02-create-enum.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-enum",permalink:"/preview/pr-125/SeaORM/docs/0.7.x/generate-database-schema/create-enum",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/04-generate-database-schema/02-create-enum.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719218483,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Table",permalink:"/preview/pr-125/SeaORM/docs/0.7.x/generate-database-schema/create-table"},next:{title:"Create Index",permalink:"/preview/pr-125/SeaORM/docs/0.7.x/generate-database-schema/create-index"}},o={},l=[{value:"String &amp; Integer Enum",id:"string--integer-enum",level:2},{value:"Native Database Enum",id:"native-database-enum",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"MySQL",id:"mysql",level:3},{value:"SQLite",id:"sqlite",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-enum"},"Create Enum"),(0,r.kt)("p",null,"You can generate SQL statement to create database tables with enum columns via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," helper struct."),(0,r.kt)("h2",{id:"string--integer-enum"},"String & Integer Enum"),(0,r.kt)("p",null,"This is just an ordinary string / integer column in database table that maps to Rust enum, you can simply use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," method to construct a table create statement just like in the previous section."),(0,r.kt)("p",null,"Defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," and enums."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod active_enum {\n    use sea_orm::entity::prelude::*;\n    \n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(schema_name = "public", table_name = "active_enum")]\n    pub struct Model {\n        #[sea_orm(primary_key)]\n        pub id: i32,\n        pub category: Option<Category>,\n        pub color: Option<Color>,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\n    pub enum Category {\n        #[sea_orm(string_value = "B")]\n        Big,\n        #[sea_orm(string_value = "S")]\n        Small,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "i32", db_type = "Integer")]\n    pub enum Color {\n        #[sea_orm(num_value = 0)]\n        Black,\n        #[sea_orm(num_value = 1)]\n        White,\n    }\n    \n    #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\n    pub enum Relation {}\n    \n    impl ActiveModelBehavior for ActiveModel {}\n}\n')),(0,r.kt)("p",null,"Generating ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{sea_query, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(active_enum::Entity)),\n    builder.build(\n        &sea_query::Table::create()\n            .table(active_enum::Entity.table_ref())\n            .col(\n                sea_query::ColumnDef::new(active_enum::Column::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(sea_query::ColumnDef::new(active_enum::Column::Category).string_len(1))\n            .col(sea_query::ColumnDef::new(active_enum::Column::Color).integer())\n            .to_owned()\n    )\n);\n")),(0,r.kt)("h2",{id:"native-database-enum"},"Native Database Enum"),(0,r.kt)("p",null,"The enum support are different across databases. We will explain the creation of native database enum for each databases one by one."),(0,r.kt)("p",null,"Defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," and enums."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod active_enum {\n    use sea_orm::entity::prelude::*;\n    \n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(schema_name = "public", table_name = "active_enum")]\n    pub struct Model {\n        #[sea_orm(primary_key)]\n        pub id: i32,\n        pub tea: Option<Tea>,\n    }\n    \n    #[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n    #[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\n    pub enum Tea {\n        #[sea_orm(string_value = "EverydayTea")]\n        EverydayTea,\n        #[sea_orm(string_value = "BreakfastTea")]\n        BreakfastTea,\n    }\n    \n    #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\n    pub enum Relation {}\n    \n    impl ActiveModelBehavior for ActiveModel {}\n}\n')),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"Enum in PostgreSQL is defined as a custom type, it can be created from an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_enum_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_enum_from_entity"))," method."),(0,r.kt)("p",null,"You can also create it directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveEnum")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_enum_from_active_enum"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_enum_from_active_enum"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    schema\n        .create_enum_from_entity(active_enum::Entity)\n        .iter()\n        .map(|stmt| db_postgres.build(stmt))\n        .collect::<Vec<_>>(),\n    vec![Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    ),]\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_enum_from_active_enum::<Tea>()),\n    Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    )\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_postgres,\n        vec![\n            r#"CREATE TABLE "public"."active_enum" ("#,\n            r#""id" serial NOT NULL PRIMARY KEY,"#,\n            r#""tea" tea"#,\n            r#")"#,\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"In MySQL, enum is defined on table creation so you only need the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_mysql,\n        vec![\n            "CREATE TABLE `active_enum` (",\n            "`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,",\n            "`tea` ENUM(\'EverydayTea\', \'BreakfastTea\')",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.kt)("h3",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"Enum is not supported in SQLite so it will be stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"TEXT")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_sqlite,\n        vec![\n            "CREATE TABLE `active_enum` (",\n            "`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,",\n            "`tea` text",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')))}c.isMDXComponent=!0}}]);