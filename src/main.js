import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css'
 
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      anchorPlacement: 'top-bottom',
    });
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
