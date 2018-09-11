import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import KsVueScrollmagic from 'ks-vue-scrollmagic';
Vue.use(KsVueScrollmagic);

Vue.config.productionTip = false;

const myVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#App');

// CUSTOM

import flow from './scripts/flow';

setTimeout(function() {
  const W = window;
  const html = W.document.documentElement;
  const body = W.document.body;

  W._msie = Boolean(~W.navigator.userAgent.indexOf('rident'));

  html.classList.add(W._msie ? 'msie' : 'norm');
  body.classList.add(myVue._route.name);

  flow(myVue); // TODO: fix hack
  window.Main = myVue;
}, 99);

// export default myVue;
