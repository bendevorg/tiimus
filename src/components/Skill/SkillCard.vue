<template>
  <v-card>
    <v-card-title>
      <div>
        <v-icon large>
          {{ retrieveSkillIcon()(skill.name) }}
        </v-icon>
      </div>
      <div>
        <h3>{{ skill.name }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['skill'],
  name: 'SkillCard',
  methods: {
    ...mapGetters('skill', {
      retrieveSkillIcon: 'retrieveSkillIcon'
    })
  }
}
</script>

