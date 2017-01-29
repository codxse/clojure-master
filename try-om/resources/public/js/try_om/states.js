// Compiled by ClojureScript 1.9.456 {}
goog.provide('try_om.states');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world! from States!");
try_om.states.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
/**
 * @constructor
 */
try_om.states.Counter = (function try_om$states$Counter(){
var this__31221__auto__ = this;
React.Component.apply(this__31221__auto__,arguments);

if(!((this__31221__auto__.initLocalState == null))){
this__31221__auto__.state = this__31221__auto__.initLocalState();
} else {
this__31221__auto__.state = {};
}

return this__31221__auto__;
});

try_om.states.Counter.prototype = goog.object.clone(React.Component.prototype);

var x33054_33066 = try_om.states.Counter.prototype;
x33054_33066.componentWillUpdate = ((function (x33054_33066){
return (function (next_props__31076__auto__,next_state__31077__auto__){
var this__31075__auto__ = this;
if(((!((this__31075__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__31075__auto__.om$next$Ident$)))?true:false):false)){
var ident__31079__auto___33067 = om.next.ident.call(null,this__31075__auto__,om.next.props.call(null,this__31075__auto__));
var next_ident__31080__auto___33068 = om.next.ident.call(null,this__31075__auto__,om.next._next_props.call(null,next_props__31076__auto__,this__31075__auto__));
if(cljs.core.not_EQ_.call(null,ident__31079__auto___33067,next_ident__31080__auto___33068)){
var idxr__31081__auto___33069 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31075__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__31081__auto___33069 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__31081__auto___33069),((function (idxr__31081__auto___33069,ident__31079__auto___33067,next_ident__31080__auto___33068,this__31075__auto__,x33054_33066){
return (function (indexes__31082__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__31082__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__31079__auto___33067], null),cljs.core.disj,this__31075__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__31080__auto___33068], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__31075__auto__);
});})(idxr__31081__auto___33069,ident__31079__auto___33067,next_ident__31080__auto___33068,this__31075__auto__,x33054_33066))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__31075__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__31075__auto__);
});})(x33054_33066))
;

x33054_33066.shouldComponentUpdate = ((function (x33054_33066){
return (function (next_props__31076__auto__,next_state__31077__auto__){
var this__31075__auto__ = this;
var next_children__31078__auto__ = next_props__31076__auto__.children;
var next_props__31076__auto____$1 = goog.object.get(next_props__31076__auto__,"omcljs$value");
var next_props__31076__auto____$2 = (function (){var G__33056 = next_props__31076__auto____$1;
if((next_props__31076__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__33056);
} else {
return G__33056;
}
})();
var or__27121__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__31075__auto__),next_props__31076__auto____$2);
if(or__27121__auto__){
return or__27121__auto__;
} else {
var or__27121__auto____$1 = (function (){var and__27109__auto__ = this__31075__auto__.state;
if(cljs.core.truth_(and__27109__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__31075__auto__.state,"omcljs$state"),goog.object.get(next_state__31077__auto__,"omcljs$state"));
} else {
return and__27109__auto__;
}
})();
if(cljs.core.truth_(or__27121__auto____$1)){
return or__27121__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__31075__auto__.props.children,next_children__31078__auto__);
}
}
});})(x33054_33066))
;

x33054_33066.componentWillUnmount = ((function (x33054_33066){
return (function (){
var this__31075__auto__ = this;
var r__31086__auto__ = om.next.get_reconciler.call(null,this__31075__auto__);
var cfg__31087__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__31086__auto__);
var st__31088__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__31087__auto__);
var indexer__31085__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__31087__auto__);
if(cljs.core.truth_((function (){var and__27109__auto__ = !((st__31088__auto__ == null));
if(and__27109__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__31088__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__31075__auto__], null));
} else {
return and__27109__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__31088__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__31075__auto__);
} else {
}

if((indexer__31085__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__31085__auto__,this__31075__auto__);
}
});})(x33054_33066))
;

x33054_33066.componentDidUpdate = ((function (x33054_33066){
return (function (prev_props__31083__auto__,prev_state__31084__auto__){
var this__31075__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__31075__auto__);
});})(x33054_33066))
;

x33054_33066.isMounted = ((function (x33054_33066){
return (function (){
var this__31075__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__31075__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33054_33066))
;

x33054_33066.componentWillMount = ((function (x33054_33066){
return (function (){
var this__31075__auto__ = this;
var indexer__31085__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__31075__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__31085__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__31085__auto__,this__31075__auto__);
}
});})(x33054_33066))
;

x33054_33066.render = ((function (x33054_33066){
return (function (){
var this__31074__auto__ = this;
var this$ = this__31074__auto__;
var _STAR_reconciler_STAR_33057 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33058 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33059 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33060 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33061 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__31074__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__31074__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__31074__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__31074__auto__);

om.next._STAR_parent_STAR_ = this__31074__auto__;

try{var map__33062 = om.next.props.call(null,this$);
var map__33062__$1 = ((((!((map__33062 == null)))?((((map__33062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33062):map__33062);
var count = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return om.dom.div.call(null,null,om.dom.span.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Count: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('')),om.dom.button.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__33062,map__33062__$1,count,_STAR_reconciler_STAR_33057,_STAR_depth_STAR_33058,_STAR_shared_STAR_33059,_STAR_instrument_STAR_33060,_STAR_parent_STAR_33061,this$,this__31074__auto__,x33054_33066){
return (function (e){
return cljs.core.swap_BANG_.call(null,try_om.states.app_state,cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
});})(map__33062,map__33062__$1,count,_STAR_reconciler_STAR_33057,_STAR_depth_STAR_33058,_STAR_shared_STAR_33059,_STAR_instrument_STAR_33060,_STAR_parent_STAR_33061,this$,this__31074__auto__,x33054_33066))
], null)),"Click!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33061;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33060;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33059;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33058;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33057;
}});})(x33054_33066))
;


try_om.states.Counter.prototype.constructor = try_om.states.Counter;

try_om.states.Counter.prototype.constructor.displayName = "try-om.states/Counter";

try_om.states.Counter.prototype.om$isComponent = true;

var x33064_33070 = try_om.states.Counter;


var x33065_33071 = try_om.states.Counter.prototype;


try_om.states.Counter.cljs$lang$type = true;

try_om.states.Counter.cljs$lang$ctorStr = "try-om.states/Counter";

try_om.states.Counter.cljs$lang$ctorPrWriter = (function (this__31224__auto__,writer__31225__auto__,opt__31226__auto__){
return cljs.core._write.call(null,writer__31225__auto__,"try-om.states/Counter");
});
try_om.states.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),try_om.states.app_state], null));
om.next.add_root_BANG_.call(null,try_om.states.reconciler,try_om.states.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=states.js.map?rel=1485678933906