<template>
  <v-card>
    <v-card-media
      :src="project.src"
      height="200px"
    >
    </v-card-media>

    <v-card-title>
      <div>
        <h3>{{ project.title }}</h3>
        <v-chip v-for="skill in project.skills"
          v-bind:key="skill"
          :color="retrieveSkillColor()(skill)" 
          :text-color="retrieveSkillTextColor()(skill)" 
          small>{{ skill }}</v-chip>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat>Join</v-btn>
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

  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProjectCard',
  props: ['project'],
  data: () => ({
    show: false
  }),
  methods: {
    ...mapActions('project', [
      'retrieveSkillColor'
    ]),
    ...mapGetters('project', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

