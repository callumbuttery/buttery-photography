<template>
  <div>
    <Welcome />
    <Intro />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Intro from "../components/Intro";

export default {
  name: "Home",

  components: {
    Welcome,
    Intro,
  },
};
</script>
