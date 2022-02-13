<template>
  <v-app>
    <v-app-bar app color="#5c5c5c" elevation="10" height="125">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/assets/textwhite.png"
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

      <v-tab large color="white"><router-link to="/" class="navButtons white--text text-h6">Home</router-link></v-tab>
      <v-tab large color="white"><router-link to="/about" class="navButtons white--text text-h6">About</router-link></v-tab>
      <v-tab large color="white"><router-link to="/" class="navButtons white--text text-h6">Portfolio</router-link></v-tab>
      <v-tab large color="white"><router-link to="/" class="navButtons white--text text-h6">Pricing</router-link></v-tab>
      <v-tab large color="white"><router-link to="/" class="navButtons white--text text-h6">Contact</router-link></v-tab>
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
  color: "white";
}
</style>
