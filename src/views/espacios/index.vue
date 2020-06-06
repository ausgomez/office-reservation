<template>
  <div>
    <h1>Espacios</h1>
    <ul>
      <li v-for="(espacio, i) in espacios" :key="i">
        <router-link
          :to="{ name: 'EspaciosView', params: { id: espacio.id } }"
          >{{ espacio.data.nombre }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "Espacios",
  data: () => ({
    espacios: [],
  }),
  methods: {
    unMethodo: () => false,
  },
  created() {
    db.collection("espacios")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.espacios.push({
            id: doc.id,
            data: doc.data(),
          });
        });
      });
  },
};
</script>

<style></style>
