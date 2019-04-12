<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex sm12 md6>
        <v-card>
          <v-form>
            <v-container fluid>
              <v-layout row align-start wrap>
                <v-flex xs12 class="text-xs-center">
                  <v-avatar :tile="true" size="300" color="grey lighten-4">
                    <v-img :src="project.image">
                      <v-layout pa-2 column fill-height>
                        <v-spacer />
                        <v-flex shrink>
                          <v-btn fab dark small color="white" @click="pickFile">
                            <v-icon color="black">edit</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </v-avatar>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="project.name" label="Name" required />
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
                  <v-btn large block @click="sendProject()">
                    Update project
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-text class="headline">
                    Update complete!
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn flat="flat" @click="dialog = false">
                      Done
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-container>
            <input
              ref="image"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFilePicked"
            />
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
        v =>
          (v && v.length >= 3) || 'Project name must have at least 3 characters'
      ],
      descriptionRules: [
        v => !!v || 'Project description is required',
        v =>
          (v && v.length >= 5) ||
          'Project name must have at least than 5 characters'
      ],
      name: '',
      description: '',
      dialog: false
    };
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
    })
  },
  created() {
    this.listTags();
    this.listSkills();
    this.projectInfo(this.$route.params.id);
  },
  methods: {
    ...mapActions('tag', ['listTags']),
    ...mapActions('skill', ['listSkills']),
    ...mapActions('project', ['projectInfo', 'editProject']),
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const { files } = e.target;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf('.') <= 0) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.addEventListener('load', () => {
          this.project.image = fileReader.result;
          [this.project.imageFile] = files;
        });
      } else {
        this.imageName = '';
        this.imageFile = '';
        this.imageUrl = '';
      }
    },
    sendProject() {
      this.$ga.event('Project', 'Edit');
      const { project } = this;
      project.formData = new FormData();
      project.formData.append('name', this.project.name);
      project.formData.append('description', this.project.description);

      if (this.project.tags.length === 0) {
        project.formData.append('tags[]', []);
      }
      this.project.tags.forEach((tag, index) => project.formData.append(`tags[${index}]`, tag.id));

      if (this.project.skills.length === 0) {
        project.formData.append('skills[]', []);
      }
      this.project.skills.forEach((skill, index) =>
        project.formData.append(`skills[${index}]`, skill.id)
      );
      
      project.formData.append('image', this.project.imageFile);
      this.editProject(project)
        .then(project => {
          this.$router.push({ path: `/projects/${project.id}` });
        })
        .catch(err => {
          // TODO: Handle error
        });
    }
  }
};
</script>

<style>
</style>
