import{_ as r,c as i,d as e,w as t,b as a,e as o,F as c,r as n,o as _}from"./index-F0BtWOqF.js";const m={},v={class:"dashboard-content-wrap"},b={class:"deals-table-wrap"},p={class:"nav nav-pills deals-nav-tab",role:"tablist"},u={class:"nav-item"},f={class:"nav-item"},h={class:"nav-item lost-deals"};function k(w,s){const d=n("DashboardHeader"),l=n("router-link");return _(),i(c,null,[e(d,{heading:"Deals"},{default:t(()=>s[0]||(s[0]=[a("a",{class:"btn btn-primary",href:"#"},"Add New Deal",-1)])),_:1}),a("section",v,[a("div",b,[a("ul",p,[a("li",u,[e(l,{class:"nav-link active-deals active",to:"/dashboard/crm-deals"},{default:t(()=>s[1]||(s[1]=[o(" Active Deals (6) ")])),_:1})]),a("li",f,[e(l,{class:"nav-link won-deals",to:"/dashboard/crm-won-deals"},{default:t(()=>s[2]||(s[2]=[o(" Won Deals (2) ")])),_:1})]),a("li",h,[e(l,{class:"nav-link",to:"/dashboard/crm-lost-deals"},{default:t(()=>s[3]||(s[3]=[o(" Lost Deals (2) ")])),_:1})])]),s[4]||(s[4]=a("div",{class:"dashboard-content-block"},[o(" You don't have any deals at this moment. "),a("a",{class:"open-close-slide-panel",href:"#"},[a("strong",null,"Add New Deal")])],-1))])])],64)}const x=r(m,[["render",k]]);export{x as default};
