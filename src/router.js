import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Linkedin from '@/views/Linkedin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import('@/views/Scroll.vue'),
    },
    {
      path: '/',
      name: 'linkedin',
      component: Linkedin,
    },
  ],
  base: 'rs/dental',
  mode: 'history',
  onReady(to, from) {
    window.console.log('afterEach', [to, from]);
  },
  scrollBehavior(to, from, savedPosition) {
    var ele = window.document.body;
    ele.classList.replace(from.name, to.name);

    if (to.hash) {
      window.console.log('scrollBehavior', [to, from, savedPosition]);
      return {
        selector: to.hash,
      };
    }
  },
});
