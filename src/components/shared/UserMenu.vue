<template>
  <v-menu offset-y>
  <v-btn 
  slot="activator"
  flat>
    <v-avatar
      color="grey lighten-4"
    >
      <img src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" alt="avatar">
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
import { mapActions } from 'vuex';

export default {
  name: 'UserMenu',
  data() {
    return {
      items: [
        {
          title: 'To be implemented',
          click: ''
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
    ])
  }
}
</script>