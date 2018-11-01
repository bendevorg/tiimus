<template>
  <v-layout row justify-center
      align-center>
    <v-flex xs12 sm12>

      <v-container
        grid-list-md
        fluid
      >
        <div class="headline">{{ title }}</div>
        <div v-if="projects && projects.length > 0">
          <v-layout row wrap>
            <v-flex
              v-for="project in projects"
              :key="project.name"
              :class="'md'+flexCardSize"
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
  components: {
    appProjectCard: ProjectCard
  },
  name: 'ProjectsList',
  computed: {
    flexCardSize: function (){
      let projLen = 0;
      if (this.projects.length > 4){
        projLen = 3;
      } else {
        projLen = 12/this.projects.length;
      }
      console.log(projLen)
      return projLen;
    } 
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>