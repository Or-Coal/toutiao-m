"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[323],{5877:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var s=function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",[s("div",[s("van-nav-bar",{attrs:{fixed:""},scopedSlots:n._u([{key:"left",fn:function(){return[s("img",{staticClass:"logo",attrs:{src:t(6949),alt:""}})]},proxy:!0},{key:"right",fn:function(){return[s("van-icon",{staticClass:"icon",attrs:{name:"search",size:"0.48rem"},on:{click:n.moveSearchPageFn}})]},proxy:!0}])})],1),s("div",[s("van-tabs",{attrs:{animated:"",sticky:"","offset-top":"1.125rem"},on:{change:n.channelChangeFn},model:{value:n.channel,callback:function(e){n.channel=e},expression:"channel"}},n._l(n.userChannelList,(function(e){return s("van-tab",{key:e.id,attrs:{title:e.name,name:e.id}},[s("ArticleList",{attrs:{channel:n.channel}})],1)})),1),s("van-icon",{staticClass:"moreChannels",attrs:{name:"plus",size:"0.37333334rem"},on:{click:n.plusClickFn}})],1),s("van-popup",{staticClass:"channle_popup",attrs:{"get-container":"body"},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[s("ChanneIEdit",{ref:"editRef",attrs:{userList:n.userChannelList,allList:n.unCheckChanneList},on:{addchannelEV:n.addchannelFn,removechannelEV:n.removechannelFn,closeEv:n.closeFn},model:{value:n.channel,callback:function(e){n.channel=e},expression:"channel"}})],1)],1)},a=[],i=t(32),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.isLoading,callback:function(e){n.isLoading=e},expression:"isLoading"}},[t("van-list",{attrs:{finished:n.finished,"finished-text":"没有更多了","immediate-check":!1,offset:"50"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.wenzhanglist,(function(e){return t("ArticleTtem",{key:e.art_id,attrs:{alt:e},on:{disLikeEV:n.disLikeFn,reportEV:n.reportFn},nativeOn:{click:function(t){return n.tiaozhuanwenzhnagxinagqing(e.art_id)}}})})),1)],1)],1)},c=[],o=t(7018),r=t(8935),h=t(7037);r.Z.use(h.Z);var d={data(){return{wenzhanglist:[],loading:!1,finished:!1,thetime:(new Date).getTime(),isLoading:!0}},props:["channel"],async created(){this.getArticleListFn()},methods:{async getArticleListFn(){const n=await(0,i.vL)({channel_id:this.channel,timestamp:this.thetime});console.log(n),this.wenzhanglist=[...this.wenzhanglist,...n.data.data.results],this.thetime=n.data.data.pre_timestamp,this.loading=!1,null===n.data.data.results.pre_timestamp&&(this.finished=!0),this.isLoading=!1},async onLoad(){this.getArticleListFn()},async onRefresh(){this.wenzhanglist=[],this.thetime=(new Date).getTime(),this.getArticleListFn()},async disLikeFn(n){await(0,i.AJ)({artId:n}),(0,h.Z)({type:"success",message:"反馈成功"})},async reportFn(n,e){await(0,i.sk)({artId:n,type:e}),(0,h.Z)({type:"success",message:"举报成功"})},tiaozhuanwenzhnagxinagqing(n){this.$router.push({path:`/articledetail?art_id=${n}`})}},components:{ArticleTtem:o.Z}},u=d,m=t(3736),p=(0,m.Z)(u,l,c,!1,null,"62f9d2c8",null),v=p.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("van-nav-bar",{attrs:{title:"频道管理"},scopedSlots:n._u([{key:"right",fn:function(){return[t("van-icon",{attrs:{name:"cross",size:"0.37333334rem",color:"white"},on:{click:n.closeFn}})]},proxy:!0}])}),t("div",{staticClass:"my-channel-box"},[t("div",{staticClass:"channel-title"},[t("span",[n._v("我的频道 "),t("span",{staticClass:"small-title"},[n._v(" 点击"+n._s(n.isEdit?"删除":"进入")+"频道 ")])]),t("span",{on:{click:n.bianjidianji}},[n._v(n._s(n.isEdit?"完成":"删除"))])]),t("van-row",{attrs:{type:"flex"}},n._l(n.userList,(function(e){return t("van-col",{key:e.id,attrs:{span:"6"},on:{click:function(t){return n.wodepindaoshanchuFn(e)}}},[t("div",{staticClass:"channel-item van-hairline--surround"},[n._v(" "+n._s(e.name)+" "),t("van-badge",{directives:[{name:"show",rawName:"v-show",value:n.isEdit&&0!==e.id,expression:"isEdit && obj.id!==0"}],staticClass:"cross-badge xiaochuhengse",attrs:{color:"transparnet"},scopedSlots:n._u([{key:"content",fn:function(){return[t("van-icon",{staticClass:"badge-icon",attrs:{name:"cross",color:"#cfcfcf",size:"0.32rem"}})]},proxy:!0}],null,!0)})],1)])})),1)],1),t("div",{staticClass:"more-channel-box"},[n._m(0),t("van-row",{attrs:{type:"flex"}},n._l(n.allList,(function(e){return t("van-col",{key:e.id,attrs:{span:"6"},on:{click:function(t){return n.moreFn(e)}}},[t("div",{staticClass:"channel-item van-hairline--surround"},[n._v(n._s(e.name)+" ")])])})),1)],1)],1)},g=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"channel-title"},[t("span",[n._v("点击添加更多频道")])])}],L={props:{userList:Array,allList:Array},data(){return{isEdit:!1}},methods:{bianjidianji(){this.isEdit=!this.isEdit},moreFn(n){this.isEdit&&this.$emit("addchannelEV",n)},wodepindaoshanchuFn(n){this.isEdit?0!==n.id&&this.$emit("removechannelEV",n):(this.$emit("closeEv"),this.$emit("input",n.id))},closeFn(){this.$emit("closeEv")}}},C=L,w=(0,m.Z)(C,f,g,!1,null,"b0fce906",null),k=w.exports,_={name:"IndexHome",data(){return{channel:0,userChannelList:[],allChannelList:[],wenzhanglist:[],show:!1,channelScrollTobj:{}}},activated(){window.addEventListener("scroll",this.scrollFn),document.documentElement.scrollTop=this.$route.meta.scrollT},deactivated(){window.removeEventListener("scroll",this.scrollFn)},methods:{channelChangeFn(){this.$nextTick((()=>{document.documentElement.scrollTop=this.channelScrollTobj[this.channel]}))},plusClickFn(){this.show=!0},async addchannelFn(n){this.userChannelList.push(n);const e=this.userChannelList.filter((n=>0!==n.id)),t=e.map(((n,e)=>{const t={...n};return delete t.name,t.seq=e,t}));await(0,i.Aj)({channels:t})},async removechannelFn(n){const e=this.userChannelList.findIndex((e=>e.id===n.id));this.userChannelList.splice(e,1),await(0,i.Df)({channelID:n.id})},closeFn(){this.show=!1,this.$refs.editRef.isEdit=!1},moveSearchPageFn(){this.$router.push("/search")},scrollFn(){this.$route.meta.scrollT=document.documentElement.scrollTop,this.channelScrollTobj[this.channel]=document.documentElement.scrollTop}},components:{ArticleList:v,ChanneIEdit:k},async created(){const n=await(0,i.z5)();this.userChannelList=n.data.data.channels;const e=await(0,i.bE)();this.allChannelList=e.data.data.channels},computed:{unCheckChanneList(){return this.allChannelList.filter((n=>-1===this.userChannelList.findIndex((e=>e.id===n.id))))}}},E=_,y=(0,m.Z)(E,s,a,!1,null,"3dcdb746",null),F=y.exports},6949:function(n,e,t){n.exports=t.p+"img/logo.d0d391a4.png"}}]);
//# sourceMappingURL=323.b5136e43.js.map