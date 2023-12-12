<script>
export default {
  name: "PlaygroundPage"
}
</script>

<template>
  <div class="d-flex flex-column align-center justify-center ">

  <h1>Phase 0: try out the selection process</h1>


  <v-card title="case0"></v-card>

  <v-row row="2">
    <v-col class="ma-2" >

      <v-card class="ma-2" text="case1"></v-card>
      <v-card class="ma-2" text="case2"></v-card>
      <v-card class="ma-2" text="case3"></v-card>
      <v-card class="ma-2" text="case4"></v-card>
    </v-col>
  </v-row>

  <v-btn>switch Kebab-case/camelCase</v-btn>

  <v-btn class="ma-4  rounded-xl"
         color="green"> start experiment </v-btn>

  </div>
</template>

<style scoped>

</style>