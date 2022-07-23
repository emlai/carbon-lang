"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={},o="Contribution tools",r={unversionedId:"contribution_tools",id:"contribution_tools",title:"Contribution tools",description:"\x3c!--",source:"@site/../docs/project/contribution_tools.md",sourceDirName:".",slug:"/contribution_tools",permalink:"/carbon-lang/project/contribution_tools",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/project/contribution_tools.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Code review",permalink:"/carbon-lang/project/code_review"},next:{title:"C++ style guide",permalink:"/carbon-lang/project/cpp_style_guide"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Tool setup flow",id:"tool-setup-flow",level:2},{value:"Package managers",id:"package-managers",level:2},{value:"Linux and MacOS",id:"linux-and-macos",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"<code>python3</code> and <code>pip3</code>",id:"python3-and-pip3",level:4},{value:"Main tools",id:"main-tools",level:2},{value:"Bazel and Bazelisk",id:"bazel-and-bazelisk",level:3},{value:"Clang and LLVM",id:"clang-and-llvm",level:3},{value:"Manual installations (not recommended)",id:"manual-installations-not-recommended",level:4},{value:"Troubleshooting build issues",id:"troubleshooting-build-issues",level:4},{value:"Troubleshooting debug issues",id:"troubleshooting-debug-issues",level:4},{value:"pre-commit",id:"pre-commit",level:3},{value:"Optional tools",id:"optional-tools",level:2},{value:"Carbon-maintained",id:"carbon-maintained",level:3},{value:"new_proposal.py",id:"new_proposalpy",level:4},{value:"pr_comments.py",id:"pr_commentspy",level:4},{value:"GitHub",id:"github",level:3},{value:"gh CLI",id:"gh-cli",level:4},{value:"GitHub Desktop",id:"github-desktop",level:4},{value:"<code>rs-git-fsmonitor</code> and Watchman",id:"rs-git-fsmonitor-and-watchman",level:3},{value:"Vim",id:"vim",level:3},{value:"vim-prettier",id:"vim-prettier",level:4},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"pre-commit enabled tools",id:"pre-commit-enabled-tools",level:3},{value:"black",id:"black",level:4},{value:"codespell",id:"codespell",level:4},{value:"Prettier",id:"prettier",level:4}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"contribution-tools"},"Contribution tools"),(0,l.kt)("p",null,"The Carbon language project has a number of tools used to assist in preparing\ncontributions."),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tool-setup-flow"},"Tool setup flow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#package-managers"},"Package managers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#linux-and-macos"},"Linux and MacOS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#homebrew"},"Homebrew")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#python3-and-pip3"},(0,l.kt)("inlineCode",{parentName:"a"},"python3")," and ",(0,l.kt)("inlineCode",{parentName:"a"},"pip3"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#main-tools"},"Main tools"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bazel-and-bazelisk"},"Bazel and Bazelisk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#clang-and-llvm"},"Clang and LLVM"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#manual-installations-not-recommended"},"Manual installations (not recommended)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#troubleshooting-build-issues"},"Troubleshooting build issues")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#troubleshooting-debug-issues"},"Troubleshooting debug issues")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pre-commit"},"pre-commit")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#optional-tools"},"Optional tools"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#carbon-maintained"},"Carbon-maintained"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_proposalpy"},"new_proposal.py")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pr_commentspy"},"pr_comments.py")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#github"},"GitHub"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gh-cli"},"gh CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#github-desktop"},"GitHub Desktop")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rs-git-fsmonitor-and-watchman"},(0,l.kt)("inlineCode",{parentName:"a"},"rs-git-fsmonitor")," and Watchman")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vim"},"Vim"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vim-prettier"},"vim-prettier")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visual-studio-code"},"Visual Studio Code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pre-commit-enabled-tools"},"pre-commit enabled tools"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#black"},"black")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#codespell"},"codespell")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prettier"},"Prettier"))))))),(0,l.kt)("h2",{id:"tool-setup-flow"},"Tool setup flow"),(0,l.kt)("p",null,"In order to set up a machine and git repository for developing on Carbon, a\ntypical tool setup flow is:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"#package-managers"},"package managers"),"."),(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"#main-tools"},"main tools")," and any desired\n",(0,l.kt)("a",{parentName:"li",href:"#optional-tools"},"optional tools"),"."),(0,l.kt)("li",{parentName:"ol"},"Set up the ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")," repository:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gh repo fork --clone carbon-language/carbon-lang"),": this will both\ncreate a GitHub fork and clone the repository locally"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cd carbon-lang")," to go into the cloned fork's directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pre-commit install")," to set up ",(0,l.kt)("a",{parentName:"li",href:"#pre-commit"},"pre-commit")," in the clone."))),(0,l.kt)("li",{parentName:"ol"},"Validate your installation by invoking `bazel test //...:all' from the\nproject root. All tests should pass.")),(0,l.kt)("h2",{id:"package-managers"},"Package managers"),(0,l.kt)("p",null,"Instructions for installing tools can be helpful for installing tooling. These\ninstructions will try to rely on a minimum of managers."),(0,l.kt)("h3",{id:"linux-and-macos"},"Linux and MacOS"),(0,l.kt)("h4",{id:"homebrew"},"Homebrew"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager, and can help install several\ntools that we recommend."),(0,l.kt)("p",null,"Our recommended way of installing is to run\n",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"the canonical install command"),"."),(0,l.kt)("p",null,"To get the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")," packages, it will be necessary to\nperiodically run ",(0,l.kt)("inlineCode",{parentName:"p"},"brew upgrade"),"."),(0,l.kt)("h4",{id:"python3-and-pip3"},(0,l.kt)("inlineCode",{parentName:"h4"},"python3")," and ",(0,l.kt)("inlineCode",{parentName:"h4"},"pip3")),(0,l.kt)("p",null,"Carbon requires Python 3.9 or newer. The included ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3")," should typically be\nused for Python package installation rather than other package managers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": Carbon will focus support on Homebrew installs of Python 3.9, but it\nmay not be necessary if you have Python 3.9 installed another way. If you're\ntrying to use a non-Homebrew Python but have issues involving Carbon and Python,\nplease try Homebrew's Python."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python@3.9\npip3 install -U pip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3")," runs may print deprecation warnings referencing\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-core/issues/76621"},"https://github.com/Homebrew/homebrew-core/issues/76621"),". These will need to be\naddressed in the future, but as of August 2021 can be ignored."),(0,l.kt)("p",null,"To get the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3")," packages, it will be necessary to\nperiodically run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3 list --outdated"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3 install -U <package>")," to\nupgrade desired packages. Keep in mind when upgrading that version dependencies\nmay mean packages ",(0,l.kt)("em",{parentName:"p"},"should")," be outdated, and not be upgraded."),(0,l.kt)("h2",{id:"main-tools"},"Main tools"),(0,l.kt)("p",null,"These tools are key for contributions, primarily focused on validating\ncontributions."),(0,l.kt)("h3",{id:"bazel-and-bazelisk"},"Bazel and Bazelisk"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bazel.build/"},"Bazel")," is Carbon's standard build system.\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/install-bazelisk.html"},"Bazelisk")," is\nrecommended for installing Bazel."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install bazelisk\n")),(0,l.kt)("h3",{id:"clang-and-llvm"},"Clang and LLVM"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clang.llvm.org/"},"Clang")," and ",(0,l.kt)("a",{parentName:"p",href:"https://llvm.org/"},"LLVM")," are used to\ncompile and link Carbon as part of its build. Bazel will also download and build\nagainst a specific upstream LLVM commit. While the Bazel uses upstream LLVM\nsources, the project expects the LLVM 12 release (or newer) to be installed with\nClang and other tools in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," for use in building Carbon itself."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install llvm\n")),(0,l.kt)("p",null,"On ",(0,l.kt)("strong",{parentName:"p"},"MacOS only")," (not Linux), ",(0,l.kt)("inlineCode",{parentName:"p"},"llvm")," is keg-only; bear in mind this requires\nupdating ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," for it because it's not part of the standard Homebrew path. Read\nthe output of ",(0,l.kt)("inlineCode",{parentName:"p"},"brew install")," for the necessary path changes, or add something to\nyour ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="$(brew --prefix llvm)/bin:${PATH}"\n')),(0,l.kt)("p",null,"Carbon expects the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," to include the installed tooling. If set, ",(0,l.kt)("inlineCode",{parentName:"p"},"CC")," should\nalso point at ",(0,l.kt)("inlineCode",{parentName:"p"},"clang"),". Our build environment will detect the ",(0,l.kt)("inlineCode",{parentName:"p"},"clang")," binary\nusing ",(0,l.kt)("inlineCode",{parentName:"p"},"CC")," then ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", and will expect the rest of the LLVM toolchain to be\navailable in the same directory as ",(0,l.kt)("inlineCode",{parentName:"p"},"clang"),". However, various scripts and tools\nassume that the LLVM toolchain will be in ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", particularly for tools like\n",(0,l.kt)("inlineCode",{parentName:"p"},"clang-format")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clang-tidy"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TODO: We'd like to use ",(0,l.kt)("inlineCode",{parentName:"p"},"apt"),", but standard LLVM Debian packages are not\nconfigured correctly for our needs. We are currently aware of two libc++\nissues, ",(0,l.kt)("a",{parentName:"p",href:"https://bugs.llvm.org/show_bug.cgi?id=43604"},"43604")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://bugs.llvm.org/show_bug.cgi?id=46321"},"46321"),".")),(0,l.kt)("h4",{id:"manual-installations-not-recommended"},"Manual installations (not recommended)"),(0,l.kt)("p",null,"You can also build and install ",(0,l.kt)("inlineCode",{parentName:"p"},"LLVM")," yourself if you prefer. The essential\nCMake options to pass in order for this to work reliably include:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-DLLVM_ENABLE_PROJECTS=clang;clang-tools-extra;lld\n-DLLVM_ENABLE_RUNTIMES=compiler-rt;libcxx;libcxxabi;libunwind\n-DRUNTIMES_CMAKE_ARGS=-DLLVM_ENABLE_PER_TARGET_RUNTIME_DIR=OFF;-DCMAKE_POSITION_INDEPENDENT_CODE=ON;-DLIBCXX_ENABLE_STATIC_ABI_LIBRARY=ON;-DLIBCXX_STATICALLY_LINK_ABI_IN_SHARED_LIBRARY=OFF;-DLIBCXX_STATICALLY_LINK_ABI_IN_STATIC_LIBRARY=ON;-DLIBCXX_USE_COMPILER_RT=ON;-DLIBCXXABI_USE_COMPILER_RT=ON;-DLIBCXXABI_USE_LLVM_UNWINDER=ON\n")),(0,l.kt)("p",null,"However, we primarily test against the Homebrew installation, so if building\nLLVM and Clang yourself you may hit some issues."),(0,l.kt)("h4",{id:"troubleshooting-build-issues"},"Troubleshooting build issues"),(0,l.kt)("p",null,"Many build issues result from the particular options ",(0,l.kt)("inlineCode",{parentName:"p"},"clang")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"llvm")," have\nbeen built with, particularly when it comes to system-installed versions. This\nis why we recommend using ",(0,l.kt)("a",{parentName:"p",href:"#clang-and-llvm"},"Homebrew's LLVM"),"."),(0,l.kt)("p",null,"After installing from Homebrew, you may need to open a new shell to get ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"\nchanges. It may also be necessary to run ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel clean")," in order to clean up\ncached state."),(0,l.kt)("p",null,"If issues continue, please ask on\n",(0,l.kt)("a",{parentName:"p",href:"https://discord.com/channels/655572317891461132/824137170032787467"},"#build-help"),",\nproviding the output of the following diagnostic commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew --prefix llvm\necho $CC\nwhich clang\ngrep llvm_bindir $(bazel info workspace)/bazel-execroot/external/bazel_cc_toolchain/clang_detected_variables.bzl\n")),(0,l.kt)("p",null,"These commands will help diagnose potential build issues because they'll expose\nwhat's occurring with\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/bazel/cc_toolchains/clang_configuration.bzl"},"clang detection"),"."),(0,l.kt)("h4",{id:"troubleshooting-debug-issues"},"Troubleshooting debug issues"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--compilation_mode=dbg")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel build")," in order to compile\nwith debugging enabled. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bazel build --compilation_mode=dbg //explorer\n")),(0,l.kt)("p",null,"Then debugging works with GDB:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gdb bazel-bin/explorer/explorer\n")),(0,l.kt)("p",null,"Note that LLVM uses DWARF v5 debug symbols, which means that GDB version 10.1 or\nnewer is required. If you see an error like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Dwarf Error: DW_FORM_strx1 found in non-DWO CU\n")),(0,l.kt)("p",null,"It means that the version of GDB used is too old, and does not support the DWARF\nv5 format."),(0,l.kt)("h3",{id:"pre-commit"},"pre-commit"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://pre-commit.com"},"pre-commit")," to run\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/.pre-commit-config.yaml"},"various checks"),". This will automatically run\nimportant checks, including formatting."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install pre-commit\n\n# From within each carbon-language git repository:\npre-commit install\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: There are other ways of installing listed at\n",(0,l.kt)("a",{parentName:"p",href:"https://pre-commit.com/#installation"},"pre-commit.com"),", but ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," is\nrecommended for reliability.")),(0,l.kt)("p",null,"When you have changes to commit to git, a standard pre-commit workflow can look\nlike:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Let pre-commit fix style issues.\npre-commit run\n# Add modifications made by pre-commit.\ngit add .\n# Commit the changes\ngit commit\n")),(0,l.kt)("p",null,"When modifying or adding pre-commit hooks, please run\n",(0,l.kt)("inlineCode",{parentName:"p"},"pre-commit run --all-files")," to see what changes."),(0,l.kt)("h2",{id:"optional-tools"},"Optional tools"),(0,l.kt)("h3",{id:"carbon-maintained"},"Carbon-maintained"),(0,l.kt)("p",null,"Carbon-maintained tools are provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"carbon-lang")," repository, rather\nthan a separate install. They are noted here mainly to help findability."),(0,l.kt)("h4",{id:"new_proposalpy"},"new_proposal.py"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/new_proposal.py"},"new_proposal.py")," is a helper for generating\nthe PR and proposal file for a new proposal. It's documented in\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/template.md"},"the proposal template"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This requires installing ",(0,l.kt)("a",{parentName:"p",href:"#gh-cli"},"the gh CLI"),"."),(0,l.kt)("h4",{id:"pr_commentspy"},"pr_comments.py"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/github_tools/pr_comments.py"},"pr_comments.py")," is a helper for scanning comments\nin GitHub. It's particularly intended to help find threads which need to be\nresolved."),(0,l.kt)("p",null,"Options can be seen with ",(0,l.kt)("inlineCode",{parentName:"p"},"-h"),". A couple key options to be aware of are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--long"),": Prints long output, with the full comment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--comments-after LOGIN"),": Only print threads where the final comment is not\nfrom the given user. For example, use when looking for threads that you\nstill need to respond to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--comments-from LOGIN"),": Only print threads with comments from the given\nuser. For example, use when looking for threads that you've commented on.")),(0,l.kt)("p",null,"This script may be run directly if ",(0,l.kt)("inlineCode",{parentName:"p"},"gql")," is installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install gql\n./github_tools/pr_comments.py <PR#>\n")),(0,l.kt)("p",null,"It may also be run using ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel"),", without installing ",(0,l.kt)("inlineCode",{parentName:"p"},"gql"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bazel run //github_tools:pr_comments -- <PR#>\n")),(0,l.kt)("h3",{id:"github"},"GitHub"),(0,l.kt)("h4",{id:"gh-cli"},"gh CLI"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cli/cli"},"The gh CLI")," supports some GitHub queries, and is\nused by some scripts."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install github/gh/gh\n")),(0,l.kt)("h4",{id:"github-desktop"},"GitHub Desktop"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop")," provides a UI for managing git\nrepositories. See the page for installation instructions."),(0,l.kt)("h3",{id:"rs-git-fsmonitor-and-watchman"},(0,l.kt)("inlineCode",{parentName:"h3"},"rs-git-fsmonitor")," and Watchman"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"WARNING"),": Bugs in ",(0,l.kt)("inlineCode",{parentName:"p"},"rs-git-fsmonitor")," and/or Watchman can result in\n",(0,l.kt)("inlineCode",{parentName:"p"},"pre-commit")," deleting files. If you see files being deleted, disable\n",(0,l.kt)("inlineCode",{parentName:"p"},"rs-git-fsmonitor")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"git config --unset core.fsmonitor"),".")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jgavris/rs-git-fsmonitor"},"rs-git-fsmonitor")," is a file system\nmonitor that uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/watchman"},"Watchman")," to speed up\ngit on large repositories, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"carbon-lang"),"."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Linux:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"If you don't have Rust's ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/"},"Cargo")," package\nmanager, install it first with\n",(0,l.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"the official install command"),".")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install watchman\ncargo install --git https://github.com/jgavris/rs-git-fsmonitor.git\n\n# Configure the git repository to use fsmonitor.\ngit config core.fsmonitor rs-git-fsmonitor\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MacOS:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap jgavris/rs-git-fsmonitor \\\n  https://github.com/jgavris/rs-git-fsmonitor.git\nbrew install rs-git-fsmonitor\n\n# Configure the git repository to use fsmonitor.\ngit config core.fsmonitor rs-git-fsmonitor\n")))),(0,l.kt)("h3",{id:"vim"},"Vim"),(0,l.kt)("h4",{id:"vim-prettier"},"vim-prettier"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/prettier/vim-prettier"},"vim-prettier")," is a vim integration\nfor ",(0,l.kt)("a",{parentName:"p",href:"#prettier"},"Prettier"),"."),(0,l.kt)("p",null,"If you use vim-prettier, the ",(0,l.kt)("inlineCode",{parentName:"p"},".prettierrc.yaml")," should still apply as long as\n",(0,l.kt)("inlineCode",{parentName:"p"},"config_precedence")," is set to the default ",(0,l.kt)("inlineCode",{parentName:"p"},"file-override"),". However, we may need\nto add additional settings where the ",(0,l.kt)("inlineCode",{parentName:"p"},"vim-prettier")," default diverges from\n",(0,l.kt)("inlineCode",{parentName:"p"},"prettier"),", as we notice them."),(0,l.kt)("p",null,"Our recommended way of installing is to use\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prettier/vim-prettier#install"},"the canonical instructions"),"."),(0,l.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is a code editor used by\nseveral of us. We provide ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/.vscode/extensions.json"},"recommended extensions")," to\nassist Carbon development. Some settings changes must be made separately:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python \u203a Formatting: Provider: ",(0,l.kt)("inlineCode",{parentName:"li"},"black"))),(0,l.kt)("p",null,"Our recommended way of installing is to use\n",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"the canonical download"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"WARNING:")," Visual Studio Code modifies the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable,\nparticularly in the terminals it creates. The ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," difference can cause\n",(0,l.kt)("inlineCode",{parentName:"p"},"bazel")," to detect different startup options, discarding its build cache. As a\nconsequence, it's recommended to use ",(0,l.kt)("strong",{parentName:"p"},"either")," normal terminals ",(0,l.kt)("strong",{parentName:"p"},"or")," Visual\nStudio Code to run ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel"),", not both in combination. Visual Studio Code can\nstill be used for other purposes, such as editing files, without interfering\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel"),".")),(0,l.kt)("h3",{id:"pre-commit-enabled-tools"},"pre-commit enabled tools"),(0,l.kt)("p",null,"If you're using pre-commit, it will run these tools. Installing and running them\nmanually is ",(0,l.kt)("em",{parentName:"p"},"entirely optional"),", as they can be run without being installed\nthrough ",(0,l.kt)("inlineCode",{parentName:"p"},"pre-commit run"),", but install instructions are still noted here for\ndirect execution."),(0,l.kt)("h4",{id:"black"},"black"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},"Black")," to format Python code. Although\n",(0,l.kt)("a",{parentName:"p",href:"#prettier"},"Prettier")," is used for most languages, it doesn't support Python."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install black\n")),(0,l.kt)("h4",{id:"codespell"},"codespell"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/codespell-project/codespell"},"codespell")," to spellcheck\ncommon errors. This won't catch every error; we're trying to balance true and\nfalse positives."),(0,l.kt)("p",null,"Our recommended way of installing is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install codespell\n")),(0,l.kt)("h4",{id:"prettier"},"Prettier"),(0,l.kt)("p",null,"We use ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," for formatting. There is an\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/.prettierrc.yaml"},"rc file")," for configuration."),(0,l.kt)("p",null,"Our recommended way of installing is to use\n",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/install.html"},"the canonical instructions"),"."))}u.isMDXComponent=!0}}]);