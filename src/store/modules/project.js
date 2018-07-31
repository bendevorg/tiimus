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
    // TODO: Retrieve list from API
    commit('setProjects', [
      { 
        title: 'Brawll', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
        skills: ['Developer', 'Artist', 'Musician'],
        description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
        flex: 3
      },
      { 
        title: 'Jacto Rally', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
        skills: ['Writer'],
        description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
        flex: 3 
      },
      { 
        title: 'Into the light', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        skills: ['Developer', 'Audio Mixer'],
        description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
        flex: 3 },
      { 
        title: 'Disk Overdrive', src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
        skills: ['Artist'],
        description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
        flex: 3 
      }
    ]);
  },
  listTags({ commit }) {
    // TODO: Retrieve list from API
    commit('setTags', [
      'Action',
      'Strategy',
      '2D',
      '3D'
    ]);
  },
  listSkills({ commit }) {
    // TODO: Retrieve list from API
    commit('setSkills', [
      'Artist',
      'Developer',
      'Musician',
      'Writer',
      'Audio Mixer'
    ]);
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