<template>
  <v-content>
    <app-navmenu/>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content>
</template>

<script>
import Navmenu from './Navmenu';

export default {
  name: 'Content',
  components: {
    appNavmenu: Navmenu,
  }
}
</script>
