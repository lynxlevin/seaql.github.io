"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[36562],{48859:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(31308),a=(r(76687),r(48859));const l={},o="Delete",i={unversionedId:"basic-crud/delete",id:"basic-crud/delete",title:"Delete",description:"Delete One",source:"@site/docs/05-basic-crud/06-delete.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/delete",permalink:"/SeaORM/docs/next/basic-crud/delete",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/05-basic-crud/06-delete.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1717256439,formattedLastUpdatedAt:"Jun 1, 2024",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Save",permalink:"/SeaORM/docs/next/basic-crud/save"},next:{title:"JSON",permalink:"/SeaORM/docs/next/basic-crud/json"}},s={},c=[{value:"Delete One",id:"delete-one",level:2},{value:"Delete by Primary Key",id:"delete-by-primary-key",level:2},{value:"Delete Many",id:"delete-many",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete"},"Delete"),(0,a.kt)("h2",{id:"delete-one"},"Delete One"),(0,a.kt)("p",null,"Find a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from the database, then delete the corresponding row from database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::entity::ModelTrait;\n\nlet orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\n\nlet res: DeleteResult = orange.delete(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,a.kt)("h2",{id:"delete-by-primary-key"},"Delete by Primary Key"),(0,a.kt)("p",null,"Instead of selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from the database then deleting it. You could also delete a row from database directly by its primary key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let res: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,a.kt)("h2",{id:"delete-many"},"Delete Many"),(0,a.kt)("p",null,"You can also delete multiple rows from the database without finding each ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'\nlet res: DeleteResult = fruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains(\"Orange\"))\n    .exec(db)\n    .await?;\n\nassert_eq!(res.rows_affected, 2);\n")))}u.isMDXComponent=!0}}]);