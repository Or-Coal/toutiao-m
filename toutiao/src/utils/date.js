import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'// 到指定时间需要的插件
import 'dayjs/locale/zh'// 集成中文
// JSDOC注释，文档注释(/**按回车后根据下方代码自动生成 */)
/**
 *
 * @param {*} targetTime
 * @returns
 */
export const timeAgo = (targetTime) => {
  // 格式化时间
  dayjs.extend(relativeTime)
  dayjs.locale('zh')
  const a = dayjs()
  const b = dayjs(targetTime)
  return a.to(b)
}
export const formatDate = (dateObj) => {
  return dayjs(dateObj).format('YYYY-MM-DD')
}
