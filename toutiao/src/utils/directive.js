// 对Vue的全局指令进行封装
// 封装中间件函数插件
const directiveObj = {
  install (Vue) {
    Vue.directive('fofo', {
      inserted (el) {
        if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
          // 如果直接是input标签/textarea标签
          el.focus()
        } else {
          // 指令在van-search组件身上, 获取的是组件根标签div, 而input在标签内
          const inp = el.querySelector('input')
          const textArea = el.querySelector('textarea')
          // 如果找到了
          if (inp || textArea) {
            inp && inp.focus()
            textArea && textArea.focus()
          } else {
            // 本身也不是, 子标签里也没有
            console.error('请把v-fofo用在输入框标签上')
          }
        }
      },
      update (el) {
        if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
          // 如果直接是input标签/textarea标签
          el.focus()
        } else {
          // 指令在van-search组件身上, 获取的是组件根标签div, 而input在标签内
          setTimeout(() => {
            const inp = el.querySelector('input')
            const textArea = el.querySelector('textarea')
            if (inp) inp.focus()
            if (textArea) textArea.focus()
          })
        }
      }
    })
  }
}
export default directiveObj
