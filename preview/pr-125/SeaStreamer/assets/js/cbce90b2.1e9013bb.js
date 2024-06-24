"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6864],{6307:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.3.x","label":"0.3.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.3.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Index","href":"/preview/pr-125/SeaStreamer/docs/index","docId":"index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Intro to Stream Processing","href":"/preview/pr-125/SeaStreamer/docs/introduction/intro-to-streams","docId":"introduction/intro-to-streams"},{"type":"link","label":"Async Programming in Rust","href":"/preview/pr-125/SeaStreamer/docs/introduction/async-programming","docId":"introduction/async-programming"},{"type":"link","label":"SeaStreamer Concepts","href":"/preview/pr-125/SeaStreamer/docs/introduction/sea-streamer","docId":"introduction/sea-streamer"}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Configuring Features","href":"/preview/pr-125/SeaStreamer/docs/getting-started/configuration","docId":"getting-started/configuration"},{"type":"link","label":"SeaStreamer Architecture","href":"/preview/pr-125/SeaStreamer/docs/getting-started/architecture","docId":"getting-started/architecture"},{"type":"link","label":"Example Processors","href":"/preview/pr-125/SeaStreamer/docs/getting-started/examples","docId":"getting-started/examples"}]},{"type":"category","label":"SeaStreamer Semantics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Streamer","href":"/preview/pr-125/SeaStreamer/docs/streamer/streamer","docId":"streamer/streamer"},{"type":"link","label":"Producer","href":"/preview/pr-125/SeaStreamer/docs/streamer/producer","docId":"streamer/producer"},{"type":"link","label":"Consumer","href":"/preview/pr-125/SeaStreamer/docs/streamer/consumer","docId":"streamer/consumer"}]},{"type":"category","label":"Connecting Stream Processors","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Inter Process","href":"/preview/pr-125/SeaStreamer/docs/processors/inter-process","docId":"processors/inter-process"},{"type":"link","label":"Intra Process","href":"/preview/pr-125/SeaStreamer/docs/processors/intra-process","docId":"processors/intra-process"}]},{"type":"category","label":"What\'s Next?","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"The Roadmap","href":"/preview/pr-125/SeaStreamer/docs/whats-next/roadmap","docId":"whats-next/roadmap"},{"type":"link","label":"The Vision","href":"/preview/pr-125/SeaStreamer/docs/whats-next/vision","docId":"whats-next/vision"}]}]},"docs":{"getting-started/architecture":{"id":"getting-started/architecture","title":"SeaStreamer Architecture","description":"The architecture of sea-streamer is constructed by a number of sub-crates:","sidebar":"tutorialSidebar"},"getting-started/configuration":{"id":"getting-started/configuration","title":"Configuring Features","description":"Cargo","sidebar":"tutorialSidebar"},"getting-started/examples":{"id":"getting-started/examples","title":"Example Processors","description":"We maintain a set of examples which you can use as a starting point for you to develop your stream processors.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Index","description":"1. Introduction","sidebar":"tutorialSidebar"},"introduction/async-programming":{"id":"introduction/async-programming","title":"Async Programming in Rust","description":"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library.","sidebar":"tutorialSidebar"},"introduction/intro-to-streams":{"id":"introduction/intro-to-streams","title":"Intro to Stream Processing","description":"\\"Turning the database inside out\\" is an influential article in the data engineering space, leading to the founding of Kafka. Since then, implementations like Redpanda and Redis Streams emerged, spurring a real-time data processing ecosystem.","sidebar":"tutorialSidebar"},"introduction/sea-streamer":{"id":"introduction/sea-streamer","title":"SeaStreamer Concepts","description":"Streamer","sidebar":"tutorialSidebar"},"processors/inter-process":{"id":"processors/inter-process","title":"Inter Process","description":"SeaStreamer encourages you to write small stream processors and connect them together, instead of making one giant processor with lots of options.","sidebar":"tutorialSidebar"},"processors/intra-process":{"id":"processors/intra-process","title":"Intra Process","description":"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on sea-streamer in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing.","sidebar":"tutorialSidebar"},"streamer/consumer":{"id":"streamer/consumer","title":"Consumer","description":"The Consumer trait defines the common interface of stream consumers.","sidebar":"tutorialSidebar"},"streamer/producer":{"id":"streamer/producer","title":"Producer","description":"The Producer trait defines the common interface of stream producers. Producer implements Clone, so you can use it like an mpsc::Sender.","sidebar":"tutorialSidebar"},"streamer/streamer":{"id":"streamer/streamer","title":"Streamer","description":"The Streamer trait defines the common interface of streaming clients.","sidebar":"tutorialSidebar"},"whats-next/roadmap":{"id":"whats-next/roadmap","title":"The Roadmap","description":"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our GitHub repo! Your support is vital to the continued development of SeaStreamer.","sidebar":"tutorialSidebar"},"whats-next/vision":{"id":"whats-next/vision","title":"The Vision","description":"We want to make Rust the best data engineering platform, with tools that span from development to production.","sidebar":"tutorialSidebar"}}}')}}]);