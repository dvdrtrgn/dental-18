import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const myVue = new Vue({
  render: h => h(App),
}).$mount('#App');

// CUSTOM

import drt from './views/Linkedin/scripts/_drt';

setTimeout(function() {
  const W = window;

  drt.flow(myVue); // TODO: fix hack

  W.Main = {
    drt: drt,
    vue: myVue,
  };
}, 99);

import KsVueScrollmagic from 'ks-vue-scrollmagic';
Vue.use(KsVueScrollmagic);
