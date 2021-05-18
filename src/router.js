import Vue from 'vue';
import Router from 'vue-router';
import Linkedin from '@/views/Linkedin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'linkedin',
      component: Linkedin,
    },
  ],
  base: 'dental',
  mode: 'history',
  // onReady(to, from) {
  //   window.console.log('afterEach', [to, from]);
  // },
  // scrollBehavior(to, from, savedPosition) {
  //   var ele = window.document.body;
  //   ele.classList.replace(from.name, to.name);

  //   if (to.hash) {
  //     window.console.log('scrollBehavior', [to, from, savedPosition]);
  //     return {
  //       selector: to.hash,
  //     };
  //   }
  // },
});
