<template>
  <v-app>
    <div 
      v-if="loading" 
      class="loading">
      Loading...
    </div>
    <div 
      v-if="error" 
      class="error">
      {{ error }}
    </div>
    <div v-if="post">
      <app-navmenu/>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import Navmenu from './components/shared/Navmenu';

export default {
  name: 'App',
  data() {
    return {
      loading: true,
      error: null,
      post: null
    };
  },
  created() {
    this.loading = false;
    this.post = true;
  },
  methods: {
  },
  components: {
    appNavmenu: Navmenu
  }
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

  img {
    display: block;
    margin: auto;
  }
}
</style>
