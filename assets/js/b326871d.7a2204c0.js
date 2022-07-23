"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},i="Name lookup",l={unversionedId:"name_lookup",id:"name_lookup",title:"Name lookup",description:"\x3c!--",source:"@site/../docs/design/name_lookup.md",sourceDirName:".",slug:"/name_lookup",permalink:"/carbon-lang/design/name_lookup",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/name_lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Metaprogramming",permalink:"/carbon-lang/design/metaprogramming"},next:{title:"Naming conventions",permalink:"/carbon-lang/design/naming_conventions"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"TODO",id:"todo",level:2},{value:"Overview",id:"overview",level:2},{value:"Unqualified name lookup",id:"unqualified-name-lookup",level:3},{value:"Alternatives",id:"alternatives",level:4},{value:"Name lookup for common, standard types",id:"name-lookup-for-common-standard-types",level:3},{value:"Open questions",id:"open-questions",level:2},{value:"Shadowing",id:"shadowing",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"name-lookup"},"Name lookup"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#todo"},"TODO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview"},"Overview"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unqualified-name-lookup"},"Unqualified name lookup"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#alternatives"},"Alternatives")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#name-lookup-for-common-standard-types"},"Name lookup for common, standard types")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#open-questions"},"Open questions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shadowing"},"Shadowing"))))),(0,o.kt)("h2",{id:"todo"},"TODO"),(0,o.kt)("p",null,"This is a skeletal design, added to support ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/carbon-lang/design/"},"the overview"),". It should\nnot be treated as accepted by the core team; rather, it is a placeholder until\nwe have more time to examine this detail. Please feel welcome to rewrite and\nupdate as appropriate."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Names are always introduced into some scope which defines where they can be\nreferenced. Many of these scopes are themselves named. Carbon has a special\nfacility for introducing a dedicated named scope just like C++, but we traverse\nnested names in a uniform way with ",(0,o.kt)("inlineCode",{parentName:"p"},"."),"-separated names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace Foo {\n  namespace Bar {\n    alias ??? MyInt = Int;\n  }\n}\n\nfn F(x: Foo.Bar.MyInt);\n")),(0,o.kt)("p",null,"Carbon packages are also namespaces so to get to an imported name from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Abseil")," package you would write ",(0,o.kt)("inlineCode",{parentName:"p"},"Abseil.Foo"),'. The "top-level" file scope is\nthat of the Carbon package containing the file, meaning that there is no\n"global" scope. Dedicated namespaces can be reopened within a package, but there\nis no way to reopen a package without being a library and file ',(0,o.kt)("em",{parentName:"p"},"within")," that\npackage."),(0,o.kt)("p",null,"Note that libraries (unlike packages) do ",(0,o.kt)("strong",{parentName:"p"},"not")," introduce a scope, they share\nthe scope of their package. This is based on the observation that in practice, a\nfairly coarse scoping tends to work best, with some degree of global registry to\nestablish a unique package name."),(0,o.kt)("h3",{id:"unqualified-name-lookup"},"Unqualified name lookup"),(0,o.kt)("p",null,'Unqualified name lookup in Carbon will always find a file-local result, other\nthan the implicit "prelude" of importing and aliasing the fundamentals of the\nstandard library. There will be an explicit mention of the name in the file that\ndeclares the name in the current or enclosing scope, which must also precede the\nreference.'),(0,o.kt)("h4",{id:"alternatives"},"Alternatives"),(0,o.kt)("p",null,"This implies that other names within your own package but not declared within\nthe file must be found by way of the package name. It isn't clear if this is the\ndesirable end state. We need to consider alternatives where names from the same\nlibrary or any library in the same package are made immediately visible within\nthe package scope for unqualified name lookup."),(0,o.kt)("h3",{id:"name-lookup-for-common-standard-types"},"Name lookup for common, standard types"),(0,o.kt)("p",null,"The Carbon standard library is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Carbon"),' package. A very small subset of\nthis standard library is provided implicitly in every file\'s scope. This is\ncalled the "prelude" package.'),(0,o.kt)("p",null,"Names in the prelude package will be available without scoping names. For\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"Bool")," will be the commonly used name in code, even though the\nunderlying type may be ",(0,o.kt)("inlineCode",{parentName:"p"},"Carbon::Bool"),". Also, no ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," will be necessary to\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"Bool"),"."),(0,o.kt)("h2",{id:"open-questions"},"Open questions"),(0,o.kt)("h3",{id:"shadowing"},"Shadowing"),(0,o.kt)("p",null,"We can probably disallow the use of shadowed unqualified names, but the actual\ndesign for such needs to be thought through."))}c.isMDXComponent=!0}}]);