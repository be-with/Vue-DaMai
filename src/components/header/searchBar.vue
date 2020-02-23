<template>
  <div class="search-bar">
    <div class="wrapper">
      <i class="el-icon-search"></i>
      <el-input
        v-model="searchword"
        placeholder="搜索明星、演出、体育赛事"
        @focus="focus"
        @blur="blur"
        @input="input"
      ></el-input>
      <el-button type="primary">搜索</el-button>
      <dl class="hotSinger" v-if="isHotSinger">
        <dt>热门搜索</dt>
        <dd v-for="(item,index) in hotSinger" :key="index">
          <router-link :to="{name:'sort', params: {name: item}}">{{ item }}</router-link>
        </dd>
      </dl>

      <dl class="singerList" v-if="isSingerList">
        <dd v-for="(item,index) in singerList" :key="index">
          <router-link :to="{name:'sort', params: {name: item}}">{{ item }}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import api from '@/api/getData.js'
export default {
  data () {
    return {
      searchword: '',
      isFocus: false,
      hotSinger: [],
      singerList: []
    }
  },
  created () {
    api.getHotSinger().then(res => {
      this.hotSinger = res.data.data
    })
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      let val = this.searchword
      api.getSearchList().then(res => {
        this.singerList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1
        })
      })
    }
  },
  computed: {
    isHotSinger: function () {
      return this.isFocus && !this.searchword
    },
    isSingerList: function () {
      return this.isFocus && this.searchword
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 60%;
  height: 44px;
  margin-top: 26px;
  margin-left: 102px;
  .wrapper {
    width: 401px;
    height: 44px;
    box-sizing: content-box;
    position: relative;
    white-space: nowrap;
    border-radius: 46px;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    i {
      width: 17px;
      margin-left: 10px;
    }
    .el-input {
      width: 355px;
      .el-input__inner {
        border: none;
        background: #f8f8f8;
        height: 44px;
      }
    }
    .el-button {
      width: 88px;
      height: 40px;
      border: none;
      background: #ff1268;
      font-size: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      vertical-align: -1px;
      border-top-right-radius: 46px;
      border-bottom-right-radius: 46px;
      margin-left: -6px;
    }
    .hotSinger {
      position: absolute;
      top: 27px;
      left: 29px;
      background: #fff;
      padding: 4px;
      font-size: 12px;
      width: 358px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-top: none;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      dt {
        color: #999;
        font-weight: bold;
      }

      dd {
        display: inline-block;
        margin-left: 9px;
        margin-right: 10px;
        margin-bottom: 3px;
        margin-top: 5px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #666;
          &:hover {
            color: #ff1268;
          }
        }
      }
    }
    .singerList {
      position: absolute;
      top: 27px;
      left: 29px;
      background: #fff;
      padding: 4px;
      font-size: 12px;
      width: 358px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-top: none;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      dt {
        color: #999;
        font-weight: bold;
      }

      dd {
        margin-left: 9px;
        margin-right: 10px;
        margin-bottom: 3px;
        margin-top: 5px;
        margin: 0;
        padding: 3px 10px;
        display: block;
        line-height: 1.6;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #666;
          &:hover {
            color: #ff1268;
          }
        }
      }
    }
  }
}
</style>
