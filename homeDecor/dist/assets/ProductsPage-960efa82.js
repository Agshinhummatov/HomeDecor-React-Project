import{j as e,R as q,d as E,v as W,r as u,n as Z,c as H,u as U,h as G}from"./index-71d35b4f.js";import{H as K}from"./index-97dff1c3.js";import{P as Q}from"./index-59fbb83e.js";import{S as O}from"./index-5d3cc970.js";import{S as Y}from"./index-470fd617.js";import{u as M}from"./useSetPageTitle-2544d0c9.js";const D="_aside_1aym8_1",J={aside:D},V=({children:h})=>e.jsx("aside",{className:J.aside,children:h}),X="_filters__item_10nzh_1",T="_filters__title_10nzh_25",ee="_filters_10nzh_1",te="_expanded_10nzh_67",se="_product_10nzh_111",j={"filters__item--label":"_filters__item--label_10nzh_1",filters__item:X,filters__title:T,"filters__title--arrow":"_filters__title--arrow_10nzh_41",filters:ee,expanded:te,product:se},oe=q.memo(function({options:f,onFilterClick:p,filterType:r,removeFilterClick:c,setFilters:g,filterItems:l,title:C,titleAz:a,titleRu:P,lang:m}){const B=E(),L={all:!0,...f.reduce((t,{title:i})=>(t[i]=!1,t),{})},z=W();u.useEffect(()=>{const t=new URLSearchParams(z.search);if(t.get("categoryIds"),t.get("collectionIds"),r==="category"&&l.length===0){t.delete("categoryIds");const i=`${z.pathname}?${t.toString()}`;B(`${i}`,{replace:!0})}else if(r==="collections"&&l.length===0){t.delete("collectionIds");const i=`${z.pathname}?${t.toString()}`;B(`${i}`,{replace:!0})}},[l]);const[y,w]=u.useState(!1),[x,d]=u.useState(L),R=`all-${r}`,$=t=>{if(t==="all"){const i={...x};i.all=!i.all;for(const _ in i)_!=="all"&&(i[_]=!1);d(i)}else d(i=>({...i,all:!1,[t]:!i[t]}))};return e.jsxs("div",{className:j["filters "],children:[e.jsxs("p",{onClick:()=>w(!y),className:j.filters__title,children:[m==="Az"?a:m==="Ru"?P:C,e.jsx("span",{style:{transform:y?"rotate(180deg)":""},className:j["filters__title--arrow"],children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M22 8L12 18L2 8L3.775 6.225L12 14.45L20.225 6.225L22 8Z",fill:"#B8926A"})})})]}),e.jsxs("div",{className:`${j.filters__item} ${y?j.expanded:""}`,children:[e.jsxs("label",{onClick:()=>{g([])},className:j["filters__item--label"],htmlFor:R,children:[e.jsx("input",{id:R,defaultChecked:!0,onChange:t=>$("all"),type:"checkbox"}),l.length===0?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#B8926A",strokeWidth:"1.5"}),e.jsx("path",{d:"M8.5 12.5L10.5 14.5L15.5 9.5",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#B8926A",strokeWidth:"1.5"})}),m==="Az"?"hamısı":m==="Ru"?"все":"all"]}),f.map(({title:t,titleAz:i,titleRu:_,id:v})=>e.jsxs("label",{className:j["filters__item--label"],htmlFor:t,onClick:s=>{s.target.checked?p(v,r):c(v,r)},children:[e.jsx("input",{id:t,value:x[t],defaultChecked:x[t],onChange:()=>$(t),type:"checkbox"}),x[t]||l.includes(v)?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#B8926A",strokeWidth:"1.5"}),e.jsx("path",{d:"M8.5 12.5L10.5 14.5L15.5 9.5",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#B8926A",strokeWidth:"1.5"})}),m==="Az"?i:m==="Ru"?_:t]},t))]})]})}),N=q.memo(oe),le="_product_pu4k4_1",ie={product:le},ne=({children:h})=>e.jsx("section",{className:ie.product,children:h}),ce="_header_1fx88_1",ae="_select_1fx88_31",re="_options_1fx88_49",de="_expanded_1fx88_79",ue="_option_1fx88_49",S={header:ce,select:ae,options:re,expanded:de,option:ue},he=({open:h,setOpen:f,sortTypes:p,onSortClick:r,lang:c})=>{const g=()=>{switch(c){case"Az":return"Sırala";case"Ru":return"Сортировать";default:return"Sort BY"}},[l,C]=u.useState(g());return e.jsxs("div",{className:S.select,children:[e.jsxs("div",{onClick:()=>f(!h),className:`${S.header}`,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4 16L13 16",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M6 11H13",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M8 6L13 6",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M17 4L17 20L20 16",stroke:"#B8926A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l]}),e.jsx("div",{className:`${S.options} ${h?S.expanded:""}`,children:p.map(a=>e.jsx("div",{style:{display:l!==a.titleRu&&l!==a.titleAz&&l!==a.title?"block":"none"},onClick:()=>{r(a),C(c==="Az"?a.titleAz:c==="Ru"?a.titleRu:a.title)},className:S.option,children:c==="Az"?a.titleAz:c==="Ru"?a.titleRu:a.title},a.id))})]})},fe=()=>{const[h,f]=u.useState(!1),[p,r]=u.useState([]),[c,g]=u.useState([]),[l,C]=u.useState([]),[a,P]=u.useState(null),{data:m,isLoading:B}=Z(),{data:L,isLoading:z}=H(),y=W(),w=E(),x=new URLSearchParams(y.search),{lang:d}=U(),R=[{id:1,title:"popular first",titleAz:"Populyar ilk",titleRu:"Популярный первый"},{id:2,title:"cheapest first",titleAz:"Ən ucuz ilk",titleRu:"Самый дешевый первый"},{id:3,title:"expensive first",titleAz:"Ən bahalı ilk",titleRu:"Самый дорогой первый"}];G();const $=s=>{s.title=="popular first"?r(p.sort((o,n)=>o.isPopular===n.isPopular?o.id-n.id:n.isPopular-o.isPopular)):s.title=="cheapest first"?r(p.sort((o,n)=>o.price-n.price)):s.title=="expensive first"&&r(p.sort((o,n)=>n.price-o.price)),P(s),f(!1)},t=async()=>{const o=await(await fetch("http://localhost:3000/products")).json();r(o)},i=(s,o)=>{if(o==="category"&&!c.includes(s)||o==="collections"&&!l.includes(s)){let n=c,k=l;o==="category"?n=[...c,s]:o==="collections"&&(k=[...l,s]),g(n),C(k);const A=n.join(","),I=k.join(",");w(`/products?categoryIds=${A}&collectionIds=${I}`)}};let _=[...p];(c.length>0||l.length>0)&&(_=p.filter(s=>{const o=c.length===0||c.includes(s.categoryId),n=l.length===0||l.includes(s.collectionId);return o&&n}));const v=(s,o,n)=>{let k=[],A=[],I=c,F=l;o==="category"?(k=c.filter(b=>b!==s),g(k),I=k.join(",")):o==="collections"&&(A=l.filter(b=>b!==s),C(A),F=A.join(",")),w(`/products?categoryIds=${I}&collectionIds=${F}`)};switch(u.useEffect(()=>{t();const s=x.getAll("categoryIds")[0]?x.getAll("categoryIds")[0].split(",").map(n=>parseInt(n,10)):[],o=x.getAll("collectionIds")[0]?x.getAll("collectionIds")[0].split(",").map(n=>parseInt(n,10)):[];s.length>0&&(w(`/products?categoryIds=${s}`),g(s)),o.length>0&&(w(`/products?collectionIds=${o}`),C(o))},[]),d){case"Az":M("Məhsullar");break;case"Ru":M("Продукты");break;default:M("Products")}return e.jsx("main",{children:e.jsxs("div",{className:"container",children:[e.jsx(O,{title:d==="Az"?"Məhsullar":d==="Ru"?"Продукты":"Products"}),e.jsxs(Y,{children:[e.jsx("p",{style:{maxWidth:"56rem"},children:d==="Az"?"Həqiqətən də bu şeylər arasında fərq asan və məqsədəuyğundur. Çünki boş vaxtlarımızda, seçim etməkdə azad olduğumuz zaman ən yaxşısını etməyə heç nə mane olmur.":d==="Ru"?"И действительно, различие между этими вещами легко и целесообразно. Ибо в свободное время, когда мы свободны в выборе, ничто не мешает нам делать то, что лучше.":"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."}),e.jsx(he,{open:h,lang:d,setOpen:f,sortTypes:R,onSortClick:$})]}),e.jsxs(ne,{children:[e.jsxs(V,{children:[m&&e.jsx(N,{lang:d,title:"Categories",titleAz:"Kateqoriyalar",titleRu:"Категории",filterType:"category",setFilters:g,removeFilterClick:v,onFilterClick:i,filterItems:c,options:m}),L&&e.jsx(N,{lang:d,title:"Collections",titleAz:"Kolleksiyalar",titleRu:"Коллекции",filterType:"collections",setFilters:C,removeFilterClick:v,onFilterClick:i,filterItems:l,options:L})]}),e.jsx(K,{children:_&&_.map(s=>e.jsx(Q,{lang:d,...s},s.id))})]})]})})};export{fe as default};
