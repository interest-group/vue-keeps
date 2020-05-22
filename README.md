# vue-keeps

可控的 keep-alive 组件

## 安装

```
npm i -S vue-keeps
```

## 使用

main.js
```
import Vue from 'vue'
import VueKeeps from 'vue-keeps'

Vue.use(VueKeeps)
// code...
```


```
<template>
  <vue-keeps>
    <router-view></router-view>
  </vue-keeps>
</template>
```

清除并跳转

```
this.$keepRemove(name)
this.$router.replace({name})
```


## methods

| 方法名    | 说明     | 参数     | 
| -------- | -------- | -------   |
| $keepRemove   | 清除cache  | name |  
| $keepEmpty   | 清空  |  |  
