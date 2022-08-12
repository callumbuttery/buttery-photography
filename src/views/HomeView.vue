<template>
  <div>
    <Welcome />
    <Intro />
    <Portfolio />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio.vue"

export default {
  name: "Home",

  components: {
    Welcome,
    Intro,
    Portfolio
  },
};
</script>
