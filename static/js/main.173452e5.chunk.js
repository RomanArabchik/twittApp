(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a,c=n(0),i=n(13),o=n.n(i),r=(n(24),n(8)),l=n(7),s=n(3),u=n(4),b=n(2),d=n(6),j=n(5),h=n(14),f=(n(25),n(15)),p=n(1),m=f.a.div(a||(a=Object(h.a)(["\n    align-items: flex-end;\n    justify-content: space-between;\n    display: flex;\n    h1 {\n        font-size: 26px;\n        color: ",";\n        :hover {\n            color: blue;\n        }\n    }\n    h2 {\n        font-size: 1.2rem;\n        color: grey;\n    }\n"])),(function(e){return e.colored?"red":"black"})),O=function(e){var t=e.liked,n=e.allPosts;return Object(p.jsxs)(m,{colored:!0,children:[Object(p.jsx)("h1",{children:"Roman Arabchik"}),Object(p.jsxs)("h2",{children:[" ",n," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",t]})]})},v=(n(31),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return Object(p.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(c.Component)),g=(n(32),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,c=e.props,i=c.onFilterSelect,o=c.filter===n?"btn-info":"btn-outline-secondary";return Object(p.jsx)("button",{type:"button",className:"btn ".concat(o),onClick:function(){return i(n)},children:a},n)}));return Object(p.jsx)("div",{className:"btn-group",children:t})}}]),n}(c.Component)),x=n(19),k=(n(33),n(34),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onToggleImportant,c=e.onToggleLiked,i="app-list-item d-flex justify-content-between";return e.important&&(i+=" important"),e.like&&(i+=" like"),Object(p.jsxs)("div",{className:i,children:[Object(p.jsx)("span",{className:"app-list-item-label",onClick:c,children:t}),Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(p.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(p.jsx)("i",{className:"fa fa-star"})}),Object(p.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(p.jsx)("i",{className:"fa fa-trash-o"})}),Object(p.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(c.Component)),S=function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,c=e.onToggleLiked,i=t.map((function(e){var t=e.id,i=Object(x.a)(e,["id"]);return Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)(k,Object(r.a)(Object(r.a)({},i),{},{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t,"important")},onToggleLiked:function(){return c(t,"like")}}))},t)}));return Object(p.jsx)("ul",{className:"app-list list-group-item",children:i})},y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:"bottom=panel d-flex",onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{type:"text",placeholder:"\u041e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(p.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(c.Component),I=(n(35),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={data:[{label:"Going to learn React",important:!1,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a.onToggleSelector=a.onToggleSelector.bind(Object(b.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(b.a)(a)),a.maxId=4,a}return Object(u.a)(n,[{key:"deleteItem",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),c=n.slice(0,a),i=n.slice(a+1);return{data:[].concat(Object(l.a)(c),Object(l.a)(i))}}))}},{key:"addItem",value:function(e){var t={label:e,important:!1,like:!1,id:this.maxId++};this.setState((function(e){var n=e.data;return{data:[].concat(Object(l.a)(n),[t])}}))}},{key:"onToggleSelector",value:function(e,t){this.setState((function(n){var a=n.data,c=a.findIndex((function(t){return t.id===e})),i=a[c],o=Object(r.a)({},i);o[t]=!i[t];var s=[].concat(Object(l.a)(a.slice(0,c)),[o],Object(l.a)(a.slice(c+1)));return console.log(t),{data:s}}))}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter((function(e){return e.like})):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,c=t.filter((function(e){return e.like})).length,i=t.length,o=this.state.data.filter((function(e){return"object"==typeof e&&Object.entries(e).length>0})),r=this.filterPost(this.searchPost(o,n),a);return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(O,{liked:c,allPosts:i}),Object(p.jsxs)("div",{className:"search-panel d-flex",children:[Object(p.jsx)(v,{onUpdateSearch:this.onUpdateSearch}),Object(p.jsx)(g,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(p.jsx)(S,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleSelector,onToggleLiked:this.onToggleSelector}),Object(p.jsx)(y,{onAdd:this.addItem})]})}}]),n}(c.Component));o.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.173452e5.chunk.js.map