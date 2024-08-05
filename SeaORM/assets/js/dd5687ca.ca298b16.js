"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[57891],{48859:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(76687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=t(31308),r=(t(76687),t(48859));const i={},o="Enumeration",u={unversionedId:"generate-entity/enumeration",id:"version-0.12.x/generate-entity/enumeration",title:"Enumeration",description:"You can use Rust enums in model where the values are mapped to a database string, integer or native enum.",source:"@site/versioned_docs/version-0.12.x/04-generate-entity/04-enumeration.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/enumeration",permalink:"/SeaORM/docs/0.12.x/generate-entity/enumeration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/04-generate-entity/04-enumeration.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833128,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/0.12.x/generate-entity/expanded-entity-structure"},next:{title:"New Type",permalink:"/SeaORM/docs/0.12.x/generate-entity/newtype"}},l={},m=[{value:"String",id:"string",level:3},{value:"Integers",id:"integers",level:3},{value:"Native Database Enum",id:"native-database-enum",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"1. Custom TYPE statement",id:"1-custom-type-statement",level:4},{value:"2. <code>create_enum_from_active_enum</code>",id:"2-create_enum_from_active_enum",level:4},{value:"Implementations",id:"implementations",level:2},{value:"Using ActiveEnum on Model",id:"using-activeenum-on-model",level:2}],s={toc:m};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumeration"},"Enumeration"),(0,r.kt)("p",null,"You can use Rust enums in model where the values are mapped to a database string, integer or native enum."),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.kt)("h3",{id:"integers"},"Integers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n')),(0,r.kt)("p",null,"Alternatively, you could write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    Black = 0,\n    White = 1,\n}\n')),(0,r.kt)("h2",{id:"native-database-enum"},"Native Database Enum"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"MySQL enum is just part of the column definition, and cannot be reused for different tables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'Table::create()\n    .table(Posts::TableName)\n    .col(\n        ColumnDef::new(Posts::ColumnName)\n            .enumeration(Alias::new("tea"), [Alias::new("EverydayTea"), Alias::new("BreakfastTea")]),\n    )\n\n"CREATE TABLE `table_name` (`column_name` ENUM(\'EverydayTea\', \'BreakfastTea\'))",\n')),(0,r.kt)("h3",{id:"postgres"},"Postgres"),(0,r.kt)("p",null,"If you are using Postgres, the enum has to be created in a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," statement in a migration, you can create it with:"),(0,r.kt)("h4",{id:"1-custom-type-statement"},"1. Custom TYPE statement"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/sea-orm-migration/tests/common/migration/m20220118_000004_create_tea_enum.rs"},"Full example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// run this in migration:\n\nmanager\n    .create_type(\n        // CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')\n        Type::create()\n            .as_enum(Alias::new("tea"))\n            .values([Alias::new("EverydayTea"), Alias::new("BreakfastTea")])\n            .to_owned(),\n    )\n    .await?;\n')),(0,r.kt)("h4",{id:"2-create_enum_from_active_enum"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"create_enum_from_active_enum")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// we can do this in migration:\n\nuse sea_orm::{Schema, DbBackend};\nlet schema = Schema::new(DbBackend::Postgres);\n\nmanager\n    .create_type(\n        // CREATE TYPE \"tea\" AS ENUM ('EverydayTea', 'BreakfastTea')\n        schema.create_enum_from_active_enum::<Tea>(),\n    )\n    .await?;\n")),(0,r.kt)("h2",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"You can implement ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.ActiveEnum.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," by using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/derive.DeriveActiveEnum.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," macro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(\n    rs_type = "String",\n    db_type = "String(Some(1))",\n    enum_name = "category"\n)]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"For illustration purpose, this is roughly what the macro implements:"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter)]\npub enum Category {\n    Big,\n    Small,\n}\n\n// Implementing manually\nimpl ActiveEnum for Category {\n    // The macro attribute `rs_type` is being pasted here\n    type Value = String;\n\n    // By default, the name of Rust enum in camel case if `enum_name` was not provided explicitly\n    fn name() -> String {\n        "category".to_owned()\n    }\n\n    // Map Rust enum variants to corresponding `num_value` or `string_value`\n    fn to_value(&self) -> Self::Value {\n        match self {\n            Self::Big => "B",\n            Self::Small => "S",\n        }\n        .to_owned()\n    }\n\n    // Map `num_value` or `string_value` to corresponding Rust enum variants\n    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {\n        match v.as_ref() {\n            "B" => Ok(Self::Big),\n            "S" => Ok(Self::Small),\n            _ => Err(DbErr::Type(format!(\n                "unexpected value for Category enum: {}",\n                v\n            ))),\n        }\n    }\n\n    // The macro attribute `db_type` is being pasted here\n    fn db_type() -> ColumnDef {\n        ColumnType::String(Some(1)).def()\n    }\n}\n')))),(0,r.kt)("h2",{id:"using-activeenum-on-model"},"Using ActiveEnum on Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// Define the `Category` active enum\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // Represents a db column using `Category` active enum\n    pub category: Category,\n    pub category_opt: Option<Category>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')))}p.isMDXComponent=!0}}]);