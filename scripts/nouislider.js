(function(m,K){typeof exports=="object"&&typeof module<"u"?K(exports):typeof define=="function"&&define.amd?define(["exports"],K):(m=typeof globalThis<"u"?globalThis:m||self,K(m.noUiSlider={}))})(void 0,function(m){"use strict";m.PipsMode=void 0,function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"}(m.PipsMode||(m.PipsMode={})),m.PipsType=void 0,function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"}(m.PipsType||(m.PipsType={}));function K(t){return X(t)&&typeof t.from=="function"}function X(t){return typeof t=="object"&&typeof t.to=="function"}function Se(t){t.parentElement.removeChild(t)}function ee(t){return t!=null}function we(t){t.preventDefault()}function Ke(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function qe(t,e){return Math.round(t/e)*e}function Ie(t,e){var n=t.getBoundingClientRect(),f=t.ownerDocument,u=f.documentElement,d=Ee(f);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(d.x=0),e?n.top+d.y-u.clientTop:n.left+d.x-u.clientLeft}function O(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function be(t,e,n){n>0&&(M(t,e),setTimeout(function(){W(t,e)},n))}function xe(t){return Math.max(Math.min(t,100),0)}function Y(t){return Array.isArray(t)?t:[t]}function Xe(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function M(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function W(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Ye(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Ee(t){var e=window.pageXOffset!==void 0,n=(t.compatMode||"")==="CSS1Compat",f=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,u=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:f,y:u}}function We(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Ge(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Je(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function te(t,e){return 100/(e-t)}function re(t,e,n){return e*100/(t[n+1]-t[n])}function Ze(t,e){return re(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function $e(t,e){return e*(t[1]-t[0])/100+t[0]}function q(t,e){for(var n=1;t>=e[n];)n+=1;return n}function Qe(t,e,n){if(n>=t.slice(-1)[0])return 100;var f=q(n,t),u=t[f-1],d=t[f],p=e[f-1],x=e[f];return p+Ze([u,d],n)/te(p,x)}function et(t,e,n){if(n>=100)return t.slice(-1)[0];var f=q(n,e),u=t[f-1],d=t[f],p=e[f-1],x=e[f];return $e([u,d],(n-p)*te(p,x))}function tt(t,e,n,f){if(f===100)return f;var u=q(f,t),d=t[u-1],p=t[u];return n?f-d>(p-d)/2?p:d:e[u-1]?t[u-1]+qe(f-t[u-1],e[u-1]):f}var Ce=function(){function t(e,n,f){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[f||!1],this.xNumSteps=[!1],this.snap=n;var u,d=[];for(Object.keys(e).forEach(function(p){d.push([Y(e[p]),p])}),d.sort(function(p,x){return p[0][0]-x[0][0]}),u=0;u<d.length;u++)this.handleEntryPoint(d[u][1],d[u][0]);for(this.xNumSteps=this.xSteps.slice(0),u=0;u<this.xNumSteps.length;u++)this.handleStepPoint(u,this.xNumSteps[u])}return t.prototype.getDistance=function(e){for(var n=[],f=0;f<this.xNumSteps.length-1;f++)n[f]=re(this.xVal,e,f);return n},t.prototype.getAbsoluteDistance=function(e,n,f){var u=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[u+1];)u++;else e===this.xPct[this.xPct.length-1]&&(u=this.xPct.length-2);!f&&e===this.xPct[u+1]&&u++,n===null&&(n=[]);var d,p=1,x=n[u],v=0,_=0,H=0,A=0;for(f?d=(e-this.xPct[u])/(this.xPct[u+1]-this.xPct[u]):d=(this.xPct[u+1]-e)/(this.xPct[u+1]-this.xPct[u]);x>0;)v=this.xPct[u+1+A]-this.xPct[u+A],n[u+A]*p+100-d*100>100?(_=v*d,p=(x-100*d)/n[u+A],d=1):(_=n[u+A]*v/100*p,p=0),f?(H=H-_,this.xPct.length+A>=1&&A--):(H=H+_,this.xPct.length-A>=1&&A++),x=n[u+A]*p;return e+H},t.prototype.toStepping=function(e){return e=Qe(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return et(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=tt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,n,f){var u=q(e,this.xPct);return(e===100||n&&e===this.xPct[u-1])&&(u=Math.max(u-1,1)),(this.xVal[u]-this.xVal[u-1])/f},t.prototype.getNearbySteps=function(e){var n=q(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Xe);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,n){var f;if(e==="min"?f=0:e==="max"?f=100:f=parseFloat(e),!O(f)||!O(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(f),this.xVal.push(n[0]);var u=Number(n[1]);f?this.xSteps.push(isNaN(u)?!1:u):isNaN(u)||(this.xSteps[0]=u),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=re([this.xVal[e],this.xVal[e+1]],n,0)/te(this.xPct[e],this.xPct[e+1]);var f=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],u=Math.ceil(Number(f.toFixed(3))-1),d=this.xVal[e]+this.xNumSteps[e]*u;this.xHighestCompleteStep[e]=d}},t}(),Pe={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},ie={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},F={tooltips:".__tooltips",aria:".__aria"};function rt(t,e){if(!O(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function it(t,e){if(!O(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function at(t,e){if(!O(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function st(t,e){if(!O(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function nt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Ce(e,t.snap||!1,t.singleStep)}function ot(t,e){if(e=Y(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function lt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function ft(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function ut(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function ct(t,e){var n=[!1],f;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(f=1;f<t.handles;f++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function ht(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function ye(t,e){if(!O(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function pt(t,e){if(!O(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function vt(t,e){var n;if(!O(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||O(e[0])||O(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var f=e[0]+e[1],u=t.spectrum.xVal[0],d=t.spectrum.xVal[t.spectrum.xVal.length-1];if(f/(d-u)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function dt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function mt(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,f=e.indexOf("drag")>=0,u=e.indexOf("fixed")>=0,d=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,x=e.indexOf("unconstrained")>=0,v=e.indexOf("drag-all")>=0,_=e.indexOf("smooth-steps")>=0;if(u){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");ye(t,t.start[1]-t.start[0])}if(x&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||d,drag:f,dragAll:v,smoothSteps:_,fixed:u,snap:d,hover:p,unconstrained:x}}function gt(t,e){if(e!==!1)if(e===!0||X(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=Y(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(f){if(typeof f!="boolean"&&!X(f))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function St(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function wt(t,e){if(!X(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function bt(t,e){if(!K(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function xt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function Et(t,e){t.documentElement=e}function Ct(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function Pt(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(n){t.cssClasses[n]=t.cssPrefix+e[n]})):t.cssClasses=e}function Ve(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Pe,format:Pe},n={step:{r:!1,t:rt},keyboardPageMultiplier:{r:!1,t:it},keyboardMultiplier:{r:!1,t:at},keyboardDefaultStep:{r:!1,t:st},start:{r:!0,t:ot},connect:{r:!0,t:ct},direction:{r:!0,t:dt},snap:{r:!1,t:lt},animate:{r:!1,t:ft},animationDuration:{r:!1,t:ut},range:{r:!0,t:nt},orientation:{r:!1,t:ht},margin:{r:!1,t:ye},limit:{r:!1,t:pt},padding:{r:!1,t:vt},behaviour:{r:!0,t:mt},ariaFormat:{r:!1,t:wt},format:{r:!1,t:bt},tooltips:{r:!1,t:gt},keyboardSupport:{r:!0,t:xt},documentElement:{r:!1,t:Et},cssPrefix:{r:!0,t:Ct},cssClasses:{r:!0,t:Pt},handleAttributes:{r:!1,t:St}},f={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:ie,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(v){if(!ee(t[v])&&f[v]===void 0){if(n[v].r)throw new Error("noUiSlider: '"+v+"' is required.");return}n[v].t(e,ee(t[v])?t[v]:f[v])}),e.pips=t.pips;var u=document.createElement("div"),d=u.style.msTransform!==void 0,p=u.style.transform!==void 0;e.transformRule=p?"transform":d?"msTransform":"webkitTransform";var x=[["left","top"],["right","bottom"]];return e.style=x[e.dir][e.ort],e}function yt(t,e,n){var f=We(),u=Je(),d=u&&Ge(),p=t,x,v,_,H,A,g=e.spectrum,z=[],P=[],L=[],ae=0,j={},B=t.ownerDocument,G=e.documentElement||B.documentElement,J=B.body,At=B.dir==="rtl"||e.ort===1?0:100;function R(r,i){var a=B.createElement("div");return i&&M(a,i),r.appendChild(a),a}function Dt(r,i){var a=R(r,e.cssClasses.origin),s=R(a,e.cssClasses.handle);if(R(s,e.cssClasses.touchArea),s.setAttribute("data-handle",String(i)),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(o){return Bt(o,i)})),e.handleAttributes!==void 0){var l=e.handleAttributes[i];Object.keys(l).forEach(function(o){s.setAttribute(o,l[o])})}return s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?M(s,e.cssClasses.handleLower):i===e.handles-1&&M(s,e.cssClasses.handleUpper),a}function De(r,i){return i?R(r,e.cssClasses.connect):!1}function kt(r,i){var a=R(i,e.cssClasses.connects);v=[],_=[],_.push(De(a,r[0]));for(var s=0;s<e.handles;s++)v.push(Dt(i,s)),L[s]=s,_.push(De(a,r[s+1]))}function Mt(r){M(r,e.cssClasses.target),e.dir===0?M(r,e.cssClasses.ltr):M(r,e.cssClasses.rtl),e.ort===0?M(r,e.cssClasses.horizontal):M(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?M(r,e.cssClasses.textDirectionRtl):M(r,e.cssClasses.textDirectionLtr),R(r,e.cssClasses.base)}function Ut(r,i){return!e.tooltips||!e.tooltips[i]?!1:R(r.firstChild,e.cssClasses.tooltip)}function ke(){return p.hasAttribute("disabled")}function se(r){var i=v[r];return i.hasAttribute("disabled")}function ne(){A&&(I("update"+F.tooltips),A.forEach(function(r){r&&Se(r)}),A=null)}function Me(){ne(),A=v.map(Ut),ce("update"+F.tooltips,function(r,i,a){if(!(!A||!e.tooltips)&&A[i]!==!1){var s=r[i];e.tooltips[i]!==!0&&(s=e.tooltips[i].to(a[i])),A[i].innerHTML=s}})}function _t(){I("update"+F.aria),ce("update"+F.aria,function(r,i,a,s,l){L.forEach(function(o){var h=v[o],c=Z(P,o,0,!0,!0,!0),b=Z(P,o,100,!0,!0,!0),w=l[o],E=String(e.ariaFormat.to(a[o]));c=g.fromStepping(c).toFixed(1),b=g.fromStepping(b).toFixed(1),w=g.fromStepping(w).toFixed(1),h.children[0].setAttribute("aria-valuemin",c),h.children[0].setAttribute("aria-valuemax",b),h.children[0].setAttribute("aria-valuenow",w),h.children[0].setAttribute("aria-valuetext",E)})})}function Lt(r){if(r.mode===m.PipsMode.Range||r.mode===m.PipsMode.Steps)return g.xVal;if(r.mode===m.PipsMode.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,a=100/i,s=[];i--;)s[i]=i*a;return s.push(100),Ue(s,r.stepped)}return r.mode===m.PipsMode.Positions?Ue(r.values,r.stepped):r.mode===m.PipsMode.Values?r.stepped?r.values.map(function(l){return g.fromStepping(g.getStep(g.toStepping(l)))}):r.values:[]}function Ue(r,i){return r.map(function(a){return g.fromStepping(i?g.getStep(a):a)})}function Ot(r){function i(w,E){return Number((w+E).toFixed(7))}var a=Lt(r),s={},l=g.xVal[0],o=g.xVal[g.xVal.length-1],h=!1,c=!1,b=0;return a=Ke(a.slice().sort(function(w,E){return w-E})),a[0]!==l&&(a.unshift(l),h=!0),a[a.length-1]!==o&&(a.push(o),c=!0),a.forEach(function(w,E){var C,S,V,U=w,D=a[E+1],k,ve,de,me,Te,ge,Ne,Be=r.mode===m.PipsMode.Steps;for(Be&&(C=g.xNumSteps[E]),C||(C=D-U),D===void 0&&(D=U),C=Math.max(C,1e-7),S=U;S<=D;S=i(S,C)){for(k=g.toStepping(S),ve=k-b,Te=ve/(r.density||1),ge=Math.round(Te),Ne=ve/ge,V=1;V<=ge;V+=1)de=b+V*Ne,s[de.toFixed(5)]=[g.fromStepping(de),0];me=a.indexOf(S)>-1?m.PipsType.LargeValue:Be?m.PipsType.SmallValue:m.PipsType.NoValue,!E&&h&&S!==D&&(me=0),S===D&&c||(s[k.toFixed(5)]=[S,me]),b=k}}),s}function Ht(r,i,a){var s,l,o=B.createElement("div"),h=(s={},s[m.PipsType.None]="",s[m.PipsType.NoValue]=e.cssClasses.valueNormal,s[m.PipsType.LargeValue]=e.cssClasses.valueLarge,s[m.PipsType.SmallValue]=e.cssClasses.valueSub,s),c=(l={},l[m.PipsType.None]="",l[m.PipsType.NoValue]=e.cssClasses.markerNormal,l[m.PipsType.LargeValue]=e.cssClasses.markerLarge,l[m.PipsType.SmallValue]=e.cssClasses.markerSub,l),b=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],w=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];M(o,e.cssClasses.pips),M(o,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(S,V){var U=V===e.cssClasses.value,D=U?b:w,k=U?h:c;return V+" "+D[e.ort]+" "+k[S]}function C(S,V,U){if(U=i?i(V,U):U,U!==m.PipsType.None){var D=R(o,!1);D.className=E(U,e.cssClasses.marker),D.style[e.style]=S+"%",U>m.PipsType.NoValue&&(D=R(o,!1),D.className=E(U,e.cssClasses.value),D.setAttribute("data-value",String(V)),D.style[e.style]=S+"%",D.innerHTML=String(a.to(V)))}}return Object.keys(r).forEach(function(S){C(S,r[S][0],r[S][1])}),o}function oe(){H&&(Se(H),H=null)}function le(r){oe();var i=Ot(r),a=r.filter,s=r.format||{to:function(l){return String(Math.round(l))}};return H=p.appendChild(Ht(i,a,s)),H}function _e(){var r=x.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||x[i]:r.height||x[i]}function T(r,i,a,s){var l=function(h){var c=zt(h,s.pageOffset,s.target||i);if(!c||ke()&&!s.doNotReject||Ye(p,e.cssClasses.tap)&&!s.doNotReject||r===f.start&&c.buttons!==void 0&&c.buttons>1||s.hover&&c.buttons)return!1;d||c.preventDefault(),c.calcPoint=c.points[e.ort],a(c,s)},o=[];return r.split(" ").forEach(function(h){i.addEventListener(h,l,d?{passive:!0}:!1),o.push([h,l])}),o}function zt(r,i,a){var s=r.type.indexOf("touch")===0,l=r.type.indexOf("mouse")===0,o=r.type.indexOf("pointer")===0,h=0,c=0;if(r.type.indexOf("MSPointer")===0&&(o=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(s){var b=function(C){var S=C.target;return S===a||a.contains(S)||r.composed&&r.composedPath().shift()===a};if(r.type==="touchstart"){var w=Array.prototype.filter.call(r.touches,b);if(w.length>1)return!1;h=w[0].pageX,c=w[0].pageY}else{var E=Array.prototype.find.call(r.changedTouches,b);if(!E)return!1;h=E.pageX,c=E.pageY}}return i=i||Ee(B),(l||o)&&(h=r.clientX+i.x,c=r.clientY+i.y),r.pageOffset=i,r.points=[h,c],r.cursor=l||o,r}function Le(r){var i=r-Ie(x,e.ort),a=i*100/_e();return a=xe(a),e.dir?100-a:a}function jt(r){var i=100,a=!1;return v.forEach(function(s,l){if(!se(l)){var o=P[l],h=Math.abs(o-r),c=h===100&&i===100,b=h<i,w=h<=i&&r>o;(b||w||c)&&(a=l,i=h)}}),a}function Rt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&fe(r,i)}function Ft(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return fe(r,i);var a=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),s=a*100/i.baseSize;Oe(a>0,s,i.locations,i.handleNumbers,i.connect)}function fe(r,i){i.handle&&(W(i.handle,e.cssClasses.active),ae-=1),i.listeners.forEach(function(a){G.removeEventListener(a[0],a[1])}),ae===0&&(W(p,e.cssClasses.drag),pe(),r.cursor&&(J.style.cursor="",J.removeEventListener("selectstart",we))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(a){N(a,P[a],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(a){y("update",a)})),i.handleNumbers.forEach(function(a){y("change",a),y("set",a),y("end",a)})}function ue(r,i){if(!i.handleNumbers.some(se)){var a;if(i.handleNumbers.length===1){var s=v[i.handleNumbers[0]];a=s.children[0],ae+=1,M(a,e.cssClasses.active)}r.stopPropagation();var l=[],o=T(f.move,G,Ft,{target:r.target,handle:a,connect:i.connect,listeners:l,startCalcPoint:r.calcPoint,baseSize:_e(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:P.slice()}),h=T(f.end,G,fe,{target:r.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers}),c=T("mouseout",G,Rt,{target:r.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers});l.push.apply(l,o.concat(h,c)),r.cursor&&(J.style.cursor=getComputedStyle(r.target).cursor,v.length>1&&M(p,e.cssClasses.drag),J.addEventListener("selectstart",we,!1)),i.handleNumbers.forEach(function(b){y("start",b)})}}function Tt(r){r.stopPropagation();var i=Le(r.calcPoint),a=jt(i);a!==!1&&(e.events.snap||be(p,e.cssClasses.tap,e.animationDuration),N(a,i,!0,!0),pe(),y("slide",a,!0),y("update",a,!0),e.events.snap?ue(r,{handleNumbers:[a]}):(y("change",a,!0),y("set",a,!0)))}function Nt(r){var i=Le(r.calcPoint),a=g.getStep(i),s=g.fromStepping(a);Object.keys(j).forEach(function(l){l.split(".")[0]==="hover"&&j[l].forEach(function(o){o.call(Q,s)})})}function Bt(r,i){if(ke()||se(i))return!1;var a=["Left","Right"],s=["Down","Up"],l=["PageDown","PageUp"],o=["Home","End"];e.dir&&!e.ort?a.reverse():e.ort&&!e.dir&&(s.reverse(),l.reverse());var h=r.key.replace("Arrow",""),c=h===l[0],b=h===l[1],w=h===s[0]||h===a[0]||c,E=h===s[1]||h===a[1]||b,C=h===o[0],S=h===o[1];if(!w&&!E&&!C&&!S)return!0;r.preventDefault();var V;if(E||w){var U=w?0:1,D=Fe(i),k=D[U];if(k===null)return!1;k===!1&&(k=g.getDefaultStep(P[i],w,e.keyboardDefaultStep)),b||c?k*=e.keyboardPageMultiplier:k*=e.keyboardMultiplier,k=Math.max(k,1e-7),k=(w?-1:1)*k,V=z[i]+k}else S?V=e.spectrum.xVal[e.spectrum.xVal.length-1]:V=e.spectrum.xVal[0];return N(i,g.toStepping(V),!0,!0),y("slide",i),y("update",i),y("change",i),y("set",i),!1}function Kt(r){r.fixed||v.forEach(function(i,a){T(f.start,i.children[0],ue,{handleNumbers:[a]})}),r.tap&&T(f.start,x,Tt,{}),r.hover&&T(f.move,x,Nt,{hover:!0}),r.drag&&_.forEach(function(i,a){if(!(i===!1||a===0||a===_.length-1)){var s=v[a-1],l=v[a],o=[i],h=[s,l],c=[a-1,a];M(i,e.cssClasses.draggable),r.fixed&&(o.push(s.children[0]),o.push(l.children[0])),r.dragAll&&(h=v,c=L),o.forEach(function(b){T(f.start,b,ue,{handles:h,handleNumbers:c,connect:i})})}})}function ce(r,i){j[r]=j[r]||[],j[r].push(i),r.split(".")[0]==="update"&&v.forEach(function(a,s){y("update",s)})}function qt(r){return r===F.aria||r===F.tooltips}function I(r){var i=r&&r.split(".")[0],a=i?r.substring(i.length):r;Object.keys(j).forEach(function(s){var l=s.split(".")[0],o=s.substring(l.length);(!i||i===l)&&(!a||a===o)&&(!qt(o)||a===o)&&delete j[s]})}function y(r,i,a){Object.keys(j).forEach(function(s){var l=s.split(".")[0];r===l&&j[s].forEach(function(o){o.call(Q,z.map(e.format.to),i,z.slice(),a||!1,P.slice(),Q)})})}function Z(r,i,a,s,l,o,h){var c;return v.length>1&&!e.events.unconstrained&&(s&&i>0&&(c=g.getAbsoluteDistance(r[i-1],e.margin,!1),a=Math.max(a,c)),l&&i<v.length-1&&(c=g.getAbsoluteDistance(r[i+1],e.margin,!0),a=Math.min(a,c))),v.length>1&&e.limit&&(s&&i>0&&(c=g.getAbsoluteDistance(r[i-1],e.limit,!1),a=Math.min(a,c)),l&&i<v.length-1&&(c=g.getAbsoluteDistance(r[i+1],e.limit,!0),a=Math.max(a,c))),e.padding&&(i===0&&(c=g.getAbsoluteDistance(0,e.padding[0],!1),a=Math.max(a,c)),i===v.length-1&&(c=g.getAbsoluteDistance(100,e.padding[1],!0),a=Math.min(a,c))),h||(a=g.getStep(a)),a=xe(a),a===r[i]&&!o?!1:a}function he(r,i){var a=e.ort;return(a?i:r)+", "+(a?r:i)}function Oe(r,i,a,s,l){var o=a.slice(),h=s[0],c=e.events.smoothSteps,b=[!r,r],w=[r,!r];s=s.slice(),r&&s.reverse(),s.length>1?s.forEach(function(C,S){var V=Z(o,C,o[C]+i,b[S],w[S],!1,c);V===!1?i=0:(i=V-o[C],o[C]=V)}):b=w=[!0];var E=!1;s.forEach(function(C,S){E=N(C,a[C]+i,b[S],w[S],!1,c)||E}),E&&(s.forEach(function(C){y("update",C),y("slide",C)}),l!=null&&y("drag",h))}function He(r,i){return e.dir?100-r-i:r}function It(r,i){P[r]=i,z[r]=g.fromStepping(i);var a=He(i,0)-At,s="translate("+he(a+"%","0")+")";v[r].style[e.transformRule]=s,ze(r),ze(r+1)}function pe(){L.forEach(function(r){var i=P[r]>50?-1:1,a=3+(v.length+i*r);v[r].style.zIndex=String(a)})}function N(r,i,a,s,l,o){return l||(i=Z(P,r,i,a,s,!1,o)),i===!1?!1:(It(r,i),!0)}function ze(r){if(_[r]){var i=0,a=100;r!==0&&(i=P[r-1]),r!==_.length-1&&(a=P[r]);var s=a-i,l="translate("+he(He(i,s)+"%","0")+")",o="scale("+he(s/100,"1")+")";_[r].style[e.transformRule]=l+" "+o}}function je(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?P[i]:r}function $(r,i,a){var s=Y(r),l=P[0]===void 0;i=i===void 0?!0:i,e.animate&&!l&&be(p,e.cssClasses.tap,e.animationDuration),L.forEach(function(c){N(c,je(s[c],c),!0,!1,a)});var o=L.length===1?0:1;if(l&&g.hasNoSize()&&(a=!0,P[0]=0,L.length>1)){var h=100/(L.length-1);L.forEach(function(c){P[c]=c*h})}for(;o<L.length;++o)L.forEach(function(c){N(c,P[c],!0,!0,a)});pe(),L.forEach(function(c){y("update",c),s[c]!==null&&i&&y("set",c)})}function Xt(r){$(e.start,r)}function Yt(r,i,a,s){if(r=Number(r),!(r>=0&&r<L.length))throw new Error("noUiSlider: invalid handle number, got: "+r);N(r,je(i,r),!0,!0,s),y("update",r),a&&y("set",r)}function Re(r){if(r===void 0&&(r=!1),r)return z.length===1?z[0]:z.slice(0);var i=z.map(e.format.to);return i.length===1?i[0]:i}function Wt(){for(I(F.aria),I(F.tooltips),Object.keys(e.cssClasses).forEach(function(r){W(p,e.cssClasses[r])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function Fe(r){var i=P[r],a=g.getNearbySteps(i),s=z[r],l=a.thisStep.step,o=null;if(e.snap)return[s-a.stepBefore.startValue||null,a.stepAfter.startValue-s||null];l!==!1&&s+l>a.stepAfter.startValue&&(l=a.stepAfter.startValue-s),s>a.thisStep.startValue?o=a.thisStep.step:a.stepBefore.step===!1?o=!1:o=s-a.stepBefore.highestStep,i===100?l=null:i===0&&(o=null);var h=g.countStepDecimals();return l!==null&&l!==!1&&(l=Number(l.toFixed(h))),o!==null&&o!==!1&&(o=Number(o.toFixed(h))),[o,l]}function Gt(){return L.map(Fe)}function Jt(r,i){var a=Re(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach(function(o){r[o]!==void 0&&(n[o]=r[o])});var l=Ve(n);s.forEach(function(o){r[o]!==void 0&&(e[o]=l[o])}),g=l.spectrum,e.margin=l.margin,e.limit=l.limit,e.padding=l.padding,e.pips?le(e.pips):oe(),e.tooltips?Me():ne(),P=[],$(ee(r.start)?r.start:a,i)}function Zt(){x=Mt(p),kt(e.connect,x),Kt(e.events),$(e.start),e.pips&&le(e.pips),e.tooltips&&Me(),_t()}Zt();var Q={destroy:Wt,steps:Gt,on:ce,off:I,get:Re,set:$,setHandle:Yt,reset:Xt,__moveHandles:function(r,i,a){Oe(r,i,P,a)},options:n,updateOptions:Jt,target:p,removePips:oe,removeTooltips:ne,getPositions:function(){return P.slice()},getTooltips:function(){return A},getOrigins:function(){return v},pips:le};return Q}function Ae(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=Ve(e),f=yt(t,n,e);return t.noUiSlider=f,f}var Vt={__spectrum:Ce,cssClasses:ie,create:Ae};m.create=Ae,m.cssClasses=ie,m.default=Vt,Object.defineProperty(m,"__esModule",{value:!0})});
/*! nouislider - 15.6.0 - 05/01/2022 */