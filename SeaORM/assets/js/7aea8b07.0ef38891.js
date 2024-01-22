"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[96981],{48859:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(31308),a=(r(76687),r(48859));const o={},l="Delete",i={unversionedId:"basic-crud/delete",id:"version-0.6.x/basic-crud/delete",title:"Delete",description:"Delete One",source:"@site/versioned_docs/version-0.6.x/06-basic-crud/05-delete.md",sourceDirName:"06-basic-crud",slug:"/basic-crud/delete",permalink:"/SeaORM/docs/0.6.x/basic-crud/delete",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/06-basic-crud/05-delete.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705892762,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Save",permalink:"/SeaORM/docs/0.6.x/basic-crud/save"},next:{title:"JSON",permalink:"/SeaORM/docs/0.6.x/basic-crud/json"}},c={},s=[{value:"Delete One",id:"delete-one",level:2},{value:"Delete Many",id:"delete-many",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete"},"Delete"),(0,a.kt)("h2",{id:"delete-one"},"Delete One"),(0,a.kt)("p",null,"Find a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from the database, then delete the corresponding row from database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\n\nlet res: DeleteResult = orange.delete(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,a.kt)("h2",{id:"delete-many"},"Delete Many"),(0,a.kt)("p",null,"You can also delete multiple rows from the database without finding each ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'\nlet res: DeleteResult = fruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains(\"Orange\"))\n    .exec(db)\n    .await?;\n\nassert_eq!(res.rows_affected, 2);\n")))}u.isMDXComponent=!0}}]);