import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Dashboard from './views/Dashboard.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: '主页 | Vine.js 图形控制面板' } },
  {
    path: '/about',
    meta: { title: 'About | Vine.js Guider' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/dashboard',
    meta: { title: 'Dashboard | Vine.js Guider' },
    component: Dashboard,
  },
  { path: '/:path(.*)', component: NotFound },
]
