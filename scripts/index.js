(function(d,z){typeof exports=="object"&&typeof module<"u"?z(exports):typeof define=="function"&&define.amd?define(["exports"],z):(d=typeof globalThis<"u"?globalThis:d||self,z(d.noUiSlider={}))})(void 0,function(d){"use strict";d.PipsMode=void 0,function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"}(d.PipsMode||(d.PipsMode={})),d.PipsType=void 0,function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"}(d.PipsType||(d.PipsType={}));function z(t){return A(t)&&typeof t.from=="function"}function A(t){return typeof t=="object"&&typeof t.to=="function"}function q(t){t.parentElement.removeChild(t)}function T(t){return t!=null}function K(t){t.preventDefault()}function te(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function R(t,e){return Math.round(t/e)*e}function L(t,e){var s=t.getBoundingClientRect(),u=t.ownerDocument,c=u.documentElement,m=Ce(u);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(m.x=0),e?s.top+m.y-c.clientTop:s.left+m.x-c.clientLeft}function D(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function W(t,e,s){s>0&&(U(t,e),setTimeout(function(){re(t,e)},s))}function G(t){return Math.max(Math.min(t,100),0)}function Z(t){return Array.isArray(t)?t:[t]}function $e(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function U(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function re(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function We(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Ce(t){var e=window.pageXOffset!==void 0,s=(t.compatMode||"")==="CSS1Compat",u=e?window.pageXOffset:s?t.documentElement.scrollLeft:t.body.scrollLeft,c=e?window.pageYOffset:s?t.documentElement.scrollTop:t.body.scrollTop;return{x:u,y:c}}function Xe(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Ye(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Ge(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function le(t,e){return 100/(e-t)}function ue(t,e,s){return e*100/(t[s+1]-t[s])}function Je(t,e){return ue(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Ze(t,e){return e*(t[1]-t[0])/100+t[0]}function Q(t,e){for(var s=1;t>=e[s];)s+=1;return s}function Qe(t,e,s){if(s>=t.slice(-1)[0])return 100;var u=Q(s,t),c=t[u-1],m=t[u],v=e[u-1],E=e[u];return v+Je([c,m],s)/le(v,E)}function et(t,e,s){if(s>=100)return t.slice(-1)[0];var u=Q(s,e),c=t[u-1],m=t[u],v=e[u-1],E=e[u];return Ze([c,m],(s-v)*le(v,E))}function tt(t,e,s,u){if(u===100)return u;var c=Q(u,t),m=t[c-1],v=t[c];return s?u-m>(v-m)/2?v:m:e[c-1]?t[c-1]+R(u-t[c-1],e[c-1]):u}var ye=function(){function t(e,s,u){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=s;var c,m=[];for(Object.keys(e).forEach(function(v){m.push([Z(e[v]),v])}),m.sort(function(v,E){return v[0][0]-E[0][0]}),c=0;c<m.length;c++)this.handleEntryPoint(m[c][1],m[c][0]);for(this.xNumSteps=this.xSteps.slice(0),c=0;c<this.xNumSteps.length;c++)this.handleStepPoint(c,this.xNumSteps[c])}return t.prototype.getDistance=function(e){for(var s=[],u=0;u<this.xNumSteps.length-1;u++)s[u]=ue(this.xVal,e,u);return s},t.prototype.getAbsoluteDistance=function(e,s,u){var c=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[c+1];)c++;else e===this.xPct[this.xPct.length-1]&&(c=this.xPct.length-2);!u&&e===this.xPct[c+1]&&c++,s===null&&(s=[]);var m,v=1,E=s[c],p=0,H=0,F=0,k=0;for(u?m=(e-this.xPct[c])/(this.xPct[c+1]-this.xPct[c]):m=(this.xPct[c+1]-e)/(this.xPct[c+1]-this.xPct[c]);E>0;)p=this.xPct[c+1+k]-this.xPct[c+k],s[c+k]*v+100-m*100>100?(H=p*m,v=(E-100*m)/s[c+k],m=1):(H=s[c+k]*p/100*v,v=0),u?(F=F-H,this.xPct.length+k>=1&&k--):(F=F+H,this.xPct.length-k>=1&&k++),E=s[c+k]*v;return e+F},t.prototype.toStepping=function(e){return e=Qe(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return et(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=tt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,s,u){var c=Q(e,this.xPct);return(e===100||s&&e===this.xPct[c-1])&&(c=Math.max(c-1,1)),(this.xVal[c]-this.xVal[c-1])/u},t.prototype.getNearbySteps=function(e){var s=Q(e,this.xPct);return{stepBefore:{startValue:this.xVal[s-2],step:this.xNumSteps[s-2],highestStep:this.xHighestCompleteStep[s-2]},thisStep:{startValue:this.xVal[s-1],step:this.xNumSteps[s-1],highestStep:this.xHighestCompleteStep[s-1]},stepAfter:{startValue:this.xVal[s],step:this.xNumSteps[s],highestStep:this.xHighestCompleteStep[s]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map($e);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,s){var u;if(e==="min"?u=0:e==="max"?u=100:u=parseFloat(e),!D(u)||!D(s[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(u),this.xVal.push(s[0]);var c=Number(s[1]);u?this.xSteps.push(isNaN(c)?!1:c):isNaN(c)||(this.xSteps[0]=c),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,s){if(s){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=ue([this.xVal[e],this.xVal[e+1]],s,0)/le(this.xPct[e],this.xPct[e+1]);var u=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],c=Math.ceil(Number(u.toFixed(3))-1),m=this.xVal[e]+this.xNumSteps[e]*c;this.xHighestCompleteStep[e]=m}},t}(),ke={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},ce={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},$={tooltips:".__tooltips",aria:".__aria"};function rt(t,e){if(!D(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function it(t,e){if(!D(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function at(t,e){if(!D(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function nt(t,e){if(!D(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function st(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new ye(e,t.snap||!1,t.singleStep)}function ot(t,e){if(e=Z(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function lt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function ut(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function ct(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function ft(t,e){var s=[!1],u;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(u=1;u<t.handles;u++)s.push(e);s.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");s=e}t.connect=s}function dt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ve(t,e){if(!D(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function ht(t,e){if(!D(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function vt(t,e){var s;if(!D(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||D(e[0])||D(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],s=0;s<t.spectrum.xNumSteps.length-1;s++)if(t.padding[0][s]<0||t.padding[1][s]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var u=e[0]+e[1],c=t.spectrum.xVal[0],m=t.spectrum.xVal[t.spectrum.xVal.length-1];if(u/(m-c)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function pt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function mt(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var s=e.indexOf("tap")>=0,u=e.indexOf("drag")>=0,c=e.indexOf("fixed")>=0,m=e.indexOf("snap")>=0,v=e.indexOf("hover")>=0,E=e.indexOf("unconstrained")>=0,p=e.indexOf("drag-all")>=0,H=e.indexOf("smooth-steps")>=0;if(c){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ve(t,t.start[1]-t.start[0])}if(E&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:s||m,drag:u,dragAll:p,smoothSteps:H,fixed:c,snap:m,hover:v,unconstrained:E}}function gt(t,e){if(e!==!1)if(e===!0||A(e)){t.tooltips=[];for(var s=0;s<t.handles;s++)t.tooltips.push(e)}else{if(e=Z(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(u){if(typeof u!="boolean"&&!A(u))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function St(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function bt(t,e){if(!A(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function wt(t,e){if(!z(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function Et(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function xt(t,e){t.documentElement=e}function Pt(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function _t(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(s){t.cssClasses[s]=t.cssPrefix+e[s]})):t.cssClasses=e}function Ae(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:ke,format:ke},s={step:{r:!1,t:rt},keyboardPageMultiplier:{r:!1,t:it},keyboardMultiplier:{r:!1,t:at},keyboardDefaultStep:{r:!1,t:nt},start:{r:!0,t:ot},connect:{r:!0,t:ft},direction:{r:!0,t:pt},snap:{r:!1,t:lt},animate:{r:!1,t:ut},animationDuration:{r:!1,t:ct},range:{r:!0,t:st},orientation:{r:!1,t:dt},margin:{r:!1,t:Ve},limit:{r:!1,t:ht},padding:{r:!1,t:vt},behaviour:{r:!0,t:mt},ariaFormat:{r:!1,t:bt},format:{r:!1,t:wt},tooltips:{r:!1,t:gt},keyboardSupport:{r:!0,t:Et},documentElement:{r:!1,t:xt},cssPrefix:{r:!0,t:Pt},cssClasses:{r:!0,t:_t},handleAttributes:{r:!1,t:St}},u={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:ce,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(s).forEach(function(p){if(!T(t[p])&&u[p]===void 0){if(s[p].r)throw new Error("noUiSlider: '"+p+"' is required.");return}s[p].t(e,T(t[p])?t[p]:u[p])}),e.pips=t.pips;var c=document.createElement("div"),m=c.style.msTransform!==void 0,v=c.style.transform!==void 0;e.transformRule=v?"transform":m?"msTransform":"webkitTransform";var E=[["left","top"],["right","bottom"]];return e.style=E[e.dir][e.ort],e}function Ct(t,e,s){var u=Xe(),c=Ge(),m=c&&Ye(),v=t,E,p,H,F,k,g=e.spectrum,N=[],_=[],j=[],fe=0,I={},J=t.ownerDocument,ie=e.documentElement||J.documentElement,ae=J.body,kt=J.dir==="rtl"||e.ort===1?0:100;function B(r,i){var a=J.createElement("div");return i&&U(a,i),r.appendChild(a),a}function Vt(r,i){var a=B(r,e.cssClasses.origin),n=B(a,e.cssClasses.handle);if(B(n,e.cssClasses.touchArea),n.setAttribute("data-handle",String(i)),e.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(o){return Nt(o,i)})),e.handleAttributes!==void 0){var l=e.handleAttributes[i];Object.keys(l).forEach(function(o){n.setAttribute(o,l[o])})}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?U(n,e.cssClasses.handleLower):i===e.handles-1&&U(n,e.cssClasses.handleUpper),a}function De(r,i){return i?B(r,e.cssClasses.connect):!1}function At(r,i){var a=B(i,e.cssClasses.connects);p=[],H=[],H.push(De(a,r[0]));for(var n=0;n<e.handles;n++)p.push(Vt(i,n)),j[n]=n,H.push(De(a,r[n+1]))}function Lt(r){U(r,e.cssClasses.target),e.dir===0?U(r,e.cssClasses.ltr):U(r,e.cssClasses.rtl),e.ort===0?U(r,e.cssClasses.horizontal):U(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?U(r,e.cssClasses.textDirectionRtl):U(r,e.cssClasses.textDirectionLtr),B(r,e.cssClasses.base)}function Dt(r,i){return!e.tooltips||!e.tooltips[i]?!1:B(r.firstChild,e.cssClasses.tooltip)}function Me(){return v.hasAttribute("disabled")}function de(r){var i=p[r];return i.hasAttribute("disabled")}function he(){k&&(ee("update"+$.tooltips),k.forEach(function(r){r&&q(r)}),k=null)}function Ue(){he(),k=p.map(Dt),Se("update"+$.tooltips,function(r,i,a){if(!(!k||!e.tooltips)&&k[i]!==!1){var n=r[i];e.tooltips[i]!==!0&&(n=e.tooltips[i].to(a[i])),k[i].innerHTML=n}})}function Mt(){ee("update"+$.aria),Se("update"+$.aria,function(r,i,a,n,l){j.forEach(function(o){var h=p[o],f=ne(_,o,0,!0,!0,!0),w=ne(_,o,100,!0,!0,!0),b=l[o],x=String(e.ariaFormat.to(a[o]));f=g.fromStepping(f).toFixed(1),w=g.fromStepping(w).toFixed(1),b=g.fromStepping(b).toFixed(1),h.children[0].setAttribute("aria-valuemin",f),h.children[0].setAttribute("aria-valuemax",w),h.children[0].setAttribute("aria-valuenow",b),h.children[0].setAttribute("aria-valuetext",x)})})}function Ut(r){if(r.mode===d.PipsMode.Range||r.mode===d.PipsMode.Steps)return g.xVal;if(r.mode===d.PipsMode.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,a=100/i,n=[];i--;)n[i]=i*a;return n.push(100),Oe(n,r.stepped)}return r.mode===d.PipsMode.Positions?Oe(r.values,r.stepped):r.mode===d.PipsMode.Values?r.stepped?r.values.map(function(l){return g.fromStepping(g.getStep(g.toStepping(l)))}):r.values:[]}function Oe(r,i){return r.map(function(a){return g.fromStepping(i?g.getStep(a):a)})}function Ot(r){function i(b,x){return Number((b+x).toFixed(7))}var a=Ut(r),n={},l=g.xVal[0],o=g.xVal[g.xVal.length-1],h=!1,f=!1,w=0;return a=te(a.slice().sort(function(b,x){return b-x})),a[0]!==l&&(a.unshift(l),h=!0),a[a.length-1]!==o&&(a.push(o),f=!0),a.forEach(function(b,x){var P,S,y,O=b,V=a[x+1],M,Ee,xe,Pe,Ie,_e,Be,Ke=r.mode===d.PipsMode.Steps;for(Ke&&(P=g.xNumSteps[x]),P||(P=V-O),V===void 0&&(V=O),P=Math.max(P,1e-7),S=O;S<=V;S=i(S,P)){for(M=g.toStepping(S),Ee=M-w,Ie=Ee/(r.density||1),_e=Math.round(Ie),Be=Ee/_e,y=1;y<=_e;y+=1)xe=w+y*Be,n[xe.toFixed(5)]=[g.fromStepping(xe),0];Pe=a.indexOf(S)>-1?d.PipsType.LargeValue:Ke?d.PipsType.SmallValue:d.PipsType.NoValue,!x&&h&&S!==V&&(Pe=0),S===V&&f||(n[M.toFixed(5)]=[S,Pe]),w=M}}),n}function Ht(r,i,a){var n,l,o=J.createElement("div"),h=(n={},n[d.PipsType.None]="",n[d.PipsType.NoValue]=e.cssClasses.valueNormal,n[d.PipsType.LargeValue]=e.cssClasses.valueLarge,n[d.PipsType.SmallValue]=e.cssClasses.valueSub,n),f=(l={},l[d.PipsType.None]="",l[d.PipsType.NoValue]=e.cssClasses.markerNormal,l[d.PipsType.LargeValue]=e.cssClasses.markerLarge,l[d.PipsType.SmallValue]=e.cssClasses.markerSub,l),w=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],b=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];U(o,e.cssClasses.pips),U(o,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function x(S,y){var O=y===e.cssClasses.value,V=O?w:b,M=O?h:f;return y+" "+V[e.ort]+" "+M[S]}function P(S,y,O){if(O=i?i(y,O):O,O!==d.PipsType.None){var V=B(o,!1);V.className=x(O,e.cssClasses.marker),V.style[e.style]=S+"%",O>d.PipsType.NoValue&&(V=B(o,!1),V.className=x(O,e.cssClasses.value),V.setAttribute("data-value",String(y)),V.style[e.style]=S+"%",V.innerHTML=String(a.to(y)))}}return Object.keys(r).forEach(function(S){P(S,r[S][0],r[S][1])}),o}function ve(){F&&(q(F),F=null)}function pe(r){ve();var i=Ot(r),a=r.filter,n=r.format||{to:function(l){return String(Math.round(l))}};return F=v.appendChild(Ht(i,a,n)),F}function He(){var r=E.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||E[i]:r.height||E[i]}function X(r,i,a,n){var l=function(h){var f=zt(h,n.pageOffset,n.target||i);if(!f||Me()&&!n.doNotReject||We(v,e.cssClasses.tap)&&!n.doNotReject||r===u.start&&f.buttons!==void 0&&f.buttons>1||n.hover&&f.buttons)return!1;m||f.preventDefault(),f.calcPoint=f.points[e.ort],a(f,n)},o=[];return r.split(" ").forEach(function(h){i.addEventListener(h,l,m?{passive:!0}:!1),o.push([h,l])}),o}function zt(r,i,a){var n=r.type.indexOf("touch")===0,l=r.type.indexOf("mouse")===0,o=r.type.indexOf("pointer")===0,h=0,f=0;if(r.type.indexOf("MSPointer")===0&&(o=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(n){var w=function(P){var S=P.target;return S===a||a.contains(S)||r.composed&&r.composedPath().shift()===a};if(r.type==="touchstart"){var b=Array.prototype.filter.call(r.touches,w);if(b.length>1)return!1;h=b[0].pageX,f=b[0].pageY}else{var x=Array.prototype.find.call(r.changedTouches,w);if(!x)return!1;h=x.pageX,f=x.pageY}}return i=i||Ce(J),(l||o)&&(h=r.clientX+i.x,f=r.clientY+i.y),r.pageOffset=i,r.points=[h,f],r.cursor=l||o,r}function ze(r){var i=r-L(E,e.ort),a=i*100/He();return a=G(a),e.dir?100-a:a}function jt(r){var i=100,a=!1;return p.forEach(function(n,l){if(!de(l)){var o=_[l],h=Math.abs(o-r),f=h===100&&i===100,w=h<i,b=h<=i&&r>o;(w||b||f)&&(a=l,i=h)}}),a}function qt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&me(r,i)}function Rt(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return me(r,i);var a=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),n=a*100/i.baseSize;je(a>0,n,i.locations,i.handleNumbers,i.connect)}function me(r,i){i.handle&&(re(i.handle,e.cssClasses.active),fe-=1),i.listeners.forEach(function(a){ie.removeEventListener(a[0],a[1])}),fe===0&&(re(v,e.cssClasses.drag),we(),r.cursor&&(ae.style.cursor="",ae.removeEventListener("selectstart",K))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(a){Y(a,_[a],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(a){C("update",a)})),i.handleNumbers.forEach(function(a){C("change",a),C("set",a),C("end",a)})}function ge(r,i){if(!i.handleNumbers.some(de)){var a;if(i.handleNumbers.length===1){var n=p[i.handleNumbers[0]];a=n.children[0],fe+=1,U(a,e.cssClasses.active)}r.stopPropagation();var l=[],o=X(u.move,ie,Rt,{target:r.target,handle:a,connect:i.connect,listeners:l,startCalcPoint:r.calcPoint,baseSize:He(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:_.slice()}),h=X(u.end,ie,me,{target:r.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers}),f=X("mouseout",ie,qt,{target:r.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers});l.push.apply(l,o.concat(h,f)),r.cursor&&(ae.style.cursor=getComputedStyle(r.target).cursor,p.length>1&&U(v,e.cssClasses.drag),ae.addEventListener("selectstart",K,!1)),i.handleNumbers.forEach(function(w){C("start",w)})}}function Ft(r){r.stopPropagation();var i=ze(r.calcPoint),a=jt(i);a!==!1&&(e.events.snap||W(v,e.cssClasses.tap,e.animationDuration),Y(a,i,!0,!0),we(),C("slide",a,!0),C("update",a,!0),e.events.snap?ge(r,{handleNumbers:[a]}):(C("change",a,!0),C("set",a,!0)))}function Tt(r){var i=ze(r.calcPoint),a=g.getStep(i),n=g.fromStepping(a);Object.keys(I).forEach(function(l){l.split(".")[0]==="hover"&&I[l].forEach(function(o){o.call(oe,n)})})}function Nt(r,i){if(Me()||de(i))return!1;var a=["Left","Right"],n=["Down","Up"],l=["PageDown","PageUp"],o=["Home","End"];e.dir&&!e.ort?a.reverse():e.ort&&!e.dir&&(n.reverse(),l.reverse());var h=r.key.replace("Arrow",""),f=h===l[0],w=h===l[1],b=h===n[0]||h===a[0]||f,x=h===n[1]||h===a[1]||w,P=h===o[0],S=h===o[1];if(!b&&!x&&!P&&!S)return!0;r.preventDefault();var y;if(x||b){var O=b?0:1,V=Ne(i),M=V[O];if(M===null)return!1;M===!1&&(M=g.getDefaultStep(_[i],b,e.keyboardDefaultStep)),w||f?M*=e.keyboardPageMultiplier:M*=e.keyboardMultiplier,M=Math.max(M,1e-7),M=(b?-1:1)*M,y=N[i]+M}else S?y=e.spectrum.xVal[e.spectrum.xVal.length-1]:y=e.spectrum.xVal[0];return Y(i,g.toStepping(y),!0,!0),C("slide",i),C("update",i),C("change",i),C("set",i),!1}function It(r){r.fixed||p.forEach(function(i,a){X(u.start,i.children[0],ge,{handleNumbers:[a]})}),r.tap&&X(u.start,E,Ft,{}),r.hover&&X(u.move,E,Tt,{hover:!0}),r.drag&&H.forEach(function(i,a){if(!(i===!1||a===0||a===H.length-1)){var n=p[a-1],l=p[a],o=[i],h=[n,l],f=[a-1,a];U(i,e.cssClasses.draggable),r.fixed&&(o.push(n.children[0]),o.push(l.children[0])),r.dragAll&&(h=p,f=j),o.forEach(function(w){X(u.start,w,ge,{handles:h,handleNumbers:f,connect:i})})}})}function Se(r,i){I[r]=I[r]||[],I[r].push(i),r.split(".")[0]==="update"&&p.forEach(function(a,n){C("update",n)})}function Bt(r){return r===$.aria||r===$.tooltips}function ee(r){var i=r&&r.split(".")[0],a=i?r.substring(i.length):r;Object.keys(I).forEach(function(n){var l=n.split(".")[0],o=n.substring(l.length);(!i||i===l)&&(!a||a===o)&&(!Bt(o)||a===o)&&delete I[n]})}function C(r,i,a){Object.keys(I).forEach(function(n){var l=n.split(".")[0];r===l&&I[n].forEach(function(o){o.call(oe,N.map(e.format.to),i,N.slice(),a||!1,_.slice(),oe)})})}function ne(r,i,a,n,l,o,h){var f;return p.length>1&&!e.events.unconstrained&&(n&&i>0&&(f=g.getAbsoluteDistance(r[i-1],e.margin,!1),a=Math.max(a,f)),l&&i<p.length-1&&(f=g.getAbsoluteDistance(r[i+1],e.margin,!0),a=Math.min(a,f))),p.length>1&&e.limit&&(n&&i>0&&(f=g.getAbsoluteDistance(r[i-1],e.limit,!1),a=Math.min(a,f)),l&&i<p.length-1&&(f=g.getAbsoluteDistance(r[i+1],e.limit,!0),a=Math.max(a,f))),e.padding&&(i===0&&(f=g.getAbsoluteDistance(0,e.padding[0],!1),a=Math.max(a,f)),i===p.length-1&&(f=g.getAbsoluteDistance(100,e.padding[1],!0),a=Math.min(a,f))),h||(a=g.getStep(a)),a=G(a),a===r[i]&&!o?!1:a}function be(r,i){var a=e.ort;return(a?i:r)+", "+(a?r:i)}function je(r,i,a,n,l){var o=a.slice(),h=n[0],f=e.events.smoothSteps,w=[!r,r],b=[r,!r];n=n.slice(),r&&n.reverse(),n.length>1?n.forEach(function(P,S){var y=ne(o,P,o[P]+i,w[S],b[S],!1,f);y===!1?i=0:(i=y-o[P],o[P]=y)}):w=b=[!0];var x=!1;n.forEach(function(P,S){x=Y(P,a[P]+i,w[S],b[S],!1,f)||x}),x&&(n.forEach(function(P){C("update",P),C("slide",P)}),l!=null&&C("drag",h))}function qe(r,i){return e.dir?100-r-i:r}function Kt(r,i){_[r]=i,N[r]=g.fromStepping(i);var a=qe(i,0)-kt,n="translate("+be(a+"%","0")+")";p[r].style[e.transformRule]=n,Re(r),Re(r+1)}function we(){j.forEach(function(r){var i=_[r]>50?-1:1,a=3+(p.length+i*r);p[r].style.zIndex=String(a)})}function Y(r,i,a,n,l,o){return l||(i=ne(_,r,i,a,n,!1,o)),i===!1?!1:(Kt(r,i),!0)}function Re(r){if(H[r]){var i=0,a=100;r!==0&&(i=_[r-1]),r!==H.length-1&&(a=_[r]);var n=a-i,l="translate("+be(qe(i,n)+"%","0")+")",o="scale("+be(n/100,"1")+")";H[r].style[e.transformRule]=l+" "+o}}function Fe(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?_[i]:r}function se(r,i,a){var n=Z(r),l=_[0]===void 0;i=i===void 0?!0:i,e.animate&&!l&&W(v,e.cssClasses.tap,e.animationDuration),j.forEach(function(f){Y(f,Fe(n[f],f),!0,!1,a)});var o=j.length===1?0:1;if(l&&g.hasNoSize()&&(a=!0,_[0]=0,j.length>1)){var h=100/(j.length-1);j.forEach(function(f){_[f]=f*h})}for(;o<j.length;++o)j.forEach(function(f){Y(f,_[f],!0,!0,a)});we(),j.forEach(function(f){C("update",f),n[f]!==null&&i&&C("set",f)})}function $t(r){se(e.start,r)}function Wt(r,i,a,n){if(r=Number(r),!(r>=0&&r<j.length))throw new Error("noUiSlider: invalid handle number, got: "+r);Y(r,Fe(i,r),!0,!0,n),C("update",r),a&&C("set",r)}function Te(r){if(r===void 0&&(r=!1),r)return N.length===1?N[0]:N.slice(0);var i=N.map(e.format.to);return i.length===1?i[0]:i}function Xt(){for(ee($.aria),ee($.tooltips),Object.keys(e.cssClasses).forEach(function(r){re(v,e.cssClasses[r])});v.firstChild;)v.removeChild(v.firstChild);delete v.noUiSlider}function Ne(r){var i=_[r],a=g.getNearbySteps(i),n=N[r],l=a.thisStep.step,o=null;if(e.snap)return[n-a.stepBefore.startValue||null,a.stepAfter.startValue-n||null];l!==!1&&n+l>a.stepAfter.startValue&&(l=a.stepAfter.startValue-n),n>a.thisStep.startValue?o=a.thisStep.step:a.stepBefore.step===!1?o=!1:o=n-a.stepBefore.highestStep,i===100?l=null:i===0&&(o=null);var h=g.countStepDecimals();return l!==null&&l!==!1&&(l=Number(l.toFixed(h))),o!==null&&o!==!1&&(o=Number(o.toFixed(h))),[o,l]}function Yt(){return j.map(Ne)}function Gt(r,i){var a=Te(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(o){r[o]!==void 0&&(s[o]=r[o])});var l=Ae(s);n.forEach(function(o){r[o]!==void 0&&(e[o]=l[o])}),g=l.spectrum,e.margin=l.margin,e.limit=l.limit,e.padding=l.padding,e.pips?pe(e.pips):ve(),e.tooltips?Ue():he(),_=[],se(T(r.start)?r.start:a,i)}function Jt(){E=Lt(v),At(e.connect,E),It(e.events),se(e.start),e.pips&&pe(e.pips),e.tooltips&&Ue(),Mt()}Jt();var oe={destroy:Xt,steps:Yt,on:Se,off:ee,get:Te,set:se,setHandle:Wt,reset:$t,__moveHandles:function(r,i,a){je(r,i,_,a)},options:s,updateOptions:Gt,target:v,removePips:ve,removeTooltips:he,getPositions:function(){return _.slice()},getTooltips:function(){return k},getOrigins:function(){return p},pips:pe};return oe}function Le(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var s=Ae(e),u=Ct(t,s,e);return t.noUiSlider=u,u}var yt={__spectrum:ye,cssClasses:ce,create:Le};d.create=Le,d.cssClasses=ce,d.default=yt,Object.defineProperty(d,"__esModule",{value:!0})});window.addEventListener("load",()=>{let d=1,z=document.querySelectorAll(".hero-slider__item"),A=document.querySelector(".hero-slider__prev"),q=document.querySelector(".hero-slider__next"),T=document.querySelector(".hero-slider__background"),K=z.length;d>=K?(A.disabled=!0,q.disabled=!0):A.disabled=!0;let te=document.querySelector(".hero-slider__paginations-wrapper");for(let R=1;R<=K;R++){let L=document.createElement("button");L.dataset.item=R,L.classList.add("hero-slider__pagination"),L.classList.add("slider-pagination"),L.type="button",R===1&&L.classList.add("hero-slider__pagination--active"),te.appendChild(L)}te.addEventListener("click",R=>{let L=R.target,D=document.querySelector(".hero-slider__item--active");d=+L.dataset.item;let W=document.querySelector(`.hero-slider__item:nth-child(${d})`),G=W.dataset.color;T.style.backgroundColor=G,document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),L.classList.add("hero-slider__pagination--active"),D.classList.remove("hero-slider__item--active"),W.classList.add("hero-slider__item--active"),d===K?q.disabled=!0:q.disabled=!1,d===1?A.disabled=!0:A.disabled=!1}),q.addEventListener("click",()=>{let R=document.querySelector(".hero-slider__item--active"),L=document.querySelector(`.hero-slider__item:nth-child(${++d})`),D=L.dataset.color;T.style.backgroundColor=D,R.classList.remove("hero-slider__item--active"),L.classList.add("hero-slider__item--active"),d===K&&(q.disabled=!0),d>1&&(A.disabled=!1),document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),document.querySelector(`.hero-slider__pagination:nth-child(${d})`).classList.add("hero-slider__pagination--active")}),A.addEventListener("click",()=>{let R=document.querySelector(".hero-slider__item--active"),L=document.querySelector(`.hero-slider__item:nth-child(${--d})`),D=L.dataset.color;T.style.backgroundColor=D,R.classList.remove("hero-slider__item--active"),L.classList.add("hero-slider__item--active"),d===1&&(A.disabled=!0),d<K&&(q.disabled=!1),document.querySelector(".hero-slider__pagination--active").classList.remove("hero-slider__pagination--active"),document.querySelector(`.hero-slider__pagination:nth-child(${d})`).classList.add("hero-slider__pagination--active")})});window.addEventListener("load",()=>{let d=document.querySelector(".catalog__price-range"),z=document.querySelector(".catalog__range-input--from"),A=document.querySelector(".catalog__range-input--to"),q=noUiSlider.create(d,{start:[0,900],connect:!0,range:{min:0,max:1e3},step:1});q.on("update",T=>{z.value=+T[0],A.value=+T[1]}),z.addEventListener("change",()=>{q.updateOptions({start:[+z.value,+A.value]})}),A.addEventListener("change",()=>{q.updateOptions({start:[+z.value,+A.value]})})});window.addEventListener("load",()=>{let d=document.querySelector(".burger-button"),z=document.querySelector(".navigation__list");d.addEventListener("click",()=>{z.classList.toggle("navigation__list--active")})});
/*! nouislider - 15.6.0 - 05/01/2022 */
