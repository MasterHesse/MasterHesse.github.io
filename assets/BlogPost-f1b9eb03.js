import{_ as b,r as _,o as f,m,a as n,c as r,b as o,t as c,F as w,d as k,j as v,k as x,f as y,g as B,u as C,q as E}from"./index-b1a744d4.js";const F={class:"blog-post-wrapper"},N={key:0,class:"blog-post"},R={class:"blog-post__header"},V={class:"blog-post__title"},j={class:"blog-post__meta"},L={class:"blog-post__tags"},M={class:"blog-post__category"},T=["innerHTML"],D={class:"blog-post__footer"},H={__name:"BlogPost",setup(P){const d=C(),t=_(null),l=_(""),i=()=>{window.location.href="/blog"},g=async()=>{try{const e=await fetch("/blogs/index.json");if(!e.ok)throw new Error("Failed to fetch blog index");const s=(await e.json()).blogs.find(h=>h.id===d.params.id);if(!s)throw new Error("Blog not found");t.value=s;const a=await fetch(s.path);if(!a.ok)throw new Error("Failed to fetch blog content");const u=await a.text();l.value=E(u)}catch(e){console.error("Error loading blog:",e)}};return f(()=>{g()}),(e,p)=>{const s=m("router-link");return n(),r("div",F,[t.value?(n(),r("article",N,[o("header",R,[o("h1",V,c(t.value.title),1),o("div",j,[o("div",L,[o("span",M,c(t.value.category),1),(n(!0),r(w,null,k(t.value.tags,a=>(n(),r("span",{key:a,class:"blog-post__tag"},c(a),1))),128))])])]),o("div",{class:"blog-post__content markdown-body",innerHTML:l.value},null,8,T),o("footer",D,[v(s,{to:"/blog",class:"blog-post__back",onClick:i},{default:x(()=>[y(" 返回列表 ")]),_:1})])])):B("",!0)])}}},I=b(H,[["__scopeId","data-v-e830ab04"]]);export{I as default};
