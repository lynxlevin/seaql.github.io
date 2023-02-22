"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={},i="Entity Structure",o={unversionedId:"generate-entity/entity-structure",id:"generate-entity/entity-structure",title:"Entity Structure",description:"Let's look at a simple Cake entity.",source:"@site/docs/04-generate-entity/02-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/next/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-generate-entity/02-entity-structure.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677062123,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using sea-orm-cli",permalink:"/SeaORM/docs/next/generate-entity/sea-orm-cli"},next:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"}},p={},m=[{value:"Entity",id:"entity",level:2},{value:"Table Name",id:"table-name",level:3},{value:"Column",id:"column",level:2},{value:"Column Name",id:"column-name",level:3},{value:"Column Type",id:"column-type",level:3},{value:"Additional Properties",id:"additional-properties",level:3},{value:"Ignore Attribute",id:"ignore-attribute",level:3},{value:"Cast Column Type on Select and Save",id:"cast-column-type-on-select-and-save",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"Auto Increment",id:"auto-increment",level:3},{value:"Composite Key",id:"composite-key",level:3},{value:"Relation",id:"relation",level:2},{value:"Active Model Behavior",id:"active-model-behavior",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,r.kt)("p",null,"Let's look at a simple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Do not delete ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," enum or ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModelBehavior")," impl block even if you do not want any relations or additional behavior.\nKeep their body empty is enough to make the entity just work.")),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," macro does all the heavy lifting of defining an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," with associating ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),"."),(0,r.kt)("h3",{id:"table-name"},"Table Name"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," attribute specifies the corresponding table in the database.\nOptionally, you can also specify the database schema or database name by ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("h3",{id:"column-name"},"Column Name"),(0,r.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_name = "name")]\npub name: String\n')),(0,r.kt)("h3",{id:"column-type"},"Column Type"),(0,r.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,r.kt)("p",null,"For the mappings of Rust primitive data types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"SQLite ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"PostgreSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Char"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i32")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u32")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f32")),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f64")),(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"bytea")))),(0,r.kt)("p",null,"For the mappings of Rust non-primitive data types. You can check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," for all of the reexported types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"SQLite ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"PostgreSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp with time zone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn"),(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"binary(16)"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Json"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal")))),(0,r.kt)("p",null,"You can override the default mappings between a Rust type and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnType")," by the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,r.kt)("p",null,"If you need your JSON field to be deserialized into a struct. You would need to derive ",(0,r.kt)("inlineCode",{parentName:"p"},"FromJsonQueryResult")," for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_struct")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // JSON column defined in `serde_json::Value`\n    pub json: Json,\n    // JSON column defined in custom struct\n    pub json_value: KeyValue,\n    pub json_value_opt: Option<KeyValue>,\n}\n\n// The custom struct must derive `FromJsonQueryResult`, `Serialize` and `Deserialize`\n#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, FromJsonQueryResult)]\npub struct KeyValue {\n    pub id: i32,\n    pub name: String,\n    pub price: f32,\n    pub notes: Option<String>,\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Array datatype is supported for PostgreSQL, you can define a vector of any types that are already supported by SeaORM in the model. Keep in mind that you need to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres-array")," feature and this is a Postgres only feature.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "collection")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub integers: Vec<i32>,\n    pub integers_opt: Option<Vec<i32>>,\n    pub floats: Vec<f32>,\n    pub doubles: Vec<f64>,\n    pub strings: Vec<String>,\n}\n')),(0,r.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,r.kt)("p",null,"You can add additional properties ",(0,r.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indexed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," to a column."),(0,r.kt)("p",null,"If you specified a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," for an optional attribute, you must also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,r.kt)("h3",{id:"ignore-attribute"},"Ignore Attribute"),(0,r.kt)("p",null,"If you want to ignore a particular model attribute such that it maps to no database column, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,r.kt)("h3",{id:"cast-column-type-on-select-and-save"},"Cast Column Type on Select and Save"),(0,r.kt)("p",null,"If you need to select a column as one type but save it into the database as another, you can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_as")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"save_as")," attributes to perform the casting. A typical use case is selecting a column of type ",(0,r.kt)("inlineCode",{parentName:"p"},"citext")," (case-insensitive text) as ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," in Rust and saving it into the database as ",(0,r.kt)("inlineCode",{parentName:"p"},"citext"),". One should define the model field as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(select_as = "text", save_as = "citext")]\npub case_insensitive_text: String\n')),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," attribute to mark a column as the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,r.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is implied for ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," column. Override it by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,r.kt)("h3",{id:"composite-key"},"Composite Key"),(0,r.kt)("p",null,"This is usually the case in junction tables, where a two-column tuple is used as the primary key. Simply annotate multiple columns to define a composite primary key. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for composite key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," is a macro to help you implement the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.RelationTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.kt)("p",null,"If there are no relations, simply write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.Related.html"},"Related")," trait connects entities together, such that you can build queries selecting both entities."),(0,r.kt)("p",null,"Learn more about relations in the ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/relation/one-to-one"},"Relation")," chapter."),(0,r.kt)("h2",{id:"active-model-behavior"},"Active Model Behavior"),(0,r.kt)("p",null,"Handlers for different actions on an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel"),". For example, you can perform custom validation logic or trigger side effects. Inside a transaction, you can even abort an action after it is done, preventing it from saving into the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[async_trait]\nimpl ActiveModelBehavior for ActiveModel {\n    /// Create a new ActiveModel with default values. Also used by `Default::default()`.\n    fn new() -> Self {\n        Self {\n            uuid: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    /// Will be triggered before insert / update\n    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        if self.price.as_ref() <= &0.0 {\n            Err(DbErr::Custom(format!(\n                "[before_save] Invalid Price, insert: {}",\n                insert\n            )))\n        } else {\n            Ok(self)\n        }\n    }\n\n    /// Will be triggered after insert / update\n    async fn after_save<C>(model: Model, db: &C, insert: bool) -> Result<Model, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        Ok(model)\n    }\n\n    /// Will be triggered before delete\n    async fn before_delete<C>(self, db: &C) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        Ok(self)\n    }\n\n    /// Will be triggered after delete\n    async fn after_delete<C>(self, db: &C) -> Result<Self, DbErr>\n    where\n        C: ConnectionTrait,\n    {\n        Ok(self)\n    }\n}\n')),(0,r.kt)("p",null,"If no customization is needed, simply write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl ActiveModelBehavior for ActiveModel {}\n")))}d.isMDXComponent=!0}}]);