"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="Using sea-orm-cli",o={unversionedId:"generate-entity/sea-orm-cli",id:"version-0.5.x/generate-entity/sea-orm-cli",title:"Using sea-orm-cli",description:"First, install sea-orm-cli with cargo.",source:"@site/versioned_docs/version-0.5.x/03-generate-entity/01-sea-orm-cli.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM/docs/0.5.x/generate-entity/sea-orm-cli",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/03-generate-entity/01-sea-orm-cli.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690403431,formattedLastUpdatedAt:"Jul 26, 2023",sidebarPosition:1,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Debug Log",permalink:"/SeaORM/docs/0.5.x/install-and-config/debug-log"},next:{title:"Entity Structure",permalink:"/SeaORM/docs/0.5.x/generate-entity/entity-structure"}},s={},p=[{value:"Configure Environment",id:"configure-environment",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Generating Entity Files",id:"generating-entity-files",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-sea-orm-cli"},"Using ",(0,r.kt)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,r.kt)("p",null,"First, install ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sea-orm-cli\n")),(0,r.kt)("h2",{id:"configure-environment"},"Configure Environment"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,r.kt)("h2",{id:"getting-help"},"Getting Help"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," flag on any CLI command or subcommand for help."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# List all available commands\n$ sea-orm-cli -h\n\n# List all subcommands available in `generate` command\n$ sea-orm-cli generate -h\n\n# Show how to use `generate entity` subcommand\n$ sea-orm-cli generate entity -h\n")),(0,r.kt)("h2",{id:"generating-entity-files"},"Generating Entity Files"),(0,r.kt)("p",null,"Discover all tables in a database and generate a corresponding SeaORM entity file for each table."),(0,r.kt)("p",null,"Supported databases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"SQLite")),(0,r.kt)("p",null,"Command line options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--database-url"),": database URL (default: DATABASE_URL specified in ENV)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--database-schema"),": database schema (default: DATABASE_SCHEMA specified in ENV)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For MySQL & SQLite, this argument is ignored"),(0,r.kt)("li",{parentName:"ul"},"For PostgreSQL, this argument is optional with default value 'public'"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--output-dir"),": entity file output directory (default: current directory)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"--verbose"),": print debug messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": generate entity files from hidden tables (tables with names starting with an underscore are hidden and ignored by default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--compact-format"),": generate entity file of ",(0,r.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.5.x/generate-entity/entity-structure"},"compact format")," (default: true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--expanded-format"),": generate entity file of ",(0,r.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.5.x/generate-entity/expanded-entity-structure"},"expanded format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--with-serde"),": automatically derive serde Serialize / Deserialize traits for the entity (",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"serialize"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"deserialize"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),") (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate entity files of database `bakery` to `src/entity`\n$ sea-orm-cli generate entity \\\n    -u sql://sea:sea@localhost/bakery \\\n    -o src/entity\n")))}m.isMDXComponent=!0}}]);