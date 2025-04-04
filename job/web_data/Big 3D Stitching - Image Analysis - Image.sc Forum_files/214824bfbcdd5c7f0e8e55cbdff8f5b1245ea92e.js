"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(11,{Hamburger_links:"Upcoming Events,/t/60018,f"}),"define"in window&&define("discourse/theme-11/discourse/api-initializers/init-custom-hamburger-links",["exports","discourse/lib/api"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(11)
e.default=(0,i.apiInitializer)("0.8.18",(e=>{(t.Hamburger_links||"").split("|").forEach(((i,t)=>{let[s,r]=(i||"").split(",")
e.addCommunitySectionLink((e=>class extends e{name=(()=>`custom-link-${t+1}`)()
href=(()=>r)()
route=""
text=(()=>s)()
title=(()=>s)()}),!1)}))}))}))

//# sourceMappingURL=214824bfbcdd5c7f0e8e55cbdff8f5b1245ea92e.map?__ws=forum.image.sc
