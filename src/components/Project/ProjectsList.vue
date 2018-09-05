<template>
  <v-layout row justify-center
      align-center>
    <v-flex xs12 sm12>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              xs3
              v-for="project in projects"
              :key="project.title"
            >
              <app-project-card v-bind:project="project"/>   
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from './ProjectCard';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProjectsList',
  components: {
    appProjectCard: ProjectCard
  },
  computed: {
    ...mapState('project', {
      projects: state => state.projects.all
    })
  },
  methods: {
    ...mapActions('project', [
      'listProjects'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ])
  },
  created() {
    this.listSkills();
    this.listProjects();
  }
}
</script>

<style lang="stylus" scoped>
</style>