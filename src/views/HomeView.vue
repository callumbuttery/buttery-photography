<template>
  <div>
    <Welcome />
    <Intro />
    <Portfolio />
    <Pricing />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio.vue"
import Pricing from "../components/Pricing.vue"

export default {
  name: "Home",

  components: {
    Welcome,
    Intro,
    Portfolio,
    Pricing,
  },
};
</script>
