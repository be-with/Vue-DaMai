<template>
    <div class="bar-bd">
        <img
          class="logo"
          src="https://img.alicdn.com/tfs/TB19yBbRSzqK1RjSZFLXXcn2XXa-230-104.png"
          alt
        >
        <el-button>中文</el-button>
      </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.bar-bd {
      width: 1200px;
      margin: 0 auto;
      height: 90px;
      .logo {
        float: left;
        margin-top: 24px;
        width: 108px;
        height: 48px;
      }
      .el-button {
        float: right;
        margin-top: 24px;
        width: 121px;
        height: 38px;
        overflow: hidden;
        text-align: center;
        border: 1px solid #ebebeb;
        font-size: 14px;
        color: #888;
        text-decoration: none;
      }
    }
</style>
