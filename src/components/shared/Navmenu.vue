<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Buildev</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <app-user-menu v-if="isLogged"/>
      <app-login v-else/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Login from '../Login';
import UserMenu from './UserMenu';
import { mapState } from 'vuex';

export default {
  name: 'Navmenu',
  data() {
  },
  components: {
    appLogin: Login,
    appUserMenu: UserMenu
  },
  computed: {
    ...mapState('auth', {
      isLogged: state => state.isLogged
    })
  }
};
</script>
