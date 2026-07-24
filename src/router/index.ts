import { createRouter, createWebHashHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import ListaComprasView from '../views/ListaComprasView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/listas'
  },
  {
    path: '/listas',
    name: 'Listas',
    component: ListaComprasView
  },
  {
    path: '/nova-lista',
    name: 'NovaLista',
    component: () => import('../views/NovaListaView.vue')
  },
  {
    path: '/lista/:id',
    name: 'DetalhesLista',
    component: () => import('../views/DetalhesListaView.vue')
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import('../views/ProdutosView.vue')
  },
  {
    path: '/mercados',
    name: 'Mercados',
    component: () => import('@/views/MercadosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
