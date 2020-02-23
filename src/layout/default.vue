<template>
  <div class="page-default">
    <el-container>
      <el-header height>
        <m-header/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height>
        <m-footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MHeader from '@/components/header/header'
import MFooter from '@/components/footer/footer'
export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>
