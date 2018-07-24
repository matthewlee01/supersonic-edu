// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42378 = arguments.length;
switch (G__42378) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42379 = (function (f,blockable,meta42380){
this.f = f;
this.blockable = blockable;
this.meta42380 = meta42380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42381,meta42380__$1){
var self__ = this;
var _42381__$1 = this;
return (new cljs.core.async.t_cljs$core$async42379(self__.f,self__.blockable,meta42380__$1));
});

cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42381){
var self__ = this;
var _42381__$1 = this;
return self__.meta42380;
});

cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42380","meta42380",-1848592034,null)], null);
});

cljs.core.async.t_cljs$core$async42379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42379";

cljs.core.async.t_cljs$core$async42379.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async42379");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42379.
 */
cljs.core.async.__GT_t_cljs$core$async42379 = (function cljs$core$async$__GT_t_cljs$core$async42379(f__$1,blockable__$1,meta42380){
return (new cljs.core.async.t_cljs$core$async42379(f__$1,blockable__$1,meta42380));
});

}

return (new cljs.core.async.t_cljs$core$async42379(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42385 = arguments.length;
switch (G__42385) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42388 = arguments.length;
switch (G__42388) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42391 = arguments.length;
switch (G__42391) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42393,ret){
return (function (){
return fn1.call(null,val_42393);
});})(val_42393,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42395 = arguments.length;
switch (G__42395) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___42397 = n;
var x_42398 = (0);
while(true){
if((x_42398 < n__4376__auto___42397)){
(a[x_42398] = (0));

var G__42399 = (x_42398 + (1));
x_42398 = G__42399;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__42400 = (i + (1));
i = G__42400;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42401 = (function (flag,meta42402){
this.flag = flag;
this.meta42402 = meta42402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42403,meta42402__$1){
var self__ = this;
var _42403__$1 = this;
return (new cljs.core.async.t_cljs$core$async42401(self__.flag,meta42402__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42403){
var self__ = this;
var _42403__$1 = this;
return self__.meta42402;
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42402","meta42402",-1219829831,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42401";

cljs.core.async.t_cljs$core$async42401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async42401");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42401.
 */
cljs.core.async.__GT_t_cljs$core$async42401 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42401(flag__$1,meta42402){
return (new cljs.core.async.t_cljs$core$async42401(flag__$1,meta42402));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42401(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42404 = (function (flag,cb,meta42405){
this.flag = flag;
this.cb = cb;
this.meta42405 = meta42405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42406,meta42405__$1){
var self__ = this;
var _42406__$1 = this;
return (new cljs.core.async.t_cljs$core$async42404(self__.flag,self__.cb,meta42405__$1));
});

cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42406){
var self__ = this;
var _42406__$1 = this;
return self__.meta42405;
});

cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42405","meta42405",-878184557,null)], null);
});

cljs.core.async.t_cljs$core$async42404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42404";

cljs.core.async.t_cljs$core$async42404.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async42404");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42404.
 */
cljs.core.async.__GT_t_cljs$core$async42404 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42404(flag__$1,cb__$1,meta42405){
return (new cljs.core.async.t_cljs$core$async42404(flag__$1,cb__$1,meta42405));
});

}

return (new cljs.core.async.t_cljs$core$async42404(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42407_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42408_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42409 = (i + (1));
i = G__42409;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42415 = arguments.length;
var i__4500__auto___42416 = (0);
while(true){
if((i__4500__auto___42416 < len__4499__auto___42415)){
args__4502__auto__.push((arguments[i__4500__auto___42416]));

var G__42417 = (i__4500__auto___42416 + (1));
i__4500__auto___42416 = G__42417;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42412){
var map__42413 = p__42412;
var map__42413__$1 = ((((!((map__42413 == null)))?(((((map__42413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42413):map__42413);
var opts = map__42413__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42410){
var G__42411 = cljs.core.first.call(null,seq42410);
var seq42410__$1 = cljs.core.next.call(null,seq42410);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42411,seq42410__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42419 = arguments.length;
switch (G__42419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22731__auto___42465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___42465){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___42465){
return (function (state_42443){
var state_val_42444 = (state_42443[(1)]);
if((state_val_42444 === (7))){
var inst_42439 = (state_42443[(2)]);
var state_42443__$1 = state_42443;
var statearr_42445_42466 = state_42443__$1;
(statearr_42445_42466[(2)] = inst_42439);

(statearr_42445_42466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (1))){
var state_42443__$1 = state_42443;
var statearr_42446_42467 = state_42443__$1;
(statearr_42446_42467[(2)] = null);

(statearr_42446_42467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (4))){
var inst_42422 = (state_42443[(7)]);
var inst_42422__$1 = (state_42443[(2)]);
var inst_42423 = (inst_42422__$1 == null);
var state_42443__$1 = (function (){var statearr_42447 = state_42443;
(statearr_42447[(7)] = inst_42422__$1);

return statearr_42447;
})();
if(cljs.core.truth_(inst_42423)){
var statearr_42448_42468 = state_42443__$1;
(statearr_42448_42468[(1)] = (5));

} else {
var statearr_42449_42469 = state_42443__$1;
(statearr_42449_42469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (13))){
var state_42443__$1 = state_42443;
var statearr_42450_42470 = state_42443__$1;
(statearr_42450_42470[(2)] = null);

(statearr_42450_42470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (6))){
var inst_42422 = (state_42443[(7)]);
var state_42443__$1 = state_42443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42443__$1,(11),to,inst_42422);
} else {
if((state_val_42444 === (3))){
var inst_42441 = (state_42443[(2)]);
var state_42443__$1 = state_42443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42443__$1,inst_42441);
} else {
if((state_val_42444 === (12))){
var state_42443__$1 = state_42443;
var statearr_42451_42471 = state_42443__$1;
(statearr_42451_42471[(2)] = null);

(statearr_42451_42471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (2))){
var state_42443__$1 = state_42443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42443__$1,(4),from);
} else {
if((state_val_42444 === (11))){
var inst_42432 = (state_42443[(2)]);
var state_42443__$1 = state_42443;
if(cljs.core.truth_(inst_42432)){
var statearr_42452_42472 = state_42443__$1;
(statearr_42452_42472[(1)] = (12));

} else {
var statearr_42453_42473 = state_42443__$1;
(statearr_42453_42473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (9))){
var state_42443__$1 = state_42443;
var statearr_42454_42474 = state_42443__$1;
(statearr_42454_42474[(2)] = null);

(statearr_42454_42474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (5))){
var state_42443__$1 = state_42443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42455_42475 = state_42443__$1;
(statearr_42455_42475[(1)] = (8));

} else {
var statearr_42456_42476 = state_42443__$1;
(statearr_42456_42476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (14))){
var inst_42437 = (state_42443[(2)]);
var state_42443__$1 = state_42443;
var statearr_42457_42477 = state_42443__$1;
(statearr_42457_42477[(2)] = inst_42437);

(statearr_42457_42477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (10))){
var inst_42429 = (state_42443[(2)]);
var state_42443__$1 = state_42443;
var statearr_42458_42478 = state_42443__$1;
(statearr_42458_42478[(2)] = inst_42429);

(statearr_42458_42478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42444 === (8))){
var inst_42426 = cljs.core.async.close_BANG_.call(null,to);
var state_42443__$1 = state_42443;
var statearr_42459_42479 = state_42443__$1;
(statearr_42459_42479[(2)] = inst_42426);

(statearr_42459_42479[(1)] = (10));


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
});})(c__22731__auto___42465))
;
return ((function (switch__22643__auto__,c__22731__auto___42465){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_42460 = [null,null,null,null,null,null,null,null];
(statearr_42460[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_42460[(1)] = (1));

return statearr_42460;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_42443){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42461){if((e42461 instanceof Object)){
var ex__22647__auto__ = e42461;
var statearr_42462_42480 = state_42443;
(statearr_42462_42480[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42481 = state_42443;
state_42443 = G__42481;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_42443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_42443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___42465))
})();
var state__22733__auto__ = (function (){var statearr_42463 = f__22732__auto__.call(null);
(statearr_42463[(6)] = c__22731__auto___42465);

return statearr_42463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___42465))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__42482){
var vec__42483 = p__42482;
var v = cljs.core.nth.call(null,vec__42483,(0),null);
var p = cljs.core.nth.call(null,vec__42483,(1),null);
var job = vec__42483;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22731__auto___42654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results){
return (function (state_42490){
var state_val_42491 = (state_42490[(1)]);
if((state_val_42491 === (1))){
var state_42490__$1 = state_42490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42490__$1,(2),res,v);
} else {
if((state_val_42491 === (2))){
var inst_42487 = (state_42490[(2)]);
var inst_42488 = cljs.core.async.close_BANG_.call(null,res);
var state_42490__$1 = (function (){var statearr_42492 = state_42490;
(statearr_42492[(7)] = inst_42487);

return statearr_42492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42490__$1,inst_42488);
} else {
return null;
}
}
});})(c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results))
;
return ((function (switch__22643__auto__,c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_42493 = [null,null,null,null,null,null,null,null];
(statearr_42493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__);

(statearr_42493[(1)] = (1));

return statearr_42493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1 = (function (state_42490){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42494){if((e42494 instanceof Object)){
var ex__22647__auto__ = e42494;
var statearr_42495_42655 = state_42490;
(statearr_42495_42655[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42656 = state_42490;
state_42490 = G__42656;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = function(state_42490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1.call(this,state_42490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results))
})();
var state__22733__auto__ = (function (){var statearr_42496 = f__22732__auto__.call(null);
(statearr_42496[(6)] = c__22731__auto___42654);

return statearr_42496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___42654,res,vec__42483,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__42497){
var vec__42498 = p__42497;
var v = cljs.core.nth.call(null,vec__42498,(0),null);
var p = cljs.core.nth.call(null,vec__42498,(1),null);
var job = vec__42498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___42657 = n;
var __42658 = (0);
while(true){
if((__42658 < n__4376__auto___42657)){
var G__42501_42659 = type;
var G__42501_42660__$1 = (((G__42501_42659 instanceof cljs.core.Keyword))?G__42501_42659.fqn:null);
switch (G__42501_42660__$1) {
case "compute":
var c__22731__auto___42662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42658,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (__42658,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function (state_42514){
var state_val_42515 = (state_42514[(1)]);
if((state_val_42515 === (1))){
var state_42514__$1 = state_42514;
var statearr_42516_42663 = state_42514__$1;
(statearr_42516_42663[(2)] = null);

(statearr_42516_42663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (2))){
var state_42514__$1 = state_42514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42514__$1,(4),jobs);
} else {
if((state_val_42515 === (3))){
var inst_42512 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42514__$1,inst_42512);
} else {
if((state_val_42515 === (4))){
var inst_42504 = (state_42514[(2)]);
var inst_42505 = process__$1.call(null,inst_42504);
var state_42514__$1 = state_42514;
if(cljs.core.truth_(inst_42505)){
var statearr_42517_42664 = state_42514__$1;
(statearr_42517_42664[(1)] = (5));

} else {
var statearr_42518_42665 = state_42514__$1;
(statearr_42518_42665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (5))){
var state_42514__$1 = state_42514;
var statearr_42519_42666 = state_42514__$1;
(statearr_42519_42666[(2)] = null);

(statearr_42519_42666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (6))){
var state_42514__$1 = state_42514;
var statearr_42520_42667 = state_42514__$1;
(statearr_42520_42667[(2)] = null);

(statearr_42520_42667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (7))){
var inst_42510 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42521_42668 = state_42514__$1;
(statearr_42521_42668[(2)] = inst_42510);

(statearr_42521_42668[(1)] = (3));


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
});})(__42658,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
;
return ((function (__42658,switch__22643__auto__,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_42522 = [null,null,null,null,null,null,null];
(statearr_42522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__);

(statearr_42522[(1)] = (1));

return statearr_42522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1 = (function (state_42514){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42523){if((e42523 instanceof Object)){
var ex__22647__auto__ = e42523;
var statearr_42524_42669 = state_42514;
(statearr_42524_42669[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42670 = state_42514;
state_42514 = G__42670;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = function(state_42514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1.call(this,state_42514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__;
})()
;})(__42658,switch__22643__auto__,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
})();
var state__22733__auto__ = (function (){var statearr_42525 = f__22732__auto__.call(null);
(statearr_42525[(6)] = c__22731__auto___42662);

return statearr_42525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(__42658,c__22731__auto___42662,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
);


break;
case "async":
var c__22731__auto___42671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42658,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (__42658,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function (state_42538){
var state_val_42539 = (state_42538[(1)]);
if((state_val_42539 === (1))){
var state_42538__$1 = state_42538;
var statearr_42540_42672 = state_42538__$1;
(statearr_42540_42672[(2)] = null);

(statearr_42540_42672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (2))){
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42538__$1,(4),jobs);
} else {
if((state_val_42539 === (3))){
var inst_42536 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42538__$1,inst_42536);
} else {
if((state_val_42539 === (4))){
var inst_42528 = (state_42538[(2)]);
var inst_42529 = async.call(null,inst_42528);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42529)){
var statearr_42541_42673 = state_42538__$1;
(statearr_42541_42673[(1)] = (5));

} else {
var statearr_42542_42674 = state_42538__$1;
(statearr_42542_42674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (5))){
var state_42538__$1 = state_42538;
var statearr_42543_42675 = state_42538__$1;
(statearr_42543_42675[(2)] = null);

(statearr_42543_42675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (6))){
var state_42538__$1 = state_42538;
var statearr_42544_42676 = state_42538__$1;
(statearr_42544_42676[(2)] = null);

(statearr_42544_42676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (7))){
var inst_42534 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42545_42677 = state_42538__$1;
(statearr_42545_42677[(2)] = inst_42534);

(statearr_42545_42677[(1)] = (3));


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
});})(__42658,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
;
return ((function (__42658,switch__22643__auto__,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_42546 = [null,null,null,null,null,null,null];
(statearr_42546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__);

(statearr_42546[(1)] = (1));

return statearr_42546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1 = (function (state_42538){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42547){if((e42547 instanceof Object)){
var ex__22647__auto__ = e42547;
var statearr_42548_42678 = state_42538;
(statearr_42548_42678[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42679 = state_42538;
state_42538 = G__42679;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = function(state_42538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1.call(this,state_42538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__;
})()
;})(__42658,switch__22643__auto__,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
})();
var state__22733__auto__ = (function (){var statearr_42549 = f__22732__auto__.call(null);
(statearr_42549[(6)] = c__22731__auto___42671);

return statearr_42549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(__42658,c__22731__auto___42671,G__42501_42659,G__42501_42660__$1,n__4376__auto___42657,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42501_42660__$1)].join('')));

}

var G__42680 = (__42658 + (1));
__42658 = G__42680;
continue;
} else {
}
break;
}

var c__22731__auto___42681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___42681,jobs,results,process__$1,async){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___42681,jobs,results,process__$1,async){
return (function (state_42571){
var state_val_42572 = (state_42571[(1)]);
if((state_val_42572 === (1))){
var state_42571__$1 = state_42571;
var statearr_42573_42682 = state_42571__$1;
(statearr_42573_42682[(2)] = null);

(statearr_42573_42682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42572 === (2))){
var state_42571__$1 = state_42571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42571__$1,(4),from);
} else {
if((state_val_42572 === (3))){
var inst_42569 = (state_42571[(2)]);
var state_42571__$1 = state_42571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42571__$1,inst_42569);
} else {
if((state_val_42572 === (4))){
var inst_42552 = (state_42571[(7)]);
var inst_42552__$1 = (state_42571[(2)]);
var inst_42553 = (inst_42552__$1 == null);
var state_42571__$1 = (function (){var statearr_42574 = state_42571;
(statearr_42574[(7)] = inst_42552__$1);

return statearr_42574;
})();
if(cljs.core.truth_(inst_42553)){
var statearr_42575_42683 = state_42571__$1;
(statearr_42575_42683[(1)] = (5));

} else {
var statearr_42576_42684 = state_42571__$1;
(statearr_42576_42684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42572 === (5))){
var inst_42555 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42571__$1 = state_42571;
var statearr_42577_42685 = state_42571__$1;
(statearr_42577_42685[(2)] = inst_42555);

(statearr_42577_42685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42572 === (6))){
var inst_42557 = (state_42571[(8)]);
var inst_42552 = (state_42571[(7)]);
var inst_42557__$1 = cljs.core.async.chan.call(null,(1));
var inst_42558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42559 = [inst_42552,inst_42557__$1];
var inst_42560 = (new cljs.core.PersistentVector(null,2,(5),inst_42558,inst_42559,null));
var state_42571__$1 = (function (){var statearr_42578 = state_42571;
(statearr_42578[(8)] = inst_42557__$1);

return statearr_42578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42571__$1,(8),jobs,inst_42560);
} else {
if((state_val_42572 === (7))){
var inst_42567 = (state_42571[(2)]);
var state_42571__$1 = state_42571;
var statearr_42579_42686 = state_42571__$1;
(statearr_42579_42686[(2)] = inst_42567);

(statearr_42579_42686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42572 === (8))){
var inst_42557 = (state_42571[(8)]);
var inst_42562 = (state_42571[(2)]);
var state_42571__$1 = (function (){var statearr_42580 = state_42571;
(statearr_42580[(9)] = inst_42562);

return statearr_42580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42571__$1,(9),results,inst_42557);
} else {
if((state_val_42572 === (9))){
var inst_42564 = (state_42571[(2)]);
var state_42571__$1 = (function (){var statearr_42581 = state_42571;
(statearr_42581[(10)] = inst_42564);

return statearr_42581;
})();
var statearr_42582_42687 = state_42571__$1;
(statearr_42582_42687[(2)] = null);

(statearr_42582_42687[(1)] = (2));


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
});})(c__22731__auto___42681,jobs,results,process__$1,async))
;
return ((function (switch__22643__auto__,c__22731__auto___42681,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_42583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__);

(statearr_42583[(1)] = (1));

return statearr_42583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1 = (function (state_42571){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42584){if((e42584 instanceof Object)){
var ex__22647__auto__ = e42584;
var statearr_42585_42688 = state_42571;
(statearr_42585_42688[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42689 = state_42571;
state_42571 = G__42689;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = function(state_42571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1.call(this,state_42571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___42681,jobs,results,process__$1,async))
})();
var state__22733__auto__ = (function (){var statearr_42586 = f__22732__auto__.call(null);
(statearr_42586[(6)] = c__22731__auto___42681);

return statearr_42586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___42681,jobs,results,process__$1,async))
);


var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__,jobs,results,process__$1,async){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__,jobs,results,process__$1,async){
return (function (state_42624){
var state_val_42625 = (state_42624[(1)]);
if((state_val_42625 === (7))){
var inst_42620 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42626_42690 = state_42624__$1;
(statearr_42626_42690[(2)] = inst_42620);

(statearr_42626_42690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (20))){
var state_42624__$1 = state_42624;
var statearr_42627_42691 = state_42624__$1;
(statearr_42627_42691[(2)] = null);

(statearr_42627_42691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (1))){
var state_42624__$1 = state_42624;
var statearr_42628_42692 = state_42624__$1;
(statearr_42628_42692[(2)] = null);

(statearr_42628_42692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (4))){
var inst_42589 = (state_42624[(7)]);
var inst_42589__$1 = (state_42624[(2)]);
var inst_42590 = (inst_42589__$1 == null);
var state_42624__$1 = (function (){var statearr_42629 = state_42624;
(statearr_42629[(7)] = inst_42589__$1);

return statearr_42629;
})();
if(cljs.core.truth_(inst_42590)){
var statearr_42630_42693 = state_42624__$1;
(statearr_42630_42693[(1)] = (5));

} else {
var statearr_42631_42694 = state_42624__$1;
(statearr_42631_42694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (15))){
var inst_42602 = (state_42624[(8)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42624__$1,(18),to,inst_42602);
} else {
if((state_val_42625 === (21))){
var inst_42615 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42632_42695 = state_42624__$1;
(statearr_42632_42695[(2)] = inst_42615);

(statearr_42632_42695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (13))){
var inst_42617 = (state_42624[(2)]);
var state_42624__$1 = (function (){var statearr_42633 = state_42624;
(statearr_42633[(9)] = inst_42617);

return statearr_42633;
})();
var statearr_42634_42696 = state_42624__$1;
(statearr_42634_42696[(2)] = null);

(statearr_42634_42696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (6))){
var inst_42589 = (state_42624[(7)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,(11),inst_42589);
} else {
if((state_val_42625 === (17))){
var inst_42610 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
if(cljs.core.truth_(inst_42610)){
var statearr_42635_42697 = state_42624__$1;
(statearr_42635_42697[(1)] = (19));

} else {
var statearr_42636_42698 = state_42624__$1;
(statearr_42636_42698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (3))){
var inst_42622 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42624__$1,inst_42622);
} else {
if((state_val_42625 === (12))){
var inst_42599 = (state_42624[(10)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,(14),inst_42599);
} else {
if((state_val_42625 === (2))){
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,(4),results);
} else {
if((state_val_42625 === (19))){
var state_42624__$1 = state_42624;
var statearr_42637_42699 = state_42624__$1;
(statearr_42637_42699[(2)] = null);

(statearr_42637_42699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (11))){
var inst_42599 = (state_42624[(2)]);
var state_42624__$1 = (function (){var statearr_42638 = state_42624;
(statearr_42638[(10)] = inst_42599);

return statearr_42638;
})();
var statearr_42639_42700 = state_42624__$1;
(statearr_42639_42700[(2)] = null);

(statearr_42639_42700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (9))){
var state_42624__$1 = state_42624;
var statearr_42640_42701 = state_42624__$1;
(statearr_42640_42701[(2)] = null);

(statearr_42640_42701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (5))){
var state_42624__$1 = state_42624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42641_42702 = state_42624__$1;
(statearr_42641_42702[(1)] = (8));

} else {
var statearr_42642_42703 = state_42624__$1;
(statearr_42642_42703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (14))){
var inst_42602 = (state_42624[(8)]);
var inst_42604 = (state_42624[(11)]);
var inst_42602__$1 = (state_42624[(2)]);
var inst_42603 = (inst_42602__$1 == null);
var inst_42604__$1 = cljs.core.not.call(null,inst_42603);
var state_42624__$1 = (function (){var statearr_42643 = state_42624;
(statearr_42643[(8)] = inst_42602__$1);

(statearr_42643[(11)] = inst_42604__$1);

return statearr_42643;
})();
if(inst_42604__$1){
var statearr_42644_42704 = state_42624__$1;
(statearr_42644_42704[(1)] = (15));

} else {
var statearr_42645_42705 = state_42624__$1;
(statearr_42645_42705[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (16))){
var inst_42604 = (state_42624[(11)]);
var state_42624__$1 = state_42624;
var statearr_42646_42706 = state_42624__$1;
(statearr_42646_42706[(2)] = inst_42604);

(statearr_42646_42706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (10))){
var inst_42596 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42647_42707 = state_42624__$1;
(statearr_42647_42707[(2)] = inst_42596);

(statearr_42647_42707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (18))){
var inst_42607 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42648_42708 = state_42624__$1;
(statearr_42648_42708[(2)] = inst_42607);

(statearr_42648_42708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42625 === (8))){
var inst_42593 = cljs.core.async.close_BANG_.call(null,to);
var state_42624__$1 = state_42624;
var statearr_42649_42709 = state_42624__$1;
(statearr_42649_42709[(2)] = inst_42593);

(statearr_42649_42709[(1)] = (10));


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
});})(c__22731__auto__,jobs,results,process__$1,async))
;
return ((function (switch__22643__auto__,c__22731__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_42650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__);

(statearr_42650[(1)] = (1));

return statearr_42650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1 = (function (state_42624){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42651){if((e42651 instanceof Object)){
var ex__22647__auto__ = e42651;
var statearr_42652_42710 = state_42624;
(statearr_42652_42710[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42711 = state_42624;
state_42624 = G__42711;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__ = function(state_42624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1.call(this,state_42624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__,jobs,results,process__$1,async))
})();
var state__22733__auto__ = (function (){var statearr_42653 = f__22732__auto__.call(null);
(statearr_42653[(6)] = c__22731__auto__);

return statearr_42653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__,jobs,results,process__$1,async))
);

return c__22731__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42713 = arguments.length;
switch (G__42713) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42716 = arguments.length;
switch (G__42716) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42719 = arguments.length;
switch (G__42719) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22731__auto___42768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___42768,tc,fc){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___42768,tc,fc){
return (function (state_42745){
var state_val_42746 = (state_42745[(1)]);
if((state_val_42746 === (7))){
var inst_42741 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
var statearr_42747_42769 = state_42745__$1;
(statearr_42747_42769[(2)] = inst_42741);

(statearr_42747_42769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (1))){
var state_42745__$1 = state_42745;
var statearr_42748_42770 = state_42745__$1;
(statearr_42748_42770[(2)] = null);

(statearr_42748_42770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (4))){
var inst_42722 = (state_42745[(7)]);
var inst_42722__$1 = (state_42745[(2)]);
var inst_42723 = (inst_42722__$1 == null);
var state_42745__$1 = (function (){var statearr_42749 = state_42745;
(statearr_42749[(7)] = inst_42722__$1);

return statearr_42749;
})();
if(cljs.core.truth_(inst_42723)){
var statearr_42750_42771 = state_42745__$1;
(statearr_42750_42771[(1)] = (5));

} else {
var statearr_42751_42772 = state_42745__$1;
(statearr_42751_42772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (13))){
var state_42745__$1 = state_42745;
var statearr_42752_42773 = state_42745__$1;
(statearr_42752_42773[(2)] = null);

(statearr_42752_42773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (6))){
var inst_42722 = (state_42745[(7)]);
var inst_42728 = p.call(null,inst_42722);
var state_42745__$1 = state_42745;
if(cljs.core.truth_(inst_42728)){
var statearr_42753_42774 = state_42745__$1;
(statearr_42753_42774[(1)] = (9));

} else {
var statearr_42754_42775 = state_42745__$1;
(statearr_42754_42775[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (3))){
var inst_42743 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42745__$1,inst_42743);
} else {
if((state_val_42746 === (12))){
var state_42745__$1 = state_42745;
var statearr_42755_42776 = state_42745__$1;
(statearr_42755_42776[(2)] = null);

(statearr_42755_42776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (2))){
var state_42745__$1 = state_42745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42745__$1,(4),ch);
} else {
if((state_val_42746 === (11))){
var inst_42722 = (state_42745[(7)]);
var inst_42732 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42745__$1,(8),inst_42732,inst_42722);
} else {
if((state_val_42746 === (9))){
var state_42745__$1 = state_42745;
var statearr_42756_42777 = state_42745__$1;
(statearr_42756_42777[(2)] = tc);

(statearr_42756_42777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (5))){
var inst_42725 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42726 = cljs.core.async.close_BANG_.call(null,fc);
var state_42745__$1 = (function (){var statearr_42757 = state_42745;
(statearr_42757[(8)] = inst_42725);

return statearr_42757;
})();
var statearr_42758_42778 = state_42745__$1;
(statearr_42758_42778[(2)] = inst_42726);

(statearr_42758_42778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (14))){
var inst_42739 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
var statearr_42759_42779 = state_42745__$1;
(statearr_42759_42779[(2)] = inst_42739);

(statearr_42759_42779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (10))){
var state_42745__$1 = state_42745;
var statearr_42760_42780 = state_42745__$1;
(statearr_42760_42780[(2)] = fc);

(statearr_42760_42780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42746 === (8))){
var inst_42734 = (state_42745[(2)]);
var state_42745__$1 = state_42745;
if(cljs.core.truth_(inst_42734)){
var statearr_42761_42781 = state_42745__$1;
(statearr_42761_42781[(1)] = (12));

} else {
var statearr_42762_42782 = state_42745__$1;
(statearr_42762_42782[(1)] = (13));

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
});})(c__22731__auto___42768,tc,fc))
;
return ((function (switch__22643__auto__,c__22731__auto___42768,tc,fc){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_42763 = [null,null,null,null,null,null,null,null,null];
(statearr_42763[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_42763[(1)] = (1));

return statearr_42763;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_42745){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42764){if((e42764 instanceof Object)){
var ex__22647__auto__ = e42764;
var statearr_42765_42783 = state_42745;
(statearr_42765_42783[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42784 = state_42745;
state_42745 = G__42784;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_42745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_42745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___42768,tc,fc))
})();
var state__22733__auto__ = (function (){var statearr_42766 = f__22732__auto__.call(null);
(statearr_42766[(6)] = c__22731__auto___42768);

return statearr_42766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___42768,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__){
return (function (state_42805){
var state_val_42806 = (state_42805[(1)]);
if((state_val_42806 === (7))){
var inst_42801 = (state_42805[(2)]);
var state_42805__$1 = state_42805;
var statearr_42807_42825 = state_42805__$1;
(statearr_42807_42825[(2)] = inst_42801);

(statearr_42807_42825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (1))){
var inst_42785 = init;
var state_42805__$1 = (function (){var statearr_42808 = state_42805;
(statearr_42808[(7)] = inst_42785);

return statearr_42808;
})();
var statearr_42809_42826 = state_42805__$1;
(statearr_42809_42826[(2)] = null);

(statearr_42809_42826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (4))){
var inst_42788 = (state_42805[(8)]);
var inst_42788__$1 = (state_42805[(2)]);
var inst_42789 = (inst_42788__$1 == null);
var state_42805__$1 = (function (){var statearr_42810 = state_42805;
(statearr_42810[(8)] = inst_42788__$1);

return statearr_42810;
})();
if(cljs.core.truth_(inst_42789)){
var statearr_42811_42827 = state_42805__$1;
(statearr_42811_42827[(1)] = (5));

} else {
var statearr_42812_42828 = state_42805__$1;
(statearr_42812_42828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (6))){
var inst_42785 = (state_42805[(7)]);
var inst_42788 = (state_42805[(8)]);
var inst_42792 = (state_42805[(9)]);
var inst_42792__$1 = f.call(null,inst_42785,inst_42788);
var inst_42793 = cljs.core.reduced_QMARK_.call(null,inst_42792__$1);
var state_42805__$1 = (function (){var statearr_42813 = state_42805;
(statearr_42813[(9)] = inst_42792__$1);

return statearr_42813;
})();
if(inst_42793){
var statearr_42814_42829 = state_42805__$1;
(statearr_42814_42829[(1)] = (8));

} else {
var statearr_42815_42830 = state_42805__$1;
(statearr_42815_42830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (3))){
var inst_42803 = (state_42805[(2)]);
var state_42805__$1 = state_42805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42805__$1,inst_42803);
} else {
if((state_val_42806 === (2))){
var state_42805__$1 = state_42805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42805__$1,(4),ch);
} else {
if((state_val_42806 === (9))){
var inst_42792 = (state_42805[(9)]);
var inst_42785 = inst_42792;
var state_42805__$1 = (function (){var statearr_42816 = state_42805;
(statearr_42816[(7)] = inst_42785);

return statearr_42816;
})();
var statearr_42817_42831 = state_42805__$1;
(statearr_42817_42831[(2)] = null);

(statearr_42817_42831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (5))){
var inst_42785 = (state_42805[(7)]);
var state_42805__$1 = state_42805;
var statearr_42818_42832 = state_42805__$1;
(statearr_42818_42832[(2)] = inst_42785);

(statearr_42818_42832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (10))){
var inst_42799 = (state_42805[(2)]);
var state_42805__$1 = state_42805;
var statearr_42819_42833 = state_42805__$1;
(statearr_42819_42833[(2)] = inst_42799);

(statearr_42819_42833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42806 === (8))){
var inst_42792 = (state_42805[(9)]);
var inst_42795 = cljs.core.deref.call(null,inst_42792);
var state_42805__$1 = state_42805;
var statearr_42820_42834 = state_42805__$1;
(statearr_42820_42834[(2)] = inst_42795);

(statearr_42820_42834[(1)] = (10));


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
});})(c__22731__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22644__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22644__auto____0 = (function (){
var statearr_42821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42821[(0)] = cljs$core$async$reduce_$_state_machine__22644__auto__);

(statearr_42821[(1)] = (1));

return statearr_42821;
});
var cljs$core$async$reduce_$_state_machine__22644__auto____1 = (function (state_42805){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42822){if((e42822 instanceof Object)){
var ex__22647__auto__ = e42822;
var statearr_42823_42835 = state_42805;
(statearr_42823_42835[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42836 = state_42805;
state_42805 = G__42836;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22644__auto__ = function(state_42805){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22644__auto____1.call(this,state_42805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22644__auto____0;
cljs$core$async$reduce_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22644__auto____1;
return cljs$core$async$reduce_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__))
})();
var state__22733__auto__ = (function (){var statearr_42824 = f__22732__auto__.call(null);
(statearr_42824[(6)] = c__22731__auto__);

return statearr_42824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__))
);

return c__22731__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__,f__$1){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__,f__$1){
return (function (state_42842){
var state_val_42843 = (state_42842[(1)]);
if((state_val_42843 === (1))){
var inst_42837 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42842__$1,(2),inst_42837);
} else {
if((state_val_42843 === (2))){
var inst_42839 = (state_42842[(2)]);
var inst_42840 = f__$1.call(null,inst_42839);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42842__$1,inst_42840);
} else {
return null;
}
}
});})(c__22731__auto__,f__$1))
;
return ((function (switch__22643__auto__,c__22731__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22644__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22644__auto____0 = (function (){
var statearr_42844 = [null,null,null,null,null,null,null];
(statearr_42844[(0)] = cljs$core$async$transduce_$_state_machine__22644__auto__);

(statearr_42844[(1)] = (1));

return statearr_42844;
});
var cljs$core$async$transduce_$_state_machine__22644__auto____1 = (function (state_42842){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42845){if((e42845 instanceof Object)){
var ex__22647__auto__ = e42845;
var statearr_42846_42848 = state_42842;
(statearr_42846_42848[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42849 = state_42842;
state_42842 = G__42849;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22644__auto__ = function(state_42842){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22644__auto____1.call(this,state_42842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22644__auto____0;
cljs$core$async$transduce_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22644__auto____1;
return cljs$core$async$transduce_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__,f__$1))
})();
var state__22733__auto__ = (function (){var statearr_42847 = f__22732__auto__.call(null);
(statearr_42847[(6)] = c__22731__auto__);

return statearr_42847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__,f__$1))
);

return c__22731__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42851 = arguments.length;
switch (G__42851) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__){
return (function (state_42876){
var state_val_42877 = (state_42876[(1)]);
if((state_val_42877 === (7))){
var inst_42858 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42878_42899 = state_42876__$1;
(statearr_42878_42899[(2)] = inst_42858);

(statearr_42878_42899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (1))){
var inst_42852 = cljs.core.seq.call(null,coll);
var inst_42853 = inst_42852;
var state_42876__$1 = (function (){var statearr_42879 = state_42876;
(statearr_42879[(7)] = inst_42853);

return statearr_42879;
})();
var statearr_42880_42900 = state_42876__$1;
(statearr_42880_42900[(2)] = null);

(statearr_42880_42900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (4))){
var inst_42853 = (state_42876[(7)]);
var inst_42856 = cljs.core.first.call(null,inst_42853);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42876__$1,(7),ch,inst_42856);
} else {
if((state_val_42877 === (13))){
var inst_42870 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42881_42901 = state_42876__$1;
(statearr_42881_42901[(2)] = inst_42870);

(statearr_42881_42901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (6))){
var inst_42861 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
if(cljs.core.truth_(inst_42861)){
var statearr_42882_42902 = state_42876__$1;
(statearr_42882_42902[(1)] = (8));

} else {
var statearr_42883_42903 = state_42876__$1;
(statearr_42883_42903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (3))){
var inst_42874 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42876__$1,inst_42874);
} else {
if((state_val_42877 === (12))){
var state_42876__$1 = state_42876;
var statearr_42884_42904 = state_42876__$1;
(statearr_42884_42904[(2)] = null);

(statearr_42884_42904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (2))){
var inst_42853 = (state_42876[(7)]);
var state_42876__$1 = state_42876;
if(cljs.core.truth_(inst_42853)){
var statearr_42885_42905 = state_42876__$1;
(statearr_42885_42905[(1)] = (4));

} else {
var statearr_42886_42906 = state_42876__$1;
(statearr_42886_42906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (11))){
var inst_42867 = cljs.core.async.close_BANG_.call(null,ch);
var state_42876__$1 = state_42876;
var statearr_42887_42907 = state_42876__$1;
(statearr_42887_42907[(2)] = inst_42867);

(statearr_42887_42907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (9))){
var state_42876__$1 = state_42876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42888_42908 = state_42876__$1;
(statearr_42888_42908[(1)] = (11));

} else {
var statearr_42889_42909 = state_42876__$1;
(statearr_42889_42909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (5))){
var inst_42853 = (state_42876[(7)]);
var state_42876__$1 = state_42876;
var statearr_42890_42910 = state_42876__$1;
(statearr_42890_42910[(2)] = inst_42853);

(statearr_42890_42910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (10))){
var inst_42872 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42891_42911 = state_42876__$1;
(statearr_42891_42911[(2)] = inst_42872);

(statearr_42891_42911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (8))){
var inst_42853 = (state_42876[(7)]);
var inst_42863 = cljs.core.next.call(null,inst_42853);
var inst_42853__$1 = inst_42863;
var state_42876__$1 = (function (){var statearr_42892 = state_42876;
(statearr_42892[(7)] = inst_42853__$1);

return statearr_42892;
})();
var statearr_42893_42912 = state_42876__$1;
(statearr_42893_42912[(2)] = null);

(statearr_42893_42912[(1)] = (2));


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
});})(c__22731__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_42894 = [null,null,null,null,null,null,null,null];
(statearr_42894[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_42894[(1)] = (1));

return statearr_42894;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_42876){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_42876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e42895){if((e42895 instanceof Object)){
var ex__22647__auto__ = e42895;
var statearr_42896_42913 = state_42876;
(statearr_42896_42913[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42914 = state_42876;
state_42876 = G__42914;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_42876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_42876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__))
})();
var state__22733__auto__ = (function (){var statearr_42897 = f__22732__auto__.call(null);
(statearr_42897[(6)] = c__22731__auto__);

return statearr_42897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__))
);

return c__22731__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42915 = (function (ch,cs,meta42916){
this.ch = ch;
this.cs = cs;
this.meta42916 = meta42916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42917,meta42916__$1){
var self__ = this;
var _42917__$1 = this;
return (new cljs.core.async.t_cljs$core$async42915(self__.ch,self__.cs,meta42916__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42917){
var self__ = this;
var _42917__$1 = this;
return self__.meta42916;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42916","meta42916",1887588026,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42915";

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async42915");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42915.
 */
cljs.core.async.__GT_t_cljs$core$async42915 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42915(ch__$1,cs__$1,meta42916){
return (new cljs.core.async.t_cljs$core$async42915(ch__$1,cs__$1,meta42916));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22731__auto___43137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43137,cs,m,dchan,dctr,done){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43137,cs,m,dchan,dctr,done){
return (function (state_43052){
var state_val_43053 = (state_43052[(1)]);
if((state_val_43053 === (7))){
var inst_43048 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43054_43138 = state_43052__$1;
(statearr_43054_43138[(2)] = inst_43048);

(statearr_43054_43138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (20))){
var inst_42951 = (state_43052[(7)]);
var inst_42963 = cljs.core.first.call(null,inst_42951);
var inst_42964 = cljs.core.nth.call(null,inst_42963,(0),null);
var inst_42965 = cljs.core.nth.call(null,inst_42963,(1),null);
var state_43052__$1 = (function (){var statearr_43055 = state_43052;
(statearr_43055[(8)] = inst_42964);

return statearr_43055;
})();
if(cljs.core.truth_(inst_42965)){
var statearr_43056_43139 = state_43052__$1;
(statearr_43056_43139[(1)] = (22));

} else {
var statearr_43057_43140 = state_43052__$1;
(statearr_43057_43140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (27))){
var inst_42920 = (state_43052[(9)]);
var inst_42993 = (state_43052[(10)]);
var inst_43000 = (state_43052[(11)]);
var inst_42995 = (state_43052[(12)]);
var inst_43000__$1 = cljs.core._nth.call(null,inst_42993,inst_42995);
var inst_43001 = cljs.core.async.put_BANG_.call(null,inst_43000__$1,inst_42920,done);
var state_43052__$1 = (function (){var statearr_43058 = state_43052;
(statearr_43058[(11)] = inst_43000__$1);

return statearr_43058;
})();
if(cljs.core.truth_(inst_43001)){
var statearr_43059_43141 = state_43052__$1;
(statearr_43059_43141[(1)] = (30));

} else {
var statearr_43060_43142 = state_43052__$1;
(statearr_43060_43142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (1))){
var state_43052__$1 = state_43052;
var statearr_43061_43143 = state_43052__$1;
(statearr_43061_43143[(2)] = null);

(statearr_43061_43143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (24))){
var inst_42951 = (state_43052[(7)]);
var inst_42970 = (state_43052[(2)]);
var inst_42971 = cljs.core.next.call(null,inst_42951);
var inst_42929 = inst_42971;
var inst_42930 = null;
var inst_42931 = (0);
var inst_42932 = (0);
var state_43052__$1 = (function (){var statearr_43062 = state_43052;
(statearr_43062[(13)] = inst_42932);

(statearr_43062[(14)] = inst_42929);

(statearr_43062[(15)] = inst_42930);

(statearr_43062[(16)] = inst_42931);

(statearr_43062[(17)] = inst_42970);

return statearr_43062;
})();
var statearr_43063_43144 = state_43052__$1;
(statearr_43063_43144[(2)] = null);

(statearr_43063_43144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (39))){
var state_43052__$1 = state_43052;
var statearr_43067_43145 = state_43052__$1;
(statearr_43067_43145[(2)] = null);

(statearr_43067_43145[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (4))){
var inst_42920 = (state_43052[(9)]);
var inst_42920__$1 = (state_43052[(2)]);
var inst_42921 = (inst_42920__$1 == null);
var state_43052__$1 = (function (){var statearr_43068 = state_43052;
(statearr_43068[(9)] = inst_42920__$1);

return statearr_43068;
})();
if(cljs.core.truth_(inst_42921)){
var statearr_43069_43146 = state_43052__$1;
(statearr_43069_43146[(1)] = (5));

} else {
var statearr_43070_43147 = state_43052__$1;
(statearr_43070_43147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (15))){
var inst_42932 = (state_43052[(13)]);
var inst_42929 = (state_43052[(14)]);
var inst_42930 = (state_43052[(15)]);
var inst_42931 = (state_43052[(16)]);
var inst_42947 = (state_43052[(2)]);
var inst_42948 = (inst_42932 + (1));
var tmp43064 = inst_42929;
var tmp43065 = inst_42930;
var tmp43066 = inst_42931;
var inst_42929__$1 = tmp43064;
var inst_42930__$1 = tmp43065;
var inst_42931__$1 = tmp43066;
var inst_42932__$1 = inst_42948;
var state_43052__$1 = (function (){var statearr_43071 = state_43052;
(statearr_43071[(13)] = inst_42932__$1);

(statearr_43071[(18)] = inst_42947);

(statearr_43071[(14)] = inst_42929__$1);

(statearr_43071[(15)] = inst_42930__$1);

(statearr_43071[(16)] = inst_42931__$1);

return statearr_43071;
})();
var statearr_43072_43148 = state_43052__$1;
(statearr_43072_43148[(2)] = null);

(statearr_43072_43148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (21))){
var inst_42974 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43076_43149 = state_43052__$1;
(statearr_43076_43149[(2)] = inst_42974);

(statearr_43076_43149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (31))){
var inst_43000 = (state_43052[(11)]);
var inst_43004 = done.call(null,null);
var inst_43005 = cljs.core.async.untap_STAR_.call(null,m,inst_43000);
var state_43052__$1 = (function (){var statearr_43077 = state_43052;
(statearr_43077[(19)] = inst_43004);

return statearr_43077;
})();
var statearr_43078_43150 = state_43052__$1;
(statearr_43078_43150[(2)] = inst_43005);

(statearr_43078_43150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (32))){
var inst_42994 = (state_43052[(20)]);
var inst_42992 = (state_43052[(21)]);
var inst_42993 = (state_43052[(10)]);
var inst_42995 = (state_43052[(12)]);
var inst_43007 = (state_43052[(2)]);
var inst_43008 = (inst_42995 + (1));
var tmp43073 = inst_42994;
var tmp43074 = inst_42992;
var tmp43075 = inst_42993;
var inst_42992__$1 = tmp43074;
var inst_42993__$1 = tmp43075;
var inst_42994__$1 = tmp43073;
var inst_42995__$1 = inst_43008;
var state_43052__$1 = (function (){var statearr_43079 = state_43052;
(statearr_43079[(20)] = inst_42994__$1);

(statearr_43079[(21)] = inst_42992__$1);

(statearr_43079[(22)] = inst_43007);

(statearr_43079[(10)] = inst_42993__$1);

(statearr_43079[(12)] = inst_42995__$1);

return statearr_43079;
})();
var statearr_43080_43151 = state_43052__$1;
(statearr_43080_43151[(2)] = null);

(statearr_43080_43151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (40))){
var inst_43020 = (state_43052[(23)]);
var inst_43024 = done.call(null,null);
var inst_43025 = cljs.core.async.untap_STAR_.call(null,m,inst_43020);
var state_43052__$1 = (function (){var statearr_43081 = state_43052;
(statearr_43081[(24)] = inst_43024);

return statearr_43081;
})();
var statearr_43082_43152 = state_43052__$1;
(statearr_43082_43152[(2)] = inst_43025);

(statearr_43082_43152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (33))){
var inst_43011 = (state_43052[(25)]);
var inst_43013 = cljs.core.chunked_seq_QMARK_.call(null,inst_43011);
var state_43052__$1 = state_43052;
if(inst_43013){
var statearr_43083_43153 = state_43052__$1;
(statearr_43083_43153[(1)] = (36));

} else {
var statearr_43084_43154 = state_43052__$1;
(statearr_43084_43154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (13))){
var inst_42941 = (state_43052[(26)]);
var inst_42944 = cljs.core.async.close_BANG_.call(null,inst_42941);
var state_43052__$1 = state_43052;
var statearr_43085_43155 = state_43052__$1;
(statearr_43085_43155[(2)] = inst_42944);

(statearr_43085_43155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (22))){
var inst_42964 = (state_43052[(8)]);
var inst_42967 = cljs.core.async.close_BANG_.call(null,inst_42964);
var state_43052__$1 = state_43052;
var statearr_43086_43156 = state_43052__$1;
(statearr_43086_43156[(2)] = inst_42967);

(statearr_43086_43156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (36))){
var inst_43011 = (state_43052[(25)]);
var inst_43015 = cljs.core.chunk_first.call(null,inst_43011);
var inst_43016 = cljs.core.chunk_rest.call(null,inst_43011);
var inst_43017 = cljs.core.count.call(null,inst_43015);
var inst_42992 = inst_43016;
var inst_42993 = inst_43015;
var inst_42994 = inst_43017;
var inst_42995 = (0);
var state_43052__$1 = (function (){var statearr_43087 = state_43052;
(statearr_43087[(20)] = inst_42994);

(statearr_43087[(21)] = inst_42992);

(statearr_43087[(10)] = inst_42993);

(statearr_43087[(12)] = inst_42995);

return statearr_43087;
})();
var statearr_43088_43157 = state_43052__$1;
(statearr_43088_43157[(2)] = null);

(statearr_43088_43157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (41))){
var inst_43011 = (state_43052[(25)]);
var inst_43027 = (state_43052[(2)]);
var inst_43028 = cljs.core.next.call(null,inst_43011);
var inst_42992 = inst_43028;
var inst_42993 = null;
var inst_42994 = (0);
var inst_42995 = (0);
var state_43052__$1 = (function (){var statearr_43089 = state_43052;
(statearr_43089[(20)] = inst_42994);

(statearr_43089[(27)] = inst_43027);

(statearr_43089[(21)] = inst_42992);

(statearr_43089[(10)] = inst_42993);

(statearr_43089[(12)] = inst_42995);

return statearr_43089;
})();
var statearr_43090_43158 = state_43052__$1;
(statearr_43090_43158[(2)] = null);

(statearr_43090_43158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (43))){
var state_43052__$1 = state_43052;
var statearr_43091_43159 = state_43052__$1;
(statearr_43091_43159[(2)] = null);

(statearr_43091_43159[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (29))){
var inst_43036 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43092_43160 = state_43052__$1;
(statearr_43092_43160[(2)] = inst_43036);

(statearr_43092_43160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (44))){
var inst_43045 = (state_43052[(2)]);
var state_43052__$1 = (function (){var statearr_43093 = state_43052;
(statearr_43093[(28)] = inst_43045);

return statearr_43093;
})();
var statearr_43094_43161 = state_43052__$1;
(statearr_43094_43161[(2)] = null);

(statearr_43094_43161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (6))){
var inst_42984 = (state_43052[(29)]);
var inst_42983 = cljs.core.deref.call(null,cs);
var inst_42984__$1 = cljs.core.keys.call(null,inst_42983);
var inst_42985 = cljs.core.count.call(null,inst_42984__$1);
var inst_42986 = cljs.core.reset_BANG_.call(null,dctr,inst_42985);
var inst_42991 = cljs.core.seq.call(null,inst_42984__$1);
var inst_42992 = inst_42991;
var inst_42993 = null;
var inst_42994 = (0);
var inst_42995 = (0);
var state_43052__$1 = (function (){var statearr_43095 = state_43052;
(statearr_43095[(29)] = inst_42984__$1);

(statearr_43095[(20)] = inst_42994);

(statearr_43095[(21)] = inst_42992);

(statearr_43095[(10)] = inst_42993);

(statearr_43095[(12)] = inst_42995);

(statearr_43095[(30)] = inst_42986);

return statearr_43095;
})();
var statearr_43096_43162 = state_43052__$1;
(statearr_43096_43162[(2)] = null);

(statearr_43096_43162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (28))){
var inst_42992 = (state_43052[(21)]);
var inst_43011 = (state_43052[(25)]);
var inst_43011__$1 = cljs.core.seq.call(null,inst_42992);
var state_43052__$1 = (function (){var statearr_43097 = state_43052;
(statearr_43097[(25)] = inst_43011__$1);

return statearr_43097;
})();
if(inst_43011__$1){
var statearr_43098_43163 = state_43052__$1;
(statearr_43098_43163[(1)] = (33));

} else {
var statearr_43099_43164 = state_43052__$1;
(statearr_43099_43164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (25))){
var inst_42994 = (state_43052[(20)]);
var inst_42995 = (state_43052[(12)]);
var inst_42997 = (inst_42995 < inst_42994);
var inst_42998 = inst_42997;
var state_43052__$1 = state_43052;
if(cljs.core.truth_(inst_42998)){
var statearr_43100_43165 = state_43052__$1;
(statearr_43100_43165[(1)] = (27));

} else {
var statearr_43101_43166 = state_43052__$1;
(statearr_43101_43166[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (34))){
var state_43052__$1 = state_43052;
var statearr_43102_43167 = state_43052__$1;
(statearr_43102_43167[(2)] = null);

(statearr_43102_43167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (17))){
var state_43052__$1 = state_43052;
var statearr_43103_43168 = state_43052__$1;
(statearr_43103_43168[(2)] = null);

(statearr_43103_43168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (3))){
var inst_43050 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43052__$1,inst_43050);
} else {
if((state_val_43053 === (12))){
var inst_42979 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43104_43169 = state_43052__$1;
(statearr_43104_43169[(2)] = inst_42979);

(statearr_43104_43169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (2))){
var state_43052__$1 = state_43052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43052__$1,(4),ch);
} else {
if((state_val_43053 === (23))){
var state_43052__$1 = state_43052;
var statearr_43105_43170 = state_43052__$1;
(statearr_43105_43170[(2)] = null);

(statearr_43105_43170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (35))){
var inst_43034 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43106_43171 = state_43052__$1;
(statearr_43106_43171[(2)] = inst_43034);

(statearr_43106_43171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (19))){
var inst_42951 = (state_43052[(7)]);
var inst_42955 = cljs.core.chunk_first.call(null,inst_42951);
var inst_42956 = cljs.core.chunk_rest.call(null,inst_42951);
var inst_42957 = cljs.core.count.call(null,inst_42955);
var inst_42929 = inst_42956;
var inst_42930 = inst_42955;
var inst_42931 = inst_42957;
var inst_42932 = (0);
var state_43052__$1 = (function (){var statearr_43107 = state_43052;
(statearr_43107[(13)] = inst_42932);

(statearr_43107[(14)] = inst_42929);

(statearr_43107[(15)] = inst_42930);

(statearr_43107[(16)] = inst_42931);

return statearr_43107;
})();
var statearr_43108_43172 = state_43052__$1;
(statearr_43108_43172[(2)] = null);

(statearr_43108_43172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (11))){
var inst_42929 = (state_43052[(14)]);
var inst_42951 = (state_43052[(7)]);
var inst_42951__$1 = cljs.core.seq.call(null,inst_42929);
var state_43052__$1 = (function (){var statearr_43109 = state_43052;
(statearr_43109[(7)] = inst_42951__$1);

return statearr_43109;
})();
if(inst_42951__$1){
var statearr_43110_43173 = state_43052__$1;
(statearr_43110_43173[(1)] = (16));

} else {
var statearr_43111_43174 = state_43052__$1;
(statearr_43111_43174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (9))){
var inst_42981 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43112_43175 = state_43052__$1;
(statearr_43112_43175[(2)] = inst_42981);

(statearr_43112_43175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (5))){
var inst_42927 = cljs.core.deref.call(null,cs);
var inst_42928 = cljs.core.seq.call(null,inst_42927);
var inst_42929 = inst_42928;
var inst_42930 = null;
var inst_42931 = (0);
var inst_42932 = (0);
var state_43052__$1 = (function (){var statearr_43113 = state_43052;
(statearr_43113[(13)] = inst_42932);

(statearr_43113[(14)] = inst_42929);

(statearr_43113[(15)] = inst_42930);

(statearr_43113[(16)] = inst_42931);

return statearr_43113;
})();
var statearr_43114_43176 = state_43052__$1;
(statearr_43114_43176[(2)] = null);

(statearr_43114_43176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (14))){
var state_43052__$1 = state_43052;
var statearr_43115_43177 = state_43052__$1;
(statearr_43115_43177[(2)] = null);

(statearr_43115_43177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (45))){
var inst_43042 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43116_43178 = state_43052__$1;
(statearr_43116_43178[(2)] = inst_43042);

(statearr_43116_43178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (26))){
var inst_42984 = (state_43052[(29)]);
var inst_43038 = (state_43052[(2)]);
var inst_43039 = cljs.core.seq.call(null,inst_42984);
var state_43052__$1 = (function (){var statearr_43117 = state_43052;
(statearr_43117[(31)] = inst_43038);

return statearr_43117;
})();
if(inst_43039){
var statearr_43118_43179 = state_43052__$1;
(statearr_43118_43179[(1)] = (42));

} else {
var statearr_43119_43180 = state_43052__$1;
(statearr_43119_43180[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (16))){
var inst_42951 = (state_43052[(7)]);
var inst_42953 = cljs.core.chunked_seq_QMARK_.call(null,inst_42951);
var state_43052__$1 = state_43052;
if(inst_42953){
var statearr_43120_43181 = state_43052__$1;
(statearr_43120_43181[(1)] = (19));

} else {
var statearr_43121_43182 = state_43052__$1;
(statearr_43121_43182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (38))){
var inst_43031 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43122_43183 = state_43052__$1;
(statearr_43122_43183[(2)] = inst_43031);

(statearr_43122_43183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (30))){
var state_43052__$1 = state_43052;
var statearr_43123_43184 = state_43052__$1;
(statearr_43123_43184[(2)] = null);

(statearr_43123_43184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (10))){
var inst_42932 = (state_43052[(13)]);
var inst_42930 = (state_43052[(15)]);
var inst_42940 = cljs.core._nth.call(null,inst_42930,inst_42932);
var inst_42941 = cljs.core.nth.call(null,inst_42940,(0),null);
var inst_42942 = cljs.core.nth.call(null,inst_42940,(1),null);
var state_43052__$1 = (function (){var statearr_43124 = state_43052;
(statearr_43124[(26)] = inst_42941);

return statearr_43124;
})();
if(cljs.core.truth_(inst_42942)){
var statearr_43125_43185 = state_43052__$1;
(statearr_43125_43185[(1)] = (13));

} else {
var statearr_43126_43186 = state_43052__$1;
(statearr_43126_43186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (18))){
var inst_42977 = (state_43052[(2)]);
var state_43052__$1 = state_43052;
var statearr_43127_43187 = state_43052__$1;
(statearr_43127_43187[(2)] = inst_42977);

(statearr_43127_43187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (42))){
var state_43052__$1 = state_43052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43052__$1,(45),dchan);
} else {
if((state_val_43053 === (37))){
var inst_42920 = (state_43052[(9)]);
var inst_43020 = (state_43052[(23)]);
var inst_43011 = (state_43052[(25)]);
var inst_43020__$1 = cljs.core.first.call(null,inst_43011);
var inst_43021 = cljs.core.async.put_BANG_.call(null,inst_43020__$1,inst_42920,done);
var state_43052__$1 = (function (){var statearr_43128 = state_43052;
(statearr_43128[(23)] = inst_43020__$1);

return statearr_43128;
})();
if(cljs.core.truth_(inst_43021)){
var statearr_43129_43188 = state_43052__$1;
(statearr_43129_43188[(1)] = (39));

} else {
var statearr_43130_43189 = state_43052__$1;
(statearr_43130_43189[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43053 === (8))){
var inst_42932 = (state_43052[(13)]);
var inst_42931 = (state_43052[(16)]);
var inst_42934 = (inst_42932 < inst_42931);
var inst_42935 = inst_42934;
var state_43052__$1 = state_43052;
if(cljs.core.truth_(inst_42935)){
var statearr_43131_43190 = state_43052__$1;
(statearr_43131_43190[(1)] = (10));

} else {
var statearr_43132_43191 = state_43052__$1;
(statearr_43132_43191[(1)] = (11));

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
});})(c__22731__auto___43137,cs,m,dchan,dctr,done))
;
return ((function (switch__22643__auto__,c__22731__auto___43137,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22644__auto__ = null;
var cljs$core$async$mult_$_state_machine__22644__auto____0 = (function (){
var statearr_43133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43133[(0)] = cljs$core$async$mult_$_state_machine__22644__auto__);

(statearr_43133[(1)] = (1));

return statearr_43133;
});
var cljs$core$async$mult_$_state_machine__22644__auto____1 = (function (state_43052){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43134){if((e43134 instanceof Object)){
var ex__22647__auto__ = e43134;
var statearr_43135_43192 = state_43052;
(statearr_43135_43192[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43193 = state_43052;
state_43052 = G__43193;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22644__auto__ = function(state_43052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22644__auto____1.call(this,state_43052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22644__auto____0;
cljs$core$async$mult_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22644__auto____1;
return cljs$core$async$mult_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43137,cs,m,dchan,dctr,done))
})();
var state__22733__auto__ = (function (){var statearr_43136 = f__22732__auto__.call(null);
(statearr_43136[(6)] = c__22731__auto___43137);

return statearr_43136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43137,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43195 = arguments.length;
switch (G__43195) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43207 = arguments.length;
var i__4500__auto___43208 = (0);
while(true){
if((i__4500__auto___43208 < len__4499__auto___43207)){
args__4502__auto__.push((arguments[i__4500__auto___43208]));

var G__43209 = (i__4500__auto___43208 + (1));
i__4500__auto___43208 = G__43209;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43201){
var map__43202 = p__43201;
var map__43202__$1 = ((((!((map__43202 == null)))?(((((map__43202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43202):map__43202);
var opts = map__43202__$1;
var statearr_43204_43210 = state;
(statearr_43204_43210[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43202,map__43202__$1,opts){
return (function (val){
var statearr_43205_43211 = state;
(statearr_43205_43211[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43202,map__43202__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43206_43212 = state;
(statearr_43206_43212[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43197){
var G__43198 = cljs.core.first.call(null,seq43197);
var seq43197__$1 = cljs.core.next.call(null,seq43197);
var G__43199 = cljs.core.first.call(null,seq43197__$1);
var seq43197__$2 = cljs.core.next.call(null,seq43197__$1);
var G__43200 = cljs.core.first.call(null,seq43197__$2);
var seq43197__$3 = cljs.core.next.call(null,seq43197__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43198,G__43199,G__43200,seq43197__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43213 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43214){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43214 = meta43214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43215,meta43214__$1){
var self__ = this;
var _43215__$1 = this;
return (new cljs.core.async.t_cljs$core$async43213(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43214__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43215){
var self__ = this;
var _43215__$1 = this;
return self__.meta43214;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43214","meta43214",937874437,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43213";

cljs.core.async.t_cljs$core$async43213.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43213");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43213.
 */
cljs.core.async.__GT_t_cljs$core$async43213 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43213(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43214){
return (new cljs.core.async.t_cljs$core$async43213(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43214));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43213(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22731__auto___43377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43317){
var state_val_43318 = (state_43317[(1)]);
if((state_val_43318 === (7))){
var inst_43232 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
var statearr_43319_43378 = state_43317__$1;
(statearr_43319_43378[(2)] = inst_43232);

(statearr_43319_43378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (20))){
var inst_43244 = (state_43317[(7)]);
var state_43317__$1 = state_43317;
var statearr_43320_43379 = state_43317__$1;
(statearr_43320_43379[(2)] = inst_43244);

(statearr_43320_43379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (27))){
var state_43317__$1 = state_43317;
var statearr_43321_43380 = state_43317__$1;
(statearr_43321_43380[(2)] = null);

(statearr_43321_43380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (1))){
var inst_43219 = (state_43317[(8)]);
var inst_43219__$1 = calc_state.call(null);
var inst_43221 = (inst_43219__$1 == null);
var inst_43222 = cljs.core.not.call(null,inst_43221);
var state_43317__$1 = (function (){var statearr_43322 = state_43317;
(statearr_43322[(8)] = inst_43219__$1);

return statearr_43322;
})();
if(inst_43222){
var statearr_43323_43381 = state_43317__$1;
(statearr_43323_43381[(1)] = (2));

} else {
var statearr_43324_43382 = state_43317__$1;
(statearr_43324_43382[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (24))){
var inst_43277 = (state_43317[(9)]);
var inst_43268 = (state_43317[(10)]);
var inst_43291 = (state_43317[(11)]);
var inst_43291__$1 = inst_43268.call(null,inst_43277);
var state_43317__$1 = (function (){var statearr_43325 = state_43317;
(statearr_43325[(11)] = inst_43291__$1);

return statearr_43325;
})();
if(cljs.core.truth_(inst_43291__$1)){
var statearr_43326_43383 = state_43317__$1;
(statearr_43326_43383[(1)] = (29));

} else {
var statearr_43327_43384 = state_43317__$1;
(statearr_43327_43384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (4))){
var inst_43235 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43235)){
var statearr_43328_43385 = state_43317__$1;
(statearr_43328_43385[(1)] = (8));

} else {
var statearr_43329_43386 = state_43317__$1;
(statearr_43329_43386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (15))){
var inst_43262 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43262)){
var statearr_43330_43387 = state_43317__$1;
(statearr_43330_43387[(1)] = (19));

} else {
var statearr_43331_43388 = state_43317__$1;
(statearr_43331_43388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (21))){
var inst_43267 = (state_43317[(12)]);
var inst_43267__$1 = (state_43317[(2)]);
var inst_43268 = cljs.core.get.call(null,inst_43267__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43269 = cljs.core.get.call(null,inst_43267__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43270 = cljs.core.get.call(null,inst_43267__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43317__$1 = (function (){var statearr_43332 = state_43317;
(statearr_43332[(13)] = inst_43269);

(statearr_43332[(12)] = inst_43267__$1);

(statearr_43332[(10)] = inst_43268);

return statearr_43332;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43317__$1,(22),inst_43270);
} else {
if((state_val_43318 === (31))){
var inst_43299 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43299)){
var statearr_43333_43389 = state_43317__$1;
(statearr_43333_43389[(1)] = (32));

} else {
var statearr_43334_43390 = state_43317__$1;
(statearr_43334_43390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (32))){
var inst_43276 = (state_43317[(14)]);
var state_43317__$1 = state_43317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43317__$1,(35),out,inst_43276);
} else {
if((state_val_43318 === (33))){
var inst_43267 = (state_43317[(12)]);
var inst_43244 = inst_43267;
var state_43317__$1 = (function (){var statearr_43335 = state_43317;
(statearr_43335[(7)] = inst_43244);

return statearr_43335;
})();
var statearr_43336_43391 = state_43317__$1;
(statearr_43336_43391[(2)] = null);

(statearr_43336_43391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (13))){
var inst_43244 = (state_43317[(7)]);
var inst_43251 = inst_43244.cljs$lang$protocol_mask$partition0$;
var inst_43252 = (inst_43251 & (64));
var inst_43253 = inst_43244.cljs$core$ISeq$;
var inst_43254 = (cljs.core.PROTOCOL_SENTINEL === inst_43253);
var inst_43255 = ((inst_43252) || (inst_43254));
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43255)){
var statearr_43337_43392 = state_43317__$1;
(statearr_43337_43392[(1)] = (16));

} else {
var statearr_43338_43393 = state_43317__$1;
(statearr_43338_43393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (22))){
var inst_43277 = (state_43317[(9)]);
var inst_43276 = (state_43317[(14)]);
var inst_43275 = (state_43317[(2)]);
var inst_43276__$1 = cljs.core.nth.call(null,inst_43275,(0),null);
var inst_43277__$1 = cljs.core.nth.call(null,inst_43275,(1),null);
var inst_43278 = (inst_43276__$1 == null);
var inst_43279 = cljs.core._EQ_.call(null,inst_43277__$1,change);
var inst_43280 = ((inst_43278) || (inst_43279));
var state_43317__$1 = (function (){var statearr_43339 = state_43317;
(statearr_43339[(9)] = inst_43277__$1);

(statearr_43339[(14)] = inst_43276__$1);

return statearr_43339;
})();
if(cljs.core.truth_(inst_43280)){
var statearr_43340_43394 = state_43317__$1;
(statearr_43340_43394[(1)] = (23));

} else {
var statearr_43341_43395 = state_43317__$1;
(statearr_43341_43395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (36))){
var inst_43267 = (state_43317[(12)]);
var inst_43244 = inst_43267;
var state_43317__$1 = (function (){var statearr_43342 = state_43317;
(statearr_43342[(7)] = inst_43244);

return statearr_43342;
})();
var statearr_43343_43396 = state_43317__$1;
(statearr_43343_43396[(2)] = null);

(statearr_43343_43396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (29))){
var inst_43291 = (state_43317[(11)]);
var state_43317__$1 = state_43317;
var statearr_43344_43397 = state_43317__$1;
(statearr_43344_43397[(2)] = inst_43291);

(statearr_43344_43397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (6))){
var state_43317__$1 = state_43317;
var statearr_43345_43398 = state_43317__$1;
(statearr_43345_43398[(2)] = false);

(statearr_43345_43398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (28))){
var inst_43287 = (state_43317[(2)]);
var inst_43288 = calc_state.call(null);
var inst_43244 = inst_43288;
var state_43317__$1 = (function (){var statearr_43346 = state_43317;
(statearr_43346[(7)] = inst_43244);

(statearr_43346[(15)] = inst_43287);

return statearr_43346;
})();
var statearr_43347_43399 = state_43317__$1;
(statearr_43347_43399[(2)] = null);

(statearr_43347_43399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (25))){
var inst_43313 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
var statearr_43348_43400 = state_43317__$1;
(statearr_43348_43400[(2)] = inst_43313);

(statearr_43348_43400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (34))){
var inst_43311 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
var statearr_43349_43401 = state_43317__$1;
(statearr_43349_43401[(2)] = inst_43311);

(statearr_43349_43401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (17))){
var state_43317__$1 = state_43317;
var statearr_43350_43402 = state_43317__$1;
(statearr_43350_43402[(2)] = false);

(statearr_43350_43402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (3))){
var state_43317__$1 = state_43317;
var statearr_43351_43403 = state_43317__$1;
(statearr_43351_43403[(2)] = false);

(statearr_43351_43403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (12))){
var inst_43315 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43317__$1,inst_43315);
} else {
if((state_val_43318 === (2))){
var inst_43219 = (state_43317[(8)]);
var inst_43224 = inst_43219.cljs$lang$protocol_mask$partition0$;
var inst_43225 = (inst_43224 & (64));
var inst_43226 = inst_43219.cljs$core$ISeq$;
var inst_43227 = (cljs.core.PROTOCOL_SENTINEL === inst_43226);
var inst_43228 = ((inst_43225) || (inst_43227));
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43228)){
var statearr_43352_43404 = state_43317__$1;
(statearr_43352_43404[(1)] = (5));

} else {
var statearr_43353_43405 = state_43317__$1;
(statearr_43353_43405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (23))){
var inst_43276 = (state_43317[(14)]);
var inst_43282 = (inst_43276 == null);
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43282)){
var statearr_43354_43406 = state_43317__$1;
(statearr_43354_43406[(1)] = (26));

} else {
var statearr_43355_43407 = state_43317__$1;
(statearr_43355_43407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (35))){
var inst_43302 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
if(cljs.core.truth_(inst_43302)){
var statearr_43356_43408 = state_43317__$1;
(statearr_43356_43408[(1)] = (36));

} else {
var statearr_43357_43409 = state_43317__$1;
(statearr_43357_43409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (19))){
var inst_43244 = (state_43317[(7)]);
var inst_43264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43244);
var state_43317__$1 = state_43317;
var statearr_43358_43410 = state_43317__$1;
(statearr_43358_43410[(2)] = inst_43264);

(statearr_43358_43410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (11))){
var inst_43244 = (state_43317[(7)]);
var inst_43248 = (inst_43244 == null);
var inst_43249 = cljs.core.not.call(null,inst_43248);
var state_43317__$1 = state_43317;
if(inst_43249){
var statearr_43359_43411 = state_43317__$1;
(statearr_43359_43411[(1)] = (13));

} else {
var statearr_43360_43412 = state_43317__$1;
(statearr_43360_43412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (9))){
var inst_43219 = (state_43317[(8)]);
var state_43317__$1 = state_43317;
var statearr_43361_43413 = state_43317__$1;
(statearr_43361_43413[(2)] = inst_43219);

(statearr_43361_43413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (5))){
var state_43317__$1 = state_43317;
var statearr_43362_43414 = state_43317__$1;
(statearr_43362_43414[(2)] = true);

(statearr_43362_43414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (14))){
var state_43317__$1 = state_43317;
var statearr_43363_43415 = state_43317__$1;
(statearr_43363_43415[(2)] = false);

(statearr_43363_43415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (26))){
var inst_43277 = (state_43317[(9)]);
var inst_43284 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43277);
var state_43317__$1 = state_43317;
var statearr_43364_43416 = state_43317__$1;
(statearr_43364_43416[(2)] = inst_43284);

(statearr_43364_43416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (16))){
var state_43317__$1 = state_43317;
var statearr_43365_43417 = state_43317__$1;
(statearr_43365_43417[(2)] = true);

(statearr_43365_43417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (38))){
var inst_43307 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
var statearr_43366_43418 = state_43317__$1;
(statearr_43366_43418[(2)] = inst_43307);

(statearr_43366_43418[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (30))){
var inst_43269 = (state_43317[(13)]);
var inst_43277 = (state_43317[(9)]);
var inst_43268 = (state_43317[(10)]);
var inst_43294 = cljs.core.empty_QMARK_.call(null,inst_43268);
var inst_43295 = inst_43269.call(null,inst_43277);
var inst_43296 = cljs.core.not.call(null,inst_43295);
var inst_43297 = ((inst_43294) && (inst_43296));
var state_43317__$1 = state_43317;
var statearr_43367_43419 = state_43317__$1;
(statearr_43367_43419[(2)] = inst_43297);

(statearr_43367_43419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (10))){
var inst_43219 = (state_43317[(8)]);
var inst_43240 = (state_43317[(2)]);
var inst_43241 = cljs.core.get.call(null,inst_43240,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43242 = cljs.core.get.call(null,inst_43240,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43243 = cljs.core.get.call(null,inst_43240,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43244 = inst_43219;
var state_43317__$1 = (function (){var statearr_43368 = state_43317;
(statearr_43368[(16)] = inst_43242);

(statearr_43368[(17)] = inst_43243);

(statearr_43368[(7)] = inst_43244);

(statearr_43368[(18)] = inst_43241);

return statearr_43368;
})();
var statearr_43369_43420 = state_43317__$1;
(statearr_43369_43420[(2)] = null);

(statearr_43369_43420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (18))){
var inst_43259 = (state_43317[(2)]);
var state_43317__$1 = state_43317;
var statearr_43370_43421 = state_43317__$1;
(statearr_43370_43421[(2)] = inst_43259);

(statearr_43370_43421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (37))){
var state_43317__$1 = state_43317;
var statearr_43371_43422 = state_43317__$1;
(statearr_43371_43422[(2)] = null);

(statearr_43371_43422[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43318 === (8))){
var inst_43219 = (state_43317[(8)]);
var inst_43237 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43219);
var state_43317__$1 = state_43317;
var statearr_43372_43423 = state_43317__$1;
(statearr_43372_43423[(2)] = inst_43237);

(statearr_43372_43423[(1)] = (10));


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
});})(c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22643__auto__,c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22644__auto__ = null;
var cljs$core$async$mix_$_state_machine__22644__auto____0 = (function (){
var statearr_43373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43373[(0)] = cljs$core$async$mix_$_state_machine__22644__auto__);

(statearr_43373[(1)] = (1));

return statearr_43373;
});
var cljs$core$async$mix_$_state_machine__22644__auto____1 = (function (state_43317){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43374){if((e43374 instanceof Object)){
var ex__22647__auto__ = e43374;
var statearr_43375_43424 = state_43317;
(statearr_43375_43424[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43425 = state_43317;
state_43317 = G__43425;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22644__auto__ = function(state_43317){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22644__auto____1.call(this,state_43317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22644__auto____0;
cljs$core$async$mix_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22644__auto____1;
return cljs$core$async$mix_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22733__auto__ = (function (){var statearr_43376 = f__22732__auto__.call(null);
(statearr_43376[(6)] = c__22731__auto___43377);

return statearr_43376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43427 = arguments.length;
switch (G__43427) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43431 = arguments.length;
switch (G__43431) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__43429_SHARP_){
if(cljs.core.truth_(p1__43429_SHARP_.call(null,topic))){
return p1__43429_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43429_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43432 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43433){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43433 = meta43433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43434,meta43433__$1){
var self__ = this;
var _43434__$1 = this;
return (new cljs.core.async.t_cljs$core$async43432(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43433__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43434){
var self__ = this;
var _43434__$1 = this;
return self__.meta43433;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43433","meta43433",1897408740,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43432";

cljs.core.async.t_cljs$core$async43432.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43432");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43432.
 */
cljs.core.async.__GT_t_cljs$core$async43432 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43433){
return (new cljs.core.async.t_cljs$core$async43432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43433));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43432(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22731__auto___43552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43552,mults,ensure_mult,p){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43552,mults,ensure_mult,p){
return (function (state_43506){
var state_val_43507 = (state_43506[(1)]);
if((state_val_43507 === (7))){
var inst_43502 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43508_43553 = state_43506__$1;
(statearr_43508_43553[(2)] = inst_43502);

(statearr_43508_43553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (20))){
var state_43506__$1 = state_43506;
var statearr_43509_43554 = state_43506__$1;
(statearr_43509_43554[(2)] = null);

(statearr_43509_43554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (1))){
var state_43506__$1 = state_43506;
var statearr_43510_43555 = state_43506__$1;
(statearr_43510_43555[(2)] = null);

(statearr_43510_43555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (24))){
var inst_43485 = (state_43506[(7)]);
var inst_43494 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43485);
var state_43506__$1 = state_43506;
var statearr_43511_43556 = state_43506__$1;
(statearr_43511_43556[(2)] = inst_43494);

(statearr_43511_43556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (4))){
var inst_43437 = (state_43506[(8)]);
var inst_43437__$1 = (state_43506[(2)]);
var inst_43438 = (inst_43437__$1 == null);
var state_43506__$1 = (function (){var statearr_43512 = state_43506;
(statearr_43512[(8)] = inst_43437__$1);

return statearr_43512;
})();
if(cljs.core.truth_(inst_43438)){
var statearr_43513_43557 = state_43506__$1;
(statearr_43513_43557[(1)] = (5));

} else {
var statearr_43514_43558 = state_43506__$1;
(statearr_43514_43558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (15))){
var inst_43479 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43515_43559 = state_43506__$1;
(statearr_43515_43559[(2)] = inst_43479);

(statearr_43515_43559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (21))){
var inst_43499 = (state_43506[(2)]);
var state_43506__$1 = (function (){var statearr_43516 = state_43506;
(statearr_43516[(9)] = inst_43499);

return statearr_43516;
})();
var statearr_43517_43560 = state_43506__$1;
(statearr_43517_43560[(2)] = null);

(statearr_43517_43560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (13))){
var inst_43461 = (state_43506[(10)]);
var inst_43463 = cljs.core.chunked_seq_QMARK_.call(null,inst_43461);
var state_43506__$1 = state_43506;
if(inst_43463){
var statearr_43518_43561 = state_43506__$1;
(statearr_43518_43561[(1)] = (16));

} else {
var statearr_43519_43562 = state_43506__$1;
(statearr_43519_43562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (22))){
var inst_43491 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
if(cljs.core.truth_(inst_43491)){
var statearr_43520_43563 = state_43506__$1;
(statearr_43520_43563[(1)] = (23));

} else {
var statearr_43521_43564 = state_43506__$1;
(statearr_43521_43564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (6))){
var inst_43437 = (state_43506[(8)]);
var inst_43487 = (state_43506[(11)]);
var inst_43485 = (state_43506[(7)]);
var inst_43485__$1 = topic_fn.call(null,inst_43437);
var inst_43486 = cljs.core.deref.call(null,mults);
var inst_43487__$1 = cljs.core.get.call(null,inst_43486,inst_43485__$1);
var state_43506__$1 = (function (){var statearr_43522 = state_43506;
(statearr_43522[(11)] = inst_43487__$1);

(statearr_43522[(7)] = inst_43485__$1);

return statearr_43522;
})();
if(cljs.core.truth_(inst_43487__$1)){
var statearr_43523_43565 = state_43506__$1;
(statearr_43523_43565[(1)] = (19));

} else {
var statearr_43524_43566 = state_43506__$1;
(statearr_43524_43566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (25))){
var inst_43496 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43525_43567 = state_43506__$1;
(statearr_43525_43567[(2)] = inst_43496);

(statearr_43525_43567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (17))){
var inst_43461 = (state_43506[(10)]);
var inst_43470 = cljs.core.first.call(null,inst_43461);
var inst_43471 = cljs.core.async.muxch_STAR_.call(null,inst_43470);
var inst_43472 = cljs.core.async.close_BANG_.call(null,inst_43471);
var inst_43473 = cljs.core.next.call(null,inst_43461);
var inst_43447 = inst_43473;
var inst_43448 = null;
var inst_43449 = (0);
var inst_43450 = (0);
var state_43506__$1 = (function (){var statearr_43526 = state_43506;
(statearr_43526[(12)] = inst_43472);

(statearr_43526[(13)] = inst_43448);

(statearr_43526[(14)] = inst_43449);

(statearr_43526[(15)] = inst_43450);

(statearr_43526[(16)] = inst_43447);

return statearr_43526;
})();
var statearr_43527_43568 = state_43506__$1;
(statearr_43527_43568[(2)] = null);

(statearr_43527_43568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (3))){
var inst_43504 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43506__$1,inst_43504);
} else {
if((state_val_43507 === (12))){
var inst_43481 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43528_43569 = state_43506__$1;
(statearr_43528_43569[(2)] = inst_43481);

(statearr_43528_43569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (2))){
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43506__$1,(4),ch);
} else {
if((state_val_43507 === (23))){
var state_43506__$1 = state_43506;
var statearr_43529_43570 = state_43506__$1;
(statearr_43529_43570[(2)] = null);

(statearr_43529_43570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (19))){
var inst_43437 = (state_43506[(8)]);
var inst_43487 = (state_43506[(11)]);
var inst_43489 = cljs.core.async.muxch_STAR_.call(null,inst_43487);
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43506__$1,(22),inst_43489,inst_43437);
} else {
if((state_val_43507 === (11))){
var inst_43461 = (state_43506[(10)]);
var inst_43447 = (state_43506[(16)]);
var inst_43461__$1 = cljs.core.seq.call(null,inst_43447);
var state_43506__$1 = (function (){var statearr_43530 = state_43506;
(statearr_43530[(10)] = inst_43461__$1);

return statearr_43530;
})();
if(inst_43461__$1){
var statearr_43531_43571 = state_43506__$1;
(statearr_43531_43571[(1)] = (13));

} else {
var statearr_43532_43572 = state_43506__$1;
(statearr_43532_43572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (9))){
var inst_43483 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43533_43573 = state_43506__$1;
(statearr_43533_43573[(2)] = inst_43483);

(statearr_43533_43573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (5))){
var inst_43444 = cljs.core.deref.call(null,mults);
var inst_43445 = cljs.core.vals.call(null,inst_43444);
var inst_43446 = cljs.core.seq.call(null,inst_43445);
var inst_43447 = inst_43446;
var inst_43448 = null;
var inst_43449 = (0);
var inst_43450 = (0);
var state_43506__$1 = (function (){var statearr_43534 = state_43506;
(statearr_43534[(13)] = inst_43448);

(statearr_43534[(14)] = inst_43449);

(statearr_43534[(15)] = inst_43450);

(statearr_43534[(16)] = inst_43447);

return statearr_43534;
})();
var statearr_43535_43574 = state_43506__$1;
(statearr_43535_43574[(2)] = null);

(statearr_43535_43574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (14))){
var state_43506__$1 = state_43506;
var statearr_43539_43575 = state_43506__$1;
(statearr_43539_43575[(2)] = null);

(statearr_43539_43575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (16))){
var inst_43461 = (state_43506[(10)]);
var inst_43465 = cljs.core.chunk_first.call(null,inst_43461);
var inst_43466 = cljs.core.chunk_rest.call(null,inst_43461);
var inst_43467 = cljs.core.count.call(null,inst_43465);
var inst_43447 = inst_43466;
var inst_43448 = inst_43465;
var inst_43449 = inst_43467;
var inst_43450 = (0);
var state_43506__$1 = (function (){var statearr_43540 = state_43506;
(statearr_43540[(13)] = inst_43448);

(statearr_43540[(14)] = inst_43449);

(statearr_43540[(15)] = inst_43450);

(statearr_43540[(16)] = inst_43447);

return statearr_43540;
})();
var statearr_43541_43576 = state_43506__$1;
(statearr_43541_43576[(2)] = null);

(statearr_43541_43576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (10))){
var inst_43448 = (state_43506[(13)]);
var inst_43449 = (state_43506[(14)]);
var inst_43450 = (state_43506[(15)]);
var inst_43447 = (state_43506[(16)]);
var inst_43455 = cljs.core._nth.call(null,inst_43448,inst_43450);
var inst_43456 = cljs.core.async.muxch_STAR_.call(null,inst_43455);
var inst_43457 = cljs.core.async.close_BANG_.call(null,inst_43456);
var inst_43458 = (inst_43450 + (1));
var tmp43536 = inst_43448;
var tmp43537 = inst_43449;
var tmp43538 = inst_43447;
var inst_43447__$1 = tmp43538;
var inst_43448__$1 = tmp43536;
var inst_43449__$1 = tmp43537;
var inst_43450__$1 = inst_43458;
var state_43506__$1 = (function (){var statearr_43542 = state_43506;
(statearr_43542[(17)] = inst_43457);

(statearr_43542[(13)] = inst_43448__$1);

(statearr_43542[(14)] = inst_43449__$1);

(statearr_43542[(15)] = inst_43450__$1);

(statearr_43542[(16)] = inst_43447__$1);

return statearr_43542;
})();
var statearr_43543_43577 = state_43506__$1;
(statearr_43543_43577[(2)] = null);

(statearr_43543_43577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (18))){
var inst_43476 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43544_43578 = state_43506__$1;
(statearr_43544_43578[(2)] = inst_43476);

(statearr_43544_43578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43507 === (8))){
var inst_43449 = (state_43506[(14)]);
var inst_43450 = (state_43506[(15)]);
var inst_43452 = (inst_43450 < inst_43449);
var inst_43453 = inst_43452;
var state_43506__$1 = state_43506;
if(cljs.core.truth_(inst_43453)){
var statearr_43545_43579 = state_43506__$1;
(statearr_43545_43579[(1)] = (10));

} else {
var statearr_43546_43580 = state_43506__$1;
(statearr_43546_43580[(1)] = (11));

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
});})(c__22731__auto___43552,mults,ensure_mult,p))
;
return ((function (switch__22643__auto__,c__22731__auto___43552,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_43547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43547[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_43547[(1)] = (1));

return statearr_43547;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_43506){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43548){if((e43548 instanceof Object)){
var ex__22647__auto__ = e43548;
var statearr_43549_43581 = state_43506;
(statearr_43549_43581[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43582 = state_43506;
state_43506 = G__43582;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_43506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_43506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43552,mults,ensure_mult,p))
})();
var state__22733__auto__ = (function (){var statearr_43550 = f__22732__auto__.call(null);
(statearr_43550[(6)] = c__22731__auto___43552);

return statearr_43550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43552,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43584 = arguments.length;
switch (G__43584) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43587 = arguments.length;
switch (G__43587) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43590 = arguments.length;
switch (G__43590) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22731__auto___43657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43629){
var state_val_43630 = (state_43629[(1)]);
if((state_val_43630 === (7))){
var state_43629__$1 = state_43629;
var statearr_43631_43658 = state_43629__$1;
(statearr_43631_43658[(2)] = null);

(statearr_43631_43658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (1))){
var state_43629__$1 = state_43629;
var statearr_43632_43659 = state_43629__$1;
(statearr_43632_43659[(2)] = null);

(statearr_43632_43659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (4))){
var inst_43593 = (state_43629[(7)]);
var inst_43595 = (inst_43593 < cnt);
var state_43629__$1 = state_43629;
if(cljs.core.truth_(inst_43595)){
var statearr_43633_43660 = state_43629__$1;
(statearr_43633_43660[(1)] = (6));

} else {
var statearr_43634_43661 = state_43629__$1;
(statearr_43634_43661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (15))){
var inst_43625 = (state_43629[(2)]);
var state_43629__$1 = state_43629;
var statearr_43635_43662 = state_43629__$1;
(statearr_43635_43662[(2)] = inst_43625);

(statearr_43635_43662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (13))){
var inst_43618 = cljs.core.async.close_BANG_.call(null,out);
var state_43629__$1 = state_43629;
var statearr_43636_43663 = state_43629__$1;
(statearr_43636_43663[(2)] = inst_43618);

(statearr_43636_43663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (6))){
var state_43629__$1 = state_43629;
var statearr_43637_43664 = state_43629__$1;
(statearr_43637_43664[(2)] = null);

(statearr_43637_43664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (3))){
var inst_43627 = (state_43629[(2)]);
var state_43629__$1 = state_43629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43629__$1,inst_43627);
} else {
if((state_val_43630 === (12))){
var inst_43615 = (state_43629[(8)]);
var inst_43615__$1 = (state_43629[(2)]);
var inst_43616 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43615__$1);
var state_43629__$1 = (function (){var statearr_43638 = state_43629;
(statearr_43638[(8)] = inst_43615__$1);

return statearr_43638;
})();
if(cljs.core.truth_(inst_43616)){
var statearr_43639_43665 = state_43629__$1;
(statearr_43639_43665[(1)] = (13));

} else {
var statearr_43640_43666 = state_43629__$1;
(statearr_43640_43666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (2))){
var inst_43592 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43593 = (0);
var state_43629__$1 = (function (){var statearr_43641 = state_43629;
(statearr_43641[(9)] = inst_43592);

(statearr_43641[(7)] = inst_43593);

return statearr_43641;
})();
var statearr_43642_43667 = state_43629__$1;
(statearr_43642_43667[(2)] = null);

(statearr_43642_43667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (11))){
var inst_43593 = (state_43629[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43629,(10),Object,null,(9));
var inst_43602 = chs__$1.call(null,inst_43593);
var inst_43603 = done.call(null,inst_43593);
var inst_43604 = cljs.core.async.take_BANG_.call(null,inst_43602,inst_43603);
var state_43629__$1 = state_43629;
var statearr_43643_43668 = state_43629__$1;
(statearr_43643_43668[(2)] = inst_43604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (9))){
var inst_43593 = (state_43629[(7)]);
var inst_43606 = (state_43629[(2)]);
var inst_43607 = (inst_43593 + (1));
var inst_43593__$1 = inst_43607;
var state_43629__$1 = (function (){var statearr_43644 = state_43629;
(statearr_43644[(10)] = inst_43606);

(statearr_43644[(7)] = inst_43593__$1);

return statearr_43644;
})();
var statearr_43645_43669 = state_43629__$1;
(statearr_43645_43669[(2)] = null);

(statearr_43645_43669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (5))){
var inst_43613 = (state_43629[(2)]);
var state_43629__$1 = (function (){var statearr_43646 = state_43629;
(statearr_43646[(11)] = inst_43613);

return statearr_43646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43629__$1,(12),dchan);
} else {
if((state_val_43630 === (14))){
var inst_43615 = (state_43629[(8)]);
var inst_43620 = cljs.core.apply.call(null,f,inst_43615);
var state_43629__$1 = state_43629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43629__$1,(16),out,inst_43620);
} else {
if((state_val_43630 === (16))){
var inst_43622 = (state_43629[(2)]);
var state_43629__$1 = (function (){var statearr_43647 = state_43629;
(statearr_43647[(12)] = inst_43622);

return statearr_43647;
})();
var statearr_43648_43670 = state_43629__$1;
(statearr_43648_43670[(2)] = null);

(statearr_43648_43670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (10))){
var inst_43597 = (state_43629[(2)]);
var inst_43598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43629__$1 = (function (){var statearr_43649 = state_43629;
(statearr_43649[(13)] = inst_43597);

return statearr_43649;
})();
var statearr_43650_43671 = state_43629__$1;
(statearr_43650_43671[(2)] = inst_43598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43630 === (8))){
var inst_43611 = (state_43629[(2)]);
var state_43629__$1 = state_43629;
var statearr_43651_43672 = state_43629__$1;
(statearr_43651_43672[(2)] = inst_43611);

(statearr_43651_43672[(1)] = (5));


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
});})(c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22643__auto__,c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_43652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43652[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_43652[(1)] = (1));

return statearr_43652;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_43629){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43653){if((e43653 instanceof Object)){
var ex__22647__auto__ = e43653;
var statearr_43654_43673 = state_43629;
(statearr_43654_43673[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43674 = state_43629;
state_43629 = G__43674;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_43629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_43629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22733__auto__ = (function (){var statearr_43655 = f__22732__auto__.call(null);
(statearr_43655[(6)] = c__22731__auto___43657);

return statearr_43655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43657,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43677 = arguments.length;
switch (G__43677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___43731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43731,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43731,out){
return (function (state_43709){
var state_val_43710 = (state_43709[(1)]);
if((state_val_43710 === (7))){
var inst_43688 = (state_43709[(7)]);
var inst_43689 = (state_43709[(8)]);
var inst_43688__$1 = (state_43709[(2)]);
var inst_43689__$1 = cljs.core.nth.call(null,inst_43688__$1,(0),null);
var inst_43690 = cljs.core.nth.call(null,inst_43688__$1,(1),null);
var inst_43691 = (inst_43689__$1 == null);
var state_43709__$1 = (function (){var statearr_43711 = state_43709;
(statearr_43711[(7)] = inst_43688__$1);

(statearr_43711[(8)] = inst_43689__$1);

(statearr_43711[(9)] = inst_43690);

return statearr_43711;
})();
if(cljs.core.truth_(inst_43691)){
var statearr_43712_43732 = state_43709__$1;
(statearr_43712_43732[(1)] = (8));

} else {
var statearr_43713_43733 = state_43709__$1;
(statearr_43713_43733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (1))){
var inst_43678 = cljs.core.vec.call(null,chs);
var inst_43679 = inst_43678;
var state_43709__$1 = (function (){var statearr_43714 = state_43709;
(statearr_43714[(10)] = inst_43679);

return statearr_43714;
})();
var statearr_43715_43734 = state_43709__$1;
(statearr_43715_43734[(2)] = null);

(statearr_43715_43734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (4))){
var inst_43679 = (state_43709[(10)]);
var state_43709__$1 = state_43709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43709__$1,(7),inst_43679);
} else {
if((state_val_43710 === (6))){
var inst_43705 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43716_43735 = state_43709__$1;
(statearr_43716_43735[(2)] = inst_43705);

(statearr_43716_43735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (3))){
var inst_43707 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43709__$1,inst_43707);
} else {
if((state_val_43710 === (2))){
var inst_43679 = (state_43709[(10)]);
var inst_43681 = cljs.core.count.call(null,inst_43679);
var inst_43682 = (inst_43681 > (0));
var state_43709__$1 = state_43709;
if(cljs.core.truth_(inst_43682)){
var statearr_43718_43736 = state_43709__$1;
(statearr_43718_43736[(1)] = (4));

} else {
var statearr_43719_43737 = state_43709__$1;
(statearr_43719_43737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (11))){
var inst_43679 = (state_43709[(10)]);
var inst_43698 = (state_43709[(2)]);
var tmp43717 = inst_43679;
var inst_43679__$1 = tmp43717;
var state_43709__$1 = (function (){var statearr_43720 = state_43709;
(statearr_43720[(11)] = inst_43698);

(statearr_43720[(10)] = inst_43679__$1);

return statearr_43720;
})();
var statearr_43721_43738 = state_43709__$1;
(statearr_43721_43738[(2)] = null);

(statearr_43721_43738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (9))){
var inst_43689 = (state_43709[(8)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43709__$1,(11),out,inst_43689);
} else {
if((state_val_43710 === (5))){
var inst_43703 = cljs.core.async.close_BANG_.call(null,out);
var state_43709__$1 = state_43709;
var statearr_43722_43739 = state_43709__$1;
(statearr_43722_43739[(2)] = inst_43703);

(statearr_43722_43739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (10))){
var inst_43701 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43723_43740 = state_43709__$1;
(statearr_43723_43740[(2)] = inst_43701);

(statearr_43723_43740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (8))){
var inst_43688 = (state_43709[(7)]);
var inst_43689 = (state_43709[(8)]);
var inst_43679 = (state_43709[(10)]);
var inst_43690 = (state_43709[(9)]);
var inst_43693 = (function (){var cs = inst_43679;
var vec__43684 = inst_43688;
var v = inst_43689;
var c = inst_43690;
return ((function (cs,vec__43684,v,c,inst_43688,inst_43689,inst_43679,inst_43690,state_val_43710,c__22731__auto___43731,out){
return (function (p1__43675_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43675_SHARP_);
});
;})(cs,vec__43684,v,c,inst_43688,inst_43689,inst_43679,inst_43690,state_val_43710,c__22731__auto___43731,out))
})();
var inst_43694 = cljs.core.filterv.call(null,inst_43693,inst_43679);
var inst_43679__$1 = inst_43694;
var state_43709__$1 = (function (){var statearr_43724 = state_43709;
(statearr_43724[(10)] = inst_43679__$1);

return statearr_43724;
})();
var statearr_43725_43741 = state_43709__$1;
(statearr_43725_43741[(2)] = null);

(statearr_43725_43741[(1)] = (2));


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
});})(c__22731__auto___43731,out))
;
return ((function (switch__22643__auto__,c__22731__auto___43731,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_43726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43726[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_43726[(1)] = (1));

return statearr_43726;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_43709){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43727){if((e43727 instanceof Object)){
var ex__22647__auto__ = e43727;
var statearr_43728_43742 = state_43709;
(statearr_43728_43742[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43743 = state_43709;
state_43709 = G__43743;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_43709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_43709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43731,out))
})();
var state__22733__auto__ = (function (){var statearr_43729 = f__22732__auto__.call(null);
(statearr_43729[(6)] = c__22731__auto___43731);

return statearr_43729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43731,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43745 = arguments.length;
switch (G__43745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___43790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43790,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43790,out){
return (function (state_43769){
var state_val_43770 = (state_43769[(1)]);
if((state_val_43770 === (7))){
var inst_43751 = (state_43769[(7)]);
var inst_43751__$1 = (state_43769[(2)]);
var inst_43752 = (inst_43751__$1 == null);
var inst_43753 = cljs.core.not.call(null,inst_43752);
var state_43769__$1 = (function (){var statearr_43771 = state_43769;
(statearr_43771[(7)] = inst_43751__$1);

return statearr_43771;
})();
if(inst_43753){
var statearr_43772_43791 = state_43769__$1;
(statearr_43772_43791[(1)] = (8));

} else {
var statearr_43773_43792 = state_43769__$1;
(statearr_43773_43792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (1))){
var inst_43746 = (0);
var state_43769__$1 = (function (){var statearr_43774 = state_43769;
(statearr_43774[(8)] = inst_43746);

return statearr_43774;
})();
var statearr_43775_43793 = state_43769__$1;
(statearr_43775_43793[(2)] = null);

(statearr_43775_43793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (4))){
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43769__$1,(7),ch);
} else {
if((state_val_43770 === (6))){
var inst_43764 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43776_43794 = state_43769__$1;
(statearr_43776_43794[(2)] = inst_43764);

(statearr_43776_43794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (3))){
var inst_43766 = (state_43769[(2)]);
var inst_43767 = cljs.core.async.close_BANG_.call(null,out);
var state_43769__$1 = (function (){var statearr_43777 = state_43769;
(statearr_43777[(9)] = inst_43766);

return statearr_43777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43769__$1,inst_43767);
} else {
if((state_val_43770 === (2))){
var inst_43746 = (state_43769[(8)]);
var inst_43748 = (inst_43746 < n);
var state_43769__$1 = state_43769;
if(cljs.core.truth_(inst_43748)){
var statearr_43778_43795 = state_43769__$1;
(statearr_43778_43795[(1)] = (4));

} else {
var statearr_43779_43796 = state_43769__$1;
(statearr_43779_43796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (11))){
var inst_43746 = (state_43769[(8)]);
var inst_43756 = (state_43769[(2)]);
var inst_43757 = (inst_43746 + (1));
var inst_43746__$1 = inst_43757;
var state_43769__$1 = (function (){var statearr_43780 = state_43769;
(statearr_43780[(10)] = inst_43756);

(statearr_43780[(8)] = inst_43746__$1);

return statearr_43780;
})();
var statearr_43781_43797 = state_43769__$1;
(statearr_43781_43797[(2)] = null);

(statearr_43781_43797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (9))){
var state_43769__$1 = state_43769;
var statearr_43782_43798 = state_43769__$1;
(statearr_43782_43798[(2)] = null);

(statearr_43782_43798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (5))){
var state_43769__$1 = state_43769;
var statearr_43783_43799 = state_43769__$1;
(statearr_43783_43799[(2)] = null);

(statearr_43783_43799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (10))){
var inst_43761 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43784_43800 = state_43769__$1;
(statearr_43784_43800[(2)] = inst_43761);

(statearr_43784_43800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (8))){
var inst_43751 = (state_43769[(7)]);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43769__$1,(11),out,inst_43751);
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
});})(c__22731__auto___43790,out))
;
return ((function (switch__22643__auto__,c__22731__auto___43790,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_43785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43785[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_43785[(1)] = (1));

return statearr_43785;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_43769){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43786){if((e43786 instanceof Object)){
var ex__22647__auto__ = e43786;
var statearr_43787_43801 = state_43769;
(statearr_43787_43801[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43802 = state_43769;
state_43769 = G__43802;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_43769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_43769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43790,out))
})();
var state__22733__auto__ = (function (){var statearr_43788 = f__22732__auto__.call(null);
(statearr_43788[(6)] = c__22731__auto___43790);

return statearr_43788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43790,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43804 = (function (f,ch,meta43805){
this.f = f;
this.ch = ch;
this.meta43805 = meta43805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43806,meta43805__$1){
var self__ = this;
var _43806__$1 = this;
return (new cljs.core.async.t_cljs$core$async43804(self__.f,self__.ch,meta43805__$1));
});

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43806){
var self__ = this;
var _43806__$1 = this;
return self__.meta43805;
});

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43807 = (function (f,ch,meta43805,_,fn1,meta43808){
this.f = f;
this.ch = ch;
this.meta43805 = meta43805;
this._ = _;
this.fn1 = fn1;
this.meta43808 = meta43808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43809,meta43808__$1){
var self__ = this;
var _43809__$1 = this;
return (new cljs.core.async.t_cljs$core$async43807(self__.f,self__.ch,self__.meta43805,self__._,self__.fn1,meta43808__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43809){
var self__ = this;
var _43809__$1 = this;
return self__.meta43808;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43803_SHARP_){
return f1.call(null,(((p1__43803_SHARP_ == null))?null:self__.f.call(null,p1__43803_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43805","meta43805",1037880886,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43804","cljs.core.async/t_cljs$core$async43804",-280760367,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43808","meta43808",-1543559137,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43807";

cljs.core.async.t_cljs$core$async43807.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43807");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43807.
 */
cljs.core.async.__GT_t_cljs$core$async43807 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43807(f__$1,ch__$1,meta43805__$1,___$2,fn1__$1,meta43808){
return (new cljs.core.async.t_cljs$core$async43807(f__$1,ch__$1,meta43805__$1,___$2,fn1__$1,meta43808));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43807(self__.f,self__.ch,self__.meta43805,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43805","meta43805",1037880886,null)], null);
});

cljs.core.async.t_cljs$core$async43804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43804";

cljs.core.async.t_cljs$core$async43804.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43804.
 */
cljs.core.async.__GT_t_cljs$core$async43804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43804(f__$1,ch__$1,meta43805){
return (new cljs.core.async.t_cljs$core$async43804(f__$1,ch__$1,meta43805));
});

}

return (new cljs.core.async.t_cljs$core$async43804(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43810 = (function (f,ch,meta43811){
this.f = f;
this.ch = ch;
this.meta43811 = meta43811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43812,meta43811__$1){
var self__ = this;
var _43812__$1 = this;
return (new cljs.core.async.t_cljs$core$async43810(self__.f,self__.ch,meta43811__$1));
});

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43812){
var self__ = this;
var _43812__$1 = this;
return self__.meta43811;
});

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43811","meta43811",867731699,null)], null);
});

cljs.core.async.t_cljs$core$async43810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43810";

cljs.core.async.t_cljs$core$async43810.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43810.
 */
cljs.core.async.__GT_t_cljs$core$async43810 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43810(f__$1,ch__$1,meta43811){
return (new cljs.core.async.t_cljs$core$async43810(f__$1,ch__$1,meta43811));
});

}

return (new cljs.core.async.t_cljs$core$async43810(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43813 = (function (p,ch,meta43814){
this.p = p;
this.ch = ch;
this.meta43814 = meta43814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43815,meta43814__$1){
var self__ = this;
var _43815__$1 = this;
return (new cljs.core.async.t_cljs$core$async43813(self__.p,self__.ch,meta43814__$1));
});

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43815){
var self__ = this;
var _43815__$1 = this;
return self__.meta43814;
});

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43814","meta43814",-1804563026,null)], null);
});

cljs.core.async.t_cljs$core$async43813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43813";

cljs.core.async.t_cljs$core$async43813.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43813");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43813.
 */
cljs.core.async.__GT_t_cljs$core$async43813 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43813(p__$1,ch__$1,meta43814){
return (new cljs.core.async.t_cljs$core$async43813(p__$1,ch__$1,meta43814));
});

}

return (new cljs.core.async.t_cljs$core$async43813(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43817 = arguments.length;
switch (G__43817) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___43857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___43857,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___43857,out){
return (function (state_43838){
var state_val_43839 = (state_43838[(1)]);
if((state_val_43839 === (7))){
var inst_43834 = (state_43838[(2)]);
var state_43838__$1 = state_43838;
var statearr_43840_43858 = state_43838__$1;
(statearr_43840_43858[(2)] = inst_43834);

(statearr_43840_43858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (1))){
var state_43838__$1 = state_43838;
var statearr_43841_43859 = state_43838__$1;
(statearr_43841_43859[(2)] = null);

(statearr_43841_43859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (4))){
var inst_43820 = (state_43838[(7)]);
var inst_43820__$1 = (state_43838[(2)]);
var inst_43821 = (inst_43820__$1 == null);
var state_43838__$1 = (function (){var statearr_43842 = state_43838;
(statearr_43842[(7)] = inst_43820__$1);

return statearr_43842;
})();
if(cljs.core.truth_(inst_43821)){
var statearr_43843_43860 = state_43838__$1;
(statearr_43843_43860[(1)] = (5));

} else {
var statearr_43844_43861 = state_43838__$1;
(statearr_43844_43861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (6))){
var inst_43820 = (state_43838[(7)]);
var inst_43825 = p.call(null,inst_43820);
var state_43838__$1 = state_43838;
if(cljs.core.truth_(inst_43825)){
var statearr_43845_43862 = state_43838__$1;
(statearr_43845_43862[(1)] = (8));

} else {
var statearr_43846_43863 = state_43838__$1;
(statearr_43846_43863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (3))){
var inst_43836 = (state_43838[(2)]);
var state_43838__$1 = state_43838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43838__$1,inst_43836);
} else {
if((state_val_43839 === (2))){
var state_43838__$1 = state_43838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43838__$1,(4),ch);
} else {
if((state_val_43839 === (11))){
var inst_43828 = (state_43838[(2)]);
var state_43838__$1 = state_43838;
var statearr_43847_43864 = state_43838__$1;
(statearr_43847_43864[(2)] = inst_43828);

(statearr_43847_43864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (9))){
var state_43838__$1 = state_43838;
var statearr_43848_43865 = state_43838__$1;
(statearr_43848_43865[(2)] = null);

(statearr_43848_43865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (5))){
var inst_43823 = cljs.core.async.close_BANG_.call(null,out);
var state_43838__$1 = state_43838;
var statearr_43849_43866 = state_43838__$1;
(statearr_43849_43866[(2)] = inst_43823);

(statearr_43849_43866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (10))){
var inst_43831 = (state_43838[(2)]);
var state_43838__$1 = (function (){var statearr_43850 = state_43838;
(statearr_43850[(8)] = inst_43831);

return statearr_43850;
})();
var statearr_43851_43867 = state_43838__$1;
(statearr_43851_43867[(2)] = null);

(statearr_43851_43867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43839 === (8))){
var inst_43820 = (state_43838[(7)]);
var state_43838__$1 = state_43838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43838__$1,(11),out,inst_43820);
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
});})(c__22731__auto___43857,out))
;
return ((function (switch__22643__auto__,c__22731__auto___43857,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_43852 = [null,null,null,null,null,null,null,null,null];
(statearr_43852[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_43852[(1)] = (1));

return statearr_43852;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_43838){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43853){if((e43853 instanceof Object)){
var ex__22647__auto__ = e43853;
var statearr_43854_43868 = state_43838;
(statearr_43854_43868[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43869 = state_43838;
state_43838 = G__43869;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_43838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_43838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___43857,out))
})();
var state__22733__auto__ = (function (){var statearr_43855 = f__22732__auto__.call(null);
(statearr_43855[(6)] = c__22731__auto___43857);

return statearr_43855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___43857,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43871 = arguments.length;
switch (G__43871) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22731__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto__){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto__){
return (function (state_43934){
var state_val_43935 = (state_43934[(1)]);
if((state_val_43935 === (7))){
var inst_43930 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
var statearr_43936_43974 = state_43934__$1;
(statearr_43936_43974[(2)] = inst_43930);

(statearr_43936_43974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (20))){
var inst_43900 = (state_43934[(7)]);
var inst_43911 = (state_43934[(2)]);
var inst_43912 = cljs.core.next.call(null,inst_43900);
var inst_43886 = inst_43912;
var inst_43887 = null;
var inst_43888 = (0);
var inst_43889 = (0);
var state_43934__$1 = (function (){var statearr_43937 = state_43934;
(statearr_43937[(8)] = inst_43888);

(statearr_43937[(9)] = inst_43889);

(statearr_43937[(10)] = inst_43887);

(statearr_43937[(11)] = inst_43911);

(statearr_43937[(12)] = inst_43886);

return statearr_43937;
})();
var statearr_43938_43975 = state_43934__$1;
(statearr_43938_43975[(2)] = null);

(statearr_43938_43975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (1))){
var state_43934__$1 = state_43934;
var statearr_43939_43976 = state_43934__$1;
(statearr_43939_43976[(2)] = null);

(statearr_43939_43976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (4))){
var inst_43875 = (state_43934[(13)]);
var inst_43875__$1 = (state_43934[(2)]);
var inst_43876 = (inst_43875__$1 == null);
var state_43934__$1 = (function (){var statearr_43940 = state_43934;
(statearr_43940[(13)] = inst_43875__$1);

return statearr_43940;
})();
if(cljs.core.truth_(inst_43876)){
var statearr_43941_43977 = state_43934__$1;
(statearr_43941_43977[(1)] = (5));

} else {
var statearr_43942_43978 = state_43934__$1;
(statearr_43942_43978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (15))){
var state_43934__$1 = state_43934;
var statearr_43946_43979 = state_43934__$1;
(statearr_43946_43979[(2)] = null);

(statearr_43946_43979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (21))){
var state_43934__$1 = state_43934;
var statearr_43947_43980 = state_43934__$1;
(statearr_43947_43980[(2)] = null);

(statearr_43947_43980[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (13))){
var inst_43888 = (state_43934[(8)]);
var inst_43889 = (state_43934[(9)]);
var inst_43887 = (state_43934[(10)]);
var inst_43886 = (state_43934[(12)]);
var inst_43896 = (state_43934[(2)]);
var inst_43897 = (inst_43889 + (1));
var tmp43943 = inst_43888;
var tmp43944 = inst_43887;
var tmp43945 = inst_43886;
var inst_43886__$1 = tmp43945;
var inst_43887__$1 = tmp43944;
var inst_43888__$1 = tmp43943;
var inst_43889__$1 = inst_43897;
var state_43934__$1 = (function (){var statearr_43948 = state_43934;
(statearr_43948[(8)] = inst_43888__$1);

(statearr_43948[(14)] = inst_43896);

(statearr_43948[(9)] = inst_43889__$1);

(statearr_43948[(10)] = inst_43887__$1);

(statearr_43948[(12)] = inst_43886__$1);

return statearr_43948;
})();
var statearr_43949_43981 = state_43934__$1;
(statearr_43949_43981[(2)] = null);

(statearr_43949_43981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (22))){
var state_43934__$1 = state_43934;
var statearr_43950_43982 = state_43934__$1;
(statearr_43950_43982[(2)] = null);

(statearr_43950_43982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (6))){
var inst_43875 = (state_43934[(13)]);
var inst_43884 = f.call(null,inst_43875);
var inst_43885 = cljs.core.seq.call(null,inst_43884);
var inst_43886 = inst_43885;
var inst_43887 = null;
var inst_43888 = (0);
var inst_43889 = (0);
var state_43934__$1 = (function (){var statearr_43951 = state_43934;
(statearr_43951[(8)] = inst_43888);

(statearr_43951[(9)] = inst_43889);

(statearr_43951[(10)] = inst_43887);

(statearr_43951[(12)] = inst_43886);

return statearr_43951;
})();
var statearr_43952_43983 = state_43934__$1;
(statearr_43952_43983[(2)] = null);

(statearr_43952_43983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (17))){
var inst_43900 = (state_43934[(7)]);
var inst_43904 = cljs.core.chunk_first.call(null,inst_43900);
var inst_43905 = cljs.core.chunk_rest.call(null,inst_43900);
var inst_43906 = cljs.core.count.call(null,inst_43904);
var inst_43886 = inst_43905;
var inst_43887 = inst_43904;
var inst_43888 = inst_43906;
var inst_43889 = (0);
var state_43934__$1 = (function (){var statearr_43953 = state_43934;
(statearr_43953[(8)] = inst_43888);

(statearr_43953[(9)] = inst_43889);

(statearr_43953[(10)] = inst_43887);

(statearr_43953[(12)] = inst_43886);

return statearr_43953;
})();
var statearr_43954_43984 = state_43934__$1;
(statearr_43954_43984[(2)] = null);

(statearr_43954_43984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (3))){
var inst_43932 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43934__$1,inst_43932);
} else {
if((state_val_43935 === (12))){
var inst_43920 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
var statearr_43955_43985 = state_43934__$1;
(statearr_43955_43985[(2)] = inst_43920);

(statearr_43955_43985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (2))){
var state_43934__$1 = state_43934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43934__$1,(4),in$);
} else {
if((state_val_43935 === (23))){
var inst_43928 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
var statearr_43956_43986 = state_43934__$1;
(statearr_43956_43986[(2)] = inst_43928);

(statearr_43956_43986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (19))){
var inst_43915 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
var statearr_43957_43987 = state_43934__$1;
(statearr_43957_43987[(2)] = inst_43915);

(statearr_43957_43987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (11))){
var inst_43900 = (state_43934[(7)]);
var inst_43886 = (state_43934[(12)]);
var inst_43900__$1 = cljs.core.seq.call(null,inst_43886);
var state_43934__$1 = (function (){var statearr_43958 = state_43934;
(statearr_43958[(7)] = inst_43900__$1);

return statearr_43958;
})();
if(inst_43900__$1){
var statearr_43959_43988 = state_43934__$1;
(statearr_43959_43988[(1)] = (14));

} else {
var statearr_43960_43989 = state_43934__$1;
(statearr_43960_43989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (9))){
var inst_43922 = (state_43934[(2)]);
var inst_43923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43934__$1 = (function (){var statearr_43961 = state_43934;
(statearr_43961[(15)] = inst_43922);

return statearr_43961;
})();
if(cljs.core.truth_(inst_43923)){
var statearr_43962_43990 = state_43934__$1;
(statearr_43962_43990[(1)] = (21));

} else {
var statearr_43963_43991 = state_43934__$1;
(statearr_43963_43991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (5))){
var inst_43878 = cljs.core.async.close_BANG_.call(null,out);
var state_43934__$1 = state_43934;
var statearr_43964_43992 = state_43934__$1;
(statearr_43964_43992[(2)] = inst_43878);

(statearr_43964_43992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (14))){
var inst_43900 = (state_43934[(7)]);
var inst_43902 = cljs.core.chunked_seq_QMARK_.call(null,inst_43900);
var state_43934__$1 = state_43934;
if(inst_43902){
var statearr_43965_43993 = state_43934__$1;
(statearr_43965_43993[(1)] = (17));

} else {
var statearr_43966_43994 = state_43934__$1;
(statearr_43966_43994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (16))){
var inst_43918 = (state_43934[(2)]);
var state_43934__$1 = state_43934;
var statearr_43967_43995 = state_43934__$1;
(statearr_43967_43995[(2)] = inst_43918);

(statearr_43967_43995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43935 === (10))){
var inst_43889 = (state_43934[(9)]);
var inst_43887 = (state_43934[(10)]);
var inst_43894 = cljs.core._nth.call(null,inst_43887,inst_43889);
var state_43934__$1 = state_43934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43934__$1,(13),out,inst_43894);
} else {
if((state_val_43935 === (18))){
var inst_43900 = (state_43934[(7)]);
var inst_43909 = cljs.core.first.call(null,inst_43900);
var state_43934__$1 = state_43934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43934__$1,(20),out,inst_43909);
} else {
if((state_val_43935 === (8))){
var inst_43888 = (state_43934[(8)]);
var inst_43889 = (state_43934[(9)]);
var inst_43891 = (inst_43889 < inst_43888);
var inst_43892 = inst_43891;
var state_43934__$1 = state_43934;
if(cljs.core.truth_(inst_43892)){
var statearr_43968_43996 = state_43934__$1;
(statearr_43968_43996[(1)] = (10));

} else {
var statearr_43969_43997 = state_43934__$1;
(statearr_43969_43997[(1)] = (11));

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
});})(c__22731__auto__))
;
return ((function (switch__22643__auto__,c__22731__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____0 = (function (){
var statearr_43970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__);

(statearr_43970[(1)] = (1));

return statearr_43970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____1 = (function (state_43934){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_43934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e43971){if((e43971 instanceof Object)){
var ex__22647__auto__ = e43971;
var statearr_43972_43998 = state_43934;
(statearr_43972_43998[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43999 = state_43934;
state_43934 = G__43999;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__ = function(state_43934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____1.call(this,state_43934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22644__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto__))
})();
var state__22733__auto__ = (function (){var statearr_43973 = f__22732__auto__.call(null);
(statearr_43973[(6)] = c__22731__auto__);

return statearr_43973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto__))
);

return c__22731__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44001 = arguments.length;
switch (G__44001) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44004 = arguments.length;
switch (G__44004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44007 = arguments.length;
switch (G__44007) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___44054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___44054,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___44054,out){
return (function (state_44031){
var state_val_44032 = (state_44031[(1)]);
if((state_val_44032 === (7))){
var inst_44026 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44033_44055 = state_44031__$1;
(statearr_44033_44055[(2)] = inst_44026);

(statearr_44033_44055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (1))){
var inst_44008 = null;
var state_44031__$1 = (function (){var statearr_44034 = state_44031;
(statearr_44034[(7)] = inst_44008);

return statearr_44034;
})();
var statearr_44035_44056 = state_44031__$1;
(statearr_44035_44056[(2)] = null);

(statearr_44035_44056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (4))){
var inst_44011 = (state_44031[(8)]);
var inst_44011__$1 = (state_44031[(2)]);
var inst_44012 = (inst_44011__$1 == null);
var inst_44013 = cljs.core.not.call(null,inst_44012);
var state_44031__$1 = (function (){var statearr_44036 = state_44031;
(statearr_44036[(8)] = inst_44011__$1);

return statearr_44036;
})();
if(inst_44013){
var statearr_44037_44057 = state_44031__$1;
(statearr_44037_44057[(1)] = (5));

} else {
var statearr_44038_44058 = state_44031__$1;
(statearr_44038_44058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (6))){
var state_44031__$1 = state_44031;
var statearr_44039_44059 = state_44031__$1;
(statearr_44039_44059[(2)] = null);

(statearr_44039_44059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (3))){
var inst_44028 = (state_44031[(2)]);
var inst_44029 = cljs.core.async.close_BANG_.call(null,out);
var state_44031__$1 = (function (){var statearr_44040 = state_44031;
(statearr_44040[(9)] = inst_44028);

return statearr_44040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44031__$1,inst_44029);
} else {
if((state_val_44032 === (2))){
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44031__$1,(4),ch);
} else {
if((state_val_44032 === (11))){
var inst_44011 = (state_44031[(8)]);
var inst_44020 = (state_44031[(2)]);
var inst_44008 = inst_44011;
var state_44031__$1 = (function (){var statearr_44041 = state_44031;
(statearr_44041[(10)] = inst_44020);

(statearr_44041[(7)] = inst_44008);

return statearr_44041;
})();
var statearr_44042_44060 = state_44031__$1;
(statearr_44042_44060[(2)] = null);

(statearr_44042_44060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (9))){
var inst_44011 = (state_44031[(8)]);
var state_44031__$1 = state_44031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44031__$1,(11),out,inst_44011);
} else {
if((state_val_44032 === (5))){
var inst_44008 = (state_44031[(7)]);
var inst_44011 = (state_44031[(8)]);
var inst_44015 = cljs.core._EQ_.call(null,inst_44011,inst_44008);
var state_44031__$1 = state_44031;
if(inst_44015){
var statearr_44044_44061 = state_44031__$1;
(statearr_44044_44061[(1)] = (8));

} else {
var statearr_44045_44062 = state_44031__$1;
(statearr_44045_44062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (10))){
var inst_44023 = (state_44031[(2)]);
var state_44031__$1 = state_44031;
var statearr_44046_44063 = state_44031__$1;
(statearr_44046_44063[(2)] = inst_44023);

(statearr_44046_44063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44032 === (8))){
var inst_44008 = (state_44031[(7)]);
var tmp44043 = inst_44008;
var inst_44008__$1 = tmp44043;
var state_44031__$1 = (function (){var statearr_44047 = state_44031;
(statearr_44047[(7)] = inst_44008__$1);

return statearr_44047;
})();
var statearr_44048_44064 = state_44031__$1;
(statearr_44048_44064[(2)] = null);

(statearr_44048_44064[(1)] = (2));


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
});})(c__22731__auto___44054,out))
;
return ((function (switch__22643__auto__,c__22731__auto___44054,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_44049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44049[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_44049[(1)] = (1));

return statearr_44049;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_44031){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_44031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e44050){if((e44050 instanceof Object)){
var ex__22647__auto__ = e44050;
var statearr_44051_44065 = state_44031;
(statearr_44051_44065[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44066 = state_44031;
state_44031 = G__44066;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_44031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_44031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___44054,out))
})();
var state__22733__auto__ = (function (){var statearr_44052 = f__22732__auto__.call(null);
(statearr_44052[(6)] = c__22731__auto___44054);

return statearr_44052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___44054,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44068 = arguments.length;
switch (G__44068) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___44134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___44134,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___44134,out){
return (function (state_44106){
var state_val_44107 = (state_44106[(1)]);
if((state_val_44107 === (7))){
var inst_44102 = (state_44106[(2)]);
var state_44106__$1 = state_44106;
var statearr_44108_44135 = state_44106__$1;
(statearr_44108_44135[(2)] = inst_44102);

(statearr_44108_44135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (1))){
var inst_44069 = (new Array(n));
var inst_44070 = inst_44069;
var inst_44071 = (0);
var state_44106__$1 = (function (){var statearr_44109 = state_44106;
(statearr_44109[(7)] = inst_44071);

(statearr_44109[(8)] = inst_44070);

return statearr_44109;
})();
var statearr_44110_44136 = state_44106__$1;
(statearr_44110_44136[(2)] = null);

(statearr_44110_44136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (4))){
var inst_44074 = (state_44106[(9)]);
var inst_44074__$1 = (state_44106[(2)]);
var inst_44075 = (inst_44074__$1 == null);
var inst_44076 = cljs.core.not.call(null,inst_44075);
var state_44106__$1 = (function (){var statearr_44111 = state_44106;
(statearr_44111[(9)] = inst_44074__$1);

return statearr_44111;
})();
if(inst_44076){
var statearr_44112_44137 = state_44106__$1;
(statearr_44112_44137[(1)] = (5));

} else {
var statearr_44113_44138 = state_44106__$1;
(statearr_44113_44138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (15))){
var inst_44096 = (state_44106[(2)]);
var state_44106__$1 = state_44106;
var statearr_44114_44139 = state_44106__$1;
(statearr_44114_44139[(2)] = inst_44096);

(statearr_44114_44139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (13))){
var state_44106__$1 = state_44106;
var statearr_44115_44140 = state_44106__$1;
(statearr_44115_44140[(2)] = null);

(statearr_44115_44140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (6))){
var inst_44071 = (state_44106[(7)]);
var inst_44092 = (inst_44071 > (0));
var state_44106__$1 = state_44106;
if(cljs.core.truth_(inst_44092)){
var statearr_44116_44141 = state_44106__$1;
(statearr_44116_44141[(1)] = (12));

} else {
var statearr_44117_44142 = state_44106__$1;
(statearr_44117_44142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (3))){
var inst_44104 = (state_44106[(2)]);
var state_44106__$1 = state_44106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44106__$1,inst_44104);
} else {
if((state_val_44107 === (12))){
var inst_44070 = (state_44106[(8)]);
var inst_44094 = cljs.core.vec.call(null,inst_44070);
var state_44106__$1 = state_44106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44106__$1,(15),out,inst_44094);
} else {
if((state_val_44107 === (2))){
var state_44106__$1 = state_44106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44106__$1,(4),ch);
} else {
if((state_val_44107 === (11))){
var inst_44086 = (state_44106[(2)]);
var inst_44087 = (new Array(n));
var inst_44070 = inst_44087;
var inst_44071 = (0);
var state_44106__$1 = (function (){var statearr_44118 = state_44106;
(statearr_44118[(7)] = inst_44071);

(statearr_44118[(8)] = inst_44070);

(statearr_44118[(10)] = inst_44086);

return statearr_44118;
})();
var statearr_44119_44143 = state_44106__$1;
(statearr_44119_44143[(2)] = null);

(statearr_44119_44143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (9))){
var inst_44070 = (state_44106[(8)]);
var inst_44084 = cljs.core.vec.call(null,inst_44070);
var state_44106__$1 = state_44106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44106__$1,(11),out,inst_44084);
} else {
if((state_val_44107 === (5))){
var inst_44074 = (state_44106[(9)]);
var inst_44071 = (state_44106[(7)]);
var inst_44070 = (state_44106[(8)]);
var inst_44079 = (state_44106[(11)]);
var inst_44078 = (inst_44070[inst_44071] = inst_44074);
var inst_44079__$1 = (inst_44071 + (1));
var inst_44080 = (inst_44079__$1 < n);
var state_44106__$1 = (function (){var statearr_44120 = state_44106;
(statearr_44120[(12)] = inst_44078);

(statearr_44120[(11)] = inst_44079__$1);

return statearr_44120;
})();
if(cljs.core.truth_(inst_44080)){
var statearr_44121_44144 = state_44106__$1;
(statearr_44121_44144[(1)] = (8));

} else {
var statearr_44122_44145 = state_44106__$1;
(statearr_44122_44145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (14))){
var inst_44099 = (state_44106[(2)]);
var inst_44100 = cljs.core.async.close_BANG_.call(null,out);
var state_44106__$1 = (function (){var statearr_44124 = state_44106;
(statearr_44124[(13)] = inst_44099);

return statearr_44124;
})();
var statearr_44125_44146 = state_44106__$1;
(statearr_44125_44146[(2)] = inst_44100);

(statearr_44125_44146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (10))){
var inst_44090 = (state_44106[(2)]);
var state_44106__$1 = state_44106;
var statearr_44126_44147 = state_44106__$1;
(statearr_44126_44147[(2)] = inst_44090);

(statearr_44126_44147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44107 === (8))){
var inst_44070 = (state_44106[(8)]);
var inst_44079 = (state_44106[(11)]);
var tmp44123 = inst_44070;
var inst_44070__$1 = tmp44123;
var inst_44071 = inst_44079;
var state_44106__$1 = (function (){var statearr_44127 = state_44106;
(statearr_44127[(7)] = inst_44071);

(statearr_44127[(8)] = inst_44070__$1);

return statearr_44127;
})();
var statearr_44128_44148 = state_44106__$1;
(statearr_44128_44148[(2)] = null);

(statearr_44128_44148[(1)] = (2));


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
});})(c__22731__auto___44134,out))
;
return ((function (switch__22643__auto__,c__22731__auto___44134,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_44129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44129[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_44129[(1)] = (1));

return statearr_44129;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_44106){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_44106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e44130){if((e44130 instanceof Object)){
var ex__22647__auto__ = e44130;
var statearr_44131_44149 = state_44106;
(statearr_44131_44149[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44150 = state_44106;
state_44106 = G__44150;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_44106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_44106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___44134,out))
})();
var state__22733__auto__ = (function (){var statearr_44132 = f__22732__auto__.call(null);
(statearr_44132[(6)] = c__22731__auto___44134);

return statearr_44132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___44134,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44152 = arguments.length;
switch (G__44152) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22731__auto___44222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22731__auto___44222,out){
return (function (){
var f__22732__auto__ = (function (){var switch__22643__auto__ = ((function (c__22731__auto___44222,out){
return (function (state_44194){
var state_val_44195 = (state_44194[(1)]);
if((state_val_44195 === (7))){
var inst_44190 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
var statearr_44196_44223 = state_44194__$1;
(statearr_44196_44223[(2)] = inst_44190);

(statearr_44196_44223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (1))){
var inst_44153 = [];
var inst_44154 = inst_44153;
var inst_44155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44194__$1 = (function (){var statearr_44197 = state_44194;
(statearr_44197[(7)] = inst_44155);

(statearr_44197[(8)] = inst_44154);

return statearr_44197;
})();
var statearr_44198_44224 = state_44194__$1;
(statearr_44198_44224[(2)] = null);

(statearr_44198_44224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (4))){
var inst_44158 = (state_44194[(9)]);
var inst_44158__$1 = (state_44194[(2)]);
var inst_44159 = (inst_44158__$1 == null);
var inst_44160 = cljs.core.not.call(null,inst_44159);
var state_44194__$1 = (function (){var statearr_44199 = state_44194;
(statearr_44199[(9)] = inst_44158__$1);

return statearr_44199;
})();
if(inst_44160){
var statearr_44200_44225 = state_44194__$1;
(statearr_44200_44225[(1)] = (5));

} else {
var statearr_44201_44226 = state_44194__$1;
(statearr_44201_44226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (15))){
var inst_44184 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
var statearr_44202_44227 = state_44194__$1;
(statearr_44202_44227[(2)] = inst_44184);

(statearr_44202_44227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (13))){
var state_44194__$1 = state_44194;
var statearr_44203_44228 = state_44194__$1;
(statearr_44203_44228[(2)] = null);

(statearr_44203_44228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (6))){
var inst_44154 = (state_44194[(8)]);
var inst_44179 = inst_44154.length;
var inst_44180 = (inst_44179 > (0));
var state_44194__$1 = state_44194;
if(cljs.core.truth_(inst_44180)){
var statearr_44204_44229 = state_44194__$1;
(statearr_44204_44229[(1)] = (12));

} else {
var statearr_44205_44230 = state_44194__$1;
(statearr_44205_44230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (3))){
var inst_44192 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44194__$1,inst_44192);
} else {
if((state_val_44195 === (12))){
var inst_44154 = (state_44194[(8)]);
var inst_44182 = cljs.core.vec.call(null,inst_44154);
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44194__$1,(15),out,inst_44182);
} else {
if((state_val_44195 === (2))){
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44194__$1,(4),ch);
} else {
if((state_val_44195 === (11))){
var inst_44158 = (state_44194[(9)]);
var inst_44162 = (state_44194[(10)]);
var inst_44172 = (state_44194[(2)]);
var inst_44173 = [];
var inst_44174 = inst_44173.push(inst_44158);
var inst_44154 = inst_44173;
var inst_44155 = inst_44162;
var state_44194__$1 = (function (){var statearr_44206 = state_44194;
(statearr_44206[(7)] = inst_44155);

(statearr_44206[(11)] = inst_44172);

(statearr_44206[(8)] = inst_44154);

(statearr_44206[(12)] = inst_44174);

return statearr_44206;
})();
var statearr_44207_44231 = state_44194__$1;
(statearr_44207_44231[(2)] = null);

(statearr_44207_44231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (9))){
var inst_44154 = (state_44194[(8)]);
var inst_44170 = cljs.core.vec.call(null,inst_44154);
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44194__$1,(11),out,inst_44170);
} else {
if((state_val_44195 === (5))){
var inst_44155 = (state_44194[(7)]);
var inst_44158 = (state_44194[(9)]);
var inst_44162 = (state_44194[(10)]);
var inst_44162__$1 = f.call(null,inst_44158);
var inst_44163 = cljs.core._EQ_.call(null,inst_44162__$1,inst_44155);
var inst_44164 = cljs.core.keyword_identical_QMARK_.call(null,inst_44155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44165 = ((inst_44163) || (inst_44164));
var state_44194__$1 = (function (){var statearr_44208 = state_44194;
(statearr_44208[(10)] = inst_44162__$1);

return statearr_44208;
})();
if(cljs.core.truth_(inst_44165)){
var statearr_44209_44232 = state_44194__$1;
(statearr_44209_44232[(1)] = (8));

} else {
var statearr_44210_44233 = state_44194__$1;
(statearr_44210_44233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (14))){
var inst_44187 = (state_44194[(2)]);
var inst_44188 = cljs.core.async.close_BANG_.call(null,out);
var state_44194__$1 = (function (){var statearr_44212 = state_44194;
(statearr_44212[(13)] = inst_44187);

return statearr_44212;
})();
var statearr_44213_44234 = state_44194__$1;
(statearr_44213_44234[(2)] = inst_44188);

(statearr_44213_44234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (10))){
var inst_44177 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
var statearr_44214_44235 = state_44194__$1;
(statearr_44214_44235[(2)] = inst_44177);

(statearr_44214_44235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (8))){
var inst_44158 = (state_44194[(9)]);
var inst_44154 = (state_44194[(8)]);
var inst_44162 = (state_44194[(10)]);
var inst_44167 = inst_44154.push(inst_44158);
var tmp44211 = inst_44154;
var inst_44154__$1 = tmp44211;
var inst_44155 = inst_44162;
var state_44194__$1 = (function (){var statearr_44215 = state_44194;
(statearr_44215[(7)] = inst_44155);

(statearr_44215[(14)] = inst_44167);

(statearr_44215[(8)] = inst_44154__$1);

return statearr_44215;
})();
var statearr_44216_44236 = state_44194__$1;
(statearr_44216_44236[(2)] = null);

(statearr_44216_44236[(1)] = (2));


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
});})(c__22731__auto___44222,out))
;
return ((function (switch__22643__auto__,c__22731__auto___44222,out){
return (function() {
var cljs$core$async$state_machine__22644__auto__ = null;
var cljs$core$async$state_machine__22644__auto____0 = (function (){
var statearr_44217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44217[(0)] = cljs$core$async$state_machine__22644__auto__);

(statearr_44217[(1)] = (1));

return statearr_44217;
});
var cljs$core$async$state_machine__22644__auto____1 = (function (state_44194){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_44194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e44218){if((e44218 instanceof Object)){
var ex__22647__auto__ = e44218;
var statearr_44219_44237 = state_44194;
(statearr_44219_44237[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44238 = state_44194;
state_44194 = G__44238;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
cljs$core$async$state_machine__22644__auto__ = function(state_44194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22644__auto____1.call(this,state_44194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22644__auto____0;
cljs$core$async$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22644__auto____1;
return cljs$core$async$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22731__auto___44222,out))
})();
var state__22733__auto__ = (function (){var statearr_44220 = f__22732__auto__.call(null);
(statearr_44220[(6)] = c__22731__auto___44222);

return statearr_44220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22733__auto__);
});})(c__22731__auto___44222,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1532451319577
