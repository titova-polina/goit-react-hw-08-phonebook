"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{4798:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,o,i,a,c,d,s,l,u,x=r(9434),p=r(168),m=r(5867),f=m.ZP.li(t||(t=(0,p.Z)(["\n  margin-bottom: 8px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),b=m.ZP.button(o||(o=(0,p.Z)(["\n  border: 1px solid #858483;\n  border-radius: 7px;\n  cursor: pointer;\n  padding: 5px 8px;\n  margin-left: 8px;\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #3c5080;\n    border: 1px solid #3c5080;\n    color: #fcf7e3;\n  }\n"]))),h=function(n){return n.filter},g=function(n){return n.contacts.items},j=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.isDeleting},v=function(n){return n.contacts.error},w=r(9719),y=r(184),P=function(){var n=(0,x.v9)(g),e=(0,x.v9)(h),r=(0,x.v9)(Z),t=(0,x.I0)(),o=n.filter((function(n){return!e||n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)}));return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("ul",{children:o.map((function(n){return(0,y.jsxs)(f,{children:[n.name,": ",n.number,(0,y.jsx)(b,{onClick:function(){return t((0,w._f)(n.id))},disabled:r,children:r===n.id?"...deleting":"Delete"})]},n.id)}))})})},k=m.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 10px;\n"]))),C=m.ZP.label(a||(a=(0,p.Z)(["\n  margin-top: 10px;\n"]))),_=m.ZP.input(c||(c=(0,p.Z)(["\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-radius: 8px;\n  border: 1px solid #6e6e6e;\n  margin-top: 8px;\n"]))),F=r(6066),L=function(){var n=(0,x.v9)(h),e=(0,x.I0)();return(0,y.jsxs)(k,{children:[(0,y.jsx)(C,{children:"Find contacts by name"}),(0,y.jsx)(_,{type:"text",value:n,placeholder:"Type name...",onChange:function(n){return e((0,F.a)(n.target.value))}})]})},q=r(1413),I=r(5705),N=r(6727),R=r(5984),z=(0,m.ZP)(I.l0)(d||(d=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  padding: 20px 10px;\n  max-width: 300px;\n  border: 1px solid #f1f1f1;\n  border-radius: 8px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),A=(0,m.ZP)(I.gN)(s||(s=(0,p.Z)(["\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-radius: 8px;\n  border: 1px solid #6e6e6e;\n  margin-top: 8px;\n"]))),D=(0,m.ZP)(I.Bc)(l||(l=(0,p.Z)(["\n  color: tomato;\n"]))),E=m.ZP.button(u||(u=(0,p.Z)(["\n  border: 1px solid #858483;\n  border-radius: 7px;\n  cursor: pointer;\n  padding: 5px 8px;\n  max-width: 100px;\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #3c5080;\n    border: 1px solid #3c5080;\n    color: #fcf7e3;\n  }\n"]))),S=N.Ry().shape({name:N.Z_().min(2).max(50).required("* Name is required"),number:N.Z_().min(6,"Phone number is too short").max(16,"Phone number is too long").required("* Enter phone number")}),B=function(){var n=(0,x.I0)(),e=(0,x.v9)(g);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(I.J9,{initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(r,t){e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()||n.number===r.number}))?alert("is already in contacts"):(n((0,w.el)((0,q.Z)((0,q.Z)({},r),{},{id:(0,R.x0)()}))),t.resetForm())},children:(0,y.jsxs)(z,{children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)(A,{type:"text",name:"name",placeholder:"Harry Potter"}),(0,y.jsx)(D,{name:"name",component:"div"})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)(A,{type:"tel",name:"number",placeholder:"xxx-xx-xx"}),(0,y.jsx)(D,{name:"number",component:"div"})]}),(0,y.jsx)(E,{type:"submit",children:"Add contact"})]})})})},H=r(2791);function J(){var n=(0,x.I0)(),e=(0,x.v9)(j),r=(0,x.v9)(v),t=(0,H.useRef)(!1);return(0,H.useEffect)((function(){!t.current&&n((0,w.yF)()),t.current=!0}),[n]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("section",{children:[(0,y.jsx)("h2",{children:"Add Contact"}),(0,y.jsx)(B,{}),(0,y.jsx)("h3",{children:"Contacts"}),(0,y.jsx)(L,{}),e&&!r&&(0,y.jsx)("b",{children:"Request in progress..."}),(0,y.jsx)(P,{})]})})}}}]);
//# sourceMappingURL=798.d851be04.chunk.js.map