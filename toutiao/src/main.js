import '@/utils/console.js' // 去掉打印语句
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'
// 将vant组件一次性全部导入
// import { Vant } from 'vant'
// 加载vant核心组件库
// 导入vant全局样式
// import 'vant/lib/index.css'
// 加载动态设置REM基准值
import 'amfe-flexible'
// 注册使用vant组件库
import 'highlight.js/styles/default.css' // 代码高亮的样式
// 将所有的vant组件注册
// Vue.use(Vant)

import directiveObj from './utils/directive'// 执行目标对象里install方法并传入Vue类
import './VueComponent.js' // vant组件的注册,单独分离成一个js文件,让main.js更清晰
// 执行目标对象例install方法传入Vue类
Vue.use(directiveObj)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
