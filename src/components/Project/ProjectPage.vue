<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row 
      align-center

      wrap
    >
      <v-flex sm12 md3>
        <v-layout column align-center>
          <v-flex xs8>
            <v-avatar
              color="grey lighten-4"
              size="250px"
              tile
            >
              <img :src="project.src">
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <div class="headline">{{ project.title }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md8>
        <app-skills-list
          title="Needed skills"
          :skills="project.skills"
          noSkills="This project does not need any skills at the moment."
          />
      </v-flex>
    </v-layout>
    <!--<app-user-projects-list/>!-->
  </v-container>
</template>

<script>
import SkillsList from '../Skill/SkillsList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserPage',
  components: {
    appSkillsList: SkillsList,
    //appProjectUsersList: ProjectUsersList
  },
  methods: {
    ...mapActions('project', [
      'projectInfo'
    ]),
  },
  computed: {
    ...mapState('project', {
      project: state => state.currentProject
    })
  },
  created() {
    this.projectInfo('test');
  }
}
</script>
