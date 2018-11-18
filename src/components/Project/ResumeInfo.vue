<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex offset-md5 md6 xs12>
        <img :src="imageUrl" height="150" v-if="imageUrl"/>
      </v-flex>
      <v-flex offset-md5 md6 xs12>
        <h1>
          {{ name }}
        </h1>
      </v-flex>
      <v-flex xs8>
        <p>
          {{ description }}
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
  props: ['name', 'description', 'tags', 'skills', 'imageUrl'],
  methods: {
    ...mapGetters('skill', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

