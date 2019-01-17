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
import { mapActions } from 'vuex';
import Content from './components/shared/Content';

export default {
  name: 'App',
  components: {
    appContent: Content
  },
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
};
</script>

<style lang="stylus" scoped>
#app {
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
