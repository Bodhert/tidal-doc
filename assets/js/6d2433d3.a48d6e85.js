"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,m=u["".concat(d,".").concat(f)]||u[f]||c[f]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(3117),r=(a(7294),a(3905));const i={title:"Adding Effects",id:"adding_effects"},l=void 0,o={unversionedId:"configuration/adding_effects",id:"configuration/adding_effects",title:"Adding Effects",description:"This help file is based on a file found in the SuperDirt GitHub repository. Report to the original version to get more information or add your improved workflow to this page to help other users. Adding new effects for Tidal and SuperDirt is a three-step process:",source:"@site/docs/configuration/adding_effects.md",sourceDirName:"configuration",slug:"/configuration/adding_effects",permalink:"/docs/configuration/adding_effects",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/adding_effects.md",tags:[],version:"current",lastUpdatedAt:1736394915,formattedLastUpdatedAt:"Jan 9, 2025",frontMatter:{title:"Adding Effects",id:"adding_effects"},sidebar:"docs",previous:{title:"Tidal listener",permalink:"/docs/configuration/tidal-listener"},next:{title:"Adding Global Effects",permalink:"/docs/configuration/adding_global_effects"}},d={},s=[{value:"Adding a spectral delay",id:"adding-a-spectral-delay",level:2},{value:"Tidal Side",id:"tidal-side",level:3},{value:"SuperCollider Side",id:"supercollider-side",level:3},{value:"Make a SynthDef",id:"make-a-synthdef",level:3},{value:"Final result",id:"final-result",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This help file is based on a file found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/hacks/adding-effects.scd"},"SuperDirt GitHub")," repository. Report to the original version to get more information or add your improved workflow to this page to help other users. Adding new effects for ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," and ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt")," is a three-step process: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"add the desired parameters to ",(0,r.kt)("strong",{parentName:"li"},"Tidal")),(0,r.kt)("li",{parentName:"ol"},"add a module definition to ",(0,r.kt)("strong",{parentName:"li"},"SuperDirt"),", so it can be found when the parameter is not ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")),(0,r.kt)("li",{parentName:"ol"},"add the ",(0,r.kt)("inlineCode",{parentName:"li"},"SynthDef")," to ",(0,r.kt)("strong",{parentName:"li"},"SuperDirt"),", so it can be played")),(0,r.kt)("h2",{id:"adding-a-spectral-delay"},"Adding a spectral delay"),(0,r.kt)("p",null,"We are going to add a weird spectral delay to ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt"),". This assumes that you have an instance of ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt")," accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"~dirt")," in the ",(0,r.kt)("strong",{parentName:"p"},"SuperCollider")," interactive editor."),(0,r.kt)("h3",{id:"tidal-side"},"Tidal Side"),(0,r.kt)("p",null,"We are going to add two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"tsdelay")," (float, delay time) and ",(0,r.kt)("inlineCode",{parentName:"p"},"xsdelay")," (int, delay structure). Run the following Tidal Code (as if it was a tidal pattern):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let tsdelay = pF "tsdelay"\n    xsdelay = pI "xsdelay"\n')),(0,r.kt)("p",null,"If you want this the above be automatically available every time you start tidal, then add it to the definitions in your ",(0,r.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/configuration/boot-tidal/"},"BootTidal.hs boot file"),"."),(0,r.kt)("h3",{id:"supercollider-side"},"SuperCollider Side"),(0,r.kt)("p",null,"Add a module for ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt"),". This adds a responder for the parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"(\n~dirt.addModule('spectral-delay', { |dirtEvent|\n    dirtEvent.sendSynth('spectral-delay' ++ ~dirt.numChannels,\n        // OPTIONAL\n        // passing this array of parameters could be left out,\n        // but it makes it clear what happens\n        [\n            xsdelay: ~xsdelay,\n            tsdelay: ~tsdelay,\n            sustain: ~sustain,\n            out: ~out\n        ]\n    )\n}, { ~tsdelay.notNil or: { ~xsdelay.notNil } }); // play synth only if at least one of the two was given\n)\n")),(0,r.kt)("p",null,"You can previsualise the effect order using this command in ",(0,r.kt)("strong",{parentName:"p"},"SuperCollider"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"~dirt.modules;\n")),(0,r.kt)("p",null,"You can reorder the effects if you need to. For instance, if you want the low pass filter to come after the delay, run the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"~dirt.orderModules(['spectral-delay', 'hpf', 'klm']);\n")),(0,r.kt)("h3",{id:"make-a-synthdef"},"Make a SynthDef"),(0,r.kt)("p",null,"The last step is to declare our spectral delay itself, that will be declared in a classic ",(0,r.kt)("strong",{parentName:"p"},"SuperCollider")," SynthDef:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'(\n\nvar numChannels =  ~dirt.numChannels;\n\nSynthDef("spectral-delay" ++ numChannels, { |out, tsdelay, xsdelay = 1, sustain|\n\n    var signal, delayTime, delays, freqs, filtered;\n    var size = 16;\n    var maxDelayTime = 0.2;\n\n    signal = In.ar(out, numChannels);\n    delayTime = tsdelay * maxDelayTime;\n    filtered = (1..size).sum { |i|\n        var filterFreq = i.linexp(1, size, 40, 17000);\n        var sig = BPF.ar(signal, filterFreq, 0.005);\n        // the delay pattern is determined from xsdelay by bitwise-and:\n        DelayN.ar(sig, maxDelayTime, i & xsdelay * (1/size) * delayTime )\n    };\n    signal = signal * 0.2 + (filtered * 4); // this controls wet/dry\n    ReplaceOut.ar(out, signal)\n\n}).add;\n)\n')),(0,r.kt)("h3",{id:"final-result"},"Final result"),(0,r.kt)("p",null,"Now you should be able to write the following in ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "can*4" # tsdelay "0 0.25 0.5 0.75 1" # xsdelay "3 124 3 12 62 2"\n')))}u.isMDXComponent=!0}}]);