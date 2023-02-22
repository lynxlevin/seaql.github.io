"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={slug:"2022-06-02-summer-of-code-2022-intro",title:"Welcome Summer of Code 2022 Contributors",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/preview/pr-94/blog/2022-06-02-summer-of-code-2022-intro",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-06-02-summer-of-code-2022-intro.md",source:"@site/blog/2022-06-02-summer-of-code-2022-intro.md",title:"Welcome Summer of Code 2022 Contributors",description:"We are thrilled to announce that we will bring in four contributors this summer! Two of them are sponsored by Google while two of them are sponsored by SeaQL.",date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"news",permalink:"/preview/pr-94/blog/tags/news"}],readingTime:3.675,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-06-02-summer-of-code-2022-intro",title:"Welcome Summer of Code 2022 Contributors",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.9.0",permalink:"/preview/pr-94/blog/2022-07-17-whats-new-in-0.9.0"},nextItem:{title:"What's new in SeaORM 0.8.0",permalink:"/preview/pr-94/blog/2022-05-15-whats-new-in-0.8.0"}},l={authorsImageUrls:[void 0]},c=[{value:"A GraphQL Framework on Top of SeaORM",id:"a-graphql-framework-on-top-of-seaorm",level:3},{value:"SQL Interpreter for Mock Testing",id:"sql-interpreter-for-mock-testing",level:3},{value:"Support TiDB in the SeaQL Ecosystem",id:"support-tidb-in-the-seaql-ecosystem",level:3},{value:"Query Linter for SeaORM",id:"query-linter-for-seaorm",level:3},{value:"Mentors",id:"mentors",level:2},{value:"Community",id:"community",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are thrilled to announce that we will bring in four contributors this summer! Two of them are sponsored by Google while two of them are sponsored by SeaQL."),(0,o.kt)("h3",{id:"a-graphql-framework-on-top-of-seaorm"},"A GraphQL Framework on Top of SeaORM"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--12 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo",href:"https://github.com/karatakis"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/7329022?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Panagiotis Karatakis"))))),(0,o.kt)("p",null,"I'm Panagiotis, I live in Athens Greece and currently I pursue my second bachelors on economic sciences. My first bachelors was on computer science and I've a great passion on studying and implementing enterprise software solutions. I know Rust the last year and I used it almost daily for a small startup project that me and my friends build for a startup competition."),(0,o.kt)("p",null,"I'll be working on creating a CLI tool that will explore a database schema and then generate a ready to build ",(0,o.kt)("inlineCode",{parentName:"p"},"async-graphql")," API. The tool will allow quick integration with the SeaQL and Rust ecosystems as well as GraphQL. To be more specific, for database exploring I'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-orm-codegen")," for entity generation, my job is to glue those together with ",(0,o.kt)("inlineCode",{parentName:"p"},"async-graphql")," library. You can read more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/discussions/12"},"here"),"."),(0,o.kt)("h3",{id:"sql-interpreter-for-mock-testing"},"SQL Interpreter for Mock Testing"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--12 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo",href:"https://github.com/Samyak2"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/34161949?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Samyak Sarnayak"))))),(0,o.kt)("p",null,"I'm Samyak Sarnayak, a final year Computer Science student from Bangalore, India. I started learning Rust around 6-7 months ago and it feels like I have found the perfect language for me :D. It does not have a runtime, has a great type system, really good compiler errors, good tooling, some functional programming patterns and metaprogramming. You can find more about me on my GitHub profile."),(0,o.kt)("p",null,"I'll be working on a new SQL interpreter for mock testing. This will be built specifically for testing and so the emphasis will be on correctness - it can be slow but the operations must always be correct. I'm hoping to build a working version of this and integrate it into the existing tests of SeaORM. Here is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/discussions/11"},"discussion")," for this project."),(0,o.kt)("h3",{id:"support-tidb-in-the-seaql-ecosystem"},"Support TiDB in the SeaQL Ecosystem"),(0,o.kt)("p",null,"Edit: This project was canceled."),(0,o.kt)("h3",{id:"query-linter-for-seaorm"},"Query Linter for SeaORM"),(0,o.kt)("p",null,"Edit: This project was canceled."),(0,o.kt)("h2",{id:"mentors"},"Mentors"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--12 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo",href:"https://github.com/tyt2y3"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Chris Tsang"))))),(0,o.kt)("p",null,"I am a strong believer in open source. I started my GitHub journey 10 years ago, when I published my first programming library. I had been looking for a programming language with speed, ergonomic and expressiveness. Until I found Rust."),(0,o.kt)("p",null,"Seeing a niche and demand for data engineering tools in the Rust ecosystem, I founded SeaQL in 2020 and have been leading the development and maintaining the libraries since then."),(0,o.kt)("br",null),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--12 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo",href:"https://github.com/billy1624"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,o.kt)("p",null,"Hey, this is Billy from Hong Kong. I've been using open-source libraries ever since I started coding but it's until 2020, I dedicated myself to be a Rust open-source developer."),(0,o.kt)("p",null,"I was also a full-stack developer specialized in formulating requirement specifications for user interfaces and database structures, implementing and testing both frontend and backend from ground up, finally releasing the MVP for production and maintaining it for years to come."),(0,o.kt)("p",null,"I enjoy working with Rustaceans across the globe, building a better and sustainable ecosystem for Rust community. If you like what we do, consider starring, commenting, sharing and contributing, it would be much appreciated."),(0,o.kt)("br",null),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--12 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo",href:"https://github.com/shpun817"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/47468266?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Sanford Pun"))))),(0,o.kt)("p",null,"I'm Sanford, an enthusiastic software engineer who enjoys problem-solving! I've worked on Rust for a couple of years now. During my early days with Rust, I focused more on the field of graphics/image processing, where I fell in love with what the language has to offer! This year, I've been exploring data engineering in the StarfishQL project."),(0,o.kt)("p",null,"A toast to the endless potential of Rust!"),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"If you are interested in the projects and want to share your thoughts, please star and watch the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code"},"SeaQL/summer-of-code")," repository on GitHub and join us on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/uCPdDXzbdv"},"Discord server"),"!"))}m.isMDXComponent=!0}}]);