import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
export default new VueX.Store({
  state: {
    city: '北京',
    userName: ''
  },
  mutations: {
    setCity (state, val) {
      state.city = val
    },
    setUserName (state, val) {
      state.userName = val
    }
  },
  actions: {
    setCity ({ commit }, val) {
      commit('setCity', val)
    }
  }
})
