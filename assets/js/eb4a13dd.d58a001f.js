"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=i,m=g["".concat(s,".").concat(p)]||g[p]||u[p]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const a={id:"downgrading",title:"Downgrading"},o=void 0,l={unversionedId:"getting-started/downgrading",id:"getting-started/downgrading",title:"Downgrading",description:"-----",source:"@site/docs/getting-started/downgrading.md",sourceDirName:"getting-started",slug:"/getting-started/downgrading",permalink:"/docs/getting-started/downgrading",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/downgrading.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1676319265,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{id:"downgrading",title:"Downgrading"},sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/getting-started/upgrading"},next:{title:"Uninstall",permalink:"/docs/getting-started/uninstalling"}},s={},c=[{value:"Listing all the currently installed versions",id:"listing-all-the-currently-installed-versions",level:2},{value:"Uninstalling a version",id:"uninstalling-a-version",level:2},{value:"Choosing a specific version",id:"choosing-a-specific-version",level:2}],d={toc:c};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Sometimes, you might want to return to an earlier version of Tidal. Use the ",(0,i.kt)("strong",{parentName:"p"},"ghc-pkg")," command to do so. Enter the following commands in your terminal (or ",(0,i.kt)("strong",{parentName:"p"},"Powershell")," for Windows users) to downgrade your Tidal installation."),(0,i.kt)("h2",{id:"listing-all-the-currently-installed-versions"},"Listing all the currently installed versions"),(0,i.kt)("p",null,"This command will list the versions of Tidal you have installed. If there is more than one, the most recent will be used: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ghc-pkg list tidal\n")),(0,i.kt)("h2",{id:"uninstalling-a-version"},"Uninstalling a version"),(0,i.kt)("p",null,"To uninstall a version, you can do, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ghc-pkg unregister tidal-1.0.6\n")),(0,i.kt)("p",null,"Do this for each version until the most recent is the one you want."),(0,i.kt)("h2",{id:"choosing-a-specific-version"},"Choosing a specific version"),(0,i.kt)("p",null,"If you don't have the one you want installed, you can select the desired version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cabal install tidal-0.9.10\n")))}g.isMDXComponent=!0}}]);