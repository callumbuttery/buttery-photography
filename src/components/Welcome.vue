<template>
  <div id="welcomeSection">
    <v-img class="welcomeImage" width="100%" max-height="800" src="../assets/portfolio/IMG_5729.png">
      <v-container fill-height fluid>
        <v-col align="center" justify="center" class="topLine">───────────────</v-col>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center" class="mainText">BUTTERY VISUALS</v-col>
        </v-row>
        <v-col align="center" justify="center" class="bottomLine">───────────────</v-col>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({}),
};
</script>

<style>
.mainText {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #1D1C1A;
  
}
</style>
