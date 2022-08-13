<template>
    <div class="contactPrimaryContainer">
        <v-container>
            <v-row align="center" justify="center">
                <v-col align="center" justify="center" class="contactTitle">CONTACT</v-col>
            </v-row>
            <v-col align="center" justify="center" class="contactLine">───────────────</v-col>
            <v-card class="contactCard" elevation="5">
                <v-row lign="center" justify="center"> 
                    <v-card-title>Hello world</v-card-title>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Contact",
}
</script>


<style>
.contactTitle {
    color: #1D1C1A;
    margin: auto;
    margin-bottom: 0px;
    font-size: 50px;
    font-family: "Playfair Display", serif;

}

.contactPrimaryContainer {
    background-color: #fff;
    padding-top: 150px;
    padding-bottom: 150px;
}

.contactLine {
    font-size: 60px;
    font-family: "Playfair Display", serif;
    color: #1D1C1A;
}

.contactCard {
    width: 700px;
    margin: auto;
}
</style>