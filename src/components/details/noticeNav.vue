<template>
  <div class="notice-nav">
    <el-tabs type="border-card" class="nav-item active">
      <el-tab-pane>
        <span slot="label" class="nav-item active">项目详情</span>
        <div class="list">
          <div class="title">演出介绍</div>
          <div class="words">
            <div v-for="(item,index) in introduce" :key="index">
              <span>{{ item.title }}</span>
              <div>
                <img :src="item.img" alt>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label" class="nav-item">购票须知</span>
        <div class="list">
          <div class="title">购票须知</div>
          <div class="words">
            <div>
              <p class="item-title">限购规则</p>
              <span>每笔订单最多购买6张</span>
            </div>
            <div>
              <p class="item-title">我购买后是否可以退换票？</p>
              <span>票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理</span>
            </div>
            <div>
              <p class="item-title">下单成功后，是否允许修改配送信息？</p>
              <span>本项目支付成功后不支持修改配送地址，请您在下单前务必确认您的收货信息准确</span>
            </div>
            <div>
              <p class="item-title">入场规则</p>
              <span>须携带纸质门票验票入场。</span>
            </div>
            <div>
              <p class="item-title">儿童购票</p>
              <span>1.2米以上凭成人票入场，1.2米以下谢绝入场</span>
            </div>
            <div>
              <p class="item-title">我要怎么开发票</p>
              <span>如需发票请您在支付时通过订单页申请开票，发票将在项目结束后1个月左右寄送至您预留的快递地址</span>
            </div>
            <div>
              <p class="item-title">实名购票规则</p>
              <span>一个订单对应一个证件；证件支持：台湾居民来往大陆通行证/护照/身份证/港澳居民来往内地通行证</span>
            </div>
            <div>
              <p class="item-title">异常行为说明</p>
              <span>对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形： （1）通过同一ID订购超出限购张数的订单； （2）经合理判断认为非真实消费者的下单行为，如：使用机器人软件、蜘蛛软件、爬虫软件或人工众包方式刷票等。（3）通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单等</span>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label" class="nav-item">观演须知</span>
        <div class="list">
          <div class="title">观演须知</div>
          <div class="words">
            <div>
              <p class="item-title">演出时长</p>

                <span>约90分钟（以现场为准）</span>

            </div>
            <div>
              <p class="item-title">入场时间</p>

                <span>请于开始前约90分钟入场</span>

            </div>
            <div>
              <p class="item-title">最低演出曲目</p>

                <span>5首</span>

            </div>
            <div>
              <p class="item-title">主要演员</p>

                <span>高嘉朗</span>

            </div>
            <div>
              <p class="item-title">最低演出时长</p>

                <span>90分钟</span>

            </div>
            <div>
              <p class="item-title">禁止携带物品</p>

                <span>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合。</span>

            </div>
            <div>
              <p class="item-title">寄存说明</p>

                <span>有寄存处,位于场馆存包处</span>

            </div>
            <div>
              <p class="item-title">大麦网初始开售时全场可售门票总张数</p>

                <span>暂无</span>

            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import api from '@/api/getData'
export default {
  data () {
    return {
      introduce: [
        {
          title:
            '自2012年出道至今，高嘉朗以爽朗的笑容、独特的嗓音及干净阳光的外表，获得了广大粉丝的支持，并透过各种不同类型的综艺节目，让大众见识到一个多才多艺又欢脱爽朗的大男孩。专辑上线、EP解锁、新歌发布……高嘉朗一直坚持梦想，不忘初心，在音乐的追梦路上不停奔跑，与大家共同前行。',
          img:
            '//img.alicdn.com/imgextra/i2/2251059038/O1CN01O21uuC2GdSDgyK5IC_!!2251059038.png_q60.jpg_.webp'
        },
        {
          title:
            '成长不期而遇，生日如期而至。2020年1月12日高嘉朗将迎来自己的27岁生日。他将在M空间举办一场个人生日会，唱自己的音乐，和陪伴着自己的人，一起度过这个特别而又重要的日子。',
          img:
            '//img.alicdn.com/imgextra/i2/2251059038/O1CN01lXm7pf2GdSDc4b3gy_!!2251059038.png_q60.jpg_.webp'
        },
        {
          title:
            '本次生日会主题以高嘉朗发布的同名歌曲"I Need You"命名。《I Need You》对于高嘉朗可谓意义非凡，不仅是他个人的原创音乐，还是他在《创造营2019》个人舞台秀演唱的歌曲，他也因这首歌曲收获了众多粉丝的支持与鼓励。《创造营2019》是一个改变高嘉朗梦想轨迹的综艺，但这些改变，不单单只是因为一个平台，最为重要的是这过程中不断给他输送能量的粉丝们。在结束比赛后，高嘉朗将这首歌曲重新编曲制作，并作为一份礼物，送给一直支持自己的粉丝们，谢谢他们陪着自己翻越寒冬，走过暖春，迎来盛夏的蝉鸣。生日会以此命名，高嘉朗意在表达除了要和粉丝们一起聚会同欢之外，这更是他【回顾】与【感谢】的一个机会，回顾出道以来的点点滴滴，并感谢粉丝朋友们一直以来的支持及力挺。',
          img:
            '//img.alicdn.com/imgextra/i1/2251059038/O1CN01zQzFk92GdSDfWsqKq_!!2251059038.png_q60.jpg_.webp'
        }
      ]
    }
  },
  created () {
    api.getNoticeNav().then(res => {
      this.introduce = res.data.introduce
    })
  }
}
</script>
<style lang="scss" scoped>
.notice-nav {
  height: 54px;
  line-height: 54px;
  padding-left: 30px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  .nav-item {
    position: relative;
    font-size: 16px;
    color: #000;
    margin-right: 60px;
    cursor: pointer;
    &.active {
      font-size: 22px;
    }
  }
  .list {
    padding: 60px 30px 0;
    // border: 1px solid blue;
    .title {
      padding-bottom: 14px;
      margin-bottom: 23px;
      font-size: 20px;
      color: #000;
      border-bottom: 1px solid #e2e2e2;
    }
    .words {
      margin: 0;
      padding: 0;
      word-break: break-word;
      span {
        font-size: 16px;
        color: #4a4a4a;
      }
      img {
        padding: 30px 0;
        max-width: 100%;
        height: auto;
      }
      .item-title {
        color: #999;
        font-size: 13px;
        margin-bottom: -32px;
      }
      span {
        padding-bottom: 15px;
        font-size: 16px;
        color: #4a4a4a;
      }
    }
  }
}
</style>
