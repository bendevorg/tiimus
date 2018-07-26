<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Buildev</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <app-login/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import Login from '../Login';

export default {
  name: 'Navmenu',
  components: {
    appLogin: Login
  }
};
</script>
