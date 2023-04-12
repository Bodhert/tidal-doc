"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4986],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?t.createElement(h,i(i({ref:n},d),{},{components:a})):t.createElement(h,i({ref:n},d))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3264:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(3117),r=(a(7294),a(3905));const o={title:"Harmony & Melody",id:"harmony_melody"},i=void 0,l={unversionedId:"reference/harmony_melody",id:"reference/harmony_melody",title:"Harmony & Melody",description:"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:",source:"@site/docs/reference/harmony_melody.md",sourceDirName:"reference",slug:"/reference/harmony_melody",permalink:"/docs/reference/harmony_melody",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/harmony_melody.md",tags:[],version:"current",lastUpdatedAt:1681342712,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"Harmony & Melody",id:"harmony_melody"},sidebar:"reference",previous:{title:"Time",permalink:"/docs/reference/time"},next:{title:"Transitions",permalink:"/docs/reference/transitions"}},s={},p=[{value:"Scales",id:"scales",level:2},{value:"scale",id:"scale",level:3},{value:"scaleList",id:"scalelist",level:3},{value:"scaleTable",id:"scaletable",level:3},{value:"getScale",id:"getscale",level:3},{value:"toScale",id:"toscale",level:3},{value:"Chords",id:"chords",level:2},{value:"chordList",id:"chordlist",level:3},{value:"chordTable",id:"chordtable",level:3},{value:"Arpeggios",id:"arpeggios",level:2},{value:"arpeggiate",id:"arpeggiate",level:3},{value:"arp",id:"arp",level:3},{value:"rolled",id:"rolled",level:3},{value:"rolledBy",id:"rolledby",level:3},{value:"Chord Modifiers/Voicings",id:"chord-modifiersvoicings",level:2},{value:"Number of Chord tones",id:"number-of-chord-tones",level:3},{value:"Open voicing",id:"open-voicing",level:3},{value:"Drop N voicings",id:"drop-n-voicings",level:3},{value:"Chord Inversions",id:"chord-inversions",level:3}],d={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,r.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,r.kt)("h2",{id:"scales"},"Scales"),(0,r.kt)("h3",{id:"scale"},"scale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scale :: Num a => Pattern String -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," function interprets a pattern of note numbers into a particular named scale. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ chunk 4 (fast 2 . (|- n 12)) $ off 0.25 (|+ 7) $ struct (iter 4 "t(5,8)")\n  $ n (scale "ritusen" "0 .. 7") # sound "superpiano"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Prior to ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," version 1.0.0, scale had a very different function as a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," operator. Veteran users will need to switch to using ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," for this functionality.")),(0,r.kt)("h3",{id:"scalelist"},"scaleList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scaleList :: String\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleList")," function outputs all the available scales, at the time of writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"minPent majPent ritusen egyptian kumai hirajoshi iwato chinese indian pelog\nprometheus scriabin gong shang jiao zhi yu whole wholetone augmented augmented2\nhexMajor7 hexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian\ndorian phrygian lydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor\nmelodicMinor melodicMinorDesc melodicMajor bartok hindu todi purvi marva\nbhairav ahirbhairav superLocrian romanianMinor hungarianMinor neapolitanMinor\nenigmatic spanish leadingWhole lydianMinor neapolitanMajor locrianMajor\ndiminished octatonic diminished2 octatonic2 messiaen1 messiaen2 messiaen3\nmessiaen4 messiaen5 messiaen6 messiaen7 chromatic bayati hijaz sikah rast\nsaba iraq\n")),(0,r.kt)("h3",{id:"scaletable"},"scaleTable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scaleTable :: Fractional a => [(String, [a])]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleTable")," function outputs a list of all available scales and their corresponding notes. For example, its first entry is ",(0,r.kt)("inlineCode",{parentName:"p"},'("minPent",[0.0,3.0,5.0,7.0,10.0])')," which means that a minor pentatonic scale is formed by the root (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"), the minor third (",(0,r.kt)("inlineCode",{parentName:"p"},"3")," semitones above the root), the perfect fourth (",(0,r.kt)("inlineCode",{parentName:"p"},"5")," semitones above the root), etc."),(0,r.kt)("p",null,"As the list is big, you can use the Haskell function ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup")," to look up a specific scale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'lookup "phrygian" scaleTable\n')),(0,r.kt)("p",null,"This will output ",(0,r.kt)("inlineCode",{parentName:"p"},"Just [0.0,1.0,3.0,5.0,7.0,8.0,10.0]"),"."),(0,r.kt)("p",null,"You can also do a reverse look up into the scale table. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"filter (\\(_,x)->take 3 x==[0,2,4]) scaleTable\n")),(0,r.kt)("p",null,"The above example will output all scales, the first three notes of which are the root, the major second (",(0,r.kt)("inlineCode",{parentName:"p"},"2")," semitones above the fundamental), and the major third (",(0,r.kt)("inlineCode",{parentName:"p"},"4")," semitones above the root)."),(0,r.kt)("h3",{id:"getscale"},"getScale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: getScale :: Num a => [(String, [a])] -> Pattern String -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,"You can build your own ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," function with additional scales if you wish, using ",(0,r.kt)("inlineCode",{parentName:"p"},"getScale"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let scale = getScale (scaleTable ++ [("techno", [0,2,3,5,7,8,10]),\n                                     ("broken", [0,1,4,7,8,10])\n                                    ])\n')),(0,r.kt)("p",null,"The above takes the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleTable")," as a starting point, and adds two custom scales to it. You'll be able to use the new function as normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (scale "techno" "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),(0,r.kt)("h3",{id:"toscale"},"toScale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: toScale :: Num a => [a] -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toScale")," allows you to quickly apply a scale without naming it. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (toScale [0,2,3,5,7,8,10] "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),(0,r.kt)("h2",{id:"chords"},"Chords"),(0,r.kt)("h3",{id:"chordlist"},"chordList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chordList :: String\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chordList")," function outputs all the available chords. At the time of writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"major maj M aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13\nadd13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min m diminished\ndim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 minor7f5 min7flat5\nmin7f5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 minor7s5 min7sharp5 min7s5 m7sharp5 m7s5 minor7flat9 minor7f9 min7flat9 min7f9 m7flat9 m7f9 minor7sharp9 minor7s9 min7sharp9 min7s9\nm7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 sevenSus2 7sus2\nsevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9sharp5 9s5 minor9sharp5 minor9s5 min9sharp5 min9s5\nm9sharp5 m9s5 sevenSharp5flat9 7s5f9 minor7sharp5flat9 m7sharp5flat9\nelevenSharp 11s minor11sharp m11sharp m11s\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You'll need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords")," before using this function.")),(0,r.kt)("h3",{id:"chordtable"},"chordTable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chordTable :: Num a => [(String, [a])]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chordTable")," function outputs a list of all available chords and their corresponding notes. For example, its first entry is ",(0,r.kt)("inlineCode",{parentName:"p"},'("major",[0,4,7])')," which means that a major triad is formed by the root (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"), the major third (",(0,r.kt)("inlineCode",{parentName:"p"},"4")," semitones above the root), and the perfect fifth (",(0,r.kt)("inlineCode",{parentName:"p"},"7")," semitones above the root)."),(0,r.kt)("p",null,"As the list is big, you can use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"chordL")," to look up a specific chord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'chordL "minor7"\n')),(0,r.kt)("p",null,"This will output ",(0,r.kt)("inlineCode",{parentName:"p"},"(0>1)|[0,3,7,10]"),"."),(0,r.kt)("p",null,"If you know the notes from a chord, but can't find the name of it, you can use this Haskell code to do a reverse look up into the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"filter (\\(_,x)->x==[0,4,7,10]) chordTable\n")),(0,r.kt)("p",null,"This will output: ",(0,r.kt)("inlineCode",{parentName:"p"},'[("dom7",[0,4,7,10])]')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You'll need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords")," before using this function.")),(0,r.kt)("h2",{id:"arpeggios"},"Arpeggios"),(0,r.kt)("h3",{id:"arpeggiate"},"arpeggiate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: arpeggiate :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"arpeggiate")," (alias ",(0,r.kt)("inlineCode",{parentName:"p"},"arpg"),") function spreads chords of note numbers over time. For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," version of ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", chord name notation & older list notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arpg "\'major7 [0,4,7,11]") # sound "superpiano"\n')),(0,r.kt)("h3",{id:"arp"},"arp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: arp :: Pattern String -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"arp")," function takes an additional pattern of arpeggiate modes. For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," version of ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", chord name notation (root note / chord type / additional notes above the chord):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arp "<up down diverge>" "<a\'m9\'8 e\'7sus4\'8>") # sound "superpiano"\n')),(0,r.kt)("p",null,"The different arpeggiate modes are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"up down updown downup up&down down&up converge\ndiverge disconverge pinkyup pinkyupdown\nthumbup thumbupdown\n")),(0,r.kt)("h3",{id:"rolled"},"rolled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rolled :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rolled")," function takes no arguments, and simulates a downward strum pattern on a guitar. Notes are played low to high, and are evenly distributed within (1/4) of the chord event length, as opposed to ",(0,r.kt)("inlineCode",{parentName:"p"},"arp"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"arpeggiate")," that spread the notes over the whole event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ rolled $ n \"<a'm9'8 e'7sus4'8>\" # sound \"superpiano\"\n")),(0,r.kt)("h3",{id:"rolledby"},"rolledBy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rolledBy :: Pattern (Ratio Integer) -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rolledBy")," function works the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"rolled"),', but allows you to specify the fraction of the event that the notes will be spread over, or the "length" of the roll.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ rolledBy 0.45 $ n \"<a'm9'8 e'7sus4'8>\" # sound \"superpiano\"\n")),(0,r.kt)("h2",{id:"chord-modifiersvoicings"},"Chord Modifiers/Voicings"),(0,r.kt)("p",null,'There are a variety of different chord modifiers available, designed to change the way a chord is "voiced" (note ordering, octave choices, etc). A significant amount of discussion on what these should be and how they should work was covered in this ',(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/rfc-working-on-making-chord-naming-chordlist-more-consistent/2717/52"},"forum thread"),", and (largely) implemented by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/pull/931"},"polymorphic.engine"),"."),(0,r.kt)("p",null,"All of the different modifiers can be patterned together."),(0,r.kt)("h3",{id:"number-of-chord-tones"},"Number of Chord tones"),(0,r.kt)("p",null,"You can set the number of chord tones in a chord. Extra tones are created by working through the existing list of tones and either duplicating them an octave higher; reducing tones subtracts items from the chord tone list starting from the highest notes. This can also be patterned."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"c'min9")," has 5 chord tones ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,3,7,10,14]")," - we can increase that to 8, ie ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,3,7,10,14,12,15,19]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'min9\'8" # sound "superpiano"\n')),(0,r.kt)("p",null,"We can reduce it to 4 chord tones (ie take away the 9th), ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,3,7,10]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'min9\'4" # sound "superpiano"\n')),(0,r.kt)("h3",{id:"open-voicing"},"Open voicing"),(0,r.kt)("p",null,'This emulates an "Open" Piano voicing, where the first and third note of a chord are dropped down an octave/12 semitones, spreading the range of the chord tones by an extra octave.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'min9\'o" # sound "superpiano"\n')),(0,r.kt)("h3",{id:"drop-n-voicings"},"Drop N voicings"),(0,r.kt)("p",null,'Drop voicings are similar to Open voicings, dropping the Nth highest note in the chord down by an octave/12 semitones. This is a "drop 3" voicing:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'min9\'d3" # sound "superpiano"\n')),(0,r.kt)("h3",{id:"chord-inversions"},"Chord Inversions"),(0,r.kt)("p",null,"A chord is inverted by taking the lowest N notes in a chord, and raising them by an octave/12 semitones. This is the 2nd inversion for ",(0,r.kt)("inlineCode",{parentName:"p"},"c'min9"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'min9\'i2" # sound "superpiano"\n')))}c.isMDXComponent=!0}}]);