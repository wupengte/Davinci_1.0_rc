(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"01c432f6c6142f9b6a59":function(a,e,t){"use strict";t.d(e,"h",(function(){return n})),t.d(e,"g",(function(){return S})),t.d(e,"c",(function(){return d})),t.d(e,"a",(function(){return r})),t.d(e,"f",(function(){return E})),t.d(e,"b",(function(){return A})),t.d(e,"d",(function(){return _})),t.d(e,"e",(function(){return c})),t.d(e,"i",(function(){return L}));t("c8d99034bfbc976a4839");var i=t("a28fc3c963a1d4d1a2e5"),D=function(a){return a.viz},n=function(){return Object(i.a)(D,(function(a){return a.portals}))},S=function(){return Object(i.a)(D,(function(a){return a.displays}))},d=function(){return Object(i.a)(D,(function(a){return a.portals.find((function(e){return e.id==a.currentPortalId}))||{}}))},r=function(){return Object(i.a)(D,(function(a){return a.portalDashboards[a.currentPortalId]||[]}))},E=function(){return Object(i.a)(D,(function(a){return a.displaySlides}))},A=function(){return Object(i.a)(D,(function(a){return a.currentDisplay}))},_=function(){return Object(i.a)(D,(function(a){return a.currentSlide}))},c=function(){return Object(i.a)(D,(function(a){var e=a.currentDisplay,t=a.displaySlides;return e?t[e.id]:[]}))},L=function(){return Object(i.a)(D,(function(a){return a.loading}))}},"3ad08cd2b7ed398011dd":function(a,e,t){"use strict";t.r(e);t("102ed86af417c34f8d8e"),t("c964841b13246e7734c2"),t("f66e6d08e6925d47af65");var i=t("8af190b70a6bc55c6f1b"),D=t.n(i),n=t("0d7f0986bcd2f33d8a2a"),S=t.n(n),d=t("d7dd51e1bf6bfc2c9c3d"),r=t("01c432f6c6142f9b6a59"),E=t("a428e0a8b0a825dd9cf6"),A=t("76c6faef7072578881d1"),_=t("e95a63b25fb92ed15721"),c=t("b597d41f80c1c265d53d"),L=(t("09e0c53ae5bee45c307f"),t("19c1facf9a9022ed3679"),t("8b2e188378dee14fe0b5"),t("8eb1c4993ea717f3359c")),o=t("41e947a8071336461cb8"),l=Object(o.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,"79bd542ad33c880d5c70"))}),{fallback:D.a.createElement(L.a,{active:!0,paragraph:{rows:15}})}),u=D.a.createElement(_.Route,{exact:!0,path:"/project/:projectId/display/:displayId/preview/slide/:slideId",component:c.a}),I=D.a.createElement(_.Route,{exact:!0,path:"/project/:projectId/display/:displayId/slide/:slideId",component:l});e.default=function(a){var e=Object(d.useDispatch)(),t=Object(d.useSelector)(Object(r.b)()),n=Object(d.useSelector)(Object(r.d)()),_=a.history,c=+a.match.params.displayId;_.location.pathname;return Object(i.useEffect)((function(){e(Object(E.v)())}),[]),Object(i.useEffect)((function(){e(A.a.loadDisplaySlides(c))}),[c]),t&&n?D.a.createElement(D.a.Fragment,null,D.a.createElement(S.a,{title:"".concat(t.name," - Display")}),u,I):null}},"76c6faef7072578881d1":function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));var i=t("9d99307c71000b5abc3c"),D=t("fdb445ec61a8d515506e"),n={loadPortals:function(a){return{type:i.a.LOAD_PORTALS,payload:{projectId:a}}},portalsLoaded:function(a){return{type:i.a.LOAD_PORTALS_SUCCESS,payload:{result:a}}},loadPortalsFail:function(){return{type:i.a.LOAD_PORTALS_FAILURE,payload:{}}},addPortal:function(a,e){return{type:i.a.ADD_PORTAL,payload:{portal:a,resolve:e}}},portalAdded:function(a){return{type:i.a.ADD_PORTAL_SUCCESS,payload:{result:a}}},addPortalFail:function(){return{type:i.a.ADD_PORTAL_FAILURE,payload:{}}},editPortal:function(a,e){return{type:i.a.EDIT_PORTAL,payload:{values:a,resolve:e}}},portalEdited:function(a){return{type:i.a.EDIT_PORTAL_SUCCESS,payload:{result:a}}},editPortalFail:function(){return{type:i.a.EDIT_PORTAL_FAILURE,payload:{}}},deletePortal:function(a){return{type:i.a.DELETE_PORTAL,payload:{id:a}}},portalDeleted:function(a){return{type:i.a.DELETE_PORTAL_SUCCESS,payload:{id:a}}},deletePortalFail:function(){return{type:i.a.DELETE_PORTAL_FAILURE,payload:{}}},loadPortalDashboards:function(a,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return{type:i.a.LOAD_PORTAL_DASHBOARDS,payload:{portalId:a,resolve:e,convertTree:t}}},portalDashboardsLoaded:function(a,e){return{type:i.a.LOAD_PORTAL_DASHBOARDS_SUCCESS,payload:{portalId:a,dashboards:e}}},loadPortalDashboardsFail:function(a){return{type:i.a.LOAD_PORTAL_DASHBOARDS_FAILURE,payload:{portalId:a}}},loadDisplays:function(a){return{type:i.a.LOAD_DISPLAYS,payload:{projectId:a}}},displaysLoaded:function(a){return{type:i.a.LOAD_DISPLAYS_SUCCESS,payload:{displays:a}}},loadDisplaysFail:function(a){return{type:i.a.LOAD_DISPLAYS_FAILURE,payload:{error:a}}},updateCurrentDisplay:function(a){return{type:i.a.UPDATE_CURRENT_DISPLAY,payload:{display:a}}},loadDisplaySlides:function(a){return{type:i.a.LOAD_DISPLAY_SLIDES,payload:{displayId:a}}},displaySlidesLoaded:function(a,e){return{type:i.a.LOAD_DISPLAY_SLIDES_SUCCESS,payload:{display:a,slides:e}}},loadDisplaySlidesFail:function(a){return{type:i.a.LOAD_DISPLAY_SLIDES_FAILURE,payload:{displayId:a}}},addDisplay:function(a,e){return{type:i.a.ADD_DISPLAY,payload:{display:a,resolve:e}}},displayAdded:function(a){return{type:i.a.ADD_DISPLAY_SUCCESS,payload:{result:a}}},addDisplayFail:function(){return{type:i.a.ADD_DISPLAY_FAILURE,payload:{}}},editDisplay:function(a,e){return{type:i.a.EDIT_DISPLAY,payload:{display:a,resolve:e}}},displayEdited:function(a){return{type:i.a.EDIT_DISPLAY_SUCCESS,payload:{result:a}}},editDisplayFail:function(a){return{type:i.a.EDIT_DISPLAY_FAILURE,payload:{error:a}}},deleteDisplay:function(a){return{type:i.a.DELETE_DISPLAY,payload:{id:a}}},displayDeleted:function(a){return{type:i.a.DELETE_DISPLAY_SUCCESS,payload:{id:a}}},deleteDisplayFail:function(){return{type:i.a.DELETE_DISPLAY_FAILURE,payload:{}}},copyDisplay:function(a,e){return{type:i.a.COPY_DISPLAY,payload:{display:a,resolve:e}}},displayCopied:function(a){return{type:i.a.COPY_DISPLAY_SUCCESS,payload:{display:a}}},copyDisplayFail:function(){return{type:i.a.COPY_DISPLAY_FAILURE,payload:{}}},addDashboard:function(a,e){return{type:i.a.ADD_DASHBOARD,payload:{dashboard:a,resolve:e}}},dashboardAdded:function(a){return{type:i.a.ADD_DASHBOARD_SUCCESS,payload:{result:a}}},addDashboardFail:function(){return{type:i.a.ADD_DASHBOARD_FAILURE}},editDashboard:function(a,e,t){return{type:i.a.EDIT_DASHBOARD,payload:{formType:a,dashboard:e,resolve:t}}},dashboardEdited:function(a,e){return{type:i.a.EDIT_DASHBOARD_SUCCESS,payload:{result:a,formType:e}}},editDashboardFail:function(){return{type:i.a.EDIT_DASHBOARD_FAILURE}},editCurrentDashboard:function(a,e,t){return{type:i.a.EDIT_CURRENT_DASHBOARD,payload:{dashboard:a,type:e,resolve:t}}},currentDashboardEdited:function(a,e){return{type:i.a.EDIT_CURRENT_DASHBOARD_SUCCESS,payload:{result:a,type:e}}},editCurrentDashboardFail:function(){return{type:i.a.EDIT_CURRENT_DASHBOARD_FAILURE}},deleteDashboard:function(a,e,t){return{type:i.a.DELETE_DASHBOARD,payload:{resolve:t,id:a,portalId:e}}},dashboardDeleted:function(a,e){return{type:i.a.DELETE_DASHBOARD_SUCCESS,payload:{id:a,portalId:e}}},deleteDashboardFail:function(){return{type:i.a.DELETE_DASHBOARD_FAILURE}},addSlide:function(){return{type:i.a.ADD_SLIDE,payload:{}}},slideAdded:function(a,e,t){return{type:i.a.ADD_SLIDE_SUCCESS,payload:{slide:a,insertIdx:e,afterSlides:t}}},addSlideFail:function(){return{type:i.a.ADD_SLIDE_FAILURE,payload:{}}},editSlides:function(a){return{type:i.a.EDIT_SLIDES,payload:{slides:a}}},slidesEdited:function(a,e){return{type:i.a.EDIT_SLIDES_SUCCESS,payload:{displayId:a,slides:e}}},editSlidesFail:function(){return{type:i.a.EDIT_SLIDES_FAILURE,payload:{}}},editCurrentSlideParams:function(a){return{type:i.a.EDIT_CURRENT_SLIDE_PARAMS,payload:{changedParams:a}}},deleteSlides:function(a,e){return{type:i.a.DELETE_SLIDES,payload:{displayId:a,slideIds:e}}},slidesDeleted:function(a,e){return{type:i.a.DELETE_SLIDES_SUCCESS,payload:{displayId:a,slideIds:e}}},deleteSlidesFail:function(){return{type:i.a.DELETE_SLIDES_FAILURE,payload:{}}}};Object(D.b)(n);e.b=n},"9d99307c71000b5abc3c":function(a,e,t){"use strict";t.d(e,"a",(function(){return S}));var i,D=t("fdb445ec61a8d515506e"),n=t("6b414ce5e780d1c58f66");t.d(e,"b",(function(){return n.b})),function(a){a.LOAD_PORTALS="davinci/Viz/LOAD_PORTALS",a.LOAD_PORTALS_SUCCESS="davinci/Viz/LOAD_PORTALS_SUCCESS",a.LOAD_PORTALS_FAILURE="davinci/Viz/LOAD_PORTALS_FAILURE",a.ADD_PORTAL="davinci/Viz/ADD_PORTAL",a.ADD_PORTAL_SUCCESS="davinci/Viz/ADD_PORTAL_SUCCESS",a.ADD_PORTAL_FAILURE="davinci/Viz/ADD_PORTAL_FAILURE",a.DELETE_PORTAL="davinci/Viz/DELETE_PORTAL",a.DELETE_PORTAL_SUCCESS="davinci/Viz/DELETE_PORTAL_SUCCESS",a.DELETE_PORTAL_FAILURE="davinci/Viz/DELETE_PORTAL_FAILURE",a.EDIT_PORTAL="davinci/Viz/EDIT_PORTAL",a.EDIT_PORTAL_SUCCESS="davinci/Viz/EDIT_PORTAL_SUCCESS",a.EDIT_PORTAL_FAILURE="davinci/Viz/EDIT_PORTAL_FAILURE",a.LOAD_PORTAL_DASHBOARDS="davinci/Viz/LOAD_PORTAL_DASHBOARDS",a.LOAD_PORTAL_DASHBOARDS_SUCCESS="davinci/Viz/LOAD_PORTAL_DASHBOARDS_SUCCESS",a.LOAD_PORTAL_DASHBOARDS_FAILURE="davinci/Viz/LOAD_PORTAL_DASHBOARDS_FAILURE",a.LOAD_DISPLAYS="davinci/Viz/LOAD_DISPLAYS",a.LOAD_DISPLAYS_SUCCESS="davinci/Viz/LOAD_DISPLAYS_SUCCESS",a.LOAD_DISPLAYS_FAILURE="davinci/Viz/LOAD_DISPLAYS_FAILURE",a.UPDATE_CURRENT_DISPLAY="davinci/Viz/UPDATE_CURRENT_DISPLAY",a.LOAD_DISPLAY_SLIDES="davinci/Viz/LOAD_DISPLAY_SLIDES",a.LOAD_DISPLAY_SLIDES_SUCCESS="davinci/Viz/LOAD_DISPLAY_SLIDES_SUCCESS",a.LOAD_DISPLAY_SLIDES_FAILURE="davinci/Viz/LOAD_DISPLAY_SLIDES_FAILURE",a.ADD_DISPLAY="davinci/Viz/ADD_DISPLAY",a.ADD_DISPLAY_SUCCESS="davinci/Viz/ADD_DISPLAY_SUCCESS",a.ADD_DISPLAY_FAILURE="davinci/Viz/ADD_DISPLAY_FAILURE",a.EDIT_DISPLAY="davinci/Viz/EDIT_DISPLAY",a.EDIT_DISPLAY_SUCCESS="davinci/Viz/EDIT_DISPLAY_SUCCESS",a.EDIT_DISPLAY_FAILURE="davinci/Viz/EDIT_DISPLAY_FAILURE",a.DELETE_DISPLAY="davinci/Viz/DELETE_DISPLAY",a.DELETE_DISPLAY_SUCCESS="davinci/Viz/DELETE_DISPLAY_SUCCESS",a.DELETE_DISPLAY_FAILURE="davinci/Viz/DELETE_DISPLAY_FAILURE",a.COPY_DISPLAY="davinci/Viz/COPY_DISPLAY",a.COPY_DISPLAY_SUCCESS="davinci/Viz/COPY_DISPLAY_SUCCESS",a.COPY_DISPLAY_FAILURE="davinci/Viz/COPY_DISPLAY_FAILURE",a.ADD_DASHBOARD="davinci/Viz/ADD_DASHBOARD",a.ADD_DASHBOARD_SUCCESS="davinci/Viz/ADD_DASHBOARD_SUCCESS",a.ADD_DASHBOARD_FAILURE="davinci/Viz/ADD_DASHBOARD_FAILURE",a.EDIT_DASHBOARD="davinci/Viz/EDIT_DASHBOARD",a.EDIT_DASHBOARD_SUCCESS="davinci/Viz/EDIT_DASHBOARD_SUCCESS",a.EDIT_DASHBOARD_FAILURE="davinci/Viz/EDIT_DASHBOARD_FAILURE",a.EDIT_CURRENT_DASHBOARD="davinci/Viz/EDIT_CURRENT_DASHBOARD",a.EDIT_CURRENT_DASHBOARD_SUCCESS="davinci/Viz/EDIT_CURRENT_DASHBOARD_SUCCESS",a.EDIT_CURRENT_DASHBOARD_FAILURE="davinci/Viz/EDIT_CURRENT_DASHBOARD_FAILURE",a.DELETE_DASHBOARD="davinci/Viz/DELETE_DASHBOARD",a.DELETE_DASHBOARD_SUCCESS="davinci/Viz/DELETE_DASHBOARD_SUCCESS",a.DELETE_DASHBOARD_FAILURE="davinci/Viz/DELETE_DASHBOARD_FAILURE",a.ADD_SLIDE="davinci/Viz/ADD_SLIDE",a.ADD_SLIDE_SUCCESS="davinci/Viz/ADD_SLIDE_SUCCESS",a.ADD_SLIDE_FAILURE="davinci/Viz/ADD_SLIDE_FAILURE",a.EDIT_SLIDES="davinci/Viz/EDIT_SLIDES",a.EDIT_SLIDES_SUCCESS="davinci/Viz/EDIT_SLIDES_SUCCESS",a.EDIT_SLIDES_FAILURE="davinci/Viz/EDIT_SLIDES_FAILURE",a.EDIT_CURRENT_SLIDE_PARAMS="davinci/Viz/EDIT_CURRENT_SLIDE_PARAMS",a.DELETE_SLIDES="davinci/Viz/DELETE_SLIDES",a.DELETE_SLIDES_SUCCESS="davinci/Viz/DELETE_SLIDES_SUCCESS",a.DELETE_SLIDES_FAILURE="davinci/Viz/DELETE_SLIDES_FAILURE"}(i||(i={}));var S=Object(D.a)(i)},b597d41f80c1c265d53d:function(a,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return E}));t("09e0c53ae5bee45c307f"),t("19c1facf9a9022ed3679"),t("8b2e188378dee14fe0b5");var i=t("8eb1c4993ea717f3359c"),D=t("8af190b70a6bc55c6f1b"),n=t.n(D),S=t("41e947a8071336461cb8"),d=Object(S.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(24)]).then(t.bind(null,"8357b8bbe55fb69e230c"))}),{fallback:n.a.createElement(i.a,{active:!0,paragraph:{rows:15}})}),r=Object(S.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,"031962f5f5bdcb68a8c5"))}),{fallback:n.a.createElement(i.a,{active:!0,paragraph:{rows:15}})}),E=Object(S.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,"9b9ff4cccf772232d31b"))}),{fallback:n.a.createElement(i.a,{active:!0,paragraph:{rows:15}})})}}]);