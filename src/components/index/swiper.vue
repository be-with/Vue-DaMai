<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import api from '@/api/getData.js'
export default {
  data () {
    return {
      imgList: []
    }
  },
  created () {
    api.getSwiper().then(res => {
      // console.log(res.data)
      this.imgList = res.data.imgList
    })
  }
}
</script>

<style lang="scss" scoped>
.el-carousel{
    height: 320px;

}
.el-carousel__item {
    height: 320px;
  &:nth-child(2n) {
    background-color: #99a9bf;
  }
  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  img{
      width: 100%;
      height: 100%;
  }
}
</style>
