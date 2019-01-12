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
  loggedUser: {},
  currentUser: {}
};

const getters = {};

const actions = {
  listUsers({ commit }) {
    API.get('/users')
      .then(response => {
        commit('setUsers', response.data.msg);
      })
      .catch(err => {
        //  TODO: Handle the error
      });
  },
  loggedInfo({ commit }) {
    API.get('/user')
      .then(response => {
        let userInfo = response.data.msg;
        if (userInfo && userInfo.projects) {
          const ownedProjects = [];
          userInfo.projects.forEach(project => {
            if (project.projects_users.role === 'owner') {
              ownedProjects.push(project);
            }
          });
          userInfo = { ...userInfo, ownedProjects };
        }
        commit('setLoggedUser', userInfo);
      })
      .catch(err => {
        //  TODO: Handle the error
      });
  },
  userInfo({ commit }, userId) {
    API.get(`/users/${userId}`)
      .then(response => {
        commit('setCurrentUser', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  listProjects({ commit }, userId) {
    API.get(`/users/${userId}/projects`)
      .then(response => {
        commit('setProjects', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  inviteUserToProject({ commit }, userId, projects) {
    if (typeof projects === Array) {
      const projectIds = [];
      const data = {
        projects: projectIds
      };
      projects.forEach(project => {
        projectIds.push(project.id);
      });
      API.post(`/users/${userId}/invite`, data)
        .then(() => true)
        .catch(err => {
          //  TODO: Handle the error
        });
    }
    //  TODO: Throw error
    return false;
  }
};

const mutations = {
  setUsers(state, users) {
    state.users.all = users;
  },
  setLoggedUser(state, user) {
    state.loggedUser = user;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
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
