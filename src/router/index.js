import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['@/views/index/index'], resolve),
      children: [
        {
          path: 'article',
          component: resolve => require(['@/views/articleManagement/articleManagement'], resolve)
        },
        {
          path: 'articleRecycle',
          component: resolve => require(['@/views/articleRecycle/articleRecycle.vue'], resolve)
        },
        {
          path: 'resource',
          component: resolve => require(['@/views/resourceManagement/resourceManagement'], resolve)
        },
        {
          path: 'resourceRecycle',
          component: resolve => require(['@/views/resourceRecycle/resourceRecycle'], resolve)
        },
        {
          path: 'time',
          component: resolve => require(['@/views/timeManagement/timeManagement'], resolve)
        },
        {
          path: 'editMD',
          component: resolve => require(['@/views/MD/MD'], resolve)
        }
      ]
    }
  ]
})
