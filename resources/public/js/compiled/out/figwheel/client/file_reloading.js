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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29847_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29847_SHARP_));
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
var seq__29848 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29849 = null;
var count__29850 = (0);
var i__29851 = (0);
while(true){
if((i__29851 < count__29850)){
var n = cljs.core._nth.call(null,chunk__29849,i__29851);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29852 = seq__29848;
var G__29853 = chunk__29849;
var G__29854 = count__29850;
var G__29855 = (i__29851 + (1));
seq__29848 = G__29852;
chunk__29849 = G__29853;
count__29850 = G__29854;
i__29851 = G__29855;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29848);
if(temp__4657__auto__){
var seq__29848__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29848__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29848__$1);
var G__29856 = cljs.core.chunk_rest.call(null,seq__29848__$1);
var G__29857 = c__4319__auto__;
var G__29858 = cljs.core.count.call(null,c__4319__auto__);
var G__29859 = (0);
seq__29848 = G__29856;
chunk__29849 = G__29857;
count__29850 = G__29858;
i__29851 = G__29859;
continue;
} else {
var n = cljs.core.first.call(null,seq__29848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29860 = cljs.core.next.call(null,seq__29848__$1);
var G__29861 = null;
var G__29862 = (0);
var G__29863 = (0);
seq__29848 = G__29860;
chunk__29849 = G__29861;
count__29850 = G__29862;
i__29851 = G__29863;
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
return cljs.core.some.call(null,(function (p__29864){
var vec__29865 = p__29864;
var _ = cljs.core.nth.call(null,vec__29865,(0),null);
var v = cljs.core.nth.call(null,vec__29865,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29868){
var vec__29869 = p__29868;
var k = cljs.core.nth.call(null,vec__29869,(0),null);
var v = cljs.core.nth.call(null,vec__29869,(1),null);
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

var seq__29881_29889 = cljs.core.seq.call(null,deps);
var chunk__29882_29890 = null;
var count__29883_29891 = (0);
var i__29884_29892 = (0);
while(true){
if((i__29884_29892 < count__29883_29891)){
var dep_29893 = cljs.core._nth.call(null,chunk__29882_29890,i__29884_29892);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29893;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29893));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29893,(depth + (1)),state);
} else {
}


var G__29894 = seq__29881_29889;
var G__29895 = chunk__29882_29890;
var G__29896 = count__29883_29891;
var G__29897 = (i__29884_29892 + (1));
seq__29881_29889 = G__29894;
chunk__29882_29890 = G__29895;
count__29883_29891 = G__29896;
i__29884_29892 = G__29897;
continue;
} else {
var temp__4657__auto___29898 = cljs.core.seq.call(null,seq__29881_29889);
if(temp__4657__auto___29898){
var seq__29881_29899__$1 = temp__4657__auto___29898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29881_29899__$1)){
var c__4319__auto___29900 = cljs.core.chunk_first.call(null,seq__29881_29899__$1);
var G__29901 = cljs.core.chunk_rest.call(null,seq__29881_29899__$1);
var G__29902 = c__4319__auto___29900;
var G__29903 = cljs.core.count.call(null,c__4319__auto___29900);
var G__29904 = (0);
seq__29881_29889 = G__29901;
chunk__29882_29890 = G__29902;
count__29883_29891 = G__29903;
i__29884_29892 = G__29904;
continue;
} else {
var dep_29905 = cljs.core.first.call(null,seq__29881_29899__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29905;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29905));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29905,(depth + (1)),state);
} else {
}


var G__29906 = cljs.core.next.call(null,seq__29881_29899__$1);
var G__29907 = null;
var G__29908 = (0);
var G__29909 = (0);
seq__29881_29889 = G__29906;
chunk__29882_29890 = G__29907;
count__29883_29891 = G__29908;
i__29884_29892 = G__29909;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29885){
var vec__29886 = p__29885;
var seq__29887 = cljs.core.seq.call(null,vec__29886);
var first__29888 = cljs.core.first.call(null,seq__29887);
var seq__29887__$1 = cljs.core.next.call(null,seq__29887);
var x = first__29888;
var xs = seq__29887__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29886,seq__29887,first__29888,seq__29887__$1,x,xs,get_deps__$1){
return (function (p1__29872_SHARP_){
return clojure.set.difference.call(null,p1__29872_SHARP_,x);
});})(vec__29886,seq__29887,first__29888,seq__29887__$1,x,xs,get_deps__$1))
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
var seq__29910 = cljs.core.seq.call(null,provides);
var chunk__29911 = null;
var count__29912 = (0);
var i__29913 = (0);
while(true){
if((i__29913 < count__29912)){
var prov = cljs.core._nth.call(null,chunk__29911,i__29913);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29914_29922 = cljs.core.seq.call(null,requires);
var chunk__29915_29923 = null;
var count__29916_29924 = (0);
var i__29917_29925 = (0);
while(true){
if((i__29917_29925 < count__29916_29924)){
var req_29926 = cljs.core._nth.call(null,chunk__29915_29923,i__29917_29925);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29926,prov);


var G__29927 = seq__29914_29922;
var G__29928 = chunk__29915_29923;
var G__29929 = count__29916_29924;
var G__29930 = (i__29917_29925 + (1));
seq__29914_29922 = G__29927;
chunk__29915_29923 = G__29928;
count__29916_29924 = G__29929;
i__29917_29925 = G__29930;
continue;
} else {
var temp__4657__auto___29931 = cljs.core.seq.call(null,seq__29914_29922);
if(temp__4657__auto___29931){
var seq__29914_29932__$1 = temp__4657__auto___29931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29914_29932__$1)){
var c__4319__auto___29933 = cljs.core.chunk_first.call(null,seq__29914_29932__$1);
var G__29934 = cljs.core.chunk_rest.call(null,seq__29914_29932__$1);
var G__29935 = c__4319__auto___29933;
var G__29936 = cljs.core.count.call(null,c__4319__auto___29933);
var G__29937 = (0);
seq__29914_29922 = G__29934;
chunk__29915_29923 = G__29935;
count__29916_29924 = G__29936;
i__29917_29925 = G__29937;
continue;
} else {
var req_29938 = cljs.core.first.call(null,seq__29914_29932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29938,prov);


var G__29939 = cljs.core.next.call(null,seq__29914_29932__$1);
var G__29940 = null;
var G__29941 = (0);
var G__29942 = (0);
seq__29914_29922 = G__29939;
chunk__29915_29923 = G__29940;
count__29916_29924 = G__29941;
i__29917_29925 = G__29942;
continue;
}
} else {
}
}
break;
}


var G__29943 = seq__29910;
var G__29944 = chunk__29911;
var G__29945 = count__29912;
var G__29946 = (i__29913 + (1));
seq__29910 = G__29943;
chunk__29911 = G__29944;
count__29912 = G__29945;
i__29913 = G__29946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29910);
if(temp__4657__auto__){
var seq__29910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29910__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29910__$1);
var G__29947 = cljs.core.chunk_rest.call(null,seq__29910__$1);
var G__29948 = c__4319__auto__;
var G__29949 = cljs.core.count.call(null,c__4319__auto__);
var G__29950 = (0);
seq__29910 = G__29947;
chunk__29911 = G__29948;
count__29912 = G__29949;
i__29913 = G__29950;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29910__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29918_29951 = cljs.core.seq.call(null,requires);
var chunk__29919_29952 = null;
var count__29920_29953 = (0);
var i__29921_29954 = (0);
while(true){
if((i__29921_29954 < count__29920_29953)){
var req_29955 = cljs.core._nth.call(null,chunk__29919_29952,i__29921_29954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29955,prov);


var G__29956 = seq__29918_29951;
var G__29957 = chunk__29919_29952;
var G__29958 = count__29920_29953;
var G__29959 = (i__29921_29954 + (1));
seq__29918_29951 = G__29956;
chunk__29919_29952 = G__29957;
count__29920_29953 = G__29958;
i__29921_29954 = G__29959;
continue;
} else {
var temp__4657__auto___29960__$1 = cljs.core.seq.call(null,seq__29918_29951);
if(temp__4657__auto___29960__$1){
var seq__29918_29961__$1 = temp__4657__auto___29960__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29918_29961__$1)){
var c__4319__auto___29962 = cljs.core.chunk_first.call(null,seq__29918_29961__$1);
var G__29963 = cljs.core.chunk_rest.call(null,seq__29918_29961__$1);
var G__29964 = c__4319__auto___29962;
var G__29965 = cljs.core.count.call(null,c__4319__auto___29962);
var G__29966 = (0);
seq__29918_29951 = G__29963;
chunk__29919_29952 = G__29964;
count__29920_29953 = G__29965;
i__29921_29954 = G__29966;
continue;
} else {
var req_29967 = cljs.core.first.call(null,seq__29918_29961__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29967,prov);


var G__29968 = cljs.core.next.call(null,seq__29918_29961__$1);
var G__29969 = null;
var G__29970 = (0);
var G__29971 = (0);
seq__29918_29951 = G__29968;
chunk__29919_29952 = G__29969;
count__29920_29953 = G__29970;
i__29921_29954 = G__29971;
continue;
}
} else {
}
}
break;
}


var G__29972 = cljs.core.next.call(null,seq__29910__$1);
var G__29973 = null;
var G__29974 = (0);
var G__29975 = (0);
seq__29910 = G__29972;
chunk__29911 = G__29973;
count__29912 = G__29974;
i__29913 = G__29975;
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
var seq__29976_29980 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29977_29981 = null;
var count__29978_29982 = (0);
var i__29979_29983 = (0);
while(true){
if((i__29979_29983 < count__29978_29982)){
var ns_29984 = cljs.core._nth.call(null,chunk__29977_29981,i__29979_29983);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29984);


var G__29985 = seq__29976_29980;
var G__29986 = chunk__29977_29981;
var G__29987 = count__29978_29982;
var G__29988 = (i__29979_29983 + (1));
seq__29976_29980 = G__29985;
chunk__29977_29981 = G__29986;
count__29978_29982 = G__29987;
i__29979_29983 = G__29988;
continue;
} else {
var temp__4657__auto___29989 = cljs.core.seq.call(null,seq__29976_29980);
if(temp__4657__auto___29989){
var seq__29976_29990__$1 = temp__4657__auto___29989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29976_29990__$1)){
var c__4319__auto___29991 = cljs.core.chunk_first.call(null,seq__29976_29990__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29976_29990__$1);
var G__29993 = c__4319__auto___29991;
var G__29994 = cljs.core.count.call(null,c__4319__auto___29991);
var G__29995 = (0);
seq__29976_29980 = G__29992;
chunk__29977_29981 = G__29993;
count__29978_29982 = G__29994;
i__29979_29983 = G__29995;
continue;
} else {
var ns_29996 = cljs.core.first.call(null,seq__29976_29990__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29996);


var G__29997 = cljs.core.next.call(null,seq__29976_29990__$1);
var G__29998 = null;
var G__29999 = (0);
var G__30000 = (0);
seq__29976_29980 = G__29997;
chunk__29977_29981 = G__29998;
count__29978_29982 = G__29999;
i__29979_29983 = G__30000;
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
var G__30001__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30002__i = 0, G__30002__a = new Array(arguments.length -  0);
while (G__30002__i < G__30002__a.length) {G__30002__a[G__30002__i] = arguments[G__30002__i + 0]; ++G__30002__i;}
  args = new cljs.core.IndexedSeq(G__30002__a,0,null);
} 
return G__30001__delegate.call(this,args);};
G__30001.cljs$lang$maxFixedArity = 0;
G__30001.cljs$lang$applyTo = (function (arglist__30003){
var args = cljs.core.seq(arglist__30003);
return G__30001__delegate(args);
});
G__30001.cljs$core$IFn$_invoke$arity$variadic = G__30001__delegate;
return G__30001;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30004_SHARP_,p2__30005_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30004_SHARP_)].join('')),p2__30005_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30006_SHARP_,p2__30007_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30006_SHARP_)].join(''),p2__30007_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30008 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30008.addCallback(((function (G__30008){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30008))
);

G__30008.addErrback(((function (G__30008){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30008))
);

return G__30008;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30009){if((e30009 instanceof Error)){
var e = e30009;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30009;

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
}catch (e30010){if((e30010 instanceof Error)){
var e = e30010;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30010;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30011 = cljs.core._EQ_;
var expr__30012 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30011.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30012))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30011.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30012))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30011.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30012))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30011,expr__30012){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30011,expr__30012))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30014,callback){
var map__30015 = p__30014;
var map__30015__$1 = ((((!((map__30015 == null)))?(((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var file_msg = map__30015__$1;
var request_url = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30015,map__30015__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30015,map__30015__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__){
return (function (state_30053){
var state_val_30054 = (state_30053[(1)]);
if((state_val_30054 === (7))){
var inst_30049 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
var statearr_30055_30081 = state_30053__$1;
(statearr_30055_30081[(2)] = inst_30049);

(statearr_30055_30081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (1))){
var state_30053__$1 = state_30053;
var statearr_30056_30082 = state_30053__$1;
(statearr_30056_30082[(2)] = null);

(statearr_30056_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (4))){
var inst_30019 = (state_30053[(7)]);
var inst_30019__$1 = (state_30053[(2)]);
var state_30053__$1 = (function (){var statearr_30057 = state_30053;
(statearr_30057[(7)] = inst_30019__$1);

return statearr_30057;
})();
if(cljs.core.truth_(inst_30019__$1)){
var statearr_30058_30083 = state_30053__$1;
(statearr_30058_30083[(1)] = (5));

} else {
var statearr_30059_30084 = state_30053__$1;
(statearr_30059_30084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (15))){
var inst_30032 = (state_30053[(8)]);
var inst_30034 = (state_30053[(9)]);
var inst_30036 = inst_30034.call(null,inst_30032);
var state_30053__$1 = state_30053;
var statearr_30060_30085 = state_30053__$1;
(statearr_30060_30085[(2)] = inst_30036);

(statearr_30060_30085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (13))){
var inst_30043 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
var statearr_30061_30086 = state_30053__$1;
(statearr_30061_30086[(2)] = inst_30043);

(statearr_30061_30086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (6))){
var state_30053__$1 = state_30053;
var statearr_30062_30087 = state_30053__$1;
(statearr_30062_30087[(2)] = null);

(statearr_30062_30087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (17))){
var inst_30040 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
var statearr_30063_30088 = state_30053__$1;
(statearr_30063_30088[(2)] = inst_30040);

(statearr_30063_30088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (3))){
var inst_30051 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30053__$1,inst_30051);
} else {
if((state_val_30054 === (12))){
var state_30053__$1 = state_30053;
var statearr_30064_30089 = state_30053__$1;
(statearr_30064_30089[(2)] = null);

(statearr_30064_30089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (2))){
var state_30053__$1 = state_30053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30053__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30054 === (11))){
var inst_30024 = (state_30053[(10)]);
var inst_30030 = figwheel.client.file_reloading.blocking_load.call(null,inst_30024);
var state_30053__$1 = state_30053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30053__$1,(14),inst_30030);
} else {
if((state_val_30054 === (9))){
var inst_30024 = (state_30053[(10)]);
var state_30053__$1 = state_30053;
if(cljs.core.truth_(inst_30024)){
var statearr_30065_30090 = state_30053__$1;
(statearr_30065_30090[(1)] = (11));

} else {
var statearr_30066_30091 = state_30053__$1;
(statearr_30066_30091[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (5))){
var inst_30025 = (state_30053[(11)]);
var inst_30019 = (state_30053[(7)]);
var inst_30024 = cljs.core.nth.call(null,inst_30019,(0),null);
var inst_30025__$1 = cljs.core.nth.call(null,inst_30019,(1),null);
var state_30053__$1 = (function (){var statearr_30067 = state_30053;
(statearr_30067[(11)] = inst_30025__$1);

(statearr_30067[(10)] = inst_30024);

return statearr_30067;
})();
if(cljs.core.truth_(inst_30025__$1)){
var statearr_30068_30092 = state_30053__$1;
(statearr_30068_30092[(1)] = (8));

} else {
var statearr_30069_30093 = state_30053__$1;
(statearr_30069_30093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (14))){
var inst_30024 = (state_30053[(10)]);
var inst_30034 = (state_30053[(9)]);
var inst_30032 = (state_30053[(2)]);
var inst_30033 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30034__$1 = cljs.core.get.call(null,inst_30033,inst_30024);
var state_30053__$1 = (function (){var statearr_30070 = state_30053;
(statearr_30070[(8)] = inst_30032);

(statearr_30070[(9)] = inst_30034__$1);

return statearr_30070;
})();
if(cljs.core.truth_(inst_30034__$1)){
var statearr_30071_30094 = state_30053__$1;
(statearr_30071_30094[(1)] = (15));

} else {
var statearr_30072_30095 = state_30053__$1;
(statearr_30072_30095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (16))){
var inst_30032 = (state_30053[(8)]);
var inst_30038 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30032);
var state_30053__$1 = state_30053;
var statearr_30073_30096 = state_30053__$1;
(statearr_30073_30096[(2)] = inst_30038);

(statearr_30073_30096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (10))){
var inst_30045 = (state_30053[(2)]);
var state_30053__$1 = (function (){var statearr_30074 = state_30053;
(statearr_30074[(12)] = inst_30045);

return statearr_30074;
})();
var statearr_30075_30097 = state_30053__$1;
(statearr_30075_30097[(2)] = null);

(statearr_30075_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (8))){
var inst_30025 = (state_30053[(11)]);
var inst_30027 = eval(inst_30025);
var state_30053__$1 = state_30053;
var statearr_30076_30098 = state_30053__$1;
(statearr_30076_30098[(2)] = inst_30027);

(statearr_30076_30098[(1)] = (10));


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
});})(c__27754__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27667__auto__ = null;
var figwheel$client$file_reloading$state_machine__27667__auto____0 = (function (){
var statearr_30077 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30077[(0)] = figwheel$client$file_reloading$state_machine__27667__auto__);

(statearr_30077[(1)] = (1));

return statearr_30077;
});
var figwheel$client$file_reloading$state_machine__27667__auto____1 = (function (state_30053){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_30053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e30078){if((e30078 instanceof Object)){
var ex__27670__auto__ = e30078;
var statearr_30079_30099 = state_30053;
(statearr_30079_30099[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_30053;
state_30053 = G__30100;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27667__auto__ = function(state_30053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27667__auto____1.call(this,state_30053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27667__auto____0;
figwheel$client$file_reloading$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27667__auto____1;
return figwheel$client$file_reloading$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__))
})();
var state__27756__auto__ = (function (){var statearr_30080 = f__27755__auto__.call(null);
(statearr_30080[(6)] = c__27754__auto__);

return statearr_30080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__))
);

return c__27754__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30102 = arguments.length;
switch (G__30102) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30104,callback){
var map__30105 = p__30104;
var map__30105__$1 = ((((!((map__30105 == null)))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);
var file_msg = map__30105__$1;
var namespace = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30105,map__30105__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30105,map__30105__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30107){
var map__30108 = p__30107;
var map__30108__$1 = ((((!((map__30108 == null)))?(((((map__30108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30108):map__30108);
var file_msg = map__30108__$1;
var namespace = cljs.core.get.call(null,map__30108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30110){
var map__30111 = p__30110;
var map__30111__$1 = ((((!((map__30111 == null)))?(((((map__30111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30111):map__30111);
var file_msg = map__30111__$1;
var namespace = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30113,callback){
var map__30114 = p__30113;
var map__30114__$1 = ((((!((map__30114 == null)))?(((((map__30114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30114):map__30114);
var file_msg = map__30114__$1;
var request_url = cljs.core.get.call(null,map__30114__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27754__auto___30164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___30164,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___30164,out){
return (function (state_30149){
var state_val_30150 = (state_30149[(1)]);
if((state_val_30150 === (1))){
var inst_30123 = cljs.core.seq.call(null,files);
var inst_30124 = cljs.core.first.call(null,inst_30123);
var inst_30125 = cljs.core.next.call(null,inst_30123);
var inst_30126 = files;
var state_30149__$1 = (function (){var statearr_30151 = state_30149;
(statearr_30151[(7)] = inst_30124);

(statearr_30151[(8)] = inst_30126);

(statearr_30151[(9)] = inst_30125);

return statearr_30151;
})();
var statearr_30152_30165 = state_30149__$1;
(statearr_30152_30165[(2)] = null);

(statearr_30152_30165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30150 === (2))){
var inst_30126 = (state_30149[(8)]);
var inst_30132 = (state_30149[(10)]);
var inst_30131 = cljs.core.seq.call(null,inst_30126);
var inst_30132__$1 = cljs.core.first.call(null,inst_30131);
var inst_30133 = cljs.core.next.call(null,inst_30131);
var inst_30134 = (inst_30132__$1 == null);
var inst_30135 = cljs.core.not.call(null,inst_30134);
var state_30149__$1 = (function (){var statearr_30153 = state_30149;
(statearr_30153[(11)] = inst_30133);

(statearr_30153[(10)] = inst_30132__$1);

return statearr_30153;
})();
if(inst_30135){
var statearr_30154_30166 = state_30149__$1;
(statearr_30154_30166[(1)] = (4));

} else {
var statearr_30155_30167 = state_30149__$1;
(statearr_30155_30167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30150 === (3))){
var inst_30147 = (state_30149[(2)]);
var state_30149__$1 = state_30149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30149__$1,inst_30147);
} else {
if((state_val_30150 === (4))){
var inst_30132 = (state_30149[(10)]);
var inst_30137 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30132);
var state_30149__$1 = state_30149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30149__$1,(7),inst_30137);
} else {
if((state_val_30150 === (5))){
var inst_30143 = cljs.core.async.close_BANG_.call(null,out);
var state_30149__$1 = state_30149;
var statearr_30156_30168 = state_30149__$1;
(statearr_30156_30168[(2)] = inst_30143);

(statearr_30156_30168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30150 === (6))){
var inst_30145 = (state_30149[(2)]);
var state_30149__$1 = state_30149;
var statearr_30157_30169 = state_30149__$1;
(statearr_30157_30169[(2)] = inst_30145);

(statearr_30157_30169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30150 === (7))){
var inst_30133 = (state_30149[(11)]);
var inst_30139 = (state_30149[(2)]);
var inst_30140 = cljs.core.async.put_BANG_.call(null,out,inst_30139);
var inst_30126 = inst_30133;
var state_30149__$1 = (function (){var statearr_30158 = state_30149;
(statearr_30158[(8)] = inst_30126);

(statearr_30158[(12)] = inst_30140);

return statearr_30158;
})();
var statearr_30159_30170 = state_30149__$1;
(statearr_30159_30170[(2)] = null);

(statearr_30159_30170[(1)] = (2));


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
});})(c__27754__auto___30164,out))
;
return ((function (switch__27666__auto__,c__27754__auto___30164,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____0 = (function (){
var statearr_30160 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30160[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__);

(statearr_30160[(1)] = (1));

return statearr_30160;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____1 = (function (state_30149){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_30149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e30161){if((e30161 instanceof Object)){
var ex__27670__auto__ = e30161;
var statearr_30162_30171 = state_30149;
(statearr_30162_30171[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30172 = state_30149;
state_30149 = G__30172;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__ = function(state_30149){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____1.call(this,state_30149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___30164,out))
})();
var state__27756__auto__ = (function (){var statearr_30163 = f__27755__auto__.call(null);
(statearr_30163[(6)] = c__27754__auto___30164);

return statearr_30163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___30164,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30173,opts){
var map__30174 = p__30173;
var map__30174__$1 = ((((!((map__30174 == null)))?(((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);
var eval_body = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30176){var e = e30176;
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
return (function (p1__30177_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30177_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30178){
var vec__30179 = p__30178;
var k = cljs.core.nth.call(null,vec__30179,(0),null);
var v = cljs.core.nth.call(null,vec__30179,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30182){
var vec__30183 = p__30182;
var k = cljs.core.nth.call(null,vec__30183,(0),null);
var v = cljs.core.nth.call(null,vec__30183,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30189,p__30190){
var map__30191 = p__30189;
var map__30191__$1 = ((((!((map__30191 == null)))?(((((map__30191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);
var opts = map__30191__$1;
var before_jsload = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30192 = p__30190;
var map__30192__$1 = ((((!((map__30192 == null)))?(((((map__30192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30192):map__30192);
var msg = map__30192__$1;
var files = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30346){
var state_val_30347 = (state_30346[(1)]);
if((state_val_30347 === (7))){
var inst_30209 = (state_30346[(7)]);
var inst_30208 = (state_30346[(8)]);
var inst_30206 = (state_30346[(9)]);
var inst_30207 = (state_30346[(10)]);
var inst_30214 = cljs.core._nth.call(null,inst_30207,inst_30209);
var inst_30215 = figwheel.client.file_reloading.eval_body.call(null,inst_30214,opts);
var inst_30216 = (inst_30209 + (1));
var tmp30348 = inst_30208;
var tmp30349 = inst_30206;
var tmp30350 = inst_30207;
var inst_30206__$1 = tmp30349;
var inst_30207__$1 = tmp30350;
var inst_30208__$1 = tmp30348;
var inst_30209__$1 = inst_30216;
var state_30346__$1 = (function (){var statearr_30351 = state_30346;
(statearr_30351[(7)] = inst_30209__$1);

(statearr_30351[(8)] = inst_30208__$1);

(statearr_30351[(11)] = inst_30215);

(statearr_30351[(9)] = inst_30206__$1);

(statearr_30351[(10)] = inst_30207__$1);

return statearr_30351;
})();
var statearr_30352_30435 = state_30346__$1;
(statearr_30352_30435[(2)] = null);

(statearr_30352_30435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (20))){
var inst_30249 = (state_30346[(12)]);
var inst_30257 = figwheel.client.file_reloading.sort_files.call(null,inst_30249);
var state_30346__$1 = state_30346;
var statearr_30353_30436 = state_30346__$1;
(statearr_30353_30436[(2)] = inst_30257);

(statearr_30353_30436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (27))){
var state_30346__$1 = state_30346;
var statearr_30354_30437 = state_30346__$1;
(statearr_30354_30437[(2)] = null);

(statearr_30354_30437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (1))){
var inst_30198 = (state_30346[(13)]);
var inst_30195 = before_jsload.call(null,files);
var inst_30196 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30197 = (function (){return ((function (inst_30198,inst_30195,inst_30196,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30186_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30186_SHARP_);
});
;})(inst_30198,inst_30195,inst_30196,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30198__$1 = cljs.core.filter.call(null,inst_30197,files);
var inst_30199 = cljs.core.not_empty.call(null,inst_30198__$1);
var state_30346__$1 = (function (){var statearr_30355 = state_30346;
(statearr_30355[(13)] = inst_30198__$1);

(statearr_30355[(14)] = inst_30196);

(statearr_30355[(15)] = inst_30195);

return statearr_30355;
})();
if(cljs.core.truth_(inst_30199)){
var statearr_30356_30438 = state_30346__$1;
(statearr_30356_30438[(1)] = (2));

} else {
var statearr_30357_30439 = state_30346__$1;
(statearr_30357_30439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (24))){
var state_30346__$1 = state_30346;
var statearr_30358_30440 = state_30346__$1;
(statearr_30358_30440[(2)] = null);

(statearr_30358_30440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (39))){
var inst_30299 = (state_30346[(16)]);
var state_30346__$1 = state_30346;
var statearr_30359_30441 = state_30346__$1;
(statearr_30359_30441[(2)] = inst_30299);

(statearr_30359_30441[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (46))){
var inst_30341 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30360_30442 = state_30346__$1;
(statearr_30360_30442[(2)] = inst_30341);

(statearr_30360_30442[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (4))){
var inst_30243 = (state_30346[(2)]);
var inst_30244 = cljs.core.List.EMPTY;
var inst_30245 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30244);
var inst_30246 = (function (){return ((function (inst_30243,inst_30244,inst_30245,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30187_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30187_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30187_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30187_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30243,inst_30244,inst_30245,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30247 = cljs.core.filter.call(null,inst_30246,files);
var inst_30248 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30249 = cljs.core.concat.call(null,inst_30247,inst_30248);
var state_30346__$1 = (function (){var statearr_30361 = state_30346;
(statearr_30361[(17)] = inst_30245);

(statearr_30361[(18)] = inst_30243);

(statearr_30361[(12)] = inst_30249);

return statearr_30361;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30362_30443 = state_30346__$1;
(statearr_30362_30443[(1)] = (16));

} else {
var statearr_30363_30444 = state_30346__$1;
(statearr_30363_30444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (15))){
var inst_30233 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30364_30445 = state_30346__$1;
(statearr_30364_30445[(2)] = inst_30233);

(statearr_30364_30445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (21))){
var inst_30259 = (state_30346[(19)]);
var inst_30259__$1 = (state_30346[(2)]);
var inst_30260 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30259__$1);
var state_30346__$1 = (function (){var statearr_30365 = state_30346;
(statearr_30365[(19)] = inst_30259__$1);

return statearr_30365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30346__$1,(22),inst_30260);
} else {
if((state_val_30347 === (31))){
var inst_30344 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30346__$1,inst_30344);
} else {
if((state_val_30347 === (32))){
var inst_30299 = (state_30346[(16)]);
var inst_30304 = inst_30299.cljs$lang$protocol_mask$partition0$;
var inst_30305 = (inst_30304 & (64));
var inst_30306 = inst_30299.cljs$core$ISeq$;
var inst_30307 = (cljs.core.PROTOCOL_SENTINEL === inst_30306);
var inst_30308 = ((inst_30305) || (inst_30307));
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30308)){
var statearr_30366_30446 = state_30346__$1;
(statearr_30366_30446[(1)] = (35));

} else {
var statearr_30367_30447 = state_30346__$1;
(statearr_30367_30447[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (40))){
var inst_30321 = (state_30346[(20)]);
var inst_30320 = (state_30346[(2)]);
var inst_30321__$1 = cljs.core.get.call(null,inst_30320,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30322 = cljs.core.get.call(null,inst_30320,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30323 = cljs.core.not_empty.call(null,inst_30321__$1);
var state_30346__$1 = (function (){var statearr_30368 = state_30346;
(statearr_30368[(21)] = inst_30322);

(statearr_30368[(20)] = inst_30321__$1);

return statearr_30368;
})();
if(cljs.core.truth_(inst_30323)){
var statearr_30369_30448 = state_30346__$1;
(statearr_30369_30448[(1)] = (41));

} else {
var statearr_30370_30449 = state_30346__$1;
(statearr_30370_30449[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (33))){
var state_30346__$1 = state_30346;
var statearr_30371_30450 = state_30346__$1;
(statearr_30371_30450[(2)] = false);

(statearr_30371_30450[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (13))){
var inst_30219 = (state_30346[(22)]);
var inst_30223 = cljs.core.chunk_first.call(null,inst_30219);
var inst_30224 = cljs.core.chunk_rest.call(null,inst_30219);
var inst_30225 = cljs.core.count.call(null,inst_30223);
var inst_30206 = inst_30224;
var inst_30207 = inst_30223;
var inst_30208 = inst_30225;
var inst_30209 = (0);
var state_30346__$1 = (function (){var statearr_30372 = state_30346;
(statearr_30372[(7)] = inst_30209);

(statearr_30372[(8)] = inst_30208);

(statearr_30372[(9)] = inst_30206);

(statearr_30372[(10)] = inst_30207);

return statearr_30372;
})();
var statearr_30373_30451 = state_30346__$1;
(statearr_30373_30451[(2)] = null);

(statearr_30373_30451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (22))){
var inst_30262 = (state_30346[(23)]);
var inst_30259 = (state_30346[(19)]);
var inst_30263 = (state_30346[(24)]);
var inst_30267 = (state_30346[(25)]);
var inst_30262__$1 = (state_30346[(2)]);
var inst_30263__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30262__$1);
var inst_30264 = (function (){var all_files = inst_30259;
var res_SINGLEQUOTE_ = inst_30262__$1;
var res = inst_30263__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30262,inst_30259,inst_30263,inst_30267,inst_30262__$1,inst_30263__$1,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30188_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30188_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30262,inst_30259,inst_30263,inst_30267,inst_30262__$1,inst_30263__$1,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30265 = cljs.core.filter.call(null,inst_30264,inst_30262__$1);
var inst_30266 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30267__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30266);
var inst_30268 = cljs.core.not_empty.call(null,inst_30267__$1);
var state_30346__$1 = (function (){var statearr_30374 = state_30346;
(statearr_30374[(23)] = inst_30262__$1);

(statearr_30374[(24)] = inst_30263__$1);

(statearr_30374[(26)] = inst_30265);

(statearr_30374[(25)] = inst_30267__$1);

return statearr_30374;
})();
if(cljs.core.truth_(inst_30268)){
var statearr_30375_30452 = state_30346__$1;
(statearr_30375_30452[(1)] = (23));

} else {
var statearr_30376_30453 = state_30346__$1;
(statearr_30376_30453[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (36))){
var state_30346__$1 = state_30346;
var statearr_30377_30454 = state_30346__$1;
(statearr_30377_30454[(2)] = false);

(statearr_30377_30454[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (41))){
var inst_30321 = (state_30346[(20)]);
var inst_30325 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30326 = cljs.core.map.call(null,inst_30325,inst_30321);
var inst_30327 = cljs.core.pr_str.call(null,inst_30326);
var inst_30328 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30327)].join('');
var inst_30329 = figwheel.client.utils.log.call(null,inst_30328);
var state_30346__$1 = state_30346;
var statearr_30378_30455 = state_30346__$1;
(statearr_30378_30455[(2)] = inst_30329);

(statearr_30378_30455[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (43))){
var inst_30322 = (state_30346[(21)]);
var inst_30332 = (state_30346[(2)]);
var inst_30333 = cljs.core.not_empty.call(null,inst_30322);
var state_30346__$1 = (function (){var statearr_30379 = state_30346;
(statearr_30379[(27)] = inst_30332);

return statearr_30379;
})();
if(cljs.core.truth_(inst_30333)){
var statearr_30380_30456 = state_30346__$1;
(statearr_30380_30456[(1)] = (44));

} else {
var statearr_30381_30457 = state_30346__$1;
(statearr_30381_30457[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (29))){
var inst_30262 = (state_30346[(23)]);
var inst_30259 = (state_30346[(19)]);
var inst_30263 = (state_30346[(24)]);
var inst_30265 = (state_30346[(26)]);
var inst_30267 = (state_30346[(25)]);
var inst_30299 = (state_30346[(16)]);
var inst_30295 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30298 = (function (){var all_files = inst_30259;
var res_SINGLEQUOTE_ = inst_30262;
var res = inst_30263;
var files_not_loaded = inst_30265;
var dependencies_that_loaded = inst_30267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30299,inst_30295,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30297){
var map__30382 = p__30297;
var map__30382__$1 = ((((!((map__30382 == null)))?(((((map__30382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30382):map__30382);
var namespace = cljs.core.get.call(null,map__30382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30299,inst_30295,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30299__$1 = cljs.core.group_by.call(null,inst_30298,inst_30265);
var inst_30301 = (inst_30299__$1 == null);
var inst_30302 = cljs.core.not.call(null,inst_30301);
var state_30346__$1 = (function (){var statearr_30384 = state_30346;
(statearr_30384[(16)] = inst_30299__$1);

(statearr_30384[(28)] = inst_30295);

return statearr_30384;
})();
if(inst_30302){
var statearr_30385_30458 = state_30346__$1;
(statearr_30385_30458[(1)] = (32));

} else {
var statearr_30386_30459 = state_30346__$1;
(statearr_30386_30459[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (44))){
var inst_30322 = (state_30346[(21)]);
var inst_30335 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30322);
var inst_30336 = cljs.core.pr_str.call(null,inst_30335);
var inst_30337 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30336)].join('');
var inst_30338 = figwheel.client.utils.log.call(null,inst_30337);
var state_30346__$1 = state_30346;
var statearr_30387_30460 = state_30346__$1;
(statearr_30387_30460[(2)] = inst_30338);

(statearr_30387_30460[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (6))){
var inst_30240 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30388_30461 = state_30346__$1;
(statearr_30388_30461[(2)] = inst_30240);

(statearr_30388_30461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (28))){
var inst_30265 = (state_30346[(26)]);
var inst_30292 = (state_30346[(2)]);
var inst_30293 = cljs.core.not_empty.call(null,inst_30265);
var state_30346__$1 = (function (){var statearr_30389 = state_30346;
(statearr_30389[(29)] = inst_30292);

return statearr_30389;
})();
if(cljs.core.truth_(inst_30293)){
var statearr_30390_30462 = state_30346__$1;
(statearr_30390_30462[(1)] = (29));

} else {
var statearr_30391_30463 = state_30346__$1;
(statearr_30391_30463[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (25))){
var inst_30263 = (state_30346[(24)]);
var inst_30279 = (state_30346[(2)]);
var inst_30280 = cljs.core.not_empty.call(null,inst_30263);
var state_30346__$1 = (function (){var statearr_30392 = state_30346;
(statearr_30392[(30)] = inst_30279);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30280)){
var statearr_30393_30464 = state_30346__$1;
(statearr_30393_30464[(1)] = (26));

} else {
var statearr_30394_30465 = state_30346__$1;
(statearr_30394_30465[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (34))){
var inst_30315 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30315)){
var statearr_30395_30466 = state_30346__$1;
(statearr_30395_30466[(1)] = (38));

} else {
var statearr_30396_30467 = state_30346__$1;
(statearr_30396_30467[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (17))){
var state_30346__$1 = state_30346;
var statearr_30397_30468 = state_30346__$1;
(statearr_30397_30468[(2)] = recompile_dependents);

(statearr_30397_30468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (3))){
var state_30346__$1 = state_30346;
var statearr_30398_30469 = state_30346__$1;
(statearr_30398_30469[(2)] = null);

(statearr_30398_30469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (12))){
var inst_30236 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30399_30470 = state_30346__$1;
(statearr_30399_30470[(2)] = inst_30236);

(statearr_30399_30470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (2))){
var inst_30198 = (state_30346[(13)]);
var inst_30205 = cljs.core.seq.call(null,inst_30198);
var inst_30206 = inst_30205;
var inst_30207 = null;
var inst_30208 = (0);
var inst_30209 = (0);
var state_30346__$1 = (function (){var statearr_30400 = state_30346;
(statearr_30400[(7)] = inst_30209);

(statearr_30400[(8)] = inst_30208);

(statearr_30400[(9)] = inst_30206);

(statearr_30400[(10)] = inst_30207);

return statearr_30400;
})();
var statearr_30401_30471 = state_30346__$1;
(statearr_30401_30471[(2)] = null);

(statearr_30401_30471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (23))){
var inst_30262 = (state_30346[(23)]);
var inst_30259 = (state_30346[(19)]);
var inst_30263 = (state_30346[(24)]);
var inst_30265 = (state_30346[(26)]);
var inst_30267 = (state_30346[(25)]);
var inst_30270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30272 = (function (){var all_files = inst_30259;
var res_SINGLEQUOTE_ = inst_30262;
var res = inst_30263;
var files_not_loaded = inst_30265;
var dependencies_that_loaded = inst_30267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30270,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30271){
var map__30402 = p__30271;
var map__30402__$1 = ((((!((map__30402 == null)))?(((((map__30402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30402):map__30402);
var request_url = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30270,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30273 = cljs.core.reverse.call(null,inst_30267);
var inst_30274 = cljs.core.map.call(null,inst_30272,inst_30273);
var inst_30275 = cljs.core.pr_str.call(null,inst_30274);
var inst_30276 = figwheel.client.utils.log.call(null,inst_30275);
var state_30346__$1 = (function (){var statearr_30404 = state_30346;
(statearr_30404[(31)] = inst_30270);

return statearr_30404;
})();
var statearr_30405_30472 = state_30346__$1;
(statearr_30405_30472[(2)] = inst_30276);

(statearr_30405_30472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (35))){
var state_30346__$1 = state_30346;
var statearr_30406_30473 = state_30346__$1;
(statearr_30406_30473[(2)] = true);

(statearr_30406_30473[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (19))){
var inst_30249 = (state_30346[(12)]);
var inst_30255 = figwheel.client.file_reloading.expand_files.call(null,inst_30249);
var state_30346__$1 = state_30346;
var statearr_30407_30474 = state_30346__$1;
(statearr_30407_30474[(2)] = inst_30255);

(statearr_30407_30474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (11))){
var state_30346__$1 = state_30346;
var statearr_30408_30475 = state_30346__$1;
(statearr_30408_30475[(2)] = null);

(statearr_30408_30475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (9))){
var inst_30238 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30409_30476 = state_30346__$1;
(statearr_30409_30476[(2)] = inst_30238);

(statearr_30409_30476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (5))){
var inst_30209 = (state_30346[(7)]);
var inst_30208 = (state_30346[(8)]);
var inst_30211 = (inst_30209 < inst_30208);
var inst_30212 = inst_30211;
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30212)){
var statearr_30410_30477 = state_30346__$1;
(statearr_30410_30477[(1)] = (7));

} else {
var statearr_30411_30478 = state_30346__$1;
(statearr_30411_30478[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (14))){
var inst_30219 = (state_30346[(22)]);
var inst_30228 = cljs.core.first.call(null,inst_30219);
var inst_30229 = figwheel.client.file_reloading.eval_body.call(null,inst_30228,opts);
var inst_30230 = cljs.core.next.call(null,inst_30219);
var inst_30206 = inst_30230;
var inst_30207 = null;
var inst_30208 = (0);
var inst_30209 = (0);
var state_30346__$1 = (function (){var statearr_30412 = state_30346;
(statearr_30412[(7)] = inst_30209);

(statearr_30412[(8)] = inst_30208);

(statearr_30412[(9)] = inst_30206);

(statearr_30412[(32)] = inst_30229);

(statearr_30412[(10)] = inst_30207);

return statearr_30412;
})();
var statearr_30413_30479 = state_30346__$1;
(statearr_30413_30479[(2)] = null);

(statearr_30413_30479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (45))){
var state_30346__$1 = state_30346;
var statearr_30414_30480 = state_30346__$1;
(statearr_30414_30480[(2)] = null);

(statearr_30414_30480[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (26))){
var inst_30262 = (state_30346[(23)]);
var inst_30259 = (state_30346[(19)]);
var inst_30263 = (state_30346[(24)]);
var inst_30265 = (state_30346[(26)]);
var inst_30267 = (state_30346[(25)]);
var inst_30282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30284 = (function (){var all_files = inst_30259;
var res_SINGLEQUOTE_ = inst_30262;
var res = inst_30263;
var files_not_loaded = inst_30265;
var dependencies_that_loaded = inst_30267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30282,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30283){
var map__30415 = p__30283;
var map__30415__$1 = ((((!((map__30415 == null)))?(((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var namespace = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30282,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30285 = cljs.core.map.call(null,inst_30284,inst_30263);
var inst_30286 = cljs.core.pr_str.call(null,inst_30285);
var inst_30287 = figwheel.client.utils.log.call(null,inst_30286);
var inst_30288 = (function (){var all_files = inst_30259;
var res_SINGLEQUOTE_ = inst_30262;
var res = inst_30263;
var files_not_loaded = inst_30265;
var dependencies_that_loaded = inst_30267;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30282,inst_30284,inst_30285,inst_30286,inst_30287,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30262,inst_30259,inst_30263,inst_30265,inst_30267,inst_30282,inst_30284,inst_30285,inst_30286,inst_30287,state_val_30347,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30289 = setTimeout(inst_30288,(10));
var state_30346__$1 = (function (){var statearr_30417 = state_30346;
(statearr_30417[(33)] = inst_30287);

(statearr_30417[(34)] = inst_30282);

return statearr_30417;
})();
var statearr_30418_30481 = state_30346__$1;
(statearr_30418_30481[(2)] = inst_30289);

(statearr_30418_30481[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (16))){
var state_30346__$1 = state_30346;
var statearr_30419_30482 = state_30346__$1;
(statearr_30419_30482[(2)] = reload_dependents);

(statearr_30419_30482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (38))){
var inst_30299 = (state_30346[(16)]);
var inst_30317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30299);
var state_30346__$1 = state_30346;
var statearr_30420_30483 = state_30346__$1;
(statearr_30420_30483[(2)] = inst_30317);

(statearr_30420_30483[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (30))){
var state_30346__$1 = state_30346;
var statearr_30421_30484 = state_30346__$1;
(statearr_30421_30484[(2)] = null);

(statearr_30421_30484[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (10))){
var inst_30219 = (state_30346[(22)]);
var inst_30221 = cljs.core.chunked_seq_QMARK_.call(null,inst_30219);
var state_30346__$1 = state_30346;
if(inst_30221){
var statearr_30422_30485 = state_30346__$1;
(statearr_30422_30485[(1)] = (13));

} else {
var statearr_30423_30486 = state_30346__$1;
(statearr_30423_30486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (18))){
var inst_30253 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30253)){
var statearr_30424_30487 = state_30346__$1;
(statearr_30424_30487[(1)] = (19));

} else {
var statearr_30425_30488 = state_30346__$1;
(statearr_30425_30488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (42))){
var state_30346__$1 = state_30346;
var statearr_30426_30489 = state_30346__$1;
(statearr_30426_30489[(2)] = null);

(statearr_30426_30489[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (37))){
var inst_30312 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30427_30490 = state_30346__$1;
(statearr_30427_30490[(2)] = inst_30312);

(statearr_30427_30490[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (8))){
var inst_30219 = (state_30346[(22)]);
var inst_30206 = (state_30346[(9)]);
var inst_30219__$1 = cljs.core.seq.call(null,inst_30206);
var state_30346__$1 = (function (){var statearr_30428 = state_30346;
(statearr_30428[(22)] = inst_30219__$1);

return statearr_30428;
})();
if(inst_30219__$1){
var statearr_30429_30491 = state_30346__$1;
(statearr_30429_30491[(1)] = (10));

} else {
var statearr_30430_30492 = state_30346__$1;
(statearr_30430_30492[(1)] = (11));

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
});})(c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27666__auto__,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____0 = (function (){
var statearr_30431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30431[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__);

(statearr_30431[(1)] = (1));

return statearr_30431;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____1 = (function (state_30346){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_30346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e30432){if((e30432 instanceof Object)){
var ex__27670__auto__ = e30432;
var statearr_30433_30493 = state_30346;
(statearr_30433_30493[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30494 = state_30346;
state_30346 = G__30494;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__ = function(state_30346){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____1.call(this,state_30346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27756__auto__ = (function (){var statearr_30434 = f__27755__auto__.call(null);
(statearr_30434[(6)] = c__27754__auto__);

return statearr_30434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__,map__30191,map__30191__$1,opts,before_jsload,on_jsload,reload_dependents,map__30192,map__30192__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27754__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30497,link){
var map__30498 = p__30497;
var map__30498__$1 = ((((!((map__30498 == null)))?(((((map__30498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30498):map__30498);
var file = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30498,map__30498__$1,file){
return (function (p1__30495_SHARP_,p2__30496_SHARP_){
if(cljs.core._EQ_.call(null,p1__30495_SHARP_,p2__30496_SHARP_)){
return p1__30495_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30498,map__30498__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30501){
var map__30502 = p__30501;
var map__30502__$1 = ((((!((map__30502 == null)))?(((((map__30502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30502):map__30502);
var match_length = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30500_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30500_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30504_SHARP_,p2__30505_SHARP_){
return cljs.core.assoc.call(null,p1__30504_SHARP_,cljs.core.get.call(null,p2__30505_SHARP_,key),p2__30505_SHARP_);
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
var loaded_f_datas_30506 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30506);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30506);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30507,p__30508){
var map__30509 = p__30507;
var map__30509__$1 = ((((!((map__30509 == null)))?(((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var on_cssload = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30510 = p__30508;
var map__30510__$1 = ((((!((map__30510 == null)))?(((((map__30510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30510):map__30510);
var files_msg = map__30510__$1;
var files = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1532367480336
