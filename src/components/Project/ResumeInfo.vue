<template>
  <v-container 
    fluid 
    grid-list-md
  >
    <v-layout 
      row 
      wrap
    >
      <v-flex 
        offset-md5 
        md6 
        xs12
      >
        <img 
          v-if="imageUrl"
          :src="imageUrl" 
          height="150" 
        >
      </v-flex>
      <v-flex 
        offset-md5 
        md6 
        xs12
      >
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
        <v-chip 
          v-for="tag in tags"
          :key="tag.id"
          :color="retrieveSkillColor()(tag.name)" 
          :text-color="retrieveSkillTextColor()(tag.name)" 
          small
        >
          {{ tag.name }}
        </v-chip>
        <br>
        <h2>
          Is looking for 
        </h2>
        <v-chip 
          v-for="skill in skills"
          :key="skill.id"
          :color="retrieveSkillColor()(skill.name)" 
          :text-color="retrieveSkillTextColor()(skill.name)" 
          small
        >
          {{ skill.name }}
        </v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    tags: {
      type: Array,
      required: true,
      default: () => []
    },
    skills: {
      type: Array,
      required: true,
      default: () => []
    },
    imageUrl: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    ...mapGetters('skill', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

