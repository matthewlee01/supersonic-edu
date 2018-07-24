// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24485){
var map__24486 = p__24485;
var map__24486__$1 = ((((!((map__24486 == null)))?(((((map__24486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24486):map__24486);
var m = map__24486__$1;
var n = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24488_24510 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24489_24511 = null;
var count__24490_24512 = (0);
var i__24491_24513 = (0);
while(true){
if((i__24491_24513 < count__24490_24512)){
var f_24514 = cljs.core._nth.call(null,chunk__24489_24511,i__24491_24513);
cljs.core.println.call(null,"  ",f_24514);


var G__24515 = seq__24488_24510;
var G__24516 = chunk__24489_24511;
var G__24517 = count__24490_24512;
var G__24518 = (i__24491_24513 + (1));
seq__24488_24510 = G__24515;
chunk__24489_24511 = G__24516;
count__24490_24512 = G__24517;
i__24491_24513 = G__24518;
continue;
} else {
var temp__4657__auto___24519 = cljs.core.seq.call(null,seq__24488_24510);
if(temp__4657__auto___24519){
var seq__24488_24520__$1 = temp__4657__auto___24519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24488_24520__$1)){
var c__4319__auto___24521 = cljs.core.chunk_first.call(null,seq__24488_24520__$1);
var G__24522 = cljs.core.chunk_rest.call(null,seq__24488_24520__$1);
var G__24523 = c__4319__auto___24521;
var G__24524 = cljs.core.count.call(null,c__4319__auto___24521);
var G__24525 = (0);
seq__24488_24510 = G__24522;
chunk__24489_24511 = G__24523;
count__24490_24512 = G__24524;
i__24491_24513 = G__24525;
continue;
} else {
var f_24526 = cljs.core.first.call(null,seq__24488_24520__$1);
cljs.core.println.call(null,"  ",f_24526);


var G__24527 = cljs.core.next.call(null,seq__24488_24520__$1);
var G__24528 = null;
var G__24529 = (0);
var G__24530 = (0);
seq__24488_24510 = G__24527;
chunk__24489_24511 = G__24528;
count__24490_24512 = G__24529;
i__24491_24513 = G__24530;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24531 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24531);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24531)))?cljs.core.second.call(null,arglists_24531):arglists_24531));
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
var seq__24492_24532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24493_24533 = null;
var count__24494_24534 = (0);
var i__24495_24535 = (0);
while(true){
if((i__24495_24535 < count__24494_24534)){
var vec__24496_24536 = cljs.core._nth.call(null,chunk__24493_24533,i__24495_24535);
var name_24537 = cljs.core.nth.call(null,vec__24496_24536,(0),null);
var map__24499_24538 = cljs.core.nth.call(null,vec__24496_24536,(1),null);
var map__24499_24539__$1 = ((((!((map__24499_24538 == null)))?(((((map__24499_24538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24499_24538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499_24538):map__24499_24538);
var doc_24540 = cljs.core.get.call(null,map__24499_24539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24541 = cljs.core.get.call(null,map__24499_24539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24537);

cljs.core.println.call(null," ",arglists_24541);

if(cljs.core.truth_(doc_24540)){
cljs.core.println.call(null," ",doc_24540);
} else {
}


var G__24542 = seq__24492_24532;
var G__24543 = chunk__24493_24533;
var G__24544 = count__24494_24534;
var G__24545 = (i__24495_24535 + (1));
seq__24492_24532 = G__24542;
chunk__24493_24533 = G__24543;
count__24494_24534 = G__24544;
i__24495_24535 = G__24545;
continue;
} else {
var temp__4657__auto___24546 = cljs.core.seq.call(null,seq__24492_24532);
if(temp__4657__auto___24546){
var seq__24492_24547__$1 = temp__4657__auto___24546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24492_24547__$1)){
var c__4319__auto___24548 = cljs.core.chunk_first.call(null,seq__24492_24547__$1);
var G__24549 = cljs.core.chunk_rest.call(null,seq__24492_24547__$1);
var G__24550 = c__4319__auto___24548;
var G__24551 = cljs.core.count.call(null,c__4319__auto___24548);
var G__24552 = (0);
seq__24492_24532 = G__24549;
chunk__24493_24533 = G__24550;
count__24494_24534 = G__24551;
i__24495_24535 = G__24552;
continue;
} else {
var vec__24501_24553 = cljs.core.first.call(null,seq__24492_24547__$1);
var name_24554 = cljs.core.nth.call(null,vec__24501_24553,(0),null);
var map__24504_24555 = cljs.core.nth.call(null,vec__24501_24553,(1),null);
var map__24504_24556__$1 = ((((!((map__24504_24555 == null)))?(((((map__24504_24555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24504_24555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24504_24555):map__24504_24555);
var doc_24557 = cljs.core.get.call(null,map__24504_24556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24558 = cljs.core.get.call(null,map__24504_24556__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24554);

cljs.core.println.call(null," ",arglists_24558);

if(cljs.core.truth_(doc_24557)){
cljs.core.println.call(null," ",doc_24557);
} else {
}


var G__24559 = cljs.core.next.call(null,seq__24492_24547__$1);
var G__24560 = null;
var G__24561 = (0);
var G__24562 = (0);
seq__24492_24532 = G__24559;
chunk__24493_24533 = G__24560;
count__24494_24534 = G__24561;
i__24495_24535 = G__24562;
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

var seq__24506 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24507 = null;
var count__24508 = (0);
var i__24509 = (0);
while(true){
if((i__24509 < count__24508)){
var role = cljs.core._nth.call(null,chunk__24507,i__24509);
var temp__4657__auto___24563__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24563__$1)){
var spec_24564 = temp__4657__auto___24563__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24564));
} else {
}


var G__24565 = seq__24506;
var G__24566 = chunk__24507;
var G__24567 = count__24508;
var G__24568 = (i__24509 + (1));
seq__24506 = G__24565;
chunk__24507 = G__24566;
count__24508 = G__24567;
i__24509 = G__24568;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__24506);
if(temp__4657__auto____$1){
var seq__24506__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24506__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24506__$1);
var G__24569 = cljs.core.chunk_rest.call(null,seq__24506__$1);
var G__24570 = c__4319__auto__;
var G__24571 = cljs.core.count.call(null,c__4319__auto__);
var G__24572 = (0);
seq__24506 = G__24569;
chunk__24507 = G__24570;
count__24508 = G__24571;
i__24509 = G__24572;
continue;
} else {
var role = cljs.core.first.call(null,seq__24506__$1);
var temp__4657__auto___24573__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24573__$2)){
var spec_24574 = temp__4657__auto___24573__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24574));
} else {
}


var G__24575 = cljs.core.next.call(null,seq__24506__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__24506 = G__24575;
chunk__24507 = G__24576;
count__24508 = G__24577;
i__24509 = G__24578;
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

//# sourceMappingURL=repl.js.map?rel=1532367331597
