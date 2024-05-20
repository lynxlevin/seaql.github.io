"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[5031],{9680:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>p});var r=a(6687);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},h=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),d=c(a),p=n,k=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return a?r.createElement(k,s(s({ref:e},h),{},{components:a})):r.createElement(k,s({ref:e},h))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9939:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(1308),n=(a(6687),a(9680));const l={slug:"2022-04-04-introducing-starfish-ql",title:"Introducing StarfishQL",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},s=void 0,o={permalink:"/preview/pr-123/blog/2022-04-04-introducing-starfish-ql",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-04-04-introducing-starfish-ql.md",source:"@site/blog/2022-04-04-introducing-starfish-ql.md",title:"Introducing StarfishQL",description:"We are pleased to introduce StarfishQL to the Rust community today. StarfishQL is a graph database and query engine to enable graph analysis and visualization on the web. It is an experimental project, with its primary purpose to explore the dependency network of Rust crates published on crates.io.",date:"2022-04-04T00:00:00.000Z",formattedDate:"April 4, 2022",tags:[{label:"news",permalink:"/preview/pr-123/blog/tags/news"}],readingTime:7.055,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-04-04-introducing-starfish-ql",title:"Introducing StarfishQL",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"SeaORM FAQ.01",permalink:"/preview/pr-123/blog/2022-05-14-faq-01"},nextItem:{title:"What's new in SeaORM 0.7.0",permalink:"/preview/pr-123/blog/2022-03-26-whats-new-in-0.7.0"}},i={authorsImageUrls:[void 0]},c=[{value:"Motivation",id:"motivation",level:2},{value:"Design",id:"design",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Graph Query Engine",id:"graph-query-engine",level:3},{value:"crates.io Crawler",id:"cratesio-crawler",level:3},{value:"Graph Visualization",id:"graph-visualization",level:3},{value:"Findings",id:"findings",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"People",id:"people",level:2},{value:"Contributing",id:"contributing",level:2}],h={toc:c};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are pleased to introduce ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/StarfishQL/"},"StarfishQL")," to the Rust community today. StarfishQL is a graph database and query engine to enable graph analysis and visualization on the web. It is an experimental project, with its primary purpose to explore the dependency network of Rust crates published on crates.io."),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"StarfishQL is a framework for providing a graph database and a graph query engine that interacts with it."),(0,n.kt)("p",null,"A concrete example (Freeport) involving the graph of crate dependency on ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io")," is used for illustration. With this example, you can see StarfishQL in action."),(0,n.kt)("p",null,"At the end of the day, we're interested in performing graph analysis, that is to extract meaningful information out of plain graph data. To achieve that, we believe that visualization is a crucial aid."),(0,n.kt)("p",null,"StarfishQL's query engine is designed to be able to incorporate different forms of visualization by using a flexible query language. However, the development of the project has been centred around the following, as showcased in our ",(0,n.kt)("a",{parentName:"p",href:"https://starfish-ql.sea-ql.org/"},"demo apps"),"."),(0,n.kt)("div",{className:"row",id:"colourful-graphs"},(0,n.kt)("div",{className:"col col--6 margin-bottom--md"},(0,n.kt)("div",{className:"card item shadow--lw"},(0,n.kt)("div",{className:"card__header"},(0,n.kt)("a",{href:"https://starfish-ql.sea-ql.org/graph.html"},(0,n.kt)("h3",null,"Top-N Dependencies"))),(0,n.kt)("div",{className:"card__body"},(0,n.kt)("img",{src:"https://www.sea-ql.org/StarfishQL/img/graph.png"}),(0,n.kt)("p",null,"Traverse the dependency graph in the normal direction starting from the N most connected nodes.")))),(0,n.kt)("div",{className:"col col--6 margin-bottom--md"},(0,n.kt)("div",{className:"card item shadow--lw"},(0,n.kt)("div",{className:"card__header"},(0,n.kt)("a",{href:"https://starfish-ql.sea-ql.org/tree.html"},(0,n.kt)("h3",null,"Dependencies & Dependents"))),(0,n.kt)("div",{className:"card__body"},(0,n.kt)("img",{src:"https://www.sea-ql.org/StarfishQL/img/tree.png"}),(0,n.kt)("p",null,"Traverse the dependency tree in both forward and reverse directions starting from a particular node."))))),(0,n.kt)("h2",{id:"design"},"Design"),(0,n.kt)("p",null,"In general, a query engine takes input queries written in a specific query language (e.g. SQL statements), performs the necessary operations in the database, and then outputs the data of interest to the user application. You may also view a query engine as an abstraction layer such that the user can design queries simply in the supported query language and let the query engine do the rest."),(0,n.kt)("p",null,"In the case of a graph query engine, the output data is a graph (",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)"},"wiki"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.sea-ql.org/StarfishQL/img/graph_query_engine_overview.png",alt:"Graph query engine overview"})),(0,n.kt)("p",null,"In the case of StarfishQL, the query language is a custom language we defined in the JSON format, which enables the engine to be highly accessible and portable."),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"In the example of Freeport, StarfishQL consists of the following three components."),(0,n.kt)("h3",{id:"graph-query-engine"},"Graph Query Engine"),(0,n.kt)("p",null,"As a core component of StarfishQL, the graph query engine is a Rust backend application powered by the ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/rocket"},"Rocket")," web framework and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL"},"SeaQL ecosystem"),"."),(0,n.kt)("p",null,"The engine listens at the following endpoints for the corresponding operation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/schema")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema"},"Define/Reset the schema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/mutate")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations"},"Perform mutate operations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/query")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data"},"Perform queries"))),(0,n.kt)("p",null,"You could also invoke the endpoints above programmatically."),(0,n.kt)("p",null,"Graph data are stored in a relational database:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/data-storage"},"Metadata")," - Definition of each entity and relation, e.g. attributes of crates and dependency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/data-storage#storage-of-entities"},"Node Data")," - An instance of an entity, e.g. crate name and version number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/data-storage#storage-of-relations"},"Edge Data")," - An instance of a relation, e.g. one crate depends on another")),(0,n.kt)("h3",{id:"cratesio-crawler"},"crates.io Crawler"),(0,n.kt)("p",null,"To obtain the crate data to insert into the database, we used a ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-crates-io-crawler/overview"},"fast, non-disruptive crawler")," on a local clone of the public index repo of crates.io."),(0,n.kt)("h3",{id:"graph-visualization"},"Graph Visualization"),(0,n.kt)("p",null,"We used ",(0,n.kt)("a",{parentName:"p",href:"https://d3js.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"d3.js"))," to create force-directed graphs to display the results. The two ",(0,n.kt)("a",{parentName:"p",href:"#colourful-graphs"},"colourful graphs")," above are such products."),(0,n.kt)("h2",{id:"findings"},"Findings"),(0,n.kt)("p",null,"Here are some interesting findings we made during the process."),(0,n.kt)("div",{className:"row"},(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"card item shadow--lw"},(0,n.kt)("div",{className:"card__header"},(0,n.kt)("h3",null,"Top-10 Dependencies")),(0,n.kt)("div",{className:"card__body"},(0,n.kt)("p",null,"List of top 10 crates order by different ",(0,n.kt)("a",{href:"https://www.sea-ql.org/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity/#weight-decay-factors"},"decay modes"),"."),(0,n.kt)("div",{className:"row row--no-gutters"},(0,n.kt)("div",{className:"col col--4 padding-left--none padding-right--none"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2"},"Decay Mode: Immediate / Simple Connectivity")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"crate"),(0,n.kt)("th",null,"connectivity"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/serde",target:"_blank"},"serde")),(0,n.kt)("td",null,"17,441")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/serde_json",target:"_blank"},"serde_json")),(0,n.kt)("td",null,"10,528")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/log",target:"_blank"},"log")),(0,n.kt)("td",null,"9,220")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/clap",target:"_blank"},"clap")),(0,n.kt)("td",null,"6,323")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/thiserror",target:"_blank"},"thiserror")),(0,n.kt)("td",null,"5,547")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/rand",target:"_blank"},"rand")),(0,n.kt)("td",null,"5,340")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/futures",target:"_blank"},"futures")),(0,n.kt)("td",null,"5,263")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/lazy_static",target:"_blank"},"lazy_static")),(0,n.kt)("td",null,"5,211")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/tokio",target:"_blank"},"tokio")),(0,n.kt)("td",null,"5,168")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/chrono",target:"_blank"},"chrono")),(0,n.kt)("td",null,"4,794"))))),(0,n.kt)("div",{className:"col col--4 padding-left--none padding-right--none"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2"},"Decay Mode: Medium (.5) / Complex Connectivity")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"crate"),(0,n.kt)("th",null,"connectivity"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/quote",target:"_blank"},"quote")),(0,n.kt)("td",null,"4,126")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/syn",target:"_blank"},"syn")),(0,n.kt)("td",null,"4,069")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/pure-rust-locales",target:"_blank"},"pure-rust-locales")),(0,n.kt)("td",null,"4,067")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/reqwest",target:"_blank"},"reqwest")),(0,n.kt)("td",null,"3,950")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/proc-macro2",target:"_blank"},"proc-macro2")),(0,n.kt)("td",null,"3,743")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/num_threads",target:"_blank"},"num_threads")),(0,n.kt)("td",null,"3,555")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/value-bag",target:"_blank"},"value-bag")),(0,n.kt)("td",null,"3,506")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/futures-macro",target:"_blank"},"futures-macro")),(0,n.kt)("td",null,"3,455")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/time-macros",target:"_blank"},"time-macros")),(0,n.kt)("td",null,"3,450")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/thiserror-impl",target:"_blank"},"thiserror-impl")),(0,n.kt)("td",null,"3,416"))))),(0,n.kt)("div",{className:"col col--4 padding-left--none padding-right--none"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2"},"Decay Mode: None / Compound Connectivity")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"crate"),(0,n.kt)("th",null,"connectivity"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/unicode-xid",target:"_blank"},"unicode-xid")),(0,n.kt)("td",null,"54,982")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/proc-macro2",target:"_blank"},"proc-macro2")),(0,n.kt)("td",null,"54,949")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/quote",target:"_blank"},"quote")),(0,n.kt)("td",null,"54,910")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/syn",target:"_blank"},"syn")),(0,n.kt)("td",null,"54,744")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/rustc-std-workspace-core",target:"_blank"},"rustc-std-workspace-core")),(0,n.kt)("td",null,"51,650")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/libc",target:"_blank"},"libc")),(0,n.kt)("td",null,"51,645")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/serde_derive",target:"_blank"},"serde_derive")),(0,n.kt)("td",null,"51,056")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/serde",target:"_blank"},"serde")),(0,n.kt)("td",null,"51,054")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/jobserver",target:"_blank"},"jobserver")),(0,n.kt)("td",null,"50,567")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://crates.io/crates/cc",target:"_blank"},"cc")),(0,n.kt)("td",null,"50,566")))))),(0,n.kt)("p",null,"If we look at ",(0,n.kt)("i",null,"Decay Mode: Immediate"),", where the connectivity is simply the ",(0,n.kt)("b",null,"number of immediate dependants"),", we can see that",(0,n.kt)("a",{href:"https://crates.io/crates/serde",target:"_blank"},(0,n.kt)("code",null,"serde"))," and ",(0,n.kt)("a",{href:"https://crates.io/crates/serde_json",target:"_blank"},(0,n.kt)("code",null,"serde_json"))," are at the top. I guess that supports our decision of defining the query language in JSON."),(0,n.kt)("p",null,(0,n.kt)("i",null,"Decay Mode: None")," tells another interesting story: when the connectivity is the ",(0,n.kt)("b",null,"entire tree of dependants"),", we are looking at the really core crates that are nested somewhere deeply inside the most crates. In other words, these are the ones that are built along with the most crates. Under this setting, the utility crates that interacts with the low-level, more fundamental aspects of Rust are ranked higher,like ",(0,n.kt)("a",{href:"https://crates.io/crates/quote",target:"_blank"},(0,n.kt)("code",null,"quote"))," with syntax trees, ",(0,n.kt)("a",{href:"https://crates.io/crates/proc-macro2",target:"_blank"},(0,n.kt)("code",null,"proc-macro2"))," with procedural macros, and ",(0,n.kt)("a",{href:"https://crates.io/crates/unicode-xid",target:"_blank"},(0,n.kt)("code",null,"unicode-xid"))," with Unicode checking."))))),(0,n.kt)("div",{className:"row"},(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"card item shadow--lw"},(0,n.kt)("div",{className:"card__header"},(0,n.kt)("h3",null,"Number of crates without Dependencies")),(0,n.kt)("div",{className:"card__body"},(0,n.kt)("p",null,"19,369 out of 79,972 crates, or 24% of the crates, do not depend on any crates."),(0,n.kt)("p",null,"e.g.\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a",target:"_blank"},"a"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a-",target:"_blank"},"a-"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a0",target:"_blank"},"a0"),",\xa0 ...,\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/zyx_test",target:"_blank"},"zyx_test"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/zz-buffer",target:"_blank"},"zz-buffer"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/z_table",target:"_blank"},"z_table")),(0,n.kt)("p",null,"In other words, about 76% of the crates are standing on the shoulders of giants! \ud83d\udcaa"),(0,n.kt)("img",{src:"https://www.sea-ql.org/StarfishQL/img/crate_without_dependency_count.png"}),(0,n.kt)("img",{src:"https://www.sea-ql.org/StarfishQL/img/crate_without_dependency_percentage.png"}))))),(0,n.kt)("div",{className:"row"},(0,n.kt)("div",{className:"col col--12 margin-bottom--md"},(0,n.kt)("div",{className:"card item shadow--lw"},(0,n.kt)("div",{className:"card__header"},(0,n.kt)("h3",null,"Number of crates without Dependants")),(0,n.kt)("div",{className:"card__body"},(0,n.kt)("p",null,"53,910 out of 79,972 crates, or 67% of the crates, have no dependants, i.e. no other crates depend on them."),(0,n.kt)("p",null,"e.g.\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a",target:"_blank"},"a"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a-",target:"_blank"},"a-"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/a-bot",target:"_blank"},"a-bot"),",\xa0 ...,\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/zzp-tools",target:"_blank"},"zzp-tools"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/zzz",target:"_blank"},"zzz"),",\xa0",(0,n.kt)("a",{href:"https://crates.io/crates/z_table",target:"_blank"},"z_table")),(0,n.kt)("p",null,"We imagine many of those crates are binaries/executables, if only we could figure out a way to check that... \ud83e\udd14"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"As of March 30, 2022")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"StarfishQL allows flexible and portable definition, manipulation, retrieval, and visualization of graph data."),(0,n.kt)("p",null,"The graph query engine built in Rust provides a nice interface for any web applications to access data in the relational graph database with stable performance and memory safety."),(0,n.kt)("p",null,"Admittedly, StarfishQL is still in its infancy, so every detail in the design and implementation is subject to change. Fortunately, the good thing about this is, like all other open-source projects developed by brilliant Rust developers, you can contribute to it if you also find the concept interesting. With its addition to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/"},"SeaQL ecosystem"),", together we are one step closer to the vision of Rust for data engineering."),(0,n.kt)("h2",{id:"people"},"People"),(0,n.kt)("p",null,"StarfishQL is created by the following SeaQL team members:"),(0,n.kt)("div",{className:"container"},(0,n.kt)("div",{className:"row"},(0,n.kt)("div",{className:"col col--3 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Chris Tsang")))),(0,n.kt)("div",{className:"col col--3 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Billy Chan")))),(0,n.kt)("div",{className:"col col--3 margin-bottom--md"},(0,n.kt)("div",{className:"avatar"},(0,n.kt)("a",{className:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shpun817"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/47468266?v=4"})),(0,n.kt)("div",{className:"avatar__intro"},(0,n.kt)("div",{className:"avatar__name"},"Sanford Pun")))))),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"We are super excited to be selected as a Google Summer of Code 2022 mentor organization!"),(0,n.kt)("p",null,"StarfishQL is one of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md#2-a-graph-database-and-query-engine-codename-starfishql-for-graph-analysis-and-visualization"},"GSoC project ideas")," that opens for development proposals. Join us on GSoC 2022 by following the instructions on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/blob/main/2022/CONTRIBUTING.md"},"GSoC Contributing Guide"),"."))}u.isMDXComponent=!0}}]);