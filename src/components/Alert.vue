<template>
  <div>
    <v-alert elevation="13" :type="type" class="alertMessage">{{message}}</v-alert>
  </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: {
            type: String,
        }
    },
    watchers: {
        type(newType) {
            this.type = newType;
            newType === 'success' ? this.message = 'Email sent, we will be in touch within 48 hours!' : this.message = 'Email failed to send, please try again'
        }
    },
    data() {
        return {
            message: '',
        }
    }
}

</script>

<style>

.alertMessage {
    margin-top: 50px;
}

</style>
