// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37718){
var map__37719 = p__37718;
var map__37719__$1 = ((((!((map__37719 == null)))?(((((map__37719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719):map__37719);
var m = map__37719__$1;
var n = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37721_37743 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37722_37744 = null;
var count__37723_37745 = (0);
var i__37724_37746 = (0);
while(true){
if((i__37724_37746 < count__37723_37745)){
var f_37747 = cljs.core._nth.call(null,chunk__37722_37744,i__37724_37746);
cljs.core.println.call(null,"  ",f_37747);


var G__37748 = seq__37721_37743;
var G__37749 = chunk__37722_37744;
var G__37750 = count__37723_37745;
var G__37751 = (i__37724_37746 + (1));
seq__37721_37743 = G__37748;
chunk__37722_37744 = G__37749;
count__37723_37745 = G__37750;
i__37724_37746 = G__37751;
continue;
} else {
var temp__4657__auto___37752 = cljs.core.seq.call(null,seq__37721_37743);
if(temp__4657__auto___37752){
var seq__37721_37753__$1 = temp__4657__auto___37752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37721_37753__$1)){
var c__4319__auto___37754 = cljs.core.chunk_first.call(null,seq__37721_37753__$1);
var G__37755 = cljs.core.chunk_rest.call(null,seq__37721_37753__$1);
var G__37756 = c__4319__auto___37754;
var G__37757 = cljs.core.count.call(null,c__4319__auto___37754);
var G__37758 = (0);
seq__37721_37743 = G__37755;
chunk__37722_37744 = G__37756;
count__37723_37745 = G__37757;
i__37724_37746 = G__37758;
continue;
} else {
var f_37759 = cljs.core.first.call(null,seq__37721_37753__$1);
cljs.core.println.call(null,"  ",f_37759);


var G__37760 = cljs.core.next.call(null,seq__37721_37753__$1);
var G__37761 = null;
var G__37762 = (0);
var G__37763 = (0);
seq__37721_37743 = G__37760;
chunk__37722_37744 = G__37761;
count__37723_37745 = G__37762;
i__37724_37746 = G__37763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37764);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37764)))?cljs.core.second.call(null,arglists_37764):arglists_37764));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37725_37765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37726_37766 = null;
var count__37727_37767 = (0);
var i__37728_37768 = (0);
while(true){
if((i__37728_37768 < count__37727_37767)){
var vec__37729_37769 = cljs.core._nth.call(null,chunk__37726_37766,i__37728_37768);
var name_37770 = cljs.core.nth.call(null,vec__37729_37769,(0),null);
var map__37732_37771 = cljs.core.nth.call(null,vec__37729_37769,(1),null);
var map__37732_37772__$1 = ((((!((map__37732_37771 == null)))?(((((map__37732_37771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37732_37771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37732_37771):map__37732_37771);
var doc_37773 = cljs.core.get.call(null,map__37732_37772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37774 = cljs.core.get.call(null,map__37732_37772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37770);

cljs.core.println.call(null," ",arglists_37774);

if(cljs.core.truth_(doc_37773)){
cljs.core.println.call(null," ",doc_37773);
} else {
}


var G__37775 = seq__37725_37765;
var G__37776 = chunk__37726_37766;
var G__37777 = count__37727_37767;
var G__37778 = (i__37728_37768 + (1));
seq__37725_37765 = G__37775;
chunk__37726_37766 = G__37776;
count__37727_37767 = G__37777;
i__37728_37768 = G__37778;
continue;
} else {
var temp__4657__auto___37779 = cljs.core.seq.call(null,seq__37725_37765);
if(temp__4657__auto___37779){
var seq__37725_37780__$1 = temp__4657__auto___37779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37725_37780__$1)){
var c__4319__auto___37781 = cljs.core.chunk_first.call(null,seq__37725_37780__$1);
var G__37782 = cljs.core.chunk_rest.call(null,seq__37725_37780__$1);
var G__37783 = c__4319__auto___37781;
var G__37784 = cljs.core.count.call(null,c__4319__auto___37781);
var G__37785 = (0);
seq__37725_37765 = G__37782;
chunk__37726_37766 = G__37783;
count__37727_37767 = G__37784;
i__37728_37768 = G__37785;
continue;
} else {
var vec__37734_37786 = cljs.core.first.call(null,seq__37725_37780__$1);
var name_37787 = cljs.core.nth.call(null,vec__37734_37786,(0),null);
var map__37737_37788 = cljs.core.nth.call(null,vec__37734_37786,(1),null);
var map__37737_37789__$1 = ((((!((map__37737_37788 == null)))?(((((map__37737_37788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737_37788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37737_37788):map__37737_37788);
var doc_37790 = cljs.core.get.call(null,map__37737_37789__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37791 = cljs.core.get.call(null,map__37737_37789__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37787);

cljs.core.println.call(null," ",arglists_37791);

if(cljs.core.truth_(doc_37790)){
cljs.core.println.call(null," ",doc_37790);
} else {
}


var G__37792 = cljs.core.next.call(null,seq__37725_37780__$1);
var G__37793 = null;
var G__37794 = (0);
var G__37795 = (0);
seq__37725_37765 = G__37792;
chunk__37726_37766 = G__37793;
count__37727_37767 = G__37794;
i__37728_37768 = G__37795;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37739 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37740 = null;
var count__37741 = (0);
var i__37742 = (0);
while(true){
if((i__37742 < count__37741)){
var role = cljs.core._nth.call(null,chunk__37740,i__37742);
var temp__4657__auto___37796__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37796__$1)){
var spec_37797 = temp__4657__auto___37796__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37797));
} else {
}


var G__37798 = seq__37739;
var G__37799 = chunk__37740;
var G__37800 = count__37741;
var G__37801 = (i__37742 + (1));
seq__37739 = G__37798;
chunk__37740 = G__37799;
count__37741 = G__37800;
i__37742 = G__37801;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37739);
if(temp__4657__auto____$1){
var seq__37739__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37739__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37739__$1);
var G__37802 = cljs.core.chunk_rest.call(null,seq__37739__$1);
var G__37803 = c__4319__auto__;
var G__37804 = cljs.core.count.call(null,c__4319__auto__);
var G__37805 = (0);
seq__37739 = G__37802;
chunk__37740 = G__37803;
count__37741 = G__37804;
i__37742 = G__37805;
continue;
} else {
var role = cljs.core.first.call(null,seq__37739__$1);
var temp__4657__auto___37806__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37806__$2)){
var spec_37807 = temp__4657__auto___37806__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37807));
} else {
}


var G__37808 = cljs.core.next.call(null,seq__37739__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37739 = G__37808;
chunk__37740 = G__37809;
count__37741 = G__37810;
i__37742 = G__37811;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1532451311708
