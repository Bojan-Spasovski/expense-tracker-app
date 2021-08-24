(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),i=n(2),s=n(1),r=(n(15),n(16),n(0)),d=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},o=(n(18),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{className:"expenses-filter",children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onSaveSelectedYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(19),n(20);var u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})},j=(n(21),function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(d,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),b=function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(9),m=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),v=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})},h=function(e){var t=Object(s.useState)("2021"),n=Object(i.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(d,{className:"expenses",children:[Object(r.jsx)(o,{selected:a,onSaveSelectedYear:function(e){c(e)}}),Object(r.jsx)(v,{expenses:l}),Object(r.jsx)(b,{items:l})]})})},p=n(7),f=(n(24),function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],l=Object(s.useState)(""),d=Object(i.a)(l,2),o=d[0],u=d[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),x=b[0],m=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x)};e.onSaveExpenseData(n),c(""),u(""),m("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:o,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"Date",min:"2019-01-01",max:"2025-12-31",value:x,onChange:function(e){m(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),w=(n(25),function(e){var t=Object(s.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),D=[{id:"e1",title:"Tinex",amount:78,date:new Date(2020,7,14)},{id:"e2",title:"Car Registration",amount:200,date:new Date(2021,2,12)},{id:"e3",title:"Netfix Subscription",amount:12,date:new Date(2021,4,5)},{id:"e4",title:"Vacation",amount:800,date:new Date(2021,5,12)},{id:"e5",title:"Car Repair",amount:150,date:new Date(2021,2,8)},{id:"e6",title:"Shopping",amount:80,date:new Date(2021,3,7)},{id:"e7",title:"Software",amount:112,date:new Date(2021,6,19)},{id:"e8",title:"Present",amount:90,date:new Date(2020,6,19)},{id:"e9",title:"Groceries",amount:30,date:new Date(2020,6,19)},{id:"e10",title:"Weekend",amount:55,date:new Date(2020,3,12)},{id:"e11",title:"Software",amount:65,date:new Date(2020,9,7)},{id:"e12",title:"Drone parts",amount:250,date:new Date(2020,4,4)},{id:"e13",title:"Dog food",amount:12,date:new Date(2020,2,19)},{id:"e14",title:"Dog present",amount:20,date:new Date(2020,2,29)},{id:"e15",title:"Weekend gathering",amount:45,date:new Date(2020,5,23)},{id:"e16",title:"Home supllies",amount:90,date:new Date(2020,5,3)},{id:"e17",title:"Home supllies",amount:15,date:new Date(2021,1,3)},{id:"e18",title:"Canon battery",amount:80,date:new Date(2021,1,7)},{id:"e19",title:"Home supllies",amount:150,date:new Date(2021,2,9)},{id:"e20",title:"Tinex",amount:59,date:new Date(2021,2,14)},{id:"e21",title:"Udemy course",amount:90,date:new Date(2021,2,24)}],_=function(){var e=Object(s.useState)(D),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(h,{item:n})]})};c.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.02a8063f.chunk.js.map