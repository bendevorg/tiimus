<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label="Solo"
          placeholder="Placeholder"
          solo
        ></v-text-field>
      </v-flex>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'live_tv', title: 'Meme', to: '/meme' }
        ],
        title: 'Vuetify.js'
      }
    }
  }
</script>
