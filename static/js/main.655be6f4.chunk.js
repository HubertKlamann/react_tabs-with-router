(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(22),s=a.n(c),n=a(7),b=a(4),i=a(2),j=a(12),l=a.n(j),r=(a(30),a(31),a(32),a(0)),d=a(3),o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(i.q)().tabId,t=o.find((function(t){return t.id===e}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:o.map((function(t){return Object(d.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":t.id===e}),children:Object(d.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),t?Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:t.content}):Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},m=function(){var e=Object(i.o)(),t=Object(r.useState)("home"),a=Object(b.a)(t,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){var e=window.location.hash;"#/"===e?s("home"):e.startsWith("#/tabs")&&s("tabs")}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.b,{to:"/home",className:l()("navbar-item",{"is-active":"home"===c}),children:"Home"}),Object(d.jsx)(n.b,{to:"/tabs",className:l()("navbar-item",{"is-active":"tabs"===c}),children:"Tabs"})]})})}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(i.d,{children:Object(d.jsxs)(i.b,{path:"",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)("h1",{className:"title",children:"Home page"})}),Object(d.jsx)(i.b,{path:"/home",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Home page"}),Object(d.jsx)(i.a,{to:"/"})]})}),Object(d.jsx)(i.b,{path:"tabs/*",element:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h,{})})}),Object(d.jsx)(i.b,{path:"tabs/:tabId",element:Object(d.jsx)(h,{})}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.655be6f4.chunk.js.map