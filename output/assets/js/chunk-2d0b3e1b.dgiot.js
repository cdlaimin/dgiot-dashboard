/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 09:40:37 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3e1b"],{"29ec":function(t,e,o){"use strict";o.r(e),o.d(e,"version",(function(){return c}));var n,i=o("164e");function a(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function r(t,e){return e=e||[0,0],i["util"].map([0,1],(function(o){var n=e[o],i=t[o]/2,a=[],r=[];return a[o]=n-i,r[o]=n+i,a[1-o]=r[1-o]=e[1-o],Math.abs(this.dataToPoint(a)[o]-this.dataToPoint(r)[o])}),this)}function p(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}a.prototype.dimensions=["lng","lat"],a.prototype.setZoom=function(t){this._zoom=t},a.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},a.prototype.setMapOffset=function(t){this._mapOffset=t},a.prototype.getBMap=function(){return this._bmap},a.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),o=this._bmap.pointToOverlayPixel(e),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},a.prototype.pointToData=function(t){var e=this._mapOffset;return t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]}),[t.lng,t.lat]},a.prototype.getViewRect=function(){var t=this._api;return new i["graphic"].BoundingRect(0,0,t.getWidth(),t.getHeight())},a.prototype.getRoamTransform=function(){return i["matrix"].create()},a.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:"bmap",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:i["util"].bind(this.dataToPoint,this),size:i["util"].bind(r,this)}}},a.dimensions=a.prototype.dimensions,a.create=function(t,e){var o,r=e.getDom();t.eachComponent("bmap",(function(t){var s,m=e.getZr().painter,l=m.getViewportRoot();if("undefined"===typeof BMap)throw new Error("BMap api is not loaded");if(n=n||p(),o)throw new Error("Only one bmap component can exist");if(!t.__bmap){var c=r.querySelector(".ec-extension-bmap");c&&(l.style.left="0px",l.style.top="0px",r.removeChild(c)),c=document.createElement("div"),c.className="ec-extension-bmap",c.style.cssText="position:absolute;width:100%;height:100%",r.appendChild(c);var d=t.get("mapOptions");d&&(d=i["util"].clone(d),delete d.mapType),s=t.__bmap=new BMap.Map(c,d);var f=new n(l);s.addOverlay(f),m.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}s=t.__bmap;var u=t.get("center"),h=t.get("zoom");if(u&&h){var y=s.getCenter(),g=s.getZoom(),v=t.centerOrZoomChanged([y.lng,y.lat],g);if(v){var _=new BMap.Point(u[0],u[1]);s.centerAndZoom(_,h)}}o=new a(s,e),o.setMapOffset(t.__mapOffset||[0,0]),o.setZoom(h),o.setCenter(u),t.coordinateSystem=o})),t.eachSeries((function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=o)}))};var s=a;function m(t,e){return t&&e&&t[0]===e[0]&&t[1]===e[1]}i["extendComponentModel"]({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var o=this.option;return!(m(t,o.center)&&e===o.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}});function l(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}i["extendComponentView"]({type:"bmap",render:function(t,e,o){var n=!0,a=t.getBMap(),r=o.getZr().painter.getViewportRoot(),p=t.coordinateSystem,s=function(e,i){if(!n){var a=r.parentNode.parentNode.parentNode,s=[-parseInt(a.style.left,10)||0,-parseInt(a.style.top,10)||0],m=r.style,l=s[0]+"px",c=s[1]+"px";m.left!==l&&(m.left=l),m.top!==c&&(m.top=c),p.setMapOffset(s),t.__mapOffset=s,o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function m(){n||o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}a.removeEventListener("moving",this._oldMoveHandler),a.removeEventListener("moveend",this._oldMoveHandler),a.removeEventListener("zoomend",this._oldZoomEndHandler),a.addEventListener("moving",s),a.addEventListener("moveend",s),a.addEventListener("zoomend",m),this._oldMoveHandler=s,this._oldZoomEndHandler=m;var c=t.get("roam");c&&"scale"!==c?a.enableDragging():a.disableDragging(),c&&"move"!==c?(a.enableScrollWheelZoom(),a.enableDoubleClickZoom(),a.enablePinchToZoom()):(a.disableScrollWheelZoom(),a.disableDoubleClickZoom(),a.disablePinchToZoom());var d=t.__mapStyle,f=t.get("mapStyle")||{},u=JSON.stringify(f);JSON.stringify(d)!==u&&(l(f)||a.setMapStyle(i["util"].clone(f)),t.__mapStyle=JSON.parse(u));var h=t.__mapStyle2,y=t.get("mapStyleV2")||{},g=JSON.stringify(y);JSON.stringify(h)!==g&&(l(y)||a.setMapStyleV2(i["util"].clone(y)),t.__mapStyle2=JSON.parse(g)),n=!1}});i["registerCoordinateSystem"]("bmap",s),i["registerAction"]({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(t,e){e.eachComponent("bmap",(function(t){var e=t.getBMap(),o=e.getCenter();t.setCenterAndZoom([o.lng,o.lat],e.getZoom())}))}));var c="1.0.0"}}]);