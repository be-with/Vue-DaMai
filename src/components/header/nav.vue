<template>
  <div class="m-nav">
    <dl>
      <dd>
        <i class="el-icon-user-solid"></i>
        <span>
          <router-link :to="{name:'login'}">{{$store.state.userName ? $store.state.userName : '登录'}}</router-link>
        </span>
      </dd>
      <dd>
        <i class="el-icon-user"></i>
        <span>
          <router-link :to="{name:'register'}">注册</router-link>
        </span>
      </dd>
      <dd>
        <i class="el-icon-download"></i>
        <el-popover placement="top-start" title width="200" trigger="hover" content="抱歉，暂不支持此功能">
          <el-button slot="reference">下载</el-button>
        </el-popover>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.m-nav {
  width: 320px;
  margin-top: 32px;
  margin-left: -8px;
  dl {
    width: 100%;
    dd {
      display: inline-block;
      margin-inline-start: 10px;
      font-size: 16px;
      color: #111;
      vertical-align: middle;
      i {
        width: 26px;
        height: 26px;
        font-size: 21px;
        text-align: center;
        line-height: 26px;
        vertical-align: middle;
      }
      > span {
        a {
          color: #606266;
          text-decoration: none;
        }
      }
      .el-button {
        border: none;
        outline: none;
        font-size: 16px;
        padding: 4px;
        margin-left: -9px;
      }
    }
  }
}
</style>
