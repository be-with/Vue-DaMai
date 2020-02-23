<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-img">
          <span class="tag">{{ item.tag }}</span>
          <img
            :src="item.img"
            alt
          >
        </div>
        <div class="item-txt">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-time">{{ item.singer }}</div>
          <div class="item-time">
            <i class="icon-addr"></i>
            {{ item.addr }}
          </div>
          <div class="item-time">
            <i class="icon-time"></i>
            {{ item.time }}
          </div>
          <div class="item-price">
            <span>
              {{ item.price }}
              <i class="price" :class="{'active':item.price === '价格待定'}">元</i>
            </span>
            {{ item.sell }}
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: [
    'list'
  ]
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding: 25px 0 18px;
  margin: 0 10px;
  .item-img {
    position: relative;
    display: block;
    width: 153px;
    height: 206px;
    overflow: hidden;
    margin-right: 20px;
    float: left;
    .tag {
      position: absolute;
      top: 10px;
      left: 10px;
      background: #ff1268;
      font-size: 12px;
      color: #fff;
      padding: 2px 4px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item-txt {
    width: 680px;
    line-height: 24px;
    font-size: 14px;
    .item-title {
      font-size: 16px;
      margin-bottom: 6px;
      font-size: 16px;
      font-weight: 400;
    }
    .item-time {
      margin-bottom: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #999;
      i {
        background: url(https://img.alicdn.com/tfs/TB1981syYGYBuNjy0FoXXciBFXa-36-323.png)
          no-repeat;
        &.icon-addr {
          background-position: 0 -82px;
          padding-left: 17px;
        }
        &.icon-time {
          width: 14px;
          height: 14px;
          margin-top: 5px;
          cursor: text;
          display: block;
          float: left;
          margin-right: 5px;
          background-position: 0 -47px;
        }
      }
    }
    .item-price {
      margin-top: 68px;
      color: #999;
      overflow: hidden;
      .price{
          &.active{
              display: none;
          }
      }
      > span {
        color: #ff1268;
        font-weight: 700;
        font-size: 16px;
        margin-right: 20px;
        font-style: normal;
        > i {
          font-style: normal;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
