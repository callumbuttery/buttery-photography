<template>
  <div>
    <v-img
      class="welcomeImage"
      width="100%"
      max-height="800"
      src="../assets/portfolio/IMG_5729.png"
    >
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center" class="mainText">BUTTERY PHOTOGRAPHY</v-col>
        </v-row>
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
  font-size: 50px;
  font-family: "Playfair Display", serif;
  color: Black;
  margin-bottom: 100px;
}

</style>
