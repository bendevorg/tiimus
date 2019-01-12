<template>
  <v-card :to="'/projects/' + project.id">
    <v-img
      :src="project.image"
      height="200px"
    >
    </v-img>

    <v-card-title>
      <div class='card-content'>
        <h3>{{ project.name }}</h3>
        <div class="description">
          <div class="text-truncate">
            {{ project.description }}
          </div>
        </div>
        <v-chip 
          v-for="skill in project.skills"
          v-if="!reduced"
          :key="skill.name"
          :color="retrieveSkillColor()(skill.name)" 
          :text-color="retrieveSkillTextColor()(skill.name)" 
          small>{{ skill.name }}</v-chip>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProjectCard',
  props: ['project', 'reduced'],
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

<style lang="stylus" scoped>
  .card-content{
    width: 100%
  }
</style>

