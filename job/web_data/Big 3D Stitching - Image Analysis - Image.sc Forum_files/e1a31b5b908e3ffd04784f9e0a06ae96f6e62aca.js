"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(8,{exclusions:"/|/top",limit_to_groups:"",filter_mode:"dropdown"}),"define"in window&&define("discourse/theme-8/discourse/components/unanswered-filter-dropdown",["exports","@glimmer/component","@ember/object","@ember/service","I18n","select-kit/components/combo-box","@ember/component","@ember/template-factory"],(function(e,t,r,s,o,i,n,u){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=require("discourse/lib/theme-settings-store").getObjectForTheme(8),d={answered:{min_posts:"2",max_posts:void 0},unanswered:{max_posts:"1",min_posts:void 0},all:{max_posts:void 0,min_posts:void 0}}
class c extends t.default{static#e=(()=>dt7948.g(this.prototype,"router",[s.inject]))()
#t=(()=>{dt7948.i(this,"router")})()
static#r=(()=>dt7948.g(this.prototype,"currentUser",[s.inject]))()
#s=(()=>{dt7948.i(this,"currentUser")})()
statuses=["all","answered","unanswered"].map((e=>{return{name:o.default.t((t=`topic_answered_filter.${e}`,`theme_translations.8.${t}`)),value:e}
var t}))
get currentStatus(){const{queryParams:e}=this.router.currentRoute,t=(e,t)=>Object.entries(t).every((t=>{let[r,s]=t
return e[r]===s}))
for(const[r,s]of Object.entries(d))if(t(e,s))return r}get isGroupMember(){const e=a.limit_to_groups.split("|").map((e=>parseInt(e,10)))
return this.currentUser?.groups?.some((t=>e.includes(t.id)))||e.includes(0)||!a.limit_to_groups}get shouldRender(){return"discovery.categories"!==this.router.currentRouteName&&!a.exclusions.split("|").includes(this.router.currentURL)&&this.isGroupMember}changeStatus(e){this.router.transitionTo({queryParams:d[e]})}static#o=(()=>dt7948.n(this.prototype,"changeStatus",[r.action]))()
static#i=(()=>(0,n.setComponentTemplate)((0,u.createTemplateFactory)({id:null,block:'[[[1,"\\n"],[41,[30,0,["shouldRender"]],[[[1,"      "],[10,"li"],[12],[1,"\\n        "],[8,[32,0],[[24,0,"topic-unanswered-filter-dropdown"]],[["@content","@value","@onSelect","@valueAttribute"],[[30,0,["statuses"]],[30,0,["currentStatus"]],[30,0,["changeStatus"]],"value"]],null],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],[],false,["if"]]',moduleName:"/discourse/theme-8/discourse/components/unanswered-filter-dropdown",scope:()=>[i.default],isStrictMode:!0}),this))()}e.default=c})),"define"in window&&define("discourse/theme-8/discourse/initializers/unanswered-filter",["exports","discourse/lib/api","discourse-i18n","../components/unanswered-filter-dropdown"],(function(e,t,r,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const o=require("discourse/lib/theme-settings-store").getObjectForTheme(8),i=e=>`theme_translations.8.${e}`
e.default=(0,t.apiInitializer)("0.11.1",(e=>{if("dropdown"===o.filter_mode)return void e.renderInOutlet("bread-crumbs-right",s.default)
const t=o.exclusions.split("|"),n=e.getCurrentUser(),u=o.limit_to_groups.split("|").map((e=>parseInt(e,10))),a=n?.groups?.some((e=>u.includes(e.id)))||u.includes(0)
e.addNavigationBarItem({name:"unanswered",displayName:r.default.t(i("unanswered.title")),title:r.default.t(i("unanswered.help")),customFilter:(e,r,s)=>!t.includes(s.currentURL)&&(a||!o.limit_to_groups),customHref:function(e,t,r){if(e)return r.currentRoute.queryParams.max_posts?e.url:`${e.url}?max_posts=1`
{const e="categories"===t.filterType?"discovery.latest":r.currentRouteName,s=r.currentRoute.queryParams.max_posts?{}:{max_posts:1}
return r.urlFor(e,{queryParams:s})}},forceActive:(e,t)=>"1"===t.currentRouteQueryParams?.max_posts})}))}))

//# sourceMappingURL=e1a31b5b908e3ffd04784f9e0a06ae96f6e62aca.map?__ws=forum.image.sc
