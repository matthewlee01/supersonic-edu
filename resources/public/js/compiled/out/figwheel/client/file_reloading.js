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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25193_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25193_SHARP_));
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
var seq__25194 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25195 = null;
var count__25196 = (0);
var i__25197 = (0);
while(true){
if((i__25197 < count__25196)){
var n = cljs.core._nth.call(null,chunk__25195,i__25197);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25198 = seq__25194;
var G__25199 = chunk__25195;
var G__25200 = count__25196;
var G__25201 = (i__25197 + (1));
seq__25194 = G__25198;
chunk__25195 = G__25199;
count__25196 = G__25200;
i__25197 = G__25201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25194);
if(temp__4657__auto__){
var seq__25194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25194__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25194__$1);
var G__25202 = cljs.core.chunk_rest.call(null,seq__25194__$1);
var G__25203 = c__4319__auto__;
var G__25204 = cljs.core.count.call(null,c__4319__auto__);
var G__25205 = (0);
seq__25194 = G__25202;
chunk__25195 = G__25203;
count__25196 = G__25204;
i__25197 = G__25205;
continue;
} else {
var n = cljs.core.first.call(null,seq__25194__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25206 = cljs.core.next.call(null,seq__25194__$1);
var G__25207 = null;
var G__25208 = (0);
var G__25209 = (0);
seq__25194 = G__25206;
chunk__25195 = G__25207;
count__25196 = G__25208;
i__25197 = G__25209;
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
return cljs.core.some.call(null,(function (p__25210){
var vec__25211 = p__25210;
var _ = cljs.core.nth.call(null,vec__25211,(0),null);
var v = cljs.core.nth.call(null,vec__25211,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__25214){
var vec__25215 = p__25214;
var k = cljs.core.nth.call(null,vec__25215,(0),null);
var v = cljs.core.nth.call(null,vec__25215,(1),null);
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

var seq__25227_25235 = cljs.core.seq.call(null,deps);
var chunk__25228_25236 = null;
var count__25229_25237 = (0);
var i__25230_25238 = (0);
while(true){
if((i__25230_25238 < count__25229_25237)){
var dep_25239 = cljs.core._nth.call(null,chunk__25228_25236,i__25230_25238);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_25239;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25239));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25239,(depth + (1)),state);
} else {
}


var G__25240 = seq__25227_25235;
var G__25241 = chunk__25228_25236;
var G__25242 = count__25229_25237;
var G__25243 = (i__25230_25238 + (1));
seq__25227_25235 = G__25240;
chunk__25228_25236 = G__25241;
count__25229_25237 = G__25242;
i__25230_25238 = G__25243;
continue;
} else {
var temp__4657__auto___25244 = cljs.core.seq.call(null,seq__25227_25235);
if(temp__4657__auto___25244){
var seq__25227_25245__$1 = temp__4657__auto___25244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25227_25245__$1)){
var c__4319__auto___25246 = cljs.core.chunk_first.call(null,seq__25227_25245__$1);
var G__25247 = cljs.core.chunk_rest.call(null,seq__25227_25245__$1);
var G__25248 = c__4319__auto___25246;
var G__25249 = cljs.core.count.call(null,c__4319__auto___25246);
var G__25250 = (0);
seq__25227_25235 = G__25247;
chunk__25228_25236 = G__25248;
count__25229_25237 = G__25249;
i__25230_25238 = G__25250;
continue;
} else {
var dep_25251 = cljs.core.first.call(null,seq__25227_25245__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_25251;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25251));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25251,(depth + (1)),state);
} else {
}


var G__25252 = cljs.core.next.call(null,seq__25227_25245__$1);
var G__25253 = null;
var G__25254 = (0);
var G__25255 = (0);
seq__25227_25235 = G__25252;
chunk__25228_25236 = G__25253;
count__25229_25237 = G__25254;
i__25230_25238 = G__25255;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25231){
var vec__25232 = p__25231;
var seq__25233 = cljs.core.seq.call(null,vec__25232);
var first__25234 = cljs.core.first.call(null,seq__25233);
var seq__25233__$1 = cljs.core.next.call(null,seq__25233);
var x = first__25234;
var xs = seq__25233__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25232,seq__25233,first__25234,seq__25233__$1,x,xs,get_deps__$1){
return (function (p1__25218_SHARP_){
return clojure.set.difference.call(null,p1__25218_SHARP_,x);
});})(vec__25232,seq__25233,first__25234,seq__25233__$1,x,xs,get_deps__$1))
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
var seq__25256 = cljs.core.seq.call(null,provides);
var chunk__25257 = null;
var count__25258 = (0);
var i__25259 = (0);
while(true){
if((i__25259 < count__25258)){
var prov = cljs.core._nth.call(null,chunk__25257,i__25259);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25260_25268 = cljs.core.seq.call(null,requires);
var chunk__25261_25269 = null;
var count__25262_25270 = (0);
var i__25263_25271 = (0);
while(true){
if((i__25263_25271 < count__25262_25270)){
var req_25272 = cljs.core._nth.call(null,chunk__25261_25269,i__25263_25271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25272,prov);


var G__25273 = seq__25260_25268;
var G__25274 = chunk__25261_25269;
var G__25275 = count__25262_25270;
var G__25276 = (i__25263_25271 + (1));
seq__25260_25268 = G__25273;
chunk__25261_25269 = G__25274;
count__25262_25270 = G__25275;
i__25263_25271 = G__25276;
continue;
} else {
var temp__4657__auto___25277 = cljs.core.seq.call(null,seq__25260_25268);
if(temp__4657__auto___25277){
var seq__25260_25278__$1 = temp__4657__auto___25277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25260_25278__$1)){
var c__4319__auto___25279 = cljs.core.chunk_first.call(null,seq__25260_25278__$1);
var G__25280 = cljs.core.chunk_rest.call(null,seq__25260_25278__$1);
var G__25281 = c__4319__auto___25279;
var G__25282 = cljs.core.count.call(null,c__4319__auto___25279);
var G__25283 = (0);
seq__25260_25268 = G__25280;
chunk__25261_25269 = G__25281;
count__25262_25270 = G__25282;
i__25263_25271 = G__25283;
continue;
} else {
var req_25284 = cljs.core.first.call(null,seq__25260_25278__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25284,prov);


var G__25285 = cljs.core.next.call(null,seq__25260_25278__$1);
var G__25286 = null;
var G__25287 = (0);
var G__25288 = (0);
seq__25260_25268 = G__25285;
chunk__25261_25269 = G__25286;
count__25262_25270 = G__25287;
i__25263_25271 = G__25288;
continue;
}
} else {
}
}
break;
}


var G__25289 = seq__25256;
var G__25290 = chunk__25257;
var G__25291 = count__25258;
var G__25292 = (i__25259 + (1));
seq__25256 = G__25289;
chunk__25257 = G__25290;
count__25258 = G__25291;
i__25259 = G__25292;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25256);
if(temp__4657__auto__){
var seq__25256__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25256__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25256__$1);
var G__25293 = cljs.core.chunk_rest.call(null,seq__25256__$1);
var G__25294 = c__4319__auto__;
var G__25295 = cljs.core.count.call(null,c__4319__auto__);
var G__25296 = (0);
seq__25256 = G__25293;
chunk__25257 = G__25294;
count__25258 = G__25295;
i__25259 = G__25296;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25256__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25264_25297 = cljs.core.seq.call(null,requires);
var chunk__25265_25298 = null;
var count__25266_25299 = (0);
var i__25267_25300 = (0);
while(true){
if((i__25267_25300 < count__25266_25299)){
var req_25301 = cljs.core._nth.call(null,chunk__25265_25298,i__25267_25300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25301,prov);


var G__25302 = seq__25264_25297;
var G__25303 = chunk__25265_25298;
var G__25304 = count__25266_25299;
var G__25305 = (i__25267_25300 + (1));
seq__25264_25297 = G__25302;
chunk__25265_25298 = G__25303;
count__25266_25299 = G__25304;
i__25267_25300 = G__25305;
continue;
} else {
var temp__4657__auto___25306__$1 = cljs.core.seq.call(null,seq__25264_25297);
if(temp__4657__auto___25306__$1){
var seq__25264_25307__$1 = temp__4657__auto___25306__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25264_25307__$1)){
var c__4319__auto___25308 = cljs.core.chunk_first.call(null,seq__25264_25307__$1);
var G__25309 = cljs.core.chunk_rest.call(null,seq__25264_25307__$1);
var G__25310 = c__4319__auto___25308;
var G__25311 = cljs.core.count.call(null,c__4319__auto___25308);
var G__25312 = (0);
seq__25264_25297 = G__25309;
chunk__25265_25298 = G__25310;
count__25266_25299 = G__25311;
i__25267_25300 = G__25312;
continue;
} else {
var req_25313 = cljs.core.first.call(null,seq__25264_25307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25313,prov);


var G__25314 = cljs.core.next.call(null,seq__25264_25307__$1);
var G__25315 = null;
var G__25316 = (0);
var G__25317 = (0);
seq__25264_25297 = G__25314;
chunk__25265_25298 = G__25315;
count__25266_25299 = G__25316;
i__25267_25300 = G__25317;
continue;
}
} else {
}
}
break;
}


var G__25318 = cljs.core.next.call(null,seq__25256__$1);
var G__25319 = null;
var G__25320 = (0);
var G__25321 = (0);
seq__25256 = G__25318;
chunk__25257 = G__25319;
count__25258 = G__25320;
i__25259 = G__25321;
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
var seq__25322_25326 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25323_25327 = null;
var count__25324_25328 = (0);
var i__25325_25329 = (0);
while(true){
if((i__25325_25329 < count__25324_25328)){
var ns_25330 = cljs.core._nth.call(null,chunk__25323_25327,i__25325_25329);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25330);


var G__25331 = seq__25322_25326;
var G__25332 = chunk__25323_25327;
var G__25333 = count__25324_25328;
var G__25334 = (i__25325_25329 + (1));
seq__25322_25326 = G__25331;
chunk__25323_25327 = G__25332;
count__25324_25328 = G__25333;
i__25325_25329 = G__25334;
continue;
} else {
var temp__4657__auto___25335 = cljs.core.seq.call(null,seq__25322_25326);
if(temp__4657__auto___25335){
var seq__25322_25336__$1 = temp__4657__auto___25335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25322_25336__$1)){
var c__4319__auto___25337 = cljs.core.chunk_first.call(null,seq__25322_25336__$1);
var G__25338 = cljs.core.chunk_rest.call(null,seq__25322_25336__$1);
var G__25339 = c__4319__auto___25337;
var G__25340 = cljs.core.count.call(null,c__4319__auto___25337);
var G__25341 = (0);
seq__25322_25326 = G__25338;
chunk__25323_25327 = G__25339;
count__25324_25328 = G__25340;
i__25325_25329 = G__25341;
continue;
} else {
var ns_25342 = cljs.core.first.call(null,seq__25322_25336__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25342);


var G__25343 = cljs.core.next.call(null,seq__25322_25336__$1);
var G__25344 = null;
var G__25345 = (0);
var G__25346 = (0);
seq__25322_25326 = G__25343;
chunk__25323_25327 = G__25344;
count__25324_25328 = G__25345;
i__25325_25329 = G__25346;
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
var G__25347__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25348__i = 0, G__25348__a = new Array(arguments.length -  0);
while (G__25348__i < G__25348__a.length) {G__25348__a[G__25348__i] = arguments[G__25348__i + 0]; ++G__25348__i;}
  args = new cljs.core.IndexedSeq(G__25348__a,0,null);
} 
return G__25347__delegate.call(this,args);};
G__25347.cljs$lang$maxFixedArity = 0;
G__25347.cljs$lang$applyTo = (function (arglist__25349){
var args = cljs.core.seq(arglist__25349);
return G__25347__delegate(args);
});
G__25347.cljs$core$IFn$_invoke$arity$variadic = G__25347__delegate;
return G__25347;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__25350_SHARP_,p2__25351_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25350_SHARP_)].join('')),p2__25351_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__25352_SHARP_,p2__25353_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25352_SHARP_)].join(''),p2__25353_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25354 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25354.addCallback(((function (G__25354){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25354))
);

G__25354.addErrback(((function (G__25354){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25354))
);

return G__25354;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25355){if((e25355 instanceof Error)){
var e = e25355;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25355;

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
}catch (e25356){if((e25356 instanceof Error)){
var e = e25356;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25356;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25357 = cljs.core._EQ_;
var expr__25358 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25357.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25358))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25357.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25358))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25357.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25358))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25357,expr__25358){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25357,expr__25358))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25360,callback){
var map__25361 = p__25360;
var map__25361__$1 = ((((!((map__25361 == null)))?(((((map__25361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25361):map__25361);
var file_msg = map__25361__$1;
var request_url = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25361,map__25361__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25361,map__25361__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__){
return (function (state_25399){
var state_val_25400 = (state_25399[(1)]);
if((state_val_25400 === (7))){
var inst_25395 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25401_25427 = state_25399__$1;
(statearr_25401_25427[(2)] = inst_25395);

(statearr_25401_25427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (1))){
var state_25399__$1 = state_25399;
var statearr_25402_25428 = state_25399__$1;
(statearr_25402_25428[(2)] = null);

(statearr_25402_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (4))){
var inst_25365 = (state_25399[(7)]);
var inst_25365__$1 = (state_25399[(2)]);
var state_25399__$1 = (function (){var statearr_25403 = state_25399;
(statearr_25403[(7)] = inst_25365__$1);

return statearr_25403;
})();
if(cljs.core.truth_(inst_25365__$1)){
var statearr_25404_25429 = state_25399__$1;
(statearr_25404_25429[(1)] = (5));

} else {
var statearr_25405_25430 = state_25399__$1;
(statearr_25405_25430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (15))){
var inst_25378 = (state_25399[(8)]);
var inst_25380 = (state_25399[(9)]);
var inst_25382 = inst_25380.call(null,inst_25378);
var state_25399__$1 = state_25399;
var statearr_25406_25431 = state_25399__$1;
(statearr_25406_25431[(2)] = inst_25382);

(statearr_25406_25431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (13))){
var inst_25389 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25407_25432 = state_25399__$1;
(statearr_25407_25432[(2)] = inst_25389);

(statearr_25407_25432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (6))){
var state_25399__$1 = state_25399;
var statearr_25408_25433 = state_25399__$1;
(statearr_25408_25433[(2)] = null);

(statearr_25408_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (17))){
var inst_25386 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25409_25434 = state_25399__$1;
(statearr_25409_25434[(2)] = inst_25386);

(statearr_25409_25434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (3))){
var inst_25397 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25399__$1,inst_25397);
} else {
if((state_val_25400 === (12))){
var state_25399__$1 = state_25399;
var statearr_25410_25435 = state_25399__$1;
(statearr_25410_25435[(2)] = null);

(statearr_25410_25435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (2))){
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25400 === (11))){
var inst_25370 = (state_25399[(10)]);
var inst_25376 = figwheel.client.file_reloading.blocking_load.call(null,inst_25370);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(14),inst_25376);
} else {
if((state_val_25400 === (9))){
var inst_25370 = (state_25399[(10)]);
var state_25399__$1 = state_25399;
if(cljs.core.truth_(inst_25370)){
var statearr_25411_25436 = state_25399__$1;
(statearr_25411_25436[(1)] = (11));

} else {
var statearr_25412_25437 = state_25399__$1;
(statearr_25412_25437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (5))){
var inst_25371 = (state_25399[(11)]);
var inst_25365 = (state_25399[(7)]);
var inst_25370 = cljs.core.nth.call(null,inst_25365,(0),null);
var inst_25371__$1 = cljs.core.nth.call(null,inst_25365,(1),null);
var state_25399__$1 = (function (){var statearr_25413 = state_25399;
(statearr_25413[(11)] = inst_25371__$1);

(statearr_25413[(10)] = inst_25370);

return statearr_25413;
})();
if(cljs.core.truth_(inst_25371__$1)){
var statearr_25414_25438 = state_25399__$1;
(statearr_25414_25438[(1)] = (8));

} else {
var statearr_25415_25439 = state_25399__$1;
(statearr_25415_25439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (14))){
var inst_25380 = (state_25399[(9)]);
var inst_25370 = (state_25399[(10)]);
var inst_25378 = (state_25399[(2)]);
var inst_25379 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25380__$1 = cljs.core.get.call(null,inst_25379,inst_25370);
var state_25399__$1 = (function (){var statearr_25416 = state_25399;
(statearr_25416[(8)] = inst_25378);

(statearr_25416[(9)] = inst_25380__$1);

return statearr_25416;
})();
if(cljs.core.truth_(inst_25380__$1)){
var statearr_25417_25440 = state_25399__$1;
(statearr_25417_25440[(1)] = (15));

} else {
var statearr_25418_25441 = state_25399__$1;
(statearr_25418_25441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (16))){
var inst_25378 = (state_25399[(8)]);
var inst_25384 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25378);
var state_25399__$1 = state_25399;
var statearr_25419_25442 = state_25399__$1;
(statearr_25419_25442[(2)] = inst_25384);

(statearr_25419_25442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (10))){
var inst_25391 = (state_25399[(2)]);
var state_25399__$1 = (function (){var statearr_25420 = state_25399;
(statearr_25420[(12)] = inst_25391);

return statearr_25420;
})();
var statearr_25421_25443 = state_25399__$1;
(statearr_25421_25443[(2)] = null);

(statearr_25421_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (8))){
var inst_25371 = (state_25399[(11)]);
var inst_25373 = eval(inst_25371);
var state_25399__$1 = state_25399;
var statearr_25422_25444 = state_25399__$1;
(statearr_25422_25444[(2)] = inst_25373);

(statearr_25422_25444[(1)] = (10));


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
});})(c__22786__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22699__auto__ = null;
var figwheel$client$file_reloading$state_machine__22699__auto____0 = (function (){
var statearr_25423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25423[(0)] = figwheel$client$file_reloading$state_machine__22699__auto__);

(statearr_25423[(1)] = (1));

return statearr_25423;
});
var figwheel$client$file_reloading$state_machine__22699__auto____1 = (function (state_25399){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_25399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e25424){if((e25424 instanceof Object)){
var ex__22702__auto__ = e25424;
var statearr_25425_25445 = state_25399;
(statearr_25425_25445[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25446 = state_25399;
state_25399 = G__25446;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22699__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22699__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22699__auto____0;
figwheel$client$file_reloading$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22699__auto____1;
return figwheel$client$file_reloading$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_25426 = f__22787__auto__.call(null);
(statearr_25426[(6)] = c__22786__auto__);

return statearr_25426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25448 = arguments.length;
switch (G__25448) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25450,callback){
var map__25451 = p__25450;
var map__25451__$1 = ((((!((map__25451 == null)))?(((((map__25451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25451):map__25451);
var file_msg = map__25451__$1;
var namespace = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25451,map__25451__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25451,map__25451__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25453){
var map__25454 = p__25453;
var map__25454__$1 = ((((!((map__25454 == null)))?(((((map__25454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var file_msg = map__25454__$1;
var namespace = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25456){
var map__25457 = p__25456;
var map__25457__$1 = ((((!((map__25457 == null)))?(((((map__25457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25457):map__25457);
var file_msg = map__25457__$1;
var namespace = cljs.core.get.call(null,map__25457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25459,callback){
var map__25460 = p__25459;
var map__25460__$1 = ((((!((map__25460 == null)))?(((((map__25460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25460):map__25460);
var file_msg = map__25460__$1;
var request_url = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22786__auto___25510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___25510,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___25510,out){
return (function (state_25495){
var state_val_25496 = (state_25495[(1)]);
if((state_val_25496 === (1))){
var inst_25469 = cljs.core.seq.call(null,files);
var inst_25470 = cljs.core.first.call(null,inst_25469);
var inst_25471 = cljs.core.next.call(null,inst_25469);
var inst_25472 = files;
var state_25495__$1 = (function (){var statearr_25497 = state_25495;
(statearr_25497[(7)] = inst_25471);

(statearr_25497[(8)] = inst_25470);

(statearr_25497[(9)] = inst_25472);

return statearr_25497;
})();
var statearr_25498_25511 = state_25495__$1;
(statearr_25498_25511[(2)] = null);

(statearr_25498_25511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (2))){
var inst_25478 = (state_25495[(10)]);
var inst_25472 = (state_25495[(9)]);
var inst_25477 = cljs.core.seq.call(null,inst_25472);
var inst_25478__$1 = cljs.core.first.call(null,inst_25477);
var inst_25479 = cljs.core.next.call(null,inst_25477);
var inst_25480 = (inst_25478__$1 == null);
var inst_25481 = cljs.core.not.call(null,inst_25480);
var state_25495__$1 = (function (){var statearr_25499 = state_25495;
(statearr_25499[(10)] = inst_25478__$1);

(statearr_25499[(11)] = inst_25479);

return statearr_25499;
})();
if(inst_25481){
var statearr_25500_25512 = state_25495__$1;
(statearr_25500_25512[(1)] = (4));

} else {
var statearr_25501_25513 = state_25495__$1;
(statearr_25501_25513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (3))){
var inst_25493 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25495__$1,inst_25493);
} else {
if((state_val_25496 === (4))){
var inst_25478 = (state_25495[(10)]);
var inst_25483 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25478);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(7),inst_25483);
} else {
if((state_val_25496 === (5))){
var inst_25489 = cljs.core.async.close_BANG_.call(null,out);
var state_25495__$1 = state_25495;
var statearr_25502_25514 = state_25495__$1;
(statearr_25502_25514[(2)] = inst_25489);

(statearr_25502_25514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (6))){
var inst_25491 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25503_25515 = state_25495__$1;
(statearr_25503_25515[(2)] = inst_25491);

(statearr_25503_25515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (7))){
var inst_25479 = (state_25495[(11)]);
var inst_25485 = (state_25495[(2)]);
var inst_25486 = cljs.core.async.put_BANG_.call(null,out,inst_25485);
var inst_25472 = inst_25479;
var state_25495__$1 = (function (){var statearr_25504 = state_25495;
(statearr_25504[(12)] = inst_25486);

(statearr_25504[(9)] = inst_25472);

return statearr_25504;
})();
var statearr_25505_25516 = state_25495__$1;
(statearr_25505_25516[(2)] = null);

(statearr_25505_25516[(1)] = (2));


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
});})(c__22786__auto___25510,out))
;
return ((function (switch__22698__auto__,c__22786__auto___25510,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____0 = (function (){
var statearr_25506 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25506[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__);

(statearr_25506[(1)] = (1));

return statearr_25506;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____1 = (function (state_25495){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_25495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e25507){if((e25507 instanceof Object)){
var ex__22702__auto__ = e25507;
var statearr_25508_25517 = state_25495;
(statearr_25508_25517[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25518 = state_25495;
state_25495 = G__25518;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__ = function(state_25495){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____1.call(this,state_25495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___25510,out))
})();
var state__22788__auto__ = (function (){var statearr_25509 = f__22787__auto__.call(null);
(statearr_25509[(6)] = c__22786__auto___25510);

return statearr_25509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___25510,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25519,opts){
var map__25520 = p__25519;
var map__25520__$1 = ((((!((map__25520 == null)))?(((((map__25520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25520):map__25520);
var eval_body = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25522){var e = e25522;
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
return (function (p1__25523_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25523_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25524){
var vec__25525 = p__25524;
var k = cljs.core.nth.call(null,vec__25525,(0),null);
var v = cljs.core.nth.call(null,vec__25525,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25528){
var vec__25529 = p__25528;
var k = cljs.core.nth.call(null,vec__25529,(0),null);
var v = cljs.core.nth.call(null,vec__25529,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25535,p__25536){
var map__25537 = p__25535;
var map__25537__$1 = ((((!((map__25537 == null)))?(((((map__25537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25537):map__25537);
var opts = map__25537__$1;
var before_jsload = cljs.core.get.call(null,map__25537__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25537__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25537__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25538 = p__25536;
var map__25538__$1 = ((((!((map__25538 == null)))?(((((map__25538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25538):map__25538);
var msg = map__25538__$1;
var files = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25692){
var state_val_25693 = (state_25692[(1)]);
if((state_val_25693 === (7))){
var inst_25555 = (state_25692[(7)]);
var inst_25554 = (state_25692[(8)]);
var inst_25553 = (state_25692[(9)]);
var inst_25552 = (state_25692[(10)]);
var inst_25560 = cljs.core._nth.call(null,inst_25553,inst_25555);
var inst_25561 = figwheel.client.file_reloading.eval_body.call(null,inst_25560,opts);
var inst_25562 = (inst_25555 + (1));
var tmp25694 = inst_25554;
var tmp25695 = inst_25553;
var tmp25696 = inst_25552;
var inst_25552__$1 = tmp25696;
var inst_25553__$1 = tmp25695;
var inst_25554__$1 = tmp25694;
var inst_25555__$1 = inst_25562;
var state_25692__$1 = (function (){var statearr_25697 = state_25692;
(statearr_25697[(7)] = inst_25555__$1);

(statearr_25697[(8)] = inst_25554__$1);

(statearr_25697[(9)] = inst_25553__$1);

(statearr_25697[(11)] = inst_25561);

(statearr_25697[(10)] = inst_25552__$1);

return statearr_25697;
})();
var statearr_25698_25781 = state_25692__$1;
(statearr_25698_25781[(2)] = null);

(statearr_25698_25781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (20))){
var inst_25595 = (state_25692[(12)]);
var inst_25603 = figwheel.client.file_reloading.sort_files.call(null,inst_25595);
var state_25692__$1 = state_25692;
var statearr_25699_25782 = state_25692__$1;
(statearr_25699_25782[(2)] = inst_25603);

(statearr_25699_25782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (27))){
var state_25692__$1 = state_25692;
var statearr_25700_25783 = state_25692__$1;
(statearr_25700_25783[(2)] = null);

(statearr_25700_25783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (1))){
var inst_25544 = (state_25692[(13)]);
var inst_25541 = before_jsload.call(null,files);
var inst_25542 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25543 = (function (){return ((function (inst_25544,inst_25541,inst_25542,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25532_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25532_SHARP_);
});
;})(inst_25544,inst_25541,inst_25542,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25544__$1 = cljs.core.filter.call(null,inst_25543,files);
var inst_25545 = cljs.core.not_empty.call(null,inst_25544__$1);
var state_25692__$1 = (function (){var statearr_25701 = state_25692;
(statearr_25701[(13)] = inst_25544__$1);

(statearr_25701[(14)] = inst_25541);

(statearr_25701[(15)] = inst_25542);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25545)){
var statearr_25702_25784 = state_25692__$1;
(statearr_25702_25784[(1)] = (2));

} else {
var statearr_25703_25785 = state_25692__$1;
(statearr_25703_25785[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (24))){
var state_25692__$1 = state_25692;
var statearr_25704_25786 = state_25692__$1;
(statearr_25704_25786[(2)] = null);

(statearr_25704_25786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (39))){
var inst_25645 = (state_25692[(16)]);
var state_25692__$1 = state_25692;
var statearr_25705_25787 = state_25692__$1;
(statearr_25705_25787[(2)] = inst_25645);

(statearr_25705_25787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (46))){
var inst_25687 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25706_25788 = state_25692__$1;
(statearr_25706_25788[(2)] = inst_25687);

(statearr_25706_25788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (4))){
var inst_25589 = (state_25692[(2)]);
var inst_25590 = cljs.core.List.EMPTY;
var inst_25591 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25590);
var inst_25592 = (function (){return ((function (inst_25589,inst_25590,inst_25591,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25533_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25533_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25533_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25533_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_25589,inst_25590,inst_25591,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25593 = cljs.core.filter.call(null,inst_25592,files);
var inst_25594 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25595 = cljs.core.concat.call(null,inst_25593,inst_25594);
var state_25692__$1 = (function (){var statearr_25707 = state_25692;
(statearr_25707[(17)] = inst_25591);

(statearr_25707[(12)] = inst_25595);

(statearr_25707[(18)] = inst_25589);

return statearr_25707;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25708_25789 = state_25692__$1;
(statearr_25708_25789[(1)] = (16));

} else {
var statearr_25709_25790 = state_25692__$1;
(statearr_25709_25790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (15))){
var inst_25579 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25710_25791 = state_25692__$1;
(statearr_25710_25791[(2)] = inst_25579);

(statearr_25710_25791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (21))){
var inst_25605 = (state_25692[(19)]);
var inst_25605__$1 = (state_25692[(2)]);
var inst_25606 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25605__$1);
var state_25692__$1 = (function (){var statearr_25711 = state_25692;
(statearr_25711[(19)] = inst_25605__$1);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25692__$1,(22),inst_25606);
} else {
if((state_val_25693 === (31))){
var inst_25690 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25692__$1,inst_25690);
} else {
if((state_val_25693 === (32))){
var inst_25645 = (state_25692[(16)]);
var inst_25650 = inst_25645.cljs$lang$protocol_mask$partition0$;
var inst_25651 = (inst_25650 & (64));
var inst_25652 = inst_25645.cljs$core$ISeq$;
var inst_25653 = (cljs.core.PROTOCOL_SENTINEL === inst_25652);
var inst_25654 = ((inst_25651) || (inst_25653));
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25654)){
var statearr_25712_25792 = state_25692__$1;
(statearr_25712_25792[(1)] = (35));

} else {
var statearr_25713_25793 = state_25692__$1;
(statearr_25713_25793[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (40))){
var inst_25667 = (state_25692[(20)]);
var inst_25666 = (state_25692[(2)]);
var inst_25667__$1 = cljs.core.get.call(null,inst_25666,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25668 = cljs.core.get.call(null,inst_25666,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25669 = cljs.core.not_empty.call(null,inst_25667__$1);
var state_25692__$1 = (function (){var statearr_25714 = state_25692;
(statearr_25714[(21)] = inst_25668);

(statearr_25714[(20)] = inst_25667__$1);

return statearr_25714;
})();
if(cljs.core.truth_(inst_25669)){
var statearr_25715_25794 = state_25692__$1;
(statearr_25715_25794[(1)] = (41));

} else {
var statearr_25716_25795 = state_25692__$1;
(statearr_25716_25795[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (33))){
var state_25692__$1 = state_25692;
var statearr_25717_25796 = state_25692__$1;
(statearr_25717_25796[(2)] = false);

(statearr_25717_25796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (13))){
var inst_25565 = (state_25692[(22)]);
var inst_25569 = cljs.core.chunk_first.call(null,inst_25565);
var inst_25570 = cljs.core.chunk_rest.call(null,inst_25565);
var inst_25571 = cljs.core.count.call(null,inst_25569);
var inst_25552 = inst_25570;
var inst_25553 = inst_25569;
var inst_25554 = inst_25571;
var inst_25555 = (0);
var state_25692__$1 = (function (){var statearr_25718 = state_25692;
(statearr_25718[(7)] = inst_25555);

(statearr_25718[(8)] = inst_25554);

(statearr_25718[(9)] = inst_25553);

(statearr_25718[(10)] = inst_25552);

return statearr_25718;
})();
var statearr_25719_25797 = state_25692__$1;
(statearr_25719_25797[(2)] = null);

(statearr_25719_25797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (22))){
var inst_25609 = (state_25692[(23)]);
var inst_25613 = (state_25692[(24)]);
var inst_25608 = (state_25692[(25)]);
var inst_25605 = (state_25692[(19)]);
var inst_25608__$1 = (state_25692[(2)]);
var inst_25609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25608__$1);
var inst_25610 = (function (){var all_files = inst_25605;
var res_SINGLEQUOTE_ = inst_25608__$1;
var res = inst_25609__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25609,inst_25613,inst_25608,inst_25605,inst_25608__$1,inst_25609__$1,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25534_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25534_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25609,inst_25613,inst_25608,inst_25605,inst_25608__$1,inst_25609__$1,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25611 = cljs.core.filter.call(null,inst_25610,inst_25608__$1);
var inst_25612 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25613__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25612);
var inst_25614 = cljs.core.not_empty.call(null,inst_25613__$1);
var state_25692__$1 = (function (){var statearr_25720 = state_25692;
(statearr_25720[(23)] = inst_25609__$1);

(statearr_25720[(24)] = inst_25613__$1);

(statearr_25720[(25)] = inst_25608__$1);

(statearr_25720[(26)] = inst_25611);

return statearr_25720;
})();
if(cljs.core.truth_(inst_25614)){
var statearr_25721_25798 = state_25692__$1;
(statearr_25721_25798[(1)] = (23));

} else {
var statearr_25722_25799 = state_25692__$1;
(statearr_25722_25799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (36))){
var state_25692__$1 = state_25692;
var statearr_25723_25800 = state_25692__$1;
(statearr_25723_25800[(2)] = false);

(statearr_25723_25800[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (41))){
var inst_25667 = (state_25692[(20)]);
var inst_25671 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25672 = cljs.core.map.call(null,inst_25671,inst_25667);
var inst_25673 = cljs.core.pr_str.call(null,inst_25672);
var inst_25674 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25673)].join('');
var inst_25675 = figwheel.client.utils.log.call(null,inst_25674);
var state_25692__$1 = state_25692;
var statearr_25724_25801 = state_25692__$1;
(statearr_25724_25801[(2)] = inst_25675);

(statearr_25724_25801[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (43))){
var inst_25668 = (state_25692[(21)]);
var inst_25678 = (state_25692[(2)]);
var inst_25679 = cljs.core.not_empty.call(null,inst_25668);
var state_25692__$1 = (function (){var statearr_25725 = state_25692;
(statearr_25725[(27)] = inst_25678);

return statearr_25725;
})();
if(cljs.core.truth_(inst_25679)){
var statearr_25726_25802 = state_25692__$1;
(statearr_25726_25802[(1)] = (44));

} else {
var statearr_25727_25803 = state_25692__$1;
(statearr_25727_25803[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (29))){
var inst_25609 = (state_25692[(23)]);
var inst_25613 = (state_25692[(24)]);
var inst_25608 = (state_25692[(25)]);
var inst_25605 = (state_25692[(19)]);
var inst_25611 = (state_25692[(26)]);
var inst_25645 = (state_25692[(16)]);
var inst_25641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25644 = (function (){var all_files = inst_25605;
var res_SINGLEQUOTE_ = inst_25608;
var res = inst_25609;
var files_not_loaded = inst_25611;
var dependencies_that_loaded = inst_25613;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25645,inst_25641,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25643){
var map__25728 = p__25643;
var map__25728__$1 = ((((!((map__25728 == null)))?(((((map__25728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25728):map__25728);
var namespace = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25645,inst_25641,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25645__$1 = cljs.core.group_by.call(null,inst_25644,inst_25611);
var inst_25647 = (inst_25645__$1 == null);
var inst_25648 = cljs.core.not.call(null,inst_25647);
var state_25692__$1 = (function (){var statearr_25730 = state_25692;
(statearr_25730[(16)] = inst_25645__$1);

(statearr_25730[(28)] = inst_25641);

return statearr_25730;
})();
if(inst_25648){
var statearr_25731_25804 = state_25692__$1;
(statearr_25731_25804[(1)] = (32));

} else {
var statearr_25732_25805 = state_25692__$1;
(statearr_25732_25805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (44))){
var inst_25668 = (state_25692[(21)]);
var inst_25681 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25668);
var inst_25682 = cljs.core.pr_str.call(null,inst_25681);
var inst_25683 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25682)].join('');
var inst_25684 = figwheel.client.utils.log.call(null,inst_25683);
var state_25692__$1 = state_25692;
var statearr_25733_25806 = state_25692__$1;
(statearr_25733_25806[(2)] = inst_25684);

(statearr_25733_25806[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (6))){
var inst_25586 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25734_25807 = state_25692__$1;
(statearr_25734_25807[(2)] = inst_25586);

(statearr_25734_25807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (28))){
var inst_25611 = (state_25692[(26)]);
var inst_25638 = (state_25692[(2)]);
var inst_25639 = cljs.core.not_empty.call(null,inst_25611);
var state_25692__$1 = (function (){var statearr_25735 = state_25692;
(statearr_25735[(29)] = inst_25638);

return statearr_25735;
})();
if(cljs.core.truth_(inst_25639)){
var statearr_25736_25808 = state_25692__$1;
(statearr_25736_25808[(1)] = (29));

} else {
var statearr_25737_25809 = state_25692__$1;
(statearr_25737_25809[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (25))){
var inst_25609 = (state_25692[(23)]);
var inst_25625 = (state_25692[(2)]);
var inst_25626 = cljs.core.not_empty.call(null,inst_25609);
var state_25692__$1 = (function (){var statearr_25738 = state_25692;
(statearr_25738[(30)] = inst_25625);

return statearr_25738;
})();
if(cljs.core.truth_(inst_25626)){
var statearr_25739_25810 = state_25692__$1;
(statearr_25739_25810[(1)] = (26));

} else {
var statearr_25740_25811 = state_25692__$1;
(statearr_25740_25811[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (34))){
var inst_25661 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25661)){
var statearr_25741_25812 = state_25692__$1;
(statearr_25741_25812[(1)] = (38));

} else {
var statearr_25742_25813 = state_25692__$1;
(statearr_25742_25813[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (17))){
var state_25692__$1 = state_25692;
var statearr_25743_25814 = state_25692__$1;
(statearr_25743_25814[(2)] = recompile_dependents);

(statearr_25743_25814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (3))){
var state_25692__$1 = state_25692;
var statearr_25744_25815 = state_25692__$1;
(statearr_25744_25815[(2)] = null);

(statearr_25744_25815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (12))){
var inst_25582 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25745_25816 = state_25692__$1;
(statearr_25745_25816[(2)] = inst_25582);

(statearr_25745_25816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (2))){
var inst_25544 = (state_25692[(13)]);
var inst_25551 = cljs.core.seq.call(null,inst_25544);
var inst_25552 = inst_25551;
var inst_25553 = null;
var inst_25554 = (0);
var inst_25555 = (0);
var state_25692__$1 = (function (){var statearr_25746 = state_25692;
(statearr_25746[(7)] = inst_25555);

(statearr_25746[(8)] = inst_25554);

(statearr_25746[(9)] = inst_25553);

(statearr_25746[(10)] = inst_25552);

return statearr_25746;
})();
var statearr_25747_25817 = state_25692__$1;
(statearr_25747_25817[(2)] = null);

(statearr_25747_25817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (23))){
var inst_25609 = (state_25692[(23)]);
var inst_25613 = (state_25692[(24)]);
var inst_25608 = (state_25692[(25)]);
var inst_25605 = (state_25692[(19)]);
var inst_25611 = (state_25692[(26)]);
var inst_25616 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25618 = (function (){var all_files = inst_25605;
var res_SINGLEQUOTE_ = inst_25608;
var res = inst_25609;
var files_not_loaded = inst_25611;
var dependencies_that_loaded = inst_25613;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25616,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25617){
var map__25748 = p__25617;
var map__25748__$1 = ((((!((map__25748 == null)))?(((((map__25748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var request_url = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25616,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25619 = cljs.core.reverse.call(null,inst_25613);
var inst_25620 = cljs.core.map.call(null,inst_25618,inst_25619);
var inst_25621 = cljs.core.pr_str.call(null,inst_25620);
var inst_25622 = figwheel.client.utils.log.call(null,inst_25621);
var state_25692__$1 = (function (){var statearr_25750 = state_25692;
(statearr_25750[(31)] = inst_25616);

return statearr_25750;
})();
var statearr_25751_25818 = state_25692__$1;
(statearr_25751_25818[(2)] = inst_25622);

(statearr_25751_25818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (35))){
var state_25692__$1 = state_25692;
var statearr_25752_25819 = state_25692__$1;
(statearr_25752_25819[(2)] = true);

(statearr_25752_25819[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (19))){
var inst_25595 = (state_25692[(12)]);
var inst_25601 = figwheel.client.file_reloading.expand_files.call(null,inst_25595);
var state_25692__$1 = state_25692;
var statearr_25753_25820 = state_25692__$1;
(statearr_25753_25820[(2)] = inst_25601);

(statearr_25753_25820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (11))){
var state_25692__$1 = state_25692;
var statearr_25754_25821 = state_25692__$1;
(statearr_25754_25821[(2)] = null);

(statearr_25754_25821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (9))){
var inst_25584 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25755_25822 = state_25692__$1;
(statearr_25755_25822[(2)] = inst_25584);

(statearr_25755_25822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (5))){
var inst_25555 = (state_25692[(7)]);
var inst_25554 = (state_25692[(8)]);
var inst_25557 = (inst_25555 < inst_25554);
var inst_25558 = inst_25557;
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25558)){
var statearr_25756_25823 = state_25692__$1;
(statearr_25756_25823[(1)] = (7));

} else {
var statearr_25757_25824 = state_25692__$1;
(statearr_25757_25824[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (14))){
var inst_25565 = (state_25692[(22)]);
var inst_25574 = cljs.core.first.call(null,inst_25565);
var inst_25575 = figwheel.client.file_reloading.eval_body.call(null,inst_25574,opts);
var inst_25576 = cljs.core.next.call(null,inst_25565);
var inst_25552 = inst_25576;
var inst_25553 = null;
var inst_25554 = (0);
var inst_25555 = (0);
var state_25692__$1 = (function (){var statearr_25758 = state_25692;
(statearr_25758[(7)] = inst_25555);

(statearr_25758[(32)] = inst_25575);

(statearr_25758[(8)] = inst_25554);

(statearr_25758[(9)] = inst_25553);

(statearr_25758[(10)] = inst_25552);

return statearr_25758;
})();
var statearr_25759_25825 = state_25692__$1;
(statearr_25759_25825[(2)] = null);

(statearr_25759_25825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (45))){
var state_25692__$1 = state_25692;
var statearr_25760_25826 = state_25692__$1;
(statearr_25760_25826[(2)] = null);

(statearr_25760_25826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (26))){
var inst_25609 = (state_25692[(23)]);
var inst_25613 = (state_25692[(24)]);
var inst_25608 = (state_25692[(25)]);
var inst_25605 = (state_25692[(19)]);
var inst_25611 = (state_25692[(26)]);
var inst_25628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25630 = (function (){var all_files = inst_25605;
var res_SINGLEQUOTE_ = inst_25608;
var res = inst_25609;
var files_not_loaded = inst_25611;
var dependencies_that_loaded = inst_25613;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25628,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25629){
var map__25761 = p__25629;
var map__25761__$1 = ((((!((map__25761 == null)))?(((((map__25761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25761):map__25761);
var namespace = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25628,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25631 = cljs.core.map.call(null,inst_25630,inst_25609);
var inst_25632 = cljs.core.pr_str.call(null,inst_25631);
var inst_25633 = figwheel.client.utils.log.call(null,inst_25632);
var inst_25634 = (function (){var all_files = inst_25605;
var res_SINGLEQUOTE_ = inst_25608;
var res = inst_25609;
var files_not_loaded = inst_25611;
var dependencies_that_loaded = inst_25613;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25628,inst_25630,inst_25631,inst_25632,inst_25633,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25609,inst_25613,inst_25608,inst_25605,inst_25611,inst_25628,inst_25630,inst_25631,inst_25632,inst_25633,state_val_25693,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25635 = setTimeout(inst_25634,(10));
var state_25692__$1 = (function (){var statearr_25763 = state_25692;
(statearr_25763[(33)] = inst_25628);

(statearr_25763[(34)] = inst_25633);

return statearr_25763;
})();
var statearr_25764_25827 = state_25692__$1;
(statearr_25764_25827[(2)] = inst_25635);

(statearr_25764_25827[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (16))){
var state_25692__$1 = state_25692;
var statearr_25765_25828 = state_25692__$1;
(statearr_25765_25828[(2)] = reload_dependents);

(statearr_25765_25828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (38))){
var inst_25645 = (state_25692[(16)]);
var inst_25663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25645);
var state_25692__$1 = state_25692;
var statearr_25766_25829 = state_25692__$1;
(statearr_25766_25829[(2)] = inst_25663);

(statearr_25766_25829[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (30))){
var state_25692__$1 = state_25692;
var statearr_25767_25830 = state_25692__$1;
(statearr_25767_25830[(2)] = null);

(statearr_25767_25830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (10))){
var inst_25565 = (state_25692[(22)]);
var inst_25567 = cljs.core.chunked_seq_QMARK_.call(null,inst_25565);
var state_25692__$1 = state_25692;
if(inst_25567){
var statearr_25768_25831 = state_25692__$1;
(statearr_25768_25831[(1)] = (13));

} else {
var statearr_25769_25832 = state_25692__$1;
(statearr_25769_25832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (18))){
var inst_25599 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25599)){
var statearr_25770_25833 = state_25692__$1;
(statearr_25770_25833[(1)] = (19));

} else {
var statearr_25771_25834 = state_25692__$1;
(statearr_25771_25834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (42))){
var state_25692__$1 = state_25692;
var statearr_25772_25835 = state_25692__$1;
(statearr_25772_25835[(2)] = null);

(statearr_25772_25835[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (37))){
var inst_25658 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25773_25836 = state_25692__$1;
(statearr_25773_25836[(2)] = inst_25658);

(statearr_25773_25836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (8))){
var inst_25565 = (state_25692[(22)]);
var inst_25552 = (state_25692[(10)]);
var inst_25565__$1 = cljs.core.seq.call(null,inst_25552);
var state_25692__$1 = (function (){var statearr_25774 = state_25692;
(statearr_25774[(22)] = inst_25565__$1);

return statearr_25774;
})();
if(inst_25565__$1){
var statearr_25775_25837 = state_25692__$1;
(statearr_25775_25837[(1)] = (10));

} else {
var statearr_25776_25838 = state_25692__$1;
(statearr_25776_25838[(1)] = (11));

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
});})(c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22698__auto__,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____0 = (function (){
var statearr_25777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25777[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__);

(statearr_25777[(1)] = (1));

return statearr_25777;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____1 = (function (state_25692){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_25692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e25778){if((e25778 instanceof Object)){
var ex__22702__auto__ = e25778;
var statearr_25779_25839 = state_25692;
(statearr_25779_25839[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25692;
state_25692 = G__25840;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__ = function(state_25692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____1.call(this,state_25692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22788__auto__ = (function (){var statearr_25780 = f__22787__auto__.call(null);
(statearr_25780[(6)] = c__22786__auto__);

return statearr_25780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,map__25537,map__25537__$1,opts,before_jsload,on_jsload,reload_dependents,map__25538,map__25538__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22786__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25843,link){
var map__25844 = p__25843;
var map__25844__$1 = ((((!((map__25844 == null)))?(((((map__25844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25844):map__25844);
var file = cljs.core.get.call(null,map__25844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25844,map__25844__$1,file){
return (function (p1__25841_SHARP_,p2__25842_SHARP_){
if(cljs.core._EQ_.call(null,p1__25841_SHARP_,p2__25842_SHARP_)){
return p1__25841_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25844,map__25844__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25847){
var map__25848 = p__25847;
var map__25848__$1 = ((((!((map__25848 == null)))?(((((map__25848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25848):map__25848);
var match_length = cljs.core.get.call(null,map__25848__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25848__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25846_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25846_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25850_SHARP_,p2__25851_SHARP_){
return cljs.core.assoc.call(null,p1__25850_SHARP_,cljs.core.get.call(null,p2__25851_SHARP_,key),p2__25851_SHARP_);
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
var loaded_f_datas_25852 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25852);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25852);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25853,p__25854){
var map__25855 = p__25853;
var map__25855__$1 = ((((!((map__25855 == null)))?(((((map__25855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25855):map__25855);
var on_cssload = cljs.core.get.call(null,map__25855__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25856 = p__25854;
var map__25856__$1 = ((((!((map__25856 == null)))?(((((map__25856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25856):map__25856);
var files_msg = map__25856__$1;
var files = cljs.core.get.call(null,map__25856__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1532452670997
