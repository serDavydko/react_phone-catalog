(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=a(15),i=a(23),o=a(7),u=(a(29),a(4)),m=a(8),d=function(){var e=Object(n.useContext)(y).items;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"basket-container"},c.a.createElement("img",{className:"basket-image",src:"img/icos/cart4.png",alt:"basket"}),e.length>=1&&c.a.createElement("div",{className:"basket-items"},c.a.createElement("span",null,e.length))))},p=function(){return c.a.createElement("header",{className:"head"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.c,{to:"/",exact:!0,className:"header-link",activeClassName:"active-link"},"Home")),c.a.createElement("li",null,c.a.createElement(u.c,{to:"/phones",className:"header-link",activeClassName:"active-link"},"Phones"))),c.a.createElement(u.b,{to:"/basket",className:"basket"},c.a.createElement(d,null)))},E=function(){return c.a.createElement("h1",{className:"greatings-header"},"Welcome back, stranger")},f=function(){var e=Object(n.useContext)(y),t=e.items,a=e.handleClickClear,r=e.handleClickChangeCount;return t.length<1?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"greatings-header"},"Basket is empty,",c.a.createElement(u.b,{className:"link-to-phones",to:"phones"},c.a.createElement("span",null,"explore phones")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"basket-items-group"},t.map(function(e,t){return c.a.createElement("div",{className:"basket-item-container"},c.a.createElement(u.b,{to:"phones/".concat(e.id)},c.a.createElement("img",{src:"".concat(e.imageUrl),className:"product-image-basket",alt:e.id})),c.a.createElement("div",null,c.a.createElement("h3",null,e.id),c.a.createElement("p",{className:"basket-count"},"Count:"),c.a.createElement("img",{onClick:function(){return r("up",t)},src:"img/icos/menu-up-outline.png",alt:"up"}),c.a.createElement("div",{className:"items-counter"},e.count),c.a.createElement("img",{onClick:function(){return r("down",t)},src:"img/icos/menu-down-outline.png",alt:"down"})),c.a.createElement("img",{onClick:function(){return a(t)},className:"close-button",src:"img/icos/close.svg",alt:"clear"}))})))},h=a(5),b=a.n(h),g=a(9),v=a(22),k=a.n(v),N=function(){return c.a.createElement("div",{className:"lds-hourglass"})},C=function(){var e=Object(g.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(g.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=Object(n.useContext)(y),a=t.handleClickAdd,r=t.items,l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],f=p[1],h=Object(n.useState)([]),v=Object(o.a)(h,2),O=v[0],j=v[1];Object(n.useEffect)(function(){Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,f(t),j(t),m(!0);case 6:case"end":return e.stop()}},e)}))()},[]);var w=function(e,t){var a=t.filter(function(t){return t.id.toUpperCase().includes(e.toUpperCase())});j(a)};return i?c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"search-Form",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("input",{onChange:function(e){return function(e){var t=e.target.value;e.preventDefault(),w(t,E)}(e)},size:"40",placeholder:"try to find something",className:"search-Phone",type:"input",name:"searchfield"})),c.a.createElement("ul",{className:"catalog-container"},O.map(function(t){return c.a.createElement("li",{className:"catalog-item"},c.a.createElement(u.b,{to:"".concat(e.match.path,"/").concat(t.id),className:"link card-link"},c.a.createElement("img",{src:"".concat(t.imageUrl),className:"product-image",alt:t.id}),c.a.createElement("p",{className:"title"},t.name),c.a.createElement("p",{className:"overview"},t.snippet)),c.a.createElement("button",{disabled:r.some(function(e){return e.id===t.id}),className:"buy-button\n              ".concat(r.some(function(e){return e.id===t.id})&&"disabled-button"),type:"button",onClick:function(e){return a(e,{id:t.id,imageUrl:t.imageUrl,count:1})}},r.some(function(e){return e.id===t.id})?"IN YOUR CART":"ADD TO CART"))})),c.a.createElement(k.a,{ContainerClassName:"scroll-button",EasingType:"easeInOutSine",StopPosition:1,ShowAtPosition:250})):c.a.createElement(N,null)},w=function(e){var t=e.match,a=Object(n.useContext)(y),r=a.handleClickAdd,l=a.items,s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],f=p[1],h=Object(n.useState)(0),v=Object(o.a)(h,2),k=v[0],C=v[1];Object(n.useEffect)(function(){Object(g.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.params.idPhone);case 2:a=e.sent,f(a),m(!0);case 5:case"end":return e.stop()}},e)}))()},[]);return u?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"phone-container"},c.a.createElement("section",{className:"phone-pictures-container"},c.a.createElement("img",{className:"main-picture",onClick:function(){return function(){var e=0;k!==E.images.length-1&&(e=k+1),C(e)}()},src:"".concat(E.images&&E.images[k]),alt:E.id}),E.images&&E.images.map(function(e,t){return c.a.createElement("img",{className:"image-detail ".concat(t===k&&"active-image"),src:e,alt:E.id,onClick:function(){C(t)}})})),c.a.createElement("section",{className:"phone-detail-container"},c.a.createElement("div",{className:"item-header"},c.a.createElement("h2",null,E.id),c.a.createElement("button",{type:"button",disabled:l.some(function(e){return e.id===E.id}),className:"add-button\n                ".concat(l.some(function(e){return e.id===E.id})&&"disabled-button"),onClick:function(e){return r(e,{id:E.id,imageUrl:E.images[0],count:1})}},l.some(function(e){return e.id===E.id})?"IN YOUR CART":"ADD TO CART")),c.a.createElement("p",null,E.description),c.a.createElement("div",{className:"phone-additional"},"Details...")))):c.a.createElement(N,null)},x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"error 404"),c.a.createElement("h4",null,"Page not foung"),c.a.createElement("p",null," Go to menu and choose correct address"))},y=c.a.createContext(),A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement(y.Provider,{value:{items:a,handleClickAdd:function(e,t){e.preventDefault(),r([].concat(Object(i.a)(a),[t]))},handleClickClear:function(e){r(a.filter(function(t,a){return a!==e}))},handleClickChangeCount:function(e,t){switch(e){case"up":r(a.map(function(e,a){return a===t?Object(s.a)({},e,{count:e.count+1}):e}));break;case"down":r(a.map(function(e,a){return a===t?Object(s.a)({},e,{count:0===e.count?0:e.count-1}):e}));break;default:return[]}}}},c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,{className:"Header"}),c.a.createElement("main",null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,render:E}),c.a.createElement(m.a,{path:"/basket",component:f}),c.a.createElement(m.a,{path:"/phones",exact:!0,render:function(e){return c.a.createElement(j,Object.assign({className:"PhonePage"},e))}}),c.a.createElement(m.a,{path:"/phones/:idPhone",render:function(e){return c.a.createElement(w,e)}}),c.a.createElement(m.a,{render:x}))))))};l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5cff2ef4.chunk.js.map