(this["webpackJsonpstealth-tasks"]=this["webpackJsonpstealth-tasks"]||[]).push([[0],{37:function(e,a,n){e.exports=n(50)},42:function(e,a,n){},43:function(e,a,n){},44:function(e,a,n){},49:function(e,a,n){e.exports=n.p+"static/media/testImage.0baeaccd.png"},50:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),o=n(7),r=n.n(o),c=n(22),m=(n(42),n(43),function(e){return l.a.createElement("div",{className:"modal"},e.children)}),i=(n(44),n(26)),s=n.n(i),u=n(81),d=n(25),f=n.n(d),E=function(e){return e.folderArr.map((function(e){return l.a.createElement(g,{folder:e})}))},g=function(e){var a,n=e.folder,o=Object(t.useState)(!1),r=Object(c.a)(o,2),m=r[0],i=r[1];function d(e){n.name=e,i(!1)}return a=n.name.length>10?n.name.slice(0,10)+"...":n.name,console.log(a),m?l.a.createElement("div",{className:"folder"},l.a.createElement(f.a,{className:"foldericon"}),l.a.createElement(u.a,{autoFocus:!0,defaultValue:n.name,onBlur:function(e){return d(e.target.value)},onKeyDown:function(e){13!==e.keyCode&&"Escape"!==e.key||d(e.target.value)}}),l.a.createElement(s.a,{className:"editicon",onClick:function(){return i(!1)}})):l.a.createElement("div",{className:"folder"},l.a.createElement(f.a,{className:"foldericon"}),l.a.createElement("h3",{className:"text"},a),l.a.createElement(s.a,{className:"editicon",onClick:function(){return i(!0)}}))},v=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"box"},l.a.createElement(E,{folderArr:[{name:"folder1"},{name:"folder2"},{name:"folder3"},{name:"folder4"},{name:"folder5"}]})))},h=n(33),N=n.n(h),k=function(e){var a=e.ModalToggle,t=e.modal;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{onClick:a,className:"logo",src:n(49),alt:"logo"}),t?l.a.createElement(l.a.Fragment,null):l.a.createElement(N.a,{className:"icon"}))};function p(e){var a=e.modalOn,n=e.setModalOn,t=function(){n(!a)};return a?l.a.createElement(m,null,l.a.createElement(k,{modal:!0,ModalToggle:t})):l.a.createElement("div",{className:"modal-container"},l.a.createElement(k,{modal:!1,ModalToggle:t})," ")}var b=function(){var e=Object(t.useState)(!1),a=Object(c.a)(e,2),n=a[0],o=a[1];return l.a.createElement("div",{className:"container",onClick:function(){n&&o(!1)}},l.a.createElement(v,null),l.a.createElement(p,{modalOn:n,setModalOn:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b202334c.chunk.js.map