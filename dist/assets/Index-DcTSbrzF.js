import{_ as d,g as p,h as u,c as m,b as o,i,v as n,j as f,o as c,k as w,l as b}from"./index-F0BtWOqF.js";const y={class:"body"},v={class:"form-group"},g={class:"form-group"},_={__name:"Index",setup(x){const a=p(),e=u({email:"",password:""}),l=async()=>{try{(await w().login(e)).status===200&&(a.Success("Login successfully"),b.push({name:"dashboard"}))}catch(t){a.Error(t)}};return(t,s)=>(c(),m("div",y,[o("form",{onSubmit:f(l,["prevent"]),class:"registration-form"},[s[4]||(s[4]=o("h2",null,"Login",-1)),o("div",v,[s[2]||(s[2]=o("label",{for:"email"},"Email",-1)),i(o("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=r=>e.email=r),id:"email",name:"email",placeholder:"Enter your email",required:""},null,512),[[n,e.email]])]),o("div",g,[s[3]||(s[3]=o("label",{for:"password"},"Password",-1)),i(o("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=r=>e.password=r),id:"password",name:"password",placeholder:"Enter your password",required:""},null,512),[[n,e.password]])]),s[5]||(s[5]=o("button",{type:"submit",class:"submit-btn"},"Login",-1))],32)]))}},k=d(_,[["__scopeId","data-v-da43d803"]]);export{k as default};
