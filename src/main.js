import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.prototype.$serverURL = "https://backoffice.bankumkm.id/"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
