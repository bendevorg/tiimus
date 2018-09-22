<template>
  <v-layout 
      row 
      justify-center
      align-center>
    <v-flex xs12 sm12>
      <v-container
        fluid
        grid-list-md
      >
      <div class="headline">Projects</div>
        <div v-if="projects && projects.length > 0">
          <v-layout row wrap>
            <v-flex
              xs12
              sm6
              md3
              v-for="project in projects"
              :key="project.title"
            >
              <app-user-project-card v-bind:project="project"/>   
            </v-flex>
          </v-layout>
        </div>
        <div class="title" v-else>This user haven't joined a project yet</div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import UserProjectCard from './UserProjectCard';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserProjectsList',
  components: {
    appUserProjectCard: UserProjectCard
  },
  computed: {
    ...mapState('user', {
      projects: state => state.projects.all
    })
  },
  methods: {
    ...mapActions('user', [
      'listProjects'
    ])
  },
  created() {
    //  Todo: Use the actual user id
    this.listProjects('test');
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>