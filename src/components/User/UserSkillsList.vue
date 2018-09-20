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
      <div class="headline">Skills</div>
        <div v-if="skills && skills.length > 0">
          <v-layout row wrap>
            <v-flex
              xs12
              sm6
              md3
              v-for="skill in skills"
              :key="skill.name"
            >
              <app-user-skill-card v-bind:skill="skill"/>   
            </v-flex>
          </v-layout>
        </div>
        <div class="headline" v-else>This user does not have any skills yet.</div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import UserSkillCard from './UserSkillCard';
import { mapActions } from 'vuex';

export default {
  props: ['skills'],
  name: 'UserSkillsList',
  components: {
    appUserSkillCard: UserSkillCard
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