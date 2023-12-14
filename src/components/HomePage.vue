<script>
export default {
  name: "HomePage",
  data() {
    return {
      firstName: '',
      lastName: '',
      age: null,
      checkbox: false,
      yearOfProgramming: null,
      items: [
          'yes',
          'no'
      ]

    }
  }
}

</script>

<template>

  <div class="d-flex flex-column align-center justify-center mt-16">

    <v-card
        width="400"
        elevation="0"
        title="Experiment: camelCase vs kebab-case"
    ></v-card>

    <v-card
        width="500"
        class="mt-2"
        elevation="0"
        subtitle="Introduction: "
        text="Studies performed in natural language reading show that people read better (i.e., 20% faster) when an explicit
              separator is used between words. It does not matter the type of separator, it could be a white space or a special
              symbol. The overall message is that readingthistext is more difficult than reading_this_text or reading this text.">

    </v-card>

    <v-card
        width="500"
        class="mt-2 mb-2"
        elevation="0"
        subtitle="Instructions: "
        text="More detailed instructions will be in the next phase, after you will press the 'SUBMIT & START' button"
    >
    </v-card>

    <v-card
        width="500"
        class="mt-2"
        elevation="16"
        subtitle="form: "
        text="Please, fill in the form before starting the experiment.
        By submitting the form you agree to share your data with the owners of the website"
    >
      <v-form>
        <v-text-field

            v-model="age"
            :rules="[v => !!v || 'Age is required']"
            label="Age"
        ></v-text-field>

        <v-select
            v-model="impairmentVision"
            :items="items"
            :rules="[v => !!v || 'this information is required']"
            label="Do you have any problem with your sight?"
            required
        ></v-select>

        <v-select
            v-model="yearOfProgramming"
            :items="items"
            :rules="[v => !!v || 'Years of experience is required']"
            label="Years of experience in programming"
            required
        ></v-select>



        <div class="d-flex justify-center">
          <v-btn type="submit"
                 class="mb-3"
                 color="green"
                 @click="$router.push('/playground')">
            Submit & start</v-btn>
        </div>

      </v-form>
    </v-card>

  </div>



</template>

<style scoped>

</style>