<template>
  <div>
    <!-- 二级路由页面 -->
    <div class="home_container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
    <!-- 下面底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" route to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" route to="/layout/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'IndexLayout',
  data () {
    return {
      active: 0
    }
  }

}
</script>
<style lang="less" scoped>
// 内容底部内边距(把内容网上挤压，防止内部被底部导航挡住)
.home_container{
  padding-bottom:50px;
}
// 底部导航上边框
van-tabbar{
  border-top:1px solid #f8f8f8
}
</style>
