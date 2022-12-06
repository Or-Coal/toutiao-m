<template>
  <div>
      <!-- 搜索页面头部 -->
    <div class="search-header">
<van-icon name="arrow-left" color="white" size="0.48rem" class="goback" @click="$router.back()" />
<!-- 搜索组件 -->
<van-search placeholder="请输入搜索关键词" background="pink" shape="round"  v-fofo v-model.trim="kw" @input="inputFn" @search="searchFn"/>
      </div>
      <!-- 搜索建议列表样式 -->
      <div class="sugg-list" v-if="kw.length !== 0">
        <div class="sugg-item" v-for="(a,index) in LianXiangList" :key="index" v-html="lightFn(a,kw)" @click="suggestClickFn(a)">
        </div>
      </div>
      <!-- 搜索历史 -->
      <div class="search-history" v-else>
        <!-- 标题 -->
        <van-cell title="搜索历史">
          <!-- 使用 right-icon 插槽来定义右侧图标 -->
          <template #right-icon>
           <van-icon name="delete" class="search-icon" @click="delFn"/>
          </template>
        </van-cell>
        <!-- 历史列表 -->
        <div class="history-list">
          <span class="history-item" v-for="(str,index) in history" :key="index" @click="historyClickFn(str)">{{str}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { sousuolianxiangjianyi } from '@/api/user'
import { getStorage, setStorage } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  data () {
    return {
      kw: '', // 搜索关键字
      timer: null, // 防抖的定时器
      LianXiangList: [],
      history: JSON.parse(getStorage('his')) || []
      // 搜索历史 有值时候就取无值时前面为假就给其赋值一个空数组
    }
  },
  methods: {
    // 输入框 - 内容实时改变触发事件方法
    inputFn () {
      // 防抖：延时执行逻辑代码，事件再次触发时，清除上一个定时器
      if (this.kw.length === 0) {
        this.LianXiangList = []
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(async () => {
          const res = await sousuolianxiangjianyi({
            theLianXiang: this.kw
          })
          this.LianXiangList = res.data.data.options
          console.log(res)
        }, 300)
      }
    },
    lightFn (originStr, target) {
      // originStr原来的字符串
      // target关键字
      // 字符串.replace()  替换匹配到的第一个  replaceAll() 替换全部
      // 返回值: 替换后的完整字符串
      // new一个正则表达式
      const reg = new RegExp(target, 'ig') // i忽略大小写，g全局都匹配
      // 替换后的值不能用target
      // 例如: 输入框里 java,匹配回来的联想菜单Java,JAVA,jAVA用了正则全部可以匹配上都被replace换成输入框target值java
      return originStr.replace(reg, (match) => {
        // match就是匹配中时,原字符串里的那个字符，我们用原来的不破坏原来数据，只添加一个颜色
        return `<span style="color:red;">${match}</span>`
      })
    },
    moveFn (thestr) {
      // 坑 这里因为是异步任务watch还没有执行但跳转路由了，就不会执行watch,
      // 我们要让watch先执行再去执行路由的跳转，解决方案可以来一个定时器包裹，让跳转最后执行
      setTimeout(() => {
        this.$router.push({
          path: `/searchresult${thestr}`
        })
      }, 0)
    },
    // 搜索输入框回车事件
    searchFn () {
      if (this.kw.length > 0) {
        this.history.push(this.kw)
        this.moveFn(this.kw)
      }
    },
    // 联想建议列表点击事件
    suggestClickFn (a) {
      this.history.push(a)
      this.moveFn(a)
    },
    // 历史记录列表点击事件
    historyClickFn (str) {
      this.moveFn(str)
    },
    // 图标清空历史记录
    delFn () {
      // 这样本地保存的数据因为绑定了watch监听事件history改变导致本地的存的历史记录也会改变，
      // 所以可以直接改,history数组
      this.history = []
    }
  },
  // watch侦听器使用
  watch: {
    history: { // 历史记录数组的改变
      deep: true,
      handler () {
        // 立刻覆盖式的保存到本地
        // ES6新增了2种引用类型(以前Array,object),(新增：Set Map)
        // Set: 无序不重复的value集合体(无下角标)
        // 特点: 你传入的数组类型，如果有重复元素,会自动清理掉重复元素，返回无重复的Set对象
        // 注意: 如果数组里面的值是对象，比较的是对象内存地址
        const theSet = new Set(this.history)
        // Set类型的对象 -> 转回 -> Array数组类型
        const arr = Array.from(theSet)
        setStorage('his', JSON.stringify(arr))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-header{
    height: 46px;
    display: flex;
    align-items: center;
    background-color: pink;
    overflow: hidden;
    // 后退按钮
    .goback{
        padding-left: 14px;
    }
    // 搜索组件
    .van-search{
        flex: 1;
    }
}
.sugg-list{
  .sugg-item{
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    // 实现省略号的三行代码
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
// 搜索历史
.search-icon{
  font-size: 16px;
  line-height: inherit;
}
.history-list{
  padding: 0 10px;
  .history-item{
    display: inline-block;
    font-size: 12px;
    padding: 8px 14px;
    background-color: #efefef;
    margin: 10px 8px 0px 8px;
    border-radius: 10px;
  }
}
</style>
