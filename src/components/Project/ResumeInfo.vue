<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <h1>
          {{name}}
        </h1>
        <p>
          {{description}}
        </p>
        <h2>
          A game about
        </h2>
        <v-chip v-for="tag in tags"
          v-bind:key="tag"
          :color="retrieveSkillColor()(tag)" 
          :text-color="retrieveSkillTextColor()(tag)" 
          small>{{ tag }}
        </v-chip>
        <br/>
        <h2>
          Is looking for 
        </h2>
        <v-chip v-for="skill in skills"
          v-bind:key="skill"
          :color="retrieveSkillColor()(skill)" 
          :text-color="retrieveSkillTextColor()(skill)" 
          small>{{ skill }}
        </v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['name', 'description', 'tags', 'skills'],
  methods: {
    ...mapGetters('project', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

