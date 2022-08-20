<template>
  <div class="portfolioPrimaryContainer">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" class="portfolioTitle"
        >PORTFOLIO</v-col
      >
    </v-row>
    <v-col align="center" justify="center" class="portfolioTopLine"
      >───────────────</v-col
    >
    <div
      class="portfolioSecondaryContainer"
      v-for="(wedding, i) in weddings"
      :key="i"
    >
      <v-card-title class="cardText" color="#bcb8b1">{{
        wedding.name
      }}</v-card-title>
      <v-card-subtitle class="text-center" color="#bcb8b1">{{
        wedding.venue
      }}</v-card-subtitle>
      <v-carousel class="carousel" hide-delimiters>
        <v-carousel-item
          v-for="(picture, j) in wedding.pictures"
          :key="j"
          :src="picture.src"
          reverse-transition="slide-x-transition"
          transition="slide-x-transition"
          contain
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      weddings: [
        {
          name: "Mr & Mrs Miller",
          venue: "Ross Priory",
          pictures: [
            {
              src: require("../assets/portfolio/Millers/9.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/1.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/2.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/3.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/4.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/5.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/6.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/7.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/8.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/10.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/11.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/12.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/13.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/14.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/15.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/16.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/17.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/18.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/19.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/20.jpg"),
            },
            {
              src: require("../assets/portfolio/Millers/21.jpg"),
            },
          ],
        },
        {
          name: "Mr & Mrs bob",
          venue: "The House",
          pictures: [
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
          ],
        },
        {
          name: "Mr & Mrs Smith",
          venue: "The moon",
          pictures: [
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            {
              src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.portfolioPrimaryContainer {
  background-color: #fff;
  padding-top: 150px;
}

.portfolioSecondaryContainer {
  background: #fff;
  max-width: 1000px;
  margin: auto;
  padding-bottom: 20px;
}

.cardText {
  max-width: 200px;
  margin: auto;
  color: #1d1c1a;
  font-family: "Playfair Display", serif;
  font-size: 22px;
}

.carousel {
  border-radius: 25px;
}

.portfolioTitle {
  color: #1d1c1a;
  margin: auto;
  margin-bottom: 0px;
  font-size: 50px;
  font-family: "Playfair Display", serif;
  max-width: 300px;
}

.portfolioTopLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #1d1c1a;
}
</style>
