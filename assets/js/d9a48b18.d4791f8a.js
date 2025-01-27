"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const r={title:"Sample trimming",id:"sample_trimming"},i=void 0,o={unversionedId:"reference/sample_trimming",id:"reference/sample_trimming",title:"Sample trimming",description:"By default, samples play from start to end when triggered. This page presents many functions that allow to trim the samples inside TidalCycles.",source:"@site/docs/reference/sample_trimming.md",sourceDirName:"reference",slug:"/reference/sample_trimming",permalink:"/docs/reference/sample_trimming",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/sample_trimming.md",tags:[],version:"current",lastUpdatedAt:1738015620,formattedLastUpdatedAt:"Jan 27, 2025",frontMatter:{title:"Sample trimming",id:"sample_trimming"}},s={},p=[{value:"Absolute",id:"absolute",level:2},{value:"sustain",id:"sustain",level:3},{value:"Event-relative",id:"event-relative",level:2},{value:"cut",id:"cut",level:3},{value:"legato",id:"legato",level:3},{value:"Relative to the sample length",id:"relative-to-the-sample-length",level:2},{value:"begin",id:"begin",level:3},{value:"end",id:"end",level:3},{value:"grain",id:"grain",level:3},{value:"grain&#39;",id:"grain-1",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By default, samples play from start to end when triggered. This page presents many functions that allow to trim the samples inside TidalCycles."),(0,l.kt)("p",null,"Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"absolute"},"Absolute"),(0,l.kt)("p",null,"This function allows us to indicate the sample duration in seconds."),(0,l.kt)("h3",{id:"sustain"},"sustain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: sustain :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"A pattern of numbers that indicates the total duration of sample playback in seconds."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This ",(0,l.kt)("inlineCode",{parentName:"p"},"sustain")," refers to the whole playback duration, and is not to be confused with the sustain level of a typical ADSR envelope.\nIt's also not to be confused with ",(0,l.kt)("inlineCode",{parentName:"p"},"legato"),", which modifies the playback duration relative to the event duration.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ s "breaks125:1" # cps (120/60/4) # sustain 1\n')),(0,l.kt)("p",null,"At 120 BPM, a cycle lasts for two seconds. In the above example, we cut the sample so it plays just for one second, and repeat this part two times, so we fill the whole cycle. Note that sample pitch isn't modified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "breaks125:2!3" # cps (120/60/4) # sustain "0.4 0.2 0.4" # begin "0 0 0.4"\n')),(0,l.kt)("h2",{id:"event-relative"},"Event-relative"),(0,l.kt)("p",null,"The following functions allow us to deal with sample overlaps."),(0,l.kt)("h3",{id:"cut"},"cut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: cut :: Pattern Int -> ControlPattern\n")),(0,l.kt)("p",null,"In the style of classic drum-machines, ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," will stop a playing sample as soon as another sample with in same cutgroup is to be played. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ sound "ho:4 hc ho:4 hc" # cut 1\n')),(0,l.kt)("p",null,'makes the pattern sound more realistic, by "choking" the open hi-hat when the closed one plays. '),(0,l.kt)("h3",{id:"legato"},"legato"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: legato :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"legato")," modifies the note length relative to the event length. When its value is 1, is equivalent to stopping the sample when the next event (whether it is a sample or a silence), is triggered. Notice the difference between"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax ~ ~ sax ~ ~ sax ~" # legato 1\n')),(0,l.kt)("p",null,"and"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax ~ ~ sax ~ ~ sax ~" # cut 1\n')),(0,l.kt)("p",null,"Also, notice how these two lines are equivalent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax ~" # legato 1\nd1 $ sound "sax" # legato 0.5\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Not to be confused with ",(0,l.kt)("inlineCode",{parentName:"p"},"sustain"),", which gives playback of a sample a duration in seconds.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you come from a classical music background, these two terms will probably sound conterintuitive, as there ",(0,l.kt)("em",{parentName:"p"},"legato")," indicates that notes are to be played smoothly and connected, without silences, and that's what ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," does in Tidal. You could think about the number after ",(0,l.kt)("inlineCode",{parentName:"p"},"legato")," as the quantity of ",(0,l.kt)("em",{parentName:"p"},"tenuto")," or each sample has. However, if it ",(0,l.kt)("strong",{parentName:"p"},"really")," bothers you, you can change your ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/configuration/boot-tidal/"},"Boot File")," by appending the lines ",(0,l.kt)("inlineCode",{parentName:"p"},'tenuto = pF "legato"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},'legato = pI "cut"')," in one of the ",(0,l.kt)("inlineCode",{parentName:"p"},":{:}")," blocks.")),(0,l.kt)("h2",{id:"relative-to-the-sample-length"},"Relative to the sample length"),(0,l.kt)("p",null,"These functions let us trim each sample by specifying on which part Tidal begins and/or ends playing it."),(0,l.kt)("h3",{id:"begin"},"begin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: begin :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"begin")," receives a pattern of numbers from 0 to 1. It cuts off the beginning of each sample. The numbers indicate how much of each sample will be skipped, relative to its length (",(0,l.kt)("inlineCode",{parentName:"p"},"0")," would play the sample from the start, ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," would skip the whole sample, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.25")," would cut off the first quarter from each sample). For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # legato 1\n')),(0,l.kt)("p",null,"In the above example, the sample is started from the half of its total length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 1 2" # s "ade" # begin "<0 0.25 0.5 0.75>" # legato 1\n')),(0,l.kt)("p",null,"In this other example, the first ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ade")," samples are played on every cycle, but the start point from which they are played changes on each cycle."),(0,l.kt)("h3",{id:"end"},"end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: end :: Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"The same as ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", but cuts off the end of samples. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.75")," will cut off the last quarter of each sample."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # end 0.65\n')),(0,l.kt)("p",null,"This will play only a small part of the sample: from ",(0,l.kt)("inlineCode",{parentName:"p"},"50%")," its length to ",(0,l.kt)("inlineCode",{parentName:"p"},"65%")," its length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" >| begin 0.5 >| end "[0.65 0.55]"\n')),(0,l.kt)("p",null,"The example above will play the sample two times for cycle, but the second time will play a shorter segment than the first time, creating some kind of canon effect."),(0,l.kt)("h3",{id:"grain"},"grain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: grain :: Pattern Double -> Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grain")," is another way to specify what part of samples we want to play. Instead of specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),", here we write the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"length"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # grain 0.2 0.1 # legato 1\n')),(0,l.kt)("p",null,"is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1\n')),(0,l.kt)("h3",{id:"grain-1"},"grain'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: grain' :: Pattern String -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grain'")," is simply a fast shortcut to join a ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and an ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # grain\' "0.2:0.3" # legato 1\n')),(0,l.kt)("p",null,"This example is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1\n')),(0,l.kt)("p",null,"Here, we take advantage that ",(0,l.kt)("inlineCode",{parentName:"p"},"sustain")," receives a pattern to build a different break from the original sample."))}u.isMDXComponent=!0}}]);