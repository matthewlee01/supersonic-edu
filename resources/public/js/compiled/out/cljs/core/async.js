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
var G__22832 = arguments.length;
switch (G__22832) {
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
if(typeof cljs.core.async.t_cljs$core$async22833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22833 = (function (f,blockable,meta22834){
this.f = f;
this.blockable = blockable;
this.meta22834 = meta22834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22835,meta22834__$1){
var self__ = this;
var _22835__$1 = this;
return (new cljs.core.async.t_cljs$core$async22833(self__.f,self__.blockable,meta22834__$1));
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22835){
var self__ = this;
var _22835__$1 = this;
return self__.meta22834;
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22834","meta22834",-2075351354,null)], null);
});

cljs.core.async.t_cljs$core$async22833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22833";

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22833");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22833.
 */
cljs.core.async.__GT_t_cljs$core$async22833 = (function cljs$core$async$__GT_t_cljs$core$async22833(f__$1,blockable__$1,meta22834){
return (new cljs.core.async.t_cljs$core$async22833(f__$1,blockable__$1,meta22834));
});

}

return (new cljs.core.async.t_cljs$core$async22833(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22839 = arguments.length;
switch (G__22839) {
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
var G__22842 = arguments.length;
switch (G__22842) {
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
var G__22845 = arguments.length;
switch (G__22845) {
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
var val_22847 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22847);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22847,ret){
return (function (){
return fn1.call(null,val_22847);
});})(val_22847,ret))
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
var G__22849 = arguments.length;
switch (G__22849) {
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
var n__4376__auto___22851 = n;
var x_22852 = (0);
while(true){
if((x_22852 < n__4376__auto___22851)){
(a[x_22852] = (0));

var G__22853 = (x_22852 + (1));
x_22852 = G__22853;
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

var G__22854 = (i + (1));
i = G__22854;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22855 = (function (flag,meta22856){
this.flag = flag;
this.meta22856 = meta22856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22857,meta22856__$1){
var self__ = this;
var _22857__$1 = this;
return (new cljs.core.async.t_cljs$core$async22855(self__.flag,meta22856__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22857){
var self__ = this;
var _22857__$1 = this;
return self__.meta22856;
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22856","meta22856",-1689140261,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22855";

cljs.core.async.t_cljs$core$async22855.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22855");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22855.
 */
cljs.core.async.__GT_t_cljs$core$async22855 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22855(flag__$1,meta22856){
return (new cljs.core.async.t_cljs$core$async22855(flag__$1,meta22856));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22855(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22858 = (function (flag,cb,meta22859){
this.flag = flag;
this.cb = cb;
this.meta22859 = meta22859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22860,meta22859__$1){
var self__ = this;
var _22860__$1 = this;
return (new cljs.core.async.t_cljs$core$async22858(self__.flag,self__.cb,meta22859__$1));
});

cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22860){
var self__ = this;
var _22860__$1 = this;
return self__.meta22859;
});

cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22859","meta22859",-1342771361,null)], null);
});

cljs.core.async.t_cljs$core$async22858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22858";

cljs.core.async.t_cljs$core$async22858.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22858");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22858.
 */
cljs.core.async.__GT_t_cljs$core$async22858 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22858(flag__$1,cb__$1,meta22859){
return (new cljs.core.async.t_cljs$core$async22858(flag__$1,cb__$1,meta22859));
});

}

return (new cljs.core.async.t_cljs$core$async22858(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22861_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22861_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22862_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22862_SHARP_,port], null));
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
var G__22863 = (i + (1));
i = G__22863;
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
var len__4499__auto___22869 = arguments.length;
var i__4500__auto___22870 = (0);
while(true){
if((i__4500__auto___22870 < len__4499__auto___22869)){
args__4502__auto__.push((arguments[i__4500__auto___22870]));

var G__22871 = (i__4500__auto___22870 + (1));
i__4500__auto___22870 = G__22871;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22866){
var map__22867 = p__22866;
var map__22867__$1 = ((((!((map__22867 == null)))?(((((map__22867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22867):map__22867);
var opts = map__22867__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22864){
var G__22865 = cljs.core.first.call(null,seq22864);
var seq22864__$1 = cljs.core.next.call(null,seq22864);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22865,seq22864__$1);
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
var G__22873 = arguments.length;
switch (G__22873) {
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
var c__22786__auto___22919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___22919){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___22919){
return (function (state_22897){
var state_val_22898 = (state_22897[(1)]);
if((state_val_22898 === (7))){
var inst_22893 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
var statearr_22899_22920 = state_22897__$1;
(statearr_22899_22920[(2)] = inst_22893);

(statearr_22899_22920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (1))){
var state_22897__$1 = state_22897;
var statearr_22900_22921 = state_22897__$1;
(statearr_22900_22921[(2)] = null);

(statearr_22900_22921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (4))){
var inst_22876 = (state_22897[(7)]);
var inst_22876__$1 = (state_22897[(2)]);
var inst_22877 = (inst_22876__$1 == null);
var state_22897__$1 = (function (){var statearr_22901 = state_22897;
(statearr_22901[(7)] = inst_22876__$1);

return statearr_22901;
})();
if(cljs.core.truth_(inst_22877)){
var statearr_22902_22922 = state_22897__$1;
(statearr_22902_22922[(1)] = (5));

} else {
var statearr_22903_22923 = state_22897__$1;
(statearr_22903_22923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (13))){
var state_22897__$1 = state_22897;
var statearr_22904_22924 = state_22897__$1;
(statearr_22904_22924[(2)] = null);

(statearr_22904_22924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (6))){
var inst_22876 = (state_22897[(7)]);
var state_22897__$1 = state_22897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22897__$1,(11),to,inst_22876);
} else {
if((state_val_22898 === (3))){
var inst_22895 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22897__$1,inst_22895);
} else {
if((state_val_22898 === (12))){
var state_22897__$1 = state_22897;
var statearr_22905_22925 = state_22897__$1;
(statearr_22905_22925[(2)] = null);

(statearr_22905_22925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (2))){
var state_22897__$1 = state_22897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22897__$1,(4),from);
} else {
if((state_val_22898 === (11))){
var inst_22886 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
if(cljs.core.truth_(inst_22886)){
var statearr_22906_22926 = state_22897__$1;
(statearr_22906_22926[(1)] = (12));

} else {
var statearr_22907_22927 = state_22897__$1;
(statearr_22907_22927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (9))){
var state_22897__$1 = state_22897;
var statearr_22908_22928 = state_22897__$1;
(statearr_22908_22928[(2)] = null);

(statearr_22908_22928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (5))){
var state_22897__$1 = state_22897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22909_22929 = state_22897__$1;
(statearr_22909_22929[(1)] = (8));

} else {
var statearr_22910_22930 = state_22897__$1;
(statearr_22910_22930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (14))){
var inst_22891 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
var statearr_22911_22931 = state_22897__$1;
(statearr_22911_22931[(2)] = inst_22891);

(statearr_22911_22931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (10))){
var inst_22883 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
var statearr_22912_22932 = state_22897__$1;
(statearr_22912_22932[(2)] = inst_22883);

(statearr_22912_22932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22898 === (8))){
var inst_22880 = cljs.core.async.close_BANG_.call(null,to);
var state_22897__$1 = state_22897;
var statearr_22913_22933 = state_22897__$1;
(statearr_22913_22933[(2)] = inst_22880);

(statearr_22913_22933[(1)] = (10));


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
});})(c__22786__auto___22919))
;
return ((function (switch__22698__auto__,c__22786__auto___22919){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_22914 = [null,null,null,null,null,null,null,null];
(statearr_22914[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_22914[(1)] = (1));

return statearr_22914;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_22897){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_22897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e22915){if((e22915 instanceof Object)){
var ex__22702__auto__ = e22915;
var statearr_22916_22934 = state_22897;
(statearr_22916_22934[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22935 = state_22897;
state_22897 = G__22935;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_22897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_22897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___22919))
})();
var state__22788__auto__ = (function (){var statearr_22917 = f__22787__auto__.call(null);
(statearr_22917[(6)] = c__22786__auto___22919);

return statearr_22917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___22919))
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
return (function (p__22936){
var vec__22937 = p__22936;
var v = cljs.core.nth.call(null,vec__22937,(0),null);
var p = cljs.core.nth.call(null,vec__22937,(1),null);
var job = vec__22937;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22786__auto___23108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results){
return (function (state_22944){
var state_val_22945 = (state_22944[(1)]);
if((state_val_22945 === (1))){
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22944__$1,(2),res,v);
} else {
if((state_val_22945 === (2))){
var inst_22941 = (state_22944[(2)]);
var inst_22942 = cljs.core.async.close_BANG_.call(null,res);
var state_22944__$1 = (function (){var statearr_22946 = state_22944;
(statearr_22946[(7)] = inst_22941);

return statearr_22946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22944__$1,inst_22942);
} else {
return null;
}
}
});})(c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results))
;
return ((function (switch__22698__auto__,c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_22947 = [null,null,null,null,null,null,null,null];
(statearr_22947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__);

(statearr_22947[(1)] = (1));

return statearr_22947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1 = (function (state_22944){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_22944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e22948){if((e22948 instanceof Object)){
var ex__22702__auto__ = e22948;
var statearr_22949_23109 = state_22944;
(statearr_22949_23109[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23110 = state_22944;
state_22944 = G__23110;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = function(state_22944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1.call(this,state_22944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results))
})();
var state__22788__auto__ = (function (){var statearr_22950 = f__22787__auto__.call(null);
(statearr_22950[(6)] = c__22786__auto___23108);

return statearr_22950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23108,res,vec__22937,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22951){
var vec__22952 = p__22951;
var v = cljs.core.nth.call(null,vec__22952,(0),null);
var p = cljs.core.nth.call(null,vec__22952,(1),null);
var job = vec__22952;
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
var n__4376__auto___23111 = n;
var __23112 = (0);
while(true){
if((__23112 < n__4376__auto___23111)){
var G__22955_23113 = type;
var G__22955_23114__$1 = (((G__22955_23113 instanceof cljs.core.Keyword))?G__22955_23113.fqn:null);
switch (G__22955_23114__$1) {
case "compute":
var c__22786__auto___23116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23112,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (__23112,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function (state_22968){
var state_val_22969 = (state_22968[(1)]);
if((state_val_22969 === (1))){
var state_22968__$1 = state_22968;
var statearr_22970_23117 = state_22968__$1;
(statearr_22970_23117[(2)] = null);

(statearr_22970_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22969 === (2))){
var state_22968__$1 = state_22968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22968__$1,(4),jobs);
} else {
if((state_val_22969 === (3))){
var inst_22966 = (state_22968[(2)]);
var state_22968__$1 = state_22968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22968__$1,inst_22966);
} else {
if((state_val_22969 === (4))){
var inst_22958 = (state_22968[(2)]);
var inst_22959 = process.call(null,inst_22958);
var state_22968__$1 = state_22968;
if(cljs.core.truth_(inst_22959)){
var statearr_22971_23118 = state_22968__$1;
(statearr_22971_23118[(1)] = (5));

} else {
var statearr_22972_23119 = state_22968__$1;
(statearr_22972_23119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22969 === (5))){
var state_22968__$1 = state_22968;
var statearr_22973_23120 = state_22968__$1;
(statearr_22973_23120[(2)] = null);

(statearr_22973_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22969 === (6))){
var state_22968__$1 = state_22968;
var statearr_22974_23121 = state_22968__$1;
(statearr_22974_23121[(2)] = null);

(statearr_22974_23121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22969 === (7))){
var inst_22964 = (state_22968[(2)]);
var state_22968__$1 = state_22968;
var statearr_22975_23122 = state_22968__$1;
(statearr_22975_23122[(2)] = inst_22964);

(statearr_22975_23122[(1)] = (3));


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
});})(__23112,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
;
return ((function (__23112,switch__22698__auto__,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_22976 = [null,null,null,null,null,null,null];
(statearr_22976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__);

(statearr_22976[(1)] = (1));

return statearr_22976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1 = (function (state_22968){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_22968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e22977){if((e22977 instanceof Object)){
var ex__22702__auto__ = e22977;
var statearr_22978_23123 = state_22968;
(statearr_22978_23123[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23124 = state_22968;
state_22968 = G__23124;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = function(state_22968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1.call(this,state_22968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__;
})()
;})(__23112,switch__22698__auto__,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_22979 = f__22787__auto__.call(null);
(statearr_22979[(6)] = c__22786__auto___23116);

return statearr_22979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(__23112,c__22786__auto___23116,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
);


break;
case "async":
var c__22786__auto___23125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23112,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (__23112,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function (state_22992){
var state_val_22993 = (state_22992[(1)]);
if((state_val_22993 === (1))){
var state_22992__$1 = state_22992;
var statearr_22994_23126 = state_22992__$1;
(statearr_22994_23126[(2)] = null);

(statearr_22994_23126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22993 === (2))){
var state_22992__$1 = state_22992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22992__$1,(4),jobs);
} else {
if((state_val_22993 === (3))){
var inst_22990 = (state_22992[(2)]);
var state_22992__$1 = state_22992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22992__$1,inst_22990);
} else {
if((state_val_22993 === (4))){
var inst_22982 = (state_22992[(2)]);
var inst_22983 = async.call(null,inst_22982);
var state_22992__$1 = state_22992;
if(cljs.core.truth_(inst_22983)){
var statearr_22995_23127 = state_22992__$1;
(statearr_22995_23127[(1)] = (5));

} else {
var statearr_22996_23128 = state_22992__$1;
(statearr_22996_23128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22993 === (5))){
var state_22992__$1 = state_22992;
var statearr_22997_23129 = state_22992__$1;
(statearr_22997_23129[(2)] = null);

(statearr_22997_23129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22993 === (6))){
var state_22992__$1 = state_22992;
var statearr_22998_23130 = state_22992__$1;
(statearr_22998_23130[(2)] = null);

(statearr_22998_23130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22993 === (7))){
var inst_22988 = (state_22992[(2)]);
var state_22992__$1 = state_22992;
var statearr_22999_23131 = state_22992__$1;
(statearr_22999_23131[(2)] = inst_22988);

(statearr_22999_23131[(1)] = (3));


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
});})(__23112,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
;
return ((function (__23112,switch__22698__auto__,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_23000 = [null,null,null,null,null,null,null];
(statearr_23000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__);

(statearr_23000[(1)] = (1));

return statearr_23000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1 = (function (state_22992){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_22992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23001){if((e23001 instanceof Object)){
var ex__22702__auto__ = e23001;
var statearr_23002_23132 = state_22992;
(statearr_23002_23132[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23133 = state_22992;
state_22992 = G__23133;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = function(state_22992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1.call(this,state_22992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__;
})()
;})(__23112,switch__22698__auto__,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23003 = f__22787__auto__.call(null);
(statearr_23003[(6)] = c__22786__auto___23125);

return statearr_23003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(__23112,c__22786__auto___23125,G__22955_23113,G__22955_23114__$1,n__4376__auto___23111,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22955_23114__$1)].join('')));

}

var G__23134 = (__23112 + (1));
__23112 = G__23134;
continue;
} else {
}
break;
}

var c__22786__auto___23135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23135,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___23135,jobs,results,process,async){
return (function (state_23025){
var state_val_23026 = (state_23025[(1)]);
if((state_val_23026 === (1))){
var state_23025__$1 = state_23025;
var statearr_23027_23136 = state_23025__$1;
(statearr_23027_23136[(2)] = null);

(statearr_23027_23136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (2))){
var state_23025__$1 = state_23025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23025__$1,(4),from);
} else {
if((state_val_23026 === (3))){
var inst_23023 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23025__$1,inst_23023);
} else {
if((state_val_23026 === (4))){
var inst_23006 = (state_23025[(7)]);
var inst_23006__$1 = (state_23025[(2)]);
var inst_23007 = (inst_23006__$1 == null);
var state_23025__$1 = (function (){var statearr_23028 = state_23025;
(statearr_23028[(7)] = inst_23006__$1);

return statearr_23028;
})();
if(cljs.core.truth_(inst_23007)){
var statearr_23029_23137 = state_23025__$1;
(statearr_23029_23137[(1)] = (5));

} else {
var statearr_23030_23138 = state_23025__$1;
(statearr_23030_23138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (5))){
var inst_23009 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23025__$1 = state_23025;
var statearr_23031_23139 = state_23025__$1;
(statearr_23031_23139[(2)] = inst_23009);

(statearr_23031_23139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (6))){
var inst_23011 = (state_23025[(8)]);
var inst_23006 = (state_23025[(7)]);
var inst_23011__$1 = cljs.core.async.chan.call(null,(1));
var inst_23012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23013 = [inst_23006,inst_23011__$1];
var inst_23014 = (new cljs.core.PersistentVector(null,2,(5),inst_23012,inst_23013,null));
var state_23025__$1 = (function (){var statearr_23032 = state_23025;
(statearr_23032[(8)] = inst_23011__$1);

return statearr_23032;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23025__$1,(8),jobs,inst_23014);
} else {
if((state_val_23026 === (7))){
var inst_23021 = (state_23025[(2)]);
var state_23025__$1 = state_23025;
var statearr_23033_23140 = state_23025__$1;
(statearr_23033_23140[(2)] = inst_23021);

(statearr_23033_23140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23026 === (8))){
var inst_23011 = (state_23025[(8)]);
var inst_23016 = (state_23025[(2)]);
var state_23025__$1 = (function (){var statearr_23034 = state_23025;
(statearr_23034[(9)] = inst_23016);

return statearr_23034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23025__$1,(9),results,inst_23011);
} else {
if((state_val_23026 === (9))){
var inst_23018 = (state_23025[(2)]);
var state_23025__$1 = (function (){var statearr_23035 = state_23025;
(statearr_23035[(10)] = inst_23018);

return statearr_23035;
})();
var statearr_23036_23141 = state_23025__$1;
(statearr_23036_23141[(2)] = null);

(statearr_23036_23141[(1)] = (2));


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
});})(c__22786__auto___23135,jobs,results,process,async))
;
return ((function (switch__22698__auto__,c__22786__auto___23135,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_23037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__);

(statearr_23037[(1)] = (1));

return statearr_23037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1 = (function (state_23025){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23038){if((e23038 instanceof Object)){
var ex__22702__auto__ = e23038;
var statearr_23039_23142 = state_23025;
(statearr_23039_23142[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23143 = state_23025;
state_23025 = G__23143;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = function(state_23025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1.call(this,state_23025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___23135,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23040 = f__22787__auto__.call(null);
(statearr_23040[(6)] = c__22786__auto___23135);

return statearr_23040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23135,jobs,results,process,async))
);


var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__,jobs,results,process,async){
return (function (state_23078){
var state_val_23079 = (state_23078[(1)]);
if((state_val_23079 === (7))){
var inst_23074 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var statearr_23080_23144 = state_23078__$1;
(statearr_23080_23144[(2)] = inst_23074);

(statearr_23080_23144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (20))){
var state_23078__$1 = state_23078;
var statearr_23081_23145 = state_23078__$1;
(statearr_23081_23145[(2)] = null);

(statearr_23081_23145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (1))){
var state_23078__$1 = state_23078;
var statearr_23082_23146 = state_23078__$1;
(statearr_23082_23146[(2)] = null);

(statearr_23082_23146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (4))){
var inst_23043 = (state_23078[(7)]);
var inst_23043__$1 = (state_23078[(2)]);
var inst_23044 = (inst_23043__$1 == null);
var state_23078__$1 = (function (){var statearr_23083 = state_23078;
(statearr_23083[(7)] = inst_23043__$1);

return statearr_23083;
})();
if(cljs.core.truth_(inst_23044)){
var statearr_23084_23147 = state_23078__$1;
(statearr_23084_23147[(1)] = (5));

} else {
var statearr_23085_23148 = state_23078__$1;
(statearr_23085_23148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (15))){
var inst_23056 = (state_23078[(8)]);
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23078__$1,(18),to,inst_23056);
} else {
if((state_val_23079 === (21))){
var inst_23069 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var statearr_23086_23149 = state_23078__$1;
(statearr_23086_23149[(2)] = inst_23069);

(statearr_23086_23149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (13))){
var inst_23071 = (state_23078[(2)]);
var state_23078__$1 = (function (){var statearr_23087 = state_23078;
(statearr_23087[(9)] = inst_23071);

return statearr_23087;
})();
var statearr_23088_23150 = state_23078__$1;
(statearr_23088_23150[(2)] = null);

(statearr_23088_23150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (6))){
var inst_23043 = (state_23078[(7)]);
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23078__$1,(11),inst_23043);
} else {
if((state_val_23079 === (17))){
var inst_23064 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
if(cljs.core.truth_(inst_23064)){
var statearr_23089_23151 = state_23078__$1;
(statearr_23089_23151[(1)] = (19));

} else {
var statearr_23090_23152 = state_23078__$1;
(statearr_23090_23152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (3))){
var inst_23076 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23078__$1,inst_23076);
} else {
if((state_val_23079 === (12))){
var inst_23053 = (state_23078[(10)]);
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23078__$1,(14),inst_23053);
} else {
if((state_val_23079 === (2))){
var state_23078__$1 = state_23078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23078__$1,(4),results);
} else {
if((state_val_23079 === (19))){
var state_23078__$1 = state_23078;
var statearr_23091_23153 = state_23078__$1;
(statearr_23091_23153[(2)] = null);

(statearr_23091_23153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (11))){
var inst_23053 = (state_23078[(2)]);
var state_23078__$1 = (function (){var statearr_23092 = state_23078;
(statearr_23092[(10)] = inst_23053);

return statearr_23092;
})();
var statearr_23093_23154 = state_23078__$1;
(statearr_23093_23154[(2)] = null);

(statearr_23093_23154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (9))){
var state_23078__$1 = state_23078;
var statearr_23094_23155 = state_23078__$1;
(statearr_23094_23155[(2)] = null);

(statearr_23094_23155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (5))){
var state_23078__$1 = state_23078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23095_23156 = state_23078__$1;
(statearr_23095_23156[(1)] = (8));

} else {
var statearr_23096_23157 = state_23078__$1;
(statearr_23096_23157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (14))){
var inst_23056 = (state_23078[(8)]);
var inst_23058 = (state_23078[(11)]);
var inst_23056__$1 = (state_23078[(2)]);
var inst_23057 = (inst_23056__$1 == null);
var inst_23058__$1 = cljs.core.not.call(null,inst_23057);
var state_23078__$1 = (function (){var statearr_23097 = state_23078;
(statearr_23097[(8)] = inst_23056__$1);

(statearr_23097[(11)] = inst_23058__$1);

return statearr_23097;
})();
if(inst_23058__$1){
var statearr_23098_23158 = state_23078__$1;
(statearr_23098_23158[(1)] = (15));

} else {
var statearr_23099_23159 = state_23078__$1;
(statearr_23099_23159[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (16))){
var inst_23058 = (state_23078[(11)]);
var state_23078__$1 = state_23078;
var statearr_23100_23160 = state_23078__$1;
(statearr_23100_23160[(2)] = inst_23058);

(statearr_23100_23160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (10))){
var inst_23050 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var statearr_23101_23161 = state_23078__$1;
(statearr_23101_23161[(2)] = inst_23050);

(statearr_23101_23161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (18))){
var inst_23061 = (state_23078[(2)]);
var state_23078__$1 = state_23078;
var statearr_23102_23162 = state_23078__$1;
(statearr_23102_23162[(2)] = inst_23061);

(statearr_23102_23162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23079 === (8))){
var inst_23047 = cljs.core.async.close_BANG_.call(null,to);
var state_23078__$1 = state_23078;
var statearr_23103_23163 = state_23078__$1;
(statearr_23103_23163[(2)] = inst_23047);

(statearr_23103_23163[(1)] = (10));


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
});})(c__22786__auto__,jobs,results,process,async))
;
return ((function (switch__22698__auto__,c__22786__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_23104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__);

(statearr_23104[(1)] = (1));

return statearr_23104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1 = (function (state_23078){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23105){if((e23105 instanceof Object)){
var ex__22702__auto__ = e23105;
var statearr_23106_23164 = state_23078;
(statearr_23106_23164[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23165 = state_23078;
state_23078 = G__23165;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__ = function(state_23078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1.call(this,state_23078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23107 = f__22787__auto__.call(null);
(statearr_23107[(6)] = c__22786__auto__);

return statearr_23107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,jobs,results,process,async))
);

return c__22786__auto__;
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
var G__23167 = arguments.length;
switch (G__23167) {
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
var G__23170 = arguments.length;
switch (G__23170) {
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
var G__23173 = arguments.length;
switch (G__23173) {
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
var c__22786__auto___23222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23222,tc,fc){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___23222,tc,fc){
return (function (state_23199){
var state_val_23200 = (state_23199[(1)]);
if((state_val_23200 === (7))){
var inst_23195 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
var statearr_23201_23223 = state_23199__$1;
(statearr_23201_23223[(2)] = inst_23195);

(statearr_23201_23223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (1))){
var state_23199__$1 = state_23199;
var statearr_23202_23224 = state_23199__$1;
(statearr_23202_23224[(2)] = null);

(statearr_23202_23224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (4))){
var inst_23176 = (state_23199[(7)]);
var inst_23176__$1 = (state_23199[(2)]);
var inst_23177 = (inst_23176__$1 == null);
var state_23199__$1 = (function (){var statearr_23203 = state_23199;
(statearr_23203[(7)] = inst_23176__$1);

return statearr_23203;
})();
if(cljs.core.truth_(inst_23177)){
var statearr_23204_23225 = state_23199__$1;
(statearr_23204_23225[(1)] = (5));

} else {
var statearr_23205_23226 = state_23199__$1;
(statearr_23205_23226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (13))){
var state_23199__$1 = state_23199;
var statearr_23206_23227 = state_23199__$1;
(statearr_23206_23227[(2)] = null);

(statearr_23206_23227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (6))){
var inst_23176 = (state_23199[(7)]);
var inst_23182 = p.call(null,inst_23176);
var state_23199__$1 = state_23199;
if(cljs.core.truth_(inst_23182)){
var statearr_23207_23228 = state_23199__$1;
(statearr_23207_23228[(1)] = (9));

} else {
var statearr_23208_23229 = state_23199__$1;
(statearr_23208_23229[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (3))){
var inst_23197 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23199__$1,inst_23197);
} else {
if((state_val_23200 === (12))){
var state_23199__$1 = state_23199;
var statearr_23209_23230 = state_23199__$1;
(statearr_23209_23230[(2)] = null);

(statearr_23209_23230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (2))){
var state_23199__$1 = state_23199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23199__$1,(4),ch);
} else {
if((state_val_23200 === (11))){
var inst_23176 = (state_23199[(7)]);
var inst_23186 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23199__$1,(8),inst_23186,inst_23176);
} else {
if((state_val_23200 === (9))){
var state_23199__$1 = state_23199;
var statearr_23210_23231 = state_23199__$1;
(statearr_23210_23231[(2)] = tc);

(statearr_23210_23231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (5))){
var inst_23179 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23180 = cljs.core.async.close_BANG_.call(null,fc);
var state_23199__$1 = (function (){var statearr_23211 = state_23199;
(statearr_23211[(8)] = inst_23179);

return statearr_23211;
})();
var statearr_23212_23232 = state_23199__$1;
(statearr_23212_23232[(2)] = inst_23180);

(statearr_23212_23232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (14))){
var inst_23193 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
var statearr_23213_23233 = state_23199__$1;
(statearr_23213_23233[(2)] = inst_23193);

(statearr_23213_23233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (10))){
var state_23199__$1 = state_23199;
var statearr_23214_23234 = state_23199__$1;
(statearr_23214_23234[(2)] = fc);

(statearr_23214_23234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (8))){
var inst_23188 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
if(cljs.core.truth_(inst_23188)){
var statearr_23215_23235 = state_23199__$1;
(statearr_23215_23235[(1)] = (12));

} else {
var statearr_23216_23236 = state_23199__$1;
(statearr_23216_23236[(1)] = (13));

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
});})(c__22786__auto___23222,tc,fc))
;
return ((function (switch__22698__auto__,c__22786__auto___23222,tc,fc){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_23217 = [null,null,null,null,null,null,null,null,null];
(statearr_23217[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_23217[(1)] = (1));

return statearr_23217;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_23199){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23218){if((e23218 instanceof Object)){
var ex__22702__auto__ = e23218;
var statearr_23219_23237 = state_23199;
(statearr_23219_23237[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23238 = state_23199;
state_23199 = G__23238;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_23199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_23199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___23222,tc,fc))
})();
var state__22788__auto__ = (function (){var statearr_23220 = f__22787__auto__.call(null);
(statearr_23220[(6)] = c__22786__auto___23222);

return statearr_23220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23222,tc,fc))
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__){
return (function (state_23259){
var state_val_23260 = (state_23259[(1)]);
if((state_val_23260 === (7))){
var inst_23255 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23261_23279 = state_23259__$1;
(statearr_23261_23279[(2)] = inst_23255);

(statearr_23261_23279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (1))){
var inst_23239 = init;
var state_23259__$1 = (function (){var statearr_23262 = state_23259;
(statearr_23262[(7)] = inst_23239);

return statearr_23262;
})();
var statearr_23263_23280 = state_23259__$1;
(statearr_23263_23280[(2)] = null);

(statearr_23263_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (4))){
var inst_23242 = (state_23259[(8)]);
var inst_23242__$1 = (state_23259[(2)]);
var inst_23243 = (inst_23242__$1 == null);
var state_23259__$1 = (function (){var statearr_23264 = state_23259;
(statearr_23264[(8)] = inst_23242__$1);

return statearr_23264;
})();
if(cljs.core.truth_(inst_23243)){
var statearr_23265_23281 = state_23259__$1;
(statearr_23265_23281[(1)] = (5));

} else {
var statearr_23266_23282 = state_23259__$1;
(statearr_23266_23282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (6))){
var inst_23246 = (state_23259[(9)]);
var inst_23239 = (state_23259[(7)]);
var inst_23242 = (state_23259[(8)]);
var inst_23246__$1 = f.call(null,inst_23239,inst_23242);
var inst_23247 = cljs.core.reduced_QMARK_.call(null,inst_23246__$1);
var state_23259__$1 = (function (){var statearr_23267 = state_23259;
(statearr_23267[(9)] = inst_23246__$1);

return statearr_23267;
})();
if(inst_23247){
var statearr_23268_23283 = state_23259__$1;
(statearr_23268_23283[(1)] = (8));

} else {
var statearr_23269_23284 = state_23259__$1;
(statearr_23269_23284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (3))){
var inst_23257 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23259__$1,inst_23257);
} else {
if((state_val_23260 === (2))){
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,(4),ch);
} else {
if((state_val_23260 === (9))){
var inst_23246 = (state_23259[(9)]);
var inst_23239 = inst_23246;
var state_23259__$1 = (function (){var statearr_23270 = state_23259;
(statearr_23270[(7)] = inst_23239);

return statearr_23270;
})();
var statearr_23271_23285 = state_23259__$1;
(statearr_23271_23285[(2)] = null);

(statearr_23271_23285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (5))){
var inst_23239 = (state_23259[(7)]);
var state_23259__$1 = state_23259;
var statearr_23272_23286 = state_23259__$1;
(statearr_23272_23286[(2)] = inst_23239);

(statearr_23272_23286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (10))){
var inst_23253 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23273_23287 = state_23259__$1;
(statearr_23273_23287[(2)] = inst_23253);

(statearr_23273_23287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (8))){
var inst_23246 = (state_23259[(9)]);
var inst_23249 = cljs.core.deref.call(null,inst_23246);
var state_23259__$1 = state_23259;
var statearr_23274_23288 = state_23259__$1;
(statearr_23274_23288[(2)] = inst_23249);

(statearr_23274_23288[(1)] = (10));


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
});})(c__22786__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22699__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22699__auto____0 = (function (){
var statearr_23275 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23275[(0)] = cljs$core$async$reduce_$_state_machine__22699__auto__);

(statearr_23275[(1)] = (1));

return statearr_23275;
});
var cljs$core$async$reduce_$_state_machine__22699__auto____1 = (function (state_23259){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23276){if((e23276 instanceof Object)){
var ex__22702__auto__ = e23276;
var statearr_23277_23289 = state_23259;
(statearr_23277_23289[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23290 = state_23259;
state_23259 = G__23290;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22699__auto__ = function(state_23259){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22699__auto____1.call(this,state_23259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22699__auto____0;
cljs$core$async$reduce_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22699__auto____1;
return cljs$core$async$reduce_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_23278 = f__22787__auto__.call(null);
(statearr_23278[(6)] = c__22786__auto__);

return statearr_23278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,f__$1){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__,f__$1){
return (function (state_23296){
var state_val_23297 = (state_23296[(1)]);
if((state_val_23297 === (1))){
var inst_23291 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23296__$1 = state_23296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23296__$1,(2),inst_23291);
} else {
if((state_val_23297 === (2))){
var inst_23293 = (state_23296[(2)]);
var inst_23294 = f__$1.call(null,inst_23293);
var state_23296__$1 = state_23296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23296__$1,inst_23294);
} else {
return null;
}
}
});})(c__22786__auto__,f__$1))
;
return ((function (switch__22698__auto__,c__22786__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22699__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22699__auto____0 = (function (){
var statearr_23298 = [null,null,null,null,null,null,null];
(statearr_23298[(0)] = cljs$core$async$transduce_$_state_machine__22699__auto__);

(statearr_23298[(1)] = (1));

return statearr_23298;
});
var cljs$core$async$transduce_$_state_machine__22699__auto____1 = (function (state_23296){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23299){if((e23299 instanceof Object)){
var ex__22702__auto__ = e23299;
var statearr_23300_23302 = state_23296;
(statearr_23300_23302[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23303 = state_23296;
state_23296 = G__23303;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22699__auto__ = function(state_23296){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22699__auto____1.call(this,state_23296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22699__auto____0;
cljs$core$async$transduce_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22699__auto____1;
return cljs$core$async$transduce_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__,f__$1))
})();
var state__22788__auto__ = (function (){var statearr_23301 = f__22787__auto__.call(null);
(statearr_23301[(6)] = c__22786__auto__);

return statearr_23301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,f__$1))
);

return c__22786__auto__;
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
var G__23305 = arguments.length;
switch (G__23305) {
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__){
return (function (state_23330){
var state_val_23331 = (state_23330[(1)]);
if((state_val_23331 === (7))){
var inst_23312 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23332_23353 = state_23330__$1;
(statearr_23332_23353[(2)] = inst_23312);

(statearr_23332_23353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (1))){
var inst_23306 = cljs.core.seq.call(null,coll);
var inst_23307 = inst_23306;
var state_23330__$1 = (function (){var statearr_23333 = state_23330;
(statearr_23333[(7)] = inst_23307);

return statearr_23333;
})();
var statearr_23334_23354 = state_23330__$1;
(statearr_23334_23354[(2)] = null);

(statearr_23334_23354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (4))){
var inst_23307 = (state_23330[(7)]);
var inst_23310 = cljs.core.first.call(null,inst_23307);
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23330__$1,(7),ch,inst_23310);
} else {
if((state_val_23331 === (13))){
var inst_23324 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23335_23355 = state_23330__$1;
(statearr_23335_23355[(2)] = inst_23324);

(statearr_23335_23355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (6))){
var inst_23315 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
if(cljs.core.truth_(inst_23315)){
var statearr_23336_23356 = state_23330__$1;
(statearr_23336_23356[(1)] = (8));

} else {
var statearr_23337_23357 = state_23330__$1;
(statearr_23337_23357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (3))){
var inst_23328 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23330__$1,inst_23328);
} else {
if((state_val_23331 === (12))){
var state_23330__$1 = state_23330;
var statearr_23338_23358 = state_23330__$1;
(statearr_23338_23358[(2)] = null);

(statearr_23338_23358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (2))){
var inst_23307 = (state_23330[(7)]);
var state_23330__$1 = state_23330;
if(cljs.core.truth_(inst_23307)){
var statearr_23339_23359 = state_23330__$1;
(statearr_23339_23359[(1)] = (4));

} else {
var statearr_23340_23360 = state_23330__$1;
(statearr_23340_23360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (11))){
var inst_23321 = cljs.core.async.close_BANG_.call(null,ch);
var state_23330__$1 = state_23330;
var statearr_23341_23361 = state_23330__$1;
(statearr_23341_23361[(2)] = inst_23321);

(statearr_23341_23361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (9))){
var state_23330__$1 = state_23330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23342_23362 = state_23330__$1;
(statearr_23342_23362[(1)] = (11));

} else {
var statearr_23343_23363 = state_23330__$1;
(statearr_23343_23363[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (5))){
var inst_23307 = (state_23330[(7)]);
var state_23330__$1 = state_23330;
var statearr_23344_23364 = state_23330__$1;
(statearr_23344_23364[(2)] = inst_23307);

(statearr_23344_23364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (10))){
var inst_23326 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23345_23365 = state_23330__$1;
(statearr_23345_23365[(2)] = inst_23326);

(statearr_23345_23365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (8))){
var inst_23307 = (state_23330[(7)]);
var inst_23317 = cljs.core.next.call(null,inst_23307);
var inst_23307__$1 = inst_23317;
var state_23330__$1 = (function (){var statearr_23346 = state_23330;
(statearr_23346[(7)] = inst_23307__$1);

return statearr_23346;
})();
var statearr_23347_23366 = state_23330__$1;
(statearr_23347_23366[(2)] = null);

(statearr_23347_23366[(1)] = (2));


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
});})(c__22786__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_23348 = [null,null,null,null,null,null,null,null];
(statearr_23348[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_23348[(1)] = (1));

return statearr_23348;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_23330){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23349){if((e23349 instanceof Object)){
var ex__22702__auto__ = e23349;
var statearr_23350_23367 = state_23330;
(statearr_23350_23367[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23368 = state_23330;
state_23330 = G__23368;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_23330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_23330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_23351 = f__22787__auto__.call(null);
(statearr_23351[(6)] = c__22786__auto__);

return statearr_23351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23369 = (function (ch,cs,meta23370){
this.ch = ch;
this.cs = cs;
this.meta23370 = meta23370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23371,meta23370__$1){
var self__ = this;
var _23371__$1 = this;
return (new cljs.core.async.t_cljs$core$async23369(self__.ch,self__.cs,meta23370__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23371){
var self__ = this;
var _23371__$1 = this;
return self__.meta23370;
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23370","meta23370",-2125176265,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23369";

cljs.core.async.t_cljs$core$async23369.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23369");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23369.
 */
cljs.core.async.__GT_t_cljs$core$async23369 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23369(ch__$1,cs__$1,meta23370){
return (new cljs.core.async.t_cljs$core$async23369(ch__$1,cs__$1,meta23370));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23369(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22786__auto___23591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23591,cs,m,dchan,dctr,done){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___23591,cs,m,dchan,dctr,done){
return (function (state_23506){
var state_val_23507 = (state_23506[(1)]);
if((state_val_23507 === (7))){
var inst_23502 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23508_23592 = state_23506__$1;
(statearr_23508_23592[(2)] = inst_23502);

(statearr_23508_23592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (20))){
var inst_23405 = (state_23506[(7)]);
var inst_23417 = cljs.core.first.call(null,inst_23405);
var inst_23418 = cljs.core.nth.call(null,inst_23417,(0),null);
var inst_23419 = cljs.core.nth.call(null,inst_23417,(1),null);
var state_23506__$1 = (function (){var statearr_23509 = state_23506;
(statearr_23509[(8)] = inst_23418);

return statearr_23509;
})();
if(cljs.core.truth_(inst_23419)){
var statearr_23510_23593 = state_23506__$1;
(statearr_23510_23593[(1)] = (22));

} else {
var statearr_23511_23594 = state_23506__$1;
(statearr_23511_23594[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (27))){
var inst_23454 = (state_23506[(9)]);
var inst_23449 = (state_23506[(10)]);
var inst_23374 = (state_23506[(11)]);
var inst_23447 = (state_23506[(12)]);
var inst_23454__$1 = cljs.core._nth.call(null,inst_23447,inst_23449);
var inst_23455 = cljs.core.async.put_BANG_.call(null,inst_23454__$1,inst_23374,done);
var state_23506__$1 = (function (){var statearr_23512 = state_23506;
(statearr_23512[(9)] = inst_23454__$1);

return statearr_23512;
})();
if(cljs.core.truth_(inst_23455)){
var statearr_23513_23595 = state_23506__$1;
(statearr_23513_23595[(1)] = (30));

} else {
var statearr_23514_23596 = state_23506__$1;
(statearr_23514_23596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (1))){
var state_23506__$1 = state_23506;
var statearr_23515_23597 = state_23506__$1;
(statearr_23515_23597[(2)] = null);

(statearr_23515_23597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (24))){
var inst_23405 = (state_23506[(7)]);
var inst_23424 = (state_23506[(2)]);
var inst_23425 = cljs.core.next.call(null,inst_23405);
var inst_23383 = inst_23425;
var inst_23384 = null;
var inst_23385 = (0);
var inst_23386 = (0);
var state_23506__$1 = (function (){var statearr_23516 = state_23506;
(statearr_23516[(13)] = inst_23386);

(statearr_23516[(14)] = inst_23424);

(statearr_23516[(15)] = inst_23384);

(statearr_23516[(16)] = inst_23383);

(statearr_23516[(17)] = inst_23385);

return statearr_23516;
})();
var statearr_23517_23598 = state_23506__$1;
(statearr_23517_23598[(2)] = null);

(statearr_23517_23598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (39))){
var state_23506__$1 = state_23506;
var statearr_23521_23599 = state_23506__$1;
(statearr_23521_23599[(2)] = null);

(statearr_23521_23599[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (4))){
var inst_23374 = (state_23506[(11)]);
var inst_23374__$1 = (state_23506[(2)]);
var inst_23375 = (inst_23374__$1 == null);
var state_23506__$1 = (function (){var statearr_23522 = state_23506;
(statearr_23522[(11)] = inst_23374__$1);

return statearr_23522;
})();
if(cljs.core.truth_(inst_23375)){
var statearr_23523_23600 = state_23506__$1;
(statearr_23523_23600[(1)] = (5));

} else {
var statearr_23524_23601 = state_23506__$1;
(statearr_23524_23601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (15))){
var inst_23386 = (state_23506[(13)]);
var inst_23384 = (state_23506[(15)]);
var inst_23383 = (state_23506[(16)]);
var inst_23385 = (state_23506[(17)]);
var inst_23401 = (state_23506[(2)]);
var inst_23402 = (inst_23386 + (1));
var tmp23518 = inst_23384;
var tmp23519 = inst_23383;
var tmp23520 = inst_23385;
var inst_23383__$1 = tmp23519;
var inst_23384__$1 = tmp23518;
var inst_23385__$1 = tmp23520;
var inst_23386__$1 = inst_23402;
var state_23506__$1 = (function (){var statearr_23525 = state_23506;
(statearr_23525[(18)] = inst_23401);

(statearr_23525[(13)] = inst_23386__$1);

(statearr_23525[(15)] = inst_23384__$1);

(statearr_23525[(16)] = inst_23383__$1);

(statearr_23525[(17)] = inst_23385__$1);

return statearr_23525;
})();
var statearr_23526_23602 = state_23506__$1;
(statearr_23526_23602[(2)] = null);

(statearr_23526_23602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (21))){
var inst_23428 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23530_23603 = state_23506__$1;
(statearr_23530_23603[(2)] = inst_23428);

(statearr_23530_23603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (31))){
var inst_23454 = (state_23506[(9)]);
var inst_23458 = done.call(null,null);
var inst_23459 = cljs.core.async.untap_STAR_.call(null,m,inst_23454);
var state_23506__$1 = (function (){var statearr_23531 = state_23506;
(statearr_23531[(19)] = inst_23458);

return statearr_23531;
})();
var statearr_23532_23604 = state_23506__$1;
(statearr_23532_23604[(2)] = inst_23459);

(statearr_23532_23604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (32))){
var inst_23448 = (state_23506[(20)]);
var inst_23449 = (state_23506[(10)]);
var inst_23446 = (state_23506[(21)]);
var inst_23447 = (state_23506[(12)]);
var inst_23461 = (state_23506[(2)]);
var inst_23462 = (inst_23449 + (1));
var tmp23527 = inst_23448;
var tmp23528 = inst_23446;
var tmp23529 = inst_23447;
var inst_23446__$1 = tmp23528;
var inst_23447__$1 = tmp23529;
var inst_23448__$1 = tmp23527;
var inst_23449__$1 = inst_23462;
var state_23506__$1 = (function (){var statearr_23533 = state_23506;
(statearr_23533[(20)] = inst_23448__$1);

(statearr_23533[(22)] = inst_23461);

(statearr_23533[(10)] = inst_23449__$1);

(statearr_23533[(21)] = inst_23446__$1);

(statearr_23533[(12)] = inst_23447__$1);

return statearr_23533;
})();
var statearr_23534_23605 = state_23506__$1;
(statearr_23534_23605[(2)] = null);

(statearr_23534_23605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (40))){
var inst_23474 = (state_23506[(23)]);
var inst_23478 = done.call(null,null);
var inst_23479 = cljs.core.async.untap_STAR_.call(null,m,inst_23474);
var state_23506__$1 = (function (){var statearr_23535 = state_23506;
(statearr_23535[(24)] = inst_23478);

return statearr_23535;
})();
var statearr_23536_23606 = state_23506__$1;
(statearr_23536_23606[(2)] = inst_23479);

(statearr_23536_23606[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (33))){
var inst_23465 = (state_23506[(25)]);
var inst_23467 = cljs.core.chunked_seq_QMARK_.call(null,inst_23465);
var state_23506__$1 = state_23506;
if(inst_23467){
var statearr_23537_23607 = state_23506__$1;
(statearr_23537_23607[(1)] = (36));

} else {
var statearr_23538_23608 = state_23506__$1;
(statearr_23538_23608[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (13))){
var inst_23395 = (state_23506[(26)]);
var inst_23398 = cljs.core.async.close_BANG_.call(null,inst_23395);
var state_23506__$1 = state_23506;
var statearr_23539_23609 = state_23506__$1;
(statearr_23539_23609[(2)] = inst_23398);

(statearr_23539_23609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (22))){
var inst_23418 = (state_23506[(8)]);
var inst_23421 = cljs.core.async.close_BANG_.call(null,inst_23418);
var state_23506__$1 = state_23506;
var statearr_23540_23610 = state_23506__$1;
(statearr_23540_23610[(2)] = inst_23421);

(statearr_23540_23610[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (36))){
var inst_23465 = (state_23506[(25)]);
var inst_23469 = cljs.core.chunk_first.call(null,inst_23465);
var inst_23470 = cljs.core.chunk_rest.call(null,inst_23465);
var inst_23471 = cljs.core.count.call(null,inst_23469);
var inst_23446 = inst_23470;
var inst_23447 = inst_23469;
var inst_23448 = inst_23471;
var inst_23449 = (0);
var state_23506__$1 = (function (){var statearr_23541 = state_23506;
(statearr_23541[(20)] = inst_23448);

(statearr_23541[(10)] = inst_23449);

(statearr_23541[(21)] = inst_23446);

(statearr_23541[(12)] = inst_23447);

return statearr_23541;
})();
var statearr_23542_23611 = state_23506__$1;
(statearr_23542_23611[(2)] = null);

(statearr_23542_23611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (41))){
var inst_23465 = (state_23506[(25)]);
var inst_23481 = (state_23506[(2)]);
var inst_23482 = cljs.core.next.call(null,inst_23465);
var inst_23446 = inst_23482;
var inst_23447 = null;
var inst_23448 = (0);
var inst_23449 = (0);
var state_23506__$1 = (function (){var statearr_23543 = state_23506;
(statearr_23543[(27)] = inst_23481);

(statearr_23543[(20)] = inst_23448);

(statearr_23543[(10)] = inst_23449);

(statearr_23543[(21)] = inst_23446);

(statearr_23543[(12)] = inst_23447);

return statearr_23543;
})();
var statearr_23544_23612 = state_23506__$1;
(statearr_23544_23612[(2)] = null);

(statearr_23544_23612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (43))){
var state_23506__$1 = state_23506;
var statearr_23545_23613 = state_23506__$1;
(statearr_23545_23613[(2)] = null);

(statearr_23545_23613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (29))){
var inst_23490 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23546_23614 = state_23506__$1;
(statearr_23546_23614[(2)] = inst_23490);

(statearr_23546_23614[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (44))){
var inst_23499 = (state_23506[(2)]);
var state_23506__$1 = (function (){var statearr_23547 = state_23506;
(statearr_23547[(28)] = inst_23499);

return statearr_23547;
})();
var statearr_23548_23615 = state_23506__$1;
(statearr_23548_23615[(2)] = null);

(statearr_23548_23615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (6))){
var inst_23438 = (state_23506[(29)]);
var inst_23437 = cljs.core.deref.call(null,cs);
var inst_23438__$1 = cljs.core.keys.call(null,inst_23437);
var inst_23439 = cljs.core.count.call(null,inst_23438__$1);
var inst_23440 = cljs.core.reset_BANG_.call(null,dctr,inst_23439);
var inst_23445 = cljs.core.seq.call(null,inst_23438__$1);
var inst_23446 = inst_23445;
var inst_23447 = null;
var inst_23448 = (0);
var inst_23449 = (0);
var state_23506__$1 = (function (){var statearr_23549 = state_23506;
(statearr_23549[(29)] = inst_23438__$1);

(statearr_23549[(20)] = inst_23448);

(statearr_23549[(10)] = inst_23449);

(statearr_23549[(21)] = inst_23446);

(statearr_23549[(30)] = inst_23440);

(statearr_23549[(12)] = inst_23447);

return statearr_23549;
})();
var statearr_23550_23616 = state_23506__$1;
(statearr_23550_23616[(2)] = null);

(statearr_23550_23616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (28))){
var inst_23446 = (state_23506[(21)]);
var inst_23465 = (state_23506[(25)]);
var inst_23465__$1 = cljs.core.seq.call(null,inst_23446);
var state_23506__$1 = (function (){var statearr_23551 = state_23506;
(statearr_23551[(25)] = inst_23465__$1);

return statearr_23551;
})();
if(inst_23465__$1){
var statearr_23552_23617 = state_23506__$1;
(statearr_23552_23617[(1)] = (33));

} else {
var statearr_23553_23618 = state_23506__$1;
(statearr_23553_23618[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (25))){
var inst_23448 = (state_23506[(20)]);
var inst_23449 = (state_23506[(10)]);
var inst_23451 = (inst_23449 < inst_23448);
var inst_23452 = inst_23451;
var state_23506__$1 = state_23506;
if(cljs.core.truth_(inst_23452)){
var statearr_23554_23619 = state_23506__$1;
(statearr_23554_23619[(1)] = (27));

} else {
var statearr_23555_23620 = state_23506__$1;
(statearr_23555_23620[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (34))){
var state_23506__$1 = state_23506;
var statearr_23556_23621 = state_23506__$1;
(statearr_23556_23621[(2)] = null);

(statearr_23556_23621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (17))){
var state_23506__$1 = state_23506;
var statearr_23557_23622 = state_23506__$1;
(statearr_23557_23622[(2)] = null);

(statearr_23557_23622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (3))){
var inst_23504 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23506__$1,inst_23504);
} else {
if((state_val_23507 === (12))){
var inst_23433 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23558_23623 = state_23506__$1;
(statearr_23558_23623[(2)] = inst_23433);

(statearr_23558_23623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (2))){
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23506__$1,(4),ch);
} else {
if((state_val_23507 === (23))){
var state_23506__$1 = state_23506;
var statearr_23559_23624 = state_23506__$1;
(statearr_23559_23624[(2)] = null);

(statearr_23559_23624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (35))){
var inst_23488 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23560_23625 = state_23506__$1;
(statearr_23560_23625[(2)] = inst_23488);

(statearr_23560_23625[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (19))){
var inst_23405 = (state_23506[(7)]);
var inst_23409 = cljs.core.chunk_first.call(null,inst_23405);
var inst_23410 = cljs.core.chunk_rest.call(null,inst_23405);
var inst_23411 = cljs.core.count.call(null,inst_23409);
var inst_23383 = inst_23410;
var inst_23384 = inst_23409;
var inst_23385 = inst_23411;
var inst_23386 = (0);
var state_23506__$1 = (function (){var statearr_23561 = state_23506;
(statearr_23561[(13)] = inst_23386);

(statearr_23561[(15)] = inst_23384);

(statearr_23561[(16)] = inst_23383);

(statearr_23561[(17)] = inst_23385);

return statearr_23561;
})();
var statearr_23562_23626 = state_23506__$1;
(statearr_23562_23626[(2)] = null);

(statearr_23562_23626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (11))){
var inst_23383 = (state_23506[(16)]);
var inst_23405 = (state_23506[(7)]);
var inst_23405__$1 = cljs.core.seq.call(null,inst_23383);
var state_23506__$1 = (function (){var statearr_23563 = state_23506;
(statearr_23563[(7)] = inst_23405__$1);

return statearr_23563;
})();
if(inst_23405__$1){
var statearr_23564_23627 = state_23506__$1;
(statearr_23564_23627[(1)] = (16));

} else {
var statearr_23565_23628 = state_23506__$1;
(statearr_23565_23628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (9))){
var inst_23435 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23566_23629 = state_23506__$1;
(statearr_23566_23629[(2)] = inst_23435);

(statearr_23566_23629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (5))){
var inst_23381 = cljs.core.deref.call(null,cs);
var inst_23382 = cljs.core.seq.call(null,inst_23381);
var inst_23383 = inst_23382;
var inst_23384 = null;
var inst_23385 = (0);
var inst_23386 = (0);
var state_23506__$1 = (function (){var statearr_23567 = state_23506;
(statearr_23567[(13)] = inst_23386);

(statearr_23567[(15)] = inst_23384);

(statearr_23567[(16)] = inst_23383);

(statearr_23567[(17)] = inst_23385);

return statearr_23567;
})();
var statearr_23568_23630 = state_23506__$1;
(statearr_23568_23630[(2)] = null);

(statearr_23568_23630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (14))){
var state_23506__$1 = state_23506;
var statearr_23569_23631 = state_23506__$1;
(statearr_23569_23631[(2)] = null);

(statearr_23569_23631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (45))){
var inst_23496 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23570_23632 = state_23506__$1;
(statearr_23570_23632[(2)] = inst_23496);

(statearr_23570_23632[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (26))){
var inst_23438 = (state_23506[(29)]);
var inst_23492 = (state_23506[(2)]);
var inst_23493 = cljs.core.seq.call(null,inst_23438);
var state_23506__$1 = (function (){var statearr_23571 = state_23506;
(statearr_23571[(31)] = inst_23492);

return statearr_23571;
})();
if(inst_23493){
var statearr_23572_23633 = state_23506__$1;
(statearr_23572_23633[(1)] = (42));

} else {
var statearr_23573_23634 = state_23506__$1;
(statearr_23573_23634[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (16))){
var inst_23405 = (state_23506[(7)]);
var inst_23407 = cljs.core.chunked_seq_QMARK_.call(null,inst_23405);
var state_23506__$1 = state_23506;
if(inst_23407){
var statearr_23574_23635 = state_23506__$1;
(statearr_23574_23635[(1)] = (19));

} else {
var statearr_23575_23636 = state_23506__$1;
(statearr_23575_23636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (38))){
var inst_23485 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23576_23637 = state_23506__$1;
(statearr_23576_23637[(2)] = inst_23485);

(statearr_23576_23637[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (30))){
var state_23506__$1 = state_23506;
var statearr_23577_23638 = state_23506__$1;
(statearr_23577_23638[(2)] = null);

(statearr_23577_23638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (10))){
var inst_23386 = (state_23506[(13)]);
var inst_23384 = (state_23506[(15)]);
var inst_23394 = cljs.core._nth.call(null,inst_23384,inst_23386);
var inst_23395 = cljs.core.nth.call(null,inst_23394,(0),null);
var inst_23396 = cljs.core.nth.call(null,inst_23394,(1),null);
var state_23506__$1 = (function (){var statearr_23578 = state_23506;
(statearr_23578[(26)] = inst_23395);

return statearr_23578;
})();
if(cljs.core.truth_(inst_23396)){
var statearr_23579_23639 = state_23506__$1;
(statearr_23579_23639[(1)] = (13));

} else {
var statearr_23580_23640 = state_23506__$1;
(statearr_23580_23640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (18))){
var inst_23431 = (state_23506[(2)]);
var state_23506__$1 = state_23506;
var statearr_23581_23641 = state_23506__$1;
(statearr_23581_23641[(2)] = inst_23431);

(statearr_23581_23641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (42))){
var state_23506__$1 = state_23506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23506__$1,(45),dchan);
} else {
if((state_val_23507 === (37))){
var inst_23474 = (state_23506[(23)]);
var inst_23374 = (state_23506[(11)]);
var inst_23465 = (state_23506[(25)]);
var inst_23474__$1 = cljs.core.first.call(null,inst_23465);
var inst_23475 = cljs.core.async.put_BANG_.call(null,inst_23474__$1,inst_23374,done);
var state_23506__$1 = (function (){var statearr_23582 = state_23506;
(statearr_23582[(23)] = inst_23474__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23475)){
var statearr_23583_23642 = state_23506__$1;
(statearr_23583_23642[(1)] = (39));

} else {
var statearr_23584_23643 = state_23506__$1;
(statearr_23584_23643[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23507 === (8))){
var inst_23386 = (state_23506[(13)]);
var inst_23385 = (state_23506[(17)]);
var inst_23388 = (inst_23386 < inst_23385);
var inst_23389 = inst_23388;
var state_23506__$1 = state_23506;
if(cljs.core.truth_(inst_23389)){
var statearr_23585_23644 = state_23506__$1;
(statearr_23585_23644[(1)] = (10));

} else {
var statearr_23586_23645 = state_23506__$1;
(statearr_23586_23645[(1)] = (11));

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
});})(c__22786__auto___23591,cs,m,dchan,dctr,done))
;
return ((function (switch__22698__auto__,c__22786__auto___23591,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22699__auto__ = null;
var cljs$core$async$mult_$_state_machine__22699__auto____0 = (function (){
var statearr_23587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23587[(0)] = cljs$core$async$mult_$_state_machine__22699__auto__);

(statearr_23587[(1)] = (1));

return statearr_23587;
});
var cljs$core$async$mult_$_state_machine__22699__auto____1 = (function (state_23506){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23588){if((e23588 instanceof Object)){
var ex__22702__auto__ = e23588;
var statearr_23589_23646 = state_23506;
(statearr_23589_23646[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23647 = state_23506;
state_23506 = G__23647;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22699__auto__ = function(state_23506){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22699__auto____1.call(this,state_23506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22699__auto____0;
cljs$core$async$mult_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22699__auto____1;
return cljs$core$async$mult_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___23591,cs,m,dchan,dctr,done))
})();
var state__22788__auto__ = (function (){var statearr_23590 = f__22787__auto__.call(null);
(statearr_23590[(6)] = c__22786__auto___23591);

return statearr_23590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23591,cs,m,dchan,dctr,done))
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
var G__23649 = arguments.length;
switch (G__23649) {
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
var len__4499__auto___23661 = arguments.length;
var i__4500__auto___23662 = (0);
while(true){
if((i__4500__auto___23662 < len__4499__auto___23661)){
args__4502__auto__.push((arguments[i__4500__auto___23662]));

var G__23663 = (i__4500__auto___23662 + (1));
i__4500__auto___23662 = G__23663;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23655){
var map__23656 = p__23655;
var map__23656__$1 = ((((!((map__23656 == null)))?(((((map__23656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23656):map__23656);
var opts = map__23656__$1;
var statearr_23658_23664 = state;
(statearr_23658_23664[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23656,map__23656__$1,opts){
return (function (val){
var statearr_23659_23665 = state;
(statearr_23659_23665[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23656,map__23656__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23660_23666 = state;
(statearr_23660_23666[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23651){
var G__23652 = cljs.core.first.call(null,seq23651);
var seq23651__$1 = cljs.core.next.call(null,seq23651);
var G__23653 = cljs.core.first.call(null,seq23651__$1);
var seq23651__$2 = cljs.core.next.call(null,seq23651__$1);
var G__23654 = cljs.core.first.call(null,seq23651__$2);
var seq23651__$3 = cljs.core.next.call(null,seq23651__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23652,G__23653,G__23654,seq23651__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23667 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23668){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23668 = meta23668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23669,meta23668__$1){
var self__ = this;
var _23669__$1 = this;
return (new cljs.core.async.t_cljs$core$async23667(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23668__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23669){
var self__ = this;
var _23669__$1 = this;
return self__.meta23668;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23667.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23668","meta23668",-875167484,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23667";

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23667");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23667.
 */
cljs.core.async.__GT_t_cljs$core$async23667 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23667(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23668){
return (new cljs.core.async.t_cljs$core$async23667(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23668));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23667(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22786__auto___23831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23771){
var state_val_23772 = (state_23771[(1)]);
if((state_val_23772 === (7))){
var inst_23686 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23773_23832 = state_23771__$1;
(statearr_23773_23832[(2)] = inst_23686);

(statearr_23773_23832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (20))){
var inst_23698 = (state_23771[(7)]);
var state_23771__$1 = state_23771;
var statearr_23774_23833 = state_23771__$1;
(statearr_23774_23833[(2)] = inst_23698);

(statearr_23774_23833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (27))){
var state_23771__$1 = state_23771;
var statearr_23775_23834 = state_23771__$1;
(statearr_23775_23834[(2)] = null);

(statearr_23775_23834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (1))){
var inst_23673 = (state_23771[(8)]);
var inst_23673__$1 = calc_state.call(null);
var inst_23675 = (inst_23673__$1 == null);
var inst_23676 = cljs.core.not.call(null,inst_23675);
var state_23771__$1 = (function (){var statearr_23776 = state_23771;
(statearr_23776[(8)] = inst_23673__$1);

return statearr_23776;
})();
if(inst_23676){
var statearr_23777_23835 = state_23771__$1;
(statearr_23777_23835[(1)] = (2));

} else {
var statearr_23778_23836 = state_23771__$1;
(statearr_23778_23836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (24))){
var inst_23722 = (state_23771[(9)]);
var inst_23745 = (state_23771[(10)]);
var inst_23731 = (state_23771[(11)]);
var inst_23745__$1 = inst_23722.call(null,inst_23731);
var state_23771__$1 = (function (){var statearr_23779 = state_23771;
(statearr_23779[(10)] = inst_23745__$1);

return statearr_23779;
})();
if(cljs.core.truth_(inst_23745__$1)){
var statearr_23780_23837 = state_23771__$1;
(statearr_23780_23837[(1)] = (29));

} else {
var statearr_23781_23838 = state_23771__$1;
(statearr_23781_23838[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (4))){
var inst_23689 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23689)){
var statearr_23782_23839 = state_23771__$1;
(statearr_23782_23839[(1)] = (8));

} else {
var statearr_23783_23840 = state_23771__$1;
(statearr_23783_23840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (15))){
var inst_23716 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23716)){
var statearr_23784_23841 = state_23771__$1;
(statearr_23784_23841[(1)] = (19));

} else {
var statearr_23785_23842 = state_23771__$1;
(statearr_23785_23842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (21))){
var inst_23721 = (state_23771[(12)]);
var inst_23721__$1 = (state_23771[(2)]);
var inst_23722 = cljs.core.get.call(null,inst_23721__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23723 = cljs.core.get.call(null,inst_23721__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23724 = cljs.core.get.call(null,inst_23721__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23771__$1 = (function (){var statearr_23786 = state_23771;
(statearr_23786[(9)] = inst_23722);

(statearr_23786[(12)] = inst_23721__$1);

(statearr_23786[(13)] = inst_23723);

return statearr_23786;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23771__$1,(22),inst_23724);
} else {
if((state_val_23772 === (31))){
var inst_23753 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23753)){
var statearr_23787_23843 = state_23771__$1;
(statearr_23787_23843[(1)] = (32));

} else {
var statearr_23788_23844 = state_23771__$1;
(statearr_23788_23844[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (32))){
var inst_23730 = (state_23771[(14)]);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23771__$1,(35),out,inst_23730);
} else {
if((state_val_23772 === (33))){
var inst_23721 = (state_23771[(12)]);
var inst_23698 = inst_23721;
var state_23771__$1 = (function (){var statearr_23789 = state_23771;
(statearr_23789[(7)] = inst_23698);

return statearr_23789;
})();
var statearr_23790_23845 = state_23771__$1;
(statearr_23790_23845[(2)] = null);

(statearr_23790_23845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (13))){
var inst_23698 = (state_23771[(7)]);
var inst_23705 = inst_23698.cljs$lang$protocol_mask$partition0$;
var inst_23706 = (inst_23705 & (64));
var inst_23707 = inst_23698.cljs$core$ISeq$;
var inst_23708 = (cljs.core.PROTOCOL_SENTINEL === inst_23707);
var inst_23709 = ((inst_23706) || (inst_23708));
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23709)){
var statearr_23791_23846 = state_23771__$1;
(statearr_23791_23846[(1)] = (16));

} else {
var statearr_23792_23847 = state_23771__$1;
(statearr_23792_23847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (22))){
var inst_23731 = (state_23771[(11)]);
var inst_23730 = (state_23771[(14)]);
var inst_23729 = (state_23771[(2)]);
var inst_23730__$1 = cljs.core.nth.call(null,inst_23729,(0),null);
var inst_23731__$1 = cljs.core.nth.call(null,inst_23729,(1),null);
var inst_23732 = (inst_23730__$1 == null);
var inst_23733 = cljs.core._EQ_.call(null,inst_23731__$1,change);
var inst_23734 = ((inst_23732) || (inst_23733));
var state_23771__$1 = (function (){var statearr_23793 = state_23771;
(statearr_23793[(11)] = inst_23731__$1);

(statearr_23793[(14)] = inst_23730__$1);

return statearr_23793;
})();
if(cljs.core.truth_(inst_23734)){
var statearr_23794_23848 = state_23771__$1;
(statearr_23794_23848[(1)] = (23));

} else {
var statearr_23795_23849 = state_23771__$1;
(statearr_23795_23849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (36))){
var inst_23721 = (state_23771[(12)]);
var inst_23698 = inst_23721;
var state_23771__$1 = (function (){var statearr_23796 = state_23771;
(statearr_23796[(7)] = inst_23698);

return statearr_23796;
})();
var statearr_23797_23850 = state_23771__$1;
(statearr_23797_23850[(2)] = null);

(statearr_23797_23850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (29))){
var inst_23745 = (state_23771[(10)]);
var state_23771__$1 = state_23771;
var statearr_23798_23851 = state_23771__$1;
(statearr_23798_23851[(2)] = inst_23745);

(statearr_23798_23851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (6))){
var state_23771__$1 = state_23771;
var statearr_23799_23852 = state_23771__$1;
(statearr_23799_23852[(2)] = false);

(statearr_23799_23852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (28))){
var inst_23741 = (state_23771[(2)]);
var inst_23742 = calc_state.call(null);
var inst_23698 = inst_23742;
var state_23771__$1 = (function (){var statearr_23800 = state_23771;
(statearr_23800[(15)] = inst_23741);

(statearr_23800[(7)] = inst_23698);

return statearr_23800;
})();
var statearr_23801_23853 = state_23771__$1;
(statearr_23801_23853[(2)] = null);

(statearr_23801_23853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (25))){
var inst_23767 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23802_23854 = state_23771__$1;
(statearr_23802_23854[(2)] = inst_23767);

(statearr_23802_23854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (34))){
var inst_23765 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23803_23855 = state_23771__$1;
(statearr_23803_23855[(2)] = inst_23765);

(statearr_23803_23855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (17))){
var state_23771__$1 = state_23771;
var statearr_23804_23856 = state_23771__$1;
(statearr_23804_23856[(2)] = false);

(statearr_23804_23856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (3))){
var state_23771__$1 = state_23771;
var statearr_23805_23857 = state_23771__$1;
(statearr_23805_23857[(2)] = false);

(statearr_23805_23857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (12))){
var inst_23769 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23771__$1,inst_23769);
} else {
if((state_val_23772 === (2))){
var inst_23673 = (state_23771[(8)]);
var inst_23678 = inst_23673.cljs$lang$protocol_mask$partition0$;
var inst_23679 = (inst_23678 & (64));
var inst_23680 = inst_23673.cljs$core$ISeq$;
var inst_23681 = (cljs.core.PROTOCOL_SENTINEL === inst_23680);
var inst_23682 = ((inst_23679) || (inst_23681));
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23682)){
var statearr_23806_23858 = state_23771__$1;
(statearr_23806_23858[(1)] = (5));

} else {
var statearr_23807_23859 = state_23771__$1;
(statearr_23807_23859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (23))){
var inst_23730 = (state_23771[(14)]);
var inst_23736 = (inst_23730 == null);
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23736)){
var statearr_23808_23860 = state_23771__$1;
(statearr_23808_23860[(1)] = (26));

} else {
var statearr_23809_23861 = state_23771__$1;
(statearr_23809_23861[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (35))){
var inst_23756 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23756)){
var statearr_23810_23862 = state_23771__$1;
(statearr_23810_23862[(1)] = (36));

} else {
var statearr_23811_23863 = state_23771__$1;
(statearr_23811_23863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (19))){
var inst_23698 = (state_23771[(7)]);
var inst_23718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23698);
var state_23771__$1 = state_23771;
var statearr_23812_23864 = state_23771__$1;
(statearr_23812_23864[(2)] = inst_23718);

(statearr_23812_23864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (11))){
var inst_23698 = (state_23771[(7)]);
var inst_23702 = (inst_23698 == null);
var inst_23703 = cljs.core.not.call(null,inst_23702);
var state_23771__$1 = state_23771;
if(inst_23703){
var statearr_23813_23865 = state_23771__$1;
(statearr_23813_23865[(1)] = (13));

} else {
var statearr_23814_23866 = state_23771__$1;
(statearr_23814_23866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (9))){
var inst_23673 = (state_23771[(8)]);
var state_23771__$1 = state_23771;
var statearr_23815_23867 = state_23771__$1;
(statearr_23815_23867[(2)] = inst_23673);

(statearr_23815_23867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (5))){
var state_23771__$1 = state_23771;
var statearr_23816_23868 = state_23771__$1;
(statearr_23816_23868[(2)] = true);

(statearr_23816_23868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (14))){
var state_23771__$1 = state_23771;
var statearr_23817_23869 = state_23771__$1;
(statearr_23817_23869[(2)] = false);

(statearr_23817_23869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (26))){
var inst_23731 = (state_23771[(11)]);
var inst_23738 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23731);
var state_23771__$1 = state_23771;
var statearr_23818_23870 = state_23771__$1;
(statearr_23818_23870[(2)] = inst_23738);

(statearr_23818_23870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (16))){
var state_23771__$1 = state_23771;
var statearr_23819_23871 = state_23771__$1;
(statearr_23819_23871[(2)] = true);

(statearr_23819_23871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (38))){
var inst_23761 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23820_23872 = state_23771__$1;
(statearr_23820_23872[(2)] = inst_23761);

(statearr_23820_23872[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (30))){
var inst_23722 = (state_23771[(9)]);
var inst_23723 = (state_23771[(13)]);
var inst_23731 = (state_23771[(11)]);
var inst_23748 = cljs.core.empty_QMARK_.call(null,inst_23722);
var inst_23749 = inst_23723.call(null,inst_23731);
var inst_23750 = cljs.core.not.call(null,inst_23749);
var inst_23751 = ((inst_23748) && (inst_23750));
var state_23771__$1 = state_23771;
var statearr_23821_23873 = state_23771__$1;
(statearr_23821_23873[(2)] = inst_23751);

(statearr_23821_23873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (10))){
var inst_23673 = (state_23771[(8)]);
var inst_23694 = (state_23771[(2)]);
var inst_23695 = cljs.core.get.call(null,inst_23694,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23696 = cljs.core.get.call(null,inst_23694,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23697 = cljs.core.get.call(null,inst_23694,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23698 = inst_23673;
var state_23771__$1 = (function (){var statearr_23822 = state_23771;
(statearr_23822[(16)] = inst_23696);

(statearr_23822[(17)] = inst_23695);

(statearr_23822[(7)] = inst_23698);

(statearr_23822[(18)] = inst_23697);

return statearr_23822;
})();
var statearr_23823_23874 = state_23771__$1;
(statearr_23823_23874[(2)] = null);

(statearr_23823_23874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (18))){
var inst_23713 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23824_23875 = state_23771__$1;
(statearr_23824_23875[(2)] = inst_23713);

(statearr_23824_23875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (37))){
var state_23771__$1 = state_23771;
var statearr_23825_23876 = state_23771__$1;
(statearr_23825_23876[(2)] = null);

(statearr_23825_23876[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (8))){
var inst_23673 = (state_23771[(8)]);
var inst_23691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23673);
var state_23771__$1 = state_23771;
var statearr_23826_23877 = state_23771__$1;
(statearr_23826_23877[(2)] = inst_23691);

(statearr_23826_23877[(1)] = (10));


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
});})(c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22698__auto__,c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22699__auto__ = null;
var cljs$core$async$mix_$_state_machine__22699__auto____0 = (function (){
var statearr_23827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23827[(0)] = cljs$core$async$mix_$_state_machine__22699__auto__);

(statearr_23827[(1)] = (1));

return statearr_23827;
});
var cljs$core$async$mix_$_state_machine__22699__auto____1 = (function (state_23771){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e23828){if((e23828 instanceof Object)){
var ex__22702__auto__ = e23828;
var statearr_23829_23878 = state_23771;
(statearr_23829_23878[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23879 = state_23771;
state_23771 = G__23879;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22699__auto__ = function(state_23771){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22699__auto____1.call(this,state_23771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22699__auto____0;
cljs$core$async$mix_$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22699__auto____1;
return cljs$core$async$mix_$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22788__auto__ = (function (){var statearr_23830 = f__22787__auto__.call(null);
(statearr_23830[(6)] = c__22786__auto___23831);

return statearr_23830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23881 = arguments.length;
switch (G__23881) {
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
var G__23885 = arguments.length;
switch (G__23885) {
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
return (function (p1__23883_SHARP_){
if(cljs.core.truth_(p1__23883_SHARP_.call(null,topic))){
return p1__23883_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23883_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23886 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23887){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23887 = meta23887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23888,meta23887__$1){
var self__ = this;
var _23888__$1 = this;
return (new cljs.core.async.t_cljs$core$async23886(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23887__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23888){
var self__ = this;
var _23888__$1 = this;
return self__.meta23887;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23887","meta23887",924908240,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23886";

cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23886");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23886.
 */
cljs.core.async.__GT_t_cljs$core$async23886 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23887){
return (new cljs.core.async.t_cljs$core$async23886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23887));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23886(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22786__auto___24006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24006,mults,ensure_mult,p){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24006,mults,ensure_mult,p){
return (function (state_23960){
var state_val_23961 = (state_23960[(1)]);
if((state_val_23961 === (7))){
var inst_23956 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23962_24007 = state_23960__$1;
(statearr_23962_24007[(2)] = inst_23956);

(statearr_23962_24007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (20))){
var state_23960__$1 = state_23960;
var statearr_23963_24008 = state_23960__$1;
(statearr_23963_24008[(2)] = null);

(statearr_23963_24008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (1))){
var state_23960__$1 = state_23960;
var statearr_23964_24009 = state_23960__$1;
(statearr_23964_24009[(2)] = null);

(statearr_23964_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (24))){
var inst_23939 = (state_23960[(7)]);
var inst_23948 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23939);
var state_23960__$1 = state_23960;
var statearr_23965_24010 = state_23960__$1;
(statearr_23965_24010[(2)] = inst_23948);

(statearr_23965_24010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (4))){
var inst_23891 = (state_23960[(8)]);
var inst_23891__$1 = (state_23960[(2)]);
var inst_23892 = (inst_23891__$1 == null);
var state_23960__$1 = (function (){var statearr_23966 = state_23960;
(statearr_23966[(8)] = inst_23891__$1);

return statearr_23966;
})();
if(cljs.core.truth_(inst_23892)){
var statearr_23967_24011 = state_23960__$1;
(statearr_23967_24011[(1)] = (5));

} else {
var statearr_23968_24012 = state_23960__$1;
(statearr_23968_24012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (15))){
var inst_23933 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23969_24013 = state_23960__$1;
(statearr_23969_24013[(2)] = inst_23933);

(statearr_23969_24013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (21))){
var inst_23953 = (state_23960[(2)]);
var state_23960__$1 = (function (){var statearr_23970 = state_23960;
(statearr_23970[(9)] = inst_23953);

return statearr_23970;
})();
var statearr_23971_24014 = state_23960__$1;
(statearr_23971_24014[(2)] = null);

(statearr_23971_24014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (13))){
var inst_23915 = (state_23960[(10)]);
var inst_23917 = cljs.core.chunked_seq_QMARK_.call(null,inst_23915);
var state_23960__$1 = state_23960;
if(inst_23917){
var statearr_23972_24015 = state_23960__$1;
(statearr_23972_24015[(1)] = (16));

} else {
var statearr_23973_24016 = state_23960__$1;
(statearr_23973_24016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (22))){
var inst_23945 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
if(cljs.core.truth_(inst_23945)){
var statearr_23974_24017 = state_23960__$1;
(statearr_23974_24017[(1)] = (23));

} else {
var statearr_23975_24018 = state_23960__$1;
(statearr_23975_24018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (6))){
var inst_23891 = (state_23960[(8)]);
var inst_23941 = (state_23960[(11)]);
var inst_23939 = (state_23960[(7)]);
var inst_23939__$1 = topic_fn.call(null,inst_23891);
var inst_23940 = cljs.core.deref.call(null,mults);
var inst_23941__$1 = cljs.core.get.call(null,inst_23940,inst_23939__$1);
var state_23960__$1 = (function (){var statearr_23976 = state_23960;
(statearr_23976[(11)] = inst_23941__$1);

(statearr_23976[(7)] = inst_23939__$1);

return statearr_23976;
})();
if(cljs.core.truth_(inst_23941__$1)){
var statearr_23977_24019 = state_23960__$1;
(statearr_23977_24019[(1)] = (19));

} else {
var statearr_23978_24020 = state_23960__$1;
(statearr_23978_24020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (25))){
var inst_23950 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23979_24021 = state_23960__$1;
(statearr_23979_24021[(2)] = inst_23950);

(statearr_23979_24021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (17))){
var inst_23915 = (state_23960[(10)]);
var inst_23924 = cljs.core.first.call(null,inst_23915);
var inst_23925 = cljs.core.async.muxch_STAR_.call(null,inst_23924);
var inst_23926 = cljs.core.async.close_BANG_.call(null,inst_23925);
var inst_23927 = cljs.core.next.call(null,inst_23915);
var inst_23901 = inst_23927;
var inst_23902 = null;
var inst_23903 = (0);
var inst_23904 = (0);
var state_23960__$1 = (function (){var statearr_23980 = state_23960;
(statearr_23980[(12)] = inst_23904);

(statearr_23980[(13)] = inst_23903);

(statearr_23980[(14)] = inst_23901);

(statearr_23980[(15)] = inst_23926);

(statearr_23980[(16)] = inst_23902);

return statearr_23980;
})();
var statearr_23981_24022 = state_23960__$1;
(statearr_23981_24022[(2)] = null);

(statearr_23981_24022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (3))){
var inst_23958 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23960__$1,inst_23958);
} else {
if((state_val_23961 === (12))){
var inst_23935 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23982_24023 = state_23960__$1;
(statearr_23982_24023[(2)] = inst_23935);

(statearr_23982_24023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (2))){
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23960__$1,(4),ch);
} else {
if((state_val_23961 === (23))){
var state_23960__$1 = state_23960;
var statearr_23983_24024 = state_23960__$1;
(statearr_23983_24024[(2)] = null);

(statearr_23983_24024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (19))){
var inst_23891 = (state_23960[(8)]);
var inst_23941 = (state_23960[(11)]);
var inst_23943 = cljs.core.async.muxch_STAR_.call(null,inst_23941);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23960__$1,(22),inst_23943,inst_23891);
} else {
if((state_val_23961 === (11))){
var inst_23901 = (state_23960[(14)]);
var inst_23915 = (state_23960[(10)]);
var inst_23915__$1 = cljs.core.seq.call(null,inst_23901);
var state_23960__$1 = (function (){var statearr_23984 = state_23960;
(statearr_23984[(10)] = inst_23915__$1);

return statearr_23984;
})();
if(inst_23915__$1){
var statearr_23985_24025 = state_23960__$1;
(statearr_23985_24025[(1)] = (13));

} else {
var statearr_23986_24026 = state_23960__$1;
(statearr_23986_24026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (9))){
var inst_23937 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23987_24027 = state_23960__$1;
(statearr_23987_24027[(2)] = inst_23937);

(statearr_23987_24027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (5))){
var inst_23898 = cljs.core.deref.call(null,mults);
var inst_23899 = cljs.core.vals.call(null,inst_23898);
var inst_23900 = cljs.core.seq.call(null,inst_23899);
var inst_23901 = inst_23900;
var inst_23902 = null;
var inst_23903 = (0);
var inst_23904 = (0);
var state_23960__$1 = (function (){var statearr_23988 = state_23960;
(statearr_23988[(12)] = inst_23904);

(statearr_23988[(13)] = inst_23903);

(statearr_23988[(14)] = inst_23901);

(statearr_23988[(16)] = inst_23902);

return statearr_23988;
})();
var statearr_23989_24028 = state_23960__$1;
(statearr_23989_24028[(2)] = null);

(statearr_23989_24028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (14))){
var state_23960__$1 = state_23960;
var statearr_23993_24029 = state_23960__$1;
(statearr_23993_24029[(2)] = null);

(statearr_23993_24029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (16))){
var inst_23915 = (state_23960[(10)]);
var inst_23919 = cljs.core.chunk_first.call(null,inst_23915);
var inst_23920 = cljs.core.chunk_rest.call(null,inst_23915);
var inst_23921 = cljs.core.count.call(null,inst_23919);
var inst_23901 = inst_23920;
var inst_23902 = inst_23919;
var inst_23903 = inst_23921;
var inst_23904 = (0);
var state_23960__$1 = (function (){var statearr_23994 = state_23960;
(statearr_23994[(12)] = inst_23904);

(statearr_23994[(13)] = inst_23903);

(statearr_23994[(14)] = inst_23901);

(statearr_23994[(16)] = inst_23902);

return statearr_23994;
})();
var statearr_23995_24030 = state_23960__$1;
(statearr_23995_24030[(2)] = null);

(statearr_23995_24030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (10))){
var inst_23904 = (state_23960[(12)]);
var inst_23903 = (state_23960[(13)]);
var inst_23901 = (state_23960[(14)]);
var inst_23902 = (state_23960[(16)]);
var inst_23909 = cljs.core._nth.call(null,inst_23902,inst_23904);
var inst_23910 = cljs.core.async.muxch_STAR_.call(null,inst_23909);
var inst_23911 = cljs.core.async.close_BANG_.call(null,inst_23910);
var inst_23912 = (inst_23904 + (1));
var tmp23990 = inst_23903;
var tmp23991 = inst_23901;
var tmp23992 = inst_23902;
var inst_23901__$1 = tmp23991;
var inst_23902__$1 = tmp23992;
var inst_23903__$1 = tmp23990;
var inst_23904__$1 = inst_23912;
var state_23960__$1 = (function (){var statearr_23996 = state_23960;
(statearr_23996[(12)] = inst_23904__$1);

(statearr_23996[(13)] = inst_23903__$1);

(statearr_23996[(14)] = inst_23901__$1);

(statearr_23996[(17)] = inst_23911);

(statearr_23996[(16)] = inst_23902__$1);

return statearr_23996;
})();
var statearr_23997_24031 = state_23960__$1;
(statearr_23997_24031[(2)] = null);

(statearr_23997_24031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (18))){
var inst_23930 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23998_24032 = state_23960__$1;
(statearr_23998_24032[(2)] = inst_23930);

(statearr_23998_24032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (8))){
var inst_23904 = (state_23960[(12)]);
var inst_23903 = (state_23960[(13)]);
var inst_23906 = (inst_23904 < inst_23903);
var inst_23907 = inst_23906;
var state_23960__$1 = state_23960;
if(cljs.core.truth_(inst_23907)){
var statearr_23999_24033 = state_23960__$1;
(statearr_23999_24033[(1)] = (10));

} else {
var statearr_24000_24034 = state_23960__$1;
(statearr_24000_24034[(1)] = (11));

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
});})(c__22786__auto___24006,mults,ensure_mult,p))
;
return ((function (switch__22698__auto__,c__22786__auto___24006,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24001[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24001[(1)] = (1));

return statearr_24001;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_23960){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_23960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24002){if((e24002 instanceof Object)){
var ex__22702__auto__ = e24002;
var statearr_24003_24035 = state_23960;
(statearr_24003_24035[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24036 = state_23960;
state_23960 = G__24036;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_23960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_23960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24006,mults,ensure_mult,p))
})();
var state__22788__auto__ = (function (){var statearr_24004 = f__22787__auto__.call(null);
(statearr_24004[(6)] = c__22786__auto___24006);

return statearr_24004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24006,mults,ensure_mult,p))
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
var G__24038 = arguments.length;
switch (G__24038) {
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
var G__24041 = arguments.length;
switch (G__24041) {
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
var G__24044 = arguments.length;
switch (G__24044) {
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
var c__22786__auto___24111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24083){
var state_val_24084 = (state_24083[(1)]);
if((state_val_24084 === (7))){
var state_24083__$1 = state_24083;
var statearr_24085_24112 = state_24083__$1;
(statearr_24085_24112[(2)] = null);

(statearr_24085_24112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (1))){
var state_24083__$1 = state_24083;
var statearr_24086_24113 = state_24083__$1;
(statearr_24086_24113[(2)] = null);

(statearr_24086_24113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (4))){
var inst_24047 = (state_24083[(7)]);
var inst_24049 = (inst_24047 < cnt);
var state_24083__$1 = state_24083;
if(cljs.core.truth_(inst_24049)){
var statearr_24087_24114 = state_24083__$1;
(statearr_24087_24114[(1)] = (6));

} else {
var statearr_24088_24115 = state_24083__$1;
(statearr_24088_24115[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (15))){
var inst_24079 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24089_24116 = state_24083__$1;
(statearr_24089_24116[(2)] = inst_24079);

(statearr_24089_24116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (13))){
var inst_24072 = cljs.core.async.close_BANG_.call(null,out);
var state_24083__$1 = state_24083;
var statearr_24090_24117 = state_24083__$1;
(statearr_24090_24117[(2)] = inst_24072);

(statearr_24090_24117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (6))){
var state_24083__$1 = state_24083;
var statearr_24091_24118 = state_24083__$1;
(statearr_24091_24118[(2)] = null);

(statearr_24091_24118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (3))){
var inst_24081 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24083__$1,inst_24081);
} else {
if((state_val_24084 === (12))){
var inst_24069 = (state_24083[(8)]);
var inst_24069__$1 = (state_24083[(2)]);
var inst_24070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24069__$1);
var state_24083__$1 = (function (){var statearr_24092 = state_24083;
(statearr_24092[(8)] = inst_24069__$1);

return statearr_24092;
})();
if(cljs.core.truth_(inst_24070)){
var statearr_24093_24119 = state_24083__$1;
(statearr_24093_24119[(1)] = (13));

} else {
var statearr_24094_24120 = state_24083__$1;
(statearr_24094_24120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (2))){
var inst_24046 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24047 = (0);
var state_24083__$1 = (function (){var statearr_24095 = state_24083;
(statearr_24095[(9)] = inst_24046);

(statearr_24095[(7)] = inst_24047);

return statearr_24095;
})();
var statearr_24096_24121 = state_24083__$1;
(statearr_24096_24121[(2)] = null);

(statearr_24096_24121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (11))){
var inst_24047 = (state_24083[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24083,(10),Object,null,(9));
var inst_24056 = chs__$1.call(null,inst_24047);
var inst_24057 = done.call(null,inst_24047);
var inst_24058 = cljs.core.async.take_BANG_.call(null,inst_24056,inst_24057);
var state_24083__$1 = state_24083;
var statearr_24097_24122 = state_24083__$1;
(statearr_24097_24122[(2)] = inst_24058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (9))){
var inst_24047 = (state_24083[(7)]);
var inst_24060 = (state_24083[(2)]);
var inst_24061 = (inst_24047 + (1));
var inst_24047__$1 = inst_24061;
var state_24083__$1 = (function (){var statearr_24098 = state_24083;
(statearr_24098[(10)] = inst_24060);

(statearr_24098[(7)] = inst_24047__$1);

return statearr_24098;
})();
var statearr_24099_24123 = state_24083__$1;
(statearr_24099_24123[(2)] = null);

(statearr_24099_24123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (5))){
var inst_24067 = (state_24083[(2)]);
var state_24083__$1 = (function (){var statearr_24100 = state_24083;
(statearr_24100[(11)] = inst_24067);

return statearr_24100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24083__$1,(12),dchan);
} else {
if((state_val_24084 === (14))){
var inst_24069 = (state_24083[(8)]);
var inst_24074 = cljs.core.apply.call(null,f,inst_24069);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24083__$1,(16),out,inst_24074);
} else {
if((state_val_24084 === (16))){
var inst_24076 = (state_24083[(2)]);
var state_24083__$1 = (function (){var statearr_24101 = state_24083;
(statearr_24101[(12)] = inst_24076);

return statearr_24101;
})();
var statearr_24102_24124 = state_24083__$1;
(statearr_24102_24124[(2)] = null);

(statearr_24102_24124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (10))){
var inst_24051 = (state_24083[(2)]);
var inst_24052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24083__$1 = (function (){var statearr_24103 = state_24083;
(statearr_24103[(13)] = inst_24051);

return statearr_24103;
})();
var statearr_24104_24125 = state_24083__$1;
(statearr_24104_24125[(2)] = inst_24052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (8))){
var inst_24065 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24105_24126 = state_24083__$1;
(statearr_24105_24126[(2)] = inst_24065);

(statearr_24105_24126[(1)] = (5));


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
});})(c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22698__auto__,c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24106[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24106[(1)] = (1));

return statearr_24106;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24083){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24107){if((e24107 instanceof Object)){
var ex__22702__auto__ = e24107;
var statearr_24108_24127 = state_24083;
(statearr_24108_24127[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24128 = state_24083;
state_24083 = G__24128;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22788__auto__ = (function (){var statearr_24109 = f__22787__auto__.call(null);
(statearr_24109[(6)] = c__22786__auto___24111);

return statearr_24109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24111,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24131 = arguments.length;
switch (G__24131) {
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
var c__22786__auto___24185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24185,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24185,out){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24142 = (state_24163[(7)]);
var inst_24143 = (state_24163[(8)]);
var inst_24142__$1 = (state_24163[(2)]);
var inst_24143__$1 = cljs.core.nth.call(null,inst_24142__$1,(0),null);
var inst_24144 = cljs.core.nth.call(null,inst_24142__$1,(1),null);
var inst_24145 = (inst_24143__$1 == null);
var state_24163__$1 = (function (){var statearr_24165 = state_24163;
(statearr_24165[(7)] = inst_24142__$1);

(statearr_24165[(9)] = inst_24144);

(statearr_24165[(8)] = inst_24143__$1);

return statearr_24165;
})();
if(cljs.core.truth_(inst_24145)){
var statearr_24166_24186 = state_24163__$1;
(statearr_24166_24186[(1)] = (8));

} else {
var statearr_24167_24187 = state_24163__$1;
(statearr_24167_24187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (1))){
var inst_24132 = cljs.core.vec.call(null,chs);
var inst_24133 = inst_24132;
var state_24163__$1 = (function (){var statearr_24168 = state_24163;
(statearr_24168[(10)] = inst_24133);

return statearr_24168;
})();
var statearr_24169_24188 = state_24163__$1;
(statearr_24169_24188[(2)] = null);

(statearr_24169_24188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (4))){
var inst_24133 = (state_24163[(10)]);
var state_24163__$1 = state_24163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24163__$1,(7),inst_24133);
} else {
if((state_val_24164 === (6))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24170_24189 = state_24163__$1;
(statearr_24170_24189[(2)] = inst_24159);

(statearr_24170_24189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (2))){
var inst_24133 = (state_24163[(10)]);
var inst_24135 = cljs.core.count.call(null,inst_24133);
var inst_24136 = (inst_24135 > (0));
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24136)){
var statearr_24172_24190 = state_24163__$1;
(statearr_24172_24190[(1)] = (4));

} else {
var statearr_24173_24191 = state_24163__$1;
(statearr_24173_24191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (11))){
var inst_24133 = (state_24163[(10)]);
var inst_24152 = (state_24163[(2)]);
var tmp24171 = inst_24133;
var inst_24133__$1 = tmp24171;
var state_24163__$1 = (function (){var statearr_24174 = state_24163;
(statearr_24174[(10)] = inst_24133__$1);

(statearr_24174[(11)] = inst_24152);

return statearr_24174;
})();
var statearr_24175_24192 = state_24163__$1;
(statearr_24175_24192[(2)] = null);

(statearr_24175_24192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (9))){
var inst_24143 = (state_24163[(8)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,(11),out,inst_24143);
} else {
if((state_val_24164 === (5))){
var inst_24157 = cljs.core.async.close_BANG_.call(null,out);
var state_24163__$1 = state_24163;
var statearr_24176_24193 = state_24163__$1;
(statearr_24176_24193[(2)] = inst_24157);

(statearr_24176_24193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (10))){
var inst_24155 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24177_24194 = state_24163__$1;
(statearr_24177_24194[(2)] = inst_24155);

(statearr_24177_24194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (8))){
var inst_24133 = (state_24163[(10)]);
var inst_24142 = (state_24163[(7)]);
var inst_24144 = (state_24163[(9)]);
var inst_24143 = (state_24163[(8)]);
var inst_24147 = (function (){var cs = inst_24133;
var vec__24138 = inst_24142;
var v = inst_24143;
var c = inst_24144;
return ((function (cs,vec__24138,v,c,inst_24133,inst_24142,inst_24144,inst_24143,state_val_24164,c__22786__auto___24185,out){
return (function (p1__24129_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24129_SHARP_);
});
;})(cs,vec__24138,v,c,inst_24133,inst_24142,inst_24144,inst_24143,state_val_24164,c__22786__auto___24185,out))
})();
var inst_24148 = cljs.core.filterv.call(null,inst_24147,inst_24133);
var inst_24133__$1 = inst_24148;
var state_24163__$1 = (function (){var statearr_24178 = state_24163;
(statearr_24178[(10)] = inst_24133__$1);

return statearr_24178;
})();
var statearr_24179_24195 = state_24163__$1;
(statearr_24179_24195[(2)] = null);

(statearr_24179_24195[(1)] = (2));


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
});})(c__22786__auto___24185,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24185,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24180[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24180[(1)] = (1));

return statearr_24180;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24163){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24181){if((e24181 instanceof Object)){
var ex__22702__auto__ = e24181;
var statearr_24182_24196 = state_24163;
(statearr_24182_24196[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24197 = state_24163;
state_24163 = G__24197;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24185,out))
})();
var state__22788__auto__ = (function (){var statearr_24183 = f__22787__auto__.call(null);
(statearr_24183[(6)] = c__22786__auto___24185);

return statearr_24183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24185,out))
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
var G__24199 = arguments.length;
switch (G__24199) {
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
var c__22786__auto___24244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24244,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24244,out){
return (function (state_24223){
var state_val_24224 = (state_24223[(1)]);
if((state_val_24224 === (7))){
var inst_24205 = (state_24223[(7)]);
var inst_24205__$1 = (state_24223[(2)]);
var inst_24206 = (inst_24205__$1 == null);
var inst_24207 = cljs.core.not.call(null,inst_24206);
var state_24223__$1 = (function (){var statearr_24225 = state_24223;
(statearr_24225[(7)] = inst_24205__$1);

return statearr_24225;
})();
if(inst_24207){
var statearr_24226_24245 = state_24223__$1;
(statearr_24226_24245[(1)] = (8));

} else {
var statearr_24227_24246 = state_24223__$1;
(statearr_24227_24246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (1))){
var inst_24200 = (0);
var state_24223__$1 = (function (){var statearr_24228 = state_24223;
(statearr_24228[(8)] = inst_24200);

return statearr_24228;
})();
var statearr_24229_24247 = state_24223__$1;
(statearr_24229_24247[(2)] = null);

(statearr_24229_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (4))){
var state_24223__$1 = state_24223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24223__$1,(7),ch);
} else {
if((state_val_24224 === (6))){
var inst_24218 = (state_24223[(2)]);
var state_24223__$1 = state_24223;
var statearr_24230_24248 = state_24223__$1;
(statearr_24230_24248[(2)] = inst_24218);

(statearr_24230_24248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (3))){
var inst_24220 = (state_24223[(2)]);
var inst_24221 = cljs.core.async.close_BANG_.call(null,out);
var state_24223__$1 = (function (){var statearr_24231 = state_24223;
(statearr_24231[(9)] = inst_24220);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24223__$1,inst_24221);
} else {
if((state_val_24224 === (2))){
var inst_24200 = (state_24223[(8)]);
var inst_24202 = (inst_24200 < n);
var state_24223__$1 = state_24223;
if(cljs.core.truth_(inst_24202)){
var statearr_24232_24249 = state_24223__$1;
(statearr_24232_24249[(1)] = (4));

} else {
var statearr_24233_24250 = state_24223__$1;
(statearr_24233_24250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (11))){
var inst_24200 = (state_24223[(8)]);
var inst_24210 = (state_24223[(2)]);
var inst_24211 = (inst_24200 + (1));
var inst_24200__$1 = inst_24211;
var state_24223__$1 = (function (){var statearr_24234 = state_24223;
(statearr_24234[(8)] = inst_24200__$1);

(statearr_24234[(10)] = inst_24210);

return statearr_24234;
})();
var statearr_24235_24251 = state_24223__$1;
(statearr_24235_24251[(2)] = null);

(statearr_24235_24251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (9))){
var state_24223__$1 = state_24223;
var statearr_24236_24252 = state_24223__$1;
(statearr_24236_24252[(2)] = null);

(statearr_24236_24252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (5))){
var state_24223__$1 = state_24223;
var statearr_24237_24253 = state_24223__$1;
(statearr_24237_24253[(2)] = null);

(statearr_24237_24253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (10))){
var inst_24215 = (state_24223[(2)]);
var state_24223__$1 = state_24223;
var statearr_24238_24254 = state_24223__$1;
(statearr_24238_24254[(2)] = inst_24215);

(statearr_24238_24254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24224 === (8))){
var inst_24205 = (state_24223[(7)]);
var state_24223__$1 = state_24223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24223__$1,(11),out,inst_24205);
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
});})(c__22786__auto___24244,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24244,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24239[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24239[(1)] = (1));

return statearr_24239;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24223){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object)){
var ex__22702__auto__ = e24240;
var statearr_24241_24255 = state_24223;
(statearr_24241_24255[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24256 = state_24223;
state_24223 = G__24256;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24244,out))
})();
var state__22788__auto__ = (function (){var statearr_24242 = f__22787__auto__.call(null);
(statearr_24242[(6)] = c__22786__auto___24244);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24244,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24258 = (function (f,ch,meta24259){
this.f = f;
this.ch = ch;
this.meta24259 = meta24259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24260,meta24259__$1){
var self__ = this;
var _24260__$1 = this;
return (new cljs.core.async.t_cljs$core$async24258(self__.f,self__.ch,meta24259__$1));
});

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24260){
var self__ = this;
var _24260__$1 = this;
return self__.meta24259;
});

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24261 = (function (f,ch,meta24259,_,fn1,meta24262){
this.f = f;
this.ch = ch;
this.meta24259 = meta24259;
this._ = _;
this.fn1 = fn1;
this.meta24262 = meta24262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24263,meta24262__$1){
var self__ = this;
var _24263__$1 = this;
return (new cljs.core.async.t_cljs$core$async24261(self__.f,self__.ch,self__.meta24259,self__._,self__.fn1,meta24262__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24263){
var self__ = this;
var _24263__$1 = this;
return self__.meta24262;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24257_SHARP_){
return f1.call(null,(((p1__24257_SHARP_ == null))?null:self__.f.call(null,p1__24257_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24259","meta24259",715859385,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24258","cljs.core.async/t_cljs$core$async24258",1896845718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24262","meta24262",-410192903,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24261";

cljs.core.async.t_cljs$core$async24261.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24261");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24261.
 */
cljs.core.async.__GT_t_cljs$core$async24261 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24261(f__$1,ch__$1,meta24259__$1,___$2,fn1__$1,meta24262){
return (new cljs.core.async.t_cljs$core$async24261(f__$1,ch__$1,meta24259__$1,___$2,fn1__$1,meta24262));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24261(self__.f,self__.ch,self__.meta24259,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24259","meta24259",715859385,null)], null);
});

cljs.core.async.t_cljs$core$async24258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24258";

cljs.core.async.t_cljs$core$async24258.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24258");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24258.
 */
cljs.core.async.__GT_t_cljs$core$async24258 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24258(f__$1,ch__$1,meta24259){
return (new cljs.core.async.t_cljs$core$async24258(f__$1,ch__$1,meta24259));
});

}

return (new cljs.core.async.t_cljs$core$async24258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24264 = (function (f,ch,meta24265){
this.f = f;
this.ch = ch;
this.meta24265 = meta24265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24266,meta24265__$1){
var self__ = this;
var _24266__$1 = this;
return (new cljs.core.async.t_cljs$core$async24264(self__.f,self__.ch,meta24265__$1));
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24266){
var self__ = this;
var _24266__$1 = this;
return self__.meta24265;
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24265","meta24265",-1183652233,null)], null);
});

cljs.core.async.t_cljs$core$async24264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24264";

cljs.core.async.t_cljs$core$async24264.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24264");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24264.
 */
cljs.core.async.__GT_t_cljs$core$async24264 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24264(f__$1,ch__$1,meta24265){
return (new cljs.core.async.t_cljs$core$async24264(f__$1,ch__$1,meta24265));
});

}

return (new cljs.core.async.t_cljs$core$async24264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24267 = (function (p,ch,meta24268){
this.p = p;
this.ch = ch;
this.meta24268 = meta24268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24269,meta24268__$1){
var self__ = this;
var _24269__$1 = this;
return (new cljs.core.async.t_cljs$core$async24267(self__.p,self__.ch,meta24268__$1));
});

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24269){
var self__ = this;
var _24269__$1 = this;
return self__.meta24268;
});

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24268","meta24268",154856821,null)], null);
});

cljs.core.async.t_cljs$core$async24267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24267";

cljs.core.async.t_cljs$core$async24267.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24267");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24267.
 */
cljs.core.async.__GT_t_cljs$core$async24267 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24267(p__$1,ch__$1,meta24268){
return (new cljs.core.async.t_cljs$core$async24267(p__$1,ch__$1,meta24268));
});

}

return (new cljs.core.async.t_cljs$core$async24267(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24271 = arguments.length;
switch (G__24271) {
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
var c__22786__auto___24311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24311,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24311,out){
return (function (state_24292){
var state_val_24293 = (state_24292[(1)]);
if((state_val_24293 === (7))){
var inst_24288 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24294_24312 = state_24292__$1;
(statearr_24294_24312[(2)] = inst_24288);

(statearr_24294_24312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (1))){
var state_24292__$1 = state_24292;
var statearr_24295_24313 = state_24292__$1;
(statearr_24295_24313[(2)] = null);

(statearr_24295_24313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (4))){
var inst_24274 = (state_24292[(7)]);
var inst_24274__$1 = (state_24292[(2)]);
var inst_24275 = (inst_24274__$1 == null);
var state_24292__$1 = (function (){var statearr_24296 = state_24292;
(statearr_24296[(7)] = inst_24274__$1);

return statearr_24296;
})();
if(cljs.core.truth_(inst_24275)){
var statearr_24297_24314 = state_24292__$1;
(statearr_24297_24314[(1)] = (5));

} else {
var statearr_24298_24315 = state_24292__$1;
(statearr_24298_24315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (6))){
var inst_24274 = (state_24292[(7)]);
var inst_24279 = p.call(null,inst_24274);
var state_24292__$1 = state_24292;
if(cljs.core.truth_(inst_24279)){
var statearr_24299_24316 = state_24292__$1;
(statearr_24299_24316[(1)] = (8));

} else {
var statearr_24300_24317 = state_24292__$1;
(statearr_24300_24317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (3))){
var inst_24290 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24292__$1,inst_24290);
} else {
if((state_val_24293 === (2))){
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24292__$1,(4),ch);
} else {
if((state_val_24293 === (11))){
var inst_24282 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24301_24318 = state_24292__$1;
(statearr_24301_24318[(2)] = inst_24282);

(statearr_24301_24318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (9))){
var state_24292__$1 = state_24292;
var statearr_24302_24319 = state_24292__$1;
(statearr_24302_24319[(2)] = null);

(statearr_24302_24319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (5))){
var inst_24277 = cljs.core.async.close_BANG_.call(null,out);
var state_24292__$1 = state_24292;
var statearr_24303_24320 = state_24292__$1;
(statearr_24303_24320[(2)] = inst_24277);

(statearr_24303_24320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (10))){
var inst_24285 = (state_24292[(2)]);
var state_24292__$1 = (function (){var statearr_24304 = state_24292;
(statearr_24304[(8)] = inst_24285);

return statearr_24304;
})();
var statearr_24305_24321 = state_24292__$1;
(statearr_24305_24321[(2)] = null);

(statearr_24305_24321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (8))){
var inst_24274 = (state_24292[(7)]);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24292__$1,(11),out,inst_24274);
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
});})(c__22786__auto___24311,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24311,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24306 = [null,null,null,null,null,null,null,null,null];
(statearr_24306[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24306[(1)] = (1));

return statearr_24306;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24292){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24307){if((e24307 instanceof Object)){
var ex__22702__auto__ = e24307;
var statearr_24308_24322 = state_24292;
(statearr_24308_24322[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24323 = state_24292;
state_24292 = G__24323;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24311,out))
})();
var state__22788__auto__ = (function (){var statearr_24309 = f__22787__auto__.call(null);
(statearr_24309[(6)] = c__22786__auto___24311);

return statearr_24309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24311,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24325 = arguments.length;
switch (G__24325) {
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto__){
return (function (state_24388){
var state_val_24389 = (state_24388[(1)]);
if((state_val_24389 === (7))){
var inst_24384 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24390_24428 = state_24388__$1;
(statearr_24390_24428[(2)] = inst_24384);

(statearr_24390_24428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (20))){
var inst_24354 = (state_24388[(7)]);
var inst_24365 = (state_24388[(2)]);
var inst_24366 = cljs.core.next.call(null,inst_24354);
var inst_24340 = inst_24366;
var inst_24341 = null;
var inst_24342 = (0);
var inst_24343 = (0);
var state_24388__$1 = (function (){var statearr_24391 = state_24388;
(statearr_24391[(8)] = inst_24343);

(statearr_24391[(9)] = inst_24341);

(statearr_24391[(10)] = inst_24365);

(statearr_24391[(11)] = inst_24342);

(statearr_24391[(12)] = inst_24340);

return statearr_24391;
})();
var statearr_24392_24429 = state_24388__$1;
(statearr_24392_24429[(2)] = null);

(statearr_24392_24429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (1))){
var state_24388__$1 = state_24388;
var statearr_24393_24430 = state_24388__$1;
(statearr_24393_24430[(2)] = null);

(statearr_24393_24430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (4))){
var inst_24329 = (state_24388[(13)]);
var inst_24329__$1 = (state_24388[(2)]);
var inst_24330 = (inst_24329__$1 == null);
var state_24388__$1 = (function (){var statearr_24394 = state_24388;
(statearr_24394[(13)] = inst_24329__$1);

return statearr_24394;
})();
if(cljs.core.truth_(inst_24330)){
var statearr_24395_24431 = state_24388__$1;
(statearr_24395_24431[(1)] = (5));

} else {
var statearr_24396_24432 = state_24388__$1;
(statearr_24396_24432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (15))){
var state_24388__$1 = state_24388;
var statearr_24400_24433 = state_24388__$1;
(statearr_24400_24433[(2)] = null);

(statearr_24400_24433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (21))){
var state_24388__$1 = state_24388;
var statearr_24401_24434 = state_24388__$1;
(statearr_24401_24434[(2)] = null);

(statearr_24401_24434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (13))){
var inst_24343 = (state_24388[(8)]);
var inst_24341 = (state_24388[(9)]);
var inst_24342 = (state_24388[(11)]);
var inst_24340 = (state_24388[(12)]);
var inst_24350 = (state_24388[(2)]);
var inst_24351 = (inst_24343 + (1));
var tmp24397 = inst_24341;
var tmp24398 = inst_24342;
var tmp24399 = inst_24340;
var inst_24340__$1 = tmp24399;
var inst_24341__$1 = tmp24397;
var inst_24342__$1 = tmp24398;
var inst_24343__$1 = inst_24351;
var state_24388__$1 = (function (){var statearr_24402 = state_24388;
(statearr_24402[(8)] = inst_24343__$1);

(statearr_24402[(9)] = inst_24341__$1);

(statearr_24402[(14)] = inst_24350);

(statearr_24402[(11)] = inst_24342__$1);

(statearr_24402[(12)] = inst_24340__$1);

return statearr_24402;
})();
var statearr_24403_24435 = state_24388__$1;
(statearr_24403_24435[(2)] = null);

(statearr_24403_24435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (22))){
var state_24388__$1 = state_24388;
var statearr_24404_24436 = state_24388__$1;
(statearr_24404_24436[(2)] = null);

(statearr_24404_24436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (6))){
var inst_24329 = (state_24388[(13)]);
var inst_24338 = f.call(null,inst_24329);
var inst_24339 = cljs.core.seq.call(null,inst_24338);
var inst_24340 = inst_24339;
var inst_24341 = null;
var inst_24342 = (0);
var inst_24343 = (0);
var state_24388__$1 = (function (){var statearr_24405 = state_24388;
(statearr_24405[(8)] = inst_24343);

(statearr_24405[(9)] = inst_24341);

(statearr_24405[(11)] = inst_24342);

(statearr_24405[(12)] = inst_24340);

return statearr_24405;
})();
var statearr_24406_24437 = state_24388__$1;
(statearr_24406_24437[(2)] = null);

(statearr_24406_24437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (17))){
var inst_24354 = (state_24388[(7)]);
var inst_24358 = cljs.core.chunk_first.call(null,inst_24354);
var inst_24359 = cljs.core.chunk_rest.call(null,inst_24354);
var inst_24360 = cljs.core.count.call(null,inst_24358);
var inst_24340 = inst_24359;
var inst_24341 = inst_24358;
var inst_24342 = inst_24360;
var inst_24343 = (0);
var state_24388__$1 = (function (){var statearr_24407 = state_24388;
(statearr_24407[(8)] = inst_24343);

(statearr_24407[(9)] = inst_24341);

(statearr_24407[(11)] = inst_24342);

(statearr_24407[(12)] = inst_24340);

return statearr_24407;
})();
var statearr_24408_24438 = state_24388__$1;
(statearr_24408_24438[(2)] = null);

(statearr_24408_24438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (3))){
var inst_24386 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24388__$1,inst_24386);
} else {
if((state_val_24389 === (12))){
var inst_24374 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24409_24439 = state_24388__$1;
(statearr_24409_24439[(2)] = inst_24374);

(statearr_24409_24439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (2))){
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24388__$1,(4),in$);
} else {
if((state_val_24389 === (23))){
var inst_24382 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24410_24440 = state_24388__$1;
(statearr_24410_24440[(2)] = inst_24382);

(statearr_24410_24440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (19))){
var inst_24369 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24411_24441 = state_24388__$1;
(statearr_24411_24441[(2)] = inst_24369);

(statearr_24411_24441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (11))){
var inst_24354 = (state_24388[(7)]);
var inst_24340 = (state_24388[(12)]);
var inst_24354__$1 = cljs.core.seq.call(null,inst_24340);
var state_24388__$1 = (function (){var statearr_24412 = state_24388;
(statearr_24412[(7)] = inst_24354__$1);

return statearr_24412;
})();
if(inst_24354__$1){
var statearr_24413_24442 = state_24388__$1;
(statearr_24413_24442[(1)] = (14));

} else {
var statearr_24414_24443 = state_24388__$1;
(statearr_24414_24443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (9))){
var inst_24376 = (state_24388[(2)]);
var inst_24377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24388__$1 = (function (){var statearr_24415 = state_24388;
(statearr_24415[(15)] = inst_24376);

return statearr_24415;
})();
if(cljs.core.truth_(inst_24377)){
var statearr_24416_24444 = state_24388__$1;
(statearr_24416_24444[(1)] = (21));

} else {
var statearr_24417_24445 = state_24388__$1;
(statearr_24417_24445[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (5))){
var inst_24332 = cljs.core.async.close_BANG_.call(null,out);
var state_24388__$1 = state_24388;
var statearr_24418_24446 = state_24388__$1;
(statearr_24418_24446[(2)] = inst_24332);

(statearr_24418_24446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (14))){
var inst_24354 = (state_24388[(7)]);
var inst_24356 = cljs.core.chunked_seq_QMARK_.call(null,inst_24354);
var state_24388__$1 = state_24388;
if(inst_24356){
var statearr_24419_24447 = state_24388__$1;
(statearr_24419_24447[(1)] = (17));

} else {
var statearr_24420_24448 = state_24388__$1;
(statearr_24420_24448[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (16))){
var inst_24372 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24421_24449 = state_24388__$1;
(statearr_24421_24449[(2)] = inst_24372);

(statearr_24421_24449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (10))){
var inst_24343 = (state_24388[(8)]);
var inst_24341 = (state_24388[(9)]);
var inst_24348 = cljs.core._nth.call(null,inst_24341,inst_24343);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24388__$1,(13),out,inst_24348);
} else {
if((state_val_24389 === (18))){
var inst_24354 = (state_24388[(7)]);
var inst_24363 = cljs.core.first.call(null,inst_24354);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24388__$1,(20),out,inst_24363);
} else {
if((state_val_24389 === (8))){
var inst_24343 = (state_24388[(8)]);
var inst_24342 = (state_24388[(11)]);
var inst_24345 = (inst_24343 < inst_24342);
var inst_24346 = inst_24345;
var state_24388__$1 = state_24388;
if(cljs.core.truth_(inst_24346)){
var statearr_24422_24450 = state_24388__$1;
(statearr_24422_24450[(1)] = (10));

} else {
var statearr_24423_24451 = state_24388__$1;
(statearr_24423_24451[(1)] = (11));

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
});})(c__22786__auto__))
;
return ((function (switch__22698__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____0 = (function (){
var statearr_24424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24424[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__);

(statearr_24424[(1)] = (1));

return statearr_24424;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____1 = (function (state_24388){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24425){if((e24425 instanceof Object)){
var ex__22702__auto__ = e24425;
var statearr_24426_24452 = state_24388;
(statearr_24426_24452[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24453 = state_24388;
state_24388 = G__24453;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__ = function(state_24388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____1.call(this,state_24388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22699__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_24427 = f__22787__auto__.call(null);
(statearr_24427[(6)] = c__22786__auto__);

return statearr_24427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24455 = arguments.length;
switch (G__24455) {
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
var G__24458 = arguments.length;
switch (G__24458) {
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
var G__24461 = arguments.length;
switch (G__24461) {
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
var c__22786__auto___24508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24508,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24508,out){
return (function (state_24485){
var state_val_24486 = (state_24485[(1)]);
if((state_val_24486 === (7))){
var inst_24480 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24487_24509 = state_24485__$1;
(statearr_24487_24509[(2)] = inst_24480);

(statearr_24487_24509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (1))){
var inst_24462 = null;
var state_24485__$1 = (function (){var statearr_24488 = state_24485;
(statearr_24488[(7)] = inst_24462);

return statearr_24488;
})();
var statearr_24489_24510 = state_24485__$1;
(statearr_24489_24510[(2)] = null);

(statearr_24489_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (4))){
var inst_24465 = (state_24485[(8)]);
var inst_24465__$1 = (state_24485[(2)]);
var inst_24466 = (inst_24465__$1 == null);
var inst_24467 = cljs.core.not.call(null,inst_24466);
var state_24485__$1 = (function (){var statearr_24490 = state_24485;
(statearr_24490[(8)] = inst_24465__$1);

return statearr_24490;
})();
if(inst_24467){
var statearr_24491_24511 = state_24485__$1;
(statearr_24491_24511[(1)] = (5));

} else {
var statearr_24492_24512 = state_24485__$1;
(statearr_24492_24512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (6))){
var state_24485__$1 = state_24485;
var statearr_24493_24513 = state_24485__$1;
(statearr_24493_24513[(2)] = null);

(statearr_24493_24513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (3))){
var inst_24482 = (state_24485[(2)]);
var inst_24483 = cljs.core.async.close_BANG_.call(null,out);
var state_24485__$1 = (function (){var statearr_24494 = state_24485;
(statearr_24494[(9)] = inst_24482);

return statearr_24494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24485__$1,inst_24483);
} else {
if((state_val_24486 === (2))){
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24485__$1,(4),ch);
} else {
if((state_val_24486 === (11))){
var inst_24465 = (state_24485[(8)]);
var inst_24474 = (state_24485[(2)]);
var inst_24462 = inst_24465;
var state_24485__$1 = (function (){var statearr_24495 = state_24485;
(statearr_24495[(10)] = inst_24474);

(statearr_24495[(7)] = inst_24462);

return statearr_24495;
})();
var statearr_24496_24514 = state_24485__$1;
(statearr_24496_24514[(2)] = null);

(statearr_24496_24514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (9))){
var inst_24465 = (state_24485[(8)]);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24485__$1,(11),out,inst_24465);
} else {
if((state_val_24486 === (5))){
var inst_24462 = (state_24485[(7)]);
var inst_24465 = (state_24485[(8)]);
var inst_24469 = cljs.core._EQ_.call(null,inst_24465,inst_24462);
var state_24485__$1 = state_24485;
if(inst_24469){
var statearr_24498_24515 = state_24485__$1;
(statearr_24498_24515[(1)] = (8));

} else {
var statearr_24499_24516 = state_24485__$1;
(statearr_24499_24516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (10))){
var inst_24477 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24500_24517 = state_24485__$1;
(statearr_24500_24517[(2)] = inst_24477);

(statearr_24500_24517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (8))){
var inst_24462 = (state_24485[(7)]);
var tmp24497 = inst_24462;
var inst_24462__$1 = tmp24497;
var state_24485__$1 = (function (){var statearr_24501 = state_24485;
(statearr_24501[(7)] = inst_24462__$1);

return statearr_24501;
})();
var statearr_24502_24518 = state_24485__$1;
(statearr_24502_24518[(2)] = null);

(statearr_24502_24518[(1)] = (2));


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
});})(c__22786__auto___24508,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24508,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24503[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24503[(1)] = (1));

return statearr_24503;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24485){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24504){if((e24504 instanceof Object)){
var ex__22702__auto__ = e24504;
var statearr_24505_24519 = state_24485;
(statearr_24505_24519[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24485;
state_24485 = G__24520;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24508,out))
})();
var state__22788__auto__ = (function (){var statearr_24506 = f__22787__auto__.call(null);
(statearr_24506[(6)] = c__22786__auto___24508);

return statearr_24506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24508,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24522 = arguments.length;
switch (G__24522) {
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
var c__22786__auto___24588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24588,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24588,out){
return (function (state_24560){
var state_val_24561 = (state_24560[(1)]);
if((state_val_24561 === (7))){
var inst_24556 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24562_24589 = state_24560__$1;
(statearr_24562_24589[(2)] = inst_24556);

(statearr_24562_24589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (1))){
var inst_24523 = (new Array(n));
var inst_24524 = inst_24523;
var inst_24525 = (0);
var state_24560__$1 = (function (){var statearr_24563 = state_24560;
(statearr_24563[(7)] = inst_24524);

(statearr_24563[(8)] = inst_24525);

return statearr_24563;
})();
var statearr_24564_24590 = state_24560__$1;
(statearr_24564_24590[(2)] = null);

(statearr_24564_24590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (4))){
var inst_24528 = (state_24560[(9)]);
var inst_24528__$1 = (state_24560[(2)]);
var inst_24529 = (inst_24528__$1 == null);
var inst_24530 = cljs.core.not.call(null,inst_24529);
var state_24560__$1 = (function (){var statearr_24565 = state_24560;
(statearr_24565[(9)] = inst_24528__$1);

return statearr_24565;
})();
if(inst_24530){
var statearr_24566_24591 = state_24560__$1;
(statearr_24566_24591[(1)] = (5));

} else {
var statearr_24567_24592 = state_24560__$1;
(statearr_24567_24592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (15))){
var inst_24550 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24568_24593 = state_24560__$1;
(statearr_24568_24593[(2)] = inst_24550);

(statearr_24568_24593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (13))){
var state_24560__$1 = state_24560;
var statearr_24569_24594 = state_24560__$1;
(statearr_24569_24594[(2)] = null);

(statearr_24569_24594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (6))){
var inst_24525 = (state_24560[(8)]);
var inst_24546 = (inst_24525 > (0));
var state_24560__$1 = state_24560;
if(cljs.core.truth_(inst_24546)){
var statearr_24570_24595 = state_24560__$1;
(statearr_24570_24595[(1)] = (12));

} else {
var statearr_24571_24596 = state_24560__$1;
(statearr_24571_24596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (3))){
var inst_24558 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24560__$1,inst_24558);
} else {
if((state_val_24561 === (12))){
var inst_24524 = (state_24560[(7)]);
var inst_24548 = cljs.core.vec.call(null,inst_24524);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24560__$1,(15),out,inst_24548);
} else {
if((state_val_24561 === (2))){
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24560__$1,(4),ch);
} else {
if((state_val_24561 === (11))){
var inst_24540 = (state_24560[(2)]);
var inst_24541 = (new Array(n));
var inst_24524 = inst_24541;
var inst_24525 = (0);
var state_24560__$1 = (function (){var statearr_24572 = state_24560;
(statearr_24572[(7)] = inst_24524);

(statearr_24572[(8)] = inst_24525);

(statearr_24572[(10)] = inst_24540);

return statearr_24572;
})();
var statearr_24573_24597 = state_24560__$1;
(statearr_24573_24597[(2)] = null);

(statearr_24573_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (9))){
var inst_24524 = (state_24560[(7)]);
var inst_24538 = cljs.core.vec.call(null,inst_24524);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24560__$1,(11),out,inst_24538);
} else {
if((state_val_24561 === (5))){
var inst_24528 = (state_24560[(9)]);
var inst_24524 = (state_24560[(7)]);
var inst_24525 = (state_24560[(8)]);
var inst_24533 = (state_24560[(11)]);
var inst_24532 = (inst_24524[inst_24525] = inst_24528);
var inst_24533__$1 = (inst_24525 + (1));
var inst_24534 = (inst_24533__$1 < n);
var state_24560__$1 = (function (){var statearr_24574 = state_24560;
(statearr_24574[(12)] = inst_24532);

(statearr_24574[(11)] = inst_24533__$1);

return statearr_24574;
})();
if(cljs.core.truth_(inst_24534)){
var statearr_24575_24598 = state_24560__$1;
(statearr_24575_24598[(1)] = (8));

} else {
var statearr_24576_24599 = state_24560__$1;
(statearr_24576_24599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (14))){
var inst_24553 = (state_24560[(2)]);
var inst_24554 = cljs.core.async.close_BANG_.call(null,out);
var state_24560__$1 = (function (){var statearr_24578 = state_24560;
(statearr_24578[(13)] = inst_24553);

return statearr_24578;
})();
var statearr_24579_24600 = state_24560__$1;
(statearr_24579_24600[(2)] = inst_24554);

(statearr_24579_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (10))){
var inst_24544 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24580_24601 = state_24560__$1;
(statearr_24580_24601[(2)] = inst_24544);

(statearr_24580_24601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (8))){
var inst_24524 = (state_24560[(7)]);
var inst_24533 = (state_24560[(11)]);
var tmp24577 = inst_24524;
var inst_24524__$1 = tmp24577;
var inst_24525 = inst_24533;
var state_24560__$1 = (function (){var statearr_24581 = state_24560;
(statearr_24581[(7)] = inst_24524__$1);

(statearr_24581[(8)] = inst_24525);

return statearr_24581;
})();
var statearr_24582_24602 = state_24560__$1;
(statearr_24582_24602[(2)] = null);

(statearr_24582_24602[(1)] = (2));


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
});})(c__22786__auto___24588,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24588,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24583[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24560){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24584){if((e24584 instanceof Object)){
var ex__22702__auto__ = e24584;
var statearr_24585_24603 = state_24560;
(statearr_24585_24603[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24604 = state_24560;
state_24560 = G__24604;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24588,out))
})();
var state__22788__auto__ = (function (){var statearr_24586 = f__22787__auto__.call(null);
(statearr_24586[(6)] = c__22786__auto___24588);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24588,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24606 = arguments.length;
switch (G__24606) {
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
var c__22786__auto___24676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24676,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22698__auto__ = ((function (c__22786__auto___24676,out){
return (function (state_24648){
var state_val_24649 = (state_24648[(1)]);
if((state_val_24649 === (7))){
var inst_24644 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24650_24677 = state_24648__$1;
(statearr_24650_24677[(2)] = inst_24644);

(statearr_24650_24677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (1))){
var inst_24607 = [];
var inst_24608 = inst_24607;
var inst_24609 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24648__$1 = (function (){var statearr_24651 = state_24648;
(statearr_24651[(7)] = inst_24609);

(statearr_24651[(8)] = inst_24608);

return statearr_24651;
})();
var statearr_24652_24678 = state_24648__$1;
(statearr_24652_24678[(2)] = null);

(statearr_24652_24678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (4))){
var inst_24612 = (state_24648[(9)]);
var inst_24612__$1 = (state_24648[(2)]);
var inst_24613 = (inst_24612__$1 == null);
var inst_24614 = cljs.core.not.call(null,inst_24613);
var state_24648__$1 = (function (){var statearr_24653 = state_24648;
(statearr_24653[(9)] = inst_24612__$1);

return statearr_24653;
})();
if(inst_24614){
var statearr_24654_24679 = state_24648__$1;
(statearr_24654_24679[(1)] = (5));

} else {
var statearr_24655_24680 = state_24648__$1;
(statearr_24655_24680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (15))){
var inst_24638 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24656_24681 = state_24648__$1;
(statearr_24656_24681[(2)] = inst_24638);

(statearr_24656_24681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (13))){
var state_24648__$1 = state_24648;
var statearr_24657_24682 = state_24648__$1;
(statearr_24657_24682[(2)] = null);

(statearr_24657_24682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (6))){
var inst_24608 = (state_24648[(8)]);
var inst_24633 = inst_24608.length;
var inst_24634 = (inst_24633 > (0));
var state_24648__$1 = state_24648;
if(cljs.core.truth_(inst_24634)){
var statearr_24658_24683 = state_24648__$1;
(statearr_24658_24683[(1)] = (12));

} else {
var statearr_24659_24684 = state_24648__$1;
(statearr_24659_24684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (3))){
var inst_24646 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24648__$1,inst_24646);
} else {
if((state_val_24649 === (12))){
var inst_24608 = (state_24648[(8)]);
var inst_24636 = cljs.core.vec.call(null,inst_24608);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24648__$1,(15),out,inst_24636);
} else {
if((state_val_24649 === (2))){
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24648__$1,(4),ch);
} else {
if((state_val_24649 === (11))){
var inst_24612 = (state_24648[(9)]);
var inst_24616 = (state_24648[(10)]);
var inst_24626 = (state_24648[(2)]);
var inst_24627 = [];
var inst_24628 = inst_24627.push(inst_24612);
var inst_24608 = inst_24627;
var inst_24609 = inst_24616;
var state_24648__$1 = (function (){var statearr_24660 = state_24648;
(statearr_24660[(11)] = inst_24628);

(statearr_24660[(7)] = inst_24609);

(statearr_24660[(12)] = inst_24626);

(statearr_24660[(8)] = inst_24608);

return statearr_24660;
})();
var statearr_24661_24685 = state_24648__$1;
(statearr_24661_24685[(2)] = null);

(statearr_24661_24685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (9))){
var inst_24608 = (state_24648[(8)]);
var inst_24624 = cljs.core.vec.call(null,inst_24608);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24648__$1,(11),out,inst_24624);
} else {
if((state_val_24649 === (5))){
var inst_24609 = (state_24648[(7)]);
var inst_24612 = (state_24648[(9)]);
var inst_24616 = (state_24648[(10)]);
var inst_24616__$1 = f.call(null,inst_24612);
var inst_24617 = cljs.core._EQ_.call(null,inst_24616__$1,inst_24609);
var inst_24618 = cljs.core.keyword_identical_QMARK_.call(null,inst_24609,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24619 = ((inst_24617) || (inst_24618));
var state_24648__$1 = (function (){var statearr_24662 = state_24648;
(statearr_24662[(10)] = inst_24616__$1);

return statearr_24662;
})();
if(cljs.core.truth_(inst_24619)){
var statearr_24663_24686 = state_24648__$1;
(statearr_24663_24686[(1)] = (8));

} else {
var statearr_24664_24687 = state_24648__$1;
(statearr_24664_24687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (14))){
var inst_24641 = (state_24648[(2)]);
var inst_24642 = cljs.core.async.close_BANG_.call(null,out);
var state_24648__$1 = (function (){var statearr_24666 = state_24648;
(statearr_24666[(13)] = inst_24641);

return statearr_24666;
})();
var statearr_24667_24688 = state_24648__$1;
(statearr_24667_24688[(2)] = inst_24642);

(statearr_24667_24688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (10))){
var inst_24631 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24668_24689 = state_24648__$1;
(statearr_24668_24689[(2)] = inst_24631);

(statearr_24668_24689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (8))){
var inst_24612 = (state_24648[(9)]);
var inst_24608 = (state_24648[(8)]);
var inst_24616 = (state_24648[(10)]);
var inst_24621 = inst_24608.push(inst_24612);
var tmp24665 = inst_24608;
var inst_24608__$1 = tmp24665;
var inst_24609 = inst_24616;
var state_24648__$1 = (function (){var statearr_24669 = state_24648;
(statearr_24669[(7)] = inst_24609);

(statearr_24669[(14)] = inst_24621);

(statearr_24669[(8)] = inst_24608__$1);

return statearr_24669;
})();
var statearr_24670_24690 = state_24648__$1;
(statearr_24670_24690[(2)] = null);

(statearr_24670_24690[(1)] = (2));


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
});})(c__22786__auto___24676,out))
;
return ((function (switch__22698__auto__,c__22786__auto___24676,out){
return (function() {
var cljs$core$async$state_machine__22699__auto__ = null;
var cljs$core$async$state_machine__22699__auto____0 = (function (){
var statearr_24671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24671[(0)] = cljs$core$async$state_machine__22699__auto__);

(statearr_24671[(1)] = (1));

return statearr_24671;
});
var cljs$core$async$state_machine__22699__auto____1 = (function (state_24648){
while(true){
var ret_value__22700__auto__ = (function (){try{while(true){
var result__22701__auto__ = switch__22698__auto__.call(null,state_24648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22701__auto__;
}
break;
}
}catch (e24672){if((e24672 instanceof Object)){
var ex__22702__auto__ = e24672;
var statearr_24673_24691 = state_24648;
(statearr_24673_24691[(5)] = ex__22702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24692 = state_24648;
state_24648 = G__24692;
continue;
} else {
return ret_value__22700__auto__;
}
break;
}
});
cljs$core$async$state_machine__22699__auto__ = function(state_24648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22699__auto____1.call(this,state_24648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22699__auto____0;
cljs$core$async$state_machine__22699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22699__auto____1;
return cljs$core$async$state_machine__22699__auto__;
})()
;})(switch__22698__auto__,c__22786__auto___24676,out))
})();
var state__22788__auto__ = (function (){var statearr_24674 = f__22787__auto__.call(null);
(statearr_24674[(6)] = c__22786__auto___24676);

return statearr_24674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24676,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1532452669233
