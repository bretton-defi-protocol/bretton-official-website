import Vue from 'vue'
import Vuex from 'vuex'
import totalSupply from './totalSupply'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    totalSupply
  }
})