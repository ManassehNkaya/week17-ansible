var e={996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EditableList=void 0;class i{doc;win;element;observer;savedValues;constructor(e,t){this.win=t||window,this.doc=t?t?.document:document;const i=this.doc.getElementById(e);if(!i)throw new Error(`Element ${e} is not found`);this.element=i,this.savedValues=this.getFromUI(),t||(this.observer=new MutationObserver((e=>{for(const t of e)if(0===t.target.childNodes.length){i.innerHTML="<li></li>";break}})),this.observer.observe(i,{childList:!0}))}getFromUI(){const e=[];return this.element.childNodes.forEach((t=>{t.textContent&&e.push(t.textContent.trim())})),e}setToUI(e){let t="";for(let i of e)i&&(i=i.trim(),t+=`<li>${i}</li>`);this.element.innerHTML=t}update(e){this.savedValues=i.stringToList(e),this.setToUI(this.savedValues)}save(){this.savedValues=this.getFromUI()}reset(){this.setToUI(this.savedValues)}getSavedValueAsString(){return i.listToString(this.savedValues)}isChanged(){if(!this.savedValues)return!0;const e=this.getFromUI();if(this.savedValues.length!==e.length)return!0;for(let t=0;t<this.savedValues.length;t++)if(this.savedValues[t]!==e[t])return!0;return!1}isEmpty(){const e=this.getFromUI();for(const t of e)if(t.length>0)return!1;return!0}focus(){this.element.focus();const e=this.getFromUI(),t=e.length-1,i=this.element.childNodes[t].firstChild;if(i){const s=this.doc.createRange();s.setStart(i,e[t].length);const o=this.win.getSelection();o?.removeAllRanges(),o?.addRange(s)}}static stringToList(e){const t=[];if(!e)return[""];e=e.trim();const i=/\d+\.\s*(.*)/;for(let s of e.split("\n"))if(s=s.trim(),s){const e=s.match(i);e?t.push(e[1]):t.push(s)}return t}static listToString(e){let t="",i=0;for(let s=0;s<e.length;s++)e[s]&&(i++,t+=`${i}. ${e[s]}\n`);return t}}t.EditableList=i},831:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return g.default}});var s=v(i(213)),o=v(i(808)),n=v(i(792)),r=v(i(910)),a=v(i(518)),l=v(i(343)),d=v(i(948)),c=v(i(73)),h=v(i(186)),u=v(i(671)),p=v(i(507)),f=v(i(744)),b=v(i(37)),g=v(i(775));function v(e){return e&&e.__esModule?e:{default:e}}},213:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},311:(e,t)=>{function i(e){return 14+(e+64>>>9<<4)+1}function s(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function o(e,t,i,o,n,r){return s((a=s(s(t,e),s(o,r)))<<(l=n)|a>>>32-l,i);var a,l}function n(e,t,i,s,n,r,a){return o(t&i|~t&s,e,t,n,r,a)}function r(e,t,i,s,n,r,a){return o(t&s|i&~s,e,t,n,r,a)}function a(e,t,i,s,n,r,a){return o(t^i^s,e,t,n,r,a)}function l(e,t,i,s,n,r,a){return o(i^(t|~s),e,t,n,r,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var o=0;o<t.length;++o)e[o]=t.charCodeAt(o)}return function(e){for(var t=[],i=32*e.length,s="0123456789abcdef",o=0;o<i;o+=8){var n=e[o>>5]>>>o%32&255,r=parseInt(s.charAt(n>>>4&15)+s.charAt(15&n),16);t.push(r)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[i(t)-1]=t;for(var o=1732584193,d=-271733879,c=-1732584194,h=271733878,u=0;u<e.length;u+=16){var p=o,f=d,b=c,g=h;o=n(o,d,c,h,e[u],7,-680876936),h=n(h,o,d,c,e[u+1],12,-389564586),c=n(c,h,o,d,e[u+2],17,606105819),d=n(d,c,h,o,e[u+3],22,-1044525330),o=n(o,d,c,h,e[u+4],7,-176418897),h=n(h,o,d,c,e[u+5],12,1200080426),c=n(c,h,o,d,e[u+6],17,-1473231341),d=n(d,c,h,o,e[u+7],22,-45705983),o=n(o,d,c,h,e[u+8],7,1770035416),h=n(h,o,d,c,e[u+9],12,-1958414417),c=n(c,h,o,d,e[u+10],17,-42063),d=n(d,c,h,o,e[u+11],22,-1990404162),o=n(o,d,c,h,e[u+12],7,1804603682),h=n(h,o,d,c,e[u+13],12,-40341101),c=n(c,h,o,d,e[u+14],17,-1502002290),o=r(o,d=n(d,c,h,o,e[u+15],22,1236535329),c,h,e[u+1],5,-165796510),h=r(h,o,d,c,e[u+6],9,-1069501632),c=r(c,h,o,d,e[u+11],14,643717713),d=r(d,c,h,o,e[u],20,-373897302),o=r(o,d,c,h,e[u+5],5,-701558691),h=r(h,o,d,c,e[u+10],9,38016083),c=r(c,h,o,d,e[u+15],14,-660478335),d=r(d,c,h,o,e[u+4],20,-405537848),o=r(o,d,c,h,e[u+9],5,568446438),h=r(h,o,d,c,e[u+14],9,-1019803690),c=r(c,h,o,d,e[u+3],14,-187363961),d=r(d,c,h,o,e[u+8],20,1163531501),o=r(o,d,c,h,e[u+13],5,-1444681467),h=r(h,o,d,c,e[u+2],9,-51403784),c=r(c,h,o,d,e[u+7],14,1735328473),o=a(o,d=r(d,c,h,o,e[u+12],20,-1926607734),c,h,e[u+5],4,-378558),h=a(h,o,d,c,e[u+8],11,-2022574463),c=a(c,h,o,d,e[u+11],16,1839030562),d=a(d,c,h,o,e[u+14],23,-35309556),o=a(o,d,c,h,e[u+1],4,-1530992060),h=a(h,o,d,c,e[u+4],11,1272893353),c=a(c,h,o,d,e[u+7],16,-155497632),d=a(d,c,h,o,e[u+10],23,-1094730640),o=a(o,d,c,h,e[u+13],4,681279174),h=a(h,o,d,c,e[u],11,-358537222),c=a(c,h,o,d,e[u+3],16,-722521979),d=a(d,c,h,o,e[u+6],23,76029189),o=a(o,d,c,h,e[u+9],4,-640364487),h=a(h,o,d,c,e[u+12],11,-421815835),c=a(c,h,o,d,e[u+15],16,530742520),o=l(o,d=a(d,c,h,o,e[u+2],23,-995338651),c,h,e[u],6,-198630844),h=l(h,o,d,c,e[u+7],10,1126891415),c=l(c,h,o,d,e[u+14],15,-1416354905),d=l(d,c,h,o,e[u+5],21,-57434055),o=l(o,d,c,h,e[u+12],6,1700485571),h=l(h,o,d,c,e[u+3],10,-1894986606),c=l(c,h,o,d,e[u+10],15,-1051523),d=l(d,c,h,o,e[u+1],21,-2054922799),o=l(o,d,c,h,e[u+8],6,1873313359),h=l(h,o,d,c,e[u+15],10,-30611744),c=l(c,h,o,d,e[u+6],15,-1560198380),d=l(d,c,h,o,e[u+13],21,1309151649),o=l(o,d,c,h,e[u+4],6,-145523070),h=l(h,o,d,c,e[u+11],10,-1120210379),c=l(c,h,o,d,e[u+2],15,718787259),d=l(d,c,h,o,e[u+9],21,-343485551),o=s(o,p),d=s(d,f),c=s(c,b),h=s(h,g)}return[o,d,c,h]}(function(e){if(0===e.length)return[];for(var t=8*e.length,s=new Uint32Array(i(t)),o=0;o<t;o+=8)s[o>>5]|=(255&e[o/8])<<o%32;return s}(e),8*e.length))}},140:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:i}},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},792:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=i(37))&&s.__esModule?s:{default:s};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");var t,i=new Uint8Array(16);return i[0]=(t=parseInt(e.slice(0,8),16))>>>24,i[1]=t>>>16&255,i[2]=t>>>8&255,i[3]=255&t,i[4]=(t=parseInt(e.slice(9,13),16))>>>8,i[5]=255&t,i[6]=(t=parseInt(e.slice(14,18),16))>>>8,i[7]=255&t,i[8]=(t=parseInt(e.slice(19,23),16))>>>8,i[9]=255&t,i[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,i[11]=t/4294967296&255,i[12]=t>>>24&255,i[13]=t>>>16&255,i[14]=t>>>8&255,i[15]=255&t,i}},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},858:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(s)};var s=new Uint8Array(16)},42:(e,t)=>{function i(e,t,i,s){switch(e){case 0:return t&i^~t&s;case 1:case 3:return t^i^s;case 2:return t&i^t&s^i&s}}function s(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var r=0;r<n.length;++r)e.push(n.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var a=e.length/4+2,l=Math.ceil(a/16),d=new Array(l),c=0;c<l;++c){for(var h=new Uint32Array(16),u=0;u<16;++u)h[u]=e[64*c+4*u]<<24|e[64*c+4*u+1]<<16|e[64*c+4*u+2]<<8|e[64*c+4*u+3];d[c]=h}d[l-1][14]=8*(e.length-1)/Math.pow(2,32),d[l-1][14]=Math.floor(d[l-1][14]),d[l-1][15]=8*(e.length-1)&4294967295;for(var p=0;p<l;++p){for(var f=new Uint32Array(80),b=0;b<16;++b)f[b]=d[p][b];for(var g=16;g<80;++g)f[g]=s(f[g-3]^f[g-8]^f[g-14]^f[g-16],1);for(var v=o[0],m=o[1],y=o[2],x=o[3],C=o[4],w=0;w<80;++w){var $=Math.floor(w/20),k=s(v,5)+i($,m,y,x)+C+t[$]+f[w]>>>0;C=x,x=y,y=s(m,30)>>>0,m=v,v=k}o[0]=o[0]+v>>>0,o[1]=o[1]+m>>>0,o[2]=o[2]+y>>>0,o[3]=o[3]+x>>>0,o[4]=o[4]+C>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}},910:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=a;for(var s,o=(s=i(37))&&s.__esModule?s:{default:s},n=[],r=0;r<256;++r)n.push((r+256).toString(16).slice(1));function a(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}t.default=function(e,t=0){var i=a(e,t);if(!(0,o.default)(i))throw TypeError("Stringified UUID is invalid");return i}},518:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o,n,r=(s=i(858))&&s.__esModule?s:{default:s},a=i(910),l=0,d=0;t.default=function(e,t,i){var s=t&&i||0,c=t||new Array(16),h=(e=e||{}).node,u=e.clockseq;if(e._v6||(h||(h=o),null==u&&(u=n)),null==h||null==u){var p=e.random||(e.rng||r.default)();null==h&&(h=[p[0],p[1],p[2],p[3],p[4],p[5]],o||e._v6||(h[0]|=1,o=h)),null==u&&(u=16383&(p[6]<<8|p[7]),void 0!==n||e._v6||(n=u))}var f=void 0!==e.msecs?e.msecs:Date.now(),b=void 0!==e.nsecs?e.nsecs:d+1,g=f-l+(b-d)/1e4;if(g<0&&void 0===e.clockseq&&(u=u+1&16383),(g<0||f>l)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,d=b,n=u;var v=(1e4*(268435455&(f+=122192928e5))+b)%4294967296;c[s++]=v>>>24&255,c[s++]=v>>>16&255,c[s++]=v>>>8&255,c[s++]=255&v;var m=f/4294967296*1e4&268435455;c[s++]=m>>>8&255,c[s++]=255&m,c[s++]=m>>>24&15|16,c[s++]=m>>>16&255,c[s++]=u>>>8|128,c[s++]=255&u;for(var y=0;y<6;++y)c[s+y]=h[y];return t||(0,a.unsafeStringify)(c)}},343:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=(t="string"==typeof e?(0,o.default)(e):e,Uint8Array.of((15&t[6])<<4|t[7]>>4&15,(15&t[7])<<4|(240&t[4])>>4,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,(15&t[1])<<4|(240&t[2])>>4,96|15&t[2],t[3],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,n.unsafeStringify)(i):i};var s,o=(s=i(792))&&s.__esModule?s:{default:s},n=i(910)},948:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i(25)),o=n(i(311));function n(e){return e&&e.__esModule?e:{default:e}}var r=(0,s.default)("v3",48,o.default);t.default=r},25:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,i){function s(e,s,r,a){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],i=0;i<e.length;++i)t.push(e.charCodeAt(i));return t}(e)),"string"==typeof s&&(s=(0,n.default)(s)),16!==(null===(l=s)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var d=new Uint8Array(16+e.length);if(d.set(s),d.set(e,s.length),(d=i(d))[6]=15&d[6]|t,d[8]=63&d[8]|128,r){a=a||0;for(var c=0;c<16;++c)r[a+c]=d[c];return r}return(0,o.unsafeStringify)(d)}try{s.name=e}catch(e){}return s.DNS=r,s.URL=a,s};var s,o=i(910),n=(s=i(792))&&s.__esModule?s:{default:s},r=t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",a=t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8"},73:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(i(140)),o=r(i(858)),n=i(910);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,i){if(s.default.randomUUID&&!t&&!e)return s.default.randomUUID();var r=(e=e||{}).random||(e.rng||o.default)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){i=i||0;for(var a=0;a<16;++a)t[i+a]=r[a];return t}return(0,n.unsafeStringify)(r)}},186:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i(25)),o=n(i(42));function n(e){return e&&e.__esModule?e:{default:e}}var r=(0,s.default)("v5",80,o.default);t.default=r},671:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e={},t,i=0){var r=(0,o.default)(l(l({},e),{},{_v6:!0}),new Uint8Array(16));if(r=(0,n.default)(r),t){for(var a=0;a<16;a++)t[i+a]=r[a];return t}return(0,s.unsafeStringify)(r)};var s=i(910),o=r(i(518)),n=r(i(343));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},507:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=(t="string"==typeof e?(0,o.default)(e):e,Uint8Array.of((15&t[3])<<4|t[4]>>4&15,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|15&t[6],t[7],(15&t[1])<<4|(240&t[2])>>4,(15&t[2])<<4|(240&t[3])>>4,16|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,n.unsafeStringify)(i):i};var s,o=(s=i(792))&&s.__esModule?s:{default:s},n=i(910)},744:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=i(858))&&s.__esModule?s:{default:s},n=i(910),r=null,a=null,l=0;t.default=function(e,t,i){e=e||{};var s=t&&i||0,d=t||new Uint8Array(16),c=e.random||(e.rng||o.default)(),h=void 0!==e.msecs?e.msecs:Date.now(),u=void 0!==e.seq?e.seq:null,p=a,f=r;return h>l&&void 0===e.msecs&&(l=h,null!==u&&(p=null,f=null)),null!==u&&(u>2147483647&&(u=2147483647),p=u>>>19&4095,f=524287&u),null!==p&&null!==f||(p=(p=127&c[6])<<8|c[7],f=(f=(f=63&c[8])<<8|c[9])<<5|c[10]>>>3),h+1e4>l&&null===u?++f>524287&&(f=0,++p>4095&&(p=0,l++)):l=h,a=p,r=f,d[s++]=l/1099511627776&255,d[s++]=l/4294967296&255,d[s++]=l/16777216&255,d[s++]=l/65536&255,d[s++]=l/256&255,d[s++]=255&l,d[s++]=p>>>4&15|112,d[s++]=255&p,d[s++]=f>>>13&63|128,d[s++]=f>>>5&255,d[s++]=f<<3&255|7&c[10],d[s++]=c[11],d[s++]=c[12],d[s++]=c[13],d[s++]=c[14],d[s++]=c[15],t||(0,n.unsafeStringify)(d)}},37:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=i(656))&&s.__esModule?s:{default:s};t.default=function(e){return"string"==typeof e&&o.default.test(e)}},775:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=i(37))&&s.__esModule?s:{default:s};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},894:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>qi,Button:()=>Ps,Checkbox:()=>Vs,DataGrid:()=>go,DataGridCell:()=>xo,DataGridCellTypes:()=>Ns,DataGridRow:()=>mo,DataGridRowTypes:()=>js,Divider:()=>Io,DividerRole:()=>wo,Dropdown:()=>qo,DropdownPosition:()=>To,GenerateHeaderOptions:()=>_s,Link:()=>Qo,Option:()=>Yo,PanelTab:()=>rn,PanelView:()=>ln,Panels:()=>on,ProgressRing:()=>hn,Radio:()=>xn,RadioGroup:()=>bn,RadioGroupOrientation:()=>$o,Tag:()=>wn,TextArea:()=>Pn,TextAreaResize:()=>kn,TextField:()=>Fn,TextFieldType:()=>Tn,allComponents:()=>Vn,provideVSCodeDesignSystem:()=>at,vsCodeBadge:()=>Gi,vsCodeButton:()=>Bs,vsCodeCheckbox:()=>Hs,vsCodeDataGrid:()=>vo,vsCodeDataGridCell:()=>Co,vsCodeDataGridRow:()=>yo,vsCodeDivider:()=>Oo,vsCodeDropdown:()=>Go,vsCodeLink:()=>Xo,vsCodeOption:()=>Jo,vsCodePanelTab:()=>an,vsCodePanelView:()=>dn,vsCodePanels:()=>nn,vsCodeProgressRing:()=>un,vsCodeRadio:()=>Cn,vsCodeRadioGroup:()=>gn,vsCodeTag:()=>$n,vsCodeTextArea:()=>Bn,vsCodeTextField:()=>Ln});const s=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===s.trustedTypes&&(s.trustedTypes={createPolicy:(e,t)=>t});const o={configurable:!1,enumerable:!1,writable:!1};void 0===s.FAST&&Reflect.defineProperty(s,"FAST",Object.assign({value:Object.create(null)},o));const n=s.FAST;if(void 0===n.getById){const e=Object.create(null);Reflect.defineProperty(n,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},o))}const r=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const l=s.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function n(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&s.requestAnimationFrame(n),e.push(t)},process:n})})),d=s.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let c=d;const h=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${h}{`,p=`}${h}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(c!==d)throw new Error("The HTML policy can only be set once.");c=e},createHTML:e=>c.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${u}${e}${p}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class b{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class g{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new b(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new b(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const v=n.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=f.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new g(e))),i}const r=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class d extends b{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new d(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function m(e,t){v.defineProperty(e,t)}const y=n.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}v.defineProperty(x.prototype,"index"),v.defineProperty(x.prototype,"length");const C=Object.seal(new x);class w{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function $(e){return e.map((e=>e instanceof w?$(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function k(e){return e.map((e=>e instanceof w?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}w.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new T(t,e)}return e=>new A(e)})();let I=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},O=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(f.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),I=(e,t)=>{e.adoptedStyleSheets.push(...t)},O=(e,t)=>{for(const i of t){const t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class T extends w{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=k(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=$(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){I(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){O(e,this.styleSheets),super.removeStylesFrom(e)}}let S=0;class A extends w{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=k(e),this.styleSheets=$(e),this.styleClass="fast-style-class-"+ ++S}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const E=Object.freeze({locate:a()}),R={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},D={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class P{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=R)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||f.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":f.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(E.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new P(e,s)):i.push(new P(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function B(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),E.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const M={mode:"open"},F={},L=n.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class V{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=P.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?M:null===t.shadowOptions?void 0:Object.assign(Object.assign({},M),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?F:Object.assign(Object.assign({},F),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?w.create(t.styles):t.styles instanceof w?t.styles:w.create([t.styles])}get isDefined(){return!!L.getByType(this.type)}define(e=customElements){const t=this.type;if(L.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)v.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function H(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}V.forType=L.getByType;const _=new WeakMap,N={bubbles:!0,composed:!0,cancelable:!0};function j(e){return e.shadowRoot||_.get(e)||null}class z extends g{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&_.set(e,t)}const s=v.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return v.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,v.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=j(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=j(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,C)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,C);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,C);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},N),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=j(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=V.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new z(e,i)}}function U(e){return class extends e{constructor(){super(),z.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const q=Object.assign(U(HTMLElement),{from:e=>U(e),define:(e,t)=>new V(e,t).define().type}),G=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=G.get(i);void 0===s&&G.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=G.get(t);if(void 0!==i)return i.get(e)});class K{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,me(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new re(s,e,t))}}function W(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],Oe(o)||(t[o]=e[o]);return t}const Q=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new re(e,1,e),transient:e=>new re(e,2,e)}),X=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Q.singleton})}),Y=new Map;function J(e){return t=>Reflect.getOwnMetadata(e,t)}let Z=null;const ee=Object.freeze({createContainer:e=>new ge(null,Object.assign({},X.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ee.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(fe,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ee.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ge(e,Object.assign({},X.default,t,{parentLocator:ee.findParentContainer})):Z||(Z=new ge(null,Object.assign({},X.default,t,{parentLocator:()=>null}))),getDesignParamtypes:J("design:paramtypes"),getAnnotationParamtypes:J("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Y.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=ee.getDesignParamtypes(e),s=ee.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?W(ee.getDependencies(i)):[]}else t=W(s);else if(void 0===s)t=W(i);else{t=W(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],Oe(r)||(t[r]=s[r])}}else t=W(i);Y.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?ee.findResponsibleContainer(this):ee.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof q){const s=this.$fastController,n=()=>{ee.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||we,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);t?ee.defineProperty(e,t,n,o):ee.getOrCreateAnnotationParamTypes(e)[i]=n};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new K(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=ee.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)ee.defineProperty(t,i,e[0]);else{const i=s?ee.getOrCreateAnnotationParamTypes(s.value):ee.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return ye.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=se)=>(e.register=function(t){return ye.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),te=ee.createInterface("Container");function ie(e){return function(t){const i=function(e,t,s){ee.inject(i)(e,t,s)};return i.$isResolver=!0,i.resolve=function(i,s){return e(t,i,s)},i}}ee.inject;const se={scoped:!1};function oe(e,t,i){ee.inject(oe)(e,t,i)}function ne(e,t){return t.getFactory(e).construct(t)}ie(((e,t,i)=>()=>i.get(e))),ie(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),oe.$isResolver=!0,oe.resolve=()=>{},ie(((e,t,i)=>{const s=ne(e,t),o=new re(e,0,s);return i.registerResolver(e,o),s})),ie(((e,t,i)=>ne(e,t)));class re{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function ae(e){return this.get(e)}function le(e,t){return t(e)}class de{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(ae,e)):new this.Type(...this.dependencies.map(ae,e),...t),null==this.transformers?i:this.transformers.reduce(le,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ce={$isResolver:!0,resolve:(e,t)=>t};function he(e){return"function"==typeof e.register}function ue(e){return function(e){return he(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const pe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),fe="__DI_LOCATE_PARENT__",be=new Map;class ge{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(te,ce),e instanceof Node&&e.addEventListener(fe,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],$e(t))if(he(t))t.register(this,r);else if(void 0!==t.prototype)ye.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],$e(s)&&(he(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){xe(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof re&&4===s.strategy?s.state.push(t):i.set(e,new re(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(xe(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=ue(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(xe(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=ue(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){xe(e);const i=this;let s,o=i;if(t){let t=r;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(Ce(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return Ce(s,o,i);if(o=o.parent,null==o)return r}return r}getFactory(e){let t=be.get(e);if(void 0===t){if(ke(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new de(e,ee.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new ge(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(pe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(he(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const ve=new WeakMap;function me(e){return function(t,i,s){if(ve.has(s))return ve.get(s);const o=e(t,i,s);return ve.set(s,o),o}}const ye=Object.freeze({instance:(e,t)=>new re(e,0,t),singleton:(e,t)=>new re(e,1,t),transient:(e,t)=>new re(e,2,t),callback:(e,t)=>new re(e,3,t),cachedCallback:(e,t)=>new re(e,3,me(t)),aliasTo:(e,t)=>new re(t,5,e)});function xe(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ce(e,t,i){if(e instanceof re&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const we="(anonymous)";function $e(e){return"object"==typeof e&&null!==e||"function"==typeof e}const ke=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),Ie={};function Oe(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ie[e];if(void 0!==t)return t;const i=e.length;if(0===i)return Ie[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return Ie[e]=!1;return Ie[e]=!0}default:return!1}}function Te(e){return`${e.toLowerCase()}:presentation`}const Se=new Map,Ae=Object.freeze({define(e,t,i){const s=Te(e);void 0===Se.get(s)?Se.set(s,t):Se.set(s,!1),i.register(ye.instance(s,t))},forTag(e,t){const i=Te(e),s=Se.get(i);return!1===s?ee.findResponsibleContainer(t).get(i):s||null}});class Ee{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?w.create(t):t instanceof w?t:w.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Re extends q{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Ae.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Pe(this===Re?class extends Re{}:this,e,t)}}function De(e,t,i){return"function"==typeof e?e(t,i):e}H([m],Re.prototype,"template",void 0),H([m],Re.prototype,"styles",void 0);class Pe{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Ee(De(i.template,e,i),De(i.styles,e,i));e.definePresentation(t);let o=De(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:De(i.elementOptions,e,i),shadowOptions:o,attributes:De(i.attributes,e,i)})}})}}class Be{createCSS(){return""}createBehavior(){}}function Me(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Fe=document.createElement("div");class Le{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Ve extends Le{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends Le{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class _e{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),v.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}H([m],_e.prototype,"target",void 0);class Ne{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class je{setProperty(e,t){je.properties[e]=t;for(const i of je.roots.values())qe.getOrCreate(je.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete je.properties[e];for(const t of je.roots.values())qe.getOrCreate(je.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=je;if(!t.has(e)){t.add(e);const i=qe.getOrCreate(this.normalizeRoot(e));for(const e in je.properties)i.setProperty(e,je.properties[e])}}static unregisterRoot(e){const{roots:t}=je;if(t.has(e)){t.delete(e);const i=qe.getOrCreate(je.normalizeRoot(e));for(const e in je.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Fe?document:e}}je.roots=new Set,je.properties={};const ze=new WeakMap,Ue=f.supportsAdoptedStyleSheets?class extends Le{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(w.create([t]))}}:_e,qe=Object.freeze({getOrCreate(e){if(ze.has(e))return ze.get(e);let t;return t=e===Fe?new je:e instanceof Document?f.supportsAdoptedStyleSheets?new Ve:new He:e instanceof q?new Ue(e):new Ne(e),ze.set(e,t),t}});class Ge extends Be{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ge.uniqueId(),Ge.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ge({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return Ge.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Ye.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Ge&&(t=this.alias(t)),Ye.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Ye.existsFor(e)&&Ye.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Fe,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!Ye.existsFor(t)&&Ye.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}Ge.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Ge.tokensById=new Map;class Ke{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=v.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,C))}}class We{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),v.getNotifier(this).notify(e.id))}get(e){return v.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Qe=new WeakMap,Xe=new WeakMap;class Ye{constructor(e){this.target=e,this.store=new We,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=Ge.getTokenById(t);if(i&&(i.notify(this.target),Ge.isCSSDesignToken(i))){const t=this.parent,s=this.isReflecting(i);if(t){const o=t.get(i),n=e.get(i);o===n||s?o===n&&s&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else s||this.reflectToCSS(i)}}},Qe.set(e,this),v.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof q?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Qe.get(e)||new Ye(e)}static existsFor(e){return Qe.has(e)}static findParent(e){if(Fe!==e.target){let t=Me(e.target);for(;null!==t;){if(Qe.has(t))return Qe.get(t);t=Me(t)}return Ye.getOrCreate(Fe)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Fe?Ye.getOrCreate(Fe):null}while(null!==i);return null}get parent(){return Xe.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Ye.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){Ge.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ge.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Ye.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Xe.get(this).removeChild(this)}appendChild(e){e.parent&&Xe.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Xe.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),v.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),v.getNotifier(this.store).unsubscribe(e),e.parent===this&&Xe.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=Me(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ye.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ye.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=Ge.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);Ge.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Ke(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Ye.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){qe.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ye.getOrCreate(t).get(e)))}remove(e,t){qe.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},H([m],Ye.prototype,"children",void 0);const Je=Object.freeze({create:function(e){return Ge.from(e)},notifyConnection:e=>!(!e.isConnected||!Ye.existsFor(e)||(Ye.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!Ye.existsFor(e)||(Ye.getOrCreate(e).unbind(),0)),registerRoot(e=Fe){je.registerRoot(e)},unregisterRoot(e=Fe){je.unregisterRoot(e)}}),Ze=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),et=new Map,tt=new Map;let it=null;const st=ee.createInterface((e=>e.cachedCallback((e=>(null===it&&(it=new nt(null,e)),it))))),ot=Object.freeze({tagFor:e=>tt.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ee.findResponsibleContainer(e).get(st)},getOrCreate(e){if(!e)return null===it&&(it=ee.getOrCreateDOMContainer().get(st)),it;const t=e.$$designSystem$$;if(t)return t;const i=ee.getOrCreateDOMContainer(e);if(i.has(st,!1))return i.get(st);{const t=new nt(e,i);return i.register(ye.instance(st,t)),t}}});class nt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ze.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=et.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case Ze.ignoreDuplicate:return;case Ze.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=et.get(u)}}f&&((tt.has(h)||h===Re)&&(h=class extends h{}),et.set(u,h),tt.set(h,u),c&&tt.set(c,u)),i.push(new rt(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Je.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class rt{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Ae.define(this.name,e,this.container)}defineElement(e){this.definition=new V(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ot.tagFor(e)}}function at(e){return ot.getOrCreate(e).withPrefix("vscode")}class lt extends Re{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}H([B({attribute:"fill"})],lt.prototype,"fill",void 0),H([B({attribute:"color"})],lt.prototype,"color",void 0),H([B({mode:"boolean"})],lt.prototype,"circular",void 0);class dt{constructor(){this.targetIndex=0}}class ct extends dt{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class ht extends dt{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ut(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=v.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function pt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function ft(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function gt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function vt(e){f.setAttribute(this.target,this.targetName,e)}function mt(e){f.setBooleanAttribute(this.target,this.targetName,e)}function yt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function xt(e){this.target[this.targetName]=e}function Ct(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class wt extends ct{constructor(e){super(),this.binding=e,this.bind=ut,this.unbind=ft,this.updateTarget=vt,this.isBindingVolatile=v.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=xt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>f.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=mt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=pt,this.unbind=gt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Ct)}}targetAtContent(){this.updateTarget=yt,this.unbind=bt}createBehavior(e){return new $t(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class $t{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let kt=null;class It{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){kt=this}static borrow(e){const t=kt||new It;return t.directives=e,t.reset(),kt=null,t}}function Ot(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new wt(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const Tt=p.length;function St(e,t){const i=t.split(u);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(p);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+Tt)}""!==r&&s.push(r)}return s}function At(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=St(e,a);let d=null;null===l?i&&(d=new wt((()=>a)),d.targetName=r.name):d=Ot(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function Et(e,t,i){const s=St(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const Rt=document.createRange();class Dt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Rt.setStartBefore(e[0].firstChild),Rt.setEndAfter(e[e.length-1].lastChild),Rt.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class Pt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=It.borrow(t);At(s,e,!0);const o=s.behaviorFactories;s.reset();const n=f.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:At(s,r);break;case 3:Et(s,r,n);break;case 8:f.isMarker(r)&&s.addFactory(t[f.extractDirectiveIndexFromMarker(r)])}let a=0;(f.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=f.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new Dt(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,C),s.appendTo(t),s}}const Bt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Mt(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof Pt){const e=r;r=()=>e}if("function"==typeof r&&(r=new wt(r)),r instanceof ct){const e=Bt.exec(n);null!==e&&(r.targetName=e[2])}r instanceof dt?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new Pt(s,i)}const Ft=(e,t)=>Mt`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;function Lt(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof Be){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof w||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=w.create(i);return s.length&&o.withBehaviors(...s),o}function Vt(e){return`:host([hidden]){display:none}:host{display:${e}}`}function Ht(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const _t=new Map;let Nt=!1;function jt(e,t){const i=Je.create(e);return t&&(t.includes("--fake-vscode-token")&&(t=`${t}-${"id"+Math.random().toString(16).slice(2)}`),_t.set(t,i)),Nt||(function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{Ht(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ht(e)}))}(_t),Nt=!0),i}const zt=jt("background","--vscode-editor-background").withDefault("#1e1e1e"),Ut=jt("border-width").withDefault(1),qt=jt("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Gt=(jt("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),jt("corner-radius").withDefault(0)),Kt=jt("corner-radius-round").withDefault(2),Wt=jt("design-unit").withDefault(4),Qt=jt("disabled-opacity").withDefault(.4),Xt=jt("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Yt=jt("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),Jt=(jt("font-weight","--vscode-font-weight").withDefault("400"),jt("foreground","--vscode-foreground").withDefault("#cccccc")),Zt=jt("input-height").withDefault("26"),ei=jt("input-min-width").withDefault("100px"),ti=jt("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),ii=jt("type-ramp-base-line-height").withDefault("normal"),si=jt("type-ramp-minus1-font-size").withDefault("11px"),oi=jt("type-ramp-minus1-line-height").withDefault("16px"),ni=(jt("type-ramp-minus2-font-size").withDefault("9px"),jt("type-ramp-minus2-line-height").withDefault("16px"),jt("type-ramp-plus1-font-size").withDefault("16px"),jt("type-ramp-plus1-line-height").withDefault("24px"),jt("scrollbarWidth").withDefault("10px")),ri=jt("scrollbarHeight").withDefault("10px"),ai=jt("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),li=jt("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),di=jt("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ci=jt("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),hi=jt("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),ui=jt("button-border","--vscode-button-border").withDefault("transparent"),pi=jt("button-icon-background").withDefault("transparent"),fi=jt("button-icon-corner-radius").withDefault("5px"),bi=jt("button-icon-outline-offset").withDefault(0),gi=jt("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),vi=jt("button-icon-padding").withDefault("3px"),mi=jt("button-primary-background","--vscode-button-background").withDefault("#0e639c"),yi=jt("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),xi=jt("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Ci=jt("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),wi=jt("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),$i=jt("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),ki=jt("button-padding-horizontal").withDefault("11px"),Ii=jt("button-padding-vertical").withDefault("4px"),Oi=jt("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Ti=jt("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Si=jt("checkbox-corner-radius").withDefault(3),Ai=(jt("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),jt("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Ei=jt("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Ri=jt("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Di=jt("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Pi=jt("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Bi=jt("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Mi=(jt("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),jt("dropdown-list-max-height").withDefault("200px")),Fi=jt("input-background","--vscode-input-background").withDefault("#3c3c3c"),Li=jt("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Vi=(jt("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),jt("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),Hi=jt("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),_i=jt("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Ni=jt("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),ji=jt("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),zi=jt("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Ui=(jt("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),jt("panel-view-border","--vscode-panel-border").withDefault("#80808059"),jt("tag-corner-radius").withDefault("2px"));class qi extends lt{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Gi=qi.compose({baseName:"badge",template:Ft,styles:(e,t)=>Lt`
	${Vt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Yt};
		font-size: ${si};
		line-height: ${oi};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ci};
		border: calc(${Ut} * 1px) solid ${ui};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${hi};
		display: flex;
		height: calc(${Wt} * 4px);
		justify-content: center;
		min-width: calc(${Wt} * 4px + 2px);
		min-height: calc(${Wt} * 4px + 2px);
		padding: 3px 6px;
	}
`});Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;class Ki{}H([B({attribute:"aria-atomic"})],Ki.prototype,"ariaAtomic",void 0),H([B({attribute:"aria-busy"})],Ki.prototype,"ariaBusy",void 0),H([B({attribute:"aria-controls"})],Ki.prototype,"ariaControls",void 0),H([B({attribute:"aria-current"})],Ki.prototype,"ariaCurrent",void 0),H([B({attribute:"aria-describedby"})],Ki.prototype,"ariaDescribedby",void 0),H([B({attribute:"aria-details"})],Ki.prototype,"ariaDetails",void 0),H([B({attribute:"aria-disabled"})],Ki.prototype,"ariaDisabled",void 0),H([B({attribute:"aria-errormessage"})],Ki.prototype,"ariaErrormessage",void 0),H([B({attribute:"aria-flowto"})],Ki.prototype,"ariaFlowto",void 0),H([B({attribute:"aria-haspopup"})],Ki.prototype,"ariaHaspopup",void 0),H([B({attribute:"aria-hidden"})],Ki.prototype,"ariaHidden",void 0),H([B({attribute:"aria-invalid"})],Ki.prototype,"ariaInvalid",void 0),H([B({attribute:"aria-keyshortcuts"})],Ki.prototype,"ariaKeyshortcuts",void 0),H([B({attribute:"aria-label"})],Ki.prototype,"ariaLabel",void 0),H([B({attribute:"aria-labelledby"})],Ki.prototype,"ariaLabelledby",void 0),H([B({attribute:"aria-live"})],Ki.prototype,"ariaLive",void 0),H([B({attribute:"aria-owns"})],Ki.prototype,"ariaOwns",void 0),H([B({attribute:"aria-relevant"})],Ki.prototype,"ariaRelevant",void 0),H([B({attribute:"aria-roledescription"})],Ki.prototype,"ariaRoledescription",void 0);class Wi{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Qi(e){return new ht("fast-ref",Wi,e)}class Xi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Yi=(e,t)=>Mt`
    <span
        part="end"
        ${Qi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Qi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Ji=(e,t)=>Mt`
    <span
        part="start"
        ${Qi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Qi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function Zi(e,...t){const i=E.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),E.locate(t).forEach((e=>i.push(e)))}))}var es;Mt`
    <span part="end" ${Qi("endContainer")}>
        <slot
            name="end"
            ${Qi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Mt`
    <span part="start" ${Qi("startContainer")}>
        <slot
            name="start"
            ${Qi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(es||(es={}));const ts="ArrowDown",is="ArrowLeft",ss="ArrowRight",os="ArrowUp",ns="Enter",rs="Escape",as="Home",ls="End",ds=" ",cs="Tab",hs={ArrowDown:ts,ArrowLeft:is,ArrowRight:ss,ArrowUp:os},us="form-associated-proxy",ps="ElementInternals",fs=ps in window&&"setFormValue"in window[ps].prototype,bs=new WeakMap;function gs(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return fs}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return r}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!fs)return null;let e=bs.get(this);return e||(e=this.attachInternals(),bs.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",us),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",us)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===ns&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return B({mode:"boolean"})(t.prototype,"disabled"),B({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),B({attribute:"current-value"})(t.prototype,"currentValue"),B(t.prototype,"name"),B({mode:"boolean"})(t.prototype,"required"),m(t.prototype,"value"),t}function vs(e){class t extends(gs(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return B({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),B({attribute:"current-checked",converter:R})(i.prototype,"currentChecked"),m(i.prototype,"defaultChecked"),m(i.prototype,"checked"),i}class ms extends Re{}class ys extends(gs(ms)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class xs extends ys{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}H([B({mode:"boolean"})],xs.prototype,"autofocus",void 0),H([B({attribute:"form"})],xs.prototype,"formId",void 0),H([B],xs.prototype,"formaction",void 0),H([B],xs.prototype,"formenctype",void 0),H([B],xs.prototype,"formmethod",void 0),H([B({mode:"boolean"})],xs.prototype,"formnovalidate",void 0),H([B],xs.prototype,"formtarget",void 0),H([B],xs.prototype,"type",void 0),H([m],xs.prototype,"defaultSlottedContent",void 0);class Cs{}function ws(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}H([B({attribute:"aria-expanded"})],Cs.prototype,"ariaExpanded",void 0),H([B({attribute:"aria-pressed"})],Cs.prototype,"ariaPressed",void 0),Zi(Cs,Ki),Zi(xs,Xi,Cs);class $s{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=v.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ks extends $s{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Is(e){return"string"==typeof e&&(e={property:e}),new ht("fast-slotted",ks,e)}let Os;const Ts=function(){if("boolean"==typeof Os)return Os;if("undefined"==typeof window||!window.document||!window.document.createElement)return Os=!1,Os;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Os=!0}catch(e){Os=!1}finally{document.head.removeChild(e)}return Os}()?"focus-visible":"focus",Ss="not-allowed",As=Lt`
	${Vt("inline-flex")} :host {
		outline: none;
		font-family: ${Yt};
		font-size: ${ti};
		line-height: ${ii};
		color: ${yi};
		background: ${mi};
		border-radius: calc(${Kt} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Ii} ${ki};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Ut} * 1px) solid ${ui};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${xi};
	}
	:host(:active) {
		background: ${mi};
	}
	.control:${Ts} {
		outline: calc(${Ut} * 1px) solid ${Xt};
		outline-offset: calc(${Ut} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Qt};
		background: ${mi};
		cursor: ${Ss};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Wt} * 4px);
		height: calc(${Wt} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Es=Lt`
	:host([appearance='primary']) {
		background: ${mi};
		color: ${yi};
	}
	:host([appearance='primary']:hover) {
		background: ${xi};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${mi};
	}
	:host([appearance='primary']) .control:${Ts} {
		outline: calc(${Ut} * 1px) solid ${Xt};
		outline-offset: calc(${Ut} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${mi};
	}
`,Rs=Lt`
	:host([appearance='secondary']) {
		background: ${Ci};
		color: ${wi};
	}
	:host([appearance='secondary']:hover) {
		background: ${$i};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Ci};
	}
	:host([appearance='secondary']) .control:${Ts} {
		outline: calc(${Ut} * 1px) solid ${Xt};
		outline-offset: calc(${Ut} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Ci};
	}
`,Ds=Lt`
	:host([appearance='icon']) {
		background: ${pi};
		border-radius: ${fi};
		color: ${Jt};
	}
	:host([appearance='icon']:hover) {
		background: ${gi};
		outline: 1px dotted ${qt};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${vi};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${gi};
	}
	:host([appearance='icon']) .control:${Ts} {
		outline: calc(${Ut} * 1px) solid ${Xt};
		outline-offset: ${bi};
	}
	:host([appearance='icon'][disabled]) {
		background: ${pi};
	}
`;class Ps extends xs{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){"appearance"===e&&"icon"===i&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}!function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([B],Ps.prototype,"appearance",void 0);const Bs=Ps.compose({baseName:"button",template:(e,t)=>Mt`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qi("control")}
    >
        ${Ji(0,t)}
        <span class="content" part="content">
            <slot ${Is("defaultSlottedContent")}></slot>
        </span>
        ${Yi(0,t)}
    </button>
`,styles:(e,t)=>Lt`
	${As}
	${Es}
	${Rs}
	${Ds}
`,shadowOptions:{delegatesFocus:!0}});class Ms extends Re{}class Fs extends(vs(Ms)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ls extends Fs{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==ds||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}H([B({attribute:"readonly",mode:"boolean"})],Ls.prototype,"readOnly",void 0),H([m],Ls.prototype,"defaultSlottedNodes",void 0),H([m],Ls.prototype,"indeterminate",void 0);class Vs extends Ls{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Hs=Vs.compose({baseName:"checkbox",template:(e,t)=>Mt`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Is("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Wt} * 1px) 0;
		user-select: none;
		font-size: ${ti};
		line-height: ${ii};
	}
	.control {
		position: relative;
		width: calc(${Wt} * 4px + 2px);
		height: calc(${Wt} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Si} * 1px);
		border: calc(${Ut} * 1px) solid ${Ti};
		background: ${Oi};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Yt};
		color: ${Jt};
		padding-inline-start: calc(${Wt} * 2px + 2px);
		margin-inline-end: calc(${Wt} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${Jt};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${Jt};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Oi};
		border-color: ${Ti};
	}
	:host(:enabled) .control:active {
		background: ${Oi};
		border-color: ${Xt};
	}
	:host(:${Ts}) .control {
		border: calc(${Ut} * 1px) solid ${Xt};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Ss};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Qt};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'}),_s={none:"none",default:"default",sticky:"sticky"},Ns={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},js={default:"default",header:"header",stickyHeader:"sticky-header"};function zs(e,t,i){return{index:e,removed:t,addedCount:i}}const Us=0,qs=1,Gs=2,Ks=3;function Ws(e,t,i,s,o,n){let a=0,l=0;const d=Math.min(i-t,n-o);if(0===t&&0===o&&(a=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,d)),i===e.length&&n===s.length&&(l=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,d-a)),o+=a,n-=l,(i-=l)-(t+=a)==0&&n-o==0)return r;if(t===i){const e=zs(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[zs(t,[],i-t)];const c=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(Gs),i--;continue}if(0===i){o.push(Ks),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(Us):(o.push(qs),s=n),t--,i--):l===r?(o.push(Ks),t--,s=r):(o.push(Gs),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),h=[];let u,p=t,f=o;for(let e=0;e<c.length;++e)switch(c[e]){case Us:void 0!==u&&(h.push(u),u=void 0),p++,f++;break;case qs:void 0===u&&(u=zs(p,[],0)),u.addedCount++,p++,u.removed.push(s[f]),f++;break;case Gs:void 0===u&&(u=zs(p,[],0)),u.addedCount++,p++;break;case Ks:void 0===u&&(u=zs(p,[],0)),u.removed.push(s[f]),f++}return void 0!==u&&h.push(u),h}const Qs=Array.prototype.push;function Xs(e,t,i,s){const o=zs(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);Qs.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);Qs.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}let Ys=!1;function Js(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Zs extends b{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?function(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];Xs(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(Ws(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}(this.source,e):Ws(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}function eo(e,t,i,s){e.bind(t[i],s)}function to(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class io{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=eo,this.itemsBindingObserver=v.binding(t,this,i),this.templateBindingObserver=v.binding(s,this,o),n.positioning&&(this.bindView=to)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=r);const t=this.itemsObserver,i=this.itemsObserver=v.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),v=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=v&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(Dt.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l)n(a[e],t,e,i);else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class so extends dt{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=f.createBlockPlaceholder,function(){if(Ys)return;Ys=!0,v.setArrayObserverFactory((e=>new Zs(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(zs(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Js(zs(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(zs(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Js(zs(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Js(zs(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=v.isVolatileBinding(e),this.isTemplateBindingVolatile=v.isVolatileBinding(t)}createBehavior(e){return new io(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const oo="focus",no="focusin",ro="focusout",ao="keydown";class lo extends Re{constructor(){super(),this.noTabbing=!1,this.generateHeader=_s.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,f.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=lo.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=lo.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new so((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(oo,this.handleFocus),this.addEventListener(ao,this.handleKeydown),this.addEventListener(ro,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),f.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(oo,this.handleFocus),this.removeEventListener(ao,this.handleKeydown),this.removeEventListener(ro,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case os:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ts:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===_s.sticky&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case as:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ls:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,f.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==_s.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===_s.sticky?js.stickyHeader:js.header,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}lo.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),H([B({attribute:"no-tabbing",mode:"boolean"})],lo.prototype,"noTabbing",void 0),H([B({attribute:"generate-header"})],lo.prototype,"generateHeader",void 0),H([B({attribute:"grid-template-columns"})],lo.prototype,"gridTemplateColumns",void 0),H([m],lo.prototype,"rowsData",void 0),H([m],lo.prototype,"columnDefinitions",void 0),H([m],lo.prototype,"rowItemTemplate",void 0),H([m],lo.prototype,"cellItemTemplate",void 0),H([m],lo.prototype,"headerCellItemTemplate",void 0),H([m],lo.prototype,"focusRowIndex",void 0),H([m],lo.prototype,"focusColumnIndex",void 0),H([m],lo.prototype,"defaultRowItemTemplate",void 0),H([m],lo.prototype,"rowElementTag",void 0),H([m],lo.prototype,"rowElements",void 0);class co extends $s{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function ho(e){return"string"==typeof e&&(e={property:e}),new ht("fast-children",co,e)}class uo extends Re{constructor(){super(...arguments),this.rowType=js.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new so((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ro,this.handleFocusout),this.addEventListener(ao,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ro,this.handleFocusout),this.removeEventListener(ao,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case is:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ss:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case as:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ls:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===js.default&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===js.default&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}H([B({attribute:"grid-template-columns"})],uo.prototype,"gridTemplateColumns",void 0),H([B({attribute:"row-type"})],uo.prototype,"rowType",void 0),H([m],uo.prototype,"rowData",void 0),H([m],uo.prototype,"columnDefinitions",void 0),H([m],uo.prototype,"cellItemTemplate",void 0),H([m],uo.prototype,"headerCellItemTemplate",void 0),H([m],uo.prototype,"rowIndex",void 0),H([m],uo.prototype,"isActiveRow",void 0),H([m],uo.prototype,"activeCellItemTemplate",void 0),H([m],uo.prototype,"defaultCellItemTemplate",void 0),H([m],uo.prototype,"defaultHeaderCellItemTemplate",void 0),H([m],uo.prototype,"cellElements",void 0);const po=Mt`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,fo=Mt`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class bo extends Re{constructor(){super(...arguments),this.cellType=Ns.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(no,this.handleFocusin),this.addEventListener(ro,this.handleFocusout),this.addEventListener(ao,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(no,this.handleFocusin),this.removeEventListener(ro,this.handleFocusout),this.removeEventListener(ao,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Ns.columnHeader){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Ns.default&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Ns.columnHeader&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case ns:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Ns.columnHeader){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case rs:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Ns.columnHeader:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=fo.render(this,this);break;case void 0:case Ns.rowHeader:case Ns.default:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=po.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}H([B({attribute:"cell-type"})],bo.prototype,"cellType",void 0),H([B({attribute:"grid-column"})],bo.prototype,"gridColumn",void 0),H([m],bo.prototype,"rowData",void 0),H([m],bo.prototype,"columnDefinition",void 0);class go extends lo{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const vo=go.compose({baseName:"data-grid",baseClass:lo,template:(e,t)=>{const i=function(e){const t=e.tagFor(uo);return Mt`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(uo);return Mt`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${ho({property:"rowElements",filter:ws("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Lt`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});class mo extends uo{}const yo=mo.compose({baseName:"data-grid-row",baseClass:uo,template:(e,t)=>{const i=function(e){const t=e.tagFor(bo);return Mt`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(bo);return Mt`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Mt`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${ho({property:"cellElements",filter:ws('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Is("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Lt`
	:host {
		display: grid;
		padding: calc((${Wt} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${zt};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Ri};
		outline: 1px dotted ${qt};
		outline-offset: -1px;
	}
`});class xo extends bo{}const Co=xo.compose({baseName:"data-grid-cell",baseClass:bo,template:(e,t)=>Mt`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Lt`
	:host {
		padding: calc(${Wt} * 1px) calc(${Wt} * 3px);
		color: ${Jt};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Yt};
		font-size: ${ti};
		line-height: ${ii};
		font-weight: 400;
		border: solid calc(${Ut} * 1px) transparent;
		border-radius: calc(${Gt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Ts}),
	:host(:focus),
	:host(:active) {
		background: ${Ai};
		border: solid calc(${Ut} * 1px) ${Xt};
		color: ${Ei};
		outline: none;
	}
	:host(:${Ts}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Ei} !important;
	}
`}),wo={separator:"separator",presentation:"presentation"},$o={horizontal:"horizontal",vertical:"vertical"};class ko extends Re{constructor(){super(...arguments),this.role=wo.separator,this.orientation=$o.horizontal}}H([B],ko.prototype,"role",void 0),H([B],ko.prototype,"orientation",void 0);class Io extends ko{}const Oo=Io.compose({baseName:"divider",template:(e,t)=>Mt`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Lt`
	${Vt("block")} :host {
		border: none;
		border-top: calc(${Ut} * 1px) solid ${Di};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Wt} * 1px) 0;
		width: 100%;
	}
`}),To={above:"above",below:"below"};let So=0;function Ao(e=""){return`${e}${So++}`}function Eo(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class Ro extends Re{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),v.notify(this,"value")}get value(){var e;return v.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}H([m],Ro.prototype,"checked",void 0),H([m],Ro.prototype,"content",void 0),H([m],Ro.prototype,"defaultSelected",void 0),H([B({mode:"boolean"})],Ro.prototype,"disabled",void 0),H([B({attribute:"selected",mode:"boolean"})],Ro.prototype,"selectedAttribute",void 0),H([m],Ro.prototype,"selected",void 0),H([B({attribute:"value",mode:"fromView"})],Ro.prototype,"initialValue",void 0);class Do{}H([m],Do.prototype,"ariaChecked",void 0),H([m],Do.prototype,"ariaPosInSet",void 0),H([m],Do.prototype,"ariaSelected",void 0),H([m],Do.prototype,"ariaSetSize",void 0),Zi(Do,Ki),Zi(Ro,Xi,Do);class Po extends Re{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return v.track(this,"options"),this._options}set options(e){this._options=e,v.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){"selected"===t&&(Po.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Po.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case as:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ts:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case os:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ls:e.preventDefault(),this.selectLastOption();break;case cs:return this.focusAndScrollOptionIntoView(),!0;case ns:case rs:return!0;case ds:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(Po.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=v.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(!e[i].disabled)return i;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Eo(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Ao("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Po.slottedOptionFilter=e=>Eo(e)&&!e.hidden,Po.TYPE_AHEAD_TIMEOUT_MS=1e3,H([B({mode:"boolean"})],Po.prototype,"disabled",void 0),H([m],Po.prototype,"selectedIndex",void 0),H([m],Po.prototype,"selectedOptions",void 0),H([m],Po.prototype,"slottedOptions",void 0),H([m],Po.prototype,"typeaheadBuffer",void 0);class Bo{}function Mo(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}H([m],Bo.prototype,"ariaActiveDescendant",void 0),H([m],Bo.prototype,"ariaDisabled",void 0),H([m],Bo.prototype,"ariaExpanded",void 0),H([m],Bo.prototype,"ariaMultiSelectable",void 0),Zi(Bo,Ki),Zi(Po,Bo);class Fo extends Po{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Mo(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Mo(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Mo(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Mo(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case as:return void this.checkFirstOption(i);case ts:return void this.checkNextOption(i);case os:return void this.checkPreviousOption(i);case ls:return void this.checkLastOption(i);case cs:return this.focusAndScrollOptionIntoView(),!0;case rs:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ds:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&f.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}H([m],Fo.prototype,"activeIndex",void 0),H([B({mode:"boolean"})],Fo.prototype,"multiple",void 0),H([B({converter:D})],Fo.prototype,"size",void 0);class Lo extends Fo{}class Vo extends(gs(Lo)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Ho extends Vo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ao("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void f.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return v.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),v.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?To.above:To.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===To.above?~~e.top:~~t}get displayValue(){var e,t;return v.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{v.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{v.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Po.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case ds:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case as:case ls:e.preventDefault();break;case ns:e.preventDefault(),this.open=!this.open;break;case rs:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case cs:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ts||t===os)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&v.notify(this,"displayValue")}}H([B({attribute:"open",mode:"boolean"})],Ho.prototype,"open",void 0),H([function(e,t,i){return Object.assign({},i,{get:function(){return v.trackVolatile(),i.get.apply(this)}})}],Ho.prototype,"collapsible",null),H([m],Ho.prototype,"control",void 0),H([B({attribute:"position"})],Ho.prototype,"positionAttribute",void 0),H([m],Ho.prototype,"position",void 0),H([m],Ho.prototype,"maxHeight",void 0);class _o{}H([m],_o.prototype,"ariaControls",void 0),Zi(_o,Bo),Zi(Ho,Xi,_o);const No=e=>"function"==typeof e,jo=()=>null;function zo(e){return void 0===e?jo:No(e)?e:()=>e}function Uo(e,t,i){const s=No(e)?e:()=>e,o=zo(t),n=zo(i);return(e,t)=>s(e,t)?o(e,t):n(e,t)}class qo extends Ho{}const Go=qo.compose({baseName:"dropdown",template:(e,t)=>Mt`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Uo((e=>e.collapsible),Mt`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Qi("control")}
                >
                    ${Ji(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Yi(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Qi("listbox")}
        >
            <slot
                ${Is({filter:Po.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		background: ${Pi};
		border-radius: calc(${Kt} * 1px);
		box-sizing: border-box;
		color: ${Jt};
		contain: contents;
		font-family: ${Yt};
		height: calc(${Zt} * 1px);
		position: relative;
		user-select: none;
		min-width: ${ei};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Ut} * 1px) solid ${Bi};
		border-radius: calc(${Kt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ti};
		line-height: ${ii};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Pi};
		border: calc(${Ut} * 1px) solid ${Xt};
		border-radius: calc(${Kt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Mi};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ts}) .control {
		border-color: ${Xt};
	}
	:host(:not([disabled]):hover) {
		background: ${Pi};
		border-color: ${Bi};
	}
	:host(:${Ts}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ai};
		border: calc(${Ut} * 1px) solid transparent;
		color: ${Ei};
	}
	:host([disabled]) {
		cursor: ${Ss};
		opacity: ${Qt};
	}
	:host([disabled]) .control {
		cursor: ${Ss};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Pi};
		color: ${Jt};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Xt};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Xt};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Zt} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Zt} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Wt} * 4px);
		min-width: calc(${Wt} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Ko extends Re{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}H([B],Ko.prototype,"download",void 0),H([B],Ko.prototype,"href",void 0),H([B],Ko.prototype,"hreflang",void 0),H([B],Ko.prototype,"ping",void 0),H([B],Ko.prototype,"referrerpolicy",void 0),H([B],Ko.prototype,"rel",void 0),H([B],Ko.prototype,"target",void 0),H([B],Ko.prototype,"type",void 0),H([m],Ko.prototype,"defaultSlottedContent",void 0);class Wo{}H([B({attribute:"aria-expanded"})],Wo.prototype,"ariaExpanded",void 0),Zi(Wo,Ki),Zi(Ko,Xi,Wo);class Qo extends Ko{}const Xo=Qo.compose({baseName:"link",template:(e,t)=>Mt`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qi("control")}
    >
        ${Ji(0,t)}
        <span class="content" part="content">
            <slot ${Is("defaultSlottedContent")}></slot>
        </span>
        ${Yi(0,t)}
    </a>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Hi};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Yt};
		font-size: ${ti};
		line-height: ${ii};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Ut} * 1px) solid transparent;
		border-radius: calc(${Gt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Vi};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Vi};
	}
	:host(:${Ts}) .control,
	:host(:focus) .control {
		border: calc(${Ut} * 1px) solid ${Xt};
	}
`,shadowOptions:{delegatesFocus:!0}});class Yo extends Ro{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}const Jo=Yo.compose({baseName:"option",template:(e,t)=>Mt`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Ji(0,t)}
        <span class="content" part="content">
            <slot ${Is("content")}></slot>
        </span>
        ${Yi(0,t)}
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Gt};
		border: calc(${Ut} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Jt};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ti};
		line-height: ${ii};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Wt} / 2) * 1px)
			calc((${Wt} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ts}) {
		border-color: ${Xt};
		background: ${Ai};
		color: ${Jt};
	}
	:host([aria-selected='true']) {
		background: ${Ai};
		border: calc(${Ut} * 1px) solid transparent;
		color: ${Ei};
	}
	:host(:active) {
		background: ${Ai};
		color: ${Ei};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ai};
		border: calc(${Ut} * 1px) solid transparent;
		color: ${Ei};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ai};
		color: ${Jt};
	}
	:host([disabled]) {
		cursor: ${Ss};
		opacity: ${Qt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),Zo="horizontal";class en extends Re{constructor(){super(...arguments),this.orientation=Zo,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((s,o)=>{if("tab"===s.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],i=this.tabpanelIds[o];s.setAttribute("id",t),s.setAttribute("aria-selected",e?"true":"false"),s.setAttribute("aria-controls",i),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=s,this.activeid=t)}s.style[e]="",s.style[t]="",s.style[i]=`${o+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case is:e.preventDefault(),this.adjustBackward(e);break;case ss:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case os:e.preventDefault(),this.adjustBackward(e);break;case ts:e.preventDefault(),this.adjustForward(e)}switch(e.key){case as:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ls:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${Ao()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${Ao()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Zo}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),i=t.indexOf(this.activetab),s=(0,o=t.length-1,n=i+e,Math.min(Math.max(n,0),o));var o,n;const r=this.tabs.indexOf(t[s]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}H([B],en.prototype,"orientation",void 0),H([B],en.prototype,"activeid",void 0),H([m],en.prototype,"tabs",void 0),H([m],en.prototype,"tabpanels",void 0),H([B({mode:"boolean"})],en.prototype,"activeindicator",void 0),H([m],en.prototype,"activeIndicatorRef",void 0),H([m],en.prototype,"showActiveIndicator",void 0),Zi(en,Xi);class tn extends Re{}H([B({mode:"boolean"})],tn.prototype,"disabled",void 0);class sn extends Re{}class on extends en{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Zo),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const nn=on.compose({baseName:"panels",template:(e,t)=>Mt`
    <template class="${e=>e.orientation}">
        ${Ji(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Is("tabs")}></slot>

            ${Uo((e=>e.showActiveIndicator),Mt`
                    <div
                        ${Qi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Yi(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Is("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("grid")} :host {
		box-sizing: border-box;
		font-family: ${Yt};
		font-size: ${ti};
		line-height: ${ii};
		color: ${Jt};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Wt} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Wt} * 1px) calc(${Wt} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Wt} / 4) * 1px);
		justify-self: center;
		background: ${ji};
		margin: 0;
		border-radius: calc(${Gt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});class rn extends tn{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const an=rn.compose({baseName:"panel-tab",template:(e,t)=>Mt`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Yt};
		font-size: ${ti};
		line-height: ${ii};
		height: calc(${Wt} * 7px);
		padding: calc(${Wt} * 1px) 0;
		color: ${zi};
		fill: currentcolor;
		border-radius: calc(${Gt} * 1px);
		border: solid calc(${Ut} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${ji};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${ji};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${ji};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${ji};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${ji};
		fill: currentcolor;
	}
	:host(:${Ts}) {
		outline: none;
		border: solid calc(${Ut} * 1px) ${Ni};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Wt} * 2px);
	}
`});class ln extends sn{}const dn=ln.compose({baseName:"panel-view",template:(e,t)=>Mt`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Ut} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${ti};
		line-height: ${ii};
		padding: 10px calc((${Wt} + 2) * 1px);
	}
`});class cn extends Re{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}H([B({converter:D})],cn.prototype,"value",void 0),H([B({converter:D})],cn.prototype,"min",void 0),H([B({converter:D})],cn.prototype,"max",void 0),H([B({mode:"boolean"})],cn.prototype,"paused",void 0),H([m],cn.prototype,"percentComplete",void 0);class hn extends cn{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}const un=hn.compose({baseName:"progress-ring",template:(e,t)=>Mt`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Uo((e=>"number"==typeof e.value),Mt`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Mt`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Lt`
	${Vt("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Wt} * 7px);
		width: calc(${Wt} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Wt} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${_i};
		stroke-width: calc(${Wt} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});var pn;!function(e){e.ltr="ltr",e.rtl="rtl"}(pn||(pn={}));class fn extends Re{constructor(){super(...arguments),this.orientation=$o.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===ss,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===is,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in hs&&this.isInsideFoundationToolbar)return!0;switch(t){case ns:this.checkFocusedRadio();break;case ss:case ts:this.direction===pn.ltr?this.moveRight(e):this.moveLeft(e);break;case is:case os:this.direction===pn.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?pn.rtl:pn.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}H([B({attribute:"readonly",mode:"boolean"})],fn.prototype,"readOnly",void 0),H([B({attribute:"disabled",mode:"boolean"})],fn.prototype,"disabled",void 0),H([B],fn.prototype,"name",void 0),H([B],fn.prototype,"value",void 0),H([B],fn.prototype,"orientation",void 0),H([m],fn.prototype,"childItems",void 0),H([m],fn.prototype,"slottedRadioButtons",void 0);class bn extends fn{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const gn=bn.compose({baseName:"radio-group",template:(e,t)=>Mt`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===$o.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Is({property:"slottedRadioButtons",filter:ws("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("flex")} :host {
		align-items: flex-start;
		margin: calc(${Wt} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${Jt};
		font-size: ${ti};
		margin: calc(${Wt} * 1px) 0;
	}
`});class vn extends Re{}class mn extends(vs(vn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class yn extends mn{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==ds)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}H([B({attribute:"readonly",mode:"boolean"})],yn.prototype,"readOnly",void 0),H([m],yn.prototype,"name",void 0),H([m],yn.prototype,"defaultSlottedNodes",void 0);class xn extends yn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Cn=xn.compose({baseName:"radio",template:(e,t)=>Mt`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Is("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${ti};
		line-height: ${ii};
		margin: calc(${Wt} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Oi};
		border-radius: 999px;
		border: calc(${Ut} * 1px) solid ${Ti};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Wt} * 4px);
		position: relative;
		outline: none;
		width: calc(${Wt} * 4px);
	}
	.label {
		color: ${Jt};
		cursor: pointer;
		font-family: ${Yt};
		margin-inline-end: calc(${Wt} * 2px + 2px);
		padding-inline-start: calc(${Wt} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${Jt};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Wt} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Oi};
		border-color: ${Ti};
	}
	:host(:not([disabled])) .control:active {
		background: ${Oi};
		border-color: ${Xt};
	}
	:host(:${Ts}) .control {
		border: calc(${Ut} * 1px) solid ${Xt};
	}
	:host([aria-checked='true']) .control {
		background: ${Oi};
		border: calc(${Ut} * 1px) solid ${Ti};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Oi};
		border: calc(${Ut} * 1px) solid ${Ti};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Oi};
		border: calc(${Ut} * 1px) solid ${Xt};
	}
	:host([aria-checked="true"]:${Ts}:not([disabled])) .control {
		border: calc(${Ut} * 1px) solid ${Xt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ss};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Qt};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});class wn extends lt{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const $n=wn.compose({baseName:"tag",template:Ft,styles:(e,t)=>Lt`
	${Vt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Yt};
		font-size: ${si};
		line-height: ${oi};
	}
	.control {
		background-color: ${ci};
		border: calc(${Ut} * 1px) solid ${ui};
		border-radius: ${Ui};
		color: ${hi};
		padding: calc(${Wt} * 0.5px) calc(${Wt} * 1px);
		text-transform: uppercase;
	}
`}),kn={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class In extends Re{}class On extends(gs(In)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Tn={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class Sn extends On{constructor(){super(...arguments),this.type=Tn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([B({attribute:"readonly",mode:"boolean"})],Sn.prototype,"readOnly",void 0),H([B({mode:"boolean"})],Sn.prototype,"autofocus",void 0),H([B],Sn.prototype,"placeholder",void 0),H([B],Sn.prototype,"type",void 0),H([B],Sn.prototype,"list",void 0),H([B({converter:D})],Sn.prototype,"maxlength",void 0),H([B({converter:D})],Sn.prototype,"minlength",void 0),H([B],Sn.prototype,"pattern",void 0),H([B({converter:D})],Sn.prototype,"size",void 0),H([B({mode:"boolean"})],Sn.prototype,"spellcheck",void 0),H([m],Sn.prototype,"defaultSlottedNodes",void 0);class An{}Zi(An,Ki),Zi(Sn,Xi,An);class En extends Re{}class Rn extends(gs(En)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}class Dn extends Rn{constructor(){super(...arguments),this.resize=kn.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([B({mode:"boolean"})],Dn.prototype,"readOnly",void 0),H([B],Dn.prototype,"resize",void 0),H([B({mode:"boolean"})],Dn.prototype,"autofocus",void 0),H([B({attribute:"form"})],Dn.prototype,"formId",void 0),H([B],Dn.prototype,"list",void 0),H([B({converter:D})],Dn.prototype,"maxlength",void 0),H([B({converter:D})],Dn.prototype,"minlength",void 0),H([B],Dn.prototype,"name",void 0),H([B],Dn.prototype,"placeholder",void 0),H([B({converter:D,mode:"fromView"})],Dn.prototype,"cols",void 0),H([B({converter:D,mode:"fromView"})],Dn.prototype,"rows",void 0),H([B({mode:"boolean"})],Dn.prototype,"spellcheck",void 0),H([m],Dn.prototype,"defaultSlottedNodes",void 0),Zi(Dn,An);class Pn extends Dn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Bn=Pn.compose({baseName:"text-area",template:(e,t)=>Mt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==kn.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Is("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Qi("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-block")} :host {
		font-family: ${Yt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Li};
		background: ${Fi};
		border-radius: calc(${Kt} * 1px);
		border: calc(${Ut} * 1px) solid ${Bi};
		font: inherit;
		font-size: ${ti};
		line-height: ${ii};
		padding: calc(${Wt} * 2px + 1px);
		width: 100%;
		min-width: ${ei};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Fi};
		border-color: ${Bi};
	}
	.control:active:enabled {
		background: ${Fi};
		border-color: ${Xt};
	}
	.control:hover,
	.control:${Ts},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${ni};
		height: ${ri};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Fi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${ai};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${li};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${di};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Xt};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${Jt};
		cursor: pointer;
		font-size: ${ti};
		line-height: ${ii};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ss};
	}
	:host([disabled]) {
		opacity: ${Qt};
	}
	:host([disabled]) .control {
		border-color: ${Bi};
	}
`,shadowOptions:{delegatesFocus:!0}});function Mn(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}class Fn extends Sn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const Ln=Fn.compose({baseName:"text-field",template:(e,t)=>Mt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Is({property:"defaultSlottedNodes",filter:Mn})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Ji(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Qi("control")}
            />
            ${Yi(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Lt`
	${Vt("inline-block")} :host {
		font-family: ${Yt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Li};
		background: ${Fi};
		border-radius: calc(${Kt} * 1px);
		border: calc(${Ut} * 1px) solid ${Bi};
		height: calc(${Zt} * 1px);
		min-width: ${ei};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Wt} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Wt} * 2px + 1px);
		font-size: ${ti};
		line-height: ${ii};
	}
	.control:hover,
	.control:${Ts},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${Jt};
		cursor: pointer;
		font-size: ${ti};
		line-height: ${ii};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Wt} * 4px);
		height: calc(${Wt} * 4px);
	}
	.start {
		margin-inline-start: calc(${Wt} * 2px);
	}
	.end {
		margin-inline-end: calc(${Wt} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Fi};
		border-color: ${Bi};
	}
	:host(:active:not([disabled])) .root {
		background: ${Fi};
		border-color: ${Xt};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Xt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ss};
	}
	:host([disabled]) {
		opacity: ${Qt};
	}
	:host([disabled]) .control {
		border-color: ${Bi};
	}
`,shadowOptions:{delegatesFocus:!0}}),Vn={vsCodeBadge:Gi,vsCodeButton:Bs,vsCodeCheckbox:Hs,vsCodeDataGrid:vo,vsCodeDataGridCell:Co,vsCodeDataGridRow:yo,vsCodeDivider:Oo,vsCodeDropdown:Go,vsCodeLink:Xo,vsCodeOption:Jo,vsCodePanels:nn,vsCodePanelTab:an,vsCodePanelView:dn,vsCodeProgressRing:un,vsCodeRadioGroup:gn,vsCodeRadio:Cn,vsCodeTag:$n,vsCodeTextArea:Bn,vsCodeTextField:Ln,register(e,...t){if(e)for(const i in this)"register"!==i&&this[i]().register(e,...t)}}}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{var e=s;Object.defineProperty(e,"B",{value:!0});const t=i(831),o=i(894),n=i(996);(0,o.provideVSCodeDesignSystem)().register((0,o.vsCodeButton)(),(0,o.vsCodeTag)(),(0,o.vsCodeTextArea)(),(0,o.vsCodeTextField)());const r=3;let a,l,d,c,h,u=!0,p=1;const f=acquireVsCodeApi();function b(e,t){const i=document.getElementById(e);i&&i.addEventListener("click",(async()=>{await t()}))}function g(e,t){const i=document.getElementsByClassName(e);for(let e=0;e<i.length;e++)i[e].style.display=t}function v(e){const t=document.getElementById(e);t&&(t.style.display="none")}async function m(){a!==c.value&&(a=c.value,h.update(""),l=void 0,d=(0,t.v4)()),I("submit-button",!1),f.postMessage({command:"outline",text:a,playbook:l,outline:h.getSavedValueAsString(),generationId:d}),c.focus()}function y(){h.reset(),h.focus()}function x(){O(1),c.focus()}function C(){O(2),h.focus()}async function w(){const e=a;let i;h.isChanged()?d=(0,t.v4)():i=l,I("generate-button",!1),I("back-button",!1),I("reset-button",!1),f.postMessage({command:"generateCode",text:e,outline:n.EditableList.listToString(h.getFromUI()),playbook:i,generationId:d,darkMode:u})}async function $(){f.postMessage({command:"openEditor",playbook:l})}function k(e){document.getElementById("page-number").textContent=`${e} of ${r}`,p=e,f.postMessage({command:"transition",toPage:e})}function I(e,t){document.getElementById(e).disabled=!t}function O(e){switch(e){case 1:k(1),function(e){const t=document.getElementById("playbook-text-area");t&&(t.style.display="block")}(),g("outlineContainer","none"),g("formattedPlaybook","none"),g("bigIconButtonContainer","block"),g("examplesContainer","block"),g("resetFeedbackContainer","none"),g("firstMessage","block"),g("secondMessage","none"),g("thirdMessage","none"),g("generatePlaybookContainer","none"),g("promptContainer","none"),g("openEditorContainer","none"),I("submit-button",!0);break;case 2:k(2),v("playbook-text-area"),g("outlineContainer","block"),g("formattedPlaybook","none"),g("bigIconButtonContainer","none"),g("examplesContainer","none"),g("resetFeedbackContainer","block"),g("resetContainer","block"),g("feedbackContainer","none"),g("firstMessage","none"),g("secondMessage","block"),g("thirdMessage","none"),g("generatePlaybookContainer","block"),g("promptContainer","block"),g("openEditorContainer","none"),I("reset-button",!1),I("back-button",!0),I("generate-button",!0);break;case 3:k(3),v("playbook-text-area"),g("outlineContainer","none"),g("formattedPlaybook","block"),g("bigIconButtonContainer","none"),g("examplesContainer","none"),g("resetFeedbackContainer","none"),g("firstMessage","none"),g("secondMessage","none"),g("thirdMessage","block"),g("generatePlaybookContainer","none"),g("openEditorContainer","block")}}window.addEventListener("load",(()=>{b("submit-button",m),b("generate-button",w),b("reset-button",y),b("back-button",x),b("back-anchor",x),b("back-to-page2-button",C),b("open-editor-button",$),c=document.getElementById("playbook-text-area"),c.addEventListener("input",(async()=>{I("submit-button",c.value.length>0),function(){const e=function(){const e=document.querySelector("vscode-text-area")?.shadowRoot;return e?.querySelector("textarea")}();if(e?.scrollHeight){const t=e?.scrollHeight;if(t<500){if(e?.style.height&&parseInt(e?.style.height)>=t)return;e.style.height=`${t+2}px`}}}()})),a="",h=new n.EditableList("outline-list"),h.element.addEventListener("input",(()=>{I("reset-button",h.isChanged()),I("generate-button",!h.isEmpty())}));const e=document.getElementById("main-header");if(e){const t=/rgb.?\((\d+), (\d+), (\d+)/,i=window.getComputedStyle(e).getPropertyValue("color").match(t);if(i){const e=parseInt(i[1]),t=parseInt(i[2]),s=parseInt(i[3]);u=e>128&&t>128&&s>128}}})),window.addEventListener("message",(async e=>{const t=e.data;switch(t.command){case"init":c.focus();break;case"outline":O(2),h.update(t.outline.outline),l=t.outline.playbook,d=t.outline.generationId,document.getElementById("prompt").textContent=a,h.focus();break;case"playbook":O(3),l=t.playbook.playbook,d=t.playbook.generationId,h.save(),document.getElementById("formatted-code").innerHTML=t.playbook.html,document.getElementsByTagName("pre")[0].style.backgroundColor="";break;case"startSpinner":g("spinnerContainer","block");break;case"stopSpinner":g("spinnerContainer","none"),1===p?I("submit-button",!0):2===p&&(I("generate-button",!0),I("back-button",!0),I("reset-button",!0))}}))})();var o=s.B;export{o as __esModule};
//# sourceMappingURL=main.js.map