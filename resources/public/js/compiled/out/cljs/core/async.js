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
var G__27800 = arguments.length;
switch (G__27800) {
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
if(typeof cljs.core.async.t_cljs$core$async27801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27801 = (function (f,blockable,meta27802){
this.f = f;
this.blockable = blockable;
this.meta27802 = meta27802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27803,meta27802__$1){
var self__ = this;
var _27803__$1 = this;
return (new cljs.core.async.t_cljs$core$async27801(self__.f,self__.blockable,meta27802__$1));
});

cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27803){
var self__ = this;
var _27803__$1 = this;
return self__.meta27802;
});

cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27802","meta27802",-218038084,null)], null);
});

cljs.core.async.t_cljs$core$async27801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27801";

cljs.core.async.t_cljs$core$async27801.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27801");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27801.
 */
cljs.core.async.__GT_t_cljs$core$async27801 = (function cljs$core$async$__GT_t_cljs$core$async27801(f__$1,blockable__$1,meta27802){
return (new cljs.core.async.t_cljs$core$async27801(f__$1,blockable__$1,meta27802));
});

}

return (new cljs.core.async.t_cljs$core$async27801(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27807 = arguments.length;
switch (G__27807) {
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
var G__27810 = arguments.length;
switch (G__27810) {
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
var G__27813 = arguments.length;
switch (G__27813) {
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
var val_27815 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27815);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27815,ret){
return (function (){
return fn1.call(null,val_27815);
});})(val_27815,ret))
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
var G__27817 = arguments.length;
switch (G__27817) {
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
var n__4376__auto___27819 = n;
var x_27820 = (0);
while(true){
if((x_27820 < n__4376__auto___27819)){
(a[x_27820] = (0));

var G__27821 = (x_27820 + (1));
x_27820 = G__27821;
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

var G__27822 = (i + (1));
i = G__27822;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27823 = (function (flag,meta27824){
this.flag = flag;
this.meta27824 = meta27824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27825,meta27824__$1){
var self__ = this;
var _27825__$1 = this;
return (new cljs.core.async.t_cljs$core$async27823(self__.flag,meta27824__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27825){
var self__ = this;
var _27825__$1 = this;
return self__.meta27824;
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27824","meta27824",401588865,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27823";

cljs.core.async.t_cljs$core$async27823.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27823");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27823.
 */
cljs.core.async.__GT_t_cljs$core$async27823 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27823(flag__$1,meta27824){
return (new cljs.core.async.t_cljs$core$async27823(flag__$1,meta27824));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27823(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27826 = (function (flag,cb,meta27827){
this.flag = flag;
this.cb = cb;
this.meta27827 = meta27827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27828,meta27827__$1){
var self__ = this;
var _27828__$1 = this;
return (new cljs.core.async.t_cljs$core$async27826(self__.flag,self__.cb,meta27827__$1));
});

cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27828){
var self__ = this;
var _27828__$1 = this;
return self__.meta27827;
});

cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27827","meta27827",835696753,null)], null);
});

cljs.core.async.t_cljs$core$async27826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27826";

cljs.core.async.t_cljs$core$async27826.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27826");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27826.
 */
cljs.core.async.__GT_t_cljs$core$async27826 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27826(flag__$1,cb__$1,meta27827){
return (new cljs.core.async.t_cljs$core$async27826(flag__$1,cb__$1,meta27827));
});

}

return (new cljs.core.async.t_cljs$core$async27826(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27829_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27829_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27830_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27830_SHARP_,port], null));
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
var G__27831 = (i + (1));
i = G__27831;
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
var len__4499__auto___27837 = arguments.length;
var i__4500__auto___27838 = (0);
while(true){
if((i__4500__auto___27838 < len__4499__auto___27837)){
args__4502__auto__.push((arguments[i__4500__auto___27838]));

var G__27839 = (i__4500__auto___27838 + (1));
i__4500__auto___27838 = G__27839;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27834){
var map__27835 = p__27834;
var map__27835__$1 = ((((!((map__27835 == null)))?(((((map__27835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27835):map__27835);
var opts = map__27835__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27832){
var G__27833 = cljs.core.first.call(null,seq27832);
var seq27832__$1 = cljs.core.next.call(null,seq27832);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27833,seq27832__$1);
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
var G__27841 = arguments.length;
switch (G__27841) {
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
var c__27754__auto___27887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___27887){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___27887){
return (function (state_27865){
var state_val_27866 = (state_27865[(1)]);
if((state_val_27866 === (7))){
var inst_27861 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27867_27888 = state_27865__$1;
(statearr_27867_27888[(2)] = inst_27861);

(statearr_27867_27888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (1))){
var state_27865__$1 = state_27865;
var statearr_27868_27889 = state_27865__$1;
(statearr_27868_27889[(2)] = null);

(statearr_27868_27889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (4))){
var inst_27844 = (state_27865[(7)]);
var inst_27844__$1 = (state_27865[(2)]);
var inst_27845 = (inst_27844__$1 == null);
var state_27865__$1 = (function (){var statearr_27869 = state_27865;
(statearr_27869[(7)] = inst_27844__$1);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27845)){
var statearr_27870_27890 = state_27865__$1;
(statearr_27870_27890[(1)] = (5));

} else {
var statearr_27871_27891 = state_27865__$1;
(statearr_27871_27891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (13))){
var state_27865__$1 = state_27865;
var statearr_27872_27892 = state_27865__$1;
(statearr_27872_27892[(2)] = null);

(statearr_27872_27892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (6))){
var inst_27844 = (state_27865[(7)]);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27865__$1,(11),to,inst_27844);
} else {
if((state_val_27866 === (3))){
var inst_27863 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27865__$1,inst_27863);
} else {
if((state_val_27866 === (12))){
var state_27865__$1 = state_27865;
var statearr_27873_27893 = state_27865__$1;
(statearr_27873_27893[(2)] = null);

(statearr_27873_27893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (2))){
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(4),from);
} else {
if((state_val_27866 === (11))){
var inst_27854 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
if(cljs.core.truth_(inst_27854)){
var statearr_27874_27894 = state_27865__$1;
(statearr_27874_27894[(1)] = (12));

} else {
var statearr_27875_27895 = state_27865__$1;
(statearr_27875_27895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (9))){
var state_27865__$1 = state_27865;
var statearr_27876_27896 = state_27865__$1;
(statearr_27876_27896[(2)] = null);

(statearr_27876_27896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (5))){
var state_27865__$1 = state_27865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27877_27897 = state_27865__$1;
(statearr_27877_27897[(1)] = (8));

} else {
var statearr_27878_27898 = state_27865__$1;
(statearr_27878_27898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (14))){
var inst_27859 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27879_27899 = state_27865__$1;
(statearr_27879_27899[(2)] = inst_27859);

(statearr_27879_27899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (10))){
var inst_27851 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27880_27900 = state_27865__$1;
(statearr_27880_27900[(2)] = inst_27851);

(statearr_27880_27900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (8))){
var inst_27848 = cljs.core.async.close_BANG_.call(null,to);
var state_27865__$1 = state_27865;
var statearr_27881_27901 = state_27865__$1;
(statearr_27881_27901[(2)] = inst_27848);

(statearr_27881_27901[(1)] = (10));


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
});})(c__27754__auto___27887))
;
return ((function (switch__27666__auto__,c__27754__auto___27887){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_27882 = [null,null,null,null,null,null,null,null];
(statearr_27882[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_27882[(1)] = (1));

return statearr_27882;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_27865){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_27865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e27883){if((e27883 instanceof Object)){
var ex__27670__auto__ = e27883;
var statearr_27884_27902 = state_27865;
(statearr_27884_27902[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27903 = state_27865;
state_27865 = G__27903;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_27865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_27865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___27887))
})();
var state__27756__auto__ = (function (){var statearr_27885 = f__27755__auto__.call(null);
(statearr_27885[(6)] = c__27754__auto___27887);

return statearr_27885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___27887))
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
var process = ((function (jobs,results){
return (function (p__27904){
var vec__27905 = p__27904;
var v = cljs.core.nth.call(null,vec__27905,(0),null);
var p = cljs.core.nth.call(null,vec__27905,(1),null);
var job = vec__27905;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27754__auto___28076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results){
return (function (state_27912){
var state_val_27913 = (state_27912[(1)]);
if((state_val_27913 === (1))){
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27912__$1,(2),res,v);
} else {
if((state_val_27913 === (2))){
var inst_27909 = (state_27912[(2)]);
var inst_27910 = cljs.core.async.close_BANG_.call(null,res);
var state_27912__$1 = (function (){var statearr_27914 = state_27912;
(statearr_27914[(7)] = inst_27909);

return statearr_27914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27912__$1,inst_27910);
} else {
return null;
}
}
});})(c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results))
;
return ((function (switch__27666__auto__,c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_27915 = [null,null,null,null,null,null,null,null];
(statearr_27915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__);

(statearr_27915[(1)] = (1));

return statearr_27915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1 = (function (state_27912){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_27912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e27916){if((e27916 instanceof Object)){
var ex__27670__auto__ = e27916;
var statearr_27917_28077 = state_27912;
(statearr_27917_28077[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28078 = state_27912;
state_27912 = G__28078;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = function(state_27912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1.call(this,state_27912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results))
})();
var state__27756__auto__ = (function (){var statearr_27918 = f__27755__auto__.call(null);
(statearr_27918[(6)] = c__27754__auto___28076);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28076,res,vec__27905,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27919){
var vec__27920 = p__27919;
var v = cljs.core.nth.call(null,vec__27920,(0),null);
var p = cljs.core.nth.call(null,vec__27920,(1),null);
var job = vec__27920;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___28079 = n;
var __28080 = (0);
while(true){
if((__28080 < n__4376__auto___28079)){
var G__27923_28081 = type;
var G__27923_28082__$1 = (((G__27923_28081 instanceof cljs.core.Keyword))?G__27923_28081.fqn:null);
switch (G__27923_28082__$1) {
case "compute":
var c__27754__auto___28084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28080,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (__28080,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (1))){
var state_27936__$1 = state_27936;
var statearr_27938_28085 = state_27936__$1;
(statearr_27938_28085[(2)] = null);

(statearr_27938_28085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(4),jobs);
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (4))){
var inst_27926 = (state_27936[(2)]);
var inst_27927 = process.call(null,inst_27926);
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27927)){
var statearr_27939_28086 = state_27936__$1;
(statearr_27939_28086[(1)] = (5));

} else {
var statearr_27940_28087 = state_27936__$1;
(statearr_27940_28087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (5))){
var state_27936__$1 = state_27936;
var statearr_27941_28088 = state_27936__$1;
(statearr_27941_28088[(2)] = null);

(statearr_27941_28088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (6))){
var state_27936__$1 = state_27936;
var statearr_27942_28089 = state_27936__$1;
(statearr_27942_28089[(2)] = null);

(statearr_27942_28089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (7))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27943_28090 = state_27936__$1;
(statearr_27943_28090[(2)] = inst_27932);

(statearr_27943_28090[(1)] = (3));


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
});})(__28080,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
;
return ((function (__28080,switch__27666__auto__,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_27944 = [null,null,null,null,null,null,null];
(statearr_27944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__);

(statearr_27944[(1)] = (1));

return statearr_27944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1 = (function (state_27936){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_27936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e27945){if((e27945 instanceof Object)){
var ex__27670__auto__ = e27945;
var statearr_27946_28091 = state_27936;
(statearr_27946_28091[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28092 = state_27936;
state_27936 = G__28092;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__;
})()
;})(__28080,switch__27666__auto__,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
})();
var state__27756__auto__ = (function (){var statearr_27947 = f__27755__auto__.call(null);
(statearr_27947[(6)] = c__27754__auto___28084);

return statearr_27947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(__28080,c__27754__auto___28084,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
);


break;
case "async":
var c__27754__auto___28093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28080,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (__28080,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (1))){
var state_27960__$1 = state_27960;
var statearr_27962_28094 = state_27960__$1;
(statearr_27962_28094[(2)] = null);

(statearr_27962_28094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (2))){
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(4),jobs);
} else {
if((state_val_27961 === (3))){
var inst_27958 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (4))){
var inst_27950 = (state_27960[(2)]);
var inst_27951 = async.call(null,inst_27950);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27951)){
var statearr_27963_28095 = state_27960__$1;
(statearr_27963_28095[(1)] = (5));

} else {
var statearr_27964_28096 = state_27960__$1;
(statearr_27964_28096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (5))){
var state_27960__$1 = state_27960;
var statearr_27965_28097 = state_27960__$1;
(statearr_27965_28097[(2)] = null);

(statearr_27965_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (6))){
var state_27960__$1 = state_27960;
var statearr_27966_28098 = state_27960__$1;
(statearr_27966_28098[(2)] = null);

(statearr_27966_28098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (7))){
var inst_27956 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27967_28099 = state_27960__$1;
(statearr_27967_28099[(2)] = inst_27956);

(statearr_27967_28099[(1)] = (3));


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
});})(__28080,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
;
return ((function (__28080,switch__27666__auto__,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_27968 = [null,null,null,null,null,null,null];
(statearr_27968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__);

(statearr_27968[(1)] = (1));

return statearr_27968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1 = (function (state_27960){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e27969){if((e27969 instanceof Object)){
var ex__27670__auto__ = e27969;
var statearr_27970_28100 = state_27960;
(statearr_27970_28100[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28101 = state_27960;
state_27960 = G__28101;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__;
})()
;})(__28080,switch__27666__auto__,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
})();
var state__27756__auto__ = (function (){var statearr_27971 = f__27755__auto__.call(null);
(statearr_27971[(6)] = c__27754__auto___28093);

return statearr_27971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(__28080,c__27754__auto___28093,G__27923_28081,G__27923_28082__$1,n__4376__auto___28079,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27923_28082__$1)].join('')));

}

var G__28102 = (__28080 + (1));
__28080 = G__28102;
continue;
} else {
}
break;
}

var c__27754__auto___28103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28103,jobs,results,process,async){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28103,jobs,results,process,async){
return (function (state_27993){
var state_val_27994 = (state_27993[(1)]);
if((state_val_27994 === (1))){
var state_27993__$1 = state_27993;
var statearr_27995_28104 = state_27993__$1;
(statearr_27995_28104[(2)] = null);

(statearr_27995_28104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (2))){
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(4),from);
} else {
if((state_val_27994 === (3))){
var inst_27991 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else {
if((state_val_27994 === (4))){
var inst_27974 = (state_27993[(7)]);
var inst_27974__$1 = (state_27993[(2)]);
var inst_27975 = (inst_27974__$1 == null);
var state_27993__$1 = (function (){var statearr_27996 = state_27993;
(statearr_27996[(7)] = inst_27974__$1);

return statearr_27996;
})();
if(cljs.core.truth_(inst_27975)){
var statearr_27997_28105 = state_27993__$1;
(statearr_27997_28105[(1)] = (5));

} else {
var statearr_27998_28106 = state_27993__$1;
(statearr_27998_28106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (5))){
var inst_27977 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27993__$1 = state_27993;
var statearr_27999_28107 = state_27993__$1;
(statearr_27999_28107[(2)] = inst_27977);

(statearr_27999_28107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (6))){
var inst_27974 = (state_27993[(7)]);
var inst_27979 = (state_27993[(8)]);
var inst_27979__$1 = cljs.core.async.chan.call(null,(1));
var inst_27980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27981 = [inst_27974,inst_27979__$1];
var inst_27982 = (new cljs.core.PersistentVector(null,2,(5),inst_27980,inst_27981,null));
var state_27993__$1 = (function (){var statearr_28000 = state_27993;
(statearr_28000[(8)] = inst_27979__$1);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27993__$1,(8),jobs,inst_27982);
} else {
if((state_val_27994 === (7))){
var inst_27989 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28001_28108 = state_27993__$1;
(statearr_28001_28108[(2)] = inst_27989);

(statearr_28001_28108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (8))){
var inst_27979 = (state_27993[(8)]);
var inst_27984 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_28002 = state_27993;
(statearr_28002[(9)] = inst_27984);

return statearr_28002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27993__$1,(9),results,inst_27979);
} else {
if((state_val_27994 === (9))){
var inst_27986 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_28003 = state_27993;
(statearr_28003[(10)] = inst_27986);

return statearr_28003;
})();
var statearr_28004_28109 = state_27993__$1;
(statearr_28004_28109[(2)] = null);

(statearr_28004_28109[(1)] = (2));


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
});})(c__27754__auto___28103,jobs,results,process,async))
;
return ((function (switch__27666__auto__,c__27754__auto___28103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_28005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__);

(statearr_28005[(1)] = (1));

return statearr_28005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1 = (function (state_27993){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_27993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28006){if((e28006 instanceof Object)){
var ex__27670__auto__ = e28006;
var statearr_28007_28110 = state_27993;
(statearr_28007_28110[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28111 = state_27993;
state_27993 = G__28111;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28103,jobs,results,process,async))
})();
var state__27756__auto__ = (function (){var statearr_28008 = f__27755__auto__.call(null);
(statearr_28008[(6)] = c__27754__auto___28103);

return statearr_28008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28103,jobs,results,process,async))
);


var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__,jobs,results,process,async){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__,jobs,results,process,async){
return (function (state_28046){
var state_val_28047 = (state_28046[(1)]);
if((state_val_28047 === (7))){
var inst_28042 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28048_28112 = state_28046__$1;
(statearr_28048_28112[(2)] = inst_28042);

(statearr_28048_28112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (20))){
var state_28046__$1 = state_28046;
var statearr_28049_28113 = state_28046__$1;
(statearr_28049_28113[(2)] = null);

(statearr_28049_28113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (1))){
var state_28046__$1 = state_28046;
var statearr_28050_28114 = state_28046__$1;
(statearr_28050_28114[(2)] = null);

(statearr_28050_28114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (4))){
var inst_28011 = (state_28046[(7)]);
var inst_28011__$1 = (state_28046[(2)]);
var inst_28012 = (inst_28011__$1 == null);
var state_28046__$1 = (function (){var statearr_28051 = state_28046;
(statearr_28051[(7)] = inst_28011__$1);

return statearr_28051;
})();
if(cljs.core.truth_(inst_28012)){
var statearr_28052_28115 = state_28046__$1;
(statearr_28052_28115[(1)] = (5));

} else {
var statearr_28053_28116 = state_28046__$1;
(statearr_28053_28116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (15))){
var inst_28024 = (state_28046[(8)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28046__$1,(18),to,inst_28024);
} else {
if((state_val_28047 === (21))){
var inst_28037 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28054_28117 = state_28046__$1;
(statearr_28054_28117[(2)] = inst_28037);

(statearr_28054_28117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (13))){
var inst_28039 = (state_28046[(2)]);
var state_28046__$1 = (function (){var statearr_28055 = state_28046;
(statearr_28055[(9)] = inst_28039);

return statearr_28055;
})();
var statearr_28056_28118 = state_28046__$1;
(statearr_28056_28118[(2)] = null);

(statearr_28056_28118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (6))){
var inst_28011 = (state_28046[(7)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28046__$1,(11),inst_28011);
} else {
if((state_val_28047 === (17))){
var inst_28032 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
if(cljs.core.truth_(inst_28032)){
var statearr_28057_28119 = state_28046__$1;
(statearr_28057_28119[(1)] = (19));

} else {
var statearr_28058_28120 = state_28046__$1;
(statearr_28058_28120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (3))){
var inst_28044 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28046__$1,inst_28044);
} else {
if((state_val_28047 === (12))){
var inst_28021 = (state_28046[(10)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28046__$1,(14),inst_28021);
} else {
if((state_val_28047 === (2))){
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28046__$1,(4),results);
} else {
if((state_val_28047 === (19))){
var state_28046__$1 = state_28046;
var statearr_28059_28121 = state_28046__$1;
(statearr_28059_28121[(2)] = null);

(statearr_28059_28121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (11))){
var inst_28021 = (state_28046[(2)]);
var state_28046__$1 = (function (){var statearr_28060 = state_28046;
(statearr_28060[(10)] = inst_28021);

return statearr_28060;
})();
var statearr_28061_28122 = state_28046__$1;
(statearr_28061_28122[(2)] = null);

(statearr_28061_28122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (9))){
var state_28046__$1 = state_28046;
var statearr_28062_28123 = state_28046__$1;
(statearr_28062_28123[(2)] = null);

(statearr_28062_28123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (5))){
var state_28046__$1 = state_28046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28063_28124 = state_28046__$1;
(statearr_28063_28124[(1)] = (8));

} else {
var statearr_28064_28125 = state_28046__$1;
(statearr_28064_28125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (14))){
var inst_28024 = (state_28046[(8)]);
var inst_28026 = (state_28046[(11)]);
var inst_28024__$1 = (state_28046[(2)]);
var inst_28025 = (inst_28024__$1 == null);
var inst_28026__$1 = cljs.core.not.call(null,inst_28025);
var state_28046__$1 = (function (){var statearr_28065 = state_28046;
(statearr_28065[(8)] = inst_28024__$1);

(statearr_28065[(11)] = inst_28026__$1);

return statearr_28065;
})();
if(inst_28026__$1){
var statearr_28066_28126 = state_28046__$1;
(statearr_28066_28126[(1)] = (15));

} else {
var statearr_28067_28127 = state_28046__$1;
(statearr_28067_28127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (16))){
var inst_28026 = (state_28046[(11)]);
var state_28046__$1 = state_28046;
var statearr_28068_28128 = state_28046__$1;
(statearr_28068_28128[(2)] = inst_28026);

(statearr_28068_28128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (10))){
var inst_28018 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28069_28129 = state_28046__$1;
(statearr_28069_28129[(2)] = inst_28018);

(statearr_28069_28129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (18))){
var inst_28029 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28070_28130 = state_28046__$1;
(statearr_28070_28130[(2)] = inst_28029);

(statearr_28070_28130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (8))){
var inst_28015 = cljs.core.async.close_BANG_.call(null,to);
var state_28046__$1 = state_28046;
var statearr_28071_28131 = state_28046__$1;
(statearr_28071_28131[(2)] = inst_28015);

(statearr_28071_28131[(1)] = (10));


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
});})(c__27754__auto__,jobs,results,process,async))
;
return ((function (switch__27666__auto__,c__27754__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_28072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__);

(statearr_28072[(1)] = (1));

return statearr_28072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1 = (function (state_28046){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28073){if((e28073 instanceof Object)){
var ex__27670__auto__ = e28073;
var statearr_28074_28132 = state_28046;
(statearr_28074_28132[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28133 = state_28046;
state_28046 = G__28133;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__ = function(state_28046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1.call(this,state_28046);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__,jobs,results,process,async))
})();
var state__27756__auto__ = (function (){var statearr_28075 = f__27755__auto__.call(null);
(statearr_28075[(6)] = c__27754__auto__);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__,jobs,results,process,async))
);

return c__27754__auto__;
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
var G__28135 = arguments.length;
switch (G__28135) {
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
var G__28138 = arguments.length;
switch (G__28138) {
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
var G__28141 = arguments.length;
switch (G__28141) {
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
var c__27754__auto___28190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28190,tc,fc){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28190,tc,fc){
return (function (state_28167){
var state_val_28168 = (state_28167[(1)]);
if((state_val_28168 === (7))){
var inst_28163 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
var statearr_28169_28191 = state_28167__$1;
(statearr_28169_28191[(2)] = inst_28163);

(statearr_28169_28191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (1))){
var state_28167__$1 = state_28167;
var statearr_28170_28192 = state_28167__$1;
(statearr_28170_28192[(2)] = null);

(statearr_28170_28192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (4))){
var inst_28144 = (state_28167[(7)]);
var inst_28144__$1 = (state_28167[(2)]);
var inst_28145 = (inst_28144__$1 == null);
var state_28167__$1 = (function (){var statearr_28171 = state_28167;
(statearr_28171[(7)] = inst_28144__$1);

return statearr_28171;
})();
if(cljs.core.truth_(inst_28145)){
var statearr_28172_28193 = state_28167__$1;
(statearr_28172_28193[(1)] = (5));

} else {
var statearr_28173_28194 = state_28167__$1;
(statearr_28173_28194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (13))){
var state_28167__$1 = state_28167;
var statearr_28174_28195 = state_28167__$1;
(statearr_28174_28195[(2)] = null);

(statearr_28174_28195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (6))){
var inst_28144 = (state_28167[(7)]);
var inst_28150 = p.call(null,inst_28144);
var state_28167__$1 = state_28167;
if(cljs.core.truth_(inst_28150)){
var statearr_28175_28196 = state_28167__$1;
(statearr_28175_28196[(1)] = (9));

} else {
var statearr_28176_28197 = state_28167__$1;
(statearr_28176_28197[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (3))){
var inst_28165 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28167__$1,inst_28165);
} else {
if((state_val_28168 === (12))){
var state_28167__$1 = state_28167;
var statearr_28177_28198 = state_28167__$1;
(statearr_28177_28198[(2)] = null);

(statearr_28177_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (2))){
var state_28167__$1 = state_28167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28167__$1,(4),ch);
} else {
if((state_val_28168 === (11))){
var inst_28144 = (state_28167[(7)]);
var inst_28154 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28167__$1,(8),inst_28154,inst_28144);
} else {
if((state_val_28168 === (9))){
var state_28167__$1 = state_28167;
var statearr_28178_28199 = state_28167__$1;
(statearr_28178_28199[(2)] = tc);

(statearr_28178_28199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (5))){
var inst_28147 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28148 = cljs.core.async.close_BANG_.call(null,fc);
var state_28167__$1 = (function (){var statearr_28179 = state_28167;
(statearr_28179[(8)] = inst_28147);

return statearr_28179;
})();
var statearr_28180_28200 = state_28167__$1;
(statearr_28180_28200[(2)] = inst_28148);

(statearr_28180_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (14))){
var inst_28161 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
var statearr_28181_28201 = state_28167__$1;
(statearr_28181_28201[(2)] = inst_28161);

(statearr_28181_28201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (10))){
var state_28167__$1 = state_28167;
var statearr_28182_28202 = state_28167__$1;
(statearr_28182_28202[(2)] = fc);

(statearr_28182_28202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (8))){
var inst_28156 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
if(cljs.core.truth_(inst_28156)){
var statearr_28183_28203 = state_28167__$1;
(statearr_28183_28203[(1)] = (12));

} else {
var statearr_28184_28204 = state_28167__$1;
(statearr_28184_28204[(1)] = (13));

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
});})(c__27754__auto___28190,tc,fc))
;
return ((function (switch__27666__auto__,c__27754__auto___28190,tc,fc){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_28185 = [null,null,null,null,null,null,null,null,null];
(statearr_28185[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_28185[(1)] = (1));

return statearr_28185;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_28167){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28186){if((e28186 instanceof Object)){
var ex__27670__auto__ = e28186;
var statearr_28187_28205 = state_28167;
(statearr_28187_28205[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28206 = state_28167;
state_28167 = G__28206;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_28167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_28167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28190,tc,fc))
})();
var state__27756__auto__ = (function (){var statearr_28188 = f__27755__auto__.call(null);
(statearr_28188[(6)] = c__27754__auto___28190);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28190,tc,fc))
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
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__){
return (function (state_28227){
var state_val_28228 = (state_28227[(1)]);
if((state_val_28228 === (7))){
var inst_28223 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28229_28247 = state_28227__$1;
(statearr_28229_28247[(2)] = inst_28223);

(statearr_28229_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (1))){
var inst_28207 = init;
var state_28227__$1 = (function (){var statearr_28230 = state_28227;
(statearr_28230[(7)] = inst_28207);

return statearr_28230;
})();
var statearr_28231_28248 = state_28227__$1;
(statearr_28231_28248[(2)] = null);

(statearr_28231_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (4))){
var inst_28210 = (state_28227[(8)]);
var inst_28210__$1 = (state_28227[(2)]);
var inst_28211 = (inst_28210__$1 == null);
var state_28227__$1 = (function (){var statearr_28232 = state_28227;
(statearr_28232[(8)] = inst_28210__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28211)){
var statearr_28233_28249 = state_28227__$1;
(statearr_28233_28249[(1)] = (5));

} else {
var statearr_28234_28250 = state_28227__$1;
(statearr_28234_28250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (6))){
var inst_28207 = (state_28227[(7)]);
var inst_28214 = (state_28227[(9)]);
var inst_28210 = (state_28227[(8)]);
var inst_28214__$1 = f.call(null,inst_28207,inst_28210);
var inst_28215 = cljs.core.reduced_QMARK_.call(null,inst_28214__$1);
var state_28227__$1 = (function (){var statearr_28235 = state_28227;
(statearr_28235[(9)] = inst_28214__$1);

return statearr_28235;
})();
if(inst_28215){
var statearr_28236_28251 = state_28227__$1;
(statearr_28236_28251[(1)] = (8));

} else {
var statearr_28237_28252 = state_28227__$1;
(statearr_28237_28252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (3))){
var inst_28225 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28227__$1,inst_28225);
} else {
if((state_val_28228 === (2))){
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28227__$1,(4),ch);
} else {
if((state_val_28228 === (9))){
var inst_28214 = (state_28227[(9)]);
var inst_28207 = inst_28214;
var state_28227__$1 = (function (){var statearr_28238 = state_28227;
(statearr_28238[(7)] = inst_28207);

return statearr_28238;
})();
var statearr_28239_28253 = state_28227__$1;
(statearr_28239_28253[(2)] = null);

(statearr_28239_28253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (5))){
var inst_28207 = (state_28227[(7)]);
var state_28227__$1 = state_28227;
var statearr_28240_28254 = state_28227__$1;
(statearr_28240_28254[(2)] = inst_28207);

(statearr_28240_28254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (10))){
var inst_28221 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28241_28255 = state_28227__$1;
(statearr_28241_28255[(2)] = inst_28221);

(statearr_28241_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (8))){
var inst_28214 = (state_28227[(9)]);
var inst_28217 = cljs.core.deref.call(null,inst_28214);
var state_28227__$1 = state_28227;
var statearr_28242_28256 = state_28227__$1;
(statearr_28242_28256[(2)] = inst_28217);

(statearr_28242_28256[(1)] = (10));


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
});})(c__27754__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27667__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27667__auto____0 = (function (){
var statearr_28243 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28243[(0)] = cljs$core$async$reduce_$_state_machine__27667__auto__);

(statearr_28243[(1)] = (1));

return statearr_28243;
});
var cljs$core$async$reduce_$_state_machine__27667__auto____1 = (function (state_28227){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28244){if((e28244 instanceof Object)){
var ex__27670__auto__ = e28244;
var statearr_28245_28257 = state_28227;
(statearr_28245_28257[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28258 = state_28227;
state_28227 = G__28258;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27667__auto__ = function(state_28227){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27667__auto____1.call(this,state_28227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27667__auto____0;
cljs$core$async$reduce_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27667__auto____1;
return cljs$core$async$reduce_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__))
})();
var state__27756__auto__ = (function (){var statearr_28246 = f__27755__auto__.call(null);
(statearr_28246[(6)] = c__27754__auto__);

return statearr_28246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__))
);

return c__27754__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__,f__$1){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__,f__$1){
return (function (state_28264){
var state_val_28265 = (state_28264[(1)]);
if((state_val_28265 === (1))){
var inst_28259 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28264__$1,(2),inst_28259);
} else {
if((state_val_28265 === (2))){
var inst_28261 = (state_28264[(2)]);
var inst_28262 = f__$1.call(null,inst_28261);
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28264__$1,inst_28262);
} else {
return null;
}
}
});})(c__27754__auto__,f__$1))
;
return ((function (switch__27666__auto__,c__27754__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27667__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27667__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$transduce_$_state_machine__27667__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$transduce_$_state_machine__27667__auto____1 = (function (state_28264){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__27670__auto__ = e28267;
var statearr_28268_28270 = state_28264;
(statearr_28268_28270[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28264;
state_28264 = G__28271;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27667__auto__ = function(state_28264){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27667__auto____1.call(this,state_28264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27667__auto____0;
cljs$core$async$transduce_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27667__auto____1;
return cljs$core$async$transduce_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__,f__$1))
})();
var state__27756__auto__ = (function (){var statearr_28269 = f__27755__auto__.call(null);
(statearr_28269[(6)] = c__27754__auto__);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__,f__$1))
);

return c__27754__auto__;
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
var G__28273 = arguments.length;
switch (G__28273) {
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
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__){
return (function (state_28298){
var state_val_28299 = (state_28298[(1)]);
if((state_val_28299 === (7))){
var inst_28280 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28300_28321 = state_28298__$1;
(statearr_28300_28321[(2)] = inst_28280);

(statearr_28300_28321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (1))){
var inst_28274 = cljs.core.seq.call(null,coll);
var inst_28275 = inst_28274;
var state_28298__$1 = (function (){var statearr_28301 = state_28298;
(statearr_28301[(7)] = inst_28275);

return statearr_28301;
})();
var statearr_28302_28322 = state_28298__$1;
(statearr_28302_28322[(2)] = null);

(statearr_28302_28322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (4))){
var inst_28275 = (state_28298[(7)]);
var inst_28278 = cljs.core.first.call(null,inst_28275);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28298__$1,(7),ch,inst_28278);
} else {
if((state_val_28299 === (13))){
var inst_28292 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28303_28323 = state_28298__$1;
(statearr_28303_28323[(2)] = inst_28292);

(statearr_28303_28323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (6))){
var inst_28283 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28283)){
var statearr_28304_28324 = state_28298__$1;
(statearr_28304_28324[(1)] = (8));

} else {
var statearr_28305_28325 = state_28298__$1;
(statearr_28305_28325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (3))){
var inst_28296 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28298__$1,inst_28296);
} else {
if((state_val_28299 === (12))){
var state_28298__$1 = state_28298;
var statearr_28306_28326 = state_28298__$1;
(statearr_28306_28326[(2)] = null);

(statearr_28306_28326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (2))){
var inst_28275 = (state_28298[(7)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28275)){
var statearr_28307_28327 = state_28298__$1;
(statearr_28307_28327[(1)] = (4));

} else {
var statearr_28308_28328 = state_28298__$1;
(statearr_28308_28328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (11))){
var inst_28289 = cljs.core.async.close_BANG_.call(null,ch);
var state_28298__$1 = state_28298;
var statearr_28309_28329 = state_28298__$1;
(statearr_28309_28329[(2)] = inst_28289);

(statearr_28309_28329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (9))){
var state_28298__$1 = state_28298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28310_28330 = state_28298__$1;
(statearr_28310_28330[(1)] = (11));

} else {
var statearr_28311_28331 = state_28298__$1;
(statearr_28311_28331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (5))){
var inst_28275 = (state_28298[(7)]);
var state_28298__$1 = state_28298;
var statearr_28312_28332 = state_28298__$1;
(statearr_28312_28332[(2)] = inst_28275);

(statearr_28312_28332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (10))){
var inst_28294 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28313_28333 = state_28298__$1;
(statearr_28313_28333[(2)] = inst_28294);

(statearr_28313_28333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (8))){
var inst_28275 = (state_28298[(7)]);
var inst_28285 = cljs.core.next.call(null,inst_28275);
var inst_28275__$1 = inst_28285;
var state_28298__$1 = (function (){var statearr_28314 = state_28298;
(statearr_28314[(7)] = inst_28275__$1);

return statearr_28314;
})();
var statearr_28315_28334 = state_28298__$1;
(statearr_28315_28334[(2)] = null);

(statearr_28315_28334[(1)] = (2));


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
});})(c__27754__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_28316 = [null,null,null,null,null,null,null,null];
(statearr_28316[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_28316[(1)] = (1));

return statearr_28316;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_28298){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28317){if((e28317 instanceof Object)){
var ex__27670__auto__ = e28317;
var statearr_28318_28335 = state_28298;
(statearr_28318_28335[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28336 = state_28298;
state_28298 = G__28336;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_28298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_28298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__))
})();
var state__27756__auto__ = (function (){var statearr_28319 = f__27755__auto__.call(null);
(statearr_28319[(6)] = c__27754__auto__);

return statearr_28319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__))
);

return c__27754__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28337 = (function (ch,cs,meta28338){
this.ch = ch;
this.cs = cs;
this.meta28338 = meta28338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28339,meta28338__$1){
var self__ = this;
var _28339__$1 = this;
return (new cljs.core.async.t_cljs$core$async28337(self__.ch,self__.cs,meta28338__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28339){
var self__ = this;
var _28339__$1 = this;
return self__.meta28338;
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28338","meta28338",-1075943228,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28337";

cljs.core.async.t_cljs$core$async28337.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28337");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28337.
 */
cljs.core.async.__GT_t_cljs$core$async28337 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28337(ch__$1,cs__$1,meta28338){
return (new cljs.core.async.t_cljs$core$async28337(ch__$1,cs__$1,meta28338));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28337(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27754__auto___28559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28559,cs,m,dchan,dctr,done){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28559,cs,m,dchan,dctr,done){
return (function (state_28474){
var state_val_28475 = (state_28474[(1)]);
if((state_val_28475 === (7))){
var inst_28470 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28476_28560 = state_28474__$1;
(statearr_28476_28560[(2)] = inst_28470);

(statearr_28476_28560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (20))){
var inst_28373 = (state_28474[(7)]);
var inst_28385 = cljs.core.first.call(null,inst_28373);
var inst_28386 = cljs.core.nth.call(null,inst_28385,(0),null);
var inst_28387 = cljs.core.nth.call(null,inst_28385,(1),null);
var state_28474__$1 = (function (){var statearr_28477 = state_28474;
(statearr_28477[(8)] = inst_28386);

return statearr_28477;
})();
if(cljs.core.truth_(inst_28387)){
var statearr_28478_28561 = state_28474__$1;
(statearr_28478_28561[(1)] = (22));

} else {
var statearr_28479_28562 = state_28474__$1;
(statearr_28479_28562[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (27))){
var inst_28342 = (state_28474[(9)]);
var inst_28417 = (state_28474[(10)]);
var inst_28422 = (state_28474[(11)]);
var inst_28415 = (state_28474[(12)]);
var inst_28422__$1 = cljs.core._nth.call(null,inst_28415,inst_28417);
var inst_28423 = cljs.core.async.put_BANG_.call(null,inst_28422__$1,inst_28342,done);
var state_28474__$1 = (function (){var statearr_28480 = state_28474;
(statearr_28480[(11)] = inst_28422__$1);

return statearr_28480;
})();
if(cljs.core.truth_(inst_28423)){
var statearr_28481_28563 = state_28474__$1;
(statearr_28481_28563[(1)] = (30));

} else {
var statearr_28482_28564 = state_28474__$1;
(statearr_28482_28564[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (1))){
var state_28474__$1 = state_28474;
var statearr_28483_28565 = state_28474__$1;
(statearr_28483_28565[(2)] = null);

(statearr_28483_28565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (24))){
var inst_28373 = (state_28474[(7)]);
var inst_28392 = (state_28474[(2)]);
var inst_28393 = cljs.core.next.call(null,inst_28373);
var inst_28351 = inst_28393;
var inst_28352 = null;
var inst_28353 = (0);
var inst_28354 = (0);
var state_28474__$1 = (function (){var statearr_28484 = state_28474;
(statearr_28484[(13)] = inst_28351);

(statearr_28484[(14)] = inst_28353);

(statearr_28484[(15)] = inst_28352);

(statearr_28484[(16)] = inst_28354);

(statearr_28484[(17)] = inst_28392);

return statearr_28484;
})();
var statearr_28485_28566 = state_28474__$1;
(statearr_28485_28566[(2)] = null);

(statearr_28485_28566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (39))){
var state_28474__$1 = state_28474;
var statearr_28489_28567 = state_28474__$1;
(statearr_28489_28567[(2)] = null);

(statearr_28489_28567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (4))){
var inst_28342 = (state_28474[(9)]);
var inst_28342__$1 = (state_28474[(2)]);
var inst_28343 = (inst_28342__$1 == null);
var state_28474__$1 = (function (){var statearr_28490 = state_28474;
(statearr_28490[(9)] = inst_28342__$1);

return statearr_28490;
})();
if(cljs.core.truth_(inst_28343)){
var statearr_28491_28568 = state_28474__$1;
(statearr_28491_28568[(1)] = (5));

} else {
var statearr_28492_28569 = state_28474__$1;
(statearr_28492_28569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (15))){
var inst_28351 = (state_28474[(13)]);
var inst_28353 = (state_28474[(14)]);
var inst_28352 = (state_28474[(15)]);
var inst_28354 = (state_28474[(16)]);
var inst_28369 = (state_28474[(2)]);
var inst_28370 = (inst_28354 + (1));
var tmp28486 = inst_28351;
var tmp28487 = inst_28353;
var tmp28488 = inst_28352;
var inst_28351__$1 = tmp28486;
var inst_28352__$1 = tmp28488;
var inst_28353__$1 = tmp28487;
var inst_28354__$1 = inst_28370;
var state_28474__$1 = (function (){var statearr_28493 = state_28474;
(statearr_28493[(13)] = inst_28351__$1);

(statearr_28493[(14)] = inst_28353__$1);

(statearr_28493[(15)] = inst_28352__$1);

(statearr_28493[(16)] = inst_28354__$1);

(statearr_28493[(18)] = inst_28369);

return statearr_28493;
})();
var statearr_28494_28570 = state_28474__$1;
(statearr_28494_28570[(2)] = null);

(statearr_28494_28570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (21))){
var inst_28396 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28498_28571 = state_28474__$1;
(statearr_28498_28571[(2)] = inst_28396);

(statearr_28498_28571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (31))){
var inst_28422 = (state_28474[(11)]);
var inst_28426 = done.call(null,null);
var inst_28427 = cljs.core.async.untap_STAR_.call(null,m,inst_28422);
var state_28474__$1 = (function (){var statearr_28499 = state_28474;
(statearr_28499[(19)] = inst_28426);

return statearr_28499;
})();
var statearr_28500_28572 = state_28474__$1;
(statearr_28500_28572[(2)] = inst_28427);

(statearr_28500_28572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (32))){
var inst_28417 = (state_28474[(10)]);
var inst_28414 = (state_28474[(20)]);
var inst_28416 = (state_28474[(21)]);
var inst_28415 = (state_28474[(12)]);
var inst_28429 = (state_28474[(2)]);
var inst_28430 = (inst_28417 + (1));
var tmp28495 = inst_28414;
var tmp28496 = inst_28416;
var tmp28497 = inst_28415;
var inst_28414__$1 = tmp28495;
var inst_28415__$1 = tmp28497;
var inst_28416__$1 = tmp28496;
var inst_28417__$1 = inst_28430;
var state_28474__$1 = (function (){var statearr_28501 = state_28474;
(statearr_28501[(10)] = inst_28417__$1);

(statearr_28501[(22)] = inst_28429);

(statearr_28501[(20)] = inst_28414__$1);

(statearr_28501[(21)] = inst_28416__$1);

(statearr_28501[(12)] = inst_28415__$1);

return statearr_28501;
})();
var statearr_28502_28573 = state_28474__$1;
(statearr_28502_28573[(2)] = null);

(statearr_28502_28573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (40))){
var inst_28442 = (state_28474[(23)]);
var inst_28446 = done.call(null,null);
var inst_28447 = cljs.core.async.untap_STAR_.call(null,m,inst_28442);
var state_28474__$1 = (function (){var statearr_28503 = state_28474;
(statearr_28503[(24)] = inst_28446);

return statearr_28503;
})();
var statearr_28504_28574 = state_28474__$1;
(statearr_28504_28574[(2)] = inst_28447);

(statearr_28504_28574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (33))){
var inst_28433 = (state_28474[(25)]);
var inst_28435 = cljs.core.chunked_seq_QMARK_.call(null,inst_28433);
var state_28474__$1 = state_28474;
if(inst_28435){
var statearr_28505_28575 = state_28474__$1;
(statearr_28505_28575[(1)] = (36));

} else {
var statearr_28506_28576 = state_28474__$1;
(statearr_28506_28576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (13))){
var inst_28363 = (state_28474[(26)]);
var inst_28366 = cljs.core.async.close_BANG_.call(null,inst_28363);
var state_28474__$1 = state_28474;
var statearr_28507_28577 = state_28474__$1;
(statearr_28507_28577[(2)] = inst_28366);

(statearr_28507_28577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (22))){
var inst_28386 = (state_28474[(8)]);
var inst_28389 = cljs.core.async.close_BANG_.call(null,inst_28386);
var state_28474__$1 = state_28474;
var statearr_28508_28578 = state_28474__$1;
(statearr_28508_28578[(2)] = inst_28389);

(statearr_28508_28578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (36))){
var inst_28433 = (state_28474[(25)]);
var inst_28437 = cljs.core.chunk_first.call(null,inst_28433);
var inst_28438 = cljs.core.chunk_rest.call(null,inst_28433);
var inst_28439 = cljs.core.count.call(null,inst_28437);
var inst_28414 = inst_28438;
var inst_28415 = inst_28437;
var inst_28416 = inst_28439;
var inst_28417 = (0);
var state_28474__$1 = (function (){var statearr_28509 = state_28474;
(statearr_28509[(10)] = inst_28417);

(statearr_28509[(20)] = inst_28414);

(statearr_28509[(21)] = inst_28416);

(statearr_28509[(12)] = inst_28415);

return statearr_28509;
})();
var statearr_28510_28579 = state_28474__$1;
(statearr_28510_28579[(2)] = null);

(statearr_28510_28579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (41))){
var inst_28433 = (state_28474[(25)]);
var inst_28449 = (state_28474[(2)]);
var inst_28450 = cljs.core.next.call(null,inst_28433);
var inst_28414 = inst_28450;
var inst_28415 = null;
var inst_28416 = (0);
var inst_28417 = (0);
var state_28474__$1 = (function (){var statearr_28511 = state_28474;
(statearr_28511[(10)] = inst_28417);

(statearr_28511[(20)] = inst_28414);

(statearr_28511[(21)] = inst_28416);

(statearr_28511[(12)] = inst_28415);

(statearr_28511[(27)] = inst_28449);

return statearr_28511;
})();
var statearr_28512_28580 = state_28474__$1;
(statearr_28512_28580[(2)] = null);

(statearr_28512_28580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (43))){
var state_28474__$1 = state_28474;
var statearr_28513_28581 = state_28474__$1;
(statearr_28513_28581[(2)] = null);

(statearr_28513_28581[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (29))){
var inst_28458 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28514_28582 = state_28474__$1;
(statearr_28514_28582[(2)] = inst_28458);

(statearr_28514_28582[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (44))){
var inst_28467 = (state_28474[(2)]);
var state_28474__$1 = (function (){var statearr_28515 = state_28474;
(statearr_28515[(28)] = inst_28467);

return statearr_28515;
})();
var statearr_28516_28583 = state_28474__$1;
(statearr_28516_28583[(2)] = null);

(statearr_28516_28583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (6))){
var inst_28406 = (state_28474[(29)]);
var inst_28405 = cljs.core.deref.call(null,cs);
var inst_28406__$1 = cljs.core.keys.call(null,inst_28405);
var inst_28407 = cljs.core.count.call(null,inst_28406__$1);
var inst_28408 = cljs.core.reset_BANG_.call(null,dctr,inst_28407);
var inst_28413 = cljs.core.seq.call(null,inst_28406__$1);
var inst_28414 = inst_28413;
var inst_28415 = null;
var inst_28416 = (0);
var inst_28417 = (0);
var state_28474__$1 = (function (){var statearr_28517 = state_28474;
(statearr_28517[(10)] = inst_28417);

(statearr_28517[(20)] = inst_28414);

(statearr_28517[(30)] = inst_28408);

(statearr_28517[(21)] = inst_28416);

(statearr_28517[(29)] = inst_28406__$1);

(statearr_28517[(12)] = inst_28415);

return statearr_28517;
})();
var statearr_28518_28584 = state_28474__$1;
(statearr_28518_28584[(2)] = null);

(statearr_28518_28584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (28))){
var inst_28433 = (state_28474[(25)]);
var inst_28414 = (state_28474[(20)]);
var inst_28433__$1 = cljs.core.seq.call(null,inst_28414);
var state_28474__$1 = (function (){var statearr_28519 = state_28474;
(statearr_28519[(25)] = inst_28433__$1);

return statearr_28519;
})();
if(inst_28433__$1){
var statearr_28520_28585 = state_28474__$1;
(statearr_28520_28585[(1)] = (33));

} else {
var statearr_28521_28586 = state_28474__$1;
(statearr_28521_28586[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (25))){
var inst_28417 = (state_28474[(10)]);
var inst_28416 = (state_28474[(21)]);
var inst_28419 = (inst_28417 < inst_28416);
var inst_28420 = inst_28419;
var state_28474__$1 = state_28474;
if(cljs.core.truth_(inst_28420)){
var statearr_28522_28587 = state_28474__$1;
(statearr_28522_28587[(1)] = (27));

} else {
var statearr_28523_28588 = state_28474__$1;
(statearr_28523_28588[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (34))){
var state_28474__$1 = state_28474;
var statearr_28524_28589 = state_28474__$1;
(statearr_28524_28589[(2)] = null);

(statearr_28524_28589[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (17))){
var state_28474__$1 = state_28474;
var statearr_28525_28590 = state_28474__$1;
(statearr_28525_28590[(2)] = null);

(statearr_28525_28590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (3))){
var inst_28472 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28474__$1,inst_28472);
} else {
if((state_val_28475 === (12))){
var inst_28401 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28526_28591 = state_28474__$1;
(statearr_28526_28591[(2)] = inst_28401);

(statearr_28526_28591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (2))){
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28474__$1,(4),ch);
} else {
if((state_val_28475 === (23))){
var state_28474__$1 = state_28474;
var statearr_28527_28592 = state_28474__$1;
(statearr_28527_28592[(2)] = null);

(statearr_28527_28592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (35))){
var inst_28456 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28528_28593 = state_28474__$1;
(statearr_28528_28593[(2)] = inst_28456);

(statearr_28528_28593[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (19))){
var inst_28373 = (state_28474[(7)]);
var inst_28377 = cljs.core.chunk_first.call(null,inst_28373);
var inst_28378 = cljs.core.chunk_rest.call(null,inst_28373);
var inst_28379 = cljs.core.count.call(null,inst_28377);
var inst_28351 = inst_28378;
var inst_28352 = inst_28377;
var inst_28353 = inst_28379;
var inst_28354 = (0);
var state_28474__$1 = (function (){var statearr_28529 = state_28474;
(statearr_28529[(13)] = inst_28351);

(statearr_28529[(14)] = inst_28353);

(statearr_28529[(15)] = inst_28352);

(statearr_28529[(16)] = inst_28354);

return statearr_28529;
})();
var statearr_28530_28594 = state_28474__$1;
(statearr_28530_28594[(2)] = null);

(statearr_28530_28594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (11))){
var inst_28373 = (state_28474[(7)]);
var inst_28351 = (state_28474[(13)]);
var inst_28373__$1 = cljs.core.seq.call(null,inst_28351);
var state_28474__$1 = (function (){var statearr_28531 = state_28474;
(statearr_28531[(7)] = inst_28373__$1);

return statearr_28531;
})();
if(inst_28373__$1){
var statearr_28532_28595 = state_28474__$1;
(statearr_28532_28595[(1)] = (16));

} else {
var statearr_28533_28596 = state_28474__$1;
(statearr_28533_28596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (9))){
var inst_28403 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28534_28597 = state_28474__$1;
(statearr_28534_28597[(2)] = inst_28403);

(statearr_28534_28597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (5))){
var inst_28349 = cljs.core.deref.call(null,cs);
var inst_28350 = cljs.core.seq.call(null,inst_28349);
var inst_28351 = inst_28350;
var inst_28352 = null;
var inst_28353 = (0);
var inst_28354 = (0);
var state_28474__$1 = (function (){var statearr_28535 = state_28474;
(statearr_28535[(13)] = inst_28351);

(statearr_28535[(14)] = inst_28353);

(statearr_28535[(15)] = inst_28352);

(statearr_28535[(16)] = inst_28354);

return statearr_28535;
})();
var statearr_28536_28598 = state_28474__$1;
(statearr_28536_28598[(2)] = null);

(statearr_28536_28598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (14))){
var state_28474__$1 = state_28474;
var statearr_28537_28599 = state_28474__$1;
(statearr_28537_28599[(2)] = null);

(statearr_28537_28599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (45))){
var inst_28464 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28538_28600 = state_28474__$1;
(statearr_28538_28600[(2)] = inst_28464);

(statearr_28538_28600[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (26))){
var inst_28406 = (state_28474[(29)]);
var inst_28460 = (state_28474[(2)]);
var inst_28461 = cljs.core.seq.call(null,inst_28406);
var state_28474__$1 = (function (){var statearr_28539 = state_28474;
(statearr_28539[(31)] = inst_28460);

return statearr_28539;
})();
if(inst_28461){
var statearr_28540_28601 = state_28474__$1;
(statearr_28540_28601[(1)] = (42));

} else {
var statearr_28541_28602 = state_28474__$1;
(statearr_28541_28602[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (16))){
var inst_28373 = (state_28474[(7)]);
var inst_28375 = cljs.core.chunked_seq_QMARK_.call(null,inst_28373);
var state_28474__$1 = state_28474;
if(inst_28375){
var statearr_28542_28603 = state_28474__$1;
(statearr_28542_28603[(1)] = (19));

} else {
var statearr_28543_28604 = state_28474__$1;
(statearr_28543_28604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (38))){
var inst_28453 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28544_28605 = state_28474__$1;
(statearr_28544_28605[(2)] = inst_28453);

(statearr_28544_28605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (30))){
var state_28474__$1 = state_28474;
var statearr_28545_28606 = state_28474__$1;
(statearr_28545_28606[(2)] = null);

(statearr_28545_28606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (10))){
var inst_28352 = (state_28474[(15)]);
var inst_28354 = (state_28474[(16)]);
var inst_28362 = cljs.core._nth.call(null,inst_28352,inst_28354);
var inst_28363 = cljs.core.nth.call(null,inst_28362,(0),null);
var inst_28364 = cljs.core.nth.call(null,inst_28362,(1),null);
var state_28474__$1 = (function (){var statearr_28546 = state_28474;
(statearr_28546[(26)] = inst_28363);

return statearr_28546;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28547_28607 = state_28474__$1;
(statearr_28547_28607[(1)] = (13));

} else {
var statearr_28548_28608 = state_28474__$1;
(statearr_28548_28608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (18))){
var inst_28399 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28549_28609 = state_28474__$1;
(statearr_28549_28609[(2)] = inst_28399);

(statearr_28549_28609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (42))){
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28474__$1,(45),dchan);
} else {
if((state_val_28475 === (37))){
var inst_28342 = (state_28474[(9)]);
var inst_28433 = (state_28474[(25)]);
var inst_28442 = (state_28474[(23)]);
var inst_28442__$1 = cljs.core.first.call(null,inst_28433);
var inst_28443 = cljs.core.async.put_BANG_.call(null,inst_28442__$1,inst_28342,done);
var state_28474__$1 = (function (){var statearr_28550 = state_28474;
(statearr_28550[(23)] = inst_28442__$1);

return statearr_28550;
})();
if(cljs.core.truth_(inst_28443)){
var statearr_28551_28610 = state_28474__$1;
(statearr_28551_28610[(1)] = (39));

} else {
var statearr_28552_28611 = state_28474__$1;
(statearr_28552_28611[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (8))){
var inst_28353 = (state_28474[(14)]);
var inst_28354 = (state_28474[(16)]);
var inst_28356 = (inst_28354 < inst_28353);
var inst_28357 = inst_28356;
var state_28474__$1 = state_28474;
if(cljs.core.truth_(inst_28357)){
var statearr_28553_28612 = state_28474__$1;
(statearr_28553_28612[(1)] = (10));

} else {
var statearr_28554_28613 = state_28474__$1;
(statearr_28554_28613[(1)] = (11));

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
});})(c__27754__auto___28559,cs,m,dchan,dctr,done))
;
return ((function (switch__27666__auto__,c__27754__auto___28559,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27667__auto__ = null;
var cljs$core$async$mult_$_state_machine__27667__auto____0 = (function (){
var statearr_28555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28555[(0)] = cljs$core$async$mult_$_state_machine__27667__auto__);

(statearr_28555[(1)] = (1));

return statearr_28555;
});
var cljs$core$async$mult_$_state_machine__27667__auto____1 = (function (state_28474){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28556){if((e28556 instanceof Object)){
var ex__27670__auto__ = e28556;
var statearr_28557_28614 = state_28474;
(statearr_28557_28614[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28615 = state_28474;
state_28474 = G__28615;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27667__auto__ = function(state_28474){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27667__auto____1.call(this,state_28474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27667__auto____0;
cljs$core$async$mult_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27667__auto____1;
return cljs$core$async$mult_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28559,cs,m,dchan,dctr,done))
})();
var state__27756__auto__ = (function (){var statearr_28558 = f__27755__auto__.call(null);
(statearr_28558[(6)] = c__27754__auto___28559);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28559,cs,m,dchan,dctr,done))
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
var G__28617 = arguments.length;
switch (G__28617) {
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
var len__4499__auto___28629 = arguments.length;
var i__4500__auto___28630 = (0);
while(true){
if((i__4500__auto___28630 < len__4499__auto___28629)){
args__4502__auto__.push((arguments[i__4500__auto___28630]));

var G__28631 = (i__4500__auto___28630 + (1));
i__4500__auto___28630 = G__28631;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28623){
var map__28624 = p__28623;
var map__28624__$1 = ((((!((map__28624 == null)))?(((((map__28624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);
var opts = map__28624__$1;
var statearr_28626_28632 = state;
(statearr_28626_28632[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28624,map__28624__$1,opts){
return (function (val){
var statearr_28627_28633 = state;
(statearr_28627_28633[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28624,map__28624__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28628_28634 = state;
(statearr_28628_28634[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28619){
var G__28620 = cljs.core.first.call(null,seq28619);
var seq28619__$1 = cljs.core.next.call(null,seq28619);
var G__28621 = cljs.core.first.call(null,seq28619__$1);
var seq28619__$2 = cljs.core.next.call(null,seq28619__$1);
var G__28622 = cljs.core.first.call(null,seq28619__$2);
var seq28619__$3 = cljs.core.next.call(null,seq28619__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28620,G__28621,G__28622,seq28619__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28635 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28636){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28636 = meta28636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28637,meta28636__$1){
var self__ = this;
var _28637__$1 = this;
return (new cljs.core.async.t_cljs$core$async28635(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28636__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28637){
var self__ = this;
var _28637__$1 = this;
return self__.meta28636;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28635.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28636","meta28636",-1137639639,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28635";

cljs.core.async.t_cljs$core$async28635.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28635");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28635.
 */
cljs.core.async.__GT_t_cljs$core$async28635 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28635(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28636){
return (new cljs.core.async.t_cljs$core$async28635(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28636));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28635(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27754__auto___28799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28739){
var state_val_28740 = (state_28739[(1)]);
if((state_val_28740 === (7))){
var inst_28654 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28741_28800 = state_28739__$1;
(statearr_28741_28800[(2)] = inst_28654);

(statearr_28741_28800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (20))){
var inst_28666 = (state_28739[(7)]);
var state_28739__$1 = state_28739;
var statearr_28742_28801 = state_28739__$1;
(statearr_28742_28801[(2)] = inst_28666);

(statearr_28742_28801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (27))){
var state_28739__$1 = state_28739;
var statearr_28743_28802 = state_28739__$1;
(statearr_28743_28802[(2)] = null);

(statearr_28743_28802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (1))){
var inst_28641 = (state_28739[(8)]);
var inst_28641__$1 = calc_state.call(null);
var inst_28643 = (inst_28641__$1 == null);
var inst_28644 = cljs.core.not.call(null,inst_28643);
var state_28739__$1 = (function (){var statearr_28744 = state_28739;
(statearr_28744[(8)] = inst_28641__$1);

return statearr_28744;
})();
if(inst_28644){
var statearr_28745_28803 = state_28739__$1;
(statearr_28745_28803[(1)] = (2));

} else {
var statearr_28746_28804 = state_28739__$1;
(statearr_28746_28804[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (24))){
var inst_28690 = (state_28739[(9)]);
var inst_28699 = (state_28739[(10)]);
var inst_28713 = (state_28739[(11)]);
var inst_28713__$1 = inst_28690.call(null,inst_28699);
var state_28739__$1 = (function (){var statearr_28747 = state_28739;
(statearr_28747[(11)] = inst_28713__$1);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28713__$1)){
var statearr_28748_28805 = state_28739__$1;
(statearr_28748_28805[(1)] = (29));

} else {
var statearr_28749_28806 = state_28739__$1;
(statearr_28749_28806[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (4))){
var inst_28657 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28657)){
var statearr_28750_28807 = state_28739__$1;
(statearr_28750_28807[(1)] = (8));

} else {
var statearr_28751_28808 = state_28739__$1;
(statearr_28751_28808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (15))){
var inst_28684 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28684)){
var statearr_28752_28809 = state_28739__$1;
(statearr_28752_28809[(1)] = (19));

} else {
var statearr_28753_28810 = state_28739__$1;
(statearr_28753_28810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (21))){
var inst_28689 = (state_28739[(12)]);
var inst_28689__$1 = (state_28739[(2)]);
var inst_28690 = cljs.core.get.call(null,inst_28689__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28691 = cljs.core.get.call(null,inst_28689__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28692 = cljs.core.get.call(null,inst_28689__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28739__$1 = (function (){var statearr_28754 = state_28739;
(statearr_28754[(9)] = inst_28690);

(statearr_28754[(13)] = inst_28691);

(statearr_28754[(12)] = inst_28689__$1);

return statearr_28754;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28739__$1,(22),inst_28692);
} else {
if((state_val_28740 === (31))){
var inst_28721 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28721)){
var statearr_28755_28811 = state_28739__$1;
(statearr_28755_28811[(1)] = (32));

} else {
var statearr_28756_28812 = state_28739__$1;
(statearr_28756_28812[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (32))){
var inst_28698 = (state_28739[(14)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28739__$1,(35),out,inst_28698);
} else {
if((state_val_28740 === (33))){
var inst_28689 = (state_28739[(12)]);
var inst_28666 = inst_28689;
var state_28739__$1 = (function (){var statearr_28757 = state_28739;
(statearr_28757[(7)] = inst_28666);

return statearr_28757;
})();
var statearr_28758_28813 = state_28739__$1;
(statearr_28758_28813[(2)] = null);

(statearr_28758_28813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (13))){
var inst_28666 = (state_28739[(7)]);
var inst_28673 = inst_28666.cljs$lang$protocol_mask$partition0$;
var inst_28674 = (inst_28673 & (64));
var inst_28675 = inst_28666.cljs$core$ISeq$;
var inst_28676 = (cljs.core.PROTOCOL_SENTINEL === inst_28675);
var inst_28677 = ((inst_28674) || (inst_28676));
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28677)){
var statearr_28759_28814 = state_28739__$1;
(statearr_28759_28814[(1)] = (16));

} else {
var statearr_28760_28815 = state_28739__$1;
(statearr_28760_28815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (22))){
var inst_28699 = (state_28739[(10)]);
var inst_28698 = (state_28739[(14)]);
var inst_28697 = (state_28739[(2)]);
var inst_28698__$1 = cljs.core.nth.call(null,inst_28697,(0),null);
var inst_28699__$1 = cljs.core.nth.call(null,inst_28697,(1),null);
var inst_28700 = (inst_28698__$1 == null);
var inst_28701 = cljs.core._EQ_.call(null,inst_28699__$1,change);
var inst_28702 = ((inst_28700) || (inst_28701));
var state_28739__$1 = (function (){var statearr_28761 = state_28739;
(statearr_28761[(10)] = inst_28699__$1);

(statearr_28761[(14)] = inst_28698__$1);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28702)){
var statearr_28762_28816 = state_28739__$1;
(statearr_28762_28816[(1)] = (23));

} else {
var statearr_28763_28817 = state_28739__$1;
(statearr_28763_28817[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (36))){
var inst_28689 = (state_28739[(12)]);
var inst_28666 = inst_28689;
var state_28739__$1 = (function (){var statearr_28764 = state_28739;
(statearr_28764[(7)] = inst_28666);

return statearr_28764;
})();
var statearr_28765_28818 = state_28739__$1;
(statearr_28765_28818[(2)] = null);

(statearr_28765_28818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (29))){
var inst_28713 = (state_28739[(11)]);
var state_28739__$1 = state_28739;
var statearr_28766_28819 = state_28739__$1;
(statearr_28766_28819[(2)] = inst_28713);

(statearr_28766_28819[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (6))){
var state_28739__$1 = state_28739;
var statearr_28767_28820 = state_28739__$1;
(statearr_28767_28820[(2)] = false);

(statearr_28767_28820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (28))){
var inst_28709 = (state_28739[(2)]);
var inst_28710 = calc_state.call(null);
var inst_28666 = inst_28710;
var state_28739__$1 = (function (){var statearr_28768 = state_28739;
(statearr_28768[(15)] = inst_28709);

(statearr_28768[(7)] = inst_28666);

return statearr_28768;
})();
var statearr_28769_28821 = state_28739__$1;
(statearr_28769_28821[(2)] = null);

(statearr_28769_28821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (25))){
var inst_28735 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28770_28822 = state_28739__$1;
(statearr_28770_28822[(2)] = inst_28735);

(statearr_28770_28822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (34))){
var inst_28733 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28771_28823 = state_28739__$1;
(statearr_28771_28823[(2)] = inst_28733);

(statearr_28771_28823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (17))){
var state_28739__$1 = state_28739;
var statearr_28772_28824 = state_28739__$1;
(statearr_28772_28824[(2)] = false);

(statearr_28772_28824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (3))){
var state_28739__$1 = state_28739;
var statearr_28773_28825 = state_28739__$1;
(statearr_28773_28825[(2)] = false);

(statearr_28773_28825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (12))){
var inst_28737 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28739__$1,inst_28737);
} else {
if((state_val_28740 === (2))){
var inst_28641 = (state_28739[(8)]);
var inst_28646 = inst_28641.cljs$lang$protocol_mask$partition0$;
var inst_28647 = (inst_28646 & (64));
var inst_28648 = inst_28641.cljs$core$ISeq$;
var inst_28649 = (cljs.core.PROTOCOL_SENTINEL === inst_28648);
var inst_28650 = ((inst_28647) || (inst_28649));
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28650)){
var statearr_28774_28826 = state_28739__$1;
(statearr_28774_28826[(1)] = (5));

} else {
var statearr_28775_28827 = state_28739__$1;
(statearr_28775_28827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (23))){
var inst_28698 = (state_28739[(14)]);
var inst_28704 = (inst_28698 == null);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28704)){
var statearr_28776_28828 = state_28739__$1;
(statearr_28776_28828[(1)] = (26));

} else {
var statearr_28777_28829 = state_28739__$1;
(statearr_28777_28829[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (35))){
var inst_28724 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28724)){
var statearr_28778_28830 = state_28739__$1;
(statearr_28778_28830[(1)] = (36));

} else {
var statearr_28779_28831 = state_28739__$1;
(statearr_28779_28831[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (19))){
var inst_28666 = (state_28739[(7)]);
var inst_28686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28666);
var state_28739__$1 = state_28739;
var statearr_28780_28832 = state_28739__$1;
(statearr_28780_28832[(2)] = inst_28686);

(statearr_28780_28832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (11))){
var inst_28666 = (state_28739[(7)]);
var inst_28670 = (inst_28666 == null);
var inst_28671 = cljs.core.not.call(null,inst_28670);
var state_28739__$1 = state_28739;
if(inst_28671){
var statearr_28781_28833 = state_28739__$1;
(statearr_28781_28833[(1)] = (13));

} else {
var statearr_28782_28834 = state_28739__$1;
(statearr_28782_28834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (9))){
var inst_28641 = (state_28739[(8)]);
var state_28739__$1 = state_28739;
var statearr_28783_28835 = state_28739__$1;
(statearr_28783_28835[(2)] = inst_28641);

(statearr_28783_28835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (5))){
var state_28739__$1 = state_28739;
var statearr_28784_28836 = state_28739__$1;
(statearr_28784_28836[(2)] = true);

(statearr_28784_28836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (14))){
var state_28739__$1 = state_28739;
var statearr_28785_28837 = state_28739__$1;
(statearr_28785_28837[(2)] = false);

(statearr_28785_28837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (26))){
var inst_28699 = (state_28739[(10)]);
var inst_28706 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28699);
var state_28739__$1 = state_28739;
var statearr_28786_28838 = state_28739__$1;
(statearr_28786_28838[(2)] = inst_28706);

(statearr_28786_28838[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (16))){
var state_28739__$1 = state_28739;
var statearr_28787_28839 = state_28739__$1;
(statearr_28787_28839[(2)] = true);

(statearr_28787_28839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (38))){
var inst_28729 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28788_28840 = state_28739__$1;
(statearr_28788_28840[(2)] = inst_28729);

(statearr_28788_28840[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (30))){
var inst_28690 = (state_28739[(9)]);
var inst_28699 = (state_28739[(10)]);
var inst_28691 = (state_28739[(13)]);
var inst_28716 = cljs.core.empty_QMARK_.call(null,inst_28690);
var inst_28717 = inst_28691.call(null,inst_28699);
var inst_28718 = cljs.core.not.call(null,inst_28717);
var inst_28719 = ((inst_28716) && (inst_28718));
var state_28739__$1 = state_28739;
var statearr_28789_28841 = state_28739__$1;
(statearr_28789_28841[(2)] = inst_28719);

(statearr_28789_28841[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (10))){
var inst_28641 = (state_28739[(8)]);
var inst_28662 = (state_28739[(2)]);
var inst_28663 = cljs.core.get.call(null,inst_28662,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28664 = cljs.core.get.call(null,inst_28662,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28665 = cljs.core.get.call(null,inst_28662,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28666 = inst_28641;
var state_28739__$1 = (function (){var statearr_28790 = state_28739;
(statearr_28790[(16)] = inst_28665);

(statearr_28790[(17)] = inst_28664);

(statearr_28790[(7)] = inst_28666);

(statearr_28790[(18)] = inst_28663);

return statearr_28790;
})();
var statearr_28791_28842 = state_28739__$1;
(statearr_28791_28842[(2)] = null);

(statearr_28791_28842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (18))){
var inst_28681 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28792_28843 = state_28739__$1;
(statearr_28792_28843[(2)] = inst_28681);

(statearr_28792_28843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (37))){
var state_28739__$1 = state_28739;
var statearr_28793_28844 = state_28739__$1;
(statearr_28793_28844[(2)] = null);

(statearr_28793_28844[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (8))){
var inst_28641 = (state_28739[(8)]);
var inst_28659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28641);
var state_28739__$1 = state_28739;
var statearr_28794_28845 = state_28739__$1;
(statearr_28794_28845[(2)] = inst_28659);

(statearr_28794_28845[(1)] = (10));


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
});})(c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27666__auto__,c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27667__auto__ = null;
var cljs$core$async$mix_$_state_machine__27667__auto____0 = (function (){
var statearr_28795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28795[(0)] = cljs$core$async$mix_$_state_machine__27667__auto__);

(statearr_28795[(1)] = (1));

return statearr_28795;
});
var cljs$core$async$mix_$_state_machine__27667__auto____1 = (function (state_28739){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28796){if((e28796 instanceof Object)){
var ex__27670__auto__ = e28796;
var statearr_28797_28846 = state_28739;
(statearr_28797_28846[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28847 = state_28739;
state_28739 = G__28847;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27667__auto__ = function(state_28739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27667__auto____1.call(this,state_28739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27667__auto____0;
cljs$core$async$mix_$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27667__auto____1;
return cljs$core$async$mix_$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27756__auto__ = (function (){var statearr_28798 = f__27755__auto__.call(null);
(statearr_28798[(6)] = c__27754__auto___28799);

return statearr_28798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28849 = arguments.length;
switch (G__28849) {
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
var G__28853 = arguments.length;
switch (G__28853) {
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
return (function (p1__28851_SHARP_){
if(cljs.core.truth_(p1__28851_SHARP_.call(null,topic))){
return p1__28851_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28851_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28854 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28855){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28855 = meta28855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28856,meta28855__$1){
var self__ = this;
var _28856__$1 = this;
return (new cljs.core.async.t_cljs$core$async28854(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28855__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28856){
var self__ = this;
var _28856__$1 = this;
return self__.meta28855;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28855","meta28855",-1343483698,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28854";

cljs.core.async.t_cljs$core$async28854.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28854");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28854.
 */
cljs.core.async.__GT_t_cljs$core$async28854 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28855){
return (new cljs.core.async.t_cljs$core$async28854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28855));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28854(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27754__auto___28974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___28974,mults,ensure_mult,p){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___28974,mults,ensure_mult,p){
return (function (state_28928){
var state_val_28929 = (state_28928[(1)]);
if((state_val_28929 === (7))){
var inst_28924 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28930_28975 = state_28928__$1;
(statearr_28930_28975[(2)] = inst_28924);

(statearr_28930_28975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (20))){
var state_28928__$1 = state_28928;
var statearr_28931_28976 = state_28928__$1;
(statearr_28931_28976[(2)] = null);

(statearr_28931_28976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (1))){
var state_28928__$1 = state_28928;
var statearr_28932_28977 = state_28928__$1;
(statearr_28932_28977[(2)] = null);

(statearr_28932_28977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (24))){
var inst_28907 = (state_28928[(7)]);
var inst_28916 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28907);
var state_28928__$1 = state_28928;
var statearr_28933_28978 = state_28928__$1;
(statearr_28933_28978[(2)] = inst_28916);

(statearr_28933_28978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (4))){
var inst_28859 = (state_28928[(8)]);
var inst_28859__$1 = (state_28928[(2)]);
var inst_28860 = (inst_28859__$1 == null);
var state_28928__$1 = (function (){var statearr_28934 = state_28928;
(statearr_28934[(8)] = inst_28859__$1);

return statearr_28934;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28935_28979 = state_28928__$1;
(statearr_28935_28979[(1)] = (5));

} else {
var statearr_28936_28980 = state_28928__$1;
(statearr_28936_28980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (15))){
var inst_28901 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28937_28981 = state_28928__$1;
(statearr_28937_28981[(2)] = inst_28901);

(statearr_28937_28981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (21))){
var inst_28921 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28938 = state_28928;
(statearr_28938[(9)] = inst_28921);

return statearr_28938;
})();
var statearr_28939_28982 = state_28928__$1;
(statearr_28939_28982[(2)] = null);

(statearr_28939_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (13))){
var inst_28883 = (state_28928[(10)]);
var inst_28885 = cljs.core.chunked_seq_QMARK_.call(null,inst_28883);
var state_28928__$1 = state_28928;
if(inst_28885){
var statearr_28940_28983 = state_28928__$1;
(statearr_28940_28983[(1)] = (16));

} else {
var statearr_28941_28984 = state_28928__$1;
(statearr_28941_28984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (22))){
var inst_28913 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
if(cljs.core.truth_(inst_28913)){
var statearr_28942_28985 = state_28928__$1;
(statearr_28942_28985[(1)] = (23));

} else {
var statearr_28943_28986 = state_28928__$1;
(statearr_28943_28986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (6))){
var inst_28859 = (state_28928[(8)]);
var inst_28907 = (state_28928[(7)]);
var inst_28909 = (state_28928[(11)]);
var inst_28907__$1 = topic_fn.call(null,inst_28859);
var inst_28908 = cljs.core.deref.call(null,mults);
var inst_28909__$1 = cljs.core.get.call(null,inst_28908,inst_28907__$1);
var state_28928__$1 = (function (){var statearr_28944 = state_28928;
(statearr_28944[(7)] = inst_28907__$1);

(statearr_28944[(11)] = inst_28909__$1);

return statearr_28944;
})();
if(cljs.core.truth_(inst_28909__$1)){
var statearr_28945_28987 = state_28928__$1;
(statearr_28945_28987[(1)] = (19));

} else {
var statearr_28946_28988 = state_28928__$1;
(statearr_28946_28988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (25))){
var inst_28918 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28947_28989 = state_28928__$1;
(statearr_28947_28989[(2)] = inst_28918);

(statearr_28947_28989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (17))){
var inst_28883 = (state_28928[(10)]);
var inst_28892 = cljs.core.first.call(null,inst_28883);
var inst_28893 = cljs.core.async.muxch_STAR_.call(null,inst_28892);
var inst_28894 = cljs.core.async.close_BANG_.call(null,inst_28893);
var inst_28895 = cljs.core.next.call(null,inst_28883);
var inst_28869 = inst_28895;
var inst_28870 = null;
var inst_28871 = (0);
var inst_28872 = (0);
var state_28928__$1 = (function (){var statearr_28948 = state_28928;
(statearr_28948[(12)] = inst_28872);

(statearr_28948[(13)] = inst_28869);

(statearr_28948[(14)] = inst_28870);

(statearr_28948[(15)] = inst_28871);

(statearr_28948[(16)] = inst_28894);

return statearr_28948;
})();
var statearr_28949_28990 = state_28928__$1;
(statearr_28949_28990[(2)] = null);

(statearr_28949_28990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (3))){
var inst_28926 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28928__$1,inst_28926);
} else {
if((state_val_28929 === (12))){
var inst_28903 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28950_28991 = state_28928__$1;
(statearr_28950_28991[(2)] = inst_28903);

(statearr_28950_28991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (2))){
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(4),ch);
} else {
if((state_val_28929 === (23))){
var state_28928__$1 = state_28928;
var statearr_28951_28992 = state_28928__$1;
(statearr_28951_28992[(2)] = null);

(statearr_28951_28992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (19))){
var inst_28859 = (state_28928[(8)]);
var inst_28909 = (state_28928[(11)]);
var inst_28911 = cljs.core.async.muxch_STAR_.call(null,inst_28909);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28928__$1,(22),inst_28911,inst_28859);
} else {
if((state_val_28929 === (11))){
var inst_28869 = (state_28928[(13)]);
var inst_28883 = (state_28928[(10)]);
var inst_28883__$1 = cljs.core.seq.call(null,inst_28869);
var state_28928__$1 = (function (){var statearr_28952 = state_28928;
(statearr_28952[(10)] = inst_28883__$1);

return statearr_28952;
})();
if(inst_28883__$1){
var statearr_28953_28993 = state_28928__$1;
(statearr_28953_28993[(1)] = (13));

} else {
var statearr_28954_28994 = state_28928__$1;
(statearr_28954_28994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (9))){
var inst_28905 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28955_28995 = state_28928__$1;
(statearr_28955_28995[(2)] = inst_28905);

(statearr_28955_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (5))){
var inst_28866 = cljs.core.deref.call(null,mults);
var inst_28867 = cljs.core.vals.call(null,inst_28866);
var inst_28868 = cljs.core.seq.call(null,inst_28867);
var inst_28869 = inst_28868;
var inst_28870 = null;
var inst_28871 = (0);
var inst_28872 = (0);
var state_28928__$1 = (function (){var statearr_28956 = state_28928;
(statearr_28956[(12)] = inst_28872);

(statearr_28956[(13)] = inst_28869);

(statearr_28956[(14)] = inst_28870);

(statearr_28956[(15)] = inst_28871);

return statearr_28956;
})();
var statearr_28957_28996 = state_28928__$1;
(statearr_28957_28996[(2)] = null);

(statearr_28957_28996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (14))){
var state_28928__$1 = state_28928;
var statearr_28961_28997 = state_28928__$1;
(statearr_28961_28997[(2)] = null);

(statearr_28961_28997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (16))){
var inst_28883 = (state_28928[(10)]);
var inst_28887 = cljs.core.chunk_first.call(null,inst_28883);
var inst_28888 = cljs.core.chunk_rest.call(null,inst_28883);
var inst_28889 = cljs.core.count.call(null,inst_28887);
var inst_28869 = inst_28888;
var inst_28870 = inst_28887;
var inst_28871 = inst_28889;
var inst_28872 = (0);
var state_28928__$1 = (function (){var statearr_28962 = state_28928;
(statearr_28962[(12)] = inst_28872);

(statearr_28962[(13)] = inst_28869);

(statearr_28962[(14)] = inst_28870);

(statearr_28962[(15)] = inst_28871);

return statearr_28962;
})();
var statearr_28963_28998 = state_28928__$1;
(statearr_28963_28998[(2)] = null);

(statearr_28963_28998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (10))){
var inst_28872 = (state_28928[(12)]);
var inst_28869 = (state_28928[(13)]);
var inst_28870 = (state_28928[(14)]);
var inst_28871 = (state_28928[(15)]);
var inst_28877 = cljs.core._nth.call(null,inst_28870,inst_28872);
var inst_28878 = cljs.core.async.muxch_STAR_.call(null,inst_28877);
var inst_28879 = cljs.core.async.close_BANG_.call(null,inst_28878);
var inst_28880 = (inst_28872 + (1));
var tmp28958 = inst_28869;
var tmp28959 = inst_28870;
var tmp28960 = inst_28871;
var inst_28869__$1 = tmp28958;
var inst_28870__$1 = tmp28959;
var inst_28871__$1 = tmp28960;
var inst_28872__$1 = inst_28880;
var state_28928__$1 = (function (){var statearr_28964 = state_28928;
(statearr_28964[(12)] = inst_28872__$1);

(statearr_28964[(13)] = inst_28869__$1);

(statearr_28964[(14)] = inst_28870__$1);

(statearr_28964[(15)] = inst_28871__$1);

(statearr_28964[(17)] = inst_28879);

return statearr_28964;
})();
var statearr_28965_28999 = state_28928__$1;
(statearr_28965_28999[(2)] = null);

(statearr_28965_28999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (18))){
var inst_28898 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28966_29000 = state_28928__$1;
(statearr_28966_29000[(2)] = inst_28898);

(statearr_28966_29000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (8))){
var inst_28872 = (state_28928[(12)]);
var inst_28871 = (state_28928[(15)]);
var inst_28874 = (inst_28872 < inst_28871);
var inst_28875 = inst_28874;
var state_28928__$1 = state_28928;
if(cljs.core.truth_(inst_28875)){
var statearr_28967_29001 = state_28928__$1;
(statearr_28967_29001[(1)] = (10));

} else {
var statearr_28968_29002 = state_28928__$1;
(statearr_28968_29002[(1)] = (11));

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
});})(c__27754__auto___28974,mults,ensure_mult,p))
;
return ((function (switch__27666__auto__,c__27754__auto___28974,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_28969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28969[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_28969[(1)] = (1));

return statearr_28969;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_28928){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_28928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e28970){if((e28970 instanceof Object)){
var ex__27670__auto__ = e28970;
var statearr_28971_29003 = state_28928;
(statearr_28971_29003[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29004 = state_28928;
state_28928 = G__29004;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_28928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_28928);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___28974,mults,ensure_mult,p))
})();
var state__27756__auto__ = (function (){var statearr_28972 = f__27755__auto__.call(null);
(statearr_28972[(6)] = c__27754__auto___28974);

return statearr_28972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___28974,mults,ensure_mult,p))
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
var G__29006 = arguments.length;
switch (G__29006) {
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
var G__29009 = arguments.length;
switch (G__29009) {
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
var G__29012 = arguments.length;
switch (G__29012) {
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
var c__27754__auto___29079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29051){
var state_val_29052 = (state_29051[(1)]);
if((state_val_29052 === (7))){
var state_29051__$1 = state_29051;
var statearr_29053_29080 = state_29051__$1;
(statearr_29053_29080[(2)] = null);

(statearr_29053_29080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (1))){
var state_29051__$1 = state_29051;
var statearr_29054_29081 = state_29051__$1;
(statearr_29054_29081[(2)] = null);

(statearr_29054_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (4))){
var inst_29015 = (state_29051[(7)]);
var inst_29017 = (inst_29015 < cnt);
var state_29051__$1 = state_29051;
if(cljs.core.truth_(inst_29017)){
var statearr_29055_29082 = state_29051__$1;
(statearr_29055_29082[(1)] = (6));

} else {
var statearr_29056_29083 = state_29051__$1;
(statearr_29056_29083[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (15))){
var inst_29047 = (state_29051[(2)]);
var state_29051__$1 = state_29051;
var statearr_29057_29084 = state_29051__$1;
(statearr_29057_29084[(2)] = inst_29047);

(statearr_29057_29084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (13))){
var inst_29040 = cljs.core.async.close_BANG_.call(null,out);
var state_29051__$1 = state_29051;
var statearr_29058_29085 = state_29051__$1;
(statearr_29058_29085[(2)] = inst_29040);

(statearr_29058_29085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (6))){
var state_29051__$1 = state_29051;
var statearr_29059_29086 = state_29051__$1;
(statearr_29059_29086[(2)] = null);

(statearr_29059_29086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (3))){
var inst_29049 = (state_29051[(2)]);
var state_29051__$1 = state_29051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29051__$1,inst_29049);
} else {
if((state_val_29052 === (12))){
var inst_29037 = (state_29051[(8)]);
var inst_29037__$1 = (state_29051[(2)]);
var inst_29038 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29037__$1);
var state_29051__$1 = (function (){var statearr_29060 = state_29051;
(statearr_29060[(8)] = inst_29037__$1);

return statearr_29060;
})();
if(cljs.core.truth_(inst_29038)){
var statearr_29061_29087 = state_29051__$1;
(statearr_29061_29087[(1)] = (13));

} else {
var statearr_29062_29088 = state_29051__$1;
(statearr_29062_29088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (2))){
var inst_29014 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29015 = (0);
var state_29051__$1 = (function (){var statearr_29063 = state_29051;
(statearr_29063[(7)] = inst_29015);

(statearr_29063[(9)] = inst_29014);

return statearr_29063;
})();
var statearr_29064_29089 = state_29051__$1;
(statearr_29064_29089[(2)] = null);

(statearr_29064_29089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (11))){
var inst_29015 = (state_29051[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29051,(10),Object,null,(9));
var inst_29024 = chs__$1.call(null,inst_29015);
var inst_29025 = done.call(null,inst_29015);
var inst_29026 = cljs.core.async.take_BANG_.call(null,inst_29024,inst_29025);
var state_29051__$1 = state_29051;
var statearr_29065_29090 = state_29051__$1;
(statearr_29065_29090[(2)] = inst_29026);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (9))){
var inst_29015 = (state_29051[(7)]);
var inst_29028 = (state_29051[(2)]);
var inst_29029 = (inst_29015 + (1));
var inst_29015__$1 = inst_29029;
var state_29051__$1 = (function (){var statearr_29066 = state_29051;
(statearr_29066[(7)] = inst_29015__$1);

(statearr_29066[(10)] = inst_29028);

return statearr_29066;
})();
var statearr_29067_29091 = state_29051__$1;
(statearr_29067_29091[(2)] = null);

(statearr_29067_29091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (5))){
var inst_29035 = (state_29051[(2)]);
var state_29051__$1 = (function (){var statearr_29068 = state_29051;
(statearr_29068[(11)] = inst_29035);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29051__$1,(12),dchan);
} else {
if((state_val_29052 === (14))){
var inst_29037 = (state_29051[(8)]);
var inst_29042 = cljs.core.apply.call(null,f,inst_29037);
var state_29051__$1 = state_29051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29051__$1,(16),out,inst_29042);
} else {
if((state_val_29052 === (16))){
var inst_29044 = (state_29051[(2)]);
var state_29051__$1 = (function (){var statearr_29069 = state_29051;
(statearr_29069[(12)] = inst_29044);

return statearr_29069;
})();
var statearr_29070_29092 = state_29051__$1;
(statearr_29070_29092[(2)] = null);

(statearr_29070_29092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (10))){
var inst_29019 = (state_29051[(2)]);
var inst_29020 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29051__$1 = (function (){var statearr_29071 = state_29051;
(statearr_29071[(13)] = inst_29019);

return statearr_29071;
})();
var statearr_29072_29093 = state_29051__$1;
(statearr_29072_29093[(2)] = inst_29020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (8))){
var inst_29033 = (state_29051[(2)]);
var state_29051__$1 = state_29051;
var statearr_29073_29094 = state_29051__$1;
(statearr_29073_29094[(2)] = inst_29033);

(statearr_29073_29094[(1)] = (5));


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
});})(c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27666__auto__,c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29074[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29074[(1)] = (1));

return statearr_29074;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29051){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29075){if((e29075 instanceof Object)){
var ex__27670__auto__ = e29075;
var statearr_29076_29095 = state_29051;
(statearr_29076_29095[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29096 = state_29051;
state_29051 = G__29096;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27756__auto__ = (function (){var statearr_29077 = f__27755__auto__.call(null);
(statearr_29077[(6)] = c__27754__auto___29079);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29079,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29099 = arguments.length;
switch (G__29099) {
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
var c__27754__auto___29153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29153,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29153,out){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (7))){
var inst_29110 = (state_29131[(7)]);
var inst_29111 = (state_29131[(8)]);
var inst_29110__$1 = (state_29131[(2)]);
var inst_29111__$1 = cljs.core.nth.call(null,inst_29110__$1,(0),null);
var inst_29112 = cljs.core.nth.call(null,inst_29110__$1,(1),null);
var inst_29113 = (inst_29111__$1 == null);
var state_29131__$1 = (function (){var statearr_29133 = state_29131;
(statearr_29133[(7)] = inst_29110__$1);

(statearr_29133[(9)] = inst_29112);

(statearr_29133[(8)] = inst_29111__$1);

return statearr_29133;
})();
if(cljs.core.truth_(inst_29113)){
var statearr_29134_29154 = state_29131__$1;
(statearr_29134_29154[(1)] = (8));

} else {
var statearr_29135_29155 = state_29131__$1;
(statearr_29135_29155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (1))){
var inst_29100 = cljs.core.vec.call(null,chs);
var inst_29101 = inst_29100;
var state_29131__$1 = (function (){var statearr_29136 = state_29131;
(statearr_29136[(10)] = inst_29101);

return statearr_29136;
})();
var statearr_29137_29156 = state_29131__$1;
(statearr_29137_29156[(2)] = null);

(statearr_29137_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (4))){
var inst_29101 = (state_29131[(10)]);
var state_29131__$1 = state_29131;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29131__$1,(7),inst_29101);
} else {
if((state_val_29132 === (6))){
var inst_29127 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29138_29157 = state_29131__$1;
(statearr_29138_29157[(2)] = inst_29127);

(statearr_29138_29157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29129 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (2))){
var inst_29101 = (state_29131[(10)]);
var inst_29103 = cljs.core.count.call(null,inst_29101);
var inst_29104 = (inst_29103 > (0));
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29104)){
var statearr_29140_29158 = state_29131__$1;
(statearr_29140_29158[(1)] = (4));

} else {
var statearr_29141_29159 = state_29131__$1;
(statearr_29141_29159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (11))){
var inst_29101 = (state_29131[(10)]);
var inst_29120 = (state_29131[(2)]);
var tmp29139 = inst_29101;
var inst_29101__$1 = tmp29139;
var state_29131__$1 = (function (){var statearr_29142 = state_29131;
(statearr_29142[(10)] = inst_29101__$1);

(statearr_29142[(11)] = inst_29120);

return statearr_29142;
})();
var statearr_29143_29160 = state_29131__$1;
(statearr_29143_29160[(2)] = null);

(statearr_29143_29160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (9))){
var inst_29111 = (state_29131[(8)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29131__$1,(11),out,inst_29111);
} else {
if((state_val_29132 === (5))){
var inst_29125 = cljs.core.async.close_BANG_.call(null,out);
var state_29131__$1 = state_29131;
var statearr_29144_29161 = state_29131__$1;
(statearr_29144_29161[(2)] = inst_29125);

(statearr_29144_29161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (10))){
var inst_29123 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29145_29162 = state_29131__$1;
(statearr_29145_29162[(2)] = inst_29123);

(statearr_29145_29162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (8))){
var inst_29110 = (state_29131[(7)]);
var inst_29112 = (state_29131[(9)]);
var inst_29101 = (state_29131[(10)]);
var inst_29111 = (state_29131[(8)]);
var inst_29115 = (function (){var cs = inst_29101;
var vec__29106 = inst_29110;
var v = inst_29111;
var c = inst_29112;
return ((function (cs,vec__29106,v,c,inst_29110,inst_29112,inst_29101,inst_29111,state_val_29132,c__27754__auto___29153,out){
return (function (p1__29097_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29097_SHARP_);
});
;})(cs,vec__29106,v,c,inst_29110,inst_29112,inst_29101,inst_29111,state_val_29132,c__27754__auto___29153,out))
})();
var inst_29116 = cljs.core.filterv.call(null,inst_29115,inst_29101);
var inst_29101__$1 = inst_29116;
var state_29131__$1 = (function (){var statearr_29146 = state_29131;
(statearr_29146[(10)] = inst_29101__$1);

return statearr_29146;
})();
var statearr_29147_29163 = state_29131__$1;
(statearr_29147_29163[(2)] = null);

(statearr_29147_29163[(1)] = (2));


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
});})(c__27754__auto___29153,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29153,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29148[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29148[(1)] = (1));

return statearr_29148;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29131){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29149){if((e29149 instanceof Object)){
var ex__27670__auto__ = e29149;
var statearr_29150_29164 = state_29131;
(statearr_29150_29164[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29165 = state_29131;
state_29131 = G__29165;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29153,out))
})();
var state__27756__auto__ = (function (){var statearr_29151 = f__27755__auto__.call(null);
(statearr_29151[(6)] = c__27754__auto___29153);

return statearr_29151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29153,out))
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
var G__29167 = arguments.length;
switch (G__29167) {
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
var c__27754__auto___29212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29212,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29212,out){
return (function (state_29191){
var state_val_29192 = (state_29191[(1)]);
if((state_val_29192 === (7))){
var inst_29173 = (state_29191[(7)]);
var inst_29173__$1 = (state_29191[(2)]);
var inst_29174 = (inst_29173__$1 == null);
var inst_29175 = cljs.core.not.call(null,inst_29174);
var state_29191__$1 = (function (){var statearr_29193 = state_29191;
(statearr_29193[(7)] = inst_29173__$1);

return statearr_29193;
})();
if(inst_29175){
var statearr_29194_29213 = state_29191__$1;
(statearr_29194_29213[(1)] = (8));

} else {
var statearr_29195_29214 = state_29191__$1;
(statearr_29195_29214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (1))){
var inst_29168 = (0);
var state_29191__$1 = (function (){var statearr_29196 = state_29191;
(statearr_29196[(8)] = inst_29168);

return statearr_29196;
})();
var statearr_29197_29215 = state_29191__$1;
(statearr_29197_29215[(2)] = null);

(statearr_29197_29215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (4))){
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29191__$1,(7),ch);
} else {
if((state_val_29192 === (6))){
var inst_29186 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29198_29216 = state_29191__$1;
(statearr_29198_29216[(2)] = inst_29186);

(statearr_29198_29216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (3))){
var inst_29188 = (state_29191[(2)]);
var inst_29189 = cljs.core.async.close_BANG_.call(null,out);
var state_29191__$1 = (function (){var statearr_29199 = state_29191;
(statearr_29199[(9)] = inst_29188);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29191__$1,inst_29189);
} else {
if((state_val_29192 === (2))){
var inst_29168 = (state_29191[(8)]);
var inst_29170 = (inst_29168 < n);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29170)){
var statearr_29200_29217 = state_29191__$1;
(statearr_29200_29217[(1)] = (4));

} else {
var statearr_29201_29218 = state_29191__$1;
(statearr_29201_29218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (11))){
var inst_29168 = (state_29191[(8)]);
var inst_29178 = (state_29191[(2)]);
var inst_29179 = (inst_29168 + (1));
var inst_29168__$1 = inst_29179;
var state_29191__$1 = (function (){var statearr_29202 = state_29191;
(statearr_29202[(10)] = inst_29178);

(statearr_29202[(8)] = inst_29168__$1);

return statearr_29202;
})();
var statearr_29203_29219 = state_29191__$1;
(statearr_29203_29219[(2)] = null);

(statearr_29203_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (9))){
var state_29191__$1 = state_29191;
var statearr_29204_29220 = state_29191__$1;
(statearr_29204_29220[(2)] = null);

(statearr_29204_29220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (5))){
var state_29191__$1 = state_29191;
var statearr_29205_29221 = state_29191__$1;
(statearr_29205_29221[(2)] = null);

(statearr_29205_29221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (10))){
var inst_29183 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29206_29222 = state_29191__$1;
(statearr_29206_29222[(2)] = inst_29183);

(statearr_29206_29222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (8))){
var inst_29173 = (state_29191[(7)]);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29191__$1,(11),out,inst_29173);
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
});})(c__27754__auto___29212,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29212,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29191){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object)){
var ex__27670__auto__ = e29208;
var statearr_29209_29223 = state_29191;
(statearr_29209_29223[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29224 = state_29191;
state_29191 = G__29224;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29212,out))
})();
var state__27756__auto__ = (function (){var statearr_29210 = f__27755__auto__.call(null);
(statearr_29210[(6)] = c__27754__auto___29212);

return statearr_29210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29212,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29226 = (function (f,ch,meta29227){
this.f = f;
this.ch = ch;
this.meta29227 = meta29227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29228,meta29227__$1){
var self__ = this;
var _29228__$1 = this;
return (new cljs.core.async.t_cljs$core$async29226(self__.f,self__.ch,meta29227__$1));
});

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29228){
var self__ = this;
var _29228__$1 = this;
return self__.meta29227;
});

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29229 = (function (f,ch,meta29227,_,fn1,meta29230){
this.f = f;
this.ch = ch;
this.meta29227 = meta29227;
this._ = _;
this.fn1 = fn1;
this.meta29230 = meta29230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29231,meta29230__$1){
var self__ = this;
var _29231__$1 = this;
return (new cljs.core.async.t_cljs$core$async29229(self__.f,self__.ch,self__.meta29227,self__._,self__.fn1,meta29230__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29231){
var self__ = this;
var _29231__$1 = this;
return self__.meta29230;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29225_SHARP_){
return f1.call(null,(((p1__29225_SHARP_ == null))?null:self__.f.call(null,p1__29225_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29227","meta29227",897157017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29226","cljs.core.async/t_cljs$core$async29226",1121235694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29230","meta29230",178141195,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29229";

cljs.core.async.t_cljs$core$async29229.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29229");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29229.
 */
cljs.core.async.__GT_t_cljs$core$async29229 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29229(f__$1,ch__$1,meta29227__$1,___$2,fn1__$1,meta29230){
return (new cljs.core.async.t_cljs$core$async29229(f__$1,ch__$1,meta29227__$1,___$2,fn1__$1,meta29230));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29229(self__.f,self__.ch,self__.meta29227,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29227","meta29227",897157017,null)], null);
});

cljs.core.async.t_cljs$core$async29226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29226";

cljs.core.async.t_cljs$core$async29226.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29226");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29226.
 */
cljs.core.async.__GT_t_cljs$core$async29226 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29226(f__$1,ch__$1,meta29227){
return (new cljs.core.async.t_cljs$core$async29226(f__$1,ch__$1,meta29227));
});

}

return (new cljs.core.async.t_cljs$core$async29226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29232 = (function (f,ch,meta29233){
this.f = f;
this.ch = ch;
this.meta29233 = meta29233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29234,meta29233__$1){
var self__ = this;
var _29234__$1 = this;
return (new cljs.core.async.t_cljs$core$async29232(self__.f,self__.ch,meta29233__$1));
});

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29234){
var self__ = this;
var _29234__$1 = this;
return self__.meta29233;
});

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29233","meta29233",493288134,null)], null);
});

cljs.core.async.t_cljs$core$async29232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29232";

cljs.core.async.t_cljs$core$async29232.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29232");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29232.
 */
cljs.core.async.__GT_t_cljs$core$async29232 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29232(f__$1,ch__$1,meta29233){
return (new cljs.core.async.t_cljs$core$async29232(f__$1,ch__$1,meta29233));
});

}

return (new cljs.core.async.t_cljs$core$async29232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29235 = (function (p,ch,meta29236){
this.p = p;
this.ch = ch;
this.meta29236 = meta29236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29237,meta29236__$1){
var self__ = this;
var _29237__$1 = this;
return (new cljs.core.async.t_cljs$core$async29235(self__.p,self__.ch,meta29236__$1));
});

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29237){
var self__ = this;
var _29237__$1 = this;
return self__.meta29236;
});

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29236","meta29236",-127407646,null)], null);
});

cljs.core.async.t_cljs$core$async29235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29235";

cljs.core.async.t_cljs$core$async29235.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29235.
 */
cljs.core.async.__GT_t_cljs$core$async29235 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29235(p__$1,ch__$1,meta29236){
return (new cljs.core.async.t_cljs$core$async29235(p__$1,ch__$1,meta29236));
});

}

return (new cljs.core.async.t_cljs$core$async29235(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29239 = arguments.length;
switch (G__29239) {
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
var c__27754__auto___29279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29279,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29279,out){
return (function (state_29260){
var state_val_29261 = (state_29260[(1)]);
if((state_val_29261 === (7))){
var inst_29256 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29262_29280 = state_29260__$1;
(statearr_29262_29280[(2)] = inst_29256);

(statearr_29262_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (1))){
var state_29260__$1 = state_29260;
var statearr_29263_29281 = state_29260__$1;
(statearr_29263_29281[(2)] = null);

(statearr_29263_29281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (4))){
var inst_29242 = (state_29260[(7)]);
var inst_29242__$1 = (state_29260[(2)]);
var inst_29243 = (inst_29242__$1 == null);
var state_29260__$1 = (function (){var statearr_29264 = state_29260;
(statearr_29264[(7)] = inst_29242__$1);

return statearr_29264;
})();
if(cljs.core.truth_(inst_29243)){
var statearr_29265_29282 = state_29260__$1;
(statearr_29265_29282[(1)] = (5));

} else {
var statearr_29266_29283 = state_29260__$1;
(statearr_29266_29283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (6))){
var inst_29242 = (state_29260[(7)]);
var inst_29247 = p.call(null,inst_29242);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29247)){
var statearr_29267_29284 = state_29260__$1;
(statearr_29267_29284[(1)] = (8));

} else {
var statearr_29268_29285 = state_29260__$1;
(statearr_29268_29285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (3))){
var inst_29258 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29260__$1,inst_29258);
} else {
if((state_val_29261 === (2))){
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(4),ch);
} else {
if((state_val_29261 === (11))){
var inst_29250 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29269_29286 = state_29260__$1;
(statearr_29269_29286[(2)] = inst_29250);

(statearr_29269_29286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (9))){
var state_29260__$1 = state_29260;
var statearr_29270_29287 = state_29260__$1;
(statearr_29270_29287[(2)] = null);

(statearr_29270_29287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (5))){
var inst_29245 = cljs.core.async.close_BANG_.call(null,out);
var state_29260__$1 = state_29260;
var statearr_29271_29288 = state_29260__$1;
(statearr_29271_29288[(2)] = inst_29245);

(statearr_29271_29288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (10))){
var inst_29253 = (state_29260[(2)]);
var state_29260__$1 = (function (){var statearr_29272 = state_29260;
(statearr_29272[(8)] = inst_29253);

return statearr_29272;
})();
var statearr_29273_29289 = state_29260__$1;
(statearr_29273_29289[(2)] = null);

(statearr_29273_29289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (8))){
var inst_29242 = (state_29260[(7)]);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29260__$1,(11),out,inst_29242);
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
});})(c__27754__auto___29279,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29279,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29274 = [null,null,null,null,null,null,null,null,null];
(statearr_29274[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29274[(1)] = (1));

return statearr_29274;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29260){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29275){if((e29275 instanceof Object)){
var ex__27670__auto__ = e29275;
var statearr_29276_29290 = state_29260;
(statearr_29276_29290[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29291 = state_29260;
state_29260 = G__29291;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29279,out))
})();
var state__27756__auto__ = (function (){var statearr_29277 = f__27755__auto__.call(null);
(statearr_29277[(6)] = c__27754__auto___29279);

return statearr_29277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29279,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29293 = arguments.length;
switch (G__29293) {
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
var c__27754__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto__){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto__){
return (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (7))){
var inst_29352 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29358_29396 = state_29356__$1;
(statearr_29358_29396[(2)] = inst_29352);

(statearr_29358_29396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (20))){
var inst_29322 = (state_29356[(7)]);
var inst_29333 = (state_29356[(2)]);
var inst_29334 = cljs.core.next.call(null,inst_29322);
var inst_29308 = inst_29334;
var inst_29309 = null;
var inst_29310 = (0);
var inst_29311 = (0);
var state_29356__$1 = (function (){var statearr_29359 = state_29356;
(statearr_29359[(8)] = inst_29311);

(statearr_29359[(9)] = inst_29333);

(statearr_29359[(10)] = inst_29308);

(statearr_29359[(11)] = inst_29309);

(statearr_29359[(12)] = inst_29310);

return statearr_29359;
})();
var statearr_29360_29397 = state_29356__$1;
(statearr_29360_29397[(2)] = null);

(statearr_29360_29397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (1))){
var state_29356__$1 = state_29356;
var statearr_29361_29398 = state_29356__$1;
(statearr_29361_29398[(2)] = null);

(statearr_29361_29398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (4))){
var inst_29297 = (state_29356[(13)]);
var inst_29297__$1 = (state_29356[(2)]);
var inst_29298 = (inst_29297__$1 == null);
var state_29356__$1 = (function (){var statearr_29362 = state_29356;
(statearr_29362[(13)] = inst_29297__$1);

return statearr_29362;
})();
if(cljs.core.truth_(inst_29298)){
var statearr_29363_29399 = state_29356__$1;
(statearr_29363_29399[(1)] = (5));

} else {
var statearr_29364_29400 = state_29356__$1;
(statearr_29364_29400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (15))){
var state_29356__$1 = state_29356;
var statearr_29368_29401 = state_29356__$1;
(statearr_29368_29401[(2)] = null);

(statearr_29368_29401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (21))){
var state_29356__$1 = state_29356;
var statearr_29369_29402 = state_29356__$1;
(statearr_29369_29402[(2)] = null);

(statearr_29369_29402[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (13))){
var inst_29311 = (state_29356[(8)]);
var inst_29308 = (state_29356[(10)]);
var inst_29309 = (state_29356[(11)]);
var inst_29310 = (state_29356[(12)]);
var inst_29318 = (state_29356[(2)]);
var inst_29319 = (inst_29311 + (1));
var tmp29365 = inst_29308;
var tmp29366 = inst_29309;
var tmp29367 = inst_29310;
var inst_29308__$1 = tmp29365;
var inst_29309__$1 = tmp29366;
var inst_29310__$1 = tmp29367;
var inst_29311__$1 = inst_29319;
var state_29356__$1 = (function (){var statearr_29370 = state_29356;
(statearr_29370[(8)] = inst_29311__$1);

(statearr_29370[(14)] = inst_29318);

(statearr_29370[(10)] = inst_29308__$1);

(statearr_29370[(11)] = inst_29309__$1);

(statearr_29370[(12)] = inst_29310__$1);

return statearr_29370;
})();
var statearr_29371_29403 = state_29356__$1;
(statearr_29371_29403[(2)] = null);

(statearr_29371_29403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (22))){
var state_29356__$1 = state_29356;
var statearr_29372_29404 = state_29356__$1;
(statearr_29372_29404[(2)] = null);

(statearr_29372_29404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (6))){
var inst_29297 = (state_29356[(13)]);
var inst_29306 = f.call(null,inst_29297);
var inst_29307 = cljs.core.seq.call(null,inst_29306);
var inst_29308 = inst_29307;
var inst_29309 = null;
var inst_29310 = (0);
var inst_29311 = (0);
var state_29356__$1 = (function (){var statearr_29373 = state_29356;
(statearr_29373[(8)] = inst_29311);

(statearr_29373[(10)] = inst_29308);

(statearr_29373[(11)] = inst_29309);

(statearr_29373[(12)] = inst_29310);

return statearr_29373;
})();
var statearr_29374_29405 = state_29356__$1;
(statearr_29374_29405[(2)] = null);

(statearr_29374_29405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (17))){
var inst_29322 = (state_29356[(7)]);
var inst_29326 = cljs.core.chunk_first.call(null,inst_29322);
var inst_29327 = cljs.core.chunk_rest.call(null,inst_29322);
var inst_29328 = cljs.core.count.call(null,inst_29326);
var inst_29308 = inst_29327;
var inst_29309 = inst_29326;
var inst_29310 = inst_29328;
var inst_29311 = (0);
var state_29356__$1 = (function (){var statearr_29375 = state_29356;
(statearr_29375[(8)] = inst_29311);

(statearr_29375[(10)] = inst_29308);

(statearr_29375[(11)] = inst_29309);

(statearr_29375[(12)] = inst_29310);

return statearr_29375;
})();
var statearr_29376_29406 = state_29356__$1;
(statearr_29376_29406[(2)] = null);

(statearr_29376_29406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (3))){
var inst_29354 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
if((state_val_29357 === (12))){
var inst_29342 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29377_29407 = state_29356__$1;
(statearr_29377_29407[(2)] = inst_29342);

(statearr_29377_29407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (2))){
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(4),in$);
} else {
if((state_val_29357 === (23))){
var inst_29350 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29378_29408 = state_29356__$1;
(statearr_29378_29408[(2)] = inst_29350);

(statearr_29378_29408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (19))){
var inst_29337 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29379_29409 = state_29356__$1;
(statearr_29379_29409[(2)] = inst_29337);

(statearr_29379_29409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (11))){
var inst_29308 = (state_29356[(10)]);
var inst_29322 = (state_29356[(7)]);
var inst_29322__$1 = cljs.core.seq.call(null,inst_29308);
var state_29356__$1 = (function (){var statearr_29380 = state_29356;
(statearr_29380[(7)] = inst_29322__$1);

return statearr_29380;
})();
if(inst_29322__$1){
var statearr_29381_29410 = state_29356__$1;
(statearr_29381_29410[(1)] = (14));

} else {
var statearr_29382_29411 = state_29356__$1;
(statearr_29382_29411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (9))){
var inst_29344 = (state_29356[(2)]);
var inst_29345 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29356__$1 = (function (){var statearr_29383 = state_29356;
(statearr_29383[(15)] = inst_29344);

return statearr_29383;
})();
if(cljs.core.truth_(inst_29345)){
var statearr_29384_29412 = state_29356__$1;
(statearr_29384_29412[(1)] = (21));

} else {
var statearr_29385_29413 = state_29356__$1;
(statearr_29385_29413[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (5))){
var inst_29300 = cljs.core.async.close_BANG_.call(null,out);
var state_29356__$1 = state_29356;
var statearr_29386_29414 = state_29356__$1;
(statearr_29386_29414[(2)] = inst_29300);

(statearr_29386_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (14))){
var inst_29322 = (state_29356[(7)]);
var inst_29324 = cljs.core.chunked_seq_QMARK_.call(null,inst_29322);
var state_29356__$1 = state_29356;
if(inst_29324){
var statearr_29387_29415 = state_29356__$1;
(statearr_29387_29415[(1)] = (17));

} else {
var statearr_29388_29416 = state_29356__$1;
(statearr_29388_29416[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (16))){
var inst_29340 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29389_29417 = state_29356__$1;
(statearr_29389_29417[(2)] = inst_29340);

(statearr_29389_29417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (10))){
var inst_29311 = (state_29356[(8)]);
var inst_29309 = (state_29356[(11)]);
var inst_29316 = cljs.core._nth.call(null,inst_29309,inst_29311);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29356__$1,(13),out,inst_29316);
} else {
if((state_val_29357 === (18))){
var inst_29322 = (state_29356[(7)]);
var inst_29331 = cljs.core.first.call(null,inst_29322);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29356__$1,(20),out,inst_29331);
} else {
if((state_val_29357 === (8))){
var inst_29311 = (state_29356[(8)]);
var inst_29310 = (state_29356[(12)]);
var inst_29313 = (inst_29311 < inst_29310);
var inst_29314 = inst_29313;
var state_29356__$1 = state_29356;
if(cljs.core.truth_(inst_29314)){
var statearr_29390_29418 = state_29356__$1;
(statearr_29390_29418[(1)] = (10));

} else {
var statearr_29391_29419 = state_29356__$1;
(statearr_29391_29419[(1)] = (11));

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
});})(c__27754__auto__))
;
return ((function (switch__27666__auto__,c__27754__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____0 = (function (){
var statearr_29392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29392[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__);

(statearr_29392[(1)] = (1));

return statearr_29392;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____1 = (function (state_29356){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29393){if((e29393 instanceof Object)){
var ex__27670__auto__ = e29393;
var statearr_29394_29420 = state_29356;
(statearr_29394_29420[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29421 = state_29356;
state_29356 = G__29421;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27667__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto__))
})();
var state__27756__auto__ = (function (){var statearr_29395 = f__27755__auto__.call(null);
(statearr_29395[(6)] = c__27754__auto__);

return statearr_29395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto__))
);

return c__27754__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29423 = arguments.length;
switch (G__29423) {
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
var G__29426 = arguments.length;
switch (G__29426) {
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
var G__29429 = arguments.length;
switch (G__29429) {
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
var c__27754__auto___29476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29476,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29476,out){
return (function (state_29453){
var state_val_29454 = (state_29453[(1)]);
if((state_val_29454 === (7))){
var inst_29448 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29455_29477 = state_29453__$1;
(statearr_29455_29477[(2)] = inst_29448);

(statearr_29455_29477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (1))){
var inst_29430 = null;
var state_29453__$1 = (function (){var statearr_29456 = state_29453;
(statearr_29456[(7)] = inst_29430);

return statearr_29456;
})();
var statearr_29457_29478 = state_29453__$1;
(statearr_29457_29478[(2)] = null);

(statearr_29457_29478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (4))){
var inst_29433 = (state_29453[(8)]);
var inst_29433__$1 = (state_29453[(2)]);
var inst_29434 = (inst_29433__$1 == null);
var inst_29435 = cljs.core.not.call(null,inst_29434);
var state_29453__$1 = (function (){var statearr_29458 = state_29453;
(statearr_29458[(8)] = inst_29433__$1);

return statearr_29458;
})();
if(inst_29435){
var statearr_29459_29479 = state_29453__$1;
(statearr_29459_29479[(1)] = (5));

} else {
var statearr_29460_29480 = state_29453__$1;
(statearr_29460_29480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (6))){
var state_29453__$1 = state_29453;
var statearr_29461_29481 = state_29453__$1;
(statearr_29461_29481[(2)] = null);

(statearr_29461_29481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (3))){
var inst_29450 = (state_29453[(2)]);
var inst_29451 = cljs.core.async.close_BANG_.call(null,out);
var state_29453__$1 = (function (){var statearr_29462 = state_29453;
(statearr_29462[(9)] = inst_29450);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29453__$1,inst_29451);
} else {
if((state_val_29454 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29453__$1,(4),ch);
} else {
if((state_val_29454 === (11))){
var inst_29433 = (state_29453[(8)]);
var inst_29442 = (state_29453[(2)]);
var inst_29430 = inst_29433;
var state_29453__$1 = (function (){var statearr_29463 = state_29453;
(statearr_29463[(7)] = inst_29430);

(statearr_29463[(10)] = inst_29442);

return statearr_29463;
})();
var statearr_29464_29482 = state_29453__$1;
(statearr_29464_29482[(2)] = null);

(statearr_29464_29482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (9))){
var inst_29433 = (state_29453[(8)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29453__$1,(11),out,inst_29433);
} else {
if((state_val_29454 === (5))){
var inst_29430 = (state_29453[(7)]);
var inst_29433 = (state_29453[(8)]);
var inst_29437 = cljs.core._EQ_.call(null,inst_29433,inst_29430);
var state_29453__$1 = state_29453;
if(inst_29437){
var statearr_29466_29483 = state_29453__$1;
(statearr_29466_29483[(1)] = (8));

} else {
var statearr_29467_29484 = state_29453__$1;
(statearr_29467_29484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (10))){
var inst_29445 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29468_29485 = state_29453__$1;
(statearr_29468_29485[(2)] = inst_29445);

(statearr_29468_29485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (8))){
var inst_29430 = (state_29453[(7)]);
var tmp29465 = inst_29430;
var inst_29430__$1 = tmp29465;
var state_29453__$1 = (function (){var statearr_29469 = state_29453;
(statearr_29469[(7)] = inst_29430__$1);

return statearr_29469;
})();
var statearr_29470_29486 = state_29453__$1;
(statearr_29470_29486[(2)] = null);

(statearr_29470_29486[(1)] = (2));


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
});})(c__27754__auto___29476,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29476,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29471[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29471[(1)] = (1));

return statearr_29471;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29453){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29472){if((e29472 instanceof Object)){
var ex__27670__auto__ = e29472;
var statearr_29473_29487 = state_29453;
(statearr_29473_29487[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29453;
state_29453 = G__29488;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29476,out))
})();
var state__27756__auto__ = (function (){var statearr_29474 = f__27755__auto__.call(null);
(statearr_29474[(6)] = c__27754__auto___29476);

return statearr_29474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29476,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29490 = arguments.length;
switch (G__29490) {
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
var c__27754__auto___29556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29556,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29556,out){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var inst_29524 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29530_29557 = state_29528__$1;
(statearr_29530_29557[(2)] = inst_29524);

(statearr_29530_29557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (1))){
var inst_29491 = (new Array(n));
var inst_29492 = inst_29491;
var inst_29493 = (0);
var state_29528__$1 = (function (){var statearr_29531 = state_29528;
(statearr_29531[(7)] = inst_29493);

(statearr_29531[(8)] = inst_29492);

return statearr_29531;
})();
var statearr_29532_29558 = state_29528__$1;
(statearr_29532_29558[(2)] = null);

(statearr_29532_29558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (4))){
var inst_29496 = (state_29528[(9)]);
var inst_29496__$1 = (state_29528[(2)]);
var inst_29497 = (inst_29496__$1 == null);
var inst_29498 = cljs.core.not.call(null,inst_29497);
var state_29528__$1 = (function (){var statearr_29533 = state_29528;
(statearr_29533[(9)] = inst_29496__$1);

return statearr_29533;
})();
if(inst_29498){
var statearr_29534_29559 = state_29528__$1;
(statearr_29534_29559[(1)] = (5));

} else {
var statearr_29535_29560 = state_29528__$1;
(statearr_29535_29560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (15))){
var inst_29518 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29536_29561 = state_29528__$1;
(statearr_29536_29561[(2)] = inst_29518);

(statearr_29536_29561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (13))){
var state_29528__$1 = state_29528;
var statearr_29537_29562 = state_29528__$1;
(statearr_29537_29562[(2)] = null);

(statearr_29537_29562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (6))){
var inst_29493 = (state_29528[(7)]);
var inst_29514 = (inst_29493 > (0));
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29514)){
var statearr_29538_29563 = state_29528__$1;
(statearr_29538_29563[(1)] = (12));

} else {
var statearr_29539_29564 = state_29528__$1;
(statearr_29539_29564[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (3))){
var inst_29526 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (12))){
var inst_29492 = (state_29528[(8)]);
var inst_29516 = cljs.core.vec.call(null,inst_29492);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29528__$1,(15),out,inst_29516);
} else {
if((state_val_29529 === (2))){
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29528__$1,(4),ch);
} else {
if((state_val_29529 === (11))){
var inst_29508 = (state_29528[(2)]);
var inst_29509 = (new Array(n));
var inst_29492 = inst_29509;
var inst_29493 = (0);
var state_29528__$1 = (function (){var statearr_29540 = state_29528;
(statearr_29540[(7)] = inst_29493);

(statearr_29540[(10)] = inst_29508);

(statearr_29540[(8)] = inst_29492);

return statearr_29540;
})();
var statearr_29541_29565 = state_29528__$1;
(statearr_29541_29565[(2)] = null);

(statearr_29541_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (9))){
var inst_29492 = (state_29528[(8)]);
var inst_29506 = cljs.core.vec.call(null,inst_29492);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29528__$1,(11),out,inst_29506);
} else {
if((state_val_29529 === (5))){
var inst_29493 = (state_29528[(7)]);
var inst_29501 = (state_29528[(11)]);
var inst_29492 = (state_29528[(8)]);
var inst_29496 = (state_29528[(9)]);
var inst_29500 = (inst_29492[inst_29493] = inst_29496);
var inst_29501__$1 = (inst_29493 + (1));
var inst_29502 = (inst_29501__$1 < n);
var state_29528__$1 = (function (){var statearr_29542 = state_29528;
(statearr_29542[(12)] = inst_29500);

(statearr_29542[(11)] = inst_29501__$1);

return statearr_29542;
})();
if(cljs.core.truth_(inst_29502)){
var statearr_29543_29566 = state_29528__$1;
(statearr_29543_29566[(1)] = (8));

} else {
var statearr_29544_29567 = state_29528__$1;
(statearr_29544_29567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (14))){
var inst_29521 = (state_29528[(2)]);
var inst_29522 = cljs.core.async.close_BANG_.call(null,out);
var state_29528__$1 = (function (){var statearr_29546 = state_29528;
(statearr_29546[(13)] = inst_29521);

return statearr_29546;
})();
var statearr_29547_29568 = state_29528__$1;
(statearr_29547_29568[(2)] = inst_29522);

(statearr_29547_29568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (10))){
var inst_29512 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29548_29569 = state_29528__$1;
(statearr_29548_29569[(2)] = inst_29512);

(statearr_29548_29569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (8))){
var inst_29501 = (state_29528[(11)]);
var inst_29492 = (state_29528[(8)]);
var tmp29545 = inst_29492;
var inst_29492__$1 = tmp29545;
var inst_29493 = inst_29501;
var state_29528__$1 = (function (){var statearr_29549 = state_29528;
(statearr_29549[(7)] = inst_29493);

(statearr_29549[(8)] = inst_29492__$1);

return statearr_29549;
})();
var statearr_29550_29570 = state_29528__$1;
(statearr_29550_29570[(2)] = null);

(statearr_29550_29570[(1)] = (2));


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
});})(c__27754__auto___29556,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29556,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29528){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29552){if((e29552 instanceof Object)){
var ex__27670__auto__ = e29552;
var statearr_29553_29571 = state_29528;
(statearr_29553_29571[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29572 = state_29528;
state_29528 = G__29572;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29556,out))
})();
var state__27756__auto__ = (function (){var statearr_29554 = f__27755__auto__.call(null);
(statearr_29554[(6)] = c__27754__auto___29556);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29556,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29574 = arguments.length;
switch (G__29574) {
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
var c__27754__auto___29644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27754__auto___29644,out){
return (function (){
var f__27755__auto__ = (function (){var switch__27666__auto__ = ((function (c__27754__auto___29644,out){
return (function (state_29616){
var state_val_29617 = (state_29616[(1)]);
if((state_val_29617 === (7))){
var inst_29612 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29618_29645 = state_29616__$1;
(statearr_29618_29645[(2)] = inst_29612);

(statearr_29618_29645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (1))){
var inst_29575 = [];
var inst_29576 = inst_29575;
var inst_29577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29616__$1 = (function (){var statearr_29619 = state_29616;
(statearr_29619[(7)] = inst_29577);

(statearr_29619[(8)] = inst_29576);

return statearr_29619;
})();
var statearr_29620_29646 = state_29616__$1;
(statearr_29620_29646[(2)] = null);

(statearr_29620_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (4))){
var inst_29580 = (state_29616[(9)]);
var inst_29580__$1 = (state_29616[(2)]);
var inst_29581 = (inst_29580__$1 == null);
var inst_29582 = cljs.core.not.call(null,inst_29581);
var state_29616__$1 = (function (){var statearr_29621 = state_29616;
(statearr_29621[(9)] = inst_29580__$1);

return statearr_29621;
})();
if(inst_29582){
var statearr_29622_29647 = state_29616__$1;
(statearr_29622_29647[(1)] = (5));

} else {
var statearr_29623_29648 = state_29616__$1;
(statearr_29623_29648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (15))){
var inst_29606 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29624_29649 = state_29616__$1;
(statearr_29624_29649[(2)] = inst_29606);

(statearr_29624_29649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (13))){
var state_29616__$1 = state_29616;
var statearr_29625_29650 = state_29616__$1;
(statearr_29625_29650[(2)] = null);

(statearr_29625_29650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (6))){
var inst_29576 = (state_29616[(8)]);
var inst_29601 = inst_29576.length;
var inst_29602 = (inst_29601 > (0));
var state_29616__$1 = state_29616;
if(cljs.core.truth_(inst_29602)){
var statearr_29626_29651 = state_29616__$1;
(statearr_29626_29651[(1)] = (12));

} else {
var statearr_29627_29652 = state_29616__$1;
(statearr_29627_29652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (3))){
var inst_29614 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29616__$1,inst_29614);
} else {
if((state_val_29617 === (12))){
var inst_29576 = (state_29616[(8)]);
var inst_29604 = cljs.core.vec.call(null,inst_29576);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29616__$1,(15),out,inst_29604);
} else {
if((state_val_29617 === (2))){
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29616__$1,(4),ch);
} else {
if((state_val_29617 === (11))){
var inst_29580 = (state_29616[(9)]);
var inst_29584 = (state_29616[(10)]);
var inst_29594 = (state_29616[(2)]);
var inst_29595 = [];
var inst_29596 = inst_29595.push(inst_29580);
var inst_29576 = inst_29595;
var inst_29577 = inst_29584;
var state_29616__$1 = (function (){var statearr_29628 = state_29616;
(statearr_29628[(11)] = inst_29596);

(statearr_29628[(7)] = inst_29577);

(statearr_29628[(12)] = inst_29594);

(statearr_29628[(8)] = inst_29576);

return statearr_29628;
})();
var statearr_29629_29653 = state_29616__$1;
(statearr_29629_29653[(2)] = null);

(statearr_29629_29653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (9))){
var inst_29576 = (state_29616[(8)]);
var inst_29592 = cljs.core.vec.call(null,inst_29576);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29616__$1,(11),out,inst_29592);
} else {
if((state_val_29617 === (5))){
var inst_29577 = (state_29616[(7)]);
var inst_29580 = (state_29616[(9)]);
var inst_29584 = (state_29616[(10)]);
var inst_29584__$1 = f.call(null,inst_29580);
var inst_29585 = cljs.core._EQ_.call(null,inst_29584__$1,inst_29577);
var inst_29586 = cljs.core.keyword_identical_QMARK_.call(null,inst_29577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29587 = ((inst_29585) || (inst_29586));
var state_29616__$1 = (function (){var statearr_29630 = state_29616;
(statearr_29630[(10)] = inst_29584__$1);

return statearr_29630;
})();
if(cljs.core.truth_(inst_29587)){
var statearr_29631_29654 = state_29616__$1;
(statearr_29631_29654[(1)] = (8));

} else {
var statearr_29632_29655 = state_29616__$1;
(statearr_29632_29655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (14))){
var inst_29609 = (state_29616[(2)]);
var inst_29610 = cljs.core.async.close_BANG_.call(null,out);
var state_29616__$1 = (function (){var statearr_29634 = state_29616;
(statearr_29634[(13)] = inst_29609);

return statearr_29634;
})();
var statearr_29635_29656 = state_29616__$1;
(statearr_29635_29656[(2)] = inst_29610);

(statearr_29635_29656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (10))){
var inst_29599 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29636_29657 = state_29616__$1;
(statearr_29636_29657[(2)] = inst_29599);

(statearr_29636_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (8))){
var inst_29580 = (state_29616[(9)]);
var inst_29576 = (state_29616[(8)]);
var inst_29584 = (state_29616[(10)]);
var inst_29589 = inst_29576.push(inst_29580);
var tmp29633 = inst_29576;
var inst_29576__$1 = tmp29633;
var inst_29577 = inst_29584;
var state_29616__$1 = (function (){var statearr_29637 = state_29616;
(statearr_29637[(14)] = inst_29589);

(statearr_29637[(7)] = inst_29577);

(statearr_29637[(8)] = inst_29576__$1);

return statearr_29637;
})();
var statearr_29638_29658 = state_29616__$1;
(statearr_29638_29658[(2)] = null);

(statearr_29638_29658[(1)] = (2));


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
});})(c__27754__auto___29644,out))
;
return ((function (switch__27666__auto__,c__27754__auto___29644,out){
return (function() {
var cljs$core$async$state_machine__27667__auto__ = null;
var cljs$core$async$state_machine__27667__auto____0 = (function (){
var statearr_29639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29639[(0)] = cljs$core$async$state_machine__27667__auto__);

(statearr_29639[(1)] = (1));

return statearr_29639;
});
var cljs$core$async$state_machine__27667__auto____1 = (function (state_29616){
while(true){
var ret_value__27668__auto__ = (function (){try{while(true){
var result__27669__auto__ = switch__27666__auto__.call(null,state_29616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27669__auto__;
}
break;
}
}catch (e29640){if((e29640 instanceof Object)){
var ex__27670__auto__ = e29640;
var statearr_29641_29659 = state_29616;
(statearr_29641_29659[(5)] = ex__27670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29616;
state_29616 = G__29660;
continue;
} else {
return ret_value__27668__auto__;
}
break;
}
});
cljs$core$async$state_machine__27667__auto__ = function(state_29616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27667__auto____1.call(this,state_29616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27667__auto____0;
cljs$core$async$state_machine__27667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27667__auto____1;
return cljs$core$async$state_machine__27667__auto__;
})()
;})(switch__27666__auto__,c__27754__auto___29644,out))
})();
var state__27756__auto__ = (function (){var statearr_29642 = f__27755__auto__.call(null);
(statearr_29642[(6)] = c__27754__auto___29644);

return statearr_29642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27756__auto__);
});})(c__27754__auto___29644,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1532367479719
