"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const i={},r="Code review",s={unversionedId:"code_review",id:"code_review",title:"Code review",description:"\x3c!--",source:"@site/../docs/project/code_review.md",sourceDirName:".",slug:"/code_review",permalink:"/carbon-lang/project/code_review",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/../docs/project/code_review.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Project",permalink:"/carbon-lang/project/"},next:{title:"Contribution tools",permalink:"/carbon-lang/project/contribution_tools"}},l={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"High level goals of code review",id:"high-level-goals-of-code-review",level:2},{value:"What requires review?",id:"what-requires-review",level:2},{value:"Who should review?",id:"who-should-review",level:2},{value:"GitHub pull request mechanics",id:"github-pull-request-mechanics",level:2},{value:"Code author guide",id:"code-author-guide",level:2},{value:"Write good change descriptions",id:"write-good-change-descriptions",level:3},{value:"First line",id:"first-line",level:4},{value:"Body",id:"body",level:4},{value:"Make small changes",id:"make-small-changes",level:3},{value:"Responding to review comments",id:"responding-to-review-comments",level:3},{value:"Responding to questions or confusion",id:"responding-to-questions-or-confusion",level:4},{value:"Understand the feedback in the comments",id:"understand-the-feedback-in-the-comments",level:4},{value:"Code reviewer guide",id:"code-reviewer-guide",level:2},{value:"How quickly should you respond to a review request?",id:"how-quickly-should-you-respond-to-a-review-request",level:3},{value:"What should be covered by a review?",id:"what-should-be-covered-by-a-review",level:3},{value:"Writing review comments",id:"writing-review-comments",level:3},{value:"Approving the change",id:"approving-the-change",level:3},{value:"Merging pull requests",id:"merging-pull-requests",level:2},{value:"Merge commit descriptions",id:"merge-commit-descriptions",level:3},{value:"Resolving an impasse or conflict",id:"resolving-an-impasse-or-conflict",level:2},{value:"Escalation",id:"escalation",level:2}],u={toc:h};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-review"},"Code review"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#high-level-goals-of-code-review"},"High level goals of code review")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-requires-review"},"What requires review?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#who-should-review"},"Who should review?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#github-pull-request-mechanics"},"GitHub pull request mechanics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-author-guide"},"Code author guide"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#write-good-change-descriptions"},"Write good change descriptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#first-line"},"First line")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#body"},"Body")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#make-small-changes"},"Make small changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responding-to-review-comments"},"Responding to review comments"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responding-to-questions-or-confusion"},"Responding to questions or confusion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#understand-the-feedback-in-the-comments"},"Understand the feedback in the comments")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-reviewer-guide"},"Code reviewer guide"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-quickly-should-you-respond-to-a-review-request"},"How quickly should you respond to a review request?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-should-be-covered-by-a-review"},"What should be covered by a review?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#writing-review-comments"},"Writing review comments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#approving-the-change"},"Approving the change")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#merging-pull-requests"},"Merging pull requests"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#merge-commit-descriptions"},"Merge commit descriptions")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#resolving-an-impasse-or-conflict"},"Resolving an impasse or conflict")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#escalation"},"Escalation"))),(0,o.kt)("h2",{id:"high-level-goals-of-code-review"},"High level goals of code review"),(0,o.kt)("p",null,"Code review serves several goals in the Carbon project. It directly improves the\ncorrectness, clarity, and consistency of contributions, including both code and\ndocumentation. These improvements range from the high-level functionality down\nthrough the design and implementation details. It also promotes team ownership\nand spreads knowledge across the team."),(0,o.kt)("p",null,'More detailed discussions can be found in chapter 9 "Code Review" of the book\n',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791"},"Software Engineering at Google")),'\nand chapter 21 "Collaborative Construction" in\n',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/"},"Code Complete: A Practical Handbook of Software Construction")),".\nHowever, these details aren't essential to understanding code review and how it\nworks in the Carbon project. All of the important details are provided in the\nproject documentation."),(0,o.kt)("h2",{id:"what-requires-review"},"What requires review?"),(0,o.kt)("p",null,"Every change to Carbon's repositories requires code review. Even formal\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution"},"evolution decisions")," which have been approved should have their\nspecific changes to the repository reviewed."),(0,o.kt)("p",null,"Many changes to Carbon repositories may ",(0,o.kt)("em",{parentName:"p"},"only")," require code review. Typically,\nthese include bug fixes, and development or documentation improvements clearly\nin line with accepted designs. It may in some rare cases extend to exploring\nexperimental or prototype directions whose design is under active consideration."),(0,o.kt)("p",null,'The term "code review" in the Carbon project is not only about "code". We expect\nchanges to any files to be reviewed, including documentation and any other\nmaterial stored in the repository.'),(0,o.kt)("h2",{id:"who-should-review"},"Who should review?"),(0,o.kt)("p",null,"Everyone should feel free to review Carbon changes. Even providing small or\npartial review can be a good way to start contributing to Carbon. Contributors\nwith specific domain expertise or familiarity should also try to provide review\non changes touching relevant parts of the project."),(0,o.kt)("p",null,"Additionally, at least one developer with commit access must review each change.\nIn Carbon, developers will focus on particular areas, loosely broken down as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/groups#carbon-leads"},"Carbon leads"),": ",(0,o.kt)("a",{parentName:"p",href:"/proposals/"},"proposals")," and other\nimportant project documents, including the ",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/"},"Main README"),",\n",(0,o.kt)("a",{parentName:"p",href:"/CODE_OF_CONDUCT.md"},"Code of Conduct"),", ",(0,o.kt)("a",{parentName:"p",href:"/LICENSE"},"license"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/goals"},"goals"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/groups#implementation-team"},"Implementation team"),": general changes."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We split out auto-assignment by\n",(0,o.kt)("a",{parentName:"li",href:"/.github/assign_prs/explorer.yaml"},"explorer"),",\n",(0,o.kt)("a",{parentName:"li",href:"/.github/assign_prs/toolchain.yaml"},"toolchain"),", and\n",(0,o.kt)("a",{parentName:"li",href:"/.github/assign_prs/fallback.yaml"},"other files, including documentation"),".")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/.github/workflows/assign_prs.yaml"},"Auto-assignment")," will help find owners, but\nwon't always be perfect -- developers may take a PR they weren't auto-assigned\nin order to help review go quickly. Contributors can also request multiple\nreviewers, but it can be daunting to get feedback from a large number of\nreviewers, so we suggest keeping the number of reviewers reasonably small."),(0,o.kt)("p",null,"Any reviews that explicitly request changes should be addressed, either with the\nchanges or an explanation of why not, before a pull request is merged. Further,\nany owners who have requested changes should explicitly confirm they're happy\nwith the resolution before the change is merged."),(0,o.kt)("p",null,"When a team gives an affirm decision on an ",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution"},"evolution proposal"),",\neach team member should explicitly note any of their comments on the pull\nrequest that, while not blocking the ",(0,o.kt)("em",{parentName:"p"},"decision"),", still need to be resolved as\npart of code review prior to it being merged. These might, for example, be\ntrivial or minor wording tweaks or improvements. Otherwise, the decision is\nassumed to mean the prior review comments from members of that team are\naddressed; the author is free to merge once the pull request is approved,\npossibly with a code review separate from the proposal's review."),(0,o.kt)("h2",{id:"github-pull-request-mechanics"},"GitHub pull request mechanics"),(0,o.kt)("p",null,"Carbon uses GitHub pull requests for code review, and we recommend some\nmechanical best practices to most effectively navigate them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Be aware that the main thread of pull request doesn\'t support threaded\ndiscussions or "resolving" a comment.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If either of those would be useful, you'll probably want to comment on a\nfile."),(0,o.kt)("li",{parentName:"ul"},'You can quote comments in the main conversation thread in a reply by\nclicking the three-dot menu on the original comment and selecting "Quote\nreply".'))),(0,o.kt)("li",{parentName:"ul"},"If you will want to comment on files, don't comment in the pull request\nconversation.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Always go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Files Changed")," tab."),(0,o.kt)("li",{parentName:"ul"},"Make any in-file comments needed, but add them to a pending review\nrather than sending them directly."),(0,o.kt)("li",{parentName:"ul"},"Finish the review and add any top-level review comments there."))),(0,o.kt)("li",{parentName:"ul"},'If you are an owner who will be providing approval for the change, then make\nsure to mark a review as requesting changes when you want the author to\nbegin addressing your comment. Only use the "comment" review state if you\nare still in the process of reviewing and don\'t expect the author to begin\nworking on further changes.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are not an owner asked to approve, use the difference between a\ncomment and requesting a change to help the author know whether to\ncircle back with you before landing the pull request if the relevant\nowner(s) approve it."))),(0,o.kt)("li",{parentName:"ul"},"Don't reply to in-file comment threads in the conversation view, or with\ndirect single reply comments.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add all replies to in-file comment threads using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Files Changed")," tab\nand by adding each reply to a new review, and posting them as a batch\nwhen done."),(0,o.kt)("li",{parentName:"ul"},"You can get to the appropriate ",(0,o.kt)("inlineCode",{parentName:"li"},"Files Changed")," tab by clicking on the\nchange listed in the conversation view with the incoming set of in-file\ncomments."),(0,o.kt)("li",{parentName:"ul"},"This flow ensures an explicit update in the overall pull request that\ncan help both the author and other reviewers note that new replies have\narrived."))),(0,o.kt)("li",{parentName:"ul"},"Don't reply to an in-file comment and then mark it as resolved. No one will\nsee your reply as the thread will be hidden immediately when marked as\nresolved.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Generally, the person who started the comment thread should mark it as\nresolved when their comments are sufficiently addressed. If another\nreviewer is also on the thread and should also agree, just state that\nyou're happy and the last reviewer can mark it resolved."),(0,o.kt)("li",{parentName:"ul"},'Trivially resolved threads can just be marked as "resolved" without\nfurther update. Examples: a suggested change that has been successfully\napplied, or a thread where the relevant reviewers have clearly indicated\nthey\'re happy.')))),(0,o.kt)("h2",{id:"code-author-guide"},"Code author guide"),(0,o.kt)("p",null,"The goal of an author should be to ensure their change improves the overall\ncode, repository, and/or project. Within the context of code review, the goal is\nto get a reviewer to validate that the change succeeds at this goal. That\ninvolves finding an effective reviewer given the particular nature of the\nchange, helping them understand the change fully, and addressing any feedback\nthey provide."),(0,o.kt)("h3",{id:"write-good-change-descriptions"},"Write good change descriptions"),(0,o.kt)("p",null,"The change description in the pull request is the first thing your reviewers\nwill see. This sets the context for the entire review, and is very important."),(0,o.kt)("h4",{id:"first-line"},"First line"),(0,o.kt)("p",null,"The first line of a commit, or the subject of the pull request, should be a\nshort summary of specifically what is being done by that change. It should be a\ncomplete sentence, written as though it was an order. Try to keep it short,\nfocused, and to the point."),(0,o.kt)("h4",{id:"body"},"Body"),(0,o.kt)("p",null,"The description body may need to explain several important aspects of the change\nto provide context for the reviewer when it isn't obvious from the change\nitself:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The problem being solved by the change."),(0,o.kt)("li",{parentName:"ul"},"Why the approach taken is the best one."),(0,o.kt)("li",{parentName:"ul"},"Any issues, concerns, or shortcomings of the approach."),(0,o.kt)("li",{parentName:"ul"},"Any alternatives considered or attempted."),(0,o.kt)("li",{parentName:"ul"},"Relevant supporting data such as examples or benchmarks.")),(0,o.kt)("p",null,"Try to anticipate what information the reviewer of your change will need to have\nin order to be effective. Also consider what information someone else will need\na year in the future when doing archaeology on the codebase and they come across\nyour change without any context."),(0,o.kt)("h3",{id:"make-small-changes"},"Make small changes"),(0,o.kt)("p",null,"Small changes have many benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Faster review."),(0,o.kt)("li",{parentName:"ul"},"More thorough review."),(0,o.kt)("li",{parentName:"ul"},"Easier to merge."),(0,o.kt)("li",{parentName:"ul"},"Easier to revert if needed.")),(0,o.kt)("p",null,"The ideal size of a change is as small as possible while it remains\nself-contained. It should address only ",(0,o.kt)("em",{parentName:"p"},"one thing"),". Often, this results in a\nchange only addressing ",(0,o.kt)("em",{parentName:"p"},"part")," of a feature rather than the whole thing at once.\nThis makes work more incremental, letting the reviewer understand it piece by\npiece. It can also make it much easier to critically evaluate whether each part\nof a feature is adequately tested by showing it in isolation."),(0,o.kt)("p",null,"That said, a change should not be so small that its implications cannot easily\nbe understood. It is fine to provide the reviewer context or a framework of a\nseries of changes so they understand the big picture, but that will only go so\nfar. It is still possible to shrink a change so much that it becomes nonsensical\nin isolation. For example, a change without appropriate tests is not\nself-contained."),(0,o.kt)("p",null,"You may want to use a set of stacked pull requests rather than a single, larger\npull request in order to keep changes easy to review."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: link to the stacked pull request documentation when available.")),(0,o.kt)("h3",{id:"responding-to-review-comments"},"Responding to review comments"),(0,o.kt)("p",null,"Many comments have easy and simple responses. The easiest is ",(0,o.kt)("strong",{parentName:"p"},'"Done"'),". When\nthe comment is a concrete suggestion that makes sense and you implement it, you\ncan simply let the reviewer know their suggestion has been incorporated. If the\n",(0,o.kt)("em",{parentName:"p"},"way")," you implemented the suggestion might need clarification, add that as well.\nFor example, consider mentioning tweaks to the suggestion or when the suggestion\nwas applied in more places."),(0,o.kt)("p",null,"When a suggestion from the reviewer is explicitly optional, you may also have a\nsimple response that you're not going to make the change. This is totally fine\n-- if it weren't, the reviewer shouldn't have listed it as optional -- but it\nmay be helpful to explain your reasoning to the reviewer so they understand\nbetter why the optional suggestion didn't make sense to you."),(0,o.kt)("p",null,"Sometimes comments, even optional ones, center around slight differences or\npreferences around the code. Consider that the reviewer may be a good proxy for\nfuture readers. If the suggestion is essentially equivalent to your original\ncode, consider adopting it as it may make the code easier to read for others.\nBut if you feel the current choice is ",(0,o.kt)("em",{parentName:"p"},"better"),", even if only slightly, stand up\nfor yourself and keep it. The reviewer can always push for a change and justify\nit if needed."),(0,o.kt)("p",null,"For non-optional comments, this section provides several suggestions on how best\nto make progress. If none of these work, you may need to\n",(0,o.kt)("a",{parentName:"p",href:"#resolving-an-impasse-or-conflict"},"resolve an impasse or conflict"),"."),(0,o.kt)("h4",{id:"responding-to-questions-or-confusion"},"Responding to questions or confusion"),(0,o.kt)("p",null,"Some comments in code review will be questions or confusion as the reviewer\ntries to understand the code in question or why a particular approach was used.\nDon't assume that questions are a request for a change. Reviewers should be\nexplicit if they think a change is needed rather than merely asking questions.\nYou should assume a question or confusion is something which only needs to be\nclarified."),(0,o.kt)("p",null,"However, when responding to a question or confusion, consider making changes to\nimprove clarity in addition to responding within the review, such as by adding\ncomments or changing code structure. The reviewer may not be the last person to\nneed more clarity, and you should use their comments as a signal for\nimprovement. Once done, the review response should typically focus on verifying\nthat the clarifications made in the code are sufficient for the reviewer."),(0,o.kt)("h4",{id:"understand-the-feedback-in-the-comments"},"Understand the feedback in the comments"),(0,o.kt)("p",null,"At times, review comments may be confusing or frustrating for you. While this is\nsomething we always want reviewers to minimize, it will still happen at some\ntimes and to some degree. It helps to remember that the goal of the review is to\nensure the change results in the project improving over time."),(0,o.kt)("p",null,"If the review comment doesn't make sense, ask the reviewer to help you\nunderstand the feedback better. If it isn't constructive or doesn't seem to\nprovide any meaningful path forward, ask the reviewer to provide this. Making\ncomments both clear and constructive are part of the reviewers'\nresponsibilities."),(0,o.kt)("p",null,"Once there is a clear and effectively communicated comment that you understand,\nit may still feel wrong or like it is unnecessarily blocking your progress. It\nis important to try to step back in this situation and, no matter how certain\nyou are, genuinely consider whether there is valuable feedback. You should be\nasking yourself whether the reviewer might be correct, potentially in an\nunexpected or surprising way. If you can't decide this definitively, you may\nneed to work to get a deeper understanding."),(0,o.kt)("p",null,"If you are confident that the reviewer's comment is incorrect, that is ",(0,o.kt)("em",{parentName:"p"},"OK"),". The\nreviewer is also only human and is certain to make mistakes and miss things. The\nresponse needs to try to explain what it is that leads you to be confident in\nyour assessment. Lay out the information you have and how you are reasoning\nabout the issue to arrive at the conclusion. Try not to make assumptions about\nwhat the reviewer knows or why they made the comment. Instead, focus on\nsurfacing explicitly your perspective on the issue."),(0,o.kt)("p",null,"These parts of a review will often be a discussion and may need to iterate a few\ntimes. That isn't intrinsically bad, but try to make sure that it doesn't result\nin reiterating positions or repeating things. Make sure the discussion is\n",(0,o.kt)("em",{parentName:"p"},"progressing")," towards deeper understanding and recognize when you reach an\nimpasse or conflict and shift strategy to\n",(0,o.kt)("a",{parentName:"p",href:"#resolving-an-impasse-or-conflict"},"resolve that"),". It is also useful to avoid\nlong delays between these iterations. Consider discussing over Discord chat or\nscheduling a quick video chat on the specific issue. This can avoid multi-hour\n-- or multi-day -- round trips."),(0,o.kt)("h2",{id:"code-reviewer-guide"},"Code reviewer guide"),(0,o.kt)("p",null,"The specific goal for a particular review should always be to ensure that the\noverall health of the code, repository, and/or project improves over time. This\nrequires that contributions ",(0,o.kt)("em",{parentName:"p"},"make progress")," -- otherwise, nothing can improve.\nHowever, the review should ensure that quality of changes does not cause the\nhealth of the project to decrease over time."),(0,o.kt)("p",null,"The primary responsibility for ensuring that code review remains constructive,\nproductive, and helpful resides in the ",(0,o.kt)("em",{parentName:"p"},"reviewer"),". As a reviewer, you are in a\nposition of power and asked to critique the authors hard work. With this power\ncomes responsibility for conducting the review well."),(0,o.kt)("h3",{id:"how-quickly-should-you-respond-to-a-review-request"},"How quickly should you respond to a review request?"),(0,o.kt)("p",null,"Try to respond to code review requests as soon as you can without interrupting a\nfocused task. At the latest, the next day you are working on the project. Note\nthat the review isn't expected to necessarily be complete after a single review.\nIt is more valuable to give reasonably quick but partial feedback than to delay\nfeedback in order to complete it. If leaving partial feedback, make it clear to\nthe author which parts are covered and which you haven't gotten to yet."),(0,o.kt)("p",null,"Large changes are especially important to give incremental feedback on in order\nto do so in a timely fashion. One of the first things to consider with large\nchanges is whether it can be split apart into smaller changes that are easier to\nreview promptly."),(0,o.kt)("p",null,"This timeliness guidance doesn't apply to the higher-level\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution"},"evolution process")," reviews. Evaluating those proposals will often\nrequire a larger time investment and have their own timelines spelled out in the\nprocess. Here, we are talking about simply reviewing changes themselves\northogonally to any evolutionary discussion and evaluation."),(0,o.kt)("h3",{id:"what-should-be-covered-by-a-review"},"What should be covered by a review?"),(0,o.kt)("p",null,"Things to consider and evaluate when reviewing changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is the code well designed?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Is the resulting functionality, including its interface, good for the\nusers of the code?"),(0,o.kt)("li",{parentName:"ul"},"Does the resulting design facilitate long-term maintenance?"),(0,o.kt)("li",{parentName:"ul"},"Can the code be simplified? Is there unnecessary complexity?"),(0,o.kt)("li",{parentName:"ul"},"Are things being implemented that aren't yet needed and only ",(0,o.kt)("em",{parentName:"li"},"might")," be\nneeded in the future?"))),(0,o.kt)("li",{parentName:"ul"},"Is the code free of bugs and well tested?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Is memory safely managed?"),(0,o.kt)("li",{parentName:"ul"},"Is any parallel or concurrent programming done safely?"),(0,o.kt)("li",{parentName:"ul"},"Do unit tests cover relevant behaviors and edge cases?"),(0,o.kt)("li",{parentName:"ul"},"Do any integration tests need to be extended or added?"),(0,o.kt)("li",{parentName:"ul"},"Do any fuzz tests need to be extended or added?"),(0,o.kt)("li",{parentName:"ul"},"Are any tests well designed to be both thorough but also maintainable\nover time?"))),(0,o.kt)("li",{parentName:"ul"},"Is the code easy to read?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Are the names used in the code clear?"),(0,o.kt)("li",{parentName:"ul"},"Are all important or non-obvious aspects of the code well commented? Do\nthe comments focus on ",(0,o.kt)("em",{parentName:"li"},"why")," instead of ",(0,o.kt)("em",{parentName:"li"},"what"),"?"),(0,o.kt)("li",{parentName:"ul"},"Is there appropriate high level documentation for the change?"),(0,o.kt)("li",{parentName:"ul"},"Does the change adhere to all relevant style guides?"),(0,o.kt)("li",{parentName:"ul"},"Is the change consistent with other parts of the project?")))),(0,o.kt)("h3",{id:"writing-review-comments"},"Writing review comments"),(0,o.kt)("p",null,"These are general guidelines for writing effective code review comments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Be kind.")," Detailed review, especially in an open source project, can be\nstressful and difficult for the author. As a reviewer, part of the job is to\nensure the review experience ends up positive and constructive for the\nauthor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stay constructive.")," Focus your comments on suggesting specific ways to\nimprove the change. If you need to explain why an improvement is necessary,\nfocus on objective ways the improvement helps and avoid both subjective\nassessments and anchoring on problems with the current state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explain why.")," It is important for the author to understand not merely the\nmechanical suggested change but what motivates it and why it matters. This\nmay help clear up misunderstandings, help the suggestion be understood and\napplied more effectively, and allow internalizing improvements for future\ncontributions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Provide a path forward.")," The author needs to understand what they will\nneed to do to respond to your comments. For example, always provide\nalternatives when commenting that the current approach won't work.")),(0,o.kt)("p",null,"Keep in mind that the goal is to improve the overall health of the code,\nrepository, and/or project over time. Sometimes, there will be pushback on\nreview comments. Consider carefully if the author is correct -- they may be\ncloser to the technical issues than you are and may have important insight. Also\nconsider whether the suggestion is necessary to achieve the overall goal. If the\nsuggestion isn't critical to make the change an overall improvement, it may be\nfine for it to move forward as-is."),(0,o.kt)("p",null,"As with all communication in the Carbon project, it is critical that your\ncomments are not unkind, unwelcoming, angry, ad-hominem attacks, or otherwise\nviolating our community's ",(0,o.kt)("a",{parentName:"p",href:"/CODE_OF_CONDUCT.md"},"code of conduct"),"."),(0,o.kt)("h3",{id:"approving-the-change"},"Approving the change"),(0,o.kt)("p",null,'Be explicit and unambiguous at the end of your review. Select "Approve" when\nsubmitting the review to mark this in GitHub. You can always include a message,\noften "LGTM" or "Looks Good To Me" is often used. If you don\'t feel like you\'re\nin a position to approve the change and are simply helping out with review\nfeedback, make that explicit as well. You should set the review to a "Comment"\nin GitHub, but also state this explicitly in the message since this is the\ndefault and doesn\'t indicate that your feedback ',(0,o.kt)("em",{parentName:"p"},"is"),' addressed. For example, say\nthat "my comments are addressed, but leaving the final review to others" to\nclearly indicate that you\'re happy but are deferring the decision to others. If\nyou are an owner and deferring to someone else, it is essential to suggest\nspecific other reviewers. Otherwise, we risk all the owners assuming another is\ngoing to approve the change.'),(0,o.kt)("p",null,"An important technique to make progress, especially with different working hours\nand timezones, is to approve changes even with outstanding comments. For\nexample, if the comments you have are straightforward and have unambiguous fixes\nor suggested edits, you should give an LGTM with those comments addressed. The\nauthor can always come back to you if they have questions, and we can always\nrevert changes if the resolution for some reason diverges wildly from your\nexpectations."),(0,o.kt)("h2",{id:"merging-pull-requests"},"Merging pull requests"),(0,o.kt)("p",null,'Pull requests are ready to be merged when reviewers have indicated they\'re happy\n(for example, "LGTM" or "Looks good to me") or have approved the pull request.\nWhile all merges require at least one approval, a reviewer might approve before\nothers are finished reviewing; all reviewers should be given time to comment to\nensure there\'s a consensus.'),(0,o.kt)("p",null,"Either the author or reviewer may merge and resolve conflicts. The author may\nindicate they want to merge by informing the reviewer and adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"DO NOT MERGE")," label. The reviewer is encouraged to coordinate with the author\nabout merge timing if there are concerns about breaks. In either case, the\ndeveloper doing the merge is expected to be available to help address\npost-commit issues, whether through a fix-forward or a rollback."),(0,o.kt)("h3",{id:"merge-commit-descriptions"},"Merge commit descriptions"),(0,o.kt)("p",null,"When squashing and merging, GitHub tries to generate a description, but it's\nrecommended to use the first comment on the pull request review for the squashed\ncommit description. Authors should keep it up-to-date so that reviewers can\nmerge when the change is ready. Reviewers shouldn't edit or rewrite this message\nthemselves, and instead ask the author make those changes (possibly with\nsuggestions) just like other parts of the code review. It's important that the\ncommit message is one the author is comfortable with when merged."),(0,o.kt)("p",null,"When suggested edits have been merged into a pull request, GitHub will append a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Co-authored-by:")," line to its default proposed commit message for each reviewer\nwho suggested edits that were applied. These lines should be retained and\nappended to the message from the initial comment."),(0,o.kt)("h2",{id:"resolving-an-impasse-or-conflict"},"Resolving an impasse or conflict"),(0,o.kt)("p",null,"At some point, a review may reach an impasse or a genuine conflict. While our\ngoal is always to resolve these by building consensus in review, it may not be\npossible. Both the author and any reviewers should be careful to recognize when\nthis point arrives and address it directly. Continuing the review is unlikely to\nbe productive and has a high risk of becoming acrimonious or worse."),(0,o.kt)("p",null,"There are two techniques to use to resolve these situations that should be tried\nearly on:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bring another person into the review to help address the specific issue.\nTypically they should at least be an owner, and may usefully be a\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/groups#carbon-leads"},"Carbon lead"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ask the specific question in a broader forum, such as Discord, in order to\nget a broad set of perspectives on a particular area or issue."))),(0,o.kt)("p",null,"The goal of these steps isn't to override the author or the reviewer, but to get\nmore perspectives and voices involved. Often this will clarify the issue and its\ntrade-offs, and provide a simple resolution that all parties are happy with.\nHowever, in some cases, the underlying conflict isn't actually addressed. While\nthere is a desire to generally bias towards the direction of the owners during\nreviews, reviews should ",(0,o.kt)("em",{parentName:"p"},"not")," turn into a voting process. The reason for\nproceeding in a specific direction should always be explained sufficiently that\nall parties on the review are satisfied by the explanation and don't feel the\nneed to escalate."),(0,o.kt)("p",null,"Fundamentally, both reviewers and the author need to agree on the direction to\nmove forward. If reaching that agreement proves impossible, the review should be\n",(0,o.kt)("a",{parentName:"p",href:"#escalation"},"escalated"),". If you feel like an escalation is needed in a review,\nbe explicit and clear in requesting it. There is nothing bad about going through\nthis process, but it should only occur when needed and so it helps to be very\nclear."),(0,o.kt)("p",null,"Once the impasse or conflict is addressed, it is ",(0,o.kt)("em",{parentName:"p"},"essential")," to commit to that\ndirection. It can be especially difficult for the author to accept a direction\nthat they initially disagree with and make changes to their code as a result. An\nessential skill is the ability to\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Disagree_and_commit"},"disagree and commit"),"."),(0,o.kt)("h2",{id:"escalation"},"Escalation"),(0,o.kt)("p",null,"At the explicit request of any ",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution#carbon-leads-1"},"Carbon lead")," or to\nresolve any fundamental impasse in a review, the change should move to a formal\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution#proposals"},"proposal"),". Ultimately, the Carbon project\n",(0,o.kt)("a",{parentName:"p",href:"/carbon-lang/project/evolution#governance-structure"},"governance")," structure is always available as\nan escalation path."),(0,o.kt)("p",null,"Before escalating an impasse or conflict in code review, try asking another\nreviewer to help resolve the issue or bridge any communication gaps. Consider\nscheduling a quick video chat to discuss and better understand each others'\nconcerns and position."),(0,o.kt)("p",null,"Note that the formal evolution process is heavyweight and relatively slow. The\nexpectation is that this is rarely used and only to resolve serious and severe\ndisagreements. If this becomes a more common problem, lighter weight processes\nmay be needed to help ensure a reasonable rate of progress."))}c.isMDXComponent=!0}}]);