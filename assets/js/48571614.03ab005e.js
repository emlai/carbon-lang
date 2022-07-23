"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3464],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?t.createElement(m,o(o({ref:r},s),{},{components:n})):t.createElement(m,o({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6728:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const i={},o="Principle: Errors are values",l={unversionedId:"principles/error_handling",id:"principles/error_handling",title:"Principle: Errors are values",description:"\x3c!--",source:"@site/../docs/project/principles/error_handling.md",sourceDirName:"principles",slug:"/principles/error_handling",permalink:"/carbon-lang/project/principles/error_handling",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/project/principles/error_handling.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Principles",permalink:"/carbon-lang/project/principles/"},next:{title:"Principle: Information accumulation",permalink:"/carbon-lang/project/principles/information_accumulation"}},p={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Background",id:"background",level:2},{value:"Principle",id:"principle",level:2},{value:"Applications of these principles",id:"applications-of-these-principles",level:2}],s={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"principle-errors-are-values"},"Principle: Errors are values"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#background"},"Background")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principle"},"Principle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#applications-of-these-principles"},"Applications of these principles"))),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Most nontrivial programs contain functions that can ",(0,a.kt)("em",{parentName:"p"},"fail"),", meaning that even if\nall their preconditions are met, they may not be able to perform their primary\nbehavior. For example, a function that reads data from a remote server may fail\nif the server is unreachable, and a function that parses a string to return an\ninteger may fail if the input string is not a properly-formatted integer."),(0,a.kt)("p",null,"In many cases, the function author wants these failures to be ",(0,a.kt)("em",{parentName:"p"},"recoverable"),",\nmeaning that a direct or transitive caller can respond to the failure in some\nway that enables the program to continue running."),(0,a.kt)("h2",{id:"principle"},"Principle"),(0,a.kt)("p",null,"A Carbon function that needs to report recoverable failures should return a sum\ntype whose alternatives represent the success case and failure cases, such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"Optional(T)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Result(T, Error)"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". The function's successful return\nvalue, and any metadata about the failure, should be embedded in the\nalternatives of the sum type, rather than reported by way of output parameters\nor other side channels. Carbon's design will prioritize making this form of\nerror handling efficient and ergonomic."),(0,a.kt)("h2",{id:"applications-of-these-principles"},"Applications of these principles"),(0,a.kt)("p",null,"Carbon errors, unlike exceptions in C++ and similar languages, will not be\npropagated implicitly. Instead, Carbon will very likely need to provide some\nexplicit but syntactically lightweight means of propagating errors, such as\nRust's ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," operator, so that error-propagation boilerplate doesn't make it hard\nfor readers to follow the logic of the success path."),(0,a.kt)("p",null,"Carbon will not have a special syntax for specifying what kind of errors a\nfunction can emit, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"noexcept")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/language/except_spec"},"dynamic exception specifications"),"\nin C++, or ",(0,a.kt)("inlineCode",{parentName:"p"},"throws")," in Java, because that information will be embedded in the\nfunction's return type. Similarly, Carbon errors will be statically typed,\nbecause Carbon return values are statically typed."))}u.isMDXComponent=!0}}]);