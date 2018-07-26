<template>

    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-btn
        flat
        slot="activator"
      >
        Login
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 v-if="signUp">
                <v-text-field label="Name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="signUp = true" v-if="!signUp">Sign up</v-btn>
          <v-btn color="blue darken-1" flat @click.native="signUp = false" v-if="signUp">Sign in</v-btn>   
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" v-if="signUp">Sign up</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" v-if="!signUp">Sign in</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>

</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      signUp: false
    }
  }
}

</script>

<style lang="stylus" scoped>
  >>> .v-dialog__activator {
    height: 100%
  }
</style>