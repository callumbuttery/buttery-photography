<template>
  <v-container class="centerContainer">
    <v-card
      shaped
      class="rounded-card mx-auto"
      color="#adadad"
      width="50%"
      elevation="24"
    >
      <v-row class="text-center" align-center justify-center>
        <v-col cols="12">
          <v-img
            :src="require('../assets/ButteryVIsuals.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3 white--text">
            Buttery Photography
          </h1>

          <h2 class="subheading font-weight-regular white--text">
            Wedding Photographer Scotland
          </h2>

          <v-rating
            :value="5"
            color="#f4ca21"
            class="mt-auto"
            dense
            half-increments
            readonly
            size="30" 
          ></v-rating>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TitleAndRating",

  data: () => ({}),
};
</script>

<style>
.centerContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rounded-card {
  border-radius: 50px;
}
</style>
