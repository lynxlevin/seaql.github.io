"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5064],{8859:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(6687);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(d,".").concat(m)]||u[m]||l[m]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},214:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(1308),a=(t(6687),t(8859));const o={},i="Producer",s={unversionedId:"streamer/producer",id:"version-0.1.x/streamer/producer",title:"Producer",description:"The Producer trait defines the common interface of stream producers. Producer implements Clone, so you can use it like an mpsc::Sender.",source:"@site/versioned_docs/version-0.1.x/03-streamer/02-producer.md",sourceDirName:"03-streamer",slug:"/streamer/producer",permalink:"/preview/pr-118/SeaStreamer/docs/0.1.x/streamer/producer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/03-streamer/02-producer.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712040915,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streamer",permalink:"/preview/pr-118/SeaStreamer/docs/0.1.x/streamer/streamer"},next:{title:"Consumer",permalink:"/preview/pr-118/SeaStreamer/docs/0.1.x/streamer/consumer"}},d={},c=[{value:"<code>ProducerOptions</code>",id:"produceroptions",level:2},{value:"<code>send</code>",id:"send",level:2},{value:"<code>Receipt</code>",id:"receipt",level:3},{value:"<code>send_to</code>",id:"send_to",level:2},{value:"<code>anchor</code>",id:"anchor",level:2},{value:"<code>anchored</code>",id:"anchored",level:2}],p={toc:c};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"producer"},"Producer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Producer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Producer"))," trait defines the common interface of stream producers. ",(0,a.kt)("inlineCode",{parentName:"p"},"Producer")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone"),", so you can use it like an ",(0,a.kt)("inlineCode",{parentName:"p"},"mpsc::Sender"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"KafkaProducer"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-stdio/latest/sea_streamer_stdio/struct.StdioProducer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"StdioProducer"))," have more functions for transaction and flushing."),(0,a.kt)("h2",{id:"produceroptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"ProducerOptions")),(0,a.kt)("p",null,"There is nothing interesting as of now. We may add some in the future."),(0,a.kt)("h2",{id:"send"},(0,a.kt)("inlineCode",{parentName:"h2"},"send")),(0,a.kt)("p",null,"Send a message to the already anchored stream. This function is non-blocking. You don\u2019t have to ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," the future if you are not interested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receipt"),"."),(0,a.kt)("p",null,"If the producer is not anchored, this will return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::NotAnchored")," error."),(0,a.kt)("h3",{id:"receipt"},(0,a.kt)("inlineCode",{parentName:"h3"},"Receipt")),(0,a.kt)("p",null,"If you await the future, you will get a receipt composed of (StreamKey, ShardId, SeqNo, Timestamp). This usually means that the message has been ",(0,a.kt)("em",{parentName:"p"},"received by")," the broker, but may not guarantee that the message is already ",(0,a.kt)("em",{parentName:"p"},"persisted"),"."),(0,a.kt)("h2",{id:"send_to"},(0,a.kt)("inlineCode",{parentName:"h2"},"send_to")),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"send"),", but to the specified stream key."),(0,a.kt)("h2",{id:"anchor"},(0,a.kt)("inlineCode",{parentName:"h2"},"anchor")),(0,a.kt)("p",null,"Lock this producer to a particular stream. This function can only be called once. Subsequent calls should return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::AlreadyAnchored")," error."),(0,a.kt)("h2",{id:"anchored"},(0,a.kt)("inlineCode",{parentName:"h2"},"anchored")),(0,a.kt)("p",null,"If the producer is already anchored, return a reference to the StreamKey. If the producer is not anchored, this will return ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamErr::NotAnchored")," error."))}l.isMDXComponent=!0}}]);