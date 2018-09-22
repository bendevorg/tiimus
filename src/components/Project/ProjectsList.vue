<template>
  <v-layout row justify-center
      align-center>
    <v-flex xs12 sm12>

      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">{{ title }}</div>
        <div v-if="projects && projects.length > 0">
          <v-layout row wrap>
            <v-flex
              xs12
              sm6
              md3
              v-for="project in projects"
              :key="project.title"
            >
              <app-project-card :project="project" :reduced="reduced"/>   
            </v-flex>
          </v-layout>
        </div>
        <div class="title" v-else>{{ noProjects }}</div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from './ProjectCard';

export default {
  props: ['title', 'projects', 'noProjects', 'reduced'],
  name: 'ProjectsList',
  components: {
    appProjectCard: ProjectCard
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>