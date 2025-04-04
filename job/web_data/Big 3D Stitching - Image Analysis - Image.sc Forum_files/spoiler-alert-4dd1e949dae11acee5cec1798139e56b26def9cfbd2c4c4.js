define("discourse/plugins/spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/lib/to-markdown","discourse/plugins/spoiler-alert/lib/apply-spoiler","discourse/plugins/spoiler-alert/lib/rich-editor-extension"],(function(e,i,t,r,s){"use strict"
function o(e){e.querySelectorAll(".spoiler").forEach((e=>{e.classList.remove("spoiler"),e.classList.add("spoiled"),(0,r.default)(e)}))}function l(e){e.decorateCookedElement(o,{id:"spoiler-alert"}),e.addComposerToolbarPopupMenuOption({icon:"wand-magic",label:"spoiler.title",action:e=>{e.applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}),(0,t.addTagDecorateCallback)((function(){const{attributes:e}=this.element;/\bspoiled\b/.test(e.class)&&(this.prefix="[spoiler]",this.suffix="[/spoiler]")})),(0,t.addBlockDecorateCallback)((function(e){const{name:i,attributes:t}=this.element
if("div"===i&&/\bspoiled\b/.test(t.class))return this.prefix="[spoiler]\n",this.suffix="\n[/spoiler]",e.trim()})),e.registerRichEditorExtension(s.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initializeSpoiler=l
e.default={name:"spoiler-alert",initialize(e){e.lookup("service:site-settings").spoiler_enabled&&(0,i.withPluginApi)("1.15.0",l)}}})),define("discourse/plugins/spoiler-alert/lib/apply-spoiler",["exports","discourse-i18n"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){s(e),e.addEventListener("click",(i=>{o(i,e)})),e.addEventListener("keydown",(i=>{"Enter"===i.key&&o(i,e)}))}
const t=["a","area","audio","button","details","embed","iframe","img.animated","input","map","object","option","portal","select","textarea","track","video",".lightbox"].join(", ")
function r(e,i){Object.entries(i).forEach((i=>{let[t,r]=i
null===r?e.removeAttribute(t):e.setAttribute(t,r)}))}function s(e){r(e,{role:"button",tabindex:"0","data-spoiler-state":"blurred","aria-expanded":!1,"aria-label":(0,i.i18n)("spoiler.label.show"),"aria-live":"polite"}),e.classList.add("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.setAttribute("aria-hidden",!0)}))}function o(e,i){"blurred"===i.getAttribute("data-spoiler-state")?(function(e){r(e,{"data-spoiler-state":"revealed","aria-expanded":!0,"aria-label":null,role:null}),e.classList.remove("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.removeAttribute("aria-hidden")}))}(i),e.preventDefault()):function(e){return e.defaultPrevented||e.target.closest(t)}(e)||window.getSelection()+""!=""||s(i)}})),define("discourse/plugins/spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(((e,i)=>{e.features["spoiler-alert"]=!!i.spoiler_enabled})),e.registerPlugin((e=>{e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})}))}(e):e.addPreProcessor(r)}
const i=/\n|<img|!\[[^\]]*\][(\[]/
function t(e,t){const r=i.test(t)?"div":"span"
return`<${r} class='spoiler'>${t}</${r}>`}function r(e){let i
e||=""
do{i=e,e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,t)}while(e!==i)
return e}})),define("discourse/plugins/spoiler-alert/lib/rich-editor-extension",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const i=["inline_spoiler","spoiler"],t={nodeSpec:{spoiler:{attrs:{blurred:{default:!0}},group:"block",content:"block+",parseDOM:[{tag:"div.spoiled"}],toDOM:()=>["div",{class:"spoiled"},0]},inline_spoiler:{attrs:{blurred:{default:!0}},group:"inline",inline:!0,content:"inline*",parseDOM:[{tag:"span.spoiled"}],toDOM:()=>["span",{class:"spoiled"},0]}},parse:{bbcode_spoiler:{block:"inline_spoiler"},wrap_bbcode:(e,i)=>1===i.nesting&&"spoiler"===i.attrGet("class")?(e.openNode(e.schema.nodes.spoiler),!0):-1===i.nesting&&"spoiler"===e.top().type.name?(e.closeNode(),!0):void 0},serializeNode:{spoiler(e,i){e.write("[spoiler]\n"),e.renderContent(i),e.write("[/spoiler]\n\n")},inline_spoiler(e,i){e.write("[spoiler]"),e.renderInline(i),e.write("[/spoiler]")}},plugins(e){let{pmState:{Plugin:t},pmView:{Decoration:r,DecorationSet:s}}=e
return new t({props:{decorations(e){return this.getState(e)},handleClickOn(e,t,o,l){if(i.includes(o.type.name)){const i=this.getState(e.state)||s.empty,t=i.find(l,l+o.nodeSize).length>0?i.remove(i.find(l,l+o.nodeSize)):i.add(e.state.doc,[r.node(l,l+o.nodeSize,{class:"spoiler-blurred"})])
return e.dispatch(e.state.tr.setMeta(this,t)),!0}}},state:{init:()=>s.empty,apply(e,i){return e.getMeta(this)||i.map(e.mapping,e.doc)}}})}}
e.default=t}))

//# sourceMappingURL=spoiler-alert-54903f55c5d52ef8288c4147859f4b39c1a327a9b61e16fe476f7f5bd38e5d6c.map
//!

;
