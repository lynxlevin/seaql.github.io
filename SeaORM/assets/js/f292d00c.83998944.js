"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[65985],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(31308),r=(n(76687),n(48859));const i={},o="Update",p={unversionedId:"basic-crud/update",id:"version-0.11.x/basic-crud/update",title:"Update",description:"Update One",source:"@site/versioned_docs/version-0.11.x/05-basic-crud/04-update.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/update",permalink:"/SeaORM/docs/0.11.x/basic-crud/update",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/05-basic-crud/04-update.md",tags:[],version:"0.11.x",lastUpdatedBy:"Paul Hansen",lastUpdatedAt:1723927405,formattedLastUpdatedAt:"Aug 17, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/SeaORM/docs/0.11.x/basic-crud/insert"},next:{title:"Save",permalink:"/SeaORM/docs/0.11.x/basic-crud/save"}},u={},l=[{value:"Update One",id:"update-one",level:2},{value:"Update Many",id:"update-many",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update"},"Update"),(0,r.kt)("h2",{id:"update-one"},"Update One"),(0,r.kt)("p",null,"You will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," from find result. If you want to save the model back into the database, you need to convert it into an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," ",(0,r.kt)("em",{parentName:"p"},"first"),". The generated query will only include the ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// SQL: `UPDATE "fruit" SET "name" = \'Sweet pear\' WHERE "id" = 28`\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,r.kt)("p",null,"To update all attributes, you can convert ",(0,r.kt)("inlineCode",{parentName:"p"},"Unchanged")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// Set a specific attribute as "dirty" (force update)\npear.reset(fruit::Column::CakeId);\n// Or, set all attributes as "dirty" (force update)\npear.reset_all();\n\n// SQL: `UPDATE "fruit" SET "name" = \'Sweet pear\', "cake_id" = 10 WHERE "id" = 28`\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,r.kt)("h2",{id:"update-many"},"Update Many"),(0,r.kt)("p",null,"You can also update multiple rows in the database without finding each ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Bulk set attributes using ActiveModel\nlet update_result: UpdateResult = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// UPDATE `fruit` SET `cake_id` = 1 WHERE `fruit`.`name` LIKE '%Apple%'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(1))\n    .filter(fruit::Column::Name.contains(\"Apple\"))\n    .exec(db)\n    .await?;\n")))}c.isMDXComponent=!0}}]);