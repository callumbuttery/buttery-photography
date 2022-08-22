<template>
    <div class="pricingPrimaryContainer" id="pricingSection">
        <v-container fill-height fluid class="pricingSecondaryContainer">
            <v-row align="center" justify="center">
                <v-col align="center" justify="center" class="packagesTitle">WEDDING PACKAGES</v-col>
            </v-row>
            <v-col align="center" justify="center" class="pricingTopLine">───────────────</v-col>
            <v-row>
                <v-col v-for="(option, i) in packages" :key="n">
                    <v-card class="pa-2 rounded-xl" outlined tile>
                        <v-card-title class="pricingTitle">{{ option.name }}</v-card-title>
                        <v-card-subtitle>{{ option.price }}</v-card-subtitle>
                        <v-card-text>{{ option.description }}</v-card-text>
                        <v-card-text v-for="(detail, j) in option.details" :key="j">{{ detail }}</v-card-text>
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
                    name: "Basic",
                    price: "£249.99",
                    description: "This package is perfect for smaller occasions, covering from the start of the ceremony through to arrival at reception.",
                    details: ['~1 hour of photography', '~1 hour of video', '1 hour of editing', '~1 hour of retouching', '~1 hour of lighting', '~1 hour of sound', '~1 hour of music', '~1 hour of props']
                },
                {
                    name: "Standard",
                    price: "£399.99",
                    description: "This package is perfect for smaller occasions, covering from the start of the ceremony through to arrival at reception.",
                    details: ['~2 hour of photography', '~2 hour of video', '2 hour of editing', '~2 hour of retouching', '~2 hour of lighting', '~2 hour of sound', '~1 hour of music', '~2 hour of props']
                },
                {
                    name: "Premium",
                    price: "£649.99",
                    description: "This package is perfect for smaller occasions, covering from the start of the ceremony through to arrival at reception.",
                    details: ['~3 hour of photography', '~3 hour of video', '3 hour of editing', '~3 hour of retouching', '~3 hour of lighting', '~3 hour of sound', '~3 hour of music', '~3 hour of props']
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
    width: 1400px;
    padding-top: 150px;
}

.pricingTitle {
    color: #f8b600;
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
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-top: 0px;
}
.pricingBottomLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #f5cb5c;
  margin-bottom: 50px;
}

</style>