<template>
    <div class="m-header">
        <img src="https://img.alicdn.com/tps/i4/TB1r2Qsp7P2gK0jSZPxSuucQpXa.jpg" alt="">
        <top-bar />
    </div>
</template>

<script>
import topBar from '@/components/header/topBar'
export default {
  components: {
    topBar
  }
}
</script>

<style lang="scss" scoped>
    .m-header{
        width: 100%;
        img{
            width: 1200px;
            height: 60px;
            display: block;
            margin: 0 auto;
        }
    }
</style>
