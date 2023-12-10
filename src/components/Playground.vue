<script>
export default {
  name: "Playground"
}
</script>

<template>

  <h1>Phase 0: try out the selection process</h1>


  <v-card title="case0"></v-card>

  <v-row class="pa-4">
    <v-col cols="2" sm="2" md="2" lg="2">
      <v-card text="case1"></v-card>
      <v-card text="case2"></v-card>
      <v-card text="case3"></v-card>
      <v-card text="case4"></v-card>
    </v-col>
  </v-row>

  <v-btn>switch Kebab-case/camelCase</v-btn>

  <v-btn class="ma-4  rounded-xl"
         color="green"> start experiment </v-btn>

</template>

<style scoped>

</style>