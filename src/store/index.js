import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  mutations,
  state,
  actions
})

export default store
