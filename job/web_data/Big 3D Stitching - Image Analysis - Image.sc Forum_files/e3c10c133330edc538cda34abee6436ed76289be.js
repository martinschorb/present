"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(2,{theme_uploads:{"your-icon-here-tag":"https://us1.discourse-cdn.com/flex015/uploads/imagej/original/2X/7/7437ed8cd3aa939ab1197291d1ccbaf90ecfb042.png"}}),Discourse.ExternalNavItem=Discourse.NavItem.extend({href:function(){return this.get("href")}.property("href")}),I18n.translations.en.js.filters.unanswered={title:"Unanswered",help:"Unanswered Posts"},Discourse.NavItem.reopenClass({buildList:function(e,s){var r=this._super(e,s)
return e||r.push(Discourse.ExternalNavItem.create({href:"/latest?max_posts=1",name:"unanswered"})),r}})

//# sourceMappingURL=e3c10c133330edc538cda34abee6436ed76289be.map?__ws=forum.image.sc
