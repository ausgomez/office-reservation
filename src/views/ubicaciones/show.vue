<template>
  <div>
    <v-container class="white lighten-5">
      <v-row dense>
        <v-col cols="4" sm="4">
          <v-card elevation="2">
            <v-carousel
              :continuous="false"
              :cycle="true"
              :show-arrows="true"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="200"
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

        <v-col cols="8" sm="8">
          <v-card class="mx-auto" elevation="2" height="200">
            <v-card-title class="headline">{{ ubicacion.nombre }}</v-card-title>

            <v-card-subtitle>
              {{ ubicacion.direccion }}

              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br />

      <v-col sm="12">
        <h2 class="text-center">Espacios Disponibles</h2>
        <v-slide-group center-active mandatory v-model="model">
          <v-slide-item
            v-for="espacio in espacios"
            :key="espacio.id"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary white--text' : ''"
              elevation="12"
              class="ma-2 my-12"
              max-width="300"
              @click="toggle"
            >
              <v-img height="150" :src="espacio.img">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-img>

              <v-card-title :class="active ? 'white--text' : ''">
                {{ espacio.nombre }}
              </v-card-title>

              <v-card-subtitle>
                <v-rating
                  :value="espacio.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </v-card-subtitle>

              <v-card-text :class="active ? 'white--text' : ''">
                <div>Precio: ${{ espacio.precio_hora }} / hora</div>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>

      <v-row>
        <v-col sm="8">
          <h1>info aqui</h1>
        </v-col>

        <v-col sm="4">
          <v-card elevation="12">
            <v-card-title>$54/hora</v-card-title>
            <v-card-subtitle>
              <v-icon small color="blue lighten-1">mdi-star</v-icon> 4.5 stars
            </v-card-subtitle>
            <v-card-text>
              <v-switch
                class="pa-0 ma-0"
                v-model="single_day"
                label="Solo un dia"
              ></v-switch>
              <v-row no-gutters>
                <v-col :cols="single_day ? 12 : 6" class="pa-1">
                  <!-- displaying floating date menu -->
                  <v-menu
                    ref="menu"
                    v-model="fecha_checkin_menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="check-in"
                        placeholder="Fecha"
                        readonly
                        v-model="dates[0]"
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="dates[0]" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="fecha_checkin_menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="fecha_checkin_menu = false"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col v-if="!single_day" cols="6" class="pa-1">
                  <!-- displaying floating date menu -->
                  <v-menu
                    ref="menu"
                    v-model="fecha_checkout_menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="check-out"
                        placeholder="Fecha"
                        readonly
                        v-model="dates[1]"
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="dates[1]" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="fecha_checkout_menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="fecha_checkout_menu = false"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col v-if="single_day" cols="6" class="pa-1">
                  <v-menu
                    ref="menu"
                    v-model="hora_checkin_menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="inicia"
                        placeholder="Hora de inicio"
                        readonly
                        v-model="hours[0]"
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker v-model="hours[0]" :max="hours[1]">
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="hora_checkin_menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="hora_checkin_menu = false"
                        >OK</v-btn
                      >
                    </v-time-picker>
                  </v-menu>
                </v-col>
                <v-col v-if="single_day" cols="6" class="pa-1">
                  <v-menu
                    ref="menu"
                    v-model="hora_checkout_menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="termina"
                        placeholder="Hora de salida"
                        readonly
                        v-model="hours[1]"
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker v-model="hours[1]" :min="hours[0]">
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="hora_checkout_menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="hora_checkout_menu = false"
                        >OK</v-btn
                      >
                    </v-time-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-btn large block color="blue" dark>Reservar</v-btn>
              <p></p>
              <p class="text-center">Aun no te cobraran</p>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Horas en total: </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <strong>45 horas</strong>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Horas en total: </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <strong>45 horas</strong>
                </v-list-item-action>
              </v-list-item>
            </v-card-text>
          </v-card>
          <v-btn color="red lighten-2" dark @click="dialog = true">
            Open dialog
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- dialog -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="6" sm="6">
              <v-date-picker full-width v-model="dates" range></v-date-picker>
            </v-col>
            <v-col cols="6" sm="6">
              <v-date-picker full-width v-model="dates" range></v-date-picker>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UbicacionesShow",
  data: () => ({
    fecha_checkin_menu: false,
    fecha_checkout_menu: false,
    hora_checkin_menu: false,
    hora_checkout_menu: false,

    date: new Date().toISOString().substr(0, 7),
    single_day: false,
    dialog: false,
    dates: [null, null],
    hours: [null, null],
    model: null,
    ubicacion: {
      id: 825715,
      nombre: "Edificio Central",
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
    espacios: [
      {
        id: 1,
        nombre: "Sala Central",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "18:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 150.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
      {
        id: 2,
        nombre: "Sala de Juntas Este",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "14:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 200.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
      {
        id: 3,
        nombre: "Sala de Juntas Este",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "14:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 200.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
      {
        id: 4,
        nombre: "Sala de Juntas Este",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "14:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 200.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
      {
        id: 5,
        nombre: "Sala de Juntas Este",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "14:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 200.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
      {
        id: 6,
        nombre: "Sala de Juntas Este",
        ubicacion_id: 825715,
        hora_apertura: "7:00",
        hora_cierre: "14:00",
        dias: [1, 2, 3, 4, 5, 6],
        precio_hora: 200.0,
        rating: 4.5,
        img:
          "https://ctfassets.imgix.net/vh7r69kgcki3/4uXYSXZpnNTFQ19vZP5i6s/d6de1a9e339d2cd13b8bce6e4ff4e3d0/1p_Office_No_Window.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506",
      },
    ],
    today: "2019-01-08",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00",
      },
      {
        name: "Thomas' Birthday",
        start: "2019-01-10",
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30",
      },
    ],
  }),
  mounted() {},
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
};
</script>

<style></style>
