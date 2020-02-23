<template>
  <div class="ticket">
    <span class="select-left">票档</span>
    <div class="select-right">
      <div
        class="list-item"
        :class="{active:item.isNoTicket}"
        v-for="(item, index) in ticket"
        :key="index"
        @click="handleClick"
        :data-price="item.price"
      >
        <span class="notticket" :class="{active:item.isNoTicket}" v-if="item.isNoTicket">缺货登记</span>
        <div class="price">{{ item.price }}</div>
      </div>
    </div>

    <div class="infomation" v-show="showInfomation">
      <div class="ticket-info">按付款顺序配票，优先连座配票</div>
      <div class="tips">
        <img src="//img.alicdn.com/tfs/TB1mX78MCzqK1RjSZFpXXakSXXa-24-24.png" class="tips-icon">
        <span
          class="tips-content"
        >请下载大麦APP，为了方便有票时能按照登记顺序通知您，请您提交申请后，确认已允许大麦APP发送通知；若补票，客户端将发送通知消息给您；若始终缺货，将不做另行通知</span>
      </div>
    </div>
    <a href="#" v-show="showInfomation">
      <div class="buybtn">提交缺货登记</div>
    </a>

    <div class="order" v-show="showOrder">
      <div class="order-number">
        <div class="number-left">数量</div>
        <div class="number-right">
          <div class="right-info">
            <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="6" label="描述文字"></el-input-number> -->
            <button @click="btnClick" class="reduce" :disabled="reduceDisable">-</button>
            <div class="input-wrapper">
              <input type="text" v-model="ticketNum">
            </div>
            <button class="add" @click="btnClick" :disabled="addDisable">+</button>
          </div>
          <div class="right-limit">每笔订单限购6张</div>
        </div>
      </div>
      <div class="order-info">按付款顺序配票，优先连座配票</div>
    </div>

    <div class="order-total" v-show="showOrder">
      <div class="total-left">合计</div>
      <div class="total-right">
        <span class="totol-price">
          <i>￥</i>
          {{ totalPrice }}
        </span>
        <span class="total-offer">登录后查看是否享受优惠</span>
      </div>
    </div>
    <a href="#" v-show="showOrder">
      <div class="buybtn">立即预订</div>
    </a>
  </div>
</template>
<script>
export default {
  props: ['ticket'],
  data () {
    return {
      ticketNum: 1,
      showOrder: true,
      showInfomation: false,
      totalPrice: '00.00',
      targetDataset: '',
      targetText: '',
      reduceDisable: false,
      addDisable: false
    }
  },
  methods: {
    handleClick (e) {
      this.ticketNum = 1
      this.addDisable = false
      this.reduceDisable = false
      if (e.target.children.length >= 2) {
        this.showOrder = false
        this.showInfomation = true
      } else {
        this.showOrder = true
        this.showInfomation = false
        if (e.target.className === 'list-item') {
          this.targetDataset = e.target.dataset.price
          // console.log(e)
          if (this.targetDataset) {
            // console.log(this.targetDataset)
            this.totalPrice = this.targetDataset
            this.targetText = e.target.innerText
          }
        }
      }
    },
    btnClick (e) {
      if (e.target.className === 'add') {
        this.ticketNum++
        if (this.ticketNum === 6) {
          this.addDisable = true
        }
        this.totalPrice = this.ticketNum * this.targetDataset
      }
      if (e.target.className === 'reduce') {
        this.ticketNum--
        if (this.ticketNum === 1) {
          this.reduceDisable = true
        }
        this.totalPrice = this.ticketNum * this.targetDataset
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ticket {
  display: inline-block;
  .select-left {
    display: inline-block;
    font-size: 16px;
    color: #4a4a4a;
    height: 48px;
  }
  .select-right {
    display: inline-block;
    vertical-align: top;
    margin-left: 15px;
    flex: 1;
    .list-item {
      box-sizing: border-box;
      height: 75px;
      padding: 8px 24px 6px;
      float: left;
      font-size: 12px;
      border: 1px solid #fff;
      outline: 1px solid #e2e2e2;
      padding: 12px 24px;
      margin: 0 6px 6px 0;
      position: relative;
      cursor: pointer;
      text-align: center;
      &.active {
        border-color: #ffeaf1;
        color: #ff1268;
        background: #ffeaf1;
        outline-color: #ffeaf1;
      }
      .notticket {
        display: block;
        position: absolute;
        top: -1px;
        left: -1px;
        background-color: #d6d6d6;
        color: #fff;
        text-align: center;
        padding: 0 4px;
        border-bottom-right-radius: 5px;
        &.active {
          background-color: #ff1268;
        }
      }
      .price {
        margin: 15px 0;
      }
    }
  }
  .infomation {
    .ticket-info {
      margin-left: 46px;
      font-size: 12px;
      color: #999;
    }
    .tips {
      margin-left: 45px;
      margin-top: 28px;
      font-family: PingFangSC-Regular;
      color: #666;
      letter-spacing: 0.18px;
      line-height: 21px;
      .tips-icon {
        width: 12px;
        height: 12px;
        position: relative;
        top: 1px;
      }
      .tips-content {
        font-size: 12px;
      }
    }
  }
  .order {
    .order-number {
      margin-top: 33px;
      .number-left {
        display: inline-block;
        font-size: 16px;
        color: #4a4a4a;
        vertical-align: top;
        line-height: 40px;
      }
      .number-right {
        display: inline-block;
        height: 40px;
        vertical-align: top;
        margin-left: 9px;
        line-height: 40px;
        .right-info {
          position: relative;
          width: 120px;
          height: 38px;
          display: inline-block;
          line-height: 38px;

          button {
            border: none;
            width: 28px;
            height: 28px;
            color: #000;
            background: #f2f3f4;
            line-height: 28px;
            vertical-align: 20px;
            margin-left: 5px;
          }
          .input-wrapper {
            position: relative;
            margin:0;
            padding: 0;
            display: inline-block;
            width: 38px;
            height: 38px;
            top: -19px;
            input{
              height: 24px;
              width: 100%;
            }
          }
        }
        .right-limit {
          display: inline-block;
          font-size: 12px;
          color: #999;
          line-height: 22px;
          vertical-align: 15px;
        }
      }
    }
    .order-info {
      margin-top: 9px;
      margin-left: 46px;
      font-size: 12px;
      color: #999;
    }
  }
  .order-total {
    margin-top: 33px;
    .total-left {
      display: inline-block;
      font-size: 16px;
      color: #4a4a4a;
      vertical-align: top;
      line-height: 40px;
    }
    .total-right {
      display: inline-block;
      height: 40px;
      vertical-align: top;
      margin-left: 9px;
      line-height: 40px;
      .totol-price {
        font-size: 21px;
        color: #ff1268;
        margin-left: -9px;
        i {
          position: relative;
          left: 3px;
          font-size: 16px;
          font-style: normal;
        }
      }
      .total-offer {
        font-size: 12px;
        color: #999;
      }
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    .buybtn {
      margin-top: 30px;
      margin-left: 85px;
      width: 210px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #ff2d79;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      border-radius: 3px;
    }
  }
}
</style>
