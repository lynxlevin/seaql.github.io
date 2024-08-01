"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3993],{8859:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(1308),n=(r(6687),r(8859));const o={},s="Example Processors",l={unversionedId:"getting-started/examples",id:"getting-started/examples",title:"Example Processors",description:"We maintain a set of examples which you can use as a starting point for you to develop your stream processors.",source:"@site/docs/02-getting-started/03-examples.md",sourceDirName:"02-getting-started",slug:"/getting-started/examples",permalink:"/preview/pr-126/SeaStreamer/docs/next/getting-started/examples",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/02-getting-started/03-examples.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1722493025,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaStreamer Architecture",permalink:"/preview/pr-126/SeaStreamer/docs/next/getting-started/architecture"},next:{title:"Streamer",permalink:"/preview/pr-126/SeaStreamer/docs/next/streamer/streamer"}},i={},c=[{value:"Running the basic processor example",id:"running-the-basic-processor-example",level:2},{value:"Running the resumable processor example",id:"running-the-resumable-processor-example",level:2},{value:"Running the buffered processor example",id:"running-the-buffered-processor-example",level:2},{value:"Running the blocking processor example",id:"running-the-blocking-processor-example",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"example-processors"},"Example Processors"),(0,n.kt)("p",null,"We maintain a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/examples"},"set of examples")," which you can use as a starting point for you to develop your stream processors."),(0,n.kt)("p",null,"The examples work for both ",(0,n.kt)("inlineCode",{parentName:"p"},"tokio")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"async-std")," and uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer-socket")," API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"consumer")),": A basic consumer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"producer")),": A basic producer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"processor")),": A basic stream processor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"resumable")),": A resumable stream processor that continues from where it left off"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/buffered.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"buffered")),": An advanced stream processor with internal buffering and batch processing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"blocking")),": An advanced stream processor for handling blocking / CPU-bound tasks")),(0,n.kt)("h2",{id:"running-the-basic-processor-example"},"Running the basic processor example"),(0,n.kt)("p",null,"With Kafka:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Produce some input\ncargo run --bin producer -- --stream kafka://localhost:9092/hello1 &\n# Start the processor, producing some output\ncargo run --bin processor -- --input kafka://localhost:9092/hello1 --output kafka://localhost:9092/hello2 &\n# Replay the output\ncargo run --bin consumer -- --stream kafka://localhost:9092/hello2\n# Remember to stop the processes\nkill %1 %2\n")),(0,n.kt)("p",null,"With Redis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Produce some input\ncargo run --bin producer -- --stream redis://localhost:6379/hello1 &\n# Start the processor, producing some output\ncargo run --bin processor -- --input redis://localhost:6379/hello1 --output redis://localhost:6379/hello2 &\n# Replay the output\ncargo run --bin consumer -- --stream redis://localhost:6379/hello2\n# Remember to stop the processes\nkill %1 %2\n")),(0,n.kt)("p",null,"With File:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Create the file\nfile=/tmp/sea-streamer-$(date +%s)\ntouch $file && echo "File created at $file"\n# Produce some input\ncargo run --bin producer -- --stream file://$file/hello &\n# Replay the input\ncargo run --bin consumer -- --stream file://$file/hello\n# Start the processor, producing some output\ncargo run --bin processor -- --input file://$file/hello --output stdio:///hello\n')),(0,n.kt)("p",null,"With Stdio:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Pipe the producer to the processor\ncargo run --bin producer -- --stream stdio:///hello1 | \\\ncargo run --bin processor -- --input stdio:///hello1 --output stdio:///hello2\n")),(0,n.kt)("h2",{id:"running-the-resumable-processor-example"},"Running the resumable processor example"),(0,n.kt)("p",null,'The resumable processor can be killed anytime, and will continue from where it left off.\nThis is typically called "at least once" processing, meaning no messages should be skipped,\nbut it\'s possible for the same message to be processed twice.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'STREAMER_URI="kafka://localhost:9092"\nSTREAMER_URI="redis://localhost:6379"\n# Produce lots of input\ncargo run --bin producer -- --stream $STREAMER_URI/hello1\n# Run the processor, but kill it before it can process the entire stream\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\ncargo run --bin resumable -- --input $STREAMER_URI/hello1 --output stdio:///hello2 | head -n 10\n')),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'[2023-02-28T10:13:59 | hello2 | 0] "tick 0" processed\n[2023-02-28T10:13:59 | hello2 | 1] "tick 1" processed\n[2023-02-28T10:13:59 | hello2 | 2] "tick 2" processed\n...\n[2023-02-28T10:13:59 | hello2 | 9] "tick 9" processed\nthread \'sea-streamer-stdio-stdout\' panicked at \'failed printing to stdout: Broken pipe (os error 32)\', library/std/src/io/stdio.rs:1009:9\n\n[2023-02-28T10:14:08 | hello2 | 0] "tick 10" processed\n...\n[2023-02-28T10:14:08 | hello2 | 9] "tick 19" processed\nthread \'sea-streamer-stdio-stdout\' panicked at \'failed printing to stdout: Broken pipe (os error 32)\', library/std/src/io/stdio.rs:1009:9\n\n...\n')),(0,n.kt)("h2",{id:"running-the-buffered-processor-example"},"Running the buffered processor example"),(0,n.kt)("p",null,"The clock runs 10x faster than the processor, so we expect each batch consist of more or less 10 messages."),(0,n.kt)("p",null,"This pattern is useful when an input stream has a high frequency, but the processor has a high impedance."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"A more throughout technical discussion:"),"For example, to insert records into a database, it's more efficient to insert in batches. But you can't naively fix the batch size at 10 or 100, because it might have buffered 9 messages and waiting for the 10th, and you can't handle a sudden burst of messages.",(0,n.kt)("p",null,"So, how to minimize the overall task execution time? You decouple the two busy loops and use a queue to connect them loosely: now both loops can spin at their optimal frequency, maximizing the overall throughput of the processor.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'\nclock -- --stream clock --interval 100ms | \\\ncargo run --bin buffered -- --input stdio:///clock --output stdio:///output\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'[2023-02-27T10:43:58 | output | 0] [batch 0] { "tick": 0 } processed\n[2023-02-27T10:43:59 | output | 1] [batch 1] { "tick": 1 } processed\n[2023-02-27T10:43:59 | output | 2] [batch 1] { "tick": 2 } processed\n[2023-02-27T10:43:59 | output | 3] [batch 1] { "tick": 3 } processed\n[2023-02-27T10:43:59 | output | 4] [batch 1] { "tick": 4 } processed\n[2023-02-27T10:43:59 | output | 5] [batch 1] { "tick": 5 } processed\n[2023-02-27T10:43:59 | output | 6] [batch 1] { "tick": 6 } processed\n[2023-02-27T10:43:59 | output | 7] [batch 1] { "tick": 7 } processed\n[2023-02-27T10:43:59 | output | 8] [batch 1] { "tick": 8 } processed\n...\n')),(0,n.kt)("h2",{id:"running-the-blocking-processor-example"},"Running the blocking processor example"),(0,n.kt)("p",null,'The clock runs 3x faster than the processor, but we have 4 threads, so we expect it to be able to catch up in real-time. Tasks are randomly assigned to threads, aka. a "fan out" pattern.'),(0,n.kt)("p",null,"This pattern is useful when you have to perform blocking IO or CPU-heavy computation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'\nclock -- --stream clock --interval 333ms | \\\ncargo run --bin blocking -- --input stdio:///clock --output stdio:///output\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'[2023-03-07T06:00:52 | output | 0] [thread 0] { "tick": 0 } processed\n[2023-03-07T06:00:53 | output | 1] [thread 1] { "tick": 1 } processed\n[2023-03-07T06:00:53 | output | 2] [thread 2] { "tick": 2 } processed\n[2023-03-07T06:00:53 | output | 3] [thread 3] { "tick": 3 } processed\n[2023-03-07T06:00:54 | output | 4] [thread 0] { "tick": 4 } processed\n[2023-03-07T06:00:54 | output | 5] [thread 1] { "tick": 5 } processed\n[2023-03-07T06:00:54 | output | 6] [thread 2] { "tick": 6 } processed\n')))}u.isMDXComponent=!0}}]);