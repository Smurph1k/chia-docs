"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7688],{824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(5893),t=i(1151);const r={title:"Chia Blockchain Security Intro",slug:"/security-basics"},o=void 0,a={id:"academy/blockchain-basics/security-basics",title:"Chia Blockchain Security Intro",description:"In this lesson, we learn the basic security implementations in Chia and how they protect users from bad actors.",source:"@site/docs/academy/blockchain-basics/security-basics.md",sourceDirName:"academy/blockchain-basics",slug:"/security-basics",permalink:"/security-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/blockchain-basics/security-basics.md",tags:[],version:"current",frontMatter:{title:"Chia Blockchain Security Intro",slug:"/security-basics"},sidebar:"academy",previous:{title:"Coin-Set Model Intro",permalink:"/coinset-basics"}},c={},l=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this lesson, we learn the basic security implementations in Chia and how they protect users from bad actors."}),"\n",(0,s.jsx)(n.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Decentralization"}),": Understand how a decentralized network enhances security and reduces attack options for bad actors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Coin Signatures"}),": Learn how coin signatures protect the users ability to spend the coins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Chialisp Security"}),": Review the inherent security of Chialisp, the language used for coin puzzles."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,s.jsx)("div",{class:"videoWrapper",children:(0,s.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/CATI6OVHPAg",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"script",children:"Script"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:" Expand for the full script "}),(0,s.jsxs)(n.p,{children:["00:00",(0,s.jsx)(n.br,{}),"\n","The Chia blockchain uses several layers of security."]}),(0,s.jsxs)(n.p,{children:["00:10",(0,s.jsx)(n.br,{}),"\n","The first the inherent security that comes from decentralization. By following a consensus method that prioritizes decentralization,"]}),(0,s.jsxs)(n.p,{children:["00:20",(0,s.jsx)(n.br,{}),"\n","the network ensures that the new blocks being formed are not manipulated by bad actors. There is no need to have a trusted third party to validate transactions, as the network as a whole will weed out anything non-valid."]}),(0,s.jsxs)(n.p,{children:["00:30",(0,s.jsx)(n.br,{}),"\n","To secure transactions, we use signatures to protect the coins. In order to make sure that a transaction hasn\u2019t been altered,"]}),(0,s.jsxs)(n.p,{children:["00:40",(0,s.jsx)(n.br,{}),"\n","every spend bundle (the packet of information about a transaction that gets sent out to nodes) contains an aggregated signature that will only match if the underlying information is unaltered."]}),(0,s.jsxs)(n.p,{children:["00:50",(0,s.jsx)(n.br,{}),"\n","In addition, a common condition included in the coin is a required signature to spend, preventing anyone but the authorized party from using the coin."]}),(0,s.jsxs)(n.p,{children:["01:00",(0,s.jsx)(n.br,{}),"\n",'Additionally, the language used to create "smart coins" is a custom flavor of Lisp called "Chialisp" that is designed to be highly efficient, secure, and easily auditable']}),(0,s.jsxs)(n.p,{children:["01:10",(0,s.jsx)(n.br,{}),"\n","so you can be sure about what exactly a coin is going to do when it is spent."]}),(0,s.jsx)(n.p,{children:"01:20"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Decentralization:"})," The true decentralization of Chia greatly increases the economic costs associated with performing various attacks on Chia, protecting it from all scales of bad actors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Coin Signatures:"})," Ensuring that a coins solution requires signing ensures that only the intended user can spend the coin, this is an essential part of securing coins on Chia."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Chialisp Security:"})," Chialisp has been developed from Lisp to ensure Chia coins are highly efficient, secure, and easily auditable."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,s.jsx)(n.admonition,{title:"Question 1 - Decentralization",type:"tip",children:(0,s.jsx)(n.p,{children:"Does Chia rely on a centralized third party to validate and secure the blockchain?"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,s.jsx)(n.p,{children:"No, Chia is truly decentralized and its network ensures security and block validity through the established consensus mechanism."})]}),"\n",(0,s.jsx)(n.admonition,{title:"Question 2 - Coin Signatures",type:"tip",children:(0,s.jsx)(n.p,{children:"Do all coin solutions require signatures to be secure?"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,s.jsxs)(n.p,{children:["No, while coin signatures are highly recommended for securing coins they are not required and Chialisp operators provide alternatives for securing coins.\nNote - if building coin puzzles that do not require signed solutions be very attentive to all possible exploits, some of which are documented ",(0,s.jsx)(n.a,{href:"https://chialisp.com/common_issues",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Question 3 - Chialisp",type:"tip",children:(0,s.jsx)(n.p,{children:"True or False: Chia uses the same on-chain language that is used for Bitcoin."})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,s.jsx)(n.p,{children:"False, a custom-developed flavor of Lisp called Chialisp was developed to be used for the Chia blockchain."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["General ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/coin-set-security",children:"Security Overview"}),": overviews of Chia security and a review of potential attacks."]}),"\n",(0,s.jsxs)(n.li,{children:["Overview of ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/coin-set-security/#signing",children:"Coin Signing"}),": reviews the purpose of signing and when it should be used for coins."]}),"\n",(0,s.jsxs)(n.li,{children:["Chialisp ",(0,s.jsx)(n.a,{href:"https://chialisp.com/",children:"detailed documentation"}),": detailed information on all aspects of Chialisp."]}),"\n",(0,s.jsxs)(n.li,{children:["Support ",(0,s.jsx)(n.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);