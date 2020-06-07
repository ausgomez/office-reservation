<template>
  <div>
    <v-text class="text-center "><h1>Login</h1></v-text>

    <v-card class="mx-auto mb-6" width="50%" height="auto" :elevation="12">
      <v-card-title>
        <v-img
          src="/images/icon-iniciar-sesion.png"
          class="mx-auto"
          width="150"
          height="150"
          contain="false"
        ></v-img>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              color="#42A5F5"
              label="Usuario/E-mail"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="#42A5F5"
              label="Contraseña"
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
        <v-btn x-large color="#42A5F5" :elevation="12" class="mx-auto mr-12">
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
              contain="false"
            ></v-img>
          </v-card-title>
          <v-card-text class="text-center">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="#42A5F5"
                  label="Nombre de Usuario"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="#42A5F5"
                  label="Correo Electronico"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="#42A5F5"
                  label="Contraseña"
                  outlined
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="Al menos 8 caracteres."
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="#42A5F5"
                  label="Confirmar Contraseña"
                  outlined
                  :type="'password'"
                  hint="Al menos 8 caracteres."
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="success" class="mx-auto " @click="dialog = false">
              Crear Cuenta
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    /*tittle: "Iniciar sesion",*/
    password: "Password",
    rules: {
      required: (value) => !!value || "Required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    dialog: false,
  }),
  methods: {},
};
</script>

<style></style>
