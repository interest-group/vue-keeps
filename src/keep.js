import {empty, find, push} from './cache'

export default {
  name: 'vue-keep',
  abstract: true,
  props: {
    max: [String, Number]
  },
  destroyed () {
    empty()
  },
  render () {
    const slot = this.$slots.default
    const vnode = slot && slot[0]
    if (vnode) {
      const key = vnode.key = this.getKey(vnode)
      const cached = find(key)
      if (cached && vnode.key === cached.key) {
        // 读取缓存
        vnode.componentInstance = cached.vnode.componentInstance
      } else {
        push({name: this.$route.name, key, vnode})
      }
      vnode.data.keepAlive = true
    }
    return vnode
  },
  methods: {
    getKey (vnode) {
      return `_keep_${this.$route.name || this.$route.path}_${vnode.tag}`
    }
  }
}
