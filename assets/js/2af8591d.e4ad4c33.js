"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var a=n(3117),o=(n(7294),n(3905));const r={title:"Audio Outputs",id:"audio_outputs"},i=void 0,u={unversionedId:"configuration/AudioConfig/audio_outputs",id:"configuration/AudioConfig/audio_outputs",title:"Audio Outputs",description:"Separate audio channels",source:"@site/docs/configuration/AudioConfig/audio_configuration.md",sourceDirName:"configuration/AudioConfig",slug:"/configuration/AudioConfig/audio_outputs",permalink:"/docs/configuration/AudioConfig/audio_outputs",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/AudioConfig/audio_configuration.md",tags:[],version:"current",lastUpdatedAt:1681342712,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"Audio Outputs",id:"audio_outputs"},sidebar:"docs",previous:{title:"Where to find samples?",permalink:"/docs/configuration/AudioSamples/find_samples"},next:{title:"Build Arpeggios",permalink:"/docs/patternlib/howtos/buildarpeggios"}},s={},l=[{value:"Separate audio channels",id:"separate-audio-channels",level:2},{value:"Multichannel sound",id:"multichannel-sound",level:2},{value:"Hack the audio",id:"hack-the-audio",level:2},{value:"Audio mixing and mastering",id:"audio-mixing-and-mastering",level:2},{value:"StageMaster",id:"stagemaster",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"separate-audio-channels"},"Separate audio channels"),(0,o.kt)("p",null,"Lets say you wanted to make a multi-track recording, with different patterns playing at the same time, but recorded separately.. Or wanted to route the audio from some patterns into external effects processor. How is this possible? Tidal's audio engine is (most often) ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt"),", and the key to routing audio channels is understanding how to configure and use orbits. You can think of each orbit as an audio output, with its own set of global effects (by default, reverb and delay)."),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt's documentation"),", in particular the example\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd"},"superdirt_startup.scd"),"\nfile. You'll want to paste the setup code into the ",(0,o.kt)("strong",{parentName:"p"},"SuperCollider")," editor\nwindow. If you save it in your ",(0,o.kt)("strong",{parentName:"p"},"SuperCollider")," startup file it will\nautomatically run when you open ",(0,o.kt)("strong",{parentName:"p"},"SuperCollider")," - you can find that file\nvia the menus."),(0,o.kt)("p",null,"There are probably only two bits that you will want to change in the\nsetup code. If you wanted six stereo outputs, that would require ",(0,o.kt)("inlineCode",{parentName:"p"},"12"),"\nchannels in total, so you would set the number of output bus channels\naccordingly, i.e.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"s.options.numOutputBusChannels = 12;\n")),(0,o.kt)("p",null,"You assign the orbits to separate stereo channels by offsetting each\none, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"~dirt.start(57120, [0, 2, 4, 6, 8, 10]);\n")),(0,o.kt)("p",null,"You might also be tempted to change the number in this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"~dirt = SuperDirt(2, s);\n")),(0,o.kt)("p",null,"However if you want to work in stereo, you should keep this number to 2,\ni.e. the number of channels per orbit."),(0,o.kt)("p",null,"If your editor plugin (and therefore ",(0,o.kt)("inlineCode",{parentName:"p"},"BootTidal.hs"),"), then\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"d1")," will automatically be sent to orbit 0, ",(0,o.kt)("inlineCode",{parentName:"p"},"d2")," to orbit 1, and so on. Or you can be explicit by using the orbit control, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd" # orbit 3\n')),(0,o.kt)("p",null,"You're now free to route the audio to a DAW for e.g. effects processing\nor recording, or record all the channels straight from ",(0,o.kt)("strong",{parentName:"p"},"SuperCollider"),"\ninto a single multichannel file. "),(0,o.kt)("h2",{id:"multichannel-sound"},"Multichannel sound"),(0,o.kt)("p",null,"In general, we deal with stereo sound, i.e. we use two speakers and ",(0,o.kt)("strong",{parentName:"p"},"pan")," between them. Sometimes it's nice to work with four or more speakers though, and enjoy that surround sound experience. We set up for multichannel sound in a similar way to how we do ","[separate audio outputs]","(##Separate audio channels). With separate outputs we are probably sending multiple stereo outputs though, whereas with multichannel sound we generally send one output, but with multiple channels."),(0,o.kt)("p",null,"Here's an example supercollider startup file, for panning across four channels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"(\ns.options.numBuffers = 1024 * 256;\ns.options.memSize = 8192 * 16;\ns.options.maxNodes = 1024 * 32;\ns.options.numOutputBusChannels = 4; // total number of channels output \ns.options.numInputBusChannels = 2;\n\ns.waitForBoot {\n~dirt = SuperDirt(4, s); // pan across four channels\n~dirt.loadSoundFiles;\n~dirt.start(57120, [0, 0, 0, 0, 0, 0]);\n};\ns.latency = 0.3;\n);\n")),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt"),"'s documentation for more details, in particular the example ",(0,o.kt)("inlineCode",{parentName:"p"},"superdirt_startup.scd")," file."),(0,o.kt)("p",null,"This line sets the number of output channels coming from supercollider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"s.options.numOutputBusChannels = 4; // total number of channels output \n")),(0,o.kt)("p",null,"This sets the number of channels to pan across. For multichannel sound, this will generally be the same number as above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"~dirt = SuperDirt(4, s); // pan across four channels\n")),(0,o.kt)("p",null,"Each 0 in the below represents one orbit, giving us six orbits. You probably want to keep these as zeroes, so every orbit starts from the first channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"~dirt.start(57120, [0, 0, 0, 0, 0, 0]);\n")),(0,o.kt)("p",null,"That's it! You can save this code in your supercollider startup file (which you can find via the supercollider menus) so you don't have to run it manually when you start supercollider."),(0,o.kt)("p",null,"Then to use it, you can use things like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*16" # pan saw\n')),(0,o.kt)("p",null,"The above will play kick drums in a ring around all the speakers. If you had four speakers, by default they'd be in position ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.25"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"0.75"),". Therefore ",(0,o.kt)("inlineCode",{parentName:"p"},"0.125")," would be halfway between the first two speakers, and ",(0,o.kt)("inlineCode",{parentName:"p"},"0.875")," would be halfway between the first and last speakers. Once you get up to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", you're back to the first speaker again."),(0,o.kt)("p",null,"Because ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," are the same speaker, the jux function doesn't work well (as it will play the original pattern in position ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", and the transformed pattern on pan position ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", which in multichannel sound, are the same speaker. Instead, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"juxBy 0.5")," , or ",(0,o.kt)("inlineCode",{parentName:"p"},"jux'"),", which distributes a list of functions across a multichannel ring."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ juxBy 0.5 rev $ sound "bd cp sn:2 mt*2" # pan saw\n\nd1 $ jux\' [id, rev] $ sound "bd cp sn:2 mt*2" # pan saw\n\nd1 $ jux\' [id, rev, fast 2] $ sound "bd cp sn:2 mt*2" # pan saw\n')),(0,o.kt)("h2",{id:"hack-the-audio"},"Hack the audio"),(0,o.kt)("p",null,"Have a look around the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/tree/master/hacks"},"SuperDirt hacks\nfolder"),"\nfor more fun with orbits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Orbit routing"),(0,o.kt)("li",{parentName:"ul"},"Sound spatialisation"),(0,o.kt)("li",{parentName:"ul"},"Audio looping"),(0,o.kt)("li",{parentName:"ul"},"Adding global / local effects")),(0,o.kt)("h2",{id:"audio-mixing-and-mastering"},"Audio mixing and mastering"),(0,o.kt)("h3",{id:"stagemaster"},"StageMaster"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/calumgunn/StageMaster"},"StageMaster"),", made by Calum Gunn, is a light mastering chain for use during live coding performance in ",(0,o.kt)("strong",{parentName:"p"},"SuperCollider"),". It adds light compression, EQ and limiting to all output."))}d.isMDXComponent=!0}}]);