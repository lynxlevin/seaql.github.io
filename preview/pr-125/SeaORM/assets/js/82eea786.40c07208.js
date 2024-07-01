"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[152],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(31308),a=(n(76687),n(48859));const i={},l="Insert",o={unversionedId:"basic-crud/insert",id:"version-0.4.x/basic-crud/insert",title:"Insert",description:"Before diving into SeaORM insert we have to introduce ActiveValue and ActiveModel.",source:"@site/versioned_docs/version-0.4.x/05-basic-crud/02-insert.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/insert",permalink:"/preview/pr-125/SeaORM/docs/0.4.x/basic-crud/insert",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/05-basic-crud/02-insert.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719834681,formattedLastUpdatedAt:"Jul 1, 2024",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Select",permalink:"/preview/pr-125/SeaORM/docs/0.4.x/basic-crud/select"},next:{title:"Update",permalink:"/preview/pr-125/SeaORM/docs/0.4.x/basic-crud/update"}},s={},c=[{value:"ActiveValue",id:"activevalue",level:2},{value:"Model &amp; ActiveModel",id:"model--activemodel",level:2},{value:"Insert One",id:"insert-one",level:2},{value:"Insert Many",id:"insert-many",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insert"},"Insert"),(0,a.kt)("p",null,"Before diving into SeaORM insert we have to introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveValue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,a.kt)("h2",{id:"activevalue"},"ActiveValue"),(0,a.kt)("p",null,"A wrapper struct to capture the changes made to ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Set value\nlet _: ActiveValue<i32> = Set(10);\n\n// Unset value\nlet _: ActiveValue<i32> = Unset(None);\n")),(0,a.kt)("h2",{id:"model--activemodel"},"Model & ActiveModel"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," has all the attributes of ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," wrapped in ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveValue"),"."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," to insert a row with a subset of columns set."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// Get Model\nlet model: cake::Model = cheese.unwrap();\nassert_eq!(model.name, "Cheese Cake".to_owned());\n\n// Into ActiveModel\nlet active_model: cake::ActiveModel = model.into();\nassert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));\n')),(0,a.kt)("h2",{id:"insert-one"},"Insert One"),(0,a.kt)("p",null,"Insert an active model and get back a fresh ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel"),". Its value is retrieved from database, so any auto-generated fields will be populated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\nlet res: fruit::ActiveModel = pear.insert(db).await?;\n')),(0,a.kt)("p",null,"Insert an active model and get back the last insert id. Its type matches the model's primary key type, so it could be a tuple if the model has a composite primary key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\nlet res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;\nassert_eq!(res.last_insert_id, 28)\n')),(0,a.kt)("h2",{id:"insert-many"},"Insert Many"),(0,a.kt)("p",null,"Insert many active models and get back the last insert id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default()\n};\n\nlet orange = fruit::ActiveModel {\n    name: Set("Orange".to_owned()),\n    ..Default::default()\n};\n\nlet res: InsertResult = Fruit::insert_many(vec![apple, orange]).exec(db).await?;\nassert_eq!(res.last_insert_id, 30)\n')))}u.isMDXComponent=!0}}]);