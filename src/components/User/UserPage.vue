<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row 
      align-center
    >
      <v-flex xs3>
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
            <div class="headline">Majimbo Monteiro</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4>
        
      </v-flex>
    </v-layout>
    <app-user-projects-list/>
  </v-container>
</template>

<script>
import UserProjectsList from './UserProjectsList';

export default {
  name: 'UserPage',
  components: {
    appUserProjectsList: UserProjectsList
  }
}
</script>
