<template>
  <v-app-bar height="130px" color="#1D1C1A" dark>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" class="navRow">
        <v-img src="../assets/logo.png" height="70px" contain></v-img>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Portfolio",
          href: "/pricing",
        },
        {
          text: "Pricing",
          href: "/pricing",
        },
        {
          text: "Contact",
          href: "/contact",
        },
      ],
    };
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
