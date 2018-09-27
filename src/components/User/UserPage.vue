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
            >
              <img src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <div class="headline">{{ user.name }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md8>
        <app-skills-list 
          title="Skills" 
          :skills="user.skills"
          noSkills="This user does not have any skills yet."
          />
      </v-flex>
    </v-layout>
    <app-projects-list
      title="Projects"  
      :projects="user.projects"
      noProjects="This user haven't joined a project yet"
      reduced=true
    />
  </v-container>
</template>

<script>
import SkillsList from '../Skill/SkillsList';
import ProjectsList from '../Project/ProjectsList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserPage',
  components: {
    appSkillsList: SkillsList,
    appProjectsList: ProjectsList
  },
  methods: {
    ...mapActions('user', [
      'userInfo'
    ])
  },
  computed: {
    ...mapState('user', {
      user: state => state.currentUser
    })
  },
  created() {
    this.userInfo('test');
  }
}
</script>
