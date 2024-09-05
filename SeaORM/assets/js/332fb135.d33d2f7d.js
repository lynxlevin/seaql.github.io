"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[47725],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(31308),r=(n(76687),n(48859));const i={},o="Architecture",s={unversionedId:"internal-design/architecture",id:"version-0.12.x/internal-design/architecture",title:"Architecture",description:"Let's dive under the Sea \ud83e\udd3f",source:"@site/versioned_docs/version-0.12.x/11-internal-design/04-architecture.md",sourceDirName:"11-internal-design",slug:"/internal-design/architecture",permalink:"/SeaORM/docs/0.12.x/internal-design/architecture",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/11-internal-design/04-architecture.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1725513601,formattedLastUpdatedAt:"Sep 5, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compare with Diesel",permalink:"/SeaORM/docs/0.12.x/internal-design/diesel"},next:{title:"What's Next for SeaORM?",permalink:"/SeaORM/docs/0.12.x/whats-next/whats-next"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's dive under the Sea \ud83e\udd3f")),(0,r.kt)("img",{width:"100%",src:"/SeaORM/img/SeaORM Architecture.svg"}),(0,r.kt)("p",null,"To understand the architecture of SeaORM, let's discuss what is an ORM. ORM exists to provide abstractions over common operations you would do against a database and hide the implementation details like the actual SQL queries."),(0,r.kt)("p",null,"With a good ORM, you shouldn't bother to look under the API surface. Until you do. I hear you say ",(0,r.kt)("em",{parentName:"p"},"'abstraction leaks'"),", and yes, it does."),(0,r.kt)("p",null,"The approach SeaORM takes is ",(0,r.kt)("strong",{parentName:"p"},"'layered abstraction'"),", where you'd dig one layer beneath if you want to. That's why we made SeaQuery into a standalone repository. It's useful on its own, and with a public API surface and a separate namespace, it's far more difficult to create confusing internal APIs than a monolithic approach."),(0,r.kt)("p",null,"The central idea in SeaORM is nearly everything is runtime configurable. At compile time, it does not know what the underlying database is."),(0,r.kt)("p",null,"What benefits does database-agnostic bring? For example, you can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make your app work on any database, depending on runtime configuration"),(0,r.kt)("li",{parentName:"ol"},"Use the same models and transfer them across different databases"),(0,r.kt)("li",{parentName:"ol"},"Share entities across different projects by creating a 'data structure crate', where the database is chosen by downstream 'behaviour crates'")),(0,r.kt)("p",null,"The API of SeaORM is not a thin shell, but consist of layers, with each layer underneath being less abstract."),(0,r.kt)("p",null,"There are different stages when the API is being utilized."),(0,r.kt)("p",null,"So there are two dimensions to navigate the SeaORM code base, ",(0,r.kt)("strong",{parentName:"p"},"'stage'")," and ",(0,r.kt)("strong",{parentName:"p"},"'abstractness'"),"."),(0,r.kt)("p",null,"First is the declaration stage. Entities and relations among them are being defined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityTrait"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnTrait")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait")," etc."),(0,r.kt)("p",null,"Second is the query building stage."),(0,r.kt)("p",null,"The top most layer is ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"find*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," methods, where you can intuitively perform basic CRUD operations."),(0,r.kt)("p",null,"One layer down, is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," structs, where they each have their own API for more advanced operations."),(0,r.kt)("p",null,"One layer down, is the SeaQuery ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectStatement"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InsertStatement"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateStatement")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteStatement"),", where they have a rich API for you to fiddle with the SQL syntax tree."),(0,r.kt)("p",null,"Third is the execution stage. A separate set of structs, ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Inserter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Updater")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Deleter"),", are responsible for executing the statements against a database connection."),(0,r.kt)("p",null,"Finally is the resolution stage, when query results are converted into Rust types and shoved into structs. Subsequently, if it is a relational query, the structs will be pieced together according to their relations."),(0,r.kt)("p",null,"Because only the execution and resolution stages are database specific, we have the possibility to use a different driver by replacing those."),(0,r.kt)("p",null,"I imagine some day, we will support a number of databases, with a matrix of different syntaxes, protocols and form-factors."))}d.isMDXComponent=!0}}]);