<template>
  <v-app-bar app color="blue">
    <v-app-bar-nav-icon v-on:click="clickDrawer" dark />

    <v-spacer></v-spacer>
    <router-link
      to="/"
      style="text-decoration: none; color: black; text-align; display: contents"
    >
      <v-img
        class="mx-2"
        src="/images/logo.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title class="white--text">Coprotel</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn to="/login" class="blue" dark text>
      <span>Login</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    //user: null,
  }),
  methods: {
    clickDrawer() {
      this.$emit("clickDrawer");
    },
  },
};
</script>

<style></style>
