import Keep from './keep'
import {remove, empty} from './cache'

export default {
  install: (Vue) => {
    Vue.component('vue-keep', Keep)
    Vue.prototype.$keepRemove = remove
    Vue.prototype.$keepEmpty = empty
  }
}
