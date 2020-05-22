import Keeps from './keeps'
import {remove, empty} from './cache'

export default {
  install: (Vue) => {
    Vue.component('vue-keeps', Keeps)
    Vue.prototype.$keepRemove = remove
    Vue.prototype.$keepEmpty = empty
  }
}
