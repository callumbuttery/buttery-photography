<template>
  <v-container>
    <TitleAndRating/>
  </v-container>
</template>

<script>
import TitleAndRating from "../components/TitleAndRating";

export default {
  name: "Home",

  components: {
    TitleAndRating,
  },
};
</script>

<style>
#fullContainer {
  background-color: "grey",
}
</style>
