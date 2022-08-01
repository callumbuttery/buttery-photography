<template>
  <v-app-bar app color="white" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="180"
      />
    </div>

    <v-spacer></v-spacer>
    <div v-for="item in items">
      <v-btn class="ma-1" elevation="2" plain raised color="black">{{ item.text }}</v-btn>
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
          icon: "mdi-home",
          href: "/",
        },
        {
          text: "About",
          icon: "mdi-information",
          href: "/about",
        },
        {
          text: "Contact",
          icon: "mdi-email",
          href: "/contact",
        },
        {
          text: "Wildlife",
          icon: "mdi-account",
          href: "/login",
        },
        {
          text: "weddings",
          icon: "mdi-account-plus",
          href: "/register",
        },
      ],
    };
  },
};
</script>

<style>
.list {
  display: inline-block;
}
</style>
