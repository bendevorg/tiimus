<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row 
      align-center
      wrap
    >
      <v-flex sm12 md4>
        <v-layout column align-center>
          <v-flex xs8>
            <v-avatar
              color="grey lighten-4"
              :size="imageSize"
              tile
            >
              <img :src="project.src">
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <div class="display-1">{{ project.name }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md8>
        <app-skills-list
          title="Needed skills"
          :skills="project.skills"
          noSkills="This project does not need any skills at the moment."
          />
        <v-layout 
          row 
          justify-start
          align-start
          v-if="user.id == project.ownerId"
        >
          <v-flex xs12 md6>
            <v-container fluid>
              <v-layout>
                <v-flex xs12>
                  <v-btn large block>
                    EDIT PROJECT
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <app-users-list
      title="Users in this project"
      :users="project.users"
      noUsers="This project does not have any users yet"
    />
  </v-container>
</template>

<script>
import SkillsList from '../Skill/SkillsList';
import UsersList from '../User/UsersList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserPage',
  components: {
    appSkillsList: SkillsList,
    appUsersList: UsersList
  },
  methods: {
    ...mapActions('project', [
      'projectInfo'
    ]),
    ...mapActions('user', [
      'loggedInfo'
    ])
  },
  computed: {
    ...mapState('project', {
      project: state => state.currentProject
    }),
    ...mapState('user', {
      user: state => state.loggedUser
    }),
    imageSize() {
      return this.$vuetify.breakpoint.smAndDown ? '250px' : '450px'
    }
  },
  created() {
    this.loggedInfo();
    this.projectInfo('test');
  }
}
</script>
