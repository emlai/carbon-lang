"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||a;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={},l="Language design style guide",o={unversionedId:"design_style_guide",id:"design_style_guide",title:"Language design style guide",description:"\x3c!--",source:"@site/../docs/project/design_style_guide.md",sourceDirName:".",slug:"/design_style_guide",permalink:"/carbon-lang/project/design_style_guide",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/project/design_style_guide.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"C++ style guide",permalink:"/carbon-lang/project/cpp_style_guide"},next:{title:"Difficulties improving C++",permalink:"/carbon-lang/project/difficulties_improving_cpp"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Background",id:"background",level:2},{value:"General",id:"general",level:2},{value:"Linking",id:"linking",level:2},{value:"Document structure",id:"document-structure",level:2},{value:"Overview and detailed design",id:"overview-and-detailed-design",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:3},{value:"References",id:"references",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"language-design-style-guide"},"Language design style guide"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#background"},"Background")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#general"},"General")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#linking"},"Linking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#document-structure"},"Document structure"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview-and-detailed-design"},"Overview and detailed design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#references"},"References"))))),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/design"},"language design")," documentation in the Carbon project should\nuse a consistent style and tone, and should read as if it were written by a\nsingle author. This document describes structural, stylistic, and formatting\nconventions for the language design, where they have been established."),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("p",null,"The language design documentation follows the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/CONTRIBUTING.md#google-docs-and-markdown"},"style conventions")," for Carbon\ndocumentation."),(0,r.kt)("h2",{id:"linking"},"Linking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Links to issues and to complete proposals should use the text ",(0,r.kt)("inlineCode",{parentName:"li"},"#nnnn"),", where\n",(0,r.kt)("inlineCode",{parentName:"li"},"nnnn")," is the issue number, optionally followed by the proposal title, and\nshould link to the issue or pull request on GitHub. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"[#123: widget painting](https://github.com/carbon-language/carbon-lang/pull/123)"),"."),(0,r.kt)("li",{parentName:"ul"},"Links to specific sections of a proposal should link to the repository copy\nof the proposal file, using the section title or other appropriate link\ntext. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"[Painting details](/proposals/p0123.md#painting-details)"))),(0,r.kt)("h2",{id:"document-structure"},"Document structure"),(0,r.kt)("p",null,"Documents within the language design should usually be divided into the\nfollowing sections, with suitable level-two (",(0,r.kt)("inlineCode",{parentName:"p"},"##"),") headings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table of contents")," (auto-generated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TODO")," (optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Overview")),(0,r.kt)("li",{parentName:"ul"},"Zero or more detailed design sections"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alternatives considered")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"References"))),(0,r.kt)("h3",{id:"overview-and-detailed-design"},"Overview and detailed design"),(0,r.kt)("p",null,"The overview should describe the high-level concepts of this area of the design,\nfollowing BLUF principles. Where the overview does not fully cover the detailed\ndesign, additional sections can be added as needed to more completely describe\nthe design."),(0,r.kt)("p",null,"The aim of these sections is to describe the design choices that have been made,\nhow those choices fit into the overall design of Carbon, the rationale for those\nchoices, and how and why those choices differ from other languages to which\nCarbon is likely to be compared, particularly C++, Rust, and Swift."),(0,r.kt)("h3",{id:"alternatives-considered"},"Alternatives considered"),(0,r.kt)("p",null,"This section should provide bullet points briefly describing alternative designs\nthat were considered, along with references to the proposals in which those\ndesigns were discussed. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"-   [Paint widgets from bottom to top](/proposals/p0123.md#alternatives-considered).\n")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("p",null,"This section should provide bullet points linking to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"External documents providing background on the topic or additional useful\ninformation."),(0,r.kt)("li",{parentName:"ul"},"Each proposal that contributed to the design described in this document.")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"-   [Wikipedia example page](https://en.wikipedia.org/wiki/Wikipedia:Example)\n-   Proposal\n    [#123: widget painting](https://github.com/carbon-language/carbon-lang/pull/123).\n")),(0,r.kt)("p",null,"Links to related parts of the design should be included inline, where relevant,\nnot in the references section."))}c.isMDXComponent=!0}}]);