import{_ as l,g as p,h as u,c as m,b as e,i as a,v as t,j as f,o as w,k as b,l as y}from"./index-DJyakCbI.js";const g={class:"body"},v={class:"form-group"},c={class:"form-group"},_={class:"form-group"},x={class:"form-group"},E={__name:"Index",setup(U){const i=p(),o=u({username:"",email:"",password:"",password_confirmation:""}),d=async()=>{try{(await b().register(o)).status===201&&(i.Success("Registration successful"),y.push({name:"dashboard"}))}catch(n){i.Error(n)}};return(n,s)=>(w(),m("div",g,[e("form",{onSubmit:f(d,["prevent"]),class:"registration-form"},[s[8]||(s[8]=e("h2",null,"Register",-1)),e("div",v,[s[4]||(s[4]=e("label",{for:"username"},"Username",-1)),a(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>o.username=r),id:"username",name:"username",placeholder:"Enter your username",required:""},null,512),[[t,o.username]])]),e("div",c,[s[5]||(s[5]=e("label",{for:"email"},"Email",-1)),a(e("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=r=>o.email=r),id:"email",name:"email",placeholder:"Enter your email",required:""},null,512),[[t,o.email]])]),e("div",_,[s[6]||(s[6]=e("label",{for:"password"},"Password",-1)),a(e("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=r=>o.password=r),id:"password",name:"password",placeholder:"Enter your password",required:""},null,512),[[t,o.password]])]),e("div",x,[s[7]||(s[7]=e("label",{for:"password"},"Confirm Password",-1)),a(e("input",{type:"password","onUpdate:modelValue":s[3]||(s[3]=r=>o.password_confirmation=r),id:"confirm_password",name:"confirm_password",placeholder:"Enter password again",required:""},null,512),[[t,o.password_confirmation]])]),s[9]||(s[9]=e("button",{type:"submit",class:"submit-btn"},"Register",-1))],32)]))}},q=l(E,[["__scopeId","data-v-5b19933d"]]);export{q as default};
