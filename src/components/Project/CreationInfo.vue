<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Tell us a little about your project</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
          v-model="name"
          label="Name" 
          :rules="nameRules"
          :validate-on-blur="true"
          type="name"
          @blur="saveInfo"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs8>
        <v-combobox
          v-model="selectedTags"
          :items="tags"
          label="Some tags about your game"
          multiple
          chips
          @blur="saveInfo"
        ></v-combobox>
      </v-flex>
      <v-flex xs8>
        <v-textarea
          v-model="description"
          label="Description"
          :rules="descriptionRules"
          rows=1
          validate-on-blur
          auto-grow
          required
          @blur="saveInfo"
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
      ],
      name: '',
      selectedTags: [],
      description: ''
    }
  },
  computed: {
    ...mapState('tag', {
      tags: state => state.tags
    })
  },
  methods: {
    ...mapActions('tag', [
      'listTags'
    ]),
    saveInfo() {
      const creationInfo = {
        name: this.name,
        tags: this.selectedTags,
        description: this.description
      };
      this.$emit('update-project-info', creationInfo)
    }
  },
  created() {
    this.listTags();
  }
}
</script>
