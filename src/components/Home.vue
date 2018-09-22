<template>
  <div>
    <app-projects-list/>
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
    })
  },
  methods: {
    ...mapActions('user', [
      'listUsers'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ])
  },
  created() {
    this.listSkills();
    this.listUsers();
  }
}
</script>
