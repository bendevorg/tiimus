<template>
  <app-projects-list/>
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
