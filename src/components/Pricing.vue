<template>
  <div class="pricingPrimaryContainer" id="pricingSection">
    <v-container fill-height fluid class="pricingSecondaryContainer">
      <v-row align="center" justify="center">
        <v-col align="center" justify="center" class="packagesTitle"
          >WEDDING PACKAGES</v-col
        >
      </v-row>
      <v-col align="center" justify="center" class="pricingTopLine"
        >───────────────</v-col
      >
      <v-row class="contain-row">
        <v-col
          v-for="(option, i) in packages"
          :key="i"
          class="pa-16"
          height="760px"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div height="720px" class="cardContainer">
            <v-card-title class="pricingTitle text-h5">{{
              option.name
            }}</v-card-title>
            <div class="pt-10">
              <v-card-text
                v-for="(detail, j) in option.details"
                :key="j"
                class="text-body-1"
                >{{ detail }}</v-card-text
              >
            </div>

            <v-card-subtitle
              class="mb-5 pt-16 font-weight text-h5 "
              >{{ option.price }}</v-card-subtitle
            >
          </div>
        </v-col>
      </v-row>
      <v-col align="center" justify="center" class="pricingBottomLine"
        >───────────────</v-col
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      packages: [
        {
          name: "Silver",
          price: "£499.99",
          description:
            "This package is perfect for smaller occasions, covering from the start of the ceremony through to arrival at reception.",
          details: [
            "• Full ceremony coverage",
            "• Guests arriving at reception",
            "• Couples shoot",
            "• Group shots",
            "• 50-100 pictures (depending on size)",
            "• Editing time included",
          ],
          color: "#c0c0c0",
        },
        {
          name: "Gold - Best Value",
          price: "£699.99",
          description:
            "Our BEST value package. Designed for an average wedding size, covering Full Ceremony to first dances",
          details: [
            "• Full ceremony coverage",
            "• Guests arriving at reception",
            "• Start of reception through first dances",
            "• Couples shoot",
            "• Group shots",
            "• 75-200 pictures (depending on size)",
            "• Editing time included",
            "• £25 print voucher",
            "• 5 A4 prints of choice",
          ],
          color: "#f5cb5c;",
        },
        {
          name: "Platinum",
          price: "£949.99",
          description:
            "This package is perfect for larger occasions, Bridal prep through to end of reception. Additional couples shoot on seperate day",
          details: [
            "• Bridal prep",
            "• Full ceremony",
            "• Full reception",
            "• Couples shoot",
            "• Group shots",
            "• 100-350 pictures (depending on size) ",
            "• Editing time included",
            "• Couples shoot on seperate day at special location",
            "• £25 print voucher",
            "• 10 A4 prints of choice",
          ],
          color: "#E5E4E2",
        },
      ],
    };
  },
};
</script>

<style>
.pricingPrimaryContainer {
  background: #1d1c1a;
  padding-bottom: 150px;
}

.pricingSecondaryContainer {
  width: 1600px;
  padding-top: 150px;
}

.cardContainer {
  background: white;
  border-radius: 10px;
  border: 1px;
  height: 650px;
}

.pricingTitle {
  font-family: "Playfair Display", serif;
  color: black;
}

.packagesTitle {
  color: white;
  margin: auto;
  margin-bottom: 0px;
  font-size: 50px;
  font-family: "Playfair Display", serif;
}

.pricingTopLine {
  font-size: 20px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-top: 0px;
}
.pricingBottomLine {
  font-size: 20px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-bottom: 50px;
}

.v-card__text {
  padding: 8px;
  color: black;
}

.contain-row {
  width: 50%;
  margin: 0 auto;
}
</style>
