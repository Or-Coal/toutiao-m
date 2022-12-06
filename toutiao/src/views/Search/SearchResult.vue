<template>
<div>
<!-- 搜索结果页-头部导航 -->
<div class="search-result-container">
    <!-- 点击实现后退效果 -->
    <van-nav-bar
    title="搜索结果"
    left-arrow
    @click-left="$router.go(-1)"
    fixed
    />
</div>
<!-- 文章列表 -->
<div>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
<ArticleItem
v-for="alt in sousuoList"
:key="alt.art_id"
:alt="alt"
:isShow="isShow"
@click.native="tiaozhuanwenzhnagxinagqing(alt.art_id)"
></ArticleItem>
  </van-list>
</div>
</div>
</template>

<script>
import { huoqusousuojieguo } from '@/api/user'
import ArticleItem from '../../components/ArticleItem.vue'
export default {
  name: 'SearchResult',
  data () {
    return {
      page: 1,
      sousuoList: [],
      isShow: false,
      loading: false,
      finished: false
    }
  },
  async created () {
    const res = await huoqusousuojieguo({
      page: this.page,
      q: this.$route.params.kw
    })
    this.sousuoList = res.data.data.results
  },
  methods: {
    async onLoad () {
      if (this.sousuoList.length > 0) {
        this.page++
        const res = await huoqusousuojieguo({
          page: this.page,
          q: this.$route.params.kw
        })
        if (res.data.data.results.length === 0) {
          this.finished = true
          return
        }
        this.sousuoList = [...this.sousuoList, ...res.data.data.results]
        this.loading = false
      } else {
        this.loading = false
      }
    },
    // 文章单元格点击事件 --跳转文章详情
    tiaozhuanwenzhnagxinagqing (id) {
      this.$router.push({
        path: `/articledetail?art_id=${id}`
      })
    }
  },
  components: {
    ArticleItem
  }
}
</script>

<style lang="less" scoped>
.search-result-container{
    padding-top: 46px;
}
</style>
