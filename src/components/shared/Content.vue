<template>
  <v-content>
    <app-navmenu />
    <v-container fluid>
      <router-view />
    </v-container>
    <app-footer />
  </v-content>
</template>

<script>
import Navmenu from './Navmenu';
import Footer from './Footer';

export default {
  name: 'Content',
  components: {
    appNavmenu: Navmenu,
    appFooter: Footer
  }
};
</script>
