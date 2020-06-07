import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
import firebase from "firebase";
//import EspaciosIndex from "@/views/espacios/index.vue";
//import EspaciosShow from "@/views/espacios/show.vue";

import UbicacionesIndex from "@/views/ubicaciones/index.vue";
import UbicacionesShow from "@/views/ubicaciones/show.vue";

import EmpresasIndex from "@/views/empresas/index.vue";
import ShowEmpresa from "@/views/empresas/show.vue";

import Signin from "@/views/auth/signin.vue";
import Perfil from "@/views/auth/perfil.vue";

import Page404 from "@/views/error/Page404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/login", name: "Signin", component: Signin },
  {
    path: "/empresa/:empresa_id/ubicaciones",
    name: "UbicacionesIndex",
    component: UbicacionesIndex,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/empresas/:empresa_id",
    name: "ShowEmpresa",
    component: ShowEmpresa,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/empresas",
    name: "EmpresasIndex",
    component: EmpresasIndex,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/empresa/:empresa_id/ubicaciones/:ubicacion_id/espacios",
    name: "UbicacionesShow",
    component: UbicacionesShow,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/404", name: "Page404", component: Page404 },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // check to see if route requires Auth
  if (to.matched.some((rec) => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      //user signed in, proceed to route
      next();
    } else {
      // no user signed in, redirect to login
      next({ name: "Signin" });
    }
  } else {
    next();
  }
});

export default router;
