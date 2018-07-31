<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <template v-for="n in 1">
        <v-stepper-step
          :complete="e1 > n"
          :key="`${n}-step`"
          :step="n"
          editable
        >
          Project Info
        </v-stepper-step>

        <v-divider
          v-if="n !== steps"
          :key="n"
        ></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
        v-for="n in steps"
        :key="`${n}-content`"
        :step="n"
      >
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="nextStep(n)"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  
}
</script>

