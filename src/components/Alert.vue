<template>
  <div>
    <v-alert elevation="13" :type="type" class="alertMessage">{{
      message
    }}</v-alert>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
    },
    message: {
        type: String,
    }
  },
  watchers: {
    type(newType) {
      this.type = newType;
    },
    message(newMessage) {
        this.message = newMessage;
    }
  }, 
};
</script>

<style>
.alertMessage {
  margin-top: 50px;
}
</style>
