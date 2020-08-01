import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import materializeCss from "materialize-css";

Vue.config.productionTip = false
Vue.use(materializeCss);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
