<template>
  <v-layout row justify-center
      align-center>
    <v-flex xs12 sm12>
      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">Looking for a skilled user?</div>
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md3
            v-for="user in users"
            :key="user.name"
          >
            <app-user-card v-bind:user="user"/>   
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import UserCard from './UserCard';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UsersList',
  components: {
    appUserCard: UserCard
  },
  computed: {
    ...mapState('user', {
      users: state => state.users.all
    })
  },
  methods: {
    ...mapActions('user', [
      'listUsers'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ])
  },
  created() {
    this.listSkills();
    this.listUsers();
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>