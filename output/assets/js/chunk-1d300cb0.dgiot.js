/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 03:23:22 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d300cb0"],{"0499":function(e,t,r){"use strict";(function(e){var n;r.d(t,"a",(function(){return i})),n=(()=>{var t={470:t=>{function r(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var r,n="",i=0,o=-1,a=0,u=0;u<=e.length;++u){if(u<e.length)r=e.charCodeAt(u);else{if(47===r)break;r=47}if(47===r){if(o===u-1||1===a);else if(o!==u-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",i=0):i=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),o=u,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=u,a=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,u):n=e.slice(o+1,u),i=u-o-1;o=u,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var i={resolve:function(){for(var t,i="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var u;a>=0?u=arguments[a]:(void 0===t&&(t=e.cwd()),u=t),r(u),0!==u.length&&(i=u+"/"+i,o=47===u.charCodeAt(0))}return i=n(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(r(e),0===e.length)return".";var t=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!t)).length||t||(e="."),e.length>0&&i&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];r(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=i.resolve(e))===(t=i.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var o=e.length,a=o-n,u=1;u<t.length&&47===t.charCodeAt(u);++u);for(var s=t.length-u,c=a<s?a:s,h=-1,f=0;f<=c;++f){if(f===c){if(s>c){if(47===t.charCodeAt(u+f))return t.slice(u+f+1);if(0===f)return t.slice(u+f)}else a>c&&(47===e.charCodeAt(n+f)?h=f:0===f&&(h=0));break}var l=e.charCodeAt(n+f);if(l!==t.charCodeAt(u+f))break;47===l&&(h=f)}var g="";for(f=n+h+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===g.length?g+="..":g+="/..");return g.length>0?g+t.slice(u+h):(u+=h,47===t.charCodeAt(u)&&++u,t.slice(u))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,i=0,o=-1,a=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var u=t.length-1,s=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){i=n+1;break}}else-1===s&&(a=!1,s=n+1),u>=0&&(c===t.charCodeAt(u)?-1==--u&&(o=n):(u=-1,o=s))}return i===o?o=s:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){i=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,o=!0,a=0,u=e.length-1;u>=0;--u){var s=e.charCodeAt(u);if(47!==s)-1===i&&(o=!1,i=u+1),46===s?-1===t?t=u:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){n=u+1;break}}return-1===t||-1===i||0===a||1===a&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+"/"+n:n}(0,e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,i=e.charCodeAt(0),o=47===i;o?(t.root="/",n=1):n=0;for(var a=-1,u=0,s=-1,c=!0,h=e.length-1,f=0;h>=n;--h)if(47!==(i=e.charCodeAt(h)))-1===s&&(c=!1,s=h+1),46===i?-1===a?a=h:1!==f&&(f=1):-1!==a&&(f=-1);else if(!c){u=h+1;break}return-1===a||-1===s||0===f||1===f&&a===s-1&&a===u+1?-1!==s&&(t.base=t.name=0===u&&o?e.slice(1,s):e.slice(u,s)):(0===u&&o?(t.name=e.slice(1,a),t.base=e.slice(1,s)):(t.name=e.slice(u,a),t.base=e.slice(u,s)),t.ext=e.slice(a,s)),u>0?t.dir=e.slice(0,u-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,t.exports=i},447:(t,r,n)=>{var i;if(n.r(r),n.d(r,{URI:()=>p,Utils:()=>A}),"object"==typeof e)i="win32"===e.platform;else if("object"==typeof navigator){var o=navigator.userAgent;i=o.indexOf("Windows")>=0}var a,u,s=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=/^\w[\w\d+.-]*$/,h=/^\//,f=/^\/\//,l="",g="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(e,t,r,n,i,o){void 0===o&&(o=!1),"object"==typeof e?(this.scheme=e.scheme||l,this.authority=e.authority||l,this.path=e.path||l,this.query=e.query||l,this.fragment=e.fragment||l):(this.scheme=function(e,t){return e||t?e:"file"}(e,o),this.authority=t||l,this.path=function(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==g&&(t=g+t):t=g}return t}(this.scheme,r||l),this.query=n||l,this.fragment=i||l,function(e,t){if(!e.scheme&&t)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'+e.authority+'", path: "'+e.path+'", query: "'+e.query+'", fragment: "'+e.fragment+'"}');if(e.scheme&&!c.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path)if(e.authority){if(!h.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(f.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,o))}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"function"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return _(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(e){if(!e)return this;var t=e.scheme,r=e.authority,n=e.path,i=e.query,o=e.fragment;return void 0===t?t=this.scheme:null===t&&(t=l),void 0===r?r=this.authority:null===r&&(r=l),void 0===n?n=this.path:null===n&&(n=l),void 0===i?i=this.query:null===i&&(i=l),void 0===o?o=this.fragment:null===o&&(o=l),t===this.scheme&&r===this.authority&&n===this.path&&i===this.query&&o===this.fragment?this:new v(t,r,n,i,o)},e.parse=function(e,t){void 0===t&&(t=!1);var r=d.exec(e);return r?new v(r[2]||l,P(r[4]||l),P(r[5]||l),P(r[7]||l),P(r[9]||l),t):new v(l,l,l,l,l)},e.file=function(e){var t=l;if(i&&(e=e.replace(/\\/g,g)),e[0]===g&&e[1]===g){var r=e.indexOf(g,2);-1===r?(t=e.substring(2),e=g):(t=e.substring(2,r),e=e.substring(r)||g)}return new v("file",t,e,l,l)},e.from=function(e){return new v(e.scheme,e.authority,e.path,e.query,e.fragment)},e.prototype.toString=function(e){return void 0===e&&(e=!1),C(this,e)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var r=new v(t);return r._formatted=t.external,r._fsPath=t._sep===m?t.fsPath:null,r}return t},e}(),m=i?1:void 0,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._formatted=null,t._fsPath=null,t}return s(t,e),Object.defineProperty(t.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=_(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),t.prototype.toString=function(e){return void 0===e&&(e=!1),e?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)},t.prototype.toJSON=function(){var e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e},t}(p),y=((u={})[58]="%3A",u[47]="%2F",u[63]="%3F",u[35]="%23",u[91]="%5B",u[93]="%5D",u[64]="%40",u[33]="%21",u[36]="%24",u[38]="%26",u[39]="%27",u[40]="%28",u[41]="%29",u[42]="%2A",u[43]="%2B",u[44]="%2C",u[59]="%3B",u[61]="%3D",u[32]="%20",u);function w(e,t){for(var r=void 0,n=-1,i=0;i<e.length;i++){var o=e.charCodeAt(i);if(o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||45===o||46===o||95===o||126===o||t&&47===o)-1!==n&&(r+=encodeURIComponent(e.substring(n,i)),n=-1),void 0!==r&&(r+=e.charAt(i));else{void 0===r&&(r=e.substr(0,i));var a=y[o];void 0!==a?(-1!==n&&(r+=encodeURIComponent(e.substring(n,i)),n=-1),r+=a):-1===n&&(n=i)}}return-1!==n&&(r+=encodeURIComponent(e.substring(n))),void 0!==r?r:e}function b(e){for(var t=void 0,r=0;r<e.length;r++){var n=e.charCodeAt(r);35===n||63===n?(void 0===t&&(t=e.substr(0,r)),t+=y[n]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function _(e,t){var r;return r=e.authority&&e.path.length>1&&"file"===e.scheme?"//"+e.authority+e.path:47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?t?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,i&&(r=r.replace(/\//g,"\\")),r}function C(e,t){var r=t?b:w,n="",i=e.scheme,o=e.authority,a=e.path,u=e.query,s=e.fragment;if(i&&(n+=i,n+=":"),(o||"file"===i)&&(n+=g,n+=g),o){var c=o.indexOf("@");if(-1!==c){var h=o.substr(0,c);o=o.substr(c+1),-1===(c=h.indexOf(":"))?n+=r(h,!1):(n+=r(h.substr(0,c),!1),n+=":",n+=r(h.substr(c+1),!1)),n+="@"}-1===(c=(o=o.toLowerCase()).indexOf(":"))?n+=r(o,!1):(n+=r(o.substr(0,c),!1),n+=o.substr(c))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2))(f=a.charCodeAt(1))>=65&&f<=90&&(a="/"+String.fromCharCode(f+32)+":"+a.substr(3));else if(a.length>=2&&58===a.charCodeAt(1)){var f;(f=a.charCodeAt(0))>=65&&f<=90&&(a=String.fromCharCode(f+32)+":"+a.substr(2))}n+=r(a,!0)}return u&&(n+="?",n+=r(u,!1)),s&&(n+="#",n+=t?s:w(s,!1)),n}function k(e){try{return decodeURIComponent(e)}catch(r){return e.length>3?e.substr(0,3)+k(e.substr(3)):e}}var x=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function P(e){return e.match(x)?e.replace(x,(function(e){return k(e)})):e}var A,S=n(470),R=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n},I=S.posix||S;!function(e){e.joinPath=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.with({path:I.join.apply(I,R([e.path],t))})},e.resolvePath=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=e.path||"/";return e.with({path:I.resolve.apply(I,R([n],t))})},e.dirname=function(e){var t=I.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)?e:e.with({path:t})},e.basename=function(e){return I.basename(e.path)},e.extname=function(e){return I.extname(e.path)}}(A||(A={}))}},r={};function n(e){if(r[e])return r[e].exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(447)})();const{URI:i,Utils:o}=n}).call(this,r("0418"))},bd89:function(e,t,r){"use strict";function n(e,t){var r;return r=0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var n=r[0];return"undefined"!==typeof t[n]?t[n]:e})),r}function i(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return n(t,r)}function o(e){return i}r.d(t,"a",(function(){return o}))},dbd67:function(e,t,r){"use strict";r.r(t),r.d(t,"setupMode1",(function(){return T})),r.d(t,"setupMode",(function(){return O}));var n=r("ca30"),i=12e4,o=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>i&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=n["editor"].createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(r)})).then((function(t){return e}))},e}(),a=r("65ab");function u(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function s(e){if(e)return{start:u(e.getStartPosition()),end:u(e.getEndPosition())}}function c(e){if(e)return new n["Range"](e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function h(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function f(e){var t=n["languages"].CompletionItemKind;switch(e){case a["a"].Text:return t.Text;case a["a"].Method:return t.Method;case a["a"].Function:return t.Function;case a["a"].Constructor:return t.Constructor;case a["a"].Field:return t.Field;case a["a"].Variable:return t.Variable;case a["a"].Class:return t.Class;case a["a"].Interface:return t.Interface;case a["a"].Module:return t.Module;case a["a"].Property:return t.Property;case a["a"].Unit:return t.Unit;case a["a"].Value:return t.Value;case a["a"].Enum:return t.Enum;case a["a"].Keyword:return t.Keyword;case a["a"].Snippet:return t.Snippet;case a["a"].Color:return t.Color;case a["a"].File:return t.File;case a["a"].Reference:return t.Reference}return t.Property}function l(e){if(e)return{range:c(e.range),text:e.newText}}function g(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var d=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,r,i){var o=e.uri;return this._worker(o).then((function(e){return e.doComplete(o.toString(),u(t))})).then((function(r){if(r){var i=e.getWordUntilPosition(t),o=new n["Range"](t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),u=r.items.map((function(e){var t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,command:g(e.command),detail:e.detail,range:o,kind:f(e.kind)};return e.textEdit&&(h(e.textEdit)?t.range={insert:c(e.textEdit.insert),replace:c(e.textEdit.replace)}:t.range=c(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(l)),e.insertTextFormat===a["d"].Snippet&&(t.insertTextRules=n["languages"].CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:r.isIncomplete,suggestions:u}}}))},e}();function p(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function m(e){return"string"===typeof e?{value:e}:p(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function v(e){if(e)return Array.isArray(e)?e.map(m):[m(e)]}var y=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,r){var n=e.uri;return this._worker(n).then((function(e){return e.doHover(n.toString(),u(t))})).then((function(e){if(e)return{range:c(e.range),contents:v(e.contents)}}))},e}();function w(e){var t=n["languages"].DocumentHighlightKind;switch(e){case a["b"].Read:return t.Read;case a["b"].Write:return t.Write;case a["b"].Text:return t.Text}return t.Text}var b=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,r){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentHighlights(n.toString(),u(t))})).then((function(e){if(e)return e.map((function(e){return{range:c(e.range),kind:w(e.kind)}}))}))},e}();function _(e){var t=n["languages"].SymbolKind;switch(e){case a["e"].File:return t.Array;case a["e"].Module:return t.Module;case a["e"].Namespace:return t.Namespace;case a["e"].Package:return t.Package;case a["e"].Class:return t.Class;case a["e"].Method:return t.Method;case a["e"].Property:return t.Property;case a["e"].Field:return t.Field;case a["e"].Constructor:return t.Constructor;case a["e"].Enum:return t.Enum;case a["e"].Interface:return t.Interface;case a["e"].Function:return t.Function;case a["e"].Variable:return t.Variable;case a["e"].Constant:return t.Constant;case a["e"].String:return t.String;case a["e"].Number:return t.Number;case a["e"].Boolean:return t.Boolean;case a["e"].Array:return t.Array}return t.Function}var C=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentSymbols(r.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:_(e.kind),tags:[],range:c(e.location.range),selectionRange:c(e.location.range)}}))}))},e}(),k=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentLinks(r.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:c(e.range),url:e.target}}))}}))},e}();function x(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var P=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,r){var n=e.uri;return this._worker(n).then((function(e){return e.format(n.toString(),null,x(t)).then((function(e){if(e&&0!==e.length)return e.map(l)}))}))},e}(),A=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,r,n){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),s(t),x(r)).then((function(e){if(e&&0!==e.length)return e.map(l)}))}))},e}(),S=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,t,r,n){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),u(t),r)})).then((function(e){return R(e)}))},e}();function R(e){if(e&&e.changes){var t=[];for(var r in e.changes)for(var i=n["Uri"].parse(r),o=0,a=e.changes[r];o<a.length;o++){var u=a[o];t.push({resource:i,edit:{range:c(u.range),text:u.newText}})}return{edits:t}}}var I=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,r){var n=e.uri;return this._worker(n).then((function(e){return e.getFoldingRanges(n.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=E(e.kind)),t}))}))},e}();function E(e){switch(e){case a["c"].Comment:return n["languages"].FoldingRangeKind.Comment;case a["c"].Imports:return n["languages"].FoldingRangeKind.Imports;case a["c"].Region:return n["languages"].FoldingRangeKind.Region}}var F=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,r){var n=e.uri;return this._worker(n).then((function(e){return e.getSelectionRanges(n.toString(),t.map(u))})).then((function(e){if(e)return e.map((function(e){var t=[];while(e)t.push({range:c(e.range)}),e=e.parent;return t}))}))},e}();function T(e){var t=new o(e),r=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.getLanguageServiceWorker.apply(t,e)},i=e.languageId;n["languages"].registerCompletionItemProvider(i,new d(r)),n["languages"].registerHoverProvider(i,new y(r)),n["languages"].registerDocumentHighlightProvider(i,new b(r)),n["languages"].registerLinkProvider(i,new k(r)),n["languages"].registerFoldingRangeProvider(i,new I(r)),n["languages"].registerDocumentSymbolProvider(i,new C(r)),n["languages"].registerSelectionRangeProvider(i,new F(r)),n["languages"].registerRenameProvider(i,new S(r)),"html"===i&&(n["languages"].registerDocumentFormattingEditProvider(i,new P(r)),n["languages"].registerDocumentRangeFormattingEditProvider(i,new A(r)))}function O(e){var t=[],r=[],i=new o(e);t.push(i);var a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};function u(){var t=e.languageId,i=e.modeConfiguration;U(r),i.completionItems&&r.push(n["languages"].registerCompletionItemProvider(t,new d(a))),i.hovers&&r.push(n["languages"].registerHoverProvider(t,new y(a))),i.documentHighlights&&r.push(n["languages"].registerDocumentHighlightProvider(t,new b(a))),i.links&&r.push(n["languages"].registerLinkProvider(t,new k(a))),i.documentSymbols&&r.push(n["languages"].registerDocumentSymbolProvider(t,new C(a))),i.rename&&r.push(n["languages"].registerRenameProvider(t,new S(a))),i.foldingRanges&&r.push(n["languages"].registerFoldingRangeProvider(t,new I(a))),i.selectionRanges&&r.push(n["languages"].registerSelectionRangeProvider(t,new F(a))),i.documentFormattingEdits&&r.push(n["languages"].registerDocumentFormattingEditProvider(t,new P(a))),i.documentRangeFormattingEdits&&r.push(n["languages"].registerDocumentRangeFormattingEditProvider(t,new A(a)))}return u(),t.push(D(r)),D(t)}function D(e){return{dispose:function(){return U(e)}}}function U(e){while(e.length)e.pop().dispose()}}}]);