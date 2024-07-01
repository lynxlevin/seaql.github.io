"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[62830],{48859:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(76687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),v=n,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(31308),n=(a(76687),a(48859));const i={},o="Save",l={unversionedId:"basic-crud/save",id:"version-0.10.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.10.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/preview/pr-125/SeaORM/docs/0.10.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/05-basic-crud/04-save.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1719834681,formattedLastUpdatedAt:"Jul 1, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/preview/pr-125/SeaORM/docs/0.10.x/basic-crud/update"},next:{title:"Delete",permalink:"/preview/pr-125/SeaORM/docs/0.10.x/basic-crud/delete"}},s={},c=[{value:"Save Behaviour",id:"save-behaviour",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"save"},"Save"),(0,n.kt)("p",null,"This is a helper method to save (insert / update) ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,n.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,n.kt)("p",null,"When saving an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"NotSet")),(0,n.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // primary key is NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\n// Insert, because primary key `id` is `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}d.isMDXComponent=!0}}]);