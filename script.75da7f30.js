parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGUE":[function(require,module,exports) {
var e=[],t=function(t){t?n(t):e=document.querySelectorAll(".balance-text"),i();var l=r(function(){i()},100);window.addEventListener("resize",l)},n=function(t){selectorArray=t.split(",");for(var n=0;n<selectorArray.length;n+=1)for(var r=document.querySelectorAll(selectorArray[n].trim()),i=0;i<r.length;i+=1){var l=r[i];e.push(l)}},r=function(e,t,n){var r;return function(){var i=this,l=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,l)},t),o&&e.apply(i,l)}},i=function(){var t,n;for(n=0;n<e.length;n+=1)t=e[n],o(t)&&(t.style.maxWidth="",l(t,t.clientHeight,0,t.clientWidth))},l=function(e,t,n,r){var i;n>=r?e.style.maxWidth=r+"px":(i=(n+r)/2,e.style.maxWidth=i+"px",e.clientHeight>t?l(e,t,i+1,r):l(e,t,n+1,i))},o=function(e){var t,n,r,i,l;return l=e.innerHTML,10,r=e.innerHTML.split(" "),(i=document.createElement("span")).id="element-first-word",i.innerHTML=r[0],r=r.slice(1),e.innerHTML="",e.appendChild(i),e.innerHTML+=" "+r.join(" "),t=(i=document.getElementById("element-first-word")).offsetHeight,n=e.offsetHeight,e.innerHTML=l,n-10>t};exports.balanceText=t;
},{}],"EHrm":[function(require,module,exports) {
module.exports={name:"fire-loophole",version:"0.0.0",private:!0,scripts:{start:"parcel src/index.html --global script",build:"parcel build src/index.html --global script --public-url . --no-content-hash",postinstall:"patch-package"},devDependencies:{cssnano:"^4.1.10",eslint:"^7.0.0","parcel-bundler":"1.12.3","patch-package":"6.2.2","posthtml-expressions":"1.4.0","posthtml-include":"1.4.3",sass:"^1.26.5"},dependencies:{"intersection-observer":"^0.10.0","text-balancer":"^1.0.5"},browserslist:["defaults"],prettier:{singleQuote:!0,trailingComma:"all",arrowParens:"avoid"},spectate:{USE_NEWS_NAV:!0,USE_EYE_NAV:!1,USE_COVER_HED:!1,IS_EMBED:!1,DOC_URL:"https://docs.google.com/document/d/1CORghwuEkuwe9-XAlvRX43_hJHruLnp68uAKYHLHcUE/edit#"}};
},{}],"3Fhe":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"21/1":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"3Fhe"}],"cHld":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=w;var e=require("../../package.json");function r(e){return i(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function i(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(){document.querySelector(".g-artboard[data-min-width]")&&require("_bundle_loader")(require.resolve("./ai2html-resizer")).then(function(e){return e.default()})}var l="div#fusion-app",c="div#fusion-app > div > div";function s(){var e=document.querySelector(l),t=document.querySelector(c);e.parentNode.replaceChild(t,e);var n=t.firstElementChild;r(n.children).some(function(e){return["META","LINK"].includes(e.tagName)})&&(n.style.margin=0),u()}var d=3e3,m=null;function f(e){document.body?document.querySelector(l)?s():u():e-(m||(m=e))<d?window.requestAnimationFrame(f):(console.log("Gave up replacing %s with article after %dms. Using window.onload.",l,d),window.onload=s)}var y="www.columbiaspectator.com"===window.location.host,p=0===window.location.pathname.indexOf("/contributors");function w(){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype||require("_bundle_loader")(require.resolve("intersection-observer")).then(),!y||p||e.spectate.IS_EMBED?u():window.requestAnimationFrame(f)}if(y&&p){document.querySelectorAll(".story-summary > .twolines > link").forEach(function(e){return e.disabled=!0});var v=document.createElement("style");v.type="text/css",v.innerText=".story-summary > .twolines { display: none; }",document.head.appendChild(v)}
},{"../../package.json":"EHrm","_bundle_loader":"21/1","./ai2html-resizer":[["ai2html-resizer.156db1cd.js","b/sC"],"ai2html-resizer.156db1cd.js.map","b/sC"],"intersection-observer":[["intersection-observer.f8cf3ea1.js","GkNt"],"intersection-observer.f8cf3ea1.js.map","GkNt"]}],"2138":[function(require,module,exports) {
"use strict";function t(t,n){return i(t)||o(t,n)||e(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,l,u=[],a=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);a=!0);}catch(f){c=!0,o=f}finally{try{if(!a&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}function i(t){if(Array.isArray(t))return t}function l(r){var e=r.node,n=r.onEnter,o=r.onExit;new IntersectionObserver(function(r){var e=t(r,1)[0],i=e.isIntersecting,l=e.boundingClientRect.top;!i&&l<0?n():i&&l<window.innerHeight/2&&o()},{threshold:1}).observe(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.intersectTop=l;
},{}],"mpVp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hamburgerTrigger=c;var e=a(require("text-balancer")),t=a(require("./scripts/page")),s=require("./scripts/utils"),n=require("../package.json");function a(e){return e&&e.__esModule?e:{default:e}}(0,t.default)();var i=document.getElementById("navbar"),r=n.spectate.USE_NEWS_NAV,o=n.spectate.USE_EYE_NAV,l=n.spectate.USE_COVER_HED;function c(){i.classList.toggle("show-nav-links")}(r||o||l)&&(0,s.intersectTop)({node:document.getElementById("headline"),onEnter:function(){i.classList.remove("only-eye-logo"),i.classList.remove("hide-news-navbar")},onExit:function(){i.classList.remove("show-nav-links"),i.classList.add("only-eye-logo"),i.classList.add("hide-news-navbar")}}),window.innerWidth<=460&&e.default.balanceText("#headline, .deck, .image-caption-text");
},{"text-balancer":"uGUE","./scripts/page":"cHld","./scripts/utils":"2138","../package.json":"EHrm"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("21/1");b.register("js",require("Yi9z"));
},{}]},{},[0,"mpVp"], "script")
//# sourceMappingURL=script.75da7f30.js.map