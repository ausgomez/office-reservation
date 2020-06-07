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
    password: null,
    show1: false,
    rules: {
      required: (value) => !!value || "Required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    dialog: false,
  }),
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
    signup() {
      console.log("signup", this.email, this.password);
      if (this.email && this.password) {
        console.log("pass");
        //check in DB for duplicate value
        let ref = db.collection("users");
        ref.get().then((doc) => {
          console.log(doc);
          //create user with email and password
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
              ref.set({
                email: this.email,
                admin: false,
                user_id: cred.user.uid,
              });
            })
            .then(() => {
              this.dialog.false;
              this.$router.push({ name: "Home" });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        this.feedback = "You must all fields.";
      }
    },
  },
};
</script>

<style></style>
