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
}catch (e46663){if((e46663 instanceof Error)){
var e = e46663;
return "Error: Unable to stringify";
} else {
throw e46663;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46666 = arguments.length;
switch (G__46666) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46664_SHARP_){
if(typeof p1__46664_SHARP_ === 'string'){
return p1__46664_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46664_SHARP_);
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
var len__4499__auto___46669 = arguments.length;
var i__4500__auto___46670 = (0);
while(true){
if((i__4500__auto___46670 < len__4499__auto___46669)){
args__4502__auto__.push((arguments[i__4500__auto___46670]));

var G__46671 = (i__4500__auto___46670 + (1));
i__4500__auto___46670 = G__46671;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46668){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46668));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___46673 = arguments.length;
var i__4500__auto___46674 = (0);
while(true){
if((i__4500__auto___46674 < len__4499__auto___46673)){
args__4502__auto__.push((arguments[i__4500__auto___46674]));

var G__46675 = (i__4500__auto___46674 + (1));
i__4500__auto___46674 = G__46675;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46672){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46672));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46676){
var map__46677 = p__46676;
var map__46677__$1 = ((((!((map__46677 == null)))?(((((map__46677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46677):map__46677);
var message = cljs.core.get.call(null,map__46677__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46677__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22731__auto___46756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___46756,ch){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___46756,ch){
return (function (state_46728){
var state_val_46729 = (state_46728[(1)]);
if((state_val_46729 === (7))){
var inst_46724 = (state_46728[(2)]);
var state_46728__$1 = state_46728;
var statearr_46730_46757 = state_46728__$1;
(statearr_46730_46757[(2)] = inst_46724);

(statearr_46730_46757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (1))){
var state_46728__$1 = state_46728;
var statearr_46731_46758 = state_46728__$1;
(statearr_46731_46758[(2)] = null);

(statearr_46731_46758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (4))){
var inst_46681 = (state_46728[(7)]);
var inst_46681__$1 = (state_46728[(2)]);
var state_46728__$1 = (function (){var statearr_46732 = state_46728;
(statearr_46732[(7)] = inst_46681__$1);

return statearr_46732;
})();
if(cljs.core.truth_(inst_46681__$1)){
var statearr_46733_46759 = state_46728__$1;
(statearr_46733_46759[(1)] = (5));

} else {
var statearr_46734_46760 = state_46728__$1;
(statearr_46734_46760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (15))){
var inst_46688 = (state_46728[(8)]);
var inst_46703 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46688);
var inst_46704 = cljs.core.first.call(null,inst_46703);
var inst_46705 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46704);
var inst_46706 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46705)].join('');
var inst_46707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46706);
var state_46728__$1 = state_46728;
var statearr_46735_46761 = state_46728__$1;
(statearr_46735_46761[(2)] = inst_46707);

(statearr_46735_46761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (13))){
var inst_46712 = (state_46728[(2)]);
var state_46728__$1 = state_46728;
var statearr_46736_46762 = state_46728__$1;
(statearr_46736_46762[(2)] = inst_46712);

(statearr_46736_46762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (6))){
var state_46728__$1 = state_46728;
var statearr_46737_46763 = state_46728__$1;
(statearr_46737_46763[(2)] = null);

(statearr_46737_46763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (17))){
var inst_46710 = (state_46728[(2)]);
var state_46728__$1 = state_46728;
var statearr_46738_46764 = state_46728__$1;
(statearr_46738_46764[(2)] = inst_46710);

(statearr_46738_46764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (3))){
var inst_46726 = (state_46728[(2)]);
var state_46728__$1 = state_46728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46728__$1,inst_46726);
} else {
if((state_val_46729 === (12))){
var inst_46687 = (state_46728[(9)]);
var inst_46701 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46687,opts);
var state_46728__$1 = state_46728;
if(cljs.core.truth_(inst_46701)){
var statearr_46739_46765 = state_46728__$1;
(statearr_46739_46765[(1)] = (15));

} else {
var statearr_46740_46766 = state_46728__$1;
(statearr_46740_46766[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (2))){
var state_46728__$1 = state_46728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46728__$1,(4),ch);
} else {
if((state_val_46729 === (11))){
var inst_46688 = (state_46728[(8)]);
var inst_46693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46694 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46688);
var inst_46695 = cljs.core.async.timeout.call(null,(1000));
var inst_46696 = [inst_46694,inst_46695];
var inst_46697 = (new cljs.core.PersistentVector(null,2,(5),inst_46693,inst_46696,null));
var state_46728__$1 = state_46728;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46728__$1,(14),inst_46697);
} else {
if((state_val_46729 === (9))){
var inst_46688 = (state_46728[(8)]);
var inst_46714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46715 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46688);
var inst_46716 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46715);
var inst_46717 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46716)].join('');
var inst_46718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46717);
var state_46728__$1 = (function (){var statearr_46741 = state_46728;
(statearr_46741[(10)] = inst_46714);

return statearr_46741;
})();
var statearr_46742_46767 = state_46728__$1;
(statearr_46742_46767[(2)] = inst_46718);

(statearr_46742_46767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (5))){
var inst_46681 = (state_46728[(7)]);
var inst_46683 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46684 = (new cljs.core.PersistentArrayMap(null,2,inst_46683,null));
var inst_46685 = (new cljs.core.PersistentHashSet(null,inst_46684,null));
var inst_46686 = figwheel.client.focus_msgs.call(null,inst_46685,inst_46681);
var inst_46687 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46686);
var inst_46688 = cljs.core.first.call(null,inst_46686);
var inst_46689 = figwheel.client.autoload_QMARK_.call(null);
var state_46728__$1 = (function (){var statearr_46743 = state_46728;
(statearr_46743[(8)] = inst_46688);

(statearr_46743[(9)] = inst_46687);

return statearr_46743;
})();
if(cljs.core.truth_(inst_46689)){
var statearr_46744_46768 = state_46728__$1;
(statearr_46744_46768[(1)] = (8));

} else {
var statearr_46745_46769 = state_46728__$1;
(statearr_46745_46769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (14))){
var inst_46699 = (state_46728[(2)]);
var state_46728__$1 = state_46728;
var statearr_46746_46770 = state_46728__$1;
(statearr_46746_46770[(2)] = inst_46699);

(statearr_46746_46770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (16))){
var state_46728__$1 = state_46728;
var statearr_46747_46771 = state_46728__$1;
(statearr_46747_46771[(2)] = null);

(statearr_46747_46771[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (10))){
var inst_46720 = (state_46728[(2)]);
var state_46728__$1 = (function (){var statearr_46748 = state_46728;
(statearr_46748[(11)] = inst_46720);

return statearr_46748;
})();
var statearr_46749_46772 = state_46728__$1;
(statearr_46749_46772[(2)] = null);

(statearr_46749_46772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46729 === (8))){
var inst_46687 = (state_46728[(9)]);
var inst_46691 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46687,opts);
var state_46728__$1 = state_46728;
if(cljs.core.truth_(inst_46691)){
var statearr_46750_46773 = state_46728__$1;
(statearr_46750_46773[(1)] = (11));

} else {
var statearr_46751_46774 = state_46728__$1;
(statearr_46751_46774[(1)] = (12));

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
});})(c__22731__auto___46756,ch))
;
return ((function (switch__22643__auto__,c__22731__auto___46756,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____0 = (function (){
var statearr_46752 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46752[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__);

(statearr_46752[(1)] = (1));

return statearr_46752;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____1 = (function (state_46728){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_46728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e46753){if((e46753 instanceof Object)){
var ex__22647__auto__ = e46753;
var statearr_46754_46775 = state_46728;
(statearr_46754_46775[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46776 = state_46728;
state_46728 = G__46776;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__ = function(state_46728){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____1.call(this,state_46728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22644__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___46756,ch))
})();
var state__22733__auto__ = (function (){var statearr_46755 = f__22732__auto__.call(null);
(statearr_46755[(6)] = c__22731__auto___46756);

return statearr_46755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___46756,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46777_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46777_SHARP_));
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
var base_path_46781 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46781){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46779 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_46780 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46779,_STAR_print_fn_STAR_46780,sb,base_path_46781){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_46779,_STAR_print_fn_STAR_46780,sb,base_path_46781))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46780;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46779;
}}catch (e46778){if((e46778 instanceof Error)){
var e = e46778;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46781], null));
} else {
var e = e46778;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46781))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46782){
var map__46783 = p__46782;
var map__46783__$1 = ((((!((map__46783 == null)))?(((((map__46783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46783):map__46783);
var opts = map__46783__$1;
var build_id = cljs.core.get.call(null,map__46783__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46783,map__46783__$1,opts,build_id){
return (function (p__46785){
var vec__46786 = p__46785;
var seq__46787 = cljs.core.seq.call(null,vec__46786);
var first__46788 = cljs.core.first.call(null,seq__46787);
var seq__46787__$1 = cljs.core.next.call(null,seq__46787);
var map__46789 = first__46788;
var map__46789__$1 = ((((!((map__46789 == null)))?(((((map__46789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46789):map__46789);
var msg = map__46789__$1;
var msg_name = cljs.core.get.call(null,map__46789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46787__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46786,seq__46787,first__46788,seq__46787__$1,map__46789,map__46789__$1,msg,msg_name,_,map__46783,map__46783__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46786,seq__46787,first__46788,seq__46787__$1,map__46789,map__46789__$1,msg,msg_name,_,map__46783,map__46783__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46783,map__46783__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46791){
var vec__46792 = p__46791;
var seq__46793 = cljs.core.seq.call(null,vec__46792);
var first__46794 = cljs.core.first.call(null,seq__46793);
var seq__46793__$1 = cljs.core.next.call(null,seq__46793);
var map__46795 = first__46794;
var map__46795__$1 = ((((!((map__46795 == null)))?(((((map__46795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46795):map__46795);
var msg = map__46795__$1;
var msg_name = cljs.core.get.call(null,map__46795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46793__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46797){
var map__46798 = p__46797;
var map__46798__$1 = ((((!((map__46798 == null)))?(((((map__46798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46798):map__46798);
var on_compile_warning = cljs.core.get.call(null,map__46798__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46798__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46798,map__46798__$1,on_compile_warning,on_compile_fail){
return (function (p__46800){
var vec__46801 = p__46800;
var seq__46802 = cljs.core.seq.call(null,vec__46801);
var first__46803 = cljs.core.first.call(null,seq__46802);
var seq__46802__$1 = cljs.core.next.call(null,seq__46802);
var map__46804 = first__46803;
var map__46804__$1 = ((((!((map__46804 == null)))?(((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46804):map__46804);
var msg = map__46804__$1;
var msg_name = cljs.core.get.call(null,map__46804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46802__$1;
var pred__46806 = cljs.core._EQ_;
var expr__46807 = msg_name;
if(cljs.core.truth_(pred__46806.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46807))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46806.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46807))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46798,map__46798__$1,on_compile_warning,on_compile_fail))
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
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__,msg_hist,msg_names,msg){
return (function (state_46896){
var state_val_46897 = (state_46896[(1)]);
if((state_val_46897 === (7))){
var inst_46816 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46816)){
var statearr_46898_46945 = state_46896__$1;
(statearr_46898_46945[(1)] = (8));

} else {
var statearr_46899_46946 = state_46896__$1;
(statearr_46899_46946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (20))){
var inst_46890 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46900_46947 = state_46896__$1;
(statearr_46900_46947[(2)] = inst_46890);

(statearr_46900_46947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (27))){
var inst_46886 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46901_46948 = state_46896__$1;
(statearr_46901_46948[(2)] = inst_46886);

(statearr_46901_46948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (1))){
var inst_46809 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46809)){
var statearr_46902_46949 = state_46896__$1;
(statearr_46902_46949[(1)] = (2));

} else {
var statearr_46903_46950 = state_46896__$1;
(statearr_46903_46950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (24))){
var inst_46888 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46904_46951 = state_46896__$1;
(statearr_46904_46951[(2)] = inst_46888);

(statearr_46904_46951[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (4))){
var inst_46894 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46896__$1,inst_46894);
} else {
if((state_val_46897 === (15))){
var inst_46892 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46905_46952 = state_46896__$1;
(statearr_46905_46952[(2)] = inst_46892);

(statearr_46905_46952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (21))){
var inst_46845 = (state_46896[(2)]);
var inst_46846 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46847 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46846);
var state_46896__$1 = (function (){var statearr_46906 = state_46896;
(statearr_46906[(7)] = inst_46845);

return statearr_46906;
})();
var statearr_46907_46953 = state_46896__$1;
(statearr_46907_46953[(2)] = inst_46847);

(statearr_46907_46953[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (31))){
var inst_46875 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46875)){
var statearr_46908_46954 = state_46896__$1;
(statearr_46908_46954[(1)] = (34));

} else {
var statearr_46909_46955 = state_46896__$1;
(statearr_46909_46955[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (32))){
var inst_46884 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46910_46956 = state_46896__$1;
(statearr_46910_46956[(2)] = inst_46884);

(statearr_46910_46956[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (33))){
var inst_46871 = (state_46896[(2)]);
var inst_46872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46873 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46872);
var state_46896__$1 = (function (){var statearr_46911 = state_46896;
(statearr_46911[(8)] = inst_46871);

return statearr_46911;
})();
var statearr_46912_46957 = state_46896__$1;
(statearr_46912_46957[(2)] = inst_46873);

(statearr_46912_46957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (13))){
var inst_46830 = figwheel.client.heads_up.clear.call(null);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(16),inst_46830);
} else {
if((state_val_46897 === (22))){
var inst_46851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46852 = figwheel.client.heads_up.append_warning_message.call(null,inst_46851);
var state_46896__$1 = state_46896;
var statearr_46913_46958 = state_46896__$1;
(statearr_46913_46958[(2)] = inst_46852);

(statearr_46913_46958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (36))){
var inst_46882 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46914_46959 = state_46896__$1;
(statearr_46914_46959[(2)] = inst_46882);

(statearr_46914_46959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (29))){
var inst_46862 = (state_46896[(2)]);
var inst_46863 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46863);
var state_46896__$1 = (function (){var statearr_46915 = state_46896;
(statearr_46915[(9)] = inst_46862);

return statearr_46915;
})();
var statearr_46916_46960 = state_46896__$1;
(statearr_46916_46960[(2)] = inst_46864);

(statearr_46916_46960[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (6))){
var inst_46811 = (state_46896[(10)]);
var state_46896__$1 = state_46896;
var statearr_46917_46961 = state_46896__$1;
(statearr_46917_46961[(2)] = inst_46811);

(statearr_46917_46961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (28))){
var inst_46858 = (state_46896[(2)]);
var inst_46859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46860 = figwheel.client.heads_up.display_warning.call(null,inst_46859);
var state_46896__$1 = (function (){var statearr_46918 = state_46896;
(statearr_46918[(11)] = inst_46858);

return statearr_46918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(29),inst_46860);
} else {
if((state_val_46897 === (25))){
var inst_46856 = figwheel.client.heads_up.clear.call(null);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(28),inst_46856);
} else {
if((state_val_46897 === (34))){
var inst_46877 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(37),inst_46877);
} else {
if((state_val_46897 === (17))){
var inst_46836 = (state_46896[(2)]);
var inst_46837 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46838 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46837);
var state_46896__$1 = (function (){var statearr_46919 = state_46896;
(statearr_46919[(12)] = inst_46836);

return statearr_46919;
})();
var statearr_46920_46962 = state_46896__$1;
(statearr_46920_46962[(2)] = inst_46838);

(statearr_46920_46962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (3))){
var inst_46828 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46828)){
var statearr_46921_46963 = state_46896__$1;
(statearr_46921_46963[(1)] = (13));

} else {
var statearr_46922_46964 = state_46896__$1;
(statearr_46922_46964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (12))){
var inst_46824 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46923_46965 = state_46896__$1;
(statearr_46923_46965[(2)] = inst_46824);

(statearr_46923_46965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (2))){
var inst_46811 = (state_46896[(10)]);
var inst_46811__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46896__$1 = (function (){var statearr_46924 = state_46896;
(statearr_46924[(10)] = inst_46811__$1);

return statearr_46924;
})();
if(cljs.core.truth_(inst_46811__$1)){
var statearr_46925_46966 = state_46896__$1;
(statearr_46925_46966[(1)] = (5));

} else {
var statearr_46926_46967 = state_46896__$1;
(statearr_46926_46967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (23))){
var inst_46854 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46854)){
var statearr_46927_46968 = state_46896__$1;
(statearr_46927_46968[(1)] = (25));

} else {
var statearr_46928_46969 = state_46896__$1;
(statearr_46928_46969[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (35))){
var state_46896__$1 = state_46896;
var statearr_46929_46970 = state_46896__$1;
(statearr_46929_46970[(2)] = null);

(statearr_46929_46970[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (19))){
var inst_46849 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46849)){
var statearr_46930_46971 = state_46896__$1;
(statearr_46930_46971[(1)] = (22));

} else {
var statearr_46931_46972 = state_46896__$1;
(statearr_46931_46972[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (11))){
var inst_46820 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46932_46973 = state_46896__$1;
(statearr_46932_46973[(2)] = inst_46820);

(statearr_46932_46973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (9))){
var inst_46822 = figwheel.client.heads_up.clear.call(null);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(12),inst_46822);
} else {
if((state_val_46897 === (5))){
var inst_46813 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46896__$1 = state_46896;
var statearr_46933_46974 = state_46896__$1;
(statearr_46933_46974[(2)] = inst_46813);

(statearr_46933_46974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (14))){
var inst_46840 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46840)){
var statearr_46934_46975 = state_46896__$1;
(statearr_46934_46975[(1)] = (18));

} else {
var statearr_46935_46976 = state_46896__$1;
(statearr_46935_46976[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (26))){
var inst_46866 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46866)){
var statearr_46936_46977 = state_46896__$1;
(statearr_46936_46977[(1)] = (30));

} else {
var statearr_46937_46978 = state_46896__$1;
(statearr_46937_46978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (16))){
var inst_46832 = (state_46896[(2)]);
var inst_46833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46834 = figwheel.client.heads_up.display_exception.call(null,inst_46833);
var state_46896__$1 = (function (){var statearr_46938 = state_46896;
(statearr_46938[(13)] = inst_46832);

return statearr_46938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(17),inst_46834);
} else {
if((state_val_46897 === (30))){
var inst_46868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46869 = figwheel.client.heads_up.display_warning.call(null,inst_46868);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(33),inst_46869);
} else {
if((state_val_46897 === (10))){
var inst_46826 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46939_46979 = state_46896__$1;
(statearr_46939_46979[(2)] = inst_46826);

(statearr_46939_46979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (18))){
var inst_46842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46843 = figwheel.client.heads_up.display_exception.call(null,inst_46842);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(21),inst_46843);
} else {
if((state_val_46897 === (37))){
var inst_46879 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46940_46980 = state_46896__$1;
(statearr_46940_46980[(2)] = inst_46879);

(statearr_46940_46980[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (8))){
var inst_46818 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(11),inst_46818);
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
});})(c__22731__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22643__auto__,c__22731__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____0 = (function (){
var statearr_46941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46941[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__);

(statearr_46941[(1)] = (1));

return statearr_46941;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____1 = (function (state_46896){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_46896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e46942){if((e46942 instanceof Object)){
var ex__22647__auto__ = e46942;
var statearr_46943_46981 = state_46896;
(statearr_46943_46981[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46982 = state_46896;
state_46896 = G__46982;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__ = function(state_46896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____1.call(this,state_46896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__,msg_hist,msg_names,msg))
})();
var state__22733__auto__ = (function (){var statearr_46944 = f__22732__auto__.call(null);
(statearr_46944[(6)] = c__22731__auto__);

return statearr_46944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__,msg_hist,msg_names,msg))
);

return c__22731__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22731__auto___47011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___47011,ch){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___47011,ch){
return (function (state_46997){
var state_val_46998 = (state_46997[(1)]);
if((state_val_46998 === (1))){
var state_46997__$1 = state_46997;
var statearr_46999_47012 = state_46997__$1;
(statearr_46999_47012[(2)] = null);

(statearr_46999_47012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46998 === (2))){
var state_46997__$1 = state_46997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46997__$1,(4),ch);
} else {
if((state_val_46998 === (3))){
var inst_46995 = (state_46997[(2)]);
var state_46997__$1 = state_46997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46997__$1,inst_46995);
} else {
if((state_val_46998 === (4))){
var inst_46985 = (state_46997[(7)]);
var inst_46985__$1 = (state_46997[(2)]);
var state_46997__$1 = (function (){var statearr_47000 = state_46997;
(statearr_47000[(7)] = inst_46985__$1);

return statearr_47000;
})();
if(cljs.core.truth_(inst_46985__$1)){
var statearr_47001_47013 = state_46997__$1;
(statearr_47001_47013[(1)] = (5));

} else {
var statearr_47002_47014 = state_46997__$1;
(statearr_47002_47014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46998 === (5))){
var inst_46985 = (state_46997[(7)]);
var inst_46987 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46985);
var state_46997__$1 = state_46997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46997__$1,(8),inst_46987);
} else {
if((state_val_46998 === (6))){
var state_46997__$1 = state_46997;
var statearr_47003_47015 = state_46997__$1;
(statearr_47003_47015[(2)] = null);

(statearr_47003_47015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46998 === (7))){
var inst_46993 = (state_46997[(2)]);
var state_46997__$1 = state_46997;
var statearr_47004_47016 = state_46997__$1;
(statearr_47004_47016[(2)] = inst_46993);

(statearr_47004_47016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46998 === (8))){
var inst_46989 = (state_46997[(2)]);
var state_46997__$1 = (function (){var statearr_47005 = state_46997;
(statearr_47005[(8)] = inst_46989);

return statearr_47005;
})();
var statearr_47006_47017 = state_46997__$1;
(statearr_47006_47017[(2)] = null);

(statearr_47006_47017[(1)] = (2));


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
});})(c__22731__auto___47011,ch))
;
return ((function (switch__22643__auto__,c__22731__auto___47011,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22644__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22644__auto____0 = (function (){
var statearr_47007 = [null,null,null,null,null,null,null,null,null];
(statearr_47007[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22644__auto__);

(statearr_47007[(1)] = (1));

return statearr_47007;
});
var figwheel$client$heads_up_plugin_$_state_machine__22644__auto____1 = (function (state_46997){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_46997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e47008){if((e47008 instanceof Object)){
var ex__22647__auto__ = e47008;
var statearr_47009_47018 = state_46997;
(statearr_47009_47018[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47019 = state_46997;
state_46997 = G__47019;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22644__auto__ = function(state_46997){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22644__auto____1.call(this,state_46997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22644__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22644__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___47011,ch))
})();
var state__22733__auto__ = (function (){var statearr_47010 = f__22732__auto__.call(null);
(statearr_47010[(6)] = c__22731__auto___47011);

return statearr_47010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___47011,ch))
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
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__){
return (function (state_47025){
var state_val_47026 = (state_47025[(1)]);
if((state_val_47026 === (1))){
var inst_47020 = cljs.core.async.timeout.call(null,(3000));
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47025__$1,(2),inst_47020);
} else {
if((state_val_47026 === (2))){
var inst_47022 = (state_47025[(2)]);
var inst_47023 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47025__$1 = (function (){var statearr_47027 = state_47025;
(statearr_47027[(7)] = inst_47022);

return statearr_47027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47025__$1,inst_47023);
} else {
return null;
}
}
});})(c__22731__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____0 = (function (){
var statearr_47028 = [null,null,null,null,null,null,null,null];
(statearr_47028[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__);

(statearr_47028[(1)] = (1));

return statearr_47028;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____1 = (function (state_47025){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_47025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e47029){if((e47029 instanceof Object)){
var ex__22647__auto__ = e47029;
var statearr_47030_47032 = state_47025;
(statearr_47030_47032[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47033 = state_47025;
state_47025 = G__47033;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__ = function(state_47025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____1.call(this,state_47025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22644__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__))
})();
var state__22733__auto__ = (function (){var statearr_47031 = f__22732__auto__.call(null);
(statearr_47031[(6)] = c__22731__auto__);

return statearr_47031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__))
);

return c__22731__auto__;
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
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__,figwheel_version,temp__4657__auto__){
return (function (state_47040){
var state_val_47041 = (state_47040[(1)]);
if((state_val_47041 === (1))){
var inst_47034 = cljs.core.async.timeout.call(null,(2000));
var state_47040__$1 = state_47040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47040__$1,(2),inst_47034);
} else {
if((state_val_47041 === (2))){
var inst_47036 = (state_47040[(2)]);
var inst_47037 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_47038 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47037);
var state_47040__$1 = (function (){var statearr_47042 = state_47040;
(statearr_47042[(7)] = inst_47036);

return statearr_47042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47040__$1,inst_47038);
} else {
return null;
}
}
});})(c__22731__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____0 = (function (){
var statearr_47043 = [null,null,null,null,null,null,null,null];
(statearr_47043[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__);

(statearr_47043[(1)] = (1));

return statearr_47043;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____1 = (function (state_47040){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_47040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e47044){if((e47044 instanceof Object)){
var ex__22647__auto__ = e47044;
var statearr_47045_47047 = state_47040;
(statearr_47045_47047[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47048 = state_47040;
state_47040 = G__47048;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__ = function(state_47040){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____1.call(this,state_47040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22733__auto__ = (function (){var statearr_47046 = f__22732__auto__.call(null);
(statearr_47046[(6)] = c__22731__auto__);

return statearr_47046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__,figwheel_version,temp__4657__auto__))
);

return c__22731__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47049){
var map__47050 = p__47049;
var map__47050__$1 = ((((!((map__47050 == null)))?(((((map__47050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47050):map__47050);
var file = cljs.core.get.call(null,map__47050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47050__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47050__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47052 = "";
var G__47052__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47052),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__47052);
var G__47052__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47052__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__47052__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47052__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__47052__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47053){
var map__47054 = p__47053;
var map__47054__$1 = ((((!((map__47054 == null)))?(((((map__47054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47054):map__47054);
var ed = map__47054__$1;
var formatted_exception = cljs.core.get.call(null,map__47054__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47054__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47054__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47056_47060 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47057_47061 = null;
var count__47058_47062 = (0);
var i__47059_47063 = (0);
while(true){
if((i__47059_47063 < count__47058_47062)){
var msg_47064 = cljs.core._nth.call(null,chunk__47057_47061,i__47059_47063);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47064);


var G__47065 = seq__47056_47060;
var G__47066 = chunk__47057_47061;
var G__47067 = count__47058_47062;
var G__47068 = (i__47059_47063 + (1));
seq__47056_47060 = G__47065;
chunk__47057_47061 = G__47066;
count__47058_47062 = G__47067;
i__47059_47063 = G__47068;
continue;
} else {
var temp__4657__auto___47069 = cljs.core.seq.call(null,seq__47056_47060);
if(temp__4657__auto___47069){
var seq__47056_47070__$1 = temp__4657__auto___47069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47056_47070__$1)){
var c__4319__auto___47071 = cljs.core.chunk_first.call(null,seq__47056_47070__$1);
var G__47072 = cljs.core.chunk_rest.call(null,seq__47056_47070__$1);
var G__47073 = c__4319__auto___47071;
var G__47074 = cljs.core.count.call(null,c__4319__auto___47071);
var G__47075 = (0);
seq__47056_47060 = G__47072;
chunk__47057_47061 = G__47073;
count__47058_47062 = G__47074;
i__47059_47063 = G__47075;
continue;
} else {
var msg_47076 = cljs.core.first.call(null,seq__47056_47070__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47076);


var G__47077 = cljs.core.next.call(null,seq__47056_47070__$1);
var G__47078 = null;
var G__47079 = (0);
var G__47080 = (0);
seq__47056_47060 = G__47077;
chunk__47057_47061 = G__47078;
count__47058_47062 = G__47079;
i__47059_47063 = G__47080;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47081){
var map__47082 = p__47081;
var map__47082__$1 = ((((!((map__47082 == null)))?(((((map__47082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47082):map__47082);
var w = map__47082__$1;
var message = cljs.core.get.call(null,map__47082__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__47084 = cljs.core.seq.call(null,plugins);
var chunk__47085 = null;
var count__47086 = (0);
var i__47087 = (0);
while(true){
if((i__47087 < count__47086)){
var vec__47088 = cljs.core._nth.call(null,chunk__47085,i__47087);
var k = cljs.core.nth.call(null,vec__47088,(0),null);
var plugin = cljs.core.nth.call(null,vec__47088,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47094 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47084,chunk__47085,count__47086,i__47087,pl_47094,vec__47088,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47094.call(null,msg_hist);
});})(seq__47084,chunk__47085,count__47086,i__47087,pl_47094,vec__47088,k,plugin))
);
} else {
}


var G__47095 = seq__47084;
var G__47096 = chunk__47085;
var G__47097 = count__47086;
var G__47098 = (i__47087 + (1));
seq__47084 = G__47095;
chunk__47085 = G__47096;
count__47086 = G__47097;
i__47087 = G__47098;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47084);
if(temp__4657__auto__){
var seq__47084__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47084__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__47084__$1);
var G__47099 = cljs.core.chunk_rest.call(null,seq__47084__$1);
var G__47100 = c__4319__auto__;
var G__47101 = cljs.core.count.call(null,c__4319__auto__);
var G__47102 = (0);
seq__47084 = G__47099;
chunk__47085 = G__47100;
count__47086 = G__47101;
i__47087 = G__47102;
continue;
} else {
var vec__47091 = cljs.core.first.call(null,seq__47084__$1);
var k = cljs.core.nth.call(null,vec__47091,(0),null);
var plugin = cljs.core.nth.call(null,vec__47091,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47103 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47084,chunk__47085,count__47086,i__47087,pl_47103,vec__47091,k,plugin,seq__47084__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47103.call(null,msg_hist);
});})(seq__47084,chunk__47085,count__47086,i__47087,pl_47103,vec__47091,k,plugin,seq__47084__$1,temp__4657__auto__))
);
} else {
}


var G__47104 = cljs.core.next.call(null,seq__47084__$1);
var G__47105 = null;
var G__47106 = (0);
var G__47107 = (0);
seq__47084 = G__47104;
chunk__47085 = G__47105;
count__47086 = G__47106;
i__47087 = G__47107;
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
var G__47109 = arguments.length;
switch (G__47109) {
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

var seq__47110_47115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47111_47116 = null;
var count__47112_47117 = (0);
var i__47113_47118 = (0);
while(true){
if((i__47113_47118 < count__47112_47117)){
var msg_47119 = cljs.core._nth.call(null,chunk__47111_47116,i__47113_47118);
figwheel.client.socket.handle_incoming_message.call(null,msg_47119);


var G__47120 = seq__47110_47115;
var G__47121 = chunk__47111_47116;
var G__47122 = count__47112_47117;
var G__47123 = (i__47113_47118 + (1));
seq__47110_47115 = G__47120;
chunk__47111_47116 = G__47121;
count__47112_47117 = G__47122;
i__47113_47118 = G__47123;
continue;
} else {
var temp__4657__auto___47124 = cljs.core.seq.call(null,seq__47110_47115);
if(temp__4657__auto___47124){
var seq__47110_47125__$1 = temp__4657__auto___47124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47110_47125__$1)){
var c__4319__auto___47126 = cljs.core.chunk_first.call(null,seq__47110_47125__$1);
var G__47127 = cljs.core.chunk_rest.call(null,seq__47110_47125__$1);
var G__47128 = c__4319__auto___47126;
var G__47129 = cljs.core.count.call(null,c__4319__auto___47126);
var G__47130 = (0);
seq__47110_47115 = G__47127;
chunk__47111_47116 = G__47128;
count__47112_47117 = G__47129;
i__47113_47118 = G__47130;
continue;
} else {
var msg_47131 = cljs.core.first.call(null,seq__47110_47125__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47131);


var G__47132 = cljs.core.next.call(null,seq__47110_47125__$1);
var G__47133 = null;
var G__47134 = (0);
var G__47135 = (0);
seq__47110_47115 = G__47132;
chunk__47111_47116 = G__47133;
count__47112_47117 = G__47134;
i__47113_47118 = G__47135;
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
var len__4499__auto___47140 = arguments.length;
var i__4500__auto___47141 = (0);
while(true){
if((i__4500__auto___47141 < len__4499__auto___47140)){
args__4502__auto__.push((arguments[i__4500__auto___47141]));

var G__47142 = (i__4500__auto___47141 + (1));
i__4500__auto___47141 = G__47142;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47137){
var map__47138 = p__47137;
var map__47138__$1 = ((((!((map__47138 == null)))?(((((map__47138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47138):map__47138);
var opts = map__47138__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47136){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47136));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47143){if((e47143 instanceof Error)){
var e = e47143;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47143;

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
return (function (p__47144){
var map__47145 = p__47144;
var map__47145__$1 = ((((!((map__47145 == null)))?(((((map__47145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47145):map__47145);
var msg_name = cljs.core.get.call(null,map__47145__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1532451322209
