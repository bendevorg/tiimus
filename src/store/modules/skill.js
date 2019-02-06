import API from '../../utils/API';

const state = {
  skills: []
};

const getters = {
  retrieveSkillColor: state => skill => {
    const skillIndex = state.skills.findIndex(
      currentSkill => currentSkill.name === skill
    );
    return skillIndex !== -1 ? state.skills[skillIndex].color : 'black';
  },
  retrieveSkillTextColor: state => skill => {
    const skillIndex = state.skills.findIndex(
      currentSkill => currentSkill.name === skill
    );
    return skillIndex !== -1 ? state.skills[skillIndex].text : 'white';
  },
  retrieveSkillIcon: state => skill => {
    const skillIndex = state.skills.findIndex(
      currentSkill => currentSkill.name == skill
    );
    return skillIndex !== -1 ? state.skills[skillIndex].icon : 'help_outline';
  }
};

const actions = {
  listSkills({ commit }) {
    API.get('/skills')
      .then(response => {
        commit('setSkills', response.data.msg);
      })
      .catch(error => {
        //  TODO: Handle the error
      });
  }
};

const mutations = {
  setSkills(state, skills) {
    state.skills = skills;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
