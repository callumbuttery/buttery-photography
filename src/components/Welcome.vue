<template>
  <div id="welcomeSection">
    <v-img class="welcomeImage" width="100%" max-height="1000" src="../assets/portfolio/IMG_5729.png">
      <v-container fill-height>
        <v-row>
          <v-img fluid data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" elevation="10" contain class="welcomeImage mx-auto" width="100%" max-height="600" max-width="600" src="../assets/logo-black.png" />
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    logo: require("../assets/logo.png"),
  }),
};
</script>

<style>
.mainText {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #fff;
  
}

.welcomeImage {
  filter: drop-shadow(3px 10px 7px #3B3B3B);
}

.welcomeTopLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-top: 0px;
}

.welcomeBottomLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-bottom: 150px;
}
</style>
