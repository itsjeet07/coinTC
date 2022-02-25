(this.webpackJsonpcointc=this.webpackJsonpcointc||[]).push([[7],{367:function(e,t,n){(function(e){function n(e,t){for(var n=0,a=e.length-1;a>=0;a--){var i=e[a];"."===i?e.splice(a,1):".."===i?(e.splice(a,1),n++):n&&(e.splice(a,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function a(e,t){if(e.filter)return e.filter(t);for(var n=[],a=0;a<e.length;a++)t(e[a],a,e)&&n.push(e[a]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var r=s>=0?arguments[s]:e.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(t=r+"/"+t,i="/"===r.charAt(0))}return(i?"/":"")+(t=n(a(t.split("/"),(function(e){return!!e})),!i).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),r="/"===i(e,-1);return(e=n(a(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&r&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(a(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function a(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=a(e.split("/")),s=a(n.split("/")),r=Math.min(i.length,s.length),c=r,l=0;l<r;l++)if(i[l]!==s[l]){c=l;break}var o=[];for(l=c;l<i.length;l++)o.push("..");return(o=o.concat(s.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,a=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){a=s;break}}else i=!1;return-1===a?n?"/":".":n&&1===a?"/":e.slice(0,a)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,a=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===a&&(i=!1,a=t+1);return-1===a?"":e.slice(n,a)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,a=-1,i=!0,s=0,r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47!==c)-1===a&&(i=!1,a=r+1),46===c?-1===t?t=r:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=r+1;break}}return-1===t||-1===a||0===s||1===s&&t===a-1&&t===n+1?"":e.slice(t,a)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(2))},587:function(e,t,n){var a=n(103),i=n(104);e.exports=function(){"use strict";var e={parentTrigger:"li",subMenu:"ul",toggle:!0,triggerElement:"a"},t={ACTIVE:"mm-active",COLLAPSE:"mm-collapse",COLLAPSED:"mm-collapsed",COLLAPSING:"mm-collapsing",METIS:"metismenu",SHOW:"mm-show"},n=function(){function n(t,i){a(this,n),this.element=n.isElement(t)?t:document.querySelector(t),this.config=Object.assign(Object.assign({},e),i),this.disposed=!1,this.triggerArr=[],this.init()}return i(n,[{key:"init",value:function(){var e=this,n=t.METIS,a=t.ACTIVE,i=t.COLLAPSE;this.element.classList.add(n),[].slice.call(this.element.querySelectorAll(this.config.subMenu)).forEach((function(t){t.classList.add(i);var n=t.closest(e.config.parentTrigger);(null==n?void 0:n.classList.contains(a))?e.show(t):e.hide(t);var s=null==n?void 0:n.querySelector(e.config.triggerElement);"true"!==(null==s?void 0:s.getAttribute("aria-disabled"))&&(null==s||s.setAttribute("aria-expanded","false"),null==s||s.addEventListener("click",e.clickEvent.bind(e)),e.triggerArr.push(s))}))}},{key:"clickEvent",value:function(e){if(!this.disposed){var t=null==e?void 0:e.currentTarget;t&&"A"===t.tagName&&e.preventDefault();var n=t.closest(this.config.parentTrigger),a=null==n?void 0:n.querySelector(this.config.subMenu);this.toggle(a)}}},{key:"update",value:function(){this.disposed=!1,this.init()}},{key:"dispose",value:function(){var e=this;this.triggerArr.forEach((function(t){t.removeEventListener("click",e.clickEvent.bind(e))})),this.disposed=!0}},{key:"on",value:function(e,t,n){return this.element.addEventListener(e,t,n),this}},{key:"off",value:function(e,t,n){return this.element.removeEventListener(e,t,n),this}},{key:"emit",value:function(e,t){var n=new CustomEvent(e,{bubbles:arguments.length>2&&void 0!==arguments[2]&&arguments[2],detail:t});this.element.dispatchEvent(n)}},{key:"toggle",value:function(e){var n=e.closest(this.config.parentTrigger);(null==n?void 0:n.classList.contains(t.ACTIVE))?this.hide(e):this.show(e)}},{key:"show",value:function(e){var n,a=this,i=e,s=t.ACTIVE,r=t.COLLAPSE,c=t.COLLAPSED,l=t.COLLAPSING,o=t.SHOW;if(!this.isTransitioning&&!i.classList.contains(l)){var d=function e(){i.classList.remove(l),i.style.height="",i.removeEventListener("transitionend",e),a.setTransitioning(!1),a.emit("shown.metisMenu",{shownElement:i})},u=i.closest(this.config.parentTrigger);null==u||u.classList.add(s);var m=null==u?void 0:u.querySelector(this.config.triggerElement);null==m||m.setAttribute("aria-expanded","true"),null==m||m.classList.remove(c),i.style.height="0px",i.classList.remove(r),i.classList.remove(o),i.classList.add(l);var h=[].slice.call(null===(n=null==u?void 0:u.parentNode)||void 0===n?void 0:n.children).filter((function(e){return e!==u}));this.config.toggle&&h.length>0&&h.forEach((function(e){var t=e.querySelector(a.config.subMenu);t&&a.hide(t)})),this.setTransitioning(!0),i.classList.add(r),i.classList.add(o),i.style.height="".concat(i.scrollHeight,"px"),this.emit("show.metisMenu",{showElement:i}),i.addEventListener("transitionend",d)}}},{key:"hide",value:function(e){var n=this,a=t.ACTIVE,i=t.COLLAPSE,s=t.COLLAPSED,r=t.COLLAPSING,c=t.SHOW,l=e;if(!this.isTransitioning&&l.classList.contains(c)){this.emit("hide.metisMenu",{hideElement:l});var o=l.closest(this.config.parentTrigger);null==o||o.classList.remove(a);var d=function e(){l.classList.remove(r),l.classList.add(i),l.style.height="",l.removeEventListener("transitionend",e),n.setTransitioning(!1),n.emit("hidden.metisMenu",{hiddenElement:l})};l.style.height="".concat(l.getBoundingClientRect().height,"px"),l.style.height="".concat(l.offsetHeight,"px"),l.classList.add(r),l.classList.remove(i),l.classList.remove(c),this.setTransitioning(!0),l.addEventListener("transitionend",d),l.style.height="0px";var u=null==o?void 0:o.querySelector(this.config.triggerElement);null==u||u.setAttribute("aria-expanded","false"),null==u||u.classList.add(s)}}},{key:"setTransitioning",value:function(e){this.isTransitioning=e}}],[{key:"attach",value:function(e,t){return new n(e,t)}},{key:"isElement",value:function(e){return Boolean(e.classList)}}]),n}();return n}()},588:function(e,t,n){},589:function(e,t,n){},689:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(6),s=n(0),r=n(4),c=n(383),l=n(587),o=n.n(l),d=n(367),u=n.n(d),m=n(364),h=n.n(m),j=n(21),b=n(365),g=n(34),v=[{name:"dashboard",icon:"simple-speedometer",path:""},{name:"admin-bank-details",icon:"simple-credit-card",path:"admin-bank-details"},{name:"user-management",icon:"simple-people",path:"user-management",embedded:[{name:"user-management",path:"user-management"},{name:"user-information",path:"user-information"},{name:"secession-management",path:"user-secession"},{name:"login-history",path:"user-session-history"},{name:"user-balance",path:"user-balance"},{name:"referral-management",path:"user-referral-management"},{name:"kyc-management",path:"user-kyc-management"}]},{name:"wallet-management",icon:"simple-wallet",path:"admin-wallet-management",embedded:[{name:"deposits",path:"wallet-deposits"},{name:"withdrawals",path:"wallet-withdrawals"},{name:"withdrawal-application-management",path:"wallet-withdrawal-application-management"},{name:"withdrawal-fee-management",path:"wallet-withdrawal-fee-management"}]},{name:"authentication-management",icon:"simple-shield",path:"authentication-management",embedded:[{name:"security-management",path:"auth-security-management"},{name:"kyc-certification",path:"auth-kyc-certification"}]},{name:"currency management",icon:"themify-glyph-125",path:"currency-management"},{name:"advert management",icon:"simple-pin",path:"advert-management",embedded:[{name:"adverts",path:"adverts"},{name:"orders",path:"orders"}]},{name:"trade-management",icon:"simple-puzzle",path:"p2p-management",embedded:[{name:"trade-history",path:"p2p-trade-history"},{name:"disputes",path:"p2p-disputes"}]},{name:"chat-management",icon:"simple-bubbles",path:"chat-management",embedded:[{name:"chat-messenger",path:"chat-messenger"},{name:"chat-history",path:"chat-history"}]},{name:"support-management",icon:"simple-support",path:"support",embedded:[{name:"Support",path:"support"},{name:"disputes-resolutions",path:"support-disputes"}]}],p=n(3);function f(e){var t=e.children,n=Object(s.useRef)();return Object(s.useEffect)((function(){n.current&&new o.a(n.current,{})}),[n]),Object(p.jsx)("div",{className:"mm-wrapper",children:Object(p.jsx)("ul",{className:"metismenu",ref:n,children:t})})}var x=function(){var e=Object(s.useContext)(g.a),t=e.iconHover,n=e.sidebarposition,a=e.headerposition,c=e.sidebarLayout,l=Object(s.useState)(),o=Object(i.a)(l,2),d=o[0],m=o[1],x=Object(r.g)();Object(s.useEffect)((function(){var e=document.querySelector(".nav-control"),t=document.querySelector("#main-wrapper");e.addEventListener("click",(function(){return t.classList.toggle("menu-toggle")}))}),[]);var O=Object(b.a)();return Object(s.useEffect)((function(){var e=x.location.pathname;e=e.split("/"),m(e[e.length-1])}),[x.location.pathname]),Object(p.jsx)("div",{className:"deznav ".concat(t," ").concat("fixed"===n.value&&"horizontal"===c.value&&"static"===a.value&&O>120?"fixed":""),children:Object(p.jsxs)(h.a,{className:"deznav-scroll",children:[Object(p.jsx)(f,{className:"metismenu",id:"menu",children:v.map((function(e,t){var n=e.name,a=e.embedded,i=void 0===a?[]:a,s=e.path,r=e.icon;return Object(p.jsxs)("li",{className:"".concat(i.length?i.includes(d)?"mm-active":"":d===s?"mm-active":""),children:[Object(p.jsxs)(j.b,{className:"".concat(i.length?"has-arrow ai-icon":""," "),to:i.length>0?"#":u.a.normalize("/admin/".concat(s)),style:{display:"flex",gap:8},children:[Object(p.jsx)("i",{className:r}),Object(p.jsx)("span",{className:"nav-text text-capitalize",children:n.replace(/[-]/gi," ")})]}),i.length?Object(p.jsx)("ul",{children:i.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{className:"".concat(d===e.path?"mm-active":""," text-capitalize"),to:u.a.normalize("/admin/".concat(e.path)),children:e.name.replace(/[-]/gi," ")})},"".concat(n,"_").concat(e.path,"_").concat(t))}))}):null]},"sidebar_routes_".concat(n,"_").concat(t))}))}),Object(p.jsx)("div",{className:"copyright",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"CoinTC "})," \xa9 2021 All Rights Reserved"]})})]})})},O=n(242),w=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(s.useContext)(g.a),c=r.navigationHader,l=r.openMenuToggle,o=r.background;return Object(p.jsxs)("div",{className:"nav-header",children:[Object(p.jsx)(j.b,{to:"/",className:"brand-logo",children:"dark"===o.value||"color_1"!==c?Object(p.jsx)(s.Fragment,{children:Object(p.jsx)("img",{src:O.a,alt:"coninTC logo",width:"100%",height:"70"})}):Object(p.jsxs)(s.Fragment,{children:[Object(p.jsxs)("svg",{className:"logo-abbr",width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("rect",{className:"svg-logo-rect",width:"50",height:"50",rx:"20",fill:"#EB8153"}),Object(p.jsx)("path",{className:"svg-logo-path",d:"M17.5158 25.8619L19.8088 25.2475L14.8746 11.1774C14.5189 9.84988 15.8701 9.0998 16.8205 9.75055L33.0924 22.2055C33.7045 22.5589 33.8512 24.0717 32.6444 24.3951L30.3514 25.0095L35.2856 39.0796C35.6973 40.1334 34.4431 41.2455 33.3397 40.5064L17.0678 28.0515C16.2057 27.2477 16.5504 26.1205 17.5158 25.8619ZM18.685 14.2955L22.2224 24.6007L29.4633 22.6605L18.685 14.2955ZM31.4751 35.9615L27.8171 25.6886L20.5762 27.6288L31.4751 35.9615Z",fill:"white"})]}),Object(p.jsx)("svg",{className:"brand-title",width:"74",height:"22",viewBox:"0 0 74 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{className:"svg-logo-path",d:"M0.784 17.556L10.92 5.152H1.176V1.12H16.436V4.564L6.776 16.968H16.548V21H0.784V17.556ZM25.7399 21.28C24.0785 21.28 22.6599 20.9347 21.4839 20.244C20.3079 19.5533 19.4025 18.6387 18.7679 17.5C18.1519 16.3613 17.8439 15.1293 17.8439 13.804C17.8439 12.3853 18.1519 11.088 18.7679 9.912C19.3839 8.736 20.2799 7.79333 21.4559 7.084C22.6319 6.37467 24.0599 6.02 25.7399 6.02C27.4012 6.02 28.8199 6.37467 29.9959 7.084C31.1719 7.79333 32.0585 8.72667 32.6559 9.884C33.2719 11.0413 33.5799 12.2827 33.5799 13.608C33.5799 14.1493 33.5425 14.6253 33.4679 15.036H22.6039C22.6785 16.0253 23.0332 16.7813 23.6679 17.304C24.3212 17.808 25.0585 18.06 25.8799 18.06C26.5332 18.06 27.1585 17.9013 27.7559 17.584C28.3532 17.2667 28.7639 16.8373 28.9879 16.296L32.7959 17.36C32.2172 18.5173 31.3119 19.46 30.0799 20.188C28.8665 20.916 27.4199 21.28 25.7399 21.28ZM22.4919 12.292H28.8759C28.7825 11.3587 28.4372 10.6213 27.8399 10.08C27.2612 9.52 26.5425 9.24 25.6839 9.24C24.8252 9.24 24.0972 9.52 23.4999 10.08C22.9212 10.64 22.5852 11.3773 22.4919 12.292ZM49.7783 21H45.2983V12.74C45.2983 11.7693 45.1116 11.0693 44.7383 10.64C44.3836 10.192 43.9076 9.968 43.3103 9.968C42.6943 9.968 42.069 10.2107 41.4343 10.696C40.7996 11.1813 40.3516 11.8067 40.0903 12.572V21H35.6103V6.3H39.6423V8.764C40.1836 7.90533 40.949 7.23333 41.9383 6.748C42.9276 6.26267 44.0663 6.02 45.3543 6.02C46.3063 6.02 47.0716 6.19733 47.6503 6.552C48.2476 6.888 48.6956 7.336 48.9943 7.896C49.3116 8.43733 49.517 9.03467 49.6103 9.688C49.7223 10.3413 49.7783 10.976 49.7783 11.592V21ZM52.7548 4.62V0.559999H57.2348V4.62H52.7548ZM52.7548 21V6.3H57.2348V21H52.7548ZM63.4657 6.3L66.0697 10.444L66.3497 10.976L66.6297 10.444L69.2337 6.3H73.8537L68.9257 13.608L73.9657 21H69.3457L66.6017 16.884L66.3497 16.352L66.0977 16.884L63.3537 21H58.7337L63.7737 13.692L58.8457 6.3H63.4657Z",fill:"black"})})]})}),Object(p.jsx)("div",{className:"nav-control",onClick:function(){a(!n),l()},children:Object(p.jsxs)("div",{className:"hamburger ".concat(n?"is-active":""),children:[Object(p.jsx)("span",{className:"line"}),Object(p.jsx)("span",{className:"line"}),Object(p.jsx)("span",{className:"line"})]})})]})};var L=n(33),y=n(188),C=n(164),N=n(687),E=C.a.IdenticonAvatar,k=y.a.user,A=function(e){var t,n,a;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var i=Object(L.b)(),s=Object(L.c)((function(e){return null===e||void 0===e?void 0:e.session}));return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("div",{className:"header-content",children:Object(p.jsx)("nav",{className:"navbar navbar-expand",children:Object(p.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",children:[Object(p.jsx)("div",{className:"header-left",children:Object(p.jsx)("div",{className:"input-group search-area right d-lg-inline-flex d-none",children:Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Find something here..."})})}),Object(p.jsx)("ul",{className:"navbar-nav header-right main-notification",children:Object(p.jsxs)(N.a,{as:"li",className:"nav-item dropdown header-profile",children:[Object(p.jsxs)(N.a.Toggle,{variant:"",as:"a",className:"nav-link i-false c-pointer",role:"button","data-toggle":"dropdown",children:[Object(p.jsx)(E,{size:50,alt:"",id:null===s||void 0===s||null===(t=s.user)||void 0===t?void 0:t.id}),Object(p.jsxs)("div",{className:"header-info",children:[Object(p.jsx)("span",{children:null===s||void 0===s||null===(n=s.user)||void 0===n?void 0:n.email}),Object(p.jsx)("small",{className:"text-capitalize",children:null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.role})]})]}),Object(p.jsx)(N.a.Menu,{align:"right",className:"mt-2",children:Object(p.jsxs)(j.b,{to:"#",onClick:function(){return i(k.logout())},className:"dropdown-item ai-icon",children:[Object(p.jsxs)("svg",{id:"icon-logout",xmlns:"http://www.w3.org/2000/svg",className:"text-danger",width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(p.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),Object(p.jsx)("polyline",{points:"16 17 21 12 16 7"}),Object(p.jsx)("line",{x1:21,y1:12,x2:9,y2:12})]}),Object(p.jsx)("span",{className:"ml-2",children:"Logout "})]})})]})})]})})})})},S=function(e){var t=e.title,n=e.onClick,a=(e.onClick2,e.onClick3,Object(s.useState)("")),r=Object(i.a)(a,2),c=r[0],l=r[1],o=function(e){return l(c===e?"":e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsx)(A,{onNote:function(){return o("chatbox")},onNotification:function(){return o("notification")},onProfile:function(){return o("profile")},toggle:c,title:t,onBox:function(){return o("box")},onClick:function(){return n()}}),Object(p.jsx)(x,{})]})};n(588),n(589);var T=function(){return Object(p.jsx)("div",{className:!0,style:{display:"flex",flexDirection:"column",height:"100%",margin:"auto",minHeight:"85vh",justifyContent:"center"},children:Object(p.jsx)("div",{class:"row justify-content-center h-100 align-items-center",children:Object(p.jsx)("div",{class:"col-md-5",children:Object(p.jsxs)("div",{class:"form-input-content text-center error-page",children:[Object(p.jsx)("h1",{class:"error-text font-weight-bold",children:Object(p.jsx)("i",{class:"fa fa-times-circle text-danger"})}),Object(p.jsx)("h4",{children:"Feature is currently Unavailable"})]})})})})},H=n(93),M=n.n(H),V=n(94),z=n(31),I=n(186),P=n(32),q=n(19),Z=y.a.user,B=function(e){var t=e.services,n=e.useService,a=Object(L.b)(),i=t.account,s=n(Object(z.a)({},null===q.a||void 0===q.a?void 0:q.a.LOGIN,null===i||void 0===i?void 0:i.login)).dispatchRequest;function r(e){P.b.error(e||"Request Error!",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}return Object(p.jsx)(I.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password||(t.password="Password is required"),t},onSubmit:function(e,t){var n=t.setSubmitting,i=e.email,c=e.password;n(!0);try{var l=function(){var e=Object(V.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:null===q.a||void 0===q.a?void 0:q.a.LOGIN,payload:{email:i,password:c,access_level:3},toast:{error:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(Z.login(l))}catch(o){console.error(o)}finally{n(!1)}},children:function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,s=e.handleBlur,r=e.handleSubmit,c=e.isSubmitting;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"authentication flex flex-column align-items-center justify-content-center vh-100",children:Object(p.jsx)("div",{className:"container h-100",children:Object(p.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(p.jsx)("div",{className:"col-lg-6 col-sm-11",children:Object(p.jsx)("div",{className:"authincation-content",children:Object(p.jsx)("div",{className:"row no-gutters",children:Object(p.jsx)("div",{className:"col-xl-12",children:Object(p.jsxs)("div",{className:"auth-form",children:[Object(p.jsx)("div",{className:"text-center mb-3",children:Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("img",{src:O.a,alt:""})})}),Object(p.jsx)("h4",{className:"text-center mb-4 ",children:"Admin login"}),Object(p.jsxs)("form",{onSubmit:r,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"mb-1 ",children:Object(p.jsx)("strong",{children:"Email"})}),Object(p.jsx)("input",{required:!0,type:"email",name:"email",onChange:i,onBlur:s,value:t.email,className:"form-control",placeholder:"Email address"}),Object(p.jsx)("small",{className:"text-danger",children:n.email&&a.email&&n.email})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"mb-1 ",children:Object(p.jsx)("strong",{children:"Password"})}),Object(p.jsx)("input",{type:"password",name:"password",onChange:i,onBlur:s,value:t.password,className:"form-control",placeholder:"password"}),Object(p.jsx)("small",{className:"text-danger",children:n.password&&a.password&&n.password})]}),Object(p.jsx)("div",{className:"form-row d-flex justify-content-between mt-4 mb-2"}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("button",{disabled:c,type:"submit",className:"btn btn-primary btn-block",children:c?"Submitting...":"Login"})})]})]})})})})})})})})})}})},_=B;B.displayName="LoginPage";var R=n(27),F=n(340),D=n(341),G=R.a.history,W=C.a.Error404;t.default=function(){var e=Object(L.c)((function(e){return null===e||void 0===e?void 0:e.session})),t=Object(s.useState)(null),n=Object(i.a)(t,2),l=n[0],o=n[1];return Object(s.useEffect)((function(){var t;o(new D.a({token:(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.token)||"",baseURL:"/api"}))}),[e]),l?Object(p.jsxs)(r.d,{children:[Object(p.jsx)(r.b,{exact:!0,path:"/admin/login",children:(null===e||void 0===e?void 0:e.user)?Object(p.jsx)(r.a,{to:{pathname:"/admin"}}):Object(p.jsx)(_,{services:l,useService:F.a})}),Object(p.jsx)(r.b,{path:"/admin",children:Object(p.jsx)(J,{children:Object(p.jsxs)(r.d,{children:[(null===e||void 0===e?void 0:e.user)?c.a.map((function(e,t){var n=e.url,i=e.component;return Object(p.jsx)(r.b,{exact:!0,path:Object(d.normalize)("/admin/".concat(n)),render:function(e){return i?Object(p.jsx)(i,Object(a.a)({},Object(a.a)(Object(a.a)({},e),{},{services:l,useService:F.a}))):Object(p.jsx)(T,{})}},t)})):Object(p.jsx)(r.a,{to:{pathname:"/admin/login"}}),Object(p.jsx)(r.b,{exact:!0,path:"/admin/",children:Object(p.jsx)(r.a,{to:{pathname:"/admin"}})}),Object(p.jsx)(r.b,{children:Object(p.jsx)(W,{})})]})})})]}):"Initializing services..."};function J(e){var t=e.children,n=Object(s.useContext)(g.a).menuToggle,a=G.location.pathname,i=(a=(a=a.split("/"))[a.length-1]).split("-").includes("page");return Object(p.jsxs)("div",{id:"".concat(i?"":"main-wrapper"),className:"".concat(i?"mh100vh":"show","  ").concat(n?"menu-toggle":""),style:{minHeight:"100vh"},children:[!i&&Object(p.jsx)(S,{}),Object(p.jsx)("div",{className:"".concat(i?"":"content-body"),children:Object(p.jsx)("div",{className:"".concat(i?"":"container-fluid"),children:t})})]})}}}]);
//# sourceMappingURL=7.5f390828.chunk.js.map