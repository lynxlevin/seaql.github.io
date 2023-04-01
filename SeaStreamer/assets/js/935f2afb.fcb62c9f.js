"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"0.3.x \ud83d\udea7","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Index","href":"/SeaStreamer/docs/next/index","docId":"index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Intro to Stream Processing","href":"/SeaStreamer/docs/next/introduction/intro-to-streams","docId":"introduction/intro-to-streams"},{"type":"link","label":"Async Programming in Rust","href":"/SeaStreamer/docs/next/introduction/async-programming","docId":"introduction/async-programming"},{"type":"link","label":"SeaStreamer Concepts","href":"/SeaStreamer/docs/next/introduction/sea-streamer","docId":"introduction/sea-streamer"},{"type":"link","label":"Example Processors","href":"/SeaStreamer/docs/next/introduction/examples","docId":"introduction/examples"}]},{"type":"category","label":"Configuration","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Configuring Features","href":"/SeaStreamer/docs/next/configuration/configuration","docId":"configuration/configuration"},{"type":"link","label":"SeaStreamer Architecture","href":"/SeaStreamer/docs/next/configuration/architecture","docId":"configuration/architecture"}]},{"type":"category","label":"SeaStreamer Semantics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Streamer","href":"/SeaStreamer/docs/next/streamer/streamer","docId":"streamer/streamer"},{"type":"link","label":"Producer","href":"/SeaStreamer/docs/next/streamer/producer","docId":"streamer/producer"},{"type":"link","label":"Consumer","href":"/SeaStreamer/docs/next/streamer/consumer","docId":"streamer/consumer"}]},{"type":"category","label":"Connecting Stream Processors","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Inter Process","href":"/SeaStreamer/docs/next/processors/inter-process","docId":"processors/inter-process"},{"type":"link","label":"Intra Process","href":"/SeaStreamer/docs/next/processors/intra-process","docId":"processors/intra-process"}]},{"type":"category","label":"What\'s Next?","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"The Roadmap","href":"/SeaStreamer/docs/next/next/roadmap","docId":"next/roadmap"},{"type":"link","label":"The Vision","href":"/SeaStreamer/docs/next/next/vision","docId":"next/vision"}]}]},"docs":{"configuration/architecture":{"id":"configuration/architecture","title":"SeaStreamer Architecture","description":"The architecture of sea-streamer is constructed by a number of sub-crates:","sidebar":"tutorialSidebar"},"configuration/configuration":{"id":"configuration/configuration","title":"Configuring Features","description":"Cargo","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Index","description":"1. Introduction","sidebar":"tutorialSidebar"},"introduction/async-programming":{"id":"introduction/async-programming","title":"Async Programming in Rust","description":"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library.","sidebar":"tutorialSidebar"},"introduction/examples":{"id":"introduction/examples","title":"Example Processors","description":"We maintain a set of examples which you can use as a starting point for you to develop your stream processors.","sidebar":"tutorialSidebar"},"introduction/intro-to-streams":{"id":"introduction/intro-to-streams","title":"Intro to Stream Processing","description":"\\"Turning the database inside out\\" is an influential article in the data engineering space, leading to the founding of Kafka. Since then, implementations like Redpanda and Redis Streams emerged, spurring a real-time data processing ecosystem.","sidebar":"tutorialSidebar"},"introduction/sea-streamer":{"id":"introduction/sea-streamer","title":"SeaStreamer Concepts","description":"Streamer","sidebar":"tutorialSidebar"},"next/roadmap":{"id":"next/roadmap","title":"The Roadmap","description":"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our GitHub repo! Your support is vital to the continued development of SeaStreamer.","sidebar":"tutorialSidebar"},"next/vision":{"id":"next/vision","title":"The Vision","description":"We want to make Rust the best data engineering platform, with tools that span from development to production.","sidebar":"tutorialSidebar"},"processors/inter-process":{"id":"processors/inter-process","title":"Inter Process","description":"SeaStreamer encourages you to write small stream processors and connect them together, instead of making one giant processor with lots of options.","sidebar":"tutorialSidebar"},"processors/intra-process":{"id":"processors/intra-process","title":"Intra Process","description":"Here is how you might organize a mid-to-large scale stream processing project. You have a number of crates implementing different processors, each depends on sea-streamer in a workspace. Now, you want to construct a downstream crate where you connect several processors together for testing.","sidebar":"tutorialSidebar"},"streamer/consumer":{"id":"streamer/consumer","title":"Consumer","description":"The Consumer trait defines the common interface of stream consumers.","sidebar":"tutorialSidebar"},"streamer/producer":{"id":"streamer/producer","title":"Producer","description":"The Producer trait defines the common interface of stream producers. Producer implements Clone, so you can use it like an mpsc::Sender.","sidebar":"tutorialSidebar"},"streamer/streamer":{"id":"streamer/streamer","title":"Streamer","description":"The Streamer trait defines the common interface of streaming clients.","sidebar":"tutorialSidebar"}}}')}}]);