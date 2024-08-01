"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[45126],{48859:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(76687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=r,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||o;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},46781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(31308),r=(t(76687),t(48859));const o={},i="One to Many",l={unversionedId:"relation/one-to-many",id:"version-0.7.x/relation/one-to-many",title:"One to Many",description:'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a Cake entity has at most one Fruit topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a Cake entity that might have many Fruit toppings.',source:"@site/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",sourceDirName:"07-relation",slug:"/relation/one-to-many",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/relation/one-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722493025,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"One to One",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/relation/one-to-one"},next:{title:"Many to Many",permalink:"/preview/pr-126/SeaORM/docs/0.7.x/relation/many-to-many"}},p={},s=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],m={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"one-to-many"},"One to Many"),(0,r.kt)("p",null,'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a ',(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit"),' topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a ',(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity that might have many ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," toppings."),(0,r.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,r.kt)("p",null,"This is almost identical to defining a one-to-one relation; the only difference is that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity::has_many()")," method here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,r.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,r.kt)("p",null,"It is the same as defining the one-to-one inverse relation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,r.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n')))}u.isMDXComponent=!0}}]);