// 此文件->封装三个方法->专门用于操作token的
// 封装东西代码分层更方便更清晰（以后修改方便）
const key = 'geek-itheima'
// 设置
export const setToken = (token) => {
  localStorage.setItem(key, token)
}
// 获取
export const getToken = () => localStorage.getItem(key)
// 删除
export const removeToken = () => {
  localStorage.removeItem(key)
}
