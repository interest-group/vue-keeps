const cache = []

export default cache

// 加入cache
export function push ({name, key, vnode}) {
  cache.push({name, key, vnode})
}

// 查找cache
export function find (key) {
  return cache.find((item) => item.key === key)
}

// 删除cache
export function remove (name) {
  const index = cache.findIndex((item) => item.name === name)
  if (index >= 0) {
    const [cached] = cache.splice(index, 1)
    cached.vnode.data.keepAlive = false
    cached.vnode.componentInstance.$destroy()
  }
}

// 清空cache
export function empty () {
  cache.forEach(({vnode}) => vnode.componentInstance.$destroy())
  cache.splice(0, cache.length)
}
