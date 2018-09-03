<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Which skills do you want?</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        xs4
        v-for="skill in skills"
        :key="skill"
      >
        <v-checkbox
          v-model="selectedSkills"
          :label=skill
          :value=skill
          @click.native="saveInfo"
        >
        </v-checkbox>
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
    ...mapState('project', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('project', [
      'listSkills'
    ]),
    saveInfo() {
      const creationInfo = {
        skills: this.selectedSkills
      };
      this.$emit('update-project-info', creationInfo)
    }
  },
  created() {
    this.listSkills();
  }
}
</script>

