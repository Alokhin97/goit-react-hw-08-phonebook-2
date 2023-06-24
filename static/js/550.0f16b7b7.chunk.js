"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{6550:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,i,o,a,s,p,c,u,x,l,d,f,h,m,b=r(2791),g=r(168),v=r(7691),Z=(0,v.ZP)("ul")(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n"]))),y=r(9434),j=r(6351),w=r(5861),k=r(4687),P=r.n(k),z=(0,v.ZP)("div")(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),C=(0,v.ZP)("button")(o||(o=(0,g.Z)(["\n  padding: 8px;\n  display: inline-flex;\n  font-size: 20px;\n  border: none;\n  background-color: #dc143c;\n  border-radius: 50%;\n  cursor: pointer;\n  color: white;\n"]))),N=(0,v.ZP)("span")(a||(a=(0,g.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  width: 180px;\n"]))),_=(0,v.ZP)("span")(s||(s=(0,g.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),F=r(5264),I=r(7247),K=r(2526),A=r(184),D=function(n){var e=n.contact,r=(0,y.I0)(),t=function(){var n=(0,w.Z)(P().mark((function n(){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r((0,K.GK)(e.id));case 3:F.Notify.success("Contact was delete from your phonebook"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),F.Notify.failure("Something wrong. Please, try again");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,A.jsxs)(z,{children:[(0,A.jsxs)(N,{children:[e.name,":"]}),(0,A.jsx)(_,{children:e.number}),(0,A.jsx)(C,{onClick:t,children:(0,A.jsx)(I.Z,{})})]})},q=function(){var n=(0,y.I0)(),e=(0,y.v9)(j.Af),r=(0,y.v9)(j.zK).filter;if((0,b.useEffect)((function(){n((0,K.yF)())}),[n]),!e)return null;var t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,A.jsx)("div",{children:(0,A.jsx)(Z,{children:t.map((function(n){return(0,A.jsx)("li",{children:(0,A.jsx)(D,{contact:n})},n.id)}))})})},H=r(6895),L=(0,v.ZP)("div")(p||(p=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),M=(0,v.ZP)("h2")(c||(c=(0,g.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),S=(0,v.ZP)("input")(u||(u=(0,g.Z)(["\n  padding: 10px 10px;\n  border: none;\n  font-size: 20px;\n  box-shadow: 0px 2px 18px 0px grey;\n  border-radius: 25px;\n  &:focus {\n    outline: none;\n  }\n"]))),V=function(){var n=(0,y.I0)();return(0,A.jsxs)(L,{children:[(0,A.jsx)(M,{children:"Find contacts by name"}),(0,A.jsx)(S,{type:"text",autoComplete:"off",onChange:function(e){e.preventDefault();var r=e.target.value;n((0,H.KJ)(r))},name:"name"})]})},E=(0,v.ZP)("form")(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 250px;\n  gap: 30px;\n  padding: 40px;\n  border-radius: 15px;\n  backdrop-filter: blur(50px);\n  box-shadow: 0px 2px 8px 1px grey;\n"]))),G=(0,v.ZP)("label")(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 350px;\n  gap: 10px;\n"]))),J=(0,v.ZP)("input")(d||(d=(0,g.Z)(["\n  padding: 10px 10px;\n  border: none;\n  font-size: 20px;\n  box-shadow: 0px 2px 18px 0px grey;\n  border-radius: 25px;\n  &:focus {\n    outline: none;\n  }\n"]))),B=(0,v.ZP)("button")(f||(f=(0,g.Z)(["\n  padding: 15px 25px;\n  font-size: 20px;\n  border: none;\n  background-color: #f2e06c;\n  border-radius: 25px;\n  cursor: pointer;\n  color: white;\n"]))),O=function(){var n=(0,y.v9)(j.Af),e=(0,y.I0)(),r=function(){var r=(0,w.Z)(P().mark((function r(t){var i,o,a,s;return P().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),i=t.target,o=i.elements.name.value,a=i.elements.number.value,s={name:o,number:a},i.reset(),!n.find((function(n){return n.name===o}))){r.next=9;break}return F.Notify.warning("".concat(o," is already in contacts")),r.abrupt("return",!1);case 9:e((0,K.uK)(s)),i.reset();case 11:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(E,{onSubmit:r,autoComplete:"off",children:[(0,A.jsxs)(G,{children:["Name",(0,A.jsx)(J,{type:"text",name:"name",required:!0})]}),(0,A.jsxs)(G,{className:"Form_label",children:["Number",(0,A.jsx)(J,{type:"tel",name:"number",required:!0})]}),(0,A.jsx)(B,{type:"submit",children:"Add contact"})]})})},Q=(0,v.ZP)("div")(h||(h=(0,g.Z)(["\n  padding: 158px 60px 0;\n  display: flex;\n  justify-content: space-around;\n"]))),R=(0,v.ZP)("div")(m||(m=(0,g.Z)(["\n  gap: 30px;\n  padding: 40px;\n  border-radius: 15px;\n  backdrop-filter: blur(50px);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 2px 8px 1px grey;\n  max-height: 600px;\n  overflow-y: auto;\n"]))),T=function(){return(0,A.jsxs)(Q,{children:[(0,A.jsx)(O,{}),(0,A.jsxs)(R,{children:[(0,A.jsx)(V,{}),(0,A.jsx)(q,{})]})]})}},7247:function(n,e,r){var t=r(4836);e.Z=void 0;var i=t(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a}}]);
//# sourceMappingURL=550.0f16b7b7.chunk.js.map