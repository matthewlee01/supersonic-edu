// Compiled by ClojureScript 1.10.238 {}
goog.provide('sonic.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('sonic.events');
goog.require('sonic.views');
goog.require('sonic.config');
goog.require('sonic.tests');
sonic.core.dev_setup = (function sonic$core$dev_setup(){
if(sonic.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
sonic.core.mount_root = (function sonic$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonic.views.main_panel], null),document.getElementById("app"));
});
sonic.core.rewind = (function sonic$core$rewind(turn){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sonic.events","rewindTurn","sonic.events/rewindTurn",-734079357),turn], null));
});
sonic.core.devLog = (function sonic$core$devLog(string){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devMode","devMode",-540703912)], null))))){
return cljs.core.println.call(null,string);
} else {
return null;
}
});
sonic.core.devMode = (function sonic$core$devMode(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sonic.events","toggleDevMode","sonic.events/toggleDevMode",-883524574)], null));
});
sonic.core.init = (function sonic$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sonic.events","initialize-db","sonic.events/initialize-db",-641039695)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sonic.events","gameStart","sonic.events/gameStart",-1041074427)], null));

sonic.core.dev_setup.call(null);

return sonic.core.mount_root.call(null);
});
goog.exportSymbol('sonic.core.init', sonic.core.init);

//# sourceMappingURL=core.js.map?rel=1532369509050
