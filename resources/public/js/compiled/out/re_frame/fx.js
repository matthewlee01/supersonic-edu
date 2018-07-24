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
var _STAR_current_trace_STAR_20939 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__20940 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__20941 = null;
var count__20942 = (0);
var i__20943 = (0);
while(true){
if((i__20943 < count__20942)){
var vec__20944 = cljs.core._nth.call(null,chunk__20941,i__20943);
var effect_key = cljs.core.nth.call(null,vec__20944,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20944,(1),null);
var temp__4655__auto___20960 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___20960)){
var effect_fn_20961 = temp__4655__auto___20960;
effect_fn_20961.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20962 = seq__20940;
var G__20963 = chunk__20941;
var G__20964 = count__20942;
var G__20965 = (i__20943 + (1));
seq__20940 = G__20962;
chunk__20941 = G__20963;
count__20942 = G__20964;
i__20943 = G__20965;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20940);
if(temp__4657__auto__){
var seq__20940__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20940__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__20940__$1);
var G__20966 = cljs.core.chunk_rest.call(null,seq__20940__$1);
var G__20967 = c__4319__auto__;
var G__20968 = cljs.core.count.call(null,c__4319__auto__);
var G__20969 = (0);
seq__20940 = G__20966;
chunk__20941 = G__20967;
count__20942 = G__20968;
i__20943 = G__20969;
continue;
} else {
var vec__20947 = cljs.core.first.call(null,seq__20940__$1);
var effect_key = cljs.core.nth.call(null,vec__20947,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20947,(1),null);
var temp__4655__auto___20970 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___20970)){
var effect_fn_20971 = temp__4655__auto___20970;
effect_fn_20971.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20972 = cljs.core.next.call(null,seq__20940__$1);
var G__20973 = null;
var G__20974 = (0);
var G__20975 = (0);
seq__20940 = G__20972;
chunk__20941 = G__20973;
count__20942 = G__20974;
i__20943 = G__20975;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__20884__auto___20976 = re_frame.interop.now.call(null);
var duration__20885__auto___20977 = (end__20884__auto___20976 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20885__auto___20977,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__20884__auto___20976);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_20939;
}} else {
var seq__20950 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__20951 = null;
var count__20952 = (0);
var i__20953 = (0);
while(true){
if((i__20953 < count__20952)){
var vec__20954 = cljs.core._nth.call(null,chunk__20951,i__20953);
var effect_key = cljs.core.nth.call(null,vec__20954,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20954,(1),null);
var temp__4655__auto___20978 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___20978)){
var effect_fn_20979 = temp__4655__auto___20978;
effect_fn_20979.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20980 = seq__20950;
var G__20981 = chunk__20951;
var G__20982 = count__20952;
var G__20983 = (i__20953 + (1));
seq__20950 = G__20980;
chunk__20951 = G__20981;
count__20952 = G__20982;
i__20953 = G__20983;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20950);
if(temp__4657__auto__){
var seq__20950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20950__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__20950__$1);
var G__20984 = cljs.core.chunk_rest.call(null,seq__20950__$1);
var G__20985 = c__4319__auto__;
var G__20986 = cljs.core.count.call(null,c__4319__auto__);
var G__20987 = (0);
seq__20950 = G__20984;
chunk__20951 = G__20985;
count__20952 = G__20986;
i__20953 = G__20987;
continue;
} else {
var vec__20957 = cljs.core.first.call(null,seq__20950__$1);
var effect_key = cljs.core.nth.call(null,vec__20957,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20957,(1),null);
var temp__4655__auto___20988 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___20988)){
var effect_fn_20989 = temp__4655__auto___20988;
effect_fn_20989.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20990 = cljs.core.next.call(null,seq__20950__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20950 = G__20990;
chunk__20951 = G__20991;
count__20952 = G__20992;
i__20953 = G__20993;
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
var seq__20994 = cljs.core.seq.call(null,value);
var chunk__20995 = null;
var count__20996 = (0);
var i__20997 = (0);
while(true){
if((i__20997 < count__20996)){
var map__20998 = cljs.core._nth.call(null,chunk__20995,i__20997);
var map__20998__$1 = ((((!((map__20998 == null)))?(((((map__20998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20998):map__20998);
var effect = map__20998__$1;
var ms = cljs.core.get.call(null,map__20998__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__20998__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20994,chunk__20995,count__20996,i__20997,map__20998,map__20998__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20994,chunk__20995,count__20996,i__20997,map__20998,map__20998__$1,effect,ms,dispatch))
,ms);
}


var G__21002 = seq__20994;
var G__21003 = chunk__20995;
var G__21004 = count__20996;
var G__21005 = (i__20997 + (1));
seq__20994 = G__21002;
chunk__20995 = G__21003;
count__20996 = G__21004;
i__20997 = G__21005;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20994);
if(temp__4657__auto__){
var seq__20994__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20994__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__20994__$1);
var G__21006 = cljs.core.chunk_rest.call(null,seq__20994__$1);
var G__21007 = c__4319__auto__;
var G__21008 = cljs.core.count.call(null,c__4319__auto__);
var G__21009 = (0);
seq__20994 = G__21006;
chunk__20995 = G__21007;
count__20996 = G__21008;
i__20997 = G__21009;
continue;
} else {
var map__21000 = cljs.core.first.call(null,seq__20994__$1);
var map__21000__$1 = ((((!((map__21000 == null)))?(((((map__21000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21000):map__21000);
var effect = map__21000__$1;
var ms = cljs.core.get.call(null,map__21000__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21000__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20994,chunk__20995,count__20996,i__20997,map__21000,map__21000__$1,effect,ms,dispatch,seq__20994__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20994,chunk__20995,count__20996,i__20997,map__21000,map__21000__$1,effect,ms,dispatch,seq__20994__$1,temp__4657__auto__))
,ms);
}


var G__21010 = cljs.core.next.call(null,seq__20994__$1);
var G__21011 = null;
var G__21012 = (0);
var G__21013 = (0);
seq__20994 = G__21010;
chunk__20995 = G__21011;
count__20996 = G__21012;
i__20997 = G__21013;
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
var seq__21014 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21015 = null;
var count__21016 = (0);
var i__21017 = (0);
while(true){
if((i__21017 < count__21016)){
var event = cljs.core._nth.call(null,chunk__21015,i__21017);
re_frame.router.dispatch.call(null,event);


var G__21018 = seq__21014;
var G__21019 = chunk__21015;
var G__21020 = count__21016;
var G__21021 = (i__21017 + (1));
seq__21014 = G__21018;
chunk__21015 = G__21019;
count__21016 = G__21020;
i__21017 = G__21021;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21014);
if(temp__4657__auto__){
var seq__21014__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21014__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21014__$1);
var G__21022 = cljs.core.chunk_rest.call(null,seq__21014__$1);
var G__21023 = c__4319__auto__;
var G__21024 = cljs.core.count.call(null,c__4319__auto__);
var G__21025 = (0);
seq__21014 = G__21022;
chunk__21015 = G__21023;
count__21016 = G__21024;
i__21017 = G__21025;
continue;
} else {
var event = cljs.core.first.call(null,seq__21014__$1);
re_frame.router.dispatch.call(null,event);


var G__21026 = cljs.core.next.call(null,seq__21014__$1);
var G__21027 = null;
var G__21028 = (0);
var G__21029 = (0);
seq__21014 = G__21026;
chunk__21015 = G__21027;
count__21016 = G__21028;
i__21017 = G__21029;
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
var seq__21030 = cljs.core.seq.call(null,value);
var chunk__21031 = null;
var count__21032 = (0);
var i__21033 = (0);
while(true){
if((i__21033 < count__21032)){
var event = cljs.core._nth.call(null,chunk__21031,i__21033);
clear_event.call(null,event);


var G__21034 = seq__21030;
var G__21035 = chunk__21031;
var G__21036 = count__21032;
var G__21037 = (i__21033 + (1));
seq__21030 = G__21034;
chunk__21031 = G__21035;
count__21032 = G__21036;
i__21033 = G__21037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21030);
if(temp__4657__auto__){
var seq__21030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21030__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21030__$1);
var G__21038 = cljs.core.chunk_rest.call(null,seq__21030__$1);
var G__21039 = c__4319__auto__;
var G__21040 = cljs.core.count.call(null,c__4319__auto__);
var G__21041 = (0);
seq__21030 = G__21038;
chunk__21031 = G__21039;
count__21032 = G__21040;
i__21033 = G__21041;
continue;
} else {
var event = cljs.core.first.call(null,seq__21030__$1);
clear_event.call(null,event);


var G__21042 = cljs.core.next.call(null,seq__21030__$1);
var G__21043 = null;
var G__21044 = (0);
var G__21045 = (0);
seq__21030 = G__21042;
chunk__21031 = G__21043;
count__21032 = G__21044;
i__21033 = G__21045;
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

//# sourceMappingURL=fx.js.map?rel=1532452666138
