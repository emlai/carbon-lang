"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={},l="Comparison operators",o={unversionedId:"expressions/comparison_operators",id:"expressions/comparison_operators",title:"Comparison operators",description:"\x3c!--",source:"@site/../docs/design/expressions/comparison_operators.md",sourceDirName:"expressions",slug:"/expressions/comparison_operators",permalink:"/carbon-lang/design/expressions/comparison_operators",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/../docs/design/expressions/comparison_operators.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Bitwise and shift operators",permalink:"/carbon-lang/design/expressions/bitwise"},next:{title:"`if` expressions",permalink:"/carbon-lang/design/expressions/if"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Details",id:"details",level:2},{value:"Precedence",id:"precedence",level:3},{value:"Associativity",id:"associativity",level:3},{value:"Built-in comparisons and implicit conversions",id:"built-in-comparisons-and-implicit-conversions",level:3},{value:"Consistency with implicit conversions",id:"consistency-with-implicit-conversions",level:4},{value:"Comparisons with constants",id:"comparisons-with-constants",level:4},{value:"Extensibility",id:"extensibility",level:3},{value:"Equality",id:"equality",level:4},{value:"Ordering",id:"ordering",level:4},{value:"Compatibility of equality and ordering",id:"compatibility-of-equality-and-ordering",level:4},{value:"Custom result types",id:"custom-result-types",level:4},{value:"Default implementations for basic types",id:"default-implementations-for-basic-types",level:3},{value:"Open questions",id:"open-questions",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"comparison-operators"},"Comparison operators"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#details"},"Details"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#precedence"},"Precedence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#associativity"},"Associativity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#built-in-comparisons-and-implicit-conversions"},"Built-in comparisons and implicit conversions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#consistency-with-implicit-conversions"},"Consistency with implicit conversions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#comparisons-with-constants"},"Comparisons with constants")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#extensibility"},"Extensibility"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#equality"},"Equality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ordering"},"Ordering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compatibility-of-equality-and-ordering"},"Compatibility of equality and ordering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-result-types"},"Custom result types")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-implementations-for-basic-types"},"Default implementations for basic types")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#open-questions"},"Open questions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Carbon provides equality and relational comparison operators, each with a\nstandard mathematical meaning:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Mathematical meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Equality"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"==")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x == y")),(0,i.kt)("td",{parentName:"tr",align:null},"="),(0,i.kt)("td",{parentName:"tr",align:null},"Equality or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Equality"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"!=")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x != y")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2260"),(0,i.kt)("td",{parentName:"tr",align:null},"Inequality or not equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Relational"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x < y")),(0,i.kt)("td",{parentName:"tr",align:null},"<"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Relational"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<=")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x <= y")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2264"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Relational"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x > y")),(0,i.kt)("td",{parentName:"tr",align:null},">"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Relational"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">=")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x >= y")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2265"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than or equal to")))),(0,i.kt)("p",null,"Comparison operators all return a ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"; they evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when the\nindicated comparison is true. All comparison operators are infix binary\noperators."),(0,i.kt)("p",null,"These operators have predefined meanings for some of Carbon's\n",(0,i.kt)("a",{parentName:"p",href:"#built-in-comparisons-and-implicit-conversions"},"built-in types"),", as well as for\nsimple ",(0,i.kt)("a",{parentName:"p",href:"#default-implementations-for-basic-types"},'"data" types')," like structs and\ntuples."),(0,i.kt)("p",null,"User-defined types can define the meaning of these operations by\n",(0,i.kt)("a",{parentName:"p",href:"#extensibility"},"implementing an interface")," provided as part of the Carbon\nstandard library."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("h3",{id:"precedence"},"Precedence"),(0,i.kt)("p",null,"The comparison operators are all at the same precedence level. This level is\nlower than operators used to compute (non-",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),") values, higher than the\n",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/expressions/logical_operators"},"logical operators")," ",(0,i.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),", and incomparable with\nthe precedence of ",(0,i.kt)("inlineCode",{parentName:"p"},"not"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-carbon"},"// \u2705 Valid: precedence provides order of evaluation.\nif (n + m * 3 < n * n and 3 < m and m < 6) {\n  ...\n}\n// The above is equivalent to:\nif (((n + (m * 3)) < (n * n)) and ((3 < m) and (m < 6))) {\n  ...\n}\n\n// \u274c Invalid due to ambiguity: `(not a) == b` or `not (a == b)`?\nif (not a == b) {\n  ...\n}\n// \u274c Invalid due to precedence: write `a == (not b)`.\nif (a == not b) {\n  ...\n}\n// \u274c Invalid due to precedence: write `not (f < 5.0)`.\nif (not f < 5.0) {\n  ....\n}\n")),(0,i.kt)("h3",{id:"associativity"},"Associativity"),(0,i.kt)("p",null,"The comparison operators are non-associative. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-carbon"},"// \u274c Invalid: write `3 < m and m < 6`.\nif (3 < m < 6) {\n  ...\n}\n// \u274c Invalid: write `a == b and b == c`.\nif (a == b == c) {\n  ...\n}\n// \u274c Invalid: write `(m > 1) == (n > 1)`.\nif (m > 1 == n > 1) {\n  ...\n}\n")),(0,i.kt)("h3",{id:"built-in-comparisons-and-implicit-conversions"},"Built-in comparisons and implicit conversions"),(0,i.kt)("p",null,"Built-in comparisons are permitted in three cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When both operands are of standard Carbon integer types (",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)"),")."),(0,i.kt)("li",{parentName:"ol"},"When both operands are of standard Carbon floating-point types (",(0,i.kt)("inlineCode",{parentName:"li"},"Float(n)"),")."),(0,i.kt)("li",{parentName:"ol"},"When one operand is of floating-point type and the other is of integer type,\nif all values of the integer type can be exactly represented in the\nfloating-point type.")),(0,i.kt)("p",null,"In each case, the result is the mathematically-correct answer. This applies even\nwhen comparing ",(0,i.kt)("inlineCode",{parentName:"p"},"Int(n)")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Unsigned(m)"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-carbon"},"// \u2705 Valid: Fits case #1. The value of `compared` is `true` because `a` is less\n// than `b`, even though the result of a wrapping `i32` or `u32` comparison\n// would be `false`.\nfn Compare(a: i32, b: u32) -> bool { return a < b; }\nlet compared: bool = Compare(-1, 4_000_000_000);\n\n// \u274c Invalid: Doesn't fit case #3 because `i64` values in general are not\n// exactly representable in the type `f32`.\nlet float: f32 = 1.0e18;\nlet integer: i64 = 1_000_000_000_000_000_000;\nlet eq: bool = float == integer;\n")),(0,i.kt)("p",null,"Comparisons involving integer and floating-point constants are not covered by\nthese rules and are ",(0,i.kt)("a",{parentName:"p",href:"#comparisons-with-constants"},"discussed separately"),"."),(0,i.kt)("h4",{id:"consistency-with-implicit-conversions"},"Consistency with implicit conversions"),(0,i.kt)("p",null,"We support the following ",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/expressions/implicit_conversions"},"implicit conversions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(m)")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"m > n"),"."),(0,i.kt)("li",{parentName:"ul"},"From ",(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(m)")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(m)")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"m > n"),"."),(0,i.kt)("li",{parentName:"ul"},"From ",(0,i.kt)("inlineCode",{parentName:"li"},"Float(n)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Float(m)")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"m > n"),"."),(0,i.kt)("li",{parentName:"ul"},"From ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Float(m)")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"Float(m)")," can represent all values of\n",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)"),".")),(0,i.kt)("p",null,"These rules can be summarized as: a type ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," can be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," if every\nvalue of type ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," is a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Implicit conversions are also supported from certain kinds of integer and\nfloating-point constants to ",(0,i.kt)("inlineCode",{parentName:"p"},"Int(n)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Float(n)")," types, if the constant can\nbe represented in the type."),(0,i.kt)("p",null,"All built-in comparisons can be viewed as performing implicit conversions on at\nmost one of the operands in order to reach a suitable pair of identical or very\nsimilar types, and then performing a comparison on those types. The target types\nfor these implicit conversions are, for each suitable value ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")," versus ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)")," versus ",(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")," versus ",(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Unsigned(n)")," versus ",(0,i.kt)("inlineCode",{parentName:"li"},"Int(n)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Float(n)")," versus ",(0,i.kt)("inlineCode",{parentName:"li"},"Float(n)"))),(0,i.kt)("p",null,"There will in general be multiple combinations of implicit conversions that will\nlead to one of the above forms, but we will arrive at the same result regardless\nof which is selected, because all comparisons are mathematically correct and all\nimplicit conversions are lossless. Implementations are expected to do whatever\nis most efficient: for example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"u16 < i32")," it is likely that the best\nchoice would be to promote the ",(0,i.kt)("inlineCode",{parentName:"p"},"u16")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),", not ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),"."),(0,i.kt)("p",null,"Because we only ever convert at most one operand, we never use an intermediate\ntype that is larger than both input types. For example, both ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"f32")," can\nbe implicitly converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"f64"),", but we do not permit comparisons between ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"f32")," even though we could perform those comparisons in ",(0,i.kt)("inlineCode",{parentName:"p"},"f64"),". If such\ncomparisons were permitted, the results could be surprising:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-carbon"},"// `i32` can exactly represent this value.\nvar integer: i32 = 2_000_000_001;\n// This value is within the representable range for `f32`, but will be rounded\n// to 2_000_000_000.0 due to the limited precision of `f32`.\nvar float: f32 = 2_000_000_001.0;\n\n// \u274c Invalid: `f32` cannot exactly represent all values of `i32`.\nif (integer == float) {\n  ...\n}\n\n// \u2705 Valid: An explicit cast to `f64` on either side makes the code valid, but\n// will compare unequal because `float` was rounded to 2_000_000_000.0\n// but `integer` will convert to exactly 2_000_000_001.0.\nif (integer == float as f64) {\n  ...\n}\nif (integer as f64 == float) {\n  ...\n}\n")),(0,i.kt)("p",null,"The two kinds of mixed-type comparison may be\n",(0,i.kt)("a",{parentName:"p",href:"/proposals/p0702.md#performance"},"less efficient")," than the other kinds due to\nthe slightly wider domain."),(0,i.kt)("p",null,"Note that this approach diverges from C++, which would convert both operands to\na common type first, sometimes performing a lossy conversion potentially giving\nan incorrect result, sometimes converting both operands, and sometimes using a\nwider type than either of the operand types."),(0,i.kt)("h4",{id:"comparisons-with-constants"},"Comparisons with constants"),(0,i.kt)("p",null,"We permit the following comparisons involving constants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A constant can be compared with a value of any type to which it can be\nimplicitly converted."),(0,i.kt)("li",{parentName:"ul"},"Any two constants can be compared, even if there is no type that can\nrepresent both.")),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/expressions/implicit_conversions#data-types"},"implicit conversions"),",\ninteger constants can be implicitly converted to any integer or floating-point\ntype that can represent their value, and floating-point constants can be\nimplicitly converted to any floating-point type that can represent their value."),(0,i.kt)("p",null,"Note that this disallows comparisons between, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," and an integer\nliteral that cannot be represented in ",(0,i.kt)("inlineCode",{parentName:"p"},"i32"),". Such comparisons would always be\ntautological. This decision should be revisited if it proves problematic in\npractice, for example in templated code where the literal is sometimes in range."),(0,i.kt)("h3",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,'User-defined types can extend the behavior of the comparison operators by\nimplementing interfaces. In this section, various properties are specified that\nsuch implementations "should" satisfy. These properties are not enforced in\ngeneral, but the standard library might detect violations of some of them in\nsome circumstances. These properties may be assumed by generic code, resulting\nin unexpected behavior if they are violated.'),(0,i.kt)("h4",{id:"equality"},"Equality"),(0,i.kt)("p",null,"Comparison operators can be provided for user-defined types by implementing the\n",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," interfaces."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith")," interface is used to define the semantics of the ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"!="),"\noperators for a given pair of types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface EqWith(U:! Type) {\n  fn Equal[me: Self](u: U) -> bool;\n  default fn NotEqual[me: Self](u: U) -> bool {\n    return not (me == u);\n  }\n}\nconstraint Eq {\n  extends EqWith(Self);\n}\n")),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},"x: T")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y: U"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x == y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(EqWith(U).Equal)(y)"),"."),(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x != y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(EqWith(U).NotEqual)(y)"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class Path {\n  private var drive: String;\n  private var path: String;\n  private fn CanonicalPath[me: Self]() -> String;\n\n  external impl as Eq {\n    fn Equal[me: Self](other: Self) -> bool {\n      return (me.drive, me.CanonicalPath()) ==\n             (other.drive, other.CanonicalPath());\n    }\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith")," overload is selected without considering possible implicit\nconversions. To permit implicit conversions in the operands of an ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," overload,\nthe\n",(0,i.kt)("a",{parentName:"p",href:"/docs/design/generics/details.md#like-operator-for-implicit-conversions"},(0,i.kt)("inlineCode",{parentName:"a"},"like")," operator"),"\ncan be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class MyInt {\n  var value: i32;\n  fn Value[me: Self]() -> i32 { return me.value; }\n}\nexternal impl i32 as ImplicitAs(MyInt);\nexternal impl like MyInt as EqWith(like MyInt) {\n  fn Equal[me: Self](other: Self) -> bool {\n    return me.Value() == other.Value();\n  }\n}\nfn CompareBothWays(a: MyInt, b: i32, c: MyInt) -> bool {\n  // OK, calls above implementation three times.\n  return a == a and a != b and b == c;\n}\n")),(0,i.kt)("p",null,"The behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"NotEqual")," can be overridden separately from the behavior of\n",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," to support cases like floating-point NaN values, where two values can\ncompare neither equal nor not-equal, and thus both functions would return\n",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". However, an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith")," should ",(0,i.kt)("em",{parentName:"p"},"not")," allow both ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"NotEqual")," to return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for the same pair of values. Additionally, these\noperations should have no observable side-effects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"external impl like MyFloat as EqWith(like MyFloat) {\n  fn Equal[me: MyFloat](other: MyFloat) -> bool {\n    if (me.IsNaN() or other.IsNaN()) {\n      return false;\n    }\n    return me.Representation() == other.Representation();\n  }\n  fn NotEqual[me: MyFloat](other: MyFloat) -> bool {\n    if (me.IsNaN() or other.IsNaN()) {\n      return false;\n    }\n    return me.Representation() != other.Representation();\n  }\n}\n")),(0,i.kt)("p",null,"Heterogeneous comparisons must be defined both ways around:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"external impl like MyInt as EqWith(like MyFloat);\nexternal impl like MyFloat as EqWith(like MyInt);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO:")," Add an adapter to the standard library to make it easy to define the\nreverse comparison."),(0,i.kt)("h4",{id:"ordering"},"Ordering"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," interface is used to define the semantics of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),",\n",(0,i.kt)("inlineCode",{parentName:"p"},">"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},">=")," operators for a given pair of types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"choice Ordering {\n  Less,\n  Equivalent,\n  Greater,\n  Incomparable\n}\ninterface OrderedWith(U:! Type) {\n  fn Compare[me: Self](u: U) -> Ordering;\n  default fn Less[me: Self](u: U) -> bool {\n    return me.Compare(u) == Ordering.Less;\n  }\n  default fn LessOrEquivalent[me: Self](u: U) -> bool {\n    let c: Ordering = me.Compare(u);\n    return c == Ordering.Less or c == Ordering.Equivalent;\n  }\n  default fn Greater[me: Self](u: U) -> bool {\n    return me.Compare(u) == Ordering.Greater;\n  }\n  default fn GreaterOrEquivalent[me: Self](u: U) -> bool {\n    let c: Ordering = me.Compare(u);\n    return c == Ordering.Greater or c == Ordering.Equivalent;\n  }\n}\nconstraint Ordered {\n  extends OrderedWith(Self);\n}\n\n// Ordering.Less < Ordering.Equivalent < Ordering.Greater.\n// Ordering.Incomparable is incomparable with all three.\nexternal impl Ordering as Ordered;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO:")," Revise the above when we have a concrete design for enumerated types."),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},"x: T")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y: U"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x < y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(OrderedWith(U).Less)(y)"),"."),(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x <= y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(OrderedWith(U).LessOrEquivalent)(y)"),"."),(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x > y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(OrderedWith(U).Greater)(y)"),"."),(0,i.kt)("li",{parentName:"ul"},"The expression ",(0,i.kt)("inlineCode",{parentName:"li"},"x >= y")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"x.(OrderedWith(U).GreaterOrEquivalent)(y)"),".")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class MyWidget {\n  var width: i32;\n  var height: i32;\n\n  fn Size[me: Self]() -> i32 { return me.width * me.height; }\n\n  // Widgets are normally ordered by size.\n  external impl as Ordered {\n    fn Compare[me: Self](other: Self) -> Ordering {\n      return me.Size().(Ordered.Compare)(other.Size());\n    }\n  }\n}\nfn F(a: MyWidget, b: MyWidget) -> bool {\n  return a <= b;\n}\n")),(0,i.kt)("p",null,"As for ",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith"),", the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/design/generics/details.md#like-operator-for-implicit-conversions"},(0,i.kt)("inlineCode",{parentName:"a"},"like")," operator"),"\ncan be used to permit implicit conversions when invoking a comparison, and\nheterogeneous comparisons must be defined both ways around:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fn ReverseOrdering(o: Ordering) -> Ordering {\n  return Ordering.Equivalent.(Ordered.Compare)(o);\n}\nexternal impl like MyInt as OrderedWith(like MyFloat);\nexternal impl like MyFloat as OrderedWith(like MyInt) {\n  fn Compare[me: Self](other: Self) -> Ordering {\n    return Reverse(other.(OrderedWith(Self).Compare)(me));\n  }\n}\n")),(0,i.kt)("p",null,"The default implementations of ",(0,i.kt)("inlineCode",{parentName:"p"},"Less"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LessOrEquivalent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Greater"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"GreaterOrEquivalent")," can be overridden if a more efficient version can be\nimplemented. The behaviors of such overrides should follow those of the above\ndefault implementations, and the members of an ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," implementation\nshould have no observable side-effects."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," implementations should be ",(0,i.kt)("em",{parentName:"p"},"transitive"),". That is, given ",(0,i.kt)("inlineCode",{parentName:"p"},"V:! Type"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"U:! OrderedWith(V)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T:! OrderedWith(U) & OrderedWith(V)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a: T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b: U"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"c: V"),", then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"a <= b")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b <= c")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"a <= c"),", and moreover if either ",(0,i.kt)("inlineCode",{parentName:"li"},"a < b")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"b < c")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"a < c"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"a >= b")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b >= c")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"a >= c"),", and moreover if either ",(0,i.kt)("inlineCode",{parentName:"li"},"a > b")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"b > c")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"a > c"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," are equivalent, then ",(0,i.kt)("inlineCode",{parentName:"li"},"a.Compare(c) == b.Compare(c)"),".\nSimilarly, if ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"c")," are equivalent, then\n",(0,i.kt)("inlineCode",{parentName:"li"},"a.Compare(b) == a.Compare(c)"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," implementations should also be ",(0,i.kt)("em",{parentName:"p"},"consistent under reversal"),". That\nis, given types ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"T is OrderedWith(U)")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"U is OrderedWith(T)"),", and values ",(0,i.kt)("inlineCode",{parentName:"p"},"a: T")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b: U"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"a.(OrderedWith.Compare)(b)")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Ordering.Greater"),", then\n",(0,i.kt)("inlineCode",{parentName:"li"},"b.(OrderedWith.Compare)(a)")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Ordering.Less"),", and the other way around."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, ",(0,i.kt)("inlineCode",{parentName:"li"},"a.(OrderedWith.Compare)(b)")," returns the same value as\n",(0,i.kt)("inlineCode",{parentName:"li"},"b.(OrderedWith.Compare)(a)"),".")),(0,i.kt)("p",null,"There is no expectation that an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordered")," implementation be a total order, a\nweak order, or a partial order, and in particular the implementation for\nfloating-point types is none of these because NaN values do not compare less\nthan or equivalent to themselves."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO:")," The standard library should provide a way to specify that an ordering\nis a weak, partial, or total ordering, and a way to request such an ordering in\na generic."),(0,i.kt)("h4",{id:"compatibility-of-equality-and-ordering"},"Compatibility of equality and ordering"),(0,i.kt)("p",null,"There is no requirement that a pair of types that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderedWith")," also\nimplements ",(0,i.kt)("inlineCode",{parentName:"p"},"EqWith"),". If a pair of types does implement both, however, the\nequality relation provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"x.(EqWith.Equal)(y)")," should be a refinement of\nthe equivalence relation provided by\n",(0,i.kt)("inlineCode",{parentName:"p"},"x.(OrderedWith.Compare)(y) == Ordering.Equivalent"),"."),(0,i.kt)("h4",{id:"custom-result-types"},"Custom result types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO:")," Support a lower-level extensibility mechanism that allows a result\ntype other than ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("h3",{id:"default-implementations-for-basic-types"},"Default implementations for basic types"),(0,i.kt)("p",null,'In addition to being defined for standard Carbon numeric types, equality and\nrelational comparisons are also defined for all "data" types:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/carbon-lang/design/tuples"},"Tuples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/carbon-lang/design/classes#struct-types"},"Struct types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/carbon-lang/design/classes#interfaces-implemented-for-data-classes"},"Classes implementing an interface that identifies them as data classes"))),(0,i.kt)("p",null,"Relational comparisons for these types provide a lexicographical ordering. In\neach case, the comparison is only available if it is supported by all element\ntypes."),(0,i.kt)("p",null,"Because implicit conversions between data classes can reorder fields, the\nimplementations for data classes do not permit implicit conversions on their\narguments in general. Instead:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Equality comparisons are permitted between any two data classes that have\nthe same ",(0,i.kt)("em",{parentName:"li"},"unordered set")," of field names, if each corresponding pair of\nfields has an ",(0,i.kt)("inlineCode",{parentName:"li"},"EqWith")," implementation. Fields are compared in the order they\nappear in the left-hand operand."),(0,i.kt)("li",{parentName:"ul"},"Relational comparisons are permitted between any two data classes that have\nthe same ",(0,i.kt)("em",{parentName:"li"},"ordered sequence")," of field names, if each corresponding pair of\nfields has an ",(0,i.kt)("inlineCode",{parentName:"li"},"OrderedWith")," implementation. Fields are compared in order.")),(0,i.kt)("p",null,"Comparisons between tuples permit implicit conversions for either operand, but\nnot both."),(0,i.kt)("h2",{id:"open-questions"},"Open questions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," type should be treated as a choice type, and so should support\nequality comparisons and relational comparisons if and only if choice types do\nin general. That decision is left to a future proposal."),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p0702.md#alternative-symbols"},"Alternative symbols")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p0702.md#chained-comparisons-1"},"Chained comparisons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p0702.md#convert-operands-like-c"},"Convert operands like C++")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p0702.md#provide-a-three-way-comparison-operator"},"Provide a three-way comparison operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p0702.md#allow-comparisons-as-the-operand-of-not"},"Allow comparisons as the operand of ",(0,i.kt)("inlineCode",{parentName:"a"},"not"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/proposals/p1178.md#use-comparablewith-instead-of-orderedwith"},"Rename ",(0,i.kt)("inlineCode",{parentName:"a"},"OrderedWith")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"ComparableWith")))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Proposal\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/702"},"#702: Comparison operators")),(0,i.kt)("li",{parentName:"ul"},"Proposal\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/1178"},"#1178: Rework operator interfaces")),(0,i.kt)("li",{parentName:"ul"},"Issue\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/issues/710"},"#710: Default comparison for data classes"))))}m.isMDXComponent=!0}}]);