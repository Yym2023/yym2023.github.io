(function(){var e={3686:function(){function e(e,n){let t;return function(...o){clearTimeout(t),t=setTimeout((()=>e.apply(this,o)),n)}}document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".checkbox-label"),t=document.querySelector(".nav-items"),o=document.querySelector(".search-box"),r=document.querySelector(".search-box1"),i=document.querySelectorAll(".search-box-icon");let c=null,a=window.innerWidth;function s(){a<=990?r&&c&&(r.style.top=c.offsetTop+"px",r.style.left=""):o&&c&&(o.style.left=c.offsetLeft+"px",o.style.width=c.offsetWidth+"px",o.style.top="")}window.onload=s,n&&t&&n.addEventListener("click",(()=>{t.classList.toggle("active"),n.classList.toggle("hide")})),i.length>0&&i.forEach((e=>{e.addEventListener("click",(()=>{c=e,a=window.innerWidth,s(),n.click()}))})),window.addEventListener("resize",e((()=>{a=window.innerWidth,s()})),300),console.log("%c欢迎来到Ti的主页！","color: #0099ff; font-size: 20px;margin: 10px;background: #f0f0f0;padding: 10px;border-radius: 5px;background-filter: blur(10px);")}))},7254:function(){function e(){const e=document.querySelector("#btn");e.addEventListener("click",(e=>{const n=document.startViewTransition((()=>{document.documentElement.classList.toggle("dark")}));n.ready.then((()=>{const{clientX:n,clientY:t}=e,o=Math.hypot(Math.max(n,innerWidth-n),Math.max(t,innerHeight-t)),r=[`circle(0% at ${n}px ${t}px)`,`circle(${o}px at ${n}px ${t}px)`],i=document.documentElement.classList.contains("dark");document.documentElement.animate({clipPath:i?r.reverse():r},{duration:500,pseudoElement:i?"::view-transition-old(root)":"::view-transition-new(root)"})}))}))}document.addEventListener("DOMContentLoaded",(function(){e()}))},9716:function(){const e=new PerformanceObserver((e=>{const n=e.getEntries();let t=0,o=0;for(const i of n)t+=i.transferSize,o+=i.encodedBodySize||i.decodedBodySize;const r=o/t*100;console.log(`静态资源加载进度开始：${r.toFixed(2)}%`)}));e.observe({entryTypes:["resource"]});const n=window.performance.getEntriesByType("resource");let t=0,o=0;for(const i of n)t+=i.transferSize,o+=i.encodedBodySize||i.decodedBodySize;const r=o/t*100;console.log(`静态资源加载进度结束：${r.toFixed(2)}%`)},4894:function(e,n,t){"use strict";var o=t(5130),r=t(6768),i=t.p+"img/logo.721f328c.png";const c=(0,r.Fv)('<div class="menu-wrapapp acetion"><input type="checkbox" id="checkbox" style="display:none;"><label for="checkbox" class="checkbox-label"><div class="hamburger-lines"></div><div class="hamburger-lines"></div><div class="hamburger-lines"></div></label></div><div class="logo"><img src="'+i+'" alt="logo"><div>Ti logs</div></div>',2),a={class:"nav-items"},s={class:"search-box-icon"},l={class:"search-box-icon"},d={class:"search-box-icon"},u={class:"search-box-icon"},f=(0,r.Lk)("div",{class:"search-box"},null,-1),v=(0,r.Lk)("div",{class:"search-box1"},null,-1),m=(0,r.Fv)('<label class="switch"><span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span><span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span><input type="checkbox" class="input" id="btn"><span class="slider"></span></label>',1);function p(e,n){const t=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[c,(0,r.Lk)("div",a,[(0,r.Lk)("li",s,[(0,r.bF)(t,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("首页")])),_:1})]),(0,r.Lk)("li",l,[(0,r.bF)(t,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("仓库")])),_:1})]),(0,r.Lk)("li",d,[(0,r.bF)(t,{to:"/blog"},{default:(0,r.k6)((()=>[(0,r.eW)("日志")])),_:1})]),(0,r.Lk)("li",u,[(0,r.bF)(t,{to:"/user"},{default:(0,r.k6)((()=>[(0,r.eW)("联系我")])),_:1})]),f,v]),m]),(0,r.bF)(o)],64)}var h=t(1241);const g={},b=(0,h.A)(g,[["render",p]]);var y=b,w=(t(4114),t(1387));function x(e,n,t,o,i,c){const a=(0,r.g2)("Dropdown");return(0,r.uX)(),(0,r.Wv)(a,{key:i.componentKey})}var k=t.p+"img/bg1.ceb796f0.png",L=t.p+"img/bg2.4ead956d.png",E=t.p+"img/bg3.b11cef40.png",C=t.p+"img/bg4.c4ea8d08.png";const S={class:"home auto"},T=(0,r.Fv)('<div class="home_head"><div class="home_body"><div class="home_head_bg"><div class="bg bg1"><img src="'+k+'"></div><div class="bg bg2"><img src="'+L+'"></div><div class="bg bg3"><img src="'+E+'"></div><div class="bg bg4"><img src="'+C+'"></div></div><div class="home_head_logo"><img src="'+i+'"></div></div><div class="home_head_text"><div>Ti</div><div><div>欢迎来到Ti主页</div><div></div><div></div><div></div></div></div></div>',1),_=[T];function A(e,n,t,o,i,c){return(0,r.uX)(),(0,r.CE)("div",S,_)}let O;function z(){const e=document.querySelectorAll(".home_head_bg div"),n=["bg1","bg2","bg3","bg4"];let t=0;function o(){if(0!==e.length)for(let o=0;o<e.length;o++){e[o].classList.remove(...n);const r=(t+o)%n.length;e[o].classList.add(n[r])}}function r(){t=(t-1+n.length)%n.length}return{updateCarousel:o,incrementIndex:r}}function F(){const{updateCarousel:e,incrementIndex:n}=z();O=setInterval((function(){n(),e()}),3e3),e()}function B(){clearInterval(O)}function j(){B(),F()}var W={name:"CarouselComponent",mounted(){this.$nextTick((()=>{F()}))},beforeUnmount(){B()},methods:{restart(){j()}}};const $=(0,h.A)(W,[["render",A]]);var q=$,N={name:"HomeView",components:{Dropdown:q},data(){return{componentKey:Date.now()}},watch:{$route(e,n){this.resetComponent()}},methods:{resetComponent(){this.componentKey=Date.now()}}};const P=(0,h.A)(N,[["render",x]]);var D=P;const M=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:()=>t.e(647).then(t.bind(t,628))},{path:"/blog",name:"blog",component:()=>t.e(477).then(t.bind(t,6477))},{path:"/user",name:"user",component:()=>t.e(954).then(t.bind(t,7954))},{path:"/BlogToView",name:"BlogToView",component:()=>t.e(340).then(t.bind(t,4340))},{path:"/vuea",component:()=>t.e(143).then(t.bind(t,7495))}],I=(0,w.aE)({history:(0,w.LA)("/"),routes:M});I.isReady().then((()=>{"/"!==I.currentRoute.value.path&&I.push("/")}));var K=I,V=t(782),X=(0,V.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),H=(t(7254),t(9716),t(3686),t(8704));H.A.set("key","value",{expires:360,path:""});const R=H.A.get("key");H.A.remove("key"),console.log(R),(0,o.Ef)(y).use(X).use(K).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{143:"47904827",340:"d8e60e58",477:"836c11f7",647:"28ce4b2e",954:"bc2d7509"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{143:"bebd28da",477:"ad840fff",647:"c7f82cbf",954:"d6648da4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="index:";t.l=function(o,r,i,c){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==n+i){a=u;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=o),e[o]=[r];var f=function(n,t){a.onerror=a.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,i){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",t.nc&&(c.nonce=t.nc);var a=function(t){if(c.onerror=c.onload=null,"load"===t.type)r();else{var o=t&&t.type,a=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=a,c.parentNode&&c.parentNode.removeChild(c),i(s)}};return c.onerror=c.onload=a,c.href=n,o?o.parentNode.insertBefore(c,o.nextSibling):document.head.appendChild(c),c},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){r=c[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var c=t.miniCssF(o),a=t.p+c;if(n(c,a))return r();e(o,a,null,r,i)}))},r={524:0};t.f.miniCss=function(e,n){var t={143:1,477:1,647:1,954:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var c=t.p+t.u(n),a=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+c+")",a.name="ChunkLoadError",a.type=i,a.request=c,r[1](a)}};t.l(c,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],s=o[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var d=s(t)}for(n&&n(o);l<c.length;l++)i=c[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkindex"]=self["webpackChunkindex"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4894)}));o=t.O(o)})();
//# sourceMappingURL=app.edf58d6d.js.map