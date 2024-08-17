"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[42088],{48859:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(76687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,m=p["".concat(s,".").concat(y)]||p[y]||l[y]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},30088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=t(31308),a=(t(76687),t(48859));const o={},i="Sub Query",u={unversionedId:"advanced-query/subquery",id:"version-0.8.x/advanced-query/subquery",title:"Sub Query",description:"Conditional Expression With Sub Query",source:"@site/versioned_docs/version-0.8.x/09-advanced-query/05-subquery.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/subquery",permalink:"/SeaORM/docs/0.8.x/advanced-query/subquery",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/09-advanced-query/05-subquery.md",tags:[],version:"0.8.x",lastUpdatedBy:"Paul Hansen",lastUpdatedAt:1723927405,formattedLastUpdatedAt:"Aug 17, 2024",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Joins",permalink:"/SeaORM/docs/0.8.x/advanced-query/custom-joins"},next:{title:"Transaction",permalink:"/SeaORM/docs/0.8.x/advanced-query/transaction"}},s={},c=[{value:"Conditional Expression With Sub Query",id:"conditional-expression-with-sub-query",level:2}],d={toc:c};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sub-query"},"Sub Query"),(0,a.kt)("h2",{id:"conditional-expression-with-sub-query"},"Conditional Expression With Sub Query"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"in_subquery")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"not_in_subquery")," methods to construct conditional expressions with sub-queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::Condition;\nuse sea_query::Query;\n\nassert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::any().add(\n                cake::Column::Id.in_subquery(\n                    Query::select()\n                        .expr(cake::Column::Id.max())\n                        .from(cake::Entity)\n                        .to_owned()\n                )\n            )\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",\n        "WHERE `cake`.`id` IN (SELECT MAX(`cake`.`id`) FROM `cake`)",\n    ]\n    .join(" ")\n);\n')))}l.isMDXComponent=!0}}]);