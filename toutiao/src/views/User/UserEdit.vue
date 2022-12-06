<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <!-- 用户资料 -->
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image
            round
            class="avatar"
            :src="$store.state.user"
            @click="imageavatarEn"
          />
          <!-- file 选择框 -->
          <input
            type="file"
            ref="iptFile"
            v-show="false"
            accept="image/*"
            @change="onFileChange"
          />
        </template>
      </van-cell>
      <van-cell title="名称" is-link :value="profile.name" @click="showNameDialogFn"/>
      <van-cell title="生日" is-link :value="profile.birthday" @click="isShowBirthFn"/>
    </van-cell-group>
    <!-- 更改姓名弹出框 -->
    <van-dialog v-model="show" title="标题" show-cancel-button :before-close="onNameDialogBeforeClose">
      <input type="text" v-fofo v-model="nameuserFn"/>
    </van-dialog>
    <!-- 修改时间 -->
<van-popup v-model="isShowBirth" position="bottom" style="height: 50%" round>
      <!-- 日期选择控件 -->
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择出生日期"
        :min-date="minDate"
        :max-date="maxDate"
        :show-toolbar="true"
        @cancel="cancelbirFn"
        @confirm="confirmbirFn"
      />
</van-popup>

  </div>
</template>

<script>
import { userProfileAPI, updatePhotoAPI, updateProfileAPI } from '@/api/user'
import Notify from '@/ui/Notify'
import { formatDate } from '@/utils/date'
import { mapMutations } from 'vuex'
export default {
  name: 'UserEdit',
  data () {
    return {
      profile: {}, // 用户基本资料
      show: false, // 用户姓名弹出框
      nameuserFn: '',
      isShowBirth: false,
      minDate: new Date(1900, 0, 1), // 最小的可选的日期
      maxDate: new Date(), // 最大的可选日期(默认获得系统日期-今日)
      currentDate: new Date() // 当前日期
    }
  },
  async created () {
    const res = await userProfileAPI()
    console.log(res)
    this.profile = res.data.data
  },
  methods: {
    ...mapMutations(['setUser']),
    imageavatarEn () {
      this.$refs.iptFile.click()
    },
    async onFileChange (ev) {
      if (ev.target.files.length === 0) return // 防止用户未选择图片
      const fd = new FormData()
      fd.append('photo', ev.target.files[0]) // photo在表单里参数名携带
      const res = await updatePhotoAPI(fd)
      this.profile.photo = res.data.data.photo // 更新最新头像
      this.setUser(res.data.data.photo)
    },
    showNameDialogFn () {
      this.show = true
      this.nameuserFn = this.profile.name
    },
    // 姓名修改弹出层-关闭前方法
    async onNameDialogBeforeClose (action, done) {
    // action的值: confirm或cancel(点击按钮区分)
      if (action === 'confirm') {
        // 确定
        // unicode编码 \u4092
        // url编码 %E2%C3%D1
        if (/^[A-Za-z0-9\u4e00-\u9fa5]{1,7}$/.test(this.nameuserFn)) {
          // 通过校验
          // 调用接口
          // 更新页面显示的名字
          await updateProfileAPI({
            name: this.nameuserFn
          })
          this.profile.name = this.nameuserFn
          // 关闭弹窗
          done()
        } else {
          // 提示用户
          Notify({ type: 'warning', message: '用户名中英文和数字1-7位' })
          // 阻止弹窗关闭
          done(false)
        }
      } else if (action === 'cancel') {
        // 取消
        done()
      }
    },
    // 生日点击事件
    isShowBirthFn () {
      this.isShowBirth = true
      this.currentDate = new Date(this.profile.birthday)
    },
    // 日期选择控件取消事件
    cancelbirFn () {
      this.isShowBirth = false
    },
    // 日期选择控件确认事件
    async confirmbirFn () {
      await updateProfileAPI({
        birthday: formatDate(this.currentDate)
      })
      this.isShowBirth = false
      this.profile.birthday = formatDate(this.currentDate)
    }
  }
}
</script>
<style lang="less" scoped>
.user-edit-container {
  padding-top: 46px;
  .avatar {
    width: 50px;
    height: 50px;
  }
}
::v-deep .van-dialog__content{
text-align: center;
input {
  padding: 0;
  outline: none;
  border: none;
  text-align: center;
}
}
</style>
