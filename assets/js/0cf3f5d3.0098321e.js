"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(3117),a=(r(7294),r(3905));const i={id:"tidal_start",title:"Start Tidal"},o=void 0,s={unversionedId:"getting-started/tidal_start",id:"getting-started/tidal_start",title:"Start Tidal",description:"----",source:"@site/docs/getting-started/tidal_start.md",sourceDirName:"getting-started",slug:"/getting-started/tidal_start",permalink:"/docs/getting-started/tidal_start",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/tidal_start.md",tags:[],version:"current",lastUpdatedAt:1681342712,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"tidal_start",title:"Start Tidal"},sidebar:"docs",previous:{title:"Windows",permalink:"/docs/getting-started/windows_install"},next:{title:"Upgrading",permalink:"/docs/getting-started/upgrading"}},l={},d=[{value:"Launching Tidal",id:"launching-tidal",level:2},{value:"Start SuperCollider and SuperDirt",id:"start-supercollider-and-superdirt",level:3},{value:"From the IDE",id:"from-the-ide",level:4},{value:"Boot SuperDirt everytime SuperCollider starts",id:"boot-superdirt-everytime-supercollider-starts",level:5},{value:"From the command line (for experienced users)",id:"from-the-command-line-for-experienced-users",level:4},{value:"Start Tidal Cycles",id:"start-tidal-cycles",level:3}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Tidal Cycles is not a big monolithic software. It is better to think about it as an interconnexion between several components: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A Pattern Library",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(1) Your ",(0,a.kt)("strong",{parentName:"li"},"text editor")),(0,a.kt)("li",{parentName:"ul"},"(2) The ",(0,a.kt)("strong",{parentName:"li"},"interpreter")," (Haskell) "))),(0,a.kt)("li",{parentName:"ol"},"An audio engine",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(1) ",(0,a.kt)("strong",{parentName:"li"},"SuperDirt")," for receiving messages and turning them to sound."),(0,a.kt)("li",{parentName:"ul"},"(2) ",(0,a.kt)("strong",{parentName:"li"},"SuperCollider"),", sending sound out.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Tidal Lasagna",src:r(1114).Z,width:"369",height:"162"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"launching-tidal"},"Launching Tidal"),(0,a.kt)("p",null,"There will always be two steps to launch Tidal:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start ",(0,a.kt)("strong",{parentName:"li"},"SuperCollider")," and then ",(0,a.kt)("strong",{parentName:"li"},"SuperDirt")," inside of it."),(0,a.kt)("li",{parentName:"ol"},"Start ",(0,a.kt)("strong",{parentName:"li"},"Tidal Cycles")," from your text editor.")),(0,a.kt)("p",null,"This page will explain you how to do so. It will also teach you to automate these tasks so you won't have to repeat the setup part again and again \ud83d\ude04."),(0,a.kt)("h3",{id:"start-supercollider-and-superdirt"},"Start SuperCollider and SuperDirt"),(0,a.kt)("h4",{id:"from-the-ide"},"From the IDE"),(0,a.kt)("p",null,"The most minimalistic command you could use to start ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," is the following one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"SuperDirt.start;\n")),(0,a.kt)("p",null,"However, this command will start the engine using the ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider")," default ",(0,a.kt)("em",{parentName:"p"},"server options"),". It might not be the best solution. Depending on your needs, you might want to adapt to a specific audio configuration. You might also want to load more (or less) samples and finetune the memory or the latency of the audio server. "),(0,a.kt)("p",null,"For a more ",(0,a.kt)("em",{parentName:"p"},"fine-tuned")," startup configuration, take a look ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/musikinformatik/SuperDirt/develop/superdirt_startup.scd"},"at this script")," (also visible below)."),(0,a.kt)("p",null,"Evaluate the script or the line by selecting the text in the editor and pressing Ctrl/Cmd+Enter. You should see the following line in the logs after a few seconds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"SuperDirt: listening to Tidal on port 57120\n")),(0,a.kt)("p",null,"You can now launch Tidal Cycles from your text editor and make music."),(0,a.kt)("h5",{id:"boot-superdirt-everytime-supercollider-starts"},"Boot SuperDirt everytime SuperCollider starts"),(0,a.kt)("p",null,"Open SuperCollider. Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"File > Open startup file"),". Paste the following text-file in the new buffer that just appeared:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/*\nThis is an example startup file. You can load it from your startup file\n(to be found in Platform.userAppSupportDir +/+ "startup.scd")\n*/\n\n(\ns.reboot { // server options are only updated on reboot\n    // configure the sound server: here you could add hardware specific options\n    // see http://doc.sccode.org/Classes/ServerOptions.html\n    s.options.numBuffers = 1024 * 256; // increase this if you need to load more samples\n    s.options.memSize = 8192 * 32; // increase this if you get "alloc failed" messages\n    s.options.numWireBufs = 64; // increase this if you get "exceeded number of interconnect buffers" messages \n    s.options.maxNodes = 1024 * 32; // increase this if you are getting drop outs and the message "too many nodes"\n    s.options.numOutputBusChannels = 2; // set this to your hardware output channel size, if necessary\n    s.options.numInputBusChannels = 2; // set this to your hardware output channel size, if necessary\n    // boot the server and start SuperDirt\n    s.waitForBoot {\n        ~dirt = SuperDirt(2, s); // two output channels, increase if you want to pan across more channels\n        ~dirt.loadSoundFiles;   // load samples (path containing a wildcard can be passed in)\n        // for example: ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*");\n        // s.sync; // optionally: wait for samples to be read\n        ~dirt.start(57120, 0 ! 12);   // start listening on port 57120, create two busses each sending audio to channel 0\n\n        // optional, needed for convenient access from sclang:\n        (\n            ~d1 = ~dirt.orbits[0]; ~d2 = ~dirt.orbits[1]; ~d3 = ~dirt.orbits[2];\n            ~d4 = ~dirt.orbits[3]; ~d5 = ~dirt.orbits[4]; ~d6 = ~dirt.orbits[5];\n            ~d7 = ~dirt.orbits[6]; ~d8 = ~dirt.orbits[7]; ~d9 = ~dirt.orbits[8];\n            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];\n        );\n    };\n\n    s.latency = 0.3; // increase this if you get "late" messages\n};\n);\n')),(0,a.kt)("p",null,"Save the file, and ",(0,a.kt)("em",{parentName:"p"},"voil\xe0"),"! SuperCollider will always boot ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," as soon as the program is launched. As you can see, this script is also showing you how to load custom audio samples, and how to deal with multichannel sound."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You will find an up-to-date version of the script ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/musikinformatik/SuperDirt/develop/superdirt_startup.scd"},"here"),".")),(0,a.kt)("h4",{id:"from-the-command-line-for-experienced-users"},"From the command line (for experienced users)"),(0,a.kt)("p",null,"Alternatively, you can start ",(0,a.kt)("inlineCode",{parentName:"p"},"sclang")," from the terminal to get an interactive prompt without having to launch the ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider")," IDE. "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"start-tidal-cycles"},"Start Tidal Cycles"),(0,a.kt)("p",null,"We will assume that you are working with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/editor/Pulsar"},"Pulsar")," editor (previously, Atom) for now. For specific instructions concerning the text editor of your choice, take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Get a Text Editor")," submenu in the sidebar that will contain more detailled instruction."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start Pulsar"),(0,a.kt)("li",{parentName:"ol"},"Create a new file and save it with a filename that ends in ",(0,a.kt)("inlineCode",{parentName:"li"},".tidal"),",\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"test.tidal"),")."),(0,a.kt)("li",{parentName:"ol"},"open the Packages menu and select ",(0,a.kt)("inlineCode",{parentName:"li"},"TidalCycles -> Boot\nTidal Cycles"),". A small window will open at the bottom of the window\ncontaining the ",(0,a.kt)("inlineCode",{parentName:"li"},"t>")," prompt (and ",(0,a.kt)("em",{parentName:"li"},"hopefully")," no error messages).")),(0,a.kt)("p",null,"Let's try it! Type the following pattern in the text editor and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift+Enter")," to evaluate it (",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Enter")," will evaluate multiple lines):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn"\n')),(0,a.kt)("p",null,"If you hear sound, congratulations \ud83d\udc4d ! If you get stuck, you are welcome to ask questions and share problems on the forum, the ",(0,a.kt)("a",{parentName:"p",href:"https://chat.toplap.org/channel/tidal"},"RocketChat")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/CqWhZEfNbq"},"Discord")," group. Something must be misconfigured or missing from your Tidal system!"),(0,a.kt)("p",null,"As is common with free software, you have alternative choices for the\ndifferent components that make up a Tidal Cycles system. ",(0,a.kt)("strong",{parentName:"p"},"Pulsar")," and\n",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," might be all you ever need, but there are other editors and\nsynths you can use. Take a look at the sidebar to see the alternatives."))}u.isMDXComponent=!0},1114:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tidallasagna-bfb734217670bfaed842b1b33ad16ba3.png"}}]);