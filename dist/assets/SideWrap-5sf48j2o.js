import{_ as x}from"./LogoWhite-DZN6u0Pg.js";import{_ as B,A as z,o as s,c as t,F as v,m as f,E as p,s as h,w as r,b as a,e as o,t as d,j as k,u as c,R as m,i as w,G as g,d as _,x as y}from"./index-F0BtWOqF.js";import{D as C}from"./routeList-BGDnUNZW.js";const A={class:"side-menu list-unstyled"},D={key:3,class:"side-menu-dropdown list-unstyled"},O={key:4,class:"side-menu-dropdown list-unstyled"},S={key:5,class:"notification-circle"},M={class:"side-menu-item"},N={__name:"AgentMenu",setup(b){const u=z(!1),l=z(!1);return($,i)=>(s(),t("ul",A,[(s(!0),t(v,null,f(c(C),e=>(s(),t("li",{key:e.id,class:p(["side-menu-item",{"side-menu-parent-selected":e.sub.length>0}])},[e.name=="dashboard.crm"?(s(),h(c(m),{key:0,to:{name:e.name},"active-class":"active",onClick:i[0]||(i[0]=k(n=>u.value=!u.value,["prevent"]))},{default:r(()=>[a("i",{class:p(["houzez-icon mr-2",e.icon])},null,2),o(" "+d(e.title),1)]),_:2},1032,["to"])):e.name=="dashboard.my-properties"?(s(),h(c(m),{key:1,to:{name:e.name},"active-class":"active",onClick:i[1]||(i[1]=k(n=>l.value=!l.value,["prevent"]))},{default:r(()=>[a("i",{class:p(["houzez-icon mr-2",e.icon])},null,2),o(" "+d(e.title),1)]),_:2},1032,["to"])):(s(),h(c(m),{key:2,to:{name:e.name},"active-class":"active"},{default:r(()=>[a("i",{class:p(["houzez-icon mr-2",e.icon])},null,2),o(" "+d(e.title),1)]),_:2},1032,["to"])),e.name=="dashboard.crm"?w((s(),t("ul",D,[(s(!0),t(v,null,f(e.sub,n=>(s(),t("li",{key:n.id,class:"side-menu-item"},[_(c(m),{to:{name:n.name},"active-class":"active"},{default:r(()=>[i[3]||(i[3]=a("i",{class:"houzez-icon icon-arrow-right-1"},null,-1)),o(" "+d(n.title),1)]),_:2},1032,["to"])]))),128))],512)),[[g,u.value]]):y("",!0),e.name=="dashboard.my-properties"?w((s(),t("ul",O,[(s(!0),t(v,null,f(e.sub,n=>(s(),t("li",{key:n.id,class:"side-menu-item"},[_(c(m),{to:{name:n.name},"active-class":"active"},{default:r(()=>[i[4]||(i[4]=a("i",{class:"houzez-icon icon-arrow-right-1"},null,-1)),o(" "+d(n.title),1)]),_:2},1032,["to"])]))),128))],512)),[[g,l.value]]):y("",!0),e.title=="Messages"?(s(),t("span",S)):y("",!0)],2))),128)),a("li",M,[a("a",{href:"javascript:void(0)",onClick:i[2]||(i[2]=k(e=>$.$filters.logout(),["prevent"]))},i[5]||(i[5]=[a("i",{class:"houzez-icon icon-lock-5 mr-2"},null,-1),o(" Log Out ")]))])]))}},R=B(N,[["__scopeId","data-v-07dd0bea"]]),V={class:"dashboard-logo-wrap"},E={class:"dashboard-side-menu-wrap"},T={__name:"SideWrap",setup(b){return(u,l)=>(s(),t(v,null,[a("div",V,[_(x),l[0]||(l[0]=a("div",{class:"dashboard-notification-wrap"},[a("i",{class:"houzez-icon icon-alarm-bell"}),a("span",{class:"notification-circle"})],-1))]),a("div",E,[_(R)])],64))}};export{T as _};
