"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const l={title:"Performance",id:"performance"},i=void 0,s={unversionedId:"reference/performance",id:"reference/performance",title:"Performance",description:"This page will present you all the functions that will be useful during the performance",source:"@site/docs/reference/performance.md",sourceDirName:"reference",slug:"/reference/performance",permalink:"/docs/reference/performance",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/performance.md",tags:[],version:"current",lastUpdatedAt:1725259684,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{title:"Performance",id:"performance"},sidebar:"reference",previous:{title:"Alteration",permalink:"/docs/reference/alteration"},next:{title:"Conditions",permalink:"/docs/reference/conditions"}},o={},p=[{value:"Tempo",id:"tempo",level:2},{value:"resetCycles / setCycle",id:"resetcycles--setcycle",level:3},{value:"setcps",id:"setcps",level:3},{value:"trigger",id:"trigger",level:3},{value:"qtrigger",id:"qtrigger",level:3},{value:"qt",id:"qt",level:3},{value:"mtrigger",id:"mtrigger",level:3},{value:"mt",id:"mt",level:3},{value:"triggerWith",id:"triggerwith",level:3},{value:"Tracks",id:"tracks",level:2},{value:"all",id:"all",level:2},{value:"once",id:"once",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will present you all the functions that will be useful during the performance: tempo management, reset, etc... Each function will be presented following the same model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,r.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,r.kt)("h2",{id:"tempo"},"Tempo"),(0,r.kt)("h3",{id:"resetcycles--setcycle"},"resetCycles / setCycle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: resetCycles :: IO ()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resetCycles")," is a global function that resets the cycle count back to 0.\n",(0,r.kt)("inlineCode",{parentName:"p"},"setCycle")," will start at a given cycle number."),(0,r.kt)("p",null,"This is useful to make sure a pattern or set of patterns start from the beginning:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d1 $ s "bd hh hh hh"\n  d2 $ s "ade" # cut 1\n\ndo\n  setCycle 5\n  d1 $ n "6 2 0 8" # s "east" \n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Cycle count affects all patterns, so if there are any active, all of them will immediately jump to the beginning, which can create a strange jump in the sound (but can be used purposely, too)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resetCycles")," is also useful in ",(0,r.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/configuration/multiuser-tidal/#tidal-instances-dont-automatically-have-the-same-cycle"},"Multi-user Tidal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getnow")," will show the current cycle number position. "))),(0,r.kt)("h3",{id:"setcps"},"setcps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: setcps :: Pattern Double -> IO ()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setcps")," is a global function that adjusts the number of cycles per second. This function can accept integers, decimals, and fractions."),(0,r.kt)("p",null,"The default number of cycles per second is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5625"),", which is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"135/60/4"),"."),(0,r.kt)("p",null,"These two values are equivalent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cycles per second"),": as a decimal, ",(0,r.kt)("inlineCode",{parentName:"li"},"setcps 0.5625"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cycles per second"),": as a fraction, ",(0,r.kt)("inlineCode",{parentName:"li"},"setcps (135/60/4)"))),(0,r.kt)("p",null,"Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of ",(0,r.kt)("inlineCode",{parentName:"p"},"120-140 bpm"),". House has a range of ",(0,r.kt)("inlineCode",{parentName:"p"},"115-130 bpm"),". And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Set cps to be a fast house beat\nsetcps (130/60/4)\n")),(0,r.kt)("p",null,"Regarding the example above, the first part of the fraction ",(0,r.kt)("inlineCode",{parentName:"p"},"(130/60)")," says there will be ",(0,r.kt)("inlineCode",{parentName:"p"},"130")," beats per minute. ",(0,r.kt)("inlineCode",{parentName:"p"},"130")," is the number of beats and ",(0,r.kt)("inlineCode",{parentName:"p"},"60")," is the length of the minute (",(0,r.kt)("inlineCode",{parentName:"p"},"60")," seconds). The second part of the fraction (",(0,r.kt)("inlineCode",{parentName:"p"},"/4"),") says that for every cycle in tidal there will be ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," beats. You can adjust this value to change how quickly your cycles run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- The following two examples are equivalent\n-- Example 1: 4 beats per cycles\nsetcps (130/60/4)\n\nd1 $ n "1" # s "kick kick kick kick"\n\n-- Example 2: 1 beat per cycle\nsetcps (130/60/1)\n\nd1 $ n "1" # s "kick"\n')),(0,r.kt)("h3",{id:"trigger"},"trigger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: trigger :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"Align the start of a pattern with the time a pattern is evaluated, rather than the global start time. Because of this, the pattern will probably not be aligned to the pattern grid."),(0,r.kt)("p",null,"In this example, try to trigger pattern 2 at different moments while pattern 1 is playing and observe the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd sn bd sn"\n\nd2 $ trigger $ s "clap*2"\n')),(0,r.kt)("h3",{id:"qtrigger"},"qtrigger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: qtrigger :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"Quantise trigger. Aligns the start of the pattern with the next cycle boundary. For example, this pattern will fade in starting with the next cycle after the pattern is evaluated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ qtrigger $ s "hh(5, 8)" # amp envL\n')),(0,r.kt)("p",null,"Note that the pattern will start playing immediately. The start of the pattern aligns with the next cycle boundary, but events will play before if the pattern has events at negative timestamps (which most loops do). These events can be filtered out, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ qtrigger $ filterWhen (>= 0) $ s "bd hh hh hh"\n')),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("a",{parentName:"p",href:"/reference/transitions/#wait-1"},"wait")," to achieve the same result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'wait 1 1 $ s "bd hh hh hh"\n')),(0,r.kt)("h3",{id:"qt"},"qt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: qt :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"This is simply an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrigger"),"."),(0,r.kt)("h3",{id:"mtrigger"},"mtrigger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: mtrigger :: Int -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"Mod trigger. Aligns the start of a pattern to the next cycle boundary where the cycle is evenly divisible by a given number. ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrigger")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"mtrigger 1"),"."),(0,r.kt)("p",null,"In the following example, when activating the ",(0,r.kt)("inlineCode",{parentName:"p"},"d1")," pattern, it will start at the same time as the next clap, even if it has to wait for 3 cycles. Once activated, the ",(0,r.kt)("inlineCode",{parentName:"p"},"arpy")," sound will play on every cycle, just like any other pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d2 $ every 4 (# s "clap") $ s "bd"\n\nd1 $ mtrigger 4 $ filterWhen (>=0) $ s "arpy"\n')),(0,r.kt)("h3",{id:"mt"},"mt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: mt :: Int -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"This is simply an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"mtrigger"),"."),(0,r.kt)("h3",{id:"triggerwith"},"triggerWith"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: triggerWith :: (Time -> Time) -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"This aligns the start of a pattern to some value relative to the time the pattern is evaluated. The provided function maps the evaluation time (on the global cycle clock) to a new time, and then ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerWith")," aligns the pattern's start to the time that's returned."),(0,r.kt)("p",null,"This is a more flexible triggering function. In fact, all the other trigger functions are defined based on ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerWith"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," is just ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerWith id"),"."),(0,r.kt)("p",null,"In the next example, use ",(0,r.kt)("inlineCode",{parentName:"p"},"d1")," as a metronome, and play with different values (from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),") on the ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," expression. You'll notice how the ",(0,r.kt)("inlineCode",{parentName:"p"},"clap")," is displaced from the beginning of each cycle to the end, as the number increases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd hh!3"\n\nd2 $ triggerWith (const 0.1) $ s "clap"\n')),(0,r.kt)("p",null,"This last example is equivalent to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ rotR 0.1 $ s "clap"\n')),(0,r.kt)("h2",{id:"tracks"},"Tracks"),(0,r.kt)("h2",{id:"all"},"all"),(0,r.kt)("h2",{id:"once"},"once"))}m.isMDXComponent=!0}}]);