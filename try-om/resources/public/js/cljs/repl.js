// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41885){
var map__41910 = p__41885;
var map__41910__$1 = ((((!((map__41910 == null)))?((((map__41910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41910):map__41910);
var m = map__41910__$1;
var n = cljs.core.get.call(null,map__41910__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41912_41934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41913_41935 = null;
var count__41914_41936 = (0);
var i__41915_41937 = (0);
while(true){
if((i__41915_41937 < count__41914_41936)){
var f_41938 = cljs.core._nth.call(null,chunk__41913_41935,i__41915_41937);
cljs.core.println.call(null,"  ",f_41938);

var G__41939 = seq__41912_41934;
var G__41940 = chunk__41913_41935;
var G__41941 = count__41914_41936;
var G__41942 = (i__41915_41937 + (1));
seq__41912_41934 = G__41939;
chunk__41913_41935 = G__41940;
count__41914_41936 = G__41941;
i__41915_41937 = G__41942;
continue;
} else {
var temp__6753__auto___41943 = cljs.core.seq.call(null,seq__41912_41934);
if(temp__6753__auto___41943){
var seq__41912_41944__$1 = temp__6753__auto___41943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41912_41944__$1)){
var c__28032__auto___41945 = cljs.core.chunk_first.call(null,seq__41912_41944__$1);
var G__41946 = cljs.core.chunk_rest.call(null,seq__41912_41944__$1);
var G__41947 = c__28032__auto___41945;
var G__41948 = cljs.core.count.call(null,c__28032__auto___41945);
var G__41949 = (0);
seq__41912_41934 = G__41946;
chunk__41913_41935 = G__41947;
count__41914_41936 = G__41948;
i__41915_41937 = G__41949;
continue;
} else {
var f_41950 = cljs.core.first.call(null,seq__41912_41944__$1);
cljs.core.println.call(null,"  ",f_41950);

var G__41951 = cljs.core.next.call(null,seq__41912_41944__$1);
var G__41952 = null;
var G__41953 = (0);
var G__41954 = (0);
seq__41912_41934 = G__41951;
chunk__41913_41935 = G__41952;
count__41914_41936 = G__41953;
i__41915_41937 = G__41954;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41955 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41955);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41955)))?cljs.core.second.call(null,arglists_41955):arglists_41955));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__41916_41956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41917_41957 = null;
var count__41918_41958 = (0);
var i__41919_41959 = (0);
while(true){
if((i__41919_41959 < count__41918_41958)){
var vec__41920_41960 = cljs.core._nth.call(null,chunk__41917_41957,i__41919_41959);
var name_41961 = cljs.core.nth.call(null,vec__41920_41960,(0),null);
var map__41923_41962 = cljs.core.nth.call(null,vec__41920_41960,(1),null);
var map__41923_41963__$1 = ((((!((map__41923_41962 == null)))?((((map__41923_41962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41923_41962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41923_41962):map__41923_41962);
var doc_41964 = cljs.core.get.call(null,map__41923_41963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41965 = cljs.core.get.call(null,map__41923_41963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41961);

cljs.core.println.call(null," ",arglists_41965);

if(cljs.core.truth_(doc_41964)){
cljs.core.println.call(null," ",doc_41964);
} else {
}

var G__41966 = seq__41916_41956;
var G__41967 = chunk__41917_41957;
var G__41968 = count__41918_41958;
var G__41969 = (i__41919_41959 + (1));
seq__41916_41956 = G__41966;
chunk__41917_41957 = G__41967;
count__41918_41958 = G__41968;
i__41919_41959 = G__41969;
continue;
} else {
var temp__6753__auto___41970 = cljs.core.seq.call(null,seq__41916_41956);
if(temp__6753__auto___41970){
var seq__41916_41971__$1 = temp__6753__auto___41970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41916_41971__$1)){
var c__28032__auto___41972 = cljs.core.chunk_first.call(null,seq__41916_41971__$1);
var G__41973 = cljs.core.chunk_rest.call(null,seq__41916_41971__$1);
var G__41974 = c__28032__auto___41972;
var G__41975 = cljs.core.count.call(null,c__28032__auto___41972);
var G__41976 = (0);
seq__41916_41956 = G__41973;
chunk__41917_41957 = G__41974;
count__41918_41958 = G__41975;
i__41919_41959 = G__41976;
continue;
} else {
var vec__41925_41977 = cljs.core.first.call(null,seq__41916_41971__$1);
var name_41978 = cljs.core.nth.call(null,vec__41925_41977,(0),null);
var map__41928_41979 = cljs.core.nth.call(null,vec__41925_41977,(1),null);
var map__41928_41980__$1 = ((((!((map__41928_41979 == null)))?((((map__41928_41979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41928_41979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41928_41979):map__41928_41979);
var doc_41981 = cljs.core.get.call(null,map__41928_41980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41982 = cljs.core.get.call(null,map__41928_41980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41978);

cljs.core.println.call(null," ",arglists_41982);

if(cljs.core.truth_(doc_41981)){
cljs.core.println.call(null," ",doc_41981);
} else {
}

var G__41983 = cljs.core.next.call(null,seq__41916_41971__$1);
var G__41984 = null;
var G__41985 = (0);
var G__41986 = (0);
seq__41916_41956 = G__41983;
chunk__41917_41957 = G__41984;
count__41918_41958 = G__41985;
i__41919_41959 = G__41986;
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
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__41930 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41931 = null;
var count__41932 = (0);
var i__41933 = (0);
while(true){
if((i__41933 < count__41932)){
var role = cljs.core._nth.call(null,chunk__41931,i__41933);
var temp__6753__auto___41987__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___41987__$1)){
var spec_41988 = temp__6753__auto___41987__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_41988));
} else {
}

var G__41989 = seq__41930;
var G__41990 = chunk__41931;
var G__41991 = count__41932;
var G__41992 = (i__41933 + (1));
seq__41930 = G__41989;
chunk__41931 = G__41990;
count__41932 = G__41991;
i__41933 = G__41992;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__41930);
if(temp__6753__auto____$1){
var seq__41930__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41930__$1)){
var c__28032__auto__ = cljs.core.chunk_first.call(null,seq__41930__$1);
var G__41993 = cljs.core.chunk_rest.call(null,seq__41930__$1);
var G__41994 = c__28032__auto__;
var G__41995 = cljs.core.count.call(null,c__28032__auto__);
var G__41996 = (0);
seq__41930 = G__41993;
chunk__41931 = G__41994;
count__41932 = G__41995;
i__41933 = G__41996;
continue;
} else {
var role = cljs.core.first.call(null,seq__41930__$1);
var temp__6753__auto___41997__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___41997__$2)){
var spec_41998 = temp__6753__auto___41997__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_41998));
} else {
}

var G__41999 = cljs.core.next.call(null,seq__41930__$1);
var G__42000 = null;
var G__42001 = (0);
var G__42002 = (0);
seq__41930 = G__41999;
chunk__41931 = G__42000;
count__41932 = G__42001;
i__41933 = G__42002;
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

//# sourceMappingURL=repl.js.map?rel=1485671356201