(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9194:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2247)}])},4322:function(e){"use strict";e.exports={repository:"nextra-template"}},2247:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(1527),i=r(8717),o=r(959);function l(e){let{Component:t,pageProps:r}=e;return(0,o.useEffect)(()=>{(0,i.$)(document)},[]),(0,n.jsx)(t,{...r})}r(6819)},8717:function(e,t,r){"use strict";r.d(t,{$:function(){return l},T:function(){return o}});var n=r(4322),i=r(1256);function o(e){return"http"===e.slice(0,4)?e:i.join("/".concat(n.repository),e)}function l(e){let t=o("/favicon.png"),r=e.querySelector("link[rel*='icon']")||e.createElement("link");r.type="image/x-icon",r.rel="shortcut icon",r.href=t,e.getElementsByTagName("head")[0].appendChild(r)}},6819:function(){},1256:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else if(47===r)break;else r=47;if(47===r){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",i=0):i=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===r&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--)l>=0?n=arguments[l]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(i=n+"/"+i,o=47===n.charCodeAt(0));return(i=r(i,!o),o)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,l=o-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var c=r.length-a,f=l<c?l:c,u=-1,h=0;h<=f;++h){if(h===f){if(c>f){if(47===r.charCodeAt(a+h))return r.slice(a+h+1);if(0===h)return r.slice(a+h)}else l>f&&(47===e.charCodeAt(i+h)?u=h:0===h&&(u=0));break}var s=e.charCodeAt(i+h);if(s!==r.charCodeAt(a+h))break;47===s&&(u=h)}var g="";for(h=i+u+1;h<=o;++h)(h===o||47===e.charCodeAt(h))&&(0===g.length?g+="..":g+="/..");return g.length>0?g+r.slice(a+u):(a+=u,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return -1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var f=e.charCodeAt(n);if(47===f){if(!l){i=n+1;break}}else -1===c&&(l=!1,c=n+1),a>=0&&(f===r.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=c))}return i===o?o=c:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else -1===o&&(l=!1,o=n+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47===c){if(!o){n=a+1;break}continue}-1===i&&(o=!1,i=a+1),46===c?-1===r?r=a:1!==l&&(l=1):-1!==r&&(l=-1)}return -1===r||-1===i||0===l||1===l&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var i=e.charCodeAt(0),o=47===i;o?(n.root="/",r=1):r=0;for(var l=-1,a=0,c=-1,f=!0,u=e.length-1,h=0;u>=r;--u){if(47===(i=e.charCodeAt(u))){if(!f){a=u+1;break}continue}-1===c&&(f=!1,c=u+1),46===i?-1===l?l=u:1!==h&&(h=1):-1!==l&&(h=-1)}return -1===l||-1===c||0===h||1===h&&l===c-1&&l===a+1?-1!==c&&(0===a&&o?n.base=n.name=e.slice(1,c):n.base=n.name=e.slice(a,c)):(0===a&&o?(n.name=e.slice(1,l),n.base=e.slice(1,c)):(n.name=e.slice(a,l),n.base=e.slice(a,c)),n.ext=e.slice(l,c)),a>0?n.dir=e.slice(0,a-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},l=!0;try{t[e](o,o.exports,n),l=!1}finally{l&&delete r[e]}return o.exports}n.ab="//";var i=n(114);e.exports=i}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(9194),t(1624)}),_N_E=e.O()}]);