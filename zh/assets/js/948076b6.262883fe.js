"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=r[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=r(7462),a=(r(7294),r(3905));const o={title:"Checking Farm Health",slug:"/checking-farm-health"},i="Is my farm healthy? (*NIX and Linux Headless Edition)",l={unversionedId:"farming/checking-farm-health",id:"farming/checking-farm-health",title:"Checking Farm Health",description:"A lot of smaller farmers are concerned about the health of their farm when they can't find any proofs for days at a time.",source:"@site/docs/farming/checking-farm-health.md",sourceDirName:"farming",slug:"/checking-farm-health",permalink:"/zh/checking-farm-health",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/farming/checking-farm-health.md",tags:[],version:"current",frontMatter:{title:"Checking Farm Health",slug:"/checking-farm-health"},sidebar:"tutorialSidebar",previous:{title:"Pool Farming",permalink:"/zh/pool-farming"},next:{title:"Reference Farming Hardware",permalink:"/zh/reference-farming-hardware"}},s={},h=[{value:"Check if your farm thinks its farming",id:"check-if-your-farm-thinks-its-farming",level:2},{value:"Change the log level output",id:"change-the-log-level-output",level:2},{value:"Check if your plots are passing the filter",id:"check-if-your-plots-are-passing-the-filter",level:2},{value:"Checking for proofs",id:"checking-for-proofs",level:2},{value:"Can a Double NAT scenario impact my farms ability to send valid proofs to the network?",id:"can-a-double-nat-scenario-impact-my-farms-ability-to-send-valid-proofs-to-the-network",level:2}],p={toc:h},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"is-my-farm-healthy-nix-and-linux-headless-edition"},"Is my farm healthy? (","*","NIX and Linux Headless Edition)"),(0,a.kt)("p",null,"A lot of smaller farmers are concerned about the health of their farm when they can't find any proofs for days at a time.\nThis document was created to provide metrics to smaller farmers so they can ensure their farm is working, even without finding any proofs."),(0,a.kt)("h2",{id:"check-if-your-farm-thinks-its-farming"},"Check if your farm thinks its farming"),(0,a.kt)("p",null,"Before going further, please make sure wether your farm actually considers itself to be farming. Theres a good chance that you might not since you are still syncing blocks."),(0,a.kt)("p",null,"To check the status of your farm, ",(0,a.kt)("inlineCode",{parentName:"p"},"../activate")," as usual and then type ",(0,a.kt)("inlineCode",{parentName:"p"},"chia farm summary"),". If the first line of the output looks like like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Farming status: Farming\n")),(0,a.kt)("p",null,"..then you know no broader errors have occurred."),(0,a.kt)("h2",{id:"change-the-log-level-output"},"Change the log level output"),(0,a.kt)("p",null,"To get detailed information about how your farm operates, you need to set the log-level of your farmer to ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),". For this you need to edit the Chia config under ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/config"),". You are looking for a part of the file that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"farmer:\n  logging: &id001\n    log_filename: log/debug.log\n    log_level: INFO\n    log_stdout: false\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"log_level")," has any other value than ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),", change it to ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO")," accordingly and save the file."),(0,a.kt)("h2",{id:"check-if-your-plots-are-passing-the-filter"},"Check if your plots are passing the filter"),(0,a.kt)("p",null,"The most important metric to look out for is, wether your plots are passing the plot filter on your harvesting machines. In a usual setup, this involves checking the logs under ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/log")," to see if at least for some rounds, plots are marked as ",(0,a.kt)("strong",{parentName:"p"},"eligible for farming")," by the harvester."),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/log")," directory may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"username@chia-farmer:~/.chia/mainnet/log$ tree\n.\n\u251c\u2500\u2500 debug.log\n\u251c\u2500\u2500 debug.log.1\n\u251c\u2500\u2500 debug.log.2\n\u251c\u2500\u2500 debug.log.3\n\u251c\u2500\u2500 debug.log.4\n\u251c\u2500\u2500 debug.log.5\n\u251c\u2500\u2500 debug.log.6\n\u2514\u2500\u2500 debug.log.7\n\n0 directories, 8 files\n")),(0,a.kt)("p",null,"Each logfile contains log information about all the services ran by Chia. If you're running a full node, these can be convoluted. We're only interested wether or not plots pass the plot filter. We can check this, by running a command like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat debug.log | grep "[0-9] plots were eligible for farming"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," command is a ","*","nix program to get content of a file. With the pipe operator ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),'we "pipe" the output to another program called ',(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"which can filter textual input. We filter for ",(0,a.kt)("inlineCode",{parentName:"p"},'"[0-9] plots were eligible for farming"')," to see if we already had eligible plots."),(0,a.kt)("p",null,"Example output may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"09:55:43.847 harvester src.harvester.harvester : INFO     1 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.13772 s. Total 100 plots\n09:55:52.737 harvester src.harvester.harvester : INFO     3 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.43679 s. Total 100 plots\n09:56:01.646 harvester src.harvester.harvester : INFO     2 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.14055 s. Total 100 plots\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you are seeing output like above here, this is already good!")),(0,a.kt)("p",null,"It means that plots are passing the plot filter and your farm seems to work as intended. Do this for each logfile to see wether or not you had any outages or wether something went wrong."),(0,a.kt)("h2",{id:"checking-for-proofs"},"Checking for proofs"),(0,a.kt)("p",null,"If you have had eligible plots in the past, theres a chance that you might have already found a proof, but it didn't get accepted by the network."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please keep in mind that finding a proof does not constitute to winning a plot (getting a payout). Even if you find a proof, it needs to compete with other proofs and win to actually receive a reward.")),(0,a.kt)("p",null,"To check wether you have already found proofs, you can run the same command as before, but with a different filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat debug.log | grep "Found [1-9] proofs"\n')),(0,a.kt)("p",null,"A possible result may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"12:30:01.492 harvester src.harvester.harvester : INFO     1 plots were eligible for farming 23d3a7c90f... Found 1 proofs. Time: 0.57000 s. Total 100 plots\n")),(0,a.kt)("p",null,"If you do this for all your logfiles and get a result, ",(0,a.kt)("strong",{parentName:"p"},"great!")," This means your farm is 100% working as expected. You might not have won a block yet, but you already came very close once, or a few times!"),(0,a.kt)("h2",{id:"can-a-double-nat-scenario-impact-my-farms-ability-to-send-valid-proofs-to-the-network"},"Can a Double NAT scenario impact my farms ability to send valid proofs to the network?"),(0,a.kt)("p",null,"Yes and no. Double NAT, while quirky, should work due to Chias uPnP support. You likely won't be able to seed blocks to other nodes this way though. A \"Double NAT\" scenario occurs, when a client (harvester or node) is inside a network that is NAT'ed two times.\nIt usually involves a client being behind two routers, instead of one and looks like this:"),(0,a.kt)("p",null,"Internet --\x3e Router --\x3e Router --\x3e Client"),(0,a.kt)("p",null,"Certain networking setups can impact the full nodes ability to participate in farming. As long as there aren't any telling signs in the logs that farming isn't working (namely logs with ERROR, WARNING tags that are network related) its unlikely that this is the case."))}u.isMDXComponent=!0}}]);