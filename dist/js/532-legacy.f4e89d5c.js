"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[532],{7018:function(t,e,a){a.d(e,{Z:function(){return m}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"title-box"},[a("span",[t._v(t._s(t.alt.title))]),1===t.alt.cover.type?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.alt.cover.images[0],expression:"alt.cover.images[0]"}],staticClass:"thumb",attrs:{alt:""}}):t._e()]),t.alt.cover.type>1?a("div",{staticClass:"thumb-box"},t._l(t.alt.cover.images,(function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgUrl"}],key:e,staticClass:"thumb",attrs:{alt:""}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[a("div",{staticClass:"label-box"},[a("div",[a("span",[t._v(t._s(t.alt.aut_name))]),a("span",[t._v(t._s(t.alt.comm_count)+"评论")]),a("span",[t._v(t._s(t.formatTime(t.alt.pubdate)))])]),t.isShow?a("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}}):t._e()],1)]},proxy:!0}])}),a("van-action-sheet",{attrs:{actions:t.actions,"get-container":"body","cancel-text":t.bottomText},on:{select:t.onSelect,cancel:t.quxiaoshijian,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[],s=(a(8309),a(1709)),o=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],r=[{value:0,name:"其他问题"},{value:1,name:"标题夸张"},{value:2,name:"低俗色情"},{value:3,name:"错别字多"},{value:4,name:"旧闻重复"},{value:5,name:"广告软文"},{value:6,name:"内容不实"},{value:7,name:"涉嫌违法犯罪"},{value:8,name:"授权"}],l={data:function(){return{show:!1,actions:o,bottomText:"取消"}},props:{alt:Object,isShow:{type:Boolean,default:!0}},methods:{formatTime:s.S,onSelect:function(t,e){console.log(t),"反馈垃圾内容"===t.name?(this.actions=r,this.bottomText="返回"):"不感兴趣"===t.name?(this.$emit("disLikeEV",this.alt.art_id),this.show=!1):(this.$emit("reportEV",this.alt.art_id,t.value),this.show=!1)},quxiaoshijian:function(){"返回"===this.bottomText&&(this.show=!0,this.actions=o,this.bottomText="取消")},closeFn:function(){this.actions=o,this.bottomText="取消"}},created:function(){console.log(this.alt)}},c=l,u=a(3736),h=(0,u.Z)(c,n,i,!1,null,"f9ec06a0",null),m=h.exports},2123:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-result-container"},[a("van-nav-bar",{attrs:{title:"搜索结果","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),a("div",[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.sousuoList,(function(e){return a("ArticleItem",{key:e.art_id,attrs:{alt:e,isShow:t.isShow},nativeOn:{click:function(a){return t.tiaozhuanwenzhnagxinagqing(e.art_id)}}})})),1)],1)])},i=[],s=a(4479),o=a(6198),r=(a(2222),a(8975),a(32)),l=a(7018),c={name:"SearchResult",data:function(){return{page:1,sousuoList:[],isShow:!1,loading:!1,finished:!1}},created:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.lk)({page:t.page,q:t.$route.params.kw});case 2:a=e.sent,t.sousuoList=a.data.data.results;case 4:case"end":return e.stop()}}),e)})))()},methods:{onLoad:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.sousuoList.length>0)){e.next=12;break}return t.page++,e.next=4,(0,r.lk)({page:t.page,q:t.$route.params.kw});case 4:if(a=e.sent,0!==a.data.data.results.length){e.next=8;break}return t.finished=!0,e.abrupt("return");case 8:t.sousuoList=[].concat((0,s.Z)(t.sousuoList),(0,s.Z)(a.data.data.results)),t.loading=!1,e.next=13;break;case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},tiaozhuanwenzhnagxinagqing:function(t){this.$router.push({path:"/articledetail?art_id=".concat(t)})}},components:{ArticleItem:l.Z}},u=c,h=a(3736),m=(0,h.Z)(u,n,i,!1,null,"5519ec8a",null),d=m.exports}}]);
//# sourceMappingURL=532-legacy.f4e89d5c.js.map