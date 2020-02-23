<template>
  <div class="service">
    <div class="seat-map">
      <el-popover placement="top-start" width="200" trigger="hover" content="抱歉，暂未支持此功能">
        <el-button slot="reference">查看座位图</el-button>
      </el-popover>
    </div>
    <div class="service-note">
      <div class="note-name">
        <i></i>不支持退
      </div>
      <div class="note-desc">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理</div>
    </div>

    <div class="service-note">
      <div class="note-name">
        <i></i>不支持选座
      </div>
      <div class="note-desc">本项目不支持自主选座，同一个订单优先连座</div>
    </div>

    <div class="service-note">
      <div class="note-name">
        <i class="support-yes"></i>快递票
      </div>
      <div
        class="note-desc"
      >快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅3天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息为准）</div>
    </div>

    <div class="service-note">
      <div class="note-name">
        <i class="support-yes"></i>纸质发票
      </div>
      <div class="note-desc">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</div>
    </div>

    <div class="service-code">
      <div class="code-text">
        <span>手机扫一扫</span>
        <span>下单更快捷</span>
      </div>
      <img
        src="https://damai-item.oss-cn-beijing.aliyuncs.com/projQcode/6097291094/2/609729109434.jpg"
        alt
      >
    </div>

    <div class="suggest">
      <div class="title">为你推荐</div>
      <right-item :info="recommendList"/>
    </div>
  </div>
</template>
<script>
import rightItem from './rightItem'
import api from '@/api/getData'
export default {
  components: {
    rightItem
  },
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    api.getRightItem().then(res => {
      // console.log(res.data.info)
      this.recommendList = res.data.info
    })
  }
}
</script>
<style lang="scss" scoped>
.service {
  padding: 24px 15px;
  background: #fafafa;
  border: 1px solid #ebebeb;
  .seat-map {
    display: block;
    .el-button {
      width: 251px;
      background-color: #ff2d79;
      margin-bottom: 24px;
      height: 35px;
      font-size: 12px;
      text-align: center;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;

      border-radius: 36px;
    }
  }
  .service-note {
    margin-bottom: 18px;
    .note-name {
      font-size: 14px;
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-repeat: no-repeat;
        background-image: url(https://img.alicdn.com/tfs/TB1d7mWRMHqK1RjSZFEXXcGMXXa-24-26.png);
        background-size: 12px 12px;
        margin-right: 5px;
        &.support-yes {
          background-image: url(https://img.alicdn.com/tfs/TB1b7uJRSrqK1RjSZK9XXXyypXa-24-24.png);
        }
      }
    }
    .note-desc {
      margin-top: 6px;
      font-size: 12px;
      color: #999;
    }
  }
  .service-code {
    display: flex;
    margin-top: 30px;
    border: 0.5px solid #e2e2e2;
    background: #fff;
    .code-text {
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
    img {
      height: 90px;
    }
  }
  .suggest{
    width: 283px;
    margin-top: 60px;
    .title{
      margin-bottom: 24px;
      font-size: 20px;
      color: #000;
      line-height: 28px;
    }
  }
}
</style>
