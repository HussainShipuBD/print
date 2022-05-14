import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import logIn from '@/components/logIn.vue'
import signUp from '@/components/signUp.vue'
import _404 from '@/components/404.vue'
import search from '@/components/search.vue'
import singlePage from '@/components/singlePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/404',
      name: '404',
      component: _404
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/singlePage',
      name: 'singlePage',
      component: singlePage
    },
   
  ]
})
