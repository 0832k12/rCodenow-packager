!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){function r(){}n(11).mixin(r),r.prototype.write=function(e,t,n){this.emit("item",e,t,n)},r.prototype.end=function(){this.emit("end"),this.removeAllListeners()},r.prototype.pipe=function(e){var t=this;function n(){e.write.apply(e,Array.prototype.slice.call(arguments))}function r(){!e._isStdio&&e.end()}return t.emit("unpipe",e),e.emit("pipe",t),t.on("item",n),t.on("end",r),t.when("unpipe",(function(o){var i=o===e||void 0===o;return i&&(t.removeListener("item",n),t.removeListener("end",r),e.emit("unpipe")),i})),e},r.prototype.unpipe=function(e){return this.emit("unpipe",e),this},r.prototype.format=function(e){throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:","var Minilog = require('minilog');","Minilog","  .pipe(Minilog.backends.console.formatClean)","  .pipe(Minilog.backends.console);"].join("\n"))},r.mixin=function(e){var t,n=r.prototype;for(t in n)n.hasOwnProperty(t)&&(e.prototype[t]=n[t])},e.exports=r},function(e,t,n){const r=n(9);r.enable(),e.exports=r("vm")},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={isWorker:!0,centralDispatchService:self}},function(e,t){var n={black:"#000",red:"#c23621",green:"#25bc26",yellow:"#bbbb00",blue:"#492ee1",magenta:"#d338d3",cyan:"#33bbc8",gray:"#808080",purple:"#708"};e.exports=function(e,t){return t?"color: #fff; background: "+n[e]+";":"color: "+n[e]+";"}},function(e,t){e.exports={ANGLE:"angle",BOOLEAN:"Boolean",COLOR:"color",NUMBER:"number",STRING:"string",MATRIX:"matrix",NOTE:"note",IMAGE:"image",COSTUME:"costume",SOUND:"sound"}},function(e,t){e.exports={BOOLEAN:"Boolean",BUTTON:"button",COMMAND:"command",CONDITIONAL:"conditional",EVENT:"event",HAT:"hat",LOOP:"loop",REPORTER:"reporter"}},function(e,t,n){(function(e){const t=n(3),r=n(8);e.$=r,e.jQuery=r;const o=window.__WRAPPED_IFRAME_ID__;t.isWorker=!1,t.centralDispatchService={postMessage(e,t){const n={vmIframeId:o,message:e};t?window.parent.postMessage(n,"*",t):window.parent.postMessage(n,"*")}},n(19),window.parent.postMessage({vmIframeId:o,ready:!0},"*")}).call(this,n(2))},function(e,t,n){(function(t){const r=n(1),o=()=>{throw new Error("Not implemented")};o.getScript=(e,t)=>{const n=document.createElement("script");n.src=e,t&&(n.onload=()=>t()),document.body.appendChild(n)};let i=0;o.ajax=async(e,n)=>{let s={};e&&n?(s=n,s.url=e):e&&(s=e);const c=(e=>{const t=new URLSearchParams;if(e)for(const n of Object.keys(e))t.set(n,e[n]);return t})(s.data),a=()=>{const e=c.toString();let t=s.url;return e&&(t+="?".concat(e)),t.startsWith("http://")&&(t=t.replace("http://","https://")),t},l=e=>{s.success&&s.success(e)};try{if("jsonp"===s.dataType){const e="_jsonp_callback".concat(i++);t[e]=n=>{delete t[e],l(n)};const n=s.jsonp||"callback";return c.set(n,e),void o.getScript(a())}if("script"===s.dataType)return void o.getScript(a(),l);const e=await fetch(a(),{headers:s.headers});l(await e.json())}catch(e){u=e,r.error(u),s.error&&s.error(u)}var u},e.exports=o}).call(this,n(2))},function(e,t,n){var r=n(10),o=r.enable,i=r.disable,s="undefined"!=typeof navigator&&/chrome/i.test(navigator.userAgent),c=n(13);if(r.defaultBackend=s?c.minilog:c,"undefined"!=typeof window){try{r.enable(JSON.parse(window.localStorage.minilogSettings))}catch(e){}if(window.location&&window.location.search){var a=RegExp("[?&]minilog=([^&]*)").exec(window.location.search);a&&r.enable(decodeURIComponent(a[1]))}}r.enable=function(){o.call(r,!0);try{window.localStorage.minilogSettings=JSON.stringify(!0)}catch(e){}return this},r.disable=function(){i.call(r);try{delete window.localStorage.minilogSettings}catch(e){}return this},(e.exports=r).backends={array:n(16),browser:r.defaultBackend,localStorage:n(17),jQuery:n(18)}},function(e,t,n){var r=n(0),o=n(12),i=new r,s=Array.prototype.slice;(t=e.exports=function(e){var n=function(){return i.write(e,void 0,s.call(arguments)),n};return n.debug=function(){return i.write(e,"debug",s.call(arguments)),n},n.info=function(){return i.write(e,"info",s.call(arguments)),n},n.warn=function(){return i.write(e,"warn",s.call(arguments)),n},n.error=function(){return i.write(e,"error",s.call(arguments)),n},n.log=n.debug,n.suggest=t.suggest,n.format=i.format,n}).defaultBackend=t.defaultFormatter=null,t.pipe=function(e){return i.pipe(e)},t.end=t.unpipe=t.disable=function(e){return i.unpipe(e)},t.Transform=r,t.Filter=o,t.suggest=new o,t.enable=function(){return t.defaultFormatter?i.pipe(t.suggest).pipe(t.defaultFormatter).pipe(t.defaultBackend):i.pipe(t.suggest).pipe(t.defaultBackend)}},function(e,t){function n(){this._events={}}n.prototype={on:function(e,t){this._events||(this._events={});var n=this._events;return(n[e]||(n[e]=[])).push(t),this},removeListener:function(e,t){var n,r=this._events[e]||[];for(n=r.length-1;n>=0&&r[n];n--)r[n]!==t&&r[n].cb!==t||r.splice(n,1)},removeAllListeners:function(e){e?this._events[e]&&(this._events[e]=[]):this._events={}},listeners:function(e){return this._events&&this._events[e]||[]},emit:function(e){this._events||(this._events={});var t,n=Array.prototype.slice.call(arguments,1),r=this._events[e]||[];for(t=r.length-1;t>=0&&r[t];t--)r[t].apply(this,n);return this},when:function(e,t){return this.once(e,t,!0)},once:function(e,t,n){if(!t)return this;function r(){n||this.removeListener(e,r),t.apply(this,arguments)&&n&&this.removeListener(e,r)}return r.cb=t,this.on(e,r),this}},n.mixin=function(e){var t,r=n.prototype;for(t in r)r.hasOwnProperty(t)&&(e.prototype[t]=r[t])},e.exports=n},function(e,t,n){var r=n(0),o={debug:1,info:2,warn:3,error:4};function i(){this.enabled=!0,this.defaultResult=!0,this.clear()}function s(e,t){return e.n.test?e.n.test(t):e.n==t}r.mixin(i),i.prototype.allow=function(e,t){return this._white.push({n:e,l:o[t]}),this},i.prototype.deny=function(e,t){return this._black.push({n:e,l:o[t]}),this},i.prototype.clear=function(){return this._white=[],this._black=[],this},i.prototype.test=function(e,t){var n,r=Math.max(this._white.length,this._black.length);for(n=0;n<r;n++){if(this._white[n]&&s(this._white[n],e)&&o[t]>=this._white[n].l)return!0;if(this._black[n]&&s(this._black[n],e)&&o[t]<=this._black[n].l)return!1}return this.defaultResult},i.prototype.write=function(e,t,n){if(!this.enabled||this.test(e,t))return this.emit("item",e,t,n)},e.exports=i},function(e,t,n){var r=n(0),o=/\n+$/,i=new r;i.write=function(e,t,n){var r=n.length-1;if("undefined"!=typeof console&&console.log){if(console.log.apply)return console.log.apply(console,[e,t].concat(n));if(JSON&&JSON.stringify){n[r]&&"string"==typeof n[r]&&(n[r]=n[r].replace(o,""));try{for(r=0;r<n.length;r++)n[r]=JSON.stringify(n[r])}catch(e){}console.log(n.join(" "))}}},i.formatters=["color","minilog"],i.color=n(14),i.minilog=n(15),e.exports=i},function(e,t,n){var r=n(0),o=n(4),i={debug:["cyan"],info:["purple"],warn:["yellow",!0],error:["red",!0]},s=new r;s.write=function(e,t,n){console.log;console[t]&&console[t].apply&&console[t].apply(console,["%c"+e+" %c"+t,o("gray"),o.apply(o,i[t])].concat(n))},s.pipe=function(){},e.exports=s},function(e,t,n){var r=n(0),o=n(4),i={debug:["gray"],info:["purple"],warn:["yellow",!0],error:["red",!0]},s=new r;s.write=function(e,t,n){var r=console.log;"debug"!=t&&console[t]&&(r=console[t]);var s=0;if("info"!=t){for(;s<n.length&&"string"==typeof n[s];s++);r.apply(console,["%c"+e+" "+n.slice(0,s).join(" "),o.apply(o,i[t])].concat(n.slice(s)))}else r.apply(console,["%c"+e,o.apply(o,i[t])].concat(n))},s.pipe=function(){},e.exports=s},function(e,t,n){var r=n(0),o=[],i=new r;i.write=function(e,t,n){o.push([e,t,n])},i.get=function(){return o},i.empty=function(){o=[]},e.exports=i},function(e,t,n){var r=n(0),o=!1,i=new r;i.write=function(e,t,n){if("undefined"!=typeof window&&"undefined"!=typeof JSON&&JSON.stringify&&JSON.parse)try{o||(o=window.localStorage.minilog?JSON.parse(window.localStorage.minilog):[]),o.push([(new Date).toString(),e,t,n]),window.localStorage.minilog=JSON.stringify(o)}catch(e){}},e.exports=i},function(e,t,n){var r=n(0),o=(new Date).valueOf().toString(36);function i(e){this.url=e.url||"",this.cache=[],this.timer=null,this.interval=e.interval||3e4,this.enabled=!0,this.jQuery=window.jQuery,this.extras={}}r.mixin(i),i.prototype.write=function(e,t,n){this.timer||this.init(),this.cache.push([e,t].concat(n))},i.prototype.init=function(){if(this.enabled&&this.jQuery){var e=this;this.timer=setTimeout((function(){var t,n,r=[],i=e.url;if(0==e.cache.length)return e.init();for(t=0;t<e.cache.length;t++)try{JSON.stringify(e.cache[t]),r.push(e.cache[t])}catch(e){}e.jQuery.isEmptyObject(e.extras)?(n=JSON.stringify({logs:r}),i=e.url+"?client_id="+o):n=JSON.stringify(e.jQuery.extend({logs:r},e.extras)),e.jQuery.ajax(i,{type:"POST",cache:!1,processData:!1,data:n,contentType:"application/json",timeout:1e4}).success((function(t,n,r){t.interval&&(e.interval=Math.max(1e3,t.interval))})).error((function(){e.interval=3e4})).always((function(){e.init()})),e.cache=[]}),this.interval)}},i.prototype.end=function(){},i.jQueryWait=function(e){if("undefined"!=typeof window&&(window.jQuery||window.$))return e(window.jQuery||window.$);"undefined"!=typeof window&&setTimeout((function(){i.jQueryWait(e)}),200)},e.exports=i},function(e,t,n){(function(e){const t=n(20),r=n(24),o=n(1),{isWorker:i}=n(3);e.Scratch=e.Scratch||{},Object.assign(e.Scratch,t,{canFetch:()=>Promise.resolve(!0),fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((e,t)=>fetch(e,t)),canOpenWindow:()=>Promise.resolve(!1),openWindow:()=>Promise.reject(new Error("Scratch.openWindow not supported in sandboxed extensions")),canRedirect:()=>Promise.resolve(!1),redirect:()=>Promise.reject(new Error("Scratch.redirect not supported in sandboxed extensions"))});const s=new class{constructor(){this.nextExtensionId=0,this.initialRegistrations=[],this.firstRegistrationPromise=new Promise(e=>{this.firstRegistrationCallback=e}),r.waitForConnection.then(()=>{r.call("extensions","allocateWorker").then(async e=>{const[t,n]=e;this.workerId=t;try{await(e=>{if(!i)return new Promise((t,n)=>{const r=document.createElement("script");r.onload=()=>t(),r.onerror=()=>{n(new Error("Error in sandboxed script: ".concat(e,". Check the console for more information.")))},r.src=e,document.body.appendChild(r)});importScripts(e)})(n),await this.firstRegistrationPromise;const e=this.initialRegistrations;this.initialRegistrations=null,Promise.all(e).then(()=>r.call("extensions","onWorkerInit",t))}catch(e){o.error(e),r.call("extensions","onWorkerInit",t,"".concat(e))}})}),this.extensions=[]}register(e){const t=this.nextExtensionId++;this.extensions.push(e);const n="extension.".concat(this.workerId,".").concat(t),o=r.setService(n,e).then(()=>r.call("extensions","registerExtensionService",n));return this.initialRegistrations&&(this.firstRegistrationCallback(),this.initialRegistrations.push(o)),o}};e.Scratch.extensions={register:s.register.bind(s)},e.ScratchExtensions=n(26)}).call(this,n(2))},function(e,t,n){const r={ArgumentType:n(5),BlockType:n(6),TargetType:n(21),Cast:n(22)};e.exports=r},function(e,t){e.exports={SPRITE:"sprite",STAGE:"stage"}},function(e,t,n){const r=n(23),o=e=>{if("string"!=typeof e)return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(48===n||9===n)return!1}return!0};class i{static toNumber(e){if("number"==typeof e)return Number.isNaN(e)?0:e;const t=Number(e);return Number.isNaN(t)?0:t}static toBoolean(e){return"boolean"==typeof e?e:"string"==typeof e?""!==e&&"0"!==e&&"false"!==e.toLowerCase():Boolean(e)}static toString(e){return String(e)}static toRgbColorList(e){const t=i.toRgbColorObject(e);return[t.r,t.g,t.b]}static toRgbColorObject(e){let t;return"string"==typeof e&&"#"===e.substring(0,1)?(t=r.hexToRgb(e),t||(t={r:0,g:0,b:0,a:255})):t=r.decimalToRgb(i.toNumber(e)),t}static isWhiteSpace(e){return null===e||"string"==typeof e&&0===e.trim().length}static compare(e,t){let n=Number(e),r=Number(t);if(0===n&&o(e)?n=NaN:0===r&&o(t)&&(r=NaN),isNaN(n)||isNaN(r)){const n=String(e).toLowerCase(),r=String(t).toLowerCase();return n<r?-1:n>r?1:0}return n===1/0&&r===1/0||n===-1/0&&r===-1/0?0:n-r}static isInt(e){return"number"==typeof e?!!isNaN(e)||e===Math.floor(e):"boolean"==typeof e||"string"==typeof e&&e.indexOf(".")<0}static get LIST_INVALID(){return"INVALID"}static get LIST_ALL(){return"ALL"}static toListIndex(e,t,n){if("number"!=typeof e){if("all"===e)return n?i.LIST_ALL:i.LIST_INVALID;if("last"===e)return t>0?t:i.LIST_INVALID;if("random"===e||"any"===e)return t>0?1+Math.floor(Math.random()*t):i.LIST_INVALID}return(e=Math.floor(i.toNumber(e)))<1||e>t?i.LIST_INVALID:e}}e.exports=i},function(e,t){class n{static get RGB_BLACK(){return{r:0,g:0,b:0}}static get RGB_WHITE(){return{r:255,g:255,b:255}}static decimalToHex(e){e<0&&(e+=16777216);let t=Number(e).toString(16);return t="#".concat("000000".substr(0,6-t.length)).concat(t),t}static decimalToRgb(e){const t=e>>24&255;return{r:e>>16&255,g:e>>8&255,b:255&e,a:t>0?t:255}}static hexToRgb(e){e.startsWith("#")&&(e=e.substring(1));const t=parseInt(e,16);if(isNaN(t))return null;if(6===e.length)return{r:t>>16&255,g:t>>8&255,b:255&t};if(3===e.length){const e=t>>8&15,n=t>>4&15,r=15&t;return{r:e<<4|e,g:n<<4|n,b:r<<4|r}}return null}static rgbToHex(e){return n.decimalToHex(n.rgbToDecimal(e))}static rgbToDecimal(e){return(e.r<<16)+(e.g<<8)+e.b}static hexToDecimal(e){return n.rgbToDecimal(n.hexToRgb(e))}static hsvToRgb(e){let t=e.h%360;t<0&&(t+=360);const n=Math.max(0,Math.min(e.s,1)),r=Math.max(0,Math.min(e.v,1)),o=Math.floor(t/60),i=t/60-o,s=r*(1-n),c=r*(1-n*i),a=r*(1-n*(1-i));let l,u,p;switch(o){default:case 0:l=r,u=a,p=s;break;case 1:l=c,u=r,p=s;break;case 2:l=s,u=r,p=a;break;case 3:l=s,u=c,p=r;break;case 4:l=a,u=s,p=r;break;case 5:l=r,u=s,p=c}return{r:Math.floor(255*l),g:Math.floor(255*u),b:Math.floor(255*p)}}static rgbToHsv(e){const t=e.r/255,n=e.g/255,r=e.b/255,o=Math.min(Math.min(t,n),r),i=Math.max(Math.max(t,n),r);let s=0,c=0;if(o!==i){s=60*((t===o?3:n===o?5:1)-(t===o?n-r:n===o?r-t:t-n)/(i-o))%360,c=(i-o)/i}return{h:s,s:c,v:i}}static mixRgb(e,t,n){if(n<=0)return e;if(n>=1)return t;const r=1-n;return{r:r*e.r+n*t.r,g:r*e.g+n*t.g,b:r*e.b+n*t.b}}}e.exports=n},function(e,t,n){const r=n(25),o=n(1),{centralDispatchService:i}=n(3);e.exports=new class extends r{constructor(){super(),this._connectionPromise=new Promise(e=>{this._onConnect=e}),this.services={},this._onMessage=this._onMessage.bind(this,i),"undefined"!=typeof self&&(self.onmessage=this._onMessage)}get waitForConnection(){return this._connectionPromise}setService(e,t){return this.services.hasOwnProperty(e)&&o.warn("Worker dispatch replacing existing service provider for ".concat(e)),this.services[e]=t,this.waitForConnection.then(()=>this._remoteCall(i,"dispatch","setService",e))}_getServiceProvider(e){const t=this.services[e];return{provider:t||i,isRemote:!t}}_onDispatchMessage(e,t){let n;switch(t.method){case"handshake":n=this._onConnect();break;case"terminate":setTimeout(()=>self.close(),0),n=Promise.resolve();break;default:o.error("Worker dispatch received message for unknown method: ".concat(t.method))}return n}}},function(e,t,n){const r=n(1);e.exports=class{constructor(){this.callbacks=[],this.nextResponseId=0}call(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.transferCall(e,t,null,...r)}transferCall(e,t,n){try{const{provider:s,isRemote:c}=this._getServiceProvider(e);if(s){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];if(c)return this._remoteTransferCall(s,e,t,n,...o);const a=s[t].apply(s,o);return Promise.resolve(a)}return Promise.reject(new Error("Service not found: ".concat(e)))}catch(e){return Promise.reject(e)}}_isRemoteService(e){return this._getServiceProvider(e).isRemote}_remoteCall(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return this._remoteTransferCall(e,t,n,null,...o)}_remoteTransferCall(e,t,n,r){for(var o=arguments.length,i=new Array(o>4?o-4:0),s=4;s<o;s++)i[s-4]=arguments[s];return new Promise((o,s)=>{const c=this._storeCallbacks(o,s);i.length>0&&"function"==typeof i[i.length-1].func&&(i.pop(),i.pop()),r?e.postMessage({service:t,method:n,responseId:c,args:i},r):e.postMessage({service:t,method:n,responseId:c,args:i})})}_storeCallbacks(e,t){const n=this.nextResponseId++;return this.callbacks[n]=[e,t],n}_deliverResponse(e,t){try{const[n,r]=this.callbacks[e];delete this.callbacks[e],t.error?r(t.error):n(t.result)}catch(e){r.error("Dispatch callback failed: ".concat(e))}}_onMessage(e,t){const n=t.data;let o;n.args=n.args||[],n.service?o="dispatch"===n.service?this._onDispatchMessage(e,n):this.call(n.service,n.method,...n.args):void 0===n.responseId?r.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(t))):this._deliverResponse(n.responseId,n),o&&(void 0===n.responseId?r.error("Dispatch message missing required response ID: ".concat(JSON.stringify(t))):o.then(t=>e.postMessage({responseId:n.responseId,result:t}),t=>e.postMessage({responseId:n.responseId,error:"".concat(t)})))}_getServiceProvider(e){throw new Error("Could not get provider for ".concat(e,": _getServiceProvider not implemented"))}_onDispatchMessage(e,t){throw new Error("Unimplemented dispatch message handler cannot handle ".concat(t.method," method"))}}},function(e,t,n){const r=n(5),o=n(6),{argumentIndexToId:i,generateExtensionId:s}=n(27),c=e=>{if(""===e||" "===e||"w"===e)return{type:o.COMMAND,async:"w"===e};if("r"===e||"R"===e)return{type:o.REPORTER,async:"R"===e};if("b"===e)return{type:o.BOOLEAN,async:!1};if("h"===e)return{type:o.HAT,async:!1};throw new Error("Unknown ScratchX block type: ".concat(e))},a=(e,t)=>{const n={},o="string"==typeof(i=t)||"number"==typeof i||"boolean"==typeof i;var i;if(o&&(n.defaultValue=t),"s"===e)n.type=r.STRING,o||(n.defaultValue="");else if("n"===e)n.type=r.NUMBER,o||(n.defaultValue=0);else{if("m"!==e[0])throw new Error("Unknown ScratchX argument type: ".concat(e));{n.type=r.STRING;const t=e.split(/\.|:/)[1];n.menu=t}}return n},l=(e,t,n)=>r=>{const o=[];for(let e=0;e<t;e++)o.push(r[i(e)]);return n?new Promise(t=>{e(...o,t)}):e(...o)},u=(e,t,n)=>{const r={id:s(e),name:t.displayName||e,blocks:[],color1:"#4a4a5e",color2:"#31323f",color3:"#191a21"},o={getInfo:()=>r,_getStatus:n._getStatus};t.url&&(r.docsURI=t.url);for(const e of t.blocks){if(1===e.length){r.blocks.push("---");continue}const t=e[0],s=e[1],u=e[2],p=e.slice(3);let f="";const h=[],d=s.split(/%([\w.:]+)/g);for(let e=0;e<d.length;e++){const t=d[e];if(e%2==1){a(t);const n=Math.floor(e/2).toString(),r=p[n],o=i(n);h[o]=a(t,r),f+="[".concat(o,"]")}else f+=t}const g=c(t),m={opcode:u,blockType:g.type,text:f,arguments:h};r.blocks.push(m);const y=n[u],w=h.length;o[u]=l(y,w,g.async)}const u=t.menus;if(u){const e={};for(const t of Object.keys(u)||{}){const n={items:u[t]};e[t]=n}r.menus=e}return o},p=new Map;e.exports={register:(e,t,n)=>{const r=u(e,t,n);p.set(e,r),Scratch.extensions.register(r)},getStatus:e=>{const t=p.get(e);return t?t._getStatus():{status:0,msg:"does not exist"}},convert:u}},function(e,t){e.exports={generateExtensionId:e=>{const t=e.replace(/[^a-z0-9]/gi,"").toLowerCase();return"sbx".concat(t)},argumentIndexToId:e=>e.toString()}}]);
// de08ae370a7af95e13730b62091dea70a25b59a42f42d9e2068122027cc442cd =^..^=