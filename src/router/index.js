import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menuOne',
    name: 'menuOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menuOne" */ '../views/menuOne.vue')
  },
  {
    path: '/menuTwo',
    name: 'menuTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menuTwo" */ '../views/menuTwo.vue')
  },
  {
    path: '/menuThree',
    name: 'menuThree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menuThree" */ '../views/menuThree.vue')
  },
  {
    path: '/menuFour',
    name: 'menuFour',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menuFour" */ '../views/menuFour.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
