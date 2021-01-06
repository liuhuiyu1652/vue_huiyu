// 该配置文件是用于配置往后罗请求需要的uri地址
// 集中管理地址, 效率高
const prefix = '/api'

export default {
  // 获取城市信息
  getCities: prefix + '/getCitiesInfo',
  // 获取正在热映列表
  getNowPlaying: prefix + '/getNowPlayingFilmList',
  // 获取即将上映地址
  getComingSoon: prefix + '/v1/getComingSoonFilmList'
}