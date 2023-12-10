<script>
export default {
  name: "HomePage"
}
</script>

<template>

  <div class="d-flex flex-column align-center justify-center mt-16">
    <v-card
        width="400"
        title="Experiment: camelCase vs kebab-case"
    ></v-card>

    <v-card
        width="500"
        class="mt-2"
        subtitle="Introduction: "
        text="Studies performed in natural language reading show that people read better (i.e., 20% faster) when an explicit
              separator is used between words. It does not matter the type of separator, it could be a white space or a special
              symbol. The overall message is that readingthistext is more difficult than reading_this_text or reading this text.">

    </v-card>

    <v-card
        width="500"
        class="mt-2"
        subtitle="Instructions: "
        text="When you are going to press start experiment...(text)"
    >
    </v-card>

    <v-card
        width="500"
        class="mt-2"
        subtitle="form: "
        text="Please, fill in the form."
    >
      <form>
        
      </form>
    </v-card>

    <v-btn class="ma-4  rounded-xl"
           color="green"> start experiment </v-btn>

  </div>



</template>

<style scoped>

</style>