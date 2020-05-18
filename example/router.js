import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './views/main.vue'
import base from './views/base'
import data from './views/data'
import device from './views/device'
import user from './views/user'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'base'
      }
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          name: 'base',
          path: 'base',
          component: base
        },
        {
          name: 'data',
          path: 'data',
          component: data
        },
        {
          name: 'device',
          path: 'device',
          component: device
        },
        {
          name: 'user',
          path: 'user',
          component: user
        }
      ]
    }
  ]
})
