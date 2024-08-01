"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[69046],{48859:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(76687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,y=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(31308),a=(t(76687),t(48859));const l={},o="Custom Select",s={unversionedId:"advanced-query/custom-select",id:"version-0.10.x/advanced-query/custom-select",title:"Custom Select",description:"By default, SeaORM will select all columns defined in the Column enum. You can override the defaults if you wish to select certain columns only.",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/01-custom-select.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-select",permalink:"/preview/pr-126/SeaORM/docs/0.10.x/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/01-custom-select.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722493025,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using SQLite",permalink:"/preview/pr-126/SeaORM/docs/0.10.x/write-test/sqlite"},next:{title:"Conditional Expressions",permalink:"/preview/pr-126/SeaORM/docs/0.10.x/advanced-query/conditional-expression"}},i={},u=[{value:"Clear Default Selection",id:"clear-default-selection",level:2},{value:"Select Some Attributes Only",id:"select-some-attributes-only",level:2},{value:"Select Custom Expressions",id:"select-custom-expressions",level:2},{value:"Handling Custom Selects",id:"handling-custom-selects",level:2}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-select"},"Custom Select"),(0,a.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Column")," enum. You can override the defaults if you wish to select certain columns only."),(0,a.kt)("h2",{id:"clear-default-selection"},"Clear Default Selection"),(0,a.kt)("p",null,"Clear the default selection by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," method if needed. Then, you can select some of the attributes or even custom expressions after it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting all columns\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-some-attributes-only"},"Select Some Attributes Only"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"select_only")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"column")," methods together to select only the attributes you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting the name column only\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"select-custom-expressions"},"Select Custom Expressions"),(0,a.kt)("p",null,"Select any custom expression with ",(0,a.kt)("inlineCode",{parentName:"p"},"column_as")," method, it takes any ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," and an alias. Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Expr"))," helper to build ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleExpr"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n')),(0,a.kt)("h2",{id:"handling-custom-selects"},"Handling Custom Selects"),(0,a.kt)("p",null,"You can use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,a.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of a complex query. It is especially useful when dealing with custom columns or multiple joins which cannot directly be converted into models. It may be used to receive the result of any query, even raw SQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // construct `RelationDef` on the fly\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // reuse a `Relation` from existing Entity\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')),(0,a.kt)("p",null,"Selecting a single value without a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," is also possible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\nenum QueryAs {\n    CakeName,\n}\n\nlet res: Vec<String> = cake::Entity::find()\n    .select_only()\n    .column_as(cake::Column::Name, QueryAs::CakeName)\n    .into_values::<_, QueryAs>()\n    .all(&db)\n    .await?;\n\nassert_eq!(\n    res,\n    vec!["Chocolate Forest".to_owned(), "New York Cheese".to_owned()]\n);\n')),(0,a.kt)("p",null,"You can even select a tuple value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\nenum QueryAs {\n    CakeName,\n    NumOfCakes,\n}\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column_as(cake::Column::Name, QueryAs::CakeName)\n    .column_as(cake::Column::Id.count(), QueryAs::NumOfCakes)\n    .group_by(cake::Column::Name)\n    .into_values::<_, QueryAs>()\n    .all(&db)\n    .await?;\n\nassert_eq!(res, vec![("Chocolate Forest".to_owned(), 2i64)]);\n')))}m.isMDXComponent=!0}}]);