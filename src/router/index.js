import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Branch from '../views/Branch.vue'
import LoanAdviser from '../views/LoanAdviser.vue'
import DetailBranch from '../views/DetailBranch.vue'
import DetailAdviser from '../views/DetailAdviser.vue'

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
    path: '/detailbranch/:id_branch',
    name: 'DetailBranch',
    component: DetailBranch,
    props: true
  },
  {
    path: '/detailadviser/:id_adviser',
    name: 'DetailAdviser',
    component: DetailAdviser,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
