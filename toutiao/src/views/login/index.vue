<template>
  <!-- 导航栏 -->
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="黑马头条-登录"></van-nav-bar>
    <!-- /导航栏 -->
    <!-- 登陆表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile" name="mobile" required placeholder="请输入11位手机号"
      :rules="[{ required:true, message:'请填写手机号', pattern: /^1[3-9]\d{9}$/ }]"
        ><i slot="left-icon" class="toutiao tou-tiaoshouji"></i>
      </van-field>
      <van-field v-model="user.code" name="code" type="password" required placeholder="请输入验证码"
      :rules="[{ required:true, message:'请正确填写验证码' , pattern: /^\d{6}$/ }]">
        <i slot="left-icon" class="toutiao tou-tiaoyanzhengma"></i>
        <template #button>
          <van-button round class="send-sms-btn" size="small" type="default"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
        :loading='btndl'
        loading-type="spinner"
        loading-text="登陆中..."
        :disabled='btndl'
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
  <!-- /登陆表单 -->
</template>
<script>
import { loginAPI } from '@/api/user'
import Vue from 'vue'
import Notify from '@/ui/Notify'
import { setToken } from '@/utils/token.js'
import { setStorage } from '@/utils/storage'
Vue.use(Notify)
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '246810' // 验证码(密码必须是246810后台规定死的)
      },
      btndl: false
    }
  },
  methods: {
    async onSubmit (value) {
      // 1. 获取表单数据
      const user = this.user
      // 2. 表单验证
      // 3. 提交表单请求登录
      this.btndl = true
      try {
        const res = await loginAPI(user)
        Notify({ type: 'success', message: '登录成功' })
        setToken(res.data.data.token)
        setStorage('refresh_token', res.data.data.refresh_token)
        // 跳转一定要放在最后=》尽量最后执行
        // location.href -> 当前浏览器地址和要跳转的地址一样(不包含#后面的锚点信息)->不会刷新网页
        // 地址改变 就会导致网页刷新
        // this.$router.push()压栈 会产生历史记录，this.$router.replace() 替换(不会产生历史记录)
        this.$router.replace({
          path: '/layout/home'
        })
      } catch (err) {
      // 4. 根据请求响应结果处理后续
        Notify({ type: 'danger', message: '手机号或验证码错误' })
      }
      this.btndl = false
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    background-color: #ededed;
    width: 156px;
    height: 46px;
    line-height: 46px;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
