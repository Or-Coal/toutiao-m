import Vue from 'vue'
import {
  NavBar, Form, Field, Button, Tabbar, TabbarItem, Icon, Tab, Tabs, Cell, List, PullRefresh,
  ActionSheet, Popup, Row, Col, Badge, Search, Divider, Tag, CellGroup, Image, Dialog, DatetimePicker,
  Loading, Lazyload
} from 'vant'
Vue.use(Lazyload, {
  preLoad: 0.8,
  error: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180426%2Fb06a04bc9911435fbd91d0b3df5c3bfe.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653047274&t=b7b91e3e9cf61154169df8be1bf6414a'
})
Vue.use(Loading)
Vue.use(DatetimePicker)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(CellGroup)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Search)
Vue.use(Badge)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popup)
Vue.use(ActionSheet)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(NavBar)
