define("discourse/plugins/discourse-math/initializers/discourse-math-katex",["exports","discourse/lib/load-script","discourse/lib/plugin-api"],(function(e,t,a){"use strict"
async function i(e){if(!e)return
const a=e.querySelectorAll(".math")
if(!a.length>0)return
await async function(){try{await(0,t.default)("/plugins/discourse-math/katex/katex.min.js"),await(0,t.default)("/plugins/discourse-math/katex/katex.min.css",{css:!0}),await(0,t.default)("/plugins/discourse-math/katex/mhchem.min.js"),await(0,t.default)("/plugins/discourse-math/katex/copy-tex.min.js")}catch(e){console.error("Failed to load KaTeX dependencies.",e)}}()
const i={trust:e=>["\\htmlId","\\href"].includes(e.command),macros:{"\\eqref":"\\href{###1}{(\\text{#1})}","\\ref":"\\href{###1}{\\text{#1}}","\\label":"\\htmlId{#1}{}"},displayMode:!1}
a.forEach((e=>function(e,t){if(t.displayMode="DIV"===e.tagName,e.dataset.appliedKatex)return
if(e.dataset.appliedKatex=!0,!e.classList.contains("math"))return
const a="div"==("DIV"===e.tagName?"div":"span")?"block-math":"inline-math",i=e.textContent
e.classList.add("math-container",a,"katex-math"),e.textContent="",window.katex.render(i,e,t)}(e,i)))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"apply-math-katex",initialize(e){const t=e.lookup("service:site-settings")
t.discourse_math_enabled&&"katex"===t.discourse_math_provider&&(0,a.withPluginApi)("0.5",(function(e){(function(e){e.decorateCookedElement((function(e){i(e)}),{id:"katex"}),e.decorateChatMessage&&e.decorateChatMessage((e=>{i(e)}),{id:"katex-chat"})})(e)}))}}})),define("discourse/plugins/discourse-math/initializers/discourse-math-mathjax",["exports","@ember/runloop","discourse/lib/get-url","discourse/lib/load-script","discourse/lib/plugin-api"],(function(e,t,a,i,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let n=!1
function r(e){return function(e){if(n)return
const t=["toMathML.js","Safe.js"]
e.enable_accessibility&&t.push("[a11y]/accessibility-menu.js")
let i={jax:["input/TeX","input/AsciiMath","input/MathML","output/CommonHTML"],TeX:{extensions:["AMSmath.js","AMSsymbols.js","autoload-all.js"]},extensions:t,showProcessingMessages:!1,messageStyle:"none",root:(0,a.getURLWithCDN)("/plugins/discourse-math/mathjax")}
e.zoom_on_hover&&(i.menuSettings={zoom:"Hover"},i.MathEvents={hover:750}),window.MathJax=i,n=!0}(e),(0,i.default)("/plugins/discourse-math/mathjax/MathJax.2.7.5.js")}function o(e,a){if(!e)return
let i
if(i=a.enable_asciimath?e.querySelectorAll(".math, .asciimath"):e.querySelectorAll(".math"),i.length>0){const s=e.classList.contains("d-editor-preview")
r(a).then((()=>{i.forEach((e=>function(e,a){if(e.dataset.appliedMathjax)return
let i,s,n
e.dataset.appliedMathjax=!0,e.classList.contains("math")?(i="DIV"===e.tagName?"div":"span",n="math/tex"+("div"===i?"; mode=display":""),s=`math-container ${"div"===i?"block-math":"inline-math"} mathjax-math`):e.classList.contains("asciimath")&&(i="span",s="math-container inline-math ascii-math",n="math/asciimath")
const r=document.createElement("script")
r.type=n,r.innerText=e.innerText
const o=document.createElement(i)
o.classList.add(s.split(" ")),o.style.display="none",o.appendChild(r),e.after(o),(0,t.later)(this,(()=>{window.MathJax.Hub.Queue((()=>{null!==e?.parentElement?.offsetParent&&window.MathJax.Hub.Typeset(r,(()=>{e.style.display="none",o.style.display=null}))}))}),a?200:0)}(e,s)))}))}}e.default={name:"apply-math-mathjax",initialize(e){const t=e.lookup("service:site-settings")
let a={zoom_on_hover:t.discourse_math_zoom_on_hover,enable_accessibility:t.discourse_math_enable_accessibility,enable_asciimath:t.discourse_math_enable_asciimath}
t.discourse_math_enabled&&"mathjax"===t.discourse_math_provider&&(0,s.withPluginApi)("0.5",(function(e){(function(e,t){e.decorateCookedElement((e=>{o(e,t)}),{id:"mathjax"}),e.decorateChatMessage&&e.decorateChatMessage((e=>{o(e,t)}),{id:"mathjax-chat"})})(e,a)}))}}})),define("discourse/plugins/discourse-math/lib/discourse-markdown/discourse-math",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){if(!e.markdownIt)return
e.registerOptions(((e,t)=>{e.features.math=t.discourse_math_enabled,e.features.asciimath=t.discourse_math_enable_asciimath})),e.registerPlugin((e=>{e.options.discourse.features.math&&(e.options.discourse.features.asciimath&&e.inline.ruler.after("escape","asciimath",n),e.inline.ruler.after("escape","math",s),e.block.ruler.after("code","math",o,{alt:["paragraph","reference","blockquote","list"]}))}))}
const t=[12289,12290,65292,65306,65307,65294,65311,65281,1548,1563,1567,3631]
function a(e,a,i){return e!==a&&(!!i.utils.isWhiteSpace(e)||(!!i.utils.isMdAsciiPunct(e)||(!!i.utils.isPunctChar(e)||!!t.includes(e))))}function i(e,t,i){let s,n=e.pos,r=e.posMax
if(t||e.src.charCodeAt(n)!==i||r<n+2)return!1
if(e.src.charCodeAt(n+1)===i)return!1
if(n>0){if(!a(e.src.charCodeAt(n-1),i,e.md))return!1}for(let a=n+1;a<r;a++){if(e.src.charCodeAt(a)===i&&92!==e.src.charCodeAt(a-1)){s=a
break}}if(!s)return!1
if(s+1<=r){let t=e.src.charCodeAt(s+1)
if(t&&!a(t,i,e.md))return!1}let o=e.src.slice(n+1,s),c=e.push("html_raw","",0)
const l=e.md.utils.escapeHtml(o)
let u=36===i?"'math'":"'asciimath'"
return c.content=`<span class=${u}>${l}</span>`,e.pos=s+1,!0}function s(e,t){return i(e,t,36)}function n(e,t){return i(e,t,37)}function r(e,t,a,i){if(36!==e.src.charCodeAt(t))return!1
if(t++,36!==e.src.charCodeAt(t))return!1
for(let s=++t;s<a;s++)if(!i.utils.isSpace(e.src.charCodeAt(s)))return!1
return!0}function o(e,t,a,i){if(!r(e,e.bMarks[t]+e.tShift[t],e.eMarks[t],e.md))return!1
if(i)return!0
let s=t,n=!1
for(;s++,!(s>=a);)if(r(e,e.bMarks[s]+e.tShift[s],e.eMarks[s],e.md)){n=!0
break}let o=e.push("html_raw","",0),c=n?e.eMarks[s-1]:e.eMarks[s],l=e.src.slice(e.bMarks[t+1]+e.tShift[t+1],c)
const u=e.md.utils.escapeHtml(l)
return o.content=`<div class='math'>\n${u}\n</div>\n`,e.line=n?s+1:s,!0}}))

//# sourceMappingURL=discourse-math-d9a11ca087fdfbd7181ec422c4ae9d6c82274007706abd48c437a0c30bbc3cec.map
//!

;
