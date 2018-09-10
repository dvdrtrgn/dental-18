import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

var myVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#App');

setTimeout(function() {
  var W = window;
  var html = W.document.documentElement;
  var body = W.document.body;

  W._msie = Boolean(~W.navigator.userAgent.indexOf('rident'));

  html.classList.add(W._msie ? 'msie' : 'norm');
  body.classList.add(myVue._route.name);
}, 99);

window.console.log(myVue);
