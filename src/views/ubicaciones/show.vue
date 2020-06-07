<template>
  <div>
    <v-container class="white lighten-5">
      <v-row dense>
        <v-col cols="5" sm="5">
          <v-card elevation="2" v-if="ubicacion != undefined">
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

        <v-col cols="7" sm="7" v-if="ubicacion != undefined">
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
              <v-btn dark color="blue">
                <v-icon>mdi-share</v-icon> Compartir
              </v-btn>
              <v-btn dark color="orange">
                <v-icon>mdi-map-marker</v-icon> Como llegar
              </v-btn>
              <v-btn dark color="green">
                <v-icon>mdi-phone</v-icon> {{ ubicacion.telefono }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br />

      <v-col sm="12">
        <h2 class="text-center">Espacios Disponibles</h2>
        <v-slide-group
          center-active
          :show-arrows="true"
          mandatory
          v-model="espacio_activo"
        >
          <v-slide-item
            v-for="(espacio, i) in espacios"
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

              <v-card-title
                v-if="ubicacion != undefined"
                :class="active ? 'white--text' : ''"
              >
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
          <h1>
            {{ espacios[espacio_activo].nombre }}
          </h1>
          <v-divider />

          <h6>Dias habiles</h6>
          <v-chip-group column active-class="primary--text">
            <v-chip v-for="(dia, i) in espacios[espacio_activo].dias" :key="i">
              {{ dias[dia] }}
            </v-chip>
          </v-chip-group>
          <br />

          <h6>Horario</h6>
          <h4>
            {{ espacios[espacio_activo].hora_apertura }} -
            {{ espacios[espacio_activo].hora_cierre }}
          </h4>
          <br />
          <h6>Descripcion:</h6>
          <p>
            {{ espacios[espacio_activo].descripcion }}
          </p>

          <h6>3D Tour</h6>
          <iframe
            width="400"
            height="250"
            :src="
              `https://my.matterport.com/show/?m=${espacios[espacio_activo].matterport}`
            "
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking"
          ></iframe>
          <p></p>
          <h6 v-if="espacios[espacio_activo].amenidades.length > 0">
            Amenidades
          </h6>
          <v-row>
            <v-col
              v-for="(amenidad, i) in espacios[espacio_activo].amenidades"
              :key="i"
              cols="3"
            >
              <v-card light class="mx-auto text-center" shaped>
                <v-icon x-large class="mt-3">
                  {{ lista_de_amenidades[amenidad].icon }}
                </v-icon>
                <v-card-text>
                  <h3>{{ lista_de_amenidades[amenidad].nombre }}</h3>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col sm="4">
          <v-card elevation="12">
            <v-card-title
              >${{ espacios[espacio_activo].precio_hora }}/hora</v-card-title
            >
            <v-card-subtitle>
              <v-icon small color="blue lighten-1">mdi-star</v-icon>
              {{ espacios[espacio_activo].rating }} stars
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
                    <v-date-picker
                      :allowed-dates="allowedDates"
                      :min="today"
                      v-model="dates[0]"
                      scrollable
                    >
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
                    <v-date-picker
                      v-model="dates[1]"
                      :min="dates[0]"
                      scrollable
                      :allowed-dates="allowedDates"
                    >
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
              <v-btn
                v-if="showReserveBtn"
                @click="generarReserva"
                large
                block
                color="blue"
                dark
                >Reservar</v-btn
              >
              <p></p>
              <p class="text-center">Aun no te cobraran</p>
              <div v-if="showReserveBtn">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Dias: </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <strong>{{ daysInUse }} dias</strong>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Horas en total: </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <strong>{{ hoursInUse }} horas</strong>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Total: </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <h4>${{ total }}</h4>
                  </v-list-item-action>
                </v-list-item>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Loading -->
    <v-dialog v-model="loading" persistent width="300">
      <v-card color="primary pt-6" dark>
        <v-card-text class="text-center">
          Generando Reserva
          <hr />
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Loading -->
    <v-dialog v-model="success" width="300">
      <v-card color="green pt-6" dark>
        <v-card-title>
          <v-icon class="text-center mx-auto" x-large>mdi-star</v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          <h3>Reservacion Exitosa!</h3>
        </v-card-text>
        <v-card-text>
          <v-btn @click="success = false" color="white" light block
            >Cerrar</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import firebase from "firebase";

export default {
  name: "UbicacionesShow",
  data: () => ({
    loading: false,

    success: false,

    user: null,

    fecha_checkin_menu: false,
    fecha_checkout_menu: false,
    hora_checkin_menu: false,
    hora_checkout_menu: false,
    espacio_activo: 0,

    single_day: false,
    dialog: false,
    dates: [null, null],
    hours: [null, null],

    ubicacion: null,
    espacios: [],
    today: new Date().toISOString().slice(0, 10),

    lista_de_amenidades: [
      { id: 1, nombre: "WIFI", icon: "mdi-wifi" },
      { id: 2, nombre: "A/C", icon: "mdi-star" },
      { id: 3, nombre: "Cafe", icon: "mdi-coffee" },
    ],

    dias: [
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ],

    date: new Date().toISOString().slice(0, 10),

    hoursInUse: 0,

    total: 0,
  }),

  async created() {
    let id = this.$route.params.ubicacion_id;
    console.log("created", id);

    await db
      .collection("ubicaciones")
      .where("id", "==", id)
      .get()
      .catch((e) => console.log("error", e))
      .then((snapshot) => {
        snapshot.forEach((doc) => (this.ubicacion = doc.data()));
      });

    await db
      .collection("espacios")
      .where("ubicacion_id", "==", id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.espacios.push(doc.data());
        });
      });

    await this.getUser();
  },

  watch: {
    daysInUse(value) {
      this.hoursInUse = (this.calcHoursPerDay() * value).toFixed(2);

      this.total = (
        this.hoursInUse * this.espacios[this.espacio_activo].precio_hora
      ).toFixed(2);
    },
    hours() {
      this.hoursInUse = (this.calcHoursPerDay() * 1).toFixed(2);
      this.total = (
        this.hoursInUse * this.espacios[this.espacio_activo].precio_hora
      ).toFixed(2);
    },
  },

  computed: {
    showReserveBtn() {
      if (this.single_day) {
        return (
          this.dates[0] != null &&
          this.hours[0] != null &&
          this.hours[1] != null
        );
      } else {
        return this.dates[0] != null && this.dates[1] != null;
      }
    },

    daysInUse() {
      let In;
      let Out;

      if (this.single_day == true) {
        if (this.dates[0] === null) {
          return 0;
        } else {
          In = new Date(this.dates[0]);
          Out = new Date(this.dates[0]);
        }
      } else {
        if (this.dates[0] === null || this.dates[1] === null) {
          return 0;
        } else {
          In = new Date(this.dates[0]);
          Out = new Date(this.dates[1]);
        }
      }

      function addDays(date, days) {
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() + days);
        return copy;
      }

      let disponibles = this.espacios[this.espacio_activo].dias; // lunes, martes

      let daysInUse = 0;
      // loop
      while (In.toISOString() != Out.toISOString()) {
        if (disponibles.find((x) => x == In.getDay())) {
          daysInUse++;
        }
        In = addDays(In, 1);
      }

      daysInUse++;

      console.log("Total de dias en uso: ", daysInUse);

      return daysInUse;
    },
  },

  methods: {
    getUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },

    allowedDates(val) {
      let num = new Date(val).getDay();
      return this.espacios[this.espacio_activo].dias.find((x) => x === num);
    },

    calcHoursPerDay() {
      let x = this.espacio_activo;

      if (!this.single_day) {
        let abre = this.espacios[x].hora_apertura
          .split(":")
          .map((x) => parseInt(x));
        abre = abre[0] + abre[1] / 60;

        let cierra = this.espacios[x].hora_cierre
          .split(":")
          .map((x) => parseInt(x));
        cierra = cierra[0] + cierra[1] / 60;

        return cierra - abre;
      } else {
        if (this.hours[0] != null && this.hours[1] != null) {
          let abre = this.hours[0].split(":").map((x) => parseInt(x));
          abre = abre[0] + abre[1] / 60;

          let cierra = this.hours[1].split(":").map((x) => parseInt(x));
          cierra = cierra[0] + cierra[1] / 60;

          return cierra - abre;
        } else {
          return 0;
        }
      }
    },

    async generarReserva() {
      this.loading = true;

      console.log("Creando Reservacion");
      console.log("usuario", this.user);
      console.log("espacio", this.espacios[this.espacio_activo]);
      if (this.single_day) {
        console.log("Dia", this.dates[0]);
      } else {
        console.log("fecha de entrada", this.dates[0]);
        console.log("fecha de salida", this.dates[1]);
      }
      console.log("total horas", this.hoursInUse);
      console.log("total", this.total);

      // save on DB

      await db
        .collection("reservaciones")
        .add({
          id:
            Math.floor(Math.random() * 9999) +
            "-" +
            Math.floor(Math.random() * 9999),
          ubicacion_id: this.ubicacion.id,
          reservacion: this.espacios[this.espacio_activo].nombre,
          fecha_inicio: this.dates[0],
          fecha_salida: this.dates[this.single_day ? 0 : 1],
          un_dia: this.single_day,
          total: this.total,
          horas: this.hoursInUse,
          hora_inicio: this.hours[0],
          hora_salida: this.hours[1],
          fecha_reservacion: new Date().toISOString().slice(0, 10),
          user_id: this.user.uid,
        })
        .then(() => {
          this.success = true; //redirect to index
        })
        .catch((err) => {
          alert(err);
        });

      this.loading = false;
    },
  },
};
</script>

<style></style>
