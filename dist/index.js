function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(t,r,n){return r=i(r),function(t,r){if(r&&("object"==e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,a()?Reflect.construct(r,n||[],i(t).constructor):r.apply(t,n))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function s(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return m(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}import p from"quill";var f=function(e,t){return e=Math.min(t,Math.max(0,Number.parseFloat("".concat(e)))),Math.abs(e-t)<1e-6?1:e%t/Number.parseFloat(t)},g=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b)),a:Math.min(1,Math.max(0,e.a))}},v=function(e){return e=e.startsWith("#")?e.slice(1):e,{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16),a:Number((Number.parseInt(e.slice(6,8)||"ff",16)/255).toFixed(2))}},h=function(e){var t=e.r,r=e.g,n=e.b,o=e.a;t=f(t,255),r=f(r,255),n=f(n,255);var a,i=Math.max(t,r,n),c=Math.min(t,r,n),l=i,s=i-c,u=0===i?0:s/i;if(i===c)a=0;else{switch(i){case t:a=(r-n)/s+(r<n?6:0);break;case r:a=(n-t)/s+2;break;case n:a=(t-r)/s+4}a/=6}return{h:360*a,s:100*u,b:100*l,a:o}},y=function(e){var t=e.h,r=e.s,n=e.b,o=e.a;t=6*f(t,360),r=f(r,100),n=f(n,100);var a=Math.floor(t),i=t-a,c=n*(1-r),l=n*(1-i*r),s=n*(1-(1-i)*r),u=a%6,d=[n,l,c,c,s,n][u],b=[s,n,n,l,c,c][u],m=[c,c,s,n,n,l][u];return{r:Math.round(255*d),g:Math.round(255*b),b:Math.round(255*m),a:o}},C=function(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16),Math.round(255*e.a).toString(16)];for(var r in t)1===t[r].length&&(t[r]="0".concat(t[r]));return t.join("")},E=function(e){return C(y(e))},L=function(e){var t=document.createElement("span");return t.style.backgroundColor=e,function(e){var t=(e=e.replace(/\s+/g,"")).match(/rgba?\((\d+),(\d+),(\d+)(?:,([\d.]+))?\)/);if(!t)return console.warn("Invalid color input"),{a:1,r:0,g:0,b:0};var r=parseInt(t[1],10),n=parseInt(t[2],10),o=parseInt(t[3],10);return{a:t[4]?parseFloat(t[4]):1,r:r,g:n,b:o}}(t.style.backgroundColor)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=150,r=h(v(e.color||"#ff0000")),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jsf",r=t?"".concat(t,"-"):"";return{b:function(){return"".concat(r).concat(e)},be:function(t){return t?"".concat(r).concat(e,"__").concat(t):""},bm:function(t){return t?"".concat(r).concat(e,"--").concat(t):""},bem:function(t,n){return t&&n?"".concat(r).concat(e,"__").concat(t,"--").concat(n):""},ns:function(e){return e?"".concat(r).concat(e):""},bs:function(t){return t?"".concat(r).concat(e,"-").concat(t):""},cv:function(e){return e?"--".concat(r).concat(e):""},is:function(e){return"is-".concat(e)}}}("color-picker"),o=document.createElement("div");o.classList.add(n.b());var a=document.createElement("div");a.classList.add(n.be("content"));var i=document.createElement("div");i.classList.add(n.be("selector"));var c=document.createElement("div");c.classList.add(n.be("background")),i.appendChild(c);var l=document.createElement("div");l.classList.add(n.be("background-handle")),c.appendChild(l);var u=document.createElement("div");u.classList.add(n.be("alpha"));var m=document.createElement("div");m.classList.add(n.be("alpha-bg"));var p=document.createElement("div");p.classList.add(n.be("alpha-handle")),u.appendChild(m),u.appendChild(p);var f=document.createElement("div");f.classList.add(n.be("hue"));var L=document.createElement("div");L.classList.add(n.be("hue-handle")),f.appendChild(L);var k=document.createElement("div");k.classList.add(n.be("action"));var I=d(["r","g","b","a"].map((function(e){var t=document.createElement("div");t.classList.add(n.be("action-item"),e);var o=document.createElement("label");o.textContent=e.toUpperCase();var a=document.createElement("input");return a.classList.add(n.be("input")),a.addEventListener("input",(function(){a.value=a.value.replaceAll(/[^0-9]/g,"")})),a.addEventListener("change",(function(){var t=Math.round(Number(a.value));"a"===e&&(t/=100),T(g(h(Object.assign({},y(r),s({},e,t))))),N()})),t.appendChild(o),t.appendChild(a),k.appendChild(t),a})),4),S=I[0],w=I[1],A=I[2],x=I[3];a.appendChild(f),a.appendChild(i),a.appendChild(u),o.appendChild(a),o.appendChild(k);var q=!1,O=!1,M=!1;function j(){var e,t=E(r),n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=b(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}([S,w,A].entries());try{for(n.s();!(e=n.n()).done;){var o=d(e.value,2),a=o[0];o[1].value=String(Number.parseInt(t[2*a]+t[2*a+1],16))}}catch(e){n.e(e)}finally{n.f()}x.value=String((100*r.a).toFixed(0))}function N(){var e,n,o,a;Object.assign(l.style,{left:"".concat(Math.floor(230*r.s/100),"px"),top:"".concat(Math.floor(t*(100-r.b)/100),"px")}),i.style.backgroundColor="#".concat(C(y({h:r.h,s:100,b:100,a:1}))),L.style.top="".concat(Math.floor(t-t*r.h/360),"px"),p.style.left="".concat(100*r.a,"%"),e=y(r),n=e.r,o=e.g,a=e.b,m.style.background="linear-gradient(to right, rgba(".concat(n,", ").concat(o,", ").concat(a,", 0) 0%, rgba(").concat(n,", ").concat(o,", ").concat(a,", 1) 100%)"),j()}function T(t){r=g(Object.assign({},r,t)),j(),e.onChange&&e.onChange("#".concat(E(r)))}function P(e){var r=i.getBoundingClientRect(),n=r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),o=r.left+document.body.scrollLeft;T({s:Math.floor(100*Math.max(0,Math.min(230,e.pageX-o))/230),b:Math.floor(100*(t-Math.max(0,Math.min(t,e.pageY-n)))/t)}),N()}function U(e){var r=f.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);T({h:Math.floor(360*(t-Math.max(0,Math.min(t,e.pageY-r)))/t)}),N()}function _(e){var t=e.pageX,r=u.getBoundingClientRect(),n=t-r.left;n=Math.max(5,n),n=Math.min(n,r.width-5),T({a:Math.round((n-5)/(r.width-10)*100)/100}),N()}function R(e){q&&(e.preventDefault(),P(e)),O&&(e.preventDefault(),U(e)),M&&(e.preventDefault(),_(e))}function D(){document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",D),q=!1}function B(){document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",B),O=!1}function H(){document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",H),M=!1}return i.addEventListener("mousedown",(function(e){document.addEventListener("mousemove",R),document.addEventListener("mouseup",D),q=!0,P(e)})),f.addEventListener("mousedown",(function(e){document.addEventListener("mousemove",R),document.addEventListener("mouseup",B),O=!0,U(e)})),u.addEventListener("mousedown",(function(e){document.addEventListener("mousemove",R),document.addEventListener("mouseup",H),M=!0,_(e)})),N(),o},I=p.import("ui/picker"),S=function(){function e(r,n,a){var i;t(this,e),s(i=o(this,e,[r]),"currentIndex",-1),i.themeOptions=Object.assign({localStorageKey:"used-color",closeAfterChange:!0,customColorChangeDelay:300,maxHistoryColor:10,expandIcon:'<svg viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>',keepChooseColor:!0},a),i.label.innerHTML=n,i.container.classList.add("ql-color-picker"),i.localColorUsedKey="".concat(i.select.className,"-").concat(i.themeOptions.localStorageKey);try{if(i.usedColor=JSON.parse(localStorage.getItem(i.localColorUsedKey)),!(i.usedColor&&i.usedColor instanceof Array))throw new Error("usedColor get wrong type")}catch(e){localStorage.setItem(i.localColorUsedKey,[]),i.usedColor=[]}return i.createUsedColor(),i.themeOptions.keepChooseColor&&(i.container.classList.add("keep-color"),i.bindLabelEvent(),i.expendIcon()),i.curColor="",i}return c(e,I),n(e,[{key:"statics",get:function(){return this.constructor}},{key:"bindLabelEvent",value:function(){var e=this;this.label.addEventListener("mousedown",(function(t){e.close(),t.preventDefault(),e.selectItem(Array.from(e.options.querySelectorAll(".ql-picker-item")).find((function(t){var r;return(null!==(r=t.dataset.value)&&void 0!==r?r:"")===e.curColor})),!0)}))}},{key:"expendIcon",value:function(){var e=this,t=document.createElement("span");t.classList.add("ql-picker-expand"),this.themeOptions.expandIcon&&(t.innerHTML=this.themeOptions.expandIcon),this.label.parentNode.insertBefore(t,this.label.nextSibling),t.addEventListener("mousedown",(function(){e.togglePicker()})),this.labelIcon=t}},{key:"update",value:function(){var e;if(this.currentIndex>-1){var t=this.container.querySelectorAll(".ql-picker-item")[this.currentIndex];e=this.select.options[this.currentIndex],this.selectItem(t)}else this.selectItem(null);var r=null!=e&&e!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",r),this.labelIcon&&this.labelIcon.classList.toggle("ql-active",r)}},{key:"createUsedColor",value:function(){var e=document.createElement("div");e.classList.add("used");var t=document.createElement("div");t.classList.add("used-list"),e.appendChild(t),this.options.appendChild(e),this.usedColorLabels=t;for(var r=this.usedColor.length-1;r>=0;r--)this.createUsedColorItem(this.usedColor[r])}},{key:"createUsedColorItem",value:function(e){var t=this.createUsedColorOption(e);this.select.appendChild(t);var r=this.buildItem(t);r.setAttribute("custom",""),this.usedColorLabels.appendChild(r)}},{key:"createUsedColorOption",value:function(e){var t=this.select.querySelector("option[value='".concat(e,"'][custom]"));if(t)return t;var r=document.createElement("option");return r.setAttribute("custom",""),r.setAttribute("value",e),r}},{key:"removeUsedColor",value:function(e){var t=this.select.querySelector("option[value='".concat(e,"'][custom]")),r=this.options.querySelector("p[data-value='".concat(e,"'][custom]"));t&&t.remove(),r&&r.remove()}},{key:"selectColor",value:function(e){var t=this;if(e){var r=this.usedColor.findIndex((function(t){return t===e}));if(-1!==r){var n=this.usedColor.splice(r,1);this.removeUsedColor(n)}this.usedColor.unshift(e),this.usedColor.slice(this.themeOptions.maxHistoryColor).map((function(e){return t.removeUsedColor(e)})),this.usedColor=this.usedColor.slice(0,this.themeOptions.maxHistoryColor),localStorage.setItem(this.localColorUsedKey,JSON.stringify(this.usedColor)),this.createUsedColorItem(e)}}},{key:"buildItem",value:function(e){var t=this;if("custom"===e.value){var r=(l=function(e){var r=v(e),n=r.r,o=r.g,a=r.b,i=r.a,c="rgba(".concat(n,", ").concat(o,", ").concat(a,", ").concat(i,")");t.selectColor(c),t.selectItem(t.options.querySelector("p[data-value='".concat(c,"']")),!0)},s=300,function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];u&&clearTimeout(u),u=setTimeout((function(){l.apply(e,r)}),s)}),n=document.createElement("div");n.classList.add("custom","ql-picker-item");var o=document.createElement("span");o.textContent=this.statics.customText,n.appendChild(o);var a=k({onChange:r});return n.addEventListener("click",(function(e){e.stopPropagation(),n.contains(a)||(n.appendChild(a),a.addEventListener("click",(function(e){return e.stopPropagation()})),document.addEventListener("click",(function(){a.remove()}),{once:!0}))})),n}var i=document.createElement("p");i.tabIndex="0",i.setAttribute("role","button"),i.classList.add("ql-picker-item");var c,l,s,u,d=e.getAttribute("value");if(!e.value){i.classList.add("blank");var b=document.createElement("span");b.textContent=this.statics.clearText,i.appendChild(b),(.299*(c=L(d)).r+.587*c.g+.114*c.b)/255>.5||(i.dataset.dark="true")}return e.hasAttribute("value")&&i.setAttribute("data-value",d),e.textContent&&i.setAttribute("data-label",e.textContent),i.addEventListener("click",(function(){var e;t.selectColor(null==i||null===(e=i.dataset)||void 0===e?void 0:e.value),t.selectItem(i,!0)})),i.style.setProperty("--bg",d),i}},{key:"selectItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e&&e.getAttribute("data-value")||"",n=this.label.querySelector(".ql-color-label");n&&("line"===n.tagName?n.style.stroke=r:n.style.fill=r),this.curColor=r;var o=this.container.querySelector(".ql-selected");null!=o&&o.classList.remove("ql-selected"),null!=e&&(e.classList.add("ql-selected"),this.select.selectedIndex=Array.from(this.select.children).findIndex((function(t){var r;return t.value===(null!==(r=e.dataset.value)&&void 0!==r?r:"")})),this.currentIndex=this.select.selectedIndex,e.hasAttribute("data-value")?this.label.setAttribute("data-value",e.getAttribute("data-value")):this.label.removeAttribute("data-value"),e.hasAttribute("data-label")?this.label.setAttribute("data-label",e.getAttribute("data-label")):this.label.removeAttribute("data-label"),t&&(this.select.dispatchEvent(new Event("change")),this.themeOptions.closeAfterChange&&this.close()))}}])}();s(S,"clearText","Remove color"),s(S,"customText","Color picker");var w=p.import("parchment"),A=new(w.StyleAttributor||w.Attributor.Style)("background","background-color",{scope:w.Scope.INLINE}),x=p.import("parchment"),q=new(x.StyleAttributor||x.Attributor.Style)("color","color",{scope:x.Scope.INLINE}),O=p.import("themes/snow"),M=p.import("ui/icon-picker"),j=p.import("ui/picker");p.register({"attributors/style/color":q,"formats/color":q,"attributors/style/background":A,"formats/background":A},!0);var N=[!1,"center","right","justify"],T=[!1,"serif","monospace"],P=["1","2","3",!1],U=["small",!1,"large","huge"],_=["","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(72, 83, 104)","rgb(41, 114, 244)","rgb(0, 163, 245)","rgb(49, 155, 98)","rgb(222, 60, 54)","rgb(248, 136, 37)","rgb(245, 196, 0)","rgb(153, 56, 215)","rgb(242, 242, 242)","rgb(127, 127, 127)","rgb(243, 245, 247)","rgb(229, 239, 255)","rgb(229, 246, 255)","rgb(234, 250, 241)","rgb(254, 233, 232)","rgb(254, 243, 235)","rgb(254, 249, 227)","rgb(253, 235, 255)","rgb(216, 216, 216)","rgb(89, 89, 89)","rgb(197, 202, 211)","rgb(199, 220, 255)","rgb(199, 236, 255)","rgb(195, 234, 213)","rgb(255, 201, 199)","rgb(255, 220, 196)","rgb(255, 238, 173)","rgb(242, 199, 255)","rgb(191, 191, 191)","rgb(63, 63, 63)","rgb(128, 139, 158)","rgb(153, 190, 255)","rgb(153, 221, 255)","rgb(152, 215, 182)","rgb(255, 156, 153)","rgb(255, 186, 132)","rgb(255, 226, 112)","rgb(213, 142, 255)","rgb(165, 165, 165)","rgb(38, 38, 38)","rgb(53, 59, 69)","rgb(20, 80, 184)","rgb(18, 116, 165)","rgb(39, 124, 79)","rgb(158, 30, 26)","rgb(184, 96, 20)","rgb(163, 130, 0)","rgb(94, 34, 129)","rgb(147, 147, 147)","rgb(13, 13, 13)","rgb(36, 39, 46)","rgb(12, 48, 110)","rgb(10, 65, 92)","rgb(24, 78, 50)","rgb(88, 17, 14)","rgb(92, 48, 10)","rgb(102, 82, 0)","rgb(59, 21, 81)","custom"],R=function(){function r(){return t(this,r),o(this,r,arguments)}return c(r,O),n(r,[{key:"buildPickers",value:function(t,r){var n=this;this.pickers=Array.from(t).map((function(t){if(t.classList.contains("ql-align")&&(null==t.querySelector("option")&&D(t,N),"object"===e(r.align)))return new M(t,r.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var o=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&function(e,t,r,n){var o=document.createElement("span");t.forEach((function(t){var a=document.createElement("option");t===n?a.setAttribute("selected","selected"):(o.style[r]=t,a.setAttribute("value",o.style[r])),e.appendChild(a)}))}(t,_),new S(t,r[o],n.options.themeOptions)}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?D(t,T):t.classList.contains("ql-header")?D(t,P):t.classList.contains("ql-size")&&D(t,U)),new j(t)}));this.quill.on(p.events.EDITOR_CHANGE,(function(){n.pickers.forEach((function(e){var t;e instanceof S&&null!==(t=n.options)&&void 0!==t&&null!==(t=t.themeOptions)&&void 0!==t&&t.keepChooseColor||e.update()}))}))}}])}();function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){var n=document.createElement("option");t===r?n.setAttribute("selected","selected"):n.setAttribute("value",t),e.appendChild(n)}))}var B=p.import("themes/bubble"),H=p.import("ui/icon-picker"),K=p.import("ui/picker");p.register({"attributors/style/color":q,"formats/color":q,"attributors/style/background":A,"formats/background":A},!0);var F=[!1,"center","right","justify"],Y=[!1,"serif","monospace"],z=["1","2","3",!1],G=["small",!1,"large","huge"],J=["","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(72, 83, 104)","rgb(41, 114, 244)","rgb(0, 163, 245)","rgb(49, 155, 98)","rgb(222, 60, 54)","rgb(248, 136, 37)","rgb(245, 196, 0)","rgb(153, 56, 215)","rgb(242, 242, 242)","rgb(127, 127, 127)","rgb(243, 245, 247)","rgb(229, 239, 255)","rgb(229, 246, 255)","rgb(234, 250, 241)","rgb(254, 233, 232)","rgb(254, 243, 235)","rgb(254, 249, 227)","rgb(253, 235, 255)","rgb(216, 216, 216)","rgb(89, 89, 89)","rgb(197, 202, 211)","rgb(199, 220, 255)","rgb(199, 236, 255)","rgb(195, 234, 213)","rgb(255, 201, 199)","rgb(255, 220, 196)","rgb(255, 238, 173)","rgb(242, 199, 255)","rgb(191, 191, 191)","rgb(63, 63, 63)","rgb(128, 139, 158)","rgb(153, 190, 255)","rgb(153, 221, 255)","rgb(152, 215, 182)","rgb(255, 156, 153)","rgb(255, 186, 132)","rgb(255, 226, 112)","rgb(213, 142, 255)","rgb(165, 165, 165)","rgb(38, 38, 38)","rgb(53, 59, 69)","rgb(20, 80, 184)","rgb(18, 116, 165)","rgb(39, 124, 79)","rgb(158, 30, 26)","rgb(184, 96, 20)","rgb(163, 130, 0)","rgb(94, 34, 129)","rgb(147, 147, 147)","rgb(13, 13, 13)","rgb(36, 39, 46)","rgb(12, 48, 110)","rgb(10, 65, 92)","rgb(24, 78, 50)","rgb(88, 17, 14)","rgb(92, 48, 10)","rgb(102, 82, 0)","rgb(59, 21, 81)","custom"],X=function(){function r(){return t(this,r),o(this,r,arguments)}return c(r,B),n(r,[{key:"buildPickers",value:function(t,r){var n=this;this.pickers=Array.from(t).map((function(t){if(t.classList.contains("ql-align")&&(null==t.querySelector("option")&&W(t,F),"object"===e(r.align)))return new H(t,r.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var o=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&function(e,t,r,n){var o=document.createElement("span");t.forEach((function(t){var a=document.createElement("option");t===n?a.setAttribute("selected","selected"):(o.style[r]=t,a.setAttribute("value",o.style[r])),e.appendChild(a)}))}(t,J),new S(t,r[o],n.options.themeOptions)}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?W(t,Y):t.classList.contains("ql-header")?W(t,z):t.classList.contains("ql-size")&&W(t,G)),new K(t)}));this.quill.on(p.events.EDITOR_CHANGE,(function(){n.pickers.forEach((function(e){var t;e instanceof S&&null!==(t=n.options)&&void 0!==t&&null!==(t=t.themeOptions)&&void 0!==t&&t.keepChooseColor||e.update()}))}))}}])}();function W(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){var n=document.createElement("option");t===r?n.setAttribute("selected","selected"):n.setAttribute("value",t),e.appendChild(n)}))}export{X as EasyColorBubbleTheme,S as EasyColorPicker,R as EasyColorSnowTheme};
//# sourceMappingURL=index.js.map
