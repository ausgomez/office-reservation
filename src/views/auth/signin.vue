<template>
  <div>
    <h1 class="text-center ">Login</h1>

    <v-card class="mx-auto mb-6" width="50%" height="auto" :elevation="12">
      <v-card-title>
        <v-img
          src="/images/icon-iniciar-sesion.png"
          class="mx-auto"
          width="150"
          height="150"
          :contain="false"
        ></v-img>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              color="#42A5F5"
              label="Usuario/E-mail"
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
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="text-center">
        <v-btn
          x-large
          color="#42A5F5"
          @click="login"
          :elevation="12"
          class="mx-auto mr-12"
        >
          Iniciar Sesion
        </v-btn>

        <v-btn
          x-large
          color="#42A5F5"
          class=""
          :elevation="12"
          @click="dialog = !dialog"
        >
          Registrarse
        </v-btn>
      </v-card-text>
      <v-card-text class="text-center">
        *Si aun no tienes una cuenta puedes registrarte.
      </v-card-text>
    </v-card>

    <v-row justify="center">
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
              </v-col>
              <!-- <v-col cols="12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"
                      >Empresa</label
                    >
                  </div>
                  <select
                    class="custom-select"
                    v-model="empModel"
                    id="inputGroupSelect01"
                  >
                    <option
                      v-for="(empresa, i) in empresas"
                      :key="i"
                      :value="i"
                      >{{ empresa.id }}</option
                    >
                  </select>
                </div>
              </v-col> -->
            </v-row>
            <v-btn color="success" class="mx-auto " @click="signup">
              Crear Cuenta
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init.js";

export default {
  name: "Signin",
  data: () => ({
    /*tittle: "Iniciar sesion",*/
    email: null,
    empModel: 0,
    password: null,
    show1: false,
    empresas: [],
    rules: {
      required: (value) => !!value || "Required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    dialog: false,
  }),
  async created() {
    await db
      .collection("empresas")
      .get()
      .then((snap) => snap.forEach((doc) => this.empresas.push(doc.data())));
  },
  methods: {
    login() {
      if (this.email && this.password) {
        // Log user in
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            console.log(cred.user);
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert("Please fill in both fields");
      }
    },
    async signup() {
      let userObj;
      console.log("signup", this.email, this.password);
      if (this.email && this.password && this.empModel != null) {
        console.log("pass");
        //check in DB for duplicate value
        let ref = db.collection("usuarios");
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(async (cred) => {
            userObj = {
              email: this.email,
              admin: false,
              user_id: cred.user.uid,
              empresa_id: "patito",
              telefono: "555-5555555",
              direccion: "Fondo de Bikini #405",
              RFC: "8528528585852",
              genero: "men",
              nombre: "",
            };

            console.log("registrando", userObj);
          })
          .catch((err) => {
            console.log("error", err);
          });

        let router = this.$router;
        await ref
          .add(userObj)
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);

            router.push({ name: "Home" });
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        console.log("done");
      } else {
        this.feedback = "You must all fields.";
      }
    },
  },
};
</script>

<style></style>
