"use strict";(self.webpackChunkcomplex_react_app=self.webpackChunkcomplex_react_app||[]).push([[456],{456:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(540),s=a(569),n=a(266),c=a(767),r=a(976),o=a(149),m=a(210),u=a(663),i=a(953),d=a(343),p=a(306);const h=function(){const e=(0,c.Zp)(),t=(0,l.useContext)(d.A),a=(0,l.useContext)(p.A),{id:h}=(0,c.g)(),[f,E]=(0,l.useState)(!0),[w,y]=(0,l.useState)([]);if((0,l.useEffect)((()=>{const e=n.A.CancelToken.source();return async function(){try{const t=await n.A.get(`/post/${h}`,{cancelToken:e.token});y(t.data),E(!1)}catch(e){console.log("There was a error or the request was cancelled")}}(),()=>{e.cancel()}}),[h]),!f&&!w)return l.createElement(i.A,null);if(f)return l.createElement(s.A,{title:"....."},l.createElement(o.A,null));const N=new Date(w.createdDate),g=`${N.getMonth()+1} /${N.getDate()}/${N.getFullYear()}`;return l.createElement(s.A,{title:w.title},l.createElement("div",{className:"d-flex justify-content-between"},l.createElement("h2",null,w.title),!!t.loggedIn&&t.user.username==w.author.username&&l.createElement("span",{className:"pt-2"},l.createElement(r.N_,{to:`/post/${w._id}/edit`,"data-tooltip-content":"Edit","data-tooltip-id":"edit",className:"text-primary mr-2"},l.createElement("i",{className:"fas fa-edit"})),l.createElement(u.m_,{id:"edit",className:"custom-tooltip"})," ",l.createElement("a",{onClick:async function(){if(window.confirm("Do you really want to delete this post"))try{"Success"==(await n.A.delete(`/post/${h}`,{data:{token:t.user.token}})).data&&(a({type:"flashMessage",value:"Post was successfully deleted."}),e(`/profile/${t.user.username}`))}catch(e){console.log("There was a problem")}},"data-tip":"delete","data-for":"delete",className:"delete-post-button text-danger"},l.createElement("i",{className:"fas fa-trash"})),l.createElement(u.m_,{id:"delete",className:"custom-tooltip"}))),l.createElement("p",{className:"text-muted small mb-4"},l.createElement(r.N_,{to:`profile/${w.author.username}`},l.createElement("img",{className:"avatar-tiny",src:w.author.avatar})),"Posted by ",l.createElement(r.N_,{to:`/profile/${w.author.username}`},w.author.username)," on ",g),l.createElement("div",{className:"body-content"},l.createElement(m.o,{children:w.body,allowedElements:["p","br","strong","em","h1","h2","h3","h4","h5","h6","ul","ol","li"]})))}}}]);