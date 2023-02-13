"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9484],{3905:(n,s,e)=>{e.d(s,{Zo:()=>u,kt:()=>m});var t=e(7294);function o(n,s,e){return s in n?Object.defineProperty(n,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[s]=e,n}function r(n,s){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),e.push.apply(e,t)}return e}function a(n){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(Object(e),!0).forEach((function(s){o(n,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))}))}return n}function i(n,s){if(null==n)return{};var e,t,o=function(n,s){if(null==n)return{};var e,t,o={},r=Object.keys(n);for(t=0;t<r.length;t++)e=r[t],s.indexOf(e)>=0||(o[e]=n[e]);return o}(n,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)e=r[t],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var d=t.createContext({}),l=function(n){var s=t.useContext(d),e=s;return n&&(e="function"==typeof n?n(s):a(a({},s),n)),e},u=function(n){var s=l(n.components);return t.createElement(d.Provider,{value:s},n.children)},c="mdxType",h={inlineCode:"code",wrapper:function(n){var s=n.children;return t.createElement(t.Fragment,{},s)}},$=t.forwardRef((function(n,s){var e=n.components,o=n.mdxType,r=n.originalType,d=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),c=l(e),$=o,m=c["".concat(d,".").concat($)]||c[$]||h[$]||r;return e?t.createElement(m,a(a({ref:s},u),{},{components:e})):t.createElement(m,a({ref:s},u))}));function m(n,s){var e=arguments,o=s&&s.mdxType;if("string"==typeof n||o){var r=e.length,a=new Array(r);a[0]=$;var i={};for(var d in s)hasOwnProperty.call(s,d)&&(i[d]=s[d]);i.originalType=n,i[c]="string"==typeof n?n:o,a[1]=i;for(var l=2;l<r;l++)a[l]=e[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,e)}$.displayName="MDXCreateElement"},7726:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=e(3117),o=(e(7294),e(3905));const r={title:"Default Library",id:"default_library"},a=void 0,i={unversionedId:"configuration/AudioSamples/default_library",id:"configuration/AudioSamples/default_library",title:"Default Library",description:"Installing SuperDirt will also download a default library of audio samples. This library is known as the default library, the one that everybody starts with. Some of the sounds are pretty good and usable, others can be a little weird. Keep the ones you like and replace the folders you don't like. You can take a look at the library here.",source:"@site/docs/configuration/AudioSamples/default_library.md",sourceDirName:"configuration/AudioSamples",slug:"/configuration/AudioSamples/default_library",permalink:"/docs/configuration/AudioSamples/default_library",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/AudioSamples/default_library.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1676319265,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Default Library",id:"default_library"},sidebar:"docs",previous:{title:"Custom Samples",permalink:"/docs/configuration/AudioSamples/audiosamples"},next:{title:"Lazy loading",permalink:"/docs/configuration/AudioSamples/lazy_loading"}},d={},l=[{value:"Dirt/Clean Library",id:"dirtclean-library",level:2},{value:"Default Samples Table",id:"default-samples-table",level:2}],u={toc:l};function c(n){let{components:s,...e}=n;return(0,o.kt)("wrapper",(0,t.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," will also download a default library of audio samples. This library is known as the ",(0,o.kt)("em",{parentName:"p"},"default")," library, the one that everybody starts with. Some of the sounds are pretty good and usable, others can be a little weird. Keep the ones you like and replace the folders you don't like. You can take a look at the library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Dirt-Samples"},"here"),"."),(0,o.kt)("h2",{id:"dirtclean-library"},"Dirt/Clean Library"),(0,o.kt)("p",null,"The community is currently trying to come up with a new refined version of the default library, named ironically ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Clean-Samples/"},"Clean Samples"),". You can help by submitting your custom samples. This is an ongoing project."),(0,o.kt)("h2",{id:"default-samples-table"},"Default Samples Table"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tedthetrumpet/tidal/blob/master/allthesamples.tidal"},"tedthetrumpet")," has created a Tidal file listing all the existing samples and commenting them: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'-------------------- all the samples\nhush\n\nd1 $ s "808" <| n (run 6) -- 6 misc 808 sound\nd1 $ slow 2 $ s "808bd" <| n (run 25) -- 25 rather similar 808 kicks!\nd1 $ slow 2 $ s "808cy" <| n (run 25) -- 25 808 cymbals\nd1 $ fast 2 $ s "808hc" <| n (run 5) -- 5 808 high congas\nd1 $ fast 2 $ s "808ht" <| n (run 5) -- 5 808 high toms, bit noisy\nd1 $ fast 2 $ s "808lc" <| n (run 5) -- 5 808 low congas, noisy\nd1 $ fast 2 $ s "808lt" <| n (run 5) -- 5 808 low toms, noisy\nd1 $ fast 2 $ s "808mc" <| n (run 5) -- 5 808 medium congas\nd1 $ fast 2 $ s "808oh" <| n (run 5) -- 5 808 open hats\nd1 $ slow 2 $ s "808sd" <| n (run 25) -- 25 808 snares\nd1 $ s "909!4" -- just one 909 kick, but very nice\nd1 $ slow 2 $ s "ab" <| n (run 12) -- nice subtle drum sounds\nd1 $ s "ade" <| n (run 10) # cut 1 -- various long samples\nd1 $ s "ades2" <| n (run 9) # gain 1.3 -- meh, short quiet noisy sounds\nd1 $ s "ades3" <| n (run 7) -- short noisy sounds, lowish pitch\nd1 $ s "ades4" <| n (run 6) -- short high pitched sounds\nd1 $ loopAt 2 $ s "alex:1 alex:2" -- two acoustic drum loops\nd1 $ slow 4 $ s "alphabet" <| n (shuffle 8 $ run 26) -- tts\nd1 $ slow 2 $ s "amencutup" <| n (shuffle 8 $ run 32) # speed "{1,2,3}%8" -- wisott\nd1 $ slow 4 $ s "armora" <| n (run 7) -- probably useless low pitched noise\nd1 $ s "arp" <| n (run 2) -- two synth notes, low and high, both c#?!?\nd1 $ slow 4 $ s "arpy" <| n (run 11) -- as below\nd2 $ slow 4 $ s "superpiano" <| n "c d f g a c6 d6 f6 g6 a6 c7"\nd1 $ s "arpy" <| up "c d e f g a b c6" -- aha!\nd1 $ slow 2 $ s "arpy" <| up "c\'maj(3,8) f\'maj(3,8) ef\'maj(3,8,1) bf4\'maj(3,8)" -- iya\nd1 $ s "arpy" -- in estuary arpy comes out a tone too high in D major! can subtract 2 maybe fixed now\nd1 $ slow 4 $ s "auto" <| n (run 11) -- various effected drum sounds\nd1 $ slow 4 $ s "baa" <| n (run 7) -- sheep sounds, why?!?\nd1 $ slow 4 $ s "baa2" <| n (run 7) -- rather simlar to the above? same?\nd1 $ slow 2 $ s "bass" <| n (run 4) -- four short bass sounds, nasty abrupt release\nd1 $ s "bass0" <| n (run 3) -- one highly distorted bass drum, plus?!?!?\nd1 $ slow 8 $ s "bass1" <| n (run 30) -- thirty synth bass sounds, some long, f or c\nd1 $ s "bass2" <| n "[ 0 .. 4 ]" -- five aggressive tonal kicks\nd1 $ slow 4 $ s "bass3!44" # n (run 11) -- eleven bass sounds, odd mix of pitches\nd1 $ slow 4 $ s "bassdm" <| n (run 24) -- 24 rather similar acoustic-ish kicks\nd1 $ s "bassfoo" <| n (run 3) -- same bank as bass0\nd1 $ s "battles" <| n (run 2) -- very reverb military snare, hit and roll\nd1 $ slow 4 $ s "bd" <| n (run 24) -- lots of electo kicks, mostly quite similar\nd1 $ s "bend" <| n (run 4) -- four subtle noisy sounds\n-- Lazard - 4 O\'Clock In The Morning (Promise Me - Beverley Craven)\nd1 $ loopAt 8 $ s "bev:1" -- eight bar vocal keyboard/bass loop (mono)\nd1 $ loopAt 8 $ s "bev:2" -- eight bar vocal keyboard/bass loop (stereo)\nd1 $ s "bin" <| n (run 2) -- yup, two dustbin hits, kind of ok, could be a snare\nd1 $ slow 4 $ s "birds" <| n (run 10) -- chaffinches, nightingales etc\nd1 $ slow 2 $ s "birds3" <| n (run 19) -- very short noisy sounds, highish pitch\nd1 $ s "bleep" <| n (run 13) -- rtd2 ish, loud!\nd1 $ s "blip" <| n (run 13) -- two short pitched sounds, minor seventh apart\nd1 $ slow 2 $ s "blue" <| n (run 2) -- two spoken fragments, unintelligible\nd1 $ slow 2 $ s "bottle" <| n (run 13) -- short sounds, might be a bottle\nsetcps (125/60/4)\nd1 $ slow 2 $ s "breaks125:0 breaks125:1" -- two one-bar breakbeats\nsetcps (152/60/4)\nd1 $ slow 2 $ s "breaks152" -- one bar of amen at 152\nsetcps (157/60/4)\nd1 $ s "breaks157" -- one bar break at 157\nsetcps (165/60/4)\nd1 $ s "breaks165" -- one bar amen at 165\nsetcps (120/60/4)\nd1 $ s "breath" -- one breath sound, pretty pointless\nd1 $ s "bubble" <| n (run 8) -- actually sound more or less like kicks\nd1 $ s "can" <| n (run 14) -- intersting percussive sounds\nd1 $ s "can" <| n (run 16) # speed "0.125 1!15" -- iya\nd1 $ s "casio" <| n (run 3) -- just three cheapo \'drum\' sounds\nd1 $ fast 2 $ s "casio" <| n "1 2 3 2" # speed 0.25 # cut 1 -- tak\nd1 $ s "cb" -- omg what is that sound, so familiar! iya -- nearly same as 808:0\nd1 $ s "cc" <| n (run 6) -- some loud reverby cymbals\nd1 $ s "chin" <| n (run 4) # gain 2 -- very quiet synthetic clicks\nd1 $ s "circus" <| n (run 3) -- three strange and pointless sounds\nd1 $ s "clak" <| n (run 2) # gain 2 -- two quiet typewriters clicks, or clock ticks?\nd1 $ s "click" <| n (run 4) -- four glitch sounds, maybe useful\nd1 $ fast 2 $ s "clubkick" <| n (run 5) -- five similar very aggressive kicks\nd1 $ s "co" <| n (run 4) -- various hats\nd1 $ s "coins" # gain 2 -- very quiet coin chink\nd1 $ s "control" <| n (run 2) -- two synth notes, out of tune\nd1 $ slow 4 $ s "cosmicg" <| n (run 15) -- strange mix of bleeps and loud noise\nd1 $ s "cp" <| n (run 2) -- two rather similar claps\nd1 $ s "cr" <| n (run 6) -- six ride cymbs\nd1 $ s "crow" <| n (run 4) -- two crow sounds twice\nd1 $ slow 4 $ s "d" <| n (run 4) -- four misc useless sounds\nd1 $ s "db" <| n (scramble 13 $ run 13) -- hmm, pretty usable dry drumkit iya\nd1 $ slow 16 $ s "diphone" <| n (run 38) -- tts\nd1 $ slow 8 $ s "diphone2" <| n (run 12) -- tts\nd1 $ loopAt 1 $ s "dist:1" -- 16 highly distorted 1 bar drum loops\nd1 $ slow 4 $ s "dork2" <| n (run 4) -- four sounds, nae idea, voices in a space?\nd1 $ slow 4 $ s "dorkbot" <| n (run 2) -- people saying dorkbot, two variations\nd1 $ slow 4 $ s "dr" <| n (run 42) -- loud midi drumkit, nasty cutoff at end\nd1 $ s "dr2" <| n (run 6) -- six clean electro drum sounds\nd1 $ fast 2 $ s "dr55" <| n (run 4) -- four dr55 sounds\nd1 $ fast 2 $ s "dr_few" <| n (run 8) -- eight loud drum sounds\nd1 $ s "drumtraks" <| n (run 13) -- loudish kit\nd1 $ s "e" <| n (run 8) -- 8 short and quiet glitchy sounds, similar\nd1 $ slow 2 $ s "east" <| n (run 9) -- 9 \'world\' drum sounds, ok\nd1 $ slow 4 $ s "em2" <| n (run 6) -- six longer sounds, kalimba, flute, loon?\nd1 $ s "erk" -- voice \'one two three hit it\'\nd1 $ s "f" -- one short synth note, actually a bit below Eb\nd1 $ s "feel" <| n (run 7) -- quite nice bank of 7 drum sounds\nd1 $ slow 2 $ s "feelfx" <| n (run 8) -- varied effected sounds, bit longer, ok\nd1 $ s "fest" -- voice saying \'bling?\' or \'berlin?\'\nd1 $ slow 8 $ s "fire" -- longish sample of fire sounds, low ambience\nd1 $ slow 2 $ s "flick" <| n (run 17) -- mix of 17 hits couple of long Cs\nd1 $ slow 16 $ s "fm" <| n (run 17) -- whole bank of loops! inc \'31 seconds\u2026\'\nd1 $ slow 32 $ s "foo" <| n (run 27) -- every breakbeat evah\nd1 $ slow 2 $ s "future" <| n (run 17) -- synthetic hits, mostly kicks\nd1 $ slow 2 $ s "gab" <| n (run 10) -- bitcrushed hits\nd1 $ s "gabba" <| n (run 4) -- bitcrushed kit, four sounds\nd1 $ s "gabbaloud" <| n (run 4) -- wisott\nd1 $ s "gabbalouder" <| n (run 4) -- wisott\nd1 $ s "glasstap" <| n (run 3) -- three nondescript short dry sounds\nd1 $ s "glitch" <| n (run 8) -- iya Eb/Ab stab at 5\nd1 $ s "glitch2" <| n (run 8) -- same?!?\nd1 $ slow 2 $ s "gretsch" <| n (run 24) -- acoustic kit, inc flams\nd1 $ slow 4 $ s "gtr" <| n (run 3) -- three long C notes elect guitar\nd1 $ s "h" <| n (run 7) -- short baby sounds?\nd1 $ slow 8 $ s "hand" <| n (run 17) -- mix of quiet clap sounds, some longer\nd1 $ s "hardcore" <| n (run 12) -- 12 synth drum hits\nd1 $ s "hardkick" <| n (run 6) -- 6 rather loud crushed kicks\nd1 $ s "haw" <| n (run 6) -- 6 odd short hits\nd1 $ s "hc" <| n (run 6) -- 6 closed hats\nd1 $ slow 2 $ s "hh" <| n (run 13) -- actually a mix of drum sounds, quiet, ok\nd1 $ slow 2 $ s "hh27" <| n (run 13) -- another quiet set of electro drum hits\nd1 $ slow 2 $ s "hit" <| n (run 6) -- strange hits, 04 one quite long\nd1 $ s "hmm" -- female voice saying \'hmm\'\nd1 $ s "ho" <| n (run 6) -- six open hats, same but of varying length\nd1 $ every 2 (fast 2) $ s "hoover" <| n (shuffle 6 $ run 6) -- six loud hoover bass soundss\nd1 $ s "house" <| n (run 8) -- quite a nice kit, one pitched sound at 5 ~ Ebm\nd1 $ s "ht" <| n (run 16) -- 16 syn toms, rather similar\nd1 $ s "if" <| n (run 5) -- five bitcrushed hits\nd1 $ s "ifdrums" <| n "0!4 1!4 2!4" -- kick, hat, snare\nd1 $ s "incoming" <| n (run 8) -- very electro kit, meh\nd1 $ slow 2 $  s "industrial" <| n (run 32) -- iya mix of metallic percussive sounds\nd1 $ s "insect" <| n (run 3) # gain 2 -- three very quiet cricket sounds\nd1 $ slow 4 $ s "invaders" <| n (run 18) -- space invaders sounds, varied lengths\nd1 $ s "jazz" <| n (run 8) -- totally not jazzy at all kit!\nd1 $ slow 8 $ s "jungbass" <| n (run 20) -- mostly longish sub-bass kind of sounds\nd1 $ s "jungle" <| n (run 13) -- quiet \'jungle\' kit, amen-ish\nd1 $ slow 4 $ s "juno" <| n (run 12) -- lead/pad notes and chords, C/Cminor\nd1 $ slow 4 $ s "jvbass" <| n (run 13) -- selection synth notes, black notes starting Gb\nd1 $ s "kicklinn!4" -- wisott\nd1 $ slow 4 $ s "koy" <| n 1 -- two koyaanisqatsi long samples, more or less sample\nd1 $ slow 4 $ s "kurt" <| n (run 7) -- vocal samples with telephone eq?\nd1 $ slow 2 $ s "latibro" <| n (run 8) -- pentatonic selection of open 12th synth samples\n-- d1 $ s "latibro" # n 0\n-- d2 $ s "superpiano" # n "[b3,fs4]"\nd1 $ slow 4 $ s "led" -- two and a bit sample of drums plus intro bleed\nd1 $ loopAt 2 $ s "led" # end 0.5 -- not quite right\nd1 $ slow 2 $ s "led" # speed (0.835/2) # unit "c" # end 0.835 -- yaxu\nd1 $ fast 2 $ s "less" <| n (run 4) -- four fairly extreme drum sounds, kind of cool\nd1 $ slow 4 $ s "lighter" <| n (run 33) -- short quiet noisy hits high pitch meh\nd1 $ s "linnhats" <| n (run 6) -- wisott\nd1 $ s "lt" <| n (run 16) -- 16 loud synth low toms\nd1 $ s "made" <| n (run 7) -- synthetic hits, not sure how to characterise!\nd1 $ slow 4 $ s "made2" -- very nasty bitcrushed long sound!\nd1 $ s "mash" <| n (run 2) -- low synth tom sound and sort of glitch sound, why\nd1 $ s "mash2" <| n (run 4) -- longish low syntom sounds\nd1 $ s "metal" <| n (run 10) -- a tiny high metal tink at 10 pitches\nd1 $ s "metal" <| n (run 10) # up (-24) -- iya\nd1 $ s "miniyeah" <| n (run 4) # up (-24) -- very short glitchy sounds, better -24\nd1 $ slow 4 $ s "monsterb" <| n (run 6) -- no idea\nd1 $ slow 8 $ s "moog" <| n (run 7) -- long low synth notes, various pitches\nd1 $ s "mouth" <| n (run 15) -- iya short vocal sounds?\nd1 $ slow 2 $ s "mp3" <| n (run 4) -- harsh noise hits, horrible\nd1 $ s "msg" <| n (run 9) -- subtle quiet hits\nd1 $ s "mt" <| n (run 16) -- 16 medium synth toms\nd1 $ slow 4 $ s "mute" <| n (run 28) -- random collection of french horn notes and doubles\nd1 $ slow 4 $ s "newnotes" <| n (run 15) -- short high sine notes, black notes?\nd1 "noise" -- short quiet noise burst\nd1 $ s "noise2" <| n (run 8) -- 8 short noise hits, three much louder than the others\nd1 $ s "notes" <| n (run 15) -- same as newnotes, sines\nd1 $ slow 4 $ s "numbers" <| n (run 9) -- female voice individual numbers\nd1 $ s "oc" <| n (run 4) -- open-closed hats in single hits at four tempi\nd1 $ s "odx" <| n (run 15) -- fairly aggressive kit, not very nice, new order apparently\nd1 $ s "off" -- single short glitchy bass note C#\nd1 $ slow 4 $ s "outdoor" <| n (run 8) -- odd ambient hits, 2 is quite long, interesting\nd1 $ slow 4 $ s "pad" # n 3 -- four very assorted long sounds, not exactly pads\nd1 $ slow 8 $ s "padlong" -- evolving m9 interval synth d2 $ s "superpiano" # up "[a2,g4]"\nd1 $ slow 8 $ s "pebbles" -- very long, maybe pebbles on a beach\nd1 $ s "perc" <| n (run 6) -- ok set of hits\nd1 $ s "peri" <| n (run 15) -- collection of synth hits, ok\nd1 $ slow 2 $ s "pluck" <| n (run 17) -- pizz cb notes various, 0 is B (ish)\nd1 $ s "popkick" <| n (run 10) -- kicks, but also tuned-ish in there\nd1 $ s "popkick" <| n 0 -- kicks, but also tuned-ish in there Bb, ok\nd1 $ slow 4 $ s "print" <| n (run 11) -- dot matrix printer sounds, ok!\nd1 $ slow 4 $ s "proc" <| n (run 2) -- two computer glitch sounds?\nd1 $ s "procshort" <| n (run 8) -- computer sounds edited very short, clicky\nd1 $ slow 2 $ s "psr" <| n (run 30) -- odd mix of ?game sounds mostly short 0 is a kalimba\nd1 $ s "psr" <| n 0 -- odd mix of ?game sounds mostly short\nd1 $ slow 4 $ s "rave" <| n (run 1) -- soul shout vocals \'are you ready\' etc\nd1 $ s "ravemono" <| n (run 4) -- mono versions of rave shouts\nd1 $ s "realclaps" <| n (run 4) -- wisott\nd1 "reverbkick!4" -- wisott\nd1 $ s "rm" <| n (run 2) -- two identical retro drum machine toms\nd1 $ s "rs!4" -- retro drum machine metro sound?\nd1 $ slow 16 $ s "sax" <| n (run 22) -- chromatic collection of very long bari notes\nd1 $ s "sd" <| n (run 2) -- two very similar retro snares, not that great!\nd1 $ s "seawolf" <| n (run 3) -- noise hits\nd1 $ s "sequential" <| n (run 8) -- dry acoustic-ish kit\nd1 $ s "sf" <| n (run 18) -- kind of interesting collection of short hits, one C note at 0\nd1 $ slow 4 $ s "sheffield" -- long ambience\nd1 $ s "short" <| n (run 5) -- elctro kit sounds meh\nd1 $ s "sid" <| n (run 12) -- ok, pretty usable sid sounds, melodic potential\nd1 $ s "sine" <| n (run 6) -- sines with blunt envelopes, some very low\nd1 $ slow 8 $ s "sitar" <| n (run 8) -- longish sitar gestures\nd1 $ slow 4 $ s "space" <| n (run 18) -- strange mix of long/short sounds\nd1 $ s "speakspell" <| n (run 12) # speed "{-1 2 0.25? -0.5}%6" -- short tts iya!\nd1 $ slow 2 $ s "speech" <| n (run 7) -- male vocal fragments plus two short hits\nd1 $ slow 4 $ s "speechless" <| n (run 10) -- bits of male tts\nd1 $ s "speedupdown" <| n (run 9) -- short fragments of sound inc one loud noise burst\nd1 $ slow 4 $ s "stab" <| n (run 23) -- polysynth/fm hits, sort of pitched not really\nd1 $ s "stomp" <| n (run 10) -- mostly kicks\nd1 $ slow 8 $ s "subroc3d" <| n (run 11) -- game sounds? some hits, one random melody\nd1 $ slow 2 $ s "sundance" <| n (run 6) -- very quiet beeps and an explosion, useless\nd1 $ slow 8 $ s "tabla" <| n (run 26) -- both hits and gestures\nd1 $ slow 8 $ s "tabla2" <| n (run 46) -- multisampled single hits\nd1 $ slow 8 $ s "tablex" <| n (run 3) -- male vocal fragments\nd1 $ slow 8 $ s "tacscan" <| n (run 22) -- game sounds, some long\nd1 $ s "tech" <| n (run 13) -- quiet but moderately interesting drum kit\nd1 $ s "techno" <| n (run 7) -- hits, odd mix\nd1 $ s "tink" <| n (run 5) # speed 0.125 -- high metallic sounds, pitched down iya\nd1 $ s "tok" <| n (run 4) -- four kind of kick sounds\nd1 $ slow 8 $ s "toys" <| n (run 13) -- kids toy & voice \'classical music\' and \'chimes\'\nd1 $ slow 4 $ s "trump" <| n (run 11) -- trumpet falls one phrase, thin eq\nd1 $ s "ul" <| n (run 10) -- sort of hits/kit, some character, verby, loud\nd1 $ s "ulgab" <| n (run 5) -- short bitcrushed hits, usable\nd1 $ s "uxay" <| n (run 3) -- one kick and two other sounds\nd1 $ s "v" <| n (run 6) -- 6 mixed electronic sounds, kind of a kit\nd1 $ s "voodoo" <| n (run 5) -- actually quite a nice five sound kit\nd1 $ slow 2 $ s "wind" <| n (run 10) -- actually filtered white noise hits\nd1 $ s "wobble" -- one subbass hit\nd1 $ s "world" <| n (run 3) -- three kit hits, meh\nd1 $ s "xmas" -- voice saying \'merry christmas\'\nd1 $ slow 2 $ s "yeah" <| n (run 31) -- big selection of short clicks and pops, usable\n')))}c.isMDXComponent=!0}}]);