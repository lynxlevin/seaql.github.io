"use strict";(self.webpackChunksea_orm_x=self.webpackChunksea_orm_x||[]).push([[474],{5641:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(1308),a=(n(6687),n(5641));const o={},i="What is SeaORM X",s={unversionedId:"introduction/orm",id:"introduction/orm",title:"What is SeaORM X",description:"SeaORM X stands for SeaORM eXtended, and is built on top of SeaORM, add support for other database backends. The architecture of SeaORM X remains the same.",source:"@site/docs/01-introduction/01-orm.md",sourceDirName:"01-introduction",slug:"/introduction/orm",permalink:"/preview/pr-127/SeaORM-X/docs/introduction/orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM-X/docs/01-introduction/01-orm.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721788953,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/preview/pr-127/SeaORM-X/docs/index"},next:{title:"Tutorial & Examples",permalink:"/preview/pr-127/SeaORM-X/docs/introduction/tutorial"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-seaorm-x"},"What is SeaORM X"),(0,a.kt)("p",null,"SeaORM X stands for SeaORM eXtended, and is built on top of SeaORM, add support for other database backends. The architecture of SeaORM X remains the same."),(0,a.kt)("p",null,"The MSSQL (aka SQL Server) backend is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"tiberius"),", and in the future, could be ",(0,a.kt)("inlineCode",{parentName:"p"},"SQLx Pro"),". We have implemented many additional features in our driver library, including: transaction (and nested transaction), connection pooling and multiple async runtime support."),(0,a.kt)("p",null,"SeaQuery X extends SeaQuery, adding the support of MSSQL query building and MSSQL specific types, statements and syntax."),(0,a.kt)("p",null,"SeaSchema X extends SeaSchema, adding the support of MSSQL schema definition, discovery, serialization and reconstruction."),(0,a.kt)("p",null,"SeaORM X extends SeaORM, integrating SeaQuery X and SeaSchema X and offering complete support for MSSQL, and of course, working around the nuances of MSSQL. We aim to offer an experience as good as SeaORM by porting all test cases and examples, complemented by MSSQL specific documentation."),(0,a.kt)("p",null,"All libraries are supersets of their open-source versions, so it's possible to interop say MySQL and MSSQL in the same codebase."),(0,a.kt)("p",null,"In the future, we'd also like to include Seaography in the bundle, allowing developers to easily create admin dashboards."),(0,a.kt)("p",null,"SeaORM X is now in closed-beta, and will be based on SeaORM ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),", so the API surface will be stable and supported long term. We offer an Evaluation License and a Production License with two support tiers. If you are interested, please ",(0,a.kt)("a",{parentName:"p",href:"https://forms.office.com/r/1MuRPJmYBR"},"contact us")," for pricing information."))}p.isMDXComponent=!0}}]);