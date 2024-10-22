"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={title:"mi-UGens Installation",id:"mi-ugens-installation",description:"mi-UGens - installation manual for TidalCycles"},l=void 0,o={unversionedId:"reference/mi-ugens-installation",id:"reference/mi-ugens-installation",title:"mi-UGens Installation",description:"mi-UGens - installation manual for TidalCycles",source:"@site/docs/reference/mi-ugens-installation.md",sourceDirName:"reference",slug:"/reference/mi-ugens-installation",permalink:"/docs/reference/mi-ugens-installation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mi-ugens-installation.md",tags:[],version:"current",lastUpdatedAt:1729623771,formattedLastUpdatedAt:"Oct 22, 2024",frontMatter:{title:"mi-UGens Installation",id:"mi-ugens-installation",description:"mi-UGens - installation manual for TidalCycles"}},s={},p=[{value:"Automatic",id:"automatic",level:3},{value:"Manual",id:"manual",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"For debian/ubuntu/mint systems, these ugens can be installed as part of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments"},"ansible Tidal installer")),(0,a.kt)("h3",{id:"manual"},"Manual"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unpack the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens/releases/latest/"},"latest release")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"mi-UGens")," appropriate to your Operating System")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Move the top level directory of the archive (",(0,a.kt)("inlineCode",{parentName:"p"},"mi-UGens/"),") into the SuperCollider Extensions folder (create it if it doesn't exist):"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\Extensions\\mi-UGens")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The SuperCollider Extensions folder can be found by running ",(0,a.kt)("inlineCode",{parentName:"p"},"Platform.userExtensionDir")," in SuperCollider. The path will be printed to the post window.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a new synthdef file ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens.scd"),", with ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd"},"these synthdefs"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens.scd")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create a new parameter definitions file, ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens-params.hs"),", with ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs"},"these parameters"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens-params.hs")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Configure SuperCollider - edit your ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.conf/SuperCollider/startup.scd")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\startup.scd")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd"))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Load the ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens.scd")," synthdef in ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),". Use the full path from ",(0,a.kt)("strong",{parentName:"li"},"3."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"WINDOWS Users!")," You ",(0,a.kt)("strong",{parentName:"p"},"must")," use double backslashes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," path in startup.scd, eg ",(0,a.kt)("inlineCode",{parentName:"p"},'load("C:\\\\Users\\\\<youruser>\\...");'))),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n  ~dirt = SuperDirt(2, s);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  // load mi-ugens.scd synthdefs\n  load("FULL_PATH_TO_mi-ugens.scd");\n  // end load mi-ugens.scd synthdefs\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"verb")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clouds")," as ",(0,a.kt)("strong",{parentName:"li"},"Global Effects"),". Add the following stanza as indicated to your ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),":")),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];\n        );\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        // define global effects for mutable instruments effects\n        ~dirt.orbits.do { |x|\n            var clouds = GlobalDirtEffect(\\global_mi_clouds, [\\cloudspitch, \\cloudspos, \\cloudssize, \\cloudsdens, \\cloudstex, \\cloudswet, \\cloudsgain, \\cloudsspread, \\cloudsrvb, \\cloudsfb, \\cloudsfreeze, \\cloudsmode, \\cloudslofi]);\n            var verb = GlobalDirtEffect(\\global_mi_verb, [\\verbwet, \\verbtime, \\verbdamp, \\verbhp, \\verbfreeze, \\verbdiff, \\verbgain]);\n            x.globalEffects = x.globalEffects\n              .addFirst(clouds)\n              .addFirst(verb); \n            x.initNodeTree;    \n        };                     \n        // end define global effects for mutable instruments effects\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save your ",(0,a.kt)("inlineCode",{parentName:"p"},"startup.scd")," and exit")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can choose to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"mi-ugens-params.hs")," parameter definitions manually in your tidal session, or add the following ",(0,a.kt)("inlineCode",{parentName:"p"},":script")," directive to the ",(0,a.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file associated with your editor of choice (locating the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," is beyond the scope of this reference)"))),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n    setR = streamSetR tidal\n    setB = streamSetB tidal    \n:}\n")),(0,a.kt)("p",null,"Add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":script FULL_PATH_TO_mi-ugens-params.hs\n")),(0,a.kt)("p",null,"Which should now be followed by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':set prompt "tidal>"\n:set prompt-cont ""\n...\n')),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Start/restart SuperCollider")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"OSX Users!*")," You may see a security dialog disallowing the ugens to run. Please see ",(0,a.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106"},"this post by @oscd")," for workarounds/fixes**")))}d.isMDXComponent=!0}}]);