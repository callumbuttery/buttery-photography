<template>
    <div class="contactPrimaryContainer" id="contactSection">
        <v-container>
            <v-row align="center" justify="center">
                <v-col align="center" justify="center" class="contactTitle">CONTACT</v-col>
            </v-row>
            <v-col align="center" justify="center" class="contactLine">───────────────</v-col>
            <v-card class="contactCard" elevation="5">
                <v-row lign="center" justify="center">
                    <v-card-subtitle class="text-center contactText">Please feel free to use the below contact from to get in touch
                        about any queries you
                        have. We aim to get back to you within 48 hours</v-card-subtitle>

                    <v-form ref="form" v-model="valid" lazy-validation width>
                        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required>
                        </v-text-field>

                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
                            required></v-select>

                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                            label="Do you agree?" required></v-checkbox>

                        <v-btn :disabled="!valid" color="success" class="ma-2" @click="validate">
                            submit
                        </v-btn>
                    </v-form>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Basic Package',
            'Standard Package',
            'Premium Package',
            'Other',
        ],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
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
    padding-top: 100px;
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

.contactText {
    max-width: 600px;
    margin: auto;
}
</style>