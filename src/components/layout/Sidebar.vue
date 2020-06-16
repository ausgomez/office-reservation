<template>
  <v-navigation-drawer v-if="user" v-model="drawer" app>
    <v-list dense>
      <router-link :to="{ name: 'Perfil' }">
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/">
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <v-list-item v-if="user.admin" to="/empresas">
        <v-list-item-action>
          <v-icon>mdi-office-building</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Empresas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <router-link
        v-if="user"
        :to="{
          name: 'UbicacionesIndex',
          params: { empresa_id: 'patito' },
        }"
      >
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ubicaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init.js";

export default {
  name: "Sidebar",
  data: () => ({
    drawer: false,
    user: null,
  }),
  methods: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
    async admin() {},
  },
  async created() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        await db
          .collection("usuarios")
          .where("user_id", "==", user.uid)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              this.user.admin = doc.data().admin;
              this.user.empresa_id = doc.data().empresa_id;
            });
          });
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style></style>
