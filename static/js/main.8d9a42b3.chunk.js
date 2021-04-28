(this["webpackJsonpdnd-todoapp"]=this["webpackJsonpdnd-todoapp"]||[]).push([[0],{26:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,d,u,l,s,b,f,p,j,O,x,h,v,g=t(0),y=t.n(g),m=t(8),k=t.n(m),S=t(4),w=(t(26),t(5)),C=t(6),F=Symbol(),I=function(n){return new Proxy(n,{construct:function(n,e,t){return n.prototype!==t.prototype?Reflect.construct(n,e,t):(n[F]||(n[F]=Reflect.construct(n,e,t)),n[F])}})},E=function(){function n(){Object(w.a)(this,n)}return Object(C.a)(n,null,[{key:"deepCopy",value:function(n){return JSON.parse(JSON.stringify(n))}}]),n}(),N=t(34),J=I(i=function(){function n(e){Object(w.a)(this,n),this.stateFunction=void 0,this.stateFunction=e}return Object(C.a)(n,[{key:"addCard",value:function(n){this.stateFunction((function(e){var t=E.deepCopy(e),i={id:Object(N.a)(),list_id:n,value:"",completed:!1};return t.push(i),t}))}},{key:"updateCard",value:function(n){this.stateFunction((function(e){var t=E.deepCopy(e),i=t.findIndex((function(e){return e.id===n.id}));return t[i]=n,t}))}},{key:"deleteCard",value:function(n){this.stateFunction((function(e){return E.deepCopy(e).filter((function(e){return e.id!==n.id}))}))}},{key:"deleteCardByList",value:function(n){this.stateFunction((function(e){return E.deepCopy(e).filter((function(e){return e.list_id!==n}))}))}}]),n}())||i,L=I(r=function(){function n(e){Object(w.a)(this,n),this.stateFunction=void 0,this.stateFunction=e}return Object(C.a)(n,[{key:"changeName",value:function(n){this.stateFunction((function(e){var t=E.deepCopy(e);return t.name=n,t}))}}]),n}())||r,B=t(20),D=I(a=function(){function n(e){Object(w.a)(this,n),this.stateFunction=void 0,this.stateFunction=e}return Object(C.a)(n,[{key:"addList",value:function(){this.stateFunction((function(n){return[].concat(Object(B.a)(E.deepCopy(n)),[{id:Object(N.a)(),name:"List name"}])}))}},{key:"updateList",value:function(n){this.stateFunction((function(e){var t=E.deepCopy(e),i=t.findIndex((function(e){return e.id===n.id}));return t[i]=n,t}))}},{key:"deleteList",value:function(n){this.stateFunction((function(e){return E.deepCopy(e).filter((function(e){return e.id!==n.id}))}))}}]),n}())||a,R=t(2),P=t(3),_=t(1),A=P.a.div(c||(c=Object(R.a)(["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  background: #282828;\n"]))),H=P.a.h2(o||(o=Object(R.a)(["\n  margin: 0;\n  padding: 15px;\n  color: white;\n"]))),K=P.a.input(d||(d=Object(R.a)(["\n  margin: 0;\n  padding: 0;\n  color: white;\n  border: none;\n  background: transparent;\n  font-weight: bold;\n\n  &:focus {\n    outline: 0;\n  }\n"]))),V=P.a.div(u||(u=Object(R.a)(["\n  flex: 1;\n  display: inline-flex;\n  padding: 0 15px 15px;\n  overflow-x: auto;\n"]))),z=function(n){var e=n.name,t=n.boardService,i=n.children,r=Object(g.useState)(!1),a=Object(S.a)(r,2),c=a[0],o=a[1],d=Object(g.useRef)(null),u=function(){""!==d.current.value.trim()&&(t.changeName(d.current.value),o(!1))};return Object(_.jsxs)(A,{children:[Object(_.jsx)(H,{onDoubleClick:function(){return o(!0)},children:c?Object(_.jsx)(K,{type:"text",ref:d,defaultValue:e,onBlur:u,onKeyDown:function(n){"Enter"!==n.key&&"Escape"!==n.key||u()}}):Object(_.jsx)(_.Fragment,{children:e})}),Object(_.jsx)(V,{children:i})]})},M=t(7),T=t(14),W=t(10),q=P.a.div(l||(l=Object(R.a)(["\n  min-width: 280px;\n  max-width: 280px;\n  background: #ebecf0;\n  border-radius: 3px;\n\n  /* Enables Scroll on CardWrapper */\n  position: relative;\n  height: 100%;\n\n  & ~ & {\n    margin-left: 15px;\n  }\n"]))),G=P.a.div(s||(s=Object(R.a)(["\n  position: absolute;\n  width: 100%;\n  /*   Top: 40 for header */\n  top: 40px;\n  /*   Bottom: 45 for button */\n  bottom: 45px;\n  overflow-y: auto;\n\n\n  /* width */\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  /* Track */\n\n  &::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  /* Handle */\n\n  &::-webkit-scrollbar-thumb {\n    background: #c4c4c4;\n  }\n"]))),Q=P.a.h4(b||(b=Object(R.a)(["\n  padding: 10px;\n  margin: 0;\n\n  &:hover > * div:last-of-type {\n    color: black;\n    transition: all 500ms;\n    opacity: 1;\n  }\n"]))),U=P.a.input(f||(f=Object(R.a)(["\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  border: none;\n  background: transparent;\n\n  &:focus {\n    outline: 0;\n  }\n"]))),X=P.a.button(p||(p=Object(R.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border: none;\n  background: lightgray;\n  padding: 15px;\n"]))),Y=P.a.div(j||(j=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  & > *:last-of-type {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px 0 15px;\n    color: #ebecf0;\n    opacity: 0;\n  }\n\n"]))),Z=function(n){var e=n.data,t=n.children,i=n.cardService,r=n.listService,a=Object(g.useState)(!1),c=Object(S.a)(a,2),o=c[0],d=c[1],u=Object(g.useRef)(null),l=function(){""!==u.current.value.trim()&&(e.name=u.current.value,r.updateList(e),d(!1))};return Object(_.jsxs)(q,{children:[Object(_.jsx)(Q,{onDoubleClick:function(){return d(!0)},children:o?Object(_.jsx)(U,{type:"text",ref:u,defaultValue:e.name,onBlur:l,onKeyDown:function(n){"Enter"!==n.key&&"Escape"!==n.key||l()}}):Object(_.jsxs)(Y,{children:[Object(_.jsx)("div",{children:e.name}),Object(_.jsx)("div",{onClick:function(){r.deleteList(e),i.deleteCardByList(e.id)},children:Object(_.jsx)(T.a,{})})]})}),Object(_.jsx)(W.c,{droppableId:e.id,children:function(n){return Object(_.jsxs)(G,Object(M.a)(Object(M.a)({},n.droppableProps),{},{ref:n.innerRef,children:[t,n.placeholder]}))}}),Object(_.jsx)(X,{onClick:function(){return i.addCard(e.id)},children:"Add Card +"})]})},$=P.a.div(O||(O=Object(R.a)(["\n  background: white;\n  margin: 0 5px 5px;\n  padding: 10px;\n  border-radius: 3px;\n  overflow-wrap: break-word;\n\n  & ~ & {\n    margin-top: 5px;\n  }\n\n  &:hover > * div:last-of-type {\n    color: black;\n    transition: all 500ms;\n\n  }\n"]))),nn=P.a.textarea(x||(x=Object(R.a)(["\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 15px;\n  display: block;\n  overflow: hidden;\n  resize: none;\n\n  &:focus {\n    outline: 0;\n  }\n"]))),en=P.a.div(h||(h=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  & > *:last-of-type {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px 0 15px;\n    color: white;\n  }\n\n"]))),tn=function(n){var e=n.data,t=n.cardService,i=n.index,r=Object(g.useState)(""===e.value),a=Object(S.a)(r,2),c=a[0],o=a[1],d=Object(g.useRef)(null);Object(g.useEffect)((function(){c&&u()}),[c]);var u=function(){var n=d.current;n.style.height="auto",n.style.height=(null===n||void 0===n?void 0:n.scrollHeight)+"px"},l=function(){if(""===d.current.value.trim())return t.deleteCard(e);o(!1),e.value=d.current.value,t.updateCard(e)},s=function(n){"Enter"!==n.key&&"Escape"!==n.key||l()};return Object(_.jsx)(W.b,{draggableId:e.id,index:i,children:function(n){return Object(_.jsx)($,Object(M.a)(Object(M.a)(Object(M.a)({onDoubleClick:function(){return o(!0)}},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:c?Object(_.jsx)(nn,{autoFocus:!0,ref:d,defaultValue:e.value,onChange:u,onKeyDown:s,onBlur:l}):Object(_.jsxs)(en,{children:[Object(_.jsx)("div",{children:e.value}),Object(_.jsx)("div",{onClick:function(){return t.deleteCard(e)},children:Object(_.jsx)(T.a,{})})]})}))}})},rn=P.a.button(v||(v=Object(R.a)(["\n  width: 280px;\n  border: none;\n  background: #ebecf0;\n  border-radius: 3px;\n  flex: none;\n  align-self: flex-start;\n  padding: 15px;\n  \n  * ~ & {\n    margin-left: 15px;\n  }\n"])));var an,cn,on,dn=function(n){var e=n.listService;return Object(_.jsx)(rn,{onClick:function(){return e.addList()},children:"Add List +"})};var un=function(){var n=Object(g.useState)({name:"Board name"}),e=Object(S.a)(n,2),t=e[0],i=e[1],r=Object(g.useState)([]),a=Object(S.a)(r,2),c=a[0],o=a[1],d=Object(g.useState)([]),u=Object(S.a)(d,2),l=u[0],s=u[1];return Object(g.useEffect)((function(){an=new L(i),cn=new D(o),on=new J(s)}),[t,l,c]),Object(g.useEffect)((function(){var n=localStorage.getItem("boardState"),e=localStorage.getItem("listsState"),t=localStorage.getItem("cardsState");n&&i(JSON.parse(n)),e&&o(JSON.parse(e)),t&&s(JSON.parse(t))}),[]),Object(g.useEffect)((function(){localStorage.setItem("boardState",JSON.stringify(t)),localStorage.setItem("listsState",JSON.stringify(c)),localStorage.setItem("cardsState",JSON.stringify(l))}),[t,c,l]),Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(z,{name:t.name,boardService:an,children:[Object(_.jsx)(W.a,{onDragEnd:function(n){var e=n.draggableId,t=n.source,i=n.destination;i&&(i.index===t.index&&i.droppableId===t.droppableId||s((function(n){var r=E.deepCopy(n),a=r.find((function(n){return n.id===e}));return a.list_id=i.droppableId,r.splice(t.index,1),r.splice(i.index,0,a),r})))},children:c.map((function(n){return Object(_.jsx)(Z,{data:n,cardService:on,listService:cn,children:l.flatMap((function(e,t){return e.list_id===n.id?Object(_.jsx)(tn,{data:e,cardService:on,index:t},e.id):""}))},n.id)}))}),Object(_.jsx)(dn,{listService:cn})]})})};k.a.render(Object(_.jsx)(y.a.StrictMode,{children:Object(_.jsx)(un,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8d9a42b3.chunk.js.map