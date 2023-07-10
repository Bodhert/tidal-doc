"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6062],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=t(3117),r=(t(7294),t(3905));const o={title:"Build Arpeggios",id:"buildarpeggios"},l=void 0,s={unversionedId:"patternlib/howtos/buildarpeggios",id:"patternlib/howtos/buildarpeggios",title:"Build Arpeggios",description:"This page will teach you how to get started writing arpeggios using different techniques. It is a good way to learn Tidal Cycles in a more intuitive way.",source:"@site/docs/patternlib/howtos/buildarpeggios.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/buildarpeggios",permalink:"/docs/patternlib/howtos/buildarpeggios",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/buildarpeggios.md",tags:[],version:"current",lastUpdatedAt:1688965639,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"Build Arpeggios",id:"buildarpeggios"},sidebar:"docs",previous:{title:"Audio Outputs",permalink:"/docs/configuration/AudioConfig/audio_outputs"},next:{title:"Build Rhythms",permalink:"/docs/patternlib/howtos/buildrhythms"}},p={},i=[{value:"Arpeggios from notes",id:"arpeggios-from-notes",level:2},{value:"Arpeggios from chords",id:"arpeggios-from-chords",level:2}],u={toc:i};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will teach you how to get started writing arpeggios using different techniques. It is a good way to learn ",(0,r.kt)("strong",{parentName:"p"},"Tidal Cycles")," in a more intuitive way."),(0,r.kt)("h2",{id:"arpeggios-from-notes"},"Arpeggios from notes"),(0,r.kt)("p",null,"Start with a simple sequence of notes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c a f e"\n  # sound "supermandolin"\n')),(0,r.kt)("p",null,"Now, let's play one per cycle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "<c a f e>"\n  # sound "supermandolin"\n')),(0,r.kt)("p",null,"On top of that, put a copy of the sequence, offset in time and pitch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (off 0.125 (|+ 7) "<c a f e>")\n  # sound "supermandolin"\n')),(0,r.kt)("p",null,"Add some structure to the original sequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n')),(0,r.kt)("p",null,"Reverse in one speaker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n')),(0,r.kt)("p",null,"Let's add another layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ n (off 0.125 (|+ 12) $ off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")\n  # sound "supermandolin"\n  # legato 2\n')),(0,r.kt)("h2",{id:"arpeggios-from-chords"},"Arpeggios from chords"),(0,r.kt)("p",null,"We will start with a C major chord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'maj"\n  # sound "supermandolin"\n  # legato 2\n')),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"arp")," function to arpeggiate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "up" $ n "c\'maj"\n  # sound "supermandolin"\n  # sustain 0.5\n')),(0,r.kt)("p",null,"Let's add another note to the chord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "up" $ n "c\'maj\'4"\n  # sound "supermandolin"\n  # sustain 0.5\n')),(0,r.kt)("p",null,"Add another chord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "up" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n')),(0,r.kt)("p",null,"Change the arpeggiator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "pinkyup" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n')),(0,r.kt)("p",null,"Oh, and we can also pattern the arpeggiator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ arp "<pinkyup down thumbup up>" $ n "c\'maj\'4 e\'min"\n  # sound "supermandolin"\n  # sustain 0.5\n')),(0,r.kt)("p",null,"Change the chords, add some reverb:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ jux rev $ arp \"<pinkyup down thumbup up>\" $ n \"<c'maj'4 e4'min'8 f4'maj'4>\"\n  # sound \"supermandolin\"\n  # sustain 2 # room 0.3 # sz 0.9\n")),(0,r.kt)("p",null,"Add some variety with 'chunk':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ chunk 4 (|- note 5) $ jux rev $ \n  arp \"<pinkyup down thumbup up>\" $ n \"<c'maj'4 e4'min'8 f4'maj'4>\"\n  # sound \"supermandolin\"\n  # sustain 2 # room 0.3 # sz 0.9\n")))}d.isMDXComponent=!0}}]);