document.addEventListener("discourse-init",(e=>{performance.mark("discourse-init")
const t=e.detail
require(`${t.modulePrefix}/app`).default.create(t).start()})),function(){if(window.unsupportedBrowser)throw"Unsupported browser detected"
let e=document.querySelector('meta[name="discourse/config/environment"]')
const t=JSON.parse(decodeURIComponent(e.getAttribute("content"))),n=new CustomEvent("discourse-init",{detail:t})
document.dispatchEvent(n)}()

//# sourceMappingURL=start-discourse-8fe9961167bc521b3487a9da5fb5cf76fe50e10beb19175690fe73e411fd2c4c.map
//!
;
