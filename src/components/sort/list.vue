<template>
  <el-tabs type="border-card">
    <el-tab-pane label="相关度排序">
      <list-item :list="related"/>
    </el-tab-pane>
    <el-tab-pane label="推荐排序">
      <list-item :list="recommend"/>
    </el-tab-pane>
    <el-tab-pane label="最近开场">
      <list-item :list="recent"/>
    </el-tab-pane>
    <el-tab-pane label="最新上架">
      <list-item :list="newsList"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import listItem from './listItem'
import api from '@/api/getData.js'
export default {
  components: {
    listItem
  },
  data () {
    return {
      related: [],
      recommend: [],
      recent: [],
      newsList: []
    }
  },
  created () {
    api.getSearch().then(res => {
      console.log(res.data)
      this.related = res.data.related
      this.recommend = res.data.recommend
      this.recent = res.data.recent
      this.newsList = res.data.newsList
    })
  }
}
</script>
