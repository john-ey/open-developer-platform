"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[654],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>o})},4996:(e,r,t)=>{t.d(r,{C:()=>a,Z:()=>i});var n=t(2263),o=t(3919);function a(){var e=(0,n.Z)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,p=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(p)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return l?e+u:u}(a,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},7980:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>u,toc:()=>s,default:()=>m});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(4996),p=["components"],c={id:"roadmap",title:"Roadmap"},l=void 0,u={unversionedId:"roadmap",id:"roadmap",isDocsHomePage:!1,title:"Roadmap",description:"This is the ODP Roadmap for 2020.",source:"@site/../docs/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/roadmap.mdx",version:"current",frontMatter:{id:"roadmap",title:"Roadmap"},sidebar:"mainSidebar",previous:{title:"Project Team",permalink:"/docs/team"}},s=[],d={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the ODP Roadmap for 2020."),(0,a.kt)("img",{alt:"odp-roadmap-2020",src:(0,i.Z)("img/odp-roadmap-2020.svg")}),(0,a.kt)("p",null,"You can check progress on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/finos/open-developer-platform/milestones"},"github.com/finos/open-developer-platform/milestones")))}m.isMDXComponent=!0}}]);