<template>
  <v-navigation-drawer v-model="visible" absolute temporary>
    <div v-if="isLogged">
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="user.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        
        <v-list-tile @click.stop="openCreateProject()">
          <v-list-tile-content class="pl-4">
            <h4 class="heading">Create a project</h4>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
    <div v-else>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <h3 class="heading">Tiimus</h3>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserMenu from './UserMenu.vue';

export default {
  name: 'Drawer',
  props: {
    drawer: {
      type: Boolean,
      required: false,
      default: false
    },
    isLogged: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.loggedUser
    }),
    visible: {
      get: function() {
        return this.drawer;
      },
      set: function(value) {
        if (!value) {
          this.$emit('close');
        }
      }
    }
  },
  mounted() {
    this.loggedInfo()
      .then(() => null)
      .catch(err => {
        this.$ga.event('Error', err);
      });
  },
  methods: {
    ...mapActions('user', ['loggedInfo']),
    openCreateProject() {
      this.$router.push({ path: '/project/create' });
    }
  }
}
</script>

<style>

</style>
