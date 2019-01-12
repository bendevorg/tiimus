<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <v-btn
      slot="activator"
      flat
    >
      Login
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form 
            ref="form" 
            v-model="valid" 
            lazy-validation
            @submit="submit"
          >
            <v-layout wrap>
              <v-flex xs12>
                <v-alert
                  :value="error"
                  type="error"
                >
                  {{ error }}
                </v-alert>
              </v-flex>
              <v-flex 
                v-if="isSignUp"
                xs12 
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :validate-on-blur="true"
                  label="First name"
                  type="name"
                  required
                  @keyup.enter="submit"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :validate-on-blur=true
                  label="Email"
                  type="email"
                  required
                  @keyup.enter="submit"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :validate-on-blur="true"
                  label="Password"
                  type="password"
                  required
                  @keyup.enter="submit"
                />
              </v-flex>
              <v-flex 
                v-if="isSignUp" 
                xs12
              >
                <v-combobox
                  v-model="selectedSkills"
                  :items="skills"
                  item-text="name"
                  label="Select your skills"
                  multiple
                  chips
                />
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="!isSignUp"
          color="blue darken-1" 
          flat 
          @click.native="isSignUp = true"
        >
          Sign up
        </v-btn>
        <v-btn 
          v-if="isSignUp" 
          color="blue darken-1" 
          flat 
          @click.native="isSignUp = false"
        >
          Sign in
        </v-btn>
        <v-spacer/>
        <v-btn 
          color="blue darken-1"
          flat 
          @click.native="dialog = false"
        >
          Close
        </v-btn>
        <v-btn 
          v-if="isSignUp" 
          :disabled="!valid" 
          color="blue darken-1" 
          flat 
          type="submit" 
          @click.native="submit"
        >
          Sign up
        </v-btn>
        <v-btn 
          v-if="!isSignUp" 
          :disabled="!valid"
          color="blue darken-1" 
          flat 
          type="submit" 
          @click.native="submit"
        >
          Sign in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      isSignUp: false,
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
        v => (v && v.length <= 20) || 'First name must be less than 20 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have at least 5 characters'
      ],
      selectedSkills: []
    }
  },
  computed: {
    ...mapState('skill', {
      skills: state => state.skills
    })
  },
  created() {
    this.listSkills();
  },
  methods: {
    ...mapActions('auth', [
      'signIn',
      'signUp'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        this.error = false;
        const { name, email, password, selectedSkills } = this;
        const body = this.isSignUp ? { name, email, password, selectedSkills } : { email, password };
        if (this.isSignUp) {
          this.signUp(body)
            .then(() => {
              this.dialog = false;
            })
            .catch(err => {
              this.error = err;
            });
        } else {
          this.signIn(body)
            .then(() => {
              this.dialog = false;
            })
            .catch(err => {
              this.error = err;
            });
        }
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
