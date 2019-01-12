<template>
  <v-container fluid>
    <v-layout 
      row 
      wrap
    >
      <v-flex xs6>
        <h1>Which skills do you want?</h1>
      </v-flex>
    </v-layout>
    <v-layout 
      row 
      wrap
    >
      <v-flex
        v-for="skill in skills"
        :key="skill.name"
        xs4
      >
        <v-checkbox
          v-model="selectedSkills"
          :label="skill.name"
          :value="skill.name"
          @click.native="saveInfo"
        />
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      selectedSkills: []
    }
  },
  computed: {
    ...mapState('skill', {
      skills: state => state.skills
    })
  },
  created() {
    this.listSkills();
  },
  methods: {
    ...mapActions('skill', [
      'listSkills'
    ]),
    saveInfo() {
      const creationInfo = {
        skills: this.selectedSkills
      };
      this.$emit('update-project-info', creationInfo)
    }
  }
}
</script>

