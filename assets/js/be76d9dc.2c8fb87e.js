"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?l.createElement(h,i(i({ref:t},d),{},{components:a})):l.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=a(3117),n=(a(7294),a(3905));const r={title:"Pulsar",permalink:"wiki/Pulsar/",layout:"wiki",id:"Pulsar"},i=void 0,o={unversionedId:"getting-started/editor/Pulsar",id:"getting-started/editor/Pulsar",title:"Pulsar",description:"----",source:"@site/docs/getting-started/editor/Pulsar.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Pulsar",permalink:"/docs/getting-started/editor/Pulsar",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Pulsar.md",tags:[],version:"current",lastUpdatedAt:1682960761,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Pulsar",permalink:"wiki/Pulsar/",layout:"wiki",id:"Pulsar"},sidebar:"docs",previous:{title:"Atom",permalink:"/docs/getting-started/editor/Atom"},next:{title:"Vim and Neovim",permalink:"/docs/getting-started/editor/Vim"}},s={},u=[{value:"Install Pulsar and Tidalcycles package",id:"install-pulsar-and-tidalcycles-package",level:2},{value:"Manual Installation of Tidalcycles package",id:"manual-installation-of-tidalcycles-package",level:2},{value:"Install the node.js modules for tidalcycles",id:"install-the-nodejs-modules-for-tidalcycles",level:3},{value:"Install nvm (node version manager - used to install and manage npm)",id:"install-nvm-node-version-manager---used-to-install-and-manage-npm",level:4},{value:"Install the tidalcycle node modules",id:"install-the-tidalcycle-node-modules",level:4},{value:"Validate results",id:"validate-results",level:4},{value:"Configure Pulsar",id:"configure-pulsar",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"More about the Tidalcycles Package",id:"more-about-the-tidalcycles-package",level:2},{value:"Forum discussion",id:"forum-discussion",level:3},{value:"GitHub repository",id:"github-repository",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pulsaricon",src:a(9378).Z,width:"200",height:"200"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar")," is a code editor that is open-source and community-led. It is based on Atom and was started after the announcement to ",(0,n.kt)("a",{parentName:"p",href:"https://github.blog/2022-06-08-sunsetting-atom/"},"Sunset Atom"),". Pulsar has a Package Manager which provides for community contributions, including our Tidalcycles package."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UPDATE - Jan 1, 2023"),": The Pulsar Package Manager now is fully operational with the Tidalcycles package. Once Pulsar is installed, installation and updates for tidalcycles can be managed within Pulsar. There is no longer a need for manual package install. "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"install-pulsar-and-tidalcycles-package"},"Install Pulsar and Tidalcycles package"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download from the ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/download.html"},"Pulsar download page"),"."),(0,n.kt)("li",{parentName:"ol"},"(MacOS): Set attributes on Pulsar.app   (see the Pulsar download page for details)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"xattr -cr /Applications/Pulsar.app/\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Start Pulsar application"),(0,n.kt)("li",{parentName:"ol"},"Load Package Manager: from Menu > Packages > Open Package Manager ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select Install tab"),(0,n.kt)("li",{parentName:"ul"},'search for "tidalcycles"'),(0,n.kt)("li",{parentName:"ul"},"select install ")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Known issues"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"macOS performance:")," this may be resolved by disabling the ",(0,n.kt)("inlineCode",{parentName:"li"},"github")," package"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"macOS dmg install:"),' Current binaries are not signed. Launching Pulsar will produce an error "Pulsar cannot be opened because the developer cannot be verified". Workaround: see above')),(0,n.kt)("p",null,"Other issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Auto-complete with default settings can be slower and more intrusive for livecoding. Possble workarounds:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"autocomplete-plus package:"),' increase "Delay Before Suggestions are Shown": to 100 or 1000.'),(0,n.kt)("li",{parentName:"ul"},"disable the autocomplete-plus package")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Discord #pulsar channel"),": ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/779427371270275082/1047429699346903132"},"https://discord.com/channels/779427371270275082/1047429699346903132")),(0,n.kt)("hr",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"manual-installation-of-tidalcycles-package"},"Manual Installation of Tidalcycles package"),(0,n.kt)("p",null,"In most circumstances manual installation of tidalcycles package in Pulsar should be avoided. Please use the Package Manager within Pulsar.\nIf there is a requirement for manual installation, or if installation via Package Manager repeatedly fails, below are manual steps that apply to MacOS and Linux. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/pulsar-tidalcycles"},"pulsar-tidalcycles on github"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start Pulsar: This will create a hidden folder in your home directory ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pulsar"),"."),(0,n.kt)("li",{parentName:"ul"},"From a command line using ",(0,n.kt)("inlineCode",{parentName:"li"},"git"),": (make sure you have launched the Pulsar application). This will install the tidalcycles package into ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pulsar/packages/tidalcycles/"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> cd ~/.pulsar/packages\n> git clone https://github.com/tidalcycles/pulsar-tidalcycles tidalcycles\n")),(0,n.kt)("h3",{id:"install-the-nodejs-modules-for-tidalcycles"},"Install the node.js modules for tidalcycles"),(0,n.kt)("p",null,"Pre-requisite: npm (node package manager)"),(0,n.kt)("h4",{id:"install-nvm-node-version-manager---used-to-install-and-manage-npm"},"Install nvm (node version manager - used to install and manage npm)"),(0,n.kt)("p",null,'If npm is already installed, you can skip these steps and go to: "Install the tidalcycles node modules."'),(0,n.kt)("p",null,"The recommended method to install npm is via the node version manager."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"NPM Docs")," for options and instructions."),(0,n.kt)("li",{parentName:"ul"},"Or go directly to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm install script")," in GH. It has lots of detail, troubleshooting, and support for different OS, etc. See the section on Installing and Updating. The ",(0,n.kt)("inlineCode",{parentName:"li"},"curl")," option is good.  "),(0,n.kt)("li",{parentName:"ul"},"The nvm install script will add lines to your shell profile (.bash_profile, ~/.zshrc, ~/.bashrc etc). This can result in a short delay when starting the shell."),(0,n.kt)("li",{parentName:"ul"},"run ",(0,n.kt)("inlineCode",{parentName:"li"},"command -v nvm")," to verify nvm install - expected output ",(0,n.kt)("inlineCode",{parentName:"li"},"nvm"),"."),(0,n.kt)("li",{parentName:"ul"},"now use nvm to install npm:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> nvm install node\n")),(0,n.kt)("h4",{id:"install-the-tidalcycle-node-modules"},"Install the tidalcycle node modules"),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"npm")," you now run the npm install command. This will install the node modules needed by the tidalcycles plugin. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> cd ~/.pulsar/packages/tidalcycles\n[userHome]/.pulsar/packages/tidalcycles > npm install\n")),(0,n.kt)("h4",{id:"validate-results"},"Validate results"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The node modules directory should be present: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pulsar/packages/tidalcycles/node_modules/")),(0,n.kt)("li",{parentName:"ul"},"There should be three sub-directories: ",(0,n.kt)("inlineCode",{parentName:"li"},"binpack")," ",(0,n.kt)("inlineCode",{parentName:"li"},"directory-tree")," ",(0,n.kt)("inlineCode",{parentName:"li"},"osc-min")),(0,n.kt)("li",{parentName:"ul"},"Restart the Pulsar app."),(0,n.kt)("li",{parentName:"ul"},"Create a Tidal file (file extension *.tidal) and run a command. See the ",(0,n.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/getting-started/tidal_start"},"Start Tidal page")," for more instructions if you are new to Tidal.")),(0,n.kt)("h3",{id:"configure-pulsar"},"Configure Pulsar"),(0,n.kt)("p",null,"Pulsar works just like Atom. To configure and change preferences:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main menu: Pulsar > Preferences  (will load the Settings tab)"),(0,n.kt)("li",{parentName:"ul"},"Select: Packages > Community Packages > tidalcycles > Settings"),(0,n.kt)("li",{parentName:"ul"},"optional: Set your Sound Browser Folders - if you add the full path to your SuperCollider - Dirt-Samples, then you can easily browse and play these from Pulsar once you start tidal."),(0,n.kt)("li",{parentName:"ul"},"MacOS (optional): disable the GitHub package. There is a known performance issue on MacOS. See ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"https://pulsar-edit.dev/"))),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Potential errors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Couldn't find module:  'Sound.Tidal.Context'"),"  This indicates that Pulsar could not load tidal properly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Variable not in scope: streamSetCycle"),'  Your "BootTidal.hs" file version is not compatible with the tidal version. There is an easy fix by commenting out this line: ',(0,n.kt)("inlineCode",{parentName:"li"},"-- setCycle = streamSetCycle tidal"),". But it would be best to resolve the version compatibility issue. ")),(0,n.kt)("h2",{id:"more-about-the-tidalcycles-package"},"More about the Tidalcycles Package"),(0,n.kt)("h3",{id:"forum-discussion"},"Forum discussion"),(0,n.kt)("p",null,"The Tidal Package for Pulsar is developed by ",(0,n.kt)("inlineCode",{parentName:"p"},"ndr_brt")," - who completed made this available in the new Pulsar package manager. There is a ",(0,n.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/the-atom-plugin-thread/2244"},"Tidal Club forum thread")," with more information and history of the development."),(0,n.kt)("h3",{id:"github-repository"},"GitHub repository"),(0,n.kt)("p",null,"There is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/pulsar-tidalcycles"},"GitHub repository")," if you want to contribute, report an issue or follow the development."))}c.isMDXComponent=!0},9378:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/pulsaricon-180f9ce007553b403b723e7f049ba57d.png"}}]);