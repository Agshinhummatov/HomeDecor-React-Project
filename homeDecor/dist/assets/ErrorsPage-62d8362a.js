import{j as r,u as a}from"./index-71d35b4f.js";import{u as s}from"./useSetPageTitle-2544d0c9.js";const _="_error__container_1ci22_1",c="_error__code_1ci22_17",n="_error__status_1ci22_27",o={error__container:_,error__code:c,error__status:n},i=({code:e,status:t})=>r.jsx("section",{children:r.jsxs("div",{className:o.error__container,children:[r.jsx("h1",{className:o.error__code,children:e}),r.jsx("p",{className:o.error__status,children:t})]})}),l=()=>{const{lang:e}=a();switch(e){case"Az":s("Səhifə tapılmadı");break;case"Ru":s("Страница не найдена");break;default:s("Page not found")}return r.jsx("main",{children:r.jsx(i,{code:"404",status:e==="Az"?"Səhifə tapılmadı":e==="Ru"?"Страница не найдена":"Page not found"})})};export{l as default};
