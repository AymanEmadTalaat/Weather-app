(()=>{"use strict";var n={365:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(354),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,':root {\n  --font-size-: clamp(0.9rem, 2vw, 1.2rem);\n  --color1-: #71a5de;\n  --color2-: #83b0e1;\n  --color3-: #aecbeb;\n  --color4-: #e1ecf7;\n  --color5-: #f8f9fb;\n  --color6-: #0e0e0e;\n  --color7-: #1a759f;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  user-select: none;\n  scroll-behavior: smooth;\n  font-family: "Concert One", sans-serif;\n  font-size: var(--font-size-);\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-image: url("https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n/* Div that contain weather details */\n.container {\n  width: 450px;\n  background: var(--color7-);\n  color: var(--color5-);\n  margin-block: 1rem;\n  padding: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--color6-);\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  opacity: 0.9;\n}\n\n.container > div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.container .div1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.container .div2 {\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.container .div3 {\n  justify-content: space-evenly;\n}\n\n/* Search field */\n#enter-city {\n  width: 350px;\n  border: none;\n  border-radius: 20px;\n  outline: none;\n  padding: 10px 15px;\n  background-color: var(--color5-);\n}\n\n#enter-city:focus {\n  outline: 1px solid var(--color6-);\n}\n\n/* Search icon */\n.search {\n  cursor: pointer;\n}\n\n/* Weather icon */\n#image {\n  justify-content: center;\n}\n\n#image > span {\n  font-size: 5rem;\n  color: var(--color5-);\n}\n\n.temp {\n  color: var(--color5-);\n}\n\n/* Weather description */\n#description {\n  padding-inline: 10px;\n  text-align: center;\n}\n\n/* Loading element */\n.loading-parent {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background-color: #000000;\n  opacity: 0.6;\n  display: none;\n}\n\n.loading {\n  width: 3rem;\n  height: 3rem;\n  background-color: var(--color7-);\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;EACjB,uBAAuB;EACvB,sCAAsC;EACtC,4BAA4B;AAC9B;;AAEA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,+LAA+L;EAC/L,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA,qCAAqC;AACrC;EACE,YAAY;EACZ,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,4EAA4E;EAC5E,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA,gBAAgB;AAChB;EACE,eAAe;AACjB;;AAEA,iBAAiB;AACjB;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC",sourcesContent:[':root {\r\n  --font-size-: clamp(0.9rem, 2vw, 1.2rem);\r\n  --color1-: #71a5de;\r\n  --color2-: #83b0e1;\r\n  --color3-: #aecbeb;\r\n  --color4-: #e1ecf7;\r\n  --color5-: #f8f9fb;\r\n  --color6-: #0e0e0e;\r\n  --color7-: #1a759f;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  scroll-behavior: smooth;\r\n  font-family: "Concert One", sans-serif;\r\n  font-size: var(--font-size-);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url("https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n/* Div that contain weather details */\r\n.container {\r\n  width: 450px;\r\n  background: var(--color7-);\r\n  color: var(--color5-);\r\n  margin-block: 1rem;\r\n  padding: 30px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid var(--color6-);\r\n  border-radius: 15px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  opacity: 0.9;\r\n}\r\n\r\n.container > div {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.container .div1 {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.container .div2 {\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.container .div3 {\r\n  justify-content: space-evenly;\r\n}\r\n\r\n/* Search field */\r\n#enter-city {\r\n  width: 350px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  padding: 10px 15px;\r\n  background-color: var(--color5-);\r\n}\r\n\r\n#enter-city:focus {\r\n  outline: 1px solid var(--color6-);\r\n}\r\n\r\n/* Search icon */\r\n.search {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Weather icon */\r\n#image {\r\n  justify-content: center;\r\n}\r\n\r\n#image > span {\r\n  font-size: 5rem;\r\n  color: var(--color5-);\r\n}\r\n\r\n.temp {\r\n  color: var(--color5-);\r\n}\r\n\r\n/* Weather description */\r\n#description {\r\n  padding-inline: 10px;\r\n  text-align: center;\r\n}\r\n\r\n/* Loading element */\r\n.loading-parent {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  background-color: #000000;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.loading {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  background-color: var(--color7-);\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n'],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,A="".concat(l," ").concat(d);a[l]=d+1;var u=r(A),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:A,updater:m,references:1})}i.push(A)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),o=r.n(t),a=r(825),i=r.n(a),s=r(659),c=r.n(s),l=r(56),d=r.n(l),A=r(540),u=r.n(A),p=r(113),m=r.n(p),C=r(365),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(C.A,f),C.A&&C.A.locals&&C.A.locals;const E=document.querySelector(".container"),B=(document.querySelector(".search"),document.getElementById("enter-city")),h=document.querySelector(".date"),y=document.querySelector(".address"),g=document.getElementById("image"),b=document.querySelector(".temp"),v=document.getElementById("description"),x=document.querySelector(".humidity"),w=document.querySelector(".wind-speed"),L=document.createElement("span");L.classList.add("material-symbols-outlined"),L.innerHTML="cloud";const T=document.createElement("span");T.classList.add("material-symbols-outlined"),T.innerHTML="sunny";const M=document.createElement("span");M.classList.add("material-symbols-outlined"),M.innerHTML="rainy";const k=document.createElement("span");k.classList.add("material-symbols-outlined"),k.innerHTML="thunderstorm";const H=document.createElement("span");H.classList.add("material-symbols-outlined"),H.innerHTML="partly_cloudy_day";const S=document.createElement("span");S.classList.add("material-symbols-outlined"),S.innerHTML="clear_day";const I=document.createElement("span");I.classList.add("material-symbols-outlined"),I.innerHTML="cloudy_snowing";const j=document.createElement("span");j.classList.add("material-symbols-outlined"),j.innerHTML="nights_stay";const q=document.createElement("span");q.classList.add("material-symbols-outlined"),q.innerHTML="sunny_snowing";const W=document.createElement("span");W.classList.add("material-symbols-outlined"),H.innerHTML="partly_cloudy_night";const z=document.createElement("span");z.classList.add("material-symbols-outlined"),z.innerHTML="severe_cold";const Y=document.createElement("span");Y.classList.add("material-symbols-outlined"),Y.innerHTML="airwave";const _=document.createElement("span");_.classList.add("material-symbols-outlined"),_.innerHTML="snowing";const D=document.createElement("span");D.classList.add("material-symbols-outlined"),D.innerHTML="tornado";const R=document.createElement("span");R.classList.add("material-symbols-outlined"),R.innerHTML="foggy";const $=document.createElement("span");$.classList.add("material-symbols-outlined"),$.innerHTML="weather_snowy";const O=document.createElement("span");O.classList.add("material-symbols-outlined"),O.innerHTML="storm";const Q=document.createElement("span");Q.classList.add("material-symbols-outlined"),Q.innerHTML="rainy_snow";const U=document.createElement("span");U.classList.add("material-symbols-outlined"),U.innerHTML="circle",U.style.cssText="font-size: 5px; vertical-align: top;";const Z=document.querySelector(".loading-parent"),G=document.getElementById("enter-city"),F=document.querySelector(".search");F.addEventListener("click",(()=>{""===G.value||G.value.length<4?F.ariaDisabled:(async function(){const n=new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${B.value}?key=FF8G6AB7WE29JU48EC2WEV78Q`,{method:"GET",mode:"cors"});try{Z.style.cssText="display: block;",setTimeout((()=>{Z.style.cssText="display: none;"}),5e3);const e=await fetch(n),r=await e.json();console.log(r);const t={date:`${r.days[0].datetime}`,address:`${r.address}`,weatherIcon:`${r.currentConditions.icon}`,temp:`${r.currentConditions.temp} `,description:`${r.description}`,humidity:`${r.currentConditions.humidity}%`,windSpeed:`${r.currentConditions.windspeed}km/h`};Z.style.cssText="display: none;",h.textContent=t.date,y.textContent=t.address,t.weatherIcon.includes("cloud")?(g.innerHTML="",g.appendChild(L)):t.weatherIcon.includes("sunny")?(g.innerHTML="",g.appendChild(T)):t.weatherIcon.includes("rain")?(g.innerHTML="",g.appendChild(M)):t.weatherIcon.includes("thunderstorm")?(g.innerHTML="",g.appendChild(k)):t.weatherIcon.includes("Partially cloudy")?(g.innerHTML="",g.appendChild(H)):t.weatherIcon.includes("clear")?(g.innerHTML="",g.appendChild(S)):t.weatherIcon.includes("cloudy snowing")?(g.innerHTML="",g.appendChild(I)):t.weatherIcon.includes("nights stay")?(g.innerHTML="",g.appendChild(j)):t.weatherIcon.includes("sunny snowing")?(g.innerHTML="",g.appendChild(q)):t.weatherIcon.includes("partially cloudy night")?(g.innerHTML="",g.appendChild(W)):t.weatherIcon.includes("severe cold")?(g.innerHTML="",g.appendChild(z)):t.weatherIcon.includes("airwave")?(g.innerHTML="",g.appendChild(Y)):t.weatherIcon.includes("snowing")?(g.innerHTML="",g.appendChild(_)):t.weatherIcon.includes("tornado")?(g.innerHTML="",g.appendChild(D)):t.weatherIcon.includes("foggy")?(g.innerHTML="",g.appendChild(R)):t.weatherIcon.includes("weather snowy")?(g.innerHTML="",g.appendChild($)):t.weatherIcon.includes("storm")?(g.innerHTML="",g.appendChild(O)):t.weatherIcon.includes("rainy snow")&&(g.innerHTML="",g.appendChild(Q)),b.textContent=t.temp,b.appendChild(U),b.innerHTML+="F",v.textContent=t.description,x.textContent=t.humidity,w.textContent=t.windSpeed,E.style.cssText="gap: 1.5rem;"}catch(n){console.log(n)}}(),B.value="")}))})();
//# sourceMappingURL=main.js.map