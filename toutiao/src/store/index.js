import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage, setStorage } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(getStorage('user')) || {} // 用户基本资料(默认从本地取)
  },
  getters: {
  },
  mutations: {
    setUser (state, userObj) {
      state.user = userObj
      setStorage('user', JSON.stringify(userObj))
    }
  },
  actions: {
  },
  modules: {
  }
})
