<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{ $store.state.city}}|大麦网</el-breadcrumb-item>
    <el-breadcrumb-item class="singer">{{ $route.params.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.singer{
  span{
    color:#ff1268;
  }
}
</style>
