(this["webpackJsonpecommerce-shop"]=this["webpackJsonpecommerce-shop"]||[]).push([[0],{140:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(61),r=c.n(i),l=c(3),o=(c(67),c(13)),j=c.n(o),d=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],i=c[1];Object(s.useEffect)((function(){r()}),[]);var r=function(){j.a.get("./api/products").then((function(e){i(e.data)})).catch((function(e){console.error("Error: "+e)}))};return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{className:"hero",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"column-1",children:Object(a.jsx)("div",{className:"item-1"})}),Object(a.jsxs)("div",{className:"column-2",children:[Object(a.jsx)("div",{className:"item-2"}),Object(a.jsx)("div",{className:"item-3"})]})]})}),Object(a.jsxs)("div",{className:"category__container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Chronograph watches"})}),Object(a.jsx)("div",{className:"container",children:n.filter((function(e){return"chronograph"===e.category})).map((function(e){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"image"}),Object(a.jsx)("p",{className:"name",children:e.name}),Object(a.jsx)("p",{children:e.details.length<40?e.details:"".concat(e.details.slice(0,40),"...")}),Object(a.jsxs)("p",{className:"price",children:["$",e.price]})]})}))})]}),Object(a.jsxs)("div",{className:"category__container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Automatic watches"})}),Object(a.jsx)("div",{className:"container",children:n.filter((function(e){return"automatic"===e.category})).map((function(e){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"image"}),Object(a.jsx)("p",{className:"name",children:e.name}),Object(a.jsx)("p",{children:e.details.length<40?e.details:"".concat(e.details.slice(0,40),"...")}),Object(a.jsxs)("p",{className:"price",children:["$",e.price]})]})}))})]}),Object(a.jsxs)("div",{className:"category__container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Dress watches"})}),Object(a.jsx)("div",{className:"container",children:n.filter((function(e){return"dress"===e.category})).map((function(t){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"image"}),Object(a.jsx)("p",{className:"name",children:t.name}),Object(a.jsx)("p",{children:t.details.length<40?t.details:"".concat(t.details.slice(0,40),"...")}),Object(a.jsxs)("p",{className:"price",children:["$",t.price]}),Object(a.jsx)("button",{onClick:function(){return function(t,c){var a={userId:e.userData._id,watchId:t,watchName:c};j.a.put("/api/users/addToWatchlist",a).then((function(e){})).catch((function(e){console.log(e)}))}(t._id,t.name)},children:"Add to watchlist"})]})}))})]}),Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("h1",{children:"Created by Joshua Lausberg"})})]})},u=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)("login"),o=Object(l.a)(r,2),d=o[0],u=o[1],h=Object(s.useState)("legion@gmail.com"),b=Object(l.a)(h,2),m=b[0],O=b[1],x=Object(s.useState)("legion123"),g=Object(l.a)(x,2),p=g[0],v=g[1],f=Object(s.useState)(""),N=Object(l.a)(f,2),w=N[0],_=N[1],C=Object(s.useState)(""),k=Object(l.a)(C,2),y=k[0],S=k[1],D=Object(s.useState)(""),q=Object(l.a)(D,2),I=q[0],A=q[1];return Object(a.jsx)("div",{className:"auth",children:Object(a.jsxs)("div",{className:"auth__container",children:[Object(a.jsxs)("h1",{children:[Object(a.jsx)("span",{onClick:function(){return u("login")},className:"login"===d?"active":void 0,children:"Login"})," | ",Object(a.jsx)("span",{onClick:function(){return u("register")},className:"register"===d?"active":void 0,children:"Register"})]}),"login"===d&&Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",required:!0,placeholder:"login-email"===n[0]?n[1]:"Email",value:m,onChange:function(e){return O(e.target.value)}}),Object(a.jsx)("input",{type:"password",required:!0,placeholder:"login-password"===n[0]?n[1]:"Password",value:p,onChange:function(e){return v(e.target.value)}}),Object(a.jsx)("button",{className:"submit",onClick:function(t){return function(t,c,a){t.preventDefault();var s={email:c,password:a};j.a.post("/api/users/login",s).then((function(t){if(t.data.length>15)j.a.get("/api/users",{params:{email:m}}).then((function(t){var c=t.data;e.setUserData(c);var a=t.headers["auth-token"];sessionStorage.setItem("userToken",a),e.setIsLoggedIn(!0),e.setView("home")})).catch((function(e){console.log("Error: "+e)}));else{var c=[];switch(t.data.match(/"([^"]*)"/)[1]){case"email":c=["login-email",t.data],i(c),O("");break;case"password":c=["login-password",t.data],i(c),v("");break;default:console.log("something went wrong...")}}}))}(t,m,p)},children:"Login"})]}),"registered"===n&&Object(a.jsxs)("p",{children:["Successfully registered!",Object(a.jsx)("br",{}),"Please login."]})]}),"register"===d&&Object(a.jsx)("div",{className:"register__container",children:"registered"!==n&&Object(a.jsxs)("form",{className:"input-main",children:[Object(a.jsx)("input",{type:"text",required:!0,placeholder:"register-name"===n[0]?n[1]:"Name",value:w,onChange:function(e){return _(e.target.value)}}),Object(a.jsx)("input",{type:"text",required:!0,placeholder:"register-email"===n[0]?n[1]:"Email",value:y,onChange:function(e){return S(e.target.value)}}),Object(a.jsx)("input",{type:"password",required:!0,placeholder:"register-password"===n[0]?n[1]:"Password",value:I,onChange:function(e){return A(e.target.value)}}),Object(a.jsx)("button",{className:"submit",onClick:function(e){return function(e){e.preventDefault();var t={name:w,email:y,password:I};j.a.post("/api/users/register",t).then((function(e){if("success"===e.data)u("login"),i("registered");else{var t=[];switch(e.data.match(/"([^"]*)"/)[1]){case"name":t=["register-name",e.data],i(t),_("");break;case"email":t=["register-email",e.data],i(t),S("");break;case"password":t=["register-password",e.data],i(t),A("");break;default:console.log("something went wrong...")}}})).catch((function(e){console.log(e)}))}(e)},children:"Register"})]})})]})})},h=function(e){return Object(a.jsx)("div",{className:"profile",children:Object(a.jsx)("h1",{children:"User dash"})})},b=c(38),m=function(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),o=Object(l.a)(r,2),d=o[0],u=o[1],h=Object(s.useState)(""),m=Object(l.a)(h,2),O=m[0],x=m[1],g=Object(s.useState)(""),p=Object(l.a)(g,2),v=p[0],f=p[1];return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsx)("h1",{children:"Admin"}),Object(a.jsxs)("div",{className:"add-watch__container",children:[Object(a.jsx)("h3",{children:"Add new watch:"}),Object(a.jsxs)("div",{className:"input__container",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input__container",children:[Object(a.jsx)("label",{children:"Details"}),Object(a.jsx)("textarea",{rows:"4",cols:"50",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input__container",children:[Object(a.jsx)("label",{children:"Price"}),Object(a.jsx)("input",{type:"number",min:"1",step:"any",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input__container",children:[Object(a.jsx)("label",{children:"Category"}),Object(a.jsxs)("select",{value:v,onChange:function(e){return f(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Choose a type"}),Object(a.jsx)("option",{value:"automatic",children:"Automatic"}),Object(a.jsx)("option",{value:"chronograph",children:"Chronograph"}),Object(a.jsx)("option",{value:"dress",children:"Dress"})]})]}),Object(a.jsx)("button",{onClick:function(){var e,t={name:n,details:d,price:O,category:v};console.log((e=t,b.object({name:b.string().min(3).required(),details:b.string().required(),price:b.number().required(),category:b.string().required()}).validate(e))),j.a.post("./api/products/addWatch",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Add watch"})]})]})};var O=function(){var e=n.a.useState(),t=Object(l.a)(e,2),c=t[0],s=t[1],i=n.a.useState(!1),r=Object(l.a)(i,2),o=r[0],j=r[1],b=n.a.useState("home"),O=Object(l.a)(b,2),x=O[0],g=O[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)("div",{className:"links__container",children:Object(a.jsx)("div",{className:"link",children:Object(a.jsx)("p",{onClick:function(){return g("home")},children:"Home"})})}),o?Object(a.jsxs)("div",{className:"profile",children:["admin"===c.role?Object(a.jsx)("p",{onClick:function(){return g("admin-dashboard")},children:"Profile"}):Object(a.jsx)("p",{onClick:function(){return g("user-dashboard")},children:"Profile"}),Object(a.jsx)("p",{onClick:function(){return j(!1)},children:"Logout"})]}):Object(a.jsx)("div",{className:"profile",children:Object(a.jsx)("p",{onClick:function(){return g("login")},children:"Login"})})]}),"home"===x&&Object(a.jsx)(d,{userData:c,setUserData:s}),"login"===x&&Object(a.jsx)(u,{setUserData:s,setIsLoggedIn:j,setView:g}),"admin-dashboard"===x&&Object(a.jsx)(m,{}),"user-dashboard"===x&&Object(a.jsx)(h,{})]})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))},67:function(e,t,c){}},[[140,1,2]]]);
//# sourceMappingURL=main.fac11953.chunk.js.map