<template>
  <div class="d-flex flex-column align-center justify-center">
    <h1 class="mt-6">Phase 0: try out the selection process</h1>

    <v-card width="600"
            elevation="0"
            class="text-center mx-auto ma-7">
      <h2>"{{this.playground[0].sentence}}"</h2>
    </v-card>

    <v-card
        width="700"
        class="text-center"
        elevation="0">

    </v-card>

      <v-row justify="center">
        <v-col cols="12" sm="4" md="4" lg="4" class="ma-2 ma-lg-1"
               v-for="(option, index) in getCurrentOptions"
               :key="index">
          <v-card
              width="300"
              @click="checkCorrectness(option)"
              class="text-center mx-auto"
              :title="option"
          ></v-card>
        </v-col>
      </v-row>

    <div v-if="isCorrect !== null">
      <div v-if="isCorrect">
        <p class="mt-8">this answer is correct: {{ currentOption }}</p>
      </div>
      <div v-else>
        <p class="mt-8">this answer is wrong: {{ currentOption }}</p>
      </div>
    </div>

    <v-card elevation="0"
            width="350"
            class="mt-5"
            text="Note: during the experiment, the sentences will
            automatically change between camelCase and kebab-case.
            You are not going to be notified if the answer is right nor wrong">
    </v-card>


    <v-btn class="ma-4 rounded-xl" color="blue" @click="toggleCase">Switch Kebab-case/camel-Case</v-btn>

    <v-btn class="ma-4 rounded-xl" color="green">Start experiment</v-btn>
  </div>
</template>

<script>
export default {
  name: "PlaygroundPage",
  data() {
    return {
      currentCase: "camelcase",
      currentOption: null,
      isCorrect: null,
      playground: [
        {
          sentence: "try experiment sentence",
          camelcase: {
            correct: "tryExperimentSentence",
            options: [
              "buyExperimentSentence",
              "tryExperimentSentence",
              "tryExerimentSeztence",
              "tryExperimntSentient",
            ],
          },
          kebabcase: {
            correct: "try-experiment-sentence",
            options: [
              "try-exeriment-seztence",
              "buy-experiment-sentence",
              "try-experment-sentence",
              "try-experiment-sentence",
            ],
          },
        },
      ],
    };
  },
  methods: {
    toggleCase() {
      this.currentCase = this.currentCase === "camelcase" ? "kebabcase" : "camelcase";
    },
    checkCorrectness(option){
      this.currentOption = option;
      this.isCorrect = option === this.playground[0].camelcase.correct || option === this.playground[0].kebabcase.correct
    }
  },
  computed: {
    getCurrentOptions() {
      return this.currentCase === "camelcase"
          ? this.playground[0].camelcase.options
          : this.playground[0].kebabcase.options;
    },
  },
};
</script>
