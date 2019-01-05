import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import About from '@/pages/About'
import Languages from '@/pages/Languages'
import Works from '@/pages/Works'
import Career from '@/pages/Career'
import firebase from 'firebase'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  base: process.env.ROOT_BASE,
  routes: [
    {
      path: '/top',
      name: 'Top',
      component: Top,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/languages',
      name: 'Languages',
      component: Languages,
      meta: { requiresAuth: true }
    },
    {
      path: '/career',
      name: 'Career',
      component: Career,
      meta: { requiresAuth: true }
    },
    {
      path: '/works',
      name: 'Works',
      component: Works,
      meta: { requiresAuth: true }
    }
  ]
})

// ここがルートガード
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requireAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        next({
          path: '/top',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
