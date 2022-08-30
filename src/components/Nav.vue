<template>
  <v-app-bar app height="130px" color="#1D1C1A" dark>
    <v-img src="../assets/logo2.png" class="" width="10px" height="100px" contain></v-img>
      <v-row align="center" justify="center" class="navRow">
        <div v-for="item in items" class="list">
          <v-btn
            class="buttons white--text"
            text
            x-large
            color="#1D1C1A"
            v-scroll-to="{ el: item.scroll, offset: item.offset }"
            >{{ item.text }}</v-btn
          >
        </div>
        <v-icon class="ml-10" color="grey lighten-1" size="25" @click="popOpenInstagram"
          >mdi-instagram
        </v-icon>
        <v-spacer></v-spacer>
      </v-row>
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
          offset: 10,
        },
        {
          text: "Pricing",
          scroll: "#pricingSection",
          offset: 10,
        },
        {
          text: "Contact",
          scroll: "#contactSection",
          offset: -40,
        },
      ],
    };
  },
  methods: {
    popOpenInstagram() {
      window.open(
        "https://www.instagram.com/buttery.photography/",
        "_blank",
        "noopener"
      );
    },
  },
};
</script>

<style>
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

.v-btn__content {
  font-size: 20px;
}

@media screen and (max-width: 500px){
  .v-btn__content {
    font-size: 12px;
}
}

</style>
