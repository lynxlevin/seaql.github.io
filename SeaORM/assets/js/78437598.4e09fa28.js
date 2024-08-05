"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[52717],{48859:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,c=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return n?i.createElement(c,r(r({ref:t},s),{},{components:n})):i.createElement(c,r({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(31308),a=(n(76687),n(48859));const o={},r="One to One",l={unversionedId:"relation/one-to-one",id:"version-0.12.x/relation/one-to-one",title:"One to One",description:"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our SeaQL Community Survey? This is essential for the continued development and maintenance of SeaORM.",source:"@site/versioned_docs/version-0.12.x/06-relation/01-one-to-one.md",sourceDirName:"06-relation",slug:"/relation/one-to-one",permalink:"/SeaORM/docs/0.12.x/relation/one-to-one",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/06-relation/01-one-to-one.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722851639,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw SQL",permalink:"/SeaORM/docs/0.12.x/basic-crud/raw-sql"},next:{title:"One to Many",permalink:"/SeaORM/docs/0.12.x/relation/one-to-many"}},p={},u=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"one-to-one"},"One to One"),(0,a.kt)("admonition",{title:"We need your help! \ud83d\udcdd",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our ",(0,a.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"SeaQL Community Survey"),"? This is essential for the continued development and maintenance of SeaORM.")),(0,a.kt)("p",null,"A one-to-one relation is the most basic type of database relation. Let say a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,a.kt)("inlineCode",{parentName:"p"},"Fruit")," topping."),(0,a.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity, to define the relation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a new variant ",(0,a.kt)("inlineCode",{parentName:"li"},"Fruit")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relation")," enum."),(0,a.kt)("li",{parentName:"ol"},"Define it with ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity::has_one()"),"."),(0,a.kt)("li",{parentName:"ol"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"Related<Entity>")," trait.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_one(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_one = "super::fruit::Entity")]\n    Fruit,\n}\n\n// `Related` trait has to be implemented by hand\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n')),(0,a.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fruit")," entity, its ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_id")," attribute is referencing the primary key of ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity."),(0,a.kt)("p",null,"To define the inverse relation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a new enum variant ",(0,a.kt)("inlineCode",{parentName:"li"},"Relation::Cake")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Fruit")," entity."),(0,a.kt)("li",{parentName:"ol"},"Write the definition of it with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," method, we always define the inverse relation using this method."),(0,a.kt)("li",{parentName:"ol"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"Related<cake::Entity>")," trait.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n\n// `Related` trait has to be implemented by hand\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n')))}m.isMDXComponent=!0}}]);