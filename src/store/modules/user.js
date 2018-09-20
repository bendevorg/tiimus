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
  },
  listSkills({ commit }, userId) {
    API
      .get(`/users/${userId}/skills`)
      .then(response => {
        commit('setSkills', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      })
  }
};

const mutations = {
  setUsers(state, users) {
    state.users.all = users;
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
