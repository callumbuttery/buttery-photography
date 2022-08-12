<template>
  <div>
    <Welcome />
    <Intro />
    <Portfolio />
    <Pricing />
    <Contact />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio.vue"
import Pricing from "../components/Pricing.vue"
import Contact from "../components/Contact.vue"

export default {
  name: "Home",

  components: {
    Welcome,
    Intro,
    Portfolio,
    Pricing,
    Contact
  },
};
</script>
