import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import StellarSdk from 'stellar-sdk';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

Vue.prototype.$Stellar = new StellarSdk.Server("https://horizon-testnet.stellar.org");
Vue.prototype.$Network = StellarSdk.Networks.TESTNET

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
