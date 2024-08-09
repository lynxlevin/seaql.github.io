"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3201],{9680:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(1308),n=(a(6687),a(9680));const i={slug:"2023-09-06-whats-new-in-sea-streamer-0.3",title:"What's new in SeaStreamer 0.3",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png",tags:["news"]},s=void 0,o={permalink:"/preview/pr-127/blog/2023-09-06-whats-new-in-sea-streamer-0.3",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-09-06-whats-new-in-sea-streamer-0.3.md",source:"@site/blog/2023-09-06-whats-new-in-sea-streamer-0.3.md",title:"What's new in SeaStreamer 0.3",description:"\ud83c\udf89 We are pleased to release SeaStreamer 0.3.x!",date:"2023-09-06T00:00:00.000Z",formattedDate:"September 6, 2023",tags:[{label:"news",permalink:"/preview/pr-127/blog/tags/news"}],readingTime:4.265,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2023-09-06-whats-new-in-sea-streamer-0.3",title:"What's new in SeaStreamer 0.3",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png",tags:["news"]},prevItem:{title:"Writing Async Runtime Generic Library",permalink:"/preview/pr-127/blog/2023-11-22-async-runtime-generic"},nextItem:{title:"Announcing SeaORM 0.12",permalink:"/preview/pr-127/blog/2023-08-12-announcing-seaorm-0.12"}},l={authorsImageUrls:[void 0]},m=[{value:"File Backend",id:"file-backend",level:2},{value:"Encode-free",id:"encode-free",level:3},{value:"Efficient seek",id:"efficient-seek",level:3},{value:"Streaming-friendliness",id:"streaming-friendliness",level:3},{value:"Summary",id:"summary",level:4},{value:"Redis Backend",id:"redis-backend",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Producer",id:"producer",level:4},{value:"Consumer",id:"consumer",level:4},{value:"Community",id:"community",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:"https://www.sea-ql.org/SeaStreamer/"},(0,n.kt)("img",{src:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png"})),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaStreamer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/releases/0.3.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.3.x")),"!"),(0,n.kt)("h2",{id:"file-backend"},"File Backend"),(0,n.kt)("p",null,"A major addition in SeaStreamer ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3")," is the file backend. It implements the same high-level MPMC API, enabling streaming to and from files. There are different use cases. For example, it can be used to dump data from Redis / Kafka and process them locally, or as an intermediate file format for storage or transport."),(0,n.kt)("p",null,"The SeaStreamer File format, ",(0,n.kt)("inlineCode",{parentName:"p"},".ss")," is pretty simple. It's very much like ",(0,n.kt)("inlineCode",{parentName:"p"},".ndjson"),", but binary. The file format is designed with the following goals:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Binary data support without encoding overheads"),(0,n.kt)("li",{parentName:"ol"},"Efficiency in rewinding / seeking through a large dump"),(0,n.kt)("li",{parentName:"ol"},"Streaming-friendliness - File can be truncated without losing integrity")),(0,n.kt)("p",null,"Let me explain in details."),(0,n.kt)("p",null,"First of all, SeaStreamer File is a container format. It only concerns the message stream and framing, not the payload. It's designed to be paired with a binary message format like Protobuf or BSON."),(0,n.kt)("h3",{id:"encode-free"},"Encode-free"),(0,n.kt)("p",null,"JSON and CSV are great plain text file formats, but they are not binary friendly. Usually, to encode binary data, one would use ",(0,n.kt)("inlineCode",{parentName:"p"},"base64"),". It therefore imposes an expensive encoding / decoding overhead. In a binary protocol, ",(0,n.kt)("em",{parentName:"p"},"delimiters")," are frequently used to signal message boundaries. As a consequence, byte stuffing is needed to escape the bytes."),(0,n.kt)("p",null,"In SeaStreamer, we want to avoid the encoding overhead entirely. The payload should be written to disk verbatim. So the file format revolves around constructing message frames and placing checksums to ensure that data is interpreted correctly."),(0,n.kt)("h3",{id:"efficient-seek"},"Efficient seek"),(0,n.kt)("p",null,"A delimiter-based protocol has an advantage: the byte stream can be randomly sought, and we always have no trouble reading the next message."),(0,n.kt)("p",null,"Since SeaStreamer does not rely on delimiters, we can't easily align to message frames after a random seek. We solve this problem by placing beacons in a regular interval at fixed locations throughout the file. E.g. say the ",(0,n.kt)("inlineCode",{parentName:"p"},"beacon interval")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"1024"),", there will be a beacon at the 1024th byte, the 2048th, and so on. Then, every time we want to seek to a random location, we'd seek to the closest N * 1024 byte and read from there."),(0,n.kt)("p",null,"These beacons also double as indices: they contain summaries of the individual streams. So given a particular stream key and sequence number (or timestamp) to search for, SeaStreamer can quickly locate the message ",(0,n.kt)("em",{parentName:"p"},"just by")," reading the beacons. It doesn't matter if the stream's messages are sparse!"),(0,n.kt)("h3",{id:"streaming-friendliness"},"Streaming-friendliness"),(0,n.kt)("p",null,"It should always be safe to truncate files. It should be relatively easy to split a file into chunks. We should be able to tell if the data is corrupted."),(0,n.kt)("p",null,"SeaStreamer achieves this by computing a checksum for every message, and also the running checksum of the checksums for each stream. It's not enforced right now, but in theory we can detect if any messages are missing from a stream."),(0,n.kt)("h4",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This file format is also easy to implement in different languages, as we just made an (experimental) ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/sea-streamer-file/sea-streamer-file-reader"},"reader in Typescript"),"."),(0,n.kt)("p",null,"That's it! If you are interested, you can go and take a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-file/latest/sea_streamer_file/format/index.html"},"format description"),"."),(0,n.kt)("h2",{id:"redis-backend"},"Redis Backend"),(0,n.kt)("p",null,"Redis Streams are underrated! They have high throughput and concurrency, and are best suited for non-persistent stream processing near or on the same host as the application."),(0,n.kt)("p",null,"The obstacle is probably in library support. Redis Streams' API is rather low level, and there aren't many high-level libraries to help with programming, as opposed to Kafka, which has versatile official programming libraries."),(0,n.kt)("p",null,"The pitfall is, it's not easy to maximize concurrency with the raw Redis API. To start, you'd need to pipeline ",(0,n.kt)("inlineCode",{parentName:"p"},"XADD")," commands. You'd also need to time and batch ",(0,n.kt)("inlineCode",{parentName:"p"},"XACK"),"s so that it does not block reads and computation. And of course you want to separate the reads and writes on different threads."),(0,n.kt)("p",null,"SeaStreamer breaks these obstacles for you and offers a Kafka-like API experience!"),(0,n.kt)("h2",{id:"benchmark"},"Benchmark"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3"),", we have done some optimizations to improve the throughput of the Redis and File backend. We set our initial benchmark at 100k messages per second, which hopefully we can further improve over time."),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/benchmark"},"micro benchmark")," involves a simple program producing or consuming 100k messages, where each message has a payload of 256 bytes."),(0,n.kt)("p",null,"For Redis, it's running on the same computer in Docker. On my not-very-impressive laptop with a 10th Gen Intel Core i7, the numbers are somewhat around:"),(0,n.kt)("h4",{id:"producer"},"Producer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"redis    0.5s\nstdio    0.5s\nfile     0.5s\n")),(0,n.kt)("h4",{id:"consumer"},"Consumer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"redis    1.0s\nstdio    1.0s\nfile     1.1s\n")),(0,n.kt)("p",null,"It practically means that we are comfortably in the realm of ",(0,n.kt)("em",{parentName:"p"},"producing")," 100k messages per second, but are just about able to ",(0,n.kt)("em",{parentName:"p"},"consume")," 100k messages in 1 second. Suggestions to performance improvements are welcome!"),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL.org is an independent open-source organization run by passionate \ufe0fdevelopers. If you like our projects, please star \u2b50 and share our repositories. If you feel generous, a small donation via ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," will be greatly appreciated, and goes a long way towards sustaining the organization \ud83d\udea2."),(0,n.kt)("p",null,"SeaStreamer is a community driven project. We welcome you to participate, contribute and together build for Rust's future \ud83e\udd80."))}u.isMDXComponent=!0}}]);