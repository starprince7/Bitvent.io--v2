(this.webpackJsonptradix=this.webpackJsonptradix||[]).push([[15],{322:function(e,c,t){"use strict";t.r(c);var s=t(9),a=t(63),l=t(1),r=t.n(l),n=t(12),i=t(13),d=t(29),j=t(11),b=t(2),x=t(33),o=t(48),O=t(98),h=t.n(O),m=t(3),u=t(4),f=t(6),p=t.n(f),N=t(7),v=t(56),g=function(e){return r.a.forwardRef((function(c,t){return r.a.createElement("div",Object(m.a)({},c,{ref:t,className:p()(c.className,e)}))}))},y=t(113),S=["bsPrefix","className","variant","as"],w=r.a.forwardRef((function(e,c){var t=e.bsPrefix,s=e.className,a=e.variant,l=e.as,n=void 0===l?"img":l,i=Object(u.a)(e,S),d=Object(N.a)(t,"card-img");return r.a.createElement(n,Object(m.a)({ref:c,className:p()(a?d+"-"+a:d,s)},i))}));w.displayName="CardImg",w.defaultProps={variant:null};var T=w,D=["bsPrefix","className","bg","text","border","body","children","as"],C=g("h5"),E=g("h6"),P=Object(v.a)("card-body"),R=Object(v.a)("card-title",{Component:C}),U=Object(v.a)("card-subtitle",{Component:E}),F=Object(v.a)("card-link",{Component:"a"}),I=Object(v.a)("card-text",{Component:"p"}),k=Object(v.a)("card-header"),H=Object(v.a)("card-footer"),_=Object(v.a)("card-img-overlay"),A=r.a.forwardRef((function(e,c){var t=e.bsPrefix,s=e.className,a=e.bg,n=e.text,i=e.border,d=e.body,j=e.children,b=e.as,x=void 0===b?"div":b,o=Object(u.a)(e,D),O=Object(N.a)(t,"card"),h=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return r.a.createElement(y.a.Provider,{value:h},r.a.createElement(x,Object(m.a)({ref:c},o,{className:p()(s,O,a&&"bg-"+a,n&&"text-"+n,i&&"border-"+i)}),d?r.a.createElement(P,null,j):j))}));A.displayName="Card",A.defaultProps={body:!1},A.Img=T,A.Title=R,A.Subtitle=U,A.Body=P,A.Link=F,A.Text=I,A.Header=k,A.Footer=H,A.ImgOverlay=_;var M=A,$=t(0);c.default=Object(x.b)((function(e,c){return{user:e.dashboard_state.user,crypto:e.dashboard_state.cryptoPriceData}}),(function(e,c){return{fetchUser:function(){return e(Object(o.g)())},fetchCrypto:function(){return e(Object(o.f)())}}}))((function(e){var c=e.user,t=e.crypto,r=e.fetchUser,x=e.fetchCrypto,o=Object(l.useState)(null),O=Object(a.a)(o,2),m=O[0],u=O[1];Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("num_of_refresh"));localStorage.setItem("num_of_refresh",JSON.stringify((e>=2?-1:e)+1)),setTimeout((function(){e<=1&&window.location.reload()}),500)}),[]),Object(l.useEffect)((function(){null===c&&r()}),[c,r]);var f=c&&c.deposit.reduce((function(e,c){return e+c}),0),p=c&&c.payouts.reduce((function(e,c){return e+c}),0);Object(l.useEffect)((function(){x()}),[]),Object(l.useEffect)((function(){t&&u(t)}),[t]);var N=m&&m.map((function(e,c){var t,a,l=(t=e,a=5,Object(s.a)(Object(s.a)({},t),{},{USD:Object(s.a)(Object(s.a)({},t.USD),{},{PRICE:a/100*t.USD.PRICE+t.USD.PRICE})}));return Object($.jsxs)("tr",{children:[Object($.jsxs)("th",{scope:"row",children:[" ",c+1," "]}),Object($.jsxs)("td",{children:[Object($.jsx)("img",{src:"https://www.cryptocompare.com/".concat(l.USD.IMAGEURL),width:"20"})," ",l.USD.FROMSYMBOL]}),Object($.jsx)("td",{children:Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("strong",{children:e})})},value:l.USD.PRICE,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text",prefix:"$"})}),Object($.jsx)("td",{children:Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsxs)("span",{className:"".concat(-1===Math.sign(Number(l.USD.CHANGEPCTHOUR))||0===Math.sign(Number(l.USD.CHANGEPCTHOUR))?"text-danger":"text-success"),children:[e,"%"]})})},value:l.USD.CHANGEPCTHOUR,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text"})}),Object($.jsx)("td",{children:Object($.jsx)("a",{href:"/buy-sell",children:Object($.jsx)("button",{className:"btn btn-success",children:"Buy"})})})]},l.USD.FROMSYMBO)}));return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(n.a,{}),Object($.jsx)(i.a,{}),Object($.jsx)(d.a,{}),Object($.jsx)("div",{className:"content-body",children:Object($.jsx)("div",{className:"pl-3",children:Object($.jsx)("div",{className:"row",children:Object($.jsx)("div",{className:"col-xl-12 col-lg-12 col-xxl-12",children:Object($.jsxs)("div",{className:"exclude_default_card_style balance-widget",children:[Object($.jsx)("div",{className:"card-header border-0 py-0"}),Object($.jsx)("div",{className:"card-body pt-0",children:Object($.jsxs)("div",{className:"balance-widget ",children:[Object($.jsxs)(M,{bg:"primary",text:"white",className:"text-center",children:[Object($.jsx)(M.Header,{style:{fontSize:"0.8rem",padding:"none"},children:"Wallet Balance"}),Object($.jsxs)(M.Footer,{children:[Object($.jsx)(M.Title,{className:"",children:Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("p",{className:"text-white px-4 py-2",style:{fontSize:"1.5rem"},children:Object($.jsx)("strong",{children:e})})})},value:c?c.wallet:0,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text",prefix:"$"})}),Object($.jsxs)("div",{className:"d-flex justify-content-center",children:[Object($.jsx)(M.Text,{children:Object($.jsx)(b.b,{to:"/buy-sell",style:{fontSize:"13px"},className:"ml-0 p-1 btn-success bg-success rounded-lg  text-white",children:"DEPOSIT"})}),Object($.jsx)(M.Text,{children:Object($.jsx)(b.b,{to:"/buy-sell",style:{fontSize:"13px"},className:"mx-2 p-1 btn-success bg-success rounded-lg  text-white",children:"TRANSFER"})}),Object($.jsx)(M.Text,{children:Object($.jsx)(b.b,{to:"/buy-sell",style:{fontSize:"13px"},className:"ml-0 p-1 btn-success bg-success rounded-lg text-white",children:"WITHDRAW"})})]})]})]}),Object($.jsxs)("div",{className:"row",children:[Object($.jsxs)("div",{className:"col col-lg-3 col-xl-4",children:[Object($.jsx)("div",{className:" border-0 mb-1 pl-2",children:Object($.jsx)("h4",{className:"card-title",children:"Account Overview"})}),Object($.jsx)("div",{className:"card",children:Object($.jsx)("div",{className:"card-body",children:Object($.jsxs)("div",{className:"row",children:[Object($.jsx)("div",{className:"col-xl-12 col-lg-12 col-xxl-12",children:Object($.jsx)("div",{className:"widget-card",children:Object($.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object($.jsxs)("div",{className:"widget-stat",children:[Object($.jsxs)("div",{className:"coin-title",children:[Object($.jsx)("span",{children:Object($.jsx)("i",{className:"fas fa-money-check-alt"})}),Object($.jsxs)("h5",{className:"d-inline-block ml-2 mb-3",children:["All-time Deposit ",Object($.jsx)("span",{children:"($)"})]})]}),Object($.jsxs)("h4",{children:[Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("p",{children:Object($.jsx)("strong",{children:e})})})},value:c?f:0,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text",prefix:"$"}),f>2e3&&Object($.jsx)("span",{className:"badge badge-success ml-2",children:"+ 0.2%"})]})]})})})}),Object($.jsx)("div",{className:"col-xl-12 col-lg-12 col-xxl-12",children:Object($.jsx)("div",{className:"widget-card",children:Object($.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object($.jsxs)("div",{className:"widget-stat",children:[Object($.jsxs)("div",{className:"coin-title",children:[Object($.jsx)("span",{children:Object($.jsx)("i",{className:"fas fa-piggy-bank"})}),Object($.jsxs)("h5",{className:"d-inline-block ml-2 mb-3",children:["All-time Payouts ",Object($.jsx)("span",{children:"($)"})]})]}),Object($.jsxs)("h4",{children:[Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("p",{children:Object($.jsx)("strong",{children:e})})})},value:c?p:0,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text",prefix:"$"}),p>500&&Object($.jsx)("span",{className:"badge badge-success ml-2",children:"+ 0.6%"})]})]})})})}),Object($.jsx)("div",{className:"col-xl-12 col-lg-12 col-xxl-12",children:Object($.jsx)("div",{className:"widget-card",children:Object($.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object($.jsxs)("div",{className:"widget-stat",children:[Object($.jsxs)("div",{className:"coin-title",children:[Object($.jsx)("span",{children:Object($.jsx)("i",{className:"fas fa-users"})}),Object($.jsxs)("h5",{className:"d-inline-block ml-2 mb-3",children:["Referrals ",Object($.jsx)("span",{children:"(accounts)"})]})]}),Object($.jsx)("h4",{children:null===c||void 0===c?void 0:c.referral})]})})})}),Object($.jsx)("div",{className:"col-xl-12 col-lg-12 col-xxl-12",children:Object($.jsx)("div",{className:"widget-card",children:Object($.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object($.jsxs)("div",{className:"widget-stat",children:[Object($.jsxs)("div",{className:"coin-title",children:[Object($.jsx)("span",{children:Object($.jsx)("i",{className:"fas fa-money-bill-wave-alt"})}),Object($.jsxs)("h5",{className:"d-inline-block ml-2 mb-3",children:["Bonus ",Object($.jsx)("span",{children:"($)"})]})]}),Object($.jsxs)("h4",{children:[Object($.jsx)(h.a,{renderText:function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("p",{children:Object($.jsx)("strong",{children:e})})})},value:null===c||void 0===c?void 0:c.bonus,decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,displayType:"text",prefix:"$"}),(null===c||void 0===c?void 0:c.bonus)>500&&Object($.jsx)("span",{className:"badge badge-success ml-2",children:"+ 0.6%"})]})]})})})})]})})})]}),Object($.jsxs)("div",{className:"col col-lg-9 col-xl-8",children:[Object($.jsx)("br",{}),Object($.jsx)("div",{className:"card",children:Object($.jsx)("div",{className:"card-body",children:Object($.jsx)("div",{className:"table-responsive",children:Object($.jsxs)("table",{className:"table",children:[Object($.jsx)("thead",{children:Object($.jsxs)("tr",{children:[Object($.jsx)("th",{scope:"col",children:"#"}),Object($.jsx)("th",{scope:"col",children:"Name"}),Object($.jsx)("th",{scope:"col",children:"Price"}),Object($.jsx)("th",{scope:"col",children:"Change"}),Object($.jsx)("th",{scope:"col",children:"Trade"})]})}),Object($.jsx)("tbody",{children:N})]})})})})]})]}),Object($.jsxs)("span",{className:"p-2",children:[Object($.jsx)("strong",{children:"Referral Link:"}),Object($.jsx)("br",{})]}),Object($.jsx)("p",{className:"p-2",style:{fontSize:"10px"},children:"".concat(window.location.hostname,"/signup?ref=").concat(null===c||void 0===c?void 0:c._id)})]})})]})})})})}),Object($.jsx)(j.a,{})]})}))}}]);
//# sourceMappingURL=15.2a2b56ac.chunk.js.map