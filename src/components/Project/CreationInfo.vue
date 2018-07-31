<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-text-field
          v-model="project.name"
          label="Name" 
          :rules="nameRules"
          type="name"
          validate-on-blur=true
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs8>
        <v-textarea
          v-model="project.description"
          label="Description"
          :rules="descriptionRules"
          height=50
          validate-on-blur=true
          auto-grow=true
          required
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nameRules: [
        v => !!v || 'Project name is required',
        v => (v && v.length >= 3) || 'Project name must have at least 3 characters'
      ],
      descriptionRules: [
        v => !!v || 'Project description is required',
        v => (v && v.length >= 5) || 'Project name must have at least than 5 characters'
      ],
    }
  },
  props: ['project']
}
</script>

