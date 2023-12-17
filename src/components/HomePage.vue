<script>
export default {
  name: "HomePage",
  data() {
    return {
      firstName: '',
      lastName: '',
      age: null,
      yearsOfProgramming: null,
      impairmentVision: null,
      itemsYearsOfProgramming: [
        '0 years',
        '1-3 years',
        'more years'
      ],
      itemsImpairmentVision: [
        'yes',
        'no'
      ],

    }

  },
  computed: {
    isFormFilled() {
      return this.age !== null && this.impairmentVision !== null && this.yearsOfProgramming !== null;
    },


  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitForm',{
        age: this.age,
        impairmentVision: this.impairmentVision,
        yearsOfProgramming: this.yearsOfProgramming,
      });
      console.log(this.$store.state.experimentObject);
      this.$router.push('/playground');
      }
    }
  }

</script>

<template>

  <div class="d-flex flex-column align-center justify-center mt-9">
    <h1 >Experiment: camelCase vs kebab-case</h1>

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
        By submitting the form you agree to share your data with the owners of the website">
      <v-form >
        <v-text-field

            v-model="age"
            :rules="[v => !!v || 'Age is required',
                     v => /^\d{2}$/.test(v) || 'Enter a valid two-digit, positive number']"
            label="Age"
            mask="##"
        ></v-text-field>
        <v-select
            v-model="impairmentVision"
            :items="itemsImpairmentVision"
            :rules="[v => !!v || 'this information is required']"
            label="Do you have any problem with your sight?"
            required
        ></v-select>
        <v-select
            v-model="yearsOfProgramming"
            :items="itemsYearsOfProgramming"
            :rules="[v => !!v || 'Years of experience is required']"
            label="Years of experience in programming"
            required
        ></v-select>
        <div class="d-flex justify-center">
          <v-btn class="mb-3 mt-4"
                 color="green"
                 :disabled="!isFormFilled"
                 @click="this.submitForm()">
            Submit & start</v-btn>
        </div>

      </v-form>
    </v-card>
  </div>
</template>
