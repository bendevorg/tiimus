<template>
  <v-container fluid>
    <v-layout 
      align-center
      justify-center
    >
      <v-flex sm12 md6>
        <v-card>
          <v-form>
            <v-container fluid>
              <v-layout
                row
                align-start
             
                wrap
              >
                <v-flex xs12>
                  <v-avatar
                    :tile=false
                    size=200
                    color="grey lighten-4"
                  >
                    <img :src="user.image"/>
                  </v-avatar>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="user.name"
                    label="Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="user.email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-checkbox
                    v-model="user.lookingForProject"
                    label="Are you open to join new projects?"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    v-model="user.skills"
                    :items="skills"
                    item-text="name"
                    label="Select your skills"
                    multiple
                    chips
                  ></v-combobox>
                </v-flex>
                <v-flex sm12 md4>
                  <v-btn large block>
                    Update my info
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('user', [
      'loggedInfo'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ])
  },
  computed: {
    ...mapState('skill', {
      skills: state => state.skills
    }),
    ...mapState('user', {
      user: state => state.loggedUser
    })
  },
  created() {
    this.loggedInfo();
    this.listSkills();
  }
}
</script>

<style>

</style>
