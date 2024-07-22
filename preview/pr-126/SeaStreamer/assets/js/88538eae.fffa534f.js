"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2208],{8859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(1308),o=(r(6687),r(8859));const s={},a="Intra Process",i={unversionedId:"processors/intra-process",id:"processors/intra-process",title:"Intra Process",description:"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on sea-streamer in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing.",source:"@site/docs/04-processors/02-intra-process.md",sourceDirName:"04-processors",slug:"/processors/intra-process",permalink:"/preview/pr-126/SeaStreamer/docs/next/processors/intra-process",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/04-processors/02-intra-process.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1721633215,formattedLastUpdatedAt:"Jul 22, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inter Process",permalink:"/preview/pr-126/SeaStreamer/docs/next/processors/inter-process"},next:{title:"The Roadmap",permalink:"/preview/pr-126/SeaStreamer/docs/next/whats-next/roadmap"}},c={},l=[{value:"Stdio",id:"stdio",level:2},{value:"File",id:"file",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intra-process"},"Intra Process"),(0,o.kt)("p",null,"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-streamer")," in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing."),(0,o.kt)("h2",{id:"stdio"},"Stdio"),(0,o.kt)("p",null,"You can execute tests involving several processors by setting Stdio's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConnectOptions.html#method.set_loopback"},"loopback")," option, where messages produced will be feed back to consumers in the same process."),(0,o.kt)("p",null,"It's just ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test")," without any external dependency or side effects, so it's extremely quick to execute. Use a unique stream key for each test case. So if the tests fail, you will be able to diagnose the problem from the stdout log. You can check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs"},"full example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let stream = StreamKey::new("hello")?;\nlet mut options = StdioConnectOptions::default();\noptions.set_loopback(true);\nlet streamer = StdioStreamer::connect(StreamerUri::zero(), options).await?;\nlet producer = streamer.create_producer(stream.clone(), Default::default()).await?;\nlet mut consumer = streamer.create_consumer(&[stream.clone()], Default::default()).await?;\n\nfor i in 0..5 {\n    let mess = format!("{}", i);\n    producer.send(mess)?;\n}\n\nlet seq = collect(&mut consumer, 5).await;\nassert_eq!(seq, [0, 1, 2, 3, 4]);\n')),(0,o.kt)("h2",{id:"file"},"File"),(0,o.kt)("p",null,"You can produce-to and consume-from the same file with the File backend. You'd want to use a random file name to avoid interference with other processes."),(0,o.kt)("p",null,"The File backend is just a thin abstraction layer over tokio / async-std's async File IO. There is no network protocol involved, so it's as raw as it can be in terms of throughput."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-file/tests/producer.rs"},"full example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_streamer_file::FileId;\nuse sea_streamer_types::Timestamp;\nuse std::fs::OpenOptions;\n\npub fn temp_file(name: &str) -> Result<FileId, std::io::Error> {\n    let path = format!("/tmp/{name}");\n    let _file = OpenOptions::new()\n        .read(true)\n        .write(true) // Make sure we have write permission\n        .create_new(true) // Fail if this file already exists\n        .open(&path)?;\n\n    Ok(FileId::new(path))\n}\n')))}u.isMDXComponent=!0}}]);