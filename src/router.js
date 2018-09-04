import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
var stub = "/wf-ecg/rs/0";

export default new Router({
  routes: [
    {
      path: stub + "/home",
      name: "home",
      component: Home
    },
    {
      path: stub + "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: stub + "/scroll",
      name: "scroll",
      component: () => import("./views/Scroll.vue")
    },
    {
      path: stub + "/",
      name: "linkedin",
      component: () => import("./views/Linkedin.vue")
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // to, from, savedPosition
    if (to.hash) {
      window.console.log("scrollBehavior", [to, from, savedPosition]);
      return {
        selector: to.hash
      };
    }
  }
});
