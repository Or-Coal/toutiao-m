"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[983],{2861:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-container"},[a("div",{staticClass:"user-card"},[a("van-cell",{scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticClass:"avatar",attrs:{src:t.$store.state.user,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"username"},[t._v(t._s(t.user.name))])]},proxy:!0},{key:"label",fn:function(){return[a("van-tag",{attrs:{color:"#fff","text-color":"#ff976a"}},[t._v("申请认证")])]},proxy:!0}])}),a("div",{staticClass:"user-data"},[a("div",{staticClass:"user-data-item"},[a("span",[t._v(t._s(t.user.art_count))]),a("span",[t._v("动态")])]),a("div",{staticClass:"user-data-item"},[a("span",[t._v(t._s(t.user.follow_count))]),a("span",[t._v("关注")])]),a("div",{staticClass:"user-data-item"},[a("span",[t._v(t._s(t.user.fans_count))]),a("span",[t._v("粉丝")])])])],1),a("van-cell-group",{staticClass:"action-card"},[a("van-cell",{attrs:{icon:"edit",title:"编辑资料","is-link":"",to:"/user_editor"}}),a("van-cell",{attrs:{icon:"chat-o",title:"小思同学","is-link":"",to:"/chat"}}),a("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""},on:{click:t.quit}})],1)],1)},n=[],r=(a(9747),a(1404)),i=a(6198),c=(a(4916),a(5306),a(8975),a(32)),u=a(4224),o={name:"UserIndex",data:function(){return{user:{}}},created:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c._N)();case 2:a=e.sent,t.user=a.data.data,t.$store.commit("setUser",t.user.photo);case 5:case"end":return e.stop()}}),e)})))()},methods:{quit:function(){var t=this;r.Z.confirm({title:"提示",message:"这就走了?不爱我了吗?"}).then((function(){(0,u.gy)(),t.$router.replace("/LoginIndex")})).catch((function(){}))}}},l=o,f=a(3736),v=(0,f.Z)(l,s,n,!1,null,"62531bb8",null),d=v.exports}}]);
//# sourceMappingURL=983-legacy.5fc4c68c.js.map