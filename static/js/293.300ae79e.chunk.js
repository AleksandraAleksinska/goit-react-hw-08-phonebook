"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[293],{1293:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(2791),r="ContactForm_form__dhl+T",s="ContactForm_formLabel__TSwxK",c="ContactForm_formButton__TN6Jq",i=n(9434),o=n(3634),u=function(e){return e.contacts.items},l=function(e){return e.isLoading},m=function(e){return e.error},d=function(e){var t=function(e){return e.filter}(e),n=u(e);return t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())})):n},f=n(184),h=function(){var e=(0,i.I0)(),t=(0,i.v9)(u),n=(0,i.v9)(l),d=(0,i.v9)(m);return(0,a.useEffect)((function(){e((0,o.yF)())}),[e]),(0,f.jsxs)(a.Fragment,{children:[(0,f.jsxs)("form",{className:r,onSubmit:function(n){n.preventDefault();var a=n.currentTarget;if(t.some((function(e){return e.name===a.elements.name.value})))alert(a.elements.name.value+" is already in contacts");else{var r=a.elements.name.value,s=a.elements.number.value;e((0,o.uK)({name:r,number:s}))}a.reset()},children:[(0,f.jsxs)("label",{className:s,children:["Name",(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:s,children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{className:c,type:"submit",children:"Add contact"})]}),n&&!d&&(0,f.jsx)("b",{children:"Request in progress..."})]})},p="ContactList_formButton__A37SK",x="ContactList_listItem__SptUx",_="ContactList_contactList__UFVCg",b=function(e){var t=e.contacts,n=(0,i.I0)();return(0,f.jsx)(a.Fragment,{children:t&&t.map((function(e){return(0,f.jsxs)("li",{className:x,children:["- ",e.name,": ",e.number," ",(0,f.jsx)("button",{className:p,type:"button",onClick:function(){var t;t=e.id,n((0,o.GK)(t))},children:"Delete"})," "]},e.id)}))})},j=function(){return(0,f.jsx)(a.Fragment,{children:(0,f.jsx)("ul",{className:_,children:(0,f.jsx)(b,{contacts:(0,i.v9)(d)})})})},v="SearchingFilter_formLabel__I7S3W",C=n(4808),g=function(){var e=(0,i.I0)();return(0,f.jsxs)("label",{className:v,children:["Find contacts by name",(0,f.jsx)("input",{onChange:function(t){return e((0,C.$)(t.target.value))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})]})},F=function(){return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(g,{}),(0,f.jsx)(j,{})]})}}}]);
//# sourceMappingURL=293.300ae79e.chunk.js.map