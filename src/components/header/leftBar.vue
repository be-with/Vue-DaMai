<template>
  <div class="left-bar">
    <img src="https://img.alicdn.com/tfs/TB1fbVFfu3tHKVjSZSgXXX4QFXa-230-104.png" alt>
    <i class="el-icon-location-outline"></i>
      <router-link class="changeCity" :to="{name:'changeCity'}">北京</router-link>
    <router-link class="homePage fontColor active" :to="{name:'defaultPage'}">首页</router-link>
    <router-link class="sort fontColor" :to="{name:'sort', params:{name:'sort'}}">分类</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.left-bar {
  width: 48% !important;
  height: 72px;
  line-height: 72px;
  margin-left: 320px;
  margin-top: 15px;
  img {
    width: 92px;
    vertical-align: middle;
    margin-right: 40px;
  }
  a {
    text-decoration: none;
    color: #000;
    margin-right: 15px;
    &.fontColor:hover {
      color: #ff1268;
    }
  }
  .change{
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }
}
</style>
