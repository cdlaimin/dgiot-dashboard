/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Tue Nov 16 2021 10:43:26 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["libs-dgiot-edd7362a"],{"199d":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));let n=!1,o=null;function r(t){if(!t.parent||t.parent===t)return null;try{let e=t.location,i=t.parent.location;if("null"!==e.origin&&"null"!==i.origin&&e.origin!==i.origin)return n=!0,null}catch(e){return n=!0,null}return t.parent}class s{static getSameOriginWindowChain(){if(!o){o=[];let t,e=window;do{t=r(e),t?o.push({window:e,iframeElement:e.frameElement||null}):o.push({window:e,iframeElement:null}),e=t}while(e)}return o.slice(0)}static hasDifferentOriginAncestor(){return o||this.getSameOriginWindowChain(),n}static getPositionOfChildWindowRelativeToAncestorWindow(t,e){if(!e||t===e)return{top:0,left:0};let i=0,n=0,o=this.getSameOriginWindowChain();for(const r of o){if(i+=r.window.scrollY,n+=r.window.scrollX,r.window===e)break;if(!r.iframeElement)break;let t=r.iframeElement.getBoundingClientRect();i+=t.top,n+=t.left}return{top:i,left:n}}}},"1bb5":function(t,e,i){"use strict";
/*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */
function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}i.d(e,"c",(function(){return tt})),i.d(e,"a",(function(){return et})),i.d(e,"b",(function(){return it}));var o=Object.hasOwnProperty,r=Object.setPrototypeOf,s=Object.isFrozen,a=Object.getPrototypeOf,l=Object.getOwnPropertyDescriptor,c=Object.freeze,d=Object.seal,u=Object.create,h="undefined"!==typeof Reflect&&Reflect,m=h.apply,f=h.construct;m||(m=function(t,e,i){return t.apply(e,i)}),c||(c=function(t){return t}),d||(d=function(t){return t}),f||(f=function(t,e){return new(Function.prototype.bind.apply(t,[null].concat(n(e))))});var p=x(Array.prototype.forEach),g=x(Array.prototype.pop),y=x(Array.prototype.push),v=x(String.prototype.toLowerCase),b=x(String.prototype.match),_=x(String.prototype.replace),w=x(String.prototype.indexOf),k=x(String.prototype.trim),N=x(RegExp.prototype.test),S=A(TypeError);function x(t){return function(e){for(var i=arguments.length,n=Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return m(t,e,n)}}function A(t){return function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];return f(t,i)}}function T(t,e){r&&r(t,null);var i=e.length;while(i--){var n=e[i];if("string"===typeof n){var o=v(n);o!==n&&(s(e)||(e[i]=o),n=o)}t[n]=!0}return t}function C(t){var e=u(null),i=void 0;for(i in t)m(o,t,[i])&&(e[i]=t[i]);return e}function E(t,e){while(null!==t){var i=l(t,e);if(i){if(i.get)return x(i.get);if("function"===typeof i.value)return x(i.value)}t=a(t)}function n(t){return console.warn("fallback value for",t),null}return n}var M=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=c(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=c(["#text"]),K=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),W=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=d(/\{\{[\s\S]*|[\s\S]*\}\}/gm),B=d(/<%[\s\S]*|[\s\S]*%>/gm),P=d(/^data-[\-\w.\u00B7-\uFFFF]/),j=d(/^aria-[\-\w]+$/),G=d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),q=d(/^(?:\w+script|data):/i),V=d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function X(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var J=function(){return"undefined"===typeof window?null:window},$=function(t,e){if("object"!==("undefined"===typeof t?"undefined":Y(t))||"function"!==typeof t.createPolicy)return null;var i=null,n="data-tt-policy-suffix";e.currentScript&&e.currentScript.hasAttribute(n)&&(i=e.currentScript.getAttribute(n));var o="dompurify"+(i?"#"+i:"");try{return t.createPolicy(o,{createHTML:function(t){return t}})}catch(r){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),e=function(t){return Z(t)};if(e.version="2.3.1",e.removed=[],!t||!t.document||9!==t.document.nodeType)return e.isSupported=!1,e;var i=t.document,n=t.document,o=t.DocumentFragment,r=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,d=t.NamedNodeMap,u=void 0===d?t.NamedNodeMap||t.MozNamedAttrMap:d,h=t.Text,m=t.Comment,f=t.DOMParser,x=t.trustedTypes,A=a.prototype,Q=E(A,"cloneNode"),tt=E(A,"nextSibling"),et=E(A,"childNodes"),it=E(A,"parentNode");if("function"===typeof r){var nt=n.createElement("template");nt.content&&nt.content.ownerDocument&&(n=nt.content.ownerDocument)}var ot=$(x,i),rt=ot&&Kt?ot.createHTML(""):"",st=n,at=st.implementation,lt=st.createNodeIterator,ct=st.createDocumentFragment,dt=st.getElementsByTagName,ut=i.importNode,ht={};try{ht=C(n).documentMode?n.documentMode:{}}catch(ve){}var mt={};e.isSupported="function"===typeof it&&at&&"undefined"!==typeof at.createHTMLDocument&&9!==ht;var ft=U,pt=B,gt=P,yt=j,vt=q,bt=V,_t=G,wt=null,kt=T({},[].concat(X(M),X(R),X(D),X(L),X(H))),Nt=null,St=T({},[].concat(X(K),X(z),X(I),X(W))),xt=null,At=null,Tt=!0,Ct=!0,Et=!1,Mt=!1,Rt=!1,Dt=!1,Ot=!1,Lt=!1,Ft=!1,Ht=!0,Kt=!1,zt=!0,It=!0,Wt=!1,Ut={},Bt=null,Pt=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),jt=null,Gt=T({},["audio","video","img","source","image","track"]),qt=null,Vt=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Yt="http://www.w3.org/1998/Math/MathML",Xt="http://www.w3.org/2000/svg",Jt="http://www.w3.org/1999/xhtml",$t=Jt,Zt=!1,Qt=null,te=n.createElement("form"),ee=function(t){Qt&&Qt===t||(t&&"object"===("undefined"===typeof t?"undefined":Y(t))||(t={}),t=C(t),wt="ALLOWED_TAGS"in t?T({},t.ALLOWED_TAGS):kt,Nt="ALLOWED_ATTR"in t?T({},t.ALLOWED_ATTR):St,qt="ADD_URI_SAFE_ATTR"in t?T(C(Vt),t.ADD_URI_SAFE_ATTR):Vt,jt="ADD_DATA_URI_TAGS"in t?T(C(Gt),t.ADD_DATA_URI_TAGS):Gt,Bt="FORBID_CONTENTS"in t?T({},t.FORBID_CONTENTS):Pt,xt="FORBID_TAGS"in t?T({},t.FORBID_TAGS):{},At="FORBID_ATTR"in t?T({},t.FORBID_ATTR):{},Ut="USE_PROFILES"in t&&t.USE_PROFILES,Tt=!1!==t.ALLOW_ARIA_ATTR,Ct=!1!==t.ALLOW_DATA_ATTR,Et=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Mt=t.SAFE_FOR_TEMPLATES||!1,Rt=t.WHOLE_DOCUMENT||!1,Lt=t.RETURN_DOM||!1,Ft=t.RETURN_DOM_FRAGMENT||!1,Ht=!1!==t.RETURN_DOM_IMPORT,Kt=t.RETURN_TRUSTED_TYPE||!1,Ot=t.FORCE_BODY||!1,zt=!1!==t.SANITIZE_DOM,It=!1!==t.KEEP_CONTENT,Wt=t.IN_PLACE||!1,_t=t.ALLOWED_URI_REGEXP||_t,$t=t.NAMESPACE||Jt,Mt&&(Ct=!1),Ft&&(Lt=!0),Ut&&(wt=T({},[].concat(X(H))),Nt=[],!0===Ut.html&&(T(wt,M),T(Nt,K)),!0===Ut.svg&&(T(wt,R),T(Nt,z),T(Nt,W)),!0===Ut.svgFilters&&(T(wt,D),T(Nt,z),T(Nt,W)),!0===Ut.mathMl&&(T(wt,L),T(Nt,I),T(Nt,W))),t.ADD_TAGS&&(wt===kt&&(wt=C(wt)),T(wt,t.ADD_TAGS)),t.ADD_ATTR&&(Nt===St&&(Nt=C(Nt)),T(Nt,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&T(qt,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(Bt===Pt&&(Bt=C(Bt)),T(Bt,t.FORBID_CONTENTS)),It&&(wt["#text"]=!0),Rt&&T(wt,["html","head","body"]),wt.table&&(T(wt,["tbody"]),delete xt.tbody),c&&c(t),Qt=t)},ie=T({},["mi","mo","mn","ms","mtext"]),ne=T({},["foreignobject","desc","title","annotation-xml"]),oe=T({},R);T(oe,D),T(oe,O);var re=T({},L);T(re,F);var se=function(t){var e=it(t);e&&e.tagName||(e={namespaceURI:Jt,tagName:"template"});var i=v(t.tagName),n=v(e.tagName);if(t.namespaceURI===Xt)return e.namespaceURI===Jt?"svg"===i:e.namespaceURI===Yt?"svg"===i&&("annotation-xml"===n||ie[n]):Boolean(oe[i]);if(t.namespaceURI===Yt)return e.namespaceURI===Jt?"math"===i:e.namespaceURI===Xt?"math"===i&&ne[n]:Boolean(re[i]);if(t.namespaceURI===Jt){if(e.namespaceURI===Xt&&!ne[n])return!1;if(e.namespaceURI===Yt&&!ie[n])return!1;var o=T({},["title","style","font","a","script"]);return!re[i]&&(o[i]||!oe[i])}return!1},ae=function(t){y(e.removed,{element:t});try{t.parentNode.removeChild(t)}catch(ve){try{t.outerHTML=rt}catch(ve){t.remove()}}},le=function(t,i){try{y(e.removed,{attribute:i.getAttributeNode(t),from:i})}catch(ve){y(e.removed,{attribute:null,from:i})}if(i.removeAttribute(t),"is"===t&&!Nt[t])if(Lt||Ft)try{ae(i)}catch(ve){}else try{i.setAttribute(t,"")}catch(ve){}},ce=function(t){var e=void 0,i=void 0;if(Ot)t="<remove></remove>"+t;else{var o=b(t,/^[\r\n\t ]+/);i=o&&o[0]}var r=ot?ot.createHTML(t):t;if($t===Jt)try{e=(new f).parseFromString(r,"text/html")}catch(ve){}if(!e||!e.documentElement){e=at.createDocument($t,"template",null);try{e.documentElement.innerHTML=Zt?"":r}catch(ve){}}var s=e.body||e.documentElement;return t&&i&&s.insertBefore(n.createTextNode(i),s.childNodes[0]||null),$t===Jt?dt.call(e,Rt?"html":"body")[0]:Rt?e.documentElement:s},de=function(t){return lt.call(t.ownerDocument||t,t,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,null,!1)},ue=function(t){return!(t instanceof h||t instanceof m)&&!("string"===typeof t.nodeName&&"string"===typeof t.textContent&&"function"===typeof t.removeChild&&t.attributes instanceof u&&"function"===typeof t.removeAttribute&&"function"===typeof t.setAttribute&&"string"===typeof t.namespaceURI&&"function"===typeof t.insertBefore)},he=function(t){return"object"===("undefined"===typeof s?"undefined":Y(s))?t instanceof s:t&&"object"===("undefined"===typeof t?"undefined":Y(t))&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},me=function(t,i,n){mt[t]&&p(mt[t],(function(t){t.call(e,i,n,Qt)}))},fe=function(t){var i=void 0;if(me("beforeSanitizeElements",t,null),ue(t))return ae(t),!0;if(b(t.nodeName,/[\u0080-\uFFFF]/))return ae(t),!0;var n=v(t.nodeName);if(me("uponSanitizeElement",t,{tagName:n,allowedTags:wt}),!he(t.firstElementChild)&&(!he(t.content)||!he(t.content.firstElementChild))&&N(/<[/\w]/g,t.innerHTML)&&N(/<[/\w]/g,t.textContent))return ae(t),!0;if("select"===n&&N(/<template/i,t.innerHTML))return ae(t),!0;if(!wt[n]||xt[n]){if(It&&!Bt[n]){var o=it(t)||t.parentNode,r=et(t)||t.childNodes;if(r&&o)for(var s=r.length,l=s-1;l>=0;--l)o.insertBefore(Q(r[l],!0),tt(t))}return ae(t),!0}return t instanceof a&&!se(t)?(ae(t),!0):"noscript"!==n&&"noembed"!==n||!N(/<\/no(script|embed)/i,t.innerHTML)?(Mt&&3===t.nodeType&&(i=t.textContent,i=_(i,ft," "),i=_(i,pt," "),t.textContent!==i&&(y(e.removed,{element:t.cloneNode()}),t.textContent=i)),me("afterSanitizeElements",t,null),!1):(ae(t),!0)},pe=function(t,e,i){if(zt&&("id"===e||"name"===e)&&(i in n||i in te))return!1;if(Ct&&!At[e]&&N(gt,e));else if(Tt&&N(yt,e));else{if(!Nt[e]||At[e])return!1;if(qt[e]);else if(N(_t,_(i,bt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==w(i,"data:")||!jt[t]){if(Et&&!N(vt,_(i,bt,"")));else if(i)return!1}else;}return!0},ge=function(t){var i=void 0,n=void 0,o=void 0,r=void 0;me("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Nt};r=s.length;while(r--){i=s[r];var l=i,c=l.name,d=l.namespaceURI;if(n=k(i.value),o=v(c),a.attrName=o,a.attrValue=n,a.keepAttr=!0,a.forceKeepAttr=void 0,me("uponSanitizeAttribute",t,a),n=a.attrValue,!a.forceKeepAttr&&(le(c,t),a.keepAttr))if(N(/\/>/i,n))le(c,t);else{Mt&&(n=_(n,ft," "),n=_(n,pt," "));var u=t.nodeName.toLowerCase();if(pe(u,o,n))try{d?t.setAttributeNS(d,c,n):t.setAttribute(c,n),g(e.removed)}catch(ve){}}}me("afterSanitizeAttributes",t,null)}},ye=function t(e){var i=void 0,n=de(e);me("beforeSanitizeShadowDOM",e,null);while(i=n.nextNode())me("uponSanitizeShadowNode",i,null),fe(i)||(i.content instanceof o&&t(i.content),ge(i));me("afterSanitizeShadowDOM",e,null)};return e.sanitize=function(n,r){var a=void 0,l=void 0,c=void 0,d=void 0,u=void 0;if(Zt=!n,Zt&&(n="\x3c!--\x3e"),"string"!==typeof n&&!he(n)){if("function"!==typeof n.toString)throw S("toString is not a function");if(n=n.toString(),"string"!==typeof n)throw S("dirty is not a string, aborting")}if(!e.isSupported){if("object"===Y(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof n)return t.toStaticHTML(n);if(he(n))return t.toStaticHTML(n.outerHTML)}return n}if(Dt||ee(r),e.removed=[],"string"===typeof n&&(Wt=!1),Wt);else if(n instanceof s)a=ce("\x3c!----\x3e"),l=a.ownerDocument.importNode(n,!0),1===l.nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Lt&&!Mt&&!Rt&&-1===n.indexOf("<"))return ot&&Kt?ot.createHTML(n):n;if(a=ce(n),!a)return Lt?null:rt}a&&Ot&&ae(a.firstChild);var h=de(Wt?n:a);while(c=h.nextNode())3===c.nodeType&&c===d||fe(c)||(c.content instanceof o&&ye(c.content),ge(c),d=c);if(d=null,Wt)return n;if(Lt){if(Ft){u=ct.call(a.ownerDocument);while(a.firstChild)u.appendChild(a.firstChild)}else u=a;return Ht&&(u=ut.call(i,u,!0)),u}var m=Rt?a.outerHTML:a.innerHTML;return Mt&&(m=_(m,ft," "),m=_(m,pt," ")),ot&&Kt?ot.createHTML(m):m},e.setConfig=function(t){ee(t),Dt=!0},e.clearConfig=function(){Qt=null,Dt=!1},e.isValidAttribute=function(t,e,i){Qt||ee({});var n=v(t),o=v(e);return pe(n,o,i)},e.addHook=function(t,e){"function"===typeof e&&(mt[t]=mt[t]||[],y(mt[t],e))},e.removeHook=function(t){mt[t]&&g(mt[t])},e.removeHooks=function(t){mt[t]&&(mt[t]=[])},e.removeAllHooks=function(){mt={}},e}var Q=Z();Q.version,Q.isSupported;const tt=Q.sanitize,et=(Q.setConfig,Q.clearConfig,Q.isValidAttribute,Q.addHook),it=Q.removeHook;Q.removeHooks,Q.removeAllHooks},"5e5c":function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));var n=i("d208"),o=i("199d"),r=i("ce14"),s=i("92db"),a=i("cb4a");function l(t,e){let i=new r["a"](e);return i.preventDefault(),{leftButton:i.leftButton,buttons:i.buttons,posx:i.posx,posy:i.posy}}class c{constructor(){this._hooks=new s["b"],this._mouseMoveEventMerger=null,this._mouseMoveCallback=null,this._onStopCallback=null}dispose(){this.stopMonitoring(!1),this._hooks.dispose()}stopMonitoring(t,e){if(!this.isMonitoring())return;this._hooks.clear(),this._mouseMoveEventMerger=null,this._mouseMoveCallback=null;const i=this._onStopCallback;this._onStopCallback=null,t&&i&&i(e)}isMonitoring(){return!!this._mouseMoveEventMerger}startMonitoring(t,e,i,s,l){if(this.isMonitoring())return;this._mouseMoveEventMerger=i,this._mouseMoveCallback=s,this._onStopCallback=l;const c=o["a"].getSameOriginWindowChain(),d=a["c"]?"pointermove":"mousemove",u="mouseup",h=c.map(t=>t.window.document),m=n["F"](t);m&&h.unshift(m);for(const o of h)this._hooks.add(n["l"](o,d,t=>{t.buttons===e?this._mouseMoveCallback(t):this.stopMonitoring(!0)},(t,e)=>this._mouseMoveEventMerger(t,e))),this._hooks.add(n["i"](o,u,t=>this.stopMonitoring(!0)));if(o["a"].hasDifferentOriginAncestor()){let t=c[c.length-1];this._hooks.add(n["i"](t.window.document,"mouseout",t=>{let e=new r["a"](t);"html"===e.target.tagName.toLowerCase()&&this.stopMonitoring(!0)})),this._hooks.add(n["i"](t.window.document,"mouseover",t=>{let e=new r["a"](t);"html"===e.target.tagName.toLowerCase()&&this.stopMonitoring(!0)})),this._hooks.add(n["i"](t.window.document.body,"mouseleave",t=>{this.stopMonitoring(!0)}))}}}},"82d0":function(t,e,i){"use strict";i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return s}));var n=i("d208");function o(t,e={}){const i=s(e);return i.textContent=t,i}function r(t,e={}){const i=s(e);return l(i,c(t,!!e.renderCodeSegments),e.actionHandler,e.renderCodeSegments),i}function s(t){const e=t.inline?"span":"div",i=document.createElement(e);return t.className&&(i.className=t.className),i}class a{constructor(t){this.source=t,this.index=0}eos(){return this.index>=this.source.length}next(){const t=this.peek();return this.advance(),t}peek(){return this.source[this.index]}advance(){this.index++}}function l(t,e,i,o){let r;if(2===e.type)r=document.createTextNode(e.content||"");else if(3===e.type)r=document.createElement("b");else if(4===e.type)r=document.createElement("i");else if(7===e.type&&o)r=document.createElement("code");else if(5===e.type&&i){const t=document.createElement("a");t.href="#",i.disposables.add(n["o"](t,"click",t=>{i.callback(String(e.index),t)})),r=t}else 8===e.type?r=document.createElement("br"):1===e.type&&(r=t);r&&t!==r&&t.appendChild(r),r&&Array.isArray(e.children)&&e.children.forEach(t=>{l(r,t,i,o)})}function c(t,e){const i={type:1,children:[]};let n=0,o=i;const r=[],s=new a(t);while(!s.eos()){let t=s.next();const i="\\"===t&&0!==u(s.peek(),e);if(i&&(t=s.next()),!i&&d(t,e)&&t===s.peek()){s.advance(),2===o.type&&(o=r.pop());const i=u(t,e);if(o.type===i||5===o.type&&6===i)o=r.pop();else{const t={type:i,children:[]};5===i&&(t.index=n,n++),o.children.push(t),r.push(o),o=t}}else if("\n"===t)2===o.type&&(o=r.pop()),o.children.push({type:8});else if(2!==o.type){const e={type:2,content:t};o.children.push(e),r.push(o),o=e}else o.content+=t}return 2===o.type&&(o=r.pop()),r.length,i}function d(t,e){return 0!==u(t,e)}function u(t,e){switch(t){case"*":return 3;case"_":return 4;case"[":return 5;case"]":return 6;case"`":return e?7:0;default:return 0}}},a60b:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));class n{constructor(t){this.domNode=t,this._maxWidth=-1,this._width=-1,this._height=-1,this._top=-1,this._left=-1,this._bottom=-1,this._right=-1,this._fontFamily="",this._fontWeight="",this._fontSize=-1,this._fontFeatureSettings="",this._lineHeight=-1,this._letterSpacing=-100,this._className="",this._display="",this._position="",this._visibility="",this._backgroundColor="",this._layerHint=!1,this._contain="none",this._boxShadow=""}setMaxWidth(t){this._maxWidth!==t&&(this._maxWidth=t,this.domNode.style.maxWidth=this._maxWidth+"px")}setWidth(t){this._width!==t&&(this._width=t,this.domNode.style.width=this._width+"px")}setHeight(t){this._height!==t&&(this._height=t,this.domNode.style.height=this._height+"px")}setTop(t){this._top!==t&&(this._top=t,this.domNode.style.top=this._top+"px")}unsetTop(){-1!==this._top&&(this._top=-1,this.domNode.style.top="")}setLeft(t){this._left!==t&&(this._left=t,this.domNode.style.left=this._left+"px")}setBottom(t){this._bottom!==t&&(this._bottom=t,this.domNode.style.bottom=this._bottom+"px")}setRight(t){this._right!==t&&(this._right=t,this.domNode.style.right=this._right+"px")}setFontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this.domNode.style.fontFamily=this._fontFamily)}setFontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.domNode.style.fontWeight=this._fontWeight)}setFontSize(t){this._fontSize!==t&&(this._fontSize=t,this.domNode.style.fontSize=this._fontSize+"px")}setFontFeatureSettings(t){this._fontFeatureSettings!==t&&(this._fontFeatureSettings=t,this.domNode.style.fontFeatureSettings=this._fontFeatureSettings)}setLineHeight(t){this._lineHeight!==t&&(this._lineHeight=t,this.domNode.style.lineHeight=this._lineHeight+"px")}setLetterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.domNode.style.letterSpacing=this._letterSpacing+"px")}setClassName(t){this._className!==t&&(this._className=t,this.domNode.className=this._className)}toggleClassName(t,e){this.domNode.classList.toggle(t,e),this._className=this.domNode.className}setDisplay(t){this._display!==t&&(this._display=t,this.domNode.style.display=this._display)}setPosition(t){this._position!==t&&(this._position=t,this.domNode.style.position=this._position)}setVisibility(t){this._visibility!==t&&(this._visibility=t,this.domNode.style.visibility=this._visibility)}setBackgroundColor(t){this._backgroundColor!==t&&(this._backgroundColor=t,this.domNode.style.backgroundColor=this._backgroundColor)}setLayerHinting(t){this._layerHint!==t&&(this._layerHint=t,this.domNode.style.transform=this._layerHint?"translate3d(0px, 0px, 0px)":"")}setBoxShadow(t){this._boxShadow!==t&&(this._boxShadow=t,this.domNode.style.boxShadow=t)}setContain(t){this._contain!==t&&(this._contain=t,this.domNode.style.contain=this._contain)}setAttribute(t,e){this.domNode.setAttribute(t,e)}removeAttribute(t){this.domNode.removeAttribute(t)}appendChild(t){this.domNode.appendChild(t.domNode)}removeChild(t){this.domNode.removeChild(t.domNode)}}function o(t){return new n(t)}},be5d:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("28e9"),o=i("d3a2"),r=i("d37f"),s=i("cb4a");function a(t){if(t.charCode){let e=String.fromCharCode(t.charCode).toUpperCase();return o["d"].fromString(e)}const e=t.keyCode;if(3===e)return 7;if(n["g"]){if(59===e)return 80;if(107===e)return 81;if(109===e)return 83;if(s["f"]&&224===e)return 57}else if(n["j"]){if(91===e)return 57;if(s["f"]&&93===e)return 57;if(!s["f"]&&92===e)return 57}return o["a"][e]||0}const l=s["f"]?256:2048,c=512,d=1024,u=s["f"]?2048:256;class h{constructor(t){this._standardKeyboardEventBrand=!0;let e=t;this.browserEvent=e,this.target=e.target,this.ctrlKey=e.ctrlKey,this.shiftKey=e.shiftKey,this.altKey=e.altKey,this.metaKey=e.metaKey,this.keyCode=a(e),this.code=e.code,this.ctrlKey=this.ctrlKey||5===this.keyCode,this.altKey=this.altKey||6===this.keyCode,this.shiftKey=this.shiftKey||4===this.keyCode,this.metaKey=this.metaKey||57===this.keyCode,this._asKeybinding=this._computeKeybinding(),this._asRuntimeKeybinding=this._computeRuntimeKeybinding()}preventDefault(){this.browserEvent&&this.browserEvent.preventDefault&&this.browserEvent.preventDefault()}stopPropagation(){this.browserEvent&&this.browserEvent.stopPropagation&&this.browserEvent.stopPropagation()}toKeybinding(){return this._asRuntimeKeybinding}equals(t){return this._asKeybinding===t}_computeKeybinding(){let t=0;5!==this.keyCode&&4!==this.keyCode&&6!==this.keyCode&&57!==this.keyCode&&(t=this.keyCode);let e=0;return this.ctrlKey&&(e|=l),this.altKey&&(e|=c),this.shiftKey&&(e|=d),this.metaKey&&(e|=u),e|=t,e}_computeRuntimeKeybinding(){let t=0;return 5!==this.keyCode&&4!==this.keyCode&&6!==this.keyCode&&57!==this.keyCode&&(t=this.keyCode),new r["d"](this.ctrlKey,this.shiftKey,this.altKey,this.metaKey,t)}}},eef1:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i("f295");class o{constructor(t,e,i){const o=t=>this.emitter.fire(t);this.emitter=new n["b"]({onFirstListenerAdd:()=>t.addEventListener(e,o,i),onLastListenerRemove:()=>t.removeEventListener(e,o,i)})}get event(){return this.emitter.event}dispose(){this.emitter.dispose()}}function r(t){return t.preventDefault(),t.stopPropagation(),t}}}]);