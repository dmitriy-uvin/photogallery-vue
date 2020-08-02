import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import M from "materialize-css";

Vue.config.productionTip = false
Vue.use(M);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
