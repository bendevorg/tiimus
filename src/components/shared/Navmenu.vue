<template>
  <v-toolbar>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"/>
      <v-list>
        <v-list-tile v-if="isLogged">
          <v-list-tile-content>
            <router-link class="nav-link" to="/project/create">
              <v-btn 
                flat>Create a project
              </v-btn>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else>
          <v-list-tile-content>
            <app-login/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

    <router-link class="nav-link" to="/">
      <v-toolbar-title>
        Buildev
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link class="nav-link" to="/project/create">
        <v-btn 
          v-if="isLogged" 
          flat>Create a project
        </v-btn>
      </router-link>
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
    return {
      drawer: false,
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
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

<style lang="stylus" scoped>
  >>> .nav-link {
    text-decoration: none;
    color: rgba(0,0,0,.87);
  }
  >>> .v-toolbar__title {
    margin-left: 20px
  }
  >>> .v-btn--flat {
    height: 100% !important;
  }
</style>
