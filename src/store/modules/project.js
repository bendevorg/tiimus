import API from '../../utils/API';

const state = {
  projects: {
    all: [],
    filtered: []
  },
  currentProject: {}
};

const getters = {
  isUserInProject: state => userId => {
    if (userId && state.currentProject.users) {
      const userInProject = state.currentProject.users.includes(
        user => userId === user.id
      );
      return !userInProject
        ? userId === state.currentProject.ownerId
        : userInProject;
    }
    return false;
  }
};

const actions = {
  listProjects({ commit }, filters) {
    API.get(`/projects?lookingForUser=${filters.lookingForProject}`)
      .then(response => {
        commit('setProjects', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  projectInfo({ commit }, projectId) {
    API.get(`/projects/${projectId}`)
      .then(response => {
        commit('setCurrentProject', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  createProject({ commit }, project) {
    return new Promise((resolve, reject) => {
      API
      .post(
        '/projects',
        project,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      )
      .then(response => {
        return resolve(response.data.msg);
      })
      .catch(err => {
        //  TODO: Handle the error
        return reject(err);
      });
    });
  },
  editProject({ commit }, project) {
    return new Promise((resolve, reject) => {
      API
      .patch(
        `/projects/${project.id}`,
        project.formData,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      )
      .then(response => {
        return resolve(response.data.msg);
      })
      .catch(err => {
        //  TODO: Handle the error
        return reject(err);
      });
    });
  },
  askToJoin({ commit }, projectId) {
    API.post(`/projects/${projectId}/ask_join`)
      .then(response => true)
      .catch(
        err =>
          //   TOOD: Handle the error
          false
      );
  }
};

const mutations = {
  setProjects(state, projects) {
    projects.forEach(project => {
      project.image = process.env.BACKEND_HOST + project.image;
    });
    state.projects.all = projects;
  },
  setCurrentProject(state, project) {
    const owner = project.users.find(
      user => user.projects_users.role === 'owner'
    );
    project.ownerId = owner ? owner.id : null;
    project.image = process.env.BACKEND_HOST + project.image;
    project.users.forEach(user => {
      user.avatar = process.env.BACKEND_HOST + user.avatar;
    });
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
