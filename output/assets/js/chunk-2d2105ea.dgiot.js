/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Wed Nov 17 2021 07:57:26 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2105ea"],{b831:function(e,o,t){"use strict";t.r(o),t.d(o,"conf",(function(){return n})),t.d(o,"language",(function(){return s}));var n={comments:{lineComment:"#"},brackets:[["[","]"],["<",">"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"<",close:">"},{open:"(",close:")"}],surroundingPairs:[{open:"[",close:"]"},{open:"<",close:">"},{open:"(",close:")"}]},s={defaultToken:"",tokenPostfix:".pla",brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"<",close:">",token:"delimiter.angle"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:[".i",".o",".mv",".ilb",".ob",".label",".type",".phase",".pair",".symbolic",".symbolic-output",".kiss",".p",".e",".end"],comment:/#.*$/,identifier:/[a-zA-Z]+[a-zA-Z0-9_\-]*/,plaContent:/[01\-~\|]+/,tokenizer:{root:[{include:"@whitespace"},[/@comment/,"comment"],[/\.([a-zA-Z_\-]+)/,{cases:{"@eos":{token:"keyword.$1"},"@keywords":{cases:{".type":{token:"keyword.$1",next:"@type"},"@default":{token:"keyword.$1",next:"@keywordArg"}}},"@default":{token:"keyword.$1"}}}],[/@identifier/,"identifier"],[/@plaContent/,"string"]],whitespace:[[/[ \t\r\n]+/,""]],type:[{include:"@whitespace"},[/\w+/,{token:"type",next:"@pop"}]],keywordArg:[[/[ \t\r\n]+/,{cases:{"@eos":{token:"",next:"@pop"},"@default":""}}],[/@comment/,"comment","@pop"],[/[<>()\[\]]/,{cases:{"@eos":{token:"@brackets",next:"@pop"},"@default":"@brackets"}}],[/\-?\d+/,{cases:{"@eos":{token:"number",next:"@pop"},"@default":"number"}}],[/@identifier/,{cases:{"@eos":{token:"identifier",next:"@pop"},"@default":"identifier"}}],[/[;=]/,{cases:{"@eos":{token:"delimiter",next:"@pop"},"@default":"delimiter"}}]]}}}}]);