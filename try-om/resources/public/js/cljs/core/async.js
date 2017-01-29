// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args36602 = [];
var len__28342__auto___36608 = arguments.length;
var i__28343__auto___36609 = (0);
while(true){
if((i__28343__auto___36609 < len__28342__auto___36608)){
args36602.push((arguments[i__28343__auto___36609]));

var G__36610 = (i__28343__auto___36609 + (1));
i__28343__auto___36609 = G__36610;
continue;
} else {
}
break;
}

var G__36604 = args36602.length;
switch (G__36604) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36602.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36605 = (function (f,blockable,meta36606){
this.f = f;
this.blockable = blockable;
this.meta36606 = meta36606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36607,meta36606__$1){
var self__ = this;
var _36607__$1 = this;
return (new cljs.core.async.t_cljs$core$async36605(self__.f,self__.blockable,meta36606__$1));
});


cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36607){
var self__ = this;
var _36607__$1 = this;
return self__.meta36606;
});


cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36606","meta36606",-1747998968,null)], null);
});

cljs.core.async.t_cljs$core$async36605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36605";

cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async36605");
});

cljs.core.async.__GT_t_cljs$core$async36605 = (function cljs$core$async$__GT_t_cljs$core$async36605(f__$1,blockable__$1,meta36606){
return (new cljs.core.async.t_cljs$core$async36605(f__$1,blockable__$1,meta36606));
});

}

return (new cljs.core.async.t_cljs$core$async36605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args36614 = [];
var len__28342__auto___36617 = arguments.length;
var i__28343__auto___36618 = (0);
while(true){
if((i__28343__auto___36618 < len__28342__auto___36617)){
args36614.push((arguments[i__28343__auto___36618]));

var G__36619 = (i__28343__auto___36618 + (1));
i__28343__auto___36618 = G__36619;
continue;
} else {
}
break;
}

var G__36616 = args36614.length;
switch (G__36616) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36614.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args36621 = [];
var len__28342__auto___36624 = arguments.length;
var i__28343__auto___36625 = (0);
while(true){
if((i__28343__auto___36625 < len__28342__auto___36624)){
args36621.push((arguments[i__28343__auto___36625]));

var G__36626 = (i__28343__auto___36625 + (1));
i__28343__auto___36625 = G__36626;
continue;
} else {
}
break;
}

var G__36623 = args36621.length;
switch (G__36623) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36621.length)].join('')));

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
var args36628 = [];
var len__28342__auto___36631 = arguments.length;
var i__28343__auto___36632 = (0);
while(true){
if((i__28343__auto___36632 < len__28342__auto___36631)){
args36628.push((arguments[i__28343__auto___36632]));

var G__36633 = (i__28343__auto___36632 + (1));
i__28343__auto___36632 = G__36633;
continue;
} else {
}
break;
}

var G__36630 = args36628.length;
switch (G__36630) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36628.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36635 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36635);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36635,ret){
return (function (){
return fn1.call(null,val_36635);
});})(val_36635,ret))
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
var args36636 = [];
var len__28342__auto___36639 = arguments.length;
var i__28343__auto___36640 = (0);
while(true){
if((i__28343__auto___36640 < len__28342__auto___36639)){
args36636.push((arguments[i__28343__auto___36640]));

var G__36641 = (i__28343__auto___36640 + (1));
i__28343__auto___36640 = G__36641;
continue;
} else {
}
break;
}

var G__36638 = args36636.length;
switch (G__36638) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36636.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
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
var n__28142__auto___36643 = n;
var x_36644 = (0);
while(true){
if((x_36644 < n__28142__auto___36643)){
(a[x_36644] = (0));

var G__36645 = (x_36644 + (1));
x_36644 = G__36645;
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

var G__36646 = (i + (1));
i = G__36646;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36650 = (function (flag,meta36651){
this.flag = flag;
this.meta36651 = meta36651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36652,meta36651__$1){
var self__ = this;
var _36652__$1 = this;
return (new cljs.core.async.t_cljs$core$async36650(self__.flag,meta36651__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36652){
var self__ = this;
var _36652__$1 = this;
return self__.meta36651;
});})(flag))
;


cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36650.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36651","meta36651",2029827787,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36650";

cljs.core.async.t_cljs$core$async36650.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async36650");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36650 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36650(flag__$1,meta36651){
return (new cljs.core.async.t_cljs$core$async36650(flag__$1,meta36651));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36650(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36656 = (function (flag,cb,meta36657){
this.flag = flag;
this.cb = cb;
this.meta36657 = meta36657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36658,meta36657__$1){
var self__ = this;
var _36658__$1 = this;
return (new cljs.core.async.t_cljs$core$async36656(self__.flag,self__.cb,meta36657__$1));
});


cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36658){
var self__ = this;
var _36658__$1 = this;
return self__.meta36657;
});


cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async36656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36657","meta36657",479903374,null)], null);
});

cljs.core.async.t_cljs$core$async36656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36656";

cljs.core.async.t_cljs$core$async36656.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async36656");
});

cljs.core.async.__GT_t_cljs$core$async36656 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36656(flag__$1,cb__$1,meta36657){
return (new cljs.core.async.t_cljs$core$async36656(flag__$1,cb__$1,meta36657));
});

}

return (new cljs.core.async.t_cljs$core$async36656(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36659_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36660_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36660_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27121__auto__ = wport;
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36661 = (i + (1));
i = G__36661;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27121__auto__ = ret;
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__27109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27109__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
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
var args__28349__auto__ = [];
var len__28342__auto___36667 = arguments.length;
var i__28343__auto___36668 = (0);
while(true){
if((i__28343__auto___36668 < len__28342__auto___36667)){
args__28349__auto__.push((arguments[i__28343__auto___36668]));

var G__36669 = (i__28343__auto___36668 + (1));
i__28343__auto___36668 = G__36669;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((1) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28350__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36664){
var map__36665 = p__36664;
var map__36665__$1 = ((((!((map__36665 == null)))?((((map__36665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36665):map__36665);
var opts = map__36665__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36662){
var G__36663 = cljs.core.first.call(null,seq36662);
var seq36662__$1 = cljs.core.next.call(null,seq36662);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36663,seq36662__$1);
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
var args36670 = [];
var len__28342__auto___36720 = arguments.length;
var i__28343__auto___36721 = (0);
while(true){
if((i__28343__auto___36721 < len__28342__auto___36720)){
args36670.push((arguments[i__28343__auto___36721]));

var G__36722 = (i__28343__auto___36721 + (1));
i__28343__auto___36721 = G__36722;
continue;
} else {
}
break;
}

var G__36672 = args36670.length;
switch (G__36672) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36670.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36543__auto___36724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___36724){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___36724){
return (function (state_36696){
var state_val_36697 = (state_36696[(1)]);
if((state_val_36697 === (7))){
var inst_36692 = (state_36696[(2)]);
var state_36696__$1 = state_36696;
var statearr_36698_36725 = state_36696__$1;
(statearr_36698_36725[(2)] = inst_36692);

(statearr_36698_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (1))){
var state_36696__$1 = state_36696;
var statearr_36699_36726 = state_36696__$1;
(statearr_36699_36726[(2)] = null);

(statearr_36699_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (4))){
var inst_36675 = (state_36696[(7)]);
var inst_36675__$1 = (state_36696[(2)]);
var inst_36676 = (inst_36675__$1 == null);
var state_36696__$1 = (function (){var statearr_36700 = state_36696;
(statearr_36700[(7)] = inst_36675__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36676)){
var statearr_36701_36727 = state_36696__$1;
(statearr_36701_36727[(1)] = (5));

} else {
var statearr_36702_36728 = state_36696__$1;
(statearr_36702_36728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (13))){
var state_36696__$1 = state_36696;
var statearr_36703_36729 = state_36696__$1;
(statearr_36703_36729[(2)] = null);

(statearr_36703_36729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (6))){
var inst_36675 = (state_36696[(7)]);
var state_36696__$1 = state_36696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36696__$1,(11),to,inst_36675);
} else {
if((state_val_36697 === (3))){
var inst_36694 = (state_36696[(2)]);
var state_36696__$1 = state_36696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36696__$1,inst_36694);
} else {
if((state_val_36697 === (12))){
var state_36696__$1 = state_36696;
var statearr_36704_36730 = state_36696__$1;
(statearr_36704_36730[(2)] = null);

(statearr_36704_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (2))){
var state_36696__$1 = state_36696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36696__$1,(4),from);
} else {
if((state_val_36697 === (11))){
var inst_36685 = (state_36696[(2)]);
var state_36696__$1 = state_36696;
if(cljs.core.truth_(inst_36685)){
var statearr_36705_36731 = state_36696__$1;
(statearr_36705_36731[(1)] = (12));

} else {
var statearr_36706_36732 = state_36696__$1;
(statearr_36706_36732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (9))){
var state_36696__$1 = state_36696;
var statearr_36707_36733 = state_36696__$1;
(statearr_36707_36733[(2)] = null);

(statearr_36707_36733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (5))){
var state_36696__$1 = state_36696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36708_36734 = state_36696__$1;
(statearr_36708_36734[(1)] = (8));

} else {
var statearr_36709_36735 = state_36696__$1;
(statearr_36709_36735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (14))){
var inst_36690 = (state_36696[(2)]);
var state_36696__$1 = state_36696;
var statearr_36710_36736 = state_36696__$1;
(statearr_36710_36736[(2)] = inst_36690);

(statearr_36710_36736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (10))){
var inst_36682 = (state_36696[(2)]);
var state_36696__$1 = state_36696;
var statearr_36711_36737 = state_36696__$1;
(statearr_36711_36737[(2)] = inst_36682);

(statearr_36711_36737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36697 === (8))){
var inst_36679 = cljs.core.async.close_BANG_.call(null,to);
var state_36696__$1 = state_36696;
var statearr_36712_36738 = state_36696__$1;
(statearr_36712_36738[(2)] = inst_36679);

(statearr_36712_36738[(1)] = (10));


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
});})(c__36543__auto___36724))
;
return ((function (switch__36429__auto__,c__36543__auto___36724){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_36716 = [null,null,null,null,null,null,null,null];
(statearr_36716[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_36716[(1)] = (1));

return statearr_36716;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_36696){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_36696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e36717){if((e36717 instanceof Object)){
var ex__36433__auto__ = e36717;
var statearr_36718_36739 = state_36696;
(statearr_36718_36739[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36740 = state_36696;
state_36696 = G__36740;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_36696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_36696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___36724))
})();
var state__36545__auto__ = (function (){var statearr_36719 = f__36544__auto__.call(null);
(statearr_36719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___36724);

return statearr_36719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___36724))
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
return (function (p__36928){
var vec__36929 = p__36928;
var v = cljs.core.nth.call(null,vec__36929,(0),null);
var p = cljs.core.nth.call(null,vec__36929,(1),null);
var job = vec__36929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36543__auto___37115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results){
return (function (state_36936){
var state_val_36937 = (state_36936[(1)]);
if((state_val_36937 === (1))){
var state_36936__$1 = state_36936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36936__$1,(2),res,v);
} else {
if((state_val_36937 === (2))){
var inst_36933 = (state_36936[(2)]);
var inst_36934 = cljs.core.async.close_BANG_.call(null,res);
var state_36936__$1 = (function (){var statearr_36938 = state_36936;
(statearr_36938[(7)] = inst_36933);

return statearr_36938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36936__$1,inst_36934);
} else {
return null;
}
}
});})(c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results))
;
return ((function (switch__36429__auto__,c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_36942 = [null,null,null,null,null,null,null,null];
(statearr_36942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__);

(statearr_36942[(1)] = (1));

return statearr_36942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1 = (function (state_36936){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_36936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e36943){if((e36943 instanceof Object)){
var ex__36433__auto__ = e36943;
var statearr_36944_37116 = state_36936;
(statearr_36944_37116[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37117 = state_36936;
state_36936 = G__37117;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = function(state_36936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1.call(this,state_36936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results))
})();
var state__36545__auto__ = (function (){var statearr_36945 = f__36544__auto__.call(null);
(statearr_36945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37115);

return statearr_36945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___37115,res,vec__36929,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36946){
var vec__36947 = p__36946;
var v = cljs.core.nth.call(null,vec__36947,(0),null);
var p = cljs.core.nth.call(null,vec__36947,(1),null);
var job = vec__36947;
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
var n__28142__auto___37118 = n;
var __37119 = (0);
while(true){
if((__37119 < n__28142__auto___37118)){
var G__36950_37120 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36950_37120) {
case "compute":
var c__36543__auto___37122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37119,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (__37119,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function (state_36963){
var state_val_36964 = (state_36963[(1)]);
if((state_val_36964 === (1))){
var state_36963__$1 = state_36963;
var statearr_36965_37123 = state_36963__$1;
(statearr_36965_37123[(2)] = null);

(statearr_36965_37123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (2))){
var state_36963__$1 = state_36963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36963__$1,(4),jobs);
} else {
if((state_val_36964 === (3))){
var inst_36961 = (state_36963[(2)]);
var state_36963__$1 = state_36963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36963__$1,inst_36961);
} else {
if((state_val_36964 === (4))){
var inst_36953 = (state_36963[(2)]);
var inst_36954 = process.call(null,inst_36953);
var state_36963__$1 = state_36963;
if(cljs.core.truth_(inst_36954)){
var statearr_36966_37124 = state_36963__$1;
(statearr_36966_37124[(1)] = (5));

} else {
var statearr_36967_37125 = state_36963__$1;
(statearr_36967_37125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (5))){
var state_36963__$1 = state_36963;
var statearr_36968_37126 = state_36963__$1;
(statearr_36968_37126[(2)] = null);

(statearr_36968_37126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (6))){
var state_36963__$1 = state_36963;
var statearr_36969_37127 = state_36963__$1;
(statearr_36969_37127[(2)] = null);

(statearr_36969_37127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (7))){
var inst_36959 = (state_36963[(2)]);
var state_36963__$1 = state_36963;
var statearr_36970_37128 = state_36963__$1;
(statearr_36970_37128[(2)] = inst_36959);

(statearr_36970_37128[(1)] = (3));


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
});})(__37119,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
;
return ((function (__37119,switch__36429__auto__,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_36974 = [null,null,null,null,null,null,null];
(statearr_36974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__);

(statearr_36974[(1)] = (1));

return statearr_36974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1 = (function (state_36963){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_36963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e36975){if((e36975 instanceof Object)){
var ex__36433__auto__ = e36975;
var statearr_36976_37129 = state_36963;
(statearr_36976_37129[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_36963;
state_36963 = G__37130;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = function(state_36963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1.call(this,state_36963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__;
})()
;})(__37119,switch__36429__auto__,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
})();
var state__36545__auto__ = (function (){var statearr_36977 = f__36544__auto__.call(null);
(statearr_36977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37122);

return statearr_36977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(__37119,c__36543__auto___37122,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
);


break;
case "async":
var c__36543__auto___37131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37119,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (__37119,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function (state_36990){
var state_val_36991 = (state_36990[(1)]);
if((state_val_36991 === (1))){
var state_36990__$1 = state_36990;
var statearr_36992_37132 = state_36990__$1;
(statearr_36992_37132[(2)] = null);

(statearr_36992_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (2))){
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36990__$1,(4),jobs);
} else {
if((state_val_36991 === (3))){
var inst_36988 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36990__$1,inst_36988);
} else {
if((state_val_36991 === (4))){
var inst_36980 = (state_36990[(2)]);
var inst_36981 = async.call(null,inst_36980);
var state_36990__$1 = state_36990;
if(cljs.core.truth_(inst_36981)){
var statearr_36993_37133 = state_36990__$1;
(statearr_36993_37133[(1)] = (5));

} else {
var statearr_36994_37134 = state_36990__$1;
(statearr_36994_37134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (5))){
var state_36990__$1 = state_36990;
var statearr_36995_37135 = state_36990__$1;
(statearr_36995_37135[(2)] = null);

(statearr_36995_37135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (6))){
var state_36990__$1 = state_36990;
var statearr_36996_37136 = state_36990__$1;
(statearr_36996_37136[(2)] = null);

(statearr_36996_37136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (7))){
var inst_36986 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36997_37137 = state_36990__$1;
(statearr_36997_37137[(2)] = inst_36986);

(statearr_36997_37137[(1)] = (3));


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
});})(__37119,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
;
return ((function (__37119,switch__36429__auto__,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_37001 = [null,null,null,null,null,null,null];
(statearr_37001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__);

(statearr_37001[(1)] = (1));

return statearr_37001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1 = (function (state_36990){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_36990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37002){if((e37002 instanceof Object)){
var ex__36433__auto__ = e37002;
var statearr_37003_37138 = state_36990;
(statearr_37003_37138[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37139 = state_36990;
state_36990 = G__37139;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = function(state_36990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1.call(this,state_36990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__;
})()
;})(__37119,switch__36429__auto__,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
})();
var state__36545__auto__ = (function (){var statearr_37004 = f__36544__auto__.call(null);
(statearr_37004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37131);

return statearr_37004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(__37119,c__36543__auto___37131,G__36950_37120,n__28142__auto___37118,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__37140 = (__37119 + (1));
__37119 = G__37140;
continue;
} else {
}
break;
}

var c__36543__auto___37141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___37141,jobs,results,process,async){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___37141,jobs,results,process,async){
return (function (state_37026){
var state_val_37027 = (state_37026[(1)]);
if((state_val_37027 === (1))){
var state_37026__$1 = state_37026;
var statearr_37028_37142 = state_37026__$1;
(statearr_37028_37142[(2)] = null);

(statearr_37028_37142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37027 === (2))){
var state_37026__$1 = state_37026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37026__$1,(4),from);
} else {
if((state_val_37027 === (3))){
var inst_37024 = (state_37026[(2)]);
var state_37026__$1 = state_37026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37026__$1,inst_37024);
} else {
if((state_val_37027 === (4))){
var inst_37007 = (state_37026[(7)]);
var inst_37007__$1 = (state_37026[(2)]);
var inst_37008 = (inst_37007__$1 == null);
var state_37026__$1 = (function (){var statearr_37029 = state_37026;
(statearr_37029[(7)] = inst_37007__$1);

return statearr_37029;
})();
if(cljs.core.truth_(inst_37008)){
var statearr_37030_37143 = state_37026__$1;
(statearr_37030_37143[(1)] = (5));

} else {
var statearr_37031_37144 = state_37026__$1;
(statearr_37031_37144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37027 === (5))){
var inst_37010 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37026__$1 = state_37026;
var statearr_37032_37145 = state_37026__$1;
(statearr_37032_37145[(2)] = inst_37010);

(statearr_37032_37145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37027 === (6))){
var inst_37012 = (state_37026[(8)]);
var inst_37007 = (state_37026[(7)]);
var inst_37012__$1 = cljs.core.async.chan.call(null,(1));
var inst_37013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37014 = [inst_37007,inst_37012__$1];
var inst_37015 = (new cljs.core.PersistentVector(null,2,(5),inst_37013,inst_37014,null));
var state_37026__$1 = (function (){var statearr_37033 = state_37026;
(statearr_37033[(8)] = inst_37012__$1);

return statearr_37033;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37026__$1,(8),jobs,inst_37015);
} else {
if((state_val_37027 === (7))){
var inst_37022 = (state_37026[(2)]);
var state_37026__$1 = state_37026;
var statearr_37034_37146 = state_37026__$1;
(statearr_37034_37146[(2)] = inst_37022);

(statearr_37034_37146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37027 === (8))){
var inst_37012 = (state_37026[(8)]);
var inst_37017 = (state_37026[(2)]);
var state_37026__$1 = (function (){var statearr_37035 = state_37026;
(statearr_37035[(9)] = inst_37017);

return statearr_37035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37026__$1,(9),results,inst_37012);
} else {
if((state_val_37027 === (9))){
var inst_37019 = (state_37026[(2)]);
var state_37026__$1 = (function (){var statearr_37036 = state_37026;
(statearr_37036[(10)] = inst_37019);

return statearr_37036;
})();
var statearr_37037_37147 = state_37026__$1;
(statearr_37037_37147[(2)] = null);

(statearr_37037_37147[(1)] = (2));


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
});})(c__36543__auto___37141,jobs,results,process,async))
;
return ((function (switch__36429__auto__,c__36543__auto___37141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_37041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__);

(statearr_37041[(1)] = (1));

return statearr_37041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1 = (function (state_37026){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37042){if((e37042 instanceof Object)){
var ex__36433__auto__ = e37042;
var statearr_37043_37148 = state_37026;
(statearr_37043_37148[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37149 = state_37026;
state_37026 = G__37149;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = function(state_37026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1.call(this,state_37026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___37141,jobs,results,process,async))
})();
var state__36545__auto__ = (function (){var statearr_37044 = f__36544__auto__.call(null);
(statearr_37044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37141);

return statearr_37044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___37141,jobs,results,process,async))
);


var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__,jobs,results,process,async){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__,jobs,results,process,async){
return (function (state_37082){
var state_val_37083 = (state_37082[(1)]);
if((state_val_37083 === (7))){
var inst_37078 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
var statearr_37084_37150 = state_37082__$1;
(statearr_37084_37150[(2)] = inst_37078);

(statearr_37084_37150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (20))){
var state_37082__$1 = state_37082;
var statearr_37085_37151 = state_37082__$1;
(statearr_37085_37151[(2)] = null);

(statearr_37085_37151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (1))){
var state_37082__$1 = state_37082;
var statearr_37086_37152 = state_37082__$1;
(statearr_37086_37152[(2)] = null);

(statearr_37086_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (4))){
var inst_37047 = (state_37082[(7)]);
var inst_37047__$1 = (state_37082[(2)]);
var inst_37048 = (inst_37047__$1 == null);
var state_37082__$1 = (function (){var statearr_37087 = state_37082;
(statearr_37087[(7)] = inst_37047__$1);

return statearr_37087;
})();
if(cljs.core.truth_(inst_37048)){
var statearr_37088_37153 = state_37082__$1;
(statearr_37088_37153[(1)] = (5));

} else {
var statearr_37089_37154 = state_37082__$1;
(statearr_37089_37154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (15))){
var inst_37060 = (state_37082[(8)]);
var state_37082__$1 = state_37082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37082__$1,(18),to,inst_37060);
} else {
if((state_val_37083 === (21))){
var inst_37073 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
var statearr_37090_37155 = state_37082__$1;
(statearr_37090_37155[(2)] = inst_37073);

(statearr_37090_37155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (13))){
var inst_37075 = (state_37082[(2)]);
var state_37082__$1 = (function (){var statearr_37091 = state_37082;
(statearr_37091[(9)] = inst_37075);

return statearr_37091;
})();
var statearr_37092_37156 = state_37082__$1;
(statearr_37092_37156[(2)] = null);

(statearr_37092_37156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (6))){
var inst_37047 = (state_37082[(7)]);
var state_37082__$1 = state_37082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37082__$1,(11),inst_37047);
} else {
if((state_val_37083 === (17))){
var inst_37068 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
if(cljs.core.truth_(inst_37068)){
var statearr_37093_37157 = state_37082__$1;
(statearr_37093_37157[(1)] = (19));

} else {
var statearr_37094_37158 = state_37082__$1;
(statearr_37094_37158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (3))){
var inst_37080 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37082__$1,inst_37080);
} else {
if((state_val_37083 === (12))){
var inst_37057 = (state_37082[(10)]);
var state_37082__$1 = state_37082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37082__$1,(14),inst_37057);
} else {
if((state_val_37083 === (2))){
var state_37082__$1 = state_37082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37082__$1,(4),results);
} else {
if((state_val_37083 === (19))){
var state_37082__$1 = state_37082;
var statearr_37095_37159 = state_37082__$1;
(statearr_37095_37159[(2)] = null);

(statearr_37095_37159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (11))){
var inst_37057 = (state_37082[(2)]);
var state_37082__$1 = (function (){var statearr_37096 = state_37082;
(statearr_37096[(10)] = inst_37057);

return statearr_37096;
})();
var statearr_37097_37160 = state_37082__$1;
(statearr_37097_37160[(2)] = null);

(statearr_37097_37160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (9))){
var state_37082__$1 = state_37082;
var statearr_37098_37161 = state_37082__$1;
(statearr_37098_37161[(2)] = null);

(statearr_37098_37161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (5))){
var state_37082__$1 = state_37082;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37099_37162 = state_37082__$1;
(statearr_37099_37162[(1)] = (8));

} else {
var statearr_37100_37163 = state_37082__$1;
(statearr_37100_37163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (14))){
var inst_37062 = (state_37082[(11)]);
var inst_37060 = (state_37082[(8)]);
var inst_37060__$1 = (state_37082[(2)]);
var inst_37061 = (inst_37060__$1 == null);
var inst_37062__$1 = cljs.core.not.call(null,inst_37061);
var state_37082__$1 = (function (){var statearr_37101 = state_37082;
(statearr_37101[(11)] = inst_37062__$1);

(statearr_37101[(8)] = inst_37060__$1);

return statearr_37101;
})();
if(inst_37062__$1){
var statearr_37102_37164 = state_37082__$1;
(statearr_37102_37164[(1)] = (15));

} else {
var statearr_37103_37165 = state_37082__$1;
(statearr_37103_37165[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (16))){
var inst_37062 = (state_37082[(11)]);
var state_37082__$1 = state_37082;
var statearr_37104_37166 = state_37082__$1;
(statearr_37104_37166[(2)] = inst_37062);

(statearr_37104_37166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (10))){
var inst_37054 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
var statearr_37105_37167 = state_37082__$1;
(statearr_37105_37167[(2)] = inst_37054);

(statearr_37105_37167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (18))){
var inst_37065 = (state_37082[(2)]);
var state_37082__$1 = state_37082;
var statearr_37106_37168 = state_37082__$1;
(statearr_37106_37168[(2)] = inst_37065);

(statearr_37106_37168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37083 === (8))){
var inst_37051 = cljs.core.async.close_BANG_.call(null,to);
var state_37082__$1 = state_37082;
var statearr_37107_37169 = state_37082__$1;
(statearr_37107_37169[(2)] = inst_37051);

(statearr_37107_37169[(1)] = (10));


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
});})(c__36543__auto__,jobs,results,process,async))
;
return ((function (switch__36429__auto__,c__36543__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_37111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__);

(statearr_37111[(1)] = (1));

return statearr_37111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1 = (function (state_37082){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37112){if((e37112 instanceof Object)){
var ex__36433__auto__ = e37112;
var statearr_37113_37170 = state_37082;
(statearr_37113_37170[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37171 = state_37082;
state_37082 = G__37171;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__ = function(state_37082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1.call(this,state_37082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__,jobs,results,process,async))
})();
var state__36545__auto__ = (function (){var statearr_37114 = f__36544__auto__.call(null);
(statearr_37114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_37114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__,jobs,results,process,async))
);

return c__36543__auto__;
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
var args37172 = [];
var len__28342__auto___37175 = arguments.length;
var i__28343__auto___37176 = (0);
while(true){
if((i__28343__auto___37176 < len__28342__auto___37175)){
args37172.push((arguments[i__28343__auto___37176]));

var G__37177 = (i__28343__auto___37176 + (1));
i__28343__auto___37176 = G__37177;
continue;
} else {
}
break;
}

var G__37174 = args37172.length;
switch (G__37174) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37172.length)].join('')));

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
var args37179 = [];
var len__28342__auto___37182 = arguments.length;
var i__28343__auto___37183 = (0);
while(true){
if((i__28343__auto___37183 < len__28342__auto___37182)){
args37179.push((arguments[i__28343__auto___37183]));

var G__37184 = (i__28343__auto___37183 + (1));
i__28343__auto___37183 = G__37184;
continue;
} else {
}
break;
}

var G__37181 = args37179.length;
switch (G__37181) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37179.length)].join('')));

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
var args37186 = [];
var len__28342__auto___37239 = arguments.length;
var i__28343__auto___37240 = (0);
while(true){
if((i__28343__auto___37240 < len__28342__auto___37239)){
args37186.push((arguments[i__28343__auto___37240]));

var G__37241 = (i__28343__auto___37240 + (1));
i__28343__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var G__37188 = args37186.length;
switch (G__37188) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37186.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36543__auto___37243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___37243,tc,fc){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___37243,tc,fc){
return (function (state_37214){
var state_val_37215 = (state_37214[(1)]);
if((state_val_37215 === (7))){
var inst_37210 = (state_37214[(2)]);
var state_37214__$1 = state_37214;
var statearr_37216_37244 = state_37214__$1;
(statearr_37216_37244[(2)] = inst_37210);

(statearr_37216_37244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (1))){
var state_37214__$1 = state_37214;
var statearr_37217_37245 = state_37214__$1;
(statearr_37217_37245[(2)] = null);

(statearr_37217_37245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (4))){
var inst_37191 = (state_37214[(7)]);
var inst_37191__$1 = (state_37214[(2)]);
var inst_37192 = (inst_37191__$1 == null);
var state_37214__$1 = (function (){var statearr_37218 = state_37214;
(statearr_37218[(7)] = inst_37191__$1);

return statearr_37218;
})();
if(cljs.core.truth_(inst_37192)){
var statearr_37219_37246 = state_37214__$1;
(statearr_37219_37246[(1)] = (5));

} else {
var statearr_37220_37247 = state_37214__$1;
(statearr_37220_37247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (13))){
var state_37214__$1 = state_37214;
var statearr_37221_37248 = state_37214__$1;
(statearr_37221_37248[(2)] = null);

(statearr_37221_37248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (6))){
var inst_37191 = (state_37214[(7)]);
var inst_37197 = p.call(null,inst_37191);
var state_37214__$1 = state_37214;
if(cljs.core.truth_(inst_37197)){
var statearr_37222_37249 = state_37214__$1;
(statearr_37222_37249[(1)] = (9));

} else {
var statearr_37223_37250 = state_37214__$1;
(statearr_37223_37250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (3))){
var inst_37212 = (state_37214[(2)]);
var state_37214__$1 = state_37214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37214__$1,inst_37212);
} else {
if((state_val_37215 === (12))){
var state_37214__$1 = state_37214;
var statearr_37224_37251 = state_37214__$1;
(statearr_37224_37251[(2)] = null);

(statearr_37224_37251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (2))){
var state_37214__$1 = state_37214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37214__$1,(4),ch);
} else {
if((state_val_37215 === (11))){
var inst_37191 = (state_37214[(7)]);
var inst_37201 = (state_37214[(2)]);
var state_37214__$1 = state_37214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37214__$1,(8),inst_37201,inst_37191);
} else {
if((state_val_37215 === (9))){
var state_37214__$1 = state_37214;
var statearr_37225_37252 = state_37214__$1;
(statearr_37225_37252[(2)] = tc);

(statearr_37225_37252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (5))){
var inst_37194 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37195 = cljs.core.async.close_BANG_.call(null,fc);
var state_37214__$1 = (function (){var statearr_37226 = state_37214;
(statearr_37226[(8)] = inst_37194);

return statearr_37226;
})();
var statearr_37227_37253 = state_37214__$1;
(statearr_37227_37253[(2)] = inst_37195);

(statearr_37227_37253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (14))){
var inst_37208 = (state_37214[(2)]);
var state_37214__$1 = state_37214;
var statearr_37228_37254 = state_37214__$1;
(statearr_37228_37254[(2)] = inst_37208);

(statearr_37228_37254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (10))){
var state_37214__$1 = state_37214;
var statearr_37229_37255 = state_37214__$1;
(statearr_37229_37255[(2)] = fc);

(statearr_37229_37255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37215 === (8))){
var inst_37203 = (state_37214[(2)]);
var state_37214__$1 = state_37214;
if(cljs.core.truth_(inst_37203)){
var statearr_37230_37256 = state_37214__$1;
(statearr_37230_37256[(1)] = (12));

} else {
var statearr_37231_37257 = state_37214__$1;
(statearr_37231_37257[(1)] = (13));

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
});})(c__36543__auto___37243,tc,fc))
;
return ((function (switch__36429__auto__,c__36543__auto___37243,tc,fc){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_37214){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__36433__auto__ = e37236;
var statearr_37237_37258 = state_37214;
(statearr_37237_37258[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37259 = state_37214;
state_37214 = G__37259;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_37214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_37214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___37243,tc,fc))
})();
var state__36545__auto__ = (function (){var statearr_37238 = f__36544__auto__.call(null);
(statearr_37238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37243);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___37243,tc,fc))
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
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__){
return (function (state_37323){
var state_val_37324 = (state_37323[(1)]);
if((state_val_37324 === (7))){
var inst_37319 = (state_37323[(2)]);
var state_37323__$1 = state_37323;
var statearr_37325_37346 = state_37323__$1;
(statearr_37325_37346[(2)] = inst_37319);

(statearr_37325_37346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (1))){
var inst_37303 = init;
var state_37323__$1 = (function (){var statearr_37326 = state_37323;
(statearr_37326[(7)] = inst_37303);

return statearr_37326;
})();
var statearr_37327_37347 = state_37323__$1;
(statearr_37327_37347[(2)] = null);

(statearr_37327_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (4))){
var inst_37306 = (state_37323[(8)]);
var inst_37306__$1 = (state_37323[(2)]);
var inst_37307 = (inst_37306__$1 == null);
var state_37323__$1 = (function (){var statearr_37328 = state_37323;
(statearr_37328[(8)] = inst_37306__$1);

return statearr_37328;
})();
if(cljs.core.truth_(inst_37307)){
var statearr_37329_37348 = state_37323__$1;
(statearr_37329_37348[(1)] = (5));

} else {
var statearr_37330_37349 = state_37323__$1;
(statearr_37330_37349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (6))){
var inst_37303 = (state_37323[(7)]);
var inst_37310 = (state_37323[(9)]);
var inst_37306 = (state_37323[(8)]);
var inst_37310__$1 = f.call(null,inst_37303,inst_37306);
var inst_37311 = cljs.core.reduced_QMARK_.call(null,inst_37310__$1);
var state_37323__$1 = (function (){var statearr_37331 = state_37323;
(statearr_37331[(9)] = inst_37310__$1);

return statearr_37331;
})();
if(inst_37311){
var statearr_37332_37350 = state_37323__$1;
(statearr_37332_37350[(1)] = (8));

} else {
var statearr_37333_37351 = state_37323__$1;
(statearr_37333_37351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (3))){
var inst_37321 = (state_37323[(2)]);
var state_37323__$1 = state_37323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37323__$1,inst_37321);
} else {
if((state_val_37324 === (2))){
var state_37323__$1 = state_37323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37323__$1,(4),ch);
} else {
if((state_val_37324 === (9))){
var inst_37310 = (state_37323[(9)]);
var inst_37303 = inst_37310;
var state_37323__$1 = (function (){var statearr_37334 = state_37323;
(statearr_37334[(7)] = inst_37303);

return statearr_37334;
})();
var statearr_37335_37352 = state_37323__$1;
(statearr_37335_37352[(2)] = null);

(statearr_37335_37352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (5))){
var inst_37303 = (state_37323[(7)]);
var state_37323__$1 = state_37323;
var statearr_37336_37353 = state_37323__$1;
(statearr_37336_37353[(2)] = inst_37303);

(statearr_37336_37353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (10))){
var inst_37317 = (state_37323[(2)]);
var state_37323__$1 = state_37323;
var statearr_37337_37354 = state_37323__$1;
(statearr_37337_37354[(2)] = inst_37317);

(statearr_37337_37354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37324 === (8))){
var inst_37310 = (state_37323[(9)]);
var inst_37313 = cljs.core.deref.call(null,inst_37310);
var state_37323__$1 = state_37323;
var statearr_37338_37355 = state_37323__$1;
(statearr_37338_37355[(2)] = inst_37313);

(statearr_37338_37355[(1)] = (10));


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
});})(c__36543__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36430__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36430__auto____0 = (function (){
var statearr_37342 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37342[(0)] = cljs$core$async$reduce_$_state_machine__36430__auto__);

(statearr_37342[(1)] = (1));

return statearr_37342;
});
var cljs$core$async$reduce_$_state_machine__36430__auto____1 = (function (state_37323){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37343){if((e37343 instanceof Object)){
var ex__36433__auto__ = e37343;
var statearr_37344_37356 = state_37323;
(statearr_37344_37356[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37323;
state_37323 = G__37357;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36430__auto__ = function(state_37323){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36430__auto____1.call(this,state_37323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36430__auto____0;
cljs$core$async$reduce_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36430__auto____1;
return cljs$core$async$reduce_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__))
})();
var state__36545__auto__ = (function (){var statearr_37345 = f__36544__auto__.call(null);
(statearr_37345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_37345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__))
);

return c__36543__auto__;
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
var args37358 = [];
var len__28342__auto___37410 = arguments.length;
var i__28343__auto___37411 = (0);
while(true){
if((i__28343__auto___37411 < len__28342__auto___37410)){
args37358.push((arguments[i__28343__auto___37411]));

var G__37412 = (i__28343__auto___37411 + (1));
i__28343__auto___37411 = G__37412;
continue;
} else {
}
break;
}

var G__37360 = args37358.length;
switch (G__37360) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37358.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__){
return (function (state_37385){
var state_val_37386 = (state_37385[(1)]);
if((state_val_37386 === (7))){
var inst_37367 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
var statearr_37387_37414 = state_37385__$1;
(statearr_37387_37414[(2)] = inst_37367);

(statearr_37387_37414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (1))){
var inst_37361 = cljs.core.seq.call(null,coll);
var inst_37362 = inst_37361;
var state_37385__$1 = (function (){var statearr_37388 = state_37385;
(statearr_37388[(7)] = inst_37362);

return statearr_37388;
})();
var statearr_37389_37415 = state_37385__$1;
(statearr_37389_37415[(2)] = null);

(statearr_37389_37415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (4))){
var inst_37362 = (state_37385[(7)]);
var inst_37365 = cljs.core.first.call(null,inst_37362);
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37385__$1,(7),ch,inst_37365);
} else {
if((state_val_37386 === (13))){
var inst_37379 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
var statearr_37390_37416 = state_37385__$1;
(statearr_37390_37416[(2)] = inst_37379);

(statearr_37390_37416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (6))){
var inst_37370 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
if(cljs.core.truth_(inst_37370)){
var statearr_37391_37417 = state_37385__$1;
(statearr_37391_37417[(1)] = (8));

} else {
var statearr_37392_37418 = state_37385__$1;
(statearr_37392_37418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (3))){
var inst_37383 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37385__$1,inst_37383);
} else {
if((state_val_37386 === (12))){
var state_37385__$1 = state_37385;
var statearr_37393_37419 = state_37385__$1;
(statearr_37393_37419[(2)] = null);

(statearr_37393_37419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (2))){
var inst_37362 = (state_37385[(7)]);
var state_37385__$1 = state_37385;
if(cljs.core.truth_(inst_37362)){
var statearr_37394_37420 = state_37385__$1;
(statearr_37394_37420[(1)] = (4));

} else {
var statearr_37395_37421 = state_37385__$1;
(statearr_37395_37421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (11))){
var inst_37376 = cljs.core.async.close_BANG_.call(null,ch);
var state_37385__$1 = state_37385;
var statearr_37396_37422 = state_37385__$1;
(statearr_37396_37422[(2)] = inst_37376);

(statearr_37396_37422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (9))){
var state_37385__$1 = state_37385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37397_37423 = state_37385__$1;
(statearr_37397_37423[(1)] = (11));

} else {
var statearr_37398_37424 = state_37385__$1;
(statearr_37398_37424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (5))){
var inst_37362 = (state_37385[(7)]);
var state_37385__$1 = state_37385;
var statearr_37399_37425 = state_37385__$1;
(statearr_37399_37425[(2)] = inst_37362);

(statearr_37399_37425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (10))){
var inst_37381 = (state_37385[(2)]);
var state_37385__$1 = state_37385;
var statearr_37400_37426 = state_37385__$1;
(statearr_37400_37426[(2)] = inst_37381);

(statearr_37400_37426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (8))){
var inst_37362 = (state_37385[(7)]);
var inst_37372 = cljs.core.next.call(null,inst_37362);
var inst_37362__$1 = inst_37372;
var state_37385__$1 = (function (){var statearr_37401 = state_37385;
(statearr_37401[(7)] = inst_37362__$1);

return statearr_37401;
})();
var statearr_37402_37427 = state_37385__$1;
(statearr_37402_37427[(2)] = null);

(statearr_37402_37427[(1)] = (2));


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
});})(c__36543__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_37406 = [null,null,null,null,null,null,null,null];
(statearr_37406[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_37406[(1)] = (1));

return statearr_37406;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_37385){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37407){if((e37407 instanceof Object)){
var ex__36433__auto__ = e37407;
var statearr_37408_37428 = state_37385;
(statearr_37408_37428[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_37385;
state_37385 = G__37429;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_37385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_37385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__))
})();
var state__36545__auto__ = (function (){var statearr_37409 = f__36544__auto__.call(null);
(statearr_37409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__))
);

return c__36543__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27839__auto__ = (((_ == null))?null:_);
var m__27840__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,_);
} else {
var m__27840__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27840__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,ch);
} else {
var m__27840__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m);
} else {
var m__27840__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37655 = (function (ch,cs,meta37656){
this.ch = ch;
this.cs = cs;
this.meta37656 = meta37656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37657,meta37656__$1){
var self__ = this;
var _37657__$1 = this;
return (new cljs.core.async.t_cljs$core$async37655(self__.ch,self__.cs,meta37656__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37657){
var self__ = this;
var _37657__$1 = this;
return self__.meta37656;
});})(cs))
;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async37655.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37655.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37656","meta37656",1445047386,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37655";

cljs.core.async.t_cljs$core$async37655.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async37655");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37655 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37655(ch__$1,cs__$1,meta37656){
return (new cljs.core.async.t_cljs$core$async37655(ch__$1,cs__$1,meta37656));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37655(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36543__auto___37880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___37880,cs,m,dchan,dctr,done){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___37880,cs,m,dchan,dctr,done){
return (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (7))){
var inst_37788 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37794_37881 = state_37792__$1;
(statearr_37794_37881[(2)] = inst_37788);

(statearr_37794_37881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (20))){
var inst_37691 = (state_37792[(7)]);
var inst_37703 = cljs.core.first.call(null,inst_37691);
var inst_37704 = cljs.core.nth.call(null,inst_37703,(0),null);
var inst_37705 = cljs.core.nth.call(null,inst_37703,(1),null);
var state_37792__$1 = (function (){var statearr_37795 = state_37792;
(statearr_37795[(8)] = inst_37704);

return statearr_37795;
})();
if(cljs.core.truth_(inst_37705)){
var statearr_37796_37882 = state_37792__$1;
(statearr_37796_37882[(1)] = (22));

} else {
var statearr_37797_37883 = state_37792__$1;
(statearr_37797_37883[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (27))){
var inst_37733 = (state_37792[(9)]);
var inst_37660 = (state_37792[(10)]);
var inst_37735 = (state_37792[(11)]);
var inst_37740 = (state_37792[(12)]);
var inst_37740__$1 = cljs.core._nth.call(null,inst_37733,inst_37735);
var inst_37741 = cljs.core.async.put_BANG_.call(null,inst_37740__$1,inst_37660,done);
var state_37792__$1 = (function (){var statearr_37798 = state_37792;
(statearr_37798[(12)] = inst_37740__$1);

return statearr_37798;
})();
if(cljs.core.truth_(inst_37741)){
var statearr_37799_37884 = state_37792__$1;
(statearr_37799_37884[(1)] = (30));

} else {
var statearr_37800_37885 = state_37792__$1;
(statearr_37800_37885[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (1))){
var state_37792__$1 = state_37792;
var statearr_37801_37886 = state_37792__$1;
(statearr_37801_37886[(2)] = null);

(statearr_37801_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (24))){
var inst_37691 = (state_37792[(7)]);
var inst_37710 = (state_37792[(2)]);
var inst_37711 = cljs.core.next.call(null,inst_37691);
var inst_37669 = inst_37711;
var inst_37670 = null;
var inst_37671 = (0);
var inst_37672 = (0);
var state_37792__$1 = (function (){var statearr_37802 = state_37792;
(statearr_37802[(13)] = inst_37670);

(statearr_37802[(14)] = inst_37710);

(statearr_37802[(15)] = inst_37672);

(statearr_37802[(16)] = inst_37671);

(statearr_37802[(17)] = inst_37669);

return statearr_37802;
})();
var statearr_37803_37887 = state_37792__$1;
(statearr_37803_37887[(2)] = null);

(statearr_37803_37887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (39))){
var state_37792__$1 = state_37792;
var statearr_37807_37888 = state_37792__$1;
(statearr_37807_37888[(2)] = null);

(statearr_37807_37888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (4))){
var inst_37660 = (state_37792[(10)]);
var inst_37660__$1 = (state_37792[(2)]);
var inst_37661 = (inst_37660__$1 == null);
var state_37792__$1 = (function (){var statearr_37808 = state_37792;
(statearr_37808[(10)] = inst_37660__$1);

return statearr_37808;
})();
if(cljs.core.truth_(inst_37661)){
var statearr_37809_37889 = state_37792__$1;
(statearr_37809_37889[(1)] = (5));

} else {
var statearr_37810_37890 = state_37792__$1;
(statearr_37810_37890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (15))){
var inst_37670 = (state_37792[(13)]);
var inst_37672 = (state_37792[(15)]);
var inst_37671 = (state_37792[(16)]);
var inst_37669 = (state_37792[(17)]);
var inst_37687 = (state_37792[(2)]);
var inst_37688 = (inst_37672 + (1));
var tmp37804 = inst_37670;
var tmp37805 = inst_37671;
var tmp37806 = inst_37669;
var inst_37669__$1 = tmp37806;
var inst_37670__$1 = tmp37804;
var inst_37671__$1 = tmp37805;
var inst_37672__$1 = inst_37688;
var state_37792__$1 = (function (){var statearr_37811 = state_37792;
(statearr_37811[(13)] = inst_37670__$1);

(statearr_37811[(18)] = inst_37687);

(statearr_37811[(15)] = inst_37672__$1);

(statearr_37811[(16)] = inst_37671__$1);

(statearr_37811[(17)] = inst_37669__$1);

return statearr_37811;
})();
var statearr_37812_37891 = state_37792__$1;
(statearr_37812_37891[(2)] = null);

(statearr_37812_37891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (21))){
var inst_37714 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37816_37892 = state_37792__$1;
(statearr_37816_37892[(2)] = inst_37714);

(statearr_37816_37892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (31))){
var inst_37740 = (state_37792[(12)]);
var inst_37744 = done.call(null,null);
var inst_37745 = cljs.core.async.untap_STAR_.call(null,m,inst_37740);
var state_37792__$1 = (function (){var statearr_37817 = state_37792;
(statearr_37817[(19)] = inst_37744);

return statearr_37817;
})();
var statearr_37818_37893 = state_37792__$1;
(statearr_37818_37893[(2)] = inst_37745);

(statearr_37818_37893[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (32))){
var inst_37732 = (state_37792[(20)]);
var inst_37733 = (state_37792[(9)]);
var inst_37734 = (state_37792[(21)]);
var inst_37735 = (state_37792[(11)]);
var inst_37747 = (state_37792[(2)]);
var inst_37748 = (inst_37735 + (1));
var tmp37813 = inst_37732;
var tmp37814 = inst_37733;
var tmp37815 = inst_37734;
var inst_37732__$1 = tmp37813;
var inst_37733__$1 = tmp37814;
var inst_37734__$1 = tmp37815;
var inst_37735__$1 = inst_37748;
var state_37792__$1 = (function (){var statearr_37819 = state_37792;
(statearr_37819[(20)] = inst_37732__$1);

(statearr_37819[(9)] = inst_37733__$1);

(statearr_37819[(22)] = inst_37747);

(statearr_37819[(21)] = inst_37734__$1);

(statearr_37819[(11)] = inst_37735__$1);

return statearr_37819;
})();
var statearr_37820_37894 = state_37792__$1;
(statearr_37820_37894[(2)] = null);

(statearr_37820_37894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (40))){
var inst_37760 = (state_37792[(23)]);
var inst_37764 = done.call(null,null);
var inst_37765 = cljs.core.async.untap_STAR_.call(null,m,inst_37760);
var state_37792__$1 = (function (){var statearr_37821 = state_37792;
(statearr_37821[(24)] = inst_37764);

return statearr_37821;
})();
var statearr_37822_37895 = state_37792__$1;
(statearr_37822_37895[(2)] = inst_37765);

(statearr_37822_37895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (33))){
var inst_37751 = (state_37792[(25)]);
var inst_37753 = cljs.core.chunked_seq_QMARK_.call(null,inst_37751);
var state_37792__$1 = state_37792;
if(inst_37753){
var statearr_37823_37896 = state_37792__$1;
(statearr_37823_37896[(1)] = (36));

} else {
var statearr_37824_37897 = state_37792__$1;
(statearr_37824_37897[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (13))){
var inst_37681 = (state_37792[(26)]);
var inst_37684 = cljs.core.async.close_BANG_.call(null,inst_37681);
var state_37792__$1 = state_37792;
var statearr_37825_37898 = state_37792__$1;
(statearr_37825_37898[(2)] = inst_37684);

(statearr_37825_37898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (22))){
var inst_37704 = (state_37792[(8)]);
var inst_37707 = cljs.core.async.close_BANG_.call(null,inst_37704);
var state_37792__$1 = state_37792;
var statearr_37826_37899 = state_37792__$1;
(statearr_37826_37899[(2)] = inst_37707);

(statearr_37826_37899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (36))){
var inst_37751 = (state_37792[(25)]);
var inst_37755 = cljs.core.chunk_first.call(null,inst_37751);
var inst_37756 = cljs.core.chunk_rest.call(null,inst_37751);
var inst_37757 = cljs.core.count.call(null,inst_37755);
var inst_37732 = inst_37756;
var inst_37733 = inst_37755;
var inst_37734 = inst_37757;
var inst_37735 = (0);
var state_37792__$1 = (function (){var statearr_37827 = state_37792;
(statearr_37827[(20)] = inst_37732);

(statearr_37827[(9)] = inst_37733);

(statearr_37827[(21)] = inst_37734);

(statearr_37827[(11)] = inst_37735);

return statearr_37827;
})();
var statearr_37828_37900 = state_37792__$1;
(statearr_37828_37900[(2)] = null);

(statearr_37828_37900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (41))){
var inst_37751 = (state_37792[(25)]);
var inst_37767 = (state_37792[(2)]);
var inst_37768 = cljs.core.next.call(null,inst_37751);
var inst_37732 = inst_37768;
var inst_37733 = null;
var inst_37734 = (0);
var inst_37735 = (0);
var state_37792__$1 = (function (){var statearr_37829 = state_37792;
(statearr_37829[(20)] = inst_37732);

(statearr_37829[(9)] = inst_37733);

(statearr_37829[(21)] = inst_37734);

(statearr_37829[(11)] = inst_37735);

(statearr_37829[(27)] = inst_37767);

return statearr_37829;
})();
var statearr_37830_37901 = state_37792__$1;
(statearr_37830_37901[(2)] = null);

(statearr_37830_37901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (43))){
var state_37792__$1 = state_37792;
var statearr_37831_37902 = state_37792__$1;
(statearr_37831_37902[(2)] = null);

(statearr_37831_37902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (29))){
var inst_37776 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37832_37903 = state_37792__$1;
(statearr_37832_37903[(2)] = inst_37776);

(statearr_37832_37903[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (44))){
var inst_37785 = (state_37792[(2)]);
var state_37792__$1 = (function (){var statearr_37833 = state_37792;
(statearr_37833[(28)] = inst_37785);

return statearr_37833;
})();
var statearr_37834_37904 = state_37792__$1;
(statearr_37834_37904[(2)] = null);

(statearr_37834_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (6))){
var inst_37724 = (state_37792[(29)]);
var inst_37723 = cljs.core.deref.call(null,cs);
var inst_37724__$1 = cljs.core.keys.call(null,inst_37723);
var inst_37725 = cljs.core.count.call(null,inst_37724__$1);
var inst_37726 = cljs.core.reset_BANG_.call(null,dctr,inst_37725);
var inst_37731 = cljs.core.seq.call(null,inst_37724__$1);
var inst_37732 = inst_37731;
var inst_37733 = null;
var inst_37734 = (0);
var inst_37735 = (0);
var state_37792__$1 = (function (){var statearr_37835 = state_37792;
(statearr_37835[(20)] = inst_37732);

(statearr_37835[(9)] = inst_37733);

(statearr_37835[(21)] = inst_37734);

(statearr_37835[(29)] = inst_37724__$1);

(statearr_37835[(11)] = inst_37735);

(statearr_37835[(30)] = inst_37726);

return statearr_37835;
})();
var statearr_37836_37905 = state_37792__$1;
(statearr_37836_37905[(2)] = null);

(statearr_37836_37905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (28))){
var inst_37732 = (state_37792[(20)]);
var inst_37751 = (state_37792[(25)]);
var inst_37751__$1 = cljs.core.seq.call(null,inst_37732);
var state_37792__$1 = (function (){var statearr_37837 = state_37792;
(statearr_37837[(25)] = inst_37751__$1);

return statearr_37837;
})();
if(inst_37751__$1){
var statearr_37838_37906 = state_37792__$1;
(statearr_37838_37906[(1)] = (33));

} else {
var statearr_37839_37907 = state_37792__$1;
(statearr_37839_37907[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (25))){
var inst_37734 = (state_37792[(21)]);
var inst_37735 = (state_37792[(11)]);
var inst_37737 = (inst_37735 < inst_37734);
var inst_37738 = inst_37737;
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37738)){
var statearr_37840_37908 = state_37792__$1;
(statearr_37840_37908[(1)] = (27));

} else {
var statearr_37841_37909 = state_37792__$1;
(statearr_37841_37909[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (34))){
var state_37792__$1 = state_37792;
var statearr_37842_37910 = state_37792__$1;
(statearr_37842_37910[(2)] = null);

(statearr_37842_37910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (17))){
var state_37792__$1 = state_37792;
var statearr_37843_37911 = state_37792__$1;
(statearr_37843_37911[(2)] = null);

(statearr_37843_37911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (3))){
var inst_37790 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37792__$1,inst_37790);
} else {
if((state_val_37793 === (12))){
var inst_37719 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37844_37912 = state_37792__$1;
(statearr_37844_37912[(2)] = inst_37719);

(statearr_37844_37912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (2))){
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(4),ch);
} else {
if((state_val_37793 === (23))){
var state_37792__$1 = state_37792;
var statearr_37845_37913 = state_37792__$1;
(statearr_37845_37913[(2)] = null);

(statearr_37845_37913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (35))){
var inst_37774 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37846_37914 = state_37792__$1;
(statearr_37846_37914[(2)] = inst_37774);

(statearr_37846_37914[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (19))){
var inst_37691 = (state_37792[(7)]);
var inst_37695 = cljs.core.chunk_first.call(null,inst_37691);
var inst_37696 = cljs.core.chunk_rest.call(null,inst_37691);
var inst_37697 = cljs.core.count.call(null,inst_37695);
var inst_37669 = inst_37696;
var inst_37670 = inst_37695;
var inst_37671 = inst_37697;
var inst_37672 = (0);
var state_37792__$1 = (function (){var statearr_37847 = state_37792;
(statearr_37847[(13)] = inst_37670);

(statearr_37847[(15)] = inst_37672);

(statearr_37847[(16)] = inst_37671);

(statearr_37847[(17)] = inst_37669);

return statearr_37847;
})();
var statearr_37848_37915 = state_37792__$1;
(statearr_37848_37915[(2)] = null);

(statearr_37848_37915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (11))){
var inst_37691 = (state_37792[(7)]);
var inst_37669 = (state_37792[(17)]);
var inst_37691__$1 = cljs.core.seq.call(null,inst_37669);
var state_37792__$1 = (function (){var statearr_37849 = state_37792;
(statearr_37849[(7)] = inst_37691__$1);

return statearr_37849;
})();
if(inst_37691__$1){
var statearr_37850_37916 = state_37792__$1;
(statearr_37850_37916[(1)] = (16));

} else {
var statearr_37851_37917 = state_37792__$1;
(statearr_37851_37917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (9))){
var inst_37721 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37852_37918 = state_37792__$1;
(statearr_37852_37918[(2)] = inst_37721);

(statearr_37852_37918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (5))){
var inst_37667 = cljs.core.deref.call(null,cs);
var inst_37668 = cljs.core.seq.call(null,inst_37667);
var inst_37669 = inst_37668;
var inst_37670 = null;
var inst_37671 = (0);
var inst_37672 = (0);
var state_37792__$1 = (function (){var statearr_37853 = state_37792;
(statearr_37853[(13)] = inst_37670);

(statearr_37853[(15)] = inst_37672);

(statearr_37853[(16)] = inst_37671);

(statearr_37853[(17)] = inst_37669);

return statearr_37853;
})();
var statearr_37854_37919 = state_37792__$1;
(statearr_37854_37919[(2)] = null);

(statearr_37854_37919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (14))){
var state_37792__$1 = state_37792;
var statearr_37855_37920 = state_37792__$1;
(statearr_37855_37920[(2)] = null);

(statearr_37855_37920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (45))){
var inst_37782 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37856_37921 = state_37792__$1;
(statearr_37856_37921[(2)] = inst_37782);

(statearr_37856_37921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (26))){
var inst_37724 = (state_37792[(29)]);
var inst_37778 = (state_37792[(2)]);
var inst_37779 = cljs.core.seq.call(null,inst_37724);
var state_37792__$1 = (function (){var statearr_37857 = state_37792;
(statearr_37857[(31)] = inst_37778);

return statearr_37857;
})();
if(inst_37779){
var statearr_37858_37922 = state_37792__$1;
(statearr_37858_37922[(1)] = (42));

} else {
var statearr_37859_37923 = state_37792__$1;
(statearr_37859_37923[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (16))){
var inst_37691 = (state_37792[(7)]);
var inst_37693 = cljs.core.chunked_seq_QMARK_.call(null,inst_37691);
var state_37792__$1 = state_37792;
if(inst_37693){
var statearr_37860_37924 = state_37792__$1;
(statearr_37860_37924[(1)] = (19));

} else {
var statearr_37861_37925 = state_37792__$1;
(statearr_37861_37925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (38))){
var inst_37771 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37862_37926 = state_37792__$1;
(statearr_37862_37926[(2)] = inst_37771);

(statearr_37862_37926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (30))){
var state_37792__$1 = state_37792;
var statearr_37863_37927 = state_37792__$1;
(statearr_37863_37927[(2)] = null);

(statearr_37863_37927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (10))){
var inst_37670 = (state_37792[(13)]);
var inst_37672 = (state_37792[(15)]);
var inst_37680 = cljs.core._nth.call(null,inst_37670,inst_37672);
var inst_37681 = cljs.core.nth.call(null,inst_37680,(0),null);
var inst_37682 = cljs.core.nth.call(null,inst_37680,(1),null);
var state_37792__$1 = (function (){var statearr_37864 = state_37792;
(statearr_37864[(26)] = inst_37681);

return statearr_37864;
})();
if(cljs.core.truth_(inst_37682)){
var statearr_37865_37928 = state_37792__$1;
(statearr_37865_37928[(1)] = (13));

} else {
var statearr_37866_37929 = state_37792__$1;
(statearr_37866_37929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (18))){
var inst_37717 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37867_37930 = state_37792__$1;
(statearr_37867_37930[(2)] = inst_37717);

(statearr_37867_37930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (42))){
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(45),dchan);
} else {
if((state_val_37793 === (37))){
var inst_37660 = (state_37792[(10)]);
var inst_37760 = (state_37792[(23)]);
var inst_37751 = (state_37792[(25)]);
var inst_37760__$1 = cljs.core.first.call(null,inst_37751);
var inst_37761 = cljs.core.async.put_BANG_.call(null,inst_37760__$1,inst_37660,done);
var state_37792__$1 = (function (){var statearr_37868 = state_37792;
(statearr_37868[(23)] = inst_37760__$1);

return statearr_37868;
})();
if(cljs.core.truth_(inst_37761)){
var statearr_37869_37931 = state_37792__$1;
(statearr_37869_37931[(1)] = (39));

} else {
var statearr_37870_37932 = state_37792__$1;
(statearr_37870_37932[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (8))){
var inst_37672 = (state_37792[(15)]);
var inst_37671 = (state_37792[(16)]);
var inst_37674 = (inst_37672 < inst_37671);
var inst_37675 = inst_37674;
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37675)){
var statearr_37871_37933 = state_37792__$1;
(statearr_37871_37933[(1)] = (10));

} else {
var statearr_37872_37934 = state_37792__$1;
(statearr_37872_37934[(1)] = (11));

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
});})(c__36543__auto___37880,cs,m,dchan,dctr,done))
;
return ((function (switch__36429__auto__,c__36543__auto___37880,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36430__auto__ = null;
var cljs$core$async$mult_$_state_machine__36430__auto____0 = (function (){
var statearr_37876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37876[(0)] = cljs$core$async$mult_$_state_machine__36430__auto__);

(statearr_37876[(1)] = (1));

return statearr_37876;
});
var cljs$core$async$mult_$_state_machine__36430__auto____1 = (function (state_37792){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_37792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e37877){if((e37877 instanceof Object)){
var ex__36433__auto__ = e37877;
var statearr_37878_37935 = state_37792;
(statearr_37878_37935[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37936 = state_37792;
state_37792 = G__37936;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36430__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36430__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36430__auto____0;
cljs$core$async$mult_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36430__auto____1;
return cljs$core$async$mult_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___37880,cs,m,dchan,dctr,done))
})();
var state__36545__auto__ = (function (){var statearr_37879 = f__36544__auto__.call(null);
(statearr_37879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___37880);

return statearr_37879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___37880,cs,m,dchan,dctr,done))
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
var args37937 = [];
var len__28342__auto___37940 = arguments.length;
var i__28343__auto___37941 = (0);
while(true){
if((i__28343__auto___37941 < len__28342__auto___37940)){
args37937.push((arguments[i__28343__auto___37941]));

var G__37942 = (i__28343__auto___37941 + (1));
i__28343__auto___37941 = G__37942;
continue;
} else {
}
break;
}

var G__37939 = args37937.length;
switch (G__37939) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37937.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,ch);
} else {
var m__27840__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,ch);
} else {
var m__27840__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m);
} else {
var m__27840__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,state_map);
} else {
var m__27840__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27839__auto__ = (((m == null))?null:m);
var m__27840__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,m,mode);
} else {
var m__27840__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28349__auto__ = [];
var len__28342__auto___37954 = arguments.length;
var i__28343__auto___37955 = (0);
while(true){
if((i__28343__auto___37955 < len__28342__auto___37954)){
args__28349__auto__.push((arguments[i__28343__auto___37955]));

var G__37956 = (i__28343__auto___37955 + (1));
i__28343__auto___37955 = G__37956;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((3) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28350__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37948){
var map__37949 = p__37948;
var map__37949__$1 = ((((!((map__37949 == null)))?((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);
var opts = map__37949__$1;
var statearr_37951_37957 = state;
(statearr_37951_37957[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__37949,map__37949__$1,opts){
return (function (val){
var statearr_37952_37958 = state;
(statearr_37952_37958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37949,map__37949__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_37953_37959 = state;
(statearr_37953_37959[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37944){
var G__37945 = cljs.core.first.call(null,seq37944);
var seq37944__$1 = cljs.core.next.call(null,seq37944);
var G__37946 = cljs.core.first.call(null,seq37944__$1);
var seq37944__$2 = cljs.core.next.call(null,seq37944__$1);
var G__37947 = cljs.core.first.call(null,seq37944__$2);
var seq37944__$3 = cljs.core.next.call(null,seq37944__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37945,G__37946,G__37947,seq37944__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38127 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38128){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38128 = meta38128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38129,meta38128__$1){
var self__ = this;
var _38129__$1 = this;
return (new cljs.core.async.t_cljs$core$async38127(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38129){
var self__ = this;
var _38129__$1 = this;
return self__.meta38128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async38127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38127.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38128","meta38128",-328764822,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38127";

cljs.core.async.t_cljs$core$async38127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38128){
return (new cljs.core.async.t_cljs$core$async38127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38127(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36543__auto___38294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38231){
var state_val_38232 = (state_38231[(1)]);
if((state_val_38232 === (7))){
var inst_38146 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
var statearr_38233_38295 = state_38231__$1;
(statearr_38233_38295[(2)] = inst_38146);

(statearr_38233_38295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (20))){
var inst_38158 = (state_38231[(7)]);
var state_38231__$1 = state_38231;
var statearr_38234_38296 = state_38231__$1;
(statearr_38234_38296[(2)] = inst_38158);

(statearr_38234_38296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (27))){
var state_38231__$1 = state_38231;
var statearr_38235_38297 = state_38231__$1;
(statearr_38235_38297[(2)] = null);

(statearr_38235_38297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (1))){
var inst_38133 = (state_38231[(8)]);
var inst_38133__$1 = calc_state.call(null);
var inst_38135 = (inst_38133__$1 == null);
var inst_38136 = cljs.core.not.call(null,inst_38135);
var state_38231__$1 = (function (){var statearr_38236 = state_38231;
(statearr_38236[(8)] = inst_38133__$1);

return statearr_38236;
})();
if(inst_38136){
var statearr_38237_38298 = state_38231__$1;
(statearr_38237_38298[(1)] = (2));

} else {
var statearr_38238_38299 = state_38231__$1;
(statearr_38238_38299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (24))){
var inst_38191 = (state_38231[(9)]);
var inst_38205 = (state_38231[(10)]);
var inst_38182 = (state_38231[(11)]);
var inst_38205__$1 = inst_38182.call(null,inst_38191);
var state_38231__$1 = (function (){var statearr_38239 = state_38231;
(statearr_38239[(10)] = inst_38205__$1);

return statearr_38239;
})();
if(cljs.core.truth_(inst_38205__$1)){
var statearr_38240_38300 = state_38231__$1;
(statearr_38240_38300[(1)] = (29));

} else {
var statearr_38241_38301 = state_38231__$1;
(statearr_38241_38301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (4))){
var inst_38149 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38149)){
var statearr_38242_38302 = state_38231__$1;
(statearr_38242_38302[(1)] = (8));

} else {
var statearr_38243_38303 = state_38231__$1;
(statearr_38243_38303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (15))){
var inst_38176 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38176)){
var statearr_38244_38304 = state_38231__$1;
(statearr_38244_38304[(1)] = (19));

} else {
var statearr_38245_38305 = state_38231__$1;
(statearr_38245_38305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (21))){
var inst_38181 = (state_38231[(12)]);
var inst_38181__$1 = (state_38231[(2)]);
var inst_38182 = cljs.core.get.call(null,inst_38181__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38183 = cljs.core.get.call(null,inst_38181__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38184 = cljs.core.get.call(null,inst_38181__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38231__$1 = (function (){var statearr_38246 = state_38231;
(statearr_38246[(12)] = inst_38181__$1);

(statearr_38246[(13)] = inst_38183);

(statearr_38246[(11)] = inst_38182);

return statearr_38246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38231__$1,(22),inst_38184);
} else {
if((state_val_38232 === (31))){
var inst_38213 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38213)){
var statearr_38247_38306 = state_38231__$1;
(statearr_38247_38306[(1)] = (32));

} else {
var statearr_38248_38307 = state_38231__$1;
(statearr_38248_38307[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (32))){
var inst_38190 = (state_38231[(14)]);
var state_38231__$1 = state_38231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38231__$1,(35),out,inst_38190);
} else {
if((state_val_38232 === (33))){
var inst_38181 = (state_38231[(12)]);
var inst_38158 = inst_38181;
var state_38231__$1 = (function (){var statearr_38249 = state_38231;
(statearr_38249[(7)] = inst_38158);

return statearr_38249;
})();
var statearr_38250_38308 = state_38231__$1;
(statearr_38250_38308[(2)] = null);

(statearr_38250_38308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (13))){
var inst_38158 = (state_38231[(7)]);
var inst_38165 = inst_38158.cljs$lang$protocol_mask$partition0$;
var inst_38166 = (inst_38165 & (64));
var inst_38167 = inst_38158.cljs$core$ISeq$;
var inst_38168 = (cljs.core.PROTOCOL_SENTINEL === inst_38167);
var inst_38169 = (inst_38166) || (inst_38168);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38169)){
var statearr_38251_38309 = state_38231__$1;
(statearr_38251_38309[(1)] = (16));

} else {
var statearr_38252_38310 = state_38231__$1;
(statearr_38252_38310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (22))){
var inst_38190 = (state_38231[(14)]);
var inst_38191 = (state_38231[(9)]);
var inst_38189 = (state_38231[(2)]);
var inst_38190__$1 = cljs.core.nth.call(null,inst_38189,(0),null);
var inst_38191__$1 = cljs.core.nth.call(null,inst_38189,(1),null);
var inst_38192 = (inst_38190__$1 == null);
var inst_38193 = cljs.core._EQ_.call(null,inst_38191__$1,change);
var inst_38194 = (inst_38192) || (inst_38193);
var state_38231__$1 = (function (){var statearr_38253 = state_38231;
(statearr_38253[(14)] = inst_38190__$1);

(statearr_38253[(9)] = inst_38191__$1);

return statearr_38253;
})();
if(cljs.core.truth_(inst_38194)){
var statearr_38254_38311 = state_38231__$1;
(statearr_38254_38311[(1)] = (23));

} else {
var statearr_38255_38312 = state_38231__$1;
(statearr_38255_38312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (36))){
var inst_38181 = (state_38231[(12)]);
var inst_38158 = inst_38181;
var state_38231__$1 = (function (){var statearr_38256 = state_38231;
(statearr_38256[(7)] = inst_38158);

return statearr_38256;
})();
var statearr_38257_38313 = state_38231__$1;
(statearr_38257_38313[(2)] = null);

(statearr_38257_38313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (29))){
var inst_38205 = (state_38231[(10)]);
var state_38231__$1 = state_38231;
var statearr_38258_38314 = state_38231__$1;
(statearr_38258_38314[(2)] = inst_38205);

(statearr_38258_38314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (6))){
var state_38231__$1 = state_38231;
var statearr_38259_38315 = state_38231__$1;
(statearr_38259_38315[(2)] = false);

(statearr_38259_38315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (28))){
var inst_38201 = (state_38231[(2)]);
var inst_38202 = calc_state.call(null);
var inst_38158 = inst_38202;
var state_38231__$1 = (function (){var statearr_38260 = state_38231;
(statearr_38260[(7)] = inst_38158);

(statearr_38260[(15)] = inst_38201);

return statearr_38260;
})();
var statearr_38261_38316 = state_38231__$1;
(statearr_38261_38316[(2)] = null);

(statearr_38261_38316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (25))){
var inst_38227 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
var statearr_38262_38317 = state_38231__$1;
(statearr_38262_38317[(2)] = inst_38227);

(statearr_38262_38317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (34))){
var inst_38225 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
var statearr_38263_38318 = state_38231__$1;
(statearr_38263_38318[(2)] = inst_38225);

(statearr_38263_38318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (17))){
var state_38231__$1 = state_38231;
var statearr_38264_38319 = state_38231__$1;
(statearr_38264_38319[(2)] = false);

(statearr_38264_38319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (3))){
var state_38231__$1 = state_38231;
var statearr_38265_38320 = state_38231__$1;
(statearr_38265_38320[(2)] = false);

(statearr_38265_38320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (12))){
var inst_38229 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38231__$1,inst_38229);
} else {
if((state_val_38232 === (2))){
var inst_38133 = (state_38231[(8)]);
var inst_38138 = inst_38133.cljs$lang$protocol_mask$partition0$;
var inst_38139 = (inst_38138 & (64));
var inst_38140 = inst_38133.cljs$core$ISeq$;
var inst_38141 = (cljs.core.PROTOCOL_SENTINEL === inst_38140);
var inst_38142 = (inst_38139) || (inst_38141);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38142)){
var statearr_38266_38321 = state_38231__$1;
(statearr_38266_38321[(1)] = (5));

} else {
var statearr_38267_38322 = state_38231__$1;
(statearr_38267_38322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (23))){
var inst_38190 = (state_38231[(14)]);
var inst_38196 = (inst_38190 == null);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38196)){
var statearr_38268_38323 = state_38231__$1;
(statearr_38268_38323[(1)] = (26));

} else {
var statearr_38269_38324 = state_38231__$1;
(statearr_38269_38324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (35))){
var inst_38216 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
if(cljs.core.truth_(inst_38216)){
var statearr_38270_38325 = state_38231__$1;
(statearr_38270_38325[(1)] = (36));

} else {
var statearr_38271_38326 = state_38231__$1;
(statearr_38271_38326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (19))){
var inst_38158 = (state_38231[(7)]);
var inst_38178 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38158);
var state_38231__$1 = state_38231;
var statearr_38272_38327 = state_38231__$1;
(statearr_38272_38327[(2)] = inst_38178);

(statearr_38272_38327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (11))){
var inst_38158 = (state_38231[(7)]);
var inst_38162 = (inst_38158 == null);
var inst_38163 = cljs.core.not.call(null,inst_38162);
var state_38231__$1 = state_38231;
if(inst_38163){
var statearr_38273_38328 = state_38231__$1;
(statearr_38273_38328[(1)] = (13));

} else {
var statearr_38274_38329 = state_38231__$1;
(statearr_38274_38329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (9))){
var inst_38133 = (state_38231[(8)]);
var state_38231__$1 = state_38231;
var statearr_38275_38330 = state_38231__$1;
(statearr_38275_38330[(2)] = inst_38133);

(statearr_38275_38330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (5))){
var state_38231__$1 = state_38231;
var statearr_38276_38331 = state_38231__$1;
(statearr_38276_38331[(2)] = true);

(statearr_38276_38331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (14))){
var state_38231__$1 = state_38231;
var statearr_38277_38332 = state_38231__$1;
(statearr_38277_38332[(2)] = false);

(statearr_38277_38332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (26))){
var inst_38191 = (state_38231[(9)]);
var inst_38198 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38191);
var state_38231__$1 = state_38231;
var statearr_38278_38333 = state_38231__$1;
(statearr_38278_38333[(2)] = inst_38198);

(statearr_38278_38333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (16))){
var state_38231__$1 = state_38231;
var statearr_38279_38334 = state_38231__$1;
(statearr_38279_38334[(2)] = true);

(statearr_38279_38334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (38))){
var inst_38221 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
var statearr_38280_38335 = state_38231__$1;
(statearr_38280_38335[(2)] = inst_38221);

(statearr_38280_38335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (30))){
var inst_38191 = (state_38231[(9)]);
var inst_38183 = (state_38231[(13)]);
var inst_38182 = (state_38231[(11)]);
var inst_38208 = cljs.core.empty_QMARK_.call(null,inst_38182);
var inst_38209 = inst_38183.call(null,inst_38191);
var inst_38210 = cljs.core.not.call(null,inst_38209);
var inst_38211 = (inst_38208) && (inst_38210);
var state_38231__$1 = state_38231;
var statearr_38281_38336 = state_38231__$1;
(statearr_38281_38336[(2)] = inst_38211);

(statearr_38281_38336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (10))){
var inst_38133 = (state_38231[(8)]);
var inst_38154 = (state_38231[(2)]);
var inst_38155 = cljs.core.get.call(null,inst_38154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38156 = cljs.core.get.call(null,inst_38154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38157 = cljs.core.get.call(null,inst_38154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38158 = inst_38133;
var state_38231__$1 = (function (){var statearr_38282 = state_38231;
(statearr_38282[(7)] = inst_38158);

(statearr_38282[(16)] = inst_38157);

(statearr_38282[(17)] = inst_38156);

(statearr_38282[(18)] = inst_38155);

return statearr_38282;
})();
var statearr_38283_38337 = state_38231__$1;
(statearr_38283_38337[(2)] = null);

(statearr_38283_38337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (18))){
var inst_38173 = (state_38231[(2)]);
var state_38231__$1 = state_38231;
var statearr_38284_38338 = state_38231__$1;
(statearr_38284_38338[(2)] = inst_38173);

(statearr_38284_38338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (37))){
var state_38231__$1 = state_38231;
var statearr_38285_38339 = state_38231__$1;
(statearr_38285_38339[(2)] = null);

(statearr_38285_38339[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38232 === (8))){
var inst_38133 = (state_38231[(8)]);
var inst_38151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38133);
var state_38231__$1 = state_38231;
var statearr_38286_38340 = state_38231__$1;
(statearr_38286_38340[(2)] = inst_38151);

(statearr_38286_38340[(1)] = (10));


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
});})(c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36429__auto__,c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36430__auto__ = null;
var cljs$core$async$mix_$_state_machine__36430__auto____0 = (function (){
var statearr_38290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38290[(0)] = cljs$core$async$mix_$_state_machine__36430__auto__);

(statearr_38290[(1)] = (1));

return statearr_38290;
});
var cljs$core$async$mix_$_state_machine__36430__auto____1 = (function (state_38231){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38291){if((e38291 instanceof Object)){
var ex__36433__auto__ = e38291;
var statearr_38292_38341 = state_38231;
(statearr_38292_38341[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_38231;
state_38231 = G__38342;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36430__auto__ = function(state_38231){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36430__auto____1.call(this,state_38231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36430__auto____0;
cljs$core$async$mix_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36430__auto____1;
return cljs$core$async$mix_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36545__auto__ = (function (){var statearr_38293 = f__36544__auto__.call(null);
(statearr_38293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38294);

return statearr_38293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27839__auto__ = (((p == null))?null:p);
var m__27840__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27840__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27839__auto__ = (((p == null))?null:p);
var m__27840__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,p,v,ch);
} else {
var m__27840__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38343 = [];
var len__28342__auto___38346 = arguments.length;
var i__28343__auto___38347 = (0);
while(true){
if((i__28343__auto___38347 < len__28342__auto___38346)){
args38343.push((arguments[i__28343__auto___38347]));

var G__38348 = (i__28343__auto___38347 + (1));
i__28343__auto___38347 = G__38348;
continue;
} else {
}
break;
}

var G__38345 = args38343.length;
switch (G__38345) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38343.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27839__auto__ = (((p == null))?null:p);
var m__27840__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,p);
} else {
var m__27840__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27839__auto__ = (((p == null))?null:p);
var m__27840__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27839__auto__)]);
if(!((m__27840__auto__ == null))){
return m__27840__auto__.call(null,p,v);
} else {
var m__27840__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27840__auto____$1 == null))){
return m__27840__auto____$1.call(null,p,v);
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
var args38351 = [];
var len__28342__auto___38476 = arguments.length;
var i__28343__auto___38477 = (0);
while(true){
if((i__28343__auto___38477 < len__28342__auto___38476)){
args38351.push((arguments[i__28343__auto___38477]));

var G__38478 = (i__28343__auto___38477 + (1));
i__28343__auto___38477 = G__38478;
continue;
} else {
}
break;
}

var G__38353 = args38351.length;
switch (G__38353) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38351.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27121__auto__,mults){
return (function (p1__38350_SHARP_){
if(cljs.core.truth_(p1__38350_SHARP_.call(null,topic))){
return p1__38350_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38350_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38354 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38355){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38355 = meta38355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38356,meta38355__$1){
var self__ = this;
var _38356__$1 = this;
return (new cljs.core.async.t_cljs$core$async38354(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38355__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38356){
var self__ = this;
var _38356__$1 = this;
return self__.meta38355;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async38354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38354.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38355","meta38355",-933228233,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38354";

cljs.core.async.t_cljs$core$async38354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38354");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38354 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38355){
return (new cljs.core.async.t_cljs$core$async38354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38354(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36543__auto___38480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38480,mults,ensure_mult,p){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38480,mults,ensure_mult,p){
return (function (state_38428){
var state_val_38429 = (state_38428[(1)]);
if((state_val_38429 === (7))){
var inst_38424 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38430_38481 = state_38428__$1;
(statearr_38430_38481[(2)] = inst_38424);

(statearr_38430_38481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (20))){
var state_38428__$1 = state_38428;
var statearr_38431_38482 = state_38428__$1;
(statearr_38431_38482[(2)] = null);

(statearr_38431_38482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (1))){
var state_38428__$1 = state_38428;
var statearr_38432_38483 = state_38428__$1;
(statearr_38432_38483[(2)] = null);

(statearr_38432_38483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (24))){
var inst_38407 = (state_38428[(7)]);
var inst_38416 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38407);
var state_38428__$1 = state_38428;
var statearr_38433_38484 = state_38428__$1;
(statearr_38433_38484[(2)] = inst_38416);

(statearr_38433_38484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (4))){
var inst_38359 = (state_38428[(8)]);
var inst_38359__$1 = (state_38428[(2)]);
var inst_38360 = (inst_38359__$1 == null);
var state_38428__$1 = (function (){var statearr_38434 = state_38428;
(statearr_38434[(8)] = inst_38359__$1);

return statearr_38434;
})();
if(cljs.core.truth_(inst_38360)){
var statearr_38435_38485 = state_38428__$1;
(statearr_38435_38485[(1)] = (5));

} else {
var statearr_38436_38486 = state_38428__$1;
(statearr_38436_38486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (15))){
var inst_38401 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38437_38487 = state_38428__$1;
(statearr_38437_38487[(2)] = inst_38401);

(statearr_38437_38487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (21))){
var inst_38421 = (state_38428[(2)]);
var state_38428__$1 = (function (){var statearr_38438 = state_38428;
(statearr_38438[(9)] = inst_38421);

return statearr_38438;
})();
var statearr_38439_38488 = state_38428__$1;
(statearr_38439_38488[(2)] = null);

(statearr_38439_38488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (13))){
var inst_38383 = (state_38428[(10)]);
var inst_38385 = cljs.core.chunked_seq_QMARK_.call(null,inst_38383);
var state_38428__$1 = state_38428;
if(inst_38385){
var statearr_38440_38489 = state_38428__$1;
(statearr_38440_38489[(1)] = (16));

} else {
var statearr_38441_38490 = state_38428__$1;
(statearr_38441_38490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (22))){
var inst_38413 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
if(cljs.core.truth_(inst_38413)){
var statearr_38442_38491 = state_38428__$1;
(statearr_38442_38491[(1)] = (23));

} else {
var statearr_38443_38492 = state_38428__$1;
(statearr_38443_38492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (6))){
var inst_38409 = (state_38428[(11)]);
var inst_38407 = (state_38428[(7)]);
var inst_38359 = (state_38428[(8)]);
var inst_38407__$1 = topic_fn.call(null,inst_38359);
var inst_38408 = cljs.core.deref.call(null,mults);
var inst_38409__$1 = cljs.core.get.call(null,inst_38408,inst_38407__$1);
var state_38428__$1 = (function (){var statearr_38444 = state_38428;
(statearr_38444[(11)] = inst_38409__$1);

(statearr_38444[(7)] = inst_38407__$1);

return statearr_38444;
})();
if(cljs.core.truth_(inst_38409__$1)){
var statearr_38445_38493 = state_38428__$1;
(statearr_38445_38493[(1)] = (19));

} else {
var statearr_38446_38494 = state_38428__$1;
(statearr_38446_38494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (25))){
var inst_38418 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38447_38495 = state_38428__$1;
(statearr_38447_38495[(2)] = inst_38418);

(statearr_38447_38495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (17))){
var inst_38383 = (state_38428[(10)]);
var inst_38392 = cljs.core.first.call(null,inst_38383);
var inst_38393 = cljs.core.async.muxch_STAR_.call(null,inst_38392);
var inst_38394 = cljs.core.async.close_BANG_.call(null,inst_38393);
var inst_38395 = cljs.core.next.call(null,inst_38383);
var inst_38369 = inst_38395;
var inst_38370 = null;
var inst_38371 = (0);
var inst_38372 = (0);
var state_38428__$1 = (function (){var statearr_38448 = state_38428;
(statearr_38448[(12)] = inst_38369);

(statearr_38448[(13)] = inst_38372);

(statearr_38448[(14)] = inst_38394);

(statearr_38448[(15)] = inst_38370);

(statearr_38448[(16)] = inst_38371);

return statearr_38448;
})();
var statearr_38449_38496 = state_38428__$1;
(statearr_38449_38496[(2)] = null);

(statearr_38449_38496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (3))){
var inst_38426 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38428__$1,inst_38426);
} else {
if((state_val_38429 === (12))){
var inst_38403 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38450_38497 = state_38428__$1;
(statearr_38450_38497[(2)] = inst_38403);

(statearr_38450_38497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (2))){
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38428__$1,(4),ch);
} else {
if((state_val_38429 === (23))){
var state_38428__$1 = state_38428;
var statearr_38451_38498 = state_38428__$1;
(statearr_38451_38498[(2)] = null);

(statearr_38451_38498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (19))){
var inst_38409 = (state_38428[(11)]);
var inst_38359 = (state_38428[(8)]);
var inst_38411 = cljs.core.async.muxch_STAR_.call(null,inst_38409);
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38428__$1,(22),inst_38411,inst_38359);
} else {
if((state_val_38429 === (11))){
var inst_38383 = (state_38428[(10)]);
var inst_38369 = (state_38428[(12)]);
var inst_38383__$1 = cljs.core.seq.call(null,inst_38369);
var state_38428__$1 = (function (){var statearr_38452 = state_38428;
(statearr_38452[(10)] = inst_38383__$1);

return statearr_38452;
})();
if(inst_38383__$1){
var statearr_38453_38499 = state_38428__$1;
(statearr_38453_38499[(1)] = (13));

} else {
var statearr_38454_38500 = state_38428__$1;
(statearr_38454_38500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (9))){
var inst_38405 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38455_38501 = state_38428__$1;
(statearr_38455_38501[(2)] = inst_38405);

(statearr_38455_38501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (5))){
var inst_38366 = cljs.core.deref.call(null,mults);
var inst_38367 = cljs.core.vals.call(null,inst_38366);
var inst_38368 = cljs.core.seq.call(null,inst_38367);
var inst_38369 = inst_38368;
var inst_38370 = null;
var inst_38371 = (0);
var inst_38372 = (0);
var state_38428__$1 = (function (){var statearr_38456 = state_38428;
(statearr_38456[(12)] = inst_38369);

(statearr_38456[(13)] = inst_38372);

(statearr_38456[(15)] = inst_38370);

(statearr_38456[(16)] = inst_38371);

return statearr_38456;
})();
var statearr_38457_38502 = state_38428__$1;
(statearr_38457_38502[(2)] = null);

(statearr_38457_38502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (14))){
var state_38428__$1 = state_38428;
var statearr_38461_38503 = state_38428__$1;
(statearr_38461_38503[(2)] = null);

(statearr_38461_38503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (16))){
var inst_38383 = (state_38428[(10)]);
var inst_38387 = cljs.core.chunk_first.call(null,inst_38383);
var inst_38388 = cljs.core.chunk_rest.call(null,inst_38383);
var inst_38389 = cljs.core.count.call(null,inst_38387);
var inst_38369 = inst_38388;
var inst_38370 = inst_38387;
var inst_38371 = inst_38389;
var inst_38372 = (0);
var state_38428__$1 = (function (){var statearr_38462 = state_38428;
(statearr_38462[(12)] = inst_38369);

(statearr_38462[(13)] = inst_38372);

(statearr_38462[(15)] = inst_38370);

(statearr_38462[(16)] = inst_38371);

return statearr_38462;
})();
var statearr_38463_38504 = state_38428__$1;
(statearr_38463_38504[(2)] = null);

(statearr_38463_38504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (10))){
var inst_38369 = (state_38428[(12)]);
var inst_38372 = (state_38428[(13)]);
var inst_38370 = (state_38428[(15)]);
var inst_38371 = (state_38428[(16)]);
var inst_38377 = cljs.core._nth.call(null,inst_38370,inst_38372);
var inst_38378 = cljs.core.async.muxch_STAR_.call(null,inst_38377);
var inst_38379 = cljs.core.async.close_BANG_.call(null,inst_38378);
var inst_38380 = (inst_38372 + (1));
var tmp38458 = inst_38369;
var tmp38459 = inst_38370;
var tmp38460 = inst_38371;
var inst_38369__$1 = tmp38458;
var inst_38370__$1 = tmp38459;
var inst_38371__$1 = tmp38460;
var inst_38372__$1 = inst_38380;
var state_38428__$1 = (function (){var statearr_38464 = state_38428;
(statearr_38464[(12)] = inst_38369__$1);

(statearr_38464[(17)] = inst_38379);

(statearr_38464[(13)] = inst_38372__$1);

(statearr_38464[(15)] = inst_38370__$1);

(statearr_38464[(16)] = inst_38371__$1);

return statearr_38464;
})();
var statearr_38465_38505 = state_38428__$1;
(statearr_38465_38505[(2)] = null);

(statearr_38465_38505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (18))){
var inst_38398 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38466_38506 = state_38428__$1;
(statearr_38466_38506[(2)] = inst_38398);

(statearr_38466_38506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (8))){
var inst_38372 = (state_38428[(13)]);
var inst_38371 = (state_38428[(16)]);
var inst_38374 = (inst_38372 < inst_38371);
var inst_38375 = inst_38374;
var state_38428__$1 = state_38428;
if(cljs.core.truth_(inst_38375)){
var statearr_38467_38507 = state_38428__$1;
(statearr_38467_38507[(1)] = (10));

} else {
var statearr_38468_38508 = state_38428__$1;
(statearr_38468_38508[(1)] = (11));

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
});})(c__36543__auto___38480,mults,ensure_mult,p))
;
return ((function (switch__36429__auto__,c__36543__auto___38480,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_38472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38472[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_38472[(1)] = (1));

return statearr_38472;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_38428){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38473){if((e38473 instanceof Object)){
var ex__36433__auto__ = e38473;
var statearr_38474_38509 = state_38428;
(statearr_38474_38509[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38510 = state_38428;
state_38428 = G__38510;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_38428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_38428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38480,mults,ensure_mult,p))
})();
var state__36545__auto__ = (function (){var statearr_38475 = f__36544__auto__.call(null);
(statearr_38475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38480);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38480,mults,ensure_mult,p))
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
var args38511 = [];
var len__28342__auto___38514 = arguments.length;
var i__28343__auto___38515 = (0);
while(true){
if((i__28343__auto___38515 < len__28342__auto___38514)){
args38511.push((arguments[i__28343__auto___38515]));

var G__38516 = (i__28343__auto___38515 + (1));
i__28343__auto___38515 = G__38516;
continue;
} else {
}
break;
}

var G__38513 = args38511.length;
switch (G__38513) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38511.length)].join('')));

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
var args38518 = [];
var len__28342__auto___38521 = arguments.length;
var i__28343__auto___38522 = (0);
while(true){
if((i__28343__auto___38522 < len__28342__auto___38521)){
args38518.push((arguments[i__28343__auto___38522]));

var G__38523 = (i__28343__auto___38522 + (1));
i__28343__auto___38522 = G__38523;
continue;
} else {
}
break;
}

var G__38520 = args38518.length;
switch (G__38520) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38518.length)].join('')));

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
var args38525 = [];
var len__28342__auto___38596 = arguments.length;
var i__28343__auto___38597 = (0);
while(true){
if((i__28343__auto___38597 < len__28342__auto___38596)){
args38525.push((arguments[i__28343__auto___38597]));

var G__38598 = (i__28343__auto___38597 + (1));
i__28343__auto___38597 = G__38598;
continue;
} else {
}
break;
}

var G__38527 = args38525.length;
switch (G__38527) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38525.length)].join('')));

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
var c__36543__auto___38600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38566){
var state_val_38567 = (state_38566[(1)]);
if((state_val_38567 === (7))){
var state_38566__$1 = state_38566;
var statearr_38568_38601 = state_38566__$1;
(statearr_38568_38601[(2)] = null);

(statearr_38568_38601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (1))){
var state_38566__$1 = state_38566;
var statearr_38569_38602 = state_38566__$1;
(statearr_38569_38602[(2)] = null);

(statearr_38569_38602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (4))){
var inst_38530 = (state_38566[(7)]);
var inst_38532 = (inst_38530 < cnt);
var state_38566__$1 = state_38566;
if(cljs.core.truth_(inst_38532)){
var statearr_38570_38603 = state_38566__$1;
(statearr_38570_38603[(1)] = (6));

} else {
var statearr_38571_38604 = state_38566__$1;
(statearr_38571_38604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (15))){
var inst_38562 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38572_38605 = state_38566__$1;
(statearr_38572_38605[(2)] = inst_38562);

(statearr_38572_38605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (13))){
var inst_38555 = cljs.core.async.close_BANG_.call(null,out);
var state_38566__$1 = state_38566;
var statearr_38573_38606 = state_38566__$1;
(statearr_38573_38606[(2)] = inst_38555);

(statearr_38573_38606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (6))){
var state_38566__$1 = state_38566;
var statearr_38574_38607 = state_38566__$1;
(statearr_38574_38607[(2)] = null);

(statearr_38574_38607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (3))){
var inst_38564 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38566__$1,inst_38564);
} else {
if((state_val_38567 === (12))){
var inst_38552 = (state_38566[(8)]);
var inst_38552__$1 = (state_38566[(2)]);
var inst_38553 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38552__$1);
var state_38566__$1 = (function (){var statearr_38575 = state_38566;
(statearr_38575[(8)] = inst_38552__$1);

return statearr_38575;
})();
if(cljs.core.truth_(inst_38553)){
var statearr_38576_38608 = state_38566__$1;
(statearr_38576_38608[(1)] = (13));

} else {
var statearr_38577_38609 = state_38566__$1;
(statearr_38577_38609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (2))){
var inst_38529 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38530 = (0);
var state_38566__$1 = (function (){var statearr_38578 = state_38566;
(statearr_38578[(7)] = inst_38530);

(statearr_38578[(9)] = inst_38529);

return statearr_38578;
})();
var statearr_38579_38610 = state_38566__$1;
(statearr_38579_38610[(2)] = null);

(statearr_38579_38610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (11))){
var inst_38530 = (state_38566[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38566,(10),Object,null,(9));
var inst_38539 = chs__$1.call(null,inst_38530);
var inst_38540 = done.call(null,inst_38530);
var inst_38541 = cljs.core.async.take_BANG_.call(null,inst_38539,inst_38540);
var state_38566__$1 = state_38566;
var statearr_38580_38611 = state_38566__$1;
(statearr_38580_38611[(2)] = inst_38541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (9))){
var inst_38530 = (state_38566[(7)]);
var inst_38543 = (state_38566[(2)]);
var inst_38544 = (inst_38530 + (1));
var inst_38530__$1 = inst_38544;
var state_38566__$1 = (function (){var statearr_38581 = state_38566;
(statearr_38581[(10)] = inst_38543);

(statearr_38581[(7)] = inst_38530__$1);

return statearr_38581;
})();
var statearr_38582_38612 = state_38566__$1;
(statearr_38582_38612[(2)] = null);

(statearr_38582_38612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (5))){
var inst_38550 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38583 = state_38566;
(statearr_38583[(11)] = inst_38550);

return statearr_38583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38566__$1,(12),dchan);
} else {
if((state_val_38567 === (14))){
var inst_38552 = (state_38566[(8)]);
var inst_38557 = cljs.core.apply.call(null,f,inst_38552);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38566__$1,(16),out,inst_38557);
} else {
if((state_val_38567 === (16))){
var inst_38559 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38584 = state_38566;
(statearr_38584[(12)] = inst_38559);

return statearr_38584;
})();
var statearr_38585_38613 = state_38566__$1;
(statearr_38585_38613[(2)] = null);

(statearr_38585_38613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (10))){
var inst_38534 = (state_38566[(2)]);
var inst_38535 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38566__$1 = (function (){var statearr_38586 = state_38566;
(statearr_38586[(13)] = inst_38534);

return statearr_38586;
})();
var statearr_38587_38614 = state_38566__$1;
(statearr_38587_38614[(2)] = inst_38535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (8))){
var inst_38548 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38588_38615 = state_38566__$1;
(statearr_38588_38615[(2)] = inst_38548);

(statearr_38588_38615[(1)] = (5));


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
});})(c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36429__auto__,c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_38592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38592[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_38592[(1)] = (1));

return statearr_38592;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_38566){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38593){if((e38593 instanceof Object)){
var ex__36433__auto__ = e38593;
var statearr_38594_38616 = state_38566;
(statearr_38594_38616[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38617 = state_38566;
state_38566 = G__38617;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_38566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_38566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36545__auto__ = (function (){var statearr_38595 = f__36544__auto__.call(null);
(statearr_38595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38600);

return statearr_38595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38600,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38619 = [];
var len__28342__auto___38677 = arguments.length;
var i__28343__auto___38678 = (0);
while(true){
if((i__28343__auto___38678 < len__28342__auto___38677)){
args38619.push((arguments[i__28343__auto___38678]));

var G__38679 = (i__28343__auto___38678 + (1));
i__28343__auto___38678 = G__38679;
continue;
} else {
}
break;
}

var G__38621 = args38619.length;
switch (G__38621) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38619.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___38681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38681,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38681,out){
return (function (state_38653){
var state_val_38654 = (state_38653[(1)]);
if((state_val_38654 === (7))){
var inst_38632 = (state_38653[(7)]);
var inst_38633 = (state_38653[(8)]);
var inst_38632__$1 = (state_38653[(2)]);
var inst_38633__$1 = cljs.core.nth.call(null,inst_38632__$1,(0),null);
var inst_38634 = cljs.core.nth.call(null,inst_38632__$1,(1),null);
var inst_38635 = (inst_38633__$1 == null);
var state_38653__$1 = (function (){var statearr_38655 = state_38653;
(statearr_38655[(9)] = inst_38634);

(statearr_38655[(7)] = inst_38632__$1);

(statearr_38655[(8)] = inst_38633__$1);

return statearr_38655;
})();
if(cljs.core.truth_(inst_38635)){
var statearr_38656_38682 = state_38653__$1;
(statearr_38656_38682[(1)] = (8));

} else {
var statearr_38657_38683 = state_38653__$1;
(statearr_38657_38683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (1))){
var inst_38622 = cljs.core.vec.call(null,chs);
var inst_38623 = inst_38622;
var state_38653__$1 = (function (){var statearr_38658 = state_38653;
(statearr_38658[(10)] = inst_38623);

return statearr_38658;
})();
var statearr_38659_38684 = state_38653__$1;
(statearr_38659_38684[(2)] = null);

(statearr_38659_38684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (4))){
var inst_38623 = (state_38653[(10)]);
var state_38653__$1 = state_38653;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38653__$1,(7),inst_38623);
} else {
if((state_val_38654 === (6))){
var inst_38649 = (state_38653[(2)]);
var state_38653__$1 = state_38653;
var statearr_38660_38685 = state_38653__$1;
(statearr_38660_38685[(2)] = inst_38649);

(statearr_38660_38685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (3))){
var inst_38651 = (state_38653[(2)]);
var state_38653__$1 = state_38653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38653__$1,inst_38651);
} else {
if((state_val_38654 === (2))){
var inst_38623 = (state_38653[(10)]);
var inst_38625 = cljs.core.count.call(null,inst_38623);
var inst_38626 = (inst_38625 > (0));
var state_38653__$1 = state_38653;
if(cljs.core.truth_(inst_38626)){
var statearr_38662_38686 = state_38653__$1;
(statearr_38662_38686[(1)] = (4));

} else {
var statearr_38663_38687 = state_38653__$1;
(statearr_38663_38687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (11))){
var inst_38623 = (state_38653[(10)]);
var inst_38642 = (state_38653[(2)]);
var tmp38661 = inst_38623;
var inst_38623__$1 = tmp38661;
var state_38653__$1 = (function (){var statearr_38664 = state_38653;
(statearr_38664[(10)] = inst_38623__$1);

(statearr_38664[(11)] = inst_38642);

return statearr_38664;
})();
var statearr_38665_38688 = state_38653__$1;
(statearr_38665_38688[(2)] = null);

(statearr_38665_38688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (9))){
var inst_38633 = (state_38653[(8)]);
var state_38653__$1 = state_38653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38653__$1,(11),out,inst_38633);
} else {
if((state_val_38654 === (5))){
var inst_38647 = cljs.core.async.close_BANG_.call(null,out);
var state_38653__$1 = state_38653;
var statearr_38666_38689 = state_38653__$1;
(statearr_38666_38689[(2)] = inst_38647);

(statearr_38666_38689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (10))){
var inst_38645 = (state_38653[(2)]);
var state_38653__$1 = state_38653;
var statearr_38667_38690 = state_38653__$1;
(statearr_38667_38690[(2)] = inst_38645);

(statearr_38667_38690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38654 === (8))){
var inst_38623 = (state_38653[(10)]);
var inst_38634 = (state_38653[(9)]);
var inst_38632 = (state_38653[(7)]);
var inst_38633 = (state_38653[(8)]);
var inst_38637 = (function (){var cs = inst_38623;
var vec__38628 = inst_38632;
var v = inst_38633;
var c = inst_38634;
return ((function (cs,vec__38628,v,c,inst_38623,inst_38634,inst_38632,inst_38633,state_val_38654,c__36543__auto___38681,out){
return (function (p1__38618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38618_SHARP_);
});
;})(cs,vec__38628,v,c,inst_38623,inst_38634,inst_38632,inst_38633,state_val_38654,c__36543__auto___38681,out))
})();
var inst_38638 = cljs.core.filterv.call(null,inst_38637,inst_38623);
var inst_38623__$1 = inst_38638;
var state_38653__$1 = (function (){var statearr_38668 = state_38653;
(statearr_38668[(10)] = inst_38623__$1);

return statearr_38668;
})();
var statearr_38669_38691 = state_38653__$1;
(statearr_38669_38691[(2)] = null);

(statearr_38669_38691[(1)] = (2));


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
});})(c__36543__auto___38681,out))
;
return ((function (switch__36429__auto__,c__36543__auto___38681,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_38673 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38673[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_38673[(1)] = (1));

return statearr_38673;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_38653){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38674){if((e38674 instanceof Object)){
var ex__36433__auto__ = e38674;
var statearr_38675_38692 = state_38653;
(statearr_38675_38692[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38693 = state_38653;
state_38653 = G__38693;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_38653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_38653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38681,out))
})();
var state__36545__auto__ = (function (){var statearr_38676 = f__36544__auto__.call(null);
(statearr_38676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38681);

return statearr_38676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38681,out))
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
var args38694 = [];
var len__28342__auto___38743 = arguments.length;
var i__28343__auto___38744 = (0);
while(true){
if((i__28343__auto___38744 < len__28342__auto___38743)){
args38694.push((arguments[i__28343__auto___38744]));

var G__38745 = (i__28343__auto___38744 + (1));
i__28343__auto___38744 = G__38745;
continue;
} else {
}
break;
}

var G__38696 = args38694.length;
switch (G__38696) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38694.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___38747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38747,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38747,out){
return (function (state_38720){
var state_val_38721 = (state_38720[(1)]);
if((state_val_38721 === (7))){
var inst_38702 = (state_38720[(7)]);
var inst_38702__$1 = (state_38720[(2)]);
var inst_38703 = (inst_38702__$1 == null);
var inst_38704 = cljs.core.not.call(null,inst_38703);
var state_38720__$1 = (function (){var statearr_38722 = state_38720;
(statearr_38722[(7)] = inst_38702__$1);

return statearr_38722;
})();
if(inst_38704){
var statearr_38723_38748 = state_38720__$1;
(statearr_38723_38748[(1)] = (8));

} else {
var statearr_38724_38749 = state_38720__$1;
(statearr_38724_38749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (1))){
var inst_38697 = (0);
var state_38720__$1 = (function (){var statearr_38725 = state_38720;
(statearr_38725[(8)] = inst_38697);

return statearr_38725;
})();
var statearr_38726_38750 = state_38720__$1;
(statearr_38726_38750[(2)] = null);

(statearr_38726_38750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (4))){
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38720__$1,(7),ch);
} else {
if((state_val_38721 === (6))){
var inst_38715 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38727_38751 = state_38720__$1;
(statearr_38727_38751[(2)] = inst_38715);

(statearr_38727_38751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (3))){
var inst_38717 = (state_38720[(2)]);
var inst_38718 = cljs.core.async.close_BANG_.call(null,out);
var state_38720__$1 = (function (){var statearr_38728 = state_38720;
(statearr_38728[(9)] = inst_38717);

return statearr_38728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38720__$1,inst_38718);
} else {
if((state_val_38721 === (2))){
var inst_38697 = (state_38720[(8)]);
var inst_38699 = (inst_38697 < n);
var state_38720__$1 = state_38720;
if(cljs.core.truth_(inst_38699)){
var statearr_38729_38752 = state_38720__$1;
(statearr_38729_38752[(1)] = (4));

} else {
var statearr_38730_38753 = state_38720__$1;
(statearr_38730_38753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (11))){
var inst_38697 = (state_38720[(8)]);
var inst_38707 = (state_38720[(2)]);
var inst_38708 = (inst_38697 + (1));
var inst_38697__$1 = inst_38708;
var state_38720__$1 = (function (){var statearr_38731 = state_38720;
(statearr_38731[(10)] = inst_38707);

(statearr_38731[(8)] = inst_38697__$1);

return statearr_38731;
})();
var statearr_38732_38754 = state_38720__$1;
(statearr_38732_38754[(2)] = null);

(statearr_38732_38754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (9))){
var state_38720__$1 = state_38720;
var statearr_38733_38755 = state_38720__$1;
(statearr_38733_38755[(2)] = null);

(statearr_38733_38755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (5))){
var state_38720__$1 = state_38720;
var statearr_38734_38756 = state_38720__$1;
(statearr_38734_38756[(2)] = null);

(statearr_38734_38756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (10))){
var inst_38712 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38735_38757 = state_38720__$1;
(statearr_38735_38757[(2)] = inst_38712);

(statearr_38735_38757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (8))){
var inst_38702 = (state_38720[(7)]);
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38720__$1,(11),out,inst_38702);
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
});})(c__36543__auto___38747,out))
;
return ((function (switch__36429__auto__,c__36543__auto___38747,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_38739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38739[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_38739[(1)] = (1));

return statearr_38739;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_38720){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38740){if((e38740 instanceof Object)){
var ex__36433__auto__ = e38740;
var statearr_38741_38758 = state_38720;
(statearr_38741_38758[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38759 = state_38720;
state_38720 = G__38759;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_38720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_38720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38747,out))
})();
var state__36545__auto__ = (function (){var statearr_38742 = f__36544__auto__.call(null);
(statearr_38742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38747);

return statearr_38742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38747,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38767 = (function (f,ch,meta38768){
this.f = f;
this.ch = ch;
this.meta38768 = meta38768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38769,meta38768__$1){
var self__ = this;
var _38769__$1 = this;
return (new cljs.core.async.t_cljs$core$async38767(self__.f,self__.ch,meta38768__$1));
});


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38769){
var self__ = this;
var _38769__$1 = this;
return self__.meta38768;
});


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38770 = (function (f,ch,meta38768,_,fn1,meta38771){
this.f = f;
this.ch = ch;
this.meta38768 = meta38768;
this._ = _;
this.fn1 = fn1;
this.meta38771 = meta38771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38772,meta38771__$1){
var self__ = this;
var _38772__$1 = this;
return (new cljs.core.async.t_cljs$core$async38770(self__.f,self__.ch,self__.meta38768,self__._,self__.fn1,meta38771__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38772){
var self__ = this;
var _38772__$1 = this;
return self__.meta38771;
});})(___$1))
;


cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async38770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38760_SHARP_){
return f1.call(null,(((p1__38760_SHARP_ == null))?null:self__.f.call(null,p1__38760_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38770.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38768","meta38768",-1282867193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38767","cljs.core.async/t_cljs$core$async38767",638277868,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38771","meta38771",700356205,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38770";

cljs.core.async.t_cljs$core$async38770.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38770");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38770 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38770(f__$1,ch__$1,meta38768__$1,___$2,fn1__$1,meta38771){
return (new cljs.core.async.t_cljs$core$async38770(f__$1,ch__$1,meta38768__$1,___$2,fn1__$1,meta38771));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38770(self__.f,self__.ch,self__.meta38768,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27109__auto__ = ret;
if(cljs.core.truth_(and__27109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38768","meta38768",-1282867193,null)], null);
});

cljs.core.async.t_cljs$core$async38767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38767";

cljs.core.async.t_cljs$core$async38767.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38767");
});

cljs.core.async.__GT_t_cljs$core$async38767 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38767(f__$1,ch__$1,meta38768){
return (new cljs.core.async.t_cljs$core$async38767(f__$1,ch__$1,meta38768));
});

}

return (new cljs.core.async.t_cljs$core$async38767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38776 = (function (f,ch,meta38777){
this.f = f;
this.ch = ch;
this.meta38777 = meta38777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38778,meta38777__$1){
var self__ = this;
var _38778__$1 = this;
return (new cljs.core.async.t_cljs$core$async38776(self__.f,self__.ch,meta38777__$1));
});


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38778){
var self__ = this;
var _38778__$1 = this;
return self__.meta38777;
});


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38777","meta38777",-1381476272,null)], null);
});

cljs.core.async.t_cljs$core$async38776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38776";

cljs.core.async.t_cljs$core$async38776.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38776");
});

cljs.core.async.__GT_t_cljs$core$async38776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38776(f__$1,ch__$1,meta38777){
return (new cljs.core.async.t_cljs$core$async38776(f__$1,ch__$1,meta38777));
});

}

return (new cljs.core.async.t_cljs$core$async38776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38782 = (function (p,ch,meta38783){
this.p = p;
this.ch = ch;
this.meta38783 = meta38783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38784,meta38783__$1){
var self__ = this;
var _38784__$1 = this;
return (new cljs.core.async.t_cljs$core$async38782(self__.p,self__.ch,meta38783__$1));
});


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38784){
var self__ = this;
var _38784__$1 = this;
return self__.meta38783;
});


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38783","meta38783",2033912212,null)], null);
});

cljs.core.async.t_cljs$core$async38782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38782";

cljs.core.async.t_cljs$core$async38782.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.core.async/t_cljs$core$async38782");
});

cljs.core.async.__GT_t_cljs$core$async38782 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38782(p__$1,ch__$1,meta38783){
return (new cljs.core.async.t_cljs$core$async38782(p__$1,ch__$1,meta38783));
});

}

return (new cljs.core.async.t_cljs$core$async38782(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38785 = [];
var len__28342__auto___38829 = arguments.length;
var i__28343__auto___38830 = (0);
while(true){
if((i__28343__auto___38830 < len__28342__auto___38829)){
args38785.push((arguments[i__28343__auto___38830]));

var G__38831 = (i__28343__auto___38830 + (1));
i__28343__auto___38830 = G__38831;
continue;
} else {
}
break;
}

var G__38787 = args38785.length;
switch (G__38787) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38785.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___38833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___38833,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___38833,out){
return (function (state_38808){
var state_val_38809 = (state_38808[(1)]);
if((state_val_38809 === (7))){
var inst_38804 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38810_38834 = state_38808__$1;
(statearr_38810_38834[(2)] = inst_38804);

(statearr_38810_38834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (1))){
var state_38808__$1 = state_38808;
var statearr_38811_38835 = state_38808__$1;
(statearr_38811_38835[(2)] = null);

(statearr_38811_38835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (4))){
var inst_38790 = (state_38808[(7)]);
var inst_38790__$1 = (state_38808[(2)]);
var inst_38791 = (inst_38790__$1 == null);
var state_38808__$1 = (function (){var statearr_38812 = state_38808;
(statearr_38812[(7)] = inst_38790__$1);

return statearr_38812;
})();
if(cljs.core.truth_(inst_38791)){
var statearr_38813_38836 = state_38808__$1;
(statearr_38813_38836[(1)] = (5));

} else {
var statearr_38814_38837 = state_38808__$1;
(statearr_38814_38837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (6))){
var inst_38790 = (state_38808[(7)]);
var inst_38795 = p.call(null,inst_38790);
var state_38808__$1 = state_38808;
if(cljs.core.truth_(inst_38795)){
var statearr_38815_38838 = state_38808__$1;
(statearr_38815_38838[(1)] = (8));

} else {
var statearr_38816_38839 = state_38808__$1;
(statearr_38816_38839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (3))){
var inst_38806 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38808__$1,inst_38806);
} else {
if((state_val_38809 === (2))){
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38808__$1,(4),ch);
} else {
if((state_val_38809 === (11))){
var inst_38798 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38817_38840 = state_38808__$1;
(statearr_38817_38840[(2)] = inst_38798);

(statearr_38817_38840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (9))){
var state_38808__$1 = state_38808;
var statearr_38818_38841 = state_38808__$1;
(statearr_38818_38841[(2)] = null);

(statearr_38818_38841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (5))){
var inst_38793 = cljs.core.async.close_BANG_.call(null,out);
var state_38808__$1 = state_38808;
var statearr_38819_38842 = state_38808__$1;
(statearr_38819_38842[(2)] = inst_38793);

(statearr_38819_38842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (10))){
var inst_38801 = (state_38808[(2)]);
var state_38808__$1 = (function (){var statearr_38820 = state_38808;
(statearr_38820[(8)] = inst_38801);

return statearr_38820;
})();
var statearr_38821_38843 = state_38808__$1;
(statearr_38821_38843[(2)] = null);

(statearr_38821_38843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (8))){
var inst_38790 = (state_38808[(7)]);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38808__$1,(11),out,inst_38790);
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
});})(c__36543__auto___38833,out))
;
return ((function (switch__36429__auto__,c__36543__auto___38833,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_38825 = [null,null,null,null,null,null,null,null,null];
(statearr_38825[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_38825[(1)] = (1));

return statearr_38825;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_38808){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_38808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e38826){if((e38826 instanceof Object)){
var ex__36433__auto__ = e38826;
var statearr_38827_38844 = state_38808;
(statearr_38827_38844[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38845 = state_38808;
state_38808 = G__38845;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_38808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_38808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___38833,out))
})();
var state__36545__auto__ = (function (){var statearr_38828 = f__36544__auto__.call(null);
(statearr_38828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___38833);

return statearr_38828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___38833,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38846 = [];
var len__28342__auto___38849 = arguments.length;
var i__28343__auto___38850 = (0);
while(true){
if((i__28343__auto___38850 < len__28342__auto___38849)){
args38846.push((arguments[i__28343__auto___38850]));

var G__38851 = (i__28343__auto___38850 + (1));
i__28343__auto___38850 = G__38851;
continue;
} else {
}
break;
}

var G__38848 = args38846.length;
switch (G__38848) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38846.length)].join('')));

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
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__){
return (function (state_39018){
var state_val_39019 = (state_39018[(1)]);
if((state_val_39019 === (7))){
var inst_39014 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
var statearr_39020_39061 = state_39018__$1;
(statearr_39020_39061[(2)] = inst_39014);

(statearr_39020_39061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (20))){
var inst_38984 = (state_39018[(7)]);
var inst_38995 = (state_39018[(2)]);
var inst_38996 = cljs.core.next.call(null,inst_38984);
var inst_38970 = inst_38996;
var inst_38971 = null;
var inst_38972 = (0);
var inst_38973 = (0);
var state_39018__$1 = (function (){var statearr_39021 = state_39018;
(statearr_39021[(8)] = inst_38973);

(statearr_39021[(9)] = inst_38972);

(statearr_39021[(10)] = inst_38971);

(statearr_39021[(11)] = inst_38995);

(statearr_39021[(12)] = inst_38970);

return statearr_39021;
})();
var statearr_39022_39062 = state_39018__$1;
(statearr_39022_39062[(2)] = null);

(statearr_39022_39062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (1))){
var state_39018__$1 = state_39018;
var statearr_39023_39063 = state_39018__$1;
(statearr_39023_39063[(2)] = null);

(statearr_39023_39063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (4))){
var inst_38959 = (state_39018[(13)]);
var inst_38959__$1 = (state_39018[(2)]);
var inst_38960 = (inst_38959__$1 == null);
var state_39018__$1 = (function (){var statearr_39024 = state_39018;
(statearr_39024[(13)] = inst_38959__$1);

return statearr_39024;
})();
if(cljs.core.truth_(inst_38960)){
var statearr_39025_39064 = state_39018__$1;
(statearr_39025_39064[(1)] = (5));

} else {
var statearr_39026_39065 = state_39018__$1;
(statearr_39026_39065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (15))){
var state_39018__$1 = state_39018;
var statearr_39030_39066 = state_39018__$1;
(statearr_39030_39066[(2)] = null);

(statearr_39030_39066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (21))){
var state_39018__$1 = state_39018;
var statearr_39031_39067 = state_39018__$1;
(statearr_39031_39067[(2)] = null);

(statearr_39031_39067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (13))){
var inst_38973 = (state_39018[(8)]);
var inst_38972 = (state_39018[(9)]);
var inst_38971 = (state_39018[(10)]);
var inst_38970 = (state_39018[(12)]);
var inst_38980 = (state_39018[(2)]);
var inst_38981 = (inst_38973 + (1));
var tmp39027 = inst_38972;
var tmp39028 = inst_38971;
var tmp39029 = inst_38970;
var inst_38970__$1 = tmp39029;
var inst_38971__$1 = tmp39028;
var inst_38972__$1 = tmp39027;
var inst_38973__$1 = inst_38981;
var state_39018__$1 = (function (){var statearr_39032 = state_39018;
(statearr_39032[(8)] = inst_38973__$1);

(statearr_39032[(14)] = inst_38980);

(statearr_39032[(9)] = inst_38972__$1);

(statearr_39032[(10)] = inst_38971__$1);

(statearr_39032[(12)] = inst_38970__$1);

return statearr_39032;
})();
var statearr_39033_39068 = state_39018__$1;
(statearr_39033_39068[(2)] = null);

(statearr_39033_39068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (22))){
var state_39018__$1 = state_39018;
var statearr_39034_39069 = state_39018__$1;
(statearr_39034_39069[(2)] = null);

(statearr_39034_39069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (6))){
var inst_38959 = (state_39018[(13)]);
var inst_38968 = f.call(null,inst_38959);
var inst_38969 = cljs.core.seq.call(null,inst_38968);
var inst_38970 = inst_38969;
var inst_38971 = null;
var inst_38972 = (0);
var inst_38973 = (0);
var state_39018__$1 = (function (){var statearr_39035 = state_39018;
(statearr_39035[(8)] = inst_38973);

(statearr_39035[(9)] = inst_38972);

(statearr_39035[(10)] = inst_38971);

(statearr_39035[(12)] = inst_38970);

return statearr_39035;
})();
var statearr_39036_39070 = state_39018__$1;
(statearr_39036_39070[(2)] = null);

(statearr_39036_39070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (17))){
var inst_38984 = (state_39018[(7)]);
var inst_38988 = cljs.core.chunk_first.call(null,inst_38984);
var inst_38989 = cljs.core.chunk_rest.call(null,inst_38984);
var inst_38990 = cljs.core.count.call(null,inst_38988);
var inst_38970 = inst_38989;
var inst_38971 = inst_38988;
var inst_38972 = inst_38990;
var inst_38973 = (0);
var state_39018__$1 = (function (){var statearr_39037 = state_39018;
(statearr_39037[(8)] = inst_38973);

(statearr_39037[(9)] = inst_38972);

(statearr_39037[(10)] = inst_38971);

(statearr_39037[(12)] = inst_38970);

return statearr_39037;
})();
var statearr_39038_39071 = state_39018__$1;
(statearr_39038_39071[(2)] = null);

(statearr_39038_39071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (3))){
var inst_39016 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39018__$1,inst_39016);
} else {
if((state_val_39019 === (12))){
var inst_39004 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
var statearr_39039_39072 = state_39018__$1;
(statearr_39039_39072[(2)] = inst_39004);

(statearr_39039_39072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (2))){
var state_39018__$1 = state_39018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39018__$1,(4),in$);
} else {
if((state_val_39019 === (23))){
var inst_39012 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
var statearr_39040_39073 = state_39018__$1;
(statearr_39040_39073[(2)] = inst_39012);

(statearr_39040_39073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (19))){
var inst_38999 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
var statearr_39041_39074 = state_39018__$1;
(statearr_39041_39074[(2)] = inst_38999);

(statearr_39041_39074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (11))){
var inst_38984 = (state_39018[(7)]);
var inst_38970 = (state_39018[(12)]);
var inst_38984__$1 = cljs.core.seq.call(null,inst_38970);
var state_39018__$1 = (function (){var statearr_39042 = state_39018;
(statearr_39042[(7)] = inst_38984__$1);

return statearr_39042;
})();
if(inst_38984__$1){
var statearr_39043_39075 = state_39018__$1;
(statearr_39043_39075[(1)] = (14));

} else {
var statearr_39044_39076 = state_39018__$1;
(statearr_39044_39076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (9))){
var inst_39006 = (state_39018[(2)]);
var inst_39007 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39018__$1 = (function (){var statearr_39045 = state_39018;
(statearr_39045[(15)] = inst_39006);

return statearr_39045;
})();
if(cljs.core.truth_(inst_39007)){
var statearr_39046_39077 = state_39018__$1;
(statearr_39046_39077[(1)] = (21));

} else {
var statearr_39047_39078 = state_39018__$1;
(statearr_39047_39078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (5))){
var inst_38962 = cljs.core.async.close_BANG_.call(null,out);
var state_39018__$1 = state_39018;
var statearr_39048_39079 = state_39018__$1;
(statearr_39048_39079[(2)] = inst_38962);

(statearr_39048_39079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (14))){
var inst_38984 = (state_39018[(7)]);
var inst_38986 = cljs.core.chunked_seq_QMARK_.call(null,inst_38984);
var state_39018__$1 = state_39018;
if(inst_38986){
var statearr_39049_39080 = state_39018__$1;
(statearr_39049_39080[(1)] = (17));

} else {
var statearr_39050_39081 = state_39018__$1;
(statearr_39050_39081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (16))){
var inst_39002 = (state_39018[(2)]);
var state_39018__$1 = state_39018;
var statearr_39051_39082 = state_39018__$1;
(statearr_39051_39082[(2)] = inst_39002);

(statearr_39051_39082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39019 === (10))){
var inst_38973 = (state_39018[(8)]);
var inst_38971 = (state_39018[(10)]);
var inst_38978 = cljs.core._nth.call(null,inst_38971,inst_38973);
var state_39018__$1 = state_39018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39018__$1,(13),out,inst_38978);
} else {
if((state_val_39019 === (18))){
var inst_38984 = (state_39018[(7)]);
var inst_38993 = cljs.core.first.call(null,inst_38984);
var state_39018__$1 = state_39018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39018__$1,(20),out,inst_38993);
} else {
if((state_val_39019 === (8))){
var inst_38973 = (state_39018[(8)]);
var inst_38972 = (state_39018[(9)]);
var inst_38975 = (inst_38973 < inst_38972);
var inst_38976 = inst_38975;
var state_39018__$1 = state_39018;
if(cljs.core.truth_(inst_38976)){
var statearr_39052_39083 = state_39018__$1;
(statearr_39052_39083[(1)] = (10));

} else {
var statearr_39053_39084 = state_39018__$1;
(statearr_39053_39084[(1)] = (11));

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
});})(c__36543__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____0 = (function (){
var statearr_39057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__);

(statearr_39057[(1)] = (1));

return statearr_39057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____1 = (function (state_39018){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39058){if((e39058 instanceof Object)){
var ex__36433__auto__ = e39058;
var statearr_39059_39085 = state_39018;
(statearr_39059_39085[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39086 = state_39018;
state_39018 = G__39086;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__ = function(state_39018){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____1.call(this,state_39018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36430__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__))
})();
var state__36545__auto__ = (function (){var statearr_39060 = f__36544__auto__.call(null);
(statearr_39060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_39060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__))
);

return c__36543__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39087 = [];
var len__28342__auto___39090 = arguments.length;
var i__28343__auto___39091 = (0);
while(true){
if((i__28343__auto___39091 < len__28342__auto___39090)){
args39087.push((arguments[i__28343__auto___39091]));

var G__39092 = (i__28343__auto___39091 + (1));
i__28343__auto___39091 = G__39092;
continue;
} else {
}
break;
}

var G__39089 = args39087.length;
switch (G__39089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39087.length)].join('')));

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
var args39094 = [];
var len__28342__auto___39097 = arguments.length;
var i__28343__auto___39098 = (0);
while(true){
if((i__28343__auto___39098 < len__28342__auto___39097)){
args39094.push((arguments[i__28343__auto___39098]));

var G__39099 = (i__28343__auto___39098 + (1));
i__28343__auto___39098 = G__39099;
continue;
} else {
}
break;
}

var G__39096 = args39094.length;
switch (G__39096) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39094.length)].join('')));

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
var args39101 = [];
var len__28342__auto___39152 = arguments.length;
var i__28343__auto___39153 = (0);
while(true){
if((i__28343__auto___39153 < len__28342__auto___39152)){
args39101.push((arguments[i__28343__auto___39153]));

var G__39154 = (i__28343__auto___39153 + (1));
i__28343__auto___39153 = G__39154;
continue;
} else {
}
break;
}

var G__39103 = args39101.length;
switch (G__39103) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39101.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___39156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___39156,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___39156,out){
return (function (state_39127){
var state_val_39128 = (state_39127[(1)]);
if((state_val_39128 === (7))){
var inst_39122 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
var statearr_39129_39157 = state_39127__$1;
(statearr_39129_39157[(2)] = inst_39122);

(statearr_39129_39157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (1))){
var inst_39104 = null;
var state_39127__$1 = (function (){var statearr_39130 = state_39127;
(statearr_39130[(7)] = inst_39104);

return statearr_39130;
})();
var statearr_39131_39158 = state_39127__$1;
(statearr_39131_39158[(2)] = null);

(statearr_39131_39158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (4))){
var inst_39107 = (state_39127[(8)]);
var inst_39107__$1 = (state_39127[(2)]);
var inst_39108 = (inst_39107__$1 == null);
var inst_39109 = cljs.core.not.call(null,inst_39108);
var state_39127__$1 = (function (){var statearr_39132 = state_39127;
(statearr_39132[(8)] = inst_39107__$1);

return statearr_39132;
})();
if(inst_39109){
var statearr_39133_39159 = state_39127__$1;
(statearr_39133_39159[(1)] = (5));

} else {
var statearr_39134_39160 = state_39127__$1;
(statearr_39134_39160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (6))){
var state_39127__$1 = state_39127;
var statearr_39135_39161 = state_39127__$1;
(statearr_39135_39161[(2)] = null);

(statearr_39135_39161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (3))){
var inst_39124 = (state_39127[(2)]);
var inst_39125 = cljs.core.async.close_BANG_.call(null,out);
var state_39127__$1 = (function (){var statearr_39136 = state_39127;
(statearr_39136[(9)] = inst_39124);

return statearr_39136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39127__$1,inst_39125);
} else {
if((state_val_39128 === (2))){
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39127__$1,(4),ch);
} else {
if((state_val_39128 === (11))){
var inst_39107 = (state_39127[(8)]);
var inst_39116 = (state_39127[(2)]);
var inst_39104 = inst_39107;
var state_39127__$1 = (function (){var statearr_39137 = state_39127;
(statearr_39137[(7)] = inst_39104);

(statearr_39137[(10)] = inst_39116);

return statearr_39137;
})();
var statearr_39138_39162 = state_39127__$1;
(statearr_39138_39162[(2)] = null);

(statearr_39138_39162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (9))){
var inst_39107 = (state_39127[(8)]);
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39127__$1,(11),out,inst_39107);
} else {
if((state_val_39128 === (5))){
var inst_39104 = (state_39127[(7)]);
var inst_39107 = (state_39127[(8)]);
var inst_39111 = cljs.core._EQ_.call(null,inst_39107,inst_39104);
var state_39127__$1 = state_39127;
if(inst_39111){
var statearr_39140_39163 = state_39127__$1;
(statearr_39140_39163[(1)] = (8));

} else {
var statearr_39141_39164 = state_39127__$1;
(statearr_39141_39164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (10))){
var inst_39119 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
var statearr_39142_39165 = state_39127__$1;
(statearr_39142_39165[(2)] = inst_39119);

(statearr_39142_39165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (8))){
var inst_39104 = (state_39127[(7)]);
var tmp39139 = inst_39104;
var inst_39104__$1 = tmp39139;
var state_39127__$1 = (function (){var statearr_39143 = state_39127;
(statearr_39143[(7)] = inst_39104__$1);

return statearr_39143;
})();
var statearr_39144_39166 = state_39127__$1;
(statearr_39144_39166[(2)] = null);

(statearr_39144_39166[(1)] = (2));


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
});})(c__36543__auto___39156,out))
;
return ((function (switch__36429__auto__,c__36543__auto___39156,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_39148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39148[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_39148[(1)] = (1));

return statearr_39148;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_39127){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39149){if((e39149 instanceof Object)){
var ex__36433__auto__ = e39149;
var statearr_39150_39167 = state_39127;
(statearr_39150_39167[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39168 = state_39127;
state_39127 = G__39168;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_39127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_39127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___39156,out))
})();
var state__36545__auto__ = (function (){var statearr_39151 = f__36544__auto__.call(null);
(statearr_39151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___39156);

return statearr_39151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___39156,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39169 = [];
var len__28342__auto___39239 = arguments.length;
var i__28343__auto___39240 = (0);
while(true){
if((i__28343__auto___39240 < len__28342__auto___39239)){
args39169.push((arguments[i__28343__auto___39240]));

var G__39241 = (i__28343__auto___39240 + (1));
i__28343__auto___39240 = G__39241;
continue;
} else {
}
break;
}

var G__39171 = args39169.length;
switch (G__39171) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39169.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___39243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___39243,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___39243,out){
return (function (state_39209){
var state_val_39210 = (state_39209[(1)]);
if((state_val_39210 === (7))){
var inst_39205 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39211_39244 = state_39209__$1;
(statearr_39211_39244[(2)] = inst_39205);

(statearr_39211_39244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (1))){
var inst_39172 = (new Array(n));
var inst_39173 = inst_39172;
var inst_39174 = (0);
var state_39209__$1 = (function (){var statearr_39212 = state_39209;
(statearr_39212[(7)] = inst_39173);

(statearr_39212[(8)] = inst_39174);

return statearr_39212;
})();
var statearr_39213_39245 = state_39209__$1;
(statearr_39213_39245[(2)] = null);

(statearr_39213_39245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (4))){
var inst_39177 = (state_39209[(9)]);
var inst_39177__$1 = (state_39209[(2)]);
var inst_39178 = (inst_39177__$1 == null);
var inst_39179 = cljs.core.not.call(null,inst_39178);
var state_39209__$1 = (function (){var statearr_39214 = state_39209;
(statearr_39214[(9)] = inst_39177__$1);

return statearr_39214;
})();
if(inst_39179){
var statearr_39215_39246 = state_39209__$1;
(statearr_39215_39246[(1)] = (5));

} else {
var statearr_39216_39247 = state_39209__$1;
(statearr_39216_39247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (15))){
var inst_39199 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39217_39248 = state_39209__$1;
(statearr_39217_39248[(2)] = inst_39199);

(statearr_39217_39248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (13))){
var state_39209__$1 = state_39209;
var statearr_39218_39249 = state_39209__$1;
(statearr_39218_39249[(2)] = null);

(statearr_39218_39249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (6))){
var inst_39174 = (state_39209[(8)]);
var inst_39195 = (inst_39174 > (0));
var state_39209__$1 = state_39209;
if(cljs.core.truth_(inst_39195)){
var statearr_39219_39250 = state_39209__$1;
(statearr_39219_39250[(1)] = (12));

} else {
var statearr_39220_39251 = state_39209__$1;
(statearr_39220_39251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (3))){
var inst_39207 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39209__$1,inst_39207);
} else {
if((state_val_39210 === (12))){
var inst_39173 = (state_39209[(7)]);
var inst_39197 = cljs.core.vec.call(null,inst_39173);
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39209__$1,(15),out,inst_39197);
} else {
if((state_val_39210 === (2))){
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39209__$1,(4),ch);
} else {
if((state_val_39210 === (11))){
var inst_39189 = (state_39209[(2)]);
var inst_39190 = (new Array(n));
var inst_39173 = inst_39190;
var inst_39174 = (0);
var state_39209__$1 = (function (){var statearr_39221 = state_39209;
(statearr_39221[(7)] = inst_39173);

(statearr_39221[(8)] = inst_39174);

(statearr_39221[(10)] = inst_39189);

return statearr_39221;
})();
var statearr_39222_39252 = state_39209__$1;
(statearr_39222_39252[(2)] = null);

(statearr_39222_39252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (9))){
var inst_39173 = (state_39209[(7)]);
var inst_39187 = cljs.core.vec.call(null,inst_39173);
var state_39209__$1 = state_39209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39209__$1,(11),out,inst_39187);
} else {
if((state_val_39210 === (5))){
var inst_39173 = (state_39209[(7)]);
var inst_39174 = (state_39209[(8)]);
var inst_39182 = (state_39209[(11)]);
var inst_39177 = (state_39209[(9)]);
var inst_39181 = (inst_39173[inst_39174] = inst_39177);
var inst_39182__$1 = (inst_39174 + (1));
var inst_39183 = (inst_39182__$1 < n);
var state_39209__$1 = (function (){var statearr_39223 = state_39209;
(statearr_39223[(11)] = inst_39182__$1);

(statearr_39223[(12)] = inst_39181);

return statearr_39223;
})();
if(cljs.core.truth_(inst_39183)){
var statearr_39224_39253 = state_39209__$1;
(statearr_39224_39253[(1)] = (8));

} else {
var statearr_39225_39254 = state_39209__$1;
(statearr_39225_39254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (14))){
var inst_39202 = (state_39209[(2)]);
var inst_39203 = cljs.core.async.close_BANG_.call(null,out);
var state_39209__$1 = (function (){var statearr_39227 = state_39209;
(statearr_39227[(13)] = inst_39202);

return statearr_39227;
})();
var statearr_39228_39255 = state_39209__$1;
(statearr_39228_39255[(2)] = inst_39203);

(statearr_39228_39255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (10))){
var inst_39193 = (state_39209[(2)]);
var state_39209__$1 = state_39209;
var statearr_39229_39256 = state_39209__$1;
(statearr_39229_39256[(2)] = inst_39193);

(statearr_39229_39256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39210 === (8))){
var inst_39173 = (state_39209[(7)]);
var inst_39182 = (state_39209[(11)]);
var tmp39226 = inst_39173;
var inst_39173__$1 = tmp39226;
var inst_39174 = inst_39182;
var state_39209__$1 = (function (){var statearr_39230 = state_39209;
(statearr_39230[(7)] = inst_39173__$1);

(statearr_39230[(8)] = inst_39174);

return statearr_39230;
})();
var statearr_39231_39257 = state_39209__$1;
(statearr_39231_39257[(2)] = null);

(statearr_39231_39257[(1)] = (2));


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
});})(c__36543__auto___39243,out))
;
return ((function (switch__36429__auto__,c__36543__auto___39243,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_39235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39235[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_39235[(1)] = (1));

return statearr_39235;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_39209){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39236){if((e39236 instanceof Object)){
var ex__36433__auto__ = e39236;
var statearr_39237_39258 = state_39209;
(statearr_39237_39258[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39259 = state_39209;
state_39209 = G__39259;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_39209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_39209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___39243,out))
})();
var state__36545__auto__ = (function (){var statearr_39238 = f__36544__auto__.call(null);
(statearr_39238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___39243);

return statearr_39238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___39243,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39260 = [];
var len__28342__auto___39334 = arguments.length;
var i__28343__auto___39335 = (0);
while(true){
if((i__28343__auto___39335 < len__28342__auto___39334)){
args39260.push((arguments[i__28343__auto___39335]));

var G__39336 = (i__28343__auto___39335 + (1));
i__28343__auto___39335 = G__39336;
continue;
} else {
}
break;
}

var G__39262 = args39260.length;
switch (G__39262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39260.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36543__auto___39338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___39338,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___39338,out){
return (function (state_39304){
var state_val_39305 = (state_39304[(1)]);
if((state_val_39305 === (7))){
var inst_39300 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39306_39339 = state_39304__$1;
(statearr_39306_39339[(2)] = inst_39300);

(statearr_39306_39339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (1))){
var inst_39263 = [];
var inst_39264 = inst_39263;
var inst_39265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39304__$1 = (function (){var statearr_39307 = state_39304;
(statearr_39307[(7)] = inst_39264);

(statearr_39307[(8)] = inst_39265);

return statearr_39307;
})();
var statearr_39308_39340 = state_39304__$1;
(statearr_39308_39340[(2)] = null);

(statearr_39308_39340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (4))){
var inst_39268 = (state_39304[(9)]);
var inst_39268__$1 = (state_39304[(2)]);
var inst_39269 = (inst_39268__$1 == null);
var inst_39270 = cljs.core.not.call(null,inst_39269);
var state_39304__$1 = (function (){var statearr_39309 = state_39304;
(statearr_39309[(9)] = inst_39268__$1);

return statearr_39309;
})();
if(inst_39270){
var statearr_39310_39341 = state_39304__$1;
(statearr_39310_39341[(1)] = (5));

} else {
var statearr_39311_39342 = state_39304__$1;
(statearr_39311_39342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (15))){
var inst_39294 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39312_39343 = state_39304__$1;
(statearr_39312_39343[(2)] = inst_39294);

(statearr_39312_39343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (13))){
var state_39304__$1 = state_39304;
var statearr_39313_39344 = state_39304__$1;
(statearr_39313_39344[(2)] = null);

(statearr_39313_39344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (6))){
var inst_39264 = (state_39304[(7)]);
var inst_39289 = inst_39264.length;
var inst_39290 = (inst_39289 > (0));
var state_39304__$1 = state_39304;
if(cljs.core.truth_(inst_39290)){
var statearr_39314_39345 = state_39304__$1;
(statearr_39314_39345[(1)] = (12));

} else {
var statearr_39315_39346 = state_39304__$1;
(statearr_39315_39346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (3))){
var inst_39302 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39304__$1,inst_39302);
} else {
if((state_val_39305 === (12))){
var inst_39264 = (state_39304[(7)]);
var inst_39292 = cljs.core.vec.call(null,inst_39264);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39304__$1,(15),out,inst_39292);
} else {
if((state_val_39305 === (2))){
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39304__$1,(4),ch);
} else {
if((state_val_39305 === (11))){
var inst_39268 = (state_39304[(9)]);
var inst_39272 = (state_39304[(10)]);
var inst_39282 = (state_39304[(2)]);
var inst_39283 = [];
var inst_39284 = inst_39283.push(inst_39268);
var inst_39264 = inst_39283;
var inst_39265 = inst_39272;
var state_39304__$1 = (function (){var statearr_39316 = state_39304;
(statearr_39316[(7)] = inst_39264);

(statearr_39316[(8)] = inst_39265);

(statearr_39316[(11)] = inst_39282);

(statearr_39316[(12)] = inst_39284);

return statearr_39316;
})();
var statearr_39317_39347 = state_39304__$1;
(statearr_39317_39347[(2)] = null);

(statearr_39317_39347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (9))){
var inst_39264 = (state_39304[(7)]);
var inst_39280 = cljs.core.vec.call(null,inst_39264);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39304__$1,(11),out,inst_39280);
} else {
if((state_val_39305 === (5))){
var inst_39265 = (state_39304[(8)]);
var inst_39268 = (state_39304[(9)]);
var inst_39272 = (state_39304[(10)]);
var inst_39272__$1 = f.call(null,inst_39268);
var inst_39273 = cljs.core._EQ_.call(null,inst_39272__$1,inst_39265);
var inst_39274 = cljs.core.keyword_identical_QMARK_.call(null,inst_39265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39275 = (inst_39273) || (inst_39274);
var state_39304__$1 = (function (){var statearr_39318 = state_39304;
(statearr_39318[(10)] = inst_39272__$1);

return statearr_39318;
})();
if(cljs.core.truth_(inst_39275)){
var statearr_39319_39348 = state_39304__$1;
(statearr_39319_39348[(1)] = (8));

} else {
var statearr_39320_39349 = state_39304__$1;
(statearr_39320_39349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (14))){
var inst_39297 = (state_39304[(2)]);
var inst_39298 = cljs.core.async.close_BANG_.call(null,out);
var state_39304__$1 = (function (){var statearr_39322 = state_39304;
(statearr_39322[(13)] = inst_39297);

return statearr_39322;
})();
var statearr_39323_39350 = state_39304__$1;
(statearr_39323_39350[(2)] = inst_39298);

(statearr_39323_39350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (10))){
var inst_39287 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39324_39351 = state_39304__$1;
(statearr_39324_39351[(2)] = inst_39287);

(statearr_39324_39351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (8))){
var inst_39264 = (state_39304[(7)]);
var inst_39268 = (state_39304[(9)]);
var inst_39272 = (state_39304[(10)]);
var inst_39277 = inst_39264.push(inst_39268);
var tmp39321 = inst_39264;
var inst_39264__$1 = tmp39321;
var inst_39265 = inst_39272;
var state_39304__$1 = (function (){var statearr_39325 = state_39304;
(statearr_39325[(7)] = inst_39264__$1);

(statearr_39325[(8)] = inst_39265);

(statearr_39325[(14)] = inst_39277);

return statearr_39325;
})();
var statearr_39326_39352 = state_39304__$1;
(statearr_39326_39352[(2)] = null);

(statearr_39326_39352[(1)] = (2));


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
});})(c__36543__auto___39338,out))
;
return ((function (switch__36429__auto__,c__36543__auto___39338,out){
return (function() {
var cljs$core$async$state_machine__36430__auto__ = null;
var cljs$core$async$state_machine__36430__auto____0 = (function (){
var statearr_39330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39330[(0)] = cljs$core$async$state_machine__36430__auto__);

(statearr_39330[(1)] = (1));

return statearr_39330;
});
var cljs$core$async$state_machine__36430__auto____1 = (function (state_39304){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39331){if((e39331 instanceof Object)){
var ex__36433__auto__ = e39331;
var statearr_39332_39353 = state_39304;
(statearr_39332_39353[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39354 = state_39304;
state_39304 = G__39354;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
cljs$core$async$state_machine__36430__auto__ = function(state_39304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36430__auto____1.call(this,state_39304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36430__auto____0;
cljs$core$async$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36430__auto____1;
return cljs$core$async$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___39338,out))
})();
var state__36545__auto__ = (function (){var statearr_39333 = f__36544__auto__.call(null);
(statearr_39333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___39338);

return statearr_39333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___39338,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485671352728