// 请求模块
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net', // 接口的基础路径
  timeout: 2000 // 20秒超时时间(请求20秒无响应直接判定超时)
})
// 请求拦截器

// 响应拦截器

export default request
