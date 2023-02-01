<template>
    <div class="pricingPrimaryContainer" id="pricingSection">
        <v-container fill-height fluid class="pricingSecondaryContainer">
            <v-row align="center" justify="center">
                <v-col align="center" justify="center" class="packagesTitle">WEDDING PACKAGES</v-col>
            </v-row>
            <v-col align="center" justify="center" class="pricingTopLine">───────────────</v-col>
            <v-row>
                <v-col v-for="(option, i) in packages" :key="i" class="pa-10" data-aos="fade-up" data-aos-duration="2000">
                    <v-card class="pa-6 rounded-xl" height="760px" :color="option.color">
                        <v-card class="full-height rounded-xl" elevation="20" height="720px">
                            <v-card-title class="pricingTitle text-h5">{{ option.name }}</v-card-title>
                            <v-card-subtitle class="mb-5 font-weight-black text-h5">{{ option.price }}</v-card-subtitle>
                            <v-card-text class="mb-10 text-body-1 font-weight-medium">{{ option.description }}</v-card-text>
                            <v-card-text v-for="(detail, j) in option.details" :key="j" class="text-body-1">{{ detail }}</v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
            <v-col align="center" justify="center" class="pricingBottomLine">───────────────</v-col>
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
                    price: "£249.99",
                    description: "This package is perfect for smaller occasions, covering from the start of the ceremony through to arrival at reception.",
                    details: ['• Full ceremony coverage', '• Guests arriving at reception', '• Couples shoot', '• Group shots', '• 50-100 pictures (depending on size)', '• Editing time included'],
                    color: 'silver',
                },
                {
                    name: "Gold - Best Value",
                    price: "£399.99",
                    description: "Our BEST value package. Designed for an average wedding size, covering Full Ceremony to first dances",
                    details: ['• Full ceremony coverage', '• Guests arriving at reception', '• Start of reception through first dances', '• Couples shoot', '• Group shots', '• 75-200 pictures (depending on size)', '• Editing time included'],
                    color: '#ffd666',
                },
                {
                    name: "Platinum",
                    price: "£649.99",
                    description: "This package is perfect for larger occasions, Bridal prep through to end of reception. Additional couples shoot on seperate day",
                    details: ['• Bridal prep', '• Full ceremony', '• Full reception', '• Couples shoot', '• Group shots', '• 100-350 pictures (depending on size) ', '• Editing time included', '• Couples shoot on seperate day at special location'],
                    color: 'silver',
                },
            ],
        }
    }
}

</script>


<style>
.pricingPrimaryContainer {
    background: #1D1C1A;
    padding-bottom: 150px;
}

.pricingSecondaryContainer {
    width: 1800px;
    padding-top: 150px;
}

.pricingTitle {
    font-family: "Playfair Display", serif;
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
}

</style>