<template>
  <v-card :to="'/projects/' + project.name">
    <v-card-media
      :src="project.src"
      height="200px"
    />

    <v-card-title>
      <div>
        <h3>{{ project.name }}</h3>
        <template v-if="!reduced">
          <v-chip 
            v-for="skill in project.skills" 
            :key="skill"
            :color="retrieveSkillColor()(skill)" 
            :text-color="retrieveSkillTextColor()(skill)" 
            small>{{ skill }}</v-chip>
        </template>
      </div>
    </v-card-title>
    <!--
    <div v-if="!reduced">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">
          {{ project.description }}
        </v-card-text>
      </v-slide-y-transition>
    </div>
    !-->

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    reduced: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    show: false
  }),
  methods: {
    ...mapGetters('skill', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

