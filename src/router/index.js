import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Branch from '../views/Branch.vue'
import LoanAdviser from '../views/LoanAdviser.vue'
import DetailBranch from '../views/DetailBranch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/branch',
    name: 'Branch',
    component: Branch
  },
  {
    path: '/adviser',
    name: 'LoanAdviser',
    component: LoanAdviser
  },
  {
    path: '/branch/profile',
    name: 'DetailBranch',
    component: DetailBranch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
