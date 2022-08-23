import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Gdpr from '../views/Gdpr.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/privacy',
    name: 'Gdpr',
    component: Gdpr
  },
]

const router = new VueRouter({
  routes
})

export default router
