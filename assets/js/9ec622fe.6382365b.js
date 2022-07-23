"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},o="Primitive types",l={unversionedId:"primitive_types",id:"primitive_types",title:"Primitive types",description:"\x3c!--",source:"@site/../docs/design/primitive_types.md",sourceDirName:".",slug:"/primitive_types",permalink:"/carbon-lang/design/primitive_types",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/primitive_types.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Pattern matching",permalink:"/carbon-lang/design/pattern_matching"},next:{title:"Templates",permalink:"/carbon-lang/design/templates"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"TODO",id:"todo",level:2},{value:"Overview",id:"overview",level:2},{value:"Integers",id:"integers",level:3},{value:"Floats",id:"floats",level:3},{value:"BFloat16",id:"bfloat16",level:3},{value:"Open questions",id:"open-questions",level:2},{value:"Primitive types as code vs built-in",id:"primitive-types-as-code-vs-built-in",level:3},{value:"String view vs owning string",id:"string-view-vs-owning-string",level:3},{value:"Syntax for wrapping operations",id:"syntax-for-wrapping-operations",level:3},{value:"Non-power-of-two sizes",id:"non-power-of-two-sizes",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"primitive-types"},"Primitive types"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#todo"},"TODO")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#integers"},"Integers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#floats"},"Floats")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bfloat16"},"BFloat16")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#open-questions"},"Open questions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#primitive-types-as-code-vs-built-in"},"Primitive types as code vs built-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#string-view-vs-owning-string"},"String view vs owning string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#syntax-for-wrapping-operations"},"Syntax for wrapping operations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#non-power-of-two-sizes"},"Non-power-of-two sizes"))))),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("p",null,"This is a skeletal design, added to support ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/"},"the overview"),". It should\nnot be treated as accepted by the core team; rather, it is a placeholder until\nwe have more time to examine this detail. Please feel welcome to rewrite and\nupdate as appropriate."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"These types are fundamental to the language as they aren't either formed from or\nmodifying other types. They also have semantics that are defined from first\nprinciples rather than in terms of other operations. These will be made\navailable through the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/#name-lookup-for-common-types"},"prelude package"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bool")," - a boolean type with two possible values: ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"UInt")," - signed and unsigned 64-bit integer types.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Standard sizes are available, both signed and unsigned, including\n",(0,a.kt)("inlineCode",{parentName:"li"},"Int8"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Int16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Int32"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Int128"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"Int256"),"."),(0,a.kt)("li",{parentName:"ul"},"Overflow in either direction is an error."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Float64")," - a floating point type with semantics based on IEEE-754.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Standard sizes are available, including ",(0,a.kt)("inlineCode",{parentName:"li"},"Float16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Float32"),", and\n",(0,a.kt)("inlineCode",{parentName:"li"},"Float128"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/primitive_types#bfloat16"},(0,a.kt)("inlineCode",{parentName:"a"},"BFloat16"))," is also provided."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String")," - a byte sequence treated as containing UTF-8 encoded text.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StringView")," - a read-only reference to a byte sequence treated as\ncontaining UTF-8 encoded text.")))),(0,a.kt)("h3",{id:"integers"},"Integers"),(0,a.kt)("p",null,"Integer types can be either signed or unsigned, much like in C++. Signed\nintegers are represented using 2's complement and notionally modeled as\nunbounded natural numbers. Overflow in either direction is an error. That\nincludes unsigned integers, differing from C++. The default size for both is\n64-bits: ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt"),". Specific sizes are also available, for example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Int8"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Int16"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Int32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Int128"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt256"),". Arbitrary powers of two above ",(0,a.kt)("inlineCode",{parentName:"p"},"8"),"\nare supported for both (although perhaps we'll want to avoid ",(0,a.kt)("em",{parentName:"p"},"huge")," values for\nimplementation simplicity)."),(0,a.kt)("h3",{id:"floats"},"Floats"),(0,a.kt)("p",null,"Floating point types are based on the binary floating point formats provided by\nIEEE-754. ",(0,a.kt)("inlineCode",{parentName:"p"},"Float16"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Float32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Float64")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Float128")," correspond exactly to\nthose sized IEEE-754 formats, and have the semantics defined by IEEE-754."),(0,a.kt)("h3",{id:"bfloat16"},"BFloat16"),(0,a.kt)("p",null,"Carbon also supports the\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bfloat16_floating-point_format"},(0,a.kt)("inlineCode",{parentName:"a"},"BFloat16")),'\nformat, a 16-bit truncation of a "binary32" IEEE-754 format floating point\nnumber.'),(0,a.kt)("h2",{id:"open-questions"},"Open questions"),(0,a.kt)("h3",{id:"primitive-types-as-code-vs-built-in"},"Primitive types as code vs built-in"),(0,a.kt)("p",null,"There are open questions about the extent to which these types should be defined\nin Carbon code rather than special. Clearly they can't be directly implemented\nw/o help, but it might still be useful to force the programmer-observed\ninterface to reside in code. However, this can cause difficulty with avoiding\nthe need to import things gratuitously."),(0,a.kt)("h3",{id:"string-view-vs-owning-string"},"String view vs owning string"),(0,a.kt)("p",null,"The right model of a string view versus an owning string is still very much\nunsettled."),(0,a.kt)("h3",{id:"syntax-for-wrapping-operations"},"Syntax for wrapping operations"),(0,a.kt)("p",null,"Open question around allowing special syntax for wrapping operations (even on\nsigned types) and/or requiring such syntax for wrapping operations on unsigned\ntypes."),(0,a.kt)("h3",{id:"non-power-of-two-sizes"},"Non-power-of-two sizes"),(0,a.kt)("p",null,"Supporting non-power-of-two sizes is likely needed to have a clean model for\nbitfields, but requires more details to be worked out around memory access."))}u.isMDXComponent=!0}}]);