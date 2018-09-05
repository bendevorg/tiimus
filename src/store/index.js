import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import project from './modules/project'
import skill from './modules/skill'
import tag from './modules/tag'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    project,
    skill,
    tag
  }
});