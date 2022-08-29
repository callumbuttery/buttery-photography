<template>
  <div class="contactPrimaryContainer" id="contactSection">
    <v-container>
      <v-row align="center" justify="center">
        <v-col align="center" justify="center" class="contactTitle"
          >CONTACT</v-col
        >
      </v-row>
      <v-col align="center" justify="center" class="contactLine"
        >───────────────</v-col
      >
      <v-card class="contactCard" elevation="5">
        <v-card-subtitle class="text-center contactText"
          >Please feel free to use the below contact from to get in touch about
          any queries you have. We aim to get back to you within 48
          hours</v-card-subtitle
        >

        <v-form ref="form" class="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="50"
            :rules="nameRules"
            label="Name"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            label="Phone"
          ></v-text-field>

          <v-select
            v-model="item"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            label="Reason for contact..."
            required
            height="100px"
          ></v-text-field>

          <v-text-field
            v-model="venue"
            label="Venue if known..."
          ></v-text-field>

          <v-text-field
            v-model="date"
            label="Date of event if known..."
          ></v-text-field>

          <v-row>
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              required
            ></v-checkbox>
            <div color="black" class="mt-5">
              Do you agree with our
              <router-link to="/privacy">privacy policy?</router-link>
            </div>
          </v-row>
        </v-form>
        <v-btn
          :disabled="!valid"
          color="success"
          class="ma-2 submitButton"
          @click="validate"
        >
          submit
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    subjectRules: [
      (v) => !!v || "Subject is required",
    ],
    phone: "",
    select: null,
    item: "",
    items: ["Basic Package", "Standard Package", "Premium Package", "Other"],
    checkbox: false,
    subject: "",
    date: "",
    venue: "",
  }),

  methods: {
    validate() {
      this.$refs.form.validate();

      this.sendEmail();
    },
    openPrivacy() {
      this.$router.go(Gdpr);
    },
    async sendEmail() {
      await axios(`/.netlify/functions/service`, {
        method: 'POST',
        data: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          item: this.item,
          venue: this.venue,
          date: this.date,
          subject: this.subject,
        },
      });
    },
  },
};
</script>

<style>
.contactTitle {
  color: #1d1c1a;
  margin: auto;
  margin-bottom: 0px;
  font-size: 50px;
  font-family: "Playfair Display", serif;
}

.contactPrimaryContainer {
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 150px;
}

.contactLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #1d1c1a;
}

.contactCard {
  width: 1000px;
  margin: auto;
}

.contactText {
  max-width: 600px;
  margin: auto;
}

.form {
  max-width: 600px;
  margin: auto;
}

.submitButton {
  left: 45%;
}
</style>
