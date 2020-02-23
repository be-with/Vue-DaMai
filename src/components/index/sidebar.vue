<template>
  <div class="sidebar">
    <div class="item">
      <a href="#">
        <div class="icon service"></div>
        <p>在线客服</p>
      </a>
    </div>
    <div class="item">
      <a href="#">
        <div class="icon damai"></div>
        <p>APP下载</p>
      </a>
    </div>
    <div class="item goTop" v-show="isTop">
      <a href="#" @click="goTop">
        <div class="icon totop"></div>
        <p>回到顶部</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isTop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.isTop = true) : (this.isTop = false)
    },
    goTop (e) {
      console.log(window.pageYOffset)
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timer = setInterval(() => {
        top -= 20
        if (top <= 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background: #fff;
  border: 1px solid #ebebeb;
  width: 80px;
  position: fixed;
  right: 10px;
  top: 72.5%;
  margin-top: -105px;
  z-index: 9999;
  .item {
    height: 60px;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    padding-top: 10px;
    color: #111;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    box-sizing: content-box;
    a {
      display: block;
      text-decoration: none;
      color: #111;
      .icon {
        background-image: url(https://img.alicdn.com/tfs/TB1u1U9xmzqK1RjSZFHXXb3CpXa-64-180.png);
        background-position: 3px -30px;
        margin: 0 auto;
        width: 32px;
        height: 29px;
        background-size: 100%;
        &.service {
          background-position: 3px -30px;
        }
        &.damai {
          background-position: 0 0px;
        }
        &.totop {
          background-position: 4px -63px;
        }
      }
      p:hover {
        color: #ff1268;
      }
    }
  }
}
</style>
