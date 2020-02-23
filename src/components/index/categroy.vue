<template>
  <div class="categroy">
    <a href="#" class="category-list" v-for="(item,index) in categroy" :key="index">
      <span class="category-icon" :class="item.type"></span>
      <p>{{ item.info }}</p>
    </a>
    <!-- <a href="#" class="category-list">
      <span class="category-icon category-icon-hjgj"></span>
      <p>话剧歌剧</p>
    </a>
    <a href="#" class="category-list">
      <span class="category-icon category-icon-ty"></span>
      <p>体育</p>
    </a>
    <a href="#" class="category-list">
      <span class="category-icon category-icon-etqz"></span>
      <p>儿童亲子</p>
    </a>
    <a href="#" class="category-list">
      <span class="category-icon category-icon-zhxx"></span>
      <p>展览休闲</p>
    </a>-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      categroy: [
        {
          type: 'category-icon-ych',
          info: '演唱会'
        },
        {
          type: 'category-icon-hjgj',
          info: '话剧歌剧'
        },
        {
          type: 'category-icon-ty',
          info: '体育'
        },
        {
          type: 'category-icon-etqz',
          info: '儿童亲子'
        },
        {
          type: 'category-icon-zlxx',
          info: '展览休闲'
        },
        {
          type: 'category-icon-yyh',
          info: '音乐会'
        },
        {
          type: 'category-icon-qyzt',
          info: '曲苑杂坛'
        },
        {
          type: 'category-icon-wdbl',
          info: '舞蹈芭蕾'
        },
        {
          type: 'category-icon-ecy',
          info: '二次元'
        },
        {
          type: 'category-icon-lyzl',
          info: '旅游展览'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.categroy {
  margin-top: 15px !important;
  padding: 8px 0;
  width: 1200px;
  height: 118px;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  .category-list {
    color: #000;
    float: left;
    display: block;
    width: 120px;
    text-align: center;
    text-decoration: none;
    .category-icon {
      display: block;
      width: 48px;
      height: 48px;
      margin: 0 auto;
      background: url(//img.alicdn.com/tfs/TB1U9R8GY9YBuNjy0FgXXcxcXXa-146-1822.png)
        no-repeat;
      background-size: 100% auto;
      &.category-icon-ych {
        background-position: 0 0;
      }
      &.category-icon-hjgj {
        background-position: 0 -64px;
      }
      &.category-icon-ty {
        background-position: 0 -120px;
      }
      &.category-icon-etqz {
        background-position: 0 -180px;
      }
      &.category-icon-zlxx {
        background-position: 0 -240px;
      }
      &.category-icon-yyh {
        background-position: 0 -297px;
      }
      &.category-icon-qyzt {
        background-position: 0 -360px;
      }
      &.category-icon-wdbl {
        background-position: 0 -420px;
      }
      &.category-icon-ecy {
        background-position: 0 -480px;
      }
      &.category-icon-lyzl {
        background-position: 0 -540px;
      }
    }
  }
}
</style>
