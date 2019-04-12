<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm12>
      <v-container fluid grid-list-md>
        <div class="headline">{{ title }}</div>
        <div v-if="projects && projects.length > 0">
          <v-layout row wrap>
            <v-flex v-for="index in cardsToShow" :key="projects[index - 1].id" xs12 sm6 md3>
              <app-project-card :project="projects[index - 1]" :reduced="reduced" />
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn 
                v-if="cardsToShow < projects.length"
                @click="showMoreCards()"
              >
                Show more
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
        <div v-else class="title">
          {{ noProjects }}
        </div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from './ProjectCard';

export default {
  name: 'ProjectsList',
  components: {
    appProjectCard: ProjectCard
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    projects: {
      type: Array,
      required: false,
      default: () => []
    },
    noProjects: {
      type: String,
      required: false,
      default: 'No projects'
    },
    amountToShow: {
      type: Number,
      required: false,
      default: 8
    },
    reduced: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      moreCards: 0
    };
  },
  computed: {
    cardsToShow: function() {
      return this.projects ? 
        (this.projects.length > this.amountToShow + this.moreCards ?
        this.amountToShow + this.moreCards : this.projects.length)
        : 0;
    }
  },
  methods: {
    showMoreCards() {
      this.moreCards = this.moreCards + this.cardsToShow + this.amountToShow < this.projects.length ?
        this.moreCards + this.amountToShow : this.projects.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
>>> .headline {
  margin-bottom: 24px;
}
</style>
