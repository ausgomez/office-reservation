<!-- views/NotFound.vue -->

<template>
  <v-container class="mx-auto">
    <v-img class="white--text mx-auto" width="50%" src="/images/404.png" />
    <v-card flat color="transparent" class="text-center">
      <v-card-subtitle>¡Ups! La página que buscas no existe</v-card-subtitle>
      <v-card-text>
        No te preocupes, a veces sucede que nos sentimos perdidos en la vida.
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-btn href="/" class="primary">Regresar a Inicio</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Page404",
};
</script>

<style>
.paragraph-text {
  font-size: 18px;
}
</style>
