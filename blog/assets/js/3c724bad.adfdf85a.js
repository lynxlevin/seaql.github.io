"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9328],{9680:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(1308),r=(a(6687),a(9680));const i={slug:"2024-08-04-sea-orm-1.0",title:"Announcing SeaORM 1.0 \ud83d\udc1a",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",image:"https://www.sea-ql.org/blog/img/SeaORM%201.0%20Banner.png",tags:["news"]},o=void 0,l={permalink:"/blog/2024-08-04-sea-orm-1.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-08-04-sea-orm-1.0.md",source:"@site/blog/2024-08-04-sea-orm-1.0.md",title:"Announcing SeaORM 1.0 \ud83d\udc1a",description:"\ud83c\udf89 We are pleased to release SeaORM 1.0 today! This is an special occasion for us, so this blog post will be a little more than a release notes.",date:"2024-08-04T00:00:00.000Z",formattedDate:"August 4, 2024",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:9.025,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/blog/img/SeaQL.png"}],frontMatter:{slug:"2024-08-04-sea-orm-1.0",title:"Announcing SeaORM 1.0 \ud83d\udc1a",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",image:"https://www.sea-ql.org/blog/img/SeaORM%201.0%20Banner.png",tags:["news"]},nextItem:{title:"Adding GraphQL Support to Loco with Seaography",permalink:"/blog/2024-07-01-graphql-support-with-loco-seaography"}},s={authorsImageUrls:[void 0]},m=[{value:"Our Journey",id:"our-journey",level:2},{value:"New Features",id:"new-features",level:2},{value:"Refreshed migration schema definition",id:"refreshed-migration-schema-definition",level:3},{value:"Reworked SQLite Type Mappings",id:"reworked-sqlite-type-mappings",level:3},{value:"Introduce <code>PrimaryKeyArity</code> with <code>ARITY</code> Constant",id:"introduce-primarykeyarity-with-arity-constant",level:3},{value:"Auto Generated ActiveEnum String Values and Model Column Names",id:"auto-generated-activeenum-string-values-and-model-column-names",level:3},{value:"Other Enhancements",id:"other-enhancements",level:3},{value:"Release Planning",id:"release-planning",level:2},{value:"Our Future",id:"our-future",level:2},{value:"SQL Server Support",id:"sql-server-support",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Gold Sponsors",id:"gold-sponsors",level:3},{value:"GitHub Sponsors",id:"github-sponsors",level:3},{value:"Rustacean Sticker Pack \ud83e\udd80",id:"rustacean-sticker-pack-",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{alt:"SeaORM 1.0 Banner",src:"/blog/img/SeaORM%201.0%20Banner.png"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/1.0"},"SeaORM 1.0")," today! This is an special occasion for us, so this blog post will be a little more than a release notes."),(0,r.kt)("h2",{id:"our-journey"},"Our Journey"),(0,r.kt)("p",null,"It's nearly been three years since our ",(0,r.kt)("a",{parentName:"p",href:"/blog/2021-09-20-introducing-sea-orm/"},"SeaORM 0.2")," release. At that time, we set out to build a SQL ORM for the async Rust ecosystem, bringing together the best crates to allow developers to build high-performance and robust web services. "),(0,r.kt)("p",null,"We would like to thank all early-adoptors, contributors and sponsors of SeaORM. Thank you to all our users for your trust and for being a part of our journey."),(0,r.kt)("p",null,"Today, many startups and companies are building applications in Rust, with SeaORM being an integral part of the stack. We are particularly pleased to see application frameworks, such as ",(0,r.kt)("a",{parentName:"p",href:"https://loco.rs/"},"Loco"),", that provide tight integration with SeaORM, thereby offering a streamlined developer experience."),(0,r.kt)("p",null,"I think we've achieved our initial goal! We understand that maturity and stability are important considerations for teams when making technology choices. Therefore, we believe it's now time to stabilize SeaORM."),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("p",null,"Here are the highlights of some new features and enhancements introduced in SeaORM 1.0."),(0,r.kt)("h3",{id:"refreshed-migration-schema-definition"},"Refreshed migration schema definition"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/2099"},"#2099")," Thanks to the clever design made by Loco, we've refreshed the schema definition syntax."),(0,r.kt)("p",null,"An old migration script looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table(\n                Table::create()\n                    .table(Users::Table)\n                    .if_not_exists()\n                    .col(\n                        ColumnDef::new(Users::Id)\n                            .integer()\n                            .not_null()\n                            .auto_increment()\n                            .primary_key(),\n                    )\n                    .col(ColumnDef::new(Users::Pid).uuid().not_null())\n                    .col(ColumnDef::new(Users::Email).string().not_null().unique_key())\n                    // ...\n    }\n}\n")),(0,r.kt)("p",null,"Now, using the new schema helpers, you can define the schema with a simplified syntax!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Remember to import `sea_orm_migration::schema::*`\nuse sea_orm_migration::{prelude::*, schema::*};\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table(\n                Table::create()\n                    .table(Users::Table)\n                    .if_not_exists()\n                    .col(pk_auto(Users::Id)) // Primary key with auto-increment\n                    .col(uuid(Users::Pid)) // UUID column\n                    .col(string_uniq(Users::Email)) // String column with unique and not null constraint\n                    .col(string(Users::Password)) // String column\n                    .col(string(Users::ApiKey).unique_key())\n                    .col(string(Users::Name))\n                    .col(string_null(Users::ResetToken)) // Nullable string column\n                    .col(timestamp_null(Users::ResetSentAt)) // Nullable timestamp column\n                    .col(string_null(Users::EmailVerificationToken))\n                    .col(timestamp_null(Users::EmailVerificationSentAt))\n                    .col(timestamp_null(Users::EmailVerifiedAt))\n                    .to_owned(),\n            )\n            .await\n    }\n\n    // ...\n}\n")),(0,r.kt)("p",null,"There are three variants for each commonly used column type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<COLUMN_TYPE>()")," helper function, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"string()"),", define a non-null string column"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<COLUMN_TYPE>_null()")," helper function, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"string_null()"),", define a nullable string column"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<COLUMN_TYPE>_uniq()")," helper function, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"string_uniq()"),", define a non-null and unique string column")),(0,r.kt)("p",null,"The new schema helpers can be used by importing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea_orm_migration::schema::*"),". The migration library is fully backward compatible, so there is no rush to migrate old scripts. The new syntax is recommended for new scripts, and all examples in the SeaORM repository have been updated for demonstration. For advanced use cases, the old SeaQuery syntax can still be used."),(0,r.kt)("h3",{id:"reworked-sqlite-type-mappings"},"Reworked SQLite Type Mappings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/2077"},"sea-orm#2077")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/735"},"sea-query#735")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema/pull/117"},"sea-schema#117")," We've reworked the type mappings for SQLite across the SeaQL ecosystem, such that SeaQuery and SeaSchema are now reciprocal to each other. Migrations written with SeaQuery can be rediscovered by ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," and generate compatible entities! In other words, the roundtrip is complete."),(0,r.kt)("p",null,"Data types will be mapped to SQLite types with a custom naming scheme following SQLite's affinity rule:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INTEGER"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tiny_integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"small_integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"big_integer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," are stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REAL"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"decimal")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"money")," are stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"real")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BLOB"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"blob")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"varbinary_blob")," are stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"blob")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TEXT"),": all other data types are stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),", including ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"datetime"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),", etc.")),(0,r.kt)("p",null,"The full type mapping table is ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.31.0-rc.4/sea_query/table/enum.ColumnType.html"},"documented here"),". For more information, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"/blog/2024-04-08-whats-new-in-seaorm-1.0-rc.x"},"previous blog post"),"."),(0,r.kt)("h3",{id:"introduce-primarykeyarity-with-arity-constant"},"Introduce ",(0,r.kt)("inlineCode",{parentName:"h3"},"PrimaryKeyArity")," with ",(0,r.kt)("inlineCode",{parentName:"h3"},"ARITY")," Constant"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/2185"},"#2185")," Introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKeyArity")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ARITY")," constant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_arity_of<E: EntityTrait>() -> usize {\n    E::PrimaryKey::iter().count() // before; runtime\n    <<E::PrimaryKey as PrimaryKeyTrait>::ValueType as PrimaryKeyArity>::ARITY // now; compile-time\n}\n")),(0,r.kt)("h3",{id:"auto-generated-activeenum-string-values-and-model-column-names"},"Auto Generated ActiveEnum String Values and Model Column Names"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/2170"},"#2170")," Added ",(0,r.kt)("inlineCode",{parentName:"p"},"rename_all")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveActiveEnum")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveEntityModel)]\n#[sea_orm(table_name = "user", rename_all = "camelCase")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    id: i32,\n    first_name: String, // firstName\n    #[sea_orm(column_name = "lAsTnAmE")]\n    last_name: String, // lAsTnAmE\n}\n\n#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)", rename_all = "camelCase")]\npub enum TestEnum {\n    DefaultVariant, // defaultVariant\n    #[sea_orm(rename = "kebab-case")]\n    VariantKebabCase, // variant-kebab-case\n    #[sea_orm(rename = "snake_case")]\n    VariantSnakeCase, // variant_snake_case\n    #[sea_orm(string_value = "CuStOmStRiNgVaLuE")]\n    CustomStringValue, // CuStOmStRiNgVaLuE\n}\n')),(0,r.kt)("h3",{id:"other-enhancements"},"Other Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2137"},"#2137")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DerivePartialModel")," macro attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"entity")," now supports ",(0,r.kt)("inlineCode",{parentName:"li"},"syn::Type"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel)]\n#[sea_orm(entity = "<entity::Model as ModelTrait>::Entity")]\nstruct EntityNameNotAIdent {\n    #[sea_orm(from_col = "foo2")]\n    _foo: i32,\n    #[sea_orm(from_col = "bar2")]\n    _bar: String,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2146"},"#2146")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"RelationDef::from_alias()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .join_as(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Cake.def().rev(),\n            cf.clone()\n        )\n        .join(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Filling.def().from_alias(cf)\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "LEFT JOIN `cake_filling` AS `cf` ON `cake`.`id` = `cf`.`cake_id`",\n        "LEFT JOIN `filling` ON `cf`.`filling_id` = `filling`.`id`",\n    ]\n    .join(" ")\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2256"},"#2256")," Added non-TLS runtime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2244"},"#2244")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Insert::on_conflict_do_nothing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2255"},"#2255")," Migration schema nullable column set NULL explicitly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2194"},"#2194")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::set_if_not_equals()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2197"},"#2197")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"ActiveValue::try_as_ref()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2228"},"#2228")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"QuerySelect::order_by_with_nulls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2233"},"#2233")," Expose ",(0,r.kt)("inlineCode",{parentName:"li"},"get_xxx_connection_pool")," by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2148"},"#2148")," Added ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult::column_names")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2199"},"#2199")," ","[sea-orm-macro]"," Add ",(0,r.kt)("inlineCode",{parentName:"li"},"@generated")," in generated code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1665"},"#1665")," ","[sea-orm-macro]"," Qualify traits in ",(0,r.kt)("inlineCode",{parentName:"li"},"DeriveActiveModel")," macro"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2064"},"#2064")," ","[sea-orm-cli]"," Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"migrate generate")," on empty ",(0,r.kt)("inlineCode",{parentName:"li"},"mod.rs")," files")),(0,r.kt)("h2",{id:"release-planning"},"Release Planning"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md#080---2024-07-22"},"SQLx 0.8")," is recently released! We want to upgrade from ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7")," as soon as possible. However, since ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," has been in release candidate status for a while, and considering the breaking changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlx")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.8"),", we decided to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlx")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7"),"."),(0,r.kt)("p",null,"We plan to release ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlx")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.8")," soon. To avoid unplanned build failures, we recommend all users to specify SeaORM dependency with ",(0,r.kt)("inlineCode",{parentName:"p"},"tilde")," requirement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'sea-orm = { version = "~1.0" }\n')),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/resolver.html"},"Cargo Book"),", this will prevent automatic upgrade to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1"),", so you can perform the upgrade at a convenient time."),(0,r.kt)("p",null,"If you've been depending on ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.12"),", you're recommended to upgrade to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," today. As they're both using ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlx")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7"),", this upgrade focuses on SeaORM. And then upgrade to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1")," down the line, which will then focus on SQLx, as we won't introduce any breaking changes. We recommend taking it one step at a time!"),(0,r.kt)("p",null,"SeaORM 1.x will be maintained for at least 1 year. By then, we'll decide whether we want to release 2.0 and/or extend the lifecycle of 1.x."),(0,r.kt)("h2",{id:"our-future"},"Our Future"),(0,r.kt)("p",null,'You may ask, does this mean SeaORM is "done"? No, not at all! SeaORM 1.0 provides us and the community a solid foundation to build more ambitious features around SeaORM. Here are some facets of our vision:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"GraphQL support via Seaography. We want to further develop Seaography to allow developers to turn a set of SeaORM entities into a fully-fledged GraphQL server!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Admin dashboard. We want to build a first-class frontend framework for SeaORM. It will be a breeze to develop admin / client portals with SeaORM!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Data science / analytics. SeaORM's been focusing on OLTP for now, and we're aware that people also have been using SeaORM for OLAP workloads. We want to provide better integration with dataframe libraries and develop more features tailored for data science and engineering.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scale-out features. We want to develop features to help with scaling applications, e.g. sharding, caching and multi-tenancy."))),(0,r.kt)("h2",{id:"sql-server-support"},"SQL Server Support"),(0,r.kt)("p",null,"We've been planning ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM-X/"},"SQL Server for SeaORM")," for a while, and SQL Server is finally coming to SeaORM 1.0! It will first be offered as a closed beta to our partners. If you are interested, please join our ",(0,r.kt)("a",{parentName:"p",href:"https://forms.office.com/r/1MuRPJmYBR"},"waiting list"),"."),(0,r.kt)("h2",{id:"sponsor"},"Sponsor"),(0,r.kt)("p",null,"A small donation will be greatly appreciated, and goes a long way towards sustaining the organization."),(0,r.kt)("p",null,"A big shout out to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"sponsors")," \ud83d\ude07:"),(0,r.kt)("h3",{id:"gold-sponsors"},"Gold Sponsors"),(0,r.kt)("a",{href:"https://osmos.io/"},(0,r.kt)("img",{src:"https://www.sea-ql.org/static/sponsors/Osmos.svg#light",width:"238"}),(0,r.kt)("img",{src:"https://www.sea-ql.org/static/sponsors/Osmos-dark.svg#dark",width:"238"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://osmos.io/"},"osmos")," offers a data ingestion platform to streamline data ingestion, transformation and workflow management, and they're using SeaQL libraries under the hood!"),(0,r.kt)("p",null,"Contact us if you also want to become a company sponsor and be featured here."),(0,r.kt)("h3",{id:"github-sponsors"},"GitHub Sponsors"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tugascript"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/64930104?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Afonso Barracha")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/marcusbuffett"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1834328?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marcus Buffett")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/ktanaka101"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/10344925?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Kentaro Tanaka")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/siketyan"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/12772118?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Naoki Ikeguchi")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/milesgranger"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/13764397?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Miles Granger")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/data-intuitive"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/15045722?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Data Intuitive")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/mmuellersoppart"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/16762461?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marlon Mueller-Soppart")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/anshap1719"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/19164745?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Anshul Sanghi")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/yuly3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/25814001?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"MasakiMiyazaki")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/manfredcml"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/27536502?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Manfred Lee")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kallydev"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/36319157?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"KallyDev")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/ellik159"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/46644287?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"ellik159")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/caido"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/78991750?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Caido")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Coolpany-SE"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/96304487?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Coolpany SE"))))),(0,r.kt)("h2",{id:"rustacean-sticker-pack-"},"Rustacean Sticker Pack \ud83e\udd80"),(0,r.kt)("p",null,"The Rustacean Sticker Pack is the perfect way to express your passion for Rust.\nOur stickers are made with a premium water-resistant vinyl with a unique matte finish.\nStick them on your laptop, notebook, or any gadget to show off your love for Rust!"),(0,r.kt)("p",null,"Moreover, all proceeds contributes directly to the ongoing development of SeaQL projects."),(0,r.kt)("p",null,"Sticker Pack Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logo of SeaQL projects: SeaQL, SeaORM, SeaQuery, Seaography, FireDBG"),(0,r.kt)("li",{parentName:"ul"},"Mascot of SeaQL: Terres the Hermit Crab"),(0,r.kt)("li",{parentName:"ul"},"Mascot of Rust: Ferris the Crab"),(0,r.kt)("li",{parentName:"ul"},"The Rustacean word")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sticker-pack/"},"Support SeaQL and get a Sticker Pack!")),(0,r.kt)("a",{href:"https://www.sea-ql.org/sticker-pack/"},(0,r.kt)("img",{style:{borderRadius:"25px"},alt:"Rustacean Sticker Pack by SeaQL",src:"https://www.sea-ql.org/static/sticker-pack-1s.jpg"})))}c.isMDXComponent=!0}}]);