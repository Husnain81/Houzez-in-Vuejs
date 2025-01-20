import{z as L,H as h,I as E,J as k,g as S,K as B,k as R,A as x,q as z,o as w,c as b,b as e,j as N,i as d,v as c,E as M,t as I,x as C,l as H,C as A,L as T,r as V,u as p,s as D,w as O,d as P,F}from"./index-DJyakCbI.js";const q=L("userProfile",{state:()=>({profile:{},profilePicture:"",socialMedia:{},loading:!1,errors:null,baseUrl:"/profile"}),getters:{getProfile:r=>r.profile},actions:{async getProfileInfo(){try{this.loading=!0;const r=`${this.baseUrl}/get-information`,l=await h.get(r);return this.setProfile(l.data.profile),this.loading=!1,new Promise(o=>o(l))}catch(r){return r.response&&r.response.data&&(this.errors=r.response),new Promise(l=>l(r.response))}},async updateProfileInfo(r){try{const l=`${this.baseUrl}/update-information`,o=await h.post(l,r);return this.setProfile(o.data.profile),new Promise(i=>i(o))}catch(l){return l.response.data&&(this.errors=l.response),new Promise(o=>o(l.response))}},async getProfilePicture(){try{const r=await h.get(`${this.baseUrl}/get-picture`);return this.setProfilePicture(r.data),new Promise(l=>l(r))}catch(r){return this.errors=r.response,new Promise(l=>l(r.response))}},async updateProfilePicture(r){try{const l=`${this.baseUrl}/update-picture`,o=await h.post(l,r,{headers:{"Content-Type":"multipart/form-data"}});return this.setProfilePicture(o.data.profile_picture_url),new Promise(i=>i(o))}catch(l){return l.response.data&&(this.errors=l.response),new Promise(o=>o(l.response))}},async getSocialMedia(){try{const r=`${this.baseUrl}/get-social-media`,l=await h.get(r);return this.setSocialMedia(l.data.profile),new Promise(o=>o(l))}catch(r){return r.response&&r.response.data&&(this.errors=r.response),new Promise(l=>l(r.response))}},async updateSocialMedia(r){try{const l=`${this.baseUrl}/update-social-media`,o=await h.post(l,r);return this.setSocialMedia(o.data.profile),new Promise(i=>i(o))}catch(l){return l.response.data&&(this.errors=l.response),new Promise(o=>o(l.response))}},setProfile(r){this.profile=r},setProfilePicture(r){this.profilePicture=r},setSocialMedia(r){this.socialMedia=r}}}),G=L("confirm",{state:()=>({type:{success:"success",warning:"warning",info:"info",error:"error"}}),actions:{Success(r,l="Success"){return E.confirm(r,l,{confirmButtonText:"OK",cancelButtonText:"Cancel",type:this.type.success})},Warning(r,l="Warning"){return E.confirm(r,l,{confirmButtonText:"OK",cancelButtonText:"Cancel",type:this.type.warning})},Info(r,l="Info"){return E.confirm(r,l,{confirmButtonText:"OK",cancelButtonText:"Cancel",type:this.type.info})},Error(r,l="Error"){return E.confirm(r,l,{confirmButtonText:"OK",cancelButtonText:"Cancel",type:this.type.error})}}}),Y=L("message",{state:()=>({type:{success:"success",warning:"warning",info:"info",error:"error"},duration:3e3}),actions:{Success(r){k({type:this.type.success,message:r,duration:this.duration})},Warning(r){k({type:this.type.warning,message:r,duration:this.duration})},Info(r){k({type:this.type.info,message:r,duration:this.duration})},Error(r){k({type:this.type.error,message:r,duration:this.duration})}}}),J={class:"dashboard-content-block"},Q={class:"row"},X={class:"col-md-9 col-sm-12"},Z={class:"row"},ee={class:"col-md-12 col-sm-12"},se={class:"form-group"},oe={key:0,class:"text-danger"},te={class:"col-md-6 col-sm-12"},le={class:"form-group"},re={key:0,class:"text-danger"},ne={class:"col-md-6 col-sm-12"},ae={class:"form-group"},ie={key:0,class:"text-danger"},ue=["disabled"],de={__name:"ChangePassword",setup(r){const l=S();B(R());const o=x({current_password:"",new_password:"",password_confirmation:""}),i=x({current_password:"",new_password:"",password_confirmation:""}),v=t=>{t==="current_password"&&!o.value.current_password?i.value.current_password="Old password is required.":t==="new_password"&&!o.value.new_password?i.value.new_password="New password is required.":t==="new_password"&&o.value.new_password.length<8?i.value.new_password="New password must be at least 8 characters.":t==="password_confirmation"&&!o.value.password_confirmation?i.value.password_confirmation="Password confirmation is required.":t==="password_confirmation"&&o.value.password_confirmation!==o.value.new_password?i.value.password_confirmation="Passwords do not match.":i.value[t]=""},f=z(()=>Object.values(i.value).some(t=>t!=="")),n=()=>{o.value={current_password:"",new_password:"",password_confirmation:""},i.value={current_password:"",new_password:"",password_confirmation:""}},m=async()=>{if(Object.keys(o.value).forEach(v),f.value){l.Error("Please fix the errors before submitting.");return}try{const t=await R().changePassword(o.value);t.status===200?(l.Success("Password changed successfully."),n()):t.status===403?l.Error("Current password is incorrect."):l.Error("Password change failed.")}catch(t){l.Error(t)}};return(t,a)=>(w(),b("div",J,[e("div",Q,[a[9]||(a[9]=e("div",{class:"col-md-3 col-sm-12"},[e("h2",null,"Change Password")],-1)),e("div",X,[e("form",{onSubmit:N(m,["prevent"])},[e("div",Z,[e("div",ee,[e("div",se,[a[6]||(a[6]=e("label",null,"Old Password",-1)),d(e("input",{class:M(["form-control",{"is-invalid":i.value.current_password}]),"onUpdate:modelValue":a[0]||(a[0]=y=>o.value.current_password=y),placeholder:"Enter your current password",type:"text",onInput:a[1]||(a[1]=y=>v("current_password"))},null,34),[[c,o.value.current_password]]),i.value.current_password?(w(),b("span",oe,I(i.value.current_password),1)):C("",!0)])]),e("div",te,[e("div",le,[a[7]||(a[7]=e("label",null,"New Password",-1)),d(e("input",{class:M(["form-control",{"is-invalid":i.value.new_password}]),"onUpdate:modelValue":a[2]||(a[2]=y=>o.value.new_password=y),placeholder:"Enter your new password",type:"text",onInput:a[3]||(a[3]=y=>v("new_password"))},null,34),[[c,o.value.new_password]]),i.value.new_password?(w(),b("span",re,I(i.value.new_password),1)):C("",!0)])]),e("div",ne,[e("div",ae,[a[8]||(a[8]=e("label",null,"Confirm New Password",-1)),d(e("input",{class:M(["form-control",{"is-invalid":i.value.password_confirmation}]),"onUpdate:modelValue":a[4]||(a[4]=y=>o.value.password_confirmation=y),placeholder:"Enter your new password again",type:"text",onInput:a[5]||(a[5]=y=>v("password_confirmation"))},null,34),[[c,o.value.password_confirmation]]),i.value.password_confirmation?(w(),b("span",ie,I(i.value.password_confirmation),1)):C("",!0)])])]),e("button",{class:"btn btn-success",disabled:f.value},"Update Password",8,ue)],32)])])]))}},ce={class:"dashboard-content-block"},pe={__name:"DeleteAccount",setup(r){const l=S(),o=G(),i=Y(),v=()=>{o.Warning("Are you sure you want to delete this account?").then(async()=>{try{(await R().deleteAccount()).status===200&&(l.Success("Account successfully deleted!"),H.push({name:"app.register"}))}catch(f){l.Error(f)}}).catch(()=>{i.Info("Request cancelled")})};return(f,n)=>(w(),b("div",ce,[e("div",{class:"row"},[n[0]||(n[0]=e("div",{class:"col-md-3 col-sm-12"},[e("h2",null,"Delete account")],-1)),e("div",{class:"col-md-9 col-sm-12"},[e("div",{class:"row"},[e("div",{class:"col-md-4 col-sm-12"},[e("button",{onClick:v,class:"btn btn-danger"},"Delete My Account")])])])])]))}},me={class:"dashboard-content-block"},fe={class:"row"},ve={class:"col-md-3 col-sm-12"},we=["src"],_e={class:"col-md-9 col-sm-12"},ye={class:"row"},be={class:"col-md-6 col-sm-12"},ge={class:"form-group"},he={class:"col-md-6 col-sm-12"},Pe={class:"form-group"},xe={class:"col-md-6 col-sm-12"},$e={class:"form-group"},Ue={class:"col-md-6 col-sm-12"},Ee={class:"form-group"},ke={class:"col-md-6 col-sm-12"},Ve={class:"form-group"},Se={class:"col-md-6 col-sm-12"},Me={class:"form-group"},Ie={class:"col-md-6 col-sm-12"},Ce={class:"form-group"},Re={class:"col-md-6 col-sm-12"},Te={class:"form-group"},Fe={class:"col-md-6 col-sm-12"},Le={class:"form-group"},Be={class:"col-md-6 col-sm-12"},Ne={class:"form-group"},De={class:"col-md-6 col-sm-12"},Ae={class:"form-group"},Oe={class:"col-md-6 col-sm-12"},qe={class:"form-group"},We={class:"col-md-6 col-sm-12"},Ke={class:"form-group"},je={class:"col-md-6 col-sm-12"},ze={class:"form-group"},He={class:"col-md-12 col-sm-12"},Ge={class:"form-group"},Ye={class:"col-md-12 col-sm-12"},Je={class:"form-group"},Qe={__name:"Information",setup(r){const l=q(),{profile:o,profilePicture:i,loading:v}=B(l),f=S(),n=x({username:"",email:"",first_name:"",last_name:"",public_name:"",title:"",position:"",license:"",mobile:"",whatsapp:"",phone:"",tax_number:"",company_name:"",address:"",service_areas:"",specialties:"",about_me:""}),m=x(""),t=x(null),a=async()=>await l.getProfileInfo(),y=async()=>await l.getProfilePicture(),W=()=>{t.value&&t.value.click()},K=async _=>{const s=_.target.files[0];if(s){const $=new FileReader;$.onload=g=>{m.value=g.target.result},$.readAsDataURL(s);const U=new FormData;U.append("profile_picture",s);try{const g=await l.updateProfilePicture(U);g.status===200&&(f.Success("Profile picture successfully updated!"),m.value=g.data.profile_picture_url)}catch(g){f.Error(g)}}},j=async()=>{try{(await l.updateProfileInfo(n.value)).status===200&&f.Success("Profile successfully updated")}catch(_){f.Error(_)}};return A(()=>{a(),y(),o.value&&(n.value={...o.value}),i.value&&(m.value=i.value)}),T(o,_=>{_&&(n.value={..._})}),T(i,_=>{_&&(m.value=_)}),(_,s)=>{const $=V("el-skeleton-item"),U=V("el-skeleton"),g=V("el-avatar");return w(),b(F,null,[s[33]||(s[33]=e("h2",null,"Information",-1)),e("div",me,[e("div",fe,[e("div",ve,[p(v)?(w(),D(U,{key:0,style:{width:"240px"},animated:""},{template:O(()=>[P($,{variant:"image",style:{width:"240px",height:"240px"}})]),_:1})):(w(),b(F,{key:1},[m.value?(w(),b("img",{key:0,class:"img-fluid",src:m.value,alt:"thumb"},null,8,we)):(w(),D(g,{key:1,shape:"square",size:240,src:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"}))],64)),e("button",{onClick:W,type:"button",class:"btn btn-primary btn-full-width mt-3"}," Update Profile Picture "),e("input",{type:"file",ref_key:"fileInput",ref:t,style:{display:"none"},onChange:K},null,544)]),e("div",_e,[e("form",{onSubmit:N(j,["prevent"])},[e("div",ye,[e("div",be,[e("div",ge,[s[16]||(s[16]=e("label",null,"Email",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=u=>n.value.email=u),placeholder:"Enter your email",type:"text",readonly:""},null,512),[[c,n.value.email]])])]),e("div",he,[e("div",Pe,[s[17]||(s[17]=e("label",null,"Username",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[1]||(s[1]=u=>n.value.username=u),placeholder:"Enter your username",type:"text"},null,512),[[c,n.value.username]])])]),e("div",xe,[e("div",$e,[s[18]||(s[18]=e("label",null,"First Name",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[2]||(s[2]=u=>n.value.first_name=u),placeholder:"Enter your first name",type:"text"},null,512),[[c,n.value.first_name]])])]),e("div",Ue,[e("div",Ee,[s[19]||(s[19]=e("label",null,"Last Name",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[3]||(s[3]=u=>n.value.last_name=u),placeholder:"Enter your last name",type:"text"},null,512),[[c,n.value.last_name]])])]),e("div",ke,[e("div",Ve,[s[20]||(s[20]=e("label",null,"Public Name",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[4]||(s[4]=u=>n.value.public_name=u),placeholder:"Enter your last name",type:"text"},null,512),[[c,n.value.public_name]])])]),e("div",Se,[e("div",Me,[s[21]||(s[21]=e("label",null,"Title",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[5]||(s[5]=u=>n.value.title=u),placeholder:"Enter your title",type:"text"},null,512),[[c,n.value.title]])])]),e("div",Ie,[e("div",Ce,[s[22]||(s[22]=e("label",null,"Position",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[6]||(s[6]=u=>n.value.position=u),placeholder:"Enter your title",type:"text"},null,512),[[c,n.value.position]])])]),e("div",Re,[e("div",Te,[s[23]||(s[23]=e("label",null,"License",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[7]||(s[7]=u=>n.value.license=u),placeholder:"Enter your license",type:"text"},null,512),[[c,n.value.license]])])]),e("div",Fe,[e("div",Le,[s[24]||(s[24]=e("label",null,"Tax Number",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[8]||(s[8]=u=>n.value.tax_number=u),placeholder:"Enter your tax number",type:"text"},null,512),[[c,n.value.tax_number]])])]),e("div",Be,[e("div",Ne,[s[25]||(s[25]=e("label",null,"Mobile",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[9]||(s[9]=u=>n.value.mobile=u),placeholder:"Enter your phone number",type:"text"},null,512),[[c,n.value.mobile]])])]),e("div",De,[e("div",Ae,[s[26]||(s[26]=e("label",null,"Phone",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[10]||(s[10]=u=>n.value.phone=u),placeholder:"Enter your phone number",type:"text"},null,512),[[c,n.value.phone]])])]),e("div",Oe,[e("div",qe,[s[27]||(s[27]=e("label",null,"Whatsapp",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[11]||(s[11]=u=>n.value.whatsapp=u),placeholder:"Enter your phone number",type:"text"},null,512),[[c,n.value.whatsapp]])])]),e("div",We,[e("div",Ke,[s[28]||(s[28]=e("label",null,"Company Name",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[12]||(s[12]=u=>n.value.company_name=u),placeholder:"Enter your company name",type:"text"},null,512),[[c,n.value.company_name]])])]),e("div",je,[e("div",ze,[s[29]||(s[29]=e("label",null,"Service area",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":s[13]||(s[13]=u=>n.value.service_areas=u),placeholder:"Enter your company name",type:"text"},null,512),[[c,n.value.service_areas]])])]),e("div",He,[e("div",Ge,[s[30]||(s[30]=e("label",null,"Address",-1)),d(e("textarea",{class:"form-control","onUpdate:modelValue":s[14]||(s[14]=u=>n.value.address=u),rows:"3",placeholder:"Enter your address"},null,512),[[c,n.value.address]])])]),e("div",Ye,[e("div",Je,[s[31]||(s[31]=e("label",null,"About me",-1)),d(e("textarea",{class:"form-control","onUpdate:modelValue":s[15]||(s[15]=u=>n.value.about_me=u),rows:"6",placeholder:"Enter a description about you"},null,512),[[c,n.value.about_me]])])])]),s[32]||(s[32]=e("button",{class:"btn btn-success",type:"submit"},"Update Profile",-1))],32)])])])],64)}}},Xe={class:"dashboard-content-block"},Ze={class:"row"},es={class:"col-md-9 col-sm-12"},ss={class:"row"},os={class:"col-md-6 col-sm-12"},ts={class:"form-group"},ls={class:"col-md-6 col-sm-12"},rs={class:"form-group"},ns={class:"col-md-6 col-sm-12"},as={class:"form-group"},is={class:"col-md-6 col-sm-12"},us={class:"form-group"},ds={class:"col-md-6 col-sm-12"},cs={class:"form-group"},ps={class:"col-md-6 col-sm-12"},ms={class:"form-group"},fs={class:"col-md-6 col-sm-12"},vs={class:"form-group"},ws={class:"col-md-6 col-sm-12"},_s={class:"form-group"},ys={class:"col-md-6 col-sm-12"},bs={class:"form-group"},gs={class:"col-md-6 col-sm-12"},hs={class:"form-group"},Ps={__name:"SocialMedia",setup(r){const l=q(),{socialMedia:o}=B(l),i=S(),v=x({facebook:"",twitter:"",linkedin:"",instagram:"",google_plus:"",youtube:"",pinterest:"",vimeo:"",skype:"",website:""}),f=async()=>await l.getSocialMedia(),n=async()=>{try{(await l.updateSocialMedia(v.value)).status===200&&i.Success("Social media accounts successfully updated!")}catch(m){i.Error(m)}};return A(()=>{f(),o.value&&(v.value={...o.value})}),T(o,m=>{m&&(v.value=m)}),(m,t)=>(w(),b("div",Xe,[e("div",Ze,[t[21]||(t[21]=e("div",{class:"col-md-3 col-sm-12"},[e("h2",null,"Social Media")],-1)),e("div",es,[e("form",{onSubmit:N(n,["prevent"])},[e("div",ss,[e("div",os,[e("div",ts,[t[10]||(t[10]=e("label",null,"Facebook",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=a=>p(o).facebook=a),placeholder:"Enter the Facebook URL",type:"text"},null,512),[[c,p(o).facebook]])])]),e("div",ls,[e("div",rs,[t[11]||(t[11]=e("label",null,"Twitter",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=a=>p(o).twitter=a),name:"name",placeholder:"Enter the Twitter URL",type:"text"},null,512),[[c,p(o).twitter]])])]),e("div",ns,[e("div",as,[t[12]||(t[12]=e("label",null,"Linkedin",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=a=>p(o).linkedin=a),placeholder:"Enter the Linkedin URL",type:"text"},null,512),[[c,p(o).linkedin]])])]),e("div",is,[e("div",us,[t[13]||(t[13]=e("label",null,"Instagram",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=a=>p(o).instagram=a),placeholder:"Enter the Instagram URL",type:"text"},null,512),[[c,p(o).instagram]])])]),e("div",ds,[e("div",cs,[t[14]||(t[14]=e("label",null,"Google Plus",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=a=>p(o).google_plus=a),placeholder:"Enter the Google Plus URL",type:"text"},null,512),[[c,p(o).google_plus]])])]),e("div",ps,[e("div",ms,[t[15]||(t[15]=e("label",null,"Youtube",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=a=>p(o).youtube=a),placeholder:"Enter the Youtube URL",type:"text"},null,512),[[c,p(o).youtube]])])]),e("div",fs,[e("div",vs,[t[16]||(t[16]=e("label",null,"Pinterest",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[6]||(t[6]=a=>p(o).pinterest=a),placeholder:"Enter the Pinterest URL",type:"text"},null,512),[[c,p(o).pinterest]])])]),e("div",ws,[e("div",_s,[t[17]||(t[17]=e("label",null,"Vimeo",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[7]||(t[7]=a=>p(o).vimeo=a),placeholder:"Enter the Vimeo URL",type:"text"},null,512),[[c,p(o).vimeo]])])]),e("div",ys,[e("div",bs,[t[18]||(t[18]=e("label",null,"Skype",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[8]||(t[8]=a=>p(o).skype=a),placeholder:"Enter your Skupe ID",type:"text"},null,512),[[c,p(o).skype]])])]),e("div",gs,[e("div",hs,[t[19]||(t[19]=e("label",null,"Website",-1)),d(e("input",{class:"form-control","onUpdate:modelValue":t[9]||(t[9]=a=>p(o).website=a),placeholder:"Enter your website URL",type:"text"},null,512),[[c,p(o).website]])])])]),t[20]||(t[20]=e("button",{class:"btn btn-success"},"Update Profile",-1))],32)])])]))}},xs={class:"dashboard-content-wrap"},$s={class:"dashboard-content-inner-wrap"},Us={class:"dashboard-content-block-wrap"},ks={__name:"Index",setup(r){return(l,o)=>{const i=V("DashboardHeader");return w(),b(F,null,[P(i,{heading:"My Profile"},{default:O(()=>o[0]||(o[0]=[e("a",{class:"btn btn-primary",href:"#"},"View Public Profile",-1)])),_:1}),e("section",xs,[e("div",$s,[e("div",Us,[P(Qe),P(Ps),P(de),P(pe)])])])],64)}}};export{ks as default};
