var BioJSMecuLine=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".BioJSMecuLine{font-family:roboto,sans-serif;width:500px;height:500px;margin:20px auto}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var c;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var c=e[o];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},function(e,t,n){"use strict";n.r(t);var r={};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(r),n.d(r,"set",function(){return je}),n.d(r,"resolve",function(){return xe});var i=new Map;function c(e){var t=i.get(e);return void 0===t&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i.set(e,t)),t}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.dispatchEvent(new CustomEvent(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({bubbles:!1},n)))}function u(e,t){var n=window.ShadyCSS;return n&&!n.nativeShadow?e(n):t}function f(e){var t=String(e.tagName).toLowerCase();return"<".concat(t,">")}var l="ActiveXObject"in window,s=Promise.resolve();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){return e},y=function(e){if("object"!==d(e))throw TypeError("Assigned value must be an object: ".concat("undefined"==typeof v?"undefined":d(v)));return e&&Object.freeze(e)};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=new WeakMap,g=new WeakMap,w=[],S=0,E=0,N=1e3/60;function j(){try{var e=1;E=performance.now();for(var t=function(){var t=w[S];if(h.has(t)){var n=h.get(t),r=g.get(t),o=t[n];if(o!==r&&(g.set(t,o),o(),u(r?function(e){return e.styleSubtree(t)}:function(e){return e.styleElement(t)})),S%e==0){if(S+1<w.length&&performance.now()-E>N)throw w;e*=2}}};S<w.length;S+=1)t();w=[],S=0,s.then(function(){E=0})}catch(e){if(S+=1,requestAnimationFrame(j),s.then(function(){E=0}),e!==w)throw e}}function O(e){if(e.target===e.currentTarget&&h.has(e.target)){if(E)w.length||(performance.now()-E>N?requestAnimationFrame(j):s.then(j));else{if(w.length)return void w.splice(S,0,e.target);requestAnimationFrame(j)}w.push(e.target)}}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof e)throw TypeError("The first argument must be a function: ".concat(b(e)));var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}({shadowRoot:!0},t);return{get:function(t){var r=e(t);return function(){return r(t,n.shadowRoot?t.shadowRoot:t)}},connect:function(e,t){if(h.has(e))throw Error("Render factory already used in '".concat(h.get(e),"' key"));if(n.shadowRoot&&!e.shadowRoot){var r={mode:"open"};"object"===b(n.shadowRoot)&&Object.assign(r,n.shadowRoot),e.attachShadow(r)}return e.addEventListener("@invalidate",O),h.set(e,t),function(){e.removeEventListener("@invalidate",O),h.delete(e)}}}}var M=new WeakMap;function T(e,t){var n=M.get(e);n||(n=new Map,M.set(e,n));var r=n.get(t);return r||(r={target:e,key:t,value:void 0,deps:new Set,state:1,checksum:0},n.set(t,r)),r}function k(e){var t=e.state,n=e.deps,r=t;return n.forEach(function(e){e.target[e.key],r+=e.state}),r}var A=null;function C(e,t,n){if(A)throw A=null,Error("Try to invalidate '".concat(t,"' in '").concat(f(e),"' get call"));var r=T(e,t);r.checksum=0,n&&(r.value=void 0)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){var t="function"==typeof Map?new Map:void 0;return(_=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return P(e,arguments,W(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),B(r,e)})(e)}function P(e,t,n){return(P=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&B(o,n.prototype),o}).apply(null,arguments)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var I=new Set;function F(e){I.size||s.then(function(){I.forEach(function(e){return a(e,"@invalidate",{bubbles:!0})}),I.clear()}),I.add(e)}var H=function(e,t){return t};function X(e,t){e.hybrids=t,e.connects=[],Object.keys(t).forEach(function(n){var r,o=t[n],i=D(o);r="function"===i?"render"===n?x(o):{get:o}:null!==o&&"object"===i&&("object"!==i||o.get||o.set||o.connect)?{get:o.get||H,set:o.set||!o.get&&H||void 0,connect:o.connect}:function(e,t){var n=d(e),r=p;switch(n){case"string":r=String;break;case"number":r=Number;break;case"boolean":r=Boolean;break;case"function":e=(r=e)();break;case"object":e&&Object.freeze(e),r=y}return{get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return n},set:function(e,t,n){return r(t,n)},connect:"object"!==n&&"undefined"!==n?function(n,r,o){if(n[r]===e){var i=c(r);if(n.hasAttribute(i)){var a=n.getAttribute(i);n[r]=""===a||a}}return t&&t(n,r,o)}:t}}(o),Object.defineProperty(e.prototype,n,{get:function(){return function(e,t,n){var r=T(e,t);if(A===r)throw A=null,Error("Circular '".concat(t,"' get invocation in '").concat(f(e),"'"));A&&A.deps.add(r);var o=A;if(A=r,r.checksum&&r.checksum===k(r))return A=o,r.value;r.deps.size&&r.deps.clear();try{var i=n(e,r.value);i!==r.value&&(r.state+=1,r.value=i),r.checksum=k(r),A=o}catch(e){throw A=null,e}return r.value}(this,n,r.get)},set:r.set&&function(e){var t=this;!function(e,t,n,r,o){if(A)throw A=null,Error("Try to set '".concat(t,"' of '").concat(f(e),"' in get call"));var i=T(e,t),c=n(e,r,i.value);c!==i.value&&(i.state+=1,i.value=c,o())}(this,n,r.set,e,function(){return F(t)})},enumerable:!0,configurable:!1}),r.connect&&e.connects.push(function(e){return r.connect(e,n,function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&C(e,n),F(e)})})})}var q=new WeakMap;function J(e,t){var n=D(t);if("object"!==n&&"function"!==n)throw TypeError("Second argument must be an object or a function: ".concat(n));var r=window.customElements.get(e);if("function"===n)return r!==t?window.customElements.define(e,t):r;if(r){if(r.hybrids===t)return r;throw Error("Element '".concat(e,"' already defined"))}var o=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),R(this,W(n).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(n,_(HTMLElement)),r=n,i=[{key:"name",get:function(){return e}}],(o=[{key:"connectedCallback",value:function(){var e=this,t=this.constructor.connects.reduce(function(t,n){var r=n(e);return r&&t.add(r),t},new Set);q.set(this,t),F(this)}},{key:"disconnectedCallback",value:function(){q.get(this).forEach(function(e){return e()})}}])&&L(r.prototype,o),i&&L(r,i),n}();return X(o,t),customElements.define(e,o),o}function U(e){return Object.keys(e).reduce(function(t,n){var r=c(n.replace(/((?!([A-Z]{2}|^))[A-Z])/g,"-$1"));return t[n]=J(r,e[n]),t},{})}function z(){return"object"===D(arguments.length<=0?void 0:arguments[0])?U(arguments.length<=0?void 0:arguments[0]):J.apply(void 0,arguments)}var $=new WeakMap,V={get:function(e,t){return $.has(e)?$.get(e):(void 0!==t&&$.set(e,t),t)},set:function(e,t){return $.set(e,t),t}};function Z(e){for(var t;e&&(t=V.get(e))&&t.endNode;)e=t.endNode;return e}function G(e){var t=V.get(e),n=t.startNode;if(n)for(var r=n,o=Z(t.endNode).nextSibling;r;){var i=r.nextSibling;r.parentNode.removeChild(r),r=i!==o&&i}}var K=new WeakMap;function Q(e,t,n){var r=K.get(t),o=n.map(function(e,t){return{id:Object.prototype.hasOwnProperty.call(e,"id")?e.id:t,value:e,placeholder:null,available:!0}});if(K.set(t,o),r){var i=new Set;o.forEach(function(e){return i.add(e.id)}),r=r.filter(function(e){return!!i.has(e.id)||(G(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder),!1)})}var c=t,a=n.length-1,u=V.get(t);o.forEach(function(t,n){var o,i;if(r)for(var f=0;f<r.length;f+=1)if(r[f].available&&r[f].id===t.id){o=r[f];break}o?(o.available=!1,(i=o.placeholder).previousSibling!==c&&function(e,t){var n=V.get(e),r=n.startNode,o=Z(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);for(var i=e,c=r;c;){var a=c.nextSibling;i.parentNode.insertBefore(c,i.nextSibling),i=c,c=a!==o.nextSibling&&a}}(i,c),o.value!==t.value&&ee(e,i,t.value)):(i=document.createTextNode(""),c.parentNode.insertBefore(i,c.nextSibling),ee(e,i,t.value)),c=Z(V.get(i).endNode||i),0===n&&(u.startNode=i),n===a&&(u.endNode=c),t.placeholder=i}),r&&r.forEach(function(e){e.available&&(G(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder))})}function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t,n){var r=Array.isArray(n)?"array":Y(n),o=V.get(t,{});switch(o.type!==r&&(G(t),"array"===r&&K.delete(t),o=V.set(t,{type:r}),""!==t.textContent&&(t.textContent="")),r){case"function":n(e,t);break;case"array":Q(e,t,n);break;default:t.textContent="number"===r||n?n:""}}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ne=new WeakMap;function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var oe=new WeakMap;function ie(e,t,n){var r=oe.get(t)||new Set,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(e)?e.forEach(function(e){return t.add(e)}):null!==e&&"object"===re(e)?Object.keys(e).forEach(function(n){return e[n]&&t.add(n)}):t.add(e),t}(n);oe.set(t,o),o.forEach(function(e){t.classList.add(e),r.delete(e)}),r.forEach(function(e){t.classList.remove(e)})}function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ae=new WeakMap;function ue(e,t,n){if(null===n||"object"!==ce(n))throw TypeError("Style value must be an object in ".concat(f(t),":"),n);var r=ae.get(t)||new Map,o=Object.keys(n).reduce(function(e,o){var i=c(o),a=n[o];return a||0===a?t.style.setProperty(i,a):t.style.removeProperty(i),e.set(i,a),r.delete(i),e},new Map);r.forEach(function(e,n){t.style[n]=""}),ae.set(t,o)}function fe(e,t,n){if("on"===t.substr(0,2))return function(e){return function(t,n,r,o){if(o&&n.removeEventListener(e,ne.get(o),void 0!==o.options&&o.options),r){if("function"!=typeof r)throw Error("Event listener must be a function: ".concat(te(r)));ne.set(r,r.bind(null,t)),n.addEventListener(e,ne.get(r),void 0!==r.options&&r.options)}}}(t.substr(2));switch(e){case"class":return ie;case"style":return ue;default:return function(r,o,i){if(n||o instanceof SVGElement||!(t in o))if(!1===i||null==i)o.removeAttribute(e);else{var c=!0===i?"":String(i);o.setAttribute(e,c)}else o[t]!==i&&(o[t]=i)}}}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var de=Date.now(),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(de,"-").concat(e,"}}")},ve=pe("(\\d+)"),ye=new RegExp("^".concat(ve,"$")),me=new RegExp(ve,"g"),be="--".concat(de,"--"),he=new RegExp(be,"g"),ge=new WeakMap;var we="object"===se(window.ShadyDOM)&&window.ShadyDOM.inUse?function(e){var t;return{get currentNode(){return t},nextNode:function(){return!!(t=void 0===t?e.childNodes[0]:t.childNodes.length?t.childNodes[0]:t.nextSibling?t.nextSibling:t.parentNode.nextSibling)}}}:function(e){return document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},Se=document.createElement("div");function Ee(e,t,n){var r=document.createElement("template"),o=[],i=function(e,t){var n=e.reduce(function(t,n,r){return 0===r?n:e.slice(r).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(t,"\x3c!--").concat(pe(r-1),"--\x3e").concat(n):t+pe(r-1)+n},"");return t&&(n+="<style>\n".concat(t.join("\n/*------*/\n"),"\n</style>")),l?n.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>\/]+)/g,function(e){return"".concat(be).concat(e)}):n}(e,n);if(t&&(i="<svg>".concat(i,"</svg>")),l?r.innerHTML=i:(Se.innerHTML="<template>".concat(i,"</template>"),r.content.appendChild(Se.children[0].content)),t){var c=r.content.firstChild;r.content.removeChild(c),Array.from(c.childNodes).forEach(function(e){return r.content.appendChild(e)})}!function(e){for(var t,n=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,null,!1);t=n.nextNode();)ye.test(t.textContent)&&(t.parentNode.insertBefore(document.createTextNode(t.textContent),t),t.parentNode.removeChild(t))}(r.content);for(var a=we(r.content),f=0,s=function(){var n=a.currentNode;if(n.nodeType===Node.TEXT_NODE){var r=n.textContent;if(!r.match(ye)){var i=r.match(me);if(i){var c=n;i.reduce(function(e,t){var n=le(e.pop().split(t),2),r=n[0],o=n[1];return r&&e.push(r),e.push(t),o&&e.push(o),e},[r]).forEach(function(e,t){0===t?c.textContent=e:c=c.parentNode.insertBefore(document.createTextNode(e),c.nextSibling)})}}var u=n.textContent.match(ye);u&&(l||(n.textContent=""),o[u[1]]=[f,ee])}else n.nodeType===Node.ELEMENT_NODE&&Array.from(n.attributes).forEach(function(r){var i=r.value.trim(),c=l?r.name.replace(be,""):r.name,a=i.match(ye);if(a){var u=e[a[1]].replace(/\s*=\s*['"]*$/g,"").split(" ").pop();o[a[1]]=[f,fe(c,u,t)],n.removeAttribute(r.name)}else{var s=i.match(me);if(s){var d="attr__".concat(c);s.forEach(function(e,t){var n=le(e.match(ye),2)[1];o[n]=[f,function(n,r,o){var a=V.get(r,{});a[d]=(a[d]||i).replace(e,null==o?"":o),1!==s.length&&t+1!==s.length||(r.setAttribute(c,a[d]),a[d]=void 0)}]}),r.value="",l&&c!==r.name&&(n.removeAttribute(r.name),n.setAttribute(c,""))}}});f+=1};a.nextNode();)s();return function(e,t,n){var i=V.get(t,{type:"function"});if(r!==i.template){i.template&&G(t);var c=document.importNode(function(e,t){return t?u(function(n){var r=ge.get(e);r||(r=new Map,ge.set(e,r));var o=r.get(t);if(!o){(o=document.createElement("template")).content.appendChild(e.content.cloneNode(!0)),r.set(t,o);var i=o.content.querySelectorAll("style");Array.from(i).forEach(function(e){for(var t=e.childNodes.length+1,n=0;n<t;n+=1)e.parentNode.insertBefore(document.createTextNode(pe()),e)}),n.prepareTemplate(o,t.toLowerCase())}return o},e):e}(r,e.tagName).content,!0),a=we(c),f=o.slice(0),s=0,d=f.shift(),p=[];for(Object.assign(i,{template:r,markers:p});a.nextNode();){var v=a.currentNode;for(v.nodeType===Node.TEXT_NODE&&(ye.test(v.textContent)?v.textContent="":l&&(v.textContent=v.textContent.replace(he,"")));d&&d[0]===s;)p.push([v,d[1]]),d=f.shift();s+=1}if(i.startNode=c.childNodes[0],i.endNode=c.childNodes[c.childNodes.length-1],t.nodeType===Node.TEXT_NODE)for(var y=t,m=c.childNodes[0];m;)t.parentNode.insertBefore(m,y.nextSibling),y=m,m=c.childNodes[0];else t.appendChild(c)}i.markers.forEach(function(t,r){var o=le(t,2),c=o[0],a=o[1];i.lastArgs&&i.lastArgs[r]===n[r]||a(e,c,n[r],i.lastArgs?i.lastArgs[r]:void 0)}),i.lastArgs=n}}var Ne=new Map;function je(e,t){if(!e)throw Error("Target property name missing: ".concat(e));if(2===arguments.length)return function(n){n[e]=t};var n=Ne.get(e);return n||(n=function(t,n){var r=n.target;t[e]=r.value},Ne.set(e,n)),n}var Oe=new WeakMap;function xe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(r,o){var i;t&&(i=setTimeout(function(){i=void 0,requestAnimationFrame(function(){t(r,o)})},n)),Oe.set(o,e),e.then(function(t){i&&clearTimeout(i),Oe.get(o)===e&&(t(r,o),Oe.set(o,null))})}}var Me=pe(),Te=new Map,ke=new WeakMap,Ae={define:function(e){return z(e),this},key:function(e){return this.id=e,this},style:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ke.set(this,t),this}};function Ce(e,t,n){return Object.assign(function r(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,c=ke.get(r),a=e.join(Me);c&&(a+=c.join(Me)),n&&(a+=pe("svg"));var u=Te.get(a);u||(u=Ee(e,n,c),Te.set(a,u)),u(o,i,t)},Ae)}Object.assign(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ce(e,n)},r),Object.assign(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ce(e,n,!0)},r);var Le=n(0),Re=n.n(Le);n(2);function _e(){var e;document.getElementById("BioJSMecuLineStyle")||document.head.appendChild(((e=document.createElement("style")).setAttribute("id","BioJSMecuLineStyle"),e.setAttribute("type","text/css"),e.innerHTML=Re.a.toString(),e))}n.d(t,"BioJSMecuLine",function(){return Pe});var Pe={init:{get:function(e,t){return t},set:function(){},connect:function(e,t){var n,r=new XMLHttpRequest;r.open("GET","./data.json"),r.setRequestHeader("Content-type","application/json"),r.onreadystatechange=function(){var e;4==r.readyState&&(n=JSON.parse(r.responseText),console.log(n),e=[],n.forEach(function(t){var n=document.getElementById("container"),r=document.createElement("div"),o=document.createElement("div");r.setAttribute("id",t.uniprotId),r.className="mecu-el",o.setAttribute("id",t.uniprotId+"2"),o.className="mecu-el",n.appendChild(r),n.appendChild(o);var i=new MecuLine({element:"#"+t.uniprotId,axes:!0});i.add(t),e.push(i);var c=new MecuLine({element:"#"+t.uniprotId+"2"});c.add(t),e.push(c)}),function(){var t=document.getElementById("container"),r=document.createElement("div"),o=document.createElement("div");r.setAttribute("id","allcurves"),r.className="mecu-el",o.setAttribute("id","allcurvese2"),o.className="mecu-el",t.appendChild(r),t.appendChild(o);var i=new MecuLine({element:"#allcurves",axes:!0});i.add(n),e.push(i);var c=new MecuLine({element:"#allcurvese2",limit:4,maxTemp:64,minTemp:37.8,minRatio:0,maxRatio:1});c.add(n),e.push(c)}())},r.send(),_e()}}};z("mecu-line-web",Pe)}]);