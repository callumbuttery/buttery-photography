<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn large color="white"><router-link to="/" class="navButtons">Home</router-link></v-btn>
      <v-btn large color="white"><router-link to="/about" class="navButtons">About</router-link></v-btn>
      <v-btn large color="white"><router-link to="/" class="navButtons">Portfolio</router-link></v-btn>
      <v-btn large color="white"><router-link to="/" class="navButtons">Pricing</router-link></v-btn>
      <v-btn large color="white"><router-link to="/" class="navButtons">Contact</router-link></v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.navButtons {
  text-decoration: none;
}
</style>
