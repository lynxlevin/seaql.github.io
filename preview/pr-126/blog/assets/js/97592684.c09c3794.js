"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[8193],{9680:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var r=t(6687);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),m=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=n,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(h,i(i({ref:a},p),{},{components:t})):r.createElement(h,i({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9044:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=t(1308),n=(t(6687),t(9680));const o={slug:"2024-01-23-whats-new-in-seaorm-0.12.x",title:"What's new in SeaORM 0.12.x",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",image:"https://www.sea-ql.org/blog/img/SeaORM%2012%20Banner.png",tags:["news"]},i=void 0,s={permalink:"/preview/pr-126/blog/2024-01-23-whats-new-in-seaorm-0.12.x",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-01-23-whats-new-in-seaorm-0.12.x.md",source:"@site/blog/2024-01-23-whats-new-in-seaorm-0.12.x.md",title:"What's new in SeaORM 0.12.x",description:"It had been a while since the initial SeaORM 0.12 release. This blog post summarizes the new features and enhancements introduced in SeaORM 0.12.2 through 0.12.12!",date:"2024-01-23T00:00:00.000Z",formattedDate:"January 23, 2024",tags:[{label:"news",permalink:"/preview/pr-126/blog/tags/news"}],readingTime:6.79,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/blog/img/SeaQL.png"}],frontMatter:{slug:"2024-01-23-whats-new-in-seaorm-0.12.x",title:"What's new in SeaORM 0.12.x",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/blog/img/SeaQL.png",image:"https://www.sea-ql.org/blog/img/SeaORM%2012%20Banner.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 1.0-rc.x",permalink:"/preview/pr-126/blog/2024-04-08-whats-new-in-seaorm-1.0-rc.x"},nextItem:{title:"SeaQL Community Survey 2023 Results",permalink:"/preview/pr-126/blog/2024-01-18-community-survey-2023"}},l={authorsImageUrls:[void 0]},m=[{value:"Celebrating 2M downloads on crates.io \ud83d\udce6",id:"celebrating-2m-downloads-on-cratesio-",level:2},{value:"New Features",id:"new-features",level:2},{value:"Entity format update",id:"entity-format-update",level:3},{value:"Cursor paginator improvements",id:"cursor-paginator-improvements",level:3},{value:"Added &quot;proxy&quot; to database backend",id:"added-proxy-to-database-backend",level:3},{value:"Enhancements",id:"enhancements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"House Keeping",id:"house-keeping",level:2},{value:"Release planning",id:"release-planning",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Gold Sponsors",id:"gold-sponsors",level:4},{value:"GitHub Sponsors",id:"github-sponsors",level:4},{value:"Rustacean Sticker Pack \ud83e\udd80",id:"rustacean-sticker-pack-",level:2}],p={toc:m};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("img",{alt:"SeaORM 0.12 Banner",src:"/blog/img/SeaORM%2012%20Banner.png"}),(0,n.kt)("p",null,"It had been a while since the initial ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2023-08-12-announcing-seaorm-0.12/"},"SeaORM 0.12 release"),". This blog post summarizes the new features and enhancements introduced in SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.12.2"},(0,n.kt)("inlineCode",{parentName:"a"},"0.12.2"))," through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.12.12"},(0,n.kt)("inlineCode",{parentName:"a"},"0.12.12")),"!"),(0,n.kt)("h2",{id:"celebrating-2m-downloads-on-cratesio-"},"Celebrating 2M downloads on crates.io \ud83d\udce6"),(0,n.kt)("p",null,"We've just reached the milestone of 2,000,000 all time downloads on ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/sea-orm"},"crates.io"),". It's a testament to SeaORM's adoption in professional use. Thank you to all our users for your trust and for being a part of our community."),(0,n.kt)("h2",{id:"new-features"},"New Features"),(0,n.kt)("h3",{id:"entity-format-update"},"Entity format update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1898"},"#1898")," Add support for root JSON arrays (requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"json-array")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"postgres-array")," feature)! It involved an intricate type system refactor to work around the orphan rule.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_struct_vec")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    #[sea_orm(column_type = "Json")]\n    pub struct_vec: Vec<JsonColumn>,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, FromJsonQueryResult)]\npub struct JsonColumn {\n    pub value: String,\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2009"},"#2009")," Added ",(0,n.kt)("inlineCode",{parentName:"li"},"comment")," attribute for Entity; ",(0,n.kt)("inlineCode",{parentName:"li"},"create_table_from_entity")," now supports comment on MySQL")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "applog", comment = "app logs")]\npub struct Model {\n    #[sea_orm(primary_key, comment = "ID")]\n    pub id: i32,\n    #[sea_orm(comment = "action")]\n    pub action: String,\n    pub json: Json,\n    pub created_at: DateTimeWithTimeZone,\n}\n')),(0,n.kt)("h3",{id:"cursor-paginator-improvements"},"Cursor paginator improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2037"},"#2037")," Added descending order to Cursor:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// (default behaviour) Before 5 ASC, i.e. id < 5\n\nlet mut cursor = Entity::find().cursor_by(Column::Id);\ncursor.before(5);\n\nassert_eq!(\n    cursor.first(4).all(db).await?,\n    [\n        Model { id: 1 },\n        Model { id: 2 },\n        Model { id: 3 },\n        Model { id: 4 },\n    ]\n);\n\n// (new API) After 5 DESC, i.e. id < 5\n\nlet mut cursor = Entity::find().cursor_by(Column::Id);\ncursor.after(5).desc();\n\nassert_eq!(\n    cursor.first(4).all(db).await?,\n    [\n        Model { id: 4 },\n        Model { id: 3 },\n        Model { id: 2 },\n        Model { id: 1 },\n    ]\n);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1826"},"#1826")," Added cursor support to ",(0,n.kt)("inlineCode",{parentName:"li"},"SelectTwo"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// Join with linked relation; cursor by first table's id\n\ncake::Entity::find()\n    .find_also_linked(entity_linked::CakeToFillingVendor)\n    .cursor_by(cake::Column::Id)\n    .before(10)\n    .first(2)\n    .all(&db)\n    .await?\n\n// Join with relation; cursor by the 2nd table's id \n\ncake::Entity::find()\n    .find_also_related(Fruit)\n    .cursor_by_other(fruit::Column::Id)\n    .before(10)\n    .first(2)\n    .all(&db)\n    .await?\n")),(0,n.kt)("h3",{id:"added-proxy-to-database-backend"},'Added "proxy" to database backend'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/1881"},"#1881"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/2000"},"#2000"),' Added "proxy" to database backend (requires feature flag ',(0,n.kt)("inlineCode",{parentName:"p"},"proxy"),")."),(0,n.kt)("p",null,"It enables the possibility of using SeaORM on edge / client-side! See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/proxy_gluesql_example"},"GlueSQL demo")," for an example."),(0,n.kt)("h2",{id:"enhancements"},"Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1954"},"#1954")," ","[sea-orm-macro]"," Added ",(0,n.kt)("inlineCode",{parentName:"li"},"#[sea_orm(skip)]")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"FromQueryResult")," derive macro")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, Deserialize, Serialize, FromQueryResult)]\npub struct PublicUser {\n    pub id: i64,\n    pub name: String,\n    #[serde(skip_serializing_if = "Vec::is_empty")]\n    #[sea_orm(skip)]\n    pub something: Something,\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1598"},"#1598")," ","[sea-orm-macro]"," Added support for Postgres arrays in ",(0,n.kt)("inlineCode",{parentName:"li"},"FromQueryResult")," impl of ",(0,n.kt)("inlineCode",{parentName:"li"},"JsonValue"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// existing API:\n\nassert_eq!(\n    Entity::find_by_id(1).one(db).await?,\n    Some(Model {\n        id: 1,\n        name: "Collection 1".into(),\n        integers: vec![1, 2, 3],\n        teas: vec![Tea::BreakfastTea],\n        colors: vec![Color::Black],\n    })\n);\n\n// new API:\n\nassert_eq!(\n    Entity::find_by_id(1).into_json().one(db).await?,\n    Some(json!({\n        "id": 1,\n        "name": "Collection 1",\n        "integers": [1, 2, 3],\n        "teas": ["BreakfastTea"],\n        "colors": [0],\n    }))\n);\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1828"},"#1828")," ","[sea-orm-migration]"," Check if an index exists")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::prelude::*;\n#[derive(DeriveMigrationName)]\npub struct Migration;\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // ...\n\n        // Make sure the index haven\'t been created\n        assert!(!manager.has_index("cake", "cake_name_index").await?);\n\n        manager\n            .create_index(\n                Index::create()\n                    .name("cake_name_index")\n                    .table(Cake::Table)\n                    .col(Cake::Name)\n                    .to_owned(),\n            )\n            .await?;\n\n        Ok(())\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        // ...\n    }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2030"},"#2030")," Improve query performance of ",(0,n.kt)("inlineCode",{parentName:"li"},"Paginator"),"'s ",(0,n.kt)("inlineCode",{parentName:"li"},"COUNT")," query"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2055"},"#2055")," Added SQLx slow statements logging to ",(0,n.kt)("inlineCode",{parentName:"li"},"ConnectOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1867"},"#1867")," Added ",(0,n.kt)("inlineCode",{parentName:"li"},"QuerySelect::lock_with_behavior")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2002"},"#2002")," Cast enums in ",(0,n.kt)("inlineCode",{parentName:"li"},"is_in")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"is_not_in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1999"},"#1999")," Add source annotations to errors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/issues/1960"},"#1960")," Implement ",(0,n.kt)("inlineCode",{parentName:"li"},"StatementBuilder")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"sea_query::WithQuery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1979"},"#1979")," Added method ",(0,n.kt)("inlineCode",{parentName:"li"},"expr_as_")," that accepts ",(0,n.kt)("inlineCode",{parentName:"li"},"self")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1868"},"#1868")," Loader: use ",(0,n.kt)("inlineCode",{parentName:"li"},"ValueTuple")," as hash key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1934"},"#1934")," ","[sea-orm-cli]"," Added ",(0,n.kt)("inlineCode",{parentName:"li"},"--enum-extra-derives")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1952"},"#1952")," ","[sea-orm-cli]"," Added ",(0,n.kt)("inlineCode",{parentName:"li"},"--enum-extra-attributes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1693"},"#1693")," ","[sea-orm-cli]"," Support generation of related entity with composite foreign key")),(0,n.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1855"},"#1855"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2054"},"#2054")," ","[sea-orm-macro]"," Qualify types in ",(0,n.kt)("inlineCode",{parentName:"li"},"DeriveValueType")," macro"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1953"},"#1953")," ","[sea-orm-cli]"," Fix duplicated active enum use statements on generated entities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1821"},"#1821")," ","[sea-orm-cli]"," Fix entity generation for non-alphanumeric enum variants"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2071"},"#2071")," ","[sea-orm-cli]"," Fix entity generation for relations with composite keys"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/issues/1800"},"#1800")," Fixed ",(0,n.kt)("inlineCode",{parentName:"li"},"find_with_related")," consolidation logic"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/commit/5a6acd67312601e4dba32896600044950e20f99f"},"5a6acd67")," Fixed ",(0,n.kt)("inlineCode",{parentName:"li"},"Loader")," panic on empty inputs")),(0,n.kt)("h2",{id:"upgrades"},"Upgrades"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1984"},"#1984")," Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"axum")," example to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1858"},"#1858")," Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"chrono")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.4.30")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1959"},"#1959")," Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"rocket")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.5.0")),(0,n.kt)("li",{parentName:"ul"},"Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"sea-query")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.30.5")),(0,n.kt)("li",{parentName:"ul"},"Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"sea-schema")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.14.2")),(0,n.kt)("li",{parentName:"ul"},"Upgraded ",(0,n.kt)("inlineCode",{parentName:"li"},"salvo")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.50"))),(0,n.kt)("h2",{id:"house-keeping"},"House Keeping"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/2057"},"#2057")," Fix clippy warnings on 1.75"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/1811"},"#1811")," Added test cases for ",(0,n.kt)("inlineCode",{parentName:"li"},"find_xxx_related/linked"))),(0,n.kt)("h2",{id:"release-planning"},"Release planning"),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2023-08-12-announcing-seaorm-0.12/"},"announcement blog post")," of SeaORM 0.12, we stated we want to reduce the frequency of breaking releases while maintaining the pace for feature updates and enhancements. I am glad to say we've accomplished that!"),(0,n.kt)("p",null,"There are still a few breaking changes planned for the next major release. After some ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/discussions/2031"},"discussions")," and consideration, we decided that the next major release will be a release candidate for 1.0!"),(0,n.kt)("h2",{id:"sponsor"},"Sponsor"),(0,n.kt)("p",null,"If you feel generous, a small donation will be greatly appreciated, and goes a long way towards sustaining the organization."),(0,n.kt)("p",null,"A big shout out to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"sponsors")," \ud83d\ude07:"),(0,n.kt)("h4",{id:"gold-sponsors"},"Gold Sponsors"),(0,n.kt)("a",{href:"https://osmos.io/"},(0,n.kt)("img",{src:"https://www.sea-ql.org/static/sponsors/Osmos.svg#light",width:"238"}),(0,n.kt)("img",{src:"https://www.sea-ql.org/static/sponsors/Osmos-dark.svg#dark",width:"238"})),(0,n.kt)("h4",{id:"github-sponsors"},"GitHub Sponsors"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?u=2f43900772265deac96eb7a816d28a5a48b9a8dd&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tugascript"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/64930104?u=1171ed4ccb6da73b52de274109077686290da3a5&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Afonso Barracha")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?u=474c7b31ddf0a5c1a03d1142dd18a300279c644a&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?u=260538c7d8b8c3c5350dba175ebb8294358441e0&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/marcusbuffett"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1834328?u=fd066d99cf4a6333bfb3927d1c756af4bb8baf7e&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Marcus Buffett")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/reneklacan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1935686?u=132be985351312fcf96999daef515f551a93bb0d&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Ren\xe9 Kla\u010dan")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Iceapinan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2698243?u=a852c75ac10098b9980f57af298be1399f6de66b&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"IceApinan")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/trueb2"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/8592049?u=031c9ee96b47c27e3a8c485c3c0ebcd4f96120c9&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Jacob Trueb")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/ktanaka101"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/10344925?u=a96d92e7cdd73f774b35fd0bc998964c07b24e29&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Kentaro Tanaka")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/siketyan"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/12772118?u=1a51e0a06690e52982e7594bc7379481e65155a1&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Natsuki Ikeguchi")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/mmuellersoppart"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/16762461?u=bef7454cb73c164b2d18e077e5ba6b7891aae3d2&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Marlon Mueller-Soppart")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/gitmalong"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/18363591?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"ul")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/manfredcml"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/27536502?u=b71636bdabbc698458b32e2ac05c5771ad41097e&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Manfred Lee")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kallydev"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/36319157?u=5be882aa4dbe7eea97b1a80a6473857369146df6&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"KallyDev")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/dsgallups"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/44790295?u=d1c8d2a60930dfbe95497df7fecf52cf5d95dd5f&v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Daniel Gallups")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Coolpany-SE"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/96304487?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Coolpany-SE"))))),(0,n.kt)("h2",{id:"rustacean-sticker-pack-"},"Rustacean Sticker Pack \ud83e\udd80"),(0,n.kt)("p",null,"The Rustacean Sticker Pack is the perfect way to express your passion for Rust.\nOur stickers are made with a premium water-resistant vinyl with a unique matte finish.\nStick them on your laptop, notebook, or any gadget to show off your love for Rust!"),(0,n.kt)("p",null,"Moreover, all proceeds contributes directly to the ongoing development of SeaQL projects."),(0,n.kt)("p",null,"Sticker Pack Contents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Logo of SeaQL projects: SeaQL, SeaORM, SeaQuery, Seaography, FireDBG"),(0,n.kt)("li",{parentName:"ul"},"Mascot of SeaQL: Terres the Hermit Crab"),(0,n.kt)("li",{parentName:"ul"},"Mascot of Rust: Ferris the Crab"),(0,n.kt)("li",{parentName:"ul"},"The Rustacean word")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sticker-pack/"},"Support SeaQL and get a Sticker Pack!")),(0,n.kt)("a",{href:"https://www.sea-ql.org/sticker-pack/"},(0,n.kt)("img",{style:{borderRadius:"25px"},alt:"Rustacean Sticker Pack by SeaQL",src:"https://www.sea-ql.org/static/sticker-pack-1s.jpg"})))}c.isMDXComponent=!0}}]);