import{x as I,y as k,cv as L,D as B,cw as p,L as C,i as r,l as h,cX as W,h as X,P as D,a2 as U,s as _,r as G,w as z,aV as J,aR as K,N as $,bd as Q,X as Y,O as Z}from"./index-58db23d3.js";function ee(e){return{aspectStyles:h(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const F=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...L()},"v-responsive"),j=B()({name:"VResponsive",props:F(),setup(e,l){let{slots:s}=l;const{aspectStyles:n}=ee(e),{dimensionStyles:c}=p(e);return C(()=>{var a;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(a=s.additional)==null?void 0:a.call(s),s.default&&r("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function te(e,l){if(!W)return;const s=l.modifiers||{},n=l.value,{handler:c,options:a}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(f=e._observe)==null?void 0:f[l.instance.$.uid];if(!o)return;const d=v.some(S=>S.isIntersecting);c&&(!s.quiet||o.init)&&(!s.once||d||o.init)&&c(d,v,g),d&&s.once?x(e,l):o.init=!0},a);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function x(e,l){var n;const s=(n=e._observe)==null?void 0:n[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ne={mounted:te,unmounted:x},re=ne,ae=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,l)=>{let{slots:s}=l;const{transition:n,disabled:c,...a}=e,{component:i=U,...v}=typeof n=="object"?n:{};return X(i,D(typeof n=="string"?{name:c?"":n}:v,a,{disabled:c}),s)},se=I({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...F(),...k(),...ae()},"v-img"),le=B()({name:"VImg",directives:{intersect:re},props:se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:n}=l;const c=_(""),a=G(),i=_(e.eager?"loading":"idle"),v=_(),g=_(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=h(()=>o.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(i.value!=="idle")}),z(d,(t,u)=>{!t&&u&&a.value&&y(a.value)}),J(()=>f());function f(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(i.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,y(u,null)}o.value.src&&K(()=>{var u,m;if(s("loadstart",((u=a.value)==null?void 0:u.currentSrc)||o.value.src),(m=a.value)!=null&&m.complete){if(a.value.naturalWidth||R(),i.value==="error")return;d.value||y(a.value,null),S()}else d.value||y(a.value),P()})}}function S(){var t;P(),i.value="loaded",s("load",((t=a.value)==null?void 0:t.currentSrc)||o.value.src)}function R(){var t;i.value="error",s("error",((t=a.value)==null?void 0:t.currentSrc)||o.value.src)}function P(){const t=a.value;t&&(c.value=t.currentSrc||t.src)}let V=-1;function y(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(V);const{naturalHeight:N,naturalWidth:O}=t;N||O?(v.value=O,g.value=N):!t.complete&&i.value==="loading"&&u!=null?V=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};m()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var m;if(!o.value.src||i.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:S,onError:R},null),u=(m=n.sources)==null?void 0:m.call(n);return r(b,{transition:e.transition,appear:!0},{default:()=>[$(u?r("picture",{class:"v-img__picture"},[u,t]):t,[[Z,i.value==="loaded"]])]})},M=()=>r(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],src:o.value.lazySrc,alt:e.alt},null)]}),q=()=>n.placeholder?r(b,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,A=()=>n.error?r(b,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,H=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=_(!1);{const t=z(d,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return C(()=>{const[t]=j.filterProps(e);return $(r(j,D({class:["v-img",{"v-img--booting":!T.value},e.class],style:e.style},t,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Y,null,[r(E,null,null),r(M,null,null),r(H,null,null),r(q,null,null),r(A,null,null)]),default:n.default}),[[Q("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:a,state:i,naturalWidth:v,naturalHeight:g}}});export{re as I,b as M,le as V,ae as m};
