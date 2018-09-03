import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/scroll",
      name: "scroll",
      component: () => import("./views/Scroll.vue")
    },
    {
      path: "/linked",
      name: "linked",
      component: () => import("./views/Linked.vue")
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
