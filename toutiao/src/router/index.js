import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/token'
Vue.use(VueRouter)
// 路由表
const routes = [
  {
    path: '/',
    redirect: '/LoginIndex'
  },
  {
    path: '/LoginIndex',
    name: 'LoginIndex',
    // 路由懒加载
    component: () => import('@/views/login'),
    // 路由独享守卫
    beforeEnter (to, from, next) {
      // 有token, 不能去登录页
      // 无token, 需要用户"权限"的才需要去登录页
      if (getToken()?.length > 0) {
        // 证明有token-已经登录了
        next('/layout/home') // 阻止跳转原地呆着
      } else {
        next()
      }
    }
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        meta: {
          scrollT: 0 // 保存首页离开时,滚动条位置
        }
      },
      {
        path: 'user',
        component: () => import('@/views/User')
      }
    ]
  },
  // 搜索页面
  {
    path: '/search',
    component: () => import('@/views/Search')
  },
  {
    // 动态路由传参
    // 搜索结果页
    path: '/searchresult:kw',
    component: () => import('@/views/Search/SearchResult')
  },
  // 文章详情页面
  {
    path: '/articledetail',
    component: () => import('@/views/ArticleDetail')
  },
  // 用户编辑页面
  {
    path: '/user_editor',
    component: () => import('@/views/User/UserEdit')
  },
  // 聊天页面
  {
    path: '/chat',
    component: () => import('@/views/Chat')
  }
]

const router = new VueRouter({
  routes
})
// 路由前置守卫
// router.beforeEach((to, from, next) => {
//   // 有token, 不能去登录页
//   // 无token, 需要用户"权限"的才需要去登录页
//   if (getToken()?.length > 0 && to.path === '/LoginIndex') {
//     // 证明有token-已经登录了
//     next(false) // 阻止跳转原地呆着
//   } else {
//     next()
//   }
// })
export default router
