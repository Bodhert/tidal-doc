"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[461],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),k=p(n),N=r,u=k["".concat(d,".").concat(N)]||k[N]||s[N]||l;return n?a.createElement(u,i(i({ref:e},o),{},{components:n})):a.createElement(u,i({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m[k]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},9393:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const l={title:"Play chords",id:"playchords"},i=void 0,m={unversionedId:"patternlib/howtos/playchords",id:"patternlib/howtos/playchords",title:"Play chords",description:"Loading the chord list",source:"@site/docs/patternlib/howtos/playchords.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/playchords",permalink:"/docs/patternlib/howtos/playchords",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/playchords.md",tags:[],version:"current",lastUpdatedAt:1736394915,formattedLastUpdatedAt:"Jan 9, 2025",frontMatter:{title:"Play chords",id:"playchords"},sidebar:"docs",previous:{title:"Build Rhythms",permalink:"/docs/patternlib/howtos/buildrhythms"},next:{title:"Trigger a pattern from the start",permalink:"/docs/patternlib/howtos/startpattern"}},d={},p=[{value:"Loading the chord list",id:"loading-the-chord-list",level:2},{value:"Playing with chords",id:"playing-with-chords",level:2},{value:"Chord reference",id:"chord-reference",level:2}],o={toc:p};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-the-chord-list"},"Loading the chord list"),(0,r.kt)("p",null,"To see the list of available chords, run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords"),". This command will import the internal list of chords. Running ",(0,r.kt)("inlineCode",{parentName:"p"},"chordList")," will output the list of the available chords registered by ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),". Here is the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"major maj aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13\n add13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min diminish\ned dim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 min7f\nlat5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 min7sharp5 m7sharp5 m7s5 minor7flat9 min7flat9 m7flat9 m7f9 minor7sharp9 m\nin7sharp9 m7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 seven\nSus2 7sus2 sevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 m9s5 sevenSharp5flat9 7s5f9 \nm7sharp5flat9 elevenSharp 11s m11sharp m11s\n")),(0,r.kt)("p",null,"See the chord reference below for a more comprehensive view."),(0,r.kt)("h2",{id:"playing-with-chords"},"Playing with chords"),(0,r.kt)("p",null,"The list above can be combined with a root note using the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to use with the synths in Super Dirt like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'maj e\'min" # s "supermandolin"\n')),(0,r.kt)("p",null,"Samples tuned to concert C can also be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ note "c\'maj e\'min" # s "gtr"\n')),(0,r.kt)("p",null,"Chord inversions can be achieved by appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to a chord, along with one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," characters. The default state, without any ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", is root position. A single ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," is the first inversion. A second inversion looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'ii" # s "supermandolin"\n')),(0,r.kt)("p",null,"The number of notes in a chord can be modified by appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to a chord, along with an integer. 6 notes can be played in the above chord inversion like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'6" # s "supermandolin"\n')),(0,r.kt)("p",null,"An Open Voicing for a chord can be created by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"'o")," to a chord. This will move the 1st and 3rd note in a chord 1 octave lower (usually Root and Fifth):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'o" # s "superpiano"\n')),(0,r.kt)("p",null,"The root can be set as ",(0,r.kt)("inlineCode",{parentName:"p"},"sharp")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"flat")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "cf\'maj c\'maj cs\'maj" # s "supermandolin"\n')),(0,r.kt)("p",null,"The octave can be set with a number. The default is 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n("c4\'maj c5\'maj c6\'maj") # s "supermandolin"\n')),(0,r.kt)("p",null,"The chords can be patterned using the ",(0,r.kt)("inlineCode",{parentName:"p"},"|+")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n ("c e f" |+ "<\'maj \'min>") # s "supermandolin"\n')),(0,r.kt)("p",null,"This will give a pattern equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ n \"<[c'maj e'maj f'maj] [c'min e'min f'min]>\" # s \"supermandolin\"\n")),(0,r.kt)("h2",{id:"chord-reference"},"Chord reference"),(0,r.kt)("p",null,"This is a full list of the chords available in Tidal, along with the corresponding notes and alternative names."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Alternatives"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7]")),(0,r.kt)("td",{parentName:"tr",align:null},"maj, M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aug"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,8]")),(0,r.kt)("td",{parentName:"tr",align:null},"plus, sharp5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"six"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,9]")),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sixNine"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,9,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"six9, sixby9, 6by9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,11]")),(0,r.kt)("td",{parentName:"tr",align:null},"maj7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,11,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"maj9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"add9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,14]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,11,14,17]")),(0,r.kt)("td",{parentName:"tr",align:null},"maj11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"add11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,17]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,11,14,21]")),(0,r.kt)("td",{parentName:"tr",align:null},"maj13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"add13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,21]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dom7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dom9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,14]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dom11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,17]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dom13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,21]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenFlat5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,6,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"7f5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenSharp5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,8,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"7s5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenFlat9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,13]")),(0,r.kt)("td",{parentName:"tr",align:null},"7f9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nine"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,14]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eleven"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,14,17]")),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thirteen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,14,17,21]")),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7]")),(0,r.kt)("td",{parentName:"tr",align:null},"min, m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diminished"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,6]")),(0,r.kt)("td",{parentName:"tr",align:null},"dim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minorSharp5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,8]")),(0,r.kt)("td",{parentName:"tr",align:null},"msharp5,mS5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,9]")),(0,r.kt)("td",{parentName:"tr",align:null},"min6, m6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minorSixNine"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,9,7,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor69, min69, minSixNine, m69, mSixNine, m6by9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7flat5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,6,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor7f5, min7flat5, min7f5, m7flat5, m7f5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"min7, m7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7sharp5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,8,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor7s5, min7sharp5, min7s5, m7sharp5, m7s5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7flat9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,13]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor7f9, min7flat9, min7f9, m7flat9, m7f9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7sharp9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor7s9, min7sharp9, min7s9, m7sharp9, m7s9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diminished7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,6,9]")),(0,r.kt)("td",{parentName:"tr",align:null},"dim7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"min9, m9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,14,17]")),(0,r.kt)("td",{parentName:"tr",align:null},"min11, m11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,14,17,21]")),(0,r.kt)("td",{parentName:"tr",align:null},"min13, m13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minorMajor7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,11]")),(0,r.kt)("td",{parentName:"tr",align:null},"minMaj7, mmaj7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"one"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0]")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"five"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,7]")),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sus2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,2,7]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sus4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,5,7]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenSus2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,2,7,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"7sus2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenSus4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,5,7,10]")),(0,r.kt)("td",{parentName:"tr",align:null},"7sus4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nineSus4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,5,7,10,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"ninesus4, 9sus4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenFlat10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,15]")),(0,r.kt)("td",{parentName:"tr",align:null},"7f10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nineSharp5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,1,13]")),(0,r.kt)("td",{parentName:"tr",align:null},"9sharp5, 9s5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor9sharp5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,1,14]")),(0,r.kt)("td",{parentName:"tr",align:null},"minor9s5, min9sharp5, min9s5, m9sharp5, m9s5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sevenSharp5flat9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,8,10,13]")),(0,r.kt)("td",{parentName:"tr",align:null},"7s5f9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor7sharp5flat9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,8,10,13]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elevenSharp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,4,7,10,14,18]")),(0,r.kt)("td",{parentName:"tr",align:null},"11s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minor11sharp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[0,3,7,10,14,18]")),(0,r.kt)("td",{parentName:"tr",align:null},"m11sharp, m11s")))))}k.isMDXComponent=!0}}]);