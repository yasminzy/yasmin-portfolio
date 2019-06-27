import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css";

import "normalize.css/normalize.css";

import "typicons.font/src/font/typicons.css";

import "./assets/variables.css";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
