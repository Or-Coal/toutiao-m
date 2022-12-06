<template>
  <div id="app">
<!-- 路由的出口 -->
<keep-alive :exclude="['SearchIndex', 'SearchResult', 'ArticleDetailIndex', 'UserEdit']">
  <router-view/>
</keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
</style>
