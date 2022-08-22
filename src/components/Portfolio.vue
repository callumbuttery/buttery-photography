<template>
  <div class="portfolioPrimaryContainer" id="portfolioSection">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" class="portfolioTitle"
        >PORTFOLIO</v-col
      >
    </v-row>
    <v-col align="center" justify="center" class="portfolioTopLine"
      >───────────────</v-col
    >
    <v-container class="portfolioSecondaryContainer" fill-height fluid>
      <v-row>
        <v-col v-for="(wedding, i) in weddings" :key="i" class="columns">
          <v-card-title class="text-center cardText" color="#bcb8b1">{{
            wedding.name
          }}</v-card-title>
          <v-card-subtitle class="text-center cardSubText" color="#bcb8b1">{{
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      weddings: [
        {
          name: "The Miller's",
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
          name: "The McGhee's",
          venue: "The Corinthian Club",
          pictures: [
            {
              src: require("../assets/portfolio/McGhee/1.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/2.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/3.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/4.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/5.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/6.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/7.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/8.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/9.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/10.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/11.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/12.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/13.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/14.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/15.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/16.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/17.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/18.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/19.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/20.jpg"),
            },
            {
              src: require("../assets/portfolio/McGhee/21.jpg"),
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
  padding-bottom: 20px;
  margin: auto;
}

.cardText {
  max-width: 200px;
  margin: auto;
  color: #1d1c1a;
  font-family: "Playfair Display", serif;
  font-size: 20px;
}

.cardSubText {
  margin: auto;
  max-width: 300px;
}

.carousel {
  border-radius: 25px;
  width: 700px;
  margin: auto;
}

.columns {
  width: 700px;
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
