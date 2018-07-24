// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_21476 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__21477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21478 = null;
var count__21479 = (0);
var i__21480 = (0);
while(true){
if((i__21480 < count__21479)){
var vec__21481 = cljs.core._nth.call(null,chunk__21478,i__21480);
var effect_key = cljs.core.nth.call(null,vec__21481,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21481,(1),null);
var temp__4655__auto___21497 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21497)){
var effect_fn_21498 = temp__4655__auto___21497;
effect_fn_21498.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21499 = seq__21477;
var G__21500 = chunk__21478;
var G__21501 = count__21479;
var G__21502 = (i__21480 + (1));
seq__21477 = G__21499;
chunk__21478 = G__21500;
count__21479 = G__21501;
i__21480 = G__21502;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21477);
if(temp__4657__auto__){
var seq__21477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21477__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21477__$1);
var G__21503 = cljs.core.chunk_rest.call(null,seq__21477__$1);
var G__21504 = c__4319__auto__;
var G__21505 = cljs.core.count.call(null,c__4319__auto__);
var G__21506 = (0);
seq__21477 = G__21503;
chunk__21478 = G__21504;
count__21479 = G__21505;
i__21480 = G__21506;
continue;
} else {
var vec__21484 = cljs.core.first.call(null,seq__21477__$1);
var effect_key = cljs.core.nth.call(null,vec__21484,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21484,(1),null);
var temp__4655__auto___21507 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21507)){
var effect_fn_21508 = temp__4655__auto___21507;
effect_fn_21508.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21509 = cljs.core.next.call(null,seq__21477__$1);
var G__21510 = null;
var G__21511 = (0);
var G__21512 = (0);
seq__21477 = G__21509;
chunk__21478 = G__21510;
count__21479 = G__21511;
i__21480 = G__21512;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21316__auto___21513 = re_frame.interop.now.call(null);
var duration__21317__auto___21514 = (end__21316__auto___21513 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21317__auto___21514,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21316__auto___21513);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_21476;
}} else {
var seq__21487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21488 = null;
var count__21489 = (0);
var i__21490 = (0);
while(true){
if((i__21490 < count__21489)){
var vec__21491 = cljs.core._nth.call(null,chunk__21488,i__21490);
var effect_key = cljs.core.nth.call(null,vec__21491,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21491,(1),null);
var temp__4655__auto___21515 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21515)){
var effect_fn_21516 = temp__4655__auto___21515;
effect_fn_21516.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21517 = seq__21487;
var G__21518 = chunk__21488;
var G__21519 = count__21489;
var G__21520 = (i__21490 + (1));
seq__21487 = G__21517;
chunk__21488 = G__21518;
count__21489 = G__21519;
i__21490 = G__21520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21487);
if(temp__4657__auto__){
var seq__21487__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21487__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21487__$1);
var G__21521 = cljs.core.chunk_rest.call(null,seq__21487__$1);
var G__21522 = c__4319__auto__;
var G__21523 = cljs.core.count.call(null,c__4319__auto__);
var G__21524 = (0);
seq__21487 = G__21521;
chunk__21488 = G__21522;
count__21489 = G__21523;
i__21490 = G__21524;
continue;
} else {
var vec__21494 = cljs.core.first.call(null,seq__21487__$1);
var effect_key = cljs.core.nth.call(null,vec__21494,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21494,(1),null);
var temp__4655__auto___21525 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21525)){
var effect_fn_21526 = temp__4655__auto___21525;
effect_fn_21526.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21527 = cljs.core.next.call(null,seq__21487__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__21487 = G__21527;
chunk__21488 = G__21528;
count__21489 = G__21529;
i__21490 = G__21530;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__21531 = cljs.core.seq.call(null,value);
var chunk__21532 = null;
var count__21533 = (0);
var i__21534 = (0);
while(true){
if((i__21534 < count__21533)){
var map__21535 = cljs.core._nth.call(null,chunk__21532,i__21534);
var map__21535__$1 = ((((!((map__21535 == null)))?(((((map__21535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21535):map__21535);
var effect = map__21535__$1;
var ms = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21531,chunk__21532,count__21533,i__21534,map__21535,map__21535__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21531,chunk__21532,count__21533,i__21534,map__21535,map__21535__$1,effect,ms,dispatch))
,ms);
}


var G__21539 = seq__21531;
var G__21540 = chunk__21532;
var G__21541 = count__21533;
var G__21542 = (i__21534 + (1));
seq__21531 = G__21539;
chunk__21532 = G__21540;
count__21533 = G__21541;
i__21534 = G__21542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21531);
if(temp__4657__auto__){
var seq__21531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21531__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21531__$1);
var G__21543 = cljs.core.chunk_rest.call(null,seq__21531__$1);
var G__21544 = c__4319__auto__;
var G__21545 = cljs.core.count.call(null,c__4319__auto__);
var G__21546 = (0);
seq__21531 = G__21543;
chunk__21532 = G__21544;
count__21533 = G__21545;
i__21534 = G__21546;
continue;
} else {
var map__21537 = cljs.core.first.call(null,seq__21531__$1);
var map__21537__$1 = ((((!((map__21537 == null)))?(((((map__21537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21537):map__21537);
var effect = map__21537__$1;
var ms = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21531,chunk__21532,count__21533,i__21534,map__21537,map__21537__$1,effect,ms,dispatch,seq__21531__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21531,chunk__21532,count__21533,i__21534,map__21537,map__21537__$1,effect,ms,dispatch,seq__21531__$1,temp__4657__auto__))
,ms);
}


var G__21547 = cljs.core.next.call(null,seq__21531__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__21531 = G__21547;
chunk__21532 = G__21548;
count__21533 = G__21549;
i__21534 = G__21550;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__21551 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21552 = null;
var count__21553 = (0);
var i__21554 = (0);
while(true){
if((i__21554 < count__21553)){
var event = cljs.core._nth.call(null,chunk__21552,i__21554);
re_frame.router.dispatch.call(null,event);


var G__21555 = seq__21551;
var G__21556 = chunk__21552;
var G__21557 = count__21553;
var G__21558 = (i__21554 + (1));
seq__21551 = G__21555;
chunk__21552 = G__21556;
count__21553 = G__21557;
i__21554 = G__21558;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21551);
if(temp__4657__auto__){
var seq__21551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21551__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21551__$1);
var G__21559 = cljs.core.chunk_rest.call(null,seq__21551__$1);
var G__21560 = c__4319__auto__;
var G__21561 = cljs.core.count.call(null,c__4319__auto__);
var G__21562 = (0);
seq__21551 = G__21559;
chunk__21552 = G__21560;
count__21553 = G__21561;
i__21554 = G__21562;
continue;
} else {
var event = cljs.core.first.call(null,seq__21551__$1);
re_frame.router.dispatch.call(null,event);


var G__21563 = cljs.core.next.call(null,seq__21551__$1);
var G__21564 = null;
var G__21565 = (0);
var G__21566 = (0);
seq__21551 = G__21563;
chunk__21552 = G__21564;
count__21553 = G__21565;
i__21554 = G__21566;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__21567 = cljs.core.seq.call(null,value);
var chunk__21568 = null;
var count__21569 = (0);
var i__21570 = (0);
while(true){
if((i__21570 < count__21569)){
var event = cljs.core._nth.call(null,chunk__21568,i__21570);
clear_event.call(null,event);


var G__21571 = seq__21567;
var G__21572 = chunk__21568;
var G__21573 = count__21569;
var G__21574 = (i__21570 + (1));
seq__21567 = G__21571;
chunk__21568 = G__21572;
count__21569 = G__21573;
i__21570 = G__21574;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21567);
if(temp__4657__auto__){
var seq__21567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21567__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21567__$1);
var G__21575 = cljs.core.chunk_rest.call(null,seq__21567__$1);
var G__21576 = c__4319__auto__;
var G__21577 = cljs.core.count.call(null,c__4319__auto__);
var G__21578 = (0);
seq__21567 = G__21575;
chunk__21568 = G__21576;
count__21569 = G__21577;
i__21570 = G__21578;
continue;
} else {
var event = cljs.core.first.call(null,seq__21567__$1);
clear_event.call(null,event);


var G__21579 = cljs.core.next.call(null,seq__21567__$1);
var G__21580 = null;
var G__21581 = (0);
var G__21582 = (0);
seq__21567 = G__21579;
chunk__21568 = G__21580;
count__21569 = G__21581;
i__21570 = G__21582;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1532367307714
