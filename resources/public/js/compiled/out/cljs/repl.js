// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29533){
var map__29534 = p__29533;
var map__29534__$1 = ((((!((map__29534 == null)))?(((((map__29534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29534):map__29534);
var m = map__29534__$1;
var n = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29536_29558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29537_29559 = null;
var count__29538_29560 = (0);
var i__29539_29561 = (0);
while(true){
if((i__29539_29561 < count__29538_29560)){
var f_29562 = cljs.core._nth.call(null,chunk__29537_29559,i__29539_29561);
cljs.core.println.call(null,"  ",f_29562);


var G__29563 = seq__29536_29558;
var G__29564 = chunk__29537_29559;
var G__29565 = count__29538_29560;
var G__29566 = (i__29539_29561 + (1));
seq__29536_29558 = G__29563;
chunk__29537_29559 = G__29564;
count__29538_29560 = G__29565;
i__29539_29561 = G__29566;
continue;
} else {
var temp__4657__auto___29567 = cljs.core.seq.call(null,seq__29536_29558);
if(temp__4657__auto___29567){
var seq__29536_29568__$1 = temp__4657__auto___29567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29536_29568__$1)){
var c__4319__auto___29569 = cljs.core.chunk_first.call(null,seq__29536_29568__$1);
var G__29570 = cljs.core.chunk_rest.call(null,seq__29536_29568__$1);
var G__29571 = c__4319__auto___29569;
var G__29572 = cljs.core.count.call(null,c__4319__auto___29569);
var G__29573 = (0);
seq__29536_29558 = G__29570;
chunk__29537_29559 = G__29571;
count__29538_29560 = G__29572;
i__29539_29561 = G__29573;
continue;
} else {
var f_29574 = cljs.core.first.call(null,seq__29536_29568__$1);
cljs.core.println.call(null,"  ",f_29574);


var G__29575 = cljs.core.next.call(null,seq__29536_29568__$1);
var G__29576 = null;
var G__29577 = (0);
var G__29578 = (0);
seq__29536_29558 = G__29575;
chunk__29537_29559 = G__29576;
count__29538_29560 = G__29577;
i__29539_29561 = G__29578;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29579 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29579);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29579)))?cljs.core.second.call(null,arglists_29579):arglists_29579));
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
var seq__29540_29580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29541_29581 = null;
var count__29542_29582 = (0);
var i__29543_29583 = (0);
while(true){
if((i__29543_29583 < count__29542_29582)){
var vec__29544_29584 = cljs.core._nth.call(null,chunk__29541_29581,i__29543_29583);
var name_29585 = cljs.core.nth.call(null,vec__29544_29584,(0),null);
var map__29547_29586 = cljs.core.nth.call(null,vec__29544_29584,(1),null);
var map__29547_29587__$1 = ((((!((map__29547_29586 == null)))?(((((map__29547_29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29547_29586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29547_29586):map__29547_29586);
var doc_29588 = cljs.core.get.call(null,map__29547_29587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29589 = cljs.core.get.call(null,map__29547_29587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29585);

cljs.core.println.call(null," ",arglists_29589);

if(cljs.core.truth_(doc_29588)){
cljs.core.println.call(null," ",doc_29588);
} else {
}


var G__29590 = seq__29540_29580;
var G__29591 = chunk__29541_29581;
var G__29592 = count__29542_29582;
var G__29593 = (i__29543_29583 + (1));
seq__29540_29580 = G__29590;
chunk__29541_29581 = G__29591;
count__29542_29582 = G__29592;
i__29543_29583 = G__29593;
continue;
} else {
var temp__4657__auto___29594 = cljs.core.seq.call(null,seq__29540_29580);
if(temp__4657__auto___29594){
var seq__29540_29595__$1 = temp__4657__auto___29594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29540_29595__$1)){
var c__4319__auto___29596 = cljs.core.chunk_first.call(null,seq__29540_29595__$1);
var G__29597 = cljs.core.chunk_rest.call(null,seq__29540_29595__$1);
var G__29598 = c__4319__auto___29596;
var G__29599 = cljs.core.count.call(null,c__4319__auto___29596);
var G__29600 = (0);
seq__29540_29580 = G__29597;
chunk__29541_29581 = G__29598;
count__29542_29582 = G__29599;
i__29543_29583 = G__29600;
continue;
} else {
var vec__29549_29601 = cljs.core.first.call(null,seq__29540_29595__$1);
var name_29602 = cljs.core.nth.call(null,vec__29549_29601,(0),null);
var map__29552_29603 = cljs.core.nth.call(null,vec__29549_29601,(1),null);
var map__29552_29604__$1 = ((((!((map__29552_29603 == null)))?(((((map__29552_29603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552_29603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29552_29603):map__29552_29603);
var doc_29605 = cljs.core.get.call(null,map__29552_29604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29606 = cljs.core.get.call(null,map__29552_29604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29602);

cljs.core.println.call(null," ",arglists_29606);

if(cljs.core.truth_(doc_29605)){
cljs.core.println.call(null," ",doc_29605);
} else {
}


var G__29607 = cljs.core.next.call(null,seq__29540_29595__$1);
var G__29608 = null;
var G__29609 = (0);
var G__29610 = (0);
seq__29540_29580 = G__29607;
chunk__29541_29581 = G__29608;
count__29542_29582 = G__29609;
i__29543_29583 = G__29610;
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

var seq__29554 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29555 = null;
var count__29556 = (0);
var i__29557 = (0);
while(true){
if((i__29557 < count__29556)){
var role = cljs.core._nth.call(null,chunk__29555,i__29557);
var temp__4657__auto___29611__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29611__$1)){
var spec_29612 = temp__4657__auto___29611__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29612));
} else {
}


var G__29613 = seq__29554;
var G__29614 = chunk__29555;
var G__29615 = count__29556;
var G__29616 = (i__29557 + (1));
seq__29554 = G__29613;
chunk__29555 = G__29614;
count__29556 = G__29615;
i__29557 = G__29616;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29554);
if(temp__4657__auto____$1){
var seq__29554__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29554__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29554__$1);
var G__29617 = cljs.core.chunk_rest.call(null,seq__29554__$1);
var G__29618 = c__4319__auto__;
var G__29619 = cljs.core.count.call(null,c__4319__auto__);
var G__29620 = (0);
seq__29554 = G__29617;
chunk__29555 = G__29618;
count__29556 = G__29619;
i__29557 = G__29620;
continue;
} else {
var role = cljs.core.first.call(null,seq__29554__$1);
var temp__4657__auto___29621__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29621__$2)){
var spec_29622 = temp__4657__auto___29621__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29622));
} else {
}


var G__29623 = cljs.core.next.call(null,seq__29554__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__29554 = G__29623;
chunk__29555 = G__29624;
count__29556 = G__29625;
i__29557 = G__29626;
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

//# sourceMappingURL=repl.js.map?rel=1532452540610
