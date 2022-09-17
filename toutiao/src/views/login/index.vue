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
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
  <!-- /登陆表单 -->
</template>
<script>
import Vue from 'vue'
import { loginAPI } from '@/api/user'
import { Notify } from 'vant'
// 全局注册
Vue.use(Notify)
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码(密码必须是246810后台规定死的)
      }
    }
  },
  methods: {
    async onSubmit (value) {
      // 1. 获取表单数据
      const user = this.user
      // 2. 表单验证
      // 3. 提交表单请求登录
      try {
        const res = await loginAPI(user)
        console.log(res)
        Notify({ type: 'success', message: '登录成功' })
      } catch (err) {
        Notify({ type: 'danger', message: '手机号或验证码错误' })
      // 4. 根据请求响应结果处理后续
      }
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
