"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[1179],{9680:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(1308),r=(n(6687),n(9680));const l={slug:"2024-05-20-async-rainbow-bridge",title:"The rainbow bridge between sync and async Rust",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/blog/img/async-rainbow-bridge.png",tags:["news"]},s=void 0,o={permalink:"/preview/pr-123/blog/2024-05-20-async-rainbow-bridge",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-05-20-async-rainbow-bridge.md",source:"@site/blog/2024-05-20-async-rainbow-bridge.md",title:"The rainbow bridge between sync and async Rust",description:'This story stems from the saying "What Color is Your Function?" as a criticism to the async implementation of common programming languages. Well, Rust also falls into the category of "colored functions". So in this blog post, let\'s see how we can design systems to effectively combine sync and async code.',date:"2024-05-20T00:00:00.000Z",formattedDate:"May 20, 2024",tags:[{label:"news",permalink:"/preview/pr-123/blog/tags/news"}],readingTime:7.725,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2024-05-20-async-rainbow-bridge",title:"The rainbow bridge between sync and async Rust",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://www.sea-ql.org/blog/img/async-rainbow-bridge.png",tags:["news"]},prevItem:{title:"Getting Started with Loco & SeaORM",permalink:"/preview/pr-123/blog/2024-05-28-getting-started-with-loco-seaorm"},nextItem:{title:"Building a Redis / Kafka Data Sink",permalink:"/preview/pr-123/blog/2024-05-05-redis-kafka-data-sink"}},i={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Sync -&gt; Sync",id:"sync---sync",level:2},{value:"Async -&gt; Async",id:"async---async",level:2},{value:"Flume mpmc",id:"flume-mpmc",level:3},{value:"mpmc - multi producer, multi consumer",id:"mpmc---multi-producer-multi-consumer",level:4},{value:"Sync -&gt; Async",id:"sync---async",level:2},{value:"Graceful shutdown",id:"graceful-shutdown",level:3},{value:"Async -&gt; Sync",id:"async---sync",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Rustacean Sticker Pack \ud83e\udd80",id:"rustacean-sticker-pack-",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/blog/img/async-rainbow-bridge.png"}),(0,r.kt)("p",null,'This story stems from the saying "What Color is Your Function?" as a criticism to the async implementation of common programming languages. Well, Rust also falls into the category of "colored functions". So in this blog post, let\'s see how we can design systems to effectively combine sync and async code.'),(0,r.kt)("p",null,"Rainbow bridge is a reference to the bridge in Thor that teleports you between different realms - a perfect analogy!"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Sync code can be blocking IO, or expensive computation. Async code is usually network IO where you'd wait for results."),(0,r.kt)("p",null,"In both cases, we want to maximize concurrency, such that the program can make full use of the CPU instead of sitting there idle. A common approach is message passing, where we package tasks and send them to different workers for execution."),(0,r.kt)("h2",{id:"sync---sync"},"Sync -> Sync"),(0,r.kt)("p",null,"Let's start with the classic example, pure sync code. There exists ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/sync/mpsc/index.html"},"std::sync::mpsc")," in the standard library, so let's take a look."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::mpsc::channel;\n\n// create an unbounded channel\nlet (sender, receiver) = channel();\n\n// never blocks\nsender.send("Hello".to_string()).unwrap();\n\nlet handle = std::thread::spawn(move|| {\n    // wait until there is a message\n    let message = receiver.recv().unwrap();\n    println!("{message}");\n});\n\nhandle.join().unwrap();\nprintln!("Bye");\n')),(0,r.kt)("p",null,"Prints (",(0,r.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=4eecb3216b6b10477849f5648bb026f4"},"Playground"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Hello\nBye\n")),(0,r.kt)("p",null,"Now, we'll make a more elaborate example: a program that spawns a number of worker threads to perform some 'expensive' computation. The main thread would dispatch the tasks to those threads and in turn collect the results via another channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    tasks    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   result\n\u2502             \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561 worker thread 1 \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \n\u2502 main thread \u2502             \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524             \u2560\u2550\u2550\u2550\u2550\u2561 main thread \u2502 \n\u2502             \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561 worker thread 2 \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518              \n")),(0,r.kt)("p",null,"First, setup the channels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let (result, collector) = channel(); // result\nlet mut senders = Vec::new();\nfor _ in 0..THREADS {\n    let (sender, receiver) = channel(); // tasks\n    senders.push(sender);\n    let result = result.clone();\n    std::thread::spawn(move || worker(receiver, result));\n}\n")),(0,r.kt)("p",null,"The worker thread looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn worker(receiver: Receiver<Task>, sender: Sender<Done>) {\n    while let Ok(task) = receiver.recv() {\n        let result = process(task);\n        sender.send(result).unwrap();\n    }\n}\n")),(0,r.kt)("p",null,"Then, dispatch tasks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"for c in 0..TASKS {\n    let task = some_random_task();\n    senders[c % THREADS].send(task).unwrap();\n}\n")),(0,r.kt)("p",null,"Finally, we can collect results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'for _ in 0..TASKS {\n    let result = collector.recv().unwrap();\n    println!("{result:?}");\n}\n')),(0,r.kt)("p",null,"Full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/FireDBG.Rust.Testbench/tree/main/multi-thread-matrix"},"here"),"."),(0,r.kt)("h2",{id:"async---async"},"Async -> Async"),(0,r.kt)("p",null,"Next, we'll migrate to async land. Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/tokio/latest/tokio/sync/mpsc/index.html"},"tokio::sync::mpsc"),", it's very similar to the above example, except every operation is ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and thus imposes additional restrictions to lifetimes. (The trick is, just move / clone. Don't borrow)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tokio"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"unbounded_channel")," is the equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"std"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),". Otherwise it's very similar. The ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn")," method takes in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Future"),"; since the worker needs to take in the channels, we construct an async closure with ",(0,r.kt)("inlineCode",{parentName:"p"},"async move {}"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"std"),(0,r.kt)("th",{parentName:"tr",align:null},"tokio"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(unbounded) ",(0,r.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/sync/mpsc/fn.channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"channel"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tokio/latest/tokio/sync/mpsc/fn.unbounded_channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"unbounded_channel")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/sync/mpsc/fn.sync_channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sync_channel"))),(0,r.kt)("td",{parentName:"tr",align:null},"(bounded) ",(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tokio/latest/tokio/sync/mpsc/fn.channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"channel")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let (result, mut collector) = unbounded_channel();\nlet mut senders = Vec::new();\nfor _ in 0..WORKERS {\n    let (sender, mut receiver) = unbounded_channel();\n    senders.push(sender);\n    let result = result.clone();\n    tokio::task::spawn(async move {\n        while let Some(task) = receiver.recv().await {\n            result.send(process(task).await).unwrap();\n        }\n    });\n}\nstd::mem::drop(result); // <-- ?\n")),(0,r.kt)("p",null,"Why do we need to drop the ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," sender? This is one of the foot gun: ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio")," would swallow panics originated within the task, and so if that happened, the program would never exit. By dropping the last copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," in scope, the channel would automatically close ",(0,r.kt)("em",{parentName:"p"},"after")," all tasks exit, which in turn would triggle up to our ",(0,r.kt)("inlineCode",{parentName:"p"},"collector"),"."),(0,r.kt)("p",null,"The rest is almost the same."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'for (i, task) in tasks.iter().enumerate() {\n    senders[i % WORKERS].send(task.clone()).unwrap();\n}\nstd::mem::drop(senders);\n\nfor _ in 0..tasks.len() {\n    let result = collector.recv().await.unwrap();\n    println!("{result:?}");\n}\n')),(0,r.kt)("p",null,"Full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/FireDBG.Rust.Testbench/tree/main/tokio-mpsc"},"here"),"."),(0,r.kt)("h3",{id:"flume-mpmc"},"Flume mpmc"),(0,r.kt)("h4",{id:"mpmc---multi-producer-multi-consumer"},"mpmc - multi producer, multi consumer"),(0,r.kt)("p",null,"The previous examples have a flaw: we have to spawn multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"mpsc")," channels to send tasks, which is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"clumsy. we need to keep a list of ",(0,r.kt)("inlineCode",{parentName:"li"},"senders")),(0,r.kt)("li",{parentName:"ol"},"not the most efficient. is round-robin the best way of distributing tasks? some of the workers may remain idle")),(0,r.kt)("p",null,"Here is the ideal setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                      tasks   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   result\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561 worker thread 1 \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \n\u2502 main thread \u255e\u2550\u2550\u2550\u2563           \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524            \u2560\u2550\u2550\u2550\u2561 main thread \u2502 \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561 worker thread 2 \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \n                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518              \n")),(0,r.kt)("p",null,"Let's rewrite our example using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/flume/latest/flume/"},"Flume"),". But first, know the mapping between ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flume"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tokio"),(0,r.kt)("th",{parentName:"tr",align:null},"Flume"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tokio/latest/tokio/sync/mpsc/fn.unbounded_channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"unbounded_channel"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/flume/latest/flume/fn.unbounded.html"},(0,r.kt)("inlineCode",{parentName:"a"},"unbounded"))," (channel)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(bounded) ",(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tokio/latest/tokio/sync/mpsc/fn.channel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"channel"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/flume/latest/flume/fn.bounded.html"},"bounded")," (channel)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recv")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recv_async"))))),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio"),", the method is exclusive: ",(0,r.kt)("inlineCode",{parentName:"p"},"async fn recv(&mut self)"),"; in ",(0,r.kt)("inlineCode",{parentName:"p"},"flume"),", the method is ",(0,r.kt)("inlineCode",{parentName:"p"},"fn recv_async(&self) -> RecvFut"),". The type signature already told you the distinction between ",(0,r.kt)("inlineCode",{parentName:"p"},"mpsc")," vs ",(0,r.kt)("inlineCode",{parentName:"p"},"mpmc"),"! It is wrong to use the blocking ",(0,r.kt)("inlineCode",{parentName:"p"},"recv")," method in async context in ",(0,r.kt)("inlineCode",{parentName:"p"},"flume"),", but sadly the compiler would not warn you about it."),(0,r.kt)("p",null,"The channel setup is now slightly simpler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let (sender, receiver) = unbounded(); // task\nlet (result, collector) = unbounded(); // result\n\nfor _ in 0..WORKERS {\n    let receiver = receiver.clone();\n    let result = result.clone();\n    tokio::task::spawn(async move {\n        while let Ok(task) = receiver.recv_async().await {\n            result.send(process(task).await).unwrap();\n        }\n    });\n}\n")),(0,r.kt)("p",null,"We no longer have to dispatch tasks ourselves. All workers share the same task queue, and thus workers would fetch the next task as soon as the previous one is finished - effectively load balance among themselves!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'for task in &tasks {\n    sender.send(task.clone()).unwrap();\n}\n\nfor _ in 0..tasks.len() {\n    let result = collector.recv_async().await.unwrap();\n    println!("{result:?}");\n}\n')),(0,r.kt)("p",null,"Full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/FireDBG.Rust.Testbench/tree/main/flume-mpmc"},"here"),"."),(0,r.kt)("h2",{id:"sync---async"},"Sync -> Async"),(0,r.kt)("p",null,"In the final example, let's consider a program that is mostly sync, but has a few async operations that we want to handle in a background thread. "),(0,r.kt)("p",null,"In the example below, our blocking operation is 'reading from stdin' from the main thread. And we send those lines to an async thread to handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 main thread \u255e\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2561 async thread \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"It follows the usual 3 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"create a flume channel"),(0,r.kt)("li",{parentName:"ol"},"pass the receiver end to a worker thread"),(0,r.kt)("li",{parentName:"ol"},"send tasks over the channel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() -> Result<()> {\n    let (sender, receiver) = unbounded(); // flume channel\n\n    std::thread::spawn(move || {\n        // this runtime is single-threaded\n        let rt = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();\n        rt.block_on(handler(receiver))\n    });\n\n    loop {\n        let mut line = String::new();\n        // this blocks the current thread until there is a new line\n        match std::io::stdin().read_line(&mut line) {\n            Ok(0) => break, // this means stdin is closed\n            Ok(_) => (),\n            Err(e) => panic!("{e:?}"),\n        }\n        sender.send(line)?;\n    }\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"This is the handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn handler(receiver: Receiver<String>) -> Result<()> {\n    while let Ok(line) = receiver.recv_async().await {\n        process(line).await?;\n    }\n    Ok(())\n}\n")),(0,r.kt)("p",null,"It doesn't look much different from the ",(0,r.kt)("inlineCode",{parentName:"p"},"async -> async")," example, the only difference is one side is sync! Full source code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-file/src/bin/stdin-to-file.rs"},"here"),"."),(0,r.kt)("h3",{id:"graceful-shutdown"},"Graceful shutdown"),(0,r.kt)("p",null,"The above code has a problem: we never know whether a line has been processed. If the program has an exit mechanism from handling ",(0,r.kt)("inlineCode",{parentName:"p"},"sigint"),", there is a possibility of exiting before all the lines has been processed."),(0,r.kt)("p",null,"Let's see how we can shutdown properly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let handle = std::thread::spawn(..);\n\n// running is an AtomicBool\nwhile running.load(Ordering::Acquire) {\n    let line = read_line_from_stdin();\n    sender.send(line)?;\n}\n\nstd::mem::drop(sender);\nhandle.join().unwrap().unwrap();\n")),(0,r.kt)("p",null,"The shutdown sequence has 3 steps:"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"we first obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"JoinHandle")," to the thread"),(0,r.kt)("li",{parentName:"ol"},"we drop all copies of ",(0,r.kt)("inlineCode",{parentName:"li"},"sender"),", effectively closing the channel"),(0,r.kt)("li",{parentName:"ol"},"in the worker thread, ",(0,r.kt)("inlineCode",{parentName:"li"},"receiver.recv_async()")," would result in an error, as stated in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/flume/latest/flume/struct.Receiver.html#method.recv_async"},"docs"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Asynchronously receive a value from the channel, returning an error if all senders have been dropped."))),(0,r.kt)("li",{parentName:"ol"},"the worker thread finishes, joining the main thread")),(0,r.kt)("h2",{id:"async---sync"},"Async -> Sync"),(0,r.kt)("p",null,"The other way around is equally simple, as illustrated in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs"},"SeaStreamer's example"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"sync"),(0,r.kt)("th",{parentName:"tr",align:null},"async"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to spawn worker"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/thread/fn.spawn.html"},(0,r.kt)("inlineCode",{parentName:"a"},"std::thread::spawn"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.rs/tokio/latest/tokio/task/fn.spawn.html"},(0,r.kt)("inlineCode",{parentName:"a"},"tokio::task::spawn")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"multi-threaded"),(0,r.kt)("td",{parentName:"tr",align:null},"can be multi-threaded or single-threaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"worker is"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FnOnce")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Future"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send message with"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"send"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receive message with"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recv")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recv_async"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waiting for messages"),(0,r.kt)("td",{parentName:"tr",align:null},"blocking"),(0,r.kt)("td",{parentName:"tr",align:null},"yield to runtime")))),(0,r.kt)("p",null,"In this article we discussed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Multi-threaded parallelism in sync realm"),(0,r.kt)("li",{parentName:"ol"},"Concurrency in async realm - with ",(0,r.kt)("inlineCode",{parentName:"li"},"tokio")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"flume")),(0,r.kt)("li",{parentName:"ol"},"Bridging sync and async code with ",(0,r.kt)("inlineCode",{parentName:"li"},"flume"))),(0,r.kt)("p",null,"Now you already learnt the powers of ",(0,r.kt)("inlineCode",{parentName:"p"},"flume"),", but there is more!"),(0,r.kt)("p",null,"In the next episode, hopefully we will get to discuss other interesting features of ",(0,r.kt)("inlineCode",{parentName:"p"},"flume")," - bounded channels and 'rendezvous channels'. Follow our ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/sea_ql"},"X / Twitter")," for updates!"),(0,r.kt)("h2",{id:"rustacean-sticker-pack-"},"Rustacean Sticker Pack \ud83e\udd80"),(0,r.kt)("p",null,"The Rustacean Sticker Pack is the perfect way to express your passion for Rust.\nOur stickers are made with a premium water-resistant vinyl with a unique matte finish.\nStick them on your laptop, notebook, or any gadget to show off your love for Rust!"),(0,r.kt)("p",null,"Moreover, all proceeds contributes directly to the ongoing development of SeaQL projects."),(0,r.kt)("p",null,"Sticker Pack Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logo of SeaQL projects: SeaQL, SeaORM, SeaQuery, Seaography, FireDBG"),(0,r.kt)("li",{parentName:"ul"},"Mascot of SeaQL: Terres the Hermit Crab"),(0,r.kt)("li",{parentName:"ul"},"Mascot of Rust: Ferris the Crab"),(0,r.kt)("li",{parentName:"ul"},"The Rustacean word")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sticker-pack/"},"Support SeaQL and get a Sticker Pack!")),(0,r.kt)("a",{href:"https://www.sea-ql.org/sticker-pack/"},(0,r.kt)("img",{style:{borderRadius:"25px"},alt:"Rustacean Sticker Pack by SeaQL",src:"https://www.sea-ql.org/static/sticker-pack-1s.jpg"})))}u.isMDXComponent=!0}}]);