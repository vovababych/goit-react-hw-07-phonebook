(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{43:function(t,e,c){},63:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),r=c.n(a),o=c(12),i=c.n(o),s=c(6),u=(c(43),c(7)),l=c.n(u);var j=function(t){var e=t.title,c=t.children;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("section",{className:l.a.decor,children:[Object(n.jsx)("div",{className:l.a.leftDecor}),Object(n.jsx)("div",{className:l.a.rightDecor}),Object(n.jsx)("div",{className:l.a.circleDecor}),Object(n.jsxs)("div",{className:l.a.innerDecor,children:[Object(n.jsx)("h3",{className:l.a.titleDecor,children:e}),c]})]})})},b=c(20),f=c(19),O=c.n(f),d=c(31),h=c(11),p=c.n(h),m=c(2),x=Object(m.b)("contacts/fetchContactRequest"),v=Object(m.b)("contacts/fetchContactSuccess"),C=Object(m.b)("contacts/fetchContactError"),_=Object(m.b)("contacts/addContactRequest"),g=Object(m.b)("contacts/addContactSuccess"),D=Object(m.b)("contacts/addContactError"),y=Object(m.b)("contacts/deleteContactRequest"),L=Object(m.b)("contacts/deleteContactSuccess"),w=Object(m.b)("contacts/deleteContactError"),N=Object(m.b)("contacts/filter"),k=Object(m.b)("contacts/uniqName");p.a.defaults.baseURL="http://localhost:4040";var E=function(t){return t.contacts.items},S=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},F=function(t){return t.contacts.filter},q=function(t){return t.contacts.loading},R=function(t){return t.contacts.error};var A=function(){var t=Object(a.useState)(""),e=Object(b.a)(t,2),c=e[0],r=e[1],o=Object(a.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],j=Object(s.c)(E),f=Object(s.b)(),O=function(t,e){return f(function(t,e){return function(c){var n={name:t,tel:e};c(_()),p.a.post("/contacts",n).then((function(t){return c(g(t.data))})).catch((function(t){return c(D(t))}))}}(t,e))},d=function(t){return!!j.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?(alert("".concat(t," is already in contacts")),h(),!1):t&&u?f(k(t)):(alert("Empty field"),!1)},h=function(){r(""),l("")};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),d(c)){var e=function(t){var e=t.split("");return"+38 (".concat(e[0]).concat(e[1]).concat(e[2],") ").concat(e[3]).concat(e[4]).concat(e[5],"-").concat(e[6]).concat(e[7],"-").concat(e[8]).concat(e[9])}(u);O(c,e),h()}},autoComplete:"off",children:[Object(n.jsx)("input",{type:"text",name:"name",value:c,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:function(t){r(t.target.value)}}),Object(n.jsx)("input",{type:"tel",name:"tel",value:u,pattern:"[0-9]{10}",placeholder:"067 123 45 67",minLength:"10",maxLength:"10",onChange:function(t){l(t.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})},G=c(8),J=c.n(G);var K=function(){var t=Object(s.b)();Object(a.useEffect)((function(){t(function(){var t=Object(d.a)(O.a.mark((function t(e){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:c=t.sent,e(v(c.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(C(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[]);var e=Object(s.c)(S),c=Object(s.c)(q),r=Object(s.c)(R);console.log("error",r);var o=function(e){return t(function(t){return function(e){e(y(t)),p.a.delete("/contacts/".concat(t)).then((function(){return e(L(t))})).catch((function(t){return e(w(t))}))}}(e))};return Object(n.jsxs)(n.Fragment,{children:[!c&&!r&&e.length<1&&Object(n.jsx)("p",{className:J.a.text,children:"\u041d\u0435\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(n.jsx)("ul",{className:J.a.contactsList,children:e.length>0&&e.map((function(t){var e=t.id,c=t.name,a=t.tel;return Object(n.jsxs)("li",{className:J.a.contact,children:[Object(n.jsx)("span",{className:J.a.name,children:c}),Object(n.jsx)("span",{className:J.a.phone,children:Object(n.jsx)("a",{href:"tel:+".concat(a.toString().replace(/[^\d;]/g,"")),children:a})}),Object(n.jsx)("button",{className:J.a.btnDeleteContact,type:"button",onClick:function(){return o(e)},children:"x"})]},e)}))}),c&&Object(n.jsx)("h3",{children:" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ..."}),r&&Object(n.jsx)("h3",{children:r.message})]})};var M=function(){var t=Object(s.c)(F),e=Object(s.b)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("input",{type:"text",name:"filter",value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ...",onChange:function(t){return e(N(t.target.value))},autoComplete:"off"})})};var Q,T,z,B=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430",children:Object(n.jsx)(A,{})}),Object(n.jsxs)(j,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",children:[Object(n.jsx)(M,{}),Object(n.jsx)(K,{})]})]})},I=c(14),U=c(3),V=c(4),X=Object(m.c)([],(Q={},Object(U.a)(Q,v,(function(t,e){return e.payload})),Object(U.a)(Q,g,(function(t,e){var c=e.payload;return[].concat(Object(I.a)(t),[c])})),Object(U.a)(Q,L,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),Object(U.a)(Q,k,(function(t){return t})),Q)),H=Object(m.c)("",Object(U.a)({},N,(function(t,e){return e.payload}))),P=Object(m.c)(!1,(T={},Object(U.a)(T,x,(function(){return!0})),Object(U.a)(T,v,(function(){return!1})),Object(U.a)(T,C,(function(){return!1})),Object(U.a)(T,_,(function(){return!0})),Object(U.a)(T,g,(function(){return!1})),Object(U.a)(T,D,(function(){return!1})),Object(U.a)(T,L,(function(){return!1})),Object(U.a)(T,w,(function(){return!1})),T)),W=Object(m.c)(null,(z={},Object(U.a)(z,x,(function(){return null})),Object(U.a)(z,C,(function(t,e){return e.payload})),Object(U.a)(z,_,(function(){return null})),Object(U.a)(z,D,(function(t,e){return e.payload})),Object(U.a)(z,y,(function(){return null})),Object(U.a)(z,w,(function(t,e){return e.payload})),z)),Y=Object(V.c)({items:X,filter:H,loading:P,error:W}),Z=c(32),$=c.n(Z),tt=c(9),et=[].concat(Object(I.a)(Object(m.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),[$.a]),ct=Object(m.a)({reducer:{contacts:Y},devTools:!1,middleware:et});i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(s.a,{store:ct,children:Object(n.jsx)(B,{})})}),document.getElementById("root"))},7:function(t,e,c){t.exports={decor:"DecorContainer_decor__3vEMk",leftDecor:"DecorContainer_leftDecor__feTKk",rightDecor:"DecorContainer_rightDecor__pQt8n",circleDecor:"DecorContainer_circleDecor__3ukcw",innerDecor:"DecorContainer_innerDecor__etnjX",titleDecor:"DecorContainer_titleDecor__-yGKm"}},8:function(t,e,c){t.exports={text:"ContactsList_text__2umai",contactsList:"ContactsList_contactsList__3eO6n",contact:"ContactsList_contact__7p-AG",name:"ContactsList_name__1Cdjp",phone:"ContactsList_phone__2wv7E",btnDeleteContact:"ContactsList_btnDeleteContact__lVCQs"}}},[[63,1,2]]]);
//# sourceMappingURL=main.542e5d03.chunk.js.map