"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4457],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>h});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(l),m=n,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return l?a.createElement(h,r(r({ref:t},u),{},{components:l})):a.createElement(h,r({ref:t},u))}));function h(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=l.length,r=new Array(i);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=l[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},452:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=l(3117),n=(l(7294),l(3905));const i={title:"MacOS",permalink:"wiki/MacOS_automated_installation/",layout:"wiki"},r=void 0,s={unversionedId:"getting-started/macos_install",id:"getting-started/macos_install",title:"MacOS",description:"------",source:"@site/docs/getting-started/macos_install.md",sourceDirName:"getting-started",slug:"/getting-started/macos_install",permalink:"/docs/getting-started/macos_install",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/macos_install.md",tags:[],version:"current",lastUpdatedAt:1681342712,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"MacOS",permalink:"wiki/MacOS_automated_installation/",layout:"wiki"},sidebar:"docs",previous:{title:"Linux",permalink:"/docs/getting-started/linux_install"},next:{title:"Windows",permalink:"/docs/getting-started/windows_install"}},o={},p=[{value:"Automatic installation (script)",id:"automatic-installation-script",level:2},{value:"Install steps",id:"install-steps",level:3},{value:"Manual installation",id:"manual-installation",level:2},{value:"Installation process",id:"installation-process",level:3},{value:"Ghcup",id:"ghcup",level:4},{value:"SuperDirt",id:"superdirt",level:4},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"automatic-installation-script"},"Automatic installation (script)"),(0,n.kt)("p",null,"This install script can be used to automate installation for all components and dependencies needed by the TidalCycles system. This method is recommended if you are new to Tidal and don't already have SuperCollider and SuperDirt. If you have these or if you are well versed in managing command line installations, then use the manual installation steps below."),(0,n.kt)("p",null,"Please view the GitHub ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-bootstrap"},"README")," for details and information about supported OS versions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Silicon/M1: Not validated or tested"),(0,n.kt)("li",{parentName:"ul"},"Tested on Big Sur, Monterey\nFor other environments, certain components may not install. Follow the post installation steps below. You may need to follow manual installation steps. ")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"install-steps"},"Install steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prerequisite: Apple Xcode command line tools",(0,n.kt)("br",{parentName:"li"}),"If this is installed, you can skip this step. If you are unsure, running the command below will exit if already installed. Installation will generate multiple dialog windows, including a license agreement from Apple. It can take 20 - 30+ mins to complete.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/xcode-select --install\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"tidal-bootstrap",(0,n.kt)("br",{parentName:"li"}),"This installs the following components and only installs what is missing. (",(0,n.kt)("em",{parentName:"li"},"Tip:")," tidal-bootstrap can be run again.) The Haskell install is the longest and most complex - you will see many messages about Haskell, ghcup, cabal, etc. This can take 20 - 30+ mins.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/"},"Haskell")," Language (",(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Ghcup"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/cabal/"},"cabal"),": package system for Haskell and Tidalcycles"),(0,n.kt)("li",{parentName:"ul"},"The Tidal Pattern engine (Tidal Cycles itself), with the important BootTidal.hs file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"Pulsar"),": Text editor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/pulsar-tidalcycles"},"tidalcycles plugin")," for Pulsar"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://supercollider.github.io/"},"SuperCollider")," for backend audio generation, and:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),": sample library used by tidal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/sc3-plugins"},"sc-3 plugins"),": unit generator plugins")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"post installation  ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Review the output from the install script. Note any error messages or install failures. This will help with troubleshooting.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For Haskell problems, check ",(0,n.kt)("inlineCode",{parentName:"li"},"/tmp/ghcup-install.log")))),(0,n.kt)("li",{parentName:"ul"},"If there are install failures, you can run tidal-bootstrap again. It will skip over any components successfully installed. Sometimes running it again will resolve problems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Start a new shell")," (exit from terminal). This will load the new PATH setting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verify install"),". You should be able to run the following commands. The first two will show info about your tidal install. If these fail, then Haskell or Tidal is not installed correctly. The ",(0,n.kt)("inlineCode",{parentName:"li"},"ls")," command will reveal if the Pulsar tidalcycles plugin is installed correctly. You should see a list of files in the ",(0,n.kt)("inlineCode",{parentName:"li"},"osc-min")," directory. The SuperCollider ",(0,n.kt)("inlineCode",{parentName:"li"},"scsynth")," command will show version info.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cabal list tidal\ncabal info tidal\nls ~/.pulsar/packages/tidalcycles/node_modules/osc-min\n/Applications/SuperCollider.app/Contents/Resources/scsynth -v\n\n## SuperDirt: Start SuperCollider. From the Language menu, select "Quarks." SuperDirt and Dirt-Samples should be listed and checked.\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the Pulsar tidalcycles plugin did not install properly, first try to install within Pulsar using the Package Manager. See instructions in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Pulsar"},"Pulsar page")," If this fails, you can try manual installation of the plugin. Instructions are also in the Pulsar page.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Get started!",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/tidal_start"},"Start Tidal")," Follow this guide to learn about how the components work together and how to get them running. Welcome to Tidal!")),(0,n.kt)("hr",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,n.kt)("p",null,"Before installing Tidal, make sure to install ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell")," (via ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Ghcup"),"), ",(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/downloadss"},"SuperCollider")," with  ",(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins"),",   ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". You also need to choose and install a text editor for interacting with Tidal Cycles (see the sidebar)."),(0,n.kt)("h3",{id:"installation-process"},"Installation process"),(0,n.kt)("h4",{id:"ghcup"},"Ghcup"),(0,n.kt)("p",null,"In a terminal window, we will add the path to our GHC installation to a\nfile that is executed by our terminal every time it loads. For macOS 10.14 or before, the terminal uses bash, so the file we need\nto modify is .bashrc:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'. "$HOME/.ghcup/env"\necho \'. $HOME/.ghcup/env\' >> "$HOME/.bashrc"\n')),(0,n.kt)("p",null,"For macOS10.15 Catalina, the terminal uses zsh, so the file we need to\nmodify is .zshrc:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'. "$HOME/.ghcup/env"\necho \'. $HOME/.ghcup/env\' >> "$HOME/.zshrc"\n')),(0,n.kt)("p",null,"After this, we will use cabal to first update it package directory, and\nthen to install the TidalCycles library. We will also run these two\ncommands every time we want to update our TidalCycles library to the\nlatest version."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cabal update\ncabal v1-install tidal\n")),(0,n.kt)("p",null,"If you've never installed TidalCycles before, then the\n",(0,n.kt)("inlineCode",{parentName:"p"},"cabal v1-install tidal")," step may take some time. At the end of the\ncommand output, it should say ",(0,n.kt)("inlineCode",{parentName:"p"},"Installed tidal-x.x.x")," (where x.x.x is\nthe latest version number) without any errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),' see section "3. post installation" above for steps to verify your installations. '),(0,n.kt)("h4",{id:"superdirt"},"SuperDirt"),(0,n.kt)("p",null,"Start your freshly installed version of SuperCollider. Paste the following line of code in the text editor you see and press Cmd+Return to evaluate :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,n.kt)("p",null,"Run the code by clicking on it, to make sure the cursor is on this line,\nthen hold down Shift and press Enter."),(0,n.kt)("p",null,"It'll take a while to install. You'll see something like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:31--\x3e\n*** Welcome to SuperCollider 3.11.2. *** For help press Ctrl-D.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),(0,n.kt)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}c.isMDXComponent=!0}}]);