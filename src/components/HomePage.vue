<script>
export default {
  name: "HomePage",
  data() {
    return {
      firstName: '',
      lastName: '',
      age: null,
      gender: null,
      whichGender: [
        'male',
        'female'
      ],
      hasITSkills: null,
      hasGlasses: null,
      items: [
        'yes',
        'no'
      ],

    }

  },
  computed: {
    isFormFilled() {
      return this.age !== null && this.hasGlasses !== null && this.hasITSkills !== null;
    },


  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitForm',{
        age: this.age,
        gender: this.gender,
        hasGlasses: this.hasGlasses,
        hasITSkills: this.hasITSkills,
      });
      console.log(this.$store.state.experimentObject);
      this.$router.push('/playground');
      }
    }
  }

</script>

<template>

  <div class="d-flex flex-column align-center justify-center mt-4">
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
        class="mt-2 mb-4 rounded-xl"
        elevation="16"
        subtitle="form: "
        text="Please, fill in the form before starting the experiment.
        By submitting the form you agree to share your data with the owners of the website">
      <v-form>
        <v-text-field

            v-model="age"
            :rules="[v => !!v || 'Age is required',
                     v => /^\d{2}$/.test(v) || 'Enter a valid two-digit, positive number']"
            label="Age"
            mask="##"
        ></v-text-field>
        <v-select
            v-model="gender"
            :items="whichGender"
            :rules="[v => !!v || 'this information is required']"
            label="what is your gender?"
            required
        ></v-select>
        <v-select
            v-model="hasGlasses"
            :items="items"
            :rules="[v => !!v || 'this information is required']"
            label="Do you wear glasses?"
            required
        ></v-select>
        <v-select
            v-model="hasITSkills"
            :items="items"
            :rules="[v => !!v || 'Years of experience is required']"
            label="Do you have any programming skills?"
            required
        ></v-select>
        <div class="d-flex justify-center">
          <v-btn class="mb-3 mt-4 rounded-xl"
                 color="green"
                 :disabled="!isFormFilled"
                 @click="this.submitForm()">
            Submit & start</v-btn>
        </div>

      </v-form>
    </v-card>
  </div>
</template>
