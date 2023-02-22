"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},o="Getting started",s={unversionedId:"getting-started",id:"version-0.2.x/getting-started",title:"Getting started",description:"Installing CLI",source:"@site/versioned_docs/version-0.2.x/01-getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/Seaography/docs/getting-started",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/versioned_docs/version-0.2.x/01-getting-started.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677062123,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Running the example",permalink:"/Seaography/docs/running-example"}},l={},p=[{value:"Installing CLI",id:"installing-cli",level:2},{value:"CLI parameters",id:"cli-parameters",level:2},{value:"Notes",id:"notes",level:4},{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("h2",{id:"installing-cli"},"Installing CLI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install seaography-cli\n")),(0,n.kt)("h2",{id:"cli-parameters"},"CLI parameters"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"seaography-cli\n\nUSAGE:\n    seaography-cli [OPTIONS] <DATABASE_URL> <CRATE_NAME> <DESTINATION>\n\nARGS:\n    <DATABASE_URL>                               [String] A valid URL pointing to the database\n    <CRATE_NAME>                                 [String] The cargo crate name of the generated project\n    <DESTINATION>                                [String] Path pointing to the output folder, it will create it if does not exist\n\nOPTIONS:\n    -c, --complexity-limit <COMPLEXITY_LIMIT>    [Number] Limit GraphQL query complexity so it cannot be greater than this number.\n    -d, --depth-limit <DEPTH_LIMIT>              [String] Limit GraphQL query depth so it cannot be greater than this number\n    -e, --expanded-format <EXPANDED_FORMAT>      [Boolean]  If you want the Sea ORM Entities to be in extended format\n    -f, --framework <FRAMEWORK>                  [Enum] Dictates the generator what web API framework to use. Possible values: actix, poem (default=poem)\n    -h, --help                                   Print help information\n    -V, --version                                Print version information\n")),(0,n.kt)("h4",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DATABASE_URL examples:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"mysql://user:pass@127.0.0.1:1235/database_name"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"postgres://user:pass@127.0.0.1/base_name"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"sqlite://my_db.db")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/SeaORM/docs/generate-entity/expanded-entity-structure/"},"extended format"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"In order to understand how the generated code works its recommended to study the following resources:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/"},"async-graphql")),(0,n.kt)("p",{parentName:"li"},"Is a server side GraphQL library for Rust.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/latest/sea_orm/"},"sea-orm")),(0,n.kt)("p",{parentName:"li"},"SeaORM is a relational ORM to help you build web services in Rust.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The web API of the generated project"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/crate/poem/latest"},"poem"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/crate/actix/latest"},"actix"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/tokio/latest/tokio/"},"tokio*")),(0,n.kt)("p",{parentName:"li"},"A runtime for writing reliable, asynchronous, and slim applications with the Rust programming language."))))}m.isMDXComponent=!0}}]);