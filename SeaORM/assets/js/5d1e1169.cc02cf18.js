"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[68220],{48859:(n,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>f});var t=i(76687);function o(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function a(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function l(n,e){if(null==n)return{};var i,t,o=function(n,e){if(null==n)return{};var i,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(o[i]=n[i]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}var c=t.createContext({}),d=function(n){var e=t.useContext(c),i=e;return n&&(i="function"==typeof n?n(e):r(r({},e),n)),i},u=function(n){var e=d(n.components);return t.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var i=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=d(i),f=o,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return i?t.createElement(m,r(r({ref:e},u),{},{components:i})):t.createElement(m,r({ref:e},u))}));function f(n,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=i.length,r=new Array(a);r[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1458:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(31308),o=(i(76687),i(48859));const a={},r="Custom Join Condition",l={unversionedId:"relation/custom-join-condition",id:"relation/custom-join-condition",title:"Custom Join Condition",description:"Sometimes you might want to join on another table with custom conditions, such as:",source:"@site/docs/06-relation/06-custom-join-condition.md",sourceDirName:"06-relation",slug:"/relation/custom-join-condition",permalink:"/SeaORM/docs/next/relation/custom-join-condition",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-relation/06-custom-join-condition.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1702615350,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self Referencing",permalink:"/SeaORM/docs/next/relation/self-referencing"},next:{title:"Data Loader",permalink:"/SeaORM/docs/next/relation/data-loader"}},c={},d=[{value:"Relation",id:"relation",level:2},{value:"Linked",id:"linked",level:2},{value:"Custom Join",id:"custom-join",level:2}],u={toc:d};function s(n){let{components:e,...i}=n;return(0,o.kt)("wrapper",(0,t.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-join-condition"},"Custom Join Condition"),(0,o.kt)("p",null,"Sometimes you might want to join on another table with custom conditions, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    `cake`.`id`,\n    `cake`.`name`\nFROM\n    `cake`\n    LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id`\n    AND `fruit`.`name` LIKE '%tropical%' -- Custom Join Condition\n")),(0,o.kt)("p",null,"It can be done via one of the following ways."),(0,o.kt)("h2",{id:"relation"},"Relation"),(0,o.kt)("p",null,"Add your additional join conditions directly to the relation enum. The easiest way is to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"sea_query::SimpleExpr")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"on_condition")," procedural macros attribute."),(0,o.kt)("p",null,"If you want to have an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," condition, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},'condition_type = "any"')," to alter the relation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n    #[sea_orm(\n        has_many = "super::fruit::Entity",\n        // Additional on_condition, accept anything that implements `sea_query::IntoCondition`\n        on_condition = r#"super::fruit::Column::Name.like("%tropical%")"#\n    )]\n    TropicalFruit,\n    #[sea_orm(\n        has_many = "super::fruit::Entity",\n        on_condition = r#"super::fruit::Column::Name.like("%tropical%")"#\n        condition_type = "any",\n    )]\n    OrTropicalFruit,\n}\n')),(0,o.kt)("p",null,"The procedural macros above will be expanded into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n    TropicalFruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n            Self::TropicalFruit => Entity::has_many(super::fruit::Entity)\n                .on_condition(|_left, _right| {\n                    super::fruit::Column::Name.like("%tropical%")\n                        .into_condition()\n                })\n                .into(),\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The resulting SQL will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .join(JoinType::LeftJoin, cake::Relation::TropicalFruit.def())\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` AND `fruit`.`name` LIKE \'%tropical%\'",\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("h2",{id:"linked"},"Linked"),(0,o.kt)("p",null,"You can also define custom join conditions on ",(0,o.kt)("inlineCode",{parentName:"p"},"Linked"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\npub struct CheeseCakeToFillingVendor;\n\nimpl Linked for CheeseCakeToFillingVendor {\n    type FromEntity = super::cake::Entity;\n\n    type ToEntity = super::vendor::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            super::cake_filling::Relation::Cake\n                .def()\n                // The `on_condition` method takes a closure with parameters\n                // denoting the left-hand side and right-hand side table in the join expression.\n                .on_condition(|left, _right| {\n                    Expr::tbl(left, super::cake::Column::Name)\n                        .like("%cheese%")\n                        .into_condition()\n                })\n                .rev(),\n            super::cake_filling::Relation::Filling.def(),\n            super::filling::Relation::Vendor.def(),\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The resulting SQL will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(entity_linked::CheeseCakeToFillingVendor)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        r#"SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,"#,\n        r#"`r2`.`id` AS `B_id`, `r2`.`name` AS `B_name`"#,\n        r#"FROM `cake`"#,\n        r#"LEFT JOIN `cake_filling` AS `r0` ON `cake`.`id` = `r0`.`cake_id` AND `cake`.`name` LIKE \'%cheese%\'"#,\n        r#"LEFT JOIN `filling` AS `r1` ON `r0`.`filling_id` = `r1`.`id`"#,\n        r#"LEFT JOIN `vendor` AS `r2` ON `r1`.`vendor_id` = `r2`.`id`"#,\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("h2",{id:"custom-join"},"Custom Join"),(0,o.kt)("p",null,"Lastly, custom join conditions can be defined at the point you construct the join expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .join(JoinType::LeftJoin, cake::Relation::TropicalFruit.def())\n        .join(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Cake\n                .def()\n                .rev()\n                .on_condition(|_left, right| {\n                    Expr::col((right, cake_filling::Column::CakeId))\n                        .gt(10)\n                        .into_condition()\n                })\n        )\n        .join(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Filling\n                .def()\n                .on_condition(|_left, right| {\n                    Expr::col((right, filling::Column::Name))\n                        .like("%lemon%")\n                        .into_condition()\n                })\n        )\n        .join(JoinType::LeftJoin, filling::Relation::Vendor.def())\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` AND `fruit`.`name` LIKE \'%tropical%\'",\n        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id` AND `cake_filling`.`cake_id` > 10",\n        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id` AND `filling`.`name` LIKE \'%lemon%\'",\n        "LEFT JOIN `vendor` ON `filling`.`vendor_id` = `vendor`.`id`",\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OR")," condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .column_as(\n            Expr::col((Alias::new("cake_filling_alias"), cake_filling::Column::CakeId)),\n            "cake_filling_cake_id"\n        )\n        .join(JoinType::LeftJoin, cake::Relation::OrTropicalFruit.def())\n        .join_as_rev(\n            JoinType::LeftJoin,\n            cake_filling::Relation::Cake\n                .def()\n                .condition_type(ConditionType::Any)\n                .on_condition(|left, _right| {\n                    Expr::col((left, cake_filling::Column::CakeId))\n                        .gt(10)\n                        .into_condition()\n                }),\n            Alias::new("cake_filling_alias")\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, `cake_filling_alias`.`cake_id` AS `cake_filling_cake_id` FROM `cake`",\n        "LEFT JOIN `fruit` ON `cake`.`id` = `fruit`.`cake_id` OR `fruit`.`name` LIKE \'%tropical%\'",\n        "LEFT JOIN `cake_filling` AS `cake_filling_alias` ON `cake_filling_alias`.`cake_id` = `cake`.`id` OR `cake_filling_alias`.`cake_id` > 10",\n    ]\n    .join(" ")\n);\n')))}s.isMDXComponent=!0}}]);