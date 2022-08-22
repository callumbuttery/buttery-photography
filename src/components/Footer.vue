<template>
  <v-app-bar height="60px" color="#1D1C1A" dark>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" class="navRow">
        <span class="copyright">©Buttery Photography - 2022</span>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

.list {
  display: inline-block;
  color: white;
}

.buttons {
  font-family: "Playfair Display";
  color: white;
}

.logo {
  margin-left: 360px;
}

.listContainer {
  margin-right: 200px;
}

.copyright {
  font-family: "Playfair Display";
  opacity: 0.7;
}
</style>
