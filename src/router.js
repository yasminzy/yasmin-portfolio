import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Projects from "./views/projects.vue";
import Thanks from "./views/thanks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
