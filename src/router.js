import { createRouter, createWebHashHistory } from 'vue-router'
import { sidebarItems } from '@/data/routes';

const CessionView = () => import('@/views/CessionView.vue')
const MainView = () => import('@/views/MainView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const ImportPage = () => import('@/pages/ImportPage.vue')

const routes = sidebarItems.map(item => ({
 path: item.route,
 component: item.route === 'cession' ? CessionView : NotFoundView, // HARDCODE for interview project
 meta: {title: item.title},
  
  children: item.children.map(child => {
    return {
      path: child.route,
      name: child.name,
      component: child.route === '/import' ? ImportPage : NotFoundView, // HARDCODE for interview project
      meta: {title: child.meta}
    }
  })
}));
console.log(routes, 'r')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue'),
      children: routes
    },
    
    { path: '/:pathMatch(.*)*', name: '404', component: () => import('@/views/NotFoundView.vue') }
  ]
})

export default router
