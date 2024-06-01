"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[56646],{48859:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(76687);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(31308),o=(t(76687),t(48859));const i={},a="Custom Joins",l={unversionedId:"advanced-query/custom-joins",id:"version-0.5.x/advanced-query/custom-joins",title:"Custom Joins",description:"You can use the join method to construct complex join select queries. It takes any RelationDef defined in entity files, and you can define relation with the belongs_to method as well. Join type is specified using JoinType such as inner join, left join and right join.",source:"@site/versioned_docs/version-0.5.x/08-advanced-query/04-custom-joins.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-joins",permalink:"/SeaORM/docs/0.5.x/advanced-query/custom-joins",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/08-advanced-query/04-custom-joins.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1717256439,formattedLastUpdatedAt:"Jun 1, 2024",sidebarPosition:4,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Aggregate Functions",permalink:"/SeaORM/docs/0.5.x/advanced-query/aggregate-function"},next:{title:"Subquery",permalink:"/SeaORM/docs/0.5.x/advanced-query/subquery"}},c={},s=[],u={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-joins"},"Custom Joins"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," method to construct complex join select queries. It takes any ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationDef")," defined in entity files, and you can define relation with the ",(0,o.kt)("inlineCode",{parentName:"p"},"belongs_to")," method as well. Join type is specified using ",(0,o.kt)("inlineCode",{parentName:"p"},"JoinType")," such as inner join, left join and right join."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{JoinType, RelationTrait};\nuse sea_query::Expr;\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(filling::Column::Id.count(), "count")\n        .join_rev(\n            // construct `RelationDef` on the fly\n            JoinType::InnerJoin,\n            cake_filling::Entity::belongs_to(cake::Entity)\n                .from(cake_filling::Column::CakeId)\n                .to(cake::Column::Id)\n                .into()\n        )\n        // reuse a `Relation` from existing Entity\n        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n        .group_by(cake::Column::Id)\n        .having(filling::Column::Id.count().equals(Expr::value(2)))\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count` FROM `cake`",\n        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",\n        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n        "GROUP BY `cake`.`id`",\n        "HAVING COUNT(`filling`.`id`) = 2",\n    ]\n    .join(" ")\n);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,o.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of such complex query. See ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.5.x/advanced-query/custom-select#handling-custom-selects"},"here")," for details.")))}d.isMDXComponent=!0}}]);