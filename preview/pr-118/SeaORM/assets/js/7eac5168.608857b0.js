"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8355],{48859:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var i=t(76687);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=i.createContext({}),d=function(n){var e=i.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=d(n.components);return i.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||r;return t?i.createElement(f,a(a({ref:e},u),{},{components:t})):i.createElement(f,a({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93254:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(31308),o=(t(76687),t(48859));const r={},a="Custom Join Condition",l={unversionedId:"relation/custom-join-condition",id:"version-0.11.x/relation/custom-join-condition",title:"Custom Join Condition",description:"Sometimes you might want to join on another table with custom conditions, such as:",source:"@site/versioned_docs/version-0.11.x/06-relation/06-custom-join-condition.md",sourceDirName:"06-relation",slug:"/relation/custom-join-condition",permalink:"/preview/pr-118/SeaORM/docs/0.11.x/relation/custom-join-condition",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/06-relation/06-custom-join-condition.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712040915,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self Referencing",permalink:"/preview/pr-118/SeaORM/docs/0.11.x/relation/self-referencing"},next:{title:"Data Loader",permalink:"/preview/pr-118/SeaORM/docs/0.11.x/relation/data-loader"}},c={},d=[{value:"Relation",id:"relation",level:2},{value:"Linked",id:"linked",level:2},{value:"Custom Join",id:"custom-join",level:2}],u={toc:d};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-join-condition"},"Custom Join Condition"),(0,o.kt)("p",null,"Sometimes you might want to join on another table with custom conditions, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    `cake`.`id`,\n    `cake`.`name`\nFROM\n    `cake`\n    LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id`\n    AND `fruit`.`name` LIKE '%tropical%' -- Custom Join Condition\n")),(0,o.kt)("p",null,"It can be done via one of the following ways."),(0,o.kt)("h2",{id:"relation"},"Relation"),(0,o.kt)("p",null,"Add your additional join conditions directly to the relation enum. The easiest way is to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"sea_query::SimpleExpr")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"on_condition")," procedural macros attribute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n    #[sea_orm(\n        has_many = "super::fruit::Entity",\n        // Additional on_condition, accept anything implemented `sea_query::IntoCondition`\n        on_condition = r#"super::fruit::Column::Name.like("%tropical%")"#\n    )]\n    TropicalFruit,\n}\n')),(0,o.kt)("p",null,"The procedural macros above will be expanded into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n    TropicalFruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n            Self::TropicalFruit => Entity::has_many(super::fruit::Entity)\n                .on_condition(|_left, _right| {\n                    super::fruit::Column::Name.like("%tropical%")\n                        .into_condition()\n                })\n                .into(),\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The resulting SQL will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .join(JoinType::LeftJoin, cake::Relation::TropicalFruit.def())\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` AND `fruit`.`name` LIKE \'%tropical%\'",\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("h2",{id:"linked"},"Linked"),(0,o.kt)("p",null,"You can also define custom join conditions on ",(0,o.kt)("inlineCode",{parentName:"p"},"Linked"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\npub struct CheeseCakeToFillingVendor;\n\nimpl Linked for CheeseCakeToFillingVendor {\n    type FromEntity = super::cake::Entity;\n\n    type ToEntity = super::vendor::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            super::cake_filling::Relation::Cake\n                .def()\n                // The `on_condition` method takes a closure with parameters\n                // denoting the left-hand side and right-hand side table in the join expression.\n                .on_condition(|left, _right| {\n                    Expr::tbl(left, super::cake::Column::Name)\n                        .like("%cheese%")\n                        .into_condition()\n                })\n                .rev(),\n            super::cake_filling::Relation::Filling.def(),\n            super::filling::Relation::Vendor.def(),\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The resulting SQL will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(entity_linked::CheeseCakeToFillingVendor)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        r#"SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,"#,\n        r#"`r2`.`id` AS `B_id`, `r2`.`name` AS `B_name`"#,\n        r#"FROM `cake`"#,\n        r#"LEFT JOIN `cake_filling` AS `r0` ON `cake`.`id` = `r0`.`cake_id` AND `cake`.`name` LIKE \'%cheese%\'"#,\n        r#"LEFT JOIN `filling` AS `r1` ON `r0`.`filling_id` = `r1`.`id`"#,\n        r#"LEFT JOIN `vendor` AS `r2` ON `r1`.`vendor_id` = `r2`.`id`"#,\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("h2",{id:"custom-join"},"Custom Join"),(0,o.kt)("p",null,"Last but not least, custom join conditions can be defined at the point you construct the join expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .join(JoinType::LeftJoin, cake::Relation::TropicalFruit.def())\n        .join(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Cake\n                .def()\n                .rev()\n                .on_condition(|_left, right| {\n                    Expr::tbl(right, cake_filling::Column::CakeId)\n                        .gt(10)\n                        .into_condition()\n                })\n        )\n        .join(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Filling\n                .def()\n                .on_condition(|_left, right| {\n                    Expr::tbl(right, filling::Column::Name)\n                        .like("%lemon%")\n                        .into_condition()\n                })\n        )\n        .join(JoinType::LeftJoin, filling::Relation::Vendor.def())\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` AND `fruit`.`name` LIKE \'%tropical%\'",\n        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id` AND `cake_filling`.`cake_id` > 10",\n        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id` AND `filling`.`name` LIKE \'%lemon%\'",\n        "LEFT JOIN `vendor` ON `filling`.`vendor_id` = `vendor`.`id`",\n    ]\n    .join(" ")\n);\n')))}s.isMDXComponent=!0}}]);