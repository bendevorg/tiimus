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
        <v-chip v-for="tag in project.tags"
          v-bind:key="tag"
          :color="retrieveSkillColor()(tag)" 
          :text-color="retrieveSkillTextColor()(tag)" 
          small>{{ skill }}</v-chip>
      </div>
    </v-card-title>

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
  name: 'UserProjectCard',
  props: ['project'],
  data: () => ({
    show: false
  }),
  methods: {
    ...mapGetters('tag', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

