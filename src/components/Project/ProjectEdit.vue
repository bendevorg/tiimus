<template>
  <v-container fluid>
    <v-layout 
      align-center
      justify-center
    >
      <v-flex 
        sm12 
        md6
      >
        <v-card>
          <v-form>
            <v-container fluid>
              <v-layout
                row
                align-start
                wrap
              >
                <v-flex 
                  xs12 
                  class="text-xs-center"
                >
                  <v-avatar
                    :tile="true"
                    size="300"
                    color="grey lighten-4"
                  >
                    <img :src="project.image">
                  </v-avatar>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="project.name"
                    label="Name"
                    required
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    v-model="project.description"
                    :rules="descriptionRules"
                    label="Description"
                    required
                    validate-on-blur
                    auto-grow
                    rows="1"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    v-model="project.tags"
                    :items="tags"
                    item-text="name"
                    label="Select some tags for your project"
                    multiple
                    chips
                  />
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    v-model="project.skills"
                    :items="skills"
                    item-text="name"
                    label="Select the skills you need"
                    multiple
                    chips
                  />
                </v-flex>
                <v-flex xs12>
                  <v-btn 
                    large 
                    block 
                    @click="dialog = true"
                  >
                    Update project
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-dialog
                v-model="dialog"
                max-width="290"
              >
                <v-card>
                  <v-card-text class="headline">
                    Update complete!
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer/>
                    <v-btn
                      flat="flat"
                      @click="dialog = false"
                    >
                      Done
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      nameRules: [
        v => !!v || 'Project name is required',
        v => (v && v.length >= 3) || 'Project name must have at least 3 characters'
      ],
      descriptionRules: [
        v => !!v || 'Project description is required',
        v => (v && v.length >= 5) || 'Project name must have at least than 5 characters'
      ],
      name: '',
      selectedTags: [],
      description: '',
      dialog: false,
    }
  },
    computed: {
    ...mapState('tag', {
      tags: state => state.tags
    }),
    ...mapState('skill', {
      skills: state => state.skills
    }),
    ...mapState('project', {
      project: state => state.currentProject
    }),
  },
  created() {
    this.listTags();
    this.listSkills();
    this.projectInfo('test');
  },
  methods: {
    ...mapActions('tag', [
      'listTags'
    ]),
    ...mapActions('skill', [
      'listSkills'
    ]),
    ...mapActions('project', [
      'projectInfo'
    ])
  }
}
</script>

<style>

</style>
