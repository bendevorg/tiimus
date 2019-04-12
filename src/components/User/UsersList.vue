<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm12>
      <v-container fluid grid-list-md>
        <div class="headline">{{ title }}</div>
        <div v-if="users && users.length > 0">
          <v-layout row wrap>
            <v-flex v-for="index in cardsToShow" :key="users[index - 1].id" xs12 sm6 md3>
              <app-user-card :user="users[index - 1]"/>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn 
                v-if="cardsToShow < users.length"
                @click="showMoreCards()"
              >
                Show more
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
        <div v-else class="title">
          {{ noUsers }}
        </div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import UserCard from './UserCard';

export default {
  name: 'UsersList',
  components: {
    appUserCard: UserCard
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    users: {
      type: Array,
      required: false,
      default: () => []
    },
    noUsers: {
      type: String,
      required: true,
      default: 'No users'
    },
    amountToShow: {
      type: Number,
      required: false,
      default: 8
    },
  },
  data() {
    return {
      moreCards: 0
    };
  },
  computed: {
    cardsToShow: function() {
      return this.users ? 
        (this.users.length > this.amountToShow + this.moreCards ?
        this.amountToShow + this.moreCards : this.users.length)
        : 0;
    }
  },
  methods: {
    showMoreCards() {
      this.moreCards = this.moreCards + this.cardsToShow + this.amountToShow < this.users.length ?
        this.moreCards + this.amountToShow : this.users.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
>>> .headline {
  margin-bottom: 24px;
}
</style>
