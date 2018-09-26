<template>
  <v-menu offset-y>
  <v-btn 
  slot="activator"
  flat>
    <v-avatar
      color="grey lighten-4"
    >
      <img :src=user.image alt="avatar">
    </v-avatar>
  </v-btn>
  <v-list>
    <v-list-tile
      v-for="(item, index) in items"
      :key="index"
      @click=item.click
    >
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile>
  </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserMenu',
  data() {
    return {
      items: [
        {
          title: 'My profile',
          click: this.goToUserPage
        },
        {
          title: 'Edit profile',
          click: this.goToUserEdit
        },
        {
          title: 'Sign out',
          click: this.signOut
        }
      ]
    }
  },
  methods: {
    ...mapActions('auth', [
      'signOut'
    ]),
    ...mapActions('user', [
      'loggedInfo'
    ]),
    goToUserPage() {
      this.$router.push({ name: 'User page', params: { id: this.user.id } });
    },
    goToUserEdit() {
      this.$router.push({ name: 'User edit' });
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.loggedUser
    })
  },
  mounted() {
    this.loggedInfo();
  }
}
</script>