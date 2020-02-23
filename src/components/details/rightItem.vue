<template>
  <div class="right-item">
    <div class="item" v-for="(item,index) in info" :key="index">
      <img
        :src="item.img"
        alt
        class="item-img"
      >
      <div class="item-info">
        <div class="item-info-main">
          <div class="item-info-name">{{ item.name }}</div>
          <div class="item-info-address">{{ item.address }}</div>
          <div class="item-info-date">{{ item.date }}</div>
        </div>
        <div class="item-info-price">
            <span class="price-number">
                ￥{{ item.price }}
            </span>
            起
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'info'
  ]
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  height: 160px;
  margin-bottom: 30px;
  cursor: pointer;
  .item-img {
    float: left;
    width: 120px;
    height: 100%;
  }
  .item-info {
    font-size: 12px;
    margin-left: 15px;
    font-family: '微软雅黑';
    .item-info-main {
      .item-info-name {
        overflow: hidden;
        font-size: 14px;
        color: #4a4a4a;
      }
      .item-info-address {
        margin-top: 12px;
        color: #9b9b9b;
      }
      .item-info-date {
        margin-top: 3px;
        color: #9b9b9b;
      }
    }
    .item-info-price{
        color: #ff1268;
        margin-top: 2px;
        .price-number{
            font-size: 16px;
        }
    }
  }
}
</style>
