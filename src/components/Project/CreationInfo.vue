<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Tell us a little about your project</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :validate-on-blur="true"
          label="Name"
          type="name"
          required
          @blur="saveInfo"
        />
      </v-flex>
      <v-flex xs12 md8>
        <v-combobox
          v-model="selectedTags"
          :items="tags"
          item-text="name"
          label="Some tags about your game"
          multiple
          chips
          required
          @blur="saveInfo"
        />
      </v-flex>
      <v-flex xs12 md8>
        <v-textarea
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          rows="1"
          validate-on-blur
          auto-grow
          required
          @blur="saveInfo"
        />
      </v-flex>
      <v-flex xs12 md8>
        <v-text-field
          v-model="imageName"
          label="Select Image"
          validate-on-blur
          prepend-icon="attach_file"
          @click="pickFile"
          @blur="saveInfo"
        />
        <input
          ref="image"
          type="file"
          style="display: none"
          accept="image/*"
          @change="onFilePicked"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

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
      selectedTags: [],
      description: '',
      imageName: '',
      imageFile: '',
      imageUrl: ''
    };
  },
  computed: {
    ...mapState('tag', {
      tags: state => state.tags
    })
  },
  created() {
    this.listTags();
  },
  methods: {
    ...mapActions('tag', ['listTags']),
    saveInfo() {
      const creationInfo = {
        name: this.name,
        tags: this.selectedTags,
        description: this.description,
        imageUrl: this.imageUrl,
        imageFile: this.imageFile
      };
      this.$emit('update-project-info', creationInfo);
    },
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
          this.imageUrl = fileReader.result;
          [this.imageFile] = files;
        });
      } else {
        this.imageName = '';
        this.imageFile = '';
        this.imageUrl = '';
      }
    }
  }
};
</script>
