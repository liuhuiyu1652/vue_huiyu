<template>
  <div>
    <div class="loanding" v-show="isLoading">
      <van-loading type="spinner" size='24px'>加载中...</van-loading>
    </div>

    <van-card
      v-for="item in list"
      :key="item.filmId"
    >
    <!-- 封面图片 -->
      <template #thumb>
        <img :src="item.poster" width="66">
      </template>
      <!-- 电影名称 -->
      <template #title>
        <div>
          <span class="name">{{item.name}}</span>
          <span class="item">{{item.filmType.name}}</span>
        </div>
      </template>
      <!-- 电影介绍 -->
      <template #desc>
        <div class="nowPlayingFilm-info">
            观众评分:
          <span class="grade">
            {{item.grade}}
          </span>
          <div>
            主演: {{item.actors | parseActors}}
          </div>
          <div>
            {{item.nation}} | {{item.runtime}} 分钟
          </div>
          <div>
            <div class="nowPlayingFilm-buy">购票</div>
          </div>
        </div>
      </template>
    </van-card>
  </div>
</template>
<script>
// 导入地址模块
import uri from '@/config/uri'
// 导入vant组件
import Vue from 'vue';
import { Loading, Toast, Card, tag } from 'vant';

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(tag);
export default {
  data() {
    return {
      list: [],
      isLoading: true,
    }
  },
  created() {
    this.$http.get(uri.getNowPlaying).then((ret) => {
      if (ret.status === 0) {
        // 请求成功
        this.list = ret.data.films
      } else {
        Toast.fail('网络繁忙');
      }
      // 数据加载完成, 去掉加载组件的显示
      this.isLoading = false
    })
  },
  // 过滤器
  filters: {
    parseActors(actors) {
      if (actors) {
        // 有主演
        var str = '';
        actors.forEach((el) => {
          str += el.name + '  '
        })
          return str.substr(0, 17) + '...'
      } else {
        // 没有主演
        str = '没有主演'
          return str
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// scoped 表示样式只在当前文件夹内生效, 不影响子组件
.loanding {
  text-align: center;
  margin-top: 5px;
  height: 40px;
  line-height: 40px;
  background-Color: #f5f5ff;
}
.name {
  max-width: calc(100% - 25px);
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item {
  font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.grade {
      color: #ffb232;
    font-size: 14px;
}
.van-card__thumb {
  margin-right: -10px;
}
.van-card {
  font-size: 13px;
  color: #797D82;
}
.nowPlayingFilm-info {
  position: relative;
}
.nowPlayingFilm-buy {
  width: 45px;
  height: 20px;
  border: 1px solid #ffad88;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffad88;
  position: absolute;
  right: 0;
  top: calc(50% - 20px);

}
</style>