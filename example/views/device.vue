<template>
  <div class="page">
    <h1>设备管理</h1>
    <p>随机数: {{num}}</p>
    <input type="text" v-model="value" placeholder="可输入任意内容用于检查缓存">
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: Math.random(),
      value: ''
    }
  }
}
</script>
