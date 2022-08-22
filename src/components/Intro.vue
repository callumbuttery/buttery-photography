<template>
  <v-container fluid wrap class="introContainer" id="aboutSection">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" class="introTitle">ABOUT</v-col>
    </v-row>
    <v-col align="center" justify="center" class="topLine">───────────────</v-col>
    <v-row>
      <v-col align="center" justify="center" class="introMainHeader">Natural, documentary Wedding Photography</v-col>
    </v-row>
    <v-col align="center">
      <div class="introMainText">Hello! I'm Callum Buttery, Wedding Photographer,
        Software Engineer and lover of all things sport & wildlife. My wedding style is very relaxed with a focus on
        catching candid smiles from beautiful moments. Shooting this way allows for everyone to enjoy their day without
        the stress of having a
        camera in their face. Lets be real, posing doesn't truly represent your big day!
      </div>
    </v-col>

    <v-rating length="5" size="40" :value="5" color="#f5cb5c" align="center" justify="center" class="introRating"
      readonly>
    </v-rating>
    <div class="introMainText text-caption">9 reviews</div>


    <v-col align="center" justify="center" class="bottomLine">───────────────</v-col>
  </v-container>
</template>

<script>
export default {
  name: "Intro",

  data: () => ({}),
};
</script>

<style>
.topLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-top: 0px;
}

.bottomLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-bottom: 150px;
}

.introMainHeader {
  font-size: 30px;
  font-family: "Playfair Display", serif;
  color: white;
}

.introMainText {
  width: 700px;
  margin: auto;
  text-align: center;
  color: white;
}
  
.introRating {
  margin-top: 30px;
}

.introContainer {
  background: #1D1C1A !important;
}

.introTitle {
  color: White;
  margin: auto;
  margin-bottom: 0px;
  font-size: 50px;
  font-family: "Playfair Display", serif;
  max-width: 180px;
  padding-top: 100px;

}
</style>
