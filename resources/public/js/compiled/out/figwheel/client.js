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
}catch (e26053){if((e26053 instanceof Error)){
var e = e26053;
return "Error: Unable to stringify";
} else {
throw e26053;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26056 = arguments.length;
switch (G__26056) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26054_SHARP_){
if(typeof p1__26054_SHARP_ === 'string'){
return p1__26054_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26054_SHARP_);
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
var len__4499__auto___26059 = arguments.length;
var i__4500__auto___26060 = (0);
while(true){
if((i__4500__auto___26060 < len__4499__auto___26059)){
args__4502__auto__.push((arguments[i__4500__auto___26060]));

var G__26061 = (i__4500__auto___26060 + (1));
i__4500__auto___26060 = G__26061;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26058){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26058));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26063 = arguments.length;
var i__4500__auto___26064 = (0);
while(true){
if((i__4500__auto___26064 < len__4499__auto___26063)){
args__4502__auto__.push((arguments[i__4500__auto___26064]));

var G__26065 = (i__4500__auto___26064 + (1));
i__4500__auto___26064 = G__26065;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26062){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26062));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26066){
var map__26067 = p__26066;
var map__26067__$1 = ((((!((map__26067 == null)))?(((((map__26067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26067):map__26067);
var message = cljs.core.get.call(null,map__26067__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26067__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22786__auto___26146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___26146,ch){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___26146,ch){
return (function (state_26118){
var state_val_26119 = (state_26118[(1)]);
if((state_val_26119 === (7))){
var inst_26114 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26120_26147 = state_26118__$1;
(statearr_26120_26147[(2)] = inst_26114);

(statearr_26120_26147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (1))){
var state_26118__$1 = state_26118;
var statearr_26121_26148 = state_26118__$1;
(statearr_26121_26148[(2)] = null);

(statearr_26121_26148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (4))){
var inst_26071 = (state_26118[(7)]);
var inst_26071__$1 = (state_26118[(2)]);
var state_26118__$1 = (function (){var statearr_26122 = state_26118;
(statearr_26122[(7)] = inst_26071__$1);

return statearr_26122;
})();
if(cljs.core.truth_(inst_26071__$1)){
var statearr_26123_26149 = state_26118__$1;
(statearr_26123_26149[(1)] = (5));

} else {
var statearr_26124_26150 = state_26118__$1;
(statearr_26124_26150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (15))){
var inst_26078 = (state_26118[(8)]);
var inst_26093 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26078);
var inst_26094 = cljs.core.first.call(null,inst_26093);
var inst_26095 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26094);
var inst_26096 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26095)].join('');
var inst_26097 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26096);
var state_26118__$1 = state_26118;
var statearr_26125_26151 = state_26118__$1;
(statearr_26125_26151[(2)] = inst_26097);

(statearr_26125_26151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (13))){
var inst_26102 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26126_26152 = state_26118__$1;
(statearr_26126_26152[(2)] = inst_26102);

(statearr_26126_26152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (6))){
var state_26118__$1 = state_26118;
var statearr_26127_26153 = state_26118__$1;
(statearr_26127_26153[(2)] = null);

(statearr_26127_26153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (17))){
var inst_26100 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26128_26154 = state_26118__$1;
(statearr_26128_26154[(2)] = inst_26100);

(statearr_26128_26154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (3))){
var inst_26116 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26118__$1,inst_26116);
} else {
if((state_val_26119 === (12))){
var inst_26077 = (state_26118[(9)]);
var inst_26091 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26077,opts);
var state_26118__$1 = state_26118;
if(cljs.core.truth_(inst_26091)){
var statearr_26129_26155 = state_26118__$1;
(statearr_26129_26155[(1)] = (15));

} else {
var statearr_26130_26156 = state_26118__$1;
(statearr_26130_26156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (2))){
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26118__$1,(4),ch);
} else {
if((state_val_26119 === (11))){
var inst_26078 = (state_26118[(8)]);
var inst_26083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26084 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26078);
var inst_26085 = cljs.core.async.timeout.call(null,(1000));
var inst_26086 = [inst_26084,inst_26085];
var inst_26087 = (new cljs.core.PersistentVector(null,2,(5),inst_26083,inst_26086,null));
var state_26118__$1 = state_26118;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26118__$1,(14),inst_26087);
} else {
if((state_val_26119 === (9))){
var inst_26078 = (state_26118[(8)]);
var inst_26104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26105 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26078);
var inst_26106 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26105);
var inst_26107 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26106)].join('');
var inst_26108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26107);
var state_26118__$1 = (function (){var statearr_26131 = state_26118;
(statearr_26131[(10)] = inst_26104);

return statearr_26131;
})();
var statearr_26132_26157 = state_26118__$1;
(statearr_26132_26157[(2)] = inst_26108);

(statearr_26132_26157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (5))){
var inst_26071 = (state_26118[(7)]);
var inst_26073 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26074 = (new cljs.core.PersistentArrayMap(null,2,inst_26073,null));
var inst_26075 = (new cljs.core.PersistentHashSet(null,inst_26074,null));
var inst_26076 = figwheel.client.focus_msgs.call(null,inst_26075,inst_26071);
var inst_26077 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26076);
var inst_26078 = cljs.core.first.call(null,inst_26076);
var inst_26079 = figwheel.client.autoload_QMARK_.call(null);
var state_26118__$1 = (function (){var statearr_26133 = state_26118;
(statearr_26133[(8)] = inst_26078);

(statearr_26133[(9)] = inst_26077);

return statearr_26133;
})();
if(cljs.core.truth_(inst_26079)){
var statearr_26134_26158 = state_26118__$1;
(statearr_26134_26158[(1)] = (8));

} else {
var statearr_26135_26159 = state_26118__$1;
(statearr_26135_26159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (14))){
var inst_26089 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26136_26160 = state_26118__$1;
(statearr_26136_26160[(2)] = inst_26089);

(statearr_26136_26160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (16))){
var state_26118__$1 = state_26118;
var statearr_26137_26161 = state_26118__$1;
(statearr_26137_26161[(2)] = null);

(statearr_26137_26161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (10))){
var inst_26110 = (state_26118[(2)]);
var state_26118__$1 = (function (){var statearr_26138 = state_26118;
(statearr_26138[(11)] = inst_26110);

return statearr_26138;
})();
var statearr_26139_26162 = state_26118__$1;
(statearr_26139_26162[(2)] = null);

(statearr_26139_26162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (8))){
var inst_26077 = (state_26118[(9)]);
var inst_26081 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26077,opts);
var state_26118__$1 = state_26118;
if(cljs.core.truth_(inst_26081)){
var statearr_26140_26163 = state_26118__$1;
(statearr_26140_26163[(1)] = (11));

} else {
var statearr_26141_26164 = state_26118__$1;
(statearr_26141_26164[(1)] = (12));

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
});})(c__22786__auto___26146,ch))
;
return ((function (switch__22698__auto__,c__22786__auto___26146,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____0 = (function (){
var statearr_26142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26142[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__);

(statearr_26142[(1)] = (1));

return statearr_26142;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____1 = (function (state_26118){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_26118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e26143){if((e26143 instanceof Object)){
var ex__22702__auto__ = e26143;
var statearr_26144_26165 = state_26118;
(statearr_26144_26165[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_26118;
state_26118 = G__26166;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__ = function(state_26118){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____1.call(this,state_26118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22699__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___26146,ch))
})();
var state__22788__auto__ = (function (){var statearr_26145 = f__22787__auto__.call(null);
(statearr_26145[(6)] = c__22786__auto___26146);

return statearr_26145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___26146,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26167_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26167_SHARP_));
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
var base_path_26171 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26171){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26169 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26170 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26169,_STAR_print_fn_STAR_26170,sb,base_path_26171){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_26169,_STAR_print_fn_STAR_26170,sb,base_path_26171))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26170;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26169;
}}catch (e26168){if((e26168 instanceof Error)){
var e = e26168;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26171], null));
} else {
var e = e26168;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26171))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26172){
var map__26173 = p__26172;
var map__26173__$1 = ((((!((map__26173 == null)))?(((((map__26173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26173):map__26173);
var opts = map__26173__$1;
var build_id = cljs.core.get.call(null,map__26173__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26173,map__26173__$1,opts,build_id){
return (function (p__26175){
var vec__26176 = p__26175;
var seq__26177 = cljs.core.seq.call(null,vec__26176);
var first__26178 = cljs.core.first.call(null,seq__26177);
var seq__26177__$1 = cljs.core.next.call(null,seq__26177);
var map__26179 = first__26178;
var map__26179__$1 = ((((!((map__26179 == null)))?(((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26179):map__26179);
var msg = map__26179__$1;
var msg_name = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26177__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26176,seq__26177,first__26178,seq__26177__$1,map__26179,map__26179__$1,msg,msg_name,_,map__26173,map__26173__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26176,seq__26177,first__26178,seq__26177__$1,map__26179,map__26179__$1,msg,msg_name,_,map__26173,map__26173__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26173,map__26173__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26181){
var vec__26182 = p__26181;
var seq__26183 = cljs.core.seq.call(null,vec__26182);
var first__26184 = cljs.core.first.call(null,seq__26183);
var seq__26183__$1 = cljs.core.next.call(null,seq__26183);
var map__26185 = first__26184;
var map__26185__$1 = ((((!((map__26185 == null)))?(((((map__26185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26185):map__26185);
var msg = map__26185__$1;
var msg_name = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26183__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26187){
var map__26188 = p__26187;
var map__26188__$1 = ((((!((map__26188 == null)))?(((((map__26188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26188):map__26188);
var on_compile_warning = cljs.core.get.call(null,map__26188__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26188__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26188,map__26188__$1,on_compile_warning,on_compile_fail){
return (function (p__26190){
var vec__26191 = p__26190;
var seq__26192 = cljs.core.seq.call(null,vec__26191);
var first__26193 = cljs.core.first.call(null,seq__26192);
var seq__26192__$1 = cljs.core.next.call(null,seq__26192);
var map__26194 = first__26193;
var map__26194__$1 = ((((!((map__26194 == null)))?(((((map__26194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26194):map__26194);
var msg = map__26194__$1;
var msg_name = cljs.core.get.call(null,map__26194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26192__$1;
var pred__26196 = cljs.core._EQ_;
var expr__26197 = msg_name;
if(cljs.core.truth_(pred__26196.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26197))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26196.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26197))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26188,map__26188__$1,on_compile_warning,on_compile_fail))
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__,msg_hist,msg_names,msg){
return (function (state_26286){
var state_val_26287 = (state_26286[(1)]);
if((state_val_26287 === (7))){
var inst_26206 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26206)){
var statearr_26288_26335 = state_26286__$1;
(statearr_26288_26335[(1)] = (8));

} else {
var statearr_26289_26336 = state_26286__$1;
(statearr_26289_26336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (20))){
var inst_26280 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26290_26337 = state_26286__$1;
(statearr_26290_26337[(2)] = inst_26280);

(statearr_26290_26337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (27))){
var inst_26276 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26291_26338 = state_26286__$1;
(statearr_26291_26338[(2)] = inst_26276);

(statearr_26291_26338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (1))){
var inst_26199 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26199)){
var statearr_26292_26339 = state_26286__$1;
(statearr_26292_26339[(1)] = (2));

} else {
var statearr_26293_26340 = state_26286__$1;
(statearr_26293_26340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (24))){
var inst_26278 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26294_26341 = state_26286__$1;
(statearr_26294_26341[(2)] = inst_26278);

(statearr_26294_26341[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (4))){
var inst_26284 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26286__$1,inst_26284);
} else {
if((state_val_26287 === (15))){
var inst_26282 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26295_26342 = state_26286__$1;
(statearr_26295_26342[(2)] = inst_26282);

(statearr_26295_26342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (21))){
var inst_26235 = (state_26286[(2)]);
var inst_26236 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26237 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26236);
var state_26286__$1 = (function (){var statearr_26296 = state_26286;
(statearr_26296[(7)] = inst_26235);

return statearr_26296;
})();
var statearr_26297_26343 = state_26286__$1;
(statearr_26297_26343[(2)] = inst_26237);

(statearr_26297_26343[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (31))){
var inst_26265 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26265)){
var statearr_26298_26344 = state_26286__$1;
(statearr_26298_26344[(1)] = (34));

} else {
var statearr_26299_26345 = state_26286__$1;
(statearr_26299_26345[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (32))){
var inst_26274 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26300_26346 = state_26286__$1;
(statearr_26300_26346[(2)] = inst_26274);

(statearr_26300_26346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (33))){
var inst_26261 = (state_26286[(2)]);
var inst_26262 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26263 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26262);
var state_26286__$1 = (function (){var statearr_26301 = state_26286;
(statearr_26301[(8)] = inst_26261);

return statearr_26301;
})();
var statearr_26302_26347 = state_26286__$1;
(statearr_26302_26347[(2)] = inst_26263);

(statearr_26302_26347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (13))){
var inst_26220 = figwheel.client.heads_up.clear.call(null);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(16),inst_26220);
} else {
if((state_val_26287 === (22))){
var inst_26241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26242 = figwheel.client.heads_up.append_warning_message.call(null,inst_26241);
var state_26286__$1 = state_26286;
var statearr_26303_26348 = state_26286__$1;
(statearr_26303_26348[(2)] = inst_26242);

(statearr_26303_26348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (36))){
var inst_26272 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26304_26349 = state_26286__$1;
(statearr_26304_26349[(2)] = inst_26272);

(statearr_26304_26349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (29))){
var inst_26252 = (state_26286[(2)]);
var inst_26253 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26254 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26253);
var state_26286__$1 = (function (){var statearr_26305 = state_26286;
(statearr_26305[(9)] = inst_26252);

return statearr_26305;
})();
var statearr_26306_26350 = state_26286__$1;
(statearr_26306_26350[(2)] = inst_26254);

(statearr_26306_26350[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (6))){
var inst_26201 = (state_26286[(10)]);
var state_26286__$1 = state_26286;
var statearr_26307_26351 = state_26286__$1;
(statearr_26307_26351[(2)] = inst_26201);

(statearr_26307_26351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (28))){
var inst_26248 = (state_26286[(2)]);
var inst_26249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26250 = figwheel.client.heads_up.display_warning.call(null,inst_26249);
var state_26286__$1 = (function (){var statearr_26308 = state_26286;
(statearr_26308[(11)] = inst_26248);

return statearr_26308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(29),inst_26250);
} else {
if((state_val_26287 === (25))){
var inst_26246 = figwheel.client.heads_up.clear.call(null);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(28),inst_26246);
} else {
if((state_val_26287 === (34))){
var inst_26267 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(37),inst_26267);
} else {
if((state_val_26287 === (17))){
var inst_26226 = (state_26286[(2)]);
var inst_26227 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26228 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26227);
var state_26286__$1 = (function (){var statearr_26309 = state_26286;
(statearr_26309[(12)] = inst_26226);

return statearr_26309;
})();
var statearr_26310_26352 = state_26286__$1;
(statearr_26310_26352[(2)] = inst_26228);

(statearr_26310_26352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (3))){
var inst_26218 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26218)){
var statearr_26311_26353 = state_26286__$1;
(statearr_26311_26353[(1)] = (13));

} else {
var statearr_26312_26354 = state_26286__$1;
(statearr_26312_26354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (12))){
var inst_26214 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26313_26355 = state_26286__$1;
(statearr_26313_26355[(2)] = inst_26214);

(statearr_26313_26355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (2))){
var inst_26201 = (state_26286[(10)]);
var inst_26201__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26286__$1 = (function (){var statearr_26314 = state_26286;
(statearr_26314[(10)] = inst_26201__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26201__$1)){
var statearr_26315_26356 = state_26286__$1;
(statearr_26315_26356[(1)] = (5));

} else {
var statearr_26316_26357 = state_26286__$1;
(statearr_26316_26357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (23))){
var inst_26244 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26244)){
var statearr_26317_26358 = state_26286__$1;
(statearr_26317_26358[(1)] = (25));

} else {
var statearr_26318_26359 = state_26286__$1;
(statearr_26318_26359[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (35))){
var state_26286__$1 = state_26286;
var statearr_26319_26360 = state_26286__$1;
(statearr_26319_26360[(2)] = null);

(statearr_26319_26360[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (19))){
var inst_26239 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26239)){
var statearr_26320_26361 = state_26286__$1;
(statearr_26320_26361[(1)] = (22));

} else {
var statearr_26321_26362 = state_26286__$1;
(statearr_26321_26362[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (11))){
var inst_26210 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26322_26363 = state_26286__$1;
(statearr_26322_26363[(2)] = inst_26210);

(statearr_26322_26363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (9))){
var inst_26212 = figwheel.client.heads_up.clear.call(null);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(12),inst_26212);
} else {
if((state_val_26287 === (5))){
var inst_26203 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26286__$1 = state_26286;
var statearr_26323_26364 = state_26286__$1;
(statearr_26323_26364[(2)] = inst_26203);

(statearr_26323_26364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (14))){
var inst_26230 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26230)){
var statearr_26324_26365 = state_26286__$1;
(statearr_26324_26365[(1)] = (18));

} else {
var statearr_26325_26366 = state_26286__$1;
(statearr_26325_26366[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (26))){
var inst_26256 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26286__$1 = state_26286;
if(cljs.core.truth_(inst_26256)){
var statearr_26326_26367 = state_26286__$1;
(statearr_26326_26367[(1)] = (30));

} else {
var statearr_26327_26368 = state_26286__$1;
(statearr_26327_26368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (16))){
var inst_26222 = (state_26286[(2)]);
var inst_26223 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26224 = figwheel.client.heads_up.display_exception.call(null,inst_26223);
var state_26286__$1 = (function (){var statearr_26328 = state_26286;
(statearr_26328[(13)] = inst_26222);

return statearr_26328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(17),inst_26224);
} else {
if((state_val_26287 === (30))){
var inst_26258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26259 = figwheel.client.heads_up.display_warning.call(null,inst_26258);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(33),inst_26259);
} else {
if((state_val_26287 === (10))){
var inst_26216 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26329_26369 = state_26286__$1;
(statearr_26329_26369[(2)] = inst_26216);

(statearr_26329_26369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (18))){
var inst_26232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26233 = figwheel.client.heads_up.display_exception.call(null,inst_26232);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(21),inst_26233);
} else {
if((state_val_26287 === (37))){
var inst_26269 = (state_26286[(2)]);
var state_26286__$1 = state_26286;
var statearr_26330_26370 = state_26286__$1;
(statearr_26330_26370[(2)] = inst_26269);

(statearr_26330_26370[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26287 === (8))){
var inst_26208 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26286__$1 = state_26286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,(11),inst_26208);
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
});})(c__22786__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22698__auto__,c__22786__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____1 = (function (state_26286){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_26286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e26332){if((e26332 instanceof Object)){
var ex__22702__auto__ = e26332;
var statearr_26333_26371 = state_26286;
(statearr_26333_26371[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26372 = state_26286;
state_26286 = G__26372;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__ = function(state_26286){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____1.call(this,state_26286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__,msg_hist,msg_names,msg))
})();
var state__22788__auto__ = (function (){var statearr_26334 = f__22787__auto__.call(null);
(statearr_26334[(6)] = c__22786__auto__);

return statearr_26334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,msg_hist,msg_names,msg))
);

return c__22786__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22786__auto___26401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___26401,ch){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___26401,ch){
return (function (state_26387){
var state_val_26388 = (state_26387[(1)]);
if((state_val_26388 === (1))){
var state_26387__$1 = state_26387;
var statearr_26389_26402 = state_26387__$1;
(statearr_26389_26402[(2)] = null);

(statearr_26389_26402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (2))){
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(4),ch);
} else {
if((state_val_26388 === (3))){
var inst_26385 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26387__$1,inst_26385);
} else {
if((state_val_26388 === (4))){
var inst_26375 = (state_26387[(7)]);
var inst_26375__$1 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26390 = state_26387;
(statearr_26390[(7)] = inst_26375__$1);

return statearr_26390;
})();
if(cljs.core.truth_(inst_26375__$1)){
var statearr_26391_26403 = state_26387__$1;
(statearr_26391_26403[(1)] = (5));

} else {
var statearr_26392_26404 = state_26387__$1;
(statearr_26392_26404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (5))){
var inst_26375 = (state_26387[(7)]);
var inst_26377 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26375);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(8),inst_26377);
} else {
if((state_val_26388 === (6))){
var state_26387__$1 = state_26387;
var statearr_26393_26405 = state_26387__$1;
(statearr_26393_26405[(2)] = null);

(statearr_26393_26405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (7))){
var inst_26383 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26394_26406 = state_26387__$1;
(statearr_26394_26406[(2)] = inst_26383);

(statearr_26394_26406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (8))){
var inst_26379 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26395 = state_26387;
(statearr_26395[(8)] = inst_26379);

return statearr_26395;
})();
var statearr_26396_26407 = state_26387__$1;
(statearr_26396_26407[(2)] = null);

(statearr_26396_26407[(1)] = (2));


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
});})(c__22786__auto___26401,ch))
;
return ((function (switch__22698__auto__,c__22786__auto___26401,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22699__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22699__auto____0 = (function (){
var statearr_26397 = [null,null,null,null,null,null,null,null,null];
(statearr_26397[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22699__auto__);

(statearr_26397[(1)] = (1));

return statearr_26397;
});
var figwheel$client$heads_up_plugin_$_state_machine__22699__auto____1 = (function (state_26387){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_26387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e26398){if((e26398 instanceof Object)){
var ex__22702__auto__ = e26398;
var statearr_26399_26408 = state_26387;
(statearr_26399_26408[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26387;
state_26387 = G__26409;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22699__auto__ = function(state_26387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22699__auto____1.call(this,state_26387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22699__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22699__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___26401,ch))
})();
var state__22788__auto__ = (function (){var statearr_26400 = f__22787__auto__.call(null);
(statearr_26400[(6)] = c__22786__auto___26401);

return statearr_26400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___26401,ch))
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__){
return (function (state_26415){
var state_val_26416 = (state_26415[(1)]);
if((state_val_26416 === (1))){
var inst_26410 = cljs.core.async.timeout.call(null,(3000));
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,(2),inst_26410);
} else {
if((state_val_26416 === (2))){
var inst_26412 = (state_26415[(2)]);
var inst_26413 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26415__$1 = (function (){var statearr_26417 = state_26415;
(statearr_26417[(7)] = inst_26412);

return statearr_26417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26415__$1,inst_26413);
} else {
return null;
}
}
});})(c__22786__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____0 = (function (){
var statearr_26418 = [null,null,null,null,null,null,null,null];
(statearr_26418[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__);

(statearr_26418[(1)] = (1));

return statearr_26418;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____1 = (function (state_26415){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_26415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e26419){if((e26419 instanceof Object)){
var ex__22702__auto__ = e26419;
var statearr_26420_26422 = state_26415;
(statearr_26420_26422[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26423 = state_26415;
state_26415 = G__26423;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__ = function(state_26415){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____1.call(this,state_26415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22699__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_26421 = f__22787__auto__.call(null);
(statearr_26421[(6)] = c__22786__auto__);

return statearr_26421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__,figwheel_version,temp__4657__auto__){
return (function (state_26430){
var state_val_26431 = (state_26430[(1)]);
if((state_val_26431 === (1))){
var inst_26424 = cljs.core.async.timeout.call(null,(2000));
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26430__$1,(2),inst_26424);
} else {
if((state_val_26431 === (2))){
var inst_26426 = (state_26430[(2)]);
var inst_26427 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_26428 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_26427);
var state_26430__$1 = (function (){var statearr_26432 = state_26430;
(statearr_26432[(7)] = inst_26426);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26430__$1,inst_26428);
} else {
return null;
}
}
});})(c__22786__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____0 = (function (){
var statearr_26433 = [null,null,null,null,null,null,null,null];
(statearr_26433[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__);

(statearr_26433[(1)] = (1));

return statearr_26433;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____1 = (function (state_26430){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_26430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e26434){if((e26434 instanceof Object)){
var ex__22702__auto__ = e26434;
var statearr_26435_26437 = state_26430;
(statearr_26435_26437[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26438 = state_26430;
state_26430 = G__26438;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__ = function(state_26430){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____1.call(this,state_26430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22788__auto__ = (function (){var statearr_26436 = f__22787__auto__.call(null);
(statearr_26436[(6)] = c__22786__auto__);

return statearr_26436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,figwheel_version,temp__4657__auto__))
);

return c__22786__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__26439){
var map__26440 = p__26439;
var map__26440__$1 = ((((!((map__26440 == null)))?(((((map__26440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26440):map__26440);
var file = cljs.core.get.call(null,map__26440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26440__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26440__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26442 = "";
var G__26442__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26442),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26442);
var G__26442__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26442__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26442__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26442__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26442__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26443){
var map__26444 = p__26443;
var map__26444__$1 = ((((!((map__26444 == null)))?(((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26444):map__26444);
var ed = map__26444__$1;
var formatted_exception = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26446_26450 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26447_26451 = null;
var count__26448_26452 = (0);
var i__26449_26453 = (0);
while(true){
if((i__26449_26453 < count__26448_26452)){
var msg_26454 = cljs.core._nth.call(null,chunk__26447_26451,i__26449_26453);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26454);


var G__26455 = seq__26446_26450;
var G__26456 = chunk__26447_26451;
var G__26457 = count__26448_26452;
var G__26458 = (i__26449_26453 + (1));
seq__26446_26450 = G__26455;
chunk__26447_26451 = G__26456;
count__26448_26452 = G__26457;
i__26449_26453 = G__26458;
continue;
} else {
var temp__4657__auto___26459 = cljs.core.seq.call(null,seq__26446_26450);
if(temp__4657__auto___26459){
var seq__26446_26460__$1 = temp__4657__auto___26459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26446_26460__$1)){
var c__4319__auto___26461 = cljs.core.chunk_first.call(null,seq__26446_26460__$1);
var G__26462 = cljs.core.chunk_rest.call(null,seq__26446_26460__$1);
var G__26463 = c__4319__auto___26461;
var G__26464 = cljs.core.count.call(null,c__4319__auto___26461);
var G__26465 = (0);
seq__26446_26450 = G__26462;
chunk__26447_26451 = G__26463;
count__26448_26452 = G__26464;
i__26449_26453 = G__26465;
continue;
} else {
var msg_26466 = cljs.core.first.call(null,seq__26446_26460__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26466);


var G__26467 = cljs.core.next.call(null,seq__26446_26460__$1);
var G__26468 = null;
var G__26469 = (0);
var G__26470 = (0);
seq__26446_26450 = G__26467;
chunk__26447_26451 = G__26468;
count__26448_26452 = G__26469;
i__26449_26453 = G__26470;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26471){
var map__26472 = p__26471;
var map__26472__$1 = ((((!((map__26472 == null)))?(((((map__26472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26472):map__26472);
var w = map__26472__$1;
var message = cljs.core.get.call(null,map__26472__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__26474 = cljs.core.seq.call(null,plugins);
var chunk__26475 = null;
var count__26476 = (0);
var i__26477 = (0);
while(true){
if((i__26477 < count__26476)){
var vec__26478 = cljs.core._nth.call(null,chunk__26475,i__26477);
var k = cljs.core.nth.call(null,vec__26478,(0),null);
var plugin = cljs.core.nth.call(null,vec__26478,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26484 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26474,chunk__26475,count__26476,i__26477,pl_26484,vec__26478,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26484.call(null,msg_hist);
});})(seq__26474,chunk__26475,count__26476,i__26477,pl_26484,vec__26478,k,plugin))
);
} else {
}


var G__26485 = seq__26474;
var G__26486 = chunk__26475;
var G__26487 = count__26476;
var G__26488 = (i__26477 + (1));
seq__26474 = G__26485;
chunk__26475 = G__26486;
count__26476 = G__26487;
i__26477 = G__26488;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26474);
if(temp__4657__auto__){
var seq__26474__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26474__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26474__$1);
var G__26489 = cljs.core.chunk_rest.call(null,seq__26474__$1);
var G__26490 = c__4319__auto__;
var G__26491 = cljs.core.count.call(null,c__4319__auto__);
var G__26492 = (0);
seq__26474 = G__26489;
chunk__26475 = G__26490;
count__26476 = G__26491;
i__26477 = G__26492;
continue;
} else {
var vec__26481 = cljs.core.first.call(null,seq__26474__$1);
var k = cljs.core.nth.call(null,vec__26481,(0),null);
var plugin = cljs.core.nth.call(null,vec__26481,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26493 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26474,chunk__26475,count__26476,i__26477,pl_26493,vec__26481,k,plugin,seq__26474__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26493.call(null,msg_hist);
});})(seq__26474,chunk__26475,count__26476,i__26477,pl_26493,vec__26481,k,plugin,seq__26474__$1,temp__4657__auto__))
);
} else {
}


var G__26494 = cljs.core.next.call(null,seq__26474__$1);
var G__26495 = null;
var G__26496 = (0);
var G__26497 = (0);
seq__26474 = G__26494;
chunk__26475 = G__26495;
count__26476 = G__26496;
i__26477 = G__26497;
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
var G__26499 = arguments.length;
switch (G__26499) {
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

var seq__26500_26505 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__26501_26506 = null;
var count__26502_26507 = (0);
var i__26503_26508 = (0);
while(true){
if((i__26503_26508 < count__26502_26507)){
var msg_26509 = cljs.core._nth.call(null,chunk__26501_26506,i__26503_26508);
figwheel.client.socket.handle_incoming_message.call(null,msg_26509);


var G__26510 = seq__26500_26505;
var G__26511 = chunk__26501_26506;
var G__26512 = count__26502_26507;
var G__26513 = (i__26503_26508 + (1));
seq__26500_26505 = G__26510;
chunk__26501_26506 = G__26511;
count__26502_26507 = G__26512;
i__26503_26508 = G__26513;
continue;
} else {
var temp__4657__auto___26514 = cljs.core.seq.call(null,seq__26500_26505);
if(temp__4657__auto___26514){
var seq__26500_26515__$1 = temp__4657__auto___26514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26500_26515__$1)){
var c__4319__auto___26516 = cljs.core.chunk_first.call(null,seq__26500_26515__$1);
var G__26517 = cljs.core.chunk_rest.call(null,seq__26500_26515__$1);
var G__26518 = c__4319__auto___26516;
var G__26519 = cljs.core.count.call(null,c__4319__auto___26516);
var G__26520 = (0);
seq__26500_26505 = G__26517;
chunk__26501_26506 = G__26518;
count__26502_26507 = G__26519;
i__26503_26508 = G__26520;
continue;
} else {
var msg_26521 = cljs.core.first.call(null,seq__26500_26515__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_26521);


var G__26522 = cljs.core.next.call(null,seq__26500_26515__$1);
var G__26523 = null;
var G__26524 = (0);
var G__26525 = (0);
seq__26500_26505 = G__26522;
chunk__26501_26506 = G__26523;
count__26502_26507 = G__26524;
i__26503_26508 = G__26525;
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
var len__4499__auto___26530 = arguments.length;
var i__4500__auto___26531 = (0);
while(true){
if((i__4500__auto___26531 < len__4499__auto___26530)){
args__4502__auto__.push((arguments[i__4500__auto___26531]));

var G__26532 = (i__4500__auto___26531 + (1));
i__4500__auto___26531 = G__26532;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26527){
var map__26528 = p__26527;
var map__26528__$1 = ((((!((map__26528 == null)))?(((((map__26528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26528):map__26528);
var opts = map__26528__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26526){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26526));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e26533){if((e26533 instanceof Error)){
var e = e26533;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e26533;

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
return (function (p__26534){
var map__26535 = p__26534;
var map__26535__$1 = ((((!((map__26535 == null)))?(((((map__26535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535):map__26535);
var msg_name = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1532452671680
