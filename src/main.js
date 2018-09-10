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

window.console.log(myVue);

function aniThis() {
  var con = new myVue.$scrollmagic.Controller();
  var sce = new myVue.$scrollmagic.Scene({
    offset: -222,
    reverse: false,
    triggerElement: this,
  });

  sce.setClassToggle(this, 'ani').addTo(con);
}

function aniChart(num) {
  var con = new myVue.$scrollmagic.Controller();
  var ele = '.tooth .chart svg .line-fill';
  var def = {
    scene: {
      offset: -111,
      reverse: false,
      triggerElement: ele,
    },
    tween: {
      delay: 1,
      ease: myVue.$gsap.Bounce.easeOut,
      strokeDashoffset: num,
    },
  };

  def.scene = new myVue.$scrollmagic.Scene(def.scene);
  def.tween = myVue.$gsap.TweenMax.to(ele, 1, def.tween);
  con.addScene(def.scene.setTween(def.tween));
}

function ani() {
  $('section').each(aniThis);
  aniChart(250);
}

window.setTimeout(ani, 999);
