/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 03:34:28 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221bdb"],{cc49:function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",(function(){return R})),n.d(t,"setupJavaScript",(function(){return H})),n.d(t,"getJavaScriptWorker",(function(){return W})),n.d(t,"getTypeScriptWorker",(function(){return V}));var r,i=n("9494"),s=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r["throw"](e))}catch(t){s(t)}}function u(e){e.done?n(e.value):i(e.value).then(o,a)}u((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return s(this,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=i["editor"].createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(i["editor"].getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),u=n("65a6"),l={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.sharedmemory.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es2021.d.ts":!0,"lib.es2021.full.d.ts":!0,"lib.es2021.promise.d.ts":!0,"lib.es2021.string.d.ts":!0,"lib.es2021.weakref.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.esnext.weakref.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0,"lib.webworker.iterable.d.ts":!0},c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},p=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r["throw"](e))}catch(t){s(t)}}function u(e){e.done?n(e.value):i(e.value).then(o,a)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};function g(e,t,n){if(void 0===n&&(n=0),"string"===typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,o=e.next;s<o.length;s++){var a=o[s];r+=g(a,t,n)}return r}function h(e){return e?e.map((function(e){return e.text})).join(""):""}(function(e){e[e["None"]=0]="None",e[e["Block"]=1]="Block",e[e["Smart"]=2]="Smart"})(r||(r={}));var m,b=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),i=n.lineNumber,s=n.column,o=r.lineNumber,a=r.column;return{startLineNumber:i,startColumn:s,endLineNumber:o,endColumn:a}},e}(),v=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!l[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=i["editor"].getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?i["editor"].createModel(this._libFiles[e.path.slice(1)],"typescript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return p(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();(function(e){e[e["Warning"]=0]="Warning",e[e["Error"]=1]="Error",e[e["Suggestion"]=2]="Suggestion",e[e["Message"]=3]="Message"})(m||(m={}));var y=function(e){function t(t,n,r,s){var o=e.call(this,s)||this;o._libFiles=t,o._defaults=n,o._selector=r,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=function(){var t=o._defaults.getDiagnosticsOptions().onlyVisible;t?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout(n,500)})),a=e.onDidChangeAttached((function(){var t=o._defaults.getDiagnosticsOptions().onlyVisible;t&&(e.isAttachedToEditor()?n():i["editor"].setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(t)}},n()}},u=function(e){i["editor"].setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(i["editor"].onDidCreateModel((function(e){return a(e)}))),o._disposables.push(i["editor"].onWillDisposeModel(u)),o._disposables.push(i["editor"].onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=i["editor"].getModels();e<t.length;e++){var n=t[e];u(n)}}});var l=function(){for(var e=0,t=i["editor"].getModels();e<t.length;e++){var n=t[e];u(n),a(n)}};return o._disposables.push(o._defaults.onDidChange(l)),o._disposables.push(o._defaults.onDidExtraLibsChange(l)),i["editor"].getModels().forEach((function(e){return a(e)})),o}return c(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return p(this,void 0,void 0,(function(){var t,n,r,s,o,a,u,l,c,d=this;return f(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return t=p.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),s=r.noSyntaxValidation,o=r.noSemanticValidation,a=r.noSuggestionDiagnostics,s||n.push(t.getSyntacticDiagnostics(e.uri.toString())),o||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return u=p.sent(),!u||e.isDisposed()?[2]:(l=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=l.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?i["Uri"].parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return p.sent(),e.isDisposed()?[2]:(i["editor"].setModelMarkers(e,this._selector,l.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,s=e.getPositionAt(n),o=s.lineNumber,a=s.column,u=e.getPositionAt(n+r),l=u.lineNumber,c=u.column,d=[];return t.reportsUnnecessary&&d.push(i["MarkerTag"].Unnecessary),t.reportsDeprecated&&d.push(i["MarkerTag"].Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:c,message:g(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(!t)return[];var r=[];return t.forEach((function(t){var s=e;if(t.file){var o=i["Uri"].parse(t.file.fileName);s=n._libFiles.getOrCreateModel(o)}if(s){var a=t.start||0,u=t.length||1,l=s.getPositionAt(a),c=l.lineNumber,d=l.column,p=s.getPositionAt(a+u),f=p.lineNumber,h=p.column;r.push({resource:s.uri,startLineNumber:c,startColumn:d,endLineNumber:f,endColumn:h,message:g(t.messageText,"\n")})}})),r},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case m.Error:return i["MarkerSeverity"].Error;case m.Message:return i["MarkerSeverity"].Info;case m.Warning:return i["MarkerSeverity"].Warning;case m.Suggestion:return i["MarkerSeverity"].Hint}return i["MarkerSeverity"].Info},t}(b),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,s){return p(this,void 0,void 0,(function(){var r,s,o,a,u,l,c;return f(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),s=new i["Range"](n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=e.uri,a=e.getOffsetAt(n),[4,this._worker(o)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCompletionsAtPosition(o.toString(),a)];case 2:return l=d.sent(),!l||e.isDisposed()?[2]:(c=l.entries.map((function(r){var u,l=s;if(r.replacementSpan){var c=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);l=new i["Range"](c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(u=r.kindModifiers)||void 0===u?void 0:u.indexOf("deprecated"))&&p.push(i["languages"].CompletionItemTag.Deprecated),{uri:o,position:n,offset:a,range:l,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:p}})),[2,{suggestions:c}])}}))}))},t.prototype.resolveCompletionItem=function(e,n){return p(this,void 0,void 0,(function(){var n,r,i,s,o,a;return f(this,(function(u){switch(u.label){case 0:return n=e,r=n.uri,i=n.position,s=n.offset,[4,this._worker(r)];case 1:return o=u.sent(),[4,o.getCompletionEntryDetails(r.toString(),s,n.label)];case 2:return a=u.sent(),a?[2,{uri:r,position:i,label:a.name,kind:t.convertKind(a.kind),detail:h(a.displayParts),documentation:{value:t.createDocumentationString(a)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case T.primitiveType:case T.keyword:return i["languages"].CompletionItemKind.Keyword;case T.variable:case T.localVariable:return i["languages"].CompletionItemKind.Variable;case T.memberVariable:case T.memberGetAccessor:case T.memberSetAccessor:return i["languages"].CompletionItemKind.Field;case T.function:case T.memberFunction:case T.constructSignature:case T.callSignature:case T.indexSignature:return i["languages"].CompletionItemKind.Function;case T.enum:return i["languages"].CompletionItemKind.Enum;case T.module:return i["languages"].CompletionItemKind.Module;case T.class:return i["languages"].CompletionItemKind.Class;case T.interface:return i["languages"].CompletionItemKind.Interface;case T.warning:return i["languages"].CompletionItemKind.File}return i["languages"].CompletionItemKind.Property},t.createDocumentationString=function(e){var t=h(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){var i=r[n];t+="\n\n"+w(i)}return t},t}(b);function w(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text,r=n[0],i=n.slice(1);t+="`"+r.text+"`",i.length>0&&(t+=" — "+i.map((function(e){return e.text})).join(" "))}else Array.isArray(e.text)?t+=" — "+e.text.map((function(e){return e.text})).join(" "):e.text&&(t+=" — "+e.text);return t}var S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return c(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case i["languages"].SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case i["languages"].SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i["languages"].SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,n,r,i){return p(this,void 0,void 0,(function(){var r,s,o,a,u;return f(this,(function(l){switch(l.label){case 0:return r=e.uri,s=e.getOffsetAt(n),[4,this._worker(r)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getSignatureHelpItems(r.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return a=l.sent(),!a||e.isDisposed()?[2]:(u={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]},a.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:h(e.documentation)},t.label+=h(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=h(n.displayParts),o={label:s,documentation:{value:h(n.documentation)}};t.label+=s,t.parameters.push(o),r<i.length-1&&(t.label+=h(e.separatorDisplayParts))})),t.label+=h(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(b),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideHover=function(e,t,n){return p(this,void 0,void 0,(function(){var n,r,i,s,o,a,u;return f(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=l.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return s=l.sent(),!s||e.isDisposed()?[2]:(o=h(s.documentation),a=s.tags?s.tags.map((function(e){return w(e)})).join("  \n\n"):"",u=h(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}])}}))}))},t}(b),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return p(this,void 0,void 0,(function(){var n,r,s,o,a=this;return f(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=u.sent(),e.isDisposed()?[2]:[4,s.getOccurrencesAtPosition(n.toString(),r)];case 2:return o=u.sent(),!o||e.isDisposed()?[2]:[2,o.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?i["languages"].DocumentHighlightKind.Write:i["languages"].DocumentHighlightKind.Text}}))]}}))}))},t}(b),C=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return c(t,e),t.prototype.provideDefinition=function(e,t,n){return p(this,void 0,void 0,(function(){var n,r,s,o,a,l,c,d,p,g,h,m;return f(this,(function(f){switch(f.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=f.sent(),e.isDisposed()?[2]:[4,s.getDefinitionAtPosition(n.toString(),r)];case 2:return o=f.sent(),!o||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return i["Uri"].parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],l=0,c=o;l<c.length;l++)if(d=c[l],p=i["Uri"].parse(d.fileName),g=this._libFiles.getOrCreateModel(p),g)a.push({uri:p,range:this._textSpanToRange(g,d.textSpan)});else if(h=u["a"].getExtraLibs()[d.fileName],h)return m=i["editor"].createModel(h.content,"typescript",p),[2,{uri:p,range:this._textSpanToRange(m,d.textSpan)}];return[2,a]}}))}))},t}(b),D=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return c(t,e),t.prototype.provideReferences=function(e,t,n,r){return p(this,void 0,void 0,(function(){var n,r,s,o,a,u,l,c,d,p;return f(this,(function(f){switch(f.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=f.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(n.toString(),r)];case 2:return o=f.sent(),!o||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return i["Uri"].parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],u=0,l=o;u<l.length;u++)c=l[u],d=i["Uri"].parse(c.fileName),p=this._libFiles.getOrCreateModel(d),p&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(b),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideDocumentSymbols=function(e,t){return p(this,void 0,void 0,(function(){var t,n,r,s,o,a=this;return f(this,(function(u){switch(u.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=u.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return r=u.sent(),!r||e.isDisposed()?[2]:(s=function(t,n,r){var o={name:n.text,detail:"",kind:F[n.kind]||i["languages"].SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[]};if(r&&(o.containerName=r),n.childItems&&n.childItems.length>0)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];s(t,c,o.name)}t.push(o)},o=[],r.forEach((function(e){return s(o,e)})),[2,o])}}))}))},t}(b),T=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),F=Object.create(null);F[T.module]=i["languages"].SymbolKind.Module,F[T.class]=i["languages"].SymbolKind.Class,F[T.enum]=i["languages"].SymbolKind.Enum,F[T.interface]=i["languages"].SymbolKind.Interface,F[T.memberFunction]=i["languages"].SymbolKind.Method,F[T.memberVariable]=i["languages"].SymbolKind.Property,F[T.memberGetAccessor]=i["languages"].SymbolKind.Property,F[T.memberSetAccessor]=i["languages"].SymbolKind.Property,F[T.variable]=i["languages"].SymbolKind.Variable,F[T.const]=i["languages"].SymbolKind.Variable,F[T.localVariable]=i["languages"].SymbolKind.Variable,F[T.variable]=i["languages"].SymbolKind.Variable,F[T.function]=i["languages"].SymbolKind.Function,F[T.localFunction]=i["languages"].SymbolKind.Function;var P,A,O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(b),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return p(this,void 0,void 0,(function(){var r,i,s,o,a,u=this;return f(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(r.toString(),i,s,O._convertOptions(n))];case 2:return a=l.sent(),!a||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(O),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return p(this,void 0,void 0,(function(){var i,s,o,a,u=this;return f(this,(function(l){switch(l.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,n,O._convertOptions(r))];case 2:return a=l.sent(),!a||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(O),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return p(this,void 0,void 0,(function(){var r,i,s,o,a,u,l,c,d=this;return f(this,(function(p){switch(p.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=O._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=p.sent(),e.isDisposed()?[2]:[4,u.getCodeFixesAtPosition(r.toString(),i,s,a,o)];case 2:return l=p.sent(),!l||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(c=l.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return d._tsCodeFixActionToMonacoCodeAction(e,n,t)})),[2,{actions:c,dispose:function(){}}])}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,s=n.changes;i<s.length;i++)for(var o=s[i],a=0,u=o.textChanges;a<u.length;a++){var l=u[a];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}var c={title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"};return c},t}(O),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return p(this,void 0,void 0,(function(){var r,s,o,a,u,l,c,d,p,g,h,m;return f(this,(function(f){switch(f.label){case 0:return r=e.uri,s=r.toString(),o=e.getOffsetAt(t),[4,this._worker(r)];case 1:return a=f.sent(),e.isDisposed()?[2]:[4,a.getRenameInfo(s,o,{allowRenameOfImportPath:!1})];case 2:if(u=f.sent(),!1===u.canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(s,o,!1,!1,!1)];case 3:if(l=f.sent(),!l||e.isDisposed())return[2];for(c=[],d=0,p=l;d<p.length;d++){if(g=p[d],h=i["Uri"].parse(g.fileName),m=i["editor"].getModel(h),!m)throw new Error("Unknown URI "+h+".");c.push({resource:h,edit:{range:this._textSpanToRange(m,g.textSpan),text:n}})}return[2,{edits:c}]}}))}))},t}(b),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.provideInlayHints=function(e,t,n){return p(this,void 0,void 0,(function(){var n,r,i,s,o,a,u=this;return f(this,(function(l){switch(l.label){case 0:return n=e.uri,r=n.toString(),i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(n)];case 1:return o=l.sent(),e.isDisposed()?[2,[]]:[4,o.provideInlayHints(r,i,s)];case 2:return a=l.sent(),[2,a.map((function(t){return d(d({},t),{position:e.getPositionAt(t.position),kind:u._convertHintKind(t.kind)})}))]}}))}))},t.prototype._convertHintKind=function(e){switch(e){case"Parameter":return i["languages"].InlayHintKind.Parameter;case"Type":return i["languages"].InlayHintKind.Type;default:return i["languages"].InlayHintKind.Other}},t}(b);function R(e){A=j(e,"typescript")}function H(e){P=j(e,"javascript")}function W(){return new Promise((function(e,t){if(!P)return t("JavaScript not registered!");e(P)}))}function V(){return new Promise((function(e,t){if(!A)return t("TypeScript not registered!");e(A)}))}function j(e,t){var n=new a(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},s=new v(r);return i["languages"].registerCompletionItemProvider(t,new _(r)),i["languages"].registerSignatureHelpProvider(t,new S(r)),i["languages"].registerHoverProvider(t,new k(r)),i["languages"].registerDocumentHighlightProvider(t,new x(r)),i["languages"].registerDefinitionProvider(t,new C(s,r)),i["languages"].registerReferenceProvider(t,new D(s,r)),i["languages"].registerDocumentSymbolProvider(t,new I(r)),i["languages"].registerDocumentRangeFormattingEditProvider(t,new L(r)),i["languages"].registerOnTypeFormattingEditProvider(t,new N(r)),i["languages"].registerCodeActionProvider(t,new M(r)),i["languages"].registerRenameProvider(t,new K(r)),i["languages"].registerInlayHintsProvider(t,new E(r)),new y(s,e,t,r),r}}}]);