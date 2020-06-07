<template>
  <v-container fluid class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <h1 class="text-center">Ubicaciones</h1>
        <v-card
          color="grey lighten-4"
          flat
          width="40em"
          tile
          v-for="ubicacion in ubicaciones"
          :key="ubicacion.id"
        >
          <v-container fluid>
            <v-row no-gutters>
              <v-col>
                <v-card elevation="2">
                  <v-carousel
                    :continuous="false"
                    :cycle="true"
                    :show-arrows="true"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="250"
                  >
                    <v-carousel-item
                      v-for="(img, i) in ubicacion.imagenes"
                      :key="i"
                      :src="img"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
              <v-col>
                <v-card color="rgb(69, 132, 255)" height="250" dark>
                  <v-btn class="float-right" icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-card-title class="headline"
                    >Edificio {{ ubicacion.nombre }}
                    <v-rating
                      :value="4.5"
                      color="white"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating
                  ></v-card-title>

                  <v-card-subtitle>{{ ubicacion.direccion }}</v-card-subtitle>

                  <v-card-actions>
                    <router-link
                      :to="{
                        name: 'UbicacionesShow',
                        params: { ubicacion_id: ubicacion.id },
                      }"
                    >
                      <v-btn text>ver mas</v-btn></router-link
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>

      <v-col>
        <v-card color="grey lighten-4" height="50em" width="31em">
          <v-toolbar dense> </v-toolbar>
          <MapGoogle />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MapGoogle from "@/components/maps/MapsGoogle.vue";

export default {
  name: "UbicacionesIndex",
  components: {
    MapGoogle,
  },
  data: () => ({
    ubicaciones: [
      {
        id: 825715,
        nombre: "Edificio Central",
        descripcion:
          "Bacon ipsum dolor amet t-bone tail chicken rump bresaola pig chuck buffalo biltong drumstick flank beef ribs capicola. Kielbasa biltong alcatra pancetta prosciutto drumstick. Pork sausage tri-tip, frankfurter prosciutto doner spare ribs meatloaf shoulder chicken tongue shankle",
        telefono: "+52 555-5555",
        empresa_id: 1772,
        lat: 9,
        lon: 10,
        activo: true,
        direccion: `Calle 13 #456 Colonia Las Milpas, CP 89228 Toluca, Mexico`,
        imagenes: [
          "https://locations-api-production.imgix.net/locations/image/f0381cfe-1aba-11ea-97fa-0a5bc5747799/Web_72DPI-20191121_WeWork_Williams_Square_Dallas_015.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
          "https://locations-api-production.imgix.net/locations/image/ef449688-1aba-11ea-97fa-0a5bc5747799/Web_72DPI-20191121_WeWork_Williams_Square_Dallas_003.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
          "https://locations-api-production.imgix.net/locations/image/ef53fac4-1aba-11ea-97fa-0a5bc5747799/Web_72DPI-20191121_WeWork_Williams_Square_Dallas_004.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
        ],
      },
    ],
  }),
};
</script>
