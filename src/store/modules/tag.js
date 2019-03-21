import API from '../../utils/API';

const state = {
  tags: []
};

const getters = {};

const actions = {
  listTags({ commit }) {
    API.get('/tags')
      .then(response => {
        commit('setTags', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
};

const mutations = {
  setTags(state, tags) {
    state.tags = tags;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
