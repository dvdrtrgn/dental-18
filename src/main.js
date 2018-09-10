import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import KsVueScrollmagic from 'ks-vue-scrollmagic';
import $ from 'jquery';

Vue.use(KsVueScrollmagic);

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

// window.console.log(KsVueScrollmagic, myVue);

function aniThis() {
  var con = new myVue.$scrollmagic.Controller();
  var sce = new myVue.$scrollmagic.Scene({
    triggerElement: this,
    offset: -80,
    reverse: false,
  });

  sce.setClassToggle(this, 'ani').addTo(con);
}

function ani() {
  $('section')
    .addClass('flow')
    .each(aniThis);
}

window.setTimeout(ani, 999);
