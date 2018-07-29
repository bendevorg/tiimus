<template>
  <v-container 
      fluid 
      fill-height>
    <app-projects-list/>
  </v-container>
</template>

<script>
import ProjectsList from './Project/ProjectsList';

export default {
  name: 'Home',
  components: {
    appProjectsList: ProjectsList
  }
}
</script>
