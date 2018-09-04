import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

setTimeout(function() {
  var W = window;
  W._msie = Boolean(~W.navigator.userAgent.indexOf("rident"));
  W.document.documentElement.classList.add(W._msie ? "msie" : "norm");
}, 999);
