import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{z as a,k as _,A as S,B as n,l as r,U as m,I as s,q as c,G as v,j as k,e as u,o as T,H as d,F as I}from"./framework.b3e0f3f4.js";const V={};function $(b,l){const o=a("el-scrollbar");return _(),S(o,{height:"400px"},{default:n(()=>[(_(),r(s,null,m(20,e=>c("p",{key:e,class:"scrollbar-demo-item"},v(e),1)),64))]),_:1})}var B=f(V,[["render",$],["__scopeId","data-v-c89b7d76"]]),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const C={},M={class:"scrollbar-flex-content"};function H(b,l){const o=a("el-scrollbar");return _(),S(o,null,{default:n(()=>[c("div",M,[(_(),r(s,null,m(50,e=>c("p",{key:e,class:"scrollbar-demo-item"},v(e),1)),64))])]),_:1})}var O=f(C,[["render",H],["__scopeId","data-v-f324165e"]]),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const R=k({setup(b){const l=u(0),o=u(0),e=u(),g=u();T(()=>{l.value=e.value.clientHeight-380});const y=t=>{g.value.setScrollTop(t)},p=({scrollTop:t})=>{o.value=t},x=t=>`${t} px`;return(t,h)=>{const j=a("el-scrollbar"),z=a("el-slider");return _(),r(s,null,[d(j,{ref_key:"scrollbarRef",ref:g,height:"400px",always:"",onScroll:p},{default:n(()=>[c("div",{ref_key:"innerRef",ref:e},[(_(),r(s,null,m(20,i=>c("p",{key:i,class:"scrollbar-demo-item"},v(i),1)),64))],512)]),_:1},512),d(z,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=i=>o.value=i),max:l.value,"format-tooltip":x,onInput:y},null,8,["modelValue","max"])],64)}}});var U=f(R,[["__scopeId","data-v-3d4733d8"]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const w=I("Add Item"),D=I("Delete Item"),N=k({setup(b){const l=u(3),o=()=>{l.value++},e=()=>{l.value>0&&l.value--};return(g,y)=>{const p=a("el-button"),x=a("el-scrollbar");return _(),r(s,null,[d(p,{onClick:o},{default:n(()=>[w]),_:1}),d(p,{onClick:e},{default:n(()=>[D]),_:1}),d(x,{"max-height":"400px"},{default:n(()=>[(_(!0),r(s,null,m(l.value,t=>(_(),r("p",{key:t,class:"scrollbar-demo-item"},v(t),1))),128))]),_:1})],64)}}});var A=f(N,[["__scopeId","data-v-573bb73b"]]),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});export{E as _,G as a,L as b,J as c};
