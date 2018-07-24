// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20694__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20695__i = 0, G__20695__a = new Array(arguments.length -  0);
while (G__20695__i < G__20695__a.length) {G__20695__a[G__20695__i] = arguments[G__20695__i + 0]; ++G__20695__i;}
  args = new cljs.core.IndexedSeq(G__20695__a,0,null);
} 
return G__20694__delegate.call(this,args);};
G__20694.cljs$lang$maxFixedArity = 0;
G__20694.cljs$lang$applyTo = (function (arglist__20696){
var args = cljs.core.seq(arglist__20696);
return G__20694__delegate(args);
});
G__20694.cljs$core$IFn$_invoke$arity$variadic = G__20694__delegate;
return G__20694;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20697__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20698__i = 0, G__20698__a = new Array(arguments.length -  0);
while (G__20698__i < G__20698__a.length) {G__20698__a[G__20698__i] = arguments[G__20698__i + 0]; ++G__20698__i;}
  args = new cljs.core.IndexedSeq(G__20698__a,0,null);
} 
return G__20697__delegate.call(this,args);};
G__20697.cljs$lang$maxFixedArity = 0;
G__20697.cljs$lang$applyTo = (function (arglist__20699){
var args = cljs.core.seq(arglist__20699);
return G__20697__delegate(args);
});
G__20697.cljs$core$IFn$_invoke$arity$variadic = G__20697__delegate;
return G__20697;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1532367305351
