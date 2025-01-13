import{_ as v,r,a as d,c as u,b as t,i as l,v as _,t as p,n as k,g as y,p as f,e as h,j as x,m as w}from"./index-e0b9387d.js";const i=s=>(f("data-v-821b349e"),s=s(),h(),s),C={class:"contact-form__group"},S=i(()=>t("label",{for:"name",class:"contact-form__label"},"姓名",-1)),V={class:"contact-form__group"},$=i(()=>t("label",{for:"email",class:"contact-form__label"},"邮箱",-1)),j={class:"contact-form__group"},B=i(()=>t("label",{for:"subject",class:"contact-form__label"},"主题",-1)),I={class:"contact-form__group"},M=i(()=>t("label",{for:"message",class:"contact-form__label"},"内容",-1)),z={class:"contact-form__footer"},H=["disabled"],N={__name:"ContactForm",setup(s){const a=r({name:"",email:"",subject:"",message:""}),o=r(""),n=r(!1),g=async m=>{m.preventDefault(),n.value=!0;try{if((await fetch("https://formspree.io/f/mvggdwkp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)})).ok)o.value="success",a.value={name:"",email:"",subject:"",message:""};else throw new Error("Failed to send message")}catch(e){o.value="error",console.error("Error sending message:",e)}finally{n.value=!1,setTimeout(()=>{o.value=""},5e3)}};return(m,e)=>(d(),u("form",{onSubmit:g,class:"contact-form"},[t("div",C,[S,l(t("input",{id:"name",type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>a.value.name=c),required:"",class:"contact-form__input",placeholder:"请输入你的姓名"},null,512),[[_,a.value.name]])]),t("div",V,[$,l(t("input",{id:"email",type:"email","onUpdate:modelValue":e[1]||(e[1]=c=>a.value.email=c),required:"",class:"contact-form__input",placeholder:"请输入你的邮箱"},null,512),[[_,a.value.email]])]),t("div",j,[B,l(t("input",{id:"subject",type:"text","onUpdate:modelValue":e[2]||(e[2]=c=>a.value.subject=c),required:"",class:"contact-form__input",placeholder:"请输入主题"},null,512),[[_,a.value.subject]])]),t("div",I,[M,l(t("textarea",{id:"message","onUpdate:modelValue":e[3]||(e[3]=c=>a.value.message=c),required:"",class:"contact-form__input contact-form__textarea",placeholder:"请输入你想说的话",rows:"5"},null,512),[[_,a.value.message]])]),t("div",z,[t("button",{type:"submit",class:"contact-form__submit-btn",disabled:n.value},p(n.value?"发送中...":"发送消息"),9,H),o.value?(d(),u("p",{key:0,class:k(["contact-form__status",`contact-form__status--${o.value}`])},p(o.value==="success"?"消息已发送！":"发送失败，请重试。"),3)):y("",!0)])],32))}},q=v(N,[["__scopeId","data-v-821b349e"]]);const b=s=>(f("data-v-823308d5"),s=s(),h(),s),D={class:"contact"},F={class:"contact__container"},T=b(()=>t("header",{class:"contact__header"},[t("h1",{class:"contact__title"},"联系我"),t("p",{class:"contact__subtitle"}," 有任何问题或建议？欢迎随时联系我 ")],-1)),U={class:"contact__content"},A=w('<section class="contact__info" data-v-823308d5><h2 class="contact__info-title" data-v-823308d5>联系方式</h2><ul class="contact__links" data-v-823308d5><li class="contact__link-item" data-v-823308d5><a href="https://space.bilibili.com/407512807" target="_blank" rel="noopener noreferrer" class="contact__link" data-v-823308d5><svg class="contact__link-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" data-v-823308d5><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" data-v-823308d5></path></svg><span data-v-823308d5>Bilibili</span></a></li><li class="contact__link-item" data-v-823308d5><a href="mailto:mackenzieyip@outlook.com" class="contact__link" data-v-823308d5><svg class="contact__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-823308d5><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m20 0l-10 7L2 6m20 0v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6" data-v-823308d5></path></svg><span data-v-823308d5>Outlook email</span></a></li><li class="contact__link-item" data-v-823308d5><a href="https://github.com/masterhesse" target="_blank" rel="noopener noreferrer" class="contact__link" data-v-823308d5><svg class="contact__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-823308d5><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-823308d5></path></svg><span data-v-823308d5>GitHub</span></a></li></ul></section>',1),E={class:"contact__form-section"},L=b(()=>t("h2",{class:"contact__form-title"},"发送消息",-1)),O={__name:"Contact",setup(s){return(a,o)=>(d(),u("main",D,[t("div",F,[T,t("div",U,[A,t("section",E,[L,x(q)])])])]))}},J=v(O,[["__scopeId","data-v-823308d5"]]);export{J as default};
