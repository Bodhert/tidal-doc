"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5673],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?l.createElement(m,r(r({ref:e},u),{},{components:n})):l.createElement(m,r({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:a,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2033:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=n(3117),a=(n(7294),n(3905));const i={title:"MacOS (manual)",permalink:"wiki/MacOS_installation/",layout:"wiki"},r=void 0,o={unversionedId:"getting-started/MacOS_installation",id:"getting-started/MacOS_installation",title:"MacOS (manual)",description:"Try the easy installation script",source:"@site/docs/getting-started/MacOS_installation.md",sourceDirName:"getting-started",slug:"/getting-started/MacOS_installation",permalink:"/docs/getting-started/MacOS_installation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/MacOS_installation.md",tags:[],version:"current",lastUpdatedAt:1699850308,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{title:"MacOS (manual)",permalink:"wiki/MacOS_installation/",layout:"wiki"}},s={},c=[{value:"Try the easy installation script",id:"try-the-easy-installation-script",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Optional Prerequisites",id:"optional-prerequisites",level:3},{value:"Install TidalCycles",id:"install-tidalcycles",level:2},{value:"Install SuperDirt",id:"install-superdirt",level:2},{value:"Install Atom Extension",id:"install-atom-extension",level:2},{value:"Install VS Code Extension",id:"install-vs-code-extension",level:2},{value:"Test Your Installation",id:"test-your-installation",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("languages",null)," ",(0,a.kt)("translate",null,(0,a.kt)("h2",{id:"try-the-easy-installation-script"},"Try the easy installation script"),(0,a.kt)("p",null,"For an easy, hands-off install, try\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-bootstrap/blob/master/README.md"},"tidal-bootstrap"),"\n. If you want to install Tidal Cycles manually, read the instructions below."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before installing Tidal, make sure the following are installed first:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Haskell")," (via ",(0,a.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Ghcup"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://atom.io/"},"Atom Editor")," (if you don't like the atom editor\nfor some reason, please check out the ",(0,a.kt)("a",{parentName:"li",href:"/wiki/List_of_tidal_editors",title:"wikilink"},"list of\nalternatives"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider")," (pick the\nlatest version)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,a.kt)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),(0,a.kt)("p",null,"The following is optional, but highly recommended:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," - you\nmay need the SuperCollider sc3-plugins if you want to use any of the\nsynths included in SuperDirt. Most of the examples in the\ndocumentation will still work, so you could skip this step and\nreturn to it later.")),(0,a.kt)("h2",{id:"install-tidalcycles"},"Install TidalCycles"),(0,a.kt)("p",null,"In a terminal window, we will add the path to our GHC installation to a\nfile that is executed by our terminal every time it loads."),(0,a.kt)("p",null,"For macOS 10.14 or before, the terminal uses bash, so the file we need\nto modify is .bashrc:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' . "$HOME/.ghcup/env"\n echo \'. $HOME/.ghcup/env\' >> "$HOME/.bashrc"\n')),(0,a.kt)("p",null,"For macOS10.15 Catalina, the terminal uses zsh, so the file we need to\nmodify is .zshrc:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' . "$HOME/.ghcup/env"\n echo \'. $HOME/.ghcup/env\' >> "$HOME/.zshrc"\n')),(0,a.kt)("p",null,"After this, we will use cabal to first update it package directory, and\nthen to install the TidalCycles library. We will also run these two\ncommands every time we want to update our TidalCycles library to the\nlatest version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," cabal update\n cabal install tidal --lib\n")),(0,a.kt)("p",null,"If you've never installed TidalCycles before, then the\n",(0,a.kt)("inlineCode",{parentName:"p"},"cabal install tidal --lib")," step may take some time. At the end of the\ncommand output, it should say ",(0,a.kt)("inlineCode",{parentName:"p"},"Installed tidal-x.x.x")," (where x.x.x is\nthe latest version number) without any errors."),(0,a.kt)("h2",{id:"install-superdirt"},"Install SuperDirt"),(0,a.kt)("p",null,"Start SuperCollider, and in the editor window paste in the following\nline of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.3"); thisProcess.recompile()})\n')),(0,a.kt)("p",null,"Run the code by clicking on it, to make sure the cursor is on this line,\nthen hold down Shift and press Enter."),(0,a.kt)("p",null,"It'll take a while to install. You'll see something like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:31--\x3e\n*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.\n")),(0,a.kt)("h2",{id:"install-atom-extension"},"Install Atom Extension"),(0,a.kt)("p",null,"Start Atom, and install the TidalCycles plugin. You can find it via the\nmenus under edit ",">"," settings ",">"," install, then typing \u201ctidalcycles\u201d into\nthe search box."),(0,a.kt)("p",null,"Once it's installed, you'll need to change the \"ghci path\" setting for\nthe tidalcycles package to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.ghcup/bin/ghci\n")),(0,a.kt)("p",null,"Once that\u2019s all installed and configured, restart atom."),(0,a.kt)("h2",{id:"install-vs-code-extension"},"Install VS Code Extension"),(0,a.kt)("p",null,"Start VS Code, and install the TidalCycles extension by searching the\nextensions marketplace. You can follow the instructions from\n",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles"},"here"),"\nto ensure you know how to use it correctly."),(0,a.kt)("h2",{id:"test-your-installation"},"Test Your Installation"),(0,a.kt)("p",null,"Now you are ready to ",(0,a.kt)("a",{parentName:"p",href:"/wiki/Start_tidalcycles_and_superdirt_for_the_first_time",title:"wikilink"},"Start TidalCycles and SuperDirt for the first\ntime"),".")))}p.isMDXComponent=!0}}]);