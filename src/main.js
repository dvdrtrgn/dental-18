import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const myVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#App');

// CUSTOM

import drt from './views/Linkedin/scripts/_drt';

setTimeout(function() {
  const W = window;
  const html = W.document.documentElement;
  const body = W.document.body;

  W._msie = Boolean(~W.navigator.userAgent.indexOf('rident'));

  html.classList.add(W._msie ? 'msie' : 'norm');
  body.classList.add(myVue._route.name);

  drt.flow(myVue); // TODO: fix hack

  W.Main = {
    drt: drt,
    vue: myVue,
  };
}, 99);

import KsVueScrollmagic from 'ks-vue-scrollmagic';
Vue.use(KsVueScrollmagic);
myVue;

// export default myVue;
