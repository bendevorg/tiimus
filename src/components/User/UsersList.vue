<template>
  <v-layout row justify-center
      align-center>
    <v-flex xs12 sm12>
      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">{{ title }}</div>
        <div v-if="users && users.length > 0">
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
        </div>
        <div class="title" v-else>{{ noUsers }}</div>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import UserCard from './UserCard';
import { mapActions, mapState } from 'vuex';

export default {
  props: ['title', 'users', 'noUsers'],
  name: 'UsersList',
  components: {
    appUserCard: UserCard
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>