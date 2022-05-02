import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'
import Extensions from './views/Extensions.vue'
import Task from './views/Task.vue'
import Help from './views/Help.vue'
/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: '主页 | Vine.js 图形控制面板' } },
  {
    path: '/about',
    meta: { title: '关于 | Vine.js 图形控制面板' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/dashboard',
    meta: { title: '面板 | Vine.js 图形控制面板' },
    component: Dashboard,
  },
  {
    path: '/settings',
    meta: { title: '设定 | Vine.js 图形控制面板' },
    component: Settings,
  },
  {
    path: '/extensions',
    meta: { title: '扩展 | Vine.js 图形控制面板' },
    component: Extensions,
  },
  {
    path: '/task',
    meta: { title: '命令 | Vine.js 图形控制面板' },
    component: Task,
  },
  {
    path: '/help',
    meta: { title: '帮助 | Vine.js 图形控制面板' },
    component: Help,
  },
  { path: '/:path(.*)', component: NotFound },
]
