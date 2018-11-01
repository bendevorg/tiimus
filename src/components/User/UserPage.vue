<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row 
      align-center
      wrap
    >
      <v-flex sm12 md3>
        <v-layout column align-center>
          <v-flex xs8>
            <v-avatar
              color="grey lighten-4"
              size="250px"
            >
              <img src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <div class="headline">{{ user.name }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md8>
        <app-skills-list 
          title="Skills" 
          :skills="user.skills"
          noSkills="This user does not have any skills yet."
        />
          <v-container>
          <v-layout 
            row 
            justify-start
            align-start
            v-if="ownedProjects && ownedProjects.length > 0"
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
      >
        <v-card  v-if="step == 0" >
          <v-card-text class="headline">
            <v-combobox
              v-model="projectInvites"
              :items="ownedProjects"
              item-text="name"
              label="Select which projects"
              multiple
              chips
            ></v-combobox>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              flat="flat"
              @click="step = 1"
            >
              Invite
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card  v-if="step == 1" >
          <v-card-text class="headline">
            Invite sent!
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              flat="flat"
              @click="sendInvites()"
            >
              Done
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>
    </v-layout>
    <app-projects-list
      title="Projects"  
      :projects="user.projects"
      noProjects="This user haven't joined a project yet"
      reduced=true
    />
  </v-container>
</template>

<script>
import SkillsList from '../Skill/SkillsList';
import ProjectsList from '../Project/ProjectsList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserPage',
  data() {
    return {
      dialog: false,
      step: 0,
      projectInvites: []
    }
  },
  components: {
    appSkillsList: SkillsList,
    appProjectsList: ProjectsList
  },
  methods: {
    ...mapActions('user', [
      'loggedInfo',
      'userInfo'
    ]),
    sendInvites() {
      step = 0;
      //  TODO: Call API
      done = 0;
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.currentUser,
      ownedProjects: state => state.loggedUser.ownedProjects
    })
  },
  created() {
    this.loggedInfo();
    this.userInfo('test');
  }
}
</script>
