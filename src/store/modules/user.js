import API from '../../utils/API';

const state = {
  users: {
    all: [],
    filtered: []
  },
  projects: {
    all: [],
    filtered: []
  },
  skills: {
    all: [],
    filtered: []
  },
  currentUser: {}
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
  },
  userInfo({ commit }, userId) {
    API
      .get(`/users/${userId}`)
      .then(response => {
        commit('setCurrentUser', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  listProjects({ commit }, userId) {
    API
      .get(`/users/${userId}/projects`)
      .then(response => {
        commit('setProjects', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
};

const mutations = {
  setUsers(state, users) {
    state.users.all = users;
  },
  setCurrentUser(state, user) {
    state.currentUser = user
  },
  setProjects(state, projects) {
    state.projects.all = projects;
  },
  setSkills(state, skills) { 
    state.skills.all = skills;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
