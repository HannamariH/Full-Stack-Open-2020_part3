(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),o=t.n(r),c=t(2),l=t(3),i=t.n(l),m="https://mighty-hollows-72545.herokuapp.com/",f=function(){return i.a.get(m).then((function(e){return e.data}))},s=function(e){return i.a.post(m,e).then((function(e){return e.data}))},d=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},b=function(e){return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{value:e.value,onChange:e.onChange}))},p=function(e){return u.a.createElement("form",{onSubmit:e.onSubmit},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),u.a.createElement("div",null,"number:"," ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},E=function(e){return u.a.createElement("div",null,e.personsToShow.map((function(n){return u.a.createElement("p",{key:n.name},n.name," ",n.number," ",u.a.createElement(v,{person:n,deletePerson:e.deletePerson}))})))},v=function(e){return u.a.createElement("button",{onClick:function(){return e.deletePerson(e.person)}},"Delete")},g=function(e){var n=e.message,t=e.error;return null===n&&null==t?null:null!==n?u.a.createElement("div",{className:"message"},n):null!==t?u.a.createElement("div",{className:"error"},t):void 0},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),i=l[0],m=l[1],v=Object(a.useState)(""),w=Object(c.a)(v,2),j=w[0],O=w[1],C=Object(a.useState)(""),S=Object(c.a)(C,2),N=S[0],k=S[1],y=Object(a.useState)(!0),T=Object(c.a)(y,2),P=T[0],D=T[1],U=Object(a.useState)(null),I=Object(c.a)(U,2),J=I[0],x=I[1],A=Object(a.useState)(null),B=Object(c.a)(A,2),M=B[0],q=B[1];Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var z=P?t:t.filter((function(e){return e.name.toUpperCase().includes(N.toUpperCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(g,{message:J,error:M}),u.a.createElement(b,{value:N,onChange:function(e){D(!1),k(e.target.value)}}),u.a.createElement("h2",null,"Add a new"),u.a.createElement(p,{newName:i,newNumber:j,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){O(e.target.value)},onSubmit:function(e){if(e.preventDefault(),void 0!==t.find((function(e){return e.name===i})))if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var n={name:i,number:j},a=t.find((function(e){return e.name===i})).id;d(a,n).then((function(e){r(t.map((function(n){return n.id!==a?n:e}))),m(""),O(""),x("Updated ".concat(i)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){q("Information of ".concat(i," has already been removed from server")),setTimeout((function(){q(null)}),5e3)}))}else m(""),O("");else s({name:i,number:j}).then((function(e){r(t.concat(e)),m(""),O(""),x("Created ".concat(i)),setTimeout((function(){x(null)}),5e3)}))}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(E,{personsToShow:z,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&h(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id}))),x("Deleted ".concat(e.name)),setTimeout((function(){x(null)}),5e3)}))}}))};t(36);o.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8b2d485a.chunk.js.map