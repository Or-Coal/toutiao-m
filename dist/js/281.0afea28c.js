"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[281],{5786:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"黑马头条-登录"}}),a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{attrs:{name:"mobile",required:"",placeholder:"请输入11位手机号",rules:[{required:!0,message:"请填写手机号",pattern:/^1[3-9]\d{9}$/}]},model:{value:t.user.mobile,callback:function(e){t.$set(t.user,"mobile",e)},expression:"user.mobile"}},[a("i",{staticClass:"toutiao tou-tiaoshouji",attrs:{slot:"left-icon"},slot:"left-icon"})]),a("van-field",{attrs:{name:"code",type:"password",required:"",placeholder:"请输入验证码",rules:[{required:!0,message:"请正确填写验证码",pattern:/^\d{6}$/}]},scopedSlots:t._u([{key:"button",fn:function(){return[a("van-button",{staticClass:"send-sms-btn",attrs:{round:"",size:"small",type:"default"}},[t._v("获取验证码")])]},proxy:!0}]),model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[a("i",{staticClass:"toutiao tou-tiaoyanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),a("div",{staticClass:"login-btn-wrap"},[a("van-button",{staticClass:"login-btn",attrs:{block:"",type:"info","native-type":"submit",loading:t.btndl,"loading-type":"spinner","loading-text":"登陆中...",disabled:t.btndl}},[t._v("登录")])],1)],1)],1)},n=[],o=a(32),i=a(8935),l=a(7037),r=a(4224),u=a(5922);i.Z.use(l.Z);var d={name:"LoginIndex",data(){return{user:{mobile:"",code:""},btndl:!1}},methods:{async onSubmit(t){const e=this.user;this.btndl=!0;try{const t=await(0,o.UO)(e);(0,l.Z)({type:"success",message:"登录成功"}),(0,r.o4)(t.data.data.token),(0,u.po)("refresh_token",t.data.data.refresh_token),this.$router.replace({path:"/layout/home"})}catch(a){(0,l.Z)({type:"danger",message:"手机号或验证码错误"})}this.btndl=!1}}},c=d,b=a(3736),m=(0,b.Z)(c,s,n,!1,null,"df44157a",null),p=m.exports}}]);
//# sourceMappingURL=281.0afea28c.js.map