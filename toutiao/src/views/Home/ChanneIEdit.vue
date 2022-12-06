<template>
  <div>
      <!-- 弹出层头部区域 -->
      <van-nav-bar title="频道管理">
          <template #right>
              <van-icon name="cross" size="0.37333334rem" color="white" @click="closeFn" />
          </template>
      </van-nav-bar>
      <!-- 我的频道 -->
      <div class="my-channel-box">
          <div class="channel-title">
              <span>我的频道
                  <span class="small-title">
点击{{isEdit?'删除':'进入'}}频道
                  </span>
              </span>
              <span @click="bianjidianji">{{isEdit?'完成':'删除'}}</span>
          </div>
          <!-- 我的频道列表 -->
          <van-row type="flex">
              <van-col span="6" v-for="obj in userList" :key="obj.id" @click="wodepindaoshanchuFn(obj)">
                  <div class="channel-item van-hairline--surround">
                      {{obj.name}}
                      <!-- 删除的徽标 -->
                      <van-badge color="transparnet" class="cross-badge xiaochuhengse"  v-show="isEdit && obj.id!==0">
                          <template #content>
                       <van-icon name="cross" class="badge-icon" color="#cfcfcf" size="0.32rem"/>
                          </template>
                      </van-badge>
                  </div>
              </van-col>
          </van-row>
      </div>
      <!-- 更多频道 -->
      <div class="more-channel-box">
          <div class="channel-title">
              <span>点击添加更多频道</span>
          </div>
          <!-- 更多频道列表 -->
          <van-row type="flex">
              <van-col span="6" v-for="obj in allList" :key="obj.id" @click="moreFn(obj)">
                  <div class="channel-item van-hairline--surround">{{obj.name}}
                  </div>
              </van-col>
          </van-row>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    userList: Array,
    allList: Array
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    bianjidianji () {
      this.isEdit = !this.isEdit
    },
    moreFn (obj) {
      if (this.isEdit) {
        this.$emit('addchannelEV', obj)
      }
    },
    wodepindaoshanchuFn (obj) {
      if (this.isEdit) {
        if (obj.id !== 0) { this.$emit('removechannelEV', obj) }
      } else {
        this.$emit('closeEv')// 关闭弹出层
        this.$emit('input', obj.id) // 父组件绑定的v-model会默认绑定一个input事件
      }
    },
    // 关闭弹出层方法
    closeFn () {
      this.$emit('closeEv')
    }
  }
}
</script>

<style lang="less" scoped>
.van-popup,
.popup-container{
    background-color: transparent;
    height: 100%;
    width: 100%;
}
.popup-container{
    display: flex;
    flex-direction: column;
}
.pop-header{
    height: 90px;
    background-color: #007bff;
    color: white;
    text-align: center;
    font-size: 14px;
    position: relative;
    .title{
        width: 100%;
        position: absolute;
        bottom: 15px;
    }
}
.pop-body{
    flex: 1;
    overflow: scroll;
    padding: 8px;
    background-color: white;
}
.my-channel-box,
.more-channel-box{
    .channel-title{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 28px;
        padding: 0 6px;
    }
}
.channel-item{
    font-size: 12px;
    text-align: center;
    line-height: 36px;
    background-color: #fafafa;
    margin: 5px;
}
// 删除的徽标
.cross-badge{
    position: absolute;
    right: -3px;
    top: 0;
    border: none;
}
// 提示文字
.small-title{
    font-size: 10px;
    color: gray;
}
.xiaochuhengse{
    background-color:white;
    padding:0;
}
</style>
