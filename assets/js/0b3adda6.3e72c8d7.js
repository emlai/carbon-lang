"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},l="Expressions",o={unversionedId:"expressions/README",id:"expressions/README",title:"Expressions",description:"\x3c!--",source:"@site/../docs/design/expressions/README.md",sourceDirName:"expressions",slug:"/expressions/",permalink:"/carbon-lang/design/expressions/",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/README.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"return",permalink:"/carbon-lang/design/control_flow/return"},next:{title:"Arithmetic",permalink:"/carbon-lang/design/expressions/arithmetic"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Precedence",id:"precedence",level:2},{value:"Names",id:"names",level:2},{value:"Unqualified names",id:"unqualified-names",level:3},{value:"Qualified names and member access",id:"qualified-names-and-member-access",level:3},{value:"Operators",id:"operators",level:2},{value:"Conversions and casts",id:"conversions-and-casts",level:2},{value:"<code>if</code> expressions",id:"if-expressions",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expressions"},"Expressions"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#precedence"},"Precedence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#names"},"Names"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unqualified-names"},"Unqualified names")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#qualified-names-and-member-access"},"Qualified names and member access")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#operators"},"Operators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conversions-and-casts"},"Conversions and casts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#if-expressions"},(0,r.kt)("inlineCode",{parentName:"a"},"if")," expressions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Expressions are the portions of Carbon syntax that produce values. Because types\nin Carbon are values, this includes anywhere that a type is specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn Foo(a: i32*) -> i32 {\n  return *a;\n}\n")),(0,r.kt)("p",null,"Here, the parameter type ",(0,r.kt)("inlineCode",{parentName:"p"},"i32*"),", the return type ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),", and the operand ",(0,r.kt)("inlineCode",{parentName:"p"},"*a")," of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement are all expressions."),(0,r.kt)("h2",{id:"precedence"},"Precedence"),(0,r.kt)("p",null,"Expressions are interpreted based on a partial\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Order_of_operations"},"precedence ordering"),".\nExpression components which lack a relative ordering must be disambiguated by\nthe developer, for example by adding parentheses; otherwise, the expression will\nbe invalid due to ambiguity. Precedence orderings will only be added when it's\nreasonable to expect most developers to understand the precedence without\nparentheses."),(0,r.kt)("p",null,"The precedence diagram is defined thusly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},'%%{init: {\'themeVariables\': {\'fontFamily\': \'monospace\'}}}%%\ngraph BT\n    parens["(...)"]\n\n    braces["{...}"]\n    click braces "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/classes.md#literals"\n\n    unqualifiedName["x"]\n    click unqualifiedName "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/README.md#unqualified-names"\n\n    memberAccess>"x.y<br>\n                    x.(...)"]\n    click memberAccess "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/member_access.md"\n\n    negation["-x"]\n    click negation "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/arithmetic.md"\n\n    complement["^x"]\n    click complement "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/bitwise.md"\n\n    unary((" "))\n\n    as["x as T"]\n    click as "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/implicit_conversions.md"\n\n    multiplication>"x * y<br>\n                    x / y"]\n    click multiplication "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/arithmetic.md"\n\n    addition>"x + y<br>\n              x - y"]\n    click addition "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/arithmetic.md"\n\n    modulo["x % y"]\n    click modulo "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/arithmetic.md"\n\n    bitwise_and>"x & y"]\n    bitwise_or>"x | y"]\n    bitwise_xor>"x ^ y"]\n    click bitwise_and "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/bitwise.md"\n    click bitwise_or "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/bitwise.md"\n    click bitwise_xor "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/bitwise.md"\n\n    shift["x << y<br>\n           x >> y"]\n    click shift "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/bitwise.md"\n\n    comparison["x == y<br>\n                x != y<br>\n                x < y<br>\n                x <= y<br>\n                x > y<br>\n                x >= y"]\n    click comparison "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/comparison_operators.md"\n\n    not["not x"]\n    click not "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/logical_operators.md"\n\n    logicalOperand((" "))\n\n    and>"x and y"]\n    click and "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/logical_operators.md"\n\n    or>"x or y"]\n    click or "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/logical_operators.md"\n\n    logicalExpression((" "))\n\n    if>"if x then y else z"]\n    click if "https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/if.md"\n\n    expressionEnd["x;"]\n\n    memberAccess --\x3e parens & braces & unqualifiedName\n    negation --\x3e memberAccess\n    complement --\x3e memberAccess\n    unary --\x3e negation & complement\n    %% Use a longer arrow here to put `not` next to `and` and `or`.\n    not -----\x3e memberAccess\n    multiplication & modulo & as & bitwise_and & bitwise_or & bitwise_xor & shift --\x3e unary\n    addition --\x3e multiplication\n    comparison --\x3e modulo & addition & as & bitwise_and & bitwise_or & bitwise_xor & shift\n    logicalOperand --\x3e comparison & not\n    and & or --\x3e logicalOperand\n    logicalExpression --\x3e and & or\n    if & expressionEnd --\x3e logicalExpression\n')),(0,r.kt)("p",null,"The diagram's attributes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each non-empty node represents a precedence group. Empty circles are used to\nsimplify the graph, and do not represent a precedence group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When an expression is composed from different precedence groups, the\ninterpretation is determined by the precedence edges:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A precedence edge A --\x3e B means that A is lower precedence than B, so A\ncan contain B without parentheses. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"or --\x3e not")," means that\n",(0,r.kt)("inlineCode",{parentName:"p"},"not x or y")," is treated as ",(0,r.kt)("inlineCode",{parentName:"p"},"(not x) or y"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Precedence edges are transitive. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"or --\x3e == --\x3e as")," means\nthat ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," is lower precedence than ",(0,r.kt)("inlineCode",{parentName:"p"},"as"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When an expression is composed from a single precedence group, the\ninterpretation is determined by the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Operator_associativity"},"associativity")," of the\nprecedence group:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},'graph TD\n    non["Non-associative"]\n    left>"Left associative"]\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," are left-associative and in the same precedence\ngroup, so ",(0,r.kt)("inlineCode",{parentName:"li"},"a + b + c - d")," is treated as ",(0,r.kt)("inlineCode",{parentName:"li"},"((a + b) + c) - d"),".")))),(0,r.kt)("h2",{id:"names"},"Names"),(0,r.kt)("h3",{id:"unqualified-names"},"Unqualified names"),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"unqualified name")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/lexical_conventions/words"},"word")," that is not a\nkeyword and is not preceded by a period (",(0,r.kt)("inlineCode",{parentName:"p"},"."),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO:")," Name lookup rules for unqualified names."),(0,r.kt)("h3",{id:"qualified-names-and-member-access"},"Qualified names and member access"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"qualified name")," is a word that appears immediately after a period. Qualified\nnames appear in the following contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/design/classes#literals"},"Designators"),": ",(0,r.kt)("inlineCode",{parentName:"li"},".")," ",(0,r.kt)("em",{parentName:"li"},"word")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/member_access"},"Simple member access expressions"),": ",(0,r.kt)("em",{parentName:"li"},"expression")," ",(0,r.kt)("inlineCode",{parentName:"li"},"."),(0,r.kt)("em",{parentName:"li"},"word"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var x: auto = {.hello = 1, .world = 2};\n                ^^^^^       ^^^^^ qualified name\n               ^^^^^^      ^^^^^^ designator\n\nx.hello = x.world;\n  ^^^^^     ^^^^^ qualified name\n^^^^^^^   ^^^^^^^ member access expression\n")),(0,r.kt)("p",null,"Qualified names refer to members of an entity determined by the context in which\nthe expression appears. For a member access, the entity is named by the\nexpression preceding the period. In a struct literal, the entity is the struct\ntype. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"package Foo api;\nnamespace N;\nfn N.F() {}\n\nfn G() {\n  // Same as `(Foo.N).F()`.\n  // `Foo.N` names namespace `N` in package `Foo`.\n  // `(Foo.N).F` names function `F` in namespace `N`.\n  Foo.N.F();\n}\n\n// `.n` refers to the member `n` of `{.n: i32}`.\nfn H(a: {.n: i32}) -> i32 {\n  // `a.n` is resolved to the member `{.n: i32}.n`,\n  // and names the corresponding subobject of `a`.\n  return a.n;\n}\n\nfn J() {\n  // `.n` refers to the member `n of `{.n: i32}`.\n  H({.n = 5 as i32});\n}\n")),(0,r.kt)("p",null,"Member access expressions associate left-to-right. If the member name is more\ncomplex than a single ",(0,r.kt)("em",{parentName:"p"},"word"),", a compound member access expression can be used,\nwith parentheses around the member name:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"expression")," ",(0,r.kt)("inlineCode",{parentName:"li"},".")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(")," ",(0,r.kt)("em",{parentName:"li"},"expression")," ",(0,r.kt)("inlineCode",{parentName:"li"},")"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"interface I { fn F[me: Self](); }\nclass X {}\nexternal impl X as I { fn F[me: Self]() {} }\n\n// `x.I.F()` would mean `(x.I).F()`.\nfn Q(x: X) { x.(I.F)(); }\n")),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("p",null,"Most expressions are modeled as operators:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"-"))," (unary)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-x")),(0,r.kt)("td",{parentName:"tr",align:null},"The negation of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},"^"))," (unary)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"^x")),(0,r.kt)("td",{parentName:"tr",align:null},"The bitwise complement of ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"+"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x + y")),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"-"))," (binary)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x - y")),(0,r.kt)("td",{parentName:"tr",align:null},"The difference of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"*"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x * y")),(0,r.kt)("td",{parentName:"tr",align:null},"The product of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"/"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x / y")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")," divided by ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),", or the quotient thereof.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/arithmetic"},(0,r.kt)("inlineCode",{parentName:"a"},"%"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x % y")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")," modulo ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},"&"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x & y")),(0,r.kt)("td",{parentName:"tr",align:null},"The bitwise AND of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},"\\|"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x \\| y")),(0,r.kt)("td",{parentName:"tr",align:null},"The bitwise OR of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},"^"))," (binary)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x ^ y")),(0,r.kt)("td",{parentName:"tr",align:null},"The bitwise XOR of ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},"<<"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x << y")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")," bit-shifted left ",(0,r.kt)("inlineCode",{parentName:"td"},"y")," places.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/bitwise"},(0,r.kt)("inlineCode",{parentName:"a"},">>"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x >> y")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")," bit-shifted right ",(0,r.kt)("inlineCode",{parentName:"td"},"y")," places.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Conversion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/as_expressions"},(0,r.kt)("inlineCode",{parentName:"a"},"as"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x as T")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts the value ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," to the type ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"=="))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x == y")),(0,r.kt)("td",{parentName:"tr",align:null},"Equality: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"!="))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x != y")),(0,r.kt)("td",{parentName:"tr",align:null},"Inequality: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is not equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"<"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x < y")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is less than ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"<="))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x <= y")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is less than or equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},">"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x > y")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is greater than to ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/comparison_operators"},(0,r.kt)("inlineCode",{parentName:"a"},">="))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x >= y")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"x")," is greater than or equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/logical_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"and"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x and y")),(0,r.kt)("td",{parentName:"tr",align:null},"A short-circuiting logical AND: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if both operands are ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/logical_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"or"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x or y")),(0,r.kt)("td",{parentName:"tr",align:null},"A short-circuiting logical OR: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if either operand is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/logical_operators"},(0,r.kt)("inlineCode",{parentName:"a"},"not"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not x")),(0,r.kt)("td",{parentName:"tr",align:null},"Logical NOT: ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the operand is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")))),(0,r.kt)("h2",{id:"conversions-and-casts"},"Conversions and casts"),(0,r.kt)("p",null,"When an expression appears in a context in which an expression of a specific\ntype is expected, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/implicit_conversions"},"implicit conversions")," are applied to\nconvert the expression to the target type."),(0,r.kt)("p",null,"Expressions can also be converted to a specific type using an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/as_expressions"},(0,r.kt)("inlineCode",{parentName:"a"},"as")," expression"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn Bar(n: i32);\nfn Baz(n: i64) {\n  // OK, same as Bar(n as i32)\n  Bar(n);\n}\n")),(0,r.kt)("h2",{id:"if-expressions"},(0,r.kt)("inlineCode",{parentName:"h2"},"if")," expressions"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/expressions/if"},(0,r.kt)("inlineCode",{parentName:"a"},"if")," expression")," chooses between two expressions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'fn Run(args: Span(StringView)) {\n  var file: StringView = if args.size() > 1 then args[1] else "/dev/stdin";\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if")," expressions are analogous to ",(0,r.kt)("inlineCode",{parentName:"p"},"?:")," ternary expressions in C and C++."),(0,r.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,r.kt)("p",null,"Other expression documents will list more alternatives; this lists alternatives\nnot noted elsewhere."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0555.md#total-order"},"Total order")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0555.md#different-precedence-for-different-operands"},"Different precedence for different operands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0555.md#require-less-than-a-partial-order"},"Require less than a partial order"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"Other expression documents will list more references; this lists references not\nnoted elsewhere."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proposal\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/555"},"#555: Operator precedence"),".")))}m.isMDXComponent=!0}}]);