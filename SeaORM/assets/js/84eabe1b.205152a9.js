"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[94449],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(31308),a=(n(76687),n(48859));const i={},o="Raw SQL",l={unversionedId:"basic-crud/raw-sql",id:"version-0.5.x/basic-crud/raw-sql",title:"Raw SQL",description:"Query by raw SQL",source:"@site/versioned_docs/version-0.5.x/05-basic-crud/07-raw-sql.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/raw-sql",permalink:"/SeaORM/docs/0.5.x/basic-crud/raw-sql",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/05-basic-crud/07-raw-sql.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1717256837,formattedLastUpdatedAt:"Jun 1, 2024",sidebarPosition:7,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"JSON",permalink:"/SeaORM/docs/0.5.x/basic-crud/json"},next:{title:"One to One",permalink:"/SeaORM/docs/0.5.x/relation/one-to-one"}},s={},u=[{value:"Query by raw SQL",id:"query-by-raw-sql",level:2},{value:"Get raw SQL query",id:"get-raw-sql-query",level:2},{value:"Use Raw Query &amp; Execute Interface",id:"use-raw-query--execute-interface",level:2},{value:"Get Custom Result using <code>query_one</code> and <code>query_all</code> methods",id:"get-custom-result-using-query_one-and-query_all-methods",level:3},{value:"Execute Query using <code>execute</code> method",id:"execute-query-using-execute-method",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raw-sql"},"Raw SQL"),(0,a.kt)("h2",{id:"query-by-raw-sql"},"Query by raw SQL"),(0,a.kt)("p",null,"You can select ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from raw query, with appropriate syntax for binding parameters, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," for MySQL and SQLite, and ",(0,a.kt)("inlineCode",{parentName:"p"},"$N")," for PostgreSQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .one(&db)\n    .await?;\n')),(0,a.kt)("p",null,"You can also select a custom model. Here, we select all unique names from cake."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, FromQueryResult)]\npub struct UniqueCake {\n    name: String,\n}\n\nlet unique: Vec<UniqueCake> = UniqueCake::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        vec![],\n    ))\n    .all(&db)\n    .await?;\n')),(0,a.kt)("h2",{id:"get-raw-sql-query"},"Get raw SQL query"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"to_string")," methods on any CRUD operations to get the database-specific raw SQL for debugging purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::DatabaseBackend;\n\nassert_eq!(\n    cake_filling::Entity::find_by_id((6, 8))\n        .build(DatabaseBackend::MySql)\n        .to_string(),\n    vec![\n        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",\n        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",\n    ].join(" ")\n);\n')),(0,a.kt)("h2",{id:"use-raw-query--execute-interface"},"Use Raw Query & Execute Interface"),(0,a.kt)("p",null,"You can build SQL statements using ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-query")," and query / execute it directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseConnection")," interface inside SeaORM."),(0,a.kt)("h3",{id:"get-custom-result-using-query_one-and-query_all-methods"},"Get Custom Result using ",(0,a.kt)("inlineCode",{parentName:"h3"},"query_one")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"query_all")," methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let query_res: Option<QueryResult> = db\n    .query_one(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\nlet query_res = query_res.unwrap();\nlet id: i32 = query_res.try_get("", "id")?;\n\nlet query_res_vec: Vec<QueryResult> = db\n    .query_all(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\n')),(0,a.kt)("h3",{id:"execute-query-using-execute-method"},"Execute Query using ",(0,a.kt)("inlineCode",{parentName:"h3"},"execute")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let exec_res: ExecResult = db\n    .execute(Statement::from_string(\n        DatabaseBackend::MySql,\n        "DROP DATABASE IF EXISTS `sea`;".to_owned(),\n    ))\n    .await?;\nassert_eq!(exec_res.rows_affected(), 1);\n')))}d.isMDXComponent=!0}}]);