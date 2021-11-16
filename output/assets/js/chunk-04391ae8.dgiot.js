/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Tue Nov 16 2021 03:55:58 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04391ae8"],{2165:function(n,t,e){"use strict";var i,r=function(){function n(n,t,e,i){this._uri=n,this._languageId=t,this._version=e,this._content=i,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),n.prototype.getText=function(n){if(n){var t=this.offsetAt(n.start),e=this.offsetAt(n.end);return this._content.substring(t,e)}return this._content},n.prototype.update=function(t,e){for(var i=0,r=t;i<r.length;i++){var o=r[i];if(n.isIncremental(o)){var u=s(o.range),c=this.offsetAt(u.start),f=this.offsetAt(u.end);this._content=this._content.substring(0,c)+o.text+this._content.substring(f,this._content.length);var d=Math.max(u.start.line,0),g=Math.max(u.end.line,0),h=this._lineOffsets,l=a(o.text,!1,c);if(g-d===l.length)for(var v=0,p=l.length;v<p;v++)h[v+d+1]=l[v];else l.length<1e4?h.splice.apply(h,[d+1,g-d].concat(l)):this._lineOffsets=h=h.slice(0,d+1).concat(l,h.slice(g+1));var m=o.text.length-(f-c);if(0!==m)for(v=d+1+l.length,p=h.length;v<p;v++)h[v]=h[v]+m}else{if(!n.isFull(o))throw new Error("Unknown change event received");this._content=o.text,this._lineOffsets=void 0}}this._version=e},n.prototype.getLineOffsets=function(){return void 0===this._lineOffsets&&(this._lineOffsets=a(this._content,!0)),this._lineOffsets},n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var t=this.getLineOffsets(),e=0,i=t.length;if(0===i)return{line:0,character:n};while(e<i){var r=Math.floor((e+i)/2);t[r]>n?i=r:e=r+1}var o=e-1;return{line:o,character:n-t[o]}},n.prototype.offsetAt=function(n){var t=this.getLineOffsets();if(n.line>=t.length)return this._content.length;if(n.line<0)return 0;var e=t[n.line],i=n.line+1<t.length?t[n.line+1]:this._content.length;return Math.max(Math.min(e+n.character,i),e)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),n.isIncremental=function(n){var t=n;return void 0!==t&&null!==t&&"string"===typeof t.text&&void 0!==t.range&&(void 0===t.rangeLength||"number"===typeof t.rangeLength)},n.isFull=function(n){var t=n;return void 0!==t&&null!==t&&"string"===typeof t.text&&void 0===t.range&&void 0===t.rangeLength},n}();function o(n,t){if(n.length<=1)return n;var e=n.length/2|0,i=n.slice(0,e),r=n.slice(e);o(i,t),o(r,t);var a=0,s=0,u=0;while(a<i.length&&s<r.length){var c=t(i[a],r[s]);n[u++]=c<=0?i[a++]:r[s++]}while(a<i.length)n[u++]=i[a++];while(s<r.length)n[u++]=r[s++];return n}function a(n,t,e){void 0===e&&(e=0);for(var i=t?[e]:[],r=0;r<n.length;r++){var o=n.charCodeAt(r);13!==o&&10!==o||(13===o&&r+1<n.length&&10===n.charCodeAt(r+1)&&r++,i.push(e+r+1))}return i}function s(n){var t=n.start,e=n.end;return t.line>e.line||t.line===e.line&&t.character>e.character?{start:e,end:t}:n}function u(n){var t=s(n.range);return t!==n.range?{newText:n.newText,range:t}:n}(function(n){function t(n,t,e,i){return new r(n,t,e,i)}function e(n,t,e){if(n instanceof r)return n.update(t,e),n;throw new Error("TextDocument.update: document must be created by TextDocument.create")}function i(n,t){for(var e=n.getText(),i=o(t.map(u),(function(n,t){var e=n.range.start.line-t.range.start.line;return 0===e?n.range.start.character-t.range.start.character:e})),r=0,a=[],s=0,c=i;s<c.length;s++){var f=c[s],d=n.offsetAt(f.range.start);if(d<r)throw new Error("Overlapping edit");d>r&&a.push(e.substring(r,d)),f.newText.length&&a.push(f.newText),r=n.offsetAt(f.range.end)}return a.push(e.substr(r)),a.join("")}n.create=t,n.update=e,n.applyEdits=i})(i||(i={}))},2850:function(n,t,e){"use strict";var i,r,o,a,s,u,c,f,d,g,h,l,v,p,m,b,_,w,y,A,x,E,k,C,I,O;e.d(t,"g",(function(){return o})),e.d(t,"h",(function(){return a})),e.d(t,"e",(function(){return s})),e.d(t,"c",(function(){return g})),e.d(t,"k",(function(){return w})),e.d(t,"f",(function(){return R})),e.d(t,"a",(function(){return S})),e.d(t,"d",(function(){return D})),e.d(t,"b",(function(){return q})),e.d(t,"j",(function(){return H})),e.d(t,"i",(function(){return on})),function(n){n.MIN_VALUE=-2147483648,n.MAX_VALUE=2147483647}(i||(i={})),function(n){n.MIN_VALUE=0,n.MAX_VALUE=2147483647}(r||(r={})),function(n){function t(n,t){return n===Number.MAX_VALUE&&(n=r.MAX_VALUE),t===Number.MAX_VALUE&&(t=r.MAX_VALUE),{line:n,character:t}}function e(n){var t=n;return cn.objectLiteral(t)&&cn.uinteger(t.line)&&cn.uinteger(t.character)}n.create=t,n.is=e}(o||(o={})),function(n){function t(n,t,e,i){if(cn.uinteger(n)&&cn.uinteger(t)&&cn.uinteger(e)&&cn.uinteger(i))return{start:o.create(n,t),end:o.create(e,i)};if(o.is(n)&&o.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments["+n+", "+t+", "+e+", "+i+"]")}function e(n){var t=n;return cn.objectLiteral(t)&&o.is(t.start)&&o.is(t.end)}n.create=t,n.is=e}(a||(a={})),function(n){function t(n,t){return{uri:n,range:t}}function e(n){var t=n;return cn.defined(t)&&a.is(t.range)&&(cn.string(t.uri)||cn.undefined(t.uri))}n.create=t,n.is=e}(s||(s={})),function(n){function t(n,t,e,i){return{targetUri:n,targetRange:t,targetSelectionRange:e,originSelectionRange:i}}function e(n){var t=n;return cn.defined(t)&&a.is(t.targetRange)&&cn.string(t.targetUri)&&(a.is(t.targetSelectionRange)||cn.undefined(t.targetSelectionRange))&&(a.is(t.originSelectionRange)||cn.undefined(t.originSelectionRange))}n.create=t,n.is=e}(u||(u={})),function(n){function t(n,t,e,i){return{red:n,green:t,blue:e,alpha:i}}function e(n){var t=n;return cn.numberRange(t.red,0,1)&&cn.numberRange(t.green,0,1)&&cn.numberRange(t.blue,0,1)&&cn.numberRange(t.alpha,0,1)}n.create=t,n.is=e}(c||(c={})),function(n){function t(n,t){return{range:n,color:t}}function e(n){var t=n;return a.is(t.range)&&c.is(t.color)}n.create=t,n.is=e}(f||(f={})),function(n){function t(n,t,e){return{label:n,textEdit:t,additionalTextEdits:e}}function e(n){var t=n;return cn.string(t.label)&&(cn.undefined(t.textEdit)||w.is(t))&&(cn.undefined(t.additionalTextEdits)||cn.typedArray(t.additionalTextEdits,w.is))}n.create=t,n.is=e}(d||(d={})),function(n){n["Comment"]="comment",n["Imports"]="imports",n["Region"]="region"}(g||(g={})),function(n){function t(n,t,e,i,r){var o={startLine:n,endLine:t};return cn.defined(e)&&(o.startCharacter=e),cn.defined(i)&&(o.endCharacter=i),cn.defined(r)&&(o.kind=r),o}function e(n){var t=n;return cn.uinteger(t.startLine)&&cn.uinteger(t.startLine)&&(cn.undefined(t.startCharacter)||cn.uinteger(t.startCharacter))&&(cn.undefined(t.endCharacter)||cn.uinteger(t.endCharacter))&&(cn.undefined(t.kind)||cn.string(t.kind))}n.create=t,n.is=e}(h||(h={})),function(n){function t(n,t){return{location:n,message:t}}function e(n){var t=n;return cn.defined(t)&&s.is(t.location)&&cn.string(t.message)}n.create=t,n.is=e}(l||(l={})),function(n){n.Error=1,n.Warning=2,n.Information=3,n.Hint=4}(v||(v={})),function(n){n.Unnecessary=1,n.Deprecated=2}(p||(p={})),function(n){function t(n){var t=n;return void 0!==t&&null!==t&&cn.string(t.href)}n.is=t}(m||(m={})),function(n){function t(n,t,e,i,r,o){var a={range:n,message:t};return cn.defined(e)&&(a.severity=e),cn.defined(i)&&(a.code=i),cn.defined(r)&&(a.source=r),cn.defined(o)&&(a.relatedInformation=o),a}function e(n){var t,e=n;return cn.defined(e)&&a.is(e.range)&&cn.string(e.message)&&(cn.number(e.severity)||cn.undefined(e.severity))&&(cn.integer(e.code)||cn.string(e.code)||cn.undefined(e.code))&&(cn.undefined(e.codeDescription)||cn.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(cn.string(e.source)||cn.undefined(e.source))&&(cn.undefined(e.relatedInformation)||cn.typedArray(e.relatedInformation,l.is))}n.create=t,n.is=e}(b||(b={})),function(n){function t(n,t){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];var r={title:n,command:t};return cn.defined(e)&&e.length>0&&(r.arguments=e),r}function e(n){var t=n;return cn.defined(t)&&cn.string(t.title)&&cn.string(t.command)}n.create=t,n.is=e}(_||(_={})),function(n){function t(n,t){return{range:n,newText:t}}function e(n,t){return{range:{start:n,end:n},newText:t}}function i(n){return{range:n,newText:""}}function r(n){var t=n;return cn.objectLiteral(t)&&cn.string(t.newText)&&a.is(t.range)}n.replace=t,n.insert=e,n.del=i,n.is=r}(w||(w={})),function(n){function t(n,t,e){var i={label:n};return void 0!==t&&(i.needsConfirmation=t),void 0!==e&&(i.description=e),i}function e(n){var t=n;return void 0!==t&&cn.objectLiteral(t)&&cn.string(t.label)&&(cn.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(cn.string(t.description)||void 0===t.description)}n.create=t,n.is=e}(y||(y={})),function(n){function t(n){var t=n;return"string"===typeof t}n.is=t}(A||(A={})),function(n){function t(n,t,e){return{range:n,newText:t,annotationId:e}}function e(n,t,e){return{range:{start:n,end:n},newText:t,annotationId:e}}function i(n,t){return{range:n,newText:"",annotationId:t}}function r(n){var t=n;return w.is(t)&&(y.is(t.annotationId)||A.is(t.annotationId))}n.replace=t,n.insert=e,n.del=i,n.is=r}(x||(x={})),function(n){function t(n,t){return{textDocument:n,edits:t}}function e(n){var t=n;return cn.defined(t)&&L.is(t.textDocument)&&Array.isArray(t.edits)}n.create=t,n.is=e}(E||(E={})),function(n){function t(n,t,e){var i={kind:"create",uri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==e&&(i.annotationId=e),i}function e(n){var t=n;return t&&"create"===t.kind&&cn.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||cn.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||cn.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||A.is(t.annotationId))}n.create=t,n.is=e}(k||(k={})),function(n){function t(n,t,e,i){var r={kind:"rename",oldUri:n,newUri:t};return void 0===e||void 0===e.overwrite&&void 0===e.ignoreIfExists||(r.options=e),void 0!==i&&(r.annotationId=i),r}function e(n){var t=n;return t&&"rename"===t.kind&&cn.string(t.oldUri)&&cn.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||cn.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||cn.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||A.is(t.annotationId))}n.create=t,n.is=e}(C||(C={})),function(n){function t(n,t,e){var i={kind:"delete",uri:n};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(i.options=t),void 0!==e&&(i.annotationId=e),i}function e(n){var t=n;return t&&"delete"===t.kind&&cn.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||cn.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||cn.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||A.is(t.annotationId))}n.create=t,n.is=e}(I||(I={})),function(n){function t(n){var t=n;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(n){return cn.string(n.kind)?k.is(n)||C.is(n)||I.is(n):E.is(n)})))}n.is=t}(O||(O={}));var j,T,L,M,R,P,S,D,U,N,F,V,z,W,X,J,K,q,B,H,Q,$,G,Y,Z,nn,tn,en,rn,on,an=function(){function n(n,t){this.edits=n,this.changeAnnotations=t}return n.prototype.insert=function(n,t,e){var i,r;if(void 0===e?i=w.insert(n,t):A.is(e)?(r=e,i=x.insert(n,t,e)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(e),i=x.insert(n,t,r)),this.edits.push(i),void 0!==r)return r},n.prototype.replace=function(n,t,e){var i,r;if(void 0===e?i=w.replace(n,t):A.is(e)?(r=e,i=x.replace(n,t,e)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(e),i=x.replace(n,t,r)),this.edits.push(i),void 0!==r)return r},n.prototype.delete=function(n,t){var e,i;if(void 0===t?e=w.del(n):A.is(t)?(i=t,e=x.del(n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),e=x.del(n,i)),this.edits.push(e),void 0!==i)return i},n.prototype.add=function(n){this.edits.push(n)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n.prototype.assertChangeAnnotations=function(n){if(void 0===n)throw new Error("Text edit change is not configured to manage change annotations.")},n}(),sn=function(){function n(n){this._annotations=void 0===n?Object.create(null):n,this._counter=0,this._size=0}return n.prototype.all=function(){return this._annotations},Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),n.prototype.manage=function(n,t){var e;if(A.is(n)?e=n:(e=this.nextId(),t=n),void 0!==this._annotations[e])throw new Error("Id "+e+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+e);return this._annotations[e]=t,this._size++,e},n.prototype.nextId=function(){return this._counter++,this._counter.toString()},n}();(function(){function n(n){var t=this;this._textEditChanges=Object.create(null),void 0!==n?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new sn(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach((function(n){if(E.is(n)){var e=new an(n.edits,t._changeAnnotations);t._textEditChanges[n.textDocument.uri]=e}}))):n.changes&&Object.keys(n.changes).forEach((function(e){var i=new an(n.changes[e]);t._textEditChanges[e]=i}))):this._workspaceEdit={}}Object.defineProperty(n.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),n.prototype.getTextEditChange=function(n){if(L.is(n)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:n.uri,version:n.version},e=this._textEditChanges[t.uri];if(!e){var i=[],r={textDocument:t,edits:i};this._workspaceEdit.documentChanges.push(r),e=new an(i,this._changeAnnotations),this._textEditChanges[t.uri]=e}return e}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");e=this._textEditChanges[n];if(!e){i=[];this._workspaceEdit.changes[n]=i,e=new an(i),this._textEditChanges[n]=e}return e},n.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new sn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},n.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},n.prototype.createFile=function(n,t,e){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,r,o;if(y.is(t)||A.is(t)?i=t:e=t,void 0===i?r=k.create(n,e):(o=A.is(i)?i:this._changeAnnotations.manage(i),r=k.create(n,e,o)),this._workspaceEdit.documentChanges.push(r),void 0!==o)return o},n.prototype.renameFile=function(n,t,e,i){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,o,a;if(y.is(e)||A.is(e)?r=e:i=e,void 0===r?o=C.create(n,t,i):(a=A.is(r)?r:this._changeAnnotations.manage(r),o=C.create(n,t,i,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},n.prototype.deleteFile=function(n,t,e){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,r,o;if(y.is(t)||A.is(t)?i=t:e=t,void 0===i?r=I.create(n,e):(o=A.is(i)?i:this._changeAnnotations.manage(i),r=I.create(n,e,o)),this._workspaceEdit.documentChanges.push(r),void 0!==o)return o}})();(function(n){function t(n){return{uri:n}}function e(n){var t=n;return cn.defined(t)&&cn.string(t.uri)}n.create=t,n.is=e})(j||(j={})),function(n){function t(n,t){return{uri:n,version:t}}function e(n){var t=n;return cn.defined(t)&&cn.string(t.uri)&&cn.integer(t.version)}n.create=t,n.is=e}(T||(T={})),function(n){function t(n,t){return{uri:n,version:t}}function e(n){var t=n;return cn.defined(t)&&cn.string(t.uri)&&(null===t.version||cn.integer(t.version))}n.create=t,n.is=e}(L||(L={})),function(n){function t(n,t,e,i){return{uri:n,languageId:t,version:e,text:i}}function e(n){var t=n;return cn.defined(t)&&cn.string(t.uri)&&cn.string(t.languageId)&&cn.integer(t.version)&&cn.string(t.text)}n.create=t,n.is=e}(M||(M={})),function(n){n.PlainText="plaintext",n.Markdown="markdown"}(R||(R={})),function(n){function t(t){var e=t;return e===n.PlainText||e===n.Markdown}n.is=t}(R||(R={})),function(n){function t(n){var t=n;return cn.objectLiteral(n)&&R.is(t.kind)&&cn.string(t.value)}n.is=t}(P||(P={})),function(n){n.Text=1,n.Method=2,n.Function=3,n.Constructor=4,n.Field=5,n.Variable=6,n.Class=7,n.Interface=8,n.Module=9,n.Property=10,n.Unit=11,n.Value=12,n.Enum=13,n.Keyword=14,n.Snippet=15,n.Color=16,n.File=17,n.Reference=18,n.Folder=19,n.EnumMember=20,n.Constant=21,n.Struct=22,n.Event=23,n.Operator=24,n.TypeParameter=25}(S||(S={})),function(n){n.PlainText=1,n.Snippet=2}(D||(D={})),function(n){n.Deprecated=1}(U||(U={})),function(n){function t(n,t,e){return{newText:n,insert:t,replace:e}}function e(n){var t=n;return t&&cn.string(t.newText)&&a.is(t.insert)&&a.is(t.replace)}n.create=t,n.is=e}(N||(N={})),function(n){n.asIs=1,n.adjustIndentation=2}(F||(F={})),function(n){function t(n){return{label:n}}n.create=t}(V||(V={})),function(n){function t(n,t){return{items:n||[],isIncomplete:!!t}}n.create=t}(z||(z={})),function(n){function t(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function e(n){var t=n;return cn.string(t)||cn.objectLiteral(t)&&cn.string(t.language)&&cn.string(t.value)}n.fromPlainText=t,n.is=e}(W||(W={})),function(n){function t(n){var t=n;return!!t&&cn.objectLiteral(t)&&(P.is(t.contents)||W.is(t.contents)||cn.typedArray(t.contents,W.is))&&(void 0===n.range||a.is(n.range))}n.is=t}(X||(X={})),function(n){function t(n,t){return t?{label:n,documentation:t}:{label:n}}n.create=t}(J||(J={})),function(n){function t(n,t){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];var r={label:n};return cn.defined(t)&&(r.documentation=t),cn.defined(e)?r.parameters=e:r.parameters=[],r}n.create=t}(K||(K={})),function(n){n.Text=1,n.Read=2,n.Write=3}(q||(q={})),function(n){function t(n,t){var e={range:n};return cn.number(t)&&(e.kind=t),e}n.create=t}(B||(B={})),function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26}(H||(H={})),function(n){n.Deprecated=1}(Q||(Q={})),function(n){function t(n,t,e,i,r){var o={name:n,kind:t,location:{uri:i,range:e}};return r&&(o.containerName=r),o}n.create=t}($||($={})),function(n){function t(n,t,e,i,r,o){var a={name:n,detail:t,kind:e,range:i,selectionRange:r};return void 0!==o&&(a.children=o),a}function e(n){var t=n;return t&&cn.string(t.name)&&cn.number(t.kind)&&a.is(t.range)&&a.is(t.selectionRange)&&(void 0===t.detail||cn.string(t.detail))&&(void 0===t.deprecated||cn.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}n.create=t,n.is=e}(G||(G={})),function(n){n.Empty="",n.QuickFix="quickfix",n.Refactor="refactor",n.RefactorExtract="refactor.extract",n.RefactorInline="refactor.inline",n.RefactorRewrite="refactor.rewrite",n.Source="source",n.SourceOrganizeImports="source.organizeImports",n.SourceFixAll="source.fixAll"}(Y||(Y={})),function(n){function t(n,t){var e={diagnostics:n};return void 0!==t&&null!==t&&(e.only=t),e}function e(n){var t=n;return cn.defined(t)&&cn.typedArray(t.diagnostics,b.is)&&(void 0===t.only||cn.typedArray(t.only,cn.string))}n.create=t,n.is=e}(Z||(Z={})),function(n){function t(n,t,e){var i={title:n},r=!0;return"string"===typeof t?(r=!1,i.kind=t):_.is(t)?i.command=t:i.edit=t,r&&void 0!==e&&(i.kind=e),i}function e(n){var t=n;return t&&cn.string(t.title)&&(void 0===t.diagnostics||cn.typedArray(t.diagnostics,b.is))&&(void 0===t.kind||cn.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||_.is(t.command))&&(void 0===t.isPreferred||cn.boolean(t.isPreferred))&&(void 0===t.edit||O.is(t.edit))}n.create=t,n.is=e}(nn||(nn={})),function(n){function t(n,t){var e={range:n};return cn.defined(t)&&(e.data=t),e}function e(n){var t=n;return cn.defined(t)&&a.is(t.range)&&(cn.undefined(t.command)||_.is(t.command))}n.create=t,n.is=e}(tn||(tn={})),function(n){function t(n,t){return{tabSize:n,insertSpaces:t}}function e(n){var t=n;return cn.defined(t)&&cn.uinteger(t.tabSize)&&cn.boolean(t.insertSpaces)}n.create=t,n.is=e}(en||(en={})),function(n){function t(n,t,e){return{range:n,target:t,data:e}}function e(n){var t=n;return cn.defined(t)&&a.is(t.range)&&(cn.undefined(t.target)||cn.string(t.target))}n.create=t,n.is=e}(rn||(rn={})),function(n){function t(n,t){return{range:n,parent:t}}function e(t){var e=t;return void 0!==e&&a.is(e.range)&&(void 0===e.parent||n.is(e.parent))}n.create=t,n.is=e}(on||(on={}));var un;(function(n){function t(n,t,e,i){return new fn(n,t,e,i)}function e(n){var t=n;return!!(cn.defined(t)&&cn.string(t.uri)&&(cn.undefined(t.languageId)||cn.string(t.languageId))&&cn.uinteger(t.lineCount)&&cn.func(t.getText)&&cn.func(t.positionAt)&&cn.func(t.offsetAt))}function i(n,t){for(var e=n.getText(),i=r(t,(function(n,t){var e=n.range.start.line-t.range.start.line;return 0===e?n.range.start.character-t.range.start.character:e})),o=e.length,a=i.length-1;a>=0;a--){var s=i[a],u=n.offsetAt(s.range.start),c=n.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");e=e.substring(0,u)+s.newText+e.substring(c,e.length),o=u}return e}function r(n,t){if(n.length<=1)return n;var e=n.length/2|0,i=n.slice(0,e),o=n.slice(e);r(i,t),r(o,t);var a=0,s=0,u=0;while(a<i.length&&s<o.length){var c=t(i[a],o[s]);n[u++]=c<=0?i[a++]:o[s++]}while(a<i.length)n[u++]=i[a++];while(s<o.length)n[u++]=o[s++];return n}n.create=t,n.is=e,n.applyEdits=i})(un||(un={}));var cn,fn=function(){function n(n,t,e,i){this._uri=n,this._languageId=t,this._version=e,this._content=i,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),n.prototype.getText=function(n){if(n){var t=this.offsetAt(n.start),e=this.offsetAt(n.end);return this._content.substring(t,e)}return this._content},n.prototype.update=function(n,t){this._content=n.text,this._version=t,this._lineOffsets=void 0},n.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var n=[],t=this._content,e=!0,i=0;i<t.length;i++){e&&(n.push(i),e=!1);var r=t.charAt(i);e="\r"===r||"\n"===r,"\r"===r&&i+1<t.length&&"\n"===t.charAt(i+1)&&i++}e&&t.length>0&&n.push(t.length),this._lineOffsets=n}return this._lineOffsets},n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var t=this.getLineOffsets(),e=0,i=t.length;if(0===i)return o.create(0,n);while(e<i){var r=Math.floor((e+i)/2);t[r]>n?i=r:e=r+1}var a=e-1;return o.create(a,n-t[a])},n.prototype.offsetAt=function(n){var t=this.getLineOffsets();if(n.line>=t.length)return this._content.length;if(n.line<0)return 0;var e=t[n.line],i=n.line+1<t.length?t[n.line+1]:this._content.length;return Math.max(Math.min(e+n.character,i),e)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),n}();(function(n){var t=Object.prototype.toString;function e(n){return"undefined"!==typeof n}function i(n){return"undefined"===typeof n}function r(n){return!0===n||!1===n}function o(n){return"[object String]"===t.call(n)}function a(n){return"[object Number]"===t.call(n)}function s(n,e,i){return"[object Number]"===t.call(n)&&e<=n&&n<=i}function u(n){return"[object Number]"===t.call(n)&&-2147483648<=n&&n<=2147483647}function c(n){return"[object Number]"===t.call(n)&&0<=n&&n<=2147483647}function f(n){return"[object Function]"===t.call(n)}function d(n){return null!==n&&"object"===typeof n}function g(n,t){return Array.isArray(n)&&n.every(t)}n.defined=e,n.undefined=i,n.boolean=r,n.string=o,n.number=a,n.numberRange=s,n.integer=u,n.uinteger=c,n.func=f,n.objectLiteral=d,n.typedArray=g})(cn||(cn={}))}}]);