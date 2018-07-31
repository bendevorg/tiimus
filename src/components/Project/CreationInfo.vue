<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs8>
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
        <v-combobox
          v-model="project.tags"
          :items="tags"
          label="Some tags about your game"
          multiple
          chips
        ></v-combobox>
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
import { mapActions, mapState } from 'vuex';

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
      ]
    }
  },
  props: ['project'],
  computed: {
    ...mapState('project', {
      tags: state => state.tags
    })
  },
  methods: {
    ...mapActions('project', [
      'listTags'
    ])
  },
  created() {
    this.listTags();
  }
}
</script>

