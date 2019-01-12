<template>
  <v-layout 
    row 
    justify-center
    align-center
  >
    <v-flex 
      xs12 
      sm12
    >
      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">{{ title }}</div>
        <div v-if="projects && projects.length > 0">
          <v-layout 
            row 
            wrap
          >
            <v-flex
              v-for="project in projects"
              :key="project.name"
              xs12
              sm6
              md3
            >
              <app-project-card 
                :project="project" 
                :reduced="reduced"
              />   
            </v-flex>
          </v-layout>
        </div>
        <div 
          v-else
          class="title" 
        >
          {{ noProjects }}
        </div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from './ProjectCard';

export default {
  name: 'ProjectsList',
  components: {
    appProjectCard: ProjectCard
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    projects: {
      type: Array,
      required: true
    },
    noProjects: {
      type: String,
      required: true,
      default: 'No projects'
    },
    reduced: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>