import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import x5GMaps from "x5-gmaps";

Vue.use(x5GMaps, "AIzaSyA2FOUnbq-KdvhsAqbP1dj4jeFHjOUVXHY");

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
