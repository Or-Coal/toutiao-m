// 用户相关请求模块
import axios from '@/utils/request'
import { getStorage } from '@/utils/storage'
// 登陆页面登录接口
export const loginAPI = data => {
  return axios({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: data
  })
}
// 获取所有频道列表
export const huoquyonghusuoyoupindaoliebiao = () => axios({
  url: '/v1_0/channels',
  method: 'GET'
})

// 获取用户的频道
export const yonghuguanzhuliebiao = () => axios({
  url: '/v1_0/user/channels',
  method: 'GET'
  // headers: {
  // Authorization: `Bearer ${getToken()}`
  // }
})
// 设置用户的频道 (重置式)
export const genghuangyonghuxuanzedepindao = ({ channels }) => axios({
  url: '/v1_0/user/channels',
  method: 'PUT',
  data: {
    channels // 用户已选整个频道数组
  }
})

// 频道-删除用户指定的频道
export const shanchuyonghuzhidingdepindao = ({ channelID }) => axios({
  url: `/v1_0/user/channels/${channelID}`,
  method: 'DELETE'
})
// 关注用户
export const guanzhuyonghuAPI = ({ userId }) => axios({
  url: '/v1_0/user/followings',
  method: 'POST',
  data: {
    target: userId
  }
})
// 取消关注用户
export const unguanzhuyonghuAPI = ({ userId }) => axios({
  url: `/v1_0/user/followings/${userId}`,
  method: 'DELETE'
})
// 用户 - 基本资料
export const userInfoAPI = () => {
  return axios({
    url: '/v1_0/user'
  })
}
// 用户- 个人资料(就为了获取生日)
export const userProfileAPI = () => {
  return axios({
    url: '/v1_0/user/profile'
  })
}
// 用户- 更新头像
// 注意: formObj的值必须是一个表单对象
// '{"a": 10, "b": 20}' // 对象格式的JSON字符串
// new FormData() // 表单对象
export const updatePhotoAPI = (formObj) => {
  return axios({
    url: '/v1_0/user/photo',
    method: 'PATCH',
    data: formObj
    // 如果你的请求体内容是表单对象, 浏览器会自动携带请求头Content-Type为multipart/form-data
  })
}
// 用户 - 更新资料
export const updateProfileAPI = (dataObj) => {
  const obj = {
    name: '',
    gender: 0,
    birthday: '',
    intro: ''
  }
  for (const prop in obj) { // 遍历参数对象里每个key
    if (dataObj[prop] === undefined) { // 用key去外面传入的参数对象匹配，如果没有找到(证明外面没有这个参数)
      delete obj[prop] // 从obj身上移除这对属性和值
    } else {
      obj[prop] = dataObj[prop] // 如果用了，就从外面对象取出对应key值，保存到obj上
    }
  }
  return axios({
    url: '/v1_0/user/profile',
    method: 'PATCH',
    data: obj
  })
}
// 用户 - 更新token
export const refreshTokenAPI = () => axios({
  url: '/v1_0/authorizations',
  method: 'PUT',
  headers: {
    Authorization: 'Bearer ' + getStorage('refresh_token')
  }
})
// 文章-获取文章列表
export const huoquwenzhangxinwentuijian = ({ channel_id, timestamp }) => axios({
  url: '/v1_0/articles',
  method: 'GET',
  // headers: {
  // Authorization: `Bearer ${getToken()}`
  // },
  params: {
    // 这里的参数，axios会帮你拼接在URL?后面（查询字符串）
    channel_id,
    timestamp
  }
})
// 文章 - 反馈 - 不感兴趣
export const dislikeArticleAPI = ({ artId }) => axios({
  url: '/v1_0/article/dislikes',
  method: 'POST',
  // headers: {
  //   Authorization: `Bearer ${getToken()}`
  // },
  data: {
    target: artId
  }
})
// 文章 - 反馈 - 反馈垃圾内容
export const reportArticleAPI = ({ artId, type }) => axios({
  url: '/v1_0/article/reports',
  method: 'POST',
  // headers: {
  //   Authorization: `Bearer ${getToken()}`
  // },
  data: {
    target: artId,
    type: type,
    remark: '写,在逻辑页面判断下,点击判断类型action.value=0,给一个弹出框输入问题,传参到这里'
  }
})
// 文章 - 获取文章详情
export const huoquwenzhangxiangqing = ({ art_id }) => axios({
  url: `/v1_0/articles/${art_id}`
})
// 文章- 文章点赞
export const wenzhangdianzanAPI = ({ art_id }) => axios({
  url: '/v1_0/article/likings',
  method: 'POST',
  data: {
    target: art_id
  }
})
// 文章- 取消对文章点赞
export const unwenzhangdianzanAPI = ({ art_id }) => axios({
  url: `/v1_0/article/likings/${art_id}`,
  method: 'DELETE'
})
// 文章-获取评论或评论回复
export const huoqupinglunAPI = ({ id, offset = null, limit = 10 }) => axios({
  url: '/v1_0/comments',
  method: 'GET',
  params: {
    type: 'a',
    source: id,
    offset,
    limit
  }
})
// 文章 - 评论 - 喜欢
export const commentLikingAPI = ({ comId }) => axios({
  url: '/v1_0/comment/likings',
  method: 'POST',
  data: {
    target: comId
  }
})

// 文章 - 评论 - 取消喜欢
export const commentDisLikingAPI = ({ comId }) => axios({
  url: `/v1_0/comment/likings/${comId}`,
  method: 'DELETE'
})
// 文章 - 评论 - 发布评论(或回复评论)
export const commentSendAPI = ({ id, content, art_id = null }) => {
  const obj = {
    target: id,
    content
  }
  if (art_id !== null) {
    obj.art_id = art_id
  }
  return axios({
    url: '/v1_0/comments',
    method: 'POST',
    data: obj
  })
}
// 搜索-获取联想建议(自动补全)
export const sousuolianxiangjianyi = ({ theLianXiang }) => axios({
  url: '/v1_0/suggestion',
  method: 'GET', // 默认就是GET可以不用写
  params: { // Query
    q: theLianXiang
  }
})
// 搜索-获取搜索结果
export const huoqusousuojieguo = ({ page = 1, per_page = 10, q }) => axios({
  url: '/v1_0/search',
  method: 'GET',
  params: {
    page,
    per_page,
    q
  }
})
