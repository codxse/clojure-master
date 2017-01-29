// Compiled by ClojureScript 1.9.456 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27121__auto__){
return or__27121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27121__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39416_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39416_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39421 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39422 = null;
var count__39423 = (0);
var i__39424 = (0);
while(true){
if((i__39424 < count__39423)){
var n = cljs.core._nth.call(null,chunk__39422,i__39424);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39425 = seq__39421;
var G__39426 = chunk__39422;
var G__39427 = count__39423;
var G__39428 = (i__39424 + (1));
seq__39421 = G__39425;
chunk__39422 = G__39426;
count__39423 = G__39427;
i__39424 = G__39428;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__39421);
if(temp__6753__auto__){
var seq__39421__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39421__$1)){
var c__28032__auto__ = cljs.core.chunk_first.call(null,seq__39421__$1);
var G__39429 = cljs.core.chunk_rest.call(null,seq__39421__$1);
var G__39430 = c__28032__auto__;
var G__39431 = cljs.core.count.call(null,c__28032__auto__);
var G__39432 = (0);
seq__39421 = G__39429;
chunk__39422 = G__39430;
count__39423 = G__39431;
i__39424 = G__39432;
continue;
} else {
var n = cljs.core.first.call(null,seq__39421__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39433 = cljs.core.next.call(null,seq__39421__$1);
var G__39434 = null;
var G__39435 = (0);
var G__39436 = (0);
seq__39421 = G__39433;
chunk__39422 = G__39434;
count__39423 = G__39435;
i__39424 = G__39436;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39487_39498 = cljs.core.seq.call(null,deps);
var chunk__39488_39499 = null;
var count__39489_39500 = (0);
var i__39490_39501 = (0);
while(true){
if((i__39490_39501 < count__39489_39500)){
var dep_39502 = cljs.core._nth.call(null,chunk__39488_39499,i__39490_39501);
topo_sort_helper_STAR_.call(null,dep_39502,(depth + (1)),state);

var G__39503 = seq__39487_39498;
var G__39504 = chunk__39488_39499;
var G__39505 = count__39489_39500;
var G__39506 = (i__39490_39501 + (1));
seq__39487_39498 = G__39503;
chunk__39488_39499 = G__39504;
count__39489_39500 = G__39505;
i__39490_39501 = G__39506;
continue;
} else {
var temp__6753__auto___39507 = cljs.core.seq.call(null,seq__39487_39498);
if(temp__6753__auto___39507){
var seq__39487_39508__$1 = temp__6753__auto___39507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39487_39508__$1)){
var c__28032__auto___39509 = cljs.core.chunk_first.call(null,seq__39487_39508__$1);
var G__39510 = cljs.core.chunk_rest.call(null,seq__39487_39508__$1);
var G__39511 = c__28032__auto___39509;
var G__39512 = cljs.core.count.call(null,c__28032__auto___39509);
var G__39513 = (0);
seq__39487_39498 = G__39510;
chunk__39488_39499 = G__39511;
count__39489_39500 = G__39512;
i__39490_39501 = G__39513;
continue;
} else {
var dep_39514 = cljs.core.first.call(null,seq__39487_39508__$1);
topo_sort_helper_STAR_.call(null,dep_39514,(depth + (1)),state);

var G__39515 = cljs.core.next.call(null,seq__39487_39508__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__39487_39498 = G__39515;
chunk__39488_39499 = G__39516;
count__39489_39500 = G__39517;
i__39490_39501 = G__39518;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39491){
var vec__39495 = p__39491;
var seq__39496 = cljs.core.seq.call(null,vec__39495);
var first__39497 = cljs.core.first.call(null,seq__39496);
var seq__39496__$1 = cljs.core.next.call(null,seq__39496);
var x = first__39497;
var xs = seq__39496__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39495,seq__39496,first__39497,seq__39496__$1,x,xs,get_deps__$1){
return (function (p1__39437_SHARP_){
return clojure.set.difference.call(null,p1__39437_SHARP_,x);
});})(vec__39495,seq__39496,first__39497,seq__39496__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39531 = cljs.core.seq.call(null,provides);
var chunk__39532 = null;
var count__39533 = (0);
var i__39534 = (0);
while(true){
if((i__39534 < count__39533)){
var prov = cljs.core._nth.call(null,chunk__39532,i__39534);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39535_39543 = cljs.core.seq.call(null,requires);
var chunk__39536_39544 = null;
var count__39537_39545 = (0);
var i__39538_39546 = (0);
while(true){
if((i__39538_39546 < count__39537_39545)){
var req_39547 = cljs.core._nth.call(null,chunk__39536_39544,i__39538_39546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39547,prov);

var G__39548 = seq__39535_39543;
var G__39549 = chunk__39536_39544;
var G__39550 = count__39537_39545;
var G__39551 = (i__39538_39546 + (1));
seq__39535_39543 = G__39548;
chunk__39536_39544 = G__39549;
count__39537_39545 = G__39550;
i__39538_39546 = G__39551;
continue;
} else {
var temp__6753__auto___39552 = cljs.core.seq.call(null,seq__39535_39543);
if(temp__6753__auto___39552){
var seq__39535_39553__$1 = temp__6753__auto___39552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39535_39553__$1)){
var c__28032__auto___39554 = cljs.core.chunk_first.call(null,seq__39535_39553__$1);
var G__39555 = cljs.core.chunk_rest.call(null,seq__39535_39553__$1);
var G__39556 = c__28032__auto___39554;
var G__39557 = cljs.core.count.call(null,c__28032__auto___39554);
var G__39558 = (0);
seq__39535_39543 = G__39555;
chunk__39536_39544 = G__39556;
count__39537_39545 = G__39557;
i__39538_39546 = G__39558;
continue;
} else {
var req_39559 = cljs.core.first.call(null,seq__39535_39553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39559,prov);

var G__39560 = cljs.core.next.call(null,seq__39535_39553__$1);
var G__39561 = null;
var G__39562 = (0);
var G__39563 = (0);
seq__39535_39543 = G__39560;
chunk__39536_39544 = G__39561;
count__39537_39545 = G__39562;
i__39538_39546 = G__39563;
continue;
}
} else {
}
}
break;
}

var G__39564 = seq__39531;
var G__39565 = chunk__39532;
var G__39566 = count__39533;
var G__39567 = (i__39534 + (1));
seq__39531 = G__39564;
chunk__39532 = G__39565;
count__39533 = G__39566;
i__39534 = G__39567;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__39531);
if(temp__6753__auto__){
var seq__39531__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39531__$1)){
var c__28032__auto__ = cljs.core.chunk_first.call(null,seq__39531__$1);
var G__39568 = cljs.core.chunk_rest.call(null,seq__39531__$1);
var G__39569 = c__28032__auto__;
var G__39570 = cljs.core.count.call(null,c__28032__auto__);
var G__39571 = (0);
seq__39531 = G__39568;
chunk__39532 = G__39569;
count__39533 = G__39570;
i__39534 = G__39571;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39531__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39539_39572 = cljs.core.seq.call(null,requires);
var chunk__39540_39573 = null;
var count__39541_39574 = (0);
var i__39542_39575 = (0);
while(true){
if((i__39542_39575 < count__39541_39574)){
var req_39576 = cljs.core._nth.call(null,chunk__39540_39573,i__39542_39575);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39576,prov);

var G__39577 = seq__39539_39572;
var G__39578 = chunk__39540_39573;
var G__39579 = count__39541_39574;
var G__39580 = (i__39542_39575 + (1));
seq__39539_39572 = G__39577;
chunk__39540_39573 = G__39578;
count__39541_39574 = G__39579;
i__39542_39575 = G__39580;
continue;
} else {
var temp__6753__auto___39581__$1 = cljs.core.seq.call(null,seq__39539_39572);
if(temp__6753__auto___39581__$1){
var seq__39539_39582__$1 = temp__6753__auto___39581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39539_39582__$1)){
var c__28032__auto___39583 = cljs.core.chunk_first.call(null,seq__39539_39582__$1);
var G__39584 = cljs.core.chunk_rest.call(null,seq__39539_39582__$1);
var G__39585 = c__28032__auto___39583;
var G__39586 = cljs.core.count.call(null,c__28032__auto___39583);
var G__39587 = (0);
seq__39539_39572 = G__39584;
chunk__39540_39573 = G__39585;
count__39541_39574 = G__39586;
i__39542_39575 = G__39587;
continue;
} else {
var req_39588 = cljs.core.first.call(null,seq__39539_39582__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39588,prov);

var G__39589 = cljs.core.next.call(null,seq__39539_39582__$1);
var G__39590 = null;
var G__39591 = (0);
var G__39592 = (0);
seq__39539_39572 = G__39589;
chunk__39540_39573 = G__39590;
count__39541_39574 = G__39591;
i__39542_39575 = G__39592;
continue;
}
} else {
}
}
break;
}

var G__39593 = cljs.core.next.call(null,seq__39531__$1);
var G__39594 = null;
var G__39595 = (0);
var G__39596 = (0);
seq__39531 = G__39593;
chunk__39532 = G__39594;
count__39533 = G__39595;
i__39534 = G__39596;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39601_39605 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39602_39606 = null;
var count__39603_39607 = (0);
var i__39604_39608 = (0);
while(true){
if((i__39604_39608 < count__39603_39607)){
var ns_39609 = cljs.core._nth.call(null,chunk__39602_39606,i__39604_39608);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39609);

var G__39610 = seq__39601_39605;
var G__39611 = chunk__39602_39606;
var G__39612 = count__39603_39607;
var G__39613 = (i__39604_39608 + (1));
seq__39601_39605 = G__39610;
chunk__39602_39606 = G__39611;
count__39603_39607 = G__39612;
i__39604_39608 = G__39613;
continue;
} else {
var temp__6753__auto___39614 = cljs.core.seq.call(null,seq__39601_39605);
if(temp__6753__auto___39614){
var seq__39601_39615__$1 = temp__6753__auto___39614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39601_39615__$1)){
var c__28032__auto___39616 = cljs.core.chunk_first.call(null,seq__39601_39615__$1);
var G__39617 = cljs.core.chunk_rest.call(null,seq__39601_39615__$1);
var G__39618 = c__28032__auto___39616;
var G__39619 = cljs.core.count.call(null,c__28032__auto___39616);
var G__39620 = (0);
seq__39601_39605 = G__39617;
chunk__39602_39606 = G__39618;
count__39603_39607 = G__39619;
i__39604_39608 = G__39620;
continue;
} else {
var ns_39621 = cljs.core.first.call(null,seq__39601_39615__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39621);

var G__39622 = cljs.core.next.call(null,seq__39601_39615__$1);
var G__39623 = null;
var G__39624 = (0);
var G__39625 = (0);
seq__39601_39605 = G__39622;
chunk__39602_39606 = G__39623;
count__39603_39607 = G__39624;
i__39604_39608 = G__39625;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27121__auto__ = goog.require__;
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39626__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39627__i = 0, G__39627__a = new Array(arguments.length -  0);
while (G__39627__i < G__39627__a.length) {G__39627__a[G__39627__i] = arguments[G__39627__i + 0]; ++G__39627__i;}
  args = new cljs.core.IndexedSeq(G__39627__a,0);
} 
return G__39626__delegate.call(this,args);};
G__39626.cljs$lang$maxFixedArity = 0;
G__39626.cljs$lang$applyTo = (function (arglist__39628){
var args = cljs.core.seq(arglist__39628);
return G__39626__delegate(args);
});
G__39626.cljs$core$IFn$_invoke$arity$variadic = G__39626__delegate;
return G__39626;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39630 = cljs.core._EQ_;
var expr__39631 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39630.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39631))){
var path_parts = ((function (pred__39630,expr__39631){
return (function (p1__39629_SHARP_){
return clojure.string.split.call(null,p1__39629_SHARP_,/[\/\\]/);
});})(pred__39630,expr__39631))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39630,expr__39631){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39633){if((e39633 instanceof Error)){
var e = e39633;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39633;

}
}})());
});
;})(path_parts,sep,root,pred__39630,expr__39631))
} else {
if(cljs.core.truth_(pred__39630.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39631))){
return ((function (pred__39630,expr__39631){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__39630,expr__39631){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39630,expr__39631))
);

return deferred.addErrback(((function (deferred,pred__39630,expr__39631){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39630,expr__39631))
);
});
;})(pred__39630,expr__39631))
} else {
return ((function (pred__39630,expr__39631){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39630,expr__39631))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39634,callback){
var map__39637 = p__39634;
var map__39637__$1 = ((((!((map__39637 == null)))?((((map__39637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39637):map__39637);
var file_msg = map__39637__$1;
var request_url = cljs.core.get.call(null,map__39637__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39637,map__39637__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39637,map__39637__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__){
return (function (state_39661){
var state_val_39662 = (state_39661[(1)]);
if((state_val_39662 === (7))){
var inst_39657 = (state_39661[(2)]);
var state_39661__$1 = state_39661;
var statearr_39663_39683 = state_39661__$1;
(statearr_39663_39683[(2)] = inst_39657);

(statearr_39663_39683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (1))){
var state_39661__$1 = state_39661;
var statearr_39664_39684 = state_39661__$1;
(statearr_39664_39684[(2)] = null);

(statearr_39664_39684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (4))){
var inst_39641 = (state_39661[(7)]);
var inst_39641__$1 = (state_39661[(2)]);
var state_39661__$1 = (function (){var statearr_39665 = state_39661;
(statearr_39665[(7)] = inst_39641__$1);

return statearr_39665;
})();
if(cljs.core.truth_(inst_39641__$1)){
var statearr_39666_39685 = state_39661__$1;
(statearr_39666_39685[(1)] = (5));

} else {
var statearr_39667_39686 = state_39661__$1;
(statearr_39667_39686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (6))){
var state_39661__$1 = state_39661;
var statearr_39668_39687 = state_39661__$1;
(statearr_39668_39687[(2)] = null);

(statearr_39668_39687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (3))){
var inst_39659 = (state_39661[(2)]);
var state_39661__$1 = state_39661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39661__$1,inst_39659);
} else {
if((state_val_39662 === (2))){
var state_39661__$1 = state_39661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39661__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39662 === (11))){
var inst_39653 = (state_39661[(2)]);
var state_39661__$1 = (function (){var statearr_39669 = state_39661;
(statearr_39669[(8)] = inst_39653);

return statearr_39669;
})();
var statearr_39670_39688 = state_39661__$1;
(statearr_39670_39688[(2)] = null);

(statearr_39670_39688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (9))){
var inst_39645 = (state_39661[(9)]);
var inst_39647 = (state_39661[(10)]);
var inst_39649 = inst_39647.call(null,inst_39645);
var state_39661__$1 = state_39661;
var statearr_39671_39689 = state_39661__$1;
(statearr_39671_39689[(2)] = inst_39649);

(statearr_39671_39689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (5))){
var inst_39641 = (state_39661[(7)]);
var inst_39643 = figwheel.client.file_reloading.blocking_load.call(null,inst_39641);
var state_39661__$1 = state_39661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39661__$1,(8),inst_39643);
} else {
if((state_val_39662 === (10))){
var inst_39645 = (state_39661[(9)]);
var inst_39651 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39645);
var state_39661__$1 = state_39661;
var statearr_39672_39690 = state_39661__$1;
(statearr_39672_39690[(2)] = inst_39651);

(statearr_39672_39690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39662 === (8))){
var inst_39641 = (state_39661[(7)]);
var inst_39647 = (state_39661[(10)]);
var inst_39645 = (state_39661[(2)]);
var inst_39646 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39647__$1 = cljs.core.get.call(null,inst_39646,inst_39641);
var state_39661__$1 = (function (){var statearr_39673 = state_39661;
(statearr_39673[(9)] = inst_39645);

(statearr_39673[(10)] = inst_39647__$1);

return statearr_39673;
})();
if(cljs.core.truth_(inst_39647__$1)){
var statearr_39674_39691 = state_39661__$1;
(statearr_39674_39691[(1)] = (9));

} else {
var statearr_39675_39692 = state_39661__$1;
(statearr_39675_39692[(1)] = (10));

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
});})(c__36543__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36430__auto__ = null;
var figwheel$client$file_reloading$state_machine__36430__auto____0 = (function (){
var statearr_39679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39679[(0)] = figwheel$client$file_reloading$state_machine__36430__auto__);

(statearr_39679[(1)] = (1));

return statearr_39679;
});
var figwheel$client$file_reloading$state_machine__36430__auto____1 = (function (state_39661){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39680){if((e39680 instanceof Object)){
var ex__36433__auto__ = e39680;
var statearr_39681_39693 = state_39661;
(statearr_39681_39693[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39694 = state_39661;
state_39661 = G__39694;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36430__auto__ = function(state_39661){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36430__auto____1.call(this,state_39661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36430__auto____0;
figwheel$client$file_reloading$state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36430__auto____1;
return figwheel$client$file_reloading$state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__))
})();
var state__36545__auto__ = (function (){var statearr_39682 = f__36544__auto__.call(null);
(statearr_39682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_39682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__))
);

return c__36543__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39695,callback){
var map__39698 = p__39695;
var map__39698__$1 = ((((!((map__39698 == null)))?((((map__39698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39698):map__39698);
var file_msg = map__39698__$1;
var namespace = cljs.core.get.call(null,map__39698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39698,map__39698__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39698,map__39698__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39700){
var map__39703 = p__39700;
var map__39703__$1 = ((((!((map__39703 == null)))?((((map__39703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39703):map__39703);
var file_msg = map__39703__$1;
var namespace = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__27109__auto__){
var or__27121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
var or__27121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27121__auto____$1)){
return or__27121__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39705,callback){
var map__39708 = p__39705;
var map__39708__$1 = ((((!((map__39708 == null)))?((((map__39708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39708):map__39708);
var file_msg = map__39708__$1;
var request_url = cljs.core.get.call(null,map__39708__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36543__auto___39812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___39812,out){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___39812,out){
return (function (state_39794){
var state_val_39795 = (state_39794[(1)]);
if((state_val_39795 === (1))){
var inst_39768 = cljs.core.seq.call(null,files);
var inst_39769 = cljs.core.first.call(null,inst_39768);
var inst_39770 = cljs.core.next.call(null,inst_39768);
var inst_39771 = files;
var state_39794__$1 = (function (){var statearr_39796 = state_39794;
(statearr_39796[(7)] = inst_39769);

(statearr_39796[(8)] = inst_39771);

(statearr_39796[(9)] = inst_39770);

return statearr_39796;
})();
var statearr_39797_39813 = state_39794__$1;
(statearr_39797_39813[(2)] = null);

(statearr_39797_39813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39795 === (2))){
var inst_39771 = (state_39794[(8)]);
var inst_39777 = (state_39794[(10)]);
var inst_39776 = cljs.core.seq.call(null,inst_39771);
var inst_39777__$1 = cljs.core.first.call(null,inst_39776);
var inst_39778 = cljs.core.next.call(null,inst_39776);
var inst_39779 = (inst_39777__$1 == null);
var inst_39780 = cljs.core.not.call(null,inst_39779);
var state_39794__$1 = (function (){var statearr_39798 = state_39794;
(statearr_39798[(11)] = inst_39778);

(statearr_39798[(10)] = inst_39777__$1);

return statearr_39798;
})();
if(inst_39780){
var statearr_39799_39814 = state_39794__$1;
(statearr_39799_39814[(1)] = (4));

} else {
var statearr_39800_39815 = state_39794__$1;
(statearr_39800_39815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39795 === (3))){
var inst_39792 = (state_39794[(2)]);
var state_39794__$1 = state_39794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39794__$1,inst_39792);
} else {
if((state_val_39795 === (4))){
var inst_39777 = (state_39794[(10)]);
var inst_39782 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39777);
var state_39794__$1 = state_39794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39794__$1,(7),inst_39782);
} else {
if((state_val_39795 === (5))){
var inst_39788 = cljs.core.async.close_BANG_.call(null,out);
var state_39794__$1 = state_39794;
var statearr_39801_39816 = state_39794__$1;
(statearr_39801_39816[(2)] = inst_39788);

(statearr_39801_39816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39795 === (6))){
var inst_39790 = (state_39794[(2)]);
var state_39794__$1 = state_39794;
var statearr_39802_39817 = state_39794__$1;
(statearr_39802_39817[(2)] = inst_39790);

(statearr_39802_39817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39795 === (7))){
var inst_39778 = (state_39794[(11)]);
var inst_39784 = (state_39794[(2)]);
var inst_39785 = cljs.core.async.put_BANG_.call(null,out,inst_39784);
var inst_39771 = inst_39778;
var state_39794__$1 = (function (){var statearr_39803 = state_39794;
(statearr_39803[(8)] = inst_39771);

(statearr_39803[(12)] = inst_39785);

return statearr_39803;
})();
var statearr_39804_39818 = state_39794__$1;
(statearr_39804_39818[(2)] = null);

(statearr_39804_39818[(1)] = (2));


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
});})(c__36543__auto___39812,out))
;
return ((function (switch__36429__auto__,c__36543__auto___39812,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____0 = (function (){
var statearr_39808 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39808[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__);

(statearr_39808[(1)] = (1));

return statearr_39808;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____1 = (function (state_39794){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_39794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e39809){if((e39809 instanceof Object)){
var ex__36433__auto__ = e39809;
var statearr_39810_39819 = state_39794;
(statearr_39810_39819[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39820 = state_39794;
state_39794 = G__39820;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__ = function(state_39794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____1.call(this,state_39794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___39812,out))
})();
var state__36545__auto__ = (function (){var statearr_39811 = f__36544__auto__.call(null);
(statearr_39811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___39812);

return statearr_39811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___39812,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39821,opts){
var map__39825 = p__39821;
var map__39825__$1 = ((((!((map__39825 == null)))?((((map__39825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39825):map__39825);
var eval_body = cljs.core.get.call(null,map__39825__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27109__auto__ = eval_body;
if(cljs.core.truth_(and__27109__auto__)){
return typeof eval_body === 'string';
} else {
return and__27109__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39827){var e = e39827;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39828_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39828_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39837){
var vec__39838 = p__39837;
var k = cljs.core.nth.call(null,vec__39838,(0),null);
var v = cljs.core.nth.call(null,vec__39838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39841){
var vec__39842 = p__39841;
var k = cljs.core.nth.call(null,vec__39842,(0),null);
var v = cljs.core.nth.call(null,vec__39842,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39848,p__39849){
var map__40097 = p__39848;
var map__40097__$1 = ((((!((map__40097 == null)))?((((map__40097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40097):map__40097);
var opts = map__40097__$1;
var before_jsload = cljs.core.get.call(null,map__40097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40098 = p__39849;
var map__40098__$1 = ((((!((map__40098 == null)))?((((map__40098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40098):map__40098);
var msg = map__40098__$1;
var files = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40252){
var state_val_40253 = (state_40252[(1)]);
if((state_val_40253 === (7))){
var inst_40112 = (state_40252[(7)]);
var inst_40113 = (state_40252[(8)]);
var inst_40115 = (state_40252[(9)]);
var inst_40114 = (state_40252[(10)]);
var inst_40120 = cljs.core._nth.call(null,inst_40113,inst_40115);
var inst_40121 = figwheel.client.file_reloading.eval_body.call(null,inst_40120,opts);
var inst_40122 = (inst_40115 + (1));
var tmp40254 = inst_40112;
var tmp40255 = inst_40113;
var tmp40256 = inst_40114;
var inst_40112__$1 = tmp40254;
var inst_40113__$1 = tmp40255;
var inst_40114__$1 = tmp40256;
var inst_40115__$1 = inst_40122;
var state_40252__$1 = (function (){var statearr_40257 = state_40252;
(statearr_40257[(7)] = inst_40112__$1);

(statearr_40257[(8)] = inst_40113__$1);

(statearr_40257[(11)] = inst_40121);

(statearr_40257[(9)] = inst_40115__$1);

(statearr_40257[(10)] = inst_40114__$1);

return statearr_40257;
})();
var statearr_40258_40344 = state_40252__$1;
(statearr_40258_40344[(2)] = null);

(statearr_40258_40344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (20))){
var inst_40155 = (state_40252[(12)]);
var inst_40163 = figwheel.client.file_reloading.sort_files.call(null,inst_40155);
var state_40252__$1 = state_40252;
var statearr_40259_40345 = state_40252__$1;
(statearr_40259_40345[(2)] = inst_40163);

(statearr_40259_40345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (27))){
var state_40252__$1 = state_40252;
var statearr_40260_40346 = state_40252__$1;
(statearr_40260_40346[(2)] = null);

(statearr_40260_40346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (1))){
var inst_40104 = (state_40252[(13)]);
var inst_40101 = before_jsload.call(null,files);
var inst_40102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40103 = (function (){return ((function (inst_40104,inst_40101,inst_40102,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39845_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39845_SHARP_);
});
;})(inst_40104,inst_40101,inst_40102,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40104__$1 = cljs.core.filter.call(null,inst_40103,files);
var inst_40105 = cljs.core.not_empty.call(null,inst_40104__$1);
var state_40252__$1 = (function (){var statearr_40261 = state_40252;
(statearr_40261[(13)] = inst_40104__$1);

(statearr_40261[(14)] = inst_40101);

(statearr_40261[(15)] = inst_40102);

return statearr_40261;
})();
if(cljs.core.truth_(inst_40105)){
var statearr_40262_40347 = state_40252__$1;
(statearr_40262_40347[(1)] = (2));

} else {
var statearr_40263_40348 = state_40252__$1;
(statearr_40263_40348[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (24))){
var state_40252__$1 = state_40252;
var statearr_40264_40349 = state_40252__$1;
(statearr_40264_40349[(2)] = null);

(statearr_40264_40349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (39))){
var inst_40205 = (state_40252[(16)]);
var state_40252__$1 = state_40252;
var statearr_40265_40350 = state_40252__$1;
(statearr_40265_40350[(2)] = inst_40205);

(statearr_40265_40350[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (46))){
var inst_40247 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40266_40351 = state_40252__$1;
(statearr_40266_40351[(2)] = inst_40247);

(statearr_40266_40351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (4))){
var inst_40149 = (state_40252[(2)]);
var inst_40150 = cljs.core.List.EMPTY;
var inst_40151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40150);
var inst_40152 = (function (){return ((function (inst_40149,inst_40150,inst_40151,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39846_SHARP_){
var and__27109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39846_SHARP_);
if(cljs.core.truth_(and__27109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39846_SHARP_));
} else {
return and__27109__auto__;
}
});
;})(inst_40149,inst_40150,inst_40151,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40153 = cljs.core.filter.call(null,inst_40152,files);
var inst_40154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40155 = cljs.core.concat.call(null,inst_40153,inst_40154);
var state_40252__$1 = (function (){var statearr_40267 = state_40252;
(statearr_40267[(17)] = inst_40149);

(statearr_40267[(18)] = inst_40151);

(statearr_40267[(12)] = inst_40155);

return statearr_40267;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40268_40352 = state_40252__$1;
(statearr_40268_40352[(1)] = (16));

} else {
var statearr_40269_40353 = state_40252__$1;
(statearr_40269_40353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (15))){
var inst_40139 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40270_40354 = state_40252__$1;
(statearr_40270_40354[(2)] = inst_40139);

(statearr_40270_40354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (21))){
var inst_40165 = (state_40252[(19)]);
var inst_40165__$1 = (state_40252[(2)]);
var inst_40166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40165__$1);
var state_40252__$1 = (function (){var statearr_40271 = state_40252;
(statearr_40271[(19)] = inst_40165__$1);

return statearr_40271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40252__$1,(22),inst_40166);
} else {
if((state_val_40253 === (31))){
var inst_40250 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40252__$1,inst_40250);
} else {
if((state_val_40253 === (32))){
var inst_40205 = (state_40252[(16)]);
var inst_40210 = inst_40205.cljs$lang$protocol_mask$partition0$;
var inst_40211 = (inst_40210 & (64));
var inst_40212 = inst_40205.cljs$core$ISeq$;
var inst_40213 = (cljs.core.PROTOCOL_SENTINEL === inst_40212);
var inst_40214 = (inst_40211) || (inst_40213);
var state_40252__$1 = state_40252;
if(cljs.core.truth_(inst_40214)){
var statearr_40272_40355 = state_40252__$1;
(statearr_40272_40355[(1)] = (35));

} else {
var statearr_40273_40356 = state_40252__$1;
(statearr_40273_40356[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (40))){
var inst_40227 = (state_40252[(20)]);
var inst_40226 = (state_40252[(2)]);
var inst_40227__$1 = cljs.core.get.call(null,inst_40226,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40228 = cljs.core.get.call(null,inst_40226,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40229 = cljs.core.not_empty.call(null,inst_40227__$1);
var state_40252__$1 = (function (){var statearr_40274 = state_40252;
(statearr_40274[(20)] = inst_40227__$1);

(statearr_40274[(21)] = inst_40228);

return statearr_40274;
})();
if(cljs.core.truth_(inst_40229)){
var statearr_40275_40357 = state_40252__$1;
(statearr_40275_40357[(1)] = (41));

} else {
var statearr_40276_40358 = state_40252__$1;
(statearr_40276_40358[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (33))){
var state_40252__$1 = state_40252;
var statearr_40277_40359 = state_40252__$1;
(statearr_40277_40359[(2)] = false);

(statearr_40277_40359[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (13))){
var inst_40125 = (state_40252[(22)]);
var inst_40129 = cljs.core.chunk_first.call(null,inst_40125);
var inst_40130 = cljs.core.chunk_rest.call(null,inst_40125);
var inst_40131 = cljs.core.count.call(null,inst_40129);
var inst_40112 = inst_40130;
var inst_40113 = inst_40129;
var inst_40114 = inst_40131;
var inst_40115 = (0);
var state_40252__$1 = (function (){var statearr_40278 = state_40252;
(statearr_40278[(7)] = inst_40112);

(statearr_40278[(8)] = inst_40113);

(statearr_40278[(9)] = inst_40115);

(statearr_40278[(10)] = inst_40114);

return statearr_40278;
})();
var statearr_40279_40360 = state_40252__$1;
(statearr_40279_40360[(2)] = null);

(statearr_40279_40360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (22))){
var inst_40173 = (state_40252[(23)]);
var inst_40169 = (state_40252[(24)]);
var inst_40165 = (state_40252[(19)]);
var inst_40168 = (state_40252[(25)]);
var inst_40168__$1 = (state_40252[(2)]);
var inst_40169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40168__$1);
var inst_40170 = (function (){var all_files = inst_40165;
var res_SINGLEQUOTE_ = inst_40168__$1;
var res = inst_40169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40173,inst_40169,inst_40165,inst_40168,inst_40168__$1,inst_40169__$1,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39847_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39847_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40173,inst_40169,inst_40165,inst_40168,inst_40168__$1,inst_40169__$1,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40171 = cljs.core.filter.call(null,inst_40170,inst_40168__$1);
var inst_40172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40172);
var inst_40174 = cljs.core.not_empty.call(null,inst_40173__$1);
var state_40252__$1 = (function (){var statearr_40280 = state_40252;
(statearr_40280[(23)] = inst_40173__$1);

(statearr_40280[(26)] = inst_40171);

(statearr_40280[(24)] = inst_40169__$1);

(statearr_40280[(25)] = inst_40168__$1);

return statearr_40280;
})();
if(cljs.core.truth_(inst_40174)){
var statearr_40281_40361 = state_40252__$1;
(statearr_40281_40361[(1)] = (23));

} else {
var statearr_40282_40362 = state_40252__$1;
(statearr_40282_40362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (36))){
var state_40252__$1 = state_40252;
var statearr_40283_40363 = state_40252__$1;
(statearr_40283_40363[(2)] = false);

(statearr_40283_40363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (41))){
var inst_40227 = (state_40252[(20)]);
var inst_40231 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40232 = cljs.core.map.call(null,inst_40231,inst_40227);
var inst_40233 = cljs.core.pr_str.call(null,inst_40232);
var inst_40234 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40233)].join('');
var inst_40235 = figwheel.client.utils.log.call(null,inst_40234);
var state_40252__$1 = state_40252;
var statearr_40284_40364 = state_40252__$1;
(statearr_40284_40364[(2)] = inst_40235);

(statearr_40284_40364[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (43))){
var inst_40228 = (state_40252[(21)]);
var inst_40238 = (state_40252[(2)]);
var inst_40239 = cljs.core.not_empty.call(null,inst_40228);
var state_40252__$1 = (function (){var statearr_40285 = state_40252;
(statearr_40285[(27)] = inst_40238);

return statearr_40285;
})();
if(cljs.core.truth_(inst_40239)){
var statearr_40286_40365 = state_40252__$1;
(statearr_40286_40365[(1)] = (44));

} else {
var statearr_40287_40366 = state_40252__$1;
(statearr_40287_40366[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (29))){
var inst_40173 = (state_40252[(23)]);
var inst_40171 = (state_40252[(26)]);
var inst_40205 = (state_40252[(16)]);
var inst_40169 = (state_40252[(24)]);
var inst_40165 = (state_40252[(19)]);
var inst_40168 = (state_40252[(25)]);
var inst_40201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40204 = (function (){var all_files = inst_40165;
var res_SINGLEQUOTE_ = inst_40168;
var res = inst_40169;
var files_not_loaded = inst_40171;
var dependencies_that_loaded = inst_40173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40205,inst_40169,inst_40165,inst_40168,inst_40201,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40203){
var map__40288 = p__40203;
var map__40288__$1 = ((((!((map__40288 == null)))?((((map__40288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40288):map__40288);
var namespace = cljs.core.get.call(null,map__40288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40205,inst_40169,inst_40165,inst_40168,inst_40201,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40205__$1 = cljs.core.group_by.call(null,inst_40204,inst_40171);
var inst_40207 = (inst_40205__$1 == null);
var inst_40208 = cljs.core.not.call(null,inst_40207);
var state_40252__$1 = (function (){var statearr_40290 = state_40252;
(statearr_40290[(28)] = inst_40201);

(statearr_40290[(16)] = inst_40205__$1);

return statearr_40290;
})();
if(inst_40208){
var statearr_40291_40367 = state_40252__$1;
(statearr_40291_40367[(1)] = (32));

} else {
var statearr_40292_40368 = state_40252__$1;
(statearr_40292_40368[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (44))){
var inst_40228 = (state_40252[(21)]);
var inst_40241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40228);
var inst_40242 = cljs.core.pr_str.call(null,inst_40241);
var inst_40243 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40242)].join('');
var inst_40244 = figwheel.client.utils.log.call(null,inst_40243);
var state_40252__$1 = state_40252;
var statearr_40293_40369 = state_40252__$1;
(statearr_40293_40369[(2)] = inst_40244);

(statearr_40293_40369[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (6))){
var inst_40146 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40294_40370 = state_40252__$1;
(statearr_40294_40370[(2)] = inst_40146);

(statearr_40294_40370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (28))){
var inst_40171 = (state_40252[(26)]);
var inst_40198 = (state_40252[(2)]);
var inst_40199 = cljs.core.not_empty.call(null,inst_40171);
var state_40252__$1 = (function (){var statearr_40295 = state_40252;
(statearr_40295[(29)] = inst_40198);

return statearr_40295;
})();
if(cljs.core.truth_(inst_40199)){
var statearr_40296_40371 = state_40252__$1;
(statearr_40296_40371[(1)] = (29));

} else {
var statearr_40297_40372 = state_40252__$1;
(statearr_40297_40372[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (25))){
var inst_40169 = (state_40252[(24)]);
var inst_40185 = (state_40252[(2)]);
var inst_40186 = cljs.core.not_empty.call(null,inst_40169);
var state_40252__$1 = (function (){var statearr_40298 = state_40252;
(statearr_40298[(30)] = inst_40185);

return statearr_40298;
})();
if(cljs.core.truth_(inst_40186)){
var statearr_40299_40373 = state_40252__$1;
(statearr_40299_40373[(1)] = (26));

} else {
var statearr_40300_40374 = state_40252__$1;
(statearr_40300_40374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (34))){
var inst_40221 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
if(cljs.core.truth_(inst_40221)){
var statearr_40301_40375 = state_40252__$1;
(statearr_40301_40375[(1)] = (38));

} else {
var statearr_40302_40376 = state_40252__$1;
(statearr_40302_40376[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (17))){
var state_40252__$1 = state_40252;
var statearr_40303_40377 = state_40252__$1;
(statearr_40303_40377[(2)] = recompile_dependents);

(statearr_40303_40377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (3))){
var state_40252__$1 = state_40252;
var statearr_40304_40378 = state_40252__$1;
(statearr_40304_40378[(2)] = null);

(statearr_40304_40378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (12))){
var inst_40142 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40305_40379 = state_40252__$1;
(statearr_40305_40379[(2)] = inst_40142);

(statearr_40305_40379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (2))){
var inst_40104 = (state_40252[(13)]);
var inst_40111 = cljs.core.seq.call(null,inst_40104);
var inst_40112 = inst_40111;
var inst_40113 = null;
var inst_40114 = (0);
var inst_40115 = (0);
var state_40252__$1 = (function (){var statearr_40306 = state_40252;
(statearr_40306[(7)] = inst_40112);

(statearr_40306[(8)] = inst_40113);

(statearr_40306[(9)] = inst_40115);

(statearr_40306[(10)] = inst_40114);

return statearr_40306;
})();
var statearr_40307_40380 = state_40252__$1;
(statearr_40307_40380[(2)] = null);

(statearr_40307_40380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (23))){
var inst_40173 = (state_40252[(23)]);
var inst_40171 = (state_40252[(26)]);
var inst_40169 = (state_40252[(24)]);
var inst_40165 = (state_40252[(19)]);
var inst_40168 = (state_40252[(25)]);
var inst_40176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40178 = (function (){var all_files = inst_40165;
var res_SINGLEQUOTE_ = inst_40168;
var res = inst_40169;
var files_not_loaded = inst_40171;
var dependencies_that_loaded = inst_40173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40176,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40177){
var map__40308 = p__40177;
var map__40308__$1 = ((((!((map__40308 == null)))?((((map__40308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40308):map__40308);
var request_url = cljs.core.get.call(null,map__40308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40176,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40179 = cljs.core.reverse.call(null,inst_40173);
var inst_40180 = cljs.core.map.call(null,inst_40178,inst_40179);
var inst_40181 = cljs.core.pr_str.call(null,inst_40180);
var inst_40182 = figwheel.client.utils.log.call(null,inst_40181);
var state_40252__$1 = (function (){var statearr_40310 = state_40252;
(statearr_40310[(31)] = inst_40176);

return statearr_40310;
})();
var statearr_40311_40381 = state_40252__$1;
(statearr_40311_40381[(2)] = inst_40182);

(statearr_40311_40381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (35))){
var state_40252__$1 = state_40252;
var statearr_40312_40382 = state_40252__$1;
(statearr_40312_40382[(2)] = true);

(statearr_40312_40382[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (19))){
var inst_40155 = (state_40252[(12)]);
var inst_40161 = figwheel.client.file_reloading.expand_files.call(null,inst_40155);
var state_40252__$1 = state_40252;
var statearr_40313_40383 = state_40252__$1;
(statearr_40313_40383[(2)] = inst_40161);

(statearr_40313_40383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (11))){
var state_40252__$1 = state_40252;
var statearr_40314_40384 = state_40252__$1;
(statearr_40314_40384[(2)] = null);

(statearr_40314_40384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (9))){
var inst_40144 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40315_40385 = state_40252__$1;
(statearr_40315_40385[(2)] = inst_40144);

(statearr_40315_40385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (5))){
var inst_40115 = (state_40252[(9)]);
var inst_40114 = (state_40252[(10)]);
var inst_40117 = (inst_40115 < inst_40114);
var inst_40118 = inst_40117;
var state_40252__$1 = state_40252;
if(cljs.core.truth_(inst_40118)){
var statearr_40316_40386 = state_40252__$1;
(statearr_40316_40386[(1)] = (7));

} else {
var statearr_40317_40387 = state_40252__$1;
(statearr_40317_40387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (14))){
var inst_40125 = (state_40252[(22)]);
var inst_40134 = cljs.core.first.call(null,inst_40125);
var inst_40135 = figwheel.client.file_reloading.eval_body.call(null,inst_40134,opts);
var inst_40136 = cljs.core.next.call(null,inst_40125);
var inst_40112 = inst_40136;
var inst_40113 = null;
var inst_40114 = (0);
var inst_40115 = (0);
var state_40252__$1 = (function (){var statearr_40318 = state_40252;
(statearr_40318[(7)] = inst_40112);

(statearr_40318[(8)] = inst_40113);

(statearr_40318[(9)] = inst_40115);

(statearr_40318[(10)] = inst_40114);

(statearr_40318[(32)] = inst_40135);

return statearr_40318;
})();
var statearr_40319_40388 = state_40252__$1;
(statearr_40319_40388[(2)] = null);

(statearr_40319_40388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (45))){
var state_40252__$1 = state_40252;
var statearr_40320_40389 = state_40252__$1;
(statearr_40320_40389[(2)] = null);

(statearr_40320_40389[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (26))){
var inst_40173 = (state_40252[(23)]);
var inst_40171 = (state_40252[(26)]);
var inst_40169 = (state_40252[(24)]);
var inst_40165 = (state_40252[(19)]);
var inst_40168 = (state_40252[(25)]);
var inst_40188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40190 = (function (){var all_files = inst_40165;
var res_SINGLEQUOTE_ = inst_40168;
var res = inst_40169;
var files_not_loaded = inst_40171;
var dependencies_that_loaded = inst_40173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40188,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40189){
var map__40321 = p__40189;
var map__40321__$1 = ((((!((map__40321 == null)))?((((map__40321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40321):map__40321);
var namespace = cljs.core.get.call(null,map__40321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40188,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40191 = cljs.core.map.call(null,inst_40190,inst_40169);
var inst_40192 = cljs.core.pr_str.call(null,inst_40191);
var inst_40193 = figwheel.client.utils.log.call(null,inst_40192);
var inst_40194 = (function (){var all_files = inst_40165;
var res_SINGLEQUOTE_ = inst_40168;
var res = inst_40169;
var files_not_loaded = inst_40171;
var dependencies_that_loaded = inst_40173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40188,inst_40190,inst_40191,inst_40192,inst_40193,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40173,inst_40171,inst_40169,inst_40165,inst_40168,inst_40188,inst_40190,inst_40191,inst_40192,inst_40193,state_val_40253,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40195 = setTimeout(inst_40194,(10));
var state_40252__$1 = (function (){var statearr_40323 = state_40252;
(statearr_40323[(33)] = inst_40193);

(statearr_40323[(34)] = inst_40188);

return statearr_40323;
})();
var statearr_40324_40390 = state_40252__$1;
(statearr_40324_40390[(2)] = inst_40195);

(statearr_40324_40390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (16))){
var state_40252__$1 = state_40252;
var statearr_40325_40391 = state_40252__$1;
(statearr_40325_40391[(2)] = reload_dependents);

(statearr_40325_40391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (38))){
var inst_40205 = (state_40252[(16)]);
var inst_40223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40205);
var state_40252__$1 = state_40252;
var statearr_40326_40392 = state_40252__$1;
(statearr_40326_40392[(2)] = inst_40223);

(statearr_40326_40392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (30))){
var state_40252__$1 = state_40252;
var statearr_40327_40393 = state_40252__$1;
(statearr_40327_40393[(2)] = null);

(statearr_40327_40393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (10))){
var inst_40125 = (state_40252[(22)]);
var inst_40127 = cljs.core.chunked_seq_QMARK_.call(null,inst_40125);
var state_40252__$1 = state_40252;
if(inst_40127){
var statearr_40328_40394 = state_40252__$1;
(statearr_40328_40394[(1)] = (13));

} else {
var statearr_40329_40395 = state_40252__$1;
(statearr_40329_40395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (18))){
var inst_40159 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
if(cljs.core.truth_(inst_40159)){
var statearr_40330_40396 = state_40252__$1;
(statearr_40330_40396[(1)] = (19));

} else {
var statearr_40331_40397 = state_40252__$1;
(statearr_40331_40397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (42))){
var state_40252__$1 = state_40252;
var statearr_40332_40398 = state_40252__$1;
(statearr_40332_40398[(2)] = null);

(statearr_40332_40398[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (37))){
var inst_40218 = (state_40252[(2)]);
var state_40252__$1 = state_40252;
var statearr_40333_40399 = state_40252__$1;
(statearr_40333_40399[(2)] = inst_40218);

(statearr_40333_40399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40253 === (8))){
var inst_40112 = (state_40252[(7)]);
var inst_40125 = (state_40252[(22)]);
var inst_40125__$1 = cljs.core.seq.call(null,inst_40112);
var state_40252__$1 = (function (){var statearr_40334 = state_40252;
(statearr_40334[(22)] = inst_40125__$1);

return statearr_40334;
})();
if(inst_40125__$1){
var statearr_40335_40400 = state_40252__$1;
(statearr_40335_40400[(1)] = (10));

} else {
var statearr_40336_40401 = state_40252__$1;
(statearr_40336_40401[(1)] = (11));

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
}
});})(c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36429__auto__,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____0 = (function (){
var statearr_40340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40340[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__);

(statearr_40340[(1)] = (1));

return statearr_40340;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____1 = (function (state_40252){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_40252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e40341){if((e40341 instanceof Object)){
var ex__36433__auto__ = e40341;
var statearr_40342_40402 = state_40252;
(statearr_40342_40402[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40403 = state_40252;
state_40252 = G__40403;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__ = function(state_40252){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____1.call(this,state_40252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36545__auto__ = (function (){var statearr_40343 = f__36544__auto__.call(null);
(statearr_40343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_40343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__,map__40097,map__40097__$1,opts,before_jsload,on_jsload,reload_dependents,map__40098,map__40098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36543__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40406,link){
var map__40409 = p__40406;
var map__40409__$1 = ((((!((map__40409 == null)))?((((map__40409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40409):map__40409);
var file = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__40409,map__40409__$1,file){
return (function (p1__40404_SHARP_,p2__40405_SHARP_){
if(cljs.core._EQ_.call(null,p1__40404_SHARP_,p2__40405_SHARP_)){
return p1__40404_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__40409,map__40409__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40415){
var map__40416 = p__40415;
var map__40416__$1 = ((((!((map__40416 == null)))?((((map__40416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40416):map__40416);
var match_length = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40411_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40411_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args40418 = [];
var len__28342__auto___40421 = arguments.length;
var i__28343__auto___40422 = (0);
while(true){
if((i__28343__auto___40422 < len__28342__auto___40421)){
args40418.push((arguments[i__28343__auto___40422]));

var G__40423 = (i__28343__auto___40422 + (1));
i__28343__auto___40422 = G__40423;
continue;
} else {
}
break;
}

var G__40420 = args40418.length;
switch (G__40420) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40418.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40425_SHARP_,p2__40426_SHARP_){
return cljs.core.assoc.call(null,p1__40425_SHARP_,cljs.core.get.call(null,p2__40426_SHARP_,key),p2__40426_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40427){
var map__40430 = p__40427;
var map__40430__$1 = ((((!((map__40430 == null)))?((((map__40430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40430):map__40430);
var f_data = map__40430__$1;
var file = cljs.core.get.call(null,map__40430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40432,p__40433){
var map__40442 = p__40432;
var map__40442__$1 = ((((!((map__40442 == null)))?((((map__40442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40442):map__40442);
var opts = map__40442__$1;
var on_cssload = cljs.core.get.call(null,map__40442__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40443 = p__40433;
var map__40443__$1 = ((((!((map__40443 == null)))?((((map__40443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40443):map__40443);
var files_msg = map__40443__$1;
var files = cljs.core.get.call(null,map__40443__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40446_40450 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__40447_40451 = null;
var count__40448_40452 = (0);
var i__40449_40453 = (0);
while(true){
if((i__40449_40453 < count__40448_40452)){
var f_40454 = cljs.core._nth.call(null,chunk__40447_40451,i__40449_40453);
figwheel.client.file_reloading.reload_css_file.call(null,f_40454);

var G__40455 = seq__40446_40450;
var G__40456 = chunk__40447_40451;
var G__40457 = count__40448_40452;
var G__40458 = (i__40449_40453 + (1));
seq__40446_40450 = G__40455;
chunk__40447_40451 = G__40456;
count__40448_40452 = G__40457;
i__40449_40453 = G__40458;
continue;
} else {
var temp__6753__auto___40459 = cljs.core.seq.call(null,seq__40446_40450);
if(temp__6753__auto___40459){
var seq__40446_40460__$1 = temp__6753__auto___40459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40446_40460__$1)){
var c__28032__auto___40461 = cljs.core.chunk_first.call(null,seq__40446_40460__$1);
var G__40462 = cljs.core.chunk_rest.call(null,seq__40446_40460__$1);
var G__40463 = c__28032__auto___40461;
var G__40464 = cljs.core.count.call(null,c__28032__auto___40461);
var G__40465 = (0);
seq__40446_40450 = G__40462;
chunk__40447_40451 = G__40463;
count__40448_40452 = G__40464;
i__40449_40453 = G__40465;
continue;
} else {
var f_40466 = cljs.core.first.call(null,seq__40446_40460__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40466);

var G__40467 = cljs.core.next.call(null,seq__40446_40460__$1);
var G__40468 = null;
var G__40469 = (0);
var G__40470 = (0);
seq__40446_40450 = G__40467;
chunk__40447_40451 = G__40468;
count__40448_40452 = G__40469;
i__40449_40453 = G__40470;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40442,map__40442__$1,opts,on_cssload,map__40443,map__40443__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__40442,map__40442__$1,opts,on_cssload,map__40443,map__40443__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485671353571