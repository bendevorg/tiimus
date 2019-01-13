<template>
  <v-layout 
    row 
    justify-center
    align-center
  >
    <v-flex 
      xs12 
      sm12
    >
      <v-container
        fluid
        grid-list-md
      >
        <div class="headline">{{ title }}</div>
        <div v-if="users && users.length > 0">
          <v-layout 
            row 
            wrap
          >
            <v-flex
              v-for="user in users"
              :key="user.id"
              xs12
              sm6
              md3
            >
              <app-user-card :user="user"/>   
            </v-flex>
          </v-layout>
        </div>
        <div 
          v-else 
          class="title"
        >
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
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>> .headline {
    margin-bottom: 24px;
  }
</style>