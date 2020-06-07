<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="empresa.img">
        <v-card-title>Empresa {{ empresa.nombre }}</v-card-title>
      </v-img>
      <v-card-text> Registrada en: {{ empresa.created_at }} </v-card-text>
      <v-card-text> Telefono: {{ empresa.telefono }} </v-card-text>
      <v-card-text>
        <h4>Usuarios ({{ usuarios.length }}):</h4>
        <p v-for="(usuario, i) in usuarios" :key="i">
          {{ usuario.email }} - {{ usuario.admin ? "Admin" : "Normal" }}
        </p>
        <v-btn small @click="dialog = true" color="blue" dark
          >Agregar usuario</v-btn
        >
      </v-card-text>
      <v-card-text class="mx-auto text-center">
        <router-link
          :to="{ name: 'UbicacionesIndex', params: { empresa_id: empresa.id } }"
        >
          <v-btn color="green" dark>Ver Espacios</v-btn>
        </router-link>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="700px">
      <v-card>
        <v-card-title>
          <v-img
            src="/images/Registrarte.png"
            class="mx-auto"
            width="100"
            height="100"
            :contain="false"
          ></v-img>
        </v-card-title>
        <v-card-text class="text-center">
          <v-row>
            <v-col cols="12">
              <v-text-field
                color="#42A5F5"
                label="Correo Electronico"
                v-model="email"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                color="#42A5F5"
                label="Contraseña"
                v-model="password"
                outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                hint="Al menos 8 caracteres."
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-switch
                class="pa-0 ma-0"
                v-model="nAdmin"
                label="Administrador"
              ></v-switch>
            </v-col>
          </v-row>

          <v-btn color="success" class="mx-auto " @click="signup">
            Crear Cuenta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "ShowEmpresa",
  data: () => ({
    dialog: false,
    empresa: null,
    email: null,
    password: null,
    show1: false,
    nAdmin: false,
    usuarios: [],
  }),
  async created() {
    let id = this.$route.params.empresa_id;
    await db
      .collection("empresas")
      .where("id", "==", id)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => (this.empresa = doc.data()))
      );

    await db
      .collection("usuarios")
      .where("empresa_id", "==", id)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => this.usuarios.push(doc.data()))
      );
  },

  methods: {
    async signup() {
      console.log("signup", this.email, this.password);
      if (this.email && this.password) {
        //check in DB for duplicate value
        db.collection("usuarios")
          .add({
            email: this.email,
            admin: this.nAdmin,
            user_id: 0,
            registered: false,
            empresa_id: this.empresa.id,
          })
          .then(() => {
            alert("User Created!");
            this.dialog = false;
            this.email = null;
            this.password = null;
            this.nAdmin = false;
            console.log("user on DB");
          })
          .catch((e) => console.log(e));
      } else {
        this.feedback = "You must all fields.";
      }
    },
  },
};
</script>

<style></style>
