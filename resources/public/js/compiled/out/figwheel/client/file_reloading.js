// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45125_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45125_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45126 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45127 = null;
var count__45128 = (0);
var i__45129 = (0);
while(true){
if((i__45129 < count__45128)){
var n = cljs.core._nth.call(null,chunk__45127,i__45129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45130 = seq__45126;
var G__45131 = chunk__45127;
var G__45132 = count__45128;
var G__45133 = (i__45129 + (1));
seq__45126 = G__45130;
chunk__45127 = G__45131;
count__45128 = G__45132;
i__45129 = G__45133;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45126);
if(temp__4657__auto__){
var seq__45126__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45126__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__45126__$1);
var G__45134 = cljs.core.chunk_rest.call(null,seq__45126__$1);
var G__45135 = c__4319__auto__;
var G__45136 = cljs.core.count.call(null,c__4319__auto__);
var G__45137 = (0);
seq__45126 = G__45134;
chunk__45127 = G__45135;
count__45128 = G__45136;
i__45129 = G__45137;
continue;
} else {
var n = cljs.core.first.call(null,seq__45126__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45138 = cljs.core.next.call(null,seq__45126__$1);
var G__45139 = null;
var G__45140 = (0);
var G__45141 = (0);
seq__45126 = G__45138;
chunk__45127 = G__45139;
count__45128 = G__45140;
i__45129 = G__45141;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__45142){
var vec__45143 = p__45142;
var _ = cljs.core.nth.call(null,vec__45143,(0),null);
var v = cljs.core.nth.call(null,vec__45143,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__45146){
var vec__45147 = p__45146;
var k = cljs.core.nth.call(null,vec__45147,(0),null);
var v = cljs.core.nth.call(null,vec__45147,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45159_45167 = cljs.core.seq.call(null,deps);
var chunk__45160_45168 = null;
var count__45161_45169 = (0);
var i__45162_45170 = (0);
while(true){
if((i__45162_45170 < count__45161_45169)){
var dep_45171 = cljs.core._nth.call(null,chunk__45160_45168,i__45162_45170);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_45171;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45171));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45171,(depth + (1)),state);
} else {
}


var G__45172 = seq__45159_45167;
var G__45173 = chunk__45160_45168;
var G__45174 = count__45161_45169;
var G__45175 = (i__45162_45170 + (1));
seq__45159_45167 = G__45172;
chunk__45160_45168 = G__45173;
count__45161_45169 = G__45174;
i__45162_45170 = G__45175;
continue;
} else {
var temp__4657__auto___45176 = cljs.core.seq.call(null,seq__45159_45167);
if(temp__4657__auto___45176){
var seq__45159_45177__$1 = temp__4657__auto___45176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45159_45177__$1)){
var c__4319__auto___45178 = cljs.core.chunk_first.call(null,seq__45159_45177__$1);
var G__45179 = cljs.core.chunk_rest.call(null,seq__45159_45177__$1);
var G__45180 = c__4319__auto___45178;
var G__45181 = cljs.core.count.call(null,c__4319__auto___45178);
var G__45182 = (0);
seq__45159_45167 = G__45179;
chunk__45160_45168 = G__45180;
count__45161_45169 = G__45181;
i__45162_45170 = G__45182;
continue;
} else {
var dep_45183 = cljs.core.first.call(null,seq__45159_45177__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_45183;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45183));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45183,(depth + (1)),state);
} else {
}


var G__45184 = cljs.core.next.call(null,seq__45159_45177__$1);
var G__45185 = null;
var G__45186 = (0);
var G__45187 = (0);
seq__45159_45167 = G__45184;
chunk__45160_45168 = G__45185;
count__45161_45169 = G__45186;
i__45162_45170 = G__45187;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45163){
var vec__45164 = p__45163;
var seq__45165 = cljs.core.seq.call(null,vec__45164);
var first__45166 = cljs.core.first.call(null,seq__45165);
var seq__45165__$1 = cljs.core.next.call(null,seq__45165);
var x = first__45166;
var xs = seq__45165__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45164,seq__45165,first__45166,seq__45165__$1,x,xs,get_deps__$1){
return (function (p1__45150_SHARP_){
return clojure.set.difference.call(null,p1__45150_SHARP_,x);
});})(vec__45164,seq__45165,first__45166,seq__45165__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45188 = cljs.core.seq.call(null,provides);
var chunk__45189 = null;
var count__45190 = (0);
var i__45191 = (0);
while(true){
if((i__45191 < count__45190)){
var prov = cljs.core._nth.call(null,chunk__45189,i__45191);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45192_45200 = cljs.core.seq.call(null,requires);
var chunk__45193_45201 = null;
var count__45194_45202 = (0);
var i__45195_45203 = (0);
while(true){
if((i__45195_45203 < count__45194_45202)){
var req_45204 = cljs.core._nth.call(null,chunk__45193_45201,i__45195_45203);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45204,prov);


var G__45205 = seq__45192_45200;
var G__45206 = chunk__45193_45201;
var G__45207 = count__45194_45202;
var G__45208 = (i__45195_45203 + (1));
seq__45192_45200 = G__45205;
chunk__45193_45201 = G__45206;
count__45194_45202 = G__45207;
i__45195_45203 = G__45208;
continue;
} else {
var temp__4657__auto___45209 = cljs.core.seq.call(null,seq__45192_45200);
if(temp__4657__auto___45209){
var seq__45192_45210__$1 = temp__4657__auto___45209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45192_45210__$1)){
var c__4319__auto___45211 = cljs.core.chunk_first.call(null,seq__45192_45210__$1);
var G__45212 = cljs.core.chunk_rest.call(null,seq__45192_45210__$1);
var G__45213 = c__4319__auto___45211;
var G__45214 = cljs.core.count.call(null,c__4319__auto___45211);
var G__45215 = (0);
seq__45192_45200 = G__45212;
chunk__45193_45201 = G__45213;
count__45194_45202 = G__45214;
i__45195_45203 = G__45215;
continue;
} else {
var req_45216 = cljs.core.first.call(null,seq__45192_45210__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45216,prov);


var G__45217 = cljs.core.next.call(null,seq__45192_45210__$1);
var G__45218 = null;
var G__45219 = (0);
var G__45220 = (0);
seq__45192_45200 = G__45217;
chunk__45193_45201 = G__45218;
count__45194_45202 = G__45219;
i__45195_45203 = G__45220;
continue;
}
} else {
}
}
break;
}


var G__45221 = seq__45188;
var G__45222 = chunk__45189;
var G__45223 = count__45190;
var G__45224 = (i__45191 + (1));
seq__45188 = G__45221;
chunk__45189 = G__45222;
count__45190 = G__45223;
i__45191 = G__45224;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45188);
if(temp__4657__auto__){
var seq__45188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45188__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__45188__$1);
var G__45225 = cljs.core.chunk_rest.call(null,seq__45188__$1);
var G__45226 = c__4319__auto__;
var G__45227 = cljs.core.count.call(null,c__4319__auto__);
var G__45228 = (0);
seq__45188 = G__45225;
chunk__45189 = G__45226;
count__45190 = G__45227;
i__45191 = G__45228;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45188__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45196_45229 = cljs.core.seq.call(null,requires);
var chunk__45197_45230 = null;
var count__45198_45231 = (0);
var i__45199_45232 = (0);
while(true){
if((i__45199_45232 < count__45198_45231)){
var req_45233 = cljs.core._nth.call(null,chunk__45197_45230,i__45199_45232);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45233,prov);


var G__45234 = seq__45196_45229;
var G__45235 = chunk__45197_45230;
var G__45236 = count__45198_45231;
var G__45237 = (i__45199_45232 + (1));
seq__45196_45229 = G__45234;
chunk__45197_45230 = G__45235;
count__45198_45231 = G__45236;
i__45199_45232 = G__45237;
continue;
} else {
var temp__4657__auto___45238__$1 = cljs.core.seq.call(null,seq__45196_45229);
if(temp__4657__auto___45238__$1){
var seq__45196_45239__$1 = temp__4657__auto___45238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45196_45239__$1)){
var c__4319__auto___45240 = cljs.core.chunk_first.call(null,seq__45196_45239__$1);
var G__45241 = cljs.core.chunk_rest.call(null,seq__45196_45239__$1);
var G__45242 = c__4319__auto___45240;
var G__45243 = cljs.core.count.call(null,c__4319__auto___45240);
var G__45244 = (0);
seq__45196_45229 = G__45241;
chunk__45197_45230 = G__45242;
count__45198_45231 = G__45243;
i__45199_45232 = G__45244;
continue;
} else {
var req_45245 = cljs.core.first.call(null,seq__45196_45239__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45245,prov);


var G__45246 = cljs.core.next.call(null,seq__45196_45239__$1);
var G__45247 = null;
var G__45248 = (0);
var G__45249 = (0);
seq__45196_45229 = G__45246;
chunk__45197_45230 = G__45247;
count__45198_45231 = G__45248;
i__45199_45232 = G__45249;
continue;
}
} else {
}
}
break;
}


var G__45250 = cljs.core.next.call(null,seq__45188__$1);
var G__45251 = null;
var G__45252 = (0);
var G__45253 = (0);
seq__45188 = G__45250;
chunk__45189 = G__45251;
count__45190 = G__45252;
i__45191 = G__45253;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45254_45258 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45255_45259 = null;
var count__45256_45260 = (0);
var i__45257_45261 = (0);
while(true){
if((i__45257_45261 < count__45256_45260)){
var ns_45262 = cljs.core._nth.call(null,chunk__45255_45259,i__45257_45261);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45262);


var G__45263 = seq__45254_45258;
var G__45264 = chunk__45255_45259;
var G__45265 = count__45256_45260;
var G__45266 = (i__45257_45261 + (1));
seq__45254_45258 = G__45263;
chunk__45255_45259 = G__45264;
count__45256_45260 = G__45265;
i__45257_45261 = G__45266;
continue;
} else {
var temp__4657__auto___45267 = cljs.core.seq.call(null,seq__45254_45258);
if(temp__4657__auto___45267){
var seq__45254_45268__$1 = temp__4657__auto___45267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45254_45268__$1)){
var c__4319__auto___45269 = cljs.core.chunk_first.call(null,seq__45254_45268__$1);
var G__45270 = cljs.core.chunk_rest.call(null,seq__45254_45268__$1);
var G__45271 = c__4319__auto___45269;
var G__45272 = cljs.core.count.call(null,c__4319__auto___45269);
var G__45273 = (0);
seq__45254_45258 = G__45270;
chunk__45255_45259 = G__45271;
count__45256_45260 = G__45272;
i__45257_45261 = G__45273;
continue;
} else {
var ns_45274 = cljs.core.first.call(null,seq__45254_45268__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45274);


var G__45275 = cljs.core.next.call(null,seq__45254_45268__$1);
var G__45276 = null;
var G__45277 = (0);
var G__45278 = (0);
seq__45254_45258 = G__45275;
chunk__45255_45259 = G__45276;
count__45256_45260 = G__45277;
i__45257_45261 = G__45278;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45279__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45280__i = 0, G__45280__a = new Array(arguments.length -  0);
while (G__45280__i < G__45280__a.length) {G__45280__a[G__45280__i] = arguments[G__45280__i + 0]; ++G__45280__i;}
  args = new cljs.core.IndexedSeq(G__45280__a,0,null);
} 
return G__45279__delegate.call(this,args);};
G__45279.cljs$lang$maxFixedArity = 0;
G__45279.cljs$lang$applyTo = (function (arglist__45281){
var args = cljs.core.seq(arglist__45281);
return G__45279__delegate(args);
});
G__45279.cljs$core$IFn$_invoke$arity$variadic = G__45279__delegate;
return G__45279;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__45282_SHARP_,p2__45283_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45282_SHARP_)].join('')),p2__45283_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__45284_SHARP_,p2__45285_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45284_SHARP_)].join(''),p2__45285_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45286 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45286.addCallback(((function (G__45286){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45286))
);

G__45286.addErrback(((function (G__45286){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45286))
);

return G__45286;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45287){if((e45287 instanceof Error)){
var e = e45287;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45287;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45288){if((e45288 instanceof Error)){
var e = e45288;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45288;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45289 = cljs.core._EQ_;
var expr__45290 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45289.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45290))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45289.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45290))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45289.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45290))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45289,expr__45290){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45289,expr__45290))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45292,callback){
var map__45293 = p__45292;
var map__45293__$1 = ((((!((map__45293 == null)))?(((((map__45293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45293):map__45293);
var file_msg = map__45293__$1;
var request_url = cljs.core.get.call(null,map__45293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45293,map__45293__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45293,map__45293__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__){
return (function (state_45331){
var state_val_45332 = (state_45331[(1)]);
if((state_val_45332 === (7))){
var inst_45327 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
var statearr_45333_45359 = state_45331__$1;
(statearr_45333_45359[(2)] = inst_45327);

(statearr_45333_45359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (1))){
var state_45331__$1 = state_45331;
var statearr_45334_45360 = state_45331__$1;
(statearr_45334_45360[(2)] = null);

(statearr_45334_45360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (4))){
var inst_45297 = (state_45331[(7)]);
var inst_45297__$1 = (state_45331[(2)]);
var state_45331__$1 = (function (){var statearr_45335 = state_45331;
(statearr_45335[(7)] = inst_45297__$1);

return statearr_45335;
})();
if(cljs.core.truth_(inst_45297__$1)){
var statearr_45336_45361 = state_45331__$1;
(statearr_45336_45361[(1)] = (5));

} else {
var statearr_45337_45362 = state_45331__$1;
(statearr_45337_45362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (15))){
var inst_45310 = (state_45331[(8)]);
var inst_45312 = (state_45331[(9)]);
var inst_45314 = inst_45312.call(null,inst_45310);
var state_45331__$1 = state_45331;
var statearr_45338_45363 = state_45331__$1;
(statearr_45338_45363[(2)] = inst_45314);

(statearr_45338_45363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (13))){
var inst_45321 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
var statearr_45339_45364 = state_45331__$1;
(statearr_45339_45364[(2)] = inst_45321);

(statearr_45339_45364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (6))){
var state_45331__$1 = state_45331;
var statearr_45340_45365 = state_45331__$1;
(statearr_45340_45365[(2)] = null);

(statearr_45340_45365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (17))){
var inst_45318 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
var statearr_45341_45366 = state_45331__$1;
(statearr_45341_45366[(2)] = inst_45318);

(statearr_45341_45366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (3))){
var inst_45329 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45331__$1,inst_45329);
} else {
if((state_val_45332 === (12))){
var state_45331__$1 = state_45331;
var statearr_45342_45367 = state_45331__$1;
(statearr_45342_45367[(2)] = null);

(statearr_45342_45367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (2))){
var state_45331__$1 = state_45331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45331__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45332 === (11))){
var inst_45302 = (state_45331[(10)]);
var inst_45308 = figwheel.client.file_reloading.blocking_load.call(null,inst_45302);
var state_45331__$1 = state_45331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45331__$1,(14),inst_45308);
} else {
if((state_val_45332 === (9))){
var inst_45302 = (state_45331[(10)]);
var state_45331__$1 = state_45331;
if(cljs.core.truth_(inst_45302)){
var statearr_45343_45368 = state_45331__$1;
(statearr_45343_45368[(1)] = (11));

} else {
var statearr_45344_45369 = state_45331__$1;
(statearr_45344_45369[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (5))){
var inst_45303 = (state_45331[(11)]);
var inst_45297 = (state_45331[(7)]);
var inst_45302 = cljs.core.nth.call(null,inst_45297,(0),null);
var inst_45303__$1 = cljs.core.nth.call(null,inst_45297,(1),null);
var state_45331__$1 = (function (){var statearr_45345 = state_45331;
(statearr_45345[(11)] = inst_45303__$1);

(statearr_45345[(10)] = inst_45302);

return statearr_45345;
})();
if(cljs.core.truth_(inst_45303__$1)){
var statearr_45346_45370 = state_45331__$1;
(statearr_45346_45370[(1)] = (8));

} else {
var statearr_45347_45371 = state_45331__$1;
(statearr_45347_45371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (14))){
var inst_45312 = (state_45331[(9)]);
var inst_45302 = (state_45331[(10)]);
var inst_45310 = (state_45331[(2)]);
var inst_45311 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45312__$1 = cljs.core.get.call(null,inst_45311,inst_45302);
var state_45331__$1 = (function (){var statearr_45348 = state_45331;
(statearr_45348[(8)] = inst_45310);

(statearr_45348[(9)] = inst_45312__$1);

return statearr_45348;
})();
if(cljs.core.truth_(inst_45312__$1)){
var statearr_45349_45372 = state_45331__$1;
(statearr_45349_45372[(1)] = (15));

} else {
var statearr_45350_45373 = state_45331__$1;
(statearr_45350_45373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (16))){
var inst_45310 = (state_45331[(8)]);
var inst_45316 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45310);
var state_45331__$1 = state_45331;
var statearr_45351_45374 = state_45331__$1;
(statearr_45351_45374[(2)] = inst_45316);

(statearr_45351_45374[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (10))){
var inst_45323 = (state_45331[(2)]);
var state_45331__$1 = (function (){var statearr_45352 = state_45331;
(statearr_45352[(12)] = inst_45323);

return statearr_45352;
})();
var statearr_45353_45375 = state_45331__$1;
(statearr_45353_45375[(2)] = null);

(statearr_45353_45375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (8))){
var inst_45303 = (state_45331[(11)]);
var inst_45305 = eval(inst_45303);
var state_45331__$1 = state_45331;
var statearr_45354_45376 = state_45331__$1;
(statearr_45354_45376[(2)] = inst_45305);

(statearr_45354_45376[(1)] = (10));


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
});})(c__22731__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22644__auto__ = null;
var figwheel$client$file_reloading$state_machine__22644__auto____0 = (function (){
var statearr_45355 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45355[(0)] = figwheel$client$file_reloading$state_machine__22644__auto__);

(statearr_45355[(1)] = (1));

return statearr_45355;
});
var figwheel$client$file_reloading$state_machine__22644__auto____1 = (function (state_45331){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_45331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e45356){if((e45356 instanceof Object)){
var ex__22647__auto__ = e45356;
var statearr_45357_45377 = state_45331;
(statearr_45357_45377[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45378 = state_45331;
state_45331 = G__45378;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22644__auto__ = function(state_45331){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22644__auto____1.call(this,state_45331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22644__auto____0;
figwheel$client$file_reloading$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22644__auto____1;
return figwheel$client$file_reloading$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__))
})();
var state__22733__auto__ = (function (){var statearr_45358 = f__22732__auto__.call(null);
(statearr_45358[(6)] = c__22731__auto__);

return statearr_45358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__))
);

return c__22731__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45380 = arguments.length;
switch (G__45380) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45382,callback){
var map__45383 = p__45382;
var map__45383__$1 = ((((!((map__45383 == null)))?(((((map__45383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45383):map__45383);
var file_msg = map__45383__$1;
var namespace = cljs.core.get.call(null,map__45383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45383,map__45383__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45383,map__45383__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45385){
var map__45386 = p__45385;
var map__45386__$1 = ((((!((map__45386 == null)))?(((((map__45386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45386):map__45386);
var file_msg = map__45386__$1;
var namespace = cljs.core.get.call(null,map__45386__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45388){
var map__45389 = p__45388;
var map__45389__$1 = ((((!((map__45389 == null)))?(((((map__45389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45389):map__45389);
var file_msg = map__45389__$1;
var namespace = cljs.core.get.call(null,map__45389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45391,callback){
var map__45392 = p__45391;
var map__45392__$1 = ((((!((map__45392 == null)))?(((((map__45392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45392):map__45392);
var file_msg = map__45392__$1;
var request_url = cljs.core.get.call(null,map__45392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22731__auto___45442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___45442,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___45442,out){
return (function (state_45427){
var state_val_45428 = (state_45427[(1)]);
if((state_val_45428 === (1))){
var inst_45401 = cljs.core.seq.call(null,files);
var inst_45402 = cljs.core.first.call(null,inst_45401);
var inst_45403 = cljs.core.next.call(null,inst_45401);
var inst_45404 = files;
var state_45427__$1 = (function (){var statearr_45429 = state_45427;
(statearr_45429[(7)] = inst_45403);

(statearr_45429[(8)] = inst_45404);

(statearr_45429[(9)] = inst_45402);

return statearr_45429;
})();
var statearr_45430_45443 = state_45427__$1;
(statearr_45430_45443[(2)] = null);

(statearr_45430_45443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (2))){
var inst_45404 = (state_45427[(8)]);
var inst_45410 = (state_45427[(10)]);
var inst_45409 = cljs.core.seq.call(null,inst_45404);
var inst_45410__$1 = cljs.core.first.call(null,inst_45409);
var inst_45411 = cljs.core.next.call(null,inst_45409);
var inst_45412 = (inst_45410__$1 == null);
var inst_45413 = cljs.core.not.call(null,inst_45412);
var state_45427__$1 = (function (){var statearr_45431 = state_45427;
(statearr_45431[(11)] = inst_45411);

(statearr_45431[(10)] = inst_45410__$1);

return statearr_45431;
})();
if(inst_45413){
var statearr_45432_45444 = state_45427__$1;
(statearr_45432_45444[(1)] = (4));

} else {
var statearr_45433_45445 = state_45427__$1;
(statearr_45433_45445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (3))){
var inst_45425 = (state_45427[(2)]);
var state_45427__$1 = state_45427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45427__$1,inst_45425);
} else {
if((state_val_45428 === (4))){
var inst_45410 = (state_45427[(10)]);
var inst_45415 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45410);
var state_45427__$1 = state_45427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45427__$1,(7),inst_45415);
} else {
if((state_val_45428 === (5))){
var inst_45421 = cljs.core.async.close_BANG_.call(null,out);
var state_45427__$1 = state_45427;
var statearr_45434_45446 = state_45427__$1;
(statearr_45434_45446[(2)] = inst_45421);

(statearr_45434_45446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (6))){
var inst_45423 = (state_45427[(2)]);
var state_45427__$1 = state_45427;
var statearr_45435_45447 = state_45427__$1;
(statearr_45435_45447[(2)] = inst_45423);

(statearr_45435_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (7))){
var inst_45411 = (state_45427[(11)]);
var inst_45417 = (state_45427[(2)]);
var inst_45418 = cljs.core.async.put_BANG_.call(null,out,inst_45417);
var inst_45404 = inst_45411;
var state_45427__$1 = (function (){var statearr_45436 = state_45427;
(statearr_45436[(8)] = inst_45404);

(statearr_45436[(12)] = inst_45418);

return statearr_45436;
})();
var statearr_45437_45448 = state_45427__$1;
(statearr_45437_45448[(2)] = null);

(statearr_45437_45448[(1)] = (2));


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
});})(c__22731__auto___45442,out))
;
return ((function (switch__22643__auto__,c__22731__auto___45442,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____0 = (function (){
var statearr_45438 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45438[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__);

(statearr_45438[(1)] = (1));

return statearr_45438;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____1 = (function (state_45427){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_45427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e45439){if((e45439 instanceof Object)){
var ex__22647__auto__ = e45439;
var statearr_45440_45449 = state_45427;
(statearr_45440_45449[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45450 = state_45427;
state_45427 = G__45450;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__ = function(state_45427){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____1.call(this,state_45427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___45442,out))
})();
var state__22733__auto__ = (function (){var statearr_45441 = f__22732__auto__.call(null);
(statearr_45441[(6)] = c__22731__auto___45442);

return statearr_45441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___45442,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45451,opts){
var map__45452 = p__45451;
var map__45452__$1 = ((((!((map__45452 == null)))?(((((map__45452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45452):map__45452);
var eval_body = cljs.core.get.call(null,map__45452__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45454){var e = e45454;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45455_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45455_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45456){
var vec__45457 = p__45456;
var k = cljs.core.nth.call(null,vec__45457,(0),null);
var v = cljs.core.nth.call(null,vec__45457,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45460){
var vec__45461 = p__45460;
var k = cljs.core.nth.call(null,vec__45461,(0),null);
var v = cljs.core.nth.call(null,vec__45461,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45467,p__45468){
var map__45469 = p__45467;
var map__45469__$1 = ((((!((map__45469 == null)))?(((((map__45469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45469):map__45469);
var opts = map__45469__$1;
var before_jsload = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45470 = p__45468;
var map__45470__$1 = ((((!((map__45470 == null)))?(((((map__45470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45470):map__45470);
var msg = map__45470__$1;
var files = cljs.core.get.call(null,map__45470__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45470__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45470__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45624){
var state_val_45625 = (state_45624[(1)]);
if((state_val_45625 === (7))){
var inst_45487 = (state_45624[(7)]);
var inst_45485 = (state_45624[(8)]);
var inst_45486 = (state_45624[(9)]);
var inst_45484 = (state_45624[(10)]);
var inst_45492 = cljs.core._nth.call(null,inst_45485,inst_45487);
var inst_45493 = figwheel.client.file_reloading.eval_body.call(null,inst_45492,opts);
var inst_45494 = (inst_45487 + (1));
var tmp45626 = inst_45485;
var tmp45627 = inst_45486;
var tmp45628 = inst_45484;
var inst_45484__$1 = tmp45628;
var inst_45485__$1 = tmp45626;
var inst_45486__$1 = tmp45627;
var inst_45487__$1 = inst_45494;
var state_45624__$1 = (function (){var statearr_45629 = state_45624;
(statearr_45629[(7)] = inst_45487__$1);

(statearr_45629[(8)] = inst_45485__$1);

(statearr_45629[(9)] = inst_45486__$1);

(statearr_45629[(10)] = inst_45484__$1);

(statearr_45629[(11)] = inst_45493);

return statearr_45629;
})();
var statearr_45630_45713 = state_45624__$1;
(statearr_45630_45713[(2)] = null);

(statearr_45630_45713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (20))){
var inst_45527 = (state_45624[(12)]);
var inst_45535 = figwheel.client.file_reloading.sort_files.call(null,inst_45527);
var state_45624__$1 = state_45624;
var statearr_45631_45714 = state_45624__$1;
(statearr_45631_45714[(2)] = inst_45535);

(statearr_45631_45714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (27))){
var state_45624__$1 = state_45624;
var statearr_45632_45715 = state_45624__$1;
(statearr_45632_45715[(2)] = null);

(statearr_45632_45715[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (1))){
var inst_45476 = (state_45624[(13)]);
var inst_45473 = before_jsload.call(null,files);
var inst_45474 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45475 = (function (){return ((function (inst_45476,inst_45473,inst_45474,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45464_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45464_SHARP_);
});
;})(inst_45476,inst_45473,inst_45474,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45476__$1 = cljs.core.filter.call(null,inst_45475,files);
var inst_45477 = cljs.core.not_empty.call(null,inst_45476__$1);
var state_45624__$1 = (function (){var statearr_45633 = state_45624;
(statearr_45633[(14)] = inst_45474);

(statearr_45633[(15)] = inst_45473);

(statearr_45633[(13)] = inst_45476__$1);

return statearr_45633;
})();
if(cljs.core.truth_(inst_45477)){
var statearr_45634_45716 = state_45624__$1;
(statearr_45634_45716[(1)] = (2));

} else {
var statearr_45635_45717 = state_45624__$1;
(statearr_45635_45717[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (24))){
var state_45624__$1 = state_45624;
var statearr_45636_45718 = state_45624__$1;
(statearr_45636_45718[(2)] = null);

(statearr_45636_45718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (39))){
var inst_45577 = (state_45624[(16)]);
var state_45624__$1 = state_45624;
var statearr_45637_45719 = state_45624__$1;
(statearr_45637_45719[(2)] = inst_45577);

(statearr_45637_45719[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (46))){
var inst_45619 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45638_45720 = state_45624__$1;
(statearr_45638_45720[(2)] = inst_45619);

(statearr_45638_45720[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (4))){
var inst_45521 = (state_45624[(2)]);
var inst_45522 = cljs.core.List.EMPTY;
var inst_45523 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45522);
var inst_45524 = (function (){return ((function (inst_45521,inst_45522,inst_45523,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45465_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45465_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45465_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45465_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_45521,inst_45522,inst_45523,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45525 = cljs.core.filter.call(null,inst_45524,files);
var inst_45526 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45527 = cljs.core.concat.call(null,inst_45525,inst_45526);
var state_45624__$1 = (function (){var statearr_45639 = state_45624;
(statearr_45639[(12)] = inst_45527);

(statearr_45639[(17)] = inst_45521);

(statearr_45639[(18)] = inst_45523);

return statearr_45639;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45640_45721 = state_45624__$1;
(statearr_45640_45721[(1)] = (16));

} else {
var statearr_45641_45722 = state_45624__$1;
(statearr_45641_45722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (15))){
var inst_45511 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45642_45723 = state_45624__$1;
(statearr_45642_45723[(2)] = inst_45511);

(statearr_45642_45723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (21))){
var inst_45537 = (state_45624[(19)]);
var inst_45537__$1 = (state_45624[(2)]);
var inst_45538 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45537__$1);
var state_45624__$1 = (function (){var statearr_45643 = state_45624;
(statearr_45643[(19)] = inst_45537__$1);

return statearr_45643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45624__$1,(22),inst_45538);
} else {
if((state_val_45625 === (31))){
var inst_45622 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45624__$1,inst_45622);
} else {
if((state_val_45625 === (32))){
var inst_45577 = (state_45624[(16)]);
var inst_45582 = inst_45577.cljs$lang$protocol_mask$partition0$;
var inst_45583 = (inst_45582 & (64));
var inst_45584 = inst_45577.cljs$core$ISeq$;
var inst_45585 = (cljs.core.PROTOCOL_SENTINEL === inst_45584);
var inst_45586 = ((inst_45583) || (inst_45585));
var state_45624__$1 = state_45624;
if(cljs.core.truth_(inst_45586)){
var statearr_45644_45724 = state_45624__$1;
(statearr_45644_45724[(1)] = (35));

} else {
var statearr_45645_45725 = state_45624__$1;
(statearr_45645_45725[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (40))){
var inst_45599 = (state_45624[(20)]);
var inst_45598 = (state_45624[(2)]);
var inst_45599__$1 = cljs.core.get.call(null,inst_45598,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45600 = cljs.core.get.call(null,inst_45598,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45601 = cljs.core.not_empty.call(null,inst_45599__$1);
var state_45624__$1 = (function (){var statearr_45646 = state_45624;
(statearr_45646[(20)] = inst_45599__$1);

(statearr_45646[(21)] = inst_45600);

return statearr_45646;
})();
if(cljs.core.truth_(inst_45601)){
var statearr_45647_45726 = state_45624__$1;
(statearr_45647_45726[(1)] = (41));

} else {
var statearr_45648_45727 = state_45624__$1;
(statearr_45648_45727[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (33))){
var state_45624__$1 = state_45624;
var statearr_45649_45728 = state_45624__$1;
(statearr_45649_45728[(2)] = false);

(statearr_45649_45728[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (13))){
var inst_45497 = (state_45624[(22)]);
var inst_45501 = cljs.core.chunk_first.call(null,inst_45497);
var inst_45502 = cljs.core.chunk_rest.call(null,inst_45497);
var inst_45503 = cljs.core.count.call(null,inst_45501);
var inst_45484 = inst_45502;
var inst_45485 = inst_45501;
var inst_45486 = inst_45503;
var inst_45487 = (0);
var state_45624__$1 = (function (){var statearr_45650 = state_45624;
(statearr_45650[(7)] = inst_45487);

(statearr_45650[(8)] = inst_45485);

(statearr_45650[(9)] = inst_45486);

(statearr_45650[(10)] = inst_45484);

return statearr_45650;
})();
var statearr_45651_45729 = state_45624__$1;
(statearr_45651_45729[(2)] = null);

(statearr_45651_45729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (22))){
var inst_45545 = (state_45624[(23)]);
var inst_45537 = (state_45624[(19)]);
var inst_45541 = (state_45624[(24)]);
var inst_45540 = (state_45624[(25)]);
var inst_45540__$1 = (state_45624[(2)]);
var inst_45541__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45540__$1);
var inst_45542 = (function (){var all_files = inst_45537;
var res_SINGLEQUOTE_ = inst_45540__$1;
var res = inst_45541__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45545,inst_45537,inst_45541,inst_45540,inst_45540__$1,inst_45541__$1,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45466_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45466_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45545,inst_45537,inst_45541,inst_45540,inst_45540__$1,inst_45541__$1,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45543 = cljs.core.filter.call(null,inst_45542,inst_45540__$1);
var inst_45544 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45545__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45544);
var inst_45546 = cljs.core.not_empty.call(null,inst_45545__$1);
var state_45624__$1 = (function (){var statearr_45652 = state_45624;
(statearr_45652[(23)] = inst_45545__$1);

(statearr_45652[(26)] = inst_45543);

(statearr_45652[(24)] = inst_45541__$1);

(statearr_45652[(25)] = inst_45540__$1);

return statearr_45652;
})();
if(cljs.core.truth_(inst_45546)){
var statearr_45653_45730 = state_45624__$1;
(statearr_45653_45730[(1)] = (23));

} else {
var statearr_45654_45731 = state_45624__$1;
(statearr_45654_45731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (36))){
var state_45624__$1 = state_45624;
var statearr_45655_45732 = state_45624__$1;
(statearr_45655_45732[(2)] = false);

(statearr_45655_45732[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (41))){
var inst_45599 = (state_45624[(20)]);
var inst_45603 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45604 = cljs.core.map.call(null,inst_45603,inst_45599);
var inst_45605 = cljs.core.pr_str.call(null,inst_45604);
var inst_45606 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45605)].join('');
var inst_45607 = figwheel.client.utils.log.call(null,inst_45606);
var state_45624__$1 = state_45624;
var statearr_45656_45733 = state_45624__$1;
(statearr_45656_45733[(2)] = inst_45607);

(statearr_45656_45733[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (43))){
var inst_45600 = (state_45624[(21)]);
var inst_45610 = (state_45624[(2)]);
var inst_45611 = cljs.core.not_empty.call(null,inst_45600);
var state_45624__$1 = (function (){var statearr_45657 = state_45624;
(statearr_45657[(27)] = inst_45610);

return statearr_45657;
})();
if(cljs.core.truth_(inst_45611)){
var statearr_45658_45734 = state_45624__$1;
(statearr_45658_45734[(1)] = (44));

} else {
var statearr_45659_45735 = state_45624__$1;
(statearr_45659_45735[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (29))){
var inst_45545 = (state_45624[(23)]);
var inst_45577 = (state_45624[(16)]);
var inst_45543 = (state_45624[(26)]);
var inst_45537 = (state_45624[(19)]);
var inst_45541 = (state_45624[(24)]);
var inst_45540 = (state_45624[(25)]);
var inst_45573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45576 = (function (){var all_files = inst_45537;
var res_SINGLEQUOTE_ = inst_45540;
var res = inst_45541;
var files_not_loaded = inst_45543;
var dependencies_that_loaded = inst_45545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45577,inst_45543,inst_45537,inst_45541,inst_45540,inst_45573,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45575){
var map__45660 = p__45575;
var map__45660__$1 = ((((!((map__45660 == null)))?(((((map__45660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45660):map__45660);
var namespace = cljs.core.get.call(null,map__45660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45577,inst_45543,inst_45537,inst_45541,inst_45540,inst_45573,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45577__$1 = cljs.core.group_by.call(null,inst_45576,inst_45543);
var inst_45579 = (inst_45577__$1 == null);
var inst_45580 = cljs.core.not.call(null,inst_45579);
var state_45624__$1 = (function (){var statearr_45662 = state_45624;
(statearr_45662[(28)] = inst_45573);

(statearr_45662[(16)] = inst_45577__$1);

return statearr_45662;
})();
if(inst_45580){
var statearr_45663_45736 = state_45624__$1;
(statearr_45663_45736[(1)] = (32));

} else {
var statearr_45664_45737 = state_45624__$1;
(statearr_45664_45737[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (44))){
var inst_45600 = (state_45624[(21)]);
var inst_45613 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45600);
var inst_45614 = cljs.core.pr_str.call(null,inst_45613);
var inst_45615 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45614)].join('');
var inst_45616 = figwheel.client.utils.log.call(null,inst_45615);
var state_45624__$1 = state_45624;
var statearr_45665_45738 = state_45624__$1;
(statearr_45665_45738[(2)] = inst_45616);

(statearr_45665_45738[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (6))){
var inst_45518 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45666_45739 = state_45624__$1;
(statearr_45666_45739[(2)] = inst_45518);

(statearr_45666_45739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (28))){
var inst_45543 = (state_45624[(26)]);
var inst_45570 = (state_45624[(2)]);
var inst_45571 = cljs.core.not_empty.call(null,inst_45543);
var state_45624__$1 = (function (){var statearr_45667 = state_45624;
(statearr_45667[(29)] = inst_45570);

return statearr_45667;
})();
if(cljs.core.truth_(inst_45571)){
var statearr_45668_45740 = state_45624__$1;
(statearr_45668_45740[(1)] = (29));

} else {
var statearr_45669_45741 = state_45624__$1;
(statearr_45669_45741[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (25))){
var inst_45541 = (state_45624[(24)]);
var inst_45557 = (state_45624[(2)]);
var inst_45558 = cljs.core.not_empty.call(null,inst_45541);
var state_45624__$1 = (function (){var statearr_45670 = state_45624;
(statearr_45670[(30)] = inst_45557);

return statearr_45670;
})();
if(cljs.core.truth_(inst_45558)){
var statearr_45671_45742 = state_45624__$1;
(statearr_45671_45742[(1)] = (26));

} else {
var statearr_45672_45743 = state_45624__$1;
(statearr_45672_45743[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (34))){
var inst_45593 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
if(cljs.core.truth_(inst_45593)){
var statearr_45673_45744 = state_45624__$1;
(statearr_45673_45744[(1)] = (38));

} else {
var statearr_45674_45745 = state_45624__$1;
(statearr_45674_45745[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (17))){
var state_45624__$1 = state_45624;
var statearr_45675_45746 = state_45624__$1;
(statearr_45675_45746[(2)] = recompile_dependents);

(statearr_45675_45746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (3))){
var state_45624__$1 = state_45624;
var statearr_45676_45747 = state_45624__$1;
(statearr_45676_45747[(2)] = null);

(statearr_45676_45747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (12))){
var inst_45514 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45677_45748 = state_45624__$1;
(statearr_45677_45748[(2)] = inst_45514);

(statearr_45677_45748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (2))){
var inst_45476 = (state_45624[(13)]);
var inst_45483 = cljs.core.seq.call(null,inst_45476);
var inst_45484 = inst_45483;
var inst_45485 = null;
var inst_45486 = (0);
var inst_45487 = (0);
var state_45624__$1 = (function (){var statearr_45678 = state_45624;
(statearr_45678[(7)] = inst_45487);

(statearr_45678[(8)] = inst_45485);

(statearr_45678[(9)] = inst_45486);

(statearr_45678[(10)] = inst_45484);

return statearr_45678;
})();
var statearr_45679_45749 = state_45624__$1;
(statearr_45679_45749[(2)] = null);

(statearr_45679_45749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (23))){
var inst_45545 = (state_45624[(23)]);
var inst_45543 = (state_45624[(26)]);
var inst_45537 = (state_45624[(19)]);
var inst_45541 = (state_45624[(24)]);
var inst_45540 = (state_45624[(25)]);
var inst_45548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45550 = (function (){var all_files = inst_45537;
var res_SINGLEQUOTE_ = inst_45540;
var res = inst_45541;
var files_not_loaded = inst_45543;
var dependencies_that_loaded = inst_45545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45548,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45549){
var map__45680 = p__45549;
var map__45680__$1 = ((((!((map__45680 == null)))?(((((map__45680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45680):map__45680);
var request_url = cljs.core.get.call(null,map__45680__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45548,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45551 = cljs.core.reverse.call(null,inst_45545);
var inst_45552 = cljs.core.map.call(null,inst_45550,inst_45551);
var inst_45553 = cljs.core.pr_str.call(null,inst_45552);
var inst_45554 = figwheel.client.utils.log.call(null,inst_45553);
var state_45624__$1 = (function (){var statearr_45682 = state_45624;
(statearr_45682[(31)] = inst_45548);

return statearr_45682;
})();
var statearr_45683_45750 = state_45624__$1;
(statearr_45683_45750[(2)] = inst_45554);

(statearr_45683_45750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (35))){
var state_45624__$1 = state_45624;
var statearr_45684_45751 = state_45624__$1;
(statearr_45684_45751[(2)] = true);

(statearr_45684_45751[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (19))){
var inst_45527 = (state_45624[(12)]);
var inst_45533 = figwheel.client.file_reloading.expand_files.call(null,inst_45527);
var state_45624__$1 = state_45624;
var statearr_45685_45752 = state_45624__$1;
(statearr_45685_45752[(2)] = inst_45533);

(statearr_45685_45752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (11))){
var state_45624__$1 = state_45624;
var statearr_45686_45753 = state_45624__$1;
(statearr_45686_45753[(2)] = null);

(statearr_45686_45753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (9))){
var inst_45516 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45687_45754 = state_45624__$1;
(statearr_45687_45754[(2)] = inst_45516);

(statearr_45687_45754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (5))){
var inst_45487 = (state_45624[(7)]);
var inst_45486 = (state_45624[(9)]);
var inst_45489 = (inst_45487 < inst_45486);
var inst_45490 = inst_45489;
var state_45624__$1 = state_45624;
if(cljs.core.truth_(inst_45490)){
var statearr_45688_45755 = state_45624__$1;
(statearr_45688_45755[(1)] = (7));

} else {
var statearr_45689_45756 = state_45624__$1;
(statearr_45689_45756[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (14))){
var inst_45497 = (state_45624[(22)]);
var inst_45506 = cljs.core.first.call(null,inst_45497);
var inst_45507 = figwheel.client.file_reloading.eval_body.call(null,inst_45506,opts);
var inst_45508 = cljs.core.next.call(null,inst_45497);
var inst_45484 = inst_45508;
var inst_45485 = null;
var inst_45486 = (0);
var inst_45487 = (0);
var state_45624__$1 = (function (){var statearr_45690 = state_45624;
(statearr_45690[(32)] = inst_45507);

(statearr_45690[(7)] = inst_45487);

(statearr_45690[(8)] = inst_45485);

(statearr_45690[(9)] = inst_45486);

(statearr_45690[(10)] = inst_45484);

return statearr_45690;
})();
var statearr_45691_45757 = state_45624__$1;
(statearr_45691_45757[(2)] = null);

(statearr_45691_45757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (45))){
var state_45624__$1 = state_45624;
var statearr_45692_45758 = state_45624__$1;
(statearr_45692_45758[(2)] = null);

(statearr_45692_45758[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (26))){
var inst_45545 = (state_45624[(23)]);
var inst_45543 = (state_45624[(26)]);
var inst_45537 = (state_45624[(19)]);
var inst_45541 = (state_45624[(24)]);
var inst_45540 = (state_45624[(25)]);
var inst_45560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45562 = (function (){var all_files = inst_45537;
var res_SINGLEQUOTE_ = inst_45540;
var res = inst_45541;
var files_not_loaded = inst_45543;
var dependencies_that_loaded = inst_45545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45560,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45561){
var map__45693 = p__45561;
var map__45693__$1 = ((((!((map__45693 == null)))?(((((map__45693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45693):map__45693);
var namespace = cljs.core.get.call(null,map__45693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45560,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45563 = cljs.core.map.call(null,inst_45562,inst_45541);
var inst_45564 = cljs.core.pr_str.call(null,inst_45563);
var inst_45565 = figwheel.client.utils.log.call(null,inst_45564);
var inst_45566 = (function (){var all_files = inst_45537;
var res_SINGLEQUOTE_ = inst_45540;
var res = inst_45541;
var files_not_loaded = inst_45543;
var dependencies_that_loaded = inst_45545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45560,inst_45562,inst_45563,inst_45564,inst_45565,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45545,inst_45543,inst_45537,inst_45541,inst_45540,inst_45560,inst_45562,inst_45563,inst_45564,inst_45565,state_val_45625,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45567 = setTimeout(inst_45566,(10));
var state_45624__$1 = (function (){var statearr_45695 = state_45624;
(statearr_45695[(33)] = inst_45565);

(statearr_45695[(34)] = inst_45560);

return statearr_45695;
})();
var statearr_45696_45759 = state_45624__$1;
(statearr_45696_45759[(2)] = inst_45567);

(statearr_45696_45759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (16))){
var state_45624__$1 = state_45624;
var statearr_45697_45760 = state_45624__$1;
(statearr_45697_45760[(2)] = reload_dependents);

(statearr_45697_45760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (38))){
var inst_45577 = (state_45624[(16)]);
var inst_45595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45577);
var state_45624__$1 = state_45624;
var statearr_45698_45761 = state_45624__$1;
(statearr_45698_45761[(2)] = inst_45595);

(statearr_45698_45761[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (30))){
var state_45624__$1 = state_45624;
var statearr_45699_45762 = state_45624__$1;
(statearr_45699_45762[(2)] = null);

(statearr_45699_45762[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (10))){
var inst_45497 = (state_45624[(22)]);
var inst_45499 = cljs.core.chunked_seq_QMARK_.call(null,inst_45497);
var state_45624__$1 = state_45624;
if(inst_45499){
var statearr_45700_45763 = state_45624__$1;
(statearr_45700_45763[(1)] = (13));

} else {
var statearr_45701_45764 = state_45624__$1;
(statearr_45701_45764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (18))){
var inst_45531 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
if(cljs.core.truth_(inst_45531)){
var statearr_45702_45765 = state_45624__$1;
(statearr_45702_45765[(1)] = (19));

} else {
var statearr_45703_45766 = state_45624__$1;
(statearr_45703_45766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (42))){
var state_45624__$1 = state_45624;
var statearr_45704_45767 = state_45624__$1;
(statearr_45704_45767[(2)] = null);

(statearr_45704_45767[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (37))){
var inst_45590 = (state_45624[(2)]);
var state_45624__$1 = state_45624;
var statearr_45705_45768 = state_45624__$1;
(statearr_45705_45768[(2)] = inst_45590);

(statearr_45705_45768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45625 === (8))){
var inst_45497 = (state_45624[(22)]);
var inst_45484 = (state_45624[(10)]);
var inst_45497__$1 = cljs.core.seq.call(null,inst_45484);
var state_45624__$1 = (function (){var statearr_45706 = state_45624;
(statearr_45706[(22)] = inst_45497__$1);

return statearr_45706;
})();
if(inst_45497__$1){
var statearr_45707_45769 = state_45624__$1;
(statearr_45707_45769[(1)] = (10));

} else {
var statearr_45708_45770 = state_45624__$1;
(statearr_45708_45770[(1)] = (11));

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
});})(c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22643__auto__,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____0 = (function (){
var statearr_45709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45709[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__);

(statearr_45709[(1)] = (1));

return statearr_45709;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____1 = (function (state_45624){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_45624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e45710){if((e45710 instanceof Object)){
var ex__22647__auto__ = e45710;
var statearr_45711_45771 = state_45624;
(statearr_45711_45771[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45772 = state_45624;
state_45624 = G__45772;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__ = function(state_45624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____1.call(this,state_45624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22733__auto__ = (function (){var statearr_45712 = f__22732__auto__.call(null);
(statearr_45712[(6)] = c__22731__auto__);

return statearr_45712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__,map__45469,map__45469__$1,opts,before_jsload,on_jsload,reload_dependents,map__45470,map__45470__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22731__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45775,link){
var map__45776 = p__45775;
var map__45776__$1 = ((((!((map__45776 == null)))?(((((map__45776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45776):map__45776);
var file = cljs.core.get.call(null,map__45776__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45776,map__45776__$1,file){
return (function (p1__45773_SHARP_,p2__45774_SHARP_){
if(cljs.core._EQ_.call(null,p1__45773_SHARP_,p2__45774_SHARP_)){
return p1__45773_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45776,map__45776__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45779){
var map__45780 = p__45779;
var map__45780__$1 = ((((!((map__45780 == null)))?(((((map__45780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45780):map__45780);
var match_length = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45778_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45778_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45782_SHARP_,p2__45783_SHARP_){
return cljs.core.assoc.call(null,p1__45782_SHARP_,cljs.core.get.call(null,p2__45783_SHARP_,key),p2__45783_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_45784 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_45784);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_45784);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45785,p__45786){
var map__45787 = p__45785;
var map__45787__$1 = ((((!((map__45787 == null)))?(((((map__45787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45787):map__45787);
var on_cssload = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45788 = p__45786;
var map__45788__$1 = ((((!((map__45788 == null)))?(((((map__45788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45788):map__45788);
var files_msg = map__45788__$1;
var files = cljs.core.get.call(null,map__45788__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1532451320890
