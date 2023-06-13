(()=>{"use strict";var n,e,t,r,o,a,i,c,d,l,s,p,u,f,m={772:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  z-index: 1;\n  position: fixed;\n\n  top: 0;\n  width: 100%;\n}\n\nheader h1 {\n  border: 3px solid white;\n  padding: 0.3rem;\n  margin: 0 5%;\n  display: flex;\n  align-self: center;\n}\n\nheader nav li {\n  display: none;\n  color: white;\n}\n\n.nav-icon {\n  border: none;\n}\n\n.nav-icon i {\n  padding: 0.5rem;\n  font-size: 2.5rem;\n  color: white;\n  background-color: black;\n}\n\nbutton {\n  color: white;\n  background-color: black;\n}\n\nheader.active h1 {\n  margin: 0 5%;\n}\n\nheader.active nav {\n  margin-top: 2rem;\n  transition: 2s;\n}\n\nheader.active nav li {\n  display: block;\n  color: white;\n  padding: 5.3rem;\n}\n\nheader.active nav li a {\n  text-decoration: none;\n  color: white;\n  font-size: 2rem;\n  padding: 4rem;\n}\n\nheader.active nav li a:hover {\n  text-decoration: underline;\n}\n\nmain {\n  margin-top: 4rem;\n}\n\n.about {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.about h2 {\n  text-decoration: underline;\n  font-size: 2rem;\n  margin: 1rem 0;\n}\n\n.about .introduction-contain {\n  padding: 5% 5%;\n  box-shadow: 1px 0px 2px black inherit;\n  background-color: #505a5b;\n  color: white;\n}\n\n.about .introduction-contain h3 {\n  text-align: center;\n  font-size: 1.6rem;\n  padding: 0 1.3rem;\n  margin-bottom: 5%;\n  border: 2px solid #dcedff;\n  border-left: 0;\n  border-top: 0;\n  border-radius: 0px 0px 32px 0px;\n}\n\n.about .introduction-contain p {\n  margin-bottom: 5%;\n  font-size: 20px;\n  padding: 0.5rem 1.3rem;\n  border: 2px solid #dcedff;\n  border-right: 0;\n  border-bottom: 0;\n  border-radius: 32px 0px 0px 0px;\n}\n\n.skills-container {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.skill-column {\n  margin: 2rem 5%;\n  padding: 0.5rem;\n  max-width: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border: 1px #505a5b solid;\n  border-radius: 2.5%;\n  box-shadow: 0px 0px 4px black;\n}\n\n.skill-column i {\n  background-color: #94b0da;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  color: white;\n  font-size: 32px;\n  padding: 1rem;\n}\n\n.skill-column h2 {\n  transform: translateY(-25%);\n  font-size: 24px;\n}\n\n.skill-column p {\n  font-size: 18px;\n}\n\n.skill-description {\n  margin-top: 0.6rem;\n}\n\n.skill-description h3 {\n  font-size: 20px;\n  margin-top: 0.6rem;\n}\n\n.skill-description ul {\n  margin-top: 0.3rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: left;\n}\n\n.skill-description ul li {\n  margin-top: 0.3rem;\n  font-size: 18px;\n}\n\n.projects {\n  background-color: #505a5b;\n  color: white;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 5%;\n}\n\n.projects p {\n  font-size: 18px;\n}\n\n.project-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.project-box {\n  text-align: left;\n  max-width: 500px;\n  margin-top: 1rem;\n  background-color: white;\n  color: black;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.project-head {\n  margin-bottom: -10%;\n}\n\n.project-head img {\n  width: 100%;\n  height: 25%;\n  align-self: center;\n}\n\n.project-head h3 {\n  color: white;\n  display: inline-block;\n  font-size: 24px;\n  padding: 2%;\n  background-color: #343f3e99;\n  transform: translateY(-110%);\n}\n\n.project-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-information p {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.project-information a {\n  background-color: #343f3e;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n  padding: 4%;\n  text-decoration: none;\n  align-self: flex-end;\n  border-radius: 2rem;\n}\n\n.project-information a:hover {\n  transition: 0.25s;\n  background-color: #dcedff;\n  color: #343f3e;\n}\n\n@media screen and (min-width: 762px) {\n  .nav-icon {\n    display: none;\n  }\n\n  header,\n  header.active {\n    flex-direction: row-reverse;\n  }\n\n  header nav,\n  header.active nav {\n    display: flex;\n  }\n\n  header nav li,\n  header.active nav li {\n    display: block;\n  }\n\n  header nav li a,\n  header.active nav li a {\n    color: white;\n    text-decoration: none;\n  }\n\n  header nav,\n  header.active nav {\n    margin-top: 0;\n  }\n\n  header nav li,\n  header.active nav li {\n    display: block;\n    color: white;\n    padding: 1rem;\n  }\n\n  header nav li a,\n  header.active nav li a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.6rem;\n    padding: 1rem;\n  }\n\n  header nav li a:hover,\n  header.active nav li a:hover {\n    text-decoration: underline;\n  }\n\n  .about .introduction-contain {\n    background-color: #505a5b;\n    width: 100%;\n  }\n\n  .about .introduction-contain .intro {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    flex-wrap: wrap;\n  }\n\n  .about .introduction-contain p {\n    max-width: 600px;\n    font-size: 1.6rem;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),d=v(216),l=v.n(d),s=v(589),p=v.n(s),u=v(772),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.querySelector(".nav-icon").addEventListener("click",(function(){const n=document.querySelector(".nav-icon i");n.classList.contains("fa-bars")?(n.classList.add("fa-x"),n.classList.remove("fa-bars")):n.classList.contains("fa-x")&&(n.classList.add("fa-bars"),n.classList.remove("fa-x")),document.querySelector("header").classList.toggle("active")}))})();