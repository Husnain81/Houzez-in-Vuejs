import{_ as f,o as i,c as u,b as l,a as y,q as h,d as a,w as n,s as g,x,e as s,j as m,F as w,r as p}from"./index-DJyakCbI.js";import{u as k,_ as M}from"./CrmToolBar-Cdw0JlvM.js";const E={emits:["close"],mounted(){$(".selectpicker").selectpicker()},methods:{closePanel(){this.$emit("close")}}},N={class:"dashboard-slide-panel-wrap"};function q(b,t,r,o,v,e){return i(),u("div",N,[t[2]||(t[2]=l("h2",null,"Add New Enquiry",-1)),l("button",{type:"button",class:"btn open-close-slide-panel",onClick:t[0]||(t[0]=(...d)=>e.closePanel&&e.closePanel(...d))},t[1]||(t[1]=[l("span",{"aria-hidden":"true"},"×",-1)])),t[3]||(t[3]=y('<div class="lined-block"><div class="row"><div class="col-sm-12"><div class="form-group"><label>Contact</label><input class="form-control" name="name" placeholder="Enter the name" type="text" value="Martin Moore" disabled></div></div></div></div><div class="lined-block"><h3>Information</h3><div class="row"><div class="col-md-12 col-sm-12"><div class="form-group"><label>Type</label><select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="false"><option>Purchase</option><option>Rent</option><option>Sell</option><option>Evaluation</option><option>Mortgage</option></select></div></div><div class="col-md-12 col-sm-12"><div class="form-group"><label>Property</label><select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="false"><option>Apartment</option><option>Family Home</option><option>Loft</option></select></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label>Price</label><input class="form-control" name="name" placeholder="From" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label> </label><input class="form-control" name="name" placeholder="To" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label>Bedrooms</label><input class="form-control" name="name" placeholder="Min" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label> </label><input class="form-control" name="name" placeholder="Max" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label>Bathrooms</label><input class="form-control" name="name" placeholder="Min" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label> </label><input class="form-control" name="name" placeholder="Max" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label>Area</label><input class="form-control" name="name" placeholder="Min" type="text"></div></div><div class="col-md-6 col-sm-12"><div class="form-group"><label> </label><input class="form-control" name="name" placeholder="Max" type="text"></div></div></div></div><div class="lined-block"><h3>Location</h3><div class="row"><div class="col-md-12 col-sm-12"><div class="form-group"><label>Type</label><select class="selectpicker form-control bs-select-hidden" title="Country" data-live-search="true" data-selected-text-format="count" data-actions-box="false"><option>United States</option><option>Canada</option><option>Australia</option></select></div></div><div class="col-md-12 col-sm-12"><div class="form-group"><label>County / State</label><input class="form-control" name="name" placeholder="Enter the county/state" type="text"></div></div><div class="col-md-12 col-sm-12"><div class="form-group"><label>City</label><input class="form-control" name="name" placeholder="Enter the city" type="text"></div></div><div class="col-md-12 col-sm-12"><div class="form-group"><label>Postal Code / Zip</label><input class="form-control" name="name" placeholder="Enter the zip code" type="text"></div></div></div></div><button type="button" class="btn btn-primary btn-full-width mt-2">Save</button>',4))])}const A=f(E,[["render",q]]),C={class:"dashboard-content-wrap"},P={class:"dashboard-content-inner-wrap"},S={class:"dashboard-content-block-wrap"},V={class:"dashboard-content-block"},D={class:"dashboard-table table-lined responsive-table"},T={class:"text-right"},z={class:"text-right"},F={__name:"Index",setup(b){const t=k(),r=h(()=>t.isModalVisibleAddNewEnquiry),o=()=>{t.toggleModalAddNewEnquiry()};return(v,e)=>{const d=p("DashboardHeader"),c=p("router-link");return i(),u(w,null,[a(d,{heading:"Enquiries"},{default:n(()=>[l("a",{class:"btn btn-primary",href:"#",onClick:m(o,["prevent"])},"Add New Enquiry")]),_:1}),r.value?(i(),g(A,{key:0,onClose:o})):x("",!0),l("section",C,[l("div",P,[l("div",S,[l("div",V,[e[1]||(e[1]=s(" You don't have any enquiry at this moment. ")),l("a",{class:"open-close-slide-panel",href:"#",onClick:m(o,["prevent"])},e[0]||(e[0]=[l("strong",null,"Add New Enquiry",-1)]))]),a(M),l("table",D,[e[18]||(e[18]=l("thead",null,[l("tr",null,[l("th",null,"ID"),l("th",null,"Date"),l("th",null,"Name"),l("th",null,"Email"),l("th",null,"Phone"),l("th",null,"Type"),l("th",null,"Source"),l("th",{class:"action-col"},"Actions")])],-1)),l("tbody",null,[l("tr",null,[e[3]||(e[3]=l("td",{"data-label":"ID"}," 01 ",-1)),e[4]||(e[4]=l("td",{"data-label":"Date"}," March 9, 2019 ",-1)),e[5]||(e[5]=l("td",{"data-label":"name"},[s(" Martin Moore "),l("a",{href:"#"},[l("i",{class:"houzez-icon icon-messages-bubble ml-2"})])],-1)),e[6]||(e[6]=l("td",{"data-label":"Email"},[l("a",{href:"#"},"martin.moore@houzez.co")],-1)),e[7]||(e[7]=l("td",{"data-label":"Phone"}," 879-345-1233 ",-1)),e[8]||(e[8]=l("td",{"data-label":"Type"}," Buyer ",-1)),e[9]||(e[9]=l("td",{class:"table-nowrap","data-label":"Source"},[l("a",{href:"#"},"Property Title")],-1)),l("td",T,[a(c,{to:{name:"dashboard.crm-lead-enquiry-from-property-detail-page"}},{default:n(()=>e[2]||(e[2]=[s(" View ")])),_:1})])]),l("tr",null,[e[11]||(e[11]=l("td",{"data-label":"ID"}," 02 ",-1)),e[12]||(e[12]=l("td",{"data-label":"Date"}," March 9, 2019 ",-1)),e[13]||(e[13]=l("td",{"data-label":"name"}," Isabel Wynwood ",-1)),e[14]||(e[14]=l("td",{"data-label":"Email"},[l("a",{href:"#"},"isa.wyn@houzez.co")],-1)),e[15]||(e[15]=l("td",{"data-label":"Phone"}," - ",-1)),e[16]||(e[16]=l("td",{"data-label":"Type"}," - ",-1)),e[17]||(e[17]=l("td",{class:"table-nowrap","data-label":"Source"},[l("a",{href:"#"},"Agent Page")],-1)),l("td",z,[a(c,{to:{name:"dashboard.crm-lead-enquiry-from-property-detail-page"}},{default:n(()=>e[10]||(e[10]=[s(" View ")])),_:1})])])])])])])])],64)}}};export{F as default};
