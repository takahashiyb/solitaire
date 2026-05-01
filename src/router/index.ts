import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import GamePage from '@/pages/GamePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{path: '/home', name: 'home', component: HomePage}, {path: '/', name: 'play', component: GamePage}],
})

export default router
