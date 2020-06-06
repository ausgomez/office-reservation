<!-- views/NotFound.vue -->

<template>
    <v-container>
        <div class="NotFound">
            <v-container class="mx-auto">
                <v-row dense>
                    <v-col cols="12">
                        <v-card
                        color="transparent"
                        light 
                        flat
                        >
                        <h1 class="text-center">404</h1>
                        <v-card-title class="headline">¡Ups! La página que buscas no existe</v-card-title>
            
                        <v-card-subtitle>No te preocupes, a veces sucede que nos sentimos perdidos en la vida.</v-card-subtitle>
            
                        <v-card-actions>
                            <v-btn class="primary">Regresar a Inicio</v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-container>
</template>

<script>
export default {
  name: "NotFound",
  data () {
      return {
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch',
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      justify: 'center',
    }
  },
};
</script>

<style>
.paragraph-text {
    font-size: 18px;
}

</style>