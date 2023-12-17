<script>

export default {
  name: "ExperimentPage",

  data(){
    return{
      currentIndex: 0,
      userSelection: null,
      startTime: null,
      endTime: null,
      sentence: null,
      timeTaken: null,
      currentCase: "camelcase",
      questions: [
          { // 1
        "sentence": "move south",
        "camelcase":
            {
              "correct": "moveSouth",
              "options": ["moveSouth", "movieSouth", "moreSouth", "moveTouth"]
            },
        "kebabcase":
            {
              "correct": "move-south",
              "options": ["move-south", "movie-south", "more-south", "move-touth"],
            }
      },
        { // 2
          "sentence": "get route",
          "camelcase": {
            "correct": "getRoute",
            "options": ["getRoute", "gotRoute", "gitRoute", "getToute"]
          },
          "kebabcase": {
            "correct": "get-route",
            "options": [ "got-route", "git-route", "get-route", "get-toute"],
          }
        },
        { // 3
          "sentence": "hello world",
          "camelcase": {
            "correct": "helloWorld",
            "options": [ "hellaWorld", "halloWorld", "helloWurld", "helloWorld"]
          },
          "kebabcase": {
            "correct": "hello-world",
            "options": [ "hella-world","hello-world", "hallo-world", "hello-wurld"],
          }
        },
        { // 4
          "sentence": "my name is",
          "camelcase": {
            "correct": "myNameIs",
            "options": [ "myNumeIs","myFameIs", "myNameLs", "myNameIs"]
          },
          "kebabcase": {
            "correct": "my-name-is",
            "options": ["my-fame-is", "my-name-is", "my-nuie-is", "my-nase-is"],
          }
        },
        { // 5
          "sentence": "open sesame",
          "camelcase": {
            "correct": "openSesame",
            "options": ["openSesame", "openedSesame", "openSesamme", "open-ssame"]
          },
          "kebabcase": {
            "correct": "open-sesame",
            "options": ["opened-sesame", "open-sesamme", "open-ssame","open-sesame"],
          }
        },
        { // 6
          "sentence": "create folder",
          "camelcase": {
            "correct": "createFolder",
            "options": ["createFolder", "createtFolder", "createFoldder", "creataFolder"]
          },
          "kebabcase": {
            "correct": "create-folder",
            "options": [ "created-folder", "create-foldder", "create-folder", "create-folter"],
          }
        },
        { // 7
          "sentence": "read book",
          "camelcase": {
            "correct": "readBook",
            "options": [ "redBook", "readBook", "readBok", "reaDbook"]
          },
          "kebabcase": {
            "correct": "read-book",
            "options": [ "red-book", "read-bok", "read-book","readBook"],
          }
        },
        { // 8
          "sentence": "play music",
          "camelcase": {
            "correct": "playMusic",
            "options": [ "playedMusic", "playMusic", "playMusik", "play-music"]
          },
          "kebabcase": {
            "correct": "play-music",
            "options": [ "played-music", "play-music", "play-musik", "play-usic"],
          }
        },
        { // 9
          "sentence": "write code",
          "camelcase": {
            "correct": "writeCode",
            "options": ["writeCode", "wroteCode", "writeCote", "writecode"]
          },
          "kebabcase": {
            "correct": "write-code",
            "options": ["write-code", "wrote-code", "write-cote", "write-pope"],
          }
        },
        { // 10
          "sentence": "search internet",
          "camelcase": {
            "correct": "searchInternet",
            "options": ["searchInternet", "searchedInternet", "searchIneternet", "searchJnternet"]
          },
          "kebabcase": {
            "correct": "search-internet",
            "options": [ "searched-internet", "search-internet", "search-ineternet", "searc-nternet"],
          }
        }],
    }
  },
  methods: {
    startTimer(){
      this.startTime = new Date();
    },
    selectOption(option){
      this.userSelection = option;
      this.endTime = new Date();
      this.storeResult();
      this.moveToNextQuestion();
    },
    isSelectionCorrect(){
      return (
          this.userSelection === this.questions[this.currentIndex][this.currentCase].correct
      )
    },
    storeResult() {
      const elapsedTime = this.endTime - this.startTime;
      const result = {
        sentence: this.questions[this.currentIndex].sentence,
        userSelection: this.userSelection,
        isCorrect: this.isSelectionCorrect(),
        timeTaken: elapsedTime,
      }

      this.$store.dispatch('submitResult', result);

      console.log(this.$store.state.experimentObject);

    },
    toggleCase() {
      this.currentCase = this.currentCase === "camelcase" ? "kebabcase" : "camelcase";
    },
    moveToNextQuestion() {
      if(this.currentCase === "camelcase"){
        this.toggleCase();
      } else {
        console.log("idx: ",this.currentIndex);
        this.toggleCase();
        this.currentIndex++;
      }
      if (this.currentIndex < this.questions.length) {
        // If there are more questions, reset user selection and start the timer for the next question
        this.userSelection = null;
        this.startTimer();
      } else {
        // If all questions are completed, perform any final actions
        console.log("Experiment completed!");
      }
    },
  }
}

</script>

<template>

  <div v-if="currentIndex < questions.length">
  <v-card width="600"
          elevation="0"
          class="text-center mx-auto ma-9 mt-16">
    <h2> {{ questions[currentIndex][currentCase].correct }} </h2>
  </v-card>


  <v-row justify="center" >
    <v-col cols="12" sm="4" md="4" lg="4" class="mx-6 ma-lg-1"
           v-for="(option, index) in questions[currentIndex][currentCase].options"
           :key="index">
      <v-card
          width="300"
          @click="selectOption(option)"
          class="text-center mx-auto"
          :title="option"
      ></v-card>
    </v-col>
  </v-row>
  </div>
  <div v-else>
    <v-card width="600"
            elevation="0"
            class="text-center mx-auto mt-16">
      <h2> The experiment ended, thank you for your time! </h2>
    </v-card>
  </div>

</template>

<style scoped>

</style>