"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[281],{5786:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"黑马头条-登录"}}),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"mobile",required:"",placeholder:"请输入11位手机号",rules:[{required:!0,message:"请填写手机号",pattern:/^1[3-9]\d{9}$/}]},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}},[a("i",{staticClass:"toutiao tou-tiaoshouji",attrs:{slot:"left-icon"},slot:"left-icon"})]),a("van-field",{attrs:{name:"code",type:"password",required:"",placeholder:"请输入验证码",rules:[{required:!0,message:"请正确填写验证码",pattern:/^\d{6}$/}]},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{staticClass:"send-sms-btn",attrs:{round:"",size:"small",type:"default"}},[e._v("获取验证码")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}},[a("i",{staticClass:"toutiao tou-tiaoyanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),a("div",{staticClass:"login-btn-wrap"},[a("van-button",{staticClass:"login-btn",attrs:{block:"",type:"info","native-type":"submit",loading:e.btndl,"loading-type":"spinner","loading-text":"登陆中...",disabled:e.btndl}},[e._v("登录")])],1)],1)],1)},s=[],r=a(6198),o=(a(8975),a(4916),a(5306),a(32)),i=a(8935),l=a(7037),u=a(4224),c=a(5922);i.Z.use(l.Z);var d={name:"LoginIndex",data:function(){return{user:{mobile:"",code:""},btndl:!1}},methods:{onSubmit:function(e){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.user,t.btndl=!0,e.prev=2,e.next=5,(0,o.UO)(a);case 5:n=e.sent,(0,l.Z)({type:"success",message:"登录成功"}),(0,u.o4)(n.data.data.token),(0,c.po)("refresh_token",n.data.data.refresh_token),t.$router.replace({path:"/layout/home"}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),(0,l.Z)({type:"danger",message:"手机号或验证码错误"});case 15:t.btndl=!1;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))()}}},p=d,m=a(3736),b=(0,m.Z)(p,n,s,!1,null,"df44157a",null),f=b.exports}}]);
//# sourceMappingURL=281-legacy.af24e16c.js.map