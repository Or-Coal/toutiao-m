// 请求模块
import theAxios from 'axios'
// import router from '@/router'
import Vue from 'vue'
import Notify from '@/ui/Notify'
import { getToken, removeToken, setToken } from '@/utils/token.js'
import { refreshTokenAPI } from '@/api/user'
import router from '@/router'
Vue.use(Notify)
const axios = theAxios.create({
  baseURL: 'http://geek.itheima.net', // 接口的基础路径 http://toutiao.itheima.net
  timeout: 20000 // 20秒超时时间(请求20秒无响应直接判定超时)
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 目标:统一携带token
  // 判断本地有token再携带，判断具体api/index.js里面如果没有携带Authorization,我在添加上去
  // 未定义undefined,null是具体的值
  // ?.叫做可选链操作符，如果前面对象里没有length,整个表达式原地返回undefinde
  // 如果getToken()在原地有值token字符串，才能调用length获取长度
  if (getToken()?.length > 0 && config.headers.Authorization === undefined) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, async function (error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    // 这不是vue文件没有$router(vue原型上有)this不是vue组件对象无法调用
    // 方法2 token续签
    removeToken()
    const res = await refreshTokenAPI()
    // console.log(res)
    // 1.更新本地token
    setToken(res.data.data.token)
    // 2.更新新的token在请求头中
    error.config.headers.Authorization = `Bearer ${res.data.data.token}`
    // 3.上次未完成这次请求，再一次发起
    // error.config就是上一次的请求配置对象
    // 结果我们要return回原本逻辑页面调用地方-还是return回去一个Promise对象
    return axios(error.config)
    // console.log(res)
    // 方法1 清除过期token 并且跳转登录页
    // removeToken()
    // router.replace('/LoginIndex')
    // Notify({ type: 'warning', message: '身份已过期' })
  } else if (error.response.status === 500 && error.config.url === '/v1_0/authorizations' && error.config.method === 'put') {
    // 刷新的refresh_token也过期了
    localStorage.clear() // 清除localStorage里所有值
    Notify({ type: 'warning', message: '身份已过期' })
    router.replace('/LoginIndex')
  }
  return Promise.reject(error)
})

export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
