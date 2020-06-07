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
                    >{{ ubicacion.nombre }}
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
          <gmaps-map :options="mapOptions">
            <gmaps-marker
              v-for="(item, i) in items"
              :key="i"
              :options="item.options"
            />
          </gmaps-map>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "@/firebase/init.js";
import { gmapsMap, gmapsMarker } from "x5-gmaps";

export default {
  name: "UbicacionesIndex",
  components: {
    gmapsMap,
    gmapsMarker,
  },
  data: () => ({
    ubicaciones: [],
    mapOptions: {
      center: { lat: -27.47, lng: 153.025 },
      zoom: 12,
    },
    items: [
      { options: { position: { lat: -27.41, lng: 153.01 } } },
      { options: { position: { lat: -27.42, lng: 153.02 } } },
      { options: { position: { lat: -27.48, lng: 153.08 } } },
      { options: { position: { lat: -27.49, lng: 153.09 } } },
    ],
  }),

  async created() {
    let id = this.$route.params.empresa_id;

    await db
      .collection("ubicaciones")
      .where("empresa_id", "==", id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.ubicaciones.push(doc.data());
          this.ubicaciones.id = doc.id;
        });
      });
  },
};
</script>
