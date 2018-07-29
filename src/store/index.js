import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import project from './modules/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    project
  }
});