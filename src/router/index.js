import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    redirect: '/home',
    children:[
      {
        path:'home',
        name:'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/home.vue'),
      },
      {
        path:'timeLine',
        name:'timeLine',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/timeLine.vue'),
      },
      {
        path:'about',
        name:'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/about.vue'),
      },
      {
        path:'login',
        name:'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/login.vue'),
      },
      {
        path:'mine',
        name:'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/mine.vue'),
      },

      {
        path:'articleDetail',
        name:'articleDetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/articleDetail.vue'),
      }

    ]

  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
