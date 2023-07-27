"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Macros documentation",l={unversionedId:"macros-documentation",id:"version-0.2.x/macros-documentation",title:"Macros documentation",description:"Filter derive",source:"@site/versioned_docs/version-0.2.x/05-macros-documentation.md",sourceDirName:".",slug:"/macros-documentation",permalink:"/preview/pr-102/Seaography/docs/macros-documentation",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/versioned_docs/version-0.2.x/05-macros-documentation.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1690428025,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extending generated code",permalink:"/preview/pr-102/Seaography/docs/extending-code"},next:{title:"DataLoader",permalink:"/preview/pr-102/Seaography/docs/data-loader"}},u={},p=[{value:"<code>Filter</code> derive",id:"filter-derive",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"<code>RelationsCompact</code> derive",id:"relationscompact-derive",level:2},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output-1",level:3},{value:"<code>relation</code> macro",id:"relation-macro",level:2},{value:"Input",id:"input-2",level:3},{value:"Output",id:"output-2",level:3},{value:"<code>EnumFilter</code> derive",id:"enumfilter-derive",level:2},{value:"Input",id:"input-3",level:3},{value:"Output",id:"output-3",level:3},{value:"<code>QueryRoot</code> macro",id:"queryroot-macro",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Input",id:"input-4",level:3},{value:"Output",id:"output-4",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macros-documentation"},"Macros documentation"),(0,a.kt)("h2",{id:"filter-derive"},(0,a.kt)("inlineCode",{parentName:"h2"},"Filter")," derive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," derive macro is attached on Sea ORM Models to generate structures and functions that are used by the QueryRoot to provide query functionality on Entities."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "film")]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"table_name: used to supply the macro with the entity name that will be used for the structure names")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(\n    Clone,\n    Debug,\n    PartialEq,\n    DeriveModel,\n    DeriveActiveModel,\n    async_graphql::SimpleObject, // Required by Async GraphQL\n    seaography::macros::Filter, // The macro\n)]\n#[sea_orm(table_name = "film")]\n#[graphql(complex)] // Used by Relations derive\n#[graphql(name = "Film")] // Required by Async GraphQL\npub struct Model {\n    pub film_id: u16,\n    pub title: String,\n    pub rating: Option<Rating>,\n    pub last_update: DateTimeUtc,\n}\n')),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("p",null,"Used to describe complex SQL filters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, async_graphql::InputObject)]\n#[graphql(name = "FilmFilter")]\npub struct Filter {\n    pub or: Option<Vec<Box<Filter>>>,\n    pub and: Option<Vec<Box<Filter>>>,\n    pub film_id: Option<seaography::TypeFilter<u16>>,\n    pub title: Option<seaography::TypeFilter<String>>,\n    // See Enumeration derive\n    pub rating: Option<crate::entities::sea_orm_active_enums::RatingEnumFilter>,\n    pub last_update: Option<seaography::TypeFilter<DateTimeUtc>>,\n}\n')),(0,a.kt)("p",null,"Used to receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," struct and convect it into sea_orm::Condition that is applied on sea_orm query statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn filter_recursive(root_filter: Option<Filter>) -> sea_orm::Condition {\n    ...\n}\n")),(0,a.kt)("p",null,"Used to describe order by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, async_graphql::InputObject)]\n#[graphql(name = "FilmOrderBy")]\npub struct OrderBy {\n    pub film_id: Option<seaography::OrderByEnum>,\n    pub title: Option<seaography::OrderByEnum>,\n    pub rating: Option<seaography::OrderByEnum>,\n    pub last_update: Option<seaography::OrderByEnum>,\n}\n')),(0,a.kt)("p",null,"Used to receive a query statement and OrderBy struct and update the statement with desired ordering."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn order_by(stmt: sea_orm::Select<Entity>, order_by_struct: Option<OrderBy>) -> sea_orm::Select<Entity> {\n    ...\n}\n")),(0,a.kt)("h2",{id:"relationscompact-derive"},(0,a.kt)("inlineCode",{parentName:"h2"},"RelationsCompact")," derive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationsCompact")," derive macro is attached on Sea ORM Relation enum to generate structures and functions that are used by the Entity to query related Entities. This derive is applied on Entities in compact form."),(0,a.kt)("h3",{id:"input-1"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(\n    Copy,\n    Clone,\n    Debug,\n    EnumIter,\n    DeriveRelation,\n    seaography::macros::RelationsCompact,\n)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::employees::Entity",\n        from = "Column::SupportRepId",\n        to = "super::employees::Column::EmployeeId",\n        on_update = "NoAction",\n        on_delete = "NoAction"\n    )]\n    Employees,\n    #[sea_orm(has_many = "super::invoices::Entity")]\n    Invoices,\n}\n')),(0,a.kt)("h3",{id:"output-1"},"Output"),(0,a.kt)("p",null,"The following are implemented for Entity Model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Requires graphql complex flag enabled on Model\n#[async_graphql::ComplexObject]\nimpl Model {\n    pub fn employees<'a>(\n        &self,\n        ctx: &async_graphql::Context<'a>,\n    ) -> Option<#return_type>\n    {\n      ...\n    }\n\n    pub fn invoices<'a>(\n        &self,\n        ctx: &async_graphql::Context<'a>,\n    ) -> Option<#return_type>\n    {\n      // Uses context.dataloader.load::<InvoicesFK>(...) to dispatch query\n      ...\n    }\n}\n")),(0,a.kt)("p",null,"For every enum variant the following things are generated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Used for the context loader\n#[derive(Clone, Debug)]\npub struct EmployeesFK(...);\n\n// Implement load fn for Foreign key\n#[async_trait::async_trait]\nimpl async_graphql::dataloader::Loader<EmployeesFK> for crate::OrmDataloader {\n    type Value = #return_type;\n    type Error = std::sync::Arc<sea_orm::error::DbErr>;\n\n    async fn load(\n        &self,\n        keys: &[#EmployeesFK],\n    ) -> Result<\n        std::collections::HashMap<#EmployeesFK, Self::Value>,\n        Self::Error\n    >\n    {\n        ...\n    }\n}\n")),(0,a.kt)("h2",{id:"relation-macro"},(0,a.kt)("inlineCode",{parentName:"h2"},"relation")," macro"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"relation")," macro is attached on Sea ORM RelationTrait implementation to generate structures and functions that are used by the Entity to query related Entities. This derive is applied on Entities in expanded form."),(0,a.kt)("h3",{id:"input-2"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[seaography::macros::relation]\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Employees => Entity::belongs_to(super::employees::Entity)\n                .from(Column::SupportRepId)\n                .to(super::employees::Column::EmployeeId)\n                .into(),\n            Self::Invoices => Entity::has_many(super::invoices::Entity).into(),\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"output-2"},"Output"),(0,a.kt)("p",null,"It produces the same result as ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationsCompact")),(0,a.kt)("h2",{id:"enumfilter-derive"},(0,a.kt)("inlineCode",{parentName:"h2"},"EnumFilter")," derive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EnumFilter")," macro is attached on Sea ORM Enum to generate its GraphQL filter struct used on Entities Filters"),(0,a.kt)("h3",{id:"input-3"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![doc = "SeaORM Entity. Generated by sea-orm-codegen 0.9.1"]\nuse sea_orm::entity::prelude::*;\n#[derive(\n    Debug,\n    Clone,\n    PartialEq,\n    EnumIter,\n    DeriveActiveEnum,\n    Eq,\n    Copy,\n    async_graphql::Enum, // Required by GraphQL\n    seaography::macros::EnumFilter, // The macro\n)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "rating")]\npub enum Rating {\n    #[sea_orm(string_value = "G")]\n    G,\n    #[sea_orm(string_value = "PG")]\n    Pg,\n    #[sea_orm(string_value = "PG-13")]\n    Pg13,\n    #[sea_orm(string_value = "R")]\n    R,\n    #[sea_orm(string_value = "NC-17")]\n    Nc17,\n}\n')),(0,a.kt)("h3",{id:"output-3"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, async_graphql::InputObject)]\npub struct RatingEnumFilter {\n    pub eq: Option<Rating>,\n    pub ne: Option<Rating>,\n    pub gt: Option<Rating>,\n    pub gte: Option<Rating>,\n    pub lt: Option<Rating>,\n    pub lte: Option<Rating>,\n    pub is_in: Option<Vec<Rating>>,\n    pub is_not_in: Option<Vec<Rating>>,\n    pub is_null: Option<bool>,\n}\n")),(0,a.kt)("h2",{id:"queryroot-macro"},(0,a.kt)("inlineCode",{parentName:"h2"},"QueryRoot")," macro"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRoot")," derive macro is used to generate queries for every Entity that is defined through attributes. The query supports filtering, pagination and ordering."),(0,a.kt)("h3",{id:"attributes-1"},"Attributes"),(0,a.kt)("p",null,"It enables the query for the specified path ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," and it also instructs the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRoot")," derive where to find the required utilities structures and functions for the generated code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[seaography(entity = "crate::entities::artists")]\n')),(0,a.kt)("h3",{id:"input-4"},"Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, seaography :: macros :: QueryRoot)]\n#[seaography(entity = "crate::entities::artists")]\n#[seaography(entity = "crate::entities::employees")]\npub struct QueryRoot;\n')),(0,a.kt)("h3",{id:"output-4"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, async_graphql::InputObject)]\npub struct PageInput {\n    pub limit: usize,\n    pub page: usize,\n}\n\n#[derive(Debug, async_graphql::InputObject)]\npub struct CursorInput {\n    pub cursor: Option<String>,\n    pub limit: u64,\n}\n\n#[derive(async_graphql::OneofObject)]\npub enum Pagination {\n    Pages(PageInput),\n    Cursor(CursorInput),\n}\n\n/// Extra fields for pager pagination\n#[derive(async_graphql::SimpleObject)]\npub struct ExtraPaginationFields {\n    pub pages: Option<usize>,\n    pub current: Option<usize>,\n}\n\n/// CursorValues is used to encode/decode the primary key of any Model for cursor pagination\n#[derive(Debug)]\npub struct CursorValues(pub Vec<sea_orm::Value>);\n\nimpl async_graphql::types::connection::CursorType for CursorValues {\n    type Error = String;\n\n    /// Used to decode cursor String into a vector of Values\n    fn decode_cursor(s: &str) -> Result<Self, Self::Error> {\n        ...\n    }\n\n    /// Used to encode a vector of Values into a cursor String\n    fn encode_cursor(&self) -> String {\n        ...\n    }\n}\n\n/// Used to track the parsing state of the cursor String\n#[derive(Debug)]\npub enum DecodeMode {\n    Type,\n    Length,\n    ColonSkip,\n    Data,\n}\n\n/// Used to parse a vector of Values into a ValueTuple enum\npub fn map_cursor_values(values: Vec<sea_orm::Value>) -> sea_orm::sea_query::value::ValueTuple {\n    ...\n}\n\n#[async_graphql::Object]\nimpl QueryRoot {\n    pub async fn actor<'a>(\n        &self,\n        ctx: &async_graphql::Context<'a>,\n        filters: Option<crate::entities::actor::Filter>,\n        pagination: Option<Pagination>,\n        order_by: Option<crate::entities::actor::OrderBy>,\n    ) -> async_graphql::types::connection::Connection<\n        String,\n        crate::entities::actor::Model,\n        ExtraPaginationFields,\n        async_graphql::types::connection::EmptyFields,\n    > {\n        // 1. use definitions\n        // 2. initialize db connection\n        // 3. create sql statement\n        // 4. apply filters and ordering\n        // 5. apply pagination\n        // 6. return result\n    }\n\n    pub async fn address<'a>(\n        &self,\n        ctx: &async_graphql::Context<'a>,\n        filters: Option<crate::entities::address::Filter>,\n        pagination: Option<Pagination>,\n        order_by: Option<crate::entities::address::OrderBy>,\n    ) -> async_graphql::types::connection::Connection<\n        String,\n        crate::entities::address::Model,\n        ExtraPaginationFields,\n        async_graphql::types::connection::EmptyFields,\n    > {\n        ...\n    }\n}\n")))}c.isMDXComponent=!0}}]);