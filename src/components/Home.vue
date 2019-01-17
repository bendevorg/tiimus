<template>
  <div>
    <app-projects-list
      :projects="projects"
      title="Willing to join a project?"
      no-projects="There is no project looking for user at the moment"
    />
    <app-users-list
      :users="users"
      title="Looking for a skilled user?"
      no-users="There is no users looking for a project right now"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProjectsList from './Project/ProjectsList';
import UsersList from './User/UsersList';

export default {
  name: 'Home',
  components: {
    appProjectsList: ProjectsList,
    appUsersList: UsersList
  },
  computed: {
    ...mapState('user', {
      users: state => state.users.all
    }),
    ...mapState('project', {
      projects: state => state.projects.all
    })
  },
  created() {
    this.listSkills();
    this.listProjects();
    this.listUsers();
  },
  methods: {
    ...mapActions('project', [
      'listProjects'
    ]),
    ...mapActions('user', [
      'listUsers'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ])
  },
}
</script>
