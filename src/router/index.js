import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import indexPage from '@/page/index'
import detailsPage from '@/page/details'
import sortPage from '@/page/sort'
import loginPage from '@/page/login'
import registerPage from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: 'singer/:name',
        name: 'sort',
        component: sortPage
      }, {
        path: '/index',
        name: 'index',
        component: indexPage
      }, {
        path: 's/:name',
        name: 'details',
        component: detailsPage
      }]
    }, {
      path: '/login',
      name: 'login',
      component: loginPage
    }, {
      path: '/register',
      name: 'register',
      component: registerPage
    }]
})
