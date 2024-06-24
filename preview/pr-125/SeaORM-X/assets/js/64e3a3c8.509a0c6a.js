"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[521],{5641:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(6687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),k=d(n),N=r,c=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5668:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=n(1308),r=(n(6687),n(5641));const l={},i="Entity Structure",m={unversionedId:"generate-entity/entity-structure",id:"generate-entity/entity-structure",title:"Entity Structure",description:"Column",source:"@site/docs/04-generate-entity/02-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/preview/pr-125/SeaORM-X/docs/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/04-generate-entity/02-entity-structure.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719218483,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using sea-orm-cli",permalink:"/preview/pr-125/SeaORM-X/docs/generate-entity/sea-orm-cli"},next:{title:"Insert",permalink:"/preview/pr-125/SeaORM-X/docs/basic-crud/insert"}},p={},d=[{value:"Column",id:"column",level:2},{value:"Column Type",id:"column-type",level:3}],o={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("h3",{id:"column-type"},"Column Type"),(0,r.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,r.kt)("p",null,"For the mappings of Rust primitive data types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"MSSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Char"),(0,r.kt)("td",{parentName:"tr",align:null},"nchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"nvarchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u8")),(0,r.kt)("td",{parentName:"tr",align:null},"TinyUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u16")),(0,r.kt)("td",{parentName:"tr",align:null},"SmallUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i32")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u32")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigInteger"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u64")),(0,r.kt)("td",{parentName:"tr",align:null},"BigUnsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f32")),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f64")),(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"binary")))),(0,r.kt)("p",null,"For the mappings of Rust non-primitive data types. You can check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," for all of the reexported types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"),(0,r.kt)("th",{parentName:"tr",align:null},"MSSQL ",(0,r.kt)("br",null)," datatype"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone"),(0,r.kt)("td",{parentName:"tr",align:null},"datetimeoffset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn"),(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"uniqueidentifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Json"),(0,r.kt)("td",{parentName:"tr",align:null},"nvarchar(max)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal")))))}u.isMDXComponent=!0}}]);