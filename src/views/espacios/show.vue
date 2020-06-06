<template>
  <div>
    <v-alert v-if="error == true" type="error">
      No existe espacio con ID: <b>{{ id }} </b>
    </v-alert>
    <div v-if="espacio">
      <h1>{{ id }}</h1>
      <h2>{{ espacio.nombre }}</h2>
    </div>
    <div v-else-if="!error">
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "EspaciosShow",
  data: () => ({
    error: false,
    id: 0,
    espacio: null,
  }),
  async created() {
    this.id = this.$route.params.id;

    await db
      .collection("espacios")
      .doc(this.id)
      .get()
      .catch((e) => console.log("error", e))
      .then((snapshot) => (this.espacio = snapshot.data()));

    if (this.espacio === undefined) this.error = true;
  },
};
</script>

<style></style>
