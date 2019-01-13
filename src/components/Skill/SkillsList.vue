<template>
  <v-layout 
    row 
    justify-center
    align-center
  >
    <v-flex xs12>
      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">{{ title }}</div>
        <div v-if="skills && skills.length > 0">
          <v-layout 
            row 
            wrap
          >
            <v-flex
              v-for="skill in skills"
              :key="skill.id"
              xs12
              sm6
              md3
            >
              <app-skill-card :skill="skill"/>   
            </v-flex>
          </v-layout>
        </div>
        <div 
          v-else 
          class="title"
        >
          {{ noSkills }}
        </div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import SkillCard from './SkillCard';

export default {
  name: 'SkillsList',
  components: {
    appSkillCard: SkillCard
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    skills: {
      type: Array,
      required: false,
      default: () => []
    },
    noSkills: {
      type: String,
      required: true,
      default: 'No skills'
    }
  },
  mounted() {
    this.listSkills();
  },
  methods: {
    ...mapActions('skill', [
      'listSkills'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>