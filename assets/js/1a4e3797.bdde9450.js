"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7920],{2027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r=a(7294),n=a(2263),l=a(179),s=a(5742),c=a(9960),o=a(5999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var g=a(6010),d=a(6550),f=a(412);const y=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var E=a(22),S=a(8202),C=a(2539),I=a(726),x=a(1073),v=a(311),w=a(3926),R=a(1029);const P={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function _(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=y(),[h,i]=(0,r.useState)(a),[d,f]=(0,r.useState)(),[C,I]=(0,r.useState)(),x=`${e}${c}`,w=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{u(h),d&&(h?d(h,(e=>{I(e)})):I(void 0))}),[h,d]);const _=(0,r.useCallback)((e=>{i(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==h&&i(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(x,l);f((()=>(0,S.v)(e,t,100)))}()}),[l,x]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,w)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,w),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,g.Z)("col",{[P.searchQueryColumn]:Array.isArray(R.Kc),"col--9":Array.isArray(R.Kc),"col--12":!Array.isArray(R.Kc)})},r.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:_,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(R.Kc)?r.createElement("div",{className:(0,g.Z)("col","col--3","padding-left--none",P.searchContextColumn)},r.createElement("select",{name:"search-context",className:P.searchContextInput,id:"context-selector",value:l,onChange:e=>m(e.target.value)},r.createElement("option",{value:""},R.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),R.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!d&&h&&r.createElement("div",null,r.createElement(v.Z,null)),C&&(C.length>0?r.createElement("p",null,t(C.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,C&&C.map((e=>r.createElement(b,{key:e.document.i,searchResult:e}))))))}function b(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(R.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:P.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,C.C)(h,l):(0,I.o)(h,(0,x.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:P.searchResultItemPath},(0,w.e)(m)),u&&r.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,I.o)(t.t,(0,x.m)(s,"t"),l,100)}}))}const F=function(){return r.createElement(l.Z,null,r.createElement(_,null))}}}]);