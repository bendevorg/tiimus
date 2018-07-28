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
      <app-content/>
    </div>
  </v-app>
</template>

<script>
import Content from './components/shared/Content';
import { mapActions } from 'vuex';

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
    this.checkSession(this.$cookie.get('session'));
    this.loading = false;
    this.post = true;
  },
  methods: {
    ...mapActions('auth', [
      'checkSession'
    ])
  },
  components: {
    appContent: Content
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
