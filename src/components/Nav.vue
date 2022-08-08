<template>
  <v-app-bar app height="100px" color="black" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 logo"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="200"
      />
    </div>
    <v-spacer></v-spacer>
    <div class="listContainer">
      <div v-for="item in items" class="list">
        <v-btn class="buttons white--text" plain x-large color="black">{{
          item.text
        }}</v-btn>
      </div>
      <v-icon color="red darken-2">mdi-instagram </v-icon>
    </div>
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
          href: "/",
        },
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Contact",
          href: "/contact",
        },
        {
          text: "Pricing",
          href: "/pricing",
        },
        {
          text: "weddings",
          href: "/pricing",
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
}

.buttons {
  font-family: "Playfair Display", serif;
  color: white;
}

.logo {
  margin-left: 360px;
}

.listContainer {
  margin-right: 200px;
}
</style>
