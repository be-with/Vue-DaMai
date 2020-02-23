<template>
  <div class="m-footer">
    <div class="footer_nav">
      <el-row>
        <ul class="footer__links">
          <li class="footer__links__list">
            <a href="#">帮助中心</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">公司介绍</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">品牌识别</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">公司大事记</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">协议及隐私权政策</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">廉正举报</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">联系合作</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">招聘信息</a>
          </li>
          <li class="footer__links__grep">|</li>

          <li class="footer__links__list">
            <a href="#">防骗秘籍</a>
          </li>
        </ul>
      </el-row>
    </div>

    <div class="footer__info">
      <el-row>
        <el-col :span="10">
          <div class="footer_fl">
            <img
              class="logo"
              src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png"
            >
            <div class="footer__code__box">
              <img
                class="footer__code app"
                src="//img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg"
                alt
              >
              <span class="app_download">APP下载</span>
            </div>
            <div class="footer__code__box">
              <img
                class="footer__code android"
                src="https://gw.alicdn.com/tfs/TB13bf8qhD1gK0jSZFsXXbldVXa-280-280.png"
              >
              <span>体验版下载(仅限安卓)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <el-row>
            <div class="online_service">
              <el-button type="danger" round>在线客服</el-button>
            </div>
          </el-row>
          <el-row>
            <ul class="footer__ft__words">
              <li class="footer__ft__certificate">京ICP证031057号</li>
              <li class="footer__ft__grep">|</li>
              <li class="footer__ft__certificate">京ICP备11043884号</li>
              <li class="footer__ft__grep">|</li>
              <li class="footer__ft__certificate">京公网安备11010502037341号</li>
              <li class="footer__ft__grep">|</li>
              <li class="footer__ft__certificate">广播电视节目制作经营许可证(京)字第02253号</li>
            </ul>
            <ul class="footer__ft__words">
              <li class="footer__ft__certificate">网络文化经营许可证 京网文[2019]4082-420号</li>
              <li class="footer__ft__grep">|</li>
              <li class="footer__ft__certificate">营业性演出许可证京市演587号</li>
            </ul>
            <ul class="footer__ft__words">
              <li class="footer__ft__certificate">北京红马传媒文化发展有限公司 版权所有</li>
              <li class="footer__ft__certificate">大麦网</li>
              <li>Copyright 2003-2019 All Rights Reserved</li>
            </ul>
            <ul class="footer__ft__words">
              <li>举报投诉邮箱：damai_tousu@member.alibaba.com</li>
            </ul>
            <ul class="footer__ft__words">
              <li>违法不良信息举报电话：020-62108294</li>
            </ul>
          </el-row>
          <el-row>
            <div class="footer__ft__img">
              <img
                class="footer__ft__img1"
                src="//img.alicdn.com/tfs/TB1ZO80pyOYBuNjSsD4XXbSkFXa-141-41.png"
              >
              <img
                src="//img.alicdn.com/tfs/TB1Y580pyOYBuNjSsD4XXbSkFXa-83-50.png"
                class="footer__ft__img2"
              >
              <img
                src="//img.alicdn.com/tfs/TB1pM_ZxNWYBuNjy1zkXXXGGpXa-114-40.png"
                class="footer__ft__img3"
              >
              <img
                class="footer__ft__img4"
                src="//img.alicdn.com/tfs/TB1C4nNxTlYBeNjSszcXXbwhFXa-114-42.png"
              >
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.m-footer {
  background-color: #f8f8f8;
  .footer_nav {
    width: 1200px;
    margin: 0 auto;
    // border: 1px solid red;
    height: 91px;
    .footer__links {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 36px 0;
      text-align: center;
      zoom: 1;
      li {
        list-style: none;
        margin-top: -7px;
      }
      .footer__links__list {
        margin-left: 30px;
        margin-right: 30px;
        a {
          text-decoration: none;
          font-size: 13px;
          color: #111;
          margin-top: 10px;
        }
      }
    }
  }
  .footer__info {
    width: 1200px;
    margin: 0 auto;
    // border: 1px solid red;
    height: 269px;
    .el-col-10 .footer_fl {
      width: 500px;
      // border: 1px solid purple;
      height: 133px;
      margin-top: 20px;
      .logo {
        transform: translateY(-38px);
        margin-left: 25px;
      }
      .footer__code__box {
        width: 87px;
        margin-left: 20px;
        text-align: center;
        display: inline-block;
        .footer__code {
          display: block;
          width: 87px;
          height: 87px;
          margin-bottom: 6px;
          &.android {
            transform: translateY(12px);
          }
          &.app {
            transform: translateY(-8px);
          }
        }
        span {
          font-size: 14px;
          &.app_download {
            vertical-align: top;
            padding-top: 5px;
          }
        }
      }
    }
    .online_service {
      height: 37px;
      margin-top: 30px;
      margin-left: -40px;
      .el-button--danger {
        height: 27px;
        line-height: 3px;
        background-color: #ff1268;
      }
    }
    .footer__ft__words {
      width: 769px;
      height: 23px;
      // border: 1px solid chartreuse;
      margin-left: -79px;
      margin-top: -8px;
      margin-bottom: 8px;
      li {
        list-style: none;
        float: left;
        font-size: 12px;
        color: #111;
        margin-right: 10px;
        line-height: 23px;
        text-align: center;
      }
    }
    .footer__ft__img {
      .footer__ft__img1 {
        width: 122px;
        height: 30px;
      }
      .footer__ft__img2 {
        width: 49px;
        height: 30px;
      }
      .footer__ft__img4 {
        width: 85px;
        height: 30px;
      }
    }
  }
}
</style>
