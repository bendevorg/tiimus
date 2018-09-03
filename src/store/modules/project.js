import API from '../../utils/API';

//  TODO: This will come from an API
const skillColors = {
  'Developer': {
    color: 'grey lighten-1',
    text: 'black'
  },
  'Artist': {
    color: 'grey darken-1',
    text: 'white'
  },
  'Musician': {
    color: 'grey darken-2',
    text: 'white'
  },
  'Writer': {
    color: 'grey darken-3',
    text: 'white'
  },
  'Audio Mixer': {
    color: 'grey darken-4',
    text: 'white'
  }
}

const state = {
  projects: {
    all: [],
    filtered: []
  },
  tags: [],
  skills: []
}

const getters = {
  retrieveSkillColor: state => skill => {
    return skillColors[skill] ? skillColors[skill].color : 'black'
  },
  retrieveSkillTextColor: state => skill => {
    return skillColors[skill] ? skillColors[skill].text : 'white'
  }
}

const actions = {
  listProjects({ commit }) {
    API
      .get('/projects')
      .then(response => {
        commit('setProjects', response.data.msg.projects);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  listTags({ commit }) {
    API
      .get('/tags')
      .then(response => {
        commit('setTags', response.data.msg.tags);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  },
  listSkills({ commit }) {
    API
      .get('/skills')
      .then(response => {
        commit('setSkills', response.data.msg.skills);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
}

const mutations = {
  setProjects(state, projects) {
    state.projects.all = projects;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
  setSkills(state, skills) {
    state.skills = skills;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}