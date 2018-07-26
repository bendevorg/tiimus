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
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout wrap>
                <v-flex xs12 v-if="signUp">
                  <v-text-field 
                  label="Name" 
                  :rules="nameRules"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field 
                  label="Email"
                  :rules="emailRules"
                  type="email"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field 
                  label="Password"
                  :rules="passwordRules" 
                  type="password" 
                  required></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="signUp = true" v-if="!signUp">Sign up</v-btn>
          <v-btn color="blue darken-1" flat @click.native="signUp = false" v-if="signUp">Sign in</v-btn>   
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" v-if="signUp">Sign up</v-btn>
          <v-btn color="blue darken-1" flat @click.native="submit" v-if="!signUp">Sign in</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>

</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      signUp: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have at least 5 characters'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
  >>> .v-dialog__activator {
    height: 100%
  }
</style>