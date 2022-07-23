"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="Numeric literals",o={unversionedId:"lexical_conventions/numeric_literals",id:"lexical_conventions/numeric_literals",title:"Numeric literals",description:"\x3c!--",source:"@site/../docs/design/lexical_conventions/numeric_literals.md",sourceDirName:"lexical_conventions",slug:"/lexical_conventions/numeric_literals",permalink:"/carbon-lang/design/lexical_conventions/numeric_literals",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/lexical_conventions/numeric_literals.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Lexical conventions",permalink:"/carbon-lang/design/lexical_conventions/"},next:{title:"String literals",permalink:"/carbon-lang/design/lexical_conventions/string_literals"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Details",id:"details",level:2},{value:"Integer literals",id:"integer-literals",level:3},{value:"Real-number literals",id:"real-number-literals",level:3},{value:"Digit separators",id:"digit-separators",level:3},{value:"Divergence from other languages",id:"divergence-from-other-languages",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"numeric-literals"},"Numeric literals"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#details"},"Details"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#integer-literals"},"Integer literals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#real-number-literals"},"Real-number literals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#digit-separators"},"Digit separators")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#divergence-from-other-languages"},"Divergence from other languages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The following syntaxes are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integer literals",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"12345")," (decimal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x1FE")," (hexadecimal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0b1010")," (binary)"))),(0,r.kt)("li",{parentName:"ul"},"Real-number literals",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"123.456")," (digits on both sides of the ",(0,r.kt)("inlineCode",{parentName:"li"},"."),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"123.456e789")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," after the ",(0,r.kt)("inlineCode",{parentName:"li"},"e"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x1.2p123")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," after the ",(0,r.kt)("inlineCode",{parentName:"li"},"p"),")"))),(0,r.kt)("li",{parentName:"ul"},"Digit separators (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),") may be used, with\n",(0,r.kt)("a",{parentName:"li",href:"#digit-separators"},"some restrictions"))),(0,r.kt)("p",null,"Note that real-number literals always contain a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," with digits on both sides,\nand integer literals never contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("p",null,"Literals are case-sensitive. Unlike in C++, literals do not have a suffix to\nindicate their type."),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("h3",{id:"integer-literals"},"Integer literals"),(0,r.kt)("p",null,"Decimal integers are written as a non-zero decimal digit followed by zero or\nmore additional decimal digits, or as a single ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"Integers in other bases are written as a ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," followed by a base specifier\ncharacter, followed by a sequence of digits in the corresponding base. The\navailable base specifiers and corresponding bases are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Base specifier"),(0,r.kt)("th",{parentName:"tr",align:null},"Base"),(0,r.kt)("th",{parentName:"tr",align:null},"Digits"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"b")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," ... ",(0,r.kt)("inlineCode",{parentName:"td"},"9"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"A")," ... ",(0,r.kt)("inlineCode",{parentName:"td"},"F"))))),(0,r.kt)("p",null,"The above table is case-sensitive. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"0b1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1A")," are valid, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"0B1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0X1A"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1a")," are invalid."),(0,r.kt)("p",null,"A zero at the start of a literal can never be followed by another digit: either\nthe literal is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," begins a base specifier, or the next character is a\ndecimal point (see below). No support is provided for octal literals, and any C\nor C++ octal literal (other than ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") is invalid in Carbon."),(0,r.kt)("h3",{id:"real-number-literals"},"Real-number literals"),(0,r.kt)("p",null,"Real numbers are written as a decimal or hexadecimal integer followed by a\nperiod (",(0,r.kt)("inlineCode",{parentName:"p"},"."),") followed by a sequence of one or more decimal or hexadecimal\ndigits, respectively. A digit is required on each side of the period. ",(0,r.kt)("inlineCode",{parentName:"p"},"0.")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},".3")," are both invalid."),(0,r.kt)("p",null,"A real number can be followed by an exponent character, an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"\n(defaulting to ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," if absent), and a character sequence matching the grammar of\na decimal integer with some value ",(0,r.kt)("em",{parentName:"p"},"N"),". For a decimal real number, the exponent\ncharacter is ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),", and the effect is to multiply the given value by\n10",(0,r.kt)("sup",null,"\xb1",(0,r.kt)("em",{parentName:"p"},"N")),". For a hexadecimal real number, the exponent character\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", and the effect is to multiply the given value by\n2",(0,r.kt)("sup",null,"\xb1",(0,r.kt)("em",{parentName:"p"},"N")),". The exponent suffix is optional for both decimal and\nhexadecimal real numbers."),(0,r.kt)("p",null,"Note that a decimal integer followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," is not a real-number literal. For\nexample, ",(0,r.kt)("inlineCode",{parentName:"p"},"3e10")," is not a valid literal."),(0,r.kt)("p",null,"When a real-number literal is interpreted as a value of a real-number type, its\nvalue is the representable real number closest to the value of the literal. In\nthe case of a tie, the nearest value whose mantissa is even is selected."),(0,r.kt)("p",null,"The decimal real number syntax allows for any decimal fraction to be expressed\n-- that is, any number of the form ",(0,r.kt)("em",{parentName:"p"},"a")," x 10",(0,r.kt)("sup",null,"-",(0,r.kt)("em",{parentName:"p"},"b")),", where ",(0,r.kt)("em",{parentName:"p"},"a")," is an\ninteger and ",(0,r.kt)("em",{parentName:"p"},"b")," is a non-negative integer. Because the decimal fractions are\ndense in the reals and the set of values of the real-number type is assumed to\nbe discrete, every value of the real-number type can be expressed as a real\nnumber literal. However, for certain applications, directly expressing the\nintended real-number representation may be more convenient than producing a\ndecimal equivalent that is known to convert to the intended value. Hexadecimal\nreal-number literals are provided in order to permit values of binary floating\nor fixed point real-number types to be expressed directly."),(0,r.kt)("h3",{id:"digit-separators"},"Digit separators"),(0,r.kt)("p",null,"If digit separators (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),") are included in literals, they must meet the\nrespective condition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For decimal integers, the digit separators shall occur every three digits\nstarting from the right. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"2_147_483_648"),"."),(0,r.kt)("li",{parentName:"ul"},"For hexadecimal integers, the digit separators shall occur every four digits\nstarting from the right. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x7FFF_FFFF"),"."),(0,r.kt)("li",{parentName:"ul"},"For real-number literals, digit separators can appear in the decimal and\nhexadecimal integer portions (prior to the period and after the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"e"),"\nor mandatory ",(0,r.kt)("inlineCode",{parentName:"li"},"p"),") as described in the previous bullets. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"2_147.483648e12_345")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"0x1_00CA.FEF00Dp+24")),(0,r.kt)("li",{parentName:"ul"},"For binary literals, digit separators can appear between any two digits. For\nexample, ",(0,r.kt)("inlineCode",{parentName:"li"},"0b1_000_101_11"),".")),(0,r.kt)("h2",{id:"divergence-from-other-languages"},"Divergence from other languages"),(0,r.kt)("p",null,"The design provides a syntax that is deliberately close to that used both by C++\nand many other languages, so it should feel familiar to developers. However, it\nselects a reasonably minimal subset of the syntaxes. This minimal approach\nprovides benefits directly in line with the goal that Carbon code should be\n",(0,r.kt)("a",{parentName:"p",href:"/project/goals#code-that-is-easy-to-read-understand-and-write"},"easy to read, understand, and write"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduces unnecessary choices for programmers."),(0,r.kt)("li",{parentName:"ul"},"Simplifies the syntax rules of the language."),(0,r.kt)("li",{parentName:"ul"},"Improves consistency of written Carbon code.")),(0,r.kt)("p",null,"That said, it still provides sufficient variations to address important use\ncases for the goal of not leaving room for a lower level language:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hexadecimal and binary integer literals."),(0,r.kt)("li",{parentName:"ul"},"Scientific notation floating point literals."),(0,r.kt)("li",{parentName:"ul"},"Hexadecimal (scientific) floating point literals.")),(0,r.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#integer-bases"},"Integer bases"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#octal-literals"},"Octal literals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#decimal-literals"},"Decimal literals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#case-sensitivity"},"Case sensitivity")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#real-number-syntax"},"Real number syntax"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0866.md"},"Disallow ties")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0143.md#digit-separator-syntax"},"Digit separator syntax"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proposal\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/143"},"#143: Numeric literals")),(0,r.kt)("li",{parentName:"ul"},"Proposal\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/866"},"#866: Allow ties in floating literals"))))}d.isMDXComponent=!0}}]);