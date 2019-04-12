<template>
  <v-container fluid grid-list-md>
    <v-layout row align-center wrap>
      <v-flex sm12 md3>
        <v-layout column align-center>
          <v-flex xs8>
            <v-avatar color="grey lighten-4" size="250px">
              <img :src="user.avatar" alt="avatar" />
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <div class="headline">{{ user.name }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md8>
        <app-skills-list
          :skills="user.skills"
          title="Skills"
          no-skills="This user does not have any skills yet."
        />
        <v-container>
          <v-layout
            v-if="ownedProjects && ownedProjects.length > 0"
            row
            justify-start
            align-start
          >
            <v-flex xs12 md6>
              <v-btn large block @click="dialog = true">
                INVITE TO PROJECT
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-dialog
        v-model="dialog"
        max-width="290"
        @input="v => v || closeDialog()"
      >
        <v-card v-if="step == 0">
          <v-card-text class="headline">
            <v-combobox
              v-model="projectInvites"
              :items="ownedProjects"
              item-text="name"
              label="Select a project"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn flat="flat" @click="sendInvites()">
              Invite
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card v-if="step == 1">
          <v-card-text class="headline">
            Invite sent!
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn flat="flat" @click="closeDialog()">
              Done
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <app-projects-list
      :projects="user.projects"
      :reduced="true"
      title="Projects"
      no-projects="This user haven't joined a project yet"
    />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SkillsList from '../skill/SkillsList';
import ProjectsList from '../project/ProjectsList';

export default {
  name: 'UserPage',
  components: {
    appSkillsList: SkillsList,
    appProjectsList: ProjectsList
  },
  data() {
    return {
      dialog: false,
      step: 0,
      projectInvites: []
    };
  },
  computed: {
    ...mapState('user', {
      user: state => state.currentUser,
      ownedProjects: state => state.loggedUser.ownedProjects
    })
  },
  created() {
    this.loggedInfo();
    this.userInfo(this.$route.params.id);
  },
  methods: {
    ...mapActions('user', ['loggedInfo', 'userInfo', 'inviteUserToProject']),
    sendInvites() {
      this.inviteUserToProject(this.user.Id, this.projectInvites);
      this.step = 1;
    },
    closeDialog() {
      this.dialog = false;
      this.step = 0;
    }
  }
};
</script>
