(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(11),c=n.n(a),l=n(12),r=n(13),u=n(15),s=n(14),d=n(6),b=n(2),j=(n(20),n(1));var m=function(){return Object(j.jsxs)("div",{className:"home-content",children:[Object(j.jsx)("h1",{className:"welcome-title",children:"Welcome to our page!"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})};var p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"quote",children:"Mathematics is not about numbers, equations, computations, or algorithms:it is about understanding. -- William Paul Thurston"})})};n(10);var x=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"Navlist",children:[Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("li",{id:"home",children:"Home"})}),Object(j.jsx)(d.b,{to:"/calculator",children:Object(j.jsx)("li",{id:"calculator",children:"Calculator"})}),Object(j.jsx)(d.b,{to:"/quote",children:Object(j.jsx)("li",{children:"Quote"})})]})})},O=n(5),h=n(3),v=n(9),g=n.n(v);function f(t,e,n){var i=g()(t),o=g()(e);if("+"===n)return i.plus(o).toString();if("-"===n)return i.minus(o).toString();if("x"===n)return i.times(o).toString();if("\xf7"===n)try{return i.div(o).toString()}catch(a){return"Can't divide by 0."}if("%"===n)return i.mod(o).toString();throw Error("Unknown operation '".concat(n,"'"))}var y=function(){var t=Object(i.useState)(0),e=Object(O.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)(null),c=Object(O.a)(a,2),l=c[0],r=c[1],u=Object(i.useState)(null),s=Object(O.a)(u,2),d=s[0],b=s[1],m=function(t){var e,i,a=(e={total:n,next:l,operation:d},"AC"===(i=t.target.innerText)?{total:null,next:null,operation:null}:i.match(/[0-9]+/)?"0"===i&&"0"===e.next?{}:e.operation?e.next?Object(h.a)(Object(h.a)({},e),{},{next:e.next+i}):Object(h.a)(Object(h.a)({},e),{},{next:i}):e.next?{next:e.next+i,total:null}:{next:i,total:null}:"."===i?e.next?e.next.includes(".")?Object(h.a)({},e):Object(h.a)(Object(h.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===i?e.next&&e.operation?{total:f(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===i?e.next?Object(h.a)(Object(h.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(h.a)(Object(h.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(h.a)(Object(h.a)({},e),{},{operation:i}):{total:f(e.total,e.next,e.operation),next:null,operation:i}:e.next?{total:e.next,next:null,operation:i}:{operation:i}:Object(h.a)(Object(h.a)({},e),{},{operation:i}));o(a.total),r(a.next),b(a.operation)};return Object(j.jsxs)("div",{className:"calc-page",children:[Object(j.jsx)("h3",{className:"math-state",children:"Lets do some math!"}),Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsx)("div",{className:"calc-output",children:Object(j.jsx)("div",{className:"calc-result",role:"none",children:l||n||"0"})}),Object(j.jsxs)("div",{className:"calc-grid",children:[Object(j.jsx)("button",{type:"button",onClick:m,children:" AC "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" +/- "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" % "}),Object(j.jsx)("button",{type:"button",className:"logic-operators",onClick:m,children:" \xf7 "}),Object(j.jsx)("button",{type:"button",onClick:m,children:"7"}),Object(j.jsx)("button",{type:"button",onClick:m,children:" 8 "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" 9 "}),Object(j.jsx)("button",{type:"button",className:"logic-operators",onClick:m,children:" x "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" 4 "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" 5 "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" 6 "}),Object(j.jsx)("button",{type:"button",className:"logic-operators",onClick:m,children:" - "}),Object(j.jsx)("button",{type:"button",onClick:m,children:"1"}),Object(j.jsx)("button",{type:"button",onClick:m,children:"2"}),Object(j.jsx)("button",{type:"button",onClick:m,children:"3"}),Object(j.jsx)("button",{type:"button",className:"logic-operators",onClick:m,children:" + "}),Object(j.jsx)("button",{type:"button",id:"zero",onClick:m,children:" 0 "}),Object(j.jsx)("button",{type:"button",onClick:m,children:" . "}),Object(j.jsx)("button",{type:"button",className:"logic-operators",onClick:m,children:" = "})]})]})]})},q=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{}),Object(j.jsx)("h1",{id:"main-title",children:"Math Magicians"}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(b.a,{path:"/calculator",element:Object(j.jsx)(y,{})}),Object(j.jsx)(b.a,{path:"/quote",element:Object(j.jsx)(p,{})})]})]})})}}]),n}(i.Component),C=q;c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d28202bd.chunk.js.map