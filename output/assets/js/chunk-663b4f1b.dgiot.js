/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 07:36:02 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-663b4f1b"],{3737:function(n,r,t){(function(r,t){n.exports=t()})(0,(function(){return function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return n[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.m=n,t.c=r,t.p="",t(0)}([function(n,r,t){var e;e=function(n){return{clustering:t(1),regression:t(5),statistics:t(6),histogram:t(15),transform:{regression:t(18),histogram:t(21),clustering:t(22)}}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(2),e=r.dataPreprocess,o=r.normalizeDimensions,i=t(3),a=t(4),u=i.size,s=i.sumOfColumn,l=i.sum,f=i.zeros,c=(a=t(4),a.isNumber),h=Math.pow,v={SINGLE:"single",MULTIPLE:"multiple"};function p(n,r,t){var e,o,i,a,u=f(n.length,2),s=x(r,y(n,t.dimensions)),l=!0;while(l){l=!1;for(var c=0;c<n.length;c++){e=1/0,o=-1;for(var h=0;h<r;h++)i=M(n[c],s[h],t),i<e&&(e=i,o=h);u[c][0]!==o&&(l=!0),u[c][0]=o,u[c][1]=e}for(c=0;c<r;c++){a=[];for(h=0;h<u.length;h++)u[h][0]===c&&a.push(n[h]);s[c]=d(a,t)}}var v={centroids:s,clusterAssigned:u};return v}function d(n,r){for(var t,e,o=[],i=0;i<r.dimensions.length;i++){var a=r.dimensions[i];t=0;for(var u=0;u<n.length;u++)t+=n[u][a];e=t/n.length,o.push(e)}return o}function m(n,r,t){var o=(c(r)?{clusterCount:r,stepByStep:t}:r)||{clusterCount:2},i=o.clusterCount;if(!(i<2)){var a,u,h,m=w(n,o),x=m.outputType===v.SINGLE,y=e(n,{dimensions:m.dimensions}),b=f(y.length,2);if(x){a=[];var D=m.outputClusterIndexDimension;u=function(n,r){a[n][D]=r},h=function(n){return a[n][D]};for(var E=0;E<y.length;E++)a.push(y[E].slice()),F(E,0),u(E,0)}else u=function(n,r){b[n][0]=r},h=function(n){return b[n][0]};var N,C,I,A,O,z,S=d(y,m),q=[S];for(E=0;E<y.length;E++){var P=M(y[E],S,m);F(E,P)}var L=1,T={data:a,centroids:q,isEnd:!1};if(x||(T.clusterAssment=b),o.stepByStep)T.next=function(){return V(),g(T,m),T};else while(V(),!T.isEnd);return g(T,m),T}function F(n,r){b[n][1]=r}function j(n){return b[n][1]}function V(){if(L<i){var n,r,t;N=1/0;for(var e=0;e<q.length;e++){C=[],I=[];for(var o=0;o<y.length;o++)h(o)===e?C.push(y[o]):I.push(j(o));A=p(C,2,m),O=s(A.clusterAssigned,1),z=l(I),O+z<N&&(N=z+O,n=e,r=A.centroids,t=A.clusterAssigned)}for(o=0;o<t.length;o++)0===t[o][0]?t[o][0]=n:1===t[o][0]&&(t[o][0]=q.length);q[n]=r[0],q.push(r[1]);for(o=0,e=0;o<y.length&&e<t.length;o++)h(o)===n&&(u(o,t[e][0]),F(o,t[e++][1]));var a=[];if(!x){for(o=0;o<q.length;o++){a[o]=[];for(e=0;e<y.length;e++)h(e)===o&&a[o].push(y[e])}T.pointsInCluster=a}L++}else T.isEnd=!0}}function g(n,r){var t=r.outputCentroidDimensions;if(r.outputType===v.SINGLE&&null!=t)for(var e=n.data,o=n.centroids,i=0;i<e.length;i++)for(var a=e[i],u=a[r.outputClusterIndexDimension],s=o[u],l=Math.min(s.length,t.length),f=0;f<l;f++)a[t[f]]=s[f]}function x(n,r){for(var t=f(n,r.length),e=0;e<r.length;e++)for(var o=r[e],i=0;i<n;i++)t[i][e]=o.min+o.span*Math.random();return t}function M(n,r,t){for(var e=0,o=t.dimensions,i=t.rawExtents,a=0;a<o.length;a++){var u=i[a].span;if(u){var s=o[a],l=(n[s]-r[a])/u;e+=h(l,2)}}return e}function w(n,r){var t=u(n);if(t.length<1)throw new Error("The input data of clustering should be two-dimension array.");for(var e=t[1],i=[],s=0;s<e;s++)i.push(s);var l=o(r.dimensions,i),f=r.outputType||v.MULTIPLE,c=r.outputClusterIndexDimension;if(f===v.SINGLE&&!a.isNumber(c))throw new Error("outputClusterIndexDimension is required as a number.");var h=y(n,l);return{dimensions:l,rawExtents:h,outputType:f,outputClusterIndexDimension:c,outputCentroidDimensions:r.outputCentroidDimensions}}function y(n,r){for(var t=[],e=r.length,o=0;o<e;o++)t.push({min:1/0,max:-1/0});for(o=0;o<n.length;o++)for(var i=n[o],a=0;a<e;a++){var u=t[a],s=i[r[a]];u.min>s&&(u.min=s),u.max<s&&(u.max=s)}for(o=0;o<e;o++)t[o].span=t[o].max-t[o].min;return t}return{OutputType:v,hierarchicalKMeans:m}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(3),e=r.isArray,o=r.size,i=t(4),a=i.isNumber;function u(n,r){return"number"===typeof n?[n]:null==n?r:n}function s(n,r){r=r||{};var t=r.dimensions,i={};if(null!=t)for(var u=0;u<t.length;u++)i[t[u]]=!0;var s=r.toOneDimensionArray?t?t[0]:0:null;function l(n){return!t||i.hasOwnProperty(n)}if(!e(n))throw new Error("Invalid data type, you should input an array");var f=[],c=o(n);if(1===c.length)for(u=0;u<c[0];u++){var h=n[u];a(h)&&f.push(h)}else if(2===c.length)for(u=0;u<c[0];u++){for(var v=!0,p=(h=n[u],0);p<c[1];p++)l(p)&&!a(h[p])&&(v=!1);v&&f.push(null!=s?h[s]:h)}return f}function l(n){var r=n.toString(),t=r.indexOf(".");return t<0?0:r.length-1-t}return{normalizeDimensions:u,dataPreprocess:s,getPrecision:l}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=Object.prototype.toString,t=Array.prototype,e=t.map;function o(n){var r=[];while(i(n))r.push(n.length),n=n[0];return r}function i(n){return"[object Array]"===r.call(n)}function a(n,r){for(var t=[],e=0;e<n;e++){t[e]=[];for(var o=0;o<r;o++)t[e][o]=0}return t}function u(n){for(var r=0,t=0;t<n.length;t++)r+=n[t];return r}function s(n,r){for(var t=0,e=0;e<n.length;e++)t+=n[e][r];return t}function l(n,r){return n>r?1:n<r?-1:n===r?0:NaN}function f(n,r,t,e){null==t&&(t=0),null==e&&(e=n.length);while(t<e){var o=Math.floor((t+e)/2),i=l(n[o],r);if(i>0)e=o;else{if(!(i<0))return o+1;t=o+1}}return t}function c(n,r,t){if(n&&r){if(n.map&&n.map===e)return n.map(r,t);for(var o=[],i=0,a=n.length;i<a;i++)o.push(r.call(t,n[i],i,n));return o}}return{size:o,isArray:i,zeros:a,sum:u,sumOfColumn:s,ascending:l,bisect:f,map:c}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){function r(n){return n=null===n?NaN:+n,"number"===typeof n&&!isNaN(n)}function t(n){return isFinite(n)&&n===Math.round(n)}function e(n){if(0===n)return 0;var r=Math.floor(Math.log(n)/Math.LN10);return n/Math.pow(10,r)>=10&&r++,r}return{isNumber:r,isInteger:t,quantityExponent:e}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(2),e=r.dataPreprocess,o=r.normalizeDimensions,i={linear:function(n,r){for(var t=r.dimensions[0],e=r.dimensions[1],o=0,i=0,a=0,u=0,s=n.length,l=0;l<s;l++){var f=n[l];o+=f[t],i+=f[e],a+=f[t]*f[e],u+=f[t]*f[t]}for(var c=(s*a-o*i)/(s*u-o*o),h=i/s-c*o/s,v=[],p=0;p<n.length;p++){f=n[p];var d=f.slice();d[t]=f[t],d[e]=c*f[t]+h,v.push(d)}var m="y = "+Math.round(100*c)/100+"x + "+Math.round(100*h)/100;return{points:v,parameter:{gradient:c,intercept:h},expression:m}},linearThroughOrigin:function(n,r){for(var t=r.dimensions[0],e=r.dimensions[1],o=0,i=0,a=0;a<n.length;a++){var u=n[a];o+=u[t]*u[t],i+=u[t]*u[e]}for(var s=i/o,l=[],f=0;f<n.length;f++){u=n[f];var c=u.slice();c[t]=u[t],c[e]=u[t]*s,l.push(c)}var h="y = "+Math.round(100*s)/100+"x";return{points:l,parameter:{gradient:s},expression:h}},exponential:function(n,r){for(var t=r.dimensions[0],e=r.dimensions[1],o=0,i=0,a=0,u=0,s=0,l=0;l<n.length;l++){var f=n[l];f[t],o+=f[e],s+=f[t]*f[e],i+=f[t]*f[t]*f[e],a+=f[e]*Math.log(f[e]),u+=f[t]*f[e]*Math.log(f[e])}for(var c=o*i-s*s,h=Math.pow(Math.E,(i*a-s*u)/c),v=(o*u-s*a)/c,p=[],d=0;d<n.length;d++){f=n[d];var m=f.slice();m[t]=f[t],m[e]=h*Math.pow(Math.E,v*f[t]),p.push(m)}var g="y = "+Math.round(100*h)/100+"e^("+Math.round(100*v)/100+"x)";return{points:p,parameter:{coefficient:h,index:v},expression:g}},logarithmic:function(n,r){for(var t=r.dimensions[0],e=r.dimensions[1],o=0,i=0,a=0,u=0,s=0;s<n.length;s++){var l=n[s];o+=Math.log(l[t]),i+=l[e]*Math.log(l[t]),a+=l[e],u+=Math.pow(Math.log(l[t]),2)}for(var f=(s*i-a*o)/(s*u-o*o),c=(a-f*o)/s,h=[],v=0;v<n.length;v++){l=n[v];var p=l.slice();p[t]=l[t],p[e]=f*Math.log(l[t])+c,h.push(p)}var d="y = "+Math.round(100*c)/100+" + "+Math.round(100*f)/100+"ln(x)";return{points:h,parameter:{gradient:f,intercept:c},expression:d}},polynomial:function(n,r){var t=r.dimensions[0],e=r.dimensions[1],o=r.order;null==o&&(o=2);for(var i=[],u=[],s=o+1,l=0;l<s;l++){for(var f=0,c=0;c<n.length;c++){var h=n[c];f+=h[e]*Math.pow(h[t],l)}u.push(f);for(var v=[],p=0;p<s;p++){for(var d=0,m=0;m<n.length;m++)d+=Math.pow(n[m][t],l+p);v.push(d)}i.push(v)}i.push(u);var g=a(i,s),x=[];for(l=0;l<n.length;l++){var M=0;for(h=n[l],c=0;c<g.length;c++)M+=g[c]*Math.pow(h[t],c);var w=h.slice();w[t]=h[t],w[e]=M,x.push(w)}var y="y = ";for(l=g.length-1;l>=0;l--)y+=l>1?Math.round(g[l]*Math.pow(10,l+1))/Math.pow(10,l+1)+"x^"+l+" + ":1===l?Math.round(100*g[l])/100+"x + ":Math.round(100*g[l])/100;return{points:x,parameter:g,expression:y}}};function a(n,r){for(var t=0;t<n.length-1;t++){for(var e=t,o=t+1;o<n.length-1;o++)Math.abs(n[t][o])>Math.abs(n[t][e])&&(e=o);for(var i=t;i<n.length;i++){var a=n[i][t];n[i][t]=n[i][e],n[i][e]=a}for(var u=t+1;u<n.length-1;u++)for(var s=n.length-1;s>=t;s--)n[s][u]-=n[s][t]/n[t][t]*n[t][u]}var l=new Array(r),f=n.length-1;for(o=n.length-2;o>=0;o--){for(a=0,t=o+1;t<n.length-1;t++)a+=n[t][o]*l[t];l[o]=(n[f][o]-a)/n[o][o]}return l}var u=function(n,r,t){var a="number"===typeof t?{order:t}:t||{},u=o(a.dimensions,[0,1]),s=e(r,{dimensions:u}),l=i[n](s,{order:a.order,dimensions:u}),f=u[0];return l.points.sort((function(n,r){return n[f]-r[f]})),l};return u}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r={};return r.max=t(7),r.deviation=t(8),r.mean=t(10),r.median=t(12),r.min=t(14),r.quantile=t(13),r.sampleVariance=t(9),r.sum=t(11),r}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(4),e=r.isNumber;function o(n){for(var r=-1/0,t=0;t<n.length;t++)e(n[t])&&n[t]>r&&(r=n[t]);return r}return o}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(9);return function(n){var t=r(n);return t?Math.sqrt(t):t}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(4),e=r.isNumber,o=t(10);function i(n){var r=n.length;if(!r||r<2)return 0;if(n.length>=2){for(var t,i=o(n),a=0,u=0;u<n.length;u++)e(n[u])&&(t=n[u]-i,a+=t*t);return a/(n.length-1)}}return i}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(11);function e(n){var t=n.length;return t?r(n)/n.length:0}return e}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(4),e=r.isNumber;function o(n){var r=n.length;if(!r)return 0;for(var t=0,o=0;o<r;o++)e(n[o])&&(t+=n[o]);return t}return o}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(13);function e(n){return r(n,.5)}return e}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){return function(n,r){var t=n.length;if(!t)return 0;if(r<=0||t<2)return n[0];if(r>=1)return n[t-1];var e=(t-1)*r,o=Math.floor(e),i=n[o],a=n[o+1];return i+(a-i)*(e-o)}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(4),e=r.isNumber;function o(n){for(var r=1/0,t=0;t<n.length;t++)e(n[t])&&n[t]<r&&(r=n[t]);return r}return o}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(7),e=t(14),o=t(13),i=t(8),a=t(2),u=a.dataPreprocess,s=a.normalizeDimensions,l=t(3),f=l.ascending,c=l.map,h=t(16),v=l.bisect,p=t(17);function d(n,t){for(var o="string"===typeof t?{method:t}:t||{},i=null==o.method?m.squareRoot:m[o.method],a=s(o.dimensions),l=u(n,{dimensions:a,toOneDimensionArray:!0}),f=r(l),d=e(l),g=i(l,d,f),x=p(d,f,g),M=x.step,w=x.toFixedPrecision,y=h(+(Math.ceil(d/M)*M).toFixed(w),+(Math.floor(f/M)*M).toFixed(w),M,w),b=y.length,D=new Array(b+1),E=0;E<=b;E++)D[E]={},D[E].sample=[],D[E].x0=E>0?y[E-1]:y[E]-d===M?d:y[E]-M,D[E].x1=E<b?y[E]:f-y[E-1]===M?f:y[E-1]+M;for(E=0;E<l.length;E++)d<=l[E]&&l[E]<=f&&D[v(y,l[E],0,b)].sample.push(l[E]);n=c(D,(function(n){return[+((n.x0+n.x1)/2).toFixed(w),n.sample.length,n.x0,n.x1,n.x0+" - "+n.x1]}));var N=c(D,(function(n){return[n.x0,n.x1,n.sample.length]}));return{bins:D,data:n,customData:N}}var m={squareRoot:function(n){var r=Math.ceil(Math.sqrt(n.length));return r>50?50:r},scott:function(n,r,t){return Math.ceil((t-r)/(3.5*i(n)*Math.pow(n.length,-1/3)))},freedmanDiaconis:function(n,r,t){return n.sort(f),Math.ceil((t-r)/(2*(o(n,.75)-o(n,.25))*Math.pow(n.length,-1/3)))},sturges:function(n){return Math.ceil(Math.log(n.length)/Math.LN2)+1}};return d}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(2),e=r.getPrecision;return function(n,r,t,o){var i=arguments.length;i<2?(r=n,n=0,t=1):i<3?t=1:i<4?(t=+t,o=e(t)):o=+o;for(var a=Math.ceil(((r-n)/t).toFixed(o)),u=new Array(a+1),s=0;s<a+1;s++)u[s]=+(n+s*t).toFixed(o);return u}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(4);return function(n,t,e){var o=Math.abs(t-n)/e,i=r.quantityExponent(o),a=Math.pow(10,i),u=o/a;u>=Math.sqrt(50)?a*=10:u>=Math.sqrt(10)?a*=5:u>=Math.sqrt(2)&&(a*=2);var s=i<0?-i:0,l=+(t>=n?a:-a).toFixed(s);return{step:l,toFixedPrecision:s}}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(5),e=t(19),o=2;return{type:"ecStat:regression",transform:function(n){var t,i=n.upstream,a=n.config||{},u=a.method||"linear",s=r(u,i.cloneRawData(),{order:a.order,dimensions:e.normalizeExistingDimensions(n,a.dimensions)}),l=s.points,f=a.formulaOn;if(null==f&&(f="end"),"none"!==f){for(var c=0;c<l.length;c++)l[c][o]="start"===f&&0===c||"all"===f||"end"===f&&c===l.length-1?s.expression:"";t=i.cloneAllDimensionInfo(),t[o]={}}return[{dimensions:t,data:l}]}}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(3),e=t(4),o=t(20);function i(n,t){if(null!=t){var e=n.upstream;if(r.isArray(t)){for(var o=[],i=0;i<t.length;i++){var a=e.getDimensionInfo(t[i]);u(a,t[i]),o[i]=a.index}return o}a=e.getDimensionInfo(t);return u(a,t),a.index}function u(n,r){if(!n)throw new Error("Can not find dimension by "+r)}}function a(n){if(r.isArray(n)){for(var t=[],i=[],a=0;a<n.length;a++){var u=s(n[a]);t.push(u.name),i.push(u.index)}return{name:t,index:i}}if(null!=n)return s(n);function s(n){if(e.isNumber(n))return{index:n};if(o.isObject(n)&&e.isNumber(n.index))return n;throw new Error("Illegle new dimensions config. Expect `{ name: string, index: number }`.")}}return{normalizeExistingDimensions:i,normalizeNewDimensions:a}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){function r(n,r){if(Object.assign)Object.assign(n,r);else for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);return n}function t(n){const r=typeof n;return"function"===r||!!n&&"object"===r}return{extend:r,isObject:t}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(15),e=t(19);return{type:"ecStat:histogram",transform:function(n){var t=n.upstream,o=n.config||{},i=r(t.cloneRawData(),{method:o.method,dimensions:e.normalizeExistingDimensions(n,o.dimensions)});return[{dimensions:["MeanOfV0V1","VCount","V0","V1","DisplayableName"],data:i.data},{data:i.customData}]}}}.call(r,t,r,n),void 0===e||(n.exports=e)},function(n,r,t){var e;e=function(n){var r=t(1),e=t(4),o=t(19),i=e.isNumber;return{type:"ecStat:clustering",transform:function(n){var t=n.upstream,e=n.config||{},a=e.clusterCount;if(!i(a)||a<=0)throw new Error('config param "clusterCount" need to be specified as an interger greater than 1.');if(1===a)return[{},{data:[]}];var u=o.normalizeNewDimensions(e.outputClusterIndexDimension),s=o.normalizeNewDimensions(e.outputCentroidDimensions);if(null==u)throw new Error("outputClusterIndexDimension is required as a number.");for(var l=r.hierarchicalKMeans(t.cloneRawData(),{clusterCount:a,stepByStep:!1,dimensions:o.normalizeExistingDimensions(n,e.dimensions),outputType:r.OutputType.SINGLE,outputClusterIndexDimension:u.index,outputCentroidDimensions:(s||{}).index}),f=t.cloneAllDimensionInfo(),c=[],h=0;h<f.length;h++){var v=f[h];c.push(v.name)}if(c[u.index]=u.name,s)for(h=0;h<s.index.length;h++)null!=s.name[h]&&(c[s.index[h]]=s.name[h]);return[{dimensions:c,data:l.data},{data:l.centroids}]}}}.call(r,t,r,n),void 0===e||(n.exports=e)}])}))},a924:function(n,r,t){n.exports=t("3737")}}]);