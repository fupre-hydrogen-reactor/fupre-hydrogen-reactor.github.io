import{r as m,d as x,o as V,c as b,i as e,f as t,a as o,j as a,p as i,bQ as w,bS as y}from"./index-58db23d3.js";import{_ as h}from"./AuthProvider-7694bb7d.js";import{l as g}from"./logo-f6354108.js";import{a as v,b as C,c as k,V as c}from"./VCard-d9ec88ee.js";import{a as H,V as u}from"./VTextField-efca467c.js";import{V as T,a as r}from"./VRow-33bb0638.js";import{V as f}from"./VDivider-76c45f1a.js";import"./VAvatar-48436b3b.js";import"./VImg-17da45e7.js";import"./forwardRefs-a29b5f65.js";import"./index-14673602.js";import"./easing-9f15041e.js";const j={class:"auth-wrapper d-flex align-center justify-center pa-4 fedww"},L={class:"d-flex"},P=["innerHTML"],B=o("h5",{class:"text-h5 mb-1"}," Welcome to Hydro-Pad! 👋🏻 ",-1),N=o("p",{class:"mb-0"}," Please sign-in to access Hydro-pad Hydrogen reactor console ",-1),$={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},F=o("span",null,"New on our platform?",-1),M=o("span",{class:"mx-4"},"or",-1),K={__name:"login",setup(R){const n=m({email:"",password:"",remember:!1}),d=m(!1);return(_,s)=>{const p=x("RouterLink");return V(),b("div",j,[e(v,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(C,{class:"justify-center"},{prepend:t(()=>[o("div",L,[o("div",{class:"d-flex text-primary",innerHTML:a(g)},null,8,P)])]),default:t(()=>[e(k,{class:"text-2xl font-weight-bold"},{default:t(()=>[i(" Hydro-pad ")]),_:1})]),_:1}),e(c,{class:"pt-2"},{default:t(()=>[B,N]),_:1}),e(c,null,{default:t(()=>[e(H,{onSubmit:s[3]||(s[3]=w(l=>_.$router.push("/"),["prevent"]))},{default:t(()=>[e(T,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(u,{modelValue:a(n).email,"onUpdate:modelValue":s[0]||(s[0]=l=>a(n).email=l),autofocus:"",placeholder:"johndoe@email.com",label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(u,{modelValue:a(n).password,"onUpdate:modelValue":s[1]||(s[1]=l=>a(n).password=l),label:"Password",placeholder:"············",type:a(d)?"text":"password","append-inner-icon":a(d)?"bx-hide":"bx-show","onClick:appendInner":s[2]||(s[2]=l=>d.value=!a(d))},null,8,["modelValue","type","append-inner-icon"]),o("div",$,[e(p,{to:"#",class:"text-primary ms-2 mb-1"},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(y,{block:"",type:"submit"},{default:t(()=>[i(" Login ")]),_:1})]),_:1}),e(r,{cols:"12",class:"text-center text-base"},{default:t(()=>[F,e(p,{class:"text-primary ms-2",to:"/register"},{default:t(()=>[i(" Create an account ")]),_:1})]),_:1}),e(r,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(f),M,e(f)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:t(()=>[e(h)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{K as default};
