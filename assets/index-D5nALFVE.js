import{r as e,a as s,R as t}from"./react-vendor-B4gRMC9K.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var r={exports:{}},a={},i=e,o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function u(e,s,t){var r,a={},i=null,n=null;for(r in void 0!==t&&(i=""+t),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(n=s.ref),s)l.call(s,r)&&!m.hasOwnProperty(r)&&(a[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:n,props:a,_owner:c.current}}a.Fragment=n,a.jsx=u,a.jsxs=u,r.exports=a;var d=r.exports,h={},f=s;h.createRoot=f.createRoot,h.hydrateRoot=f.hydrateRoot;const _="_firstPage_udwo9_1",g="_content_udwo9_29",p="_title_1a5df_1",x="_show_1a5df_9",y=({show:e})=>d.jsx("h1",{className:`${p} ${e?x:""}`,children:"С годовщиной, Леся!"}),w={counter:"_counter_rf9k5_1",show:"_show_rf9k5_9",text:"_text_rf9k5_14",number:"_number_rf9k5_19",year:"_year_rf9k5_24"},v=({number:e,showYear:s,show:t})=>d.jsxs("div",{className:`${w.counter} ${t?w.show:""}`,children:[d.jsx("span",{className:w.text,children:"Мы вместе уже"}),d.jsxs("div",{className:w.counterWrapper,children:[d.jsx("span",{className:w.number,children:e}),d.jsx("span",{className:`${w.year} ${s?w.show:""}`,children:"год"})]})]}),j="_container_1v04x_1",b="_arrow_1v04x_9",N="_show_1v04x_19",k=({show:e,onClick:s})=>d.jsx("div",{className:j,children:d.jsx("div",{className:`${b} ${e?N:""}`,onClick:s,children:"↓"})}),S=({showText:e,showNumber:s,number:t,showYear:r,showArrow:a,onScrollClick:i,pageRef:o})=>d.jsx("div",{ref:o,className:_,children:d.jsxs("div",{className:g,children:[d.jsx(y,{show:e}),d.jsx(v,{show:s,number:t,showYear:r}),d.jsx(k,{show:a,onClick:i})]})}),T={storyBlock:"_storyBlock_1svom_1",content:"_content_1svom_28",title:"_title_1svom_43",show:"_show_1svom_51",items:"_items_1svom_56",item:"_item_1svom_56",text:"_text_1svom_77",imageWrapper:"_imageWrapper_1svom_81"},$=({title:s,items:t,onScrollClick:r,backgroundImage:a,showArrow:i=!0})=>{const[o,n]=e.useState(!1),[l,c]=e.useState(new Array(t.length).fill(!1)),[m,u]=e.useState(!1);return e.useEffect((()=>{const e=setTimeout((()=>{n(!0)}),500),s=t.map(((e,s)=>setTimeout((()=>{c((e=>{const t=[...e];return t[s]=!0,t})),s===t.length-1&&setTimeout((()=>u(!0)),1e3)}),1e3+1500*s)));return()=>{clearTimeout(e),s.forEach((e=>clearTimeout(e)))}}),[t.length]),d.jsx("div",{className:T.storyBlock,style:{"--bg-image":`url(${a})`},children:d.jsxs("div",{className:T.content,children:[d.jsx("h2",{className:`${T.title} ${o?T.show:""}`,children:s}),d.jsx("div",{className:T.items,children:t.map(((e,s)=>d.jsxs("div",{className:`${T.item} ${l[s]?T.show:""}`,children:[d.jsx("p",{className:T.text,children:e.text}),d.jsx("div",{className:T.imageWrapper,children:d.jsxs("picture",{children:[d.jsx("source",{srcSet:e.image.avif,type:"image/avif"}),d.jsx("source",{srcSet:e.image.webp,type:"image/webp"}),d.jsx("img",{src:e.image.jpg,alt:e.text,className:T.image})]})})]},s)))}),i&&r&&d.jsx(k,{show:m,onClick:r})]})})},R={finalPage:"_finalPage_1m1a1_1",content:"_content_1m1a1_28",text:"_text_1m1a1_43",show:"_show_1m1a1_50",gifsContainer:"_gifsContainer_1m1a1_80",gif:"_gif_1m1a1_80"},C="_scrollToTop_r80cw_1",E="_arrow_r80cw_22",I=({onClick:e})=>d.jsx("div",{className:C,onClick:e,children:d.jsx("span",{className:E,children:"↑"})}),L=e.memo((({text:e,show:s,isLast:t})=>d.jsx("h2",{className:`${R.text} ${s?R.show:""} ${t?R.lastText:""}`,children:e}))),O=e.memo((({show:s})=>{const t=e.useRef(null),[r,a]=e.useState(!1);return e.useEffect((()=>{const e=new IntersectionObserver((([e])=>{a(e.isIntersecting)}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),d.jsx("div",{ref:t,className:`${R.gifsContainer} ${s?R.show:""}`,children:r&&d.jsxs(d.Fragment,{children:[d.jsx("img",{src:"/lesyayear/images/kotikleft.gif",alt:"Love gif 1",className:R.gif,loading:"lazy"}),d.jsx("img",{src:"/lesyayear/images/kotikright.gif",alt:"Love gif 2",className:R.gif,loading:"lazy"})]})})})),M=({onScrollToTop:s})=>{const[t,r]=e.useState(new Array(3).fill(!1)),[a,i]=e.useState(!1),[o,n]=e.useState(!1),l=e.useCallback((()=>{s()}),[s]);return e.useEffect((()=>{const e=[0,1,2].map((e=>setTimeout((()=>{r((s=>{const t=[...s];return t[e]=!0,t})),2===e&&setTimeout((()=>{i(!0),setTimeout((()=>{n(!0)}),1e3)}),1e3)}),1e3+1500*e)));return()=>{e.forEach((e=>clearTimeout(e))),n(!1)}}),[]),d.jsxs("div",{className:R.finalPage,children:[d.jsxs("div",{className:R.content,children:[d.jsx(L,{text:"Спасибо тебе за все",show:t[0],isLast:!1}),d.jsx(L,{text:"Надеюсь, мы будем вместе всегда",show:t[1],isLast:!1}),d.jsx(L,{text:"Я очень тебя люблю",show:t[2],isLast:!0}),d.jsx(O,{show:a})]}),o&&d.jsx(I,{onClick:l})]})},P="_heartsContainer_1tkn8_1",D="_heart_1tkn8_1",A=window.innerWidth<768?8:15,W=["❤️","💖","💝","💕","💗","💓","💞","💘"],B=()=>{const[s,t]=e.useState([]),r=e.useRef(),a=e.useRef(!0),i=e.useRef(null);return e.useEffect((()=>{const e=()=>{a.current=!document.hidden,document.hidden&&t([])};return document.addEventListener("visibilitychange",e),r.current=window.setInterval((()=>{if(!a.current||!i.current)return;const e=i.current.offsetHeight,s={id:Date.now(),emoji:W[Math.floor(Math.random()*W.length)],left:100*Math.random(),animationDuration:window.innerWidth<768?4+2*Math.random():6+3*Math.random(),delay:2*Math.random(),bottom:e};t((e=>{const t=[...e,s];return t.length>A?t.slice(-A):t}))}),window.innerWidth<768?800:500),()=>{r.current&&window.clearInterval(r.current),document.removeEventListener("visibilitychange",e)}}),[]),d.jsx("div",{ref:i,className:P,children:s.map((e=>d.jsx("div",{className:D,style:{left:`${e.left}%`,bottom:`${e.bottom}px`,animationDuration:`${e.animationDuration}s`,animationDelay:`${e.delay}s`,willChange:"transform"},children:e.emoji},e.id)))})},Y="_transition_1htpj_1",F="_animate_1htpj_21",V="_heart_1htpj_26",z=({onTransitionEnd:s,onScrollStart:t,isVisible:r})=>{const[a,i]=e.useState(!0);return e.useEffect((()=>{const e=setTimeout((()=>{t()}),200),r=setTimeout((()=>{i(!1),s()}),800);return()=>{clearTimeout(e),clearTimeout(r)}}),[s,t]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:`${Y} ${a?F:""}`,children:d.jsx("div",{className:V,children:"❤️"})}),d.jsx("div",{style:{visibility:r?"visible":"hidden"}})]})},U="_container_1x3kp_1",q="_section_1x3kp_7",H=[{text:"Познакомиться и полюбить друг друга",image:{avif:"/lesyayear/images/us/meet.avif",webp:"/lesyayear/images/us/meet.webp",jpg:"/lesyayear/images/us/meet.jpg"}},{text:"Пройти через многие трудности",image:{avif:"/lesyayear/images/us/memories.avif",webp:"/lesyayear/images/us/memories.webp",jpg:"/lesyayear/images/us/memories.jpg"}}],K=[{text:"Впервые побывали в столице",image:{avif:"/lesyayear/images/us/travel.avif",webp:"/lesyayear/images/us/travel.webp",jpg:"/lesyayear/images/us/travel.jpg"}},{text:"Почувствовали морской бриз",image:{avif:"/lesyayear/images/us/support.avif",webp:"/lesyayear/images/us/support.webp",jpg:"/lesyayear/images/us/support.jpg"}}],G=[{text:"Это замечательное лето вместе",image:{avif:"/lesyayear/images/us/summer.avif",webp:"/lesyayear/images/us/summer.webp",jpg:"/lesyayear/images/us/summer.jpg"}},{text:"И с каждым днем ты становишься все прекраснее",image:{avif:"/lesyayear/images/us/computer.avif",webp:"/lesyayear/images/us/computer.webp",jpg:"/lesyayear/images/us/computer.jpg"}}];function J(){const[s,t]=e.useState(!1),[r,a]=e.useState(!1),[i,o]=e.useState(0),[n,l]=e.useState(!1),[c,m]=e.useState(!1),[u,h]=e.useState(!1),[f,_]=e.useState(!1),[g,p]=e.useState(!1),[x,y]=e.useState(!1),[w,v]=e.useState(!1),[j,b]=e.useState(!1),[N,k]=e.useState(!1),T=e.useRef(null),R=e.useRef(null),C=e.useRef(null),E=e.useRef(null),I=e.useRef(null);e.useEffect((()=>{if(j)return void b(!1);const e=setTimeout((()=>{t(!0)}),1e3),s=setTimeout((()=>{a(!0)}),2e3);let i,n;const c=Array.from({length:50},(()=>Math.floor(99*Math.random())+1));let u=0;r&&(n=Date.now(),i=window.setInterval((()=>{const e=Date.now()-n;if(Math.min(e/2500,1)>=1)return window.clearInterval(i),o(1),void setTimeout((()=>{l(!0)}),500);o(c[u]),u=(u+1)%c.length}),100));const d=setTimeout((()=>{m(!0)}),4500);return()=>{clearTimeout(e),clearTimeout(s),clearTimeout(d),window.clearInterval(i)}}),[r,j]),e.useEffect((()=>{document.body.style.overflow="auto"}),[]);const L=(e,s)=>{v(!0),s(!0),setTimeout((()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})}),500)};return d.jsxs("div",{className:U,children:[d.jsx(B,{}),w&&d.jsx(z,{onTransitionEnd:()=>{v(!1),k(!1)},onScrollStart:()=>{k(!0)},isVisible:N}),d.jsx("div",{className:q,ref:T,children:d.jsx(S,{showText:s,showNumber:r,number:i,showYear:n,showArrow:c,onScrollClick:()=>{L(R,h)},pageRef:T})}),u&&d.jsx("div",{className:q,ref:R,children:d.jsx($,{title:"За это время мы смогли ...",items:H,onScrollClick:()=>{L(C,_)},backgroundImage:"/lesyayear/images/back/page2.jpg"})}),f&&d.jsx("div",{className:q,ref:C,children:d.jsx($,{title:"А также мы ...",items:K,onScrollClick:()=>{L(E,p)},backgroundImage:"/lesyayear/images/back/page3.jpg"})}),g&&d.jsx("div",{className:q,ref:E,children:d.jsx($,{title:"Мы провели ...",items:G,onScrollClick:()=>{L(I,y)},backgroundImage:"/lesyayear/images/back/page4.jpg"})}),x&&d.jsx("div",{className:q,ref:I,children:d.jsx(M,{onScrollToTop:()=>{v(!0),b(!0),T.current&&T.current.scrollIntoView({behavior:"smooth"}),h(!1),_(!1),p(!1),y(!1),t(!1),a(!1),o(0),l(!1),m(!1)}})})]})}h.createRoot(document.getElementById("root")).render(d.jsx(t.StrictMode,{children:d.jsx(J,{})}));
//# sourceMappingURL=index-D5nALFVE.js.map
