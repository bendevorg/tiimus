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
        <div v-if="skills.length > 0">
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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserSkillsList',
  components: {
    appUserSkillCard: UserSkillCard
  },
  computed: {
    ...mapState('user', {
      skills: state => state.skills.all
    })
  },
  methods: {
    ...mapActions('user', [
      'listSkills'
    ])
  },
  created() {
    //  Todo: Use the actual user id
    this.listSkills('test');
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>