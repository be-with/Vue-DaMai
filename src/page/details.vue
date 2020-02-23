<template>
  <div class="sort">
    <div class="perform">
      <div class="content-left">
        <div class="content-head" v-for="(item,index) in performInfo" :key="index">
          <div class="cover">
            <span class="tip">总票代</span>
            <img
              alt
              class="poster"
              :src="item.coverSrc"
            >
          </div>
          <div class="order">
            <div class="title">
              <span>{{ item.title }}</span>
            </div>
            <div class="address">
              <div class="time">{{ item.time }}</div>
              <div class="place">
                <div class="addr">{{ item.addr }}</div>
                <a class="mapicon">
                  <i class="el-icon-location-information"></i>
                </a>
              </div>
            </div>
            <div class="notice">
              <div class="notice-prefix">预售</div>
              <div>
                <div>本商品为预售商品，正式开票后将第一时间为您配票</div>
                <div
                  class="notice-detail"
                >预售期间，由于主办未正式开票，下单后无法立即为您配票。一般于演出前2-6周开票，待正式开票后，请您通过订单详情页或者票夹详情，查看票品信息、取票方式等演出相关信息</div>
              </div>
            </div>
            <div class="buy-ticket">
              <div class="perform-time">
                <img
                  src="//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png"
                  class="perform-time-icon"
                >
                场次演出时间均为演出当地时间
              </div>
              <div class="perform-select">
                <div class="select-left">场次</div>
                <div class="select-right">
                  <div class="list-item">
                    <span class="presell">{{ item.presell.title }}</span>
                    <span>{{ item.presell.time }}</span>
                  </div>
                </div>
              </div>
              <div class="ticket-select">
                <select-right :ticket="item.tickSelect"/>
              </div>
            </div>
          </div>
        </div>
        <div class="content-notice">
          <notice-nav></notice-nav>
        </div>
      </div>
      <div class="content-right">
        <service/>
      </div>
    </div>
  </div>
</template>
<script>
import selectRight from '@/components/details/selectRight'
import noticeNav from '@/components/details/noticeNav'
import service from '@/components/details/service'
import api from '@/api/getData'
export default {
  components: {
    selectRight,
    noticeNav,
    service
  },
  data () {
    return {
      performInfo: []
    }
  },
  created () {
    api.getSort().then(res => {
      // console.log(res.data.performInfo)
      this.performInfo = res.data.performInfo
    })
  },
  methods: {
    handleClick (e) {
      // console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  margin-bottom: 64px;
  .perform {
    width: 1252px;
    // border: 1px solid #000;
    display: flex;
    margin: 0 auto;
    .content-left {
      flex: 1;
      .content-head {
        position: relative;
        padding: 40px 0 60px;
        min-height: 360px;
        font-size: 22px;
        color: #000;
        .cover {
          .tip {
            position: absolute;
            left: 28px;
            width: 60px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background: linear-gradient(-45deg, #ff1268, #ff5593);
            z-index: 9999;
            font-size: 14px;
            color: #fff;
            border-bottom-right-radius: 10px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
          }
          .poster {
            position: absolute;
            width: 270px;
            height: 360px;
            left: 30px;
            top: 40px;
          }
        }
        .order {
          width: 550px;
          height: 780px;
          min-height: 400px;
          padding-right: 30px;
          margin-left: 315px;
          // border: 1px solid red;
          .address {
            font-size: 16px;
            color: #4a4a4a;
            margin-top: 21px;
            zoom: 1;
            .time {
              padding-bottom: 10px;
            }
            .place {
              .addr {
                display: inline-block;
              }
              .mapicon {
                margin-left: 15px;
                cursor: pointer;
                width: 24px;
                height: 24px;
                vertical-align: middle;
              }
            }
          }
          .notice {
            margin-top: 18px;
            padding: 12px 15px;
            font-size: 12px;
            background: #f6f6f6;
            border-radius: 4px;
            position: relative;
            .notice-prefix {
              display: inline-block;
              height: 24px;
              line-height: 23px;
              text-align: center;
              padding: 0 7px;
              color: #ff1268;
              background: #ffe7ef;
              border-radius: 0 100px 100px 0;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .notice-detail {
              color: #999;
            }
          }
          .buy-ticket {
            .perform-time {
              color: #999;
              font-size: 12px;
              margin: 24px 0 9px;
              .perform-time-icon {
                position: relative;
                top: 2px;
                width: 14px;
                height: 14px;
                margin-right: 3px;
              }
            }
            .perform-select {
              display: flex;
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
                  position: relative;
                  display: flex;
                  float: left;
                  font-size: 12px;
                  border: 1px solid #fff;
                  outline: 1px solid #e2e2e2;
                  padding: 12px 24px;
                  margin: 0 6px 6px 0;
                  cursor: pointer;
                  text-align: center;
                  border-color: #ffeaf1;
                  color: #ff1268;
                  background: #ffeaf1;
                  outline-color: #ffeaf1;
                  .presell {
                    display: block;
                    position: absolute;
                    top: -1px;
                    left: -1px;
                    background-color: #ff2d79;
                    color: #fff;
                    text-align: center;
                    padding: 0 4px;
                    border-bottom-right-radius: 5px;
                  }
                }
              }
            }
          }
          .ticket-select {
            margin-top: 15px;
          }
        }
      }
      .content-notice {
        width: 896px;
        height: 3034px;
        // border: 1px solid red;
      }
    }
    .content-right {
      padding: 40px 18px 0;
    }
  }
}
</style>
