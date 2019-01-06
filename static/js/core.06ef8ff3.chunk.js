(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{34:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(8),c=n.n(o),i=n(13),u=n(9),l=n(10),f=n(19),d=n(31).a.div({down:{opacity:0,y:50,delay:function(e){return e.delay}},up:{opacity:1,y:0,delay:function(e){return e.delay}},left:{opacity:1,x:0,delay:function(e){return e.delay}},right:{opacity:0,x:200,delay:function(e){return e.delay}},transition:{opacity:{type:"spring"}}}),p=function(e){return a.a.createElement(d,Object.assign({initialPose:"down",pose:"up"},e),e.children)},m=function(e){return a.a.createElement(d,Object.assign({initialPose:"right",pose:"left"},e),e.children)},s=n(6);function x(){var e=Object(u.a)(["\n  position: absolute;\n  right: 250px;\n  transform: rotate(130deg);\n  top: 285px;\n  height: 20px;\n  width: 510px;\n  border-radius: 1200px;\n  background-color: #ffe6e5;\n  box-shadow: inset 0 0 5px #ffe6e5, 0 0 20px ",", 0 0 30px ",", 0 0 20px ",", 0 0 50px ",";\n"]);return x=function(){return e},e}function h(){var e=Object(u.a)(["\n  position: absolute;\n  right: 0px;\n  transform: rotate(60deg);\n  top: 40%;\n  height: 20px;\n  width: 700px;\n  border-radius: 1200px;\n  background-color: #ffe6e5;\n  box-shadow: inset 0 0 5px #ffe6e5, 0 0 20px ",", 0 0 30px ",", 0 0 20px ",", 0 0 50px ",";\n  z-index: 1;\n"]);return h=function(){return e},e}function E(){var e=Object(u.a)(["\n  position: relative;\n  width: 200px;\n  height: 500px;\n\n  @media (max-width: 1500px) {\n    transform: scale(0.8) translateX(100px);\n  }\n\n  @media (max-width: 1350px) {\n    transform: scale(0.6) translateX(200px);\n  }\n"]);return E=function(){return e},e}var b=s.default.div(E()),g=s.default.div(h(),function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color}),v=s.default.div(x(),function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color}),y=function(e){var t=e.theme;return a.a.createElement(b,null,a.a.createElement(g,{color:"light"===t?"#3232ff":"#e9032c"}),a.a.createElement(v,{color:"light"===t?"#3232ff":"#e9032c"}))},O=n(32);function j(){var e=Object(u.a)(["\n  border: none;\n  outline: none;\n"]);return j=function(){return e},e}function w(){var e=Object(u.a)(["\n  svg:hover {\n  fill: ",";\n    cursor: pointer;\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(u.a)(["\n  cursor: pointer;\n  padding-right: 20px;\n"]);return k=function(){return e},e}var S={theme:"dark"},C=function(e){return"dark"===e?"light":"dark"},D=Object(s.default)(f.Text)(k()),F=Object(s.default)(f.Flex)(w(),function(e){return"dark"===e.theme?"#e9032c":"#3232ff"}),T=s.default.a(j()),_=function(e){var t=e.theme,n=e.dispatch;return a.a.createElement(f.Fixed,{width:"100%",backgroundColor:"transparent"},a.a.createElement(f.Flex,{justifyContent:"flex-end"},a.a.createElement(p,{delay:500},a.a.createElement(D,{color:"dark"===t?"#fff":"#000",fontSize:"30px",padding:"10px",onClick:function(e){return n({type:"TOGGLE_SIDE"})}},"Turn to ",C(t)," Side !"))))},z=function(e){var t=e.theme;return a.a.createElement(F,{justifyContent:"flex-start",mt:"25px",theme:t},a.a.createElement(T,{href:"https://github.com/kanitsharma"},a.a.createElement(O.a,{color:"dark"===t?"#fff":"#000",fontSize:"50px",style:{padding:"0px 20px"}})),a.a.createElement(T,{href:"https://www.linkedin.com/in/kanit-sharma/"},a.a.createElement(O.b,{color:"dark"===t?"#fff":"#000",fontSize:"50px",style:{padding:"0px 20px"}})),a.a.createElement(T,{href:"https://twitter.com/kanitsharma"},a.a.createElement(O.c,{color:"dark"===t?"#fff":"#000",fontSize:"50px",style:{padding:"0px 20px"}})))},I=function(e){var t=J("home"),n=Object(i.a)(t,2),r=n[0].theme,o=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{theme:r,dispatch:o}),a.a.createElement(f.Flex,{flexDirection:"row",backgroundColor:"light"===r?"#fff":"#000",height:"100%",alignItems:"center",style:{overflow:"hidden"},justifyContent:"space-between"},a.a.createElement(f.Flex,{flexDirection:"column",marginLeft:"80px"},a.a.createElement(p,null,a.a.createElement(f.Text,{fontSize:"180px",color:"dark"===r?"#fff":"#000"},"Kanit Sharma")),a.a.createElement(p,{delay:300},a.a.createElement(f.Text,{fontSize:"70px",opacity:"0",color:"dark"===r?"#fff":"#000"},"Full Stack JavaScript Developer")),a.a.createElement(z,{theme:r})),a.a.createElement(f.Flex,{flexDirection:"column",alignItems:"flex-end",marginLeft:"100px"},a.a.createElement(m,{delay:200},a.a.createElement(y,{theme:r})))))},L=n(11);var P,R=(P={home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_SIDE":return{theme:C(e.theme)};default:return Object(l.a)({},e)}}},function(e,t){return e?Object.keys(P).reduce(function(n,r){return Object(l.a)({},n,Object(L.a)({},r,P[r](e[r],t)))},{}):Object.keys(P).reduce(function(e,t){return Object(l.a)({},e,Object(L.a)({},t,P[t](void 0,{})))},{})});n.d(t,"renderReact",function(){return B}),n.d(t,"useStore",function(){return J});var G=function(e){var t=e(),n=Object(r.createContext)(t),o=window.__REDUX_DEVTOOLS_EXTENSION__.connect();return o.init(t),{Provider:function(c){var u=c.children,l=Object(r.useReducer)(e,t),f=Object(i.a)(l,2),d=f[0],p=f[1];return a.a.createElement(n.Provider,{value:[d,function(e){o.send(e,d),p(e)}]},u)},useStore:function(e){var t=Object(r.useContext)(n),a=Object(i.a)(t,2),o=a[0],c=a[1];return[e?o[e]:o,c]}}}(R),X=G.Provider,J=G.useStore,N=function(e){var t=e.Root;return a.a.createElement(X,null,a.a.createElement(t,null))},B=function(){c.a.render(a.a.createElement(N,{Root:I}),document.getElementById("root"))}}}]);
//# sourceMappingURL=core.06ef8ff3.chunk.js.map