<template>
  <div class="portfolioPrimaryContainer" id="portfolioSection">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" class="portfolioTitle"
        >PORTFOLIO</v-col
      >
    </v-row>
    <v-col align="center" justify="center" class="caption">
      Other images available on request
    </v-col>
    <v-col align="center" class="portfolioTopLine"
      >───────────────</v-col
    >
    <v-container class="portfolioSecondaryContainer" fill-height fluid>
      <v-row>
        <v-card
          v-for="(wedding, i) in weddings"
          :key="i"
          class="columns"
          elevation="10"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <v-col>
            <h2 class="text-center cardText" color="#bcb8b1">
              {{ wedding.name }}
            </h2>
            <p class="text-center cardSubText" color="#bcb8b1">
              {{ wedding.venue }}
            </p>
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
        </v-card>
      </v-row>
    </v-container>
    <v-col align="center" justify="center" class="portfolioBottomLine"
      >───────────────</v-col
    >
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
          name: "Mr & Mrs McGhee",
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
          name: "Mr & Mrs Munro",
          venue: "Bothwell Parish Church",
          pictures: [
            {
              src: require("../assets/portfolio/Munros/1.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/2.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/3.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/4.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/5.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/6.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/7.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/8.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/9.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/10.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/11.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/12.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/13.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/14.jpg"),
            },
            {
              src: require("../assets/portfolio/Munros/15.jpg"),
            },
          ],
        },
        {
          name: "Mr & Mrs Smith",
          venue: "The Dalmahoy",
          pictures: [
            {
              src: require("../assets/portfolio/Smiths/1.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/2.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/3.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/4.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/5.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/6.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/7.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/8.jpg"),
            },
            {
              src: require("../assets/portfolio/Smiths/9.jpg"),
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
  padding-top: 100px;
}

.portfolioSecondaryContainer {
  background: #fff;
  padding-bottom: 20px;
  margin: auto;
}

.cardText {
  color: #1d1c1a;
  font-family: "Playfair Display", serif;
  font-size: 20px;
}

.cardSubText {
  font-family: "Playfair Display", serif;
}

.carousel {
  border-radius: 25px;
  width: 600px;
  margin: auto;
}

.columns {
  width: 800px;
  margin: auto;
  margin-bottom: 100px;
  padding-bottom: 20px;
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
  font-size: 20px;
  font-family: "Playfair Display", serif;
  color: #1d1c1a;
}
.portfolioBottomLine {
  font-size: 20px;
  font-family: "Playfair Display", serif;
  color: #1d1c1a;
  padding-bottom: 100px;
}
</style>
