(()=>{var s={"./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/e=>{e.exports=function(){var t=document.querySelectorAll(".counter-block-input")[0],r=document.querySelectorAll(".counter-block-input")[1],n=document.getElementById("select"),d=document.getElementById("total");function e(){var e=n.options[n.selectedIndex].value,o=+t.value,s=+r.value;d.innerHTML=0<+o&&0<+s?4e3*(o+s)*e:0}d.innerHTML=0,t.addEventListener("change",e),r.addEventListener("change",e),n.addEventListener("change",e)}},"./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/(e,o,s)=>{"use strict";s.r(o);o=s(/*! core-js/modules/es6.object.to-string.js */"./node_modules/core-js/modules/es6.object.to-string.js"),o=s(/*! core-js/modules/es6.promise.js */"./node_modules/core-js/modules/es6.promise.js");(e=s.hmd(e)).exports=function(){var s="Загрузка",t="Спасибо! Скоро мы с вами свяжемся!",r="Что-то пошло не так!",e=document.querySelector(".main-form"),o=document.getElementById("form"),d=document.getElementsByTagName("input"),u=document.createElement("div");function n(o){o.addEventListener("submit",function(e){e.preventDefault(),o.appendChild(u);var n,e=new FormData(o);n=e,new Promise(function(e,o){var s=new XMLHttpRequest;s.open("POST","server.php"),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){s.readyState<4?e():4===s.readyState?200==s.status&&s.status<3&&e():o()};var t={};n.forEach(function(e,o){t[o]=e});var r=JSON.stringify(t);s.send(r)}).then(function(){return u.innerHTML=s}).then(function(){u.innerHTML=t}).catch(function(){return u.innerHTML=r}).then(function(){for(var e=0;e<d.length;e++)d[e].value=""})})}u.classList.add("status"),n(e),n(o)}},"./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/e=>{e.exports=function(){var e=document.querySelector(".info"),o=document.querySelector(".more"),s=document.querySelector(".overlay"),t=document.querySelector(".popup-close"),r=document.querySelectorAll(".description-btn");o.addEventListener("click",function(){s.style.display="block",o.classList.add("more-splash"),document.body.style.overflow=""}),e.addEventListener("click",function(e){e=e.target;e&&e.classList.contains("description-btn")&&(e.classList.add("more-splash"),s.style.display="block",document.body.style.overflow="")}),t.addEventListener("click",function(){s.style.display="none",o.classList.remove("more-splash"),document.body.style.overflow="",r.forEach(function(e){e.classList.remove("more-splash")})})}},"./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/e=>{e.exports=function(){var s=1,o=document.querySelectorAll(".slider-item"),e=document.querySelector(".prev"),t=document.querySelector(".next"),r=document.querySelector(".slider-dots"),n=document.querySelectorAll(".dot");function d(e){e>o.length&&(s=1),e<1&&(s=o.length),o.forEach(function(e){return e.style.display="none"}),n.forEach(function(e){return e.classList.remove("dot-active")}),o[s-1].style.display="block",n[s-1].classList.add("dot-active")}function u(e){d(s+=e)}d(s),e.addEventListener("click",function(){u(-1)}),t.addEventListener("click",function(){u(1)}),r.addEventListener("click",function(e){for(var o=0;o<n.length+1;o++)e.target.classList.contains("dot")&&e.target==n[o-1]&&d(s=o)})}},"./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/e=>{e.exports=function(){function r(e){for(var o=e;o<d.length;o++)d[o].classList.remove("show"),d[o].classList.add("hide")}var n=document.querySelectorAll(".info-header-tab"),e=document.querySelector(".info-header"),d=document.querySelectorAll(".info-tabcontent");r(1),e.addEventListener("click",function(e){var o,s=e.target;if(s&&s.classList.contains("info-header-tab"))for(var t=0;t<n.length;t++)if(s==n[t]){r(0),d[o=t].classList.contains("hide")&&(d[o].classList.remove("hide"),d[o].classList.add("show"));break}})}},"./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/e=>{e.exports=function(){var e,r,n,d,u,c;e="timer",r="2021-10-21",e=document.getElementById(e),n=e.querySelector(".hours"),d=e.querySelector(".minutes"),u=e.querySelector(".seconds"),c=setInterval(function(){var e,o,s,t,s=(e=r,o=Date.parse(e)-Date.parse(new Date),s=Math.floor(o/1e3%60),t=Math.floor(o/1e3/60%60),e=Math.floor(o/1e3/60/60%24),{total:o,days:Math.floor(o/864e5),hours:e,minutes:t,seconds:s});n.textContent=s.hours,d.textContent=s.minutes,u.textContent=s.seconds,s.hours<10&&(n.textContent="0"+s.hours),s.minutes<10&&(d.textContent="0"+s.minutes),s.seconds<10&&(u.textContent="0"+s.seconds),s.total<=0&&clearInterval(c)},1e3)}},"./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/e=>{e.exports=function(e,o,s,t){if(!(e instanceof o)||void 0!==t&&t in e)throw TypeError(s+": incorrect invocation!");return e}},"./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/(e,o,s)=>{var t=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/(e,o,s)=>{var t=s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag"),n="Arguments"==t(function(){return arguments}());e.exports=function(e){var o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(e=function(e,o){try{return e[o]}catch(e){}}(o=Object(e),r))?e:n?t(o):"Object"==(e=t(o))&&"function"==typeof o.callee?"Arguments":e}},"./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/e=>{var o={}.toString;e.exports=function(e){return o.call(e).slice(8,-1)}},"./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/e=>{e=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},"./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/(e,o,s)=>{var n=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,o){return t.call(r,e,o)};case 3:return function(e,o,s){return t.call(r,e,o,s)}}return function(){return t.apply(r,arguments)}}},"./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/(e,o,s)=>{e.exports=!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/(e,o,s)=>{var t=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document,n=t(r)&&t(r.createElement);e.exports=function(e){return n?r.createElement(e):{}}},"./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/(e,o,s)=>{var _=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),f=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),p=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),v=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),h=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),y="prototype",g=function(e,o,s){var t,r,n,d=e&g.F,u=e&g.G,c=e&g.S,l=e&g.P,i=e&g.B,a=u?_:c?_[o]||(_[o]={}):(_[o]||{})[y],m=u?f:f[o]||(f[o]={}),j=m[y]||(m[y]={});for(t in s=u?o:s)r=((n=!d&&a&&void 0!==a[t])?a:s)[t],n=i&&n?h(r,_):l&&"function"==typeof r?h(Function.call,r):r,a&&v(a,t,r,e&g.U),m[t]!=r&&p(m,t,n),l&&j[t]!=r&&(j[t]=r)};_.core=f,g.F=1,g.G=2,g.S=4,g.P=8,g.B=16,g.W=32,g.U=64,g.R=128,e.exports=g},"./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/(e,o,s)=>{var a=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),m=s(/*! ./_iter-call */"./node_modules/core-js/modules/_iter-call.js"),j=s(/*! ./_is-array-iter */"./node_modules/core-js/modules/_is-array-iter.js"),_=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),f=s(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),p=s(/*! ./core.get-iterator-method */"./node_modules/core-js/modules/core.get-iterator-method.js"),v={},h={},e=e.exports=function(e,o,s,t,r){var n,d,u,c,r=r?function(){return e}:p(e),l=a(s,t,o?2:1),i=0;if("function"!=typeof r)throw TypeError(e+" is not iterable!");if(j(r)){for(n=f(e.length);i<n;i++)if((c=o?l(_(d=e[i])[0],d[1]):l(e[i]))===v||c===h)return c}else for(u=r.call(e);!(d=u.next()).done;)if((c=m(u,l,d.value,o))===v||c===h)return c};e.BREAK=v,e.RETURN=h},"./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/(e,o,s)=>{e.exports=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("native-function-to-string",Function.toString)},"./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/e=>{e=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/e=>{var s={}.hasOwnProperty;e.exports=function(e,o){return s.call(e,o)}},"./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/(e,o,s)=>{var t=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),r=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?function(e,o,s){return t.f(e,o,r(1,s))}:function(e,o,s){return e[o]=s,e}},"./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/(e,o,s)=>{s=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document;e.exports=s&&s.documentElement},"./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/(e,o,s)=>{e.exports=!s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty(s(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/e=>{e.exports=function(e,o,s){var t=void 0===s;switch(o.length){case 0:return t?e():e.call(s);case 1:return t?e(o[0]):e.call(s,o[0]);case 2:return t?e(o[0],o[1]):e.call(s,o[0],o[1]);case 3:return t?e(o[0],o[1],o[2]):e.call(s,o[0],o[1],o[2]);case 4:return t?e(o[0],o[1],o[2],o[3]):e.call(s,o[0],o[1],o[2],o[3])}return e.apply(s,o)}},"./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/(e,o,s)=>{var t=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(t.Array===e||n[r]===e)}},"./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/(e,o,s)=>{var r=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");e.exports=function(o,e,s,t){try{return t?e(r(s)[0],s[1]):e(s)}catch(e){s=o.return;throw void 0!==s&&r(s.call(o)),e}}},"./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/(e,o,s)=>{var n=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),d=!1;try{var t=[7][n]();t.return=function(){d=!0},Array.from(t,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!d)return!1;var s=!1;try{var t=[7],r=t[n]();r.next=function(){return{done:s=!0}},t[n]=function(){return r},e(t)}catch(e){}return s}},"./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/e=>{e.exports={}},"./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/e=>{e.exports=!1},"./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/(e,o,s)=>{var u=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),c=s(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,l=u.MutationObserver||u.WebKitMutationObserver,i=u.process,a=u.Promise,m="process"==s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(i);e.exports=function(){function e(){var e,o;for(m&&(e=i.domain)&&e.exit();s;){o=s.fn,s=s.next;try{o()}catch(e){throw s?r():t=void 0,e}}t=void 0,e&&e.enter()}var s,t,o,r,n,d;return r=m?function(){i.nextTick(e)}:!l||u.navigator&&u.navigator.standalone?a&&a.resolve?(o=a.resolve(void 0),function(){o.then(e)}):function(){c.call(u,e)}:(n=!0,d=document.createTextNode(""),new l(e).observe(d,{characterData:!0}),function(){d.data=n=!n}),function(e){e={fn:e,next:void 0};t&&(t.next=e),s||(s=e,r()),t=e}}},"./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/(e,o,s)=>{"use strict";var r=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");function t(e){var s,t;this.promise=new e(function(e,o){if(void 0!==s||void 0!==t)throw TypeError("Bad Promise constructor");s=e,t=o}),this.resolve=r(s),this.reject=r(t)}e.exports.f=function(e){return new t(e)}},"./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/(e,o,s)=>{var t=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),n=s(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),d=Object.defineProperty;o.f=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function(e,o,s){if(t(e),o=n(o,!0),t(s),r)try{return d(e,o,s)}catch(e){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(e[o]=s.value),e}},"./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/e=>{e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},"./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/(e,o,s)=>{var t=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),n=s(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js");e.exports=function(e,o){if(t(e),r(o)&&o.constructor===e)return o;e=n.f(e);return(0,e.resolve)(o),e.promise}},"./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/e=>{e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/(e,o,s)=>{var r=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js");e.exports=function(e,o,s){for(var t in o)r(e,t,o[t],s);return e}},"./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/(e,o,s)=>{var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),d=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),u=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),c=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("src"),t=s(/*! ./_function-to-string */"./node_modules/core-js/modules/_function-to-string.js"),r="toString",l=(""+t).split(r);s(/*! ./_core */"./node_modules/core-js/modules/_core.js").inspectSource=function(e){return t.call(e)},(e.exports=function(e,o,s,t){var r="function"==typeof s;r&&(u(s,"name")||d(s,"name",o)),e[o]!==s&&(r&&(u(s,c)||d(s,c,e[o]?""+e[o]:l.join(String(o)))),e===n?e[o]=s:t?e[o]?e[o]=s:d(e,o,s):(delete e[o],d(e,o,s)))})(Function.prototype,r,function(){return"function"==typeof this&&this[c]||t.call(this)})},"./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/(e,o,s)=>{"use strict";var t=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),n=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),d=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e){e=t[e];n&&e&&!e[d]&&r.f(e,d,{configurable:!0,get:function(){return this}})}},"./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/(e,o,s)=>{var t=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,r=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),n=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag");e.exports=function(e,o,s){e&&!r(e=s?e:e.prototype,n)&&t(e,n,{configurable:!0,value:o})}},"./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/(e,o,s)=>{var t=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),n="__core-js_shared__",d=r[n]||(r[n]={});(e.exports=function(e,o){return d[e]||(d[e]=void 0!==o?o:{})})("versions",[]).push({version:t.version,mode:s(/*! ./_library */"./node_modules/core-js/modules/_library.js")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/(e,o,s)=>{var t=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),n=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e,o){var s,e=t(e).constructor;return void 0===e||null==(s=t(e)[n])?o:r(s)}},"./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/(e,o,s)=>{function t(){var e,o=+this;v.hasOwnProperty(o)&&(e=v[o],delete v[o],e())}function r(e){t.call(e.data)}var n,d=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),u=s(/*! ./_invoke */"./node_modules/core-js/modules/_invoke.js"),c=s(/*! ./_html */"./node_modules/core-js/modules/_html.js"),l=s(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js"),i=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),a=i.process,m=i.setImmediate,j=i.clearImmediate,_=i.MessageChannel,f=i.Dispatch,p=0,v={},h="onreadystatechange";m&&j||(m=function(e){for(var o=[],s=1;s<arguments.length;)o.push(arguments[s++]);return v[++p]=function(){u("function"==typeof e?e:Function(e),o)},n(p),p},j=function(e){delete v[e]},"process"==s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(a)?n=function(e){a.nextTick(d(t,e,1))}:f&&f.now?n=function(e){f.now(d(t,e,1))}:_?(_=(s=new _).port2,s.port1.onmessage=r,n=d(_.postMessage,_,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts?(n=function(e){i.postMessage(e+"","*")},i.addEventListener("message",r,!1)):n=h in l("script")?function(e){c.appendChild(l("script"))[h]=function(){c.removeChild(this),t.call(e)}}:function(e){setTimeout(d(t,e,1),0)}),e.exports={set:m,clear:j}},"./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/e=>{var o=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?s:o)(e)}},"./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/(e,o,s)=>{var t=s(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),r=Math.min;e.exports=function(e){return 0<e?r(t(e),9007199254740991):0}},"./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/(e,o,s)=>{var r=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!r(e))return e;var s,t;if(o&&"function"==typeof(s=e.toString)&&!r(t=s.call(e)))return t;if("function"==typeof(s=e.valueOf)&&!r(t=s.call(e)))return t;if(!o&&"function"==typeof(s=e.toString)&&!r(t=s.call(e)))return t;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/e=>{var o=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+s).toString(36))}},"./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/(e,o,s)=>{s=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").navigator;e.exports=s&&s.userAgent||""},"./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/(e,o,s)=>{var t=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("wks"),r=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").Symbol,d="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=d&&n[e]||(d?n:r)("Symbol."+e))}).store=t},"./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/(e,o,s)=>{var t=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),n=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js");e.exports=s(/*! ./_core */"./node_modules/core-js/modules/_core.js").getIteratorMethod=function(e){if(null!=e)return e[r]||e["@@iterator"]||n[t(e)]}},"./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/(e,o,s)=>{"use strict";var t=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),r={};r[s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag")]="z",r+""!="[object z]"&&s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(Object.prototype,"toString",function(){return"[object "+t(this)+"]"},!0)},"./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/(e,o,s)=>{"use strict";function t(){}function a(e){var o;return!(!p(e)||"function"!=typeof(o=e.then))&&o}function r(i,o){var s;i._n||(i._n=!0,s=i._c,x(function(){for(var c=i._v,l=1==i._s,e=0;s.length>e;)!function(e){var o,s,t,r=l?e.ok:e.fail,n=e.resolve,d=e.reject,u=e.domain;try{r?(l||(2==i._h&&B(i),i._h=1),!0===r?o=c:(u&&u.enter(),o=r(c),u&&(u.exit(),t=!0)),o===e.promise?d(M("Promise-chain cycle")):(s=a(o))?s.call(o,n,d):n(o)):d(c)}catch(e){u&&!t&&u.exit(),d(e)}}(s[e++]);i._c=[],i._n=!1,o&&!i._h&&F(i)}))}function n(e){var o=this;o._d||(o._d=!0,(o=o._w||o)._v=e,o._s=2,o._a||(o._a=o._c.slice()),r(o,!0))}var d,u,c,l,i=s(/*! ./_library */"./node_modules/core-js/modules/_library.js"),m=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),j=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),_=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),f=s(/*! ./_export */"./node_modules/core-js/modules/_export.js"),p=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),v=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),h=s(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),y=s(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),g=s(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),b=s(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,x=s(/*! ./_microtask */"./node_modules/core-js/modules/_microtask.js")(),w=s(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js"),S=s(/*! ./_perform */"./node_modules/core-js/modules/_perform.js"),E=s(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js"),k=s(/*! ./_promise-resolve */"./node_modules/core-js/modules/_promise-resolve.js"),L="Promise",M=m.TypeError,T=m.process,O=T&&T.versions,P=O&&O.v8||"",q=m[L],A="process"==_(T),C=u=w.f,_=!!function(){try{var e=q.resolve(1),o=(e.constructor={})[s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species")]=function(e){e(t,t)};return(A||"function"==typeof PromiseRejectionEvent)&&e.then(t)instanceof o&&0!==P.indexOf("6.6")&&-1===E.indexOf("Chrome/66")}catch(e){}}(),F=function(r){b.call(m,function(){var e,o,s=r._v,t=I(r);if(t&&(e=S(function(){A?T.emit("unhandledRejection",s,r):(o=m.onunhandledrejection)?o({promise:r,reason:s}):(o=m.console)&&o.error&&o.error("Unhandled promise rejection",s)}),r._h=A||I(r)?2:1),r._a=void 0,t&&e.e)throw e.v})},I=function(e){return 1!==e._h&&0===(e._a||e._c).length},B=function(o){b.call(m,function(){var e;A?T.emit("rejectionHandled",o):(e=m.onrejectionhandled)&&e({promise:o,reason:o._v})})},D=function(e){var s,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw M("Promise can't be resolved itself");(s=a(e))?x(function(){var o={_w:t,_d:!1};try{s.call(e,j(D,o,1),j(n,o,1))}catch(e){n.call(o,e)}}):(t._v=e,t._s=1,r(t,!1))}catch(e){n.call({_w:t,_d:!1},e)}}};_||(q=function(e){h(this,q,L,"_h"),v(e),d.call(this);try{e(j(D,this,1),j(n,this,1))}catch(e){n.call(this,e)}},(d=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=s(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js")(q.prototype,{then:function(e,o){var s=C(g(this,q));return s.ok="function"!=typeof e||e,s.fail="function"==typeof o&&o,s.domain=A?T.domain:void 0,this._c.push(s),this._a&&this._a.push(s),this._s&&r(this,!1),s.promise},catch:function(e){return this.then(void 0,e)}}),c=function(){var e=new d;this.promise=e,this.resolve=j(D,e,1),this.reject=j(n,e,1)},w.f=C=function(e){return e===q||e===l?new c:u(e)}),f(f.G+f.W+f.F*!_,{Promise:q}),s(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js")(q,L),s(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")(L),l=s(/*! ./_core */"./node_modules/core-js/modules/_core.js")[L],f(f.S+f.F*!_,L,{reject:function(e){var o=C(this);return(0,o.reject)(e),o.promise}}),f(f.S+f.F*(i||!_),L,{resolve:function(e){return k(i&&this===l?q:this,e)}}),f(f.S+f.F*!(_&&s(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js")(function(e){q.all(e).catch(t)})),L,{all:function(e){var d=this,o=C(d),u=o.resolve,c=o.reject,s=S(function(){var t=[],r=0,n=1;y(e,!1,function(e){var o=r++,s=!1;t.push(void 0),n++,d.resolve(e).then(function(e){s||(s=!0,t[o]=e,--n||u(t))},c)}),--n||u(t)});return s.e&&c(s.v),o.promise},race:function(e){var o=this,s=C(o),t=s.reject,r=S(function(){y(e,!1,function(e){o.resolve(e).then(s.resolve,t)})});return r.e&&t(r.v),s.promise}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;o=t[e]={id:e,loaded:!1,exports:{}};return s[e](o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var s in o)n.o(o,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded",function(){"use strict";var e=n(/*! ./parts/calc.js */"./src/js/parts/calc.js"),o=n(/*! ./parts/form.js */"./src/js/parts/form.js"),s=n(/*! ./parts/slider.js */"./src/js/parts/slider.js"),t=n(/*! ./parts/tabs.js */"./src/js/parts/tabs.js"),r=n(/*! ./parts/timer.js */"./src/js/parts/timer.js");n(/*! ./parts/modal.js */"./src/js/parts/modal.js");e(),o(),s(),t(),r()})})();