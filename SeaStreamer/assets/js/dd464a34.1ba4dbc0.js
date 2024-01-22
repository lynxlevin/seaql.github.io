"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2927],{8859:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(1308),n=(r(6687),r(8859));const o={},s="Inter Process",l={unversionedId:"processors/inter-process",id:"version-0.1.x/processors/inter-process",title:"Inter Process",description:"SeaStreamer encourages you to write small stream processors and connect them together, instead of making one giant processor with lots of options.",source:"@site/versioned_docs/version-0.1.x/04-processors/01-inter-process.md",sourceDirName:"04-processors",slug:"/processors/inter-process",permalink:"/SeaStreamer/docs/0.1.x/processors/inter-process",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/04-processors/01-inter-process.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705892762,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consumer",permalink:"/SeaStreamer/docs/0.1.x/streamer/consumer"},next:{title:"Intra Process",permalink:"/SeaStreamer/docs/0.1.x/processors/intra-process"}},i={},p=[{value:"Trying out",id:"trying-out",level:2},{value:"Stdio message format",id:"stdio-message-format",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"inter-process"},"Inter Process"),(0,n.kt)("p",null,"SeaStreamer encourages you to write small stream processors and connect them together, instead of making one giant processor with lots of options."),(0,n.kt)("p",null,"The unix pipe is a great invention, which makes anyone a text processing wizard by assembling programs in the shell!"),(0,n.kt)("p",null,"What if we can also work with event streams in the same way?"),(0,n.kt)("p",null,"With SeaStreamer, you can connect processors together with pipes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"processor_a | processor_b\n")),(0,n.kt)("p",null,"You can also connect them asynchronously with files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"touch stream # set up an empty file\ntail -f stream | processor_b # program b can be spawned anytime\nprocessor_a >> stream # append to the file\n")),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"cat")," to replay a file, but it runs from start to end as fast as possible then stops,\nwhich may or may not be the desired behavior."),(0,n.kt)("h2",{id:"trying-out"},"Trying out"),(0,n.kt)("p",null,"A small number of cli programs are provided by SeaStreamer for demonstration. Let's set them up first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# The `clock` program generate messages in the form of `{ \"tick\": N }`\nalias clock='cargo run --package sea-streamer-stdio  --features=executables --bin clock'\n# The `relay` program redirect messages from `input` to `output`\nalias relay='cargo run --package sea-streamer-socket --features=executables --bin relay'\n")),(0,n.kt)("p",null,"Here is how to stream from Stdio \u27a1\ufe0f Kafka. We generate messages using ",(0,n.kt)("inlineCode",{parentName:"p"},"clock")," and then pipe it to ",(0,n.kt)("inlineCode",{parentName:"p"},"relay"),",\nwhich then streams to Kafka:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"clock -- --stream clock --interval 1s | \\\nrelay -- --input stdio:///clock --output kafka://localhost:9092/clock\n")),(0,n.kt)("p",null,"Here is how to ",(0,n.kt)("em",{parentName:"p"},"replay")," the stream from Kafka \u27a1\ufe0f Stdio:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"relay -- --input kafka://localhost:9092/clock --output stdio:///clock --offset start\n")),(0,n.kt)("h2",{id:"stdio-message-format"},"Stdio message format"),(0,n.kt)("p",null,"You can write any valid UTF-8 string to stdin and each line will be considered a message. In addition, you can write some message meta in a simple format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"[timestamp | stream_key | sequence | shard_id] payload\n")),(0,n.kt)("p",null,"Note: the square brackets are literal ",(0,n.kt)("inlineCode",{parentName:"p"},"[")," ",(0,n.kt)("inlineCode",{parentName:"p"},"]"),"."),(0,n.kt)("p",null,"The following are all valid:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'a plain, raw message\n[2022-01-01T00:00:00] { "payload": "anything" }\n[2022-01-01T00:00:00.123 | my_topic] "a string payload"\n[2022-01-01T00:00:00 | my-topic-2 | 123] ["array", "of", "values"]\n[2022-01-01T00:00:00 | my-topic-2 | 123 | 4] { "payload": "anything" }\n[my_topic] a string payload\n[my_topic | 123] { "payload": "anything" }\n[my_topic | 123 | 4] { "payload": "anything" }\n')),(0,n.kt)("p",null,"The following are all invalid:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'[Jan 1, 2022] { "payload": "anything" }\n[2022-01-01T00:00:00] 12345\n')),(0,n.kt)("p",null,"If no stream key is given, it will be assigned the name ",(0,n.kt)("inlineCode",{parentName:"p"},"broadcast")," and sent to all consumers."))}m.isMDXComponent=!0}}]);