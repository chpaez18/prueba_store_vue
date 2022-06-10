import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear from '../components/Crear.vue'
import Listar from '../components/Listar.vue'
import Transaccion from '../components/Transaccion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crear',
      name: 'Crear',
      component: Crear
    },
    {
      path: '/listar',
      name: 'Listar',
      component: Listar
    },
    {
      path: '/transaccion',
      name: 'Transaccion',
      component: Transaccion
    }
  ]
})

export default router
