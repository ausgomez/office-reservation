import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
//import EspaciosIndex from "@/views/espacios/index.vue";
//import EspaciosShow from "@/views/espacios/show.vue";

import UbicacionesIndex from "@/views/ubicaciones/index.vue";
import UbicacionesShow from "@/views/ubicaciones/show.vue";

import Signin from "@/views/auth/signin.vue";
import Perfil from "@/views/auth/perfil.vue";

import Page404 from "@/views/error/Page404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/perfil", name: "Perfil", component: Perfil },
  { path: "/signin", name: "Signin", component: Signin },
  {
    path: "/empresa/:empresa_id/ubicaciones",
    name: "UbicacionesIndex",
    component: UbicacionesIndex,
  },
  {
    path: "/ubicaciones/:ubicacion_id/espacios",
    name: "UbicacionesShow",
    component: UbicacionesShow,
  },
  { path: "/404", name: "Page404", component: Page404 },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
