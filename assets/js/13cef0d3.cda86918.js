"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8330],{167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(5893),a=r(1151);r(4866),r(5162);const o={title:"Timelords",slug:"/timelords"},l=void 0,s={id:"getting-started/timelords",title:"Timelords",description:"Detailed information regarding timelord architecture can be found here",source:"@site/docs/getting-started/timelords.md",sourceDirName:"getting-started",slug:"/timelords",permalink:"/timelords",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/timelords.md",tags:[],version:"current",frontMatter:{title:"Timelords",slug:"/timelords"}},u={},i=[{value:"Coming Soon",id:"coming-soon",level:2}];function c(e){const t={a:"a",h2:"h2",hr:"hr",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Detailed information regarding timelord architecture can be found ",(0,n.jsx)(t.a,{href:"/timelord-architecture",children:"here"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"coming-soon",children:"Coming Soon"}),"\n",(0,n.jsx)(t.p,{children:"The Timelord installation and usage docs are in development and will be published here soon."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(512);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),a=r(512),o=r(2466),l=r(6550),s=r(469),u=r(1980),i=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=f({queryString:r,groupId:a}),[b,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=i??b;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function k(e){const t=(0,p.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(7294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);