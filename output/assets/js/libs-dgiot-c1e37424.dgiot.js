/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 07:39:27 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["libs-dgiot-c1e37424"],{"05a3":function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n,i=o("93b4"),r=o("0aba"),s=o("12fe"),c=o("f123"),a=o("63a0"),l=o("f295"),d=o("92db"),h=o("d778"),u=o("a3d3"),p=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},f=function(e,t){return function(o,n){t(o,n,e)}},g=function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(t){r(t)}}function c(e){try{a(n["throw"](e))}catch(t){r(t)}}function a(e){e.done?o(e.value):i(e.value).then(s,c)}a((n=n.apply(e,t||[])).next())}))};let m=class e{constructor(e,t,o){this._options=e,this._modeService=t,this._openerService=o,this._onDidRenderAsync=new l["b"],this.onDidRenderAsync=this._onDidRenderAsync.event}dispose(){this._onDidRenderAsync.dispose()}render(e,t,o){if(!e){const e=document.createElement("span");return{element:e,dispose:()=>{}}}const n=new d["b"],r=n.add(Object(i["a"])(e,Object.assign(Object.assign({},this._getRenderOptions(e,n)),t),o));return{element:r.element,dispose:()=>n.dispose()}}_getRenderOptions(t,o){return{baseUrl:this._options.baseUrl,codeBlockRenderer:(t,o)=>g(this,void 0,void 0,(function*(){var n,i,r,s;let c;t?c=this._modeService.getModeIdForLanguageName(t):this._options.editor&&(c=null===(n=this._options.editor.getModel())||void 0===n?void 0:n.getLanguageId()),c||(c="plaintext"),this._modeService.triggerMode(c);const l=null!==(i=yield h["F"].getPromise(c))&&void 0!==i?i:void 0,d=document.createElement("span");if(d.innerHTML=null!==(s=null===(r=e._ttpTokenizer)||void 0===r?void 0:r.createHTML(o,this._modeService.languageIdCodec,l))&&void 0!==s?s:Object(a["b"])(o,this._modeService.languageIdCodec,l),this._options.editor){const e=this._options.editor.getOption(43);u["a"].applyFontInfoSlow(d,e)}else this._options.codeBlockFontFamily&&(d.style.fontFamily=this._options.codeBlockFontFamily);return d})),asyncRenderCallback:()=>this._onDidRenderAsync.fire(),actionHandler:{callback:e=>this._openerService.open(e,{fromUserGesture:!0,allowContributedOpeners:!0,allowCommands:t.isTrusted}).catch(c["f"]),disposables:o}}}};m._ttpTokenizer=null===(n=window.trustedTypes)||void 0===n?void 0:n.createPolicy("tokenizeToString",{createHTML(e,t,o){return Object(a["b"])(e,t,o)}}),m=p([f(1,s["a"]),f(2,r["a"])],m)},"10ec":function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return d}));var n=o("bf32"),i=o("c189"),r=o("4d73");const s=Object(n["c"])("IWorkspaceEditService");function c(e){return Object(r["k"])(e)&&(Boolean(e.newUri)||Boolean(e.oldUri))}function a(e){return Object(r["k"])(e)&&i["a"].isUri(e.resource)&&Object(r["k"])(e.edit)}class l{constructor(e){this.metadata=e}static convert(e){return e.edits.map(e=>{if(a(e))return new d(e.resource,e.edit,e.modelVersionId,e.metadata);if(c(e))return new h(e.oldUri,e.newUri,e.options,e.metadata);throw new Error("Unsupported edit")})}}class d extends l{constructor(e,t,o,n){super(n),this.resource=e,this.textEdit=t,this.versionId=o}}class h extends l{constructor(e,t,o,n){super(n),this.oldResource=e,this.newResource=t,this.options=o}}},"2d89":function(e,t,o){"use strict";o.d(t,"f",(function(){return c})),o.d(t,"a",(function(){return a})),o.d(t,"g",(function(){return d})),o.d(t,"b",(function(){return h})),o.d(t,"c",(function(){return u})),o.d(t,"d",(function(){return p})),o.d(t,"e",(function(){return f}));var n=o("d208"),i=o("5e5c"),r=o("ce14"),s=o("92db");class c{constructor(e,t){this.x=e,this.y=t,this._pageCoordinatesBrand=void 0}toClientCoordinates(){return new a(this.x-n["f"].scrollX,this.y-n["f"].scrollY)}}class a{constructor(e,t){this.clientX=e,this.clientY=t,this._clientCoordinatesBrand=void 0}toPageCoordinates(){return new c(this.clientX+n["f"].scrollX,this.clientY+n["f"].scrollY)}}class l{constructor(e,t,o,n){this.x=e,this.y=t,this.width=o,this.height=n,this._editorPagePositionBrand=void 0}}function d(e){const t=n["D"](e);return new l(t.left,t.top,t.width,t.height)}class h extends r["a"]{constructor(e,t){super(e),this._editorMouseEventBrand=void 0,this.pos=new c(this.posx,this.posy),this.editorPos=d(t)}}class u{constructor(e){this._editorViewDomNode=e}_create(e){return new h(e,this._editorViewDomNode)}onContextMenu(e,t){return n["i"](e,"contextmenu",e=>{t(this._create(e))})}onMouseUp(e,t){return n["i"](e,"mouseup",e=>{t(this._create(e))})}onMouseDown(e,t){return n["i"](e,"mousedown",e=>{t(this._create(e))})}onMouseLeave(e,t){return n["j"](e,e=>{t(this._create(e))})}onMouseMoveThrottled(e,t,o,i){const r=(e,t)=>o(e,this._create(t));return n["l"](e,"mousemove",t,r,i)}}class p{constructor(e){this._editorViewDomNode=e}_create(e){return new h(e,this._editorViewDomNode)}onPointerUp(e,t){return n["i"](e,"pointerup",e=>{t(this._create(e))})}onPointerDown(e,t){return n["i"](e,"pointerdown",e=>{t(this._create(e))})}onPointerLeave(e,t){return n["k"](e,e=>{t(this._create(e))})}onPointerMoveThrottled(e,t,o,i){const r=(e,t)=>o(e,this._create(t));return n["l"](e,"pointermove",t,r,i)}}class f extends s["a"]{constructor(e){super(),this._editorViewDomNode=e,this._globalMouseMoveMonitor=this._register(new i["a"]),this._keydownListener=null}startMonitoring(e,t,o,i,r){this._keydownListener=n["o"](document,"keydown",e=>{const t=e.toKeybinding();t.isModifierKey()||this._globalMouseMoveMonitor.stopMonitoring(!0,e.browserEvent)},!0);const s=(e,t)=>o(e,new h(t,this._editorViewDomNode));this._globalMouseMoveMonitor.startMonitoring(e,t,s,i,e=>{this._keydownListener.dispose(),r(e)})}stopMonitoring(){this._globalMouseMoveMonitor.stopMonitoring(!0)}}},"47f8":function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("bf32");const i=Object(n["c"])("codeEditorService")},"5e2a":function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return _})),o.d(t,"d",(function(){return C})),o.d(t,"c",(function(){return b}));var n=o("1537"),i=o("d8b0"),r=o("4163"),s=o("92db"),c=o("ae58"),a=o("6ad4"),l=o("bbbb"),d=o("bf32"),h=o("3f3e"),u=o("d4b5");const p=Object(d["c"])("IEditorCancelService"),f=new a["c"]("cancellableOperation",!1,Object(u["a"])("cancellableOperation","Whether the editor runs a cancellable operation, e.g. like 'Peek References'"));Object(h["b"])(p,class{constructor(){this._tokens=new WeakMap}add(e,t){let o,n=this._tokens.get(e);return n||(n=e.invokeWithinContext(e=>{const t=f.bindTo(e.get(a["b"])),o=new l["a"];return{key:t,tokens:o}}),this._tokens.set(e,n)),n.key.set(!0),o=n.tokens.push(t),()=>{o&&(o(),n.key.set(!n.tokens.isEmpty()),o=void 0)}}cancel(e){const t=this._tokens.get(e);if(!t)return;const o=t.tokens.pop();o&&(o.cancel(),t.key.set(!t.tokens.isEmpty()))}},!0);class g extends r["b"]{constructor(e,t){super(t),this.editor=e,this._unregister=e.invokeWithinContext(t=>t.get(p).add(e,this))}dispose(){this._unregister(),super.dispose()}}Object(c["k"])(new class extends c["c"]{constructor(){super({id:"editor.cancelOperation",kbOpts:{weight:100,primary:9},precondition:f})}runEditorCommand(e,t){e.get(p).cancel(t)}});class m{constructor(e,t){if(this.flags=t,0!==(1&this.flags)){const t=e.getModel();this.modelVersionId=t?n["v"]("{0}#{1}",t.uri.toString(),t.getVersionId()):null}else this.modelVersionId=null;0!==(4&this.flags)?this.position=e.getPosition():this.position=null,0!==(2&this.flags)?this.selection=e.getSelection():this.selection=null,0!==(8&this.flags)?(this.scrollLeft=e.getScrollLeft(),this.scrollTop=e.getScrollTop()):(this.scrollLeft=-1,this.scrollTop=-1)}_equals(e){if(!(e instanceof m))return!1;const t=e;return this.modelVersionId===t.modelVersionId&&(this.scrollLeft===t.scrollLeft&&this.scrollTop===t.scrollTop&&(!(!this.position&&t.position||this.position&&!t.position||this.position&&t.position&&!this.position.equals(t.position))&&!(!this.selection&&t.selection||this.selection&&!t.selection||this.selection&&t.selection&&!this.selection.equalsRange(t.selection))))}validate(e){return this._equals(new m(e,this.flags))}}class _ extends g{constructor(e,t,o,n){super(e,n),this._listener=new s["b"],4&t&&this._listener.add(e.onDidChangeCursorPosition(e=>{o&&i["a"].containsPosition(o,e.position)||this.cancel()})),2&t&&this._listener.add(e.onDidChangeCursorSelection(e=>{o&&i["a"].containsRange(o,e.selection)||this.cancel()})),8&t&&this._listener.add(e.onDidScrollChange(e=>this.cancel())),1&t&&(this._listener.add(e.onDidChangeModel(e=>this.cancel())),this._listener.add(e.onDidChangeModelContent(e=>this.cancel())))}dispose(){this._listener.dispose(),super.dispose()}}class C extends r["b"]{constructor(e,t){super(t),this._listener=e.onDidChangeContent(()=>this.cancel())}dispose(){this._listener.dispose(),super.dispose()}}class b{constructor(e,t,o){this._visiblePosition=e,this._visiblePositionScrollDelta=t,this._cursorPosition=o}static capture(e){let t=null,o=0;if(0!==e.getScrollTop()){const n=e.getVisibleRanges();if(n.length>0){t=n[0].getStartPosition();const i=e.getTopForPosition(t.lineNumber,t.column);o=e.getScrollTop()-i}}return new b(t,o,e.getPosition())}restore(e){if(this._visiblePosition){const t=e.getTopForPosition(this._visiblePosition.lineNumber,this._visiblePosition.column);e.setScrollTop(t+this._visiblePositionScrollDelta)}}restoreRelativeVerticalPositionOfCursor(e){const t=e.getPosition();if(!this._cursorPosition||!t)return;const o=e.getTopForLineNumber(t.lineNumber)-e.getTopForLineNumber(this._cursorPosition.lineNumber);e.setScrollTop(e.getScrollTop()+o)}}},"80f8":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return s}));var n=o("cb44");function i(e){return!(!e||"function"!==typeof e.getEditorType)&&e.getEditorType()===n["a"].ICodeEditor}function r(e){return!(!e||"function"!==typeof e.getEditorType)&&e.getEditorType()===n["a"].IDiffEditor}function s(e){return i(e)?e:r(e)?e.getModifiedEditor():null}},8692:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n=o("d208"),i=o("92db"),r=o("1537"),s=o("c189"),c=o("f295");class a extends i["a"]{constructor(){super(),this._onCodeEditorAdd=this._register(new c["b"]),this.onCodeEditorAdd=this._onCodeEditorAdd.event,this._onCodeEditorRemove=this._register(new c["b"]),this.onCodeEditorRemove=this._onCodeEditorRemove.event,this._onDiffEditorAdd=this._register(new c["b"]),this._onDiffEditorRemove=this._register(new c["b"]),this._onDecorationTypeRegistered=this._register(new c["b"]),this._modelProperties=new Map,this._codeEditors=Object.create(null),this._diffEditors=Object.create(null)}addCodeEditor(e){this._codeEditors[e.getId()]=e,this._onCodeEditorAdd.fire(e)}removeCodeEditor(e){delete this._codeEditors[e.getId()]&&this._onCodeEditorRemove.fire(e)}listCodeEditors(){return Object.keys(this._codeEditors).map(e=>this._codeEditors[e])}addDiffEditor(e){this._diffEditors[e.getId()]=e,this._onDiffEditorAdd.fire(e)}removeDiffEditor(e){delete this._diffEditors[e.getId()]&&this._onDiffEditorRemove.fire(e)}listDiffEditors(){return Object.keys(this._diffEditors).map(e=>this._diffEditors[e])}getFocusedCodeEditor(){let e=null;const t=this.listCodeEditors();for(const o of t){if(o.hasTextFocus())return o;o.hasWidgetFocus()&&(e=o)}return e}setModelProperty(e,t,o){const n=e.toString();let i;this._modelProperties.has(n)?i=this._modelProperties.get(n):(i=new Map,this._modelProperties.set(n,i)),i.set(t,o)}getModelProperty(e,t){const o=e.toString();if(this._modelProperties.has(o)){const e=this._modelProperties.get(o);return e.get(t)}}}var l=o("cb44"),d=o("3a12"),h=o("d1e2"),u=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},p=function(e,t){return function(o,n){t(o,n,e)}};class f{constructor(e,t,o){this._parent=e,this._editorId=t,this._styleSheet=o,this._refCount=0}ref(){this._refCount++}unref(){var e;this._refCount--,0===this._refCount&&(null===(e=this._styleSheet.parentNode)||void 0===e||e.removeChild(this._styleSheet),this._parent._removeEditorStyleSheets(this._editorId))}insertRule(e,t){const o=this._styleSheet.sheet;o.insertRule(e,t)}removeRulesContainingSelector(e){n["Q"](e,this._styleSheet)}}class g{constructor(e){this._styleSheet=e}ref(){}unref(){}insertRule(e,t){const o=this._styleSheet.sheet;o.insertRule(e,t)}removeRulesContainingSelector(e){n["Q"](e,this._styleSheet)}}let m=class extends a{constructor(e,t){super(),this._decorationOptionProviders=new Map,this._editorStyleSheets=new Map,this._globalStyleSheet=e||null,this._themeService=t}_getOrCreateGlobalStyleSheet(){return this._globalStyleSheet||(this._globalStyleSheet=new g(n["w"]())),this._globalStyleSheet}_getOrCreateStyleSheet(e){if(!e)return this._getOrCreateGlobalStyleSheet();const t=e.getContainerDomNode();if(!n["O"](t))return this._getOrCreateGlobalStyleSheet();const o=e.getId();if(!this._editorStyleSheets.has(o)){const e=new f(this,o,n["w"](t));this._editorStyleSheets.set(o,e)}return this._editorStyleSheets.get(o)}_removeEditorStyleSheets(e){this._editorStyleSheets.delete(e)}registerDecorationType(e,t,o,n,i){let r=this._decorationOptionProviders.get(t);if(!r){const s=this._getOrCreateStyleSheet(i),c={styleSheet:s,key:t,parentTypeKey:n,options:o||Object.create(null)};r=n?new _(this._themeService,s,c):new C(e,this._themeService,s,c),this._decorationOptionProviders.set(t,r),this._onDecorationTypeRegistered.fire(t)}r.refCount++}removeDecorationType(e){const t=this._decorationOptionProviders.get(e);t&&(t.refCount--,t.refCount<=0&&(this._decorationOptionProviders.delete(e),t.dispose(),this.listCodeEditors().forEach(t=>t.removeDecorations(e))))}resolveDecorationOptions(e,t){const o=this._decorationOptionProviders.get(e);if(!o)throw new Error("Unknown decoration type key: "+e);return o.getOptions(this,t)}};m=u([p(1,h["b"])],m);class _{constructor(e,t,o){this._styleSheet=t,this._styleSheet.ref(),this._parentTypeKey=o.parentTypeKey,this.refCount=0,this._beforeContentRules=new S(3,o,e),this._afterContentRules=new S(4,o,e)}getOptions(e,t){const o=e.resolveDecorationOptions(this._parentTypeKey,!0);return this._beforeContentRules&&(o.beforeContentClassName=this._beforeContentRules.className),this._afterContentRules&&(o.afterContentClassName=this._afterContentRules.className),o}dispose(){this._beforeContentRules&&(this._beforeContentRules.dispose(),this._beforeContentRules=null),this._afterContentRules&&(this._afterContentRules.dispose(),this._afterContentRules=null),this._styleSheet.unref()}}class C{constructor(e,t,o,n){this._disposables=new i["b"],this.description=e,this._styleSheet=o,this._styleSheet.ref(),this.refCount=0;const r=e=>{const o=new S(e,n,t);if(this._disposables.add(o),o.hasContent)return o.className},s=e=>{const o=new S(e,n,t);return this._disposables.add(o),o.hasContent?{className:o.className,hasLetterSpacing:o.hasLetterSpacing}:null};this.className=r(0);const c=s(1);if(c&&(this.inlineClassName=c.className,this.inlineClassNameAffectsLetterSpacing=c.hasLetterSpacing),this.beforeContentClassName=r(3),this.afterContentClassName=r(4),n.options.beforeInjectedText&&n.options.beforeInjectedText.contentText){const e=s(5);this.beforeInjectedText={content:n.options.beforeInjectedText.contentText,inlineClassName:null===e||void 0===e?void 0:e.className,inlineClassNameAffectsLetterSpacing:(null===e||void 0===e?void 0:e.hasLetterSpacing)||n.options.beforeInjectedText.affectsLetterSpacing}}if(n.options.afterInjectedText&&n.options.afterInjectedText.contentText){const e=s(6);this.afterInjectedText={content:n.options.afterInjectedText.contentText,inlineClassName:null===e||void 0===e?void 0:e.className,inlineClassNameAffectsLetterSpacing:(null===e||void 0===e?void 0:e.hasLetterSpacing)||n.options.afterInjectedText.affectsLetterSpacing}}this.glyphMarginClassName=r(2);const a=n.options;this.isWholeLine=Boolean(a.isWholeLine),this.stickiness=a.rangeBehavior;const l=a.light&&a.light.overviewRulerColor||a.overviewRulerColor,h=a.dark&&a.dark.overviewRulerColor||a.overviewRulerColor;"undefined"===typeof l&&"undefined"===typeof h||(this.overviewRuler={color:l||h,darkColor:h||l,position:a.overviewRulerLane||d["g"].Center})}getOptions(e,t){return t?{description:this.description,inlineClassName:this.inlineClassName,beforeContentClassName:this.beforeContentClassName,afterContentClassName:this.afterContentClassName,className:this.className,glyphMarginClassName:this.glyphMarginClassName,isWholeLine:this.isWholeLine,overviewRuler:this.overviewRuler,stickiness:this.stickiness,before:this.beforeInjectedText,after:this.afterInjectedText}:this}dispose(){this._disposables.dispose(),this._styleSheet.unref()}}const b={color:"color:{0} !important;",opacity:"opacity:{0};",backgroundColor:"background-color:{0};",outline:"outline:{0};",outlineColor:"outline-color:{0};",outlineStyle:"outline-style:{0};",outlineWidth:"outline-width:{0};",border:"border:{0};",borderColor:"border-color:{0};",borderRadius:"border-radius:{0};",borderSpacing:"border-spacing:{0};",borderStyle:"border-style:{0};",borderWidth:"border-width:{0};",fontStyle:"font-style:{0};",fontWeight:"font-weight:{0};",fontSize:"font-size:{0};",fontFamily:"font-family:{0};",textDecoration:"text-decoration:{0};",cursor:"cursor:{0};",letterSpacing:"letter-spacing:{0};",gutterIconPath:"background:{0} center center no-repeat;",gutterIconSize:"background-size:{0};",contentText:"content:'{0}';",contentIconPath:"content:{0};",margin:"margin:{0};",padding:"padding:{0};",width:"width:{0};",height:"height:{0};",verticalAlign:"vertical-align:{0};"};class S{constructor(e,t,o){this._theme=o.getColorTheme(),this._ruleType=e,this._providerArgs=t,this._usesThemeColors=!1,this._hasContent=!1,this._hasLetterSpacing=!1;let n=v.getClassName(this._providerArgs.key,e);this._providerArgs.parentTypeKey&&(n=n+" "+v.getClassName(this._providerArgs.parentTypeKey,e)),this._className=n,this._unThemedSelector=v.getSelector(this._providerArgs.key,this._providerArgs.parentTypeKey,e),this._buildCSS(),this._usesThemeColors?this._themeListener=o.onDidColorThemeChange(e=>{this._theme=o.getColorTheme(),this._removeCSS(),this._buildCSS()}):this._themeListener=null}dispose(){this._hasContent&&(this._removeCSS(),this._hasContent=!1),this._themeListener&&(this._themeListener.dispose(),this._themeListener=null)}get hasContent(){return this._hasContent}get hasLetterSpacing(){return this._hasLetterSpacing}get className(){return this._className}_buildCSS(){const e=this._providerArgs.options;let t,o,n;switch(this._ruleType){case 0:t=this.getCSSTextForModelDecorationClassName(e),o=this.getCSSTextForModelDecorationClassName(e.light),n=this.getCSSTextForModelDecorationClassName(e.dark);break;case 1:t=this.getCSSTextForModelDecorationInlineClassName(e),o=this.getCSSTextForModelDecorationInlineClassName(e.light),n=this.getCSSTextForModelDecorationInlineClassName(e.dark);break;case 2:t=this.getCSSTextForModelDecorationGlyphMarginClassName(e),o=this.getCSSTextForModelDecorationGlyphMarginClassName(e.light),n=this.getCSSTextForModelDecorationGlyphMarginClassName(e.dark);break;case 3:t=this.getCSSTextForModelDecorationContentClassName(e.before),o=this.getCSSTextForModelDecorationContentClassName(e.light&&e.light.before),n=this.getCSSTextForModelDecorationContentClassName(e.dark&&e.dark.before);break;case 4:t=this.getCSSTextForModelDecorationContentClassName(e.after),o=this.getCSSTextForModelDecorationContentClassName(e.light&&e.light.after),n=this.getCSSTextForModelDecorationContentClassName(e.dark&&e.dark.after);break;case 5:t=this.getCSSTextForModelDecorationContentClassName(e.beforeInjectedText),o=this.getCSSTextForModelDecorationContentClassName(e.light&&e.light.beforeInjectedText),n=this.getCSSTextForModelDecorationContentClassName(e.dark&&e.dark.beforeInjectedText);break;case 6:t=this.getCSSTextForModelDecorationContentClassName(e.afterInjectedText),o=this.getCSSTextForModelDecorationContentClassName(e.light&&e.light.afterInjectedText),n=this.getCSSTextForModelDecorationContentClassName(e.dark&&e.dark.afterInjectedText);break;default:throw new Error("Unknown rule type: "+this._ruleType)}const i=this._providerArgs.styleSheet;let r=!1;t.length>0&&(i.insertRule(`${this._unThemedSelector} {${t}}`,0),r=!0),o.length>0&&(i.insertRule(`.vs${this._unThemedSelector} {${o}}`,0),r=!0),n.length>0&&(i.insertRule(`.vs-dark${this._unThemedSelector}, .hc-black${this._unThemedSelector} {${n}}`,0),r=!0),this._hasContent=r}_removeCSS(){this._providerArgs.styleSheet.removeRulesContainingSelector(this._unThemedSelector)}getCSSTextForModelDecorationClassName(e){if(!e)return"";const t=[];return this.collectCSSText(e,["backgroundColor"],t),this.collectCSSText(e,["outline","outlineColor","outlineStyle","outlineWidth"],t),this.collectBorderSettingsCSSText(e,t),t.join("")}getCSSTextForModelDecorationInlineClassName(e){if(!e)return"";const t=[];return this.collectCSSText(e,["fontStyle","fontWeight","textDecoration","cursor","color","opacity","letterSpacing"],t),e.letterSpacing&&(this._hasLetterSpacing=!0),t.join("")}getCSSTextForModelDecorationContentClassName(e){if(!e)return"";const t=[];if("undefined"!==typeof e){if(this.collectBorderSettingsCSSText(e,t),"undefined"!==typeof e.contentIconPath&&t.push(r["v"](b.contentIconPath,n["s"](s["a"].revive(e.contentIconPath)))),"string"===typeof e.contentText){const o=e.contentText.match(/^.*$/m)[0],n=o.replace(/['\\]/g,"\\$&");t.push(r["v"](b.contentText,n))}this.collectCSSText(e,["verticalAlign","fontStyle","fontWeight","fontSize","fontFamily","textDecoration","color","opacity","backgroundColor","margin","padding"],t),this.collectCSSText(e,["width","height"],t)&&t.push("display:inline-block;")}return t.join("")}getCSSTextForModelDecorationGlyphMarginClassName(e){if(!e)return"";const t=[];return"undefined"!==typeof e.gutterIconPath&&(t.push(r["v"](b.gutterIconPath,n["s"](s["a"].revive(e.gutterIconPath)))),"undefined"!==typeof e.gutterIconSize&&t.push(r["v"](b.gutterIconSize,e.gutterIconSize))),t.join("")}collectBorderSettingsCSSText(e,t){return!!this.collectCSSText(e,["border","borderColor","borderRadius","borderSpacing","borderStyle","borderWidth"],t)&&(t.push(r["v"]("box-sizing: border-box;")),!0)}collectCSSText(e,t,o){const n=o.length;for(let i of t){const t=this.resolveValue(e[i]);"string"===typeof t&&o.push(r["v"](b[i],t))}return o.length!==n}resolveValue(e){if(Object(l["b"])(e)){this._usesThemeColors=!0;const t=this._theme.getColor(e.id);return t?t.toString():"transparent"}return e}}class v{static getClassName(e,t){return"ced-"+e+"-"+t}static getSelector(e,t,o){let n=".monaco-editor ."+this.getClassName(e,o);return t&&(n=n+"."+this.getClassName(t,o)),3===o?n+="::before":4===o&&(n+="::after"),n}}},ae58:function(e,t,o){"use strict";o.d(t,"a",(function(){return C})),o.d(t,"e",(function(){return b})),o.d(t,"c",(function(){return v})),o.d(t,"b",(function(){return y})),o.d(t,"f",(function(){return w})),o.d(t,"n",(function(){return T})),o.d(t,"o",(function(){return x})),o.d(t,"k",(function(){return E})),o.d(t,"j",(function(){return O})),o.d(t,"p",(function(){return N})),o.d(t,"m",(function(){return k})),o.d(t,"l",(function(){return M})),o.d(t,"d",(function(){return n})),o.d(t,"i",(function(){return j})),o.d(t,"g",(function(){return P})),o.d(t,"h",(function(){return A}));var n,i=o("d4b5"),r=o("c189"),s=o("47f8"),c=o("e0ab"),a=o("1edf"),l=o("d00e"),d=o("cd62"),h=o("d5b7"),u=o("6ad4"),p=o("f3a5"),f=o("e3d2"),g=o("c273"),m=o("4d73"),_=o("2059");class C{constructor(e){this.id=e.id,this.precondition=e.precondition,this._kbOpts=e.kbOpts,this._menuOpts=e.menuOpts,this._description=e.description}register(){if(Array.isArray(this._menuOpts)?this._menuOpts.forEach(this._registerMenuItem,this):this._menuOpts&&this._registerMenuItem(this._menuOpts),this._kbOpts){const e=Array.isArray(this._kbOpts)?this._kbOpts:[this._kbOpts];for(const t of e){let e=t.kbExpr;this.precondition&&(e=e?u["a"].and(e,this.precondition):this.precondition);const o={id:this.id,weight:t.weight,args:t.args,when:e,primary:t.primary,secondary:t.secondary,win:t.win,linux:t.linux,mac:t.mac};p["a"].registerKeybindingRule(o)}}h["a"].registerCommand({id:this.id,handler:(e,t)=>this.runCommand(e,t),description:this._description})}_registerMenuItem(e){d["d"].appendMenuItem(e.menuId,{group:e.group,command:{id:this.id,title:e.title,icon:e.icon,precondition:this.precondition},when:e.when,order:e.order})}}class b extends C{constructor(){super(...arguments),this._implementations=[]}addImplementation(e,t,o){return this._implementations.push({priority:e,name:t,implementation:o}),this._implementations.sort((e,t)=>t.priority-e.priority),{dispose:()=>{for(let e=0;e<this._implementations.length;e++)if(this._implementations[e].implementation===o)return void this._implementations.splice(e,1)}}}runCommand(e,t){const o=e.get(_["b"]);o.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);for(const n of this._implementations){const i=n.implementation(e,t);if(i){if(o.trace(`Command '${this.id}' was handled by '${n.name}'.`),"boolean"===typeof i)return;return i}}o.trace(`The Command '${this.id}' was not handled by any implementation.`)}}class S extends C{constructor(e,t){super(t),this.command=e}runCommand(e,t){return this.command.runCommand(e,t)}}class v extends C{static bindToContribution(e){return class extends v{constructor(e){super(e),this._callback=e.handler}runEditorCommand(t,o,n){const i=e(o);i&&this._callback(e(o),n)}}}runCommand(e,t){const o=e.get(s["a"]),n=o.getFocusedCodeEditor()||o.getActiveCodeEditor();if(n)return n.invokeWithinContext(e=>{const o=e.get(u["b"]);if(o.contextMatchesRules(Object(m["p"])(this.precondition)))return this.runEditorCommand(e,n,t)})}}class y extends v{constructor(e){super(y.convertOptions(e)),this.label=e.label,this.alias=e.alias}static convertOptions(e){let t;function o(t){return t.menuId||(t.menuId=d["b"].EditorContext),t.title||(t.title=e.label),t.when=u["a"].and(e.precondition,t.when),t}return t=Array.isArray(e.menuOpts)?e.menuOpts:e.menuOpts?[e.menuOpts]:[],Array.isArray(e.contextMenuOpts)?t.push(...e.contextMenuOpts.map(o)):e.contextMenuOpts&&t.push(o(e.contextMenuOpts)),e.menuOpts=t,e}runEditorCommand(e,t,o){return this.reportTelemetry(e,t),this.run(e,t,o||{})}reportTelemetry(e,t){e.get(g["a"]).publicLog2("editorActionInvoked",{name:this.label,id:this.id})}}class w extends y{constructor(){super(...arguments),this._implementations=[]}addImplementation(e,t){return this._implementations.push([e,t]),this._implementations.sort((e,t)=>t[0]-e[0]),{dispose:()=>{for(let e=0;e<this._implementations.length;e++)if(this._implementations[e][1]===t)return void this._implementations.splice(e,1)}}}run(e,t,o){for(const n of this._implementations){const i=n[1](e,t,o);if(i){if("boolean"===typeof i)return;return i}}}}function T(e,t){h["a"].registerCommand(e,(function(e,...o){const[n,i]=o;Object(m["c"])(r["a"].isUri(n)),Object(m["c"])(c["a"].isIPosition(i));const s=e.get(a["a"]).getModel(n);if(s){const e=c["a"].lift(i);return t(s,e,...o.slice(2))}return e.get(l["a"]).createModelReference(n).then(e=>new Promise((n,r)=>{try{const r=t(e.object.textEditorModel,c["a"].lift(i),o.slice(2));n(r)}catch(s){r(s)}}).finally(()=>{e.dispose()}))}))}function x(e,t){h["a"].registerCommand(e,(function(e,...o){const[n]=o;Object(m["c"])(r["a"].isUri(n));const i=e.get(a["a"]).getModel(n);return i?t(i,...o.slice(1)):e.get(l["a"]).createModelReference(n).then(e=>new Promise((n,i)=>{try{const i=t(e.object.textEditorModel,o.slice(1));n(i)}catch(r){i(r)}}).finally(()=>{e.dispose()}))}))}function E(e){return R.INSTANCE.registerEditorCommand(e),e}function O(e){const t=new e;return R.INSTANCE.registerEditorAction(t),t}function N(e){return R.INSTANCE.registerEditorAction(e),e}function k(e){R.INSTANCE.registerEditorAction(e)}function M(e,t){R.INSTANCE.registerEditorContribution(e,t)}(function(e){function t(e){return R.INSTANCE.getEditorCommand(e)}function o(){return R.INSTANCE.getEditorActions()}function n(){return R.INSTANCE.getEditorContributions()}function i(e){return R.INSTANCE.getEditorContributions().filter(t=>e.indexOf(t.id)>=0)}function r(){return R.INSTANCE.getDiffEditorContributions()}e.getEditorCommand=t,e.getEditorActions=o,e.getEditorContributions=n,e.getSomeEditorContributions=i,e.getDiffEditorContributions=r})(n||(n={}));const I={EditorCommonContributions:"editor.contributions"};class R{constructor(){this.editorContributions=[],this.diffEditorContributions=[],this.editorActions=[],this.editorCommands=Object.create(null)}registerEditorContribution(e,t){this.editorContributions.push({id:e,ctor:t})}getEditorContributions(){return this.editorContributions.slice(0)}getDiffEditorContributions(){return this.diffEditorContributions.slice(0)}registerEditorAction(e){e.register(),this.editorActions.push(e)}getEditorActions(){return this.editorActions.slice(0)}registerEditorCommand(e){e.register(),this.editorCommands[e.id]=e}getEditorCommand(e){return this.editorCommands[e]||null}}function D(e){return e.register(),e}R.INSTANCE=new R,f["a"].add(I.EditorCommonContributions,R.INSTANCE);const j=D(new b({id:"undo",precondition:void 0,kbOpts:{weight:0,primary:2104},menuOpts:[{menuId:d["b"].MenubarEditMenu,group:"1_do",title:i["a"]({key:"miUndo",comment:["&& denotes a mnemonic"]},"&&Undo"),order:1},{menuId:d["b"].CommandPalette,group:"",title:i["a"]("undo","Undo"),order:1}]}));D(new S(j,{id:"default:undo",precondition:void 0}));const P=D(new b({id:"redo",precondition:void 0,kbOpts:{weight:0,primary:2103,secondary:[3128],mac:{primary:3128}},menuOpts:[{menuId:d["b"].MenubarEditMenu,group:"1_do",title:i["a"]({key:"miRedo",comment:["&& denotes a mnemonic"]},"&&Redo"),order:2},{menuId:d["b"].CommandPalette,group:"",title:i["a"]("redo","Redo"),order:1}]}));D(new S(P,{id:"default:redo",precondition:void 0}));const A=D(new b({id:"editor.action.selectAll",precondition:void 0,kbOpts:{weight:0,kbExpr:null,primary:2079},menuOpts:[{menuId:d["b"].MenubarSelectionMenu,group:"1_basic",title:i["a"]({key:"miSelectAll",comment:["&& denotes a mnemonic"]},"&&Select All"),order:1},{menuId:d["b"].CommandPalette,group:"",title:i["a"]("selectAll","Select All"),order:1}]}))},b434:function(e,t,o){"use strict";var n=o("6c08"),i=o("ae58"),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},s=function(e,t){return function(o,n){t(o,n,e)}};let c=class{constructor(e,t){}dispose(){}};c.ID="editor.contrib.markerDecorations",c=r([s(1,n["a"])],c),Object(i["l"])(c.ID,c)},c941:function(e,t,o){"use strict";o.d(t,"a",(function(){return S}));var n=o("d208"),i=o("4163"),r=o("bbbb"),s=o("1a26"),c=o("f38d"),a=o("dbd6"),l=o("1ff1"),d=o("c189"),h=o("47f8"),u=o("d5b7"),p=o("3b5d"),f=o("0aba"),g=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},m=function(e,t){return function(o,n){t(o,n,e)}},_=function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(t){r(t)}}function c(e){try{a(n["throw"](e))}catch(t){r(t)}}function a(e){e.done?o(e.value):i(e.value).then(s,c)}a((n=n.apply(e,t||[])).next())}))};let C=class{constructor(e){this._commandService=e}open(e,t){return _(this,void 0,void 0,(function*(){if(!Object(f["c"])(e,a["c"].command))return!1;if(!(null===t||void 0===t?void 0:t.allowCommands))return!0;"string"===typeof e&&(e=d["a"].parse(e));let o=[];try{o=Object(c["a"])(decodeURIComponent(e.query))}catch(n){try{o=Object(c["a"])(e.query)}catch(i){}}return Array.isArray(o)||(o=[o]),yield this._commandService.executeCommand(e.path,...o),!0}))}};C=g([m(0,u["b"])],C);let b=class{constructor(e){this._editorService=e}open(e,t){return _(this,void 0,void 0,(function*(){"string"===typeof e&&(e=d["a"].parse(e));let o=void 0;const n=/^L?(\d+)(?:,(\d+))?/.exec(e.fragment);return n&&(o={startLineNumber:parseInt(n[1]),startColumn:n[2]?parseInt(n[2]):1},e=e.with({fragment:""})),e.scheme===a["c"].file&&(e=Object(l["h"])(e)),yield this._editorService.openCodeEditor({resource:e,options:Object.assign({selection:o,context:(null===t||void 0===t?void 0:t.fromUserGesture)?p["a"].USER:p["a"].API},null===t||void 0===t?void 0:t.editorOptions)},this._editorService.getFocusedCodeEditor(),null===t||void 0===t?void 0:t.openToSide),!0}))}};b=g([m(0,h["a"])],b);let S=class{constructor(e,t){this._openers=new r["a"],this._validators=new r["a"],this._resolvers=new r["a"],this._resolvedUriTargets=new s["b"](e=>e.with({path:null,fragment:null,query:null}).toString()),this._externalOpeners=new r["a"],this._defaultExternalOpener={openExternal:e=>_(this,void 0,void 0,(function*(){return Object(f["c"])(e,a["c"].http)||Object(f["c"])(e,a["c"].https)?n["Z"](e):window.location.href=e,!0}))},this._openers.push({open:(e,t)=>_(this,void 0,void 0,(function*(){return!!((null===t||void 0===t?void 0:t.openExternal)||Object(f["c"])(e,a["c"].mailto)||Object(f["c"])(e,a["c"].http)||Object(f["c"])(e,a["c"].https))&&(yield this._doOpenExternal(e,t),!0)}))}),this._openers.push(new C(t)),this._openers.push(new b(e))}registerOpener(e){const t=this._openers.unshift(e);return{dispose:t}}registerValidator(e){const t=this._validators.push(e);return{dispose:t}}registerExternalUriResolver(e){const t=this._resolvers.push(e);return{dispose:t}}setDefaultExternalOpener(e){this._defaultExternalOpener=e}registerExternalOpener(e){const t=this._externalOpeners.push(e);return{dispose:t}}open(e,t){var o;return _(this,void 0,void 0,(function*(){const n="string"===typeof e?d["a"].parse(e):e,i=null!==(o=this._resolvedUriTargets.get(n))&&void 0!==o?o:e;for(const e of this._validators)if(!(yield e.shouldOpen(i)))return!1;for(const o of this._openers){const n=yield o.open(e,t);if(n)return!0}return!1}))}resolveExternalUri(e,t){return _(this,void 0,void 0,(function*(){for(const n of this._resolvers)try{const o=yield n.resolveExternalUri(e,t);if(o)return this._resolvedUriTargets.has(o.resolved)||this._resolvedUriTargets.set(o.resolved,e),o}catch(o){}throw new Error("Could not resolve external URI: "+e.toString())}))}_doOpenExternal(e,t){return _(this,void 0,void 0,(function*(){const o="string"===typeof e?d["a"].parse(e):e;let n,r;try{n=(yield this.resolveExternalUri(o,t)).resolved}catch(s){n=o}if(r="string"===typeof e&&o.toString()===n.toString()?e:encodeURI(n.toString(!0)),null===t||void 0===t?void 0:t.allowContributedOpeners){const e="string"===typeof(null===t||void 0===t?void 0:t.allowContributedOpeners)?null===t||void 0===t?void 0:t.allowContributedOpeners:void 0;for(const t of this._externalOpeners){const n=yield t.openExternal(r,{sourceUri:o,preferredOpenerId:e},i["a"].None);if(n)return!0}}return this._defaultExternalOpener.openExternal(r,{sourceUri:o},i["a"].None)}))}dispose(){this._validators.clear()}};S=g([m(0,h["a"]),m(1,u["b"])],S)}}]);