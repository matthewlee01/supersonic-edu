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
var _STAR_current_trace_STAR_34666 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__34667 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34668 = null;
var count__34669 = (0);
var i__34670 = (0);
while(true){
if((i__34670 < count__34669)){
var vec__34671 = cljs.core._nth.call(null,chunk__34668,i__34670);
var effect_key = cljs.core.nth.call(null,vec__34671,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34671,(1),null);
var temp__4655__auto___34687 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34687)){
var effect_fn_34688 = temp__4655__auto___34687;
effect_fn_34688.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34689 = seq__34667;
var G__34690 = chunk__34668;
var G__34691 = count__34669;
var G__34692 = (i__34670 + (1));
seq__34667 = G__34689;
chunk__34668 = G__34690;
count__34669 = G__34691;
i__34670 = G__34692;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34667);
if(temp__4657__auto__){
var seq__34667__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34667__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34667__$1);
var G__34693 = cljs.core.chunk_rest.call(null,seq__34667__$1);
var G__34694 = c__4319__auto__;
var G__34695 = cljs.core.count.call(null,c__4319__auto__);
var G__34696 = (0);
seq__34667 = G__34693;
chunk__34668 = G__34694;
count__34669 = G__34695;
i__34670 = G__34696;
continue;
} else {
var vec__34674 = cljs.core.first.call(null,seq__34667__$1);
var effect_key = cljs.core.nth.call(null,vec__34674,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34674,(1),null);
var temp__4655__auto___34697 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34697)){
var effect_fn_34698 = temp__4655__auto___34697;
effect_fn_34698.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34699 = cljs.core.next.call(null,seq__34667__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34667 = G__34699;
chunk__34668 = G__34700;
count__34669 = G__34701;
i__34670 = G__34702;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__20884__auto___34703 = re_frame.interop.now.call(null);
var duration__20885__auto___34704 = (end__20884__auto___34703 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20885__auto___34704,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__20884__auto___34703);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34666;
}} else {
var seq__34677 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34678 = null;
var count__34679 = (0);
var i__34680 = (0);
while(true){
if((i__34680 < count__34679)){
var vec__34681 = cljs.core._nth.call(null,chunk__34678,i__34680);
var effect_key = cljs.core.nth.call(null,vec__34681,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34681,(1),null);
var temp__4655__auto___34705 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34705)){
var effect_fn_34706 = temp__4655__auto___34705;
effect_fn_34706.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34707 = seq__34677;
var G__34708 = chunk__34678;
var G__34709 = count__34679;
var G__34710 = (i__34680 + (1));
seq__34677 = G__34707;
chunk__34678 = G__34708;
count__34679 = G__34709;
i__34680 = G__34710;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34677);
if(temp__4657__auto__){
var seq__34677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34677__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34677__$1);
var G__34711 = cljs.core.chunk_rest.call(null,seq__34677__$1);
var G__34712 = c__4319__auto__;
var G__34713 = cljs.core.count.call(null,c__4319__auto__);
var G__34714 = (0);
seq__34677 = G__34711;
chunk__34678 = G__34712;
count__34679 = G__34713;
i__34680 = G__34714;
continue;
} else {
var vec__34684 = cljs.core.first.call(null,seq__34677__$1);
var effect_key = cljs.core.nth.call(null,vec__34684,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34684,(1),null);
var temp__4655__auto___34715 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34715)){
var effect_fn_34716 = temp__4655__auto___34715;
effect_fn_34716.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__34717 = cljs.core.next.call(null,seq__34677__$1);
var G__34718 = null;
var G__34719 = (0);
var G__34720 = (0);
seq__34677 = G__34717;
chunk__34678 = G__34718;
count__34679 = G__34719;
i__34680 = G__34720;
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
var seq__34721 = cljs.core.seq.call(null,value);
var chunk__34722 = null;
var count__34723 = (0);
var i__34724 = (0);
while(true){
if((i__34724 < count__34723)){
var map__34725 = cljs.core._nth.call(null,chunk__34722,i__34724);
var map__34725__$1 = ((((!((map__34725 == null)))?(((((map__34725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34725):map__34725);
var effect = map__34725__$1;
var ms = cljs.core.get.call(null,map__34725__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34725__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34721,chunk__34722,count__34723,i__34724,map__34725,map__34725__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34721,chunk__34722,count__34723,i__34724,map__34725,map__34725__$1,effect,ms,dispatch))
,ms);
}


var G__34729 = seq__34721;
var G__34730 = chunk__34722;
var G__34731 = count__34723;
var G__34732 = (i__34724 + (1));
seq__34721 = G__34729;
chunk__34722 = G__34730;
count__34723 = G__34731;
i__34724 = G__34732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34721);
if(temp__4657__auto__){
var seq__34721__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34721__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34721__$1);
var G__34733 = cljs.core.chunk_rest.call(null,seq__34721__$1);
var G__34734 = c__4319__auto__;
var G__34735 = cljs.core.count.call(null,c__4319__auto__);
var G__34736 = (0);
seq__34721 = G__34733;
chunk__34722 = G__34734;
count__34723 = G__34735;
i__34724 = G__34736;
continue;
} else {
var map__34727 = cljs.core.first.call(null,seq__34721__$1);
var map__34727__$1 = ((((!((map__34727 == null)))?(((((map__34727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var effect = map__34727__$1;
var ms = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34721,chunk__34722,count__34723,i__34724,map__34727,map__34727__$1,effect,ms,dispatch,seq__34721__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34721,chunk__34722,count__34723,i__34724,map__34727,map__34727__$1,effect,ms,dispatch,seq__34721__$1,temp__4657__auto__))
,ms);
}


var G__34737 = cljs.core.next.call(null,seq__34721__$1);
var G__34738 = null;
var G__34739 = (0);
var G__34740 = (0);
seq__34721 = G__34737;
chunk__34722 = G__34738;
count__34723 = G__34739;
i__34724 = G__34740;
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
var seq__34741 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34742 = null;
var count__34743 = (0);
var i__34744 = (0);
while(true){
if((i__34744 < count__34743)){
var event = cljs.core._nth.call(null,chunk__34742,i__34744);
re_frame.router.dispatch.call(null,event);


var G__34745 = seq__34741;
var G__34746 = chunk__34742;
var G__34747 = count__34743;
var G__34748 = (i__34744 + (1));
seq__34741 = G__34745;
chunk__34742 = G__34746;
count__34743 = G__34747;
i__34744 = G__34748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34741);
if(temp__4657__auto__){
var seq__34741__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34741__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34741__$1);
var G__34749 = cljs.core.chunk_rest.call(null,seq__34741__$1);
var G__34750 = c__4319__auto__;
var G__34751 = cljs.core.count.call(null,c__4319__auto__);
var G__34752 = (0);
seq__34741 = G__34749;
chunk__34742 = G__34750;
count__34743 = G__34751;
i__34744 = G__34752;
continue;
} else {
var event = cljs.core.first.call(null,seq__34741__$1);
re_frame.router.dispatch.call(null,event);


var G__34753 = cljs.core.next.call(null,seq__34741__$1);
var G__34754 = null;
var G__34755 = (0);
var G__34756 = (0);
seq__34741 = G__34753;
chunk__34742 = G__34754;
count__34743 = G__34755;
i__34744 = G__34756;
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
var seq__34757 = cljs.core.seq.call(null,value);
var chunk__34758 = null;
var count__34759 = (0);
var i__34760 = (0);
while(true){
if((i__34760 < count__34759)){
var event = cljs.core._nth.call(null,chunk__34758,i__34760);
clear_event.call(null,event);


var G__34761 = seq__34757;
var G__34762 = chunk__34758;
var G__34763 = count__34759;
var G__34764 = (i__34760 + (1));
seq__34757 = G__34761;
chunk__34758 = G__34762;
count__34759 = G__34763;
i__34760 = G__34764;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34757);
if(temp__4657__auto__){
var seq__34757__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34757__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34757__$1);
var G__34765 = cljs.core.chunk_rest.call(null,seq__34757__$1);
var G__34766 = c__4319__auto__;
var G__34767 = cljs.core.count.call(null,c__4319__auto__);
var G__34768 = (0);
seq__34757 = G__34765;
chunk__34758 = G__34766;
count__34759 = G__34767;
i__34760 = G__34768;
continue;
} else {
var event = cljs.core.first.call(null,seq__34757__$1);
clear_event.call(null,event);


var G__34769 = cljs.core.next.call(null,seq__34757__$1);
var G__34770 = null;
var G__34771 = (0);
var G__34772 = (0);
seq__34757 = G__34769;
chunk__34758 = G__34770;
count__34759 = G__34771;
i__34760 = G__34772;
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

//# sourceMappingURL=fx.js.map?rel=1532451158546
