<template>
  <v-app>
    <Nav></Nav>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap");
</style>
