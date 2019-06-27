import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: "Amalia Studio",
        link: "https://amalia.netlify.com",
        description:
          "Sample digital agency website built with Vue and Bootstrap.",
        img: "amalia.png"
      },
      {
        title: "Azka Bakery",
        link: "https://azka.netlify.com",
        description:
          "Sample ecommerce website built with Nuxt, Bootstrap, and Snipcart.",
        img: "azka.png"
      },
      {
        title: "Enlightenment News",
        link: "https://enlightenment.netlify.com",
        description:
          "Sample news website built with Nuxt, Guardian's API, Fixer API, and PostCSS.",
        img: "enlightenment.png"
      },
      {
        title: "Tiara Restaurant",
        link: "https://tiara.netlify.com",
        description: "Sample restaurant website built with Vue and Bootstrap.",
        img: "tiara.png"
      },
      {
        title: "Toko Diba",
        link: "https://www.tokodiba.com",
        description: "Local business website built with Nuxt and Bootstrap.",
        img: "tokodiba.png"
      },
      {
        title: "Blog",
        link: "https://www.yasminzy.com",
        description: "Blog about Vue.js and Nuxt.js.",
        img: "yasminzy.png"
      }
    ]
  },
  getters: {
    portfolio(state) {
      return state.projects.filter((item, index) => index < 3);
    },
    projects(state) {
      return state.projects;
    }
  }
});
