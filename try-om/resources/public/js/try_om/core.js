// Compiled by ClojureScript 1.9.456 {}
goog.provide('try_om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
try_om.core.Title = (function try_om$core$Title(){
var this__33085__auto__ = this;
React.Component.apply(this__33085__auto__,arguments);

if(!((this__33085__auto__.initLocalState == null))){
this__33085__auto__.state = this__33085__auto__.initLocalState();
} else {
this__33085__auto__.state = {};
}

return this__33085__auto__;
});

try_om.core.Title.prototype = goog.object.clone(React.Component.prototype);

var x45584_45594 = try_om.core.Title.prototype;
x45584_45594.componentWillUpdate = ((function (x45584_45594){
return (function (next_props__32940__auto__,next_state__32941__auto__){
var this__32939__auto__ = this;
if(((!((this__32939__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__32939__auto__.om$next$Ident$)))?true:false):false)){
var ident__32943__auto___45595 = om.next.ident.call(null,this__32939__auto__,om.next.props.call(null,this__32939__auto__));
var next_ident__32944__auto___45596 = om.next.ident.call(null,this__32939__auto__,om.next._next_props.call(null,next_props__32940__auto__,this__32939__auto__));
if(cljs.core.not_EQ_.call(null,ident__32943__auto___45595,next_ident__32944__auto___45596)){
var idxr__32945__auto___45597 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32939__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32945__auto___45597 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32945__auto___45597),((function (idxr__32945__auto___45597,ident__32943__auto___45595,next_ident__32944__auto___45596,this__32939__auto__,x45584_45594){
return (function (indexes__32946__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32946__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32943__auto___45595], null),cljs.core.disj,this__32939__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32944__auto___45596], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32939__auto__);
});})(idxr__32945__auto___45597,ident__32943__auto___45595,next_ident__32944__auto___45596,this__32939__auto__,x45584_45594))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32939__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32939__auto__);
});})(x45584_45594))
;

x45584_45594.shouldComponentUpdate = ((function (x45584_45594){
return (function (next_props__32940__auto__,next_state__32941__auto__){
var this__32939__auto__ = this;
var next_children__32942__auto__ = next_props__32940__auto__.children;
var next_props__32940__auto____$1 = goog.object.get(next_props__32940__auto__,"omcljs$value");
var next_props__32940__auto____$2 = (function (){var G__45586 = next_props__32940__auto____$1;
if((next_props__32940__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45586);
} else {
return G__45586;
}
})();
var or__27121__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32939__auto__),next_props__32940__auto____$2);
if(or__27121__auto__){
return or__27121__auto__;
} else {
var or__27121__auto____$1 = (function (){var and__27109__auto__ = this__32939__auto__.state;
if(cljs.core.truth_(and__27109__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32939__auto__.state,"omcljs$state"),goog.object.get(next_state__32941__auto__,"omcljs$state"));
} else {
return and__27109__auto__;
}
})();
if(cljs.core.truth_(or__27121__auto____$1)){
return or__27121__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32939__auto__.props.children,next_children__32942__auto__);
}
}
});})(x45584_45594))
;

x45584_45594.componentWillUnmount = ((function (x45584_45594){
return (function (){
var this__32939__auto__ = this;
var r__32950__auto__ = om.next.get_reconciler.call(null,this__32939__auto__);
var cfg__32951__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32950__auto__);
var st__32952__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32951__auto__);
var indexer__32949__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32951__auto__);
if(cljs.core.truth_((function (){var and__27109__auto__ = !((st__32952__auto__ == null));
if(and__27109__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32952__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32939__auto__], null));
} else {
return and__27109__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32952__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32939__auto__);
} else {
}

if((indexer__32949__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32949__auto__,this__32939__auto__);
}
});})(x45584_45594))
;

x45584_45594.componentDidUpdate = ((function (x45584_45594){
return (function (prev_props__32947__auto__,prev_state__32948__auto__){
var this__32939__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32939__auto__);
});})(x45584_45594))
;

x45584_45594.isMounted = ((function (x45584_45594){
return (function (){
var this__32939__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32939__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45584_45594))
;

x45584_45594.componentWillMount = ((function (x45584_45594){
return (function (){
var this__32939__auto__ = this;
var indexer__32949__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32939__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32949__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32949__auto__,this__32939__auto__);
}
});})(x45584_45594))
;

x45584_45594.render = ((function (x45584_45594){
return (function (){
var this__32938__auto__ = this;
var this$ = this__32938__auto__;
var _STAR_reconciler_STAR_45587 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45588 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45589 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45590 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45591 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32938__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32938__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32938__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32938__auto__);

om.next._STAR_parent_STAR_ = this__32938__auto__;

try{return om.dom.h1.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"Hello"], null)),cljs.core.get.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"title","title",636505583)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45591;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45590;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45589;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45588;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45587;
}});})(x45584_45594))
;


try_om.core.Title.prototype.constructor = try_om.core.Title;

try_om.core.Title.prototype.constructor.displayName = "try-om.core/Title";

try_om.core.Title.prototype.om$isComponent = true;

var x45592_45598 = try_om.core.Title;


var x45593_45599 = try_om.core.Title.prototype;


try_om.core.Title.cljs$lang$type = true;

try_om.core.Title.cljs$lang$ctorStr = "try-om.core/Title";

try_om.core.Title.cljs$lang$ctorPrWriter = (function (this__33088__auto__,writer__33089__auto__,opt__33090__auto__){
return cljs.core._write.call(null,writer__33089__auto__,"try-om.core/Title");
});
try_om.core.title = om.next.factory.call(null,try_om.core.Title);
ReactDOM.render(cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__45600_SHARP_){
return try_om.core.title.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),p1__45600_SHARP_,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45600_SHARP_)].join('')], null));
}),cljs.core.range.call(null,(30)))),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map?rel=1485676098272