<template>
  <div class="main">
    <div class="main-menus">
      <div @click="handleJump('base')">jump to 基础数据</div>
      <div @click="handleReplace('base')">replace 基础数据</div>
      <div @click="handleJump('data')">jump to 数据中心</div>
      <div @click="handleReplace('data')">replace 数据中心</div>
      <div @click="handleJump('device')">jump to 设备管理</div>
      <div @click="handleReplace('device')">replace 设备管理</div>
      <div @click="handleJump('user')">jump to 用户中心</div>
      <div @click="handleReplace('user')">replace 用户中心</div>
    </div>
    <div class="main-content">
      <vue-keeps>
        <router-view/>
      </vue-keeps>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleJump (name) {
      this.$router.push({name})
    },
    async handleReplace (name) {
      this.$keepRemove(name)
      if (this.$route.name === name) {
        await this.$router.replace('/main')
      }
      return this.$router.replace({name})
    }
  }
}
</script>

<style>
.main{
  height: 100%;
  display: flex;
}
.main-menus {
  border-right: 1px solid #f1f1f1;
}
.main-menus div{
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #000;
  padding: 10px;
}
.main-menus div:hover{
  background-color: #ecf5ff;
  color: #3889fe;
}
.main-content{
  flex: auto;
  padding: 10px;
}
.main-content input {
  padding: 5px;
  width: 300px;
  display: inline-block;
}
</style>
