/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Wed Nov 17 2021 08:27:45 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7491d4ed"],{"6414d":function(e,r,o){"use strict";o.r(r),o.d(r,"conf",(function(){return i})),o.d(r,"language",(function(){return t}));var i={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},t={defaultToken:"",ignoreCase:!0,tokenPostfix:".shell",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],builtins:["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"],symbols:/[=><!~?&|+\-*\/\^;\.,]+/,tokenizer:{root:[{include:"@whitespace"},[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@builtins":"type.identifier","@default":""}}],{include:"@strings"},{include:"@parameters"},{include:"@heredoc"},[/[{}\[\]()]/,"@brackets"],[/-+\w+/,"attribute.name"],[/@symbols/,"delimiter"],{include:"@numbers"},[/[,;]/,"delimiter"]],whitespace:[[/\s+/,"white"],[/(^#!.*$)/,"metatag"],[/(^#.*$)/,"comment"]],numbers:[[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"]],strings:[[/'/,"string","@stringBody"],[/"/,"string","@dblStringBody"]],stringBody:[[/'/,"string","@popall"],[/./,"string"]],dblStringBody:[[/"/,"string","@popall"],[/./,"string"]],heredoc:[[/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,["constants","white","string.heredoc.delimiter","string.heredoc","string.heredoc.delimiter"]]],parameters:[[/\$\d+/,"variable.predefined"],[/\$\w+/,"variable"],[/\$[*@#?\-$!0_]/,"variable"],[/\$'/,"variable","@parameterBodyQuote"],[/\$"/,"variable","@parameterBodyDoubleQuote"],[/\$\(/,"variable","@parameterBodyParen"],[/\$\{/,"variable","@parameterBodyCurlyBrace"]],parameterBodyQuote:[[/[^#:%*@\-!_']+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[']/,"variable","@pop"]],parameterBodyDoubleQuote:[[/[^#:%*@\-!_"]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/["]/,"variable","@pop"]],parameterBodyParen:[[/[^#:%*@\-!_)]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[)]/,"variable","@pop"]],parameterBodyCurlyBrace:[[/[^#:%*@\-!_}]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[}]/,"variable","@pop"]]}}}}]);