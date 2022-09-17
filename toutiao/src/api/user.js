// 用户相关请求模块
import request from '@/utils/request'

// 登陆页面登录接口
export const loginAPI = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: data
  })
}
