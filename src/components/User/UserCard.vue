<template>
  <v-card :to="'/users/' + user.id">
    <v-layout justify-center>
      <v-flex xs5>
        <v-layout 
          row 
          align-center
        >
          <v-avatar
            color="grey lighten-4"
            size="95px"
          >
            <img 
              :src="user.avatar" 
              alt="avatar"
            >
          </v-avatar>
        </v-layout>
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ user.name }}</div>
          </div>
        </v-card-title>
        <!-- <div>
          <v-icon
            small
            :color=user.rgb>
            sentiment_satisfied
          </v-icon>
          <span>
            {{ user.description }}
          </span>
        </div> -->
      </v-flex>
    </v-layout>
    <v-divider light/>
    <v-card-actions>
      <div>
        <v-chip 
          v-for="skill in user.skills"
          :key="skill.id"
          :color="retrieveSkillColor()(skill.name)" 
          :text-color="retrieveSkillTextColor()(skill.name)" 
          small>{{ skill.name }}</v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapGetters('skill', {
      retrieveSkillColor: 'retrieveSkillColor',
      retrieveSkillTextColor: 'retrieveSkillTextColor'
    })
  }
}
</script>

<style lang="stylus" scoped>
  >>> .v-avatar {
    margin-top: 7px;
    margin-left: 18px;
  }
</style>


