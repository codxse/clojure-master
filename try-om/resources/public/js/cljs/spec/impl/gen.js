// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27778__auto__,writer__27779__auto__,opt__27780__auto__){
return cljs.core._write.call(null,writer__27779__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40526 = arguments.length;
var i__28343__auto___40527 = (0);
while(true){
if((i__28343__auto___40527 < len__28342__auto___40526)){
args__28349__auto__.push((arguments[i__28343__auto___40527]));

var G__40528 = (i__28343__auto___40527 + (1));
i__28343__auto___40527 = G__40528;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq40525){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40525));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40530 = arguments.length;
var i__28343__auto___40531 = (0);
while(true){
if((i__28343__auto___40531 < len__28342__auto___40530)){
args__28349__auto__.push((arguments[i__28343__auto___40531]));

var G__40532 = (i__28343__auto___40531 + (1));
i__28343__auto___40531 = G__40532;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq40529){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40529));
});

var g_QMARK__40533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_40534 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40533){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40533))
,null));
var mkg_40535 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40533,g_40534){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40533,g_40534))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__40533,g_40534,mkg_40535){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40533).call(null,x);
});})(g_QMARK__40533,g_40534,mkg_40535))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__40533,g_40534,mkg_40535){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_40535).call(null,gfn);
});})(g_QMARK__40533,g_40534,mkg_40535))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__40533,g_40534,mkg_40535){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_40534).call(null,generator);
});})(g_QMARK__40533,g_40534,mkg_40535))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40497__auto___40555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__40497__auto___40555){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40556 = arguments.length;
var i__28343__auto___40557 = (0);
while(true){
if((i__28343__auto___40557 < len__28342__auto___40556)){
args__28349__auto__.push((arguments[i__28343__auto___40557]));

var G__40558 = (i__28343__auto___40557 + (1));
i__28343__auto___40557 = G__40558;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40555))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40555),args);
});})(g__40497__auto___40555))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__40497__auto___40555){
return (function (seq40536){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40536));
});})(g__40497__auto___40555))
;


var g__40497__auto___40559 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__40497__auto___40559){
return (function cljs$spec$impl$gen$list(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40560 = arguments.length;
var i__28343__auto___40561 = (0);
while(true){
if((i__28343__auto___40561 < len__28342__auto___40560)){
args__28349__auto__.push((arguments[i__28343__auto___40561]));

var G__40562 = (i__28343__auto___40561 + (1));
i__28343__auto___40561 = G__40562;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40559))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40559),args);
});})(g__40497__auto___40559))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__40497__auto___40559){
return (function (seq40537){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40537));
});})(g__40497__auto___40559))
;


var g__40497__auto___40563 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__40497__auto___40563){
return (function cljs$spec$impl$gen$map(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40564 = arguments.length;
var i__28343__auto___40565 = (0);
while(true){
if((i__28343__auto___40565 < len__28342__auto___40564)){
args__28349__auto__.push((arguments[i__28343__auto___40565]));

var G__40566 = (i__28343__auto___40565 + (1));
i__28343__auto___40565 = G__40566;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40563))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40563),args);
});})(g__40497__auto___40563))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__40497__auto___40563){
return (function (seq40538){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40538));
});})(g__40497__auto___40563))
;


var g__40497__auto___40567 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__40497__auto___40567){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40568 = arguments.length;
var i__28343__auto___40569 = (0);
while(true){
if((i__28343__auto___40569 < len__28342__auto___40568)){
args__28349__auto__.push((arguments[i__28343__auto___40569]));

var G__40570 = (i__28343__auto___40569 + (1));
i__28343__auto___40569 = G__40570;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40567))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40567),args);
});})(g__40497__auto___40567))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__40497__auto___40567){
return (function (seq40539){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40539));
});})(g__40497__auto___40567))
;


var g__40497__auto___40571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__40497__auto___40571){
return (function cljs$spec$impl$gen$set(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40572 = arguments.length;
var i__28343__auto___40573 = (0);
while(true){
if((i__28343__auto___40573 < len__28342__auto___40572)){
args__28349__auto__.push((arguments[i__28343__auto___40573]));

var G__40574 = (i__28343__auto___40573 + (1));
i__28343__auto___40573 = G__40574;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40571))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40571),args);
});})(g__40497__auto___40571))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__40497__auto___40571){
return (function (seq40540){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40540));
});})(g__40497__auto___40571))
;


var g__40497__auto___40575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__40497__auto___40575){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40576 = arguments.length;
var i__28343__auto___40577 = (0);
while(true){
if((i__28343__auto___40577 < len__28342__auto___40576)){
args__28349__auto__.push((arguments[i__28343__auto___40577]));

var G__40578 = (i__28343__auto___40577 + (1));
i__28343__auto___40577 = G__40578;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40575))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40575),args);
});})(g__40497__auto___40575))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__40497__auto___40575){
return (function (seq40541){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40541));
});})(g__40497__auto___40575))
;


var g__40497__auto___40579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__40497__auto___40579){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40580 = arguments.length;
var i__28343__auto___40581 = (0);
while(true){
if((i__28343__auto___40581 < len__28342__auto___40580)){
args__28349__auto__.push((arguments[i__28343__auto___40581]));

var G__40582 = (i__28343__auto___40581 + (1));
i__28343__auto___40581 = G__40582;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40579))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40579),args);
});})(g__40497__auto___40579))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__40497__auto___40579){
return (function (seq40542){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40542));
});})(g__40497__auto___40579))
;


var g__40497__auto___40583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__40497__auto___40583){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40584 = arguments.length;
var i__28343__auto___40585 = (0);
while(true){
if((i__28343__auto___40585 < len__28342__auto___40584)){
args__28349__auto__.push((arguments[i__28343__auto___40585]));

var G__40586 = (i__28343__auto___40585 + (1));
i__28343__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40583))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40583),args);
});})(g__40497__auto___40583))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__40497__auto___40583){
return (function (seq40543){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40543));
});})(g__40497__auto___40583))
;


var g__40497__auto___40587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__40497__auto___40587){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40588 = arguments.length;
var i__28343__auto___40589 = (0);
while(true){
if((i__28343__auto___40589 < len__28342__auto___40588)){
args__28349__auto__.push((arguments[i__28343__auto___40589]));

var G__40590 = (i__28343__auto___40589 + (1));
i__28343__auto___40589 = G__40590;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40587))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40587),args);
});})(g__40497__auto___40587))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__40497__auto___40587){
return (function (seq40544){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40544));
});})(g__40497__auto___40587))
;


var g__40497__auto___40591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__40497__auto___40591){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40592 = arguments.length;
var i__28343__auto___40593 = (0);
while(true){
if((i__28343__auto___40593 < len__28342__auto___40592)){
args__28349__auto__.push((arguments[i__28343__auto___40593]));

var G__40594 = (i__28343__auto___40593 + (1));
i__28343__auto___40593 = G__40594;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40591))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40591),args);
});})(g__40497__auto___40591))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__40497__auto___40591){
return (function (seq40545){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40545));
});})(g__40497__auto___40591))
;


var g__40497__auto___40595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__40497__auto___40595){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40596 = arguments.length;
var i__28343__auto___40597 = (0);
while(true){
if((i__28343__auto___40597 < len__28342__auto___40596)){
args__28349__auto__.push((arguments[i__28343__auto___40597]));

var G__40598 = (i__28343__auto___40597 + (1));
i__28343__auto___40597 = G__40598;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40595))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40595),args);
});})(g__40497__auto___40595))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__40497__auto___40595){
return (function (seq40546){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40546));
});})(g__40497__auto___40595))
;


var g__40497__auto___40599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__40497__auto___40599){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40600 = arguments.length;
var i__28343__auto___40601 = (0);
while(true){
if((i__28343__auto___40601 < len__28342__auto___40600)){
args__28349__auto__.push((arguments[i__28343__auto___40601]));

var G__40602 = (i__28343__auto___40601 + (1));
i__28343__auto___40601 = G__40602;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40599))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40599),args);
});})(g__40497__auto___40599))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__40497__auto___40599){
return (function (seq40547){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40547));
});})(g__40497__auto___40599))
;


var g__40497__auto___40603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__40497__auto___40603){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40604 = arguments.length;
var i__28343__auto___40605 = (0);
while(true){
if((i__28343__auto___40605 < len__28342__auto___40604)){
args__28349__auto__.push((arguments[i__28343__auto___40605]));

var G__40606 = (i__28343__auto___40605 + (1));
i__28343__auto___40605 = G__40606;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40603))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40603),args);
});})(g__40497__auto___40603))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__40497__auto___40603){
return (function (seq40548){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40548));
});})(g__40497__auto___40603))
;


var g__40497__auto___40607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__40497__auto___40607){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40608 = arguments.length;
var i__28343__auto___40609 = (0);
while(true){
if((i__28343__auto___40609 < len__28342__auto___40608)){
args__28349__auto__.push((arguments[i__28343__auto___40609]));

var G__40610 = (i__28343__auto___40609 + (1));
i__28343__auto___40609 = G__40610;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40607))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40607),args);
});})(g__40497__auto___40607))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__40497__auto___40607){
return (function (seq40549){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40549));
});})(g__40497__auto___40607))
;


var g__40497__auto___40611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__40497__auto___40611){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40612 = arguments.length;
var i__28343__auto___40613 = (0);
while(true){
if((i__28343__auto___40613 < len__28342__auto___40612)){
args__28349__auto__.push((arguments[i__28343__auto___40613]));

var G__40614 = (i__28343__auto___40613 + (1));
i__28343__auto___40613 = G__40614;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40611))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40611),args);
});})(g__40497__auto___40611))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__40497__auto___40611){
return (function (seq40550){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40550));
});})(g__40497__auto___40611))
;


var g__40497__auto___40615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__40497__auto___40615){
return (function cljs$spec$impl$gen$return(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40616 = arguments.length;
var i__28343__auto___40617 = (0);
while(true){
if((i__28343__auto___40617 < len__28342__auto___40616)){
args__28349__auto__.push((arguments[i__28343__auto___40617]));

var G__40618 = (i__28343__auto___40617 + (1));
i__28343__auto___40617 = G__40618;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40615))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40615),args);
});})(g__40497__auto___40615))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__40497__auto___40615){
return (function (seq40551){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40551));
});})(g__40497__auto___40615))
;


var g__40497__auto___40619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__40497__auto___40619){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40620 = arguments.length;
var i__28343__auto___40621 = (0);
while(true){
if((i__28343__auto___40621 < len__28342__auto___40620)){
args__28349__auto__.push((arguments[i__28343__auto___40621]));

var G__40622 = (i__28343__auto___40621 + (1));
i__28343__auto___40621 = G__40622;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40619))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40619),args);
});})(g__40497__auto___40619))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40497__auto___40619){
return (function (seq40552){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40552));
});})(g__40497__auto___40619))
;


var g__40497__auto___40623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__40497__auto___40623){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40624 = arguments.length;
var i__28343__auto___40625 = (0);
while(true){
if((i__28343__auto___40625 < len__28342__auto___40624)){
args__28349__auto__.push((arguments[i__28343__auto___40625]));

var G__40626 = (i__28343__auto___40625 + (1));
i__28343__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40623))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40623),args);
});})(g__40497__auto___40623))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__40497__auto___40623){
return (function (seq40553){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40553));
});})(g__40497__auto___40623))
;


var g__40497__auto___40627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__40497__auto___40627){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40628 = arguments.length;
var i__28343__auto___40629 = (0);
while(true){
if((i__28343__auto___40629 < len__28342__auto___40628)){
args__28349__auto__.push((arguments[i__28343__auto___40629]));

var G__40630 = (i__28343__auto___40629 + (1));
i__28343__auto___40629 = G__40630;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40497__auto___40627))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40497__auto___40627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40497__auto___40627),args);
});})(g__40497__auto___40627))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__40497__auto___40627){
return (function (seq40554){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40554));
});})(g__40497__auto___40627))
;

var g__40510__auto___40652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__40510__auto___40652){
return (function cljs$spec$impl$gen$any(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40653 = arguments.length;
var i__28343__auto___40654 = (0);
while(true){
if((i__28343__auto___40654 < len__28342__auto___40653)){
args__28349__auto__.push((arguments[i__28343__auto___40654]));

var G__40655 = (i__28343__auto___40654 + (1));
i__28343__auto___40654 = G__40655;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40652))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40652){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40652);
});})(g__40510__auto___40652))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__40510__auto___40652){
return (function (seq40631){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40631));
});})(g__40510__auto___40652))
;


var g__40510__auto___40656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__40510__auto___40656){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40657 = arguments.length;
var i__28343__auto___40658 = (0);
while(true){
if((i__28343__auto___40658 < len__28342__auto___40657)){
args__28349__auto__.push((arguments[i__28343__auto___40658]));

var G__40659 = (i__28343__auto___40658 + (1));
i__28343__auto___40658 = G__40659;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40656))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40656){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40656);
});})(g__40510__auto___40656))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__40510__auto___40656){
return (function (seq40632){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40632));
});})(g__40510__auto___40656))
;


var g__40510__auto___40660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__40510__auto___40660){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40661 = arguments.length;
var i__28343__auto___40662 = (0);
while(true){
if((i__28343__auto___40662 < len__28342__auto___40661)){
args__28349__auto__.push((arguments[i__28343__auto___40662]));

var G__40663 = (i__28343__auto___40662 + (1));
i__28343__auto___40662 = G__40663;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40660))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40660){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40660);
});})(g__40510__auto___40660))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__40510__auto___40660){
return (function (seq40633){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40633));
});})(g__40510__auto___40660))
;


var g__40510__auto___40664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__40510__auto___40664){
return (function cljs$spec$impl$gen$char(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40665 = arguments.length;
var i__28343__auto___40666 = (0);
while(true){
if((i__28343__auto___40666 < len__28342__auto___40665)){
args__28349__auto__.push((arguments[i__28343__auto___40666]));

var G__40667 = (i__28343__auto___40666 + (1));
i__28343__auto___40666 = G__40667;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40664))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40664){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40664);
});})(g__40510__auto___40664))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__40510__auto___40664){
return (function (seq40634){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40634));
});})(g__40510__auto___40664))
;


var g__40510__auto___40668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__40510__auto___40668){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40669 = arguments.length;
var i__28343__auto___40670 = (0);
while(true){
if((i__28343__auto___40670 < len__28342__auto___40669)){
args__28349__auto__.push((arguments[i__28343__auto___40670]));

var G__40671 = (i__28343__auto___40670 + (1));
i__28343__auto___40670 = G__40671;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40668))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40668){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40668);
});})(g__40510__auto___40668))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__40510__auto___40668){
return (function (seq40635){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40635));
});})(g__40510__auto___40668))
;


var g__40510__auto___40672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__40510__auto___40672){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40673 = arguments.length;
var i__28343__auto___40674 = (0);
while(true){
if((i__28343__auto___40674 < len__28342__auto___40673)){
args__28349__auto__.push((arguments[i__28343__auto___40674]));

var G__40675 = (i__28343__auto___40674 + (1));
i__28343__auto___40674 = G__40675;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40672))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40672){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40672);
});})(g__40510__auto___40672))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__40510__auto___40672){
return (function (seq40636){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40636));
});})(g__40510__auto___40672))
;


var g__40510__auto___40676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__40510__auto___40676){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40677 = arguments.length;
var i__28343__auto___40678 = (0);
while(true){
if((i__28343__auto___40678 < len__28342__auto___40677)){
args__28349__auto__.push((arguments[i__28343__auto___40678]));

var G__40679 = (i__28343__auto___40678 + (1));
i__28343__auto___40678 = G__40679;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40676))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40676){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40676);
});})(g__40510__auto___40676))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__40510__auto___40676){
return (function (seq40637){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40637));
});})(g__40510__auto___40676))
;


var g__40510__auto___40680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__40510__auto___40680){
return (function cljs$spec$impl$gen$double(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40681 = arguments.length;
var i__28343__auto___40682 = (0);
while(true){
if((i__28343__auto___40682 < len__28342__auto___40681)){
args__28349__auto__.push((arguments[i__28343__auto___40682]));

var G__40683 = (i__28343__auto___40682 + (1));
i__28343__auto___40682 = G__40683;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40680))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40680){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40680);
});})(g__40510__auto___40680))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__40510__auto___40680){
return (function (seq40638){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40638));
});})(g__40510__auto___40680))
;


var g__40510__auto___40684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__40510__auto___40684){
return (function cljs$spec$impl$gen$int(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40685 = arguments.length;
var i__28343__auto___40686 = (0);
while(true){
if((i__28343__auto___40686 < len__28342__auto___40685)){
args__28349__auto__.push((arguments[i__28343__auto___40686]));

var G__40687 = (i__28343__auto___40686 + (1));
i__28343__auto___40686 = G__40687;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40684))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40684){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40684);
});})(g__40510__auto___40684))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__40510__auto___40684){
return (function (seq40639){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40639));
});})(g__40510__auto___40684))
;


var g__40510__auto___40688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__40510__auto___40688){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40689 = arguments.length;
var i__28343__auto___40690 = (0);
while(true){
if((i__28343__auto___40690 < len__28342__auto___40689)){
args__28349__auto__.push((arguments[i__28343__auto___40690]));

var G__40691 = (i__28343__auto___40690 + (1));
i__28343__auto___40690 = G__40691;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40688))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40688){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40688);
});})(g__40510__auto___40688))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__40510__auto___40688){
return (function (seq40640){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40640));
});})(g__40510__auto___40688))
;


var g__40510__auto___40692 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__40510__auto___40692){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40693 = arguments.length;
var i__28343__auto___40694 = (0);
while(true){
if((i__28343__auto___40694 < len__28342__auto___40693)){
args__28349__auto__.push((arguments[i__28343__auto___40694]));

var G__40695 = (i__28343__auto___40694 + (1));
i__28343__auto___40694 = G__40695;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40692))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40692){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40692);
});})(g__40510__auto___40692))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__40510__auto___40692){
return (function (seq40641){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40641));
});})(g__40510__auto___40692))
;


var g__40510__auto___40696 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__40510__auto___40696){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40697 = arguments.length;
var i__28343__auto___40698 = (0);
while(true){
if((i__28343__auto___40698 < len__28342__auto___40697)){
args__28349__auto__.push((arguments[i__28343__auto___40698]));

var G__40699 = (i__28343__auto___40698 + (1));
i__28343__auto___40698 = G__40699;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40696))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40696){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40696);
});})(g__40510__auto___40696))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__40510__auto___40696){
return (function (seq40642){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40642));
});})(g__40510__auto___40696))
;


var g__40510__auto___40700 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__40510__auto___40700){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40701 = arguments.length;
var i__28343__auto___40702 = (0);
while(true){
if((i__28343__auto___40702 < len__28342__auto___40701)){
args__28349__auto__.push((arguments[i__28343__auto___40702]));

var G__40703 = (i__28343__auto___40702 + (1));
i__28343__auto___40702 = G__40703;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40700))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40700){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40700);
});})(g__40510__auto___40700))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__40510__auto___40700){
return (function (seq40643){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40643));
});})(g__40510__auto___40700))
;


var g__40510__auto___40704 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__40510__auto___40704){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40705 = arguments.length;
var i__28343__auto___40706 = (0);
while(true){
if((i__28343__auto___40706 < len__28342__auto___40705)){
args__28349__auto__.push((arguments[i__28343__auto___40706]));

var G__40707 = (i__28343__auto___40706 + (1));
i__28343__auto___40706 = G__40707;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40704))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40704){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40704);
});})(g__40510__auto___40704))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__40510__auto___40704){
return (function (seq40644){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40644));
});})(g__40510__auto___40704))
;


var g__40510__auto___40708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__40510__auto___40708){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40709 = arguments.length;
var i__28343__auto___40710 = (0);
while(true){
if((i__28343__auto___40710 < len__28342__auto___40709)){
args__28349__auto__.push((arguments[i__28343__auto___40710]));

var G__40711 = (i__28343__auto___40710 + (1));
i__28343__auto___40710 = G__40711;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40708))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40708){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40708);
});})(g__40510__auto___40708))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__40510__auto___40708){
return (function (seq40645){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40645));
});})(g__40510__auto___40708))
;


var g__40510__auto___40712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__40510__auto___40712){
return (function cljs$spec$impl$gen$string(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40713 = arguments.length;
var i__28343__auto___40714 = (0);
while(true){
if((i__28343__auto___40714 < len__28342__auto___40713)){
args__28349__auto__.push((arguments[i__28343__auto___40714]));

var G__40715 = (i__28343__auto___40714 + (1));
i__28343__auto___40714 = G__40715;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40712))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40712){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40712);
});})(g__40510__auto___40712))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__40510__auto___40712){
return (function (seq40646){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40646));
});})(g__40510__auto___40712))
;


var g__40510__auto___40716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__40510__auto___40716){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40717 = arguments.length;
var i__28343__auto___40718 = (0);
while(true){
if((i__28343__auto___40718 < len__28342__auto___40717)){
args__28349__auto__.push((arguments[i__28343__auto___40718]));

var G__40719 = (i__28343__auto___40718 + (1));
i__28343__auto___40718 = G__40719;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40716))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40716){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40716);
});})(g__40510__auto___40716))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__40510__auto___40716){
return (function (seq40647){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40647));
});})(g__40510__auto___40716))
;


var g__40510__auto___40720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__40510__auto___40720){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40721 = arguments.length;
var i__28343__auto___40722 = (0);
while(true){
if((i__28343__auto___40722 < len__28342__auto___40721)){
args__28349__auto__.push((arguments[i__28343__auto___40722]));

var G__40723 = (i__28343__auto___40722 + (1));
i__28343__auto___40722 = G__40723;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40720))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40720){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40720);
});})(g__40510__auto___40720))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__40510__auto___40720){
return (function (seq40648){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40648));
});})(g__40510__auto___40720))
;


var g__40510__auto___40724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__40510__auto___40724){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40725 = arguments.length;
var i__28343__auto___40726 = (0);
while(true){
if((i__28343__auto___40726 < len__28342__auto___40725)){
args__28349__auto__.push((arguments[i__28343__auto___40726]));

var G__40727 = (i__28343__auto___40726 + (1));
i__28343__auto___40726 = G__40727;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40724))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40724){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40724);
});})(g__40510__auto___40724))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__40510__auto___40724){
return (function (seq40649){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40649));
});})(g__40510__auto___40724))
;


var g__40510__auto___40728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__40510__auto___40728){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40729 = arguments.length;
var i__28343__auto___40730 = (0);
while(true){
if((i__28343__auto___40730 < len__28342__auto___40729)){
args__28349__auto__.push((arguments[i__28343__auto___40730]));

var G__40731 = (i__28343__auto___40730 + (1));
i__28343__auto___40730 = G__40731;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40728))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40728){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40728);
});})(g__40510__auto___40728))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__40510__auto___40728){
return (function (seq40650){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40650));
});})(g__40510__auto___40728))
;


var g__40510__auto___40732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__40510__auto___40732){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40733 = arguments.length;
var i__28343__auto___40734 = (0);
while(true){
if((i__28343__auto___40734 < len__28342__auto___40733)){
args__28349__auto__.push((arguments[i__28343__auto___40734]));

var G__40735 = (i__28343__auto___40734 + (1));
i__28343__auto___40734 = G__40735;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});})(g__40510__auto___40732))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40510__auto___40732){
return (function (args){
return cljs.core.deref.call(null,g__40510__auto___40732);
});})(g__40510__auto___40732))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__40510__auto___40732){
return (function (seq40651){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40651));
});})(g__40510__auto___40732))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28349__auto__ = [];
var len__28342__auto___40738 = arguments.length;
var i__28343__auto___40739 = (0);
while(true){
if((i__28343__auto___40739 < len__28342__auto___40738)){
args__28349__auto__.push((arguments[i__28343__auto___40739]));

var G__40740 = (i__28343__auto___40739 + (1));
i__28343__auto___40739 = G__40740;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__40736_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40736_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq40737){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40737));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__40741_SHARP_){
return (new Date(p1__40741_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1485671354004