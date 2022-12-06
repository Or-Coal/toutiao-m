<template>
<div>
<van-cell>
    <!-- 标题区域插槽 -->
    <template #title>
<div class="title-box">
    <!-- 标题 -->
<span>{{ alt.title }}</span>
<img  v-if="alt.cover.type === 1"  v-lazy="alt.cover.images[0]" alt="" class="thumb">
</div>
<div class="thumb-box" v-if="alt.cover.type >1">
<img v-for="(imgUrl,index) in alt.cover.images" :key="index" v-lazy="imgUrl" alt="" class="thumb">
</div>
    </template>
    <!-- label区域插槽 -->
    <template #label>
        <div class="label-box">
            <div>
                <span>{{alt.aut_name}}</span>
                <span>{{alt.comm_count}}评论</span>
                <span>{{ formatTime(alt.pubdate) }}</span>
            </div>
            <!-- 反馈按钮 -->
           <van-icon name="cross" @click.stop="show=true" v-if="isShow"/>
        </div>
    </template>
</van-cell>
    <van-action-sheet v-model="show"
    :actions="actions"
    @select="onSelect"
    get-container="body"
    :cancel-text="bottomText"
     @cancel="quxiaoshijian"
     @close="closeFn"
     />
</div>
<!-- 一条文章单元格 -->

</template>

<script>
import { timeAgo } from '@/utils/date'
import { firstActions, secondActions } from '@/api/report'
export default {
  data () {
    return {
      show: false,
      actions: firstActions,
      bottomText: '取消'
    }
  },
  props: {
    alt: Object,
    isShow: {
      type: Boolean, // (数据类型)
      default: true // (默认值) 首页处不去再创建一个值填值了
    }// 文章对象
  },
  methods: {
    formatTime: timeAgo, // 函数体是timeAgo
    // 点击按钮时触发
    onSelect (action, item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      // this.show = false
      console.log(action)
      if (action.name === '反馈垃圾内容') {
        this.actions = secondActions
        this.bottomText = '返回'
      } else if (action.name === '不感兴趣') {
        this.$emit('disLikeEV', this.alt.art_id)
        this.show = false
      } else {
        // 肯定点的二级反馈选项
        this.$emit('reportEV', this.alt.art_id, action.value)
        // 下面关闭时会且回到一级选项
        this.show = false
      }
    },
    // 点击取消结束后触发
    quxiaoshijian () {
      if (this.bottomText === '返回') {
        this.show = true
        this.actions = firstActions
        this.bottomText = '取消'
      }
    },
    closeFn () {
      this.actions = firstActions
      this.bottomText = '取消'
    }
  },
  created () {
    console.log(this.alt)
  }
}
</script>

<style lang="less" scoped>
// 标题样式
.title-box{
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
}
// label描述样式
.label-box{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
// 文章信息span
.label-box span{
    margin:0 3px;
    &:first-child{
margin-left:0;
    }
}
// 图片的样式，矩形黄金比例：0.618
.thumb{
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
}
// 三图，图片容器
.thumb-box{
    display: flex;
    justify-content: space-between;
}
</style>
