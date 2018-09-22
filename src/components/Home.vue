<template>
  <div>
    <app-projects-list
    title="Willing to join a project?"
    :projects="projects"
    noProject="There is no project looking for user at the moment"
    />
    <app-users-list
      title="Looking for a skilled user?"
      :users="users"
      noUsers="There is no users looking for a project right now"
    />
  </div>
</template>

<script>
import ProjectsList from './Project/ProjectsList';
import UsersList from './User/UsersList';
import { mapActions, mapState } from 'vuex';

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
  created() {
    this.listSkills();
    this.listProjects();
    this.listUsers();
  }
}
</script>
