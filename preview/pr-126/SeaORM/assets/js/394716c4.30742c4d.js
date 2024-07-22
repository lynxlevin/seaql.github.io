"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[19410],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(31308),r=(n(76687),n(48859));const l={},o="Custom Select",i={unversionedId:"advanced-query/custom-select",id:"advanced-query/custom-select",title:"Custom Select",description:"Thank you for using SeaORM. Please star our GitHub repo! Your support is vital to the continued development and maintenance of SeaORM.",source:"@site/docs/08-advanced-query/01-custom-select.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-select",permalink:"/preview/pr-126/SeaORM/docs/next/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/08-advanced-query/01-custom-select.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721633215,formattedLastUpdatedAt:"Jul 22, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using SQLite",permalink:"/preview/pr-126/SeaORM/docs/next/write-test/sqlite"},next:{title:"Conditional Expressions",permalink:"/preview/pr-126/SeaORM/docs/next/advanced-query/conditional-expression"}},s={},u=[{value:"Select Partial Attributes",id:"select-partial-attributes",level:2},{value:"Optional fields",id:"optional-fields",level:3},{value:"Select Custom Expressions",id:"select-custom-expressions",level:2},{value:"Handling Select Results",id:"handling-select-results",level:2},{value:"Custom Struct",id:"custom-struct",level:3},{value:"Unstructured Tuple",id:"unstructured-tuple",level:3},{value:"Select Partial Model",id:"select-partial-model",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-select"},"Custom Select"),(0,r.kt)("admonition",{title:"We need your support! \u2b50",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Thank you for using SeaORM. Please star our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"GitHub repo"),"! Your support is vital to the continued development and maintenance of SeaORM.")),(0,r.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," enum. You can override the defaults if you wish to select certain columns only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting all columns\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("h2",{id:"select-partial-attributes"},"Select Partial Attributes"),(0,r.kt)("p",null,"Clear the default selection by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_only")," method. Then, you can select some of the attributes or custom expressions afterwards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting the name column only\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("p",null,"If you want to select multiple attributes at once, you can supply an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns([cake::Column::Id, cake::Column::Name])\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("p",null,"Advanced example: conditionally select all columns except a specific column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns(cake::Column::iter().filter(|col| match col {\n            cake::Column::Id => false,\n            _ => true,\n        }))\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("h3",{id:"optional-fields"},"Optional fields"),(0,r.kt)("p",null,"Since 0.12, SeaORM supports for partial select of ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<T>")," model field. A ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," value will be filled when the select result does not contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<T>")," field without throwing an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'customer::ActiveModel {\n    name: Set("Alice".to_owned()),\n    notes: Set(Some("Want to communicate with Bob".to_owned())),\n    ..Default::default()\n}\n.save(db)\n.await?;\n\n// The `notes` field was intentionally left out\nlet customer = Customer::find()\n    .select_only()\n    .column(customer::Column::Id)\n    .column(customer::Column::Name)\n    .one(db)\n    .await\n    .unwrap();\n\n// The select result does not contain `notes` field.\n// Since it\'s of type `Option<String>`, it\'ll be `None` and no error will be thrown.\nassert_eq!(customers.notes, None);\n')),(0,r.kt)("h2",{id:"select-custom-expressions"},"Select Custom Expressions"),(0,r.kt)("p",null,"Select any custom expression with ",(0,r.kt)("inlineCode",{parentName:"p"},"column_as")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"expr_as")," method, it takes any ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," and an alias. Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::Expr"))," helper to build ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleExpr"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr, Func};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n\nassert_eq!(\n    cake::Entity::find()\n        .expr_as(Func::upper(Expr::col((cake::Entity, cake::Column::Name))), "name_upper")\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name`, UPPER(`cake`.`name`) AS `name_upper` FROM `cake`"\n);\n')),(0,r.kt)("h2",{id:"handling-select-results"},"Handling Select Results"),(0,r.kt)("h3",{id:"custom-struct"},"Custom Struct"),(0,r.kt)("p",null,"You can use a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of a complex query. It is especially useful when dealing with custom columns or multiple joins which cannot directly be converted into models. It may be used to receive the result of any query, even raw SQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // construct `RelationDef` on the fly\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // reuse a `Relation` from existing Entity\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')),(0,r.kt)("h3",{id:"unstructured-tuple"},"Unstructured Tuple"),(0,r.kt)("p",null,"You can select a tuple (or single value) with the ",(0,r.kt)("inlineCode",{parentName:"p"},"into_tuple")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column(cake::Column::Name)\n    .column(cake::Column::Id.count())\n    .group_by(cake::Column::Name)\n    .into_tuple()\n    .all(&db)\n    .await?;\n")),(0,r.kt)("h2",{id:"select-partial-model"},"Select Partial Model"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"0.12"),", we introduced a new trait ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialModelTrait")," and pairing macro ",(0,r.kt)("inlineCode",{parentName:"p"},"DerivePartialModel")," for improving the ergonomic of custom selects."),(0,r.kt)("p",null,"Instead of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use user::Entity as User;\n\n#[derive(FromQueryResult)]\nstruct PartialUser {\n    pub id: i32,\n    pub avatar: String,\n    pub unique_id: Uuid,\n}\n\nlet query = User::find()\n    .select_only()\n    .column(Column::Id)\n    .column(Column::Avatar)\n    .column(Column::UniqueId)\n    .into_model::<PartialUser>();\n")),(0,r.kt)("p",null,"You can define a partial model, and the corresponding columns will be automatically selected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel, FromQueryResult)]\n#[sea_orm(entity = "User")]\nstruct PartialUser {\n    pub id: i32,\n    pub avatar: String,\n    pub unique_id: Uuid,\n}\n\nlet query = User::find().into_partial_model::<PartialUser>();\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"1.0.0-rc.2")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"DerivePartialModel")," macro attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," supports complex types"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(entity = "<entity::Model as ModelTrait>::Entity")]\nstruct PartialUser {\n    ..\n}\n'))),(0,r.kt)("p",null,"Advanced usages include column remap and custom expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel, FromQueryResult)]\n#[sea_orm(entity = "User")]\nstruct PartialRow {\n    #[sea_orm(from_col = "id")]\n    user_id: i32,\n    #[sea_orm(from_expr = "Expr::col(user::Column::Id).add(1)")]\n    next_id: i32,\n}\n\n// The above is equivalent to:\nUser::find()\n    .column_as(user::Column::Id, "user_id")\n    .column_as(Expr::col(user::Column::Id).add(1), "next_id")\n')))}d.isMDXComponent=!0}}]);