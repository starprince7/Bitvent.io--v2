(this.webpackJsonptradix=this.webpackJsonptradix||[]).push([[18],{316:function(e,r,s){"use strict";s.r(r);var t=s(1),c=s(33),a=s(48),n=s(0);r.default=Object(c.b)((function(e){return{msg:e.dashboard_state.msg,error:e.dashboard_state.error,user:e.dashboard_state.user}}),(function(e){return{verifyUrl:function(r){return e(Object(a.s)(r))},saveNewPassword:function(r){return e(Object(a.m)(r))}}}))((function(e){var r=e.verifyUrl,s=e.saveNewPassword,c=e.msg,a=e.error,o=e.user;Object(t.useEffect)((function(){var e=JSON.parse(localStorage.getItem("num_of_refresh"));localStorage.setItem("num_of_refresh",JSON.stringify((e>=2?-1:e)+1)),setTimeout((function(){e<=1&&window.location.reload()}),500)}),[]);var i=Object(t.useRef)(null),d=Object(t.useRef)(null);return Object(t.useEffect)((function(){var e=window.location.search;r(e)}),[r]),Object(t.useEffect)((function(){a&&(d.current.textContent="Save password",d.current.disabled=!1)}),[c,a]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"authincation section-padding",children:Object(n.jsx)("div",{className:"container h-100",children:Object(n.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(n.jsx)("div",{className:"col-xl-5 col-md-6",children:Object(n.jsxs)("div",{className:"auth-form card",children:[Object(n.jsx)("div",{className:"card-header justify-content-center",children:Object(n.jsx)("h4",{className:"card-title",children:"Password Reset"})}),Object(n.jsxs)("div",{className:"card-body",children:[c&&Object(n.jsx)("div",{class:"alert alert-success",role:"alert",children:c}),Object(n.jsxs)("form",{ref:i,onSubmit:function(e){e.preventDefault(),d.current.textContent="Saving...",d.current.disabled=!0;var r={newPassword:i.current.password.value,confirmPassword:i.current.confirm_password.value,_id:o._id};s(r)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"New Password"}),Object(n.jsx)("input",{required:!0,type:"password",className:"form-control",name:"password",placeholder:"enter new password"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Confirm Password"}),Object(n.jsx)("input",{required:!0,type:"password",className:"form-control",name:"confirm_password",placeholder:"please re-enter password"})]}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{ref:d,type:"submit",className:"btn btn-success btn-block",children:"Save password"})})]})]})]})})})})})})}))}}]);
//# sourceMappingURL=18.66224c6b.chunk.js.map