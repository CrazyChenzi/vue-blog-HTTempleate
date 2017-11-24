import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['@/views/index/index'], resolve),
      children: [
        {
          path: 'home',
          component: resolve => require(['@/views/home/home'], resolve)
        },
        {
          path: 'article',
          meta: { name: '内容管理/文章管理'},
          component: resolve => require(['@/views/articleManagement/articleManagement'], resolve)
        },
        {
          path: 'articleRecycle',
          meta: { name: '内容管理/文章回收站'},
          component: resolve => require(['@/views/articleRecycle/articleRecycle.vue'], resolve)
        },
        {
          path: 'resource',
          meta: { name: '内容管理/资源管理'},
          component: resolve => require(['@/views/resourceManagement/resourceManagement'], resolve)
        },
        {
          path: 'resourceRecycle',
          meta: { name: '内容管理/资源回收站'},
          component: resolve => require(['@/views/resourceRecycle/resourceRecycle'], resolve)
        },
        {
          path: 'time',
          meta: { name: '内容管理/时光轴管理'},
          component: resolve => require(['@/views/timeManagement/timeManagement'], resolve)
        },
        {
          path: 'editMD',
          meta: { name: '内容管理/内容编辑'},
          component: resolve => require(['@/views/MD/MD'], resolve)
        }
      ]
    }
  ]
})
