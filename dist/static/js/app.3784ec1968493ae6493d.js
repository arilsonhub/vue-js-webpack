webpackJsonp([2],{"/KtA":function(t,n){},0:function(t,n){},"0xIw":function(t,n){},EOQG:function(t,n,e){"use strict";var s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("nav",{staticClass:"sidebar sidebar-offcanvas",attrs:{id:"sidebar"}},[n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"EscritorioListagem"},"data-toggle":"collapse","aria-expanded":"false","aria-controls":"auth"}},[n("i",{staticClass:"ti-user menu-icon"}),this._v(" "),n("span",{staticClass:"menu-title"},[this._v("Cadastro de escritórios")])])],1)])])},staticRenderFns:[]};n.a=s},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={};e.d(s,"ActionListar",function(){return F}),e.d(s,"ActionCadastrar",function(){return q}),e.d(s,"ActionGetEscritorio",function(){return M}),e.d(s,"ActionSetEscritorio",function(){return U});var r={};e.d(r,"isAtivo",function(){return D});var o={};e.d(o,"ActionLogin",function(){return J}),e.d(o,"ActionCheckToken",function(){return K}),e.d(o,"ActionLoadSession",function(){return W}),e.d(o,"ActionSetUser",function(){return $}),e.d(o,"ActionSetToken",function(){return Q}),e.d(o,"ActionSignOut",function(){return Z});var a={};e.d(a,"hasToken",function(){return tt});var i=e("7+uW"),c=e("Dd8w"),u=e.n(c),l=e("NYxO"),d={methods:u()({},Object(l.b)("home",["ActionSignOut"]),{logout:function(){this.ActionSignOut(),this.$router.push({name:"Home"})}})},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"},[t._m(0),t._v(" "),e("div",{staticClass:"navbar-menu-wrapper d-flex align-items-center justify-content-end"},[e("ul",{staticClass:"navbar-nav navbar-nav-right"},[e("li",{staticClass:"nav-item nav-profile dropdown"},[t._m(1),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right navbar-dropdown",attrs:{"aria-labelledby":"profileDropdown"}},[e("a",{staticClass:"dropdown-item",on:{click:function(n){return n.stopPropagation(),t.logout()}}},[e("i",{staticClass:"ti-power-off text-primary"}),t._v(" Logout\n\n                        ")])])])]),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"},[n("img",{staticClass:"mr-2",attrs:{src:"/static/img/logo.png",alt:"logo"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",id:"profileDropdown"}},[n("img",{attrs:{src:"/static/img/faces/face28.jpg",alt:"profile"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",attrs:{type:"button","data-toggle":"offcanvas"}},[n("span",{staticClass:"ti-view-list"})])}]};var m,j,h={name:"App",components:{HeaderView:e("VU/8")(d,f,!1,function(t){e("/KtA")},null,null).exports,MenuView:e("xh0j").default},computed:{showPartials:function(){return"Home"!==this.$route.name},isLogin:function(){return"Home"===this.$route.name}}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container-scroller",attrs:{id:"app"}},[this.showPartials?n("div",{attrs:{id:"sharedLayout"}},[n("header-view"),this._v(" "),n("div",{staticClass:"container-fluid page-body-wrapper"},[n("menu-view"),this._v(" "),n("router-view")],1)],1):this._e(),this._v(" "),this.isLogin?n("router-view"):this._e()],1)},staticRenderFns:[]},v=e("VU/8")(h,p,!1,null,null,null).exports,g=e("bOdI"),k=e.n(g),E=(m={},k()(m,"HOME/SET_USER",function(t,n){t.user=n}),k()(m,"HOME/SET_TOKEN",function(t,n){t.token=n}),m),b=e("Xxa5"),w=e.n(b),O=e("exGp"),S=e.n(O),C=e("//Fk"),R=e.n(C),x=e("fZjL"),_=e.n(x),T=e("8+8L"),z=(j={},k()(j,"ESCRITORIO/SET_ESCRITORIO_LIST",function(t,n){t.escritorioList=n}),k()(j,"ESCRITORIO/SET_FORM_CADASTRO_ERROR_OBJ",function(t,n){t.formCadastroErrorObj=n}),j),A=e("PJh5"),y=e.n(A);function I(t){if(t)return y()(String(t)).format("MM/DD/YYYY hh:mm")}function L(t){if(t)return(t=t.replace(/[^\d]/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}i.a.filter("formatDate",I),i.a.filter("formatCpf",L);var H={formatDate:I,formatCpf:L},F=function(t){var n=t.dispatch;return G.escritorio.listar().then(function(t){n("ActionSetEscritorio",t.data)})},q=function(t,n){var e=t.commit;return G.escritorio.cadastrar(n).then(function(t){e("ESCRITORIO/SET_FORM_CADASTRO_ERROR_OBJ",{}),!t.data.success?t.data.errorList&&e("ESCRITORIO/SET_FORM_CADASTRO_ERROR_OBJ",t.data.errorList):_()(n).forEach(function(t,e){n[t]=""}),alert(t.data.message)})},M=function(t,n){t.commit;G.escritorio.getEscritorio({id:n.id}).then(function(t){_()(t.data).forEach(function(e,s){n[e]=t.data[e]}),n.cpf=H.formatCpf(n.cpf)})},U=function(t,n){(0,t.commit)("ESCRITORIO/SET_ESCRITORIO_LIST",n)},D=function(t){return!!t.ativo},N={state:{escritorioList:{},formCadastroErrorObj:{nome:"",cpf:"",fone:"",endereco:"",bairro:"",cidade:"",estado:""}},actions:s,getters:r,mutations:z,namespaced:!0},P=[{path:"/escritorio/listagem",name:"EscritorioListagem",component:function(){return e.e(0).then(e.bind(null,"22Bb"))}},{path:"/escritorio/incluir",name:"IncluirEscritorio",component:function(){return e.e(0).then(e.bind(null,"Mwku"))}},{path:"/escritorio/:id",name:"EditarEscritorio",component:function(){return e.e(0).then(e.bind(null,"Mwku"))}}],V={home:{login:{method:"post",url:"login"},loadSession:{method:"get",url:"load-session"}},escritorio:{cadastrar:{method:"post",url:"cadastrar-escritorio"},listar:{method:"get",url:"listar-escritorio"},getEscritorio:{method:"get",url:"carregar-escritorio{/id}"}}};i.a.use(T.a);var B=i.a.http;B.options.root="http://localhost:5000/",B.interceptors.push(function(t){return function(t){401==t.status&&(rt.dispatch("home/ActionSignOut"),window._Vue.$router.push({name:"Home"}))}}),_()(V).map(function(t){V[t]=i.a.resource("",{},V[t])});var G=V,X=function(t){return function(t){B.headers.common["x-access-token"]=""+t}(t)},Y=this,J=function(t,n){var e=t.dispatch;return G.home.login(n).then(function(t){e("ActionSetUser",t.data.user),e("ActionSetToken",t.data.token)})},K=function(t){var n=t.dispatch,e=t.state;if(e.token)return R.a.resolve(e.token);var s=localStorage.getItem("token");return s?(n("ActionSetToken",s),n("ActionLoadSession")):R.a.reject(new Error("Token inválido"))},W=function(t){var n,e=t.dispatch;return new R.a((n=S()(w.a.mark(function t(n,s){var r,o;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.home.loadSession();case 3:r=t.sent,o=r.data.user,e("ActionSetUser",o),n(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e("ActionSignOut"),s(t.t0);case 13:case"end":return t.stop()}},t,Y,[[0,9]])})),function(t,e){return n.apply(this,arguments)}))},$=function(t,n){(0,t.commit)("HOME/SET_USER",n)},Q=function(t,n){var e,s=t.commit;e=n,localStorage.setItem("token",e),X(n),s("HOME/SET_TOKEN",n)},Z=function(t){var n=t.dispatch;X(""),localStorage.removeItem("token"),n("ActionSetUser",{}),n("ActionSetToken","")},tt=function(t){return!!t.token},nt=[{path:"/",name:"Home",component:function(){return e.e(0).then(e.bind(null,"n/G1"))}}],et={home:{state:{user:{},token:""},actions:o,getters:a,mutations:E,namespaced:!0},escritorio:N};i.a.use(l.a);var st,rt=new l.a.Store({modules:et}),ot=e("Gu7T"),at=e.n(ot),it=[{path:"/dashboard",name:"DashBoard",component:function(){return e.e(0).then(e.bind(null,"xfII"))}}],ct=[].concat(at()(nt),at()(it),at()(P)),ut=e("/ocq"),lt=this,dt=(st=S()(w.a.mark(function t(n,e,s){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(document.title=n.name+" - Judice Serviços","Home"===n.name||rt.getters["home/hasToken"]){t.next=13;break}return t.prev=2,t.next=5,rt.dispatch("home/ActionCheckToken");case 5:s({path:n.path}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),s({name:"Home"});case 11:t.next=14;break;case 13:"Home"===n.name&&rt.getters["home/hasToken"]?s({name:"DashBoard"}):s();case 14:case"end":return t.stop()}},t,lt,[[2,8]])})),function(t,n,e){return st.apply(this,arguments)});i.a.use(ut.a);var ft=new ut.a({routes:ct});ft.beforeEach(dt);var mt=ft;i.a.config.productionTip=!1,window._Vue=new i.a({el:"#app",router:mt,store:rt,components:{App:v},template:"<App/>"})},Yq7v:function(t,n){},uslO:function(t,n,e){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return e(o(t))}function o(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="uslO"},xh0j:function(t,n,e){"use strict";var s=e("Yq7v"),r=e.n(s),o=e("EOQG");var a=function(t){e("0xIw")},i=e("VU/8")(r.a,o.a,!1,a,null,null);n.default=i.exports}},["NHnr"]);
//# sourceMappingURL=app.3784ec1968493ae6493d.js.map