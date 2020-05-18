import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKeep from '../lib/uif.common'

Vue.use(VueKeep)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const files = {}

Object.values(files).forEach(data => (data.file = data.file ? `assets/${data.file.substring(data.file.lastIndexOf('/') + 1)}` : data.file))
