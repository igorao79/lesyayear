import{r as e,a as s,R as t}from"./react-vendor-B4gRMC9K.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var a={exports:{}},r={},i=e,n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function u(e,s,t){var a,r={},i=null,o=null;for(a in void 0!==t&&(i=""+t),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)l.call(s,a)&&!m.hasOwnProperty(a)&&(r[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:o,props:r,_owner:c.current}}r.Fragment=o,r.jsx=u,r.jsxs=u,a.exports=r;var d=a.exports,g={},f=s;g.createRoot=f.createRoot,g.hydrateRoot=f.hydrateRoot;const p="_firstPage_1nign_1",h="_content_1nign_11",_="_title_p3phn_1",y="_show_p3phn_9",w=({show:e})=>d.jsx("h1",{className:`${_} ${e?y:""}`,children:"С годовщиной, Леся!"}),x={counter:"_counter_10wsh_1",show:"_show_10wsh_9",text:"_text_10wsh_14",number:"_number_10wsh_19",year:"_year_10wsh_24"},v=({number:e,showYear:s,show:t})=>d.jsxs("div",{className:`${x.counter} ${t?x.show:""}`,children:[d.jsx("span",{className:x.text,children:"Мы вместе уже"}),d.jsxs("div",{className:x.counterWrapper,children:[d.jsx("span",{className:x.number,children:e}),d.jsx("span",{className:`${x.year} ${s?x.show:""}`,children:"год"})]})]}),j="_container_w72pv_1",b="_arrow_w72pv_9",k="_show_w72pv_19",S=({show:e,onClick:s})=>d.jsx("div",{className:j,children:d.jsx("div",{className:`${b} ${e?k:""}`,onClick:s,children:"↓"})}),N="_background_3mob2_1",T="_loaded_3mob2_12",$="_overlay_3mob2_16",E=({image:s})=>{const[t,a]=e.useState(!1),[r,i]=e.useState("");return e.useEffect((()=>{(async()=>{try{await fetch(s.avif,{method:"HEAD"}),i(s.avif)}catch{try{await fetch(s.webp,{method:"HEAD"}),i(s.webp)}catch{i(s.jpg)}}})()}),[s]),e.useEffect((()=>{if(r){const e=new Image;e.onload=()=>a(!0),e.src=r}}),[r]),d.jsxs(d.Fragment,{children:[r&&d.jsx("img",{src:r,className:`${N} ${t?T:""}`,alt:""}),d.jsx("div",{className:$})]})},C=({showText:e,showNumber:s,number:t,showYear:a,showArrow:r,onScrollClick:i,pageRef:n})=>d.jsxs("div",{ref:n,className:p,children:[d.jsx(E,{image:{avif:"/lesyayear/images/back/page1.avif",webp:"/lesyayear/images/back/page1.webp",jpg:"/lesyayear/images/back/page1.jpg"}}),d.jsxs("div",{className:h,children:[d.jsx(w,{show:e}),d.jsx(v,{show:s,number:t,showYear:a}),d.jsx(S,{show:r,onClick:i})]})]}),R={storyBlock:"_storyBlock_d64p0_1",content:"_content_d64p0_13",title:"_title_d64p0_28",show:"_show_d64p0_37",items:"_items_d64p0_42",item:"_item_d64p0_42",text:"_text_d64p0_68",imageWrapper:"_imageWrapper_d64p0_75"},I=({title:s,items:t,onScrollClick:a,backgroundImage:r,showArrow:i=!0,startAnimation:n=!1})=>{const[o,l]=e.useState(!1),[c,m]=e.useState(new Array(t.length).fill(!1)),[u,g]=e.useState(!1);return e.useEffect((()=>{if(!n)return l(!1),m(new Array(t.length).fill(!1)),void g(!1);const e=setTimeout((()=>{l(!0)}),500),s=t.map(((e,s)=>setTimeout((()=>{m((e=>{const t=[...e];return t[s]=!0,t})),s===t.length-1&&setTimeout((()=>g(!0)),1e3)}),1e3+1500*s)));return()=>{clearTimeout(e),s.forEach((e=>clearTimeout(e)))}}),[t.length,n]),d.jsxs("div",{className:R.storyBlock,children:[d.jsx(E,{image:r}),d.jsxs("div",{className:R.content,children:[d.jsx("h2",{className:`${R.title} ${o?R.show:""}`,children:s}),d.jsx("div",{className:R.items,children:t.map(((e,s)=>d.jsxs("div",{className:`${R.item} ${c[s]?R.show:""}`,children:[d.jsx("p",{className:R.text,children:e.text}),d.jsx("div",{className:R.imageWrapper,children:d.jsxs("picture",{children:[d.jsx("source",{srcSet:e.image.avif,type:"image/avif"}),d.jsx("source",{srcSet:e.image.webp,type:"image/webp"}),d.jsx("img",{src:e.image.jpg,alt:e.text,className:R.image})]})})]},s)))}),i&&a&&d.jsx(S,{show:u,onClick:a})]})]})},L={finalPage:"_finalPage_1tni7_1",content:"_content_1tni7_13",text:"_text_1tni7_28",show:"_show_1tni7_35",gifsContainer:"_gifsContainer_1tni7_65",gif:"_gif_1tni7_65",visible:"_visible_1tni7_91"},A="_scrollToTop_r80cw_1",M="_arrow_r80cw_22",O=({onClick:e})=>d.jsx("div",{className:A,onClick:e,children:d.jsx("span",{className:M,children:"↑"})}),P=e.memo((({text:e,show:s,isLast:t})=>d.jsx("h2",{className:`${L.text} ${s?L.show:""} ${t?L.lastText:""}`,children:e}))),D=e.memo((({show:s})=>{const t=e.useRef(null),[a,r]=e.useState(!1);return e.useEffect((()=>{["/lesyayear/images/kotikleft.gif","/lesyayear/images/kotikright.gif"].forEach((e=>{(new Image).src=e}))}),[]),e.useEffect((()=>{const e=new IntersectionObserver((([e])=>{r(e.isIntersecting)}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),d.jsxs("div",{ref:t,className:`${L.gifsContainer} ${s?L.show:""}`,children:[d.jsx("img",{src:"/lesyayear/images/kotikleft.gif",alt:"Love gif 1",className:`${L.gif} ${a?L.visible:""}`}),d.jsx("img",{src:"/lesyayear/images/kotikright.gif",alt:"Love gif 2",className:`${L.gif} ${a?L.visible:""}`})]})})),W=({onScrollToTop:s})=>{const[t,a]=e.useState(new Array(3).fill(!1)),[r,i]=e.useState(!1),[n,o]=e.useState(!1),l=e.useCallback((()=>{s()}),[s]);return e.useEffect((()=>{const e=[0,1,2].map((e=>setTimeout((()=>{a((s=>{const t=[...s];return t[e]=!0,t})),2===e&&setTimeout((()=>{i(!0),setTimeout((()=>{o(!0)}),1e3)}),1e3)}),1e3+1500*e)));return()=>{e.forEach((e=>clearTimeout(e))),o(!1)}}),[]),d.jsxs("div",{className:L.finalPage,children:[d.jsx(E,{image:{avif:"/lesyayear/images/back/finalpage.avif",webp:"/lesyayear/images/back/finalpage.webp",jpg:"/lesyayear/images/back/finalpage.jpg"}}),d.jsxs("div",{className:L.content,children:[d.jsx(P,{text:"Спасибо тебе за все",show:t[0],isLast:!1}),d.jsx(P,{text:"Надеюсь, мы будем вместе всегда",show:t[1],isLast:!1}),d.jsx(P,{text:"Я очень тебя люблю",show:t[2],isLast:!0}),d.jsx(D,{show:r})]}),n&&d.jsx(O,{onClick:l})]})},B="_heartsContainer_1bt5j_1",H="_heart_1bt5j_1",Y=window.innerWidth<768?8:15,F=["❤️","💖","💝","💕","💗","💓","💞","💘"],V=()=>{const s=e.useRef(null),t=e.useRef(new Set),a=e.useRef(0),r=e.useRef(!0);return e.useEffect((()=>{if(!s.current)return;const e=()=>{r.current=!document.hidden,document.hidden&&s.current&&(s.current.innerHTML="",t.current.clear())};document.addEventListener("visibilitychange",e);const i=setInterval((()=>{if(!r.current||!s.current)return;const e=a.current++;t.current.add(e);const i=s.current.offsetHeight,n=document.createElement("div");n.className=H,n.dataset.id=e.toString();const o=F[Math.floor(Math.random()*F.length)],l=100*Math.random(),c=window.innerWidth<768?4+2*Math.random():6+3*Math.random(),m=2*Math.random();if(n.style.left=`${l}%`,n.style.bottom=`${i}px`,n.style.animationDuration=`${c}s`,n.style.animationDelay=`${m}s`,n.style.willChange="transform",n.textContent=o,n.addEventListener("animationend",(()=>{n.remove(),t.current.delete(e)})),s.current.appendChild(n),t.current.size>Y){const e=Array.from(t.current)[0],a=s.current.querySelector(`[data-id="${e}"]`);a?.remove(),t.current.delete(e)}}),window.innerWidth<768?800:500);return()=>{clearInterval(i),document.removeEventListener("visibilitychange",e),s.current&&(s.current.innerHTML=""),t.current.clear()}}),[]),d.jsx("div",{ref:s,className:B})},q="_transition_13jlx_1",U="_animate_13jlx_22",z="_up_13jlx_27",K="_heart_13jlx_35",G=({onTransitionEnd:s,onScrollStart:t,isVisible:a,direction:r="down"})=>{const[i,n]=e.useState(!0);return e.useEffect((()=>{const e=setTimeout((()=>{t()}),400),a=setTimeout((()=>{n(!1),s()}),800);return()=>{clearTimeout(e),clearTimeout(a)}}),[s,t]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:`${q} ${i?U:""} ${"up"===r?z:""}`,children:d.jsx("div",{className:K,children:"❤️"})}),d.jsx("div",{style:{visibility:a?"visible":"hidden"}})]})},J="_container_1x3kp_1",Q="_section_1x3kp_7",X=[{text:"Познакомиться и полюбить друг друга",image:{avif:"/lesyayear/images/us/meet.avif",webp:"/lesyayear/images/us/meet.webp",jpg:"/lesyayear/images/us/meet.jpg"}},{text:"Пройти через многие трудности",image:{avif:"/lesyayear/images/us/memories.avif",webp:"/lesyayear/images/us/memories.webp",jpg:"/lesyayear/images/us/memories.jpg"}}],Z=[{text:"Впервые побывали в столице",image:{avif:"/lesyayear/images/us/travel.avif",webp:"/lesyayear/images/us/travel.webp",jpg:"/lesyayear/images/us/travel.jpg"}},{text:"Почувствовали морской бриз",image:{avif:"/lesyayear/images/us/support.avif",webp:"/lesyayear/images/us/support.webp",jpg:"/lesyayear/images/us/support.jpg"}}],ee=[{text:"Это замечательное лето вместе",image:{avif:"/lesyayear/images/us/summer.avif",webp:"/lesyayear/images/us/summer.webp",jpg:"/lesyayear/images/us/summer.jpg"}},{text:"И с каждым днем ты становишься все прекраснее",image:{avif:"/lesyayear/images/us/computer.avif",webp:"/lesyayear/images/us/computer.webp",jpg:"/lesyayear/images/us/computer.jpg"}}];function se(){const[s,t]=e.useState(!1),[a,r]=e.useState(!1),[i,n]=e.useState(0),[o,l]=e.useState(!1),[c,m]=e.useState(!1),[u,g]=e.useState(!1),[f,p]=e.useState(!1),[h,_]=e.useState(!1),[y,w]=e.useState(!1),[x,v]=e.useState(!1),[j,b]=e.useState(!1),[k,S]=e.useState(!1),[N,T]=e.useState(!1),[$,E]=e.useState(!1),[R,L]=e.useState(!1),A=e.useRef(null),M=e.useRef(null),O=e.useRef(null),P=e.useRef(null),D=e.useRef(null);e.useEffect((()=>{if(j)return void b(!1);const e=setTimeout((()=>{t(!0)}),1e3),s=setTimeout((()=>{r(!0)}),2e3);let i,o;const c=Array.from({length:50},(()=>Math.floor(99*Math.random())+1));let u=0;a&&(o=Date.now(),i=window.setInterval((()=>{const e=Date.now()-o;if(Math.min(e/2500,1)>=1)return window.clearInterval(i),n(1),void setTimeout((()=>{l(!0)}),500);n(c[u]),u=(u+1)%c.length}),100));const d=setTimeout((()=>{m(!0)}),4500);return()=>{clearTimeout(e),clearTimeout(s),clearTimeout(d),window.clearInterval(i)}}),[a,j]),e.useEffect((()=>{document.body.style.overflow="auto"}),[]);const B=(e,s)=>{v(!0),s(!0),T(!1),E(!1),L(!1),setTimeout((()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})}),500)};return d.jsxs("div",{className:J,children:[d.jsx(V,{}),x&&d.jsx(G,{onTransitionEnd:()=>{v(!1),S(!1),u&&T(!0),f&&E(!0),h&&L(!0)},onScrollStart:()=>{S(!0)},isVisible:k,direction:y?"up":"down"}),d.jsx("div",{className:Q,ref:A,children:d.jsx(C,{showText:s,showNumber:a,number:i,showYear:o,showArrow:c,onScrollClick:()=>{B(M,g)},pageRef:A})}),u&&d.jsx("div",{className:Q,ref:M,children:d.jsx(I,{title:"За это время мы смогли ...",items:X,onScrollClick:()=>{B(O,p)},backgroundImage:{avif:"/lesyayear/images/back/page2.avif",webp:"/lesyayear/images/back/page2.webp",jpg:"/lesyayear/images/back/page2.jpg"},startAnimation:N})}),f&&d.jsx("div",{className:Q,ref:O,children:d.jsx(I,{title:"А также мы ...",items:Z,onScrollClick:()=>{B(P,_)},backgroundImage:{avif:"/lesyayear/images/back/page3.avif",webp:"/lesyayear/images/back/page3.webp",jpg:"/lesyayear/images/back/page3.jpg"},startAnimation:$})}),h&&d.jsx("div",{className:Q,ref:P,children:d.jsx(I,{title:"Мы провели ...",items:ee,onScrollClick:()=>{B(D,w)},backgroundImage:{avif:"/lesyayear/images/back/page4.avif",webp:"/lesyayear/images/back/page4.webp",jpg:"/lesyayear/images/back/page4.jpg"},startAnimation:R})}),y&&d.jsx("div",{className:Q,ref:D,children:d.jsx(W,{onScrollToTop:()=>{g(!1),p(!1),_(!1),w(!1),t(!1),r(!1),n(0),l(!1),m(!1),T(!1),E(!1),L(!1),v(!0),S(!0),setTimeout((()=>{A.current&&A.current.scrollIntoView({behavior:"smooth"})}),500)}})})]})}g.createRoot(document.getElementById("root")).render(d.jsx(t.StrictMode,{children:d.jsx(se,{})}));
//# sourceMappingURL=index-Nx3fDWp4.js.map
