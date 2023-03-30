import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Tabla_1 from '../views/tablas/tabla_1.vue'
import Tabla_2 from '../views/tablas/tabla_2.vue'
import Tabla_3 from '../views/tablas/tabla_3.vue'
import Tabla_4 from '../views/tablas/tabla_4.vue'
import Tabla_5 from '../views/tablas/tabla_5.vue'
import Tabla_6 from '../views/tablas/tabla_6.vue'
import Tabla_7 from '../views/tablas/tabla_7.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tabla_1',
      name: 'tabla_1',
      component: Tabla_1
    },
    {
      path: '/tabla_2',
      name: 'tabla_2',
      component: Tabla_2
    },
    {
      path: '/tabla_3',
      name: 'tabla_3',
      component: Tabla_3
    },
    {
      path: '/tabla_4',
      name: 'tabla_4',
      component: Tabla_4
    },
    {
      path: '/tabla_5',
      name: 'tabla_5',
      component: Tabla_5
    },
    {
      path: '/tabla_6',
      name: 'tabla_6',
      component: Tabla_6
    },
    {
      path: '/tabla_7',
      name: 'tabla_7',
      component: Tabla_7
    }
  ]
})

export default router
