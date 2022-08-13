<template>
    <div class="portfolioPrimaryContainer">
        <v-row align="center" justify="center">
            <v-col align="center" justify="center" class="portfolioTitle">PORTFOLIO</v-col>
        </v-row>
        <v-col align="center" justify="center" class="portfolioTopLine">───────────────</v-col>
        <div class="portfolioSecondaryContainer" v-for="(wedding, i) in weddings" :key="i">
            <v-card-title class="cardText" color="#bcb8b1">{{ wedding.name }}</v-card-title>
            <v-card-subtitle class="text-center" color="#bcb8b1">{{ wedding.venue }}</v-card-subtitle>
            <v-carousel class="carousel">
                <v-carousel-item v-for="(picture, j) in wedding.pictures" :key="j" :src="picture.src"
                    reverse-transition="slide-x-transition" transition="slide-x-transition"></v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data() {
        return {
            weddings: [
                {
                    name: "Mr & Mrs John",
                    venue: "The Castle",
                    pictures: [
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        },
                    ],
                },
                {
                    name: "Mr & Mrs bob",
                    venue: "The House",
                    pictures: [
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        },
                    ],
                },
                {
                    name: "Mr & Mrs Smith",
                    venue: "The moon",
                    pictures: [
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        },
                    ],
                },
            ]
        }
    },
}

</script>

<style>
.portfolioPrimaryContainer {
    background-color: #fff;
    padding-top: 150px;
}


.portfolioSecondaryContainer {
    background: #fff;
    max-width: 1000px;
    margin: auto;
    padding-bottom: 150px;
}

.cardText {
    max-width: 200px;
    margin: auto;
    color: #1D1C1A;
    font-family: "Playfair Display", serif;
    font-size: 22px;
}

.carousel {
    border-radius: 25px;
}

.v-carousel__controls {
    background: none;
}

.portfolioTitle {
    color: #1D1C1A;
    margin: auto;
    margin-bottom: 40px;
    font-size: 50px;
    font-family: "Playfair Display", serif;
    max-width: 300px;
}

.portfolioTopLine {
  font-size: 60px;
  font-family: "Playfair Display", serif;
  color: #1D1C1A;
}
</style>