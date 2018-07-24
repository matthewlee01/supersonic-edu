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
var G__33561__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33562__i = 0, G__33562__a = new Array(arguments.length -  0);
while (G__33562__i < G__33562__a.length) {G__33562__a[G__33562__i] = arguments[G__33562__i + 0]; ++G__33562__i;}
  args = new cljs.core.IndexedSeq(G__33562__a,0,null);
} 
return G__33561__delegate.call(this,args);};
G__33561.cljs$lang$maxFixedArity = 0;
G__33561.cljs$lang$applyTo = (function (arglist__33563){
var args = cljs.core.seq(arglist__33563);
return G__33561__delegate(args);
});
G__33561.cljs$core$IFn$_invoke$arity$variadic = G__33561__delegate;
return G__33561;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33564__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33565__i = 0, G__33565__a = new Array(arguments.length -  0);
while (G__33565__i < G__33565__a.length) {G__33565__a[G__33565__i] = arguments[G__33565__i + 0]; ++G__33565__i;}
  args = new cljs.core.IndexedSeq(G__33565__a,0,null);
} 
return G__33564__delegate.call(this,args);};
G__33564.cljs$lang$maxFixedArity = 0;
G__33564.cljs$lang$applyTo = (function (arglist__33566){
var args = cljs.core.seq(arglist__33566);
return G__33564__delegate(args);
});
G__33564.cljs$core$IFn$_invoke$arity$variadic = G__33564__delegate;
return G__33564;
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

//# sourceMappingURL=debug.js.map?rel=1532451027239
