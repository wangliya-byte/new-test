import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Watch from '../views/demo/Watch.vue'
import composition from '../views/demo/composition.vue'
import Teleport from '../views/demo/teleport.vue'
import Suspense from '../views/demo/suspense.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/watch',
    //     name: 'watch',
    //     component: Watch,
    //   },
    //   {
    //     path: '/composition',
    //     name: 'composition',
    //     component: composition,
    //   }
    // ]
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch,
  },
  {
    path: '/composition',
    name: 'composition',
    component: composition,
  },
  {
    path: '/suspense',
    name: 'suspense',
    component: Suspense,
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: Teleport,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
