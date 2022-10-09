<template>
  <div id="welcomeSection">
    <v-img class="welcomeImage" width="100%" max-height="1000" src="../assets/portfolio/IMG_5729.png">
      <v-container fill-height fluid data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
        <v-col align="center" justify="center" class="topLine">───────────────</v-col>
        <v-row>
          <v-col align="center" justify="center" class="mainText">BUTTERY PHOTOGRAPHY</v-col>
        </v-row>
        <v-col align="center" justify="center" class="bottomLine">───────────────</v-col>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    logo: require("../assets/logo3.png"),
  }),
};
</script>

<style>
.mainText {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #fff;
  
}
</style>
