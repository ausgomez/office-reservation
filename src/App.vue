<template>
  <v-app>
    <Navbar @clickDrawer="setDrawer" />
    <Sidebar ref="Sidebar" />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Sidebar,
    Footer,
  },

  data: () => ({
    //
  }),

  methods: {
    setDrawer() {
      this.$refs.Sidebar.setDrawer();
    },
  },
};
</script>
