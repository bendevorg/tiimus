import API from '../../utils/API';

const state = {
  users: {
    all: [],
    filtered: []
  }
};

const getters = {
};

const actions = {
  listUsers({ commit }) {
    API
      .get('/users')
      .then(response => {
        commit('setUsers', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
};

const mutations = {
  setUsers(state, users) {
    state.users.all = users;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
