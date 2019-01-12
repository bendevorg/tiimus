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
              <img :src="project.image">
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
        <v-container>
          <v-layout 
            row 
            justify-start
            align-start
            v-if="!isUserInProject()(user.id)"
          >
            <v-flex xs12 md6>
              <v-btn large block @click="askToJoinProject()">
                ASK TO JOIN
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout 
            row 
            justify-start
            align-start
            v-if="user.id == project.ownerId"
          >
            <v-flex xs12 md6>
              <v-btn large block :to="'/projects/' + project.id + '/edit'">
                EDIT PROJECT
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-dialog
        v-model="dialog"
        max-width="400"
      >
        <v-card>
          <v-card-text class="headline">
            The project owner has received your request! Now you just have to wait for the owner approval
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              flat="flat"
              @click="dialog = false"
            >
              Done
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProjectPage',
  data() {
    return {
      dialog: false
    }
  },
  components: {
    appSkillsList: SkillsList,
    appUsersList: UsersList
  },
  methods: {
    ...mapGetters('project', [
      'isUserInProject'
    ]),
    ...mapActions('project', [
      'projectInfo',
      'askToJoin'
    ]),
    ...mapActions('user', [
      'loggedInfo'
    ]),
    async askToJoinProject() {
      await this.askToJoin(this.project.id);
      this.dialog = true;
    }
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
    this.projectInfo(this.$route.params.id);
  }
}
</script>
