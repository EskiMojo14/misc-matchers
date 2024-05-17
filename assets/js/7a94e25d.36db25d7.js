"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[322],{5862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=t(2540),i=t(3023),c=t(2317);const o={sidebar_position:1},r="Containing Only",s={id:"matchers/collections/containingOnly",title:"Containing Only",description:"arrayContainingOnly",source:"@site/docs/matchers/collections/containingOnly.mdx",sourceDirName:"matchers/collections",slug:"/matchers/collections/containingOnly",permalink:"/mix-n-matchers/matchers/collections/containingOnly",draft:!1,unlisted:!1,editUrl:"https://github.com/EskiMojo14/mix-n-matchers/tree/main/website/docs/matchers/collections/containingOnly.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"expect.oneOf(...values)",permalink:"/mix-n-matchers/matchers/oneOf"},next:{title:"Iterables",permalink:"/mix-n-matchers/matchers/collections/iterables"}},l={},h=[{value:"<code>arrayContainingOnly</code>",id:"arraycontainingonly",level:2},{value:"<code>objectContainingOnly</code>",id:"objectcontainingonly",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"containing-only",children:"Containing Only"}),"\n",(0,a.jsx)(n.h2,{id:"arraycontainingonly",children:(0,a.jsx)(n.code,{children:"arrayContainingOnly"})}),"\n",(0,a.jsx)(n.p,{children:"An asymmetric matcher that checks if the received array contains only the expected values, using deep equality."}),"\n",(0,a.jsx)(n.p,{children:"Values can be repeated (or omitted), but all elements should be present in the expected array."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Put another way, it checks that the received array is a subset of (or equal to) the expected array. This is in contrast to ",(0,a.jsx)(n.code,{children:"arrayContaining"}),", which checks that the received array is a superset of (or equal to) the expected array."]})}),"\n",(0,a.jsx)(c.Z,{name:"arrayContainingOnly",children:'\nit("contains only the expected values", () => {\n  expect({ array: [1, 2] }).toEqual({\n    array: expect.arrayContainingOnly([1, 2, 3]),\n  });\n  expect({ array: [1, 2] }).toEqual({\n    array: expect.arrayContainingOnly([1, 2]),\n  });\n  expect({ array: [1, 1] }).toEqual({\n    array: expect.arrayContainingOnly([1, 2, 2]),\n  });\n  \n  expect({ array: [1, 2, 3] }).not.toEqual({\n    array: expect.arrayContainingOnly([1, 2]),\n  });\n});\n'}),"\n",(0,a.jsx)(n.h2,{id:"objectcontainingonly",children:(0,a.jsx)(n.code,{children:"objectContainingOnly"})}),"\n",(0,a.jsx)(n.p,{children:"An asymmetric matcher that checks if the received object contains only the expected keys and values, using deep equality."}),"\n",(0,a.jsx)(n.p,{children:"Keys can be repeated (or omitted), but all keys should be present in the expected object."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Put another way, it checks that the received object is a subset of (or equal to) the expected object. This is in contrast to ",(0,a.jsx)(n.code,{children:"objectContaining"}),", which checks that the received object is a superset of (or equal to) the expected object."]})}),"\n",(0,a.jsx)(c.Z,{name:"objectContainingOnly",children:'\nit("contains only the expected keys and values", () => {\n  expect({ a: 1 }).toEqual(expect.objectContainingOnly({ a: 1, b: 2 }));\n  expect({ a: 1, b: 2 }).toEqual(expect.objectContainingOnly({ a: 1, b: 2 }));\n\n  expect({ a: 1, b: 2 }).not.toEqual(expect.objectContainingOnly({ a: 1 }));\n});\n'})]})}function y(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);