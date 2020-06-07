<template>
  <v-container fluid class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <v-card
          color="grey lighten-4"
          flat
          width="40em"
          tile
          v-for="k in lista_edificios"
          :key="k"
        >
          <v-container fluid>
            <v-row no-gutters>
              <v-col>
                <v-img
                  src="https://picsum.photos/510/300?random"
                  width="40em"
                ></v-img>
              </v-col>
              <v-col>
                <v-card color="rgb(69, 132, 255)" dark>
                  <v-btn class="float-right" icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-card-title class="headline">Edificio {{ k }}</v-card-title>

                  <v-card-subtitle
                    >calle no.{{ k }}, colonia aurora,09431</v-card-subtitle
                  >

                  <v-card-actions>
                    <router-link
                      :to="{
                        name: 'UbicacionesShow',
                        params: { ubicacion_id: k.id },
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
        <v-card color="grey lighten-4" height="30em" width="31em">
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
  name: "HelloWorld",
  components: {
    MapGoogle,
  },
  data: () => ({
    lista_edificios: [
      "edificio principal",
      "edificio este",
      "edificio sur",
      "edificio norte",
    ],
  }),
};
</script>
