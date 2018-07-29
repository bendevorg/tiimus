import API from '../../utils/API';

const state = {
  isLogged: false
}

const getters = {
  isLogged: state => state.isLogged
}

const actions = {
  checkSession({ commit }, session) {
    return commit('setLogin', session != null && session !== '');
  },
  signIn({ commit }, userData) {
    return new Promise((resolve, reject)  => {
      const path = '/auth/sign_in';
      API
        .post(
          path,
          userData
        )
        .then(response => {
          commit('setLogin', true);
          return resolve(response);
        })
        .catch(err => {
          if (err.response) {
            return reject(err.response.data.msg);
          }
          return reject(err);
        });
    });
  },
  signUp({ commit }, userData) {
    return new Promise((resolve, reject)  => {
      const path = '/auth/sign_up';
      API
        .post(
          path,
          userData
        )
        .then(response => {
          commit('setLogin', true);
          return resolve(response);
        })
        .catch(err => {
          if (err.response) {
            return reject(err.response.data.msg);
          }
          return reject(err);
        });
    });
  },
  signOut({ commit }) {
    return new Promise((resolve, reject) => {
      const path = '/auth/sign_out';
      API
        .get(
          path
        )
        .then(response => {
          commit('setLogin', false);
          return resolve(response);
        })
        .catch(err => {
          if (err.response) {
            return reject(err.response.data.msg);
          }
          return reject(err);
        });
    })
  }
}

const mutations = {
  setLogin(state, isLogged) {
    state.isLogged = isLogged;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}