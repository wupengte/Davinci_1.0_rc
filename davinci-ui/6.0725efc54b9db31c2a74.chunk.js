(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{a5fbde6320c120d72371:function(e,a,t){"use strict";t("156e15eb0ffe21ef81ad"),t("aee243f252d382c9e099"),t("e1e7df29006c8ae8a3c1"),t("71af1170aba5de7dbb34"),t("be92b4822cb7f54ccc11"),t("7c38c3c508ba38fc2a83"),t("cd527224333f8fb65ecd"),t("703bea8fdce723c8f746"),t("9bf0cff4074afe1a9974"),t("4f517bc3ec49a4c4049b");var r=t("7edf83707012a871cdfb"),n=t("d967fb6bcc572a70d186"),o=t("155c9b7a1c179b4b10fd");function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){u(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var s={organizations:[],currentOrganization:null,currentOrganizationLoading:!1,currentOrganizationProjects:[],currentOrganizationProjectsDetail:null,currentOrganizationMembers:null,currentOrganizationRole:null,inviteMemberLists:null,roleModalLoading:!1,projectDetail:null,projectAdmins:null,projectRoles:null,inviteMemberfetching:!1};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,(function(e){switch(a.type){case n.a.DELETE_ORGANIZATION_MEMBER_SUCCESS:e.currentOrganizationMembers&&(e.currentOrganizationMembers=e.currentOrganizationMembers.filter((function(e){return e.id!==a.payload.id})));break;case n.a.LOAD_ORGANIZATIONS_PROJECTS_SUCCESS:e.currentOrganizationProjects=a.payload.projects.list,e.currentOrganizationProjectsDetail=a.payload.projects;break;case n.a.LOAD_ORGANIZATIONS_MEMBERS_SUCCESS:e.currentOrganizationMembers=a.payload.members.map((function(e){return i(i({},e),{},{roles:"loading"})}));break;case n.a.GET_ROLELISTS_BY_MEMBERID_ERROR:var t=a.payload.memberId;e.currentOrganizationMembers&&(e.currentOrganizationMembers=e.currentOrganizationMembers.map((function(e){return e.user.id===t?i(i({},e),{},{roles:void 0}):e})));break;case n.a.GET_ROLELISTS_BY_MEMBERID_SUCCESS:var r=a.payload,c=r.result,u=r.memberId;e.currentOrganizationMembers&&(e.currentOrganizationMembers=e.currentOrganizationMembers.map((function(e){return e.user.id===u?i(i({},e),{},{roles:c}):e})));break;case n.a.LOAD_ORGANIZATIONS_ROLE_SUCCESS:e.currentOrganizationRole=a.payload.role;break;case n.a.LOAD_ORGANIZATIONS_SUCCESS:e.organizations=a.payload.organizations;break;case o.a.ADD_PROJECT_SUCCESS:e.currentOrganizationProjects?e.currentOrganizationProjects.unshift(a.payload.result):e.currentOrganizationProjects=[a.payload.result];break;case o.a.DELETE_PROJECT_SUCCESS:e.currentOrganizationProjects&&(e.currentOrganizationProjects=e.currentOrganizationProjects.filter((function(e){return e.id!==a.payload.id})));break;case n.a.LOAD_ORGANIZATIONS_FAILURE:break;case n.a.ADD_ORGANIZATION_SUCCESS:e.organizations?e.organizations.unshift(a.payload.result):e.organizations=[a.payload.result];break;case n.a.ADD_ORGANIZATION_FAILURE:break;case n.a.EDIT_ORGANIZATION_SUCCESS:e.organizations.splice(e.organizations.findIndex((function(e){return e.id===a.payload.result.id})),1,a.payload.result);break;case n.a.DELETE_ORGANIZATION_SUCCESS:e.organizations=e.organizations.filter((function(e){return e.id!==a.payload.id}));break;case n.a.LOAD_ORGANIZATION_DETAIL:e.currentOrganizationLoading=!0;break;case n.a.LOAD_ORGANIZATION_DETAIL_SUCCESS:e.currentOrganizationLoading=!1,e.currentOrganization=a.payload.organization;break;case n.a.LOAD_ORGANIZATION_DETAIL_FAILURE:break;case n.a.ADD_ROLE:e.roleModalLoading=!0;break;case n.a.ADD_ROLE_SUCCESS:case n.a.ADD_ROLE_FAILURE:e.roleModalLoading=!1;break;case n.a.SEARCH_MEMBER:e.inviteMemberfetching=!0;break;case n.a.SEARCH_MEMBER_SUCCESS:e.inviteMemberLists=a.payload.result,e.inviteMemberfetching=!1;break;case n.a.SEARCH_MEMBER_FAILURE:e.inviteMemberfetching=!0;break;case n.a.SET_CURRENT_ORIGANIZATION_PROJECT:e.projectDetail=a.payload.option;break;case n.a.LOAD_PROJECT_ADMINS_SUCCESS:e.projectAdmins=a.payload.result;break;case n.a.LOAD_PROJECT_ROLES_SUCCESS:e.projectRoles=a.payload.result}}))}},a83ac4aa00753443c824:function(e,a,t){"use strict";t.d(a,"a",(function(){return $}));t("156e15eb0ffe21ef81ad"),t("930a5d70128dea147332"),t("f701f5ba8dd9267f7597"),t("102ed86af417c34f8d8e"),t("49365767bfb99f07e4e4");var r=t("79073d7186463aed84f0"),n=(t("2c09af3fb5c4ba3698b3"),t("d782b72bc5b680c7122c")),o=t("d967fb6bcc572a70d186"),c=t("f68fe5dff3cbb1ad6240"),i=t("95066b9b78a83cfbe91a"),u=t("9adba983ceae6f089ff0"),s=t("55c69f0ea731e712b8f3"),l=regeneratorRuntime.mark(x),p=regeneratorRuntime.mark(k),O=regeneratorRuntime.mark(z),d=regeneratorRuntime.mark(C),E=regeneratorRuntime.mark(G),b=regeneratorRuntime.mark(h),R=regeneratorRuntime.mark(Z),_=regeneratorRuntime.mark(w),I=regeneratorRuntime.mark(B),A=regeneratorRuntime.mark(F),f=regeneratorRuntime.mark(U),y=regeneratorRuntime.mark(P),m=regeneratorRuntime.mark(J),g=regeneratorRuntime.mark(V),S=regeneratorRuntime.mark(H),L=regeneratorRuntime.mark(Y),T=regeneratorRuntime.mark(q),M=regeneratorRuntime.mark(K),j=regeneratorRuntime.mark(Q),v=regeneratorRuntime.mark(W),N=regeneratorRuntime.mark(X),D=regeneratorRuntime.mark($);function x(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n.call)(i.a,u.a.organizations);case 3:return e=t.sent,a=e.payload,t.next=7,Object(n.put)(c.a.organizationsLoaded(a));case 7:t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(n.put)(c.a.loadOrganizationsFail());case 13:Object(s.a)(t.t0);case 14:case"end":return t.stop()}}),l,null,[[0,9]])}function k(e){var a,t,r,l,O;return regeneratorRuntime.wrap((function(p){for(;;)switch(p.prev=p.next){case 0:if(e.type===o.a.ADD_ORGANIZATION){p.next=2;break}return p.abrupt("return");case 2:return a=e.payload,t=a.organization,r=a.resolve,p.prev=3,p.next=6,Object(n.call)(i.a,{method:"post",url:u.a.organizations,data:t});case 6:return l=p.sent,O=l.payload,p.next=10,Object(n.put)(c.a.organizationAdded(O));case 10:r(),p.next=18;break;case 13:return p.prev=13,p.t0=p.catch(3),p.next=17,Object(n.put)(c.a.addOrganizationFail());case 17:Object(s.a)(p.t0);case 18:case"end":return p.stop()}}),p,null,[[3,13]])}function z(e){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.type===o.a.EDIT_ORGANIZATION){t.next=2;break}return t.abrupt("return");case 2:return a=e.payload.organization,t.prev=3,t.next=6,Object(n.call)(i.a,{method:"put",url:"".concat(u.a.organizations,"/").concat(a.id),data:a});case 6:return t.next=8,Object(n.put)(c.a.organizationEdited(a));case 8:r.a.success("success"),t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(3),t.next=15,Object(n.put)(c.a.editOrganizationFail());case 15:Object(s.a)(t.t0);case 16:case"end":return t.stop()}}),O,null,[[3,11]])}function C(e){var a,t,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.type===o.a.DELETE_ORGANIZATION){l.next=2;break}return l.abrupt("return");case 2:return a=e.payload,t=a.id,r=a.resolve,l.prev=3,l.next=6,Object(n.call)(i.a,{method:"delete",url:"".concat(u.a.organizations,"/").concat(t)});case 6:return l.next=8,Object(n.put)(c.a.organizationDeleted(t));case 8:r(),l.next=16;break;case 11:return l.prev=11,l.t0=l.catch(3),l.next=15,Object(n.put)(c.a.deleteOrganizationFail());case 15:Object(s.a)(l.t0);case 16:case"end":return l.stop()}}),d,null,[[3,11]])}function G(e){var a,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.type===o.a.LOAD_ORGANIZATION_DETAIL){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,Object(n.call)(i.a,"".concat(u.a.organizations,"/").concat(e.payload.id));case 5:return a=r.sent,t=a.payload,r.next=9,Object(n.put)(c.a.organizationDetailLoaded(t));case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),Object(s.a)(r.t0);case 14:case"end":return r.stop()}}),E,null,[[2,11]])}function h(e){var a,t,r,l,p,O,d,E;return regeneratorRuntime.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(e.type===o.a.LOAD_ORGANIZATIONS_PROJECTS){b.next=2;break}return b.abrupt("return");case 2:return a=e.payload.param,t=a.id,r=a.keyword,l=a.pageNum,p=a.pageSize,O=r?"".concat(u.a.organizations,"/").concat(t,"/projects?keyword=").concat(r,"&pageNum=1&pageSize=").concat(p||10):"".concat(u.a.organizations,"/").concat(t,"/projects/?pageNum=").concat(l||1,"&pageSize=").concat(p||10),b.prev=4,b.next=7,Object(n.call)(i.a,{method:"get",url:O});case 7:return d=b.sent,E=d.payload,b.next=11,Object(n.put)(c.a.organizationsProjectsLoaded(E));case 11:b.next=18;break;case 13:return b.prev=13,b.t0=b.catch(4),b.next=17,Object(n.put)(c.a.loadOrganizationsProjectsFail());case 17:Object(s.a)(b.t0);case 18:case"end":return b.stop()}}),b,null,[[4,13]])}function Z(e){var a,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.type===o.a.LOAD_ORGANIZATIONS_MEMBERS){r.next=2;break}return r.abrupt("return");case 2:return a=e.payload.id,r.prev=3,r.next=6,Object(n.call)(i.a,"".concat(u.a.organizations,"/").concat(a,"/members"));case 6:return t=r.sent,r.next=9,Object(n.put)(c.a.organizationsMembersLoaded(t.payload));case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(3),r.next=15,Object(n.put)(c.a.loadOrganizationsMembersFail());case 15:Object(s.a)(r.t0);case 16:case"end":return r.stop()}}),R,null,[[3,11]])}function w(e){var a,t,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.type===o.a.LOAD_ORGANIZATIONS_ROLE){l.next=2;break}return l.abrupt("return");case 2:return a=e.payload.id,l.prev=3,l.next=6,Object(n.call)(i.a,"".concat(u.a.organizations,"/").concat(a,"/roles"));case 6:return t=l.sent,r=t.payload,l.next=10,Object(n.put)(c.a.organizationsRoleLoaded(r));case 10:l.next=17;break;case 12:return l.prev=12,l.t0=l.catch(3),l.next=16,Object(n.put)(c.a.loadOrganizationsRoleFail());case 16:Object(s.a)(l.t0);case 17:case"end":return l.stop()}}),_,null,[[3,12]])}function B(e){var a,t,r,l,p,O,d,E;return regeneratorRuntime.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(e.type===o.a.ADD_ROLE){b.next=2;break}return b.abrupt("return");case 2:return a=e.payload,t=a.name,r=a.description,l=a.id,p=a.resolve,b.prev=3,O={name:t,description:r,orgId:l},b.next=7,Object(n.call)(i.a,{method:"post",url:u.a.roles,data:O});case 7:return d=b.sent,E=d.payload,b.next=11,Object(n.put)(c.a.roleAdded(E));case 11:p(),b.next=19;break;case 14:return b.prev=14,b.t0=b.catch(3),b.next=18,Object(n.put)(c.a.addRoleFail());case 18:Object(s.a)(b.t0);case 19:case"end":return b.stop()}}),I,null,[[3,14]])}function F(e){var a,t,r,l,p,O;return regeneratorRuntime.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:if(e.type===o.a.GET_ROLELISTS_BY_MEMBERID){d.next=2;break}return d.abrupt("return");case 2:return a=e.payload,t=a.memberId,r=a.orgId,l=a.resolve,d.prev=3,d.next=6,Object(n.call)(i.a,{method:"get",url:"".concat(u.a.organizations,"/").concat(r,"/member/").concat(t,"/roles")});case 6:return p=d.sent,O=p.payload,d.next=10,Object(n.put)(c.a.getRoleListByMemberIdSuccess(O,t));case 10:l&&l(O),d.next=18;break;case 13:return d.prev=13,d.t0=d.catch(3),d.next=17,Object(n.put)(c.a.getRoleListByMemberIdFail(d.t0,t));case 17:Object(s.a)(d.t0);case 18:case"end":return d.stop()}}),A,null,[[3,13]])}function U(e){var a,t,r,l,p;return regeneratorRuntime.wrap((function(O){for(;;)switch(O.prev=O.next){case 0:if(e.type===o.a.DELETE_ROLE){O.next=2;break}return O.abrupt("return");case 2:return a=e.payload,t=a.id,r=a.resolve,O.prev=3,O.next=6,Object(n.call)(i.a,{method:"delete",url:"".concat(u.a.roles,"/").concat(t)});case 6:return l=O.sent,p=l.payload,O.next=10,Object(n.put)(c.a.roleDeleted(p));case 10:r(),O.next=18;break;case 13:return O.prev=13,O.t0=O.catch(3),O.next=17,Object(n.put)(c.a.deleteRoleFail());case 17:Object(s.a)(O.t0);case 18:case"end":return O.stop()}}),f,null,[[3,13]])}function P(e){var a,t,r,l,p,O,d,E;return regeneratorRuntime.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if(e.type===o.a.EDIT_ROLE){b.next=2;break}return b.abrupt("return");case 2:return a=e.payload,t=a.name,r=a.description,l=a.id,p=a.resolve,b.prev=3,O={name:t,description:r},b.next=7,Object(n.call)(i.a,{method:"put",url:"".concat(u.a.roles,"/").concat(l),data:O});case 7:return d=b.sent,E=d.payload,b.next=11,Object(n.put)(c.a.roleEdited(E));case 11:p(),b.next=19;break;case 14:return b.prev=14,b.t0=b.catch(3),b.next=18,Object(n.put)(c.a.editRoleFail());case 18:Object(s.a)(b.t0);case 19:case"end":return b.stop()}}),y,null,[[3,14]])}function J(e){var a,t,r,l;return regeneratorRuntime.wrap((function(p){for(;;)switch(p.prev=p.next){case 0:if(e.type===o.a.REL_ROLE_MEMBER){p.next=2;break}return p.abrupt("return");case 2:return a=e.payload,t=a.id,r=a.memberIds,l=a.resolve,p.prev=3,p.next=6,Object(n.call)(i.a,{method:"post",url:"".concat(u.a.roles,"/").concat(t,"/members"),data:r});case 6:return p.next=8,Object(n.put)(c.a.relRoleMemberSuccess());case 8:l(),p.next=16;break;case 11:return p.prev=11,p.t0=p.catch(3),p.next=15,Object(n.put)(c.a.relRoleMemberFail());case 15:Object(s.a)(p.t0);case 16:case"end":return p.stop()}}),m,null,[[3,11]])}function V(e){var a,t,r,l,p;return regeneratorRuntime.wrap((function(O){for(;;)switch(O.prev=O.next){case 0:if(e.type===o.a.GET_REL_ROLE_MEMBER){O.next=2;break}return O.abrupt("return");case 2:return a=e.payload,t=a.id,r=a.resolve,O.prev=3,O.next=6,Object(n.call)(i.a,{method:"get",url:"".concat(u.a.roles,"/").concat(t,"/members")});case 6:return l=O.sent,p=l.payload,O.next=10,Object(n.put)(c.a.getRelRoleMemberSuccess());case 10:r(p),O.next=18;break;case 13:return O.prev=13,O.t0=O.catch(3),O.next=17,Object(n.put)(c.a.getRelRoleMemberFail());case 17:Object(s.a)(O.t0);case 18:case"end":return O.stop()}}),g,null,[[3,13]])}function H(e){var a,t,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.type===o.a.SEARCH_MEMBER){l.next=2;break}return l.abrupt("return");case 2:return a=e.payload.keyword,l.prev=3,l.next=6,Object(n.call)(i.a,{method:"get",url:"".concat(u.a.user,"?keyword=").concat(a)});case 6:return t=l.sent,r=t.payload,l.next=10,Object(n.put)(c.a.memberSearched(r));case 10:l.next=17;break;case 12:return l.prev=12,l.t0=l.catch(3),l.next=16,Object(n.put)(c.a.searchMemberFail());case 16:Object(s.a)(l.t0);case 17:case"end":return l.stop()}}),S,null,[[3,12]])}function Y(e){var a,t,r,l,p,O,d;return regeneratorRuntime.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:if(e.type===o.a.INVITE_MEMBER){E.next=2;break}return E.abrupt("return");case 2:return a=e.payload,t=a.orgId,r=a.members,l=a.needEmail,p=a.resolve,E.prev=3,E.next=6,Object(n.call)(i.a,{method:"post",url:"".concat(u.a.organizations,"/").concat(t,"/invite/members"),data:{orgId:t,members:r,needConfirm:l}});case 6:return O=E.sent,d=O.payload,E.next=10,Object(n.put)(c.a.inviteMemberSuccess(d));case 10:p&&p(),E.next=18;break;case 13:return E.prev=13,E.t0=E.catch(3),E.next=17,Object(n.put)(c.a.inviteMemberFail());case 17:Object(s.a)(E.t0);case 18:case"end":return E.stop()}}),L,null,[[3,13]])}function q(e){var a,t,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.type===o.a.DELETE_ORGANIZATION_MEMBER){l.next=2;break}return l.abrupt("return");case 2:return a=e.payload,t=a.relationId,r=a.resolve,l.prev=3,l.next=6,Object(n.call)(i.a,{url:"".concat(u.a.organizations,"/member/").concat(t),method:"delete"});case 6:return l.next=8,Object(n.put)(c.a.organizationMemberDeleted(t));case 8:r(),l.next=16;break;case 11:return l.prev=11,l.t0=l.catch(3),l.next=15,Object(n.put)(c.a.deleteOrganizationMemberFail());case 15:Object(s.a)(l.t0);case 16:case"end":return l.stop()}}),T,null,[[3,11]])}function K(e){var a,t,r,l,p,O;return regeneratorRuntime.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:if(e.type===o.a.CHANGE_MEMBER_ROLE_ORGANIZATION){d.next=2;break}return d.abrupt("return");case 2:return a=e.payload,t=a.relationId,r=a.newRole,l=a.resolve,d.prev=3,d.next=6,Object(n.call)(i.a,{url:"".concat(u.a.organizations,"/member/").concat(t),method:"put",data:{role:r}});case 6:return p=d.sent,O=p.payload,d.next=10,Object(n.put)(c.a.organizationMemberRoleChanged(t,O));case 10:return d.next=12,l();case 12:d.next=19;break;case 14:return d.prev=14,d.t0=d.catch(3),d.next=18,Object(n.put)(c.a.changeOrganizationMemberRoleFail());case 18:Object(s.a)(d.t0);case 19:case"end":return d.stop()}}),M,null,[[3,14]])}function Q(e){var a,t,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.type===o.a.LOAD_PROJECT_ADMINS){l.next=2;break}return l.abrupt("return");case 2:return a=e.payload.projectId,l.prev=3,l.next=6,Object(n.call)(i.a,"".concat(u.a.projects,"/").concat(a,"/admins"));case 6:return t=l.sent,r=t.payload,l.next=10,Object(n.put)(c.a.projectAdminLoaded(r));case 10:l.next=17;break;case 12:return l.prev=12,l.t0=l.catch(3),l.next=16,Object(n.put)(c.a.loadProjectAdminFail());case 16:Object(s.a)(l.t0);case 17:case"end":return l.stop()}}),j,null,[[3,12]])}function W(e){var a,t,r,c,l,p;return regeneratorRuntime.wrap((function(O){for(;;)switch(O.prev=O.next){case 0:if(e.type===o.a.GET_VIZ_VISBILITY){O.next=2;break}return O.abrupt("return");case 2:return a=e.payload,t=a.roleId,r=a.projectId,c=a.resolve,O.prev=3,O.next=6,Object(n.call)(i.a,{method:"get",url:"".concat(u.a.roles,"/").concat(t,"/project/").concat(r,"/viz/visibility")});case 6:l=O.sent,p=l.payload,c(p),O.next=14;break;case 11:O.prev=11,O.t0=O.catch(3),Object(s.a)(O.t0);case 14:case"end":return O.stop()}}),v,null,[[3,11]])}function X(e){var a,t,r,c,l,p;return regeneratorRuntime.wrap((function(O){for(;;)switch(O.prev=O.next){case 0:if(e.type===o.a.POST_VIZ_VISBILITY){O.next=2;break}return O.abrupt("return");case 2:return a=e.payload,t=a.id,r=a.permission,c=a.resolve,O.prev=3,O.next=6,Object(n.call)(i.a,{url:"".concat(u.a.roles,"/").concat(t,"/viz/visibility"),method:"post",data:r});case 6:return l=O.sent,p=l.payload,O.next=10,c(p);case 10:O.next=15;break;case 12:O.prev=12,O.t0=O.catch(3),Object(s.a)(O.t0);case 15:case"end":return O.stop()}}),N,null,[[3,12]])}function $(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.all)([Object(n.takeLatest)(o.a.LOAD_ORGANIZATIONS,x),Object(n.takeEvery)(o.a.ADD_ORGANIZATION,k),Object(n.takeEvery)(o.a.EDIT_ORGANIZATION,z),Object(n.takeEvery)(o.a.DELETE_ORGANIZATION,C),Object(n.takeLatest)(o.a.LOAD_ORGANIZATION_DETAIL,G),Object(n.takeLatest)(o.a.LOAD_ORGANIZATIONS_MEMBERS,Z),Object(n.takeLatest)(o.a.LOAD_ORGANIZATIONS_PROJECTS,h),Object(n.takeLatest)(o.a.LOAD_ORGANIZATIONS_ROLE,w),Object(n.takeEvery)(o.a.ADD_ROLE,B),Object(n.takeEvery)(o.a.DELETE_ROLE,U),Object(n.takeEvery)(o.a.EDIT_ROLE,P),Object(n.takeEvery)(o.a.REL_ROLE_MEMBER,J),Object(n.takeEvery)(o.a.GET_REL_ROLE_MEMBER,V),Object(n.takeLatest)(o.a.LOAD_PROJECT_ADMINS,Q),Object(n.takeLatest)(o.a.INVITE_MEMBER,Y),Object(n.takeLatest)(o.a.SEARCH_MEMBER,H),Object(n.takeLatest)(o.a.DELETE_ORGANIZATION_MEMBER,q),Object(n.takeLatest)(o.a.CHANGE_MEMBER_ROLE_ORGANIZATION,K),Object(n.takeLatest)(o.a.GET_VIZ_VISBILITY,W),Object(n.takeLatest)(o.a.POST_VIZ_VISBILITY,X),Object(n.takeEvery)(o.a.GET_ROLELISTS_BY_MEMBERID,F)]);case 2:case"end":return e.stop()}}),D)}},f68fe5dff3cbb1ad6240:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t("d967fb6bcc572a70d186"),n=t("fdb445ec61a8d515506e"),o={loadOrganizationProjects:function(e){return{type:r.a.LOAD_ORGANIZATIONS_PROJECTS,payload:{param:e}}},organizationsProjectsLoaded:function(e){return{type:r.a.LOAD_ORGANIZATIONS_PROJECTS_SUCCESS,payload:{projects:e}}},loadOrganizationsProjectsFail:function(){return{type:r.a.LOAD_ORGANIZATIONS_PROJECTS_FAILURE}},loadOrganizationMembers:function(e){return{type:r.a.LOAD_ORGANIZATIONS_MEMBERS,payload:{id:e}}},organizationsMembersLoaded:function(e){return{type:r.a.LOAD_ORGANIZATIONS_MEMBERS_SUCCESS,payload:{members:e}}},loadOrganizationsMembersFail:function(){return{type:r.a.LOAD_ORGANIZATIONS_MEMBERS_FAILURE}},loadOrganizationRole:function(e){return{type:r.a.LOAD_ORGANIZATIONS_ROLE,payload:{id:e}}},organizationsRoleLoaded:function(e){return{type:r.a.LOAD_ORGANIZATIONS_ROLE_SUCCESS,payload:{role:e}}},loadOrganizationsRoleFail:function(){return{type:r.a.LOAD_ORGANIZATIONS_ROLE_FAILURE,payload:{}}},loadOrganizations:function(){return{type:r.a.LOAD_ORGANIZATIONS}},organizationsLoaded:function(e){return{type:r.a.LOAD_ORGANIZATIONS_SUCCESS,payload:{organizations:e}}},loadOrganizationsFail:function(){return{type:r.a.LOAD_ORGANIZATIONS_FAILURE,payload:{}}},addOrganization:function(e,a){return{type:r.a.ADD_ORGANIZATION,payload:{organization:e,resolve:a}}},organizationAdded:function(e){return{type:r.a.ADD_ORGANIZATION_SUCCESS,payload:{result:e}}},addOrganizationFail:function(){return{type:r.a.ADD_ORGANIZATION_FAILURE,payload:{}}},editOrganization:function(e){return{type:r.a.EDIT_ORGANIZATION,payload:{organization:e}}},organizationEdited:function(e){return{type:r.a.EDIT_ORGANIZATION_SUCCESS,payload:{result:e}}},editOrganizationFail:function(){return{type:r.a.EDIT_ORGANIZATION_FAILURE,payload:{}}},deleteOrganization:function(e,a){return{type:r.a.DELETE_ORGANIZATION,payload:{id:e,resolve:a}}},organizationDeleted:function(e){return{type:r.a.DELETE_ORGANIZATION_SUCCESS,payload:{id:e}}},deleteOrganizationFail:function(){return{type:r.a.DELETE_ORGANIZATION_FAILURE,payload:{}}},loadOrganizationDetail:function(e){return{type:r.a.LOAD_ORGANIZATION_DETAIL,payload:{id:e}}},organizationDetailLoaded:function(e){return{type:r.a.LOAD_ORGANIZATION_DETAIL_SUCCESS,payload:{organization:e}}},loadOrganizationDetailFail:function(e,a){return{type:r.a.LOAD_ORGANIZATION_DETAIL_FAILURE,payload:{organization:e,widgets:a}}},addRole:function(e,a,t,n){return{type:r.a.ADD_ROLE,payload:{name:e,description:a,id:t,resolve:n}}},roleAdded:function(e){return{type:r.a.ADD_ROLE_SUCCESS,payload:{result:e}}},addRoleFail:function(){return{type:r.a.ADD_ROLE_FAILURE,payload:{}}},deleteRole:function(e,a){return{type:r.a.DELETE_ROLE,payload:{id:e,resolve:a}}},roleDeleted:function(e){return{type:r.a.DELETE_ROLE_SUCCESS,payload:{result:e}}},deleteRoleFail:function(){return{type:r.a.DELETE_ROLE_FAILURE,payload:{}}},editRole:function(e,a,t,n){return{type:r.a.EDIT_ROLE,payload:{name:e,description:a,id:t,resolve:n}}},roleEdited:function(e){return{type:r.a.EDIT_ROLE_SUCCESS,payload:{result:e}}},editRoleFail:function(){return{type:r.a.EDIT_ROLE_FAILURE,payload:{}}},searchMember:function(e){return{type:r.a.SEARCH_MEMBER,payload:{keyword:e}}},memberSearched:function(e){return{type:r.a.SEARCH_MEMBER_SUCCESS,payload:{result:e}}},searchMemberFail:function(){return{type:r.a.SEARCH_MEMBER_FAILURE,payload:{}}},inviteMember:function(e,a,t,n){return{type:r.a.INVITE_MEMBER,payload:{orgId:e,members:a,needEmail:t,resolve:n}}},inviteMemberSuccess:function(e){return{type:r.a.INVITE_MEMBER_SUCCESS,payload:{result:e}}},inviteMemberFail:function(){return{type:r.a.INVITE_MEMBER_FAILURE,payload:{}}},deleteOrganizationMember:function(e,a){return{type:r.a.DELETE_ORGANIZATION_MEMBER,payload:{relationId:e,resolve:a}}},organizationMemberDeleted:function(e){return{type:r.a.DELETE_ORGANIZATION_MEMBER_SUCCESS,payload:{id:e}}},deleteOrganizationMemberFail:function(){return{type:r.a.DELETE_ORGANIZATION_MEMBER_ERROR,payload:{}}},changeOrganizationMemberRole:function(e,a,t){return{type:r.a.CHANGE_MEMBER_ROLE_ORGANIZATION,payload:{relationId:e,newRole:a,resolve:t}}},organizationMemberRoleChanged:function(e,a){return{type:r.a.CHANGE_MEMBER_ROLE_ORGANIZATION_SUCCESS,payload:{relationId:e,newRole:a}}},changeOrganizationMemberRoleFail:function(){return{type:r.a.CHANGE_MEMBER_ROLE_ORGANIZATION_ERROR,payload:{}}},relRoleMember:function(e,a,t){return{type:r.a.REL_ROLE_MEMBER,payload:{id:e,memberIds:a,resolve:t}}},relRoleMemberSuccess:function(){return{type:r.a.REL_ROLE_MEMBER_SUCCESS,payload:{}}},relRoleMemberFail:function(){return{type:r.a.REL_ROLE_MEMBER_FAILURE,payload:{}}},getRelRoleMember:function(e,a){return{type:r.a.GET_REL_ROLE_MEMBER,payload:{id:e,resolve:a}}},getRelRoleMemberSuccess:function(){return{type:r.a.GET_REL_ROLE_MEMBER_SUCCESS,payload:{}}},getRelRoleMemberFail:function(){return{type:r.a.GET_REL_ROLE_MEMBER_FAILURE,payload:{}}},setCurrentProject:function(e){return{type:r.a.SET_CURRENT_ORIGANIZATION_PROJECT,payload:{option:e}}},loadProjectAdmin:function(e){return{type:r.a.LOAD_PROJECT_ADMINS,payload:{projectId:e}}},projectAdminLoaded:function(e){return{type:r.a.LOAD_PROJECT_ADMINS_SUCCESS,payload:{result:e}}},loadProjectAdminFail:function(){return{type:r.a.LOAD_PROJECT_ADMINS_FAIL,payload:{}}},loadProjectRoles:function(e){return{type:r.a.LOAD_PROJECT_ROLES,payload:{projectId:e}}},projectRolesLoaded:function(e){return{type:r.a.LOAD_PROJECT_ROLES_SUCCESS,payload:{result:e}}},loadProjectRolesFail:function(){return{type:r.a.LOAD_PROJECT_ROLES_FAIL,payload:{}}},getVizVisbility:function(e,a,t){return{type:r.a.GET_VIZ_VISBILITY,payload:{roleId:e,projectId:a,resolve:t}}},postVizVisbility:function(e,a,t){return{type:r.a.POST_VIZ_VISBILITY,payload:{id:e,resolve:t,permission:a}}},getRoleListByMemberId:function(e,a,t){return{type:r.a.GET_ROLELISTS_BY_MEMBERID,payload:{orgId:e,memberId:a,resolve:t}}},getRoleListByMemberIdSuccess:function(e,a){return{type:r.a.GET_ROLELISTS_BY_MEMBERID_SUCCESS,payload:{result:e,memberId:a}}},getRoleListByMemberIdFail:function(e,a){return{type:r.a.GET_ROLELISTS_BY_MEMBERID_ERROR,payload:{error:e,memberId:a}}}};Object(n.b)(o);a.b=o}}]);