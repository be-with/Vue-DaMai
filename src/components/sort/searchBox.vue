<template>
  <div>
    <div class="factor-item">
      <span class="factor-title">城 市：</span>
      <div class="factor-content">
        <div class="factor-selected">
          当前选中城市
          <span class="factor-selected-city">全国</span>
        </div>
        <div class="factor-content-main">
          <span class="factor-content-item default">全部</span>
          <div class="factor-content">
            <span
              class="factor-content-item"
              v-for="(item,index) in cityList"
              :key="index"
              :data-type="item.type"
              :class="{'active':type===item.type}"
              @click="handle"
            >{{ item.city }}</span>
          </div>
          <!---->
        </div>
      </div>
    </div>

    <div class="factor-item">
      <span class="factor-title">分 类：</span>
      <div class="factor-content">
        <div class="factor-content-main">
          <span class="factor-content-item default">全部</span>
          <div class="factor-content">
            <span
              class="factor-content-item"
              v-for="(item,index) in typeList"
              :key="index"
              :class="{'active':tab===item.tab}"
              :data-tab="item.tab"
              @click="handleClick"
            >{{ item.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityList: [
        {
          city: '北京',
          type: 'beijing'
        },
        {
          city: '上海',
          type: 'shanghai'
        },
        {
          city: '天津',
          type: 'tianjin'
        },
        {
          city: '深圳',
          type: 'shenzhen'
        }
      ],
      typeList: [
        {
          type: '音乐会',
          id: '01',
          tab: 'yyh'
        },
        {
          type: '歌剧话剧',
          id: '02',
          tab: 'gjhj'
        },
        {
          type: '演唱会',
          id: '03',
          tab: 'ych'
        },
        {
          type: '曲苑杂坛',
          id: '04',
          tab: 'qyzt'
        },
        {
          type: '展览休闲',
          id: '05',
          tab: 'zlxx'
        },
        {
          type: '舞蹈芭蕾',
          id: '06',
          tab: 'wdbl'
        },
        {
          type: '体育',
          id: '07',
          tab: 'ty'
        },
        {
          type: '儿童亲子',
          id: '08',
          tab: 'etqz'
        },
        {
          type: '旅游演艺',
          id: '09',
          tab: 'lyyy'
        }
      ],
      tab: '',
      type: ''
    }
  },
  methods: {
    handleClick (e) {
      this.tab = e.target.getAttribute('data-tab')
      alert('暂不支持此功能！')
    },
    handle (e) {
      this.type = e.target.getAttribute('data-type')
      alert('暂不支持此功能！')
    }
  }
}
</script>
<style lang="scss" scoped>
.factor-item {
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px dotted #dfdfdf;
  .factor-title {
    width: 80px;
    color: #968788;
    text-align: right;
    margin-right: 18px;
    line-height: 26px;
  }
  .factor-content {
    flex: 1;
    .factor-selected {
      color: #9b9b9b;
      margin-bottom: 6px;
      .factor-selected-city {
        display: inline-block;
        height: 26px;
        padding: 0 8px;
        margin-left: 6px;
        text-align: center;
        line-height: 26px;
        color: #fff;
        background-color: #ed0b75;
      }
    }
    .factor-content-main {
      display: flex;
      .factor-content-item {
        &.default {
          background-color: #ed0b75;
          color: #fff;
          margin-right: 6px;
          height: 26px;
          line-height: 26px;
          padding: 0 6px;
        }
        &.active{
          background-color: #ed0b75;
          color: #fff;
        }
      }
      .factor-content {
        span {
          display: inline-block;
          height: 26px;
          line-height: 26px;
          padding: 0 8px;
          margin-right: 24px;
          color: #333;
          white-space: nowrap;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
