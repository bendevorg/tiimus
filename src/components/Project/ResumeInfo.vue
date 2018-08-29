<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs8>
        <h1>
          {{projectName}}
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: ['project'],
  computed: {
    projectName() {
      return this.project.name
    }
  }
}
</script>

