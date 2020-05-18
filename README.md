# vue-keep

## 安装

```
npm i -S vue-keeps
```

## 使用

main.js
```
import Vue from 'vue'
import VueKeep from 'vue-keeps'

Vue.use(VueKeep)
// code...
```


```
<template>
  <vue-keep>
    <router-view></router-view>
  </vue-keep>
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
