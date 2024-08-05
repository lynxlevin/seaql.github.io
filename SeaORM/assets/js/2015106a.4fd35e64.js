"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[69383],{48859:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>y});var t=r(76687);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return r?t.createElement(d,l(l({ref:n},p),{},{components:r})):t.createElement(d,l({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},21661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=r(31308),a=(r(76687),r(48859));const o={},l="New Type",i={unversionedId:"generate-entity/newtype",id:"version-0.12.x/generate-entity/newtype",title:"New Type",description:"You can define a New Type (T) and use it as model field. The following traits have to be implemented.",source:"@site/versioned_docs/version-0.12.x/04-generate-entity/05-newtype.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/newtype",permalink:"/SeaORM/docs/0.12.x/generate-entity/newtype",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/04-generate-entity/05-newtype.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722851639,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumeration",permalink:"/SeaORM/docs/0.12.x/generate-entity/enumeration"},next:{title:"Basic Schema",permalink:"/SeaORM/docs/0.12.x/basic-crud/basic-schema"}},s={},u=[],p={toc:u};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"new-type"},"New Type"),(0,a.kt)("p",null,"You can define a New Type (",(0,a.kt)("inlineCode",{parentName:"p"},"T"),") and use it as model field. The following traits have to be implemented."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"From<T>")," for ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/*/sea_query/value/enum.Value.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Value"))),(0,a.kt)("li",{parentName:"ol"},"Implement ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TryGetable.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_orm::TryGetable"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"T")),(0,a.kt)("li",{parentName:"ol"},"Implement ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/*/sea_query/value/trait.ValueType.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::ValueType"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"T")),(0,a.kt)("li",{parentName:"ol"},"If the field is ",(0,a.kt)("inlineCode",{parentName:"li"},"Option<T>"),", implement ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/*/sea_query/value/trait.Nullable.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Nullable"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"T"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "custom_value_type")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub number: Integer,\n    // Postgres only\n    pub str_vec: StringVec,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]\npub struct Integer(i32);\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]\npub struct StringVec(pub Vec<String>);\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Which `StringVec` expands to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl std::convert::From<StringVec> for Value {\n    fn from(source: StringVec) -> Self {\n        source.0.into()\n    }\n}\n\nimpl sea_orm::TryGetable for StringVec {\n    fn try_get_by<I: sea_orm::ColIdx>(res: &QueryResult, idx: I) -> Result<Self, sea_orm::TryGetError> {\n        <Vec<String> as sea_orm::TryGetable>::try_get_by(res, idx).map(|v| StringVec(v))\n    }\n}\n\nimpl sea_orm::sea_query::ValueType for StringVec {\n    fn try_from(v: Value) -> Result<Self, sea_orm::sea_query::ValueTypeErr> {\n        <Vec<String> as sea_orm::sea_query::ValueType>::try_from(v).map(|v| StringVec(v))\n    }\n\n    fn type_name() -> String {\n        stringify!(StringVec).to_owned()\n    }\n\n    fn array_type() -> sea_orm::sea_query::ArrayType {\n        sea_orm::sea_query::ArrayType::String\n    }\n\n    fn column_type() -> sea_orm::sea_query::ColumnType {\n        sea_orm::sea_query::ColumnType::String(None)\n    }\n}\n"))),(0,a.kt)("p",null,"You can also define a backend-generic ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>")," field by serialize / deserialize the object to / from JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_vec")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub str_vec: ObjectVec,\n}\n\n#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, FromJsonQueryResult)]\npub struct ObjectVec(pub Vec<MyObject>);\n\n#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]\npub struct MyObject {\n    ..\n}\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Which `ObjectVec` expands to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl sea_orm::TryGetableFromJson for ObjectVec {}\n\nimpl std::convert::From<ObjectVec> for sea_orm::Value {\n    fn from(source: ObjectVec) -> Self {\n        sea_orm::Value::Json(serde_json::to_value(&source).ok().map(|s| std::boxed::Box::new(s)))\n    }\n}\n\nimpl sea_orm::sea_query::ValueType for ObjectVec {\n    fn try_from(v: sea_orm::Value) -> Result<Self, sea_orm::sea_query::ValueTypeErr> {\n        match v {\n            sea_orm::Value::Json(Some(json)) => Ok(\n                serde_json::from_value(*json).map_err(|_| sea_orm::sea_query::ValueTypeErr)?,\n            ),\n            _ => Err(sea_orm::sea_query::ValueTypeErr),\n        }\n    }\n\n    fn type_name() -> String {\n        stringify!(ObjectVec).to_owned()\n    }\n\n    fn array_type() -> sea_orm::sea_query::ArrayType {\n        sea_orm::sea_query::ArrayType::Json\n    }\n\n    fn column_type() -> sea_orm::sea_query::ColumnType {\n        sea_orm::sea_query::ColumnType::Json\n    }\n}\n\nimpl sea_orm::sea_query::Nullable for ObjectVec {\n    fn null() -> sea_orm::Value {\n        sea_orm::Value::Json(None)\n    }\n}\n"))))}m.isMDXComponent=!0}}]);