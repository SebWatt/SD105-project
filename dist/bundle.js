(()=>{"use strict";var n={772:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  z-index: 1;\n  position: fixed;\n\n  top: 0;\n  width: 100%;\n}\n\nheader h1 {\n  border: 3px solid white;\n  padding: 0.3rem;\n  margin: 0 5%;\n  display: flex;\n  align-self: center;\n}\n\nheader nav li {\n  display: none;\n  color: white;\n}\n\n.nav-icon {\n  border: none;\n}\n\n.nav-icon i {\n  padding: 0.5rem;\n  font-size: 2.5rem;\n  color: white;\n  background-color: black;\n}\n\nbutton {\n  color: white;\n  background-color: black;\n}\n\nheader.active h1 {\n  margin: 0 5%;\n}\n\nheader.active nav {\n  margin-top: 2rem;\n  transition: 2s;\n}\n\nheader.active nav li {\n  display: block;\n  color: white;\n  padding: 5.3rem;\n}\n\nheader.active nav li a {\n  text-decoration: none;\n  color: white;\n  font-size: 2rem;\n  padding: 4rem;\n}\n\nheader.active nav li a:hover {\n  text-decoration: underline;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\n.about {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.about h2 {\n  text-decoration: underline;\n  font-size: 2rem;\n  margin: 1rem 0;\n}\n\n.about .introduction-contain {\n  padding: 5% 5%;\n  box-shadow: 1px 0px 2px black inherit;\n  background-color: #505a5b;\n  color: white;\n}\n\n.about .introduction-contain h3 {\n  text-align: center;\n  font-size: 1.6rem;\n  padding: 0 1.3rem;\n  margin-bottom: 5%;\n  border: 2px solid #dcedff;\n  border-left: 0;\n  border-top: 0;\n  border-radius: 0px 0px 32px 0px;\n}\n\n.about .introduction-contain p {\n  margin-bottom: 5%;\n  font-size: 20px;\n  padding: 0.5rem 1.3rem;\n  border: 2px solid #dcedff;\n  border-right: 0;\n  border-bottom: 0;\n  border-radius: 32px 0px 0px 0px;\n}\n\n.skills-container {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.skill-column {\n  margin: 2rem 5%;\n  padding: 0.5rem;\n  max-width: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border: 1px #505a5b solid;\n  border-radius: 2.5%;\n  box-shadow: 0px 0px 4px black;\n}\n\n.skill-column i {\n  background-color: #94b0da;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  color: white;\n  font-size: 32px;\n  padding: 1rem;\n}\n\n.skill-column h2 {\n  transform: translateY(-25%);\n  font-size: 24px;\n}\n\n.skill-column p {\n  font-size: 18px;\n}\n\n.skill-description {\n  margin-top: 0.6rem;\n}\n\n.skill-description h3 {\n  font-size: 20px;\n  margin-top: 0.6rem;\n}\n\n.skill-description ul {\n  margin-top: 0.3rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: left;\n}\n\n.skill-description ul li {\n  margin-top: 0.3rem;\n  font-size: 18px;\n}\n\n.projects {\n  background-color: #505a5b;\n  color: white;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 5%;\n}\n\n.projects p {\n  font-size: 18px;\n}\n\n.project-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.project-box {\n  text-align: left;\n  max-width: 500px;\n  margin-top: 1rem;\n  background-color: white;\n  color: black;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.project-head {\n  margin-bottom: -10%;\n}\n\n.project-head img {\n  width: 100%;\n  height: 25%;\n  align-self: center;\n}\n\n.project-head h3 {\n  color: white;\n  display: inline-block;\n  font-size: 24px;\n  padding: 2%;\n  background-color: #343f3e99;\n  transform: translateY(-110%);\n}\n\n.project-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-information p {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.project-information a {\n  background-color: #343f3e;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n  padding: 4%;\n  text-decoration: none;\n  align-self: flex-end;\n  border-radius: 2rem;\n}\n\n.project-information a:hover {\n  transition: 0.25s;\n  background-color: #dcedff;\n  color: #343f3e;\n}\n\nfooter {\n  padding: 2rem;\n  background-color: black;\n  color: white;\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 1.6rem;\n}\n\n@media screen and (min-width: 762px) {\n  .nav-icon {\n    display: none;\n  }\n\n  header,\n  header.active {\n    flex-direction: row-reverse;\n  }\n\n  header nav,\n  header.active nav {\n    display: flex;\n  }\n\n  header nav li,\n  header.active nav li {\n    display: block;\n  }\n\n  header nav li a,\n  header.active nav li a {\n    color: white;\n    text-decoration: none;\n  }\n\n  header nav,\n  header.active nav {\n    margin-top: 0;\n  }\n\n  header nav li,\n  header.active nav li {\n    display: block;\n    color: white;\n    padding: 1rem;\n  }\n\n  header nav li a,\n  header.active nav li a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.6rem;\n    padding: 1rem;\n  }\n\n  header nav li a:hover,\n  header.active nav li a:hover {\n    text-decoration: underline;\n  }\n\n  .about .introduction-contain {\n    background-color: #505a5b;\n    width: 100%;\n  }\n\n  .about .introduction-contain .intro {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    flex-wrap: wrap;\n  }\n\n  .about .introduction-contain p {\n    max-width: 600px;\n    font-size: 1.6rem;\n  }\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],l=t.base?d[0]+t.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=r(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var d=t(n,o),l=0;l<i.length;l++){var s=r(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),d=r.n(c),l=r(216),s=r.n(l),p=r(589),u=r.n(p),f=r(772),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=r.p+"images/8e2d544046e4072c206e.png",g=r.p+"images/3f8e4ad07afd49c3ec94.png",v=r.p+"images/b5b5232a9779a4fe7b20.png",x=document.querySelectorAll("img");x[0].src=h,x[1].src=g,x[2].src=v,document.querySelector(".nav-icon").addEventListener("click",(function(){const n=document.querySelector(".nav-icon i");n.classList.contains("fa-bars")?(n.classList.add("fa-x"),n.classList.remove("fa-bars")):n.classList.contains("fa-x")&&(n.classList.add("fa-bars"),n.classList.remove("fa-x")),document.querySelector("header").classList.toggle("active")}))})()})();