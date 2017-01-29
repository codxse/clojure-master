// Compiled by ClojureScript 1.9.456 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args43915 = [];
var len__28342__auto___43918 = arguments.length;
var i__28343__auto___43919 = (0);
while(true){
if((i__28343__auto___43919 < len__28342__auto___43918)){
args43915.push((arguments[i__28343__auto___43919]));

var G__43920 = (i__28343__auto___43919 + (1));
i__28343__auto___43919 = G__43920;
continue;
} else {
}
break;
}

var G__43917 = args43915.length;
switch (G__43917) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43915.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28349__auto__ = [];
var len__28342__auto___43923 = arguments.length;
var i__28343__auto___43924 = (0);
while(true){
if((i__28343__auto___43924 < len__28342__auto___43923)){
args__28349__auto__.push((arguments[i__28343__auto___43924]));

var G__43925 = (i__28343__auto___43924 + (1));
i__28343__auto___43924 = G__43925;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43922){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43922));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28349__auto__ = [];
var len__28342__auto___43927 = arguments.length;
var i__28343__auto___43928 = (0);
while(true){
if((i__28343__auto___43928 < len__28342__auto___43927)){
args__28349__auto__.push((arguments[i__28343__auto___43928]));

var G__43929 = (i__28343__auto___43928 + (1));
i__28343__auto___43928 = G__43929;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43926){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43926));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43930 = cljs.core._EQ_;
var expr__43931 = (function (){var or__27121__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e43934){if((e43934 instanceof Error)){
var e = e43934;
return false;
} else {
throw e43934;

}
}})();
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43930.call(null,"true",expr__43931))){
return true;
} else {
if(cljs.core.truth_(pred__43930.call(null,"false",expr__43931))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43931)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e43936){if((e43936 instanceof Error)){
var e = e43936;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e43936;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43937){
var map__43940 = p__43937;
var map__43940__$1 = ((((!((map__43940 == null)))?((((map__43940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43940):map__43940);
var message = cljs.core.get.call(null,map__43940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43940__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27121__auto__)){
return or__27121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27109__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36543__auto___44102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___44102,ch){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___44102,ch){
return (function (state_44071){
var state_val_44072 = (state_44071[(1)]);
if((state_val_44072 === (7))){
var inst_44067 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44073_44103 = state_44071__$1;
(statearr_44073_44103[(2)] = inst_44067);

(statearr_44073_44103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (1))){
var state_44071__$1 = state_44071;
var statearr_44074_44104 = state_44071__$1;
(statearr_44074_44104[(2)] = null);

(statearr_44074_44104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (4))){
var inst_44024 = (state_44071[(7)]);
var inst_44024__$1 = (state_44071[(2)]);
var state_44071__$1 = (function (){var statearr_44075 = state_44071;
(statearr_44075[(7)] = inst_44024__$1);

return statearr_44075;
})();
if(cljs.core.truth_(inst_44024__$1)){
var statearr_44076_44105 = state_44071__$1;
(statearr_44076_44105[(1)] = (5));

} else {
var statearr_44077_44106 = state_44071__$1;
(statearr_44077_44106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (15))){
var inst_44031 = (state_44071[(8)]);
var inst_44046 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44031);
var inst_44047 = cljs.core.first.call(null,inst_44046);
var inst_44048 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44047);
var inst_44049 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44048)].join('');
var inst_44050 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44049);
var state_44071__$1 = state_44071;
var statearr_44078_44107 = state_44071__$1;
(statearr_44078_44107[(2)] = inst_44050);

(statearr_44078_44107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (13))){
var inst_44055 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44079_44108 = state_44071__$1;
(statearr_44079_44108[(2)] = inst_44055);

(statearr_44079_44108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (6))){
var state_44071__$1 = state_44071;
var statearr_44080_44109 = state_44071__$1;
(statearr_44080_44109[(2)] = null);

(statearr_44080_44109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (17))){
var inst_44053 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44081_44110 = state_44071__$1;
(statearr_44081_44110[(2)] = inst_44053);

(statearr_44081_44110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (3))){
var inst_44069 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44071__$1,inst_44069);
} else {
if((state_val_44072 === (12))){
var inst_44030 = (state_44071[(9)]);
var inst_44044 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44030,opts);
var state_44071__$1 = state_44071;
if(cljs.core.truth_(inst_44044)){
var statearr_44082_44111 = state_44071__$1;
(statearr_44082_44111[(1)] = (15));

} else {
var statearr_44083_44112 = state_44071__$1;
(statearr_44083_44112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (2))){
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44071__$1,(4),ch);
} else {
if((state_val_44072 === (11))){
var inst_44031 = (state_44071[(8)]);
var inst_44036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44037 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44031);
var inst_44038 = cljs.core.async.timeout.call(null,(1000));
var inst_44039 = [inst_44037,inst_44038];
var inst_44040 = (new cljs.core.PersistentVector(null,2,(5),inst_44036,inst_44039,null));
var state_44071__$1 = state_44071;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44071__$1,(14),inst_44040);
} else {
if((state_val_44072 === (9))){
var inst_44031 = (state_44071[(8)]);
var inst_44057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44058 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44031);
var inst_44059 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44058);
var inst_44060 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44059)].join('');
var inst_44061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44060);
var state_44071__$1 = (function (){var statearr_44084 = state_44071;
(statearr_44084[(10)] = inst_44057);

return statearr_44084;
})();
var statearr_44085_44113 = state_44071__$1;
(statearr_44085_44113[(2)] = inst_44061);

(statearr_44085_44113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (5))){
var inst_44024 = (state_44071[(7)]);
var inst_44026 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44027 = (new cljs.core.PersistentArrayMap(null,2,inst_44026,null));
var inst_44028 = (new cljs.core.PersistentHashSet(null,inst_44027,null));
var inst_44029 = figwheel.client.focus_msgs.call(null,inst_44028,inst_44024);
var inst_44030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44029);
var inst_44031 = cljs.core.first.call(null,inst_44029);
var inst_44032 = figwheel.client.autoload_QMARK_.call(null);
var state_44071__$1 = (function (){var statearr_44086 = state_44071;
(statearr_44086[(8)] = inst_44031);

(statearr_44086[(9)] = inst_44030);

return statearr_44086;
})();
if(cljs.core.truth_(inst_44032)){
var statearr_44087_44114 = state_44071__$1;
(statearr_44087_44114[(1)] = (8));

} else {
var statearr_44088_44115 = state_44071__$1;
(statearr_44088_44115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (14))){
var inst_44042 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44089_44116 = state_44071__$1;
(statearr_44089_44116[(2)] = inst_44042);

(statearr_44089_44116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (16))){
var state_44071__$1 = state_44071;
var statearr_44090_44117 = state_44071__$1;
(statearr_44090_44117[(2)] = null);

(statearr_44090_44117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (10))){
var inst_44063 = (state_44071[(2)]);
var state_44071__$1 = (function (){var statearr_44091 = state_44071;
(statearr_44091[(11)] = inst_44063);

return statearr_44091;
})();
var statearr_44092_44118 = state_44071__$1;
(statearr_44092_44118[(2)] = null);

(statearr_44092_44118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (8))){
var inst_44030 = (state_44071[(9)]);
var inst_44034 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44030,opts);
var state_44071__$1 = state_44071;
if(cljs.core.truth_(inst_44034)){
var statearr_44093_44119 = state_44071__$1;
(statearr_44093_44119[(1)] = (11));

} else {
var statearr_44094_44120 = state_44071__$1;
(statearr_44094_44120[(1)] = (12));

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
});})(c__36543__auto___44102,ch))
;
return ((function (switch__36429__auto__,c__36543__auto___44102,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____0 = (function (){
var statearr_44098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44098[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__);

(statearr_44098[(1)] = (1));

return statearr_44098;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____1 = (function (state_44071){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_44071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e44099){if((e44099 instanceof Object)){
var ex__36433__auto__ = e44099;
var statearr_44100_44121 = state_44071;
(statearr_44100_44121[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44122 = state_44071;
state_44071 = G__44122;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__ = function(state_44071){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____1.call(this,state_44071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36430__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___44102,ch))
})();
var state__36545__auto__ = (function (){var statearr_44101 = f__36544__auto__.call(null);
(statearr_44101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___44102);

return statearr_44101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___44102,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44123_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44123_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44126 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44126){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44125){if((e44125 instanceof Error)){
var e = e44125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44126], null));
} else {
var e = e44125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44126))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44127){
var map__44136 = p__44127;
var map__44136__$1 = ((((!((map__44136 == null)))?((((map__44136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44136):map__44136);
var opts = map__44136__$1;
var build_id = cljs.core.get.call(null,map__44136__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44136,map__44136__$1,opts,build_id){
return (function (p__44138){
var vec__44139 = p__44138;
var seq__44140 = cljs.core.seq.call(null,vec__44139);
var first__44141 = cljs.core.first.call(null,seq__44140);
var seq__44140__$1 = cljs.core.next.call(null,seq__44140);
var map__44142 = first__44141;
var map__44142__$1 = ((((!((map__44142 == null)))?((((map__44142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44142):map__44142);
var msg = map__44142__$1;
var msg_name = cljs.core.get.call(null,map__44142__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44140__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44139,seq__44140,first__44141,seq__44140__$1,map__44142,map__44142__$1,msg,msg_name,_,map__44136,map__44136__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44139,seq__44140,first__44141,seq__44140__$1,map__44142,map__44142__$1,msg,msg_name,_,map__44136,map__44136__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44136,map__44136__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44150){
var vec__44151 = p__44150;
var seq__44152 = cljs.core.seq.call(null,vec__44151);
var first__44153 = cljs.core.first.call(null,seq__44152);
var seq__44152__$1 = cljs.core.next.call(null,seq__44152);
var map__44154 = first__44153;
var map__44154__$1 = ((((!((map__44154 == null)))?((((map__44154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44154):map__44154);
var msg = map__44154__$1;
var msg_name = cljs.core.get.call(null,map__44154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44152__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44156){
var map__44168 = p__44156;
var map__44168__$1 = ((((!((map__44168 == null)))?((((map__44168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44168):map__44168);
var on_compile_warning = cljs.core.get.call(null,map__44168__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44168__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44168,map__44168__$1,on_compile_warning,on_compile_fail){
return (function (p__44170){
var vec__44171 = p__44170;
var seq__44172 = cljs.core.seq.call(null,vec__44171);
var first__44173 = cljs.core.first.call(null,seq__44172);
var seq__44172__$1 = cljs.core.next.call(null,seq__44172);
var map__44174 = first__44173;
var map__44174__$1 = ((((!((map__44174 == null)))?((((map__44174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44174):map__44174);
var msg = map__44174__$1;
var msg_name = cljs.core.get.call(null,map__44174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44172__$1;
var pred__44176 = cljs.core._EQ_;
var expr__44177 = msg_name;
if(cljs.core.truth_(pred__44176.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44177))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44176.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44177))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44168,map__44168__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__,msg_hist,msg_names,msg){
return (function (state_44405){
var state_val_44406 = (state_44405[(1)]);
if((state_val_44406 === (7))){
var inst_44325 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44325)){
var statearr_44407_44457 = state_44405__$1;
(statearr_44407_44457[(1)] = (8));

} else {
var statearr_44408_44458 = state_44405__$1;
(statearr_44408_44458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (20))){
var inst_44399 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44409_44459 = state_44405__$1;
(statearr_44409_44459[(2)] = inst_44399);

(statearr_44409_44459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (27))){
var inst_44395 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44410_44460 = state_44405__$1;
(statearr_44410_44460[(2)] = inst_44395);

(statearr_44410_44460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (1))){
var inst_44318 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44318)){
var statearr_44411_44461 = state_44405__$1;
(statearr_44411_44461[(1)] = (2));

} else {
var statearr_44412_44462 = state_44405__$1;
(statearr_44412_44462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (24))){
var inst_44397 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44413_44463 = state_44405__$1;
(statearr_44413_44463[(2)] = inst_44397);

(statearr_44413_44463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (4))){
var inst_44403 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44405__$1,inst_44403);
} else {
if((state_val_44406 === (15))){
var inst_44401 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44414_44464 = state_44405__$1;
(statearr_44414_44464[(2)] = inst_44401);

(statearr_44414_44464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (21))){
var inst_44354 = (state_44405[(2)]);
var inst_44355 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44355);
var state_44405__$1 = (function (){var statearr_44415 = state_44405;
(statearr_44415[(7)] = inst_44354);

return statearr_44415;
})();
var statearr_44416_44465 = state_44405__$1;
(statearr_44416_44465[(2)] = inst_44356);

(statearr_44416_44465[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (31))){
var inst_44384 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44384)){
var statearr_44417_44466 = state_44405__$1;
(statearr_44417_44466[(1)] = (34));

} else {
var statearr_44418_44467 = state_44405__$1;
(statearr_44418_44467[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (32))){
var inst_44393 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44419_44468 = state_44405__$1;
(statearr_44419_44468[(2)] = inst_44393);

(statearr_44419_44468[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (33))){
var inst_44380 = (state_44405[(2)]);
var inst_44381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44382 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44381);
var state_44405__$1 = (function (){var statearr_44420 = state_44405;
(statearr_44420[(8)] = inst_44380);

return statearr_44420;
})();
var statearr_44421_44469 = state_44405__$1;
(statearr_44421_44469[(2)] = inst_44382);

(statearr_44421_44469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (13))){
var inst_44339 = figwheel.client.heads_up.clear.call(null);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(16),inst_44339);
} else {
if((state_val_44406 === (22))){
var inst_44360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44361 = figwheel.client.heads_up.append_warning_message.call(null,inst_44360);
var state_44405__$1 = state_44405;
var statearr_44422_44470 = state_44405__$1;
(statearr_44422_44470[(2)] = inst_44361);

(statearr_44422_44470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (36))){
var inst_44391 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44423_44471 = state_44405__$1;
(statearr_44423_44471[(2)] = inst_44391);

(statearr_44423_44471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (29))){
var inst_44371 = (state_44405[(2)]);
var inst_44372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44373 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44372);
var state_44405__$1 = (function (){var statearr_44424 = state_44405;
(statearr_44424[(9)] = inst_44371);

return statearr_44424;
})();
var statearr_44425_44472 = state_44405__$1;
(statearr_44425_44472[(2)] = inst_44373);

(statearr_44425_44472[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (6))){
var inst_44320 = (state_44405[(10)]);
var state_44405__$1 = state_44405;
var statearr_44426_44473 = state_44405__$1;
(statearr_44426_44473[(2)] = inst_44320);

(statearr_44426_44473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (28))){
var inst_44367 = (state_44405[(2)]);
var inst_44368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44369 = figwheel.client.heads_up.display_warning.call(null,inst_44368);
var state_44405__$1 = (function (){var statearr_44427 = state_44405;
(statearr_44427[(11)] = inst_44367);

return statearr_44427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(29),inst_44369);
} else {
if((state_val_44406 === (25))){
var inst_44365 = figwheel.client.heads_up.clear.call(null);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(28),inst_44365);
} else {
if((state_val_44406 === (34))){
var inst_44386 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(37),inst_44386);
} else {
if((state_val_44406 === (17))){
var inst_44345 = (state_44405[(2)]);
var inst_44346 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44347 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44346);
var state_44405__$1 = (function (){var statearr_44428 = state_44405;
(statearr_44428[(12)] = inst_44345);

return statearr_44428;
})();
var statearr_44429_44474 = state_44405__$1;
(statearr_44429_44474[(2)] = inst_44347);

(statearr_44429_44474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (3))){
var inst_44337 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44337)){
var statearr_44430_44475 = state_44405__$1;
(statearr_44430_44475[(1)] = (13));

} else {
var statearr_44431_44476 = state_44405__$1;
(statearr_44431_44476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (12))){
var inst_44333 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44432_44477 = state_44405__$1;
(statearr_44432_44477[(2)] = inst_44333);

(statearr_44432_44477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (2))){
var inst_44320 = (state_44405[(10)]);
var inst_44320__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44405__$1 = (function (){var statearr_44433 = state_44405;
(statearr_44433[(10)] = inst_44320__$1);

return statearr_44433;
})();
if(cljs.core.truth_(inst_44320__$1)){
var statearr_44434_44478 = state_44405__$1;
(statearr_44434_44478[(1)] = (5));

} else {
var statearr_44435_44479 = state_44405__$1;
(statearr_44435_44479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (23))){
var inst_44363 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44363)){
var statearr_44436_44480 = state_44405__$1;
(statearr_44436_44480[(1)] = (25));

} else {
var statearr_44437_44481 = state_44405__$1;
(statearr_44437_44481[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (35))){
var state_44405__$1 = state_44405;
var statearr_44438_44482 = state_44405__$1;
(statearr_44438_44482[(2)] = null);

(statearr_44438_44482[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (19))){
var inst_44358 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44358)){
var statearr_44439_44483 = state_44405__$1;
(statearr_44439_44483[(1)] = (22));

} else {
var statearr_44440_44484 = state_44405__$1;
(statearr_44440_44484[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (11))){
var inst_44329 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44441_44485 = state_44405__$1;
(statearr_44441_44485[(2)] = inst_44329);

(statearr_44441_44485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (9))){
var inst_44331 = figwheel.client.heads_up.clear.call(null);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(12),inst_44331);
} else {
if((state_val_44406 === (5))){
var inst_44322 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44405__$1 = state_44405;
var statearr_44442_44486 = state_44405__$1;
(statearr_44442_44486[(2)] = inst_44322);

(statearr_44442_44486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (14))){
var inst_44349 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44349)){
var statearr_44443_44487 = state_44405__$1;
(statearr_44443_44487[(1)] = (18));

} else {
var statearr_44444_44488 = state_44405__$1;
(statearr_44444_44488[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (26))){
var inst_44375 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44405__$1 = state_44405;
if(cljs.core.truth_(inst_44375)){
var statearr_44445_44489 = state_44405__$1;
(statearr_44445_44489[(1)] = (30));

} else {
var statearr_44446_44490 = state_44405__$1;
(statearr_44446_44490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (16))){
var inst_44341 = (state_44405[(2)]);
var inst_44342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44343 = figwheel.client.heads_up.display_exception.call(null,inst_44342);
var state_44405__$1 = (function (){var statearr_44447 = state_44405;
(statearr_44447[(13)] = inst_44341);

return statearr_44447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(17),inst_44343);
} else {
if((state_val_44406 === (30))){
var inst_44377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44378 = figwheel.client.heads_up.display_warning.call(null,inst_44377);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(33),inst_44378);
} else {
if((state_val_44406 === (10))){
var inst_44335 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44448_44491 = state_44405__$1;
(statearr_44448_44491[(2)] = inst_44335);

(statearr_44448_44491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (18))){
var inst_44351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44352 = figwheel.client.heads_up.display_exception.call(null,inst_44351);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(21),inst_44352);
} else {
if((state_val_44406 === (37))){
var inst_44388 = (state_44405[(2)]);
var state_44405__$1 = state_44405;
var statearr_44449_44492 = state_44405__$1;
(statearr_44449_44492[(2)] = inst_44388);

(statearr_44449_44492[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44406 === (8))){
var inst_44327 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44405__$1 = state_44405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44405__$1,(11),inst_44327);
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
});})(c__36543__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36429__auto__,c__36543__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____0 = (function (){
var statearr_44453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44453[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__);

(statearr_44453[(1)] = (1));

return statearr_44453;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____1 = (function (state_44405){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_44405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e44454){if((e44454 instanceof Object)){
var ex__36433__auto__ = e44454;
var statearr_44455_44493 = state_44405;
(statearr_44455_44493[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44494 = state_44405;
state_44405 = G__44494;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__ = function(state_44405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____1.call(this,state_44405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__,msg_hist,msg_names,msg))
})();
var state__36545__auto__ = (function (){var statearr_44456 = f__36544__auto__.call(null);
(statearr_44456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_44456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__,msg_hist,msg_names,msg))
);

return c__36543__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36543__auto___44557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto___44557,ch){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto___44557,ch){
return (function (state_44540){
var state_val_44541 = (state_44540[(1)]);
if((state_val_44541 === (1))){
var state_44540__$1 = state_44540;
var statearr_44542_44558 = state_44540__$1;
(statearr_44542_44558[(2)] = null);

(statearr_44542_44558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44541 === (2))){
var state_44540__$1 = state_44540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44540__$1,(4),ch);
} else {
if((state_val_44541 === (3))){
var inst_44538 = (state_44540[(2)]);
var state_44540__$1 = state_44540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44540__$1,inst_44538);
} else {
if((state_val_44541 === (4))){
var inst_44528 = (state_44540[(7)]);
var inst_44528__$1 = (state_44540[(2)]);
var state_44540__$1 = (function (){var statearr_44543 = state_44540;
(statearr_44543[(7)] = inst_44528__$1);

return statearr_44543;
})();
if(cljs.core.truth_(inst_44528__$1)){
var statearr_44544_44559 = state_44540__$1;
(statearr_44544_44559[(1)] = (5));

} else {
var statearr_44545_44560 = state_44540__$1;
(statearr_44545_44560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44541 === (5))){
var inst_44528 = (state_44540[(7)]);
var inst_44530 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44528);
var state_44540__$1 = state_44540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44540__$1,(8),inst_44530);
} else {
if((state_val_44541 === (6))){
var state_44540__$1 = state_44540;
var statearr_44546_44561 = state_44540__$1;
(statearr_44546_44561[(2)] = null);

(statearr_44546_44561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44541 === (7))){
var inst_44536 = (state_44540[(2)]);
var state_44540__$1 = state_44540;
var statearr_44547_44562 = state_44540__$1;
(statearr_44547_44562[(2)] = inst_44536);

(statearr_44547_44562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44541 === (8))){
var inst_44532 = (state_44540[(2)]);
var state_44540__$1 = (function (){var statearr_44548 = state_44540;
(statearr_44548[(8)] = inst_44532);

return statearr_44548;
})();
var statearr_44549_44563 = state_44540__$1;
(statearr_44549_44563[(2)] = null);

(statearr_44549_44563[(1)] = (2));


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
});})(c__36543__auto___44557,ch))
;
return ((function (switch__36429__auto__,c__36543__auto___44557,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36430__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36430__auto____0 = (function (){
var statearr_44553 = [null,null,null,null,null,null,null,null,null];
(statearr_44553[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36430__auto__);

(statearr_44553[(1)] = (1));

return statearr_44553;
});
var figwheel$client$heads_up_plugin_$_state_machine__36430__auto____1 = (function (state_44540){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_44540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e44554){if((e44554 instanceof Object)){
var ex__36433__auto__ = e44554;
var statearr_44555_44564 = state_44540;
(statearr_44555_44564[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44565 = state_44540;
state_44540 = G__44565;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36430__auto__ = function(state_44540){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36430__auto____1.call(this,state_44540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36430__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36430__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto___44557,ch))
})();
var state__36545__auto__ = (function (){var statearr_44556 = f__36544__auto__.call(null);
(statearr_44556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto___44557);

return statearr_44556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto___44557,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__){
return (function (state_44586){
var state_val_44587 = (state_44586[(1)]);
if((state_val_44587 === (1))){
var inst_44581 = cljs.core.async.timeout.call(null,(3000));
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44586__$1,(2),inst_44581);
} else {
if((state_val_44587 === (2))){
var inst_44583 = (state_44586[(2)]);
var inst_44584 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44586__$1 = (function (){var statearr_44588 = state_44586;
(statearr_44588[(7)] = inst_44583);

return statearr_44588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44586__$1,inst_44584);
} else {
return null;
}
}
});})(c__36543__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____0 = (function (){
var statearr_44592 = [null,null,null,null,null,null,null,null];
(statearr_44592[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__);

(statearr_44592[(1)] = (1));

return statearr_44592;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____1 = (function (state_44586){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_44586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e44593){if((e44593 instanceof Object)){
var ex__36433__auto__ = e44593;
var statearr_44594_44596 = state_44586;
(statearr_44594_44596[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44597 = state_44586;
state_44586 = G__44597;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__ = function(state_44586){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____1.call(this,state_44586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36430__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__))
})();
var state__36545__auto__ = (function (){var statearr_44595 = f__36544__auto__.call(null);
(statearr_44595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_44595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__))
);

return c__36543__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36543__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__36544__auto__ = (function (){var switch__36429__auto__ = ((function (c__36543__auto__,figwheel_version,temp__6753__auto__){
return (function (state_44620){
var state_val_44621 = (state_44620[(1)]);
if((state_val_44621 === (1))){
var inst_44614 = cljs.core.async.timeout.call(null,(2000));
var state_44620__$1 = state_44620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44620__$1,(2),inst_44614);
} else {
if((state_val_44621 === (2))){
var inst_44616 = (state_44620[(2)]);
var inst_44617 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_44618 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44617);
var state_44620__$1 = (function (){var statearr_44622 = state_44620;
(statearr_44622[(7)] = inst_44616);

return statearr_44622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44620__$1,inst_44618);
} else {
return null;
}
}
});})(c__36543__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__36429__auto__,c__36543__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____0 = (function (){
var statearr_44626 = [null,null,null,null,null,null,null,null];
(statearr_44626[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__);

(statearr_44626[(1)] = (1));

return statearr_44626;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____1 = (function (state_44620){
while(true){
var ret_value__36431__auto__ = (function (){try{while(true){
var result__36432__auto__ = switch__36429__auto__.call(null,state_44620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36432__auto__;
}
break;
}
}catch (e44627){if((e44627 instanceof Object)){
var ex__36433__auto__ = e44627;
var statearr_44628_44630 = state_44620;
(statearr_44628_44630[(5)] = ex__36433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44631 = state_44620;
state_44620 = G__44631;
continue;
} else {
return ret_value__36431__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__ = function(state_44620){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____1.call(this,state_44620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36430__auto__;
})()
;})(switch__36429__auto__,c__36543__auto__,figwheel_version,temp__6753__auto__))
})();
var state__36545__auto__ = (function (){var statearr_44629 = f__36544__auto__.call(null);
(statearr_44629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36543__auto__);

return statearr_44629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36545__auto__);
});})(c__36543__auto__,figwheel_version,temp__6753__auto__))
);

return c__36543__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44632){
var map__44636 = p__44632;
var map__44636__$1 = ((((!((map__44636 == null)))?((((map__44636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44636):map__44636);
var file = cljs.core.get.call(null,map__44636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44638 = "";
var G__44638__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44638),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44638);
var G__44638__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44638__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44638__$1);
if(cljs.core.truth_((function (){var and__27109__auto__ = line;
if(cljs.core.truth_(and__27109__auto__)){
return column;
} else {
return and__27109__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44638__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44638__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44639){
var map__44646 = p__44639;
var map__44646__$1 = ((((!((map__44646 == null)))?((((map__44646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44646):map__44646);
var ed = map__44646__$1;
var formatted_exception = cljs.core.get.call(null,map__44646__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44646__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44646__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44648_44652 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44649_44653 = null;
var count__44650_44654 = (0);
var i__44651_44655 = (0);
while(true){
if((i__44651_44655 < count__44650_44654)){
var msg_44656 = cljs.core._nth.call(null,chunk__44649_44653,i__44651_44655);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44656);

var G__44657 = seq__44648_44652;
var G__44658 = chunk__44649_44653;
var G__44659 = count__44650_44654;
var G__44660 = (i__44651_44655 + (1));
seq__44648_44652 = G__44657;
chunk__44649_44653 = G__44658;
count__44650_44654 = G__44659;
i__44651_44655 = G__44660;
continue;
} else {
var temp__6753__auto___44661 = cljs.core.seq.call(null,seq__44648_44652);
if(temp__6753__auto___44661){
var seq__44648_44662__$1 = temp__6753__auto___44661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44648_44662__$1)){
var c__28032__auto___44663 = cljs.core.chunk_first.call(null,seq__44648_44662__$1);
var G__44664 = cljs.core.chunk_rest.call(null,seq__44648_44662__$1);
var G__44665 = c__28032__auto___44663;
var G__44666 = cljs.core.count.call(null,c__28032__auto___44663);
var G__44667 = (0);
seq__44648_44652 = G__44664;
chunk__44649_44653 = G__44665;
count__44650_44654 = G__44666;
i__44651_44655 = G__44667;
continue;
} else {
var msg_44668 = cljs.core.first.call(null,seq__44648_44662__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44668);

var G__44669 = cljs.core.next.call(null,seq__44648_44662__$1);
var G__44670 = null;
var G__44671 = (0);
var G__44672 = (0);
seq__44648_44652 = G__44669;
chunk__44649_44653 = G__44670;
count__44650_44654 = G__44671;
i__44651_44655 = G__44672;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44673){
var map__44676 = p__44673;
var map__44676__$1 = ((((!((map__44676 == null)))?((((map__44676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44676):map__44676);
var w = map__44676__$1;
var message = cljs.core.get.call(null,map__44676__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44688 = cljs.core.seq.call(null,plugins);
var chunk__44689 = null;
var count__44690 = (0);
var i__44691 = (0);
while(true){
if((i__44691 < count__44690)){
var vec__44692 = cljs.core._nth.call(null,chunk__44689,i__44691);
var k = cljs.core.nth.call(null,vec__44692,(0),null);
var plugin = cljs.core.nth.call(null,vec__44692,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44698 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44688,chunk__44689,count__44690,i__44691,pl_44698,vec__44692,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44698.call(null,msg_hist);
});})(seq__44688,chunk__44689,count__44690,i__44691,pl_44698,vec__44692,k,plugin))
);
} else {
}

var G__44699 = seq__44688;
var G__44700 = chunk__44689;
var G__44701 = count__44690;
var G__44702 = (i__44691 + (1));
seq__44688 = G__44699;
chunk__44689 = G__44700;
count__44690 = G__44701;
i__44691 = G__44702;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__44688);
if(temp__6753__auto__){
var seq__44688__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44688__$1)){
var c__28032__auto__ = cljs.core.chunk_first.call(null,seq__44688__$1);
var G__44703 = cljs.core.chunk_rest.call(null,seq__44688__$1);
var G__44704 = c__28032__auto__;
var G__44705 = cljs.core.count.call(null,c__28032__auto__);
var G__44706 = (0);
seq__44688 = G__44703;
chunk__44689 = G__44704;
count__44690 = G__44705;
i__44691 = G__44706;
continue;
} else {
var vec__44695 = cljs.core.first.call(null,seq__44688__$1);
var k = cljs.core.nth.call(null,vec__44695,(0),null);
var plugin = cljs.core.nth.call(null,vec__44695,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44707 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44688,chunk__44689,count__44690,i__44691,pl_44707,vec__44695,k,plugin,seq__44688__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44707.call(null,msg_hist);
});})(seq__44688,chunk__44689,count__44690,i__44691,pl_44707,vec__44695,k,plugin,seq__44688__$1,temp__6753__auto__))
);
} else {
}

var G__44708 = cljs.core.next.call(null,seq__44688__$1);
var G__44709 = null;
var G__44710 = (0);
var G__44711 = (0);
seq__44688 = G__44708;
chunk__44689 = G__44709;
count__44690 = G__44710;
i__44691 = G__44711;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args44712 = [];
var len__28342__auto___44719 = arguments.length;
var i__28343__auto___44720 = (0);
while(true){
if((i__28343__auto___44720 < len__28342__auto___44719)){
args44712.push((arguments[i__28343__auto___44720]));

var G__44721 = (i__28343__auto___44720 + (1));
i__28343__auto___44720 = G__44721;
continue;
} else {
}
break;
}

var G__44714 = args44712.length;
switch (G__44714) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44712.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44715_44723 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44716_44724 = null;
var count__44717_44725 = (0);
var i__44718_44726 = (0);
while(true){
if((i__44718_44726 < count__44717_44725)){
var msg_44727 = cljs.core._nth.call(null,chunk__44716_44724,i__44718_44726);
figwheel.client.socket.handle_incoming_message.call(null,msg_44727);

var G__44728 = seq__44715_44723;
var G__44729 = chunk__44716_44724;
var G__44730 = count__44717_44725;
var G__44731 = (i__44718_44726 + (1));
seq__44715_44723 = G__44728;
chunk__44716_44724 = G__44729;
count__44717_44725 = G__44730;
i__44718_44726 = G__44731;
continue;
} else {
var temp__6753__auto___44732 = cljs.core.seq.call(null,seq__44715_44723);
if(temp__6753__auto___44732){
var seq__44715_44733__$1 = temp__6753__auto___44732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44715_44733__$1)){
var c__28032__auto___44734 = cljs.core.chunk_first.call(null,seq__44715_44733__$1);
var G__44735 = cljs.core.chunk_rest.call(null,seq__44715_44733__$1);
var G__44736 = c__28032__auto___44734;
var G__44737 = cljs.core.count.call(null,c__28032__auto___44734);
var G__44738 = (0);
seq__44715_44723 = G__44735;
chunk__44716_44724 = G__44736;
count__44717_44725 = G__44737;
i__44718_44726 = G__44738;
continue;
} else {
var msg_44739 = cljs.core.first.call(null,seq__44715_44733__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44739);

var G__44740 = cljs.core.next.call(null,seq__44715_44733__$1);
var G__44741 = null;
var G__44742 = (0);
var G__44743 = (0);
seq__44715_44723 = G__44740;
chunk__44716_44724 = G__44741;
count__44717_44725 = G__44742;
i__44718_44726 = G__44743;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28349__auto__ = [];
var len__28342__auto___44748 = arguments.length;
var i__28343__auto___44749 = (0);
while(true){
if((i__28343__auto___44749 < len__28342__auto___44748)){
args__28349__auto__.push((arguments[i__28343__auto___44749]));

var G__44750 = (i__28343__auto___44749 + (1));
i__28343__auto___44749 = G__44750;
continue;
} else {
}
break;
}

var argseq__28350__auto__ = ((((0) < args__28349__auto__.length))?(new cljs.core.IndexedSeq(args__28349__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28350__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44745){
var map__44746 = p__44745;
var map__44746__$1 = ((((!((map__44746 == null)))?((((map__44746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44746):map__44746);
var opts = map__44746__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44744){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44744));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44752){if((e44752 instanceof Error)){
var e = e44752;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44752;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44756){
var map__44757 = p__44756;
var map__44757__$1 = ((((!((map__44757 == null)))?((((map__44757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44757):map__44757);
var msg_name = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485671359439