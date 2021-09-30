(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{490:function(e,t,a){},491:function(e,t,a){},531:function(e,t,a){"use strict";a.r(t);a(294),a(306),a(490),a(491);var n,o,i,r=a(0),s=a.n(r),c=a(114),l=a.n(c),d=a(27),u=a(59),m=a(542),g=a(154),f=a(541),h={FETCH_LATEST_MESSAGES:Object(f.a)(n||(n=Object(g.a)(["\n  query fetchLatestMessages($channelId: String!) {\n    fetchLatestMessages(channelId: $channelId) {\n      messageId\n      text\n      datetime\n      userId\n    }\n  }\n"]))),FETCH_MORE_MESSAGES:Object(f.a)(o||(o=Object(g.a)(["\n  query fetchMoreMessages($channelId: String!, $messageId: String!, $old: Boolean!) {\n    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {\n      messageId\n      text\n      datetime\n      userId\n    }\n  }\n"]))),POST_MESSAGE:Object(f.a)(i||(i=Object(g.a)(["\n  mutation postMessage($channelId: String!, $text: String!, $userId: String!) {\n    postMessage(channelId: $channelId, text: $text, userId: $userId) {\n      messageId\n      text\n      datetime\n      userId\n    }\n  }\n"])))},b={users:[],channels:[],messages:[],draftMessage:void 0,activeUser:void 0,activeChannel:void 0,activeSidebar:!1,setUsers:function(){},setChannels:function(){},setMessages:function(){},setDraftMessage:function(){},setActiveUser:function(){},setActiveChannel:function(){},setActiveSidebar:function(){}},v=Object(r.createContext)(b),p=function(){return Object(r.useContext)(v)},O=function(e){var t=e.children,a=Object(r.useState)([]),n=Object(d.a)(a,2),o=n[0],i=n[1],c=Object(r.useState)([]),l=Object(d.a)(c,2),u=l[0],m=l[1],g=Object(r.useState)([]),f=Object(d.a)(g,2),h=f[0],b=f[1],p=Object(r.useState)(void 0),O=Object(d.a)(p,2),E=O[0],j=O[1],S=Object(r.useState)(void 0),C=Object(d.a)(S,2),x=C[0],w=C[1],k=Object(r.useState)(void 0),I=Object(d.a)(k,2),y=I[0],N=I[1],M=Object(r.useState)(!1),_=Object(d.a)(M,2),T=_[0],H=_[1],A=Object(r.useCallback)((function(){var e=localStorage.getItem("conversationContext");if(e){var t=JSON.parse(e);t.users&&i(t.users),t.channels&&m(t.channels),t.draftMessage&&j(t.draftMessage),t.activeUser&&w(t.activeUser),t.activeChannel&&N(t.activeChannel)}}),[]),z=Object(r.useCallback)((function(){localStorage.setItem("conversationContext",JSON.stringify({users:o,channels:u,draftMessage:E,activeUser:x,activeChannel:y}))}),[o,u,E,h,x,y]);return Object(r.useEffect)((function(){A()}),[]),Object(r.useEffect)((function(){return window.addEventListener("beforeunload",z),function(){z(),window.removeEventListener("beforeunload",z)}}),[z]),s.a.createElement(v.Provider,{value:{users:o,channels:u,messages:h,draftMessage:E,activeUser:x,activeChannel:y,activeSidebar:T,setUsers:i,setChannels:m,setMessages:b,setDraftMessage:j,setActiveUser:w,setActiveChannel:N,setActiveSidebar:H}},t)},E=a.p+"static/media/user-01.b0d542e2.svg",j=a.p+"static/media/user-02.c6075d3f.svg",S=a.p+"static/media/user-03.fae8153f.svg",C=a(56),x=a.n(C),w=a(288),k=a(287),I=a(5),y=a(57),N=a(36),M=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16;return(e/a).toString().concat(t?"rem":"")},_="#C80030",T="#fff",H="#333",A="#8a8a8a",z="#fff",L="#1a1d21",B="#141414",D="#F9F9F9",R="#8a8a8a",W="#e6ecf3",U=575,$=767,F=991,G=Object(N.a)(Object(y.a)({select:{fontWeight:400,fontSize:M(16),"& .custom-react-select__control":{minHeight:M(32),borderRadius:M(4),boxShadow:"none",borderColor:R},"& .custom-react-select__control--is-disabled":{backgroundColor:D},"& .custom-react-select__control--menu-is-open":{borderColor:_,"&:hover":{borderColor:_}},"& .custom-react-select__value-container":{paddingLeft:M(14)},"& .custom-react-select__placeholder":{color:A,fontSize:"inherit",fontWeight:"inherit",whiteSpace:"nowrap"},"& .custom-react-select__indicator-separator":{display:"none"},"& .custom-react-select__single-value":{color:H,fontSize:"inherit",fontWeight:"inherit"},"& .custom-react-select__single-value--is-disabled":{color:A},"& .custom-react-select__indicator":{height:M(32),padding:[0,M(12)],alignItems:"center","& > [class^=icon-]":{fontSize:M(8),color:H}},"& .custom-react-select__option":{fontSize:"inherit",fontWeight:"inherit"}}},"@media only screen and (max-width: ".concat(U,"px)"),{select:{fontSize:M(14),"& .custom-react-select__control":{minHeight:M(30)},"& .custom-react-select__indicator":{height:M(30)}}})),P=["id","name","options","onChange","disabled","dataTest","className"],J=function(e){var t=e.id,a=e.name,n=e.options,o=e.onChange,i=e.disabled,r=(e.dataTest,e.className),c=Object(w.a)(e,P),l=G();return s.a.createElement(k.a,Object.assign({instanceId:t||a,name:a,onChange:function(e){return o({name:a,value:e})},options:n,className:x()(l.select,r),classNamePrefix:"custom-react-select",isDisabled:i,components:{DropdownIndicator:function(e){return s.a.createElement(I.p.DropdownIndicator,e,s.a.createElement("i",{className:"icon-triangle-down"}))}}},c))};J.defaultProps={id:"",className:"",disabled:!1,isSearchable:!1};var q,X=Object(r.memo)(J),K=a(281),V=a.n(K),Q=function(e){var t=e.stringHtml,a=V.a.sanitize(t,{ADD_ATTR:["target"]});return s.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})},Y=Object(N.a)((q={root:{overflow:"auto",width:M(320),boxSizing:"border-box",padding:[M(16),M(16),M(24)],backgroundColor:L,height:"100%",transform:"translateX(0)",transition:"width .5s ease, padding .3s ease, transform .5s ease"},infoWrapper:{display:"flex",alignItems:"center",marginBottom:M(32)},infoTitle:{marginTop:0,marginBottom:M(12),fontSize:M(14),lineHeight:M(20),color:T},infoGroup:{flex:1},avatarWrapper:{flex:"none",backgroundColor:z,overflow:"hidden",borderRadius:"50%",width:M(50),height:M(50),display:"flex",alignItems:"center",justifyContent:"center",marginRight:M(12)},avatar:{width:"100%"},title:{margin:[M(16),0,M(8)],fontSize:M(20),lineHeight:M(24),color:T},listChannels:{margin:0,padding:0,listStyle:"none"},channelItem:{},link:{display:"block",color:A,textDecoration:"none",padding:[M(12)],fontSize:M(16),lineHeight:M(24),"&.active":{fontWeight:"bold",color:T}}},Object(y.a)(q,"@media only screen and (max-width: ".concat(F,"px)"),{root:{width:M(260)}}),Object(y.a)(q,"@media only screen and (max-width: ".concat($,"px)"),{root:{width:M(240),padding:[M(16),M(8),M(24)]},infoWrapper:{marginBottom:M(24)},infoTitle:{fontSize:M(12),lineHeight:M(16)},avatarWrapper:{width:M(40),height:M(40),marginRight:M(8)},title:{fontSize:M(16),lineHeight:M(20)},link:{padding:[M(8)],fontSize:M(12),lineHeight:M(16)}}),Object(y.a)(q,"@media only screen and (max-width: ".concat(U,"px)"),{root:{position:"absolute",top:0,left:0,zIndex:1,"&:not(.show)":{transform:"translateX(-100%)"}},toggleButton:{display:"block",position:"absolute",right:0,width:M(50),height:M(50),transform:"translateX(100%)",color:T,cursor:"pointer",backgroundColor:L,border:"none"}}),q)),Z=function(){var e=Object(r.useRef)(null),t=Y(),a=p(),n=a.users,o=a.channels,i=a.activeUser,c=a.activeChannel,l=a.activeSidebar,d=a.setMessages,u=a.setDraftMessage,m=a.setActiveUser,g=a.setActiveChannel,f=a.setActiveSidebar,h=Object(r.useCallback)((function(e){(null===c||void 0===c?void 0:c.id)!==e.id&&(g(e),d([]),f(!1),u(void 0))}),[c]),b=Object(r.useCallback)((function(e){(null===i||void 0===i?void 0:i.id)!==e.id&&m(e)}),[i]);return Object(r.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&l&&f(!l)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,l]),s.a.createElement("div",{ref:e,className:x()("custom-scrollbar",t.root,{show:l})},s.a.createElement("div",{className:t.infoWrapper},s.a.createElement("div",{className:t.avatarWrapper},s.a.createElement("img",{alt:null===i||void 0===i?void 0:i.name,src:null===i||void 0===i?void 0:i.avatar,className:t.avatar,"data-test":"sidebar-active-user-avatar"})),s.a.createElement("div",{className:t.infoGroup},s.a.createElement("h4",{className:t.infoTitle},"Switch user"),s.a.createElement(X,{name:"user",options:n,onChange:function(e){var t=e.value;return b(t)},value:i,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name}}))),s.a.createElement("h4",{className:t.title},"Channels"),s.a.createElement("ul",{className:t.listChannels},o.map((function(e){return s.a.createElement("li",{key:e.id,className:t.channelItem,"data-test":"sidebar-channel-item"},s.a.createElement("a",{href:"/#",type:"button",className:x()(t.link,{active:(null===c||void 0===c?void 0:c.id)===e.id}),onClick:function(t){t.preventDefault(),h(e)}},"#\xa0\xa0",e.name))}))))},ee=Object(r.memo)(Z),te=a(543),ae=a(282),ne=a(283),oe=a.n(ne),ie=a.p+"static/media/empty-conversation.8fb4e916.jpg",re=Object(N.a)({root:{padding:M(16),width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxSizing:"border-box",textAlign:"center"},image:{display:"block",width:"100%",maxWidth:M(250)},title:{marginTop:M(16),marginBottom:0,fontSize:M(32),lineHeight:M(48)},description:{marginTop:M(12),marginBottom:0,fontSize:M(16),lineHeight:M(24)}}),se=function(){var e=re();return s.a.createElement("div",{className:e.root},s.a.createElement("img",{alt:"No message",className:e.image,src:ie,"data-test":"empty-image"}),s.a.createElement("h2",{className:e.title,"data-test":"empty-title"},"No message found"),s.a.createElement("p",{className:e.description,"data-test":"empty-description"},"Let's start your conversation"))},ce=Object(r.memo)(se),le=a(189),de=Object(N.a)({root:{padding:M(16),overflow:"auto",display:"flex",boxSizing:"border-box","&.reverse":{flexDirection:"row-reverse","& $avatarWrapper":{marginRight:0,marginLeft:M(12)}}},avatarWrapper:{flex:"none",backgroundColor:z,overflow:"hidden",borderRadius:"50%",width:M(40),height:M(40),position:"relative",marginRight:M(12)},avatar:{width:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},userName:{marginBottom:0,marginTop:M(4),fontSize:M(12),lineHeight:M(16),whiteSpace:"nowrap",overflow:"hidden",fontWeight:"bold"},dateTime:{display:"inline-block",fontWeight:"normal",color:A,fontSize:M(10),marginLeft:M(12)},content:{},message:{fontSize:M(14),lineHeight:M(16)}}),ue=function(e){var t=e.user,a=e.text,n=e.datetime,o=e.isSender,i=de(),c=Object(r.useCallback)((function(e){return new Date(e).toLocaleTimeString()}),[]);return s.a.createElement("div",{className:x()(i.root,o&&"reverse")},s.a.createElement("div",{className:i.avatarWrapper},s.a.createElement("img",{alt:null===t||void 0===t?void 0:t.name,src:null===t||void 0===t?void 0:t.avatar,className:i.avatar,"data-test":"message-user-avatar"})),s.a.createElement("div",{className:i.content},s.a.createElement("p",{className:i.userName,"data-test":"message-user-name"},null===t||void 0===t?void 0:t.name,s.a.createElement("span",{className:i.dateTime,"data-test":"message-date-time"},c(n))),s.a.createElement("div",{className:x()("ck-content",i.message),"data-test":"message-text"},s.a.createElement(Q,{stringHtml:a}))))},me=Object(r.memo)(ue),ge=Object(N.a)({root:{overflow:"auto",height:"100%"},moreButton:{border:"none",textAlign:"center",fontSize:M(14),lineHeight:M(16),color:A,fontWeight:"normal",background:"transparent",display:"block",margin:[M(16),"auto"],cursor:"pointer","&:hover":{color:H}}}),fe=function(){var e=Object(r.useRef)(null),t=ge(),a=p(),n=a.users,o=a.messages,i=a.activeUser,c=a.activeChannel,l=a.setMessages,g=Object(r.useState)(o.length>=10),f=Object(d.a)(g,2),b=f[0],v=f[1],O=Object(r.useMemo)((function(){return o.sort((function(e,t){return new Date(e.datetime).valueOf()-new Date(t.datetime).valueOf()})).map((function(e){return Object(le.a)(Object(le.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))})})).reduce((function(e,t){return-1===e.findIndex((function(e){return e.messageId===t.messageId}))&&e.push(t),e}),[])}),[n,o]);Object(r.useEffect)((function(){e.current&&(e.current.scrollTop=e.current.scrollHeight)}),[e]);var E=Object(r.useCallback)((function(e){0===e.fetchMoreMessages.length?v(!1):l([].concat(Object(u.a)(o),Object(u.a)(e.fetchMoreMessages)))}),[o]),j=Object(r.useCallback)((function(e){window.alert("Cannot fetch more messages"),console.error(e)}),[]),S=Object(m.a)(h.FETCH_MORE_MESSAGES,{onCompleted:E,onError:j}),C=Object(d.a)(S,2),w=C[0],k=C[1].loading,I=Object(r.useCallback)((function(){w({variables:{channelId:null===c||void 0===c?void 0:c.id,messageId:o[0].messageId,old:!0}})}),[o,c]);return s.a.createElement("div",{ref:e,id:"messages-box",className:x()("custom-scrollbar",t.root)},b?s.a.createElement("button",{className:t.moreButton,onClick:I,disabled:k},k?s.a.createElement("span",null,"Loading..."):s.a.createElement("span",null,"Click to load old messages")):null,O.map((function(e){return s.a.createElement(me,Object.assign({key:e.messageId},e,{isSender:e.userId===(null===i||void 0===i?void 0:i.id)}))})))},he=Object(r.memo)(fe),be=Object(N.a)({root:{flex:1,boxSizing:"border-box",display:"flex",flexDirection:"column","& .ck":{"&.ck-editor":{flex:1},"&.ck-toolbar":{display:"none"},"&.ck-editor__main":{height:"100%"},"&.ck-editor__editable":{height:"100%","& p":{fontSize:M(14),lineHeight:M(20)}},"&.ck-editor__editable_inline":{border:"none","&::-webkit-scrollbar":{width:10,height:3},"&::-webkit-scrollbar-track, &::-webkit-scrollbar-thumbhover":{background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"rgba(178, 178, 178, 0.6)",borderRadius:10}}}},header:{flex:"none",margin:0,padding:M(16),fontSize:M(24),lineHeight:M(32),borderBottom:"1px solid ".concat(W)},content:{flex:"1 0 0",overflow:"hidden",borderBottom:"1px solid ".concat(W),position:"relative"},errorPopup:{position:"absolute",bottom:M(12),left:"50%",whiteSpace:"nowrap",transform:"translateX(-50%)",backgroundColor:L,padding:[M(4),M(16)],fontSize:M(12),textAlign:"center",lineHeight:M(20),borderRadius:M(50),color:T},chatBox:{flex:"none",display:"flex",minHeight:M(40),maxHeight:M(120)},sendButton:{flex:"none",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",padding:M(12),width:M(80),cursor:"pointer",border:"none",color:T,backgroundColor:L,transition:"opacity .2s ease","&:not(:disabled):hover":{opacity:.85},"&:disabled":{opacity:.5,cursor:"not-allowed"}}}),ve=function(){var e=be(),t=p(),a=t.messages,n=t.draftMessage,o=t.activeUser,i=t.activeChannel,c=t.setMessages,l=t.setDraftMessage,g=Object(r.useState)(!1),f=Object(d.a)(g,2),b=f[0],v=f[1],O=Object(r.useCallback)((function(e){var t=Object(u.a)(a);t.push(e.postMessage),l(void 0),c(t);var n=document.getElementById("messages-box");n&&(n.scrollTop=n.scrollHeight)}),[a]),E=Object(r.useCallback)((function(){v(!0),setTimeout((function(){v(!1)}),3e3)}),[]),j=Object(r.useCallback)((function(e){c(Object(u.a)(e.fetchLatestMessages))}),[]),S=Object(r.useCallback)((function(e){window.alert("Cannot fetch messages"),console.error(e)}),[]),C=Object(te.a)(h.POST_MESSAGE,{onCompleted:O,onError:E}),x=Object(d.a)(C,2),w=x[0],k=x[1].loading,I=Object(m.a)(h.FETCH_LATEST_MESSAGES,{onCompleted:j,onError:S,notifyOnNetworkStatusChange:!0}),y=Object(d.a)(I,2),N=y[0],M=y[1],_=M.called,T=M.refetch;Object(r.useEffect)((function(){i&&(_&&T?T({channelId:i.id}):N({variables:{channelId:i.id}}))}),[_,i]);var H=Object(r.useCallback)((function(e){l({channelId:(null===i||void 0===i?void 0:i.id)||"",userId:(null===o||void 0===o?void 0:o.id)||"",text:e})}),[o,i]),A=Object(r.useCallback)((function(){!k&&o&&i&&n&&w({variables:{channelId:i.id,userId:o.id,text:n.text}})}),[k,o,i,n]);return s.a.createElement("div",{className:e.root},s.a.createElement("h2",{className:e.header,"data-test":"conversation-channel-name"},null===i||void 0===i?void 0:i.name),s.a.createElement("div",{className:e.content},a.length>0?s.a.createElement(he,null):s.a.createElement(ce,null),b?s.a.createElement("div",{className:e.errorPopup},"Cannot send the message"):null),s.a.createElement("div",{className:e.chatBox},s.a.createElement(ae.CKEditor,{editor:oe.a,data:(null===n||void 0===n?void 0:n.text)||"",onChange:function(e,t){var a=t.getData();H(a)},config:{placeholder:"Type your message here..."}}),s.a.createElement("button",{className:e.sendButton,title:"Send message",disabled:k||!(null===n||void 0===n?void 0:n.text),onClick:A,"data-test":"conversation-submit-button"},s.a.createElement("i",{className:"icon-plane"}))))},pe=Object(r.memo)(ve),Oe=Object(N.a)(Object(y.a)({root:{display:"flex",boxSizing:"border-box",flexDirection:"column",height:"100vh",overflow:"hidden"},header:{display:"flex",alignItems:"center",justifyContent:"center",padding:M(16),flex:"none",height:M(40),backgroundColor:B},logo:{display:"block",height:"100%",flex:"none"},toggleButton:{display:"none"},content:{flex:1,display:"flex",overflow:"hidden",position:"relative"}},"@media only screen and (max-width: ".concat(U,"px)"),{header:{justifyContent:"space-between"},logo:{height:"80%"},toggleButton:{display:"flex",marginLeft:M(16),backgroundColor:z,border:"none",borderRadius:M(4),width:M(30),height:M(30),alignItems:"center",justifyContent:"center",cursor:"pointer"}})),Ee=function(){var e=Oe(),t=p(),a=t.users,n=t.channels,o=t.messages,i=t.activeUser,c=t.activeChannel,l=t.activeSidebar,g=t.setUsers,f=t.setChannels,b=t.setMessages,v=t.setActiveUser,O=t.setActiveChannel,C=t.setActiveSidebar,x=Object(r.useCallback)((function(e){b(Object(u.a)(e.fetchLatestMessages))}),[]),w=Object(r.useCallback)((function(e){window.alert("Cannot fetch messages"),console.error(e)}),[]),k=Object(r.useCallback)((function(e){e.fetchMoreMessages.length>0&&(b([].concat(Object(u.a)(o),Object(u.a)(e.fetchMoreMessages))),setTimeout((function(){var e=document.getElementById("messages-box");e&&(e.scrollTop=e.scrollHeight)}),100))}),[o,document]),I=Object(r.useCallback)((function(e){window.alert("Cannot fetch more messages"),console.error(e)}),[]),y=Object(m.a)(h.FETCH_LATEST_MESSAGES,{onCompleted:x,onError:w,notifyOnNetworkStatusChange:!0}),N=Object(d.a)(y,2),M=N[0],_=N[1],T=_.called,H=_.refetch,A=Object(m.a)(h.FETCH_MORE_MESSAGES,{onCompleted:k,onError:I,notifyOnNetworkStatusChange:!0}),z=Object(d.a)(A,2),L=z[0],B=z[1],D=B.called,R=B.refetch,W=Object(r.useCallback)((function(){if(!a.length){var e=[{id:"Sam",name:"Sam",avatar:E},{id:"Russell",name:"Russell",avatar:j},{id:"Joyse",name:"Joyse",avatar:S}];g(e),i||v(e[0])}if(!n.length){var t=[{id:"1",name:"General Channel"},{id:"2",name:"Technology Channel"},{id:"3",name:"LGTM Channel"}];f(t),c||(O(t[0]),M({variables:{channelId:t[0].id}}))}}),[a,n,i,c]);Object(r.useEffect)((function(){W()}),[W]),Object(r.useEffect)((function(){var e=setInterval((function(){if(c)if(o.length>0){var e={channelId:c.id,messageId:o[o.length-1].messageId,old:!1};D&&R?R(e):L({variables:e})}else T&&H?H({channelId:c.id}):M({variables:{channelId:c.id}})}),5e3);return function(){clearInterval(e)}}),[o,c,D,T]);var U=Object(r.useCallback)((function(){C(!l)}),[l]);return s.a.createElement("div",{className:e.root},s.a.createElement("div",{className:e.header},s.a.createElement("img",{alt:"Anymind",src:"https://anymindgroup.com/wp-content/themes/anymind/img/logo_white.svg",className:e.logo,"data-test":"main-logo"}),l?null:s.a.createElement("button",{className:e.toggleButton,onClick:U},s.a.createElement("i",{className:"icon-hamberger"}))),s.a.createElement("div",{className:e.content},s.a.createElement(ee,null),s.a.createElement(pe,null)))},je=Object(r.memo)(Ee),Se=a(539),Ce=a(540),xe=a(538),we=new Se.a({uri:"https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql",cache:new Ce.a}),ke=function(e){var t=e.children;return s.a.createElement(xe.a,{client:we},t)},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,545)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};l.a.render(s.a.createElement(O,null,s.a.createElement(ke,null,s.a.createElement(je,null))),document.getElementById("root")),Ie()}},[[531,1,2]]]);
//# sourceMappingURL=main.9cf07061.chunk.js.map