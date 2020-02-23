import axios from 'axios'

var api = {
  // 搜索框列表获取
  getSearchList () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/getSearchList')
  },
  // 热门搜索获取
  getHotSinger () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/hotSinger')
  },
  getSwiper () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/swiper')
  },
  getContent () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/content')
  },
  getSort () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/sort')
  },
  getNoticeNav () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/noticeNav')
  },
  getRightItem () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/rightItem')
  },
  getLikeList () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/likeList')
  },
  getLogin (params) {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/login', params)
  },
  getRegister (params) {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/register')
  },
  // 相关度排序
  getSearch () {
    return axios.get('http://rap2api.taobao.org/app/mock/240066/search')
  }

}

export default api
