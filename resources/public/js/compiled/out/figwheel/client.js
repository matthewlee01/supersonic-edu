// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30707){if((e30707 instanceof Error)){
var e = e30707;
return "Error: Unable to stringify";
} else {
throw e30707;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30710 = arguments.length;
switch (G__30710) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30708_SHARP_){
if(typeof p1__30708_SHARP_ === 'string'){
return p1__30708_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30708_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30713 = arguments.length;
var i__4500__auto___30714 = (0);
while(true){
if((i__4500__auto___30714 < len__4499__auto___30713)){
args__4502__auto__.push((arguments[i__4500__auto___30714]));

var G__30715 = (i__4500__auto___30714 + (1));
i__4500__auto___30714 = G__30715;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30712){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30712));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30717 = arguments.length;
var i__4500__auto___30718 = (0);
while(true){
if((i__4500__auto___30718 < len__4499__auto___30717)){
args__4502__auto__.push((arguments[i__4500__auto___30718]));

var G__30719 = (i__4500__auto___30718 + (1));
i__4500__auto___30718 = G__30719;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30716){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30716));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30720){
var map__30721 = p__30720;
var map__30721__$1 = ((((!((map__30721 == null)))?(((((map__30721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);
var message = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27754__auto___30800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___30800,ch){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___30800,ch){
return (function (state_30772){
var state_val_30773 = (state_30772[(1)]);
if((state_val_30773 === (7))){
var inst_30768 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30774_30801 = state_30772__$1;
(statearr_30774_30801[(2)] = inst_30768);

(statearr_30774_30801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (1))){
var state_30772__$1 = state_30772;
var statearr_30775_30802 = state_30772__$1;
(statearr_30775_30802[(2)] = null);

(statearr_30775_30802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (4))){
var inst_30725 = (state_30772[(7)]);
var inst_30725__$1 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30776 = state_30772;
(statearr_30776[(7)] = inst_30725__$1);

return statearr_30776;
})();
if(cljs.core.truth_(inst_30725__$1)){
var statearr_30777_30803 = state_30772__$1;
(statearr_30777_30803[(1)] = (5));

} else {
var statearr_30778_30804 = state_30772__$1;
(statearr_30778_30804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (15))){
var inst_30732 = (state_30772[(8)]);
var inst_30747 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30732);
var inst_30748 = cljs.core.first.call(null,inst_30747);
var inst_30749 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30748);
var inst_30750 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30749)].join('');
var inst_30751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30750);
var state_30772__$1 = state_30772;
var statearr_30779_30805 = state_30772__$1;
(statearr_30779_30805[(2)] = inst_30751);

(statearr_30779_30805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (13))){
var inst_30756 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30780_30806 = state_30772__$1;
(statearr_30780_30806[(2)] = inst_30756);

(statearr_30780_30806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (6))){
var state_30772__$1 = state_30772;
var statearr_30781_30807 = state_30772__$1;
(statearr_30781_30807[(2)] = null);

(statearr_30781_30807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (17))){
var inst_30754 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30782_30808 = state_30772__$1;
(statearr_30782_30808[(2)] = inst_30754);

(statearr_30782_30808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (3))){
var inst_30770 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30772__$1,inst_30770);
} else {
if((state_val_30773 === (12))){
var inst_30731 = (state_30772[(9)]);
var inst_30745 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30731,opts);
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30745)){
var statearr_30783_30809 = state_30772__$1;
(statearr_30783_30809[(1)] = (15));

} else {
var statearr_30784_30810 = state_30772__$1;
(statearr_30784_30810[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (2))){
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30772__$1,(4),ch);
} else {
if((state_val_30773 === (11))){
var inst_30732 = (state_30772[(8)]);
var inst_30737 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30738 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30732);
var inst_30739 = cljs.core.async.timeout.call(null,(1000));
var inst_30740 = [inst_30738,inst_30739];
var inst_30741 = (new cljs.core.PersistentVector(null,2,(5),inst_30737,inst_30740,null));
var state_30772__$1 = state_30772;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30772__$1,(14),inst_30741);
} else {
if((state_val_30773 === (9))){
var inst_30732 = (state_30772[(8)]);
var inst_30758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30759 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30732);
var inst_30760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30759);
var inst_30761 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30760)].join('');
var inst_30762 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30761);
var state_30772__$1 = (function (){var statearr_30785 = state_30772;
(statearr_30785[(10)] = inst_30758);

return statearr_30785;
})();
var statearr_30786_30811 = state_30772__$1;
(statearr_30786_30811[(2)] = inst_30762);

(statearr_30786_30811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (5))){
var inst_30725 = (state_30772[(7)]);
var inst_30727 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30728 = (new cljs.core.PersistentArrayMap(null,2,inst_30727,null));
var inst_30729 = (new cljs.core.PersistentHashSet(null,inst_30728,null));
var inst_30730 = figwheel.client.focus_msgs.call(null,inst_30729,inst_30725);
var inst_30731 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30730);
var inst_30732 = cljs.core.first.call(null,inst_30730);
var inst_30733 = figwheel.client.autoload_QMARK_.call(null);
var state_30772__$1 = (function (){var statearr_30787 = state_30772;
(statearr_30787[(8)] = inst_30732);

(statearr_30787[(9)] = inst_30731);

return statearr_30787;
})();
if(cljs.core.truth_(inst_30733)){
var statearr_30788_30812 = state_30772__$1;
(statearr_30788_30812[(1)] = (8));

} else {
var statearr_30789_30813 = state_30772__$1;
(statearr_30789_30813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (14))){
var inst_30743 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30790_30814 = state_30772__$1;
(statearr_30790_30814[(2)] = inst_30743);

(statearr_30790_30814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (16))){
var state_30772__$1 = state_30772;
var statearr_30791_30815 = state_30772__$1;
(statearr_30791_30815[(2)] = null);

(statearr_30791_30815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (10))){
var inst_30764 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30792 = state_30772;
(statearr_30792[(11)] = inst_30764);

return statearr_30792;
})();
var statearr_30793_30816 = state_30772__$1;
(statearr_30793_30816[(2)] = null);

(statearr_30793_30816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (8))){
var inst_30731 = (state_30772[(9)]);
var inst_30735 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30731,opts);
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30735)){
var statearr_30794_30817 = state_30772__$1;
(statearr_30794_30817[(1)] = (11));

} else {
var statearr_30795_30818 = state_30772__$1;
(statearr_30795_30818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27754__auto___30800,ch))
;
return ((function (switch__27666__auto__,c__27754__auto___30800,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____0 = (function (){
var statearr_30796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30796[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__);

(statearr_30796[(1)] = (1));

return statearr_30796;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____1 = (function (state_30772){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_30772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e30797){if((e30797 instanceof Object)){
var ex__27670__auto__ = e30797;
var statearr_30798_30819 = state_30772;
(statearr_30798_30819[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30820 = state_30772;
state_30772 = G__30820;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__ = function(state_30772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____1.call(this,state_30772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27667__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___30800,ch))
})();
var state__27756__auto__ = (function (){var statearr_30799 = f__27755__auto__.call(null);
(statearr_30799[(6)] = c__27754__auto___30800);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___30800,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30821_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30821_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30825 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30825){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30823 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30824 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30823,_STAR_print_fn_STAR_30824,sb,base_path_30825){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30823,_STAR_print_fn_STAR_30824,sb,base_path_30825))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30824;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30823;
}}catch (e30822){if((e30822 instanceof Error)){
var e = e30822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30825], null));
} else {
var e = e30822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30825))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30826){
var map__30827 = p__30826;
var map__30827__$1 = ((((!((map__30827 == null)))?(((((map__30827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30827):map__30827);
var opts = map__30827__$1;
var build_id = cljs.core.get.call(null,map__30827__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30827,map__30827__$1,opts,build_id){
return (function (p__30829){
var vec__30830 = p__30829;
var seq__30831 = cljs.core.seq.call(null,vec__30830);
var first__30832 = cljs.core.first.call(null,seq__30831);
var seq__30831__$1 = cljs.core.next.call(null,seq__30831);
var map__30833 = first__30832;
var map__30833__$1 = ((((!((map__30833 == null)))?(((((map__30833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30833):map__30833);
var msg = map__30833__$1;
var msg_name = cljs.core.get.call(null,map__30833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30831__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30830,seq__30831,first__30832,seq__30831__$1,map__30833,map__30833__$1,msg,msg_name,_,map__30827,map__30827__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30830,seq__30831,first__30832,seq__30831__$1,map__30833,map__30833__$1,msg,msg_name,_,map__30827,map__30827__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30827,map__30827__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30835){
var vec__30836 = p__30835;
var seq__30837 = cljs.core.seq.call(null,vec__30836);
var first__30838 = cljs.core.first.call(null,seq__30837);
var seq__30837__$1 = cljs.core.next.call(null,seq__30837);
var map__30839 = first__30838;
var map__30839__$1 = ((((!((map__30839 == null)))?(((((map__30839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30839):map__30839);
var msg = map__30839__$1;
var msg_name = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30837__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30841){
var map__30842 = p__30841;
var map__30842__$1 = ((((!((map__30842 == null)))?(((((map__30842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30842):map__30842);
var on_compile_warning = cljs.core.get.call(null,map__30842__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30842__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30842,map__30842__$1,on_compile_warning,on_compile_fail){
return (function (p__30844){
var vec__30845 = p__30844;
var seq__30846 = cljs.core.seq.call(null,vec__30845);
var first__30847 = cljs.core.first.call(null,seq__30846);
var seq__30846__$1 = cljs.core.next.call(null,seq__30846);
var map__30848 = first__30847;
var map__30848__$1 = ((((!((map__30848 == null)))?(((((map__30848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30848):map__30848);
var msg = map__30848__$1;
var msg_name = cljs.core.get.call(null,map__30848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30846__$1;
var pred__30850 = cljs.core._EQ_;
var expr__30851 = msg_name;
if(cljs.core.truth_(pred__30850.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30851))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30850.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30851))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30842,map__30842__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__,msg_hist,msg_names,msg){
return (function (state_30940){
var state_val_30941 = (state_30940[(1)]);
if((state_val_30941 === (7))){
var inst_30860 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30860)){
var statearr_30942_30989 = state_30940__$1;
(statearr_30942_30989[(1)] = (8));

} else {
var statearr_30943_30990 = state_30940__$1;
(statearr_30943_30990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (20))){
var inst_30934 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30944_30991 = state_30940__$1;
(statearr_30944_30991[(2)] = inst_30934);

(statearr_30944_30991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (27))){
var inst_30930 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30945_30992 = state_30940__$1;
(statearr_30945_30992[(2)] = inst_30930);

(statearr_30945_30992[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (1))){
var inst_30853 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30853)){
var statearr_30946_30993 = state_30940__$1;
(statearr_30946_30993[(1)] = (2));

} else {
var statearr_30947_30994 = state_30940__$1;
(statearr_30947_30994[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (24))){
var inst_30932 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30948_30995 = state_30940__$1;
(statearr_30948_30995[(2)] = inst_30932);

(statearr_30948_30995[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (4))){
var inst_30938 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30940__$1,inst_30938);
} else {
if((state_val_30941 === (15))){
var inst_30936 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30949_30996 = state_30940__$1;
(statearr_30949_30996[(2)] = inst_30936);

(statearr_30949_30996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (21))){
var inst_30889 = (state_30940[(2)]);
var inst_30890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30891 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30890);
var state_30940__$1 = (function (){var statearr_30950 = state_30940;
(statearr_30950[(7)] = inst_30889);

return statearr_30950;
})();
var statearr_30951_30997 = state_30940__$1;
(statearr_30951_30997[(2)] = inst_30891);

(statearr_30951_30997[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (31))){
var inst_30919 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30919)){
var statearr_30952_30998 = state_30940__$1;
(statearr_30952_30998[(1)] = (34));

} else {
var statearr_30953_30999 = state_30940__$1;
(statearr_30953_30999[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (32))){
var inst_30928 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30954_31000 = state_30940__$1;
(statearr_30954_31000[(2)] = inst_30928);

(statearr_30954_31000[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (33))){
var inst_30915 = (state_30940[(2)]);
var inst_30916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30916);
var state_30940__$1 = (function (){var statearr_30955 = state_30940;
(statearr_30955[(8)] = inst_30915);

return statearr_30955;
})();
var statearr_30956_31001 = state_30940__$1;
(statearr_30956_31001[(2)] = inst_30917);

(statearr_30956_31001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (13))){
var inst_30874 = figwheel.client.heads_up.clear.call(null);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(16),inst_30874);
} else {
if((state_val_30941 === (22))){
var inst_30895 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30896 = figwheel.client.heads_up.append_warning_message.call(null,inst_30895);
var state_30940__$1 = state_30940;
var statearr_30957_31002 = state_30940__$1;
(statearr_30957_31002[(2)] = inst_30896);

(statearr_30957_31002[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (36))){
var inst_30926 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30958_31003 = state_30940__$1;
(statearr_30958_31003[(2)] = inst_30926);

(statearr_30958_31003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (29))){
var inst_30906 = (state_30940[(2)]);
var inst_30907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30907);
var state_30940__$1 = (function (){var statearr_30959 = state_30940;
(statearr_30959[(9)] = inst_30906);

return statearr_30959;
})();
var statearr_30960_31004 = state_30940__$1;
(statearr_30960_31004[(2)] = inst_30908);

(statearr_30960_31004[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (6))){
var inst_30855 = (state_30940[(10)]);
var state_30940__$1 = state_30940;
var statearr_30961_31005 = state_30940__$1;
(statearr_30961_31005[(2)] = inst_30855);

(statearr_30961_31005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (28))){
var inst_30902 = (state_30940[(2)]);
var inst_30903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30904 = figwheel.client.heads_up.display_warning.call(null,inst_30903);
var state_30940__$1 = (function (){var statearr_30962 = state_30940;
(statearr_30962[(11)] = inst_30902);

return statearr_30962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(29),inst_30904);
} else {
if((state_val_30941 === (25))){
var inst_30900 = figwheel.client.heads_up.clear.call(null);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(28),inst_30900);
} else {
if((state_val_30941 === (34))){
var inst_30921 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(37),inst_30921);
} else {
if((state_val_30941 === (17))){
var inst_30880 = (state_30940[(2)]);
var inst_30881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30881);
var state_30940__$1 = (function (){var statearr_30963 = state_30940;
(statearr_30963[(12)] = inst_30880);

return statearr_30963;
})();
var statearr_30964_31006 = state_30940__$1;
(statearr_30964_31006[(2)] = inst_30882);

(statearr_30964_31006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (3))){
var inst_30872 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30872)){
var statearr_30965_31007 = state_30940__$1;
(statearr_30965_31007[(1)] = (13));

} else {
var statearr_30966_31008 = state_30940__$1;
(statearr_30966_31008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (12))){
var inst_30868 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30967_31009 = state_30940__$1;
(statearr_30967_31009[(2)] = inst_30868);

(statearr_30967_31009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (2))){
var inst_30855 = (state_30940[(10)]);
var inst_30855__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30940__$1 = (function (){var statearr_30968 = state_30940;
(statearr_30968[(10)] = inst_30855__$1);

return statearr_30968;
})();
if(cljs.core.truth_(inst_30855__$1)){
var statearr_30969_31010 = state_30940__$1;
(statearr_30969_31010[(1)] = (5));

} else {
var statearr_30970_31011 = state_30940__$1;
(statearr_30970_31011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (23))){
var inst_30898 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30898)){
var statearr_30971_31012 = state_30940__$1;
(statearr_30971_31012[(1)] = (25));

} else {
var statearr_30972_31013 = state_30940__$1;
(statearr_30972_31013[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (35))){
var state_30940__$1 = state_30940;
var statearr_30973_31014 = state_30940__$1;
(statearr_30973_31014[(2)] = null);

(statearr_30973_31014[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (19))){
var inst_30893 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30893)){
var statearr_30974_31015 = state_30940__$1;
(statearr_30974_31015[(1)] = (22));

} else {
var statearr_30975_31016 = state_30940__$1;
(statearr_30975_31016[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (11))){
var inst_30864 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30976_31017 = state_30940__$1;
(statearr_30976_31017[(2)] = inst_30864);

(statearr_30976_31017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (9))){
var inst_30866 = figwheel.client.heads_up.clear.call(null);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(12),inst_30866);
} else {
if((state_val_30941 === (5))){
var inst_30857 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30940__$1 = state_30940;
var statearr_30977_31018 = state_30940__$1;
(statearr_30977_31018[(2)] = inst_30857);

(statearr_30977_31018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (14))){
var inst_30884 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30884)){
var statearr_30978_31019 = state_30940__$1;
(statearr_30978_31019[(1)] = (18));

} else {
var statearr_30979_31020 = state_30940__$1;
(statearr_30979_31020[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (26))){
var inst_30910 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30910)){
var statearr_30980_31021 = state_30940__$1;
(statearr_30980_31021[(1)] = (30));

} else {
var statearr_30981_31022 = state_30940__$1;
(statearr_30981_31022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (16))){
var inst_30876 = (state_30940[(2)]);
var inst_30877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30878 = figwheel.client.heads_up.display_exception.call(null,inst_30877);
var state_30940__$1 = (function (){var statearr_30982 = state_30940;
(statearr_30982[(13)] = inst_30876);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(17),inst_30878);
} else {
if((state_val_30941 === (30))){
var inst_30912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30913 = figwheel.client.heads_up.display_warning.call(null,inst_30912);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(33),inst_30913);
} else {
if((state_val_30941 === (10))){
var inst_30870 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30983_31023 = state_30940__$1;
(statearr_30983_31023[(2)] = inst_30870);

(statearr_30983_31023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (18))){
var inst_30886 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30887 = figwheel.client.heads_up.display_exception.call(null,inst_30886);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(21),inst_30887);
} else {
if((state_val_30941 === (37))){
var inst_30923 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30984_31024 = state_30940__$1;
(statearr_30984_31024[(2)] = inst_30923);

(statearr_30984_31024[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (8))){
var inst_30862 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(11),inst_30862);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27754__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27666__auto__,c__27754__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____0 = (function (){
var statearr_30985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30985[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__);

(statearr_30985[(1)] = (1));

return statearr_30985;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____1 = (function (state_30940){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_30940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e30986){if((e30986 instanceof Object)){
var ex__27670__auto__ = e30986;
var statearr_30987_31025 = state_30940;
(statearr_30987_31025[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31026 = state_30940;
state_30940 = G__31026;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__ = function(state_30940){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____1.call(this,state_30940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__,msg_hist,msg_names,msg))
})();
var state__27756__auto__ = (function (){var statearr_30988 = f__27755__auto__.call(null);
(statearr_30988[(6)] = c__27754__auto__);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__,msg_hist,msg_names,msg))
);

return c__27754__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27754__auto___31055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___31055,ch){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___31055,ch){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
var statearr_31043_31056 = state_31041__$1;
(statearr_31043_31056[(2)] = null);

(statearr_31043_31056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (2))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(4),ch);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (4))){
var inst_31029 = (state_31041[(7)]);
var inst_31029__$1 = (state_31041[(2)]);
var state_31041__$1 = (function (){var statearr_31044 = state_31041;
(statearr_31044[(7)] = inst_31029__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_31029__$1)){
var statearr_31045_31057 = state_31041__$1;
(statearr_31045_31057[(1)] = (5));

} else {
var statearr_31046_31058 = state_31041__$1;
(statearr_31046_31058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (5))){
var inst_31029 = (state_31041[(7)]);
var inst_31031 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31029);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(8),inst_31031);
} else {
if((state_val_31042 === (6))){
var state_31041__$1 = state_31041;
var statearr_31047_31059 = state_31041__$1;
(statearr_31047_31059[(2)] = null);

(statearr_31047_31059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (7))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31048_31060 = state_31041__$1;
(statearr_31048_31060[(2)] = inst_31037);

(statearr_31048_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (8))){
var inst_31033 = (state_31041[(2)]);
var state_31041__$1 = (function (){var statearr_31049 = state_31041;
(statearr_31049[(8)] = inst_31033);

return statearr_31049;
})();
var statearr_31050_31061 = state_31041__$1;
(statearr_31050_31061[(2)] = null);

(statearr_31050_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27754__auto___31055,ch))
;
return ((function (switch__27666__auto__,c__27754__auto___31055,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27667__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27667__auto____0 = (function (){
var statearr_31051 = [null,null,null,null,null,null,null,null,null];
(statearr_31051[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27667__auto__);

(statearr_31051[(1)] = (1));

return statearr_31051;
});
var figwheel$client$heads_up_plugin_$_state_machine__27667__auto____1 = (function (state_31041){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_31041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e31052){if((e31052 instanceof Object)){
var ex__27670__auto__ = e31052;
var statearr_31053_31062 = state_31041;
(statearr_31053_31062[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31063 = state_31041;
state_31041 = G__31063;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27667__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27667__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27667__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27667__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___31055,ch))
})();
var state__27756__auto__ = (function (){var statearr_31054 = f__27755__auto__.call(null);
(statearr_31054[(6)] = c__27754__auto___31055);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___31055,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__){
return (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (1))){
var inst_31064 = cljs.core.async.timeout.call(null,(3000));
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31069__$1,(2),inst_31064);
} else {
if((state_val_31070 === (2))){
var inst_31066 = (state_31069[(2)]);
var inst_31067 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31069__$1 = (function (){var statearr_31071 = state_31069;
(statearr_31071[(7)] = inst_31066);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31069__$1,inst_31067);
} else {
return null;
}
}
});})(c__27754__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____1 = (function (state_31069){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_31069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__27670__auto__ = e31073;
var statearr_31074_31076 = state_31069;
(statearr_31074_31076[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31077 = state_31069;
state_31069 = G__31077;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27667__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__))
})();
var state__27756__auto__ = (function (){var statearr_31075 = f__27755__auto__.call(null);
(statearr_31075[(6)] = c__27754__auto__);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__))
);

return c__27754__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31084){
var state_val_31085 = (state_31084[(1)]);
if((state_val_31085 === (1))){
var inst_31078 = cljs.core.async.timeout.call(null,(2000));
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31084__$1,(2),inst_31078);
} else {
if((state_val_31085 === (2))){
var inst_31080 = (state_31084[(2)]);
var inst_31081 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31082 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31081);
var state_31084__$1 = (function (){var statearr_31086 = state_31084;
(statearr_31086[(7)] = inst_31080);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31084__$1,inst_31082);
} else {
return null;
}
}
});})(c__27754__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____0 = (function (){
var statearr_31087 = [null,null,null,null,null,null,null,null];
(statearr_31087[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__);

(statearr_31087[(1)] = (1));

return statearr_31087;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____1 = (function (state_31084){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_31084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e31088){if((e31088 instanceof Object)){
var ex__27670__auto__ = e31088;
var statearr_31089_31091 = state_31084;
(statearr_31089_31091[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31092 = state_31084;
state_31084 = G__31092;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__ = function(state_31084){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____1.call(this,state_31084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27756__auto__ = (function (){var statearr_31090 = f__27755__auto__.call(null);
(statearr_31090[(6)] = c__27754__auto__);

return statearr_31090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__,figwheel_version,temp__4657__auto__))
);

return c__27754__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31093){
var map__31094 = p__31093;
var map__31094__$1 = ((((!((map__31094 == null)))?(((((map__31094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094):map__31094);
var file = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31096 = "";
var G__31096__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31096),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31096);
var G__31096__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31096__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31096__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31096__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31096__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31097){
var map__31098 = p__31097;
var map__31098__$1 = ((((!((map__31098 == null)))?(((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var ed = map__31098__$1;
var formatted_exception = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31100_31104 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31101_31105 = null;
var count__31102_31106 = (0);
var i__31103_31107 = (0);
while(true){
if((i__31103_31107 < count__31102_31106)){
var msg_31108 = cljs.core._nth.call(null,chunk__31101_31105,i__31103_31107);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31108);


var G__31109 = seq__31100_31104;
var G__31110 = chunk__31101_31105;
var G__31111 = count__31102_31106;
var G__31112 = (i__31103_31107 + (1));
seq__31100_31104 = G__31109;
chunk__31101_31105 = G__31110;
count__31102_31106 = G__31111;
i__31103_31107 = G__31112;
continue;
} else {
var temp__4657__auto___31113 = cljs.core.seq.call(null,seq__31100_31104);
if(temp__4657__auto___31113){
var seq__31100_31114__$1 = temp__4657__auto___31113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31100_31114__$1)){
var c__4319__auto___31115 = cljs.core.chunk_first.call(null,seq__31100_31114__$1);
var G__31116 = cljs.core.chunk_rest.call(null,seq__31100_31114__$1);
var G__31117 = c__4319__auto___31115;
var G__31118 = cljs.core.count.call(null,c__4319__auto___31115);
var G__31119 = (0);
seq__31100_31104 = G__31116;
chunk__31101_31105 = G__31117;
count__31102_31106 = G__31118;
i__31103_31107 = G__31119;
continue;
} else {
var msg_31120 = cljs.core.first.call(null,seq__31100_31114__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31120);


var G__31121 = cljs.core.next.call(null,seq__31100_31114__$1);
var G__31122 = null;
var G__31123 = (0);
var G__31124 = (0);
seq__31100_31104 = G__31121;
chunk__31101_31105 = G__31122;
count__31102_31106 = G__31123;
i__31103_31107 = G__31124;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31125){
var map__31126 = p__31125;
var map__31126__$1 = ((((!((map__31126 == null)))?(((((map__31126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31126):map__31126);
var w = map__31126__$1;
var message = cljs.core.get.call(null,map__31126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31128 = cljs.core.seq.call(null,plugins);
var chunk__31129 = null;
var count__31130 = (0);
var i__31131 = (0);
while(true){
if((i__31131 < count__31130)){
var vec__31132 = cljs.core._nth.call(null,chunk__31129,i__31131);
var k = cljs.core.nth.call(null,vec__31132,(0),null);
var plugin = cljs.core.nth.call(null,vec__31132,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31138 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31128,chunk__31129,count__31130,i__31131,pl_31138,vec__31132,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31138.call(null,msg_hist);
});})(seq__31128,chunk__31129,count__31130,i__31131,pl_31138,vec__31132,k,plugin))
);
} else {
}


var G__31139 = seq__31128;
var G__31140 = chunk__31129;
var G__31141 = count__31130;
var G__31142 = (i__31131 + (1));
seq__31128 = G__31139;
chunk__31129 = G__31140;
count__31130 = G__31141;
i__31131 = G__31142;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31128);
if(temp__4657__auto__){
var seq__31128__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31128__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31128__$1);
var G__31143 = cljs.core.chunk_rest.call(null,seq__31128__$1);
var G__31144 = c__4319__auto__;
var G__31145 = cljs.core.count.call(null,c__4319__auto__);
var G__31146 = (0);
seq__31128 = G__31143;
chunk__31129 = G__31144;
count__31130 = G__31145;
i__31131 = G__31146;
continue;
} else {
var vec__31135 = cljs.core.first.call(null,seq__31128__$1);
var k = cljs.core.nth.call(null,vec__31135,(0),null);
var plugin = cljs.core.nth.call(null,vec__31135,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31147 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31128,chunk__31129,count__31130,i__31131,pl_31147,vec__31135,k,plugin,seq__31128__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31147.call(null,msg_hist);
});})(seq__31128,chunk__31129,count__31130,i__31131,pl_31147,vec__31135,k,plugin,seq__31128__$1,temp__4657__auto__))
);
} else {
}


var G__31148 = cljs.core.next.call(null,seq__31128__$1);
var G__31149 = null;
var G__31150 = (0);
var G__31151 = (0);
seq__31128 = G__31148;
chunk__31129 = G__31149;
count__31130 = G__31150;
i__31131 = G__31151;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31153 = arguments.length;
switch (G__31153) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31154_31159 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31155_31160 = null;
var count__31156_31161 = (0);
var i__31157_31162 = (0);
while(true){
if((i__31157_31162 < count__31156_31161)){
var msg_31163 = cljs.core._nth.call(null,chunk__31155_31160,i__31157_31162);
figwheel.client.socket.handle_incoming_message.call(null,msg_31163);


var G__31164 = seq__31154_31159;
var G__31165 = chunk__31155_31160;
var G__31166 = count__31156_31161;
var G__31167 = (i__31157_31162 + (1));
seq__31154_31159 = G__31164;
chunk__31155_31160 = G__31165;
count__31156_31161 = G__31166;
i__31157_31162 = G__31167;
continue;
} else {
var temp__4657__auto___31168 = cljs.core.seq.call(null,seq__31154_31159);
if(temp__4657__auto___31168){
var seq__31154_31169__$1 = temp__4657__auto___31168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31154_31169__$1)){
var c__4319__auto___31170 = cljs.core.chunk_first.call(null,seq__31154_31169__$1);
var G__31171 = cljs.core.chunk_rest.call(null,seq__31154_31169__$1);
var G__31172 = c__4319__auto___31170;
var G__31173 = cljs.core.count.call(null,c__4319__auto___31170);
var G__31174 = (0);
seq__31154_31159 = G__31171;
chunk__31155_31160 = G__31172;
count__31156_31161 = G__31173;
i__31157_31162 = G__31174;
continue;
} else {
var msg_31175 = cljs.core.first.call(null,seq__31154_31169__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31175);


var G__31176 = cljs.core.next.call(null,seq__31154_31169__$1);
var G__31177 = null;
var G__31178 = (0);
var G__31179 = (0);
seq__31154_31159 = G__31176;
chunk__31155_31160 = G__31177;
count__31156_31161 = G__31178;
i__31157_31162 = G__31179;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31184 = arguments.length;
var i__4500__auto___31185 = (0);
while(true){
if((i__4500__auto___31185 < len__4499__auto___31184)){
args__4502__auto__.push((arguments[i__4500__auto___31185]));

var G__31186 = (i__4500__auto___31185 + (1));
i__4500__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31181){
var map__31182 = p__31181;
var map__31182__$1 = ((((!((map__31182 == null)))?(((((map__31182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182):map__31182);
var opts = map__31182__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31180){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31180));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31187){if((e31187 instanceof Error)){
var e = e31187;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31187;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31188){
var map__31189 = p__31188;
var map__31189__$1 = ((((!((map__31189 == null)))?(((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var msg_name = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1532367480891
