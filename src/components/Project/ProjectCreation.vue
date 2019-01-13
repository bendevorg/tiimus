<template @update-project-create-form="test">

  <v-container fluid>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="(step, index) in steps">
          <v-stepper-step
            :complete="e1 > index"
            :key="`${index + 1}-step`"
            :step="index + 1"
            editable
          >
            {{ step.name }}
          </v-stepper-step>

          <v-divider
            v-if="index + 1 !== steps.length"
            :key="index + 1"
          />
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="(step, index) in steps"
          :key="`${index + 1}-content`"
          :step="index + 1"
        >
          <component 
            v-if="true"
            :name="project.name"
            :tags="project.tags"
            :description="project.description"
            :skills="project.skills"
            :image="project.image"
            :image-file="project.imageFile"
            :is="step.component"
            @update-project-info="updateProjectInfo"
          />
          <v-layout wrap>
            <v-btn
              v-if="index < steps.length - 1"
              color="primary"
              @click="nextStep(index + 1)"
            >
              Continue
            </v-btn>
            <v-btn
              v-else
              color="primary"
              @click="createProject"
            >
              Create
            </v-btn>
            <v-btn
              v-if="index > 0"
              flat
              @click="nextStep(index - 1)"
            >
              Previous
            </v-btn>
            <v-spacer/>
            <v-btn 
              flat
              @click="previousPage"
            >
              Cancel
            </v-btn>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import CreationInfo from './CreationInfo';
import SkillsInfo from './SkillsInfo';
import ResumeInfo from './ResumeInfo';

export default {
  data() {
    return {
      e1: 1,
      steps: [
        {
          name: 'Information',
          component: CreationInfo
        },
        {
          name: 'Skills',
          component: SkillsInfo 
        }, 
        {
          name: 'Resume',
          component: ResumeInfo
        }
      ],
      project: {
        name: '',
        tags: [],
        description: '',
        skills: [],
        image: '',
        imageFile: ''
      }
    }
  },
  methods: {
    nextStep (n) {
      if (n === this.steps.length) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    previousPage() {
      this.$router.go(-1);
    },
    updateProjectInfo(projectInfo) {
      this.project.name = projectInfo.name ? projectInfo.name : this.project.name;
      this.project.tags = projectInfo.tags ? projectInfo.tags : this.project.tags;
      this.project.description = projectInfo.description ? projectInfo.description : this.project.description;
      this.project.skills = projectInfo.skills ? projectInfo.skills : this.project.skills;
      this.project.image = projectInfo.imageUrl ? projectInfo.imageUrl : this.project.image;
      this.project.imageFile = projectInfo.imageFile ? projectInfo.imageFile : this.project.imageFile;
    },
    createProject() {
      console.log(this.project.image);
      console.log(this.project.imageFile);
      console.log('ae');
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>> .nav-link {
    text-decoration: none;
    color: rgba(0,0,0,.87);
  }
</style>
