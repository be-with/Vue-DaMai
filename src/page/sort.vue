<template>
  <div class="sort-page">
    <el-col :span="18">
      <el-row class="m-crumbs">
        <crumbs/>
      </el-row>
      <el-row class="search-factory">
        <search-box/>
      </el-row>
      <el-row class="search-sort">
        <list/>
      </el-row>
    </el-col>
    <el-col :span="6" class="search-like">
      <div class="title">您可能还喜欢</div>
      <right-item :info="likeList"/>
    </el-col>
  </div>
</template>
<script>
import crumbs from '@/components/sort/crumbs'
import searchBox from '@/components/sort/searchBox'
import list from '@/components/sort/list'
import rightItem from '@/components/details/rightItem'
import api from '@/api/getData'
export default {
  components: {
    crumbs,
    searchBox,
    list,
    rightItem
  },
  data () {
    return {
      likeList: [
      ]
    }
  },
  created () {
    api.getLikeList().then(res => {
      this.likeList = res.data.likeList
    })
  }
}
</script>
<style lang="scss" scoped>
.sort-page {
  width: 1200px;
  min-height: 600px;
  margin: 0 auto;
  color: #333;
  .m-crumbs {
    line-height: 50px;
    color: #666;
    font-size: 14px;
  }
  .search-factory {
    padding: 0 24px;
    border: 1px solid #e9e9e9;
    margin-top: 15px;
  }
  .search-sort {
    border: 1px solid #e9e9e9;
    margin-top: 10px;
  }
  .search-like {
    width: 258px;
    border: 1px solid #eaeaea;
    margin-left: 10px;
    max-height: 514px;
    margin-top: 29px;
    .title {
      height: 37px;
      line-height: 37px;
      background-color: #f5f5f5;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #000;
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }
}
</style>
