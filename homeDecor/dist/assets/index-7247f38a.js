import{j as o,w as c}from"./index-71d35b4f.js";const l="_btn__secondary_1ffq4_1",t={btn__secondary:l},f=({children:s,href:r,disabled:e=!1,onClick:n})=>{const _=a=>{e?a.preventDefault():n&&(a.preventDefault(),n())};return e?o.jsx("button",{className:`btn ${t.btn__secondary} ${t.disabled}`,disabled:!0,children:s}):o.jsx(c,{to:r,onClick:_,className:`btn ${t.btn__secondary}`,children:s})};export{f as B};