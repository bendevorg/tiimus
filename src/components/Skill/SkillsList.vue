<template>
  <v-layout 
      row 
      justify-center
      align-center
    >
    <v-flex xs12>
      <v-container
        fluid
        grid-list-md
      >
      <div class="headline">{{ title }}</div>
        <div v-if="skills && skills.length > 0">
          <v-layout row wrap>
            <v-flex
              xs12
              sm6
              md3
              v-for="skill in skills"
              :key="skill.name"
            >
              <app-skill-card v-bind:skill="skill"/>   
            </v-flex>
          </v-layout>
        </div>
        <div class="headline" v-else>{{ noSkills }}</div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import SkillCard from './SkillCard';
import { mapActions } from 'vuex';

export default {
  props: ['title', 'skills', 'noSkills'],
  name: 'SkillsList',
  components: {
    appSkillCard: SkillCard
  },
  methods: {
    ...mapActions('skill', [
      'listSkills'
    ])
  },
  mounted() {
    this.listSkills();
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>