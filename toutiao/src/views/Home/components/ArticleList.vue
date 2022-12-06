<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      offset="50"
    >
      <ArticleTtem
        v-for="alt in wenzhanglist"
        :key="alt.art_id"
        :alt="alt"
        @disLikeEV="disLikeFn"
        @reportEV="reportFn"
        @click.native="tiaozhuanwenzhnagxinagqing(alt.art_id)"
      ></ArticleTtem>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleTtem from '../../../components/ArticleItem.vue'
import { huoquwenzhangxinwentuijian, dislikeArticleAPI, reportArticleAPI } from '@/api/user'
import Vue from 'vue'
import Notify from '@/ui/Notify'
Vue.use(Notify)
export default {
  data () {
    return {
      wenzhanglist: [],
      loading: false, // 底部加载状态
      finished: false, // 数据是否全部加载完成
      thetime: new Date().getTime(),
      isLoading: true
    }
  },
  props: ['channel'],
  async created () {
    // 文章列表
    this.getArticleListFn()
  },
  methods: {
    // 专门负责发送请求
    async getArticleListFn () {
      const res2 = await huoquwenzhangxinwentuijian({
        channel_id: this.channel,
        timestamp: this.thetime // 时间戳
      })
      console.log(res2)
      this.wenzhanglist = [...this.wenzhanglist, ...res2.data.data.results]
      this.thetime = res2.data.data.pre_timestamp
      this.loading = false
      if (res2.data.data.results.pre_timestamp === null) {
        this.finished = true
      }
      this.isLoading = false
    },
    // 底部加载
    async onLoad () {
      this.getArticleListFn()
    },
    // 顶部刷新
    async onRefresh () {
      this.wenzhanglist = []
      this.thetime = new Date().getTime()
      this.getArticleListFn()
    },
    // 反馈不感兴趣
    async disLikeFn (id) {
      await dislikeArticleAPI({
        artId: id
      })
      // res里面没有什么有用的信息，所以await往下放行,就证明请求和响应成功的，反馈成功
      // console.log(res)
      Notify({ type: 'success', message: '反馈成功' })
    },
    async reportFn (id, value) {
      await reportArticleAPI({
        artId: id,
        type: value
      })
      Notify({ type: 'success', message: '举报成功' })
    },
    // 点击跳转文章详情
    tiaozhuanwenzhnagxinagqing (id) {
      this.$router.push({
        path: `/articledetail?art_id=${id}`
      })
    }
  },
  components: {
    ArticleTtem
  }
}
</script>

<style lang="less" scoped>

</style>
