"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||n;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={slug:"2022-11-09-toggle-stacked-download-graph-in-crates-io",title:"Toggle Stacked Download Graph in crates.io",author:"SeaQL Team",author_title:"Billy Chan",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,l={permalink:"/blog/2022-11-09-toggle-stacked-download-graph-in-crates-io",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-11-09-toggle-stacked-download-graph-in-crates-io.md",source:"@site/blog/2022-11-09-toggle-stacked-download-graph-in-crates-io.md",title:"Toggle Stacked Download Graph in crates.io",description:'Not long ago we opened a PR "Toggle stacked download graph #5010" resolving Convert download chart from stacked chart to regular chart #3876 for crates.io.',date:"2022-11-09T00:00:00.000Z",formattedDate:"November 9, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:1.17,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Billy Chan",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-11-09-toggle-stacked-download-graph-in-crates-io",title:"Toggle Stacked Download Graph in crates.io",author:"SeaQL Team",author_title:"Billy Chan",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.10.x",permalink:"/blog/2022-11-10-whats-new-in-0.10.x"},nextItem:{title:"What's new in SeaQuery 0.27.0",permalink:"/blog/2022-10-31-whats-new-in-seaquery-0.27.0"}},s={authorsImageUrls:[void 0]},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Not long ago we opened a PR "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/crates.io/pull/5010"},"Toggle stacked download graph #5010"),'" resolving ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/crates.io/issues/3876"},"Convert download chart from stacked chart to regular chart #3876")," for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/crates.io"},"crates.io"),"."),(0,r.kt)("p",null,"What's it all about?"),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"The download graph on crates.io used to be a stacked graph. With download count of older versions stack on top of newer versions. You might misinterpret the numbers. Consider this, at the first glance, it seems that version 0.9.2 has 1,500+ downloads on Nov 7. But in fact, it has only 237 downloads that day because the graph is showing the cumulative downloads."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30400950/200738670-4266e178-7952-4e05-bff0-c2445ba345bf.png",alt:"crates.io Stacked Download Graph"})),(0,r.kt)("p",null,"This makes it hard to compare the download trend of different versions over time. Why this is important? You may ask. It's important to observe the adoption rate of newer version upon release. This paints a general picture if existing users are upgrading to newer version or not."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"The idea is simple but effective: having a dropdown to toggle between stacked and unstacked download graph. With this, one can switch between both display mode, comparing the download trend of different version and observing the most download version in the past 90 days are straightforward and intuitive."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30400950/200741006-6a5e1922-de38-456b-b33d-dfc4ce2f8a93.png",alt:"crates.io Unstacked Download Graph"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This is a great tool for us to gauge the adoption rate of our new releases and we highly encourage user upgrading to newer release that contains feature updates and bug fixes."))}p.isMDXComponent=!0}}]);