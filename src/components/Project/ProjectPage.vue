<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout 
      row 
      align-center
      wrap
    >
      <v-flex 
        sm12 
        md4>
        <v-layout 
          column 
          align-center>
          <v-flex xs8>
            <v-avatar
              :size="imageSize"
              color="grey lighten-4"
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
      <v-flex 
        sm12 
        md8>
        <app-skills-list
          :skills="project.skills"
          title="Needed skills"
          no-skills="This project does not need any skills at the moment."
        />
        <v-layout 
          v-if="user.id == project.ownerId" 
          row
          justify-start
          align-start
        >
          <v-flex 
            xs12 
            md6>
            <v-container fluid>
              <v-layout>
                <v-flex xs12>
                  <v-btn 
                    :to="'/projects/' + project.id + '/edit'" 
                    large 
                    block>
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
      :users="project.users"
      title="Users in this project"
      no-users="This project does not have any users yet"
    />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SkillsList from '../Skill/SkillsList';
import UsersList from '../User/UsersList';

export default {
  name: 'UserPage',
  components: {
    appSkillsList: SkillsList,
    appUsersList: UsersList
  },
  computed: {
    ...mapState('project', {
      project: state => state.currentProject
    }),
    ...mapState('user', {
      user: state => state.loggedUser
    }),
    imageSize() {
      return this.$vuetify.breakpoint.smAndDown ? '250px' : '450px';
    }
  },
  created() {
    this.loggedInfo();
    this.projectInfo('test');
  },
  methods: {
    ...mapActions('project', ['projectInfo']),
    ...mapActions('user', ['loggedInfo'])
  }
};
</script>
