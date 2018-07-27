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
                <v-flex xs12>
                  <v-alert
                    :value="error"
                    type="error"
                  >
                    {{ error }}
                  </v-alert>
                </v-flex>
                <v-flex xs12 v-if="signUp">
                  <v-text-field
                  v-model="name"
                  label="First name" 
                  :rules="nameRules"
                  type="name"
                  validate-on-blur=true
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field 
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  type="email"
                  validate-on-blur=true
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field 
                  v-model="password"
                  label="Password"
                  :rules="passwordRules" 
                  type="password" 
                  validate-on-blur=true
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
          <v-btn color="blue darken-1" flat @click.native="dialog = false" :disabled="!valid" v-if="signUp">Sign up</v-btn>
          <v-btn color="blue darken-1" flat @click.native="submit" :disabled="!valid" v-if="!signUp">Sign in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      signUp: false,
      valid: true,
      error: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      name: '',
      nameRules: [
        v => !!v || 'First name is required',
        v => (v && v.length <= 10) || 'First name must be less than 20 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have at least 5 characters'
      ]
    }
  },
  methods: {
    ...mapActions('auth', [
      'signIn'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        this.error = false;
        const { name, email, password } = this;
        const body = this.signUp ? { name, email, password } : { email, password };
        this.signIn(body)
          .then(response => {
            this.dialog = false;
          })
          .catch(err => {
            this.error = err;
          });
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