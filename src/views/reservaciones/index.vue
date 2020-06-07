<template>
  <div>
    <v-card light>
      <v-card-text>
        <router-link
          :to="{
            name: 'Perfil',
          }"
        >
          <v-icon>mdi-keyboard-backspace</v-icon> Ver mis reservaciones
        </router-link>
      </v-card-text>
      <v-card-text class="text-center">
        <v-img
          class="mx-auto"
          src="/images/logoBig.png"
          max-width="100px"
          height="100px"
        ></v-img>
        <h5 class="mt-1">COPROTEL</h5>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="6" xs="12" class="text-center">
            <h1>Reservacion</h1>
            <h3>#{{ reservacion.id }}</h3>

            <vue-qrcode :text="qr_link" :size="200" />
            <br />
            <br />
            <h5>Fecha de Reservacion: {{ reservacion.fecha_reservacion }}</h5>
            <h5>Fecha de Entrada: {{ reservacion.fecha_inicio }}</h5>
            <h5>Fecha de Salida: {{ reservacion.fecha_salida }}</h5>
            <b></b>
            <h1>Total: ${{ reservacion.total }}</h1>
          </v-col>

          <v-col cols="6" xs="12">
            <p>Fotos de ubicacion</p>
            <v-row>
              <v-col
                v-for="n in ubicacion.imagenes"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="n"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
            <br />
            <h2>Informacion</h2>
            <br />
            <h5>{{ reservacion.reservacion }}</h5>
            <h5>{{ ubicacion.nombre }}</h5>
            <p></p>
            <h5>Horas Reservadas: {{ reservacion.horas }}</h5>
            <h5 v-if="reservacion.un_dia">
              {{ reservacion.hora_inicio }} a {{ reservacion.hora_salida }} HRS
            </h5>
            <p></p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-spacer></v-card-spacer>
      <v-card-text class="text-right">
        <v-btn @click="print" class="ma-2" color="primary" dark
          >Print <v-icon dark right>mdi-printer</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import VueQrcode from "vue-qr";

export default {
  name: "Reservaciones",
  components: {
    VueQrcode,
  },
  data: () => ({
    reservacion: null,
    ubicacion: null,
    id: null,
    qr_link: null,
  }),
  async created() {
    this.id = this.$route.params.reservacion_id;

    await db
      .collection("reservaciones")
      .where("id", "==", this.id)
      .get()
      .then((snap) => snap.forEach((doc) => (this.reservacion = doc.data())));

    this.qr_link = "/reservaciones/" + this.id;

    await db
      .collection("ubicaciones")
      .where("id", "==", this.reservacion.ubicacion_id)
      .get()
      .then((snap) => snap.forEach((doc) => (this.ubicacion = doc.data())));
  },

  methods: {
    print() {
      print();
    },
  },
};
</script>

<style></style>
