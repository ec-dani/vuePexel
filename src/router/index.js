import { createRouter, createWebHashHistory } from 'vue-router'
import ImageView from '../views/ImageView.vue'

const routes = [
  {
    path: '/',
    name: 'image',
    component: ImageView
  },
  {
    path: '/video',
    name: 'video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
