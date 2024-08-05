"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[50052],{48859:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(31308),a=(r(76687),r(48859));const o={},s="What's Next for SeaORM?",i={unversionedId:"whats-next/whats-next",id:"version-0.12.x/whats-next/whats-next",title:"What's Next for SeaORM?",description:"We still remember the time when we first introduced SeaORM to the Rust community two years ago.",source:"@site/versioned_docs/version-0.12.x/12-whats-next/01-whats-next.md",sourceDirName:"12-whats-next",slug:"/whats-next/whats-next",permalink:"/SeaORM/docs/0.12.x/whats-next/whats-next",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/12-whats-next/01-whats-next.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722833128,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/SeaORM/docs/0.12.x/internal-design/architecture"}},p={},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-next-for-seaorm"},"What's Next for SeaORM?"),(0,a.kt)("p",null,"We still remember the time when we first ",(0,a.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2021-09-20-introducing-sea-orm/"},"introduced SeaORM")," to the Rust community two years ago."),(0,a.kt)("p",null,"Today, many open-source projects, a handful of startups and many more closed-source projects are using SeaORM. If your company is using SeaORM and would like to be featured, please ",(0,a.kt)("a",{parentName:"p",href:"https://forms.office.com/r/YbeqfTAgkJ"},"submit a testimonial"),"."),(0,a.kt)("p",null,"If you are using SeaORM, please participate in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"Community Survey"),". Your response will influence the decisions we'd make regarding the project's future. In particular, is the current feature set good enough to be regarded 'stable'? Shall we name this release a ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),"? Or shall we mark this release as ",(0,a.kt)("inlineCode",{parentName:"p"},"LTS")," and support it for long? Will this drive adoption or hamper progress?"),(0,a.kt)("p",null,"Open-source project is a never-ending work, and we are actively looking for ways to sustain the project. SeaQL.org is an independent open-source organization run by passionate developers. You can support us by starring and sharing our repositories and making a donation via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor"),"."),(0,a.kt)("p",null,"We are considering multiple directions to generate revenue for the organization. Whatever we do, we want to remain as a non-profit organization. If you have any suggestion, or want to join or collaborate with us, please let us know via ",(0,a.kt)("inlineCode",{parentName:"p"},"hello[at]sea-ql.org"),"."),(0,a.kt)("p",null,"Thank you for your support so far, and together we can make open-source sustainable."))}c.isMDXComponent=!0}}]);