<template>
  <div>
    <Drawer :drawer="drawer" :is-logged="isLogged" @close="drawer = false" />
    <v-toolbar>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator" @click.stop="drawer = true" />
        <v-list>
          <v-list-tile v-if="isLogged">
            <v-list-tile-content>
              <router-link to="/project/create" class="nav-link">
                <v-btn flat>Create a project </v-btn>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-else>
            <v-list-tile-content>
              <app-login />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      <router-link to="/" class="nav-link">
        <v-toolbar-title>
          Tiimus
        </v-toolbar-title>
      </router-link>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/project/create" class="nav-link">
          <v-btn v-if="isLogged" flat>Create a project</v-btn>
        </router-link>
        <app-user-menu v-if="isLogged" />
        <app-login v-else />
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Drawer from './Drawer.vue';
import Login from '../Login';
import UserMenu from './UserMenu';

export default {
  name: 'Navmenu',
  components: {
    appLogin: Login,
    appUserMenu: UserMenu,
    Drawer
  },
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapState('auth', {
      isLogged: state => state.isLogged
    })
  }
};
</script>

<style lang="stylus" scoped>
>>> .nav-link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

>>> .v-toolbar__title {
  margin-left: 20px;
}

>>> .v-btn--flat {
  height: 100% !important;
}
</style>
