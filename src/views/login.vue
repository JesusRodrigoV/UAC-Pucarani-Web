<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Inicia Sesion</h4>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">

                                                <v-text-field label="Email" outlined dense color="blue"
                                                    autocomplete="false" class="mt-16" />
                                                <v-text-field label="Password" outlined dense color="blue"
                                                    autocomplete="false" type="password" />
                                                <v-btn color="blue" dark block tile>Log in</v-btn>

                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                                    <div style="text-align: center; padding: 30px 0;">
                                        <!-- Ajustamos el tamaño de la imagen -->
                                        <img src="@/assets/images/infra/principal.jpg" alt="" style="max-width: 70%; height: auto; max-height: 150px; padding:0; margin:0;">
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        step: 1
    }),
    props: {
        source: String
    }
}
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
