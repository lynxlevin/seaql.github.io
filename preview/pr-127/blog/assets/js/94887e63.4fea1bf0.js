"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9305],{9680:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(1308),n=(a(6687),a(9680));const o={slug:"2023-08-12-announcing-seaorm-0.12",title:"Announcing SeaORM 0.12 \ud83d\udc1a",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/preview/pr-127/blog/2023-08-12-announcing-seaorm-0.12",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-08-12-announcing-seaorm-0.12.md",source:"@site/blog/2023-08-12-announcing-seaorm-0.12.md",title:"Announcing SeaORM 0.12 \ud83d\udc1a",description:"\ud83c\udf89 We are pleased to announce SeaORM 0.12 today!",date:"2023-08-12T00:00:00.000Z",formattedDate:"August 12, 2023",tags:[{label:"news",permalink:"/preview/pr-127/blog/tags/news"}],readingTime:7.715,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/blog/img/SeaQL.png"}],frontMatter:{slug:"2023-08-12-announcing-seaorm-0.12",title:"Announcing SeaORM 0.12 \ud83d\udc1a",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaStreamer 0.3",permalink:"/preview/pr-127/blog/2023-09-06-whats-new-in-sea-streamer-0.3"},nextItem:{title:"Introducing SeaStreamer \ud83c\udf0a",permalink:"/preview/pr-127/blog/2023-04-03-intro-sea-streamer"}},l={authorsImageUrls:[void 0]},m=[{value:"New Features \ud83c\udf1f",id:"new-features-",level:2},{value:"\ud83e\udded Seaography: GraphQL integration (preview)",id:"-seaography-graphql-integration-preview",level:3},{value:"Added macro <code>DerivePartialModel</code>",id:"added-macro-derivepartialmodel",level:3},{value:"Added <code>Select::find_with_linked</code>",id:"added-selectfind_with_linked",level:3},{value:"Added <code>DeriveValueType</code> derive macro for custom wrapper types",id:"added-derivevaluetype-derive-macro-for-custom-wrapper-types",level:3},{value:"Enhancements \ud83c\udd99",id:"enhancements-",level:2},{value:"#1433 Chained AND / OR join ON condition",id:"1433-chained-and--or-join-on-condition",level:4},{value:"#1508 Supports entity with composite primary key of arity 12",id:"1508-supports-entity-with-composite-primary-key-of-arity-12",level:4},{value:"#1677 Added <code>UpdateMany::exec_with_returning()</code>",id:"1677-added-updatemanyexec_with_returning",level:4},{value:"#1511 Added <code>MigratorTrait::migration_table_name()</code> method to configure the name of migration table",id:"1511-added-migratortraitmigration_table_name-method-to-configure-the-name-of-migration-table",level:4},{value:"#1707 Added <code>DbErr::sql_err()</code> method to parse common database errors",id:"1707-added-dberrsql_err-method-to-parse-common-database-errors",level:4},{value:"#1737 Introduced new <code>ConnAcquireErr</code>",id:"1737-introduced-new-connacquireerr",level:4},{value:"#1627 Added <code>DatabaseConnection::ping()</code>",id:"1627-added-databaseconnectionping",level:4},{value:"#1708 Added <code>TryInsert</code> that does not panic on empty inserts",id:"1708-added-tryinsert-that-does-not-panic-on-empty-inserts",level:4},{value:"#1712 Insert on conflict do nothing to return Ok",id:"1712-insert-on-conflict-do-nothing-to-return-ok",level:4},{value:"#1740, #1755 Replacing <code>sea_query::Iden</code> with <code>sea_orm::DeriveIden</code>",id:"1740-1755-replacing-sea_queryiden-with-sea_ormderiveiden",level:4},{value:"New Release <del>Train</del> Ferry \ud83d\udea2",id:"new-release-train-ferry-",level:2},{value:"Community Survey \ud83d\udcdd",id:"community-survey-",level:2},{value:"Sponsor \ud83e\udd47",id:"sponsor-",level:2},{value:"What&#39;s Next for SeaORM? \u26f5",id:"whats-next-for-seaorm-",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{alt:"SeaORM 0.12 Banner",src:"/blog/img/SeaORM%2012%20Banner.png"}),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to announce SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.12.1"},(0,n.kt)("inlineCode",{parentName:"a"},"0.12"))," today!"),(0,n.kt)("p",null,"We still remember the time when we first ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2021-09-20-introducing-sea-orm/"},"introduced SeaORM")," to the Rust community two years ago. We set out a goal to enable developers to build asynchronous database-driven applications in Rust."),(0,n.kt)("p",null,"Today, many open-source projects, ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/index.html#our-users"},"a handful of startups")," and many more closed-source projects are using SeaORM. Thank you all who participated and contributed in the making!"),(0,n.kt)("img",{alt:"SeaORM Star History",src:"/blog/img/star-history-sea-orm-2023.png"}),(0,n.kt)("h2",{id:"new-features-"},"New Features \ud83c\udf1f"),(0,n.kt)("h3",{id:"-seaography-graphql-integration-preview"},"\ud83e\udded ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/SeaQL/seaography"},"Seaography"),": GraphQL integration (preview)"),(0,n.kt)("img",{alt:"Seaography example",src:"/blog/img/Seaography%20example.png"}),(0,n.kt)("p",null,"Seaography is a GraphQL framework built on top of SeaORM. In ",(0,n.kt)("inlineCode",{parentName:"p"},"0.12"),", Seaography integration is built into ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-orm"),".\nSeaography allows you to build GraphQL resolvers quickly. With just a few commands, you can launch a GraphQL server from SeaORM entities!"),(0,n.kt)("p",null,"While Seaography development is still in an early stage, it is especially useful in prototyping and building internal-use admin panels."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/seaography/seaography-intro/"},"Read the documentation")," to learn more."),(0,n.kt)("h3",{id:"added-macro-derivepartialmodel"},"Added macro ",(0,n.kt)("a",{parentName:"h3",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/derive.DerivePartialModel.html"},(0,n.kt)("inlineCode",{parentName:"a"},"DerivePartialModel"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1597"},"#1597")," Now you can easily perform custom select to query only the columns you needed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DerivePartialModel, FromQueryResult)]\n#[sea_orm(entity = "Cake")]\nstruct PartialCake {\n    name: String,\n    #[sea_orm(\n        from_expr = r#"SimpleExpr::FunctionCall(Func::upper(Expr::col((Cake, cake::Column::Name))))"#\n    )]\n    name_upper: String,\n}\n\nassert_eq!(\n    cake::Entity::find()\n        .into_partial_model::<PartialCake>()\n        .into_statement(DbBackend::Sqlite)\n        .to_string(),\n    r#"SELECT "cake"."name", UPPER("cake"."name") AS "name_upper" FROM "cake""#\n);\n')),(0,n.kt)("h3",{id:"added-selectfind_with_linked"},"Added ",(0,n.kt)("a",{parentName:"h3",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/query/struct.Select.html#method.find_with_linked"},(0,n.kt)("inlineCode",{parentName:"a"},"Select::find_with_linked"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1728"},"#1728"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1743"},"#1743")," Similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"find_with_related"),", you can now select related entities and consolidate the models."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// Consider the following link\npub struct BakedForCustomer;\n\nimpl Linked for BakedForCustomer {\n    type FromEntity = Entity;\n\n    type ToEntity = super::customer::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            super::cakes_bakers::Relation::Baker.def().rev(),\n            super::cakes_bakers::Relation::Cake.def(),\n            super::lineitem::Relation::Cake.def().rev(),\n            super::lineitem::Relation::Order.def(),\n            super::order::Relation::Customer.def(),\n        ]\n    }\n}\n\nlet res: Vec<(baker::Model, Vec<customer::Model>)> = Baker::find()\n    .find_with_linked(baker::BakedForCustomer)\n    .order_by_asc(baker::Column::Id)\n    .all(db)\n    .await?\n")),(0,n.kt)("h3",{id:"added-derivevaluetype-derive-macro-for-custom-wrapper-types"},"Added ",(0,n.kt)("a",{parentName:"h3",href:"https://docs.rs/sea-orm/latest/sea_orm/derive.DeriveValueType.html"},(0,n.kt)("inlineCode",{parentName:"a"},"DeriveValueType"))," derive macro for ",(0,n.kt)("a",{parentName:"h3",href:"https://www.sea-ql.org/SeaORM/docs/generate-entity/newtype/"},"custom wrapper types")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1720"},"#1720")," So now you can use newtypes easily."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "custom_value_type")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub number: Integer,\n    // Postgres only\n    pub str_vec: StringVec,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]\npub struct Integer(i32);\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]\npub struct StringVec(pub Vec<String>);\n')),(0,n.kt)("p",null,"Which saves you the boilerplate of:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'impl std::convert::From<StringVec> for Value { .. }\n\nimpl TryGetable for StringVec {\n    fn try_get_by<I: ColIdx>(res: &QueryResult, idx: I)\n        -> Result<Self, TryGetError> { .. }\n}\n\nimpl ValueType for StringVec {\n    fn try_from(v: Value) -> Result<Self, ValueTypeErr> { .. }\n\n    fn type_name() -> String { "StringVec".to_owned() }\n\n    fn array_type() -> ArrayType { ArrayType::String }\n\n    fn column_type() -> ColumnType { ColumnType::String(None) }\n}\n')),(0,n.kt)("h2",{id:"enhancements-"},"Enhancements \ud83c\udd99"),(0,n.kt)("h4",{id:"1433-chained-and--or-join-on-condition"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1433"},"#1433")," Chained AND / OR join ON condition"),(0,n.kt)("p",null,"Added more macro attributes to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/derive.DeriveRelation.html"},(0,n.kt)("inlineCode",{parentName:"a"},"DeriveRelation"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// Entity file\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    // By default, it\'s `JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` AND `fruit`.`name` LIKE \'%tropical%\'`\n    #[sea_orm(\n        has_many = "super::fruit::Entity",\n        on_condition = r#"super::fruit::Column::Name.like("%tropical%")"#\n    )]\n    TropicalFruit,\n    // Specify `condition_type = "any"` to override it, now it becomes\n    // `JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` OR `fruit`.`name` LIKE \'%tropical%\'`\n    #[sea_orm(\n        has_many = "super::fruit::Entity",\n        on_condition = r#"super::fruit::Column::Name.like("%tropical%")"#\n        condition_type = "any",\n    )]\n    OrTropicalFruit,\n}\n')),(0,n.kt)("h4",{id:"1508-supports-entity-with-composite-primary-key-of-arity-12"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1508"},"#1508")," Supports entity with composite primary key of arity 12"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "primary_key_of_12")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub id_1: String,\n    ...\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub id_12: bool,\n}\n')),(0,n.kt)("h4",{id:"1677-added-updatemanyexec_with_returning"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1677"},"#1677")," Added ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/query/struct.UpdateMany.html#method.exec_with_returning"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateMany::exec_with_returning()"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let models: Vec<Model> = Entity::update_many()\n    .col_expr(Column::Values, Expr::expr(..))\n    .exec_with_returning(db)\n    .await?;\n")),(0,n.kt)("h4",{id:"1511-added-migratortraitmigration_table_name-method-to-configure-the-name-of-migration-table"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1511"},"#1511")," Added ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm-migration/0.12.2/sea_orm_migration/migrator/trait.MigratorTrait.html#method.migration_table_name"},(0,n.kt)("inlineCode",{parentName:"a"},"MigratorTrait::migration_table_name()"))," method to configure the name of migration table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[async_trait::async_trait]\nimpl MigratorTrait for Migrator {\n    // Override the name of migration table\n    fn migration_table_name() -> sea_orm::DynIden {\n        Alias::new("override_migration_table_name").into_iden()\n    }\n    ...\n}\n')),(0,n.kt)("h4",{id:"1707-added-dberrsql_err-method-to-parse-common-database-errors"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1707"},"#1707")," Added ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/error/enum.DbErr.html#method.sql_err"},(0,n.kt)("inlineCode",{parentName:"a"},"DbErr::sql_err()"))," method to parse common database errors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'assert!(matches!(\n    cake.into_active_model().insert(db).await\n        .expect_err("Insert a row with duplicated primary key")\n        .sql_err(),\n    Some(SqlErr::UniqueConstraintViolation(_))\n));\n\nassert!(matches!(\n    fk_cake.insert(db).await\n        .expect_err("Insert a row with invalid foreign key")\n        .sql_err(),\n    Some(SqlErr::ForeignKeyConstraintViolation(_))\n));\n')),(0,n.kt)("h4",{id:"1737-introduced-new-connacquireerr"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1737"},"#1737")," Introduced new ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/error/enum.ConnAcquireErr.html"},(0,n.kt)("inlineCode",{parentName:"a"},"ConnAcquireErr"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"enum DbErr {\n    ConnectionAcquire(ConnAcquireErr),\n    ..\n}\n\nenum ConnAcquireErr {\n    Timeout,\n    ConnectionClosed,\n}\n")),(0,n.kt)("h4",{id:"1627-added-databaseconnectionping"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1627"},"#1627")," Added ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/error/enum.ConnAcquireErr.html"},(0,n.kt)("inlineCode",{parentName:"a"},"DatabaseConnection::ping()"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"|db: DatabaseConnection| {\n    assert!(db.ping().await.is_ok());\n    db.clone().close().await;\n    assert!(matches!(db.ping().await, Err(DbErr::ConnectionAcquire)));\n}\n")),(0,n.kt)("h4",{id:"1708-added-tryinsert-that-does-not-panic-on-empty-inserts"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1708"},"#1708")," Added ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/query/struct.TryInsert.html"},(0,n.kt)("inlineCode",{parentName:"a"},"TryInsert"))," that does not panic on empty inserts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// now, you can do:\nlet res = Bakery::insert_many(std::iter::empty())\n    .on_empty_do_nothing()\n    .exec(db)\n    .await;\n\nassert!(matches!(res, Ok(TryInsertResult::Empty)));\n")),(0,n.kt)("h4",{id:"1712-insert-on-conflict-do-nothing-to-return-ok"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1712"},"#1712")," Insert on conflict do nothing to return Ok"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let on = OnConflict::column(Column::Id).do_nothing().to_owned();\n\n// Existing behaviour\nlet res = Entity::insert_many([..]).on_conflict(on).exec(db).await;\nassert!(matches!(res, Err(DbErr::RecordNotInserted)));\n\n// New API; now you can:\nlet res =\nEntity::insert_many([..]).on_conflict(on).do_nothing().exec(db).await;\nassert!(matches!(res, Ok(TryInsertResult::Conflicted)));\n")),(0,n.kt)("h4",{id:"1740-1755-replacing-sea_queryiden-with-sea_ormderiveiden"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1740"},"#1740"),", ",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/SeaQL/sea-orm/pull/1755"},"#1755")," Replacing ",(0,n.kt)("inlineCode",{parentName:"h4"},"sea_query::Iden")," with ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.rs/sea-orm/0.12.2/sea_orm/derive.DeriveIden.html"},(0,n.kt)("inlineCode",{parentName:"a"},"sea_orm::DeriveIden"))),(0,n.kt)("p",null,"To provide a more consistent interface, ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-query/derive")," is no longer enabled by ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-orm"),", as such, ",(0,n.kt)("inlineCode",{parentName:"p"},"Iden")," no longer works as a derive macro (it's still a trait)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// then:\n\n#[derive(Iden)]\n#[iden = "category"]\npub struct CategoryEnum;\n\n#[derive(Iden)]\npub enum Tea {\n    Table,\n    #[iden = "AfternoonTea"]\n    EverydayTea,\n}\n\n// now:\n\n#[derive(DeriveIden)]\n#[sea_orm(iden = "category")]\npub struct CategoryEnum;\n\n#[derive(DeriveIden)]\npub enum Tea {\n    Table,\n    #[sea_orm(iden = "AfternoonTea")]\n    EverydayTea,\n}\n')),(0,n.kt)("h2",{id:"new-release-train-ferry-"},"New Release ",(0,n.kt)("del",{parentName:"h2"},"Train")," Ferry \ud83d\udea2"),(0,n.kt)("p",null,"It's been the ",(0,n.kt)("strong",{parentName:"p"},"12th")," release of SeaORM! Initially, a major version was released every month. It gradually became 2 to 3 months, and now, it's been 6 months since the last major release. As our userbase grew and some are already ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#startups"},"using SeaORM in production"),", we understand the importance of having a stable API surface and feature set."),(0,n.kt)("p",null,"That's why we are committed to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Reviewing breaking changes with strict scrutiny"),(0,n.kt)("li",{parentName:"ol"},"Expanding our test suite to cover all features of our library"),(0,n.kt)("li",{parentName:"ol"},"Never remove features, and consider deprecation carefully")),(0,n.kt)("p",null,"Today, the architecture of SeaORM is pretty solid and stable, and with the ",(0,n.kt)("inlineCode",{parentName:"p"},"0.12")," release where we paid back a lot of technical debt, we will be able to deliver new features and enhancements without breaking. As our major dependency ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/launchbadge/sqlx"},"SQLx")," is not ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0")," yet, technically we cannot be ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,n.kt)("p",null,"We are still advancing rapidly, and we will always make a new release as soon as SQLx makes a new release, so that you can upgrade everything at once. As a result, the next major release of SeaORM will come out ",(0,n.kt)("strong",{parentName:"p"},"6 months from now, or when SQLx makes a new release"),", whichever is earlier."),(0,n.kt)("h2",{id:"community-survey-"},(0,n.kt)("a",{parentName:"h2",href:"https://www.sea-ql.org/community-survey"},"Community Survey")," \ud83d\udcdd"),(0,n.kt)("p",null,"SeaQL is an independent open-source organization. Our goal is to enable developers to build data intensive applications in Rust. If you are using SeaORM, please participate in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"SeaQL Community Survey"),"!"),(0,n.kt)("p",null,"By completing this survey, you will help us gather insights into how you, the developer, are using our libraries and identify means to improve your developer experience. We will also publish an annual survey report to summarize our findings."),(0,n.kt)("p",null,"If you are a happy user of SeaORM, consider ",(0,n.kt)("a",{parentName:"p",href:"https://forms.office.com/r/YbeqfTAgkJ"},"writing us a testimonial"),"!"),(0,n.kt)("h2",{id:"sponsor-"},"Sponsor \ud83e\udd47"),(0,n.kt)("p",null,"A big thank to ",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," who sponsored our server hosting, and ",(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/"},"JetBrains")," who sponsored our IDE, and every sponsor on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor"),"!"),(0,n.kt)("p",null,"If you feel generous, a small donation will be greatly appreciated, and goes a long way towards sustaining the organization."),(0,n.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tugascript"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/64930104?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Afonso Barracha")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/trueb2"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/8592049?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Jacob Trueb")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/siketyan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/12772118?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Natsuki Ikeguchi")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/mmuellersoppart"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/16762461?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Marlon Mueller-Soppart")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kallydev"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/36319157?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"KallyDev")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/manfredcml"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/27536502?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Manfred Lee")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/rgoracz"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/6758092?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Roland Gor\xe1cz")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Iceapinan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2698243?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"IceApinan")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/reneklacan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1935686?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Ren\xe9 Kla\u010dan")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,n.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,n.kt)("h2",{id:"whats-next-for-seaorm-"},"What's Next for SeaORM? \u26f5"),(0,n.kt)("p",null,"Open-source project is a never-ending work, and we are actively looking for ways to sustain the project. You can support our endeavour by starring & sharing our repositories and becoming a sponsor."),(0,n.kt)("p",null,"We are considering multiple directions to generate revenue for the organization. If you have any suggestion, or want to join or collaborate with us, please contact us via ",(0,n.kt)("inlineCode",{parentName:"p"},"hello[at]sea-ql.org"),"."),(0,n.kt)("p",null,"Thank you for your support, and together we can make open-source sustainable."))}d.isMDXComponent=!0}}]);