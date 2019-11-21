import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE-URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/index',
      name: 'index',
      component: () => import ('./views/Index.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue')
    },
    {
      path: '/extras',
      name: 'extras',
      component: () => import ('./views/Extras.vue')
    },

    {
      path: '/vestibulares',
      name: 'vestibulares',
      component: () => import ('./views/Vestibulares.vue')
    },

    {
      path: '/sobre',
      name: 'sobre',
      component: () => import ('./views/Sobre.vue')
    },

    {
      path: '/adm/enem',
      name: 'adm-enem',
      component: () => import ('./views/adm/Enem.vue')
    },
    
    {
      path: '/adm/fatec',
      name: 'adm-fatec',
      component: () => import ('./views/adm/Fatec.vue')
    },
    {
      path: '/adm/fuvest',
      name: 'adm-fuvest',
      component: () => import ('./views/adm/Fuvest.vue')
    },

    {
      path: '/adm/final',
      name: 'adm-final',
      component: () => import ('./views/adm/final.vue')
    },

    {
      path: '/dashboards/dashboard-user',
      name: 'dashboard-user',
      component: () => import ('./views/dashboads/Dashboard-user.vue')
    },
    
    {
      path: '/dashboards/dashboard-adm',
      name: 'adm-dashboard',
      component: () => import ('./views/dashboads/Dashboard-adm.vue')
    },

    {
      path: '/dashboards/incluir-user',
      name: 'incluir-user',
      component: () => import ('./views/dashboads/incluirUser.vue')
    },

    {
      path: '/dashboards/_id',
      name: '_id',
      component: () => import ('./views/dashboads/_id.vue')
    },

    /*Rotas de acessabilidade*/
    {
      path: '/index2',
      name: 'index2',
      component: () => import ('./views/Index2.vue')
    },
    {
      path: '/extras2',
      name: 'extras2',
      component: () => import ('./views/Extras2.vue')
    },
    {
      path: '/sobre2',
      name: 'sobre2',
      component: () => import ('./views/Sobre2.vue')
    },
    {
      path: '/vestibulares2',
      name: 'vestibulares2',
      component: () => import ('./views/Vestibulares2.vue')
    },
    {
      path: '/login2',
      name: 'login2',
      component: () => import ('./views/Login2.vue')
    },
    {
      path: '/adm/enem2',
      name: 'adm-enem2',
      component: () => import ('./views/adm/Enem2.vue')
    },
    {
      path: '/adm/fatec2',
      name: 'adm-fatec2',
      component: () => import ('./views/adm/Fatec2.vue')
    },
    {
      path: '/adm/fuvest2',
      name: 'adm-fuvest2',
      component: () => import ('./views/adm/Fuvest2.vue')
    },
    {
      path: '/adm/final2',
      name: 'adm-final2',
      component: () => import ('./views/adm/final2.vue')
    },
  ]
})
