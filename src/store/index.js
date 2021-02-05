import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[],
  },
  mutations: {
  },
  actions: {
    addlist(context,payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  }
})
