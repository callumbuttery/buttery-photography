<template>
  <v-app-bar app height="130px" color="#1D1C1A" dark>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" class="navRow">
        <v-img src="../assets/logo2.png" height="70px" contain></v-img>
        <div v-for="item in items" class="list">
          <v-btn class="buttons white--text" text x-large color="#1D1C1A" v-scroll-to="{el: item.scroll, offset: item.offset}">{{
              item.text
          }}</v-btn>
        </div>
        <v-icon color="red darken-2" @click="popOpenInstagram">mdi-instagram </v-icon>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      items: [
        {
          text: "Home",
          scroll: "#welcomeSection",
          offset: -100,
        },
        {
          text: "About",
          scroll: "#aboutSection",
          offset: -100,
        },
        {
          text: "Portfolio",
          scroll: "#portfolioSection",
          offset: -50,
        },
        {
          text: "Pricing",
          scroll: "#pricingSection",
          offset: -50,
        },
        {
          text: "Contact",
          scroll: "#contactSection",
          offset: -75,
        },
      ],
    };
  },
  methods: {
    popOpenInstagram() {
      window.open("https://www.instagram.com/buttery.photography/", "_blank", "noopener");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap");

.list {
  display: inline-block;
  color: white;
}

.buttons {
  font-family: "Playfair Display";
  color: white;
}

.logo {
  margin-left: 360px;
}

.listContainer {
  margin-right: 200px;
}
</style>
