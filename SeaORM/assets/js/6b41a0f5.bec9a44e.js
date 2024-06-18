"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[39693],{48859:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(31308),r=(n(76687),n(48859));const i={},l="Enumeration",s={unversionedId:"generate-entity/enumeration",id:"generate-entity/enumeration",title:"Enumeration",description:"You can use Rust enums in model where the values are mapped to a database string, integer or native enum.",source:"@site/docs/04-generate-entity/04-enumeration.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/enumeration",permalink:"/SeaORM/docs/next/generate-entity/enumeration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-generate-entity/04-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1718711178,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},next:{title:"New Type",permalink:"/SeaORM/docs/next/generate-entity/newtype"}},o={},u=[{value:"String",id:"string",level:3},{value:"Manual string values",id:"manual-string-values",level:4},{value:"Derived string values from variants",id:"derived-string-values-from-variants",level:4},{value:"Integers",id:"integers",level:3},{value:"Native Database Enum",id:"native-database-enum",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"1. <code>TYPE</code> statement",id:"1-type-statement",level:4},{value:"2. <code>create_enum_from_active_enum</code>",id:"2-create_enum_from_active_enum",level:4},{value:"Implementations",id:"implementations",level:2},{value:"Using ActiveEnum on Model",id:"using-activeenum-on-model",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumeration"},"Enumeration"),(0,r.kt)("p",null,"You can use Rust enums in model where the values are mapped to a database string, integer or native enum."),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"For string enums, in addition to being able to specify the string value for each variant, you can also specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"rename_all")," attribute on the Enum if all the values should have string values based on case-transformations."),(0,r.kt)("h4",{id:"manual-string-values"},"Manual string values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.kt)("h4",{id:"derived-string-values-from-variants"},"Derived string values from variants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)")]\npub enum Category {\n    #[sea_orm(string_value = "bigTask")]\n    BigTask,\n    #[sea_orm(string_value = "smallBreak")]\n    SmallWork,\n}\n')),(0,r.kt)("p",null,"The above is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)", rename_all = "camelCase")]\npub enum Category {\n    BigTask,\n    SmallWork,\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"You can find a list of valid values for the `rename_all` attribute here"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"camelCase"),(0,r.kt)("li",{parentName:"ul"},"kebab-case"),(0,r.kt)("li",{parentName:"ul"},"mixed_case"),(0,r.kt)("li",{parentName:"ul"},"SCREAMING_SNAKE_CASE"),(0,r.kt)("li",{parentName:"ul"},"snake_case"),(0,r.kt)("li",{parentName:"ul"},"title_case"),(0,r.kt)("li",{parentName:"ul"},"UPPERCASE"),(0,r.kt)("li",{parentName:"ul"},"lowercase"),(0,r.kt)("li",{parentName:"ul"},"SCREAMING-KEBAB-CASE"),(0,r.kt)("li",{parentName:"ul"},"PascalCase"))),(0,r.kt)("h3",{id:"integers"},"Integers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n')),(0,r.kt)("p",null,"Alternatively, you could write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    Black = 0,\n    White = 1,\n}\n')),(0,r.kt)("h2",{id:"native-database-enum"},"Native Database Enum"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"MySQL enum is just part of the column definition, and cannot be reused for different tables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'Table::create()\n    .table(Posts::TableName)\n    .col(\n        ColumnDef::new(Posts::ColumnName)\n            .enumeration(Alias::new("tea"), [Alias::new("EverydayTea"), Alias::new("BreakfastTea")]),\n    )\n\n"CREATE TABLE `table_name` (`column_name` ENUM(\'EverydayTea\', \'BreakfastTea\'))",\n')),(0,r.kt)("h3",{id:"postgres"},"Postgres"),(0,r.kt)("p",null,"If you are using Postgres, the enum has to be created in a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," statement in a migration, you can create it with:"),(0,r.kt)("h4",{id:"1-type-statement"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"TYPE")," statement"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/sea-orm-migration/tests/common/migration/m20220118_000004_create_tea_enum.rs"},"Full example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// run this in migration:\n\nmanager\n    .create_type(\n        // CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')\n        Type::create()\n            .as_enum(Alias::new("tea"))\n            .values([Alias::new("EverydayTea"), Alias::new("BreakfastTea")])\n            .to_owned(),\n    )\n    .await?;\n')),(0,r.kt)("h4",{id:"2-create_enum_from_active_enum"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"create_enum_from_active_enum")),(0,r.kt)("p",null,"This method will provide an interface for adding the type to the database, using the type for table columns, and adding values of this type to rows when seeding data. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define an ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveEnum"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea_type")]\npub enum TeaType {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create the type in the database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{Schema, DbBackend};\n\n// in a migration:\nlet schema = Schema::new(DbBackend::Postgres);\n\nmanager\n    .create_type(\n        // CREATE TYPE \"tea_type\" AS ENUM ('EverydayTea', 'BreakfastTea')\n        schema.create_enum_from_active_enum::<TeaType>(),\n    )\n    .await?;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use the type as a table column type when creating a table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"diff",diff:!0},"// in a migration:\n\nmanager::create()\n    .table(Tea::Table)\n    .if_not_exists()\n    .col(Column::new(Tea::Type).custom(TeaType::name())) // use the type for a table column \n    // ... more columns\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"see also ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/writing-migration/#schema-creation-methods"},"Schema Creation Methods - Create Table"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Use the type when populating the database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// in a migration\n\nlet insert = Query::insert()\n    .into_table(Tea::Table)\n    .columns([Tea::TeaType])\n    .values_panic([TeaType::EverydayTea.as_enum()]) // call `as_enum` to convert the variant into a SimpleExpr\n    .to_owned();\n\nmanager.exec_stmt(insert).await?;\n// ...\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"see also ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/seeding-data/#:~:text=write%20SeaQuery%20statement%20to%20seed%20the%20table"},"Seeding Data - with sea_query statement"))),(0,r.kt)("h2",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"You can implement ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.ActiveEnum.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," by using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/derive.DeriveActiveEnum.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," macro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(\n    rs_type = "String",\n    db_type = "String(StringLen::N(1))",\n    enum_name = "category"\n)]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"For illustration purpose, this is roughly what the macro implements:"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Debug, PartialEq, Eq, EnumIter)]\npub enum Category {\n    Big,\n    Small,\n}\n\n// Implementing manually\nimpl ActiveEnum for Category {\n    // The macro attribute `rs_type` is being pasted here\n    type Value = String;\n\n    // By default, the name of Rust enum in camel case if `enum_name` was not provided explicitly\n    fn name() -> String {\n        "category".to_owned()\n    }\n\n    // Map Rust enum variants to corresponding `num_value` or `string_value`\n    fn to_value(&self) -> Self::Value {\n        match self {\n            Self::Big => "B",\n            Self::Small => "S",\n        }\n        .to_owned()\n    }\n\n    // Map `num_value` or `string_value` to corresponding Rust enum variants\n    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {\n        match v.as_ref() {\n            "B" => Ok(Self::Big),\n            "S" => Ok(Self::Small),\n            _ => Err(DbErr::Type(format!(\n                "unexpected value for Category enum: {}",\n                v\n            ))),\n        }\n    }\n\n    // The macro attribute `db_type` is being pasted here\n    fn db_type() -> ColumnDef {\n        ColumnType::String(Some(1)).def()\n    }\n}\n')))),(0,r.kt)("h2",{id:"using-activeenum-on-model"},"Using ActiveEnum on Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// Define the `Category` active enum\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // Represents a db column using `Category` active enum\n    pub category: Category,\n    pub category_opt: Option<Category>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')))}p.isMDXComponent=!0}}]);