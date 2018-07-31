<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex
        xs4
        v-for="skill in skills"
        :key="skill"
      >
        <v-checkbox
          :label=skill
          :value=skill>
        </v-checkbox>
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['project'],
  computed: {
    ...mapState('project', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('project', [
      'listSkills'
    ])
  },
  created() {
    this.listSkills();
  }
}
</script>

