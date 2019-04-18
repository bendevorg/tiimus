<template>
  <div>
    <app-projects-list
      :projects="projects"
      title="Willing to join a project?"
      no-projects="There are no projects looking for users at the moment."
    />
    <app-users-list
      :users="users"
      title="Looking for a skilled user?"
      no-users="There are no users looking for a project right now."
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
    this.listSkills()
      .then(() => null)
      .catch(err => {
        this.$ga.event('Error', err);
      });
    this.listProjects({ lookingForUser: true })
      .then(() => null)
      .catch(err => {
        this.$ga.event('Error', err);
      });
    this.listUsers({ lookingForProject: true })
      .then(() => null)
      .catch(err => {
        this.$ga.event('Error', err);
      });
  },
  methods: {
    ...mapActions('project', ['listProjects']),
    ...mapActions('user', ['listUsers']),
    ...mapActions('skill', ['listSkills'])
  }
};
</script>
