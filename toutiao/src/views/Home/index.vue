<template>
<div>
  <!-- 头部导航 -->
<div>
  <van-nav-bar fixed>
    <template v-slot:left>
<img class="logo" src="../../assets/logo.png" alt="">
    </template>
    <template v-slot:right>
      <!-- 坑 因为是行内样式 插件是不会自动转换为rem无法适配18px/37.5每份=0.48为rem值  -->
<van-icon name="search" size="0.48rem"  class="icon" @click="moveSearchPageFn"/>
    </template>
  </van-nav-bar>
</div>
<!-- tab栏导航 -->
<div>
  <van-tabs v-model="channel"  animated sticky offset-top="1.125rem" @change="channelChangeFn">
    <!-- 原offset-top="1.226667rem" -->
  <van-tab :title=" obj.name" v-for="obj in userChannelList" :key="obj.id" :name="obj.id">
    <ArticleList :channel="channel"></ArticleList>
  </van-tab>
</van-tabs>
  <van-icon name="plus" size="0.37333334rem" class="moreChannels" @click="plusClickFn"/>
</div>
<van-popup v-model="show"
    get-container="body"
    class="channle_popup"
>
<ChanneIEdit :userList="userChannelList"
:allList="unCheckChanneList"
@addchannelEV="addchannelFn"
@removechannelEV="removechannelFn"
@closeEv="closeFn" ref="editRef"
v-model="channel"
></ChanneIEdit>
</van-popup>
</div>
</template>

<script>
import { yonghuguanzhuliebiao, huoquyonghusuoyoupindaoliebiao, genghuangyonghuxuanzedepindao, shanchuyonghuzhidingdepindao } from '@/api/user'
import ArticleList from './components/ArticleList.vue'
import ChanneIEdit from './ChanneIEdit.vue'
export default {
  name: 'IndexHome',
  data () {
    return {
      channel: 0,
      userChannelList: [], // 用户频道列表
      allChannelList: [], // 所有频道列表
      wenzhanglist: [],
      show: false,
      channelScrollTobj: {}// 保存每个频道的滚动位置
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollFn)
    // window和document,监听网页滚动事件
    // html标签获取scrollTop滚动的距离,和设置滚动的位置
    // 切换回来,设置滚动条位置
    document.documentElement.scrollTop = this.$route.meta.scrollT
    document.body.scrollTop = this.$route.meta.scrollT
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollFn)
  },
  methods: {
    // 切换频道触发的事件
    channelChangeFn () {
      this.$nextTick(() => {
        document.documentElement.scrollTop = this.channelScrollTobj[this.channel]
        document.body.scrollTop = this.channelScrollTobj[this.channel]
      })
    },
    // +点击方法
    plusClickFn () {
      this.show = true
    },
    async addchannelFn (a) {
      this.userChannelList.push(a)
      const newArr = this.userChannelList.filter(obj => obj.id !== 0)
      const theNewArr = newArr.map((obj, index) => {
        const newObj = { ...obj } // 拷贝(浅拷贝)
        delete newObj.name
        newObj.seq = index
        return newObj
      })
      await genghuangyonghuxuanzedepindao({
        channels: theNewArr
      })
    },
    async removechannelFn (obj) {
      const index = this.userChannelList.findIndex(a => a.id === obj.id)
      this.userChannelList.splice(index, 1)
      await shanchuyonghuzhidingdepindao({
        channelID: obj.id
      })
    },
    closeFn () {
      this.show = false
      this.$refs.editRef.isEdit = false
    },
    // 首页右上角放大镜图标点击事件 ->跳转到搜索页面
    moveSearchPageFn () {
      // 这里的跳转一定要用push因为有返回，push是有历史纪录的
      this.$router.push('/search')
    },
    scrollFn () {
      this.$route.meta.scrollT = document.documentElement.scrollTop || document.body.scrollTop
      this.channelScrollTobj[this.channel] = document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  components: {
    ArticleList,
    ChanneIEdit
  },
  async created () {
    // 用户频道列表
    const res = await yonghuguanzhuliebiao()
    this.userChannelList = res.data.data.channels
    // 所有频道列表
    const res2 = await huoquyonghusuoyoupindaoliebiao()
    this.allChannelList = res2.data.data.channels
  },
  computed: {
    unCheckChanneList () {
    //   const newArr = this.allChannelList.filter(bigObj => {
    //     const index = this.userChannelList.findIndex(smallObj => {
    //       return smallObj.id === bigObj.id
    //     })
    //     if (index > -1) {
    //       return false
    //     } else {
    //       return true
    //     }
    //   })
    //   return newArr
    // 极简写法
      return this.allChannelList.filter(bigObj => (this.userChannelList.findIndex(smallObj => smallObj.id === bigObj.id)) === -1)
    }
  }
}
</script>
<style lang="less" scoped>
.logo{
  width: 100px;
  height: 30px;
}
.van-nav-bar .van-icon{
  color:#fff;
}
.van-tabs{
  padding-top: 46px;
}
// 设置 tabs容器样式
/deep/ .van-tabs__wrap{
  padding-right: 30px;
  background-color: #fff;
}
// 设置小图标样式
.moreChannels {
  position: fixed;
  top: 62px;
  right: 8px;
  z-index: 999;
}
.channle_popup{
  width: 100vw;
  height: 100vh;
}
// 如果想给100%，要先给html和nody设置100%
// vw和vh是css3新出的单位参考浏览器窗口百分比
</style>
