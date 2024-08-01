"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[43675],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(31308),a=(n(76687),n(48859));const s={},i="Using SQLite",o={unversionedId:"write-test/sqlite",id:"version-0.7.x/write-test/sqlite",title:"Using SQLite",description:"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you.",source:"@site/versioned_docs/version-0.7.x/08-write-test/03-sqlite.md",sourceDirName:"08-write-test",slug:"/write-test/sqlite",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/write-test/sqlite",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/08-write-test/03-sqlite.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722493025,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mock Interface",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/write-test/mock"},next:{title:"Custom Select",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/advanced-query/custom-select"}},l={},c=[{value:"Integration Test",id:"integration-test",level:2},{value:"Setup database schema",id:"setup-database-schema",level:2},{value:"Performing tests",id:"performing-tests",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-sqlite"},"Using SQLite"),(0,a.kt)("p",null,"If you want to test application logic that does not require database-specific features, SQLite will be a good choice for you."),(0,a.kt)("p",null,"Check out a simple example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/tests/basic.rs"},"here"),"."),(0,a.kt)("h2",{id:"integration-test"},"Integration Test"),(0,a.kt)("p",null,"It is recommended to execute more complex test cases in ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html"},"integration tests"),". The following code snippet illustrates the steps of connecting to a database, setting up schema and performing tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'async fn main() -> Result<(), DbErr> {\n    // Connecting SQLite\n    let db = Database::connect("sqlite::memory:").await?;\n\n    // Setup database schema\n    setup_schema(&db).await?;\n\n    // Performing tests\n    testcase(&db).await?;\n\n    Ok(())\n}\n')),(0,a.kt)("h2",{id:"setup-database-schema"},"Setup database schema"),(0,a.kt)("p",null,"To create tables in SQLite database for testing, instead of writing ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,a.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," manually, you can derive it from ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"async fn setup_schema(db: &DbConn) {\n\n    // Setup Schema helper\n    let schema = Schema::new(DbBackend::Sqlite);\n\n    // Derive from Entity\n    let stmt: TableCreateStatement = schema.create_table_from_entity(MyEntity);\n\n    // Or setup manually\n    assert_eq!(\n        stmt.build(SqliteQueryBuilder),\n        Table::create()\n            .table(MyEntity)\n            .col(\n                ColumnDef::new(MyEntity::Column::Id)\n                    .integer()\n                    .not_null()\n            )\n            //...\n            .build(SqliteQueryBuilder)\n    );\n\n    // Execute create table statement\n    let result = db\n        .execute(db.get_database_backend().build(&stmt))\n        .await;\n}\n")),(0,a.kt)("h2",{id:"performing-tests"},"Performing tests"),(0,a.kt)("p",null,"Execute test cases and assert against the results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'async fn testcase(db: &DbConn) -> Result<(), DbErr> {\n\n    let baker_bob = baker::ActiveModel {\n        name: Set("Baker Bob".to_owned()),\n        contact_details: Set(serde_json::json!({\n            "mobile": "+61424000000",\n            "home": "0395555555",\n            "address": "12 Test St, Testville, Vic, Australia"\n        })),\n        bakery_id: Set(2),\n        ..Default::default()\n    };\n\n    let baker_insert_res = Baker::insert(baker_bob)\n        .exec(db)\n        .await\n        .expect("could not insert baker");\n\n    assert_eq!(baker_insert_res.last_insert_id, 1);\n\n    Ok(())\n}\n')))}p.isMDXComponent=!0}}]);