(this.webpackJsonpcointc=this.webpackJsonpcointc||[]).push([[2],{19:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r={LOGIN:"login",REGISTER:"register",CREATE:"create",RETRIEVE:"retrieve",UPDATE:"update",DROP:"drop",BULK_RETRIEVE:"bulk.retrieve",BULK_CREATE:"bulk.create",BULK_UPDATE:"bulk.update",BULK_DROP:"bulk.drop"},i=r,o={REQUEST:{CLEAR:"CLEAR_REQUEST",SESSION_LOGIN:"USER_LOGIN_REQUEST",SESSION_LOGOUT:"USER_LOGOUT_REQUEST",USER_REGISTER:"USER_REGISTER_REQUEST",USER_PROFILE:"USER_PROFILE_REQUEST",USER_DROP:"USER_DELETE_REQUEST"},SESSION:{LOGIN:"SESSION_LOGIN",LOGOUT:"SESSION_LOGOUT",REGISTER:"SESSION_REGISTER",RESET:"SESSION_REGISTER_RESET"},SERVICE:r,NOTICE:{ERROR:"ERROR_NOTICE",WARN:"WARN_NOTICE",INFO:"INFO_NOTICE",SUCCESS:"SUCCESS_NOTICE",CLEAR:"CLEAR_NOTICE"}};t.b=o},27:function(e,t,a){"use strict";var r=a(42),i=Object(r.a)(),o=a(37),n=a(15),l=a(43),c=a.n(l),s=a(44),d=a(8),u=a(10),b=a(19),h=b.b.SESSION,v={user:null};var O=b.b.REQUEST,p={type:null,with:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SESSION_LOGIN:case O.SESSION_LOGOUT:case O.USER_REGISTER:case O.USER_PROFILE:case O.USER_DROP:return{with:t.data||null,type:t.type};case O.CLEAR:return p;default:return e}};var y=b.b.NOTICE,j={message:null,type:null};var S=Object(d.b)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.REGISTER:case h.LOGIN:return Object(u.a)(Object(u.a)({},e),{},{user:t.data});case h.LOGOUT:return v;default:return e}},request:g,notice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.ERROR:return Object(u.a)(Object(u.a)({},e),{},{message:t.data,type:"danger"});case y.WARN:return Object(u.a)(Object(u.a)({},e),{},{message:t.data,type:"warning"});case y.INFO:return Object(u.a)(Object(u.a)({},e),{},{message:t.data,type:"info"});case y.SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{message:t.data,type:"success"});case y.CLEAR:return j;default:return e}}}),E=S,_=Object(s.createLogger)(),f={key:"root",storage:c.a,whitelist:["session","settings"]},x=Object(n.g)(f,E),R=Object(o.a)({reducer:x,middleware:function(e){return e({serializableCheck:{ignoredActions:[n.a,n.f,n.b,n.c,n.d,n.e]}}).concat(_)}});var m={history:i,store:{store:R,persistor:Object(n.h)(R)},headers:function(e){return{Authorization:e?"Bearer ".concat(e):""}}};t.a=m},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(6),i=a(0),o="ltr",n=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:o},{typography:"poppins",version:"light",layout:"vertical",primary:"color_5",headerBg:"color_1",navheaderBg:"color_5",sidebarBg:"color_5",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:o},{typography:"poppins",version:"light",layout:"vertical",primary:"color_7",headerBg:"color_1",navheaderBg:"color_7",sidebarBg:"color_1",sidebarStyle:"modern",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",direction:o},{typography:"poppins",version:"light",layout:"vertical",primary:"color_15",headerBg:"color_1",navheaderBg:"color_13",sidebarBg:"color_13",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:o},{typography:"poppins",version:"light",layout:"vertical",primary:"color_9",headerBg:"color_9",navheaderBg:"color_9",sidebarBg:"color_1",sidebarStyle:"compact",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:o},{typography:"poppins",version:"light",layout:"vertical",primary:"color_1",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:o},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_3",headerBg:"color_1",sidebarStyle:"mini",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:o},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_2",headerBg:"color_1",sidebarStyle:"mini",sidebarBg:"color_2",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_2",direction:o},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_14",headerBg:"color_14",sidebarStyle:"full",sidebarBg:"color_2",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_2",direction:o}],l=a(3),c=Object(i.createContext)();t.b=function(e){var t=Object(i.useState)({value:"full",label:"Full"}),a=Object(r.a)(t,2),o=a[0],s=a[1],d=Object(i.useState)({value:"fixed",label:"Fixed"}),u=Object(r.a)(d,2),b=u[0],h=u[1],v=Object(i.useState)({value:"fixed",label:"Fixed"}),O=Object(r.a)(v,2),p=O[0],g=O[1],y=Object(i.useState)({value:"vertical",label:"Vertical"}),j=Object(r.a)(y,2),S=j[0],E=j[1],_=Object(i.useState)({value:"ltr",label:"LTR"}),f=Object(r.a)(_,2),x=f[0],R=f[1],m=Object(i.useState)("color_1"),L=Object(r.a)(m,2),B=(L[0],L[1]),T=Object(i.useState)("color_1"),w=Object(r.a)(T,2),A=w[0],I=w[1],P=Object(i.useState)("color_1"),N=Object(r.a)(P,2),C=N[0],U=N[1],G=Object(i.useState)("color_1"),k=Object(r.a)(G,2),F=k[0],D=k[1],H=Object(i.useState)(!1),z=Object(r.a)(H,2),W=z[0],Q=z[1],V=Object(i.useState)(!1),K=Object(r.a)(V,2),M=K[0],q=K[1],J=Object(i.useState)({value:"dark",label:"Dark"}),Y=Object(r.a)(J,2),X=Y[0],Z=Y[1],$=Object(i.useState)({value:"wide-boxed",label:"Wide Boxed"}),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],re=document.querySelector("body"),ie=Object(i.useState)(0),oe=Object(r.a)(ie,2),ne=(oe[0],oe[1]),le=Object(i.useState)(0),ce=Object(r.a)(le,2),se=(ce[0],ce[1]),de=function(){ne(window.innerWidth),se(window.innerHeight),window.innerWidth>=768&&window.innerWidth<1024?re.setAttribute("data-sidebar-style","mini"):window.innerWidth<=768?re.setAttribute("data-sidebar-style","overlay"):re.setAttribute("data-sidebar-style","full")},ue=function(e){B(e),re.setAttribute("data-primary",e)},be=function(e){I(e),re.setAttribute("data-nav-headerbg",e)},he=function(e){U(e),re.setAttribute("data-headerbg",e)},ve=function(e){D(e),re.setAttribute("data-sibebarbg",e)},Oe=function(e){h(e),re.setAttribute("data-sidebar-position",e.value)},pe=function(e){R(e),re.setAttribute("direction",e.value);var t=document.querySelector("html");t.setAttribute("dir",e.value),t.className=e.value},ge=function(e){"horizontal"===e.value&&"overlay"===o.value?(E(e),re.setAttribute("data-layout",e.value),s({value:"full",label:"Full"}),re.setAttribute("data-sidebar-style","full")):(E(e),re.setAttribute("data-layout",e.value))},ye=function(e){"horizontal"===S.value&&"overlay"===e.value?alert("Sorry! Overlay is not possible in Horizontal layout."):(s(e),Q("icon-hover"===e.value?"_i-hover":""),re.setAttribute("data-sidebar-style",e.value))},je=function(e){g(e),re.setAttribute("data-header-position",e.value)},Se=function(e){re.setAttribute("data-theme-version",e.value),Z(e)},Ee=function(e){ae(e),re.setAttribute("data-container",e.value),"boxed"===e.value&&ye({value:"overlay",label:"Overlay"})},_e=function(e,t){var a={},r=n[e];re.setAttribute("data-typography",r.typography),a.value=r.version,Se(a),a.value=r.layout,ge(a),ue(r.primary),be(r.navheaderBg),he(r.headerBg),a.value=r.sidebarStyle,ye(a),ve(r.sidebarBg),a.value=r.sidebarPosition,Oe(a),a.value=r.headerPosition,je(a),a.value=r.containerLayout,Ee(a),a.value=t,pe(a)};return Object(i.useEffect)((function(){return re.setAttribute("data-typography","poppins"),re.setAttribute("data-theme-version","light"),re.setAttribute("data-layout","vertical"),re.setAttribute("data-primary","color_1"),re.setAttribute("data-nav-headerbg","color_1"),re.setAttribute("data-headerbg","color_1"),re.setAttribute("data-sidebar-style","overlay"),re.setAttribute("data-sibebarbg","color_1"),re.setAttribute("data-primary","color_1"),re.setAttribute("data-sidebar-position","fixed"),re.setAttribute("data-header-position","fixed"),re.setAttribute("data-container","wide"),re.setAttribute("direction","ltr"),de(),window.addEventListener("resize",de),window.addEventListener("load",(function(){var e=function(e){var t,a,r=window.location.search.substring(1).split("&");for(a=0;a<r.length;a++)if((t=r[a].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1])}("theme");void 0!==e&&_e(e,"ltr")}),!1),function(){return window.removeEventListener("resize",de)}})),Object(l.jsx)(c.Provider,{value:{body:re,sideBarOption:[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],layoutOption:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],backgroundOption:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],sidebarposition:b,headerPositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],containerPosition:[{value:"wide-boxed",label:"Wide Boxed"},{value:"boxed",label:"Boxed"},{value:"wide",label:"Wide"}],directionPosition:[{value:"ltr",label:"LTR"},{value:"rtl",label:"RTL"}],fontFamily:[{value:"roboto",label:"Roboto"},{value:"poppins",label:"Poppins"},{value:"opensans",label:"Open Sans"},{value:"HelveticaNeue",label:"HelveticaNeue"}],navigationHader:A,changePrimaryColor:ue,changeNavigationHader:be,changeSideBarStyle:ye,sideBarStyle:o,changeSideBarPostion:Oe,sidebarpositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],changeHeaderPostion:je,headerposition:p,changeSideBarLayout:ge,sidebarLayout:S,changeDirectionLayout:pe,changeContainerPosition:Ee,direction:x,colors:["color_1","color_2","color_3","color_4","color_5","color_6","color_7","color_8","color_9","color_10","color_11","color_12","color_13","color_14","color_15"],haderColor:C,chnageHaderColor:he,chnageSidebarColor:ve,sidebarColor:F,iconHover:W,menuToggle:M,openMenuToggle:function(){"overly"===o.value?q(!0):q(!1)},changeBackground:Se,background:X,containerPosition_:te,setDemoTheme:_e},children:e.children})}},35:function(e,t,a){"use strict";a(0);var r=a(21),i=a(3);t.a=function(){return Object(i.jsx)("div",{className:"authentication  flex flex-column",style:{height:window.screen.height-60},children:Object(i.jsx)("div",{className:"container h-100",children:Object(i.jsx)("div",{className:"row justify-content-center h-100 align-items-center ",children:Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"form-input-content text-center error-page",children:[Object(i.jsx)("h1",{className:"error-text font-weight-bold",children:"404"}),Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{className:"fa fa-exclamation-triangle text-warning"})," ","The page you were looking for is not found!"]}),Object(i.jsx)("p",{children:"You may have mistyped the address or the page may have moved."}),Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{className:"btn btn-primary",to:"/",children:"Back to Home"})})]})})})})})}},69:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),o=a(16),n=a.n(o),l=a(35),c=a(21),s=a(4),d=a(33),u=a(41),b=a(81),h=a(27),v=(a(51),a(32)),O=a(3),p=h.a.store,g=p.store,y=p.persistor,j=(h.a.history,Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,682))}))),S=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(6),a.e(1),a.e(5)]).then(a.bind(null,675))}));var E=function(){return Object(O.jsx)(c.a,{children:Object(O.jsx)(d.a,{store:g,children:Object(O.jsxs)(u.a,{loading:Object(O.jsx)(b.a,{color:"primary"}),persistor:y,children:[Object(O.jsx)(v.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{path:"/admin",children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(j,{})})}),Object(O.jsx)(s.b,{path:"/",children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(S,{})})}),Object(O.jsx)(s.b,{children:Object(O.jsx)(l.a,{})})]})]})})})},_=a(34),f=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(_.b,{children:Object(O.jsx)(E,{})})})},x=function(e){e&&e instanceof Function&&a.e(10).then(a.bind(null,673)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),r(e),i(e),o(e),n(e)}))},R=a(50);n.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(R.a,{children:Object(O.jsx)(f,{})})}),document.getElementById("root")),x()}},[[69,3,4]]]);
//# sourceMappingURL=main.481db42d.chunk.js.map