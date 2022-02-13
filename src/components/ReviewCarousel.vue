<template>
  <v-container
    ><v-card class="mx-auto" align-center justify-center>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="amber" v-bind="attrs" v-on="on">Previous</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="amber" v-bind="attrs" v-on="on">Next</v-btn>
        </template>
        <v-carousel-item v-for="(review, i) in reviews" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ review }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel></v-card
    ></v-container
  >
</template>

<script>
export default {
  name: "ReviewCarousel",
  data() {
    return {
      reviews: ["First", "Second", "Third", "Fourth", "Fifth"],
      stars: [],
      names: [],
      
    };
  },
};
</script>
