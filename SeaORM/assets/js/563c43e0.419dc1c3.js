"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[82773],{48859:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>s});var a=n(76687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,N=k["".concat(m,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2504:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(31308),r=(n(76687),n(48859));const l={},i="Entity Structure",p={unversionedId:"generate-entity/entity-structure",id:"version-0.9.x/generate-entity/entity-structure",title:"Entity Structure",description:"Let's look at a simple Cake entity.",source:"@site/versioned_docs/version-0.9.x/04-generate-entity/02-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/0.9.x/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/04-generate-entity/02-entity-structure.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712803545,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using sea-orm-cli",permalink:"/SeaORM/docs/0.9.x/generate-entity/sea-orm-cli"},next:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/0.9.x/generate-entity/expanded-entity-structure"}},m={},u=[{value:"Entity",id:"entity",level:2},{value:"Table Name",id:"table-name",level:3},{value:"Column",id:"column",level:2},{value:"Column Name",id:"column-name",level:3},{value:"Column Type",id:"column-type",level:3},{value:"Additional Properties",id:"additional-properties",level:3},{value:"Ignore Attribute",id:"ignore-attribute",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"Auto Increment",id:"auto-increment",level:3},{value:"Composite Key",id:"composite-key",level:3},{value:"Relation",id:"relation",level:2}],o={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,r.kt)("p",null,"Let's look at a simple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," macro does all the heavy lifting of defining an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," with associating ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),"."),(0,r.kt)("h3",{id:"table-name"},"Table Name"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," attribute specifies the corresponding table in the database.\nOptionally, you can also specify the database schema or database name by ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("h3",{id:"column-name"},"Column Name"),(0,r.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_name = "name")]\npub name: String\n')),(0,r.kt)("h3",{id:"column-type"},"Column Type"),(0,r.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,r.kt)("p",null,"For the mappings of Rust primitive data types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"SQLite ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"PostgreSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Char"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i32")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u32")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f32")),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f64")),(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"bytea")))),(0,r.kt)("p",null,"For the mappings of Rust non-primitive data types. You can check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," for all of the reexported types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"SQLite ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL ",(0,r.kt)("br",null)," datatype"),(0,r.kt)("th",{parentName:"tr",align:null},"PostgreSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp with time zone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"binary(16)"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Json"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"real"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal")))),(0,r.kt)("p",null,"You can override the default mappings between a Rust type and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnType")," by the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,r.kt)("p",null,"If you need your JSON field to be deserialized into a struct. You would need to derive ",(0,r.kt)("inlineCode",{parentName:"p"},"FromJsonQueryResult")," for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_struct")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // JSON column defined in `serde_json::Value`\n    pub json: Json,\n    // JSON column defined in custom struct\n    pub json_value: KeyValue,\n    pub json_value_opt: Option<KeyValue>,\n}\n\n// The custom struct must derive `FromJsonQueryResult`, `Serialize` and `Deserialize`\n#[derive(Clone, Debug, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]\npub struct KeyValue {\n    pub id: i32,\n    pub name: String,\n    pub price: f32,\n    pub notes: Option<String>,\n}\n')),(0,r.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,r.kt)("p",null,"You can add additional properties ",(0,r.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indexed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," to a column."),(0,r.kt)("p",null,"If you specified a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," for an optional attribute, you must also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,r.kt)("h3",{id:"ignore-attribute"},"Ignore Attribute"),(0,r.kt)("p",null,"If you want to ignore a particular model attribute such that it maps to no database column, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," attribute to mark a column as the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,r.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is implied for ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," column. Override it by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,r.kt)("h3",{id:"composite-key"},"Composite Key"),(0,r.kt)("p",null,"This is usually the case in junction tables, where a two-column tuple is used as the primary key. Simply annotate multiple columns to define a composite primary key. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for composite key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro is a simple wrapper to impl the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.kt)("p",null,"expands into"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Learn more about relations in the next section."))}d.isMDXComponent=!0}}]);