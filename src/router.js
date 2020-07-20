import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./pages/Home')
  }, {
    path: '/detail',
    name: 'detail',
    component: () => import('./pages/Detail')
  }]
})


export default router