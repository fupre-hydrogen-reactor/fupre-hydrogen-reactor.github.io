import{D as y,y as f,ca as G,L as b,i as n,x as h,I as u,ch as P,bZ as g,cg as H,cw as K,ci as O,c4 as W,z as X,cW as Z,A as $,ck as j,B as J,C as Q,cc as U,cm as Y,cd as ee,cn as ae,co as te,cp as ne,cx as de,cq as ie,c5 as se,K as le,cX as ce,G as re,ct as ue,l as I,N as ve,bd as oe,c6 as me,cu as ke}from"./index-3a13dc69.js";import{c as p,V}from"./VAvatar-2f0ca1c4.js";import{V as ge}from"./VImg-f6996de8.js";const ye=y()({name:"VCardActions",props:f(),setup(e,i){let{slots:t}=i;return G({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=p("v-card-subtitle"),be=p("v-card-title"),pe=h({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...f(),...P()},"v-card-item"),Ce=y()({name:"VCardItem",props:pe(),setup(e,i){let{slots:t}=i;return b(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=p("v-card-text"),Ie=h({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...H(),...f(),...P(),...K(),...O(),...W(),...X(),...Z(),...$(),...j(),...J(),...Q(),...U({variant:"elevated"})},"v-card"),Se=y()({name:"VCard",directives:{Ripple:Y},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=ee(e),{borderClasses:s}=ae(e),{colorClasses:o,colorStyles:m,variantClasses:k}=te(e),{densityClasses:l}=ne(e),{dimensionStyles:d}=de(e),{elevationClasses:S}=ie(e),{loaderClasses:x}=se(e),{locationStyles:B}=le(e),{positionClasses:D}=ce(e),{roundedClasses:L}=re(e),c=ue(e,t),T=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const _=T.value?"a":e.tag,R=!!(a.title||e.title),w=!!(a.subtitle||e.subtitle),E=R||w,F=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),q=E||M||F,z=!!(a.text||e.text);return ve(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,D.value,L.value,k.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[N&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(Ae,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ye,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[oe("ripple"),r.value&&e.ripple]])}),{}}});export{Ae as V,Se as a,Ce as b,be as c,fe as d,ye as e};
