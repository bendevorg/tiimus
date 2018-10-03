import API from '../../utils/API';

const state = {
  projects: {
    all: [],
    filtered: []
  },
  currentProject: {}
};

const getters = {
};

const actions = {
  listProjects({ commit }) {
    API
      .get('/projects')
      .then(response => {
        commit('setProjects', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  projectInfo({ commit }, projectId) {
    API
      .get(`/projects/${projectId}`)
      .then(response => {
        commit('setCurrentProject', response.data.msg)
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
};

const mutations = {
  setProjects(state, projects) {
    state.projects.all = projects;
  },
  setCurrentProject(state, project) {
    let owner = project.users.find(user => {
      return user.projects_users.role === 'owner';
    });
    project.ownerId = owner ? owner.id : null;
    state.currentProject = project;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
