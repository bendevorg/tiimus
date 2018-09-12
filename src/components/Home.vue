<template>
  <div>
    <app-projects-list/>
    <app-users-list/>
  </div>
</template>

<script>
import ProjectsList from './Project/ProjectsList';
import UsersList from './User/UsersList';

export default {
  name: 'Home',
  components: {
    appProjectsList: ProjectsList,
    appUsersList: UsersList
  }
}
</script>
