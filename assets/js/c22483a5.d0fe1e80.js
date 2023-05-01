"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(3117),r=(a(7294),a(3905));const i={title:"Type Signatures",id:"type_signatures"},o=void 0,s={unversionedId:"innards/type_signatures",id:"innards/type_signatures",title:"Type Signatures",description:"What is a type signature?",source:"@site/docs/innards/type_signatures.md",sourceDirName:"innards",slug:"/innards/type_signatures",permalink:"/docs/innards/type_signatures",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/type_signatures.md",tags:[],version:"current",lastUpdatedAt:1682960761,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Type Signatures",id:"type_signatures"},sidebar:"docs",previous:{title:"The meaning of .",permalink:"/docs/innards/meaning_of_dot"},next:{title:"Contributing Tests",permalink:"/docs/innards/contributing_test"}},p={},l=[{value:"What is a type signature?",id:"what-is-a-type-signature",level:2},{value:"Going further",id:"going-further",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-type-signature"},"What is a type signature?"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Haskell")," (which ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," lives in), a type signature tells you what kind of thing a value or function is. They're particularly useful for finding out what a function expects from you, and what it gives back."),(0,r.kt)("p",null,"You can find out the type of a function is with ",(0,r.kt)("inlineCode",{parentName:"p"},":t")," , for example to find out the type signature for ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),", you could type ",(0,r.kt)("inlineCode",{parentName:"p"},":t rev")," into your editor, and evaluate it. You'll see this in the output window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"That's quite simple, it tells you that it takes a pattern as input, and gives you back a pattern as output. Let's have a look at the fast function, via ",(0,r.kt)("inlineCode",{parentName:"p"},":t fast"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fast :: Pattern Time -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"That's a bit more complicated, there's three patterns there. The last one is always the output, and the ones preceding it are the inputs. So ",(0,r.kt)("inlineCode",{parentName:"p"},"fast")," takes a pattern of time, another pattern, and gives you a pattern in return. That makes some sense too, the first parameter says how fast it should go in terms of time, and can be patterned. The second parameter is the pattern that is going to be made faster, but it doesn't say what kind of pattern it is, it just says ",(0,r.kt)("inlineCode",{parentName:"p"},"Pattern a"),", and the same with the output. We saw the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Pattern a")," type earlier with ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),". What does it mean?"),(0,r.kt)("p",null,"Well the a in ",(0,r.kt)("inlineCode",{parentName:"p"},"Pattern a")," is unconstrained - it can be whatever you like. So the ",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," function can work on any kind of pattern. This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," doesn't deal with any particular values, it just manipulates time."),(0,r.kt)("p",null,"So ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is a kind of wildcard here, used in both the input and output of ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),". This means that if you can give it a pattern of anything, but if you give it a pattern of integers, you are guaranteed to get a pattern of integers back. So you can swap that a for another type but only if you swap all instances of it for the same type."),(0,r.kt)("h2",{id:"going-further"},"Going further"),(0,r.kt)("p",null,"A more complicated example is ",(0,r.kt)("inlineCode",{parentName:"p"},"every"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"Now, ",(0,r.kt)("inlineCode",{parentName:"p"},"every")," takes three parameters, a ",(0,r.kt)("em",{parentName:"p"},"whole number of cycles"),", a ",(0,r.kt)("em",{parentName:"p"},"function to apply to a pattern"),", and ",(0,r.kt)("em",{parentName:"p"},"the pattern itself"),". We can see that the first parameter is a pattern of integers (aka whole numbers), fine. The second parameter is stranger - ",(0,r.kt)("inlineCode",{parentName:"p"},"(Pattern a -> Pattern a)"),". This is how functions that are parameters are shown - wrapped in parenthesis. We can see from this that the second parameter is a function, that takes a pattern of any type as input, and gives a pattern of the same type as output. If we look back at the type signature of ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),", it's pretty clear that we could give that as this second parameter, as the types match.. Indeed it's quite common to do ",(0,r.kt)("inlineCode",{parentName:"p"},'every 3 rev (s "bd sn")'),", for example."),(0,r.kt)("p",null,"Hopefully that gives you some insight into how to read type signatures. They're really useful for understanding how to use functions, even without reading documentation."))}c.isMDXComponent=!0}}]);