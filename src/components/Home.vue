<template>
  <div>
    <app-projects-list
      :projects="projects"
      title="Willing to join a project?"
      no-projects="There is no projects looking for users at the moment"
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
import ProjectsList from './project/ProjectsList.vue';
import UsersList from './user/UsersList.vue';

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
    ...mapActions('project', ['listProjects']),
    ...mapActions('user', ['listUsers']),
    ...mapActions('skill', ['listSkills'])
  }
};
</script>
