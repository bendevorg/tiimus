<template>
  <v-container 
      fluid 
      fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex 
        text-xs-center 
        sm6 
        pa-5>
        <v-card>
          <h1>Buildev</h1>
        </v-card>
      </v-flex>
    </v-layout>
    <app-projects-list/>
  </v-container>
</template>

<script>
import ProjectsList from './ProjectsList';

export default {
  name: 'Home',
  components: {
    appProjectsList: ProjectsList
  }
}
</script>
