<template>
  <div>
    <!-- 评论列表 -->
    <div class="cmt-list" :class="{'art-cmt-container-1':isShowCmtBox,'art-cmt-container-2':!isShowCmtBox}">
      <van-list
      offset="50"
  v-model="loading"
  :finished="finished"
  finished-text="没有更多评论了,快去评论吧"
  @load="onLoad"
  :immediate-check="false"
>
      <!-- 评论的 Item 项 -->
      <div class="cmt-item" v-for="obj in commentList" :key="obj.com_id">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img :src="obj.aut_photo"  class="avatar">
            <span class="uname">{{ obj.aut_name }}</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red" v-if="obj.is_liking === true" @click="loveFn(true, obj)" />
            <van-icon name="like-o" size="16" color="gray" v-else @click="loveFn(false, obj)"/>
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">
          {{ obj.content }}
        </div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">{{ timeAgo(obj.pubdate) }}</div>
      </div>
      </van-list>
    </div>
    <!-- 底部添加评论区域 - 1 -->
<div class="add-cmt-box van-hairline--top" v-if="isShowCmtBox === true">
    <van-icon name="arrow-left" size="0.48rem" @click="$router.back()" />
    <div class="ipt-cmt-div" @click="isShowCmtBox = false">发表评论</div>
    <div class="icon-box">
        <van-badge :content="totalCount === 0 ? '' : totalCount" :max="99">
            <van-icon name="comment-o" size="0.53333334rem"  @click="commentClickFn"/>
        </van-badge>
        <van-icon name="star-o" size="0.53333334rem" />
        <van-icon name="share-o" size="0.53333334rem" />
    </div>
</div>

<!-- 底部添加评论区域 - 2 -->
<div class="cmt-box van-hairline--top" v-else>
    <textarea placeholder="友善评论、理性发言、阳光心灵" v-fofo  v-model.trim="comValue" @blur="blurFn"></textarea>
    <van-button type="default"  :disabled="comValue.length === 0" @click="send">发布</van-button>
</div>
  </div>
</template>

<script>
import { huoqupinglunAPI, commentLikingAPI, commentDisLikingAPI, commentSendAPI } from '@/api/user'
import { timeAgo } from '@/utils/date'
export default {
  data () {
    return {
      commentList: [], // 评论数据
      isShowCmtBox: true, // 控制发表评论显示区域1/2
      totalCount: '', // 评论总数
      comValue: '', // 当前发布的评论
      lastId: null, // 触底获取更多的评论
      loading: false,
      finished: false
    }
  },
  async created () {
    const res = await huoqupinglunAPI({
      id: this.$route.query.art_id
    })
    this.commentList = res.data.data.results // 保存到变量中
    this.totalCount = res.data.data.total_count
    this.lastId = res.data.data.last_id
    if (res.data.data.results.length === 0) {
      this.finished = true
    }
  },
  methods: {
    timeAgo,
    async loveFn (bool, obj) {
      if (bool === true) { // 点了红心
        // 业务 => 取消红心
        // 调接口 => 取消红心
        // 显示 => 灰心
        obj.is_liking = false
        await commentDisLikingAPI({ comId: obj.com_id })
      } else { // 点了灰心
        // 业务 => 点亮红心
        // 调接口 => 点亮红心
        // 显示 => 红心
        obj.is_liking = true
        await commentLikingAPI({ comId: obj.com_id })
      }
    },
    commentClickFn () {
      // 真实DOM都在document(所以不再一个vue文件内), 也是可以获取的
      document.querySelector('.like-box').scrollIntoView({
        behavior: 'smooth'
      })
    },
    // 发布评论框 - 失去焦点
    blurFn () {
      setTimeout(() => {
        this.isShowCmtBox = true
      }, 0)
    },
    // 发布评论
    async send () {
      const res = await commentSendAPI({
        id: this.$route.query.art_id,
        content: this.comValue
      })
      this.commentList.unshift(res.data.data.new_obj)
      this.totalCount++
      this.comValue = ''
      this.commentClickFn() // 评论后滚动到评论最上方
    },
    async onLoad () {
      if (this.commentList.length > 0) {
        const res = await huoqupinglunAPI({
          id: this.$route.query.art_id,
          offset: this.lastId
        })
        this.commentList = [...this.commentList, ...res.data.data.results] // 保存到变量中
        this.totalCount = res.data.data.total_count
        this.lastId = res.data.data.last_id
        this.loading = false
        if (this.lastId === null) {
          this.finished = true
        }
      } else {
        // 假设在网页未获取到数据时进入到onload但,要给loading赋予一个false,不然在网页最底部一直转圈并显示加载中的bug
        this.loading = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.cmt-list {
  padding: 10px;
  .cmt-item {
    padding: 15px 0;
    + .cmt-item {
      border-top: 1px solid #f8f8f8;
    }
    .cmt-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cmt-header-left {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin-right: 15px;
        }
        .uname {
          font-size: 12px;
        }
      }
    }
    .cmt-body {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
      margin-top: 6px;
      word-break: break-all;
    }
    .cmt-footer {
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}
/*美化 - 文章详情 - 底部的评论页面 */
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}

// 发布评论的盒子 - 1
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  .ipt-cmt-div {
    flex: 1;
    border: 1px solid #efefef;
    border-radius: 15px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding-left: 15px;
    margin-left: 10px;
    background-color: #f8f8f8;
  }
  .icon-box {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    line-height: 0;
  }
}

.child {
  width: 20px;
  height: 20px;
  background: #f2f3f5;
}

// 发布评论的盒子 - 2
.cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea {
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
  .van-button {
    height: 100%;
    border: none;
  }
}
</style>
