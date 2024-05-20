"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[2101],{9680:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(1308),r=(a(6687),a(9680));const i={slug:"2021-10-15-whats-new-in-0.3.0",title:"What's new in SeaORM 0.3.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},o=void 0,l={permalink:"/preview/pr-123/blog/2021-10-15-whats-new-in-0.3.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2021-10-15-whats-new-in-0.3.0.md",source:"@site/blog/2021-10-15-whats-new-in-0.3.0.md",title:"What's new in SeaORM 0.3.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.3.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2021-10-15T00:00:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"news",permalink:"/preview/pr-123/blog/tags/news"}],readingTime:3.855,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2021-10-15-whats-new-in-0.3.0",title:"What's new in SeaORM 0.3.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.4.0",permalink:"/preview/pr-123/blog/2021-11-19-whats-new-in-0.4.0"},nextItem:{title:"What's new in SeaORM 0.2.4",permalink:"/preview/pr-123/blog/2021-10-01-whats-new-in-0.2.4"}},s={authorsImageUrls:[void 0]},p=[{value:"Transaction",id:"transaction",level:2},{value:"Streaming",id:"streaming",level:2},{value:"API for custom logic on save &amp; delete",id:"api-for-custom-logic-on-save--delete",level:2},{value:"Generate Entity Models That Derive Serialize / Deserialize",id:"generate-entity-models-that-derive-serialize--deserialize",level:2},{value:"Introduce <code>DeriveIntoActiveModel</code> macro &amp; <code>IntoActiveValue</code> Trait",id:"introduce-deriveintoactivemodel-macro--intoactivevalue-trait",level:2},{value:"Community",id:"community",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.3.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.3.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/222"},"#222"),"] Use database transaction to perform atomic operations"),(0,r.kt)("p",null,"Two transaction APIs are provided:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"closure")," style. Will be committed on Ok and rollback on Err."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, _, DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RAII style. ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," the transaction followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"txn")," goes out of scope, it'd automatically rollback."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let txn = db.begin().await?;\n\n// do something with txn\n\ntxn.commit().await?;\n")))),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marco Napetti")))),(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Chris Tsang"))))),(0,r.kt)("h2",{id:"streaming"},"Streaming"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/222"},"#222"),"] Use async stream on any ",(0,r.kt)("inlineCode",{parentName:"p"},"Select")," for memory efficiency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let mut stream = Fruit::find().stream(&db).await?;\n\nwhile let Some(item) = stream.try_next().await? {\n    let item: fruit::ActiveModel = item.into();\n    // do something with item\n}\n")),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marco Napetti"))))),(0,r.kt)("h2",{id:"api-for-custom-logic-on-save--delete"},"API for custom logic on save & delete"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/210"},"#210"),"] We redefined the trait methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModelBehavior"),". You can now perform custom validation before and after ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"save"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," actions. You can abort an action even after it is done, if you are inside a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl ActiveModelBehavior for ActiveModel {\n    // Override default values\n    fn new() -> Self {\n        Self {\n            serial: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    // Triggered before insert / update\n    fn before_save(self, insert: bool) -> Result<Self, DbErr> {\n        if self.price.as_ref() <= &0.0 {\n            Err(DbErr::Custom(format!(\n                "[before_save] Invalid Price, insert: {}",\n                insert\n            )))\n        } else {\n            Ok(self)\n        }\n    }\n\n    // Triggered after insert / update\n    fn after_save(self, insert: bool) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n\n    // Triggered before delete\n    fn before_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n\n    // Triggered after delete\n    fn after_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n}\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MuhannadAlrusayni"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/14802524?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Muhannad")))),(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,r.kt)("h2",{id:"generate-entity-models-that-derive-serialize--deserialize"},"Generate Entity Models That Derive Serialize / Deserialize"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/237"},"#237"),"] You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," to generate entity models that also derive serde ",(0,r.kt)("inlineCode",{parentName:"p"},"Serialize")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize")," traits."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'//! SeaORM Entity. Generated by sea-orm-codegen 0.3.0\n\nuse sea_orm::entity::prelude:: * ;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    #[sea_orm(column_type = "Text", nullable)]\n    pub name: Option<String> ,\n}\n\n// ...\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/elbart"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/48974?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Tim Eggert"))))),(0,r.kt)("h2",{id:"introduce-deriveintoactivemodel-macro--intoactivevalue-trait"},"Introduce ",(0,r.kt)("inlineCode",{parentName:"h2"},"DeriveIntoActiveModel")," macro & ",(0,r.kt)("inlineCode",{parentName:"h2"},"IntoActiveValue")," Trait"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/240"},"#240"),"] introduced a new derive macro ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveIntoActiveModel")," for implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IntoActiveModel")," on structs. This is useful when creating your own struct with only partial fields of a model, for example as a form submission in a REST API."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IntoActiveValue")," trait allows converting ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<T>")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveValue<T>")," with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"into_active_value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Define regular model as usual\n#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel)]\n#[sea_orm(table_name = "users")]\npub struct Model {\n    pub id: Uuid,\n    pub created_at: DateTimeWithTimeZone,\n    pub updated_at: DateTimeWithTimeZone,\n    pub email: String,\n    pub password: String,\n    pub full_name: Option<String>,\n    pub phone: Option<String>,\n}\n\n// Create a new struct with some fields omitted\n#[derive(DeriveIntoActiveModel)]\npub struct NewUser {\n    // id, created_at and updated_at are omitted from this struct,\n    // and will always be `ActiveValue::unset`\n    pub email: String,\n    pub password: String,\n    // Full name is usually optional, but it can be required here\n    pub full_name: String,\n    // Option implements `IntoActiveValue`, and when `None` will be `unset`\n    pub phone: Option<String>,\n}\n\n#[derive(DeriveIntoActiveModel)]\npub struct UpdateUser {\n    // Option<Option<T>> allows for Some(None) to update the column to be NULL\n    pub phone: Option<Option<String>>,\n}\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Acidic9"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/16362377?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Ari Seyhun"))))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,r.kt)("p",null,"Here is the roadmap for SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/4"},(0,r.kt)("inlineCode",{parentName:"a"},"0.4.x")),"."))}m.isMDXComponent=!0}}]);